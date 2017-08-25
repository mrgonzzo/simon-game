(function (angular) {

    angular.module('app').component('compKey', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/key/key.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'soundFactory', 'tileFactory', 'secuenceFactory', '$timeout', controllerCompKey],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compKey',
        bindings: {
            itemKey: '<'
        }
    });

    function controllerCompKey($state, soundFactory, tileFactory, secuenceFactory, $timeout) {
        var vm = this;
        var sectoplay = []
        var greencanvas = document.getElementById('greenkey');
        secuenceFactory.setgreenCanvas(greencanvas);
        var redcanvas = document.getElementById("redkey");
        secuenceFactory.setredCanvas(redcanvas);
        var bluecanvas = document.getElementById("bluekey");
        secuenceFactory.setblueCanvas(bluecanvas);
        var yellowcanvas = document.getElementById("yellowkey");
        secuenceFactory.setyellowCanvas(yellowcanvas);

        var gprop = tileFactory.getGreencprop();
        var bprop = tileFactory.getBluecprop();
        var rprop = tileFactory.getRedcprop();
        var yprop = tileFactory.getYellowcprop();

        vm.actionPlayGreen = function () {
            secuenceFactory.playGreen();
            //we wait for secuenceFactory.playGreen() finish to revert the tile´s color  
            $timeout(function () {
                tileFactory.drawtile(greencanvas, gprop, "green");
            }, 250);
            console.log('compKey sec GREEN');
        };

        vm.actionPlayRed = function () {
            secuenceFactory.playRed();
            $timeout(function () {
                tileFactory.drawtile(redcanvas, rprop, "#E50000");
            }, 250);
            console.log('compKey sec RED');

        };
        vm.actionPlayYellow = function () {
            secuenceFactory.playYellow();
            $timeout(function () {
                tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
            }, 250);
            console.log('compKey sec YELOW');

        };
        vm.actionPlayBlue = function () {
            secuenceFactory.playBlue();
            $timeout(function () {
                tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            }, 250);
            console.log('compKey sec BLUE');

        };

        vm.draw = function () {
            tileFactory.drawtile(greencanvas, gprop, "green");
            tileFactory.drawtile(redcanvas, rprop, "#E50000");
            tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
        };
        vm.getEl = function (element) {

            switch (element) {
                case 1:
                    vm.actionPlayGreen();

                    console.log('compKey case 1');
                    break;
                case 2:
                    vm.actionPlayRed();

                    console.log('compKey case 2');
                    break;
                case 3:
                    vm.actionPlayBlue();

                    console.log('compKey case 3');
                    break;
                case 4:
                    vm.actionPlayYellow();

                    console.log('compKey case 4');
                    break;
                default:
                    console.log('compKey case DEFAULT');
            }

        };
        vm.playSecuence = function () {
            sectoplay = secuenceFactory.getSecuence();
            var i = 0;                     //  set your counter to 0
            
            function myLoop () {           //  create a loop function
               setTimeout(function () {    //  call a Xs setTimeout when the loop is called
                vm.getEl(sectoplay[i]);          //  your code here
                  i++;                     //  increment the counter
                  if (i < sectoplay.length) {            //  if the counter < sectoplay.length, call the loop function
                     myLoop();             //  ..  again which will trigger another 
                  }                        //  ..  setTimeout()
               }, 400);
            }
            
            myLoop();
        }
        vm.getPlayerSecuence = function (){
            
        }

        vm.draw();
    }
})(angular);






















