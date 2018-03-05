function putImageCanvas(src){
  var canvas,context,image,src,size;

  //Get the canvas element
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  //Create a new html image instance.
  image = new Image();
  //Give the image url.
  image.src = src;

  image.onload = function(){
      //Draw the image from the (0,0) position.
      size = modifySize(image);
      context.drawImage(image, 0, 0,size[0],size[1]);
  };

}

function putImgData(image){

  var canvas,context,image,src,size;

  //Get the canvas element
  canvas = document.getElementById("canvas2");
  context = canvas.getContext("2d");
  size = modifySize(image);
  context.putImageData(image, 0, 0);

}

function modifySize(image){

  var newSize,size,size1,size2;
  //This is the array that we gonna return with the new size
  newSize = new Array();

  if(image.width > image.height){
      size1 = image.width;
      size2 = image.height;
      size = 1000;
  }else {
    size1 = image.height;
    size2 = image.width;
    size = 500;
  }

  newSize[0] = ( ( (size1-size) < 0 ) ? size1+size : size );
  newSize[1] = (newSize[0]*size2)/size1;
  return newSize;

}

/** Give the imageData element from a canvas.
  * @param <id> the canvas id.
  * @return the imageData object.
  */
function getImgData(id){
  var canva,context;

  //Get the canvas element
  canvas = document.getElementById(id);
  context = canvas.getContext("2d");

  return context.getImageData( 0, 0, canvas.width, canvas.height );
}
