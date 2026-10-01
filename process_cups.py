from PIL import Image
import os

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
        img = Image.open(src)
        img = img.convert("RGBA")
        datas = img.getdata()
        newData = []
        for item in datas:
            # If the pixel is very close to white, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
        img.putdata(newData)
        img.save(dest, "PNG")
        print(f"Processed {dest}")
    except Exception as e:
        print(f"Error processing {src}: {e}")
