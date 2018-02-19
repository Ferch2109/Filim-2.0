var app = ( function () {

    var canvas = document.getElementById( 'canvas' ),
        context = canvas.getContext( '2d' ),

        // API
        public = {};


        // Public methods goes here...
        public.loadPicture = function () {

            var imageObj = new Image();
            //imageObj.src = document.getElementsByTagName('input')[0].value;
            imageObj.src = src;
            var size = this.modifySize(imageObj);
            imageObj.onload = function () {
                context.drawImage( imageObj, 0, 0, size[0], size[1] );
            }

        };

        //Modify the size of the image so that it expands only what is necessary to
        //fill the canva.
        public.modifySize = function(){
            var newSize = new Array();
            if(imageObj.width < imageObj.height){
                var difference = imageObj.width-500;
                newSize[0] = ( (difference<0) ? imageObj.width+500 : 500 );
                newSize[1] = newSize[0]*imageObj.height/imageObj.width;
            }else {
                var difference = imageObj.height-500;
                newSize[1] = ( (difference<0) ? imageObj.height+500 : 500 );
                newSize[0] = newSize[1]*imageObj.width/imageObj.height;
            }
            return newSize;
        };

        return public;

} () );

var app2 = ( function () {

    var canvas = document.getElementById( 'canvas' ),
        context = canvas.getContext( '2d' ),

        // API
        public = {};


        // Public methods goes here...
        public.loadPicture = function (src) {

            var imageObj = new Image();
            //imageObj.src = src;
            imageObj.src = '../prueba.jpg';
            var size = this.modifySize(imageObj);
            imageObj.onload = function () {
                context.drawImage( imageObj, 0, 0, size[0], size[1] );
            }

        };

        //Modify the size of the image so that it expands only what is necessary to
        //fill the canva.
        public.modifySize = function(){
            var newSize = new Array();
            if(imageObj.width < imageObj.height){
                var difference = imageObj.width-500;
                newSize[0] = ( (difference<0) ? imageObj.width+500 : 500 );
                newSize[1] = newSize[0]*imageObj.height/imageObj.width;
            }else {
                var difference = imageObj.height-500;
                newSize[1] = ( (difference<0) ? imageObj.height+500 : 500 );
                newSize[0] = newSize[1]*imageObj.width/imageObj.height;
            }
            return newSize;
        };

        //Brightness
        public.brightness = function(level){

            var data = context.getImageData(0, 0, imageObj.width, imageObj.height);

            // Recorremos los pixels y aumentamos su valor
            // RGB (no tocamos el alpha) en el nivel especificado
            for (var y = 0; y < context.height; y++) {
                for (var x = 0; x < imageObj.width; x++) {
                    data[(y * width + x) * 4 + 0] += level;
                    data[(y * width + x) * 4 + 1] += level;
                    data[(y * width + x) * 4 + 2] += level;
                }
            }

            imageObj.onload = this.load();

        }

        return public;

} () );


function inputFile(){

  var x = document.getElementById("inpfile");
  x.click();

}

//////////////////////////////////////////////////////////////////////////////////

function inputFile(){

  var x = document.getElementById("inpfile");
  x.click();

}


document.getElementById('open').addEventListener("click", inputFile );
document.getElementById('open').addEventListener("change", app.loadPicture('lol') );

app2.loadPicture(app.src);

/*
var classname = document.getElementsByClassName("filtros");

Array.from(classname).forEach(function(element) {
    element.addEventListener('click', filtros);
});*/

/*document.getElementById('mosaic').addEventListener("click",  );
document.getElementById('agreen').addEventListener("click",  );
document.getElementById('ablue').addEventListener("click",  );
document.getElementById('divide').addEventListener("click",  );
document.getElementById('percent').addEventListener("click",  );
document.getElementById('reverse').addEventListener("click",  );
document.getElementById('rgb').addEventListener("click",  );*/
document.getElementById('brightness').addEventListener("click", app2.brightness(100));
/*
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );*/
