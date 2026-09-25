from PIL import Image

img = Image.open('public/custom_design_cup.jpg')
img = img.convert("RGBA")

datas = img.getdata()
newData = []
for item in datas:
    # If the pixel is very close to white, make it transparent
    if item[0] > 230 and item[1] > 230 and item[2] > 230:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('public/custom_design_cup.png', "PNG")
print("Successfully created transparent PNG!")
