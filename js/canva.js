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
            imageObj.onload = function () {
                context.drawImage( imageObj, 0, 0, 400,400 );
            }

        };

        public.nav = function(){
            var lector = new FileReader();
            lector.onload = function(e) {
              var nav = document.getElementById('menu');
              nav.innerHTML(e);
            };
            lector.readAsText('../html/menu.html');
        }

        return public;

} () );



document.getElementsByTagName('input')[0].addEventListener("change", app.loadPicture);
