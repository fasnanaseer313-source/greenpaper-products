import os
from rembg import remove
from PIL import Image

src = "public/custom_event_cup.jpg"
dest = "public/custom_event_cup.png"

try:
    input_image = Image.open(src)
    output_image = remove(input_image)
    output_image.save(dest)
    print(f"Successfully processed {dest}")
except Exception as e:
    print(f"Error on {dest}: {e}")
