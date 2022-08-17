"use strict";
// write the resized image name, width and height into a JSON file
// and any time the API tries to resize an image, it checks first the JSON file to see if it's already done
// the code below checks if the image is resized before but in the ./assets/resized directory
// this method is slower than the first method (reading info from JSON file) 
