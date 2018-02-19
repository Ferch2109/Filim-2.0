function Canva(id){
    this.canvas = document.getElementById( id );
    this.context = canvas.getContext( '2d' );
    this.imageObj = new Image();
    this.src = null;
    this.modifySize = modifySize;
    this.loadPicture = loadPicture;
    this.brightness = brightness;
    this.load = load;
}

//Modify the size of the image so that it expands only what is necessary to
//fill the canva.
function modifySize(){
    var newSize = new Array();
    if(this.imageObj.width < this.imageObj.height){
        var difference = this.imageObj.width-500;
        newSize[0] = ( (difference<0) ? this.imageObj.width+500 : 500 );
        newSize[1] = newSize[0]*this.imageObj.height/this.imageObj.width;
    }else {
        var difference = this.imageObj.height-500;
        newSize[1] = ( (difference<0) ? this.imageObj.height+500 : 500 );
        newSize[0] = newSize[1]*this.imageObj.width/this.imageObj.height;
    }
    return newSize;
}

// Public methods goes here...
function loadPicture(src) {
    this.src = src;
    //this.imageObj.src = document.getElementsByTagName('input')[0].value;
    this.imageObj.src = '../prueba.jpg';

    this.imageObj.onload = this.load();

}


//Brightness
function brightness(level) {

    var data = this.context.getImageData(0, 0, this.imageObj.width, this.imageObj.height);

    // Recorremos los pixels y aumentamos su valor
    // RGB (no tocamos el alpha) en el nivel especificado
    for (var y = 0; y < this.context.height; y++) {
        for (var x = 0; x < this.imageObj.width; x++) {
            data[(y * width + x) * 4 + 0] += level;
            data[(y * width + x) * 4 + 1] += level;
            data[(y * width + x) * 4 + 2] += level;
        }
    }

    this.imageObj.onload = this.load();

}

function load(){
    var size = this.modifySize();
    this.context.drawImage( this.imageObj, 0, 0, size[0], size[1] );
}

//////////////////////////////////////////////////////////////////////////////////

function inputFile(){

  var x = document.getElementById("inpfile");
  x.click();

}

var app = new Canva('canva');
document.getElementById('open').addEventListener("click", inputFile );
document.getElementById('open').addEventListener("change", app.loadPicture('lol') );

var app2 = new Canva('canva2');
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
document.getElementById('brightness').addEventListener("click", brightness(app2,100));
/*
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );*/
