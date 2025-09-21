#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct  1 13:46:52 2020

@author: rmattfeld
"""

from PIL import Image

image = None

def load_image(file):
    global image 
    image = Image.open(file)
    
def get_width():
    global image
    return image.width

def get_height():
    global image
    return image.height

def set_red(x, y, intensity):
    global image 
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        image.putpixel((x,y),(intensity,intensities[1],intensities[2],intensities[3]))
    elif len(intensities) == 3:
        image.putpixel((x,y),(intensity,intensities[1],intensities[2]))    
    else:
        print('Invalid image given. Please try another image.')
    
def set_blue(x, y, intensity):
    global image 
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        image.putpixel((x,y),(intensities[0],intensities[1],intensity,intensities[3]))
    elif len(intensities) == 3:
        image.putpixel((x,y),(intensities[0],intensities[1],intensity))    
    else:
        print('Invalid image given. Please try another image.')
    
    
def set_green(x, y, intensity):
    global image 
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        image.putpixel((x,y),(intensities[0],intensity,intensities[2],intensities[3]))
    elif len(intensities) == 3:
        image.putpixel((x,y),(intensities[0],intensity,intensities[2]))    
    else:
        print('Invalid image given. Please try another image.')
 
def set_alpha(x, y, intensity):
    global image 
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        image.putpixel((x,y),(intensities[0],intensities[1],intensities[2],intensity))
    elif len(intensities) == 3:
        image.putpixel((x,y),(intensities[0],intensities[1],intensities[2]))    
    else:
        print('Invalid image given. Please try another image.')
    
def set_pixel(x, y, r, g, b, a = 255):
    global image
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        image.putpixel((x,y),(r,g,b,a))
    elif len(intensities) == 3:
        image.putpixel((x,y),(r,g,b))    
    else:
        print('Invalid image given. Please try another image.')
    
def get_red(x, y):
    global image 
    intensities = image.getpixel((x,y))
    return intensities[0]
    
def get_blue(x, y):
    global image 
    intensities = image.getpixel((x,y))
    return intensities[2]
    
def get_green(x, y):
    global image 
    intensities = image.getpixel((x,y))
    return intensities[1]
    
def get_alpha(x, y):
    global image 
    intensities = image.getpixel((x,y))
    if len(intensities) == 4:
        return intensities[3]
    else:
        return -1
    
def draw():
    image.show()
    
def save(filename):
    global image
    image = image.save(filename)