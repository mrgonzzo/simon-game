(function (angular) {

    angular.module('app').component('compKey', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/key/key.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state','soundFactory','tileFactory','secuenceFactory', controllerCompKey],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compKey',
        bindings: {
            itemKey: '<'
        }
    });
    
    function controllerCompKey($state,soundFactory,tileFactory,secuenceFactory) {
        var vm = this;
        var greencanvas = document.getElementById('greenkey');
        secuenceFactory.setgreenCanvas(greencanvas);
        var redcanvas = document.getElementById("redkey");
        secuenceFactory.setredCanvas(redcanvas);
        var bluecanvas = document.getElementById("bluekey");
        secuenceFactory.setblueCanvas(bluecanvas);
        var yellowcanvas = document.getElementById("yellowkey");
        secuenceFactory.setyellowCanvas(yellowcanvas);
        
        var gprop=tileFactory.getGreencprop();
        var bprop=tileFactory.getBluecprop();
        var rprop=tileFactory.getRedcprop();
        var yprop=tileFactory.getYellowcprop();
        
        vm.actionPlayGreen = function () {
         secuenceFactory.playGreen();
        }
       
        vm.actionPlayRed = function () {
            secuenceFactory.playRed();
        }
        vm.actionPlayYellow = function () {
            secuenceFactory.playYellow();
        }
        vm.actionPlayBlue = function () {
            secuenceFactory.playBlue();
        }

        vm.draw = function () {
            tileFactory.drawtile(greencanvas, gprop, "green");
            tileFactory.drawtile(redcanvas, rprop, "#E50000");
            tileFactory.drawtile(bluecanvas,bprop, "#0000FF");
            tileFactory.drawtile(yellowcanvas,yprop, "#DDDD00");
        }

       
            vm.draw();
      

    }
})(angular);























