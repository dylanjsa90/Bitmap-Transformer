# Bitmap-Transformer
Transform bitmap image(s) by Dylan Sanders and Edward Smith

Run node lib/bitmapTransformer.js <transform> to run the bitmap transformer on the non-palette-bitmap

The transformation options are red, green, blue, grayscale and invert.

The color transformations will grayscale the image and add a weight of 70 to the RGB value for each pixel up to a max of 255.

The transformed bitmap file will be created in the test directory with the name of the transformation  -transform.bmp
