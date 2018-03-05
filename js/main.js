/*        public.save = function () {
            var link = window.document.createElement( 'a' ),
                url = canvas.toDataURL(),
                filename = 'screenshot.jpg';

            link.setAttribute( 'href', url );
            link.setAttribute( 'download', filename );
            link.style.visibility = 'hidden';
            window.document.body.appendChild( link );
            link.click();
            window.document.body.removeChild( link );
        };
*/

//////////////////////////////////////////////////////////////////////////////////

function inputFile(){

  var x = document.getElementById("image");
  x.click();

}

function loadImage(){
    var fileReader,img,src;

    img = document.getElementById("image");
    src = 'prueba.jpg';
    putImageCanvas(src);
/*
fileReader = new FileReader();
fileReader.readAsDataURL(img.files[0]);
fileReader.onloadend = function(event){
    src = event.target.result;
    alert(src);
    putImageCanvas(src);
}*/
}

document.getElementById("open").addEventListener("click", inputFile );
document.getElementById("open").addEventListener("change", loadImage );



//document.getElementById('mosaic').addEventListener("click", mosaic('canvas') );
document.getElementById('ared').addEventListener("click", red_grey );
document.getElementById('agreen').addEventListener("click", green_grey );
document.getElementById('ablue').addEventListener("click", blue_grey );
document.getElementById('divide').addEventListener("click", divide);
document.getElementById('percent').addEventListener("click", percent );
document.getElementById('reverse').addEventListener("click", reverse);
document.getElementById('pop').addEventListener("click", brightness);

/*document.getElementById('rgb').addEventListener("click",  );
document.getElementById('brightness').addEventListener("click", app.filters.divide());

document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );
document.getElementById('open').addEventListener("click",  );*/
