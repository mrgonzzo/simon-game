(function (angular) {
    angular.module('app').factory('secuenceFactory', ['buttonFactory', 'soundFactory', secuenceFactory]);
    function secuenceFactory(buttonFactory, soundFactory) {
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
        var gprop = buttonFactory.getGreencprop();
        var bprop = buttonFactory.getBluecprop();
        var rprop = buttonFactory.getRedcprop();
        var yprop = buttonFactory.getYellowcprop();

        module.playGreen = function () {
            buttonFactory.drawbutton(greencanvas, gprop, "#00FF00");
            buttonFactory.drawbutton(redcanvas, rprop, "#E50000");
            buttonFactory.drawbutton(bluecanvas, bprop, "#0000FF");
            buttonFactory.drawbutton(yellowcanvas, yprop, "#DDDD00");
            soundFactory.playgreensound();
        }
        module.playRed = function () {
            buttonFactory.drawbutton(redcanvas, rprop, "#FF3333");
            buttonFactory.drawbutton(bluecanvas, bprop, "#0000FF");
            buttonFactory.drawbutton(yellowcanvas, yprop, "#DDDD00");
            buttonFactory.drawbutton(greencanvas, gprop, "green");
            soundFactory.playredsound();
        }
        module.playYellow = function () {
            buttonFactory.drawbutton(yellowcanvas, yprop, "#FFFF00");
            buttonFactory.drawbutton(redcanvas, rprop, "#E50000");
            buttonFactory.drawbutton(bluecanvas, bprop, "#0000FF");
            buttonFactory.drawbutton(greencanvas, gprop, "green");
            soundFactory.playyellowsound();
        }
        module.playBlue = function () {
            buttonFactory.drawbutton(bluecanvas, bprop, "#00FFFF");
            buttonFactory.drawbutton(redcanvas, rprop, "#E50000");
            buttonFactory.drawbutton(yellowcanvas, yprop, "#DDDD00");
            buttonFactory.drawbutton(greencanvas, gprop, "green");
            soundFactory.playbluesound();
        }
        module.playBuzz = function () {
            buttonFactory.drawbutton(bluecanvas, bprop, "#000000");
            buttonFactory.drawbutton(redcanvas, rprop, "##000000");
            buttonFactory.drawbutton(yellowcanvas, yprop, "##000000");
            buttonFactory.drawbutton(greencanvas, gprop, "#000000");
            soundFactory.playbuzzer();
        }
        /**secuenciacion */
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        function getRandomArbitrary() {
            var element =Math.floor(Math.random() * (5 - 1)) + 1;
            return element;
        }
  
        module.getSecuence=function(){
           var secelement=getRandomArbitrary();//select a random button
            var secelementB;
            //this if manage the three first positions becose ther is no proble to repeat 3 buttons
            if (self.secuencearray.length<3) {
                self.secuencearray.push(secelement);
             } else {
                    //now we test if the fourth element its equal to the three inmediatly before buttons, when this buttons are equal
                     if ((self.secuencearray[self.secuencearray.length-3]===self.secuencearray[self.secuencearray.length-2])
                         && 
                        (self.secuencearray[self.secuencearray.length-2] === self.secuencearray[self.secuencearray.length-1]
                         && self.secuencearray[self.secuencearray.length-1]===secelement) ){
                            secelementB=getRandomArbitrary();
                            //while new element its equal to the repeated button get a random button
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