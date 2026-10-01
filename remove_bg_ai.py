import os
from rembg import remove
from PIL import Image

images = [
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_1_1790866063364.jpg", "public/cat_cup_1.png"),
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_2_1790866076716.jpg", "public/cat_cup_2.png"),
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_3_1790866183149.jpg", "public/cat_cup_3.png"),
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_4_1790866197917.jpg", "public/cat_cup_4.png"),
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_5_1790866212942.jpg", "public/cat_cup_5.png"),
    (r"C:\Users\ASUS\.gemini\antigravity-ide\brain\03766cb9-0cf4-49ce-828e-e2348875755e\cup_6_1790866225160.jpg", "public/cat_cup_6.png"),
]

for src, dest in images:
    try:
        input_image = Image.open(src)
        output_image = remove(input_image)
        output_image.save(dest)
        print(f"Successfully processed {dest}")
    except Exception as e:
        print(f"Error on {dest}: {e}")
