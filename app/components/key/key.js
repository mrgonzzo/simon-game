(function (angular) {

    angular.module('app').component('compKey', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/key/key.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$timeout', '$state', controllerCompKey],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compKey',
        bindings: {
            itemKey: '<'
        }
    });
    function controllerCompKey($state) {
        var vm = this;

        var greencanvas = document.getElementById('greenkey');
        var greencprop = {};
        greencprop.X = "300";
        greencprop.Y = "300";
        greencprop.r = "200";
        greencprop.aP = "440";
        greencprop.aF = "0";

        var redcanvas = document.getElementById("redkey");
        var redcprop = {};
        redcprop.X = "0";
        redcprop.Y = "300";
        redcprop.r = "200";
        redcprop.aP = "440";
        redcprop.aF = "0";

        var bluecanvas = document.getElementById("bluekey");
        var bluecprop = {};
        bluecprop.X = "300";
        bluecprop.Y = "0";
        bluecprop.r = "200";
        bluecprop.aP = "440";
        bluecprop.aF = "0";

        var yellowcanvas = document.getElementById("yellowkey");
        var yellowcprop = {};
        yellowcprop.X = "0";
        yellowcprop.Y = "0";
        yellowcprop.r = "200";
        yellowcprop.aP = "440";
        yellowcprop.aF = "0";

        vm.drawtile = function (canvas, properties, color) {
            if (canvas && canvas.getContext) {
                var context = canvas.getContext("2d");
                if (context) {
                    var X = properties.X;
                    var Y = properties.Y;
                    var r = properties.r;
                    var aPartida = (Math.PI / 180) * properties.aP;
                    var aFinal = (Math.PI / 180) * properties.aF;
                    context.beginPath();
                    context.strokeStyle = color;
                    context.lineWidth = 200;
                    context.arc(X, Y, r, aPartida, aFinal, true);
                    context.stroke();
                   
                }
            }

        }
        vm.actionPlayGreen = function () {
            vm.drawtile(greencanvas, greencprop, "#00FF00");
            vm.drawtile(redcanvas, redcprop, "#E50000");
            vm.drawtile(bluecanvas, bluecprop, "#0000FF");
            vm.drawtile(yellowcanvas, yellowcprop, "#DDDD00");
        }
        vm.actionPlayRed = function () {
            vm.drawtile(redcanvas, redcprop, "#FF3333");
            vm.drawtile(bluecanvas, bluecprop, "#0000FF");
            vm.drawtile(yellowcanvas, yellowcprop, "#DDDD00");
            vm.drawtile(greencanvas, greencprop, "green");
        }
        vm.actionPlayYellow = function () {
            vm.drawtile(yellowcanvas, yellowcprop, "#FFFF00");
            vm.drawtile(redcanvas, redcprop, "#E50000");
            vm.drawtile(bluecanvas, bluecprop, "#0000FF");
            vm.drawtile(greencanvas, greencprop, "green");
        }
        vm.actionPlayBlue = function () {
            vm.drawtile(bluecanvas, bluecprop, "#00FFFF");
            vm.drawtile(redcanvas, redcprop, "#E50000");
            vm.drawtile(yellowcanvas, yellowcprop, "#DDDD00");
            vm.drawtile(greencanvas, greencprop, "green");
        }

        vm.draw = function () {
            vm.drawtile(greencanvas, greencprop, "green");
            vm.drawtile(redcanvas, redcprop, "#E50000");
            vm.drawtile(bluecanvas, bluecprop, "#0000FF");
            vm.drawtile(yellowcanvas, yellowcprop, "#DDDD00");
        }

        vm.$onInit = function () {
            vm.draw();
        }

    }
})(angular);























