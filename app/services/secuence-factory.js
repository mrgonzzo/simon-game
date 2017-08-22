(function (angular) {
    angular.module('app').factory('secuenceFactory',['tileFactory','soundFactory',secuenceFactory]);
    function secuenceFactory(tileFactory,soundFactory) {
        var module = {};
        var self = module;

        var greencanvas ;
        var redcanvas ;
        var bluecanvas;
        var yellowcanvas;
        module.setgreenCanvas=function(canvas){
            greencanvas=canvas;
        }
        module.setblueCanvas=function(canvas){
            bluecanvas=canvas;
        }
        module.setredCanvas=function(canvas){
            redcanvas=canvas;
        }
        module.setyellowCanvas=function(canvas){
            yellowcanvas=canvas;
        }
        var gprop=tileFactory.getGreencprop();
        var bprop=tileFactory.getBluecprop();
        var rprop=tileFactory.getRedcprop();
        var yprop=tileFactory.getYellowcprop();

         module.playGreen = function () {
            tileFactory.drawtile( greencanvas, gprop, "#00FF00");
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

        return module;
    };
})(angular);