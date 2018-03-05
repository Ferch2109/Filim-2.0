function divide(){

    var i,b,g,r,grey,image,data;

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){

        r = data[i];
        g = data[i+1];
        b = data[i+2];

        grey = (r+g+b)/3;

        data[i]     = grey;     // red
        data[i + 1] = grey;     // green
        data[i + 2] = grey;     // blue

    }

    putImgData(image);

}

function red_grey(){

    var i,j,r,image,data;

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){

        r = data[i];

        data[i]     = r;     // red
        data[i + 1] = r;     // green
        data[i + 2] = r;     // blue

    }
    putImgData(image);

}

function green_grey(){

    var i,j,g,image,data;

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){

        g = data[i+1];

        data[i]     = g;     // red
        data[i + 1] = g;     // green
        data[i + 2] = g;     // blue

    }

    putImgData(image);

}

function blue_grey(){

    var i,j,b,image,data;

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){

        b = data[i+2];

        data[i]     = b;     // red
        data[i + 1] = b;     // green
        data[i + 2] = b;     // blue

    }

    putImgData(image);

}

function percent(){

  var i,b,g,r,grey,image,data;

  image = getImgData('canvas');
  data = image.data;

  for( i=0; i< data.length; i+=4 ){

      r = data[i];
      g = data[i+1];
      b = data[i+2];

      grey = (r*0.3)+(g*0.59)+(b*0.11);

      data[i]     = grey;     // red
      data[i + 1] = grey;     // green
      data[i + 2] = grey;     // blue

  }

  putImgData(image);

}

function reverse(){

    var i,b,g,r,grey,image,data;

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){

        r = data[i];
        g = data[i+1];
        b = data[i+2];

        data[i]     = 225-r;     // red
        data[i + 1] = 225-g;     // green
        data[i + 2] = 225-b;     // blue

    }

    putImgData(image);

}

function brightness(){

    var i,j,b,image,data,brillo;
    brillo = parseInt(document.getElementById("bright").innerHTML);

    image = getImgData('canvas');
    data = image.data;

    for( i=0; i< data.length; i+=4 ){
        r = data[i];
        g = data[i+1];
        b = data[i+2];

        data[i]     = ((brillo+r < 0) ? 0 : ((brillo+r > 255) ? 255 : r+brillo)); // red
        data[i + 1] = ((brillo+g < 0) ? 0 : ((brillo+g > 255) ? 255 : g+brillo)); // green
        data[i + 2] = ((brillo+b < 0) ? 0 : ((brillo+b > 255) ? 255 : b+brillo)); // blue

    }

    putImgData(image);

}
