import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ProductScrollAnimation.css';

const DESKTOP_TOTAL_FRAMES = 120;
const DESKTOP_BASE_PATH = '/product-frames/frame_';
const DESKTOP_EXT = '.jpg';

const MOBILE_TOTAL_FRAMES = 240;
const MOBILE_BASE_PATH = '/mobile-frames/frame_';
const MOBILE_EXT = '.jpg';

/**
 * Returns the URL for a 1-based frame index (e.g. frame_0001.jpg)
 */
const getFrameUrl = (index, isMobile) => {
  const padded = String(index).padStart(4, '0');
  const basePath = isMobile ? MOBILE_BASE_PATH : DESKTOP_BASE_PATH;
  const ext = isMobile ? MOBILE_EXT : DESKTOP_EXT;
  return `${basePath}${padded}${ext}`;
};

/**
 * Helper to determine if current viewport corresponds to mobile layout
 */
const checkIsMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || (window.innerWidth <= 991 && window.innerHeight >= window.innerWidth);
};

const ProductScrollAnimation = () => {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);

  const [isMobile, setIsMobile] = useState(() => checkIsMobile());
  const isMobileRef = useRef(isMobile);

  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  const desktopImagesRef = useRef(new Array(DESKTOP_TOTAL_FRAMES + 1));
  const mobileImagesRef = useRef(new Array(MOBILE_TOTAL_FRAMES + 1));

  const targetFrameRef = useRef(1);
  const currentRenderedFrameRef = useRef(1);

  const [isLoading, setIsLoading] = useState(true);

  /**
   * Helper to load and cache a specific frame image
   */
  const loadFrameImage = useCallback((index, forMobile) => {
    const cache = forMobile ? mobileImagesRef.current : desktopImagesRef.current;
    if (cache[index]) return cache[index];

    const img = new Image();
    img.src = getFrameUrl(index, forMobile);
    cache[index] = img;
    return img;
  }, []);

  /**
   * Draw a specific frame to the canvas with crisp scaling and proper centering
   */
  const renderFrame = useCallback((frameIndex, forMobile = isMobileRef.current) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cache = forMobile ? mobileImagesRef.current : desktopImagesRef.current;
    const totalFrames = forMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES;
    const safeIndex = Math.min(totalFrames, Math.max(1, frameIndex));

    // Retrieve target frame, or find the nearest loaded frame as fallback
    let img = cache[safeIndex];
    if (!img) {
      img = loadFrameImage(safeIndex, forMobile);
    }

    if (!img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = safeIndex - offset;
        if (prev >= 1 && cache[prev]?.complete && cache[prev]?.naturalWidth > 0) {
          img = cache[prev];
          break;
        }
        const next = safeIndex + offset;
        if (next <= totalFrames && cache[next]?.complete && cache[next]?.naturalWidth > 0) {
          img = cache[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    if (canvas.width !== Math.floor(width * dpr) || canvas.height !== Math.floor(height * dpr)) {
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Studio background gradient seamlessly blending with the frame edges
    const bgGradient = ctx.createRadialGradient(
      width * 0.5,
      height * 0.45,
      width * 0.1,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.85
    );
    bgGradient.addColorStop(0, '#9e9d98');
    bgGradient.addColorStop(0.45, '#848683');
    bgGradient.addColorStop(1, '#666965');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Fit frame cleanly so the entire image is completely visible without cropping (object-fit: contain)
    const scale = Math.min(width / img.naturalWidth, height / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const drawX = (width - drawW) / 2;
    const drawY = (height - drawH) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    ctx.restore();
    currentRenderedFrameRef.current = safeIndex;
  }, [loadFrameImage]);

  /**
   * Preload animation frames with priority for initial view and progressive chunking
   */
  useEffect(() => {
    let cancelled = false;
    const currentIsMobile = isMobile;
    const totalFrames = currentIsMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES;

    // 1. Immediately load frame 1 for instant first paint
    const firstImg = loadFrameImage(1, currentIsMobile);
    const onFirstLoad = () => {
      if (cancelled) return;
      setIsLoading(false);
      renderFrame(1, currentIsMobile);
    };

    if (firstImg.complete && firstImg.naturalWidth > 0) {
      onFirstLoad();
    } else {
      firstImg.onload = onFirstLoad;
    }

    // 2. Preload first priority frames (first 25 frames) immediately
    const priorityLimit = Math.min(25, totalFrames);
    for (let i = 2; i <= priorityLimit; i++) {
      const img = loadFrameImage(i, currentIsMobile);
      img.onload = () => {
        if (!cancelled && targetFrameRef.current === i && isMobileRef.current === currentIsMobile) {
          renderFrame(i, currentIsMobile);
        }
      };
    }

    // 3. Progressively load remaining frames in chunks to prevent network/memory spikes on mobile
    let nextFrameIndex = priorityLimit + 1;
    let timerId = null;

    const loadNextChunk = () => {
      if (cancelled || nextFrameIndex > totalFrames) return;

      const chunkEnd = Math.min(nextFrameIndex + 15, totalFrames);
      for (let i = nextFrameIndex; i <= chunkEnd; i++) {
        const img = loadFrameImage(i, currentIsMobile);
        img.onload = () => {
          if (!cancelled && targetFrameRef.current === i && isMobileRef.current === currentIsMobile) {
            renderFrame(i, currentIsMobile);
          }
        };
      }

      nextFrameIndex = chunkEnd + 1;
      if (nextFrameIndex <= totalFrames) {
        timerId = setTimeout(loadNextChunk, 50);
      }
    };

    timerId = setTimeout(loadNextChunk, 80);

    return () => {
      cancelled = true;
      if (timerId) clearTimeout(timerId);
    };
  }, [isMobile, loadFrameImage, renderFrame]);

  /**
   * Synchronize scroll position with animation frame
   */
  useEffect(() => {
    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollableDistance = track.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      // Distance scrolled into the sticky track
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      const totalFrames = isMobileRef.current ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES;

      // Map progress smoothly across active frames
      const frameIndex = Math.min(
        totalFrames,
        Math.max(1, Math.round(progress * (totalFrames - 1)) + 1)
      );

      targetFrameRef.current = frameIndex;
      renderFrame(frameIndex, isMobileRef.current);
    };

    const handleResize = () => {
      const newIsMobile = checkIsMobile();
      if (newIsMobile !== isMobileRef.current) {
        isMobileRef.current = newIsMobile;
        setIsMobile(newIsMobile);
      }
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial position sync
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);

  return (
    <div
      ref={trackRef}
      className="product-scroll-track"
      id="product-intro-animation"
      aria-label="Interactive Product Showcase"
    >
      <div className="product-scroll-sticky">
        <div className={`product-video-stage ${isMobile ? 'is-mobile' : 'is-desktop'}`}>
          {/* High performance Canvas rendering the frames */}
          <canvas ref={canvasRef} className="product-scroll-canvas" />

          {/* Minimal loading spinner while the first frame loads */}
          {isLoading && (
            <div className="product-scroll-loader" aria-live="polite">
              <div className="loader-spinner" />
              <span className="loader-text">Loading Experience...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductScrollAnimation;
