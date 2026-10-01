import os
from rembg import remove, new_session
from PIL import Image

session = new_session("u2net")

src = "public/party_cup_no_lid.jpg"
dest = "public/party_cup_no_lid_transparent.png"

try:
    input_image = Image.open(src)
    output_image = remove(input_image, session=session, alpha_matting=True, alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10, alpha_matting_erode_size=10)
    output_image.save(dest)
    print(f"Successfully processed {dest}")
except Exception as e:
    print(f"Error on {dest}: {e}")
