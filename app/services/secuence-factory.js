(function (angular) {
    angular.module('app').factory('secuenceFactory', ['tileFactory', 'soundFactory', secuenceFactory]);
    function secuenceFactory(tileFactory, soundFactory) {
        var module = {};
        var self = module;
        module.secuencearray = [];
        /**index which increments +1 when the secuence is played ok */
      //  var difficulty;
        var greencanvas;
        var redcanvas;
        var bluecanvas;
        var yellowcanvas;
        module.setgreenCanvas = function (canvas) {
            greencanvas = canvas;
        }
        module.setblueCanvas = function (canvas) {
            bluecanvas = canvas;
        }
        module.setredCanvas = function (canvas) {
            redcanvas = canvas;
        }
        module.setyellowCanvas = function (canvas) {
            yellowcanvas = canvas;
        }
        var gprop = tileFactory.getGreencprop();
        var bprop = tileFactory.getBluecprop();
        var rprop = tileFactory.getRedcprop();
        var yprop = tileFactory.getYellowcprop();

        module.playGreen = function () {
            tileFactory.drawtile(greencanvas, gprop, "#00FF00");
            tileFactory.drawtile(redcanvas, rprop, "#E50000");
            tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
            soundFactory.playgreensound();
        }
        module.playRed = function () {
            tileFactory.drawtile(redcanvas, rprop, "#FF3333");
            tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
            tileFactory.drawtile(greencanvas, gprop, "green");
            soundFactory.playredsound();
        }
        module.playYellow = function () {
            tileFactory.drawtile(yellowcanvas, yprop, "#FFFF00");
            tileFactory.drawtile(redcanvas, rprop, "#E50000");
            tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            tileFactory.drawtile(greencanvas, gprop, "green");
            soundFactory.playyellowsound();
        }
        module.playBlue = function () {
            tileFactory.drawtile(bluecanvas, bprop, "#00FFFF");
            tileFactory.drawtile(redcanvas, rprop, "#E50000");
            tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
            tileFactory.drawtile(greencanvas, gprop, "green");
            soundFactory.playbluesound();
        }
        module.playBuzz = function () {
            tileFactory.drawtile(bluecanvas, bprop, "#000000");
            tileFactory.drawtile(redcanvas, rprop, "##000000");
            tileFactory.drawtile(yellowcanvas, yprop, "##000000");
            tileFactory.drawtile(greencanvas, gprop, "#000000");
            soundFactory.playbuzzer();
        }
        /**secuenciacion */
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        function getRandomArbitrary() {
            var element =Math.floor(Math.random() * (5 - 1)) + 1;
            return element;
        }
  
        module.getSecuence=function(){
           var secelement=getRandomArbitrary();//select a random tile
            var secelementB;
            //this if manage the three first positions becose ther is no proble to repeat 3 tiles
            if (self.secuencearray.length<3) {
                self.secuencearray.push(secelement);
             } else {
                    //now we test if the fourth element its equal to the three inmediatly before tiles, when this tiles are equal
                     if ((self.secuencearray[self.secuencearray.length-3]===self.secuencearray[self.secuencearray.length-2])
                         && 
                        (self.secuencearray[self.secuencearray.length-2] === self.secuencearray[self.secuencearray.length-1]
                         && self.secuencearray[self.secuencearray.length-1]===secelement) ){
                            secelementB=getRandomArbitrary();
                            //while new element its equal to the repeated tile get a random tile
                           while (secelement===secelementB){
                                secelementB=getRandomArbitrary();
                            };
                            self.secuencearray.push(secelementB);
                         } else{
                            self.secuencearray.push(secelement);
                        }
                    }
        return self.secuencearray;
        }; 
       return module;
    };
})(angular);