var app = ( function () {

    var canvas = document.getElementById( 'canvas' ),
        context = canvas.getContext( '2d' ),

        // API
        public = {};


        // Public methods goes here...
        public.loadPicture = function () {

            var imageObj = new Image();
            //imageObj.src = document.getElementsByTagName('input')[0].value;
            imageObj.src = '../prueba.jpg';
            var size = modifySize(imageObj);
            imageObj.onload = function () {
                context.drawImage( imageObj, 0, 0, size[0], size[1] );
            }

        };

        return public;

} () );

//Modify the size of the image so that it expands only what is necessary to
//fill the canva.
function modifySize(image){
    var newSize = new Array();
    if(image.width < image.height){
        var difference = image.width-500;
        newSize[0] = ( (difference<0) ? image.width+500 : 500 );
        newSize[1] = newSize[0]*image.height/image.width;
    }else {
        var difference = image.height-500;
        newSize[1] = ( (difference<0) ? image.height+500 : 500 );
        newSize[0] = newSize[1]*image.width/image.height;
    }
    return newSize;
}

function inputFile(){

  var x = document.getElementById("inpfile");
  x.click();

}


document.getElementById('open').addEventListener("click", inputFile );
document.getElementById('open').addEventListener("change", app.loadPicture );
