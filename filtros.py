import cv2

image = cv2.imread('prueba.jpg')

flag = True
width, height = image.shape[:2]
# obtener el valor BGR del pixel en la posicion (i,j)

def divide():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]
			grey = (int(b)+int(g)+int(r))/3

			image.itemset((i, j, 0), grey)
			image.itemset((i, j, 1), grey)
			image.itemset((i, j, 2), grey)

def red_grey():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), r)
			image.itemset((i, j, 1), r)
			image.itemset((i, j, 2), r)

def green_grey():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), g)
			image.itemset((i, j, 1), g)
			image.itemset((i, j, 2), g)

def blue_grey():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), b)
			image.itemset((i, j, 1), b)
			image.itemset((i, j, 2), b)

def percent():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]
			grey = (r*0.3)+(g*0.59)+(b*0.11)

			image.itemset((i, j, 0), grey)
			image.itemset((i, j, 1), grey)
			image.itemset((i, j, 2), grey)

def reverse():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), 225-r )
			image.itemset((i, j, 1), 225-g)
			image.itemset((i, j, 2), 225-b)

def rgb():
	print('Not Yet')

def brightness():
	global flag
	print('Indique el brillo: (-200 a 200)')
	brillo = int(input())
	if(brillo > 200 or brillo < -200):
		print('Entrada incorrecta.')
		flag = False
		return

	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			red = r+brillo
			green = g+brillo
			blue = b+brillo

			if(red > 255):
				red = 255
			if(red < 0):
				red = 0

			if(green > 255):
				green = 255
			if(green < 0):
				green = 0

			if(blue > 255):
				blue = 255
			if(blue < 0):
				blue = 0
			image.itemset((i, j, 0), red )
			image.itemset((i, j, 1), green)
			image.itemset((i, j, 2), blue)

def hight_c():
	global flag
	print('Indique el contraste: (-200 a 200)')
	con = int(input())
	if(con > 200 or con < -200):
		print('Entrada incorrecta.')
		flag = False
		return

	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]
			factor = ( 259 * ( con + 255 ) ) / ( 255 * ( 259 - con ) );

			image.itemset((i, j, 0), (factor * ( r - 128 ) + 128) )
			image.itemset((i, j, 1), (factor * ( r - 128 ) + 128))
			image.itemset((i, j, 2), (factor * ( r - 128 ) + 128))

def red():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), r )
			image.itemset((i, j, 1), 0)
			image.itemset((i, j, 2), 0)

def green():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), 0 )
			image.itemset((i, j, 1), g)
			image.itemset((i, j, 2), 0)

def blue():
	for i in range(0, width):
		for j in range(0, height):
			b, g, r = image[i, j]

			image.itemset((i, j, 0), 0 )
			image.itemset((i, j, 1), 0)
			image.itemset((i, j, 2), b)

def mosaic():
	print('Aun no')

def show():
	cv2.imshow('image',image)
	cv2.waitKey(0)
	cv2.destroyAllWindows()

def switch(n):
	global flag
	if(n == 0):
		red_grey()
	elif(n == 1):
		green_grey()
	elif(n == 2):
		blue_grey()
	elif(n==3):
		divide()
	elif(n==4):
		percent()
	elif(n==5):
		reverse()
	elif(n==6):
		rgb()
	elif(n==7):
		brightness()
	elif(n==8):
		hight_c()
	elif(n==9):
		red()
	elif(n==10):
		green()
	elif(n==11):
		blue()
	elif(n==12):
		mosaic()
	else:
		print('Try again')

	if(flag):
		show()
	flag = True

while(True):
	print('Selecciona el filtro a aplicar...\n');
	print('Filtros:')
	print('\tTonos de gris')
	print('\t\t->[0] Rojo Gris (R,R,R)')
	print('\t\t->[1] Verde Gris (G,G,G)')
	print('\t\t->[2] Azul Gris (B,B,B)')
	print('\t\t->[3] Division')
	print('\t\t->[4] Porcentaje')
	print('\t->[5] Invertido')
	print('\t->[6] Componente RGB')
	print('\t->[7] Brillo')
	print('\t->[8] Alto contraste')
	print('\t->[9] Rojo (R,0,0)')
	print('\t->[10] Verde (0,G,0)')
	print('\t->[11] Azul (0,0,B)')
	print('\t->[12] Mosaico')

	n = input()
	print('Procesando...')
	switch(int(n))
