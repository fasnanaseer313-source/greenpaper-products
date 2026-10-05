import os
from rembg import remove, new_session
from PIL import Image

session = new_session("u2net")
images = [
    ("public/colorful_cup_1.jpg", "public/colorful_cup_1.png"),
    ("public/colorful_cup_2.jpg", "public/colorful_cup_2.png")
]

for src, dest in images:
    try:
        input_image = Image.open(src)
        output_image = remove(input_image, session=session, alpha_matting=True, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10, alpha_matting_erode_size=10)
        output_image.save(dest)
        print(f"Successfully processed {dest}")
    except Exception as e:
        print(f"Error on {dest}: {e}")
