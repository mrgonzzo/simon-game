
(function (angular) {

    angular.module('app').component('compKey', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/key/key.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'soundFactory', 'buttonFactory', 'secuenceFactory', '$timeout', '$scope', '$q', controllerCompKey],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compKey',
        bindings: {
            itemKey: '<'
        }
    });

    function controllerCompKey($state, soundFactory, buttonFactory, secuenceFactory, $timeout, $scope, $q) {
        var vm = this;
        var sectoplay = [];
        var playersec = [];
        var finished = false;
        var greencanvas = document.getElementById('greenkey');
        secuenceFactory.setgreenCanvas(greencanvas);
        var redcanvas = document.getElementById("redkey");
        secuenceFactory.setredCanvas(redcanvas);
        var bluecanvas = document.getElementById("bluekey");
        secuenceFactory.setblueCanvas(bluecanvas);
        var yellowcanvas = document.getElementById("yellowkey");
        secuenceFactory.setyellowCanvas(yellowcanvas);

        //     playersec.push(1); playersec.push(2);playersec.push(3);playersec.push(4);

        var gprop = buttonFactory.getGreencprop();
        var bprop = buttonFactory.getBluecprop();
        var rprop = buttonFactory.getRedcprop();
        var yprop = buttonFactory.getYellowcprop();

        vm.PC;

        vm.actionPlayGreen = function () {
            secuenceFactory.playGreen();
            $timeout(function () {
                buttonFactory.drawbutton(greencanvas, gprop, "green");
            }, 250);

        };

        vm.actionPlayRed = function () {
            secuenceFactory.playRed();
            $timeout(function () {
                buttonFactory.drawbutton(redcanvas, rprop, "#E50000");
            }, 250);

        };

        vm.actionPlayBlue = function () {
            secuenceFactory.playBlue();
            $timeout(function () {
                buttonFactory.drawbutton(bluecanvas, bprop, "#0000FF");
            }, 250);


        };
        vm.actionPlayYellow = function () {
            secuenceFactory.playYellow();

            $timeout(function () {
                buttonFactory.drawbutton(yellowcanvas, yprop, "#DDDD00");
            }, 250);

        };
        vm.draw = function () {
            buttonFactory.drawbutton(greencanvas, gprop, "green");
            buttonFactory.drawbutton(redcanvas, rprop, "#D50000");
            buttonFactory.drawbutton(bluecanvas, bprop, "#0000FF");
            buttonFactory.drawbutton(yellowcanvas, yprop, "#DDDD00");
        };
        vm.getEl = function (element) {

            switch (element) {
                case 1:
                    vm.actionPlayGreen();
                    break;
                case 2:
                    vm.actionPlayRed();
                    break;
                case 3:
                    vm.actionPlayBlue();
                    break;
                case 4:
                    vm.actionPlayYellow();
                    break;
                default:
                    console.log('compKey case DEFAULT');
            }

        };
        vm.getSecToPlay = function () {
            sectoplay = secuenceFactory.getSecuence();
            return sectoplay
        }
        vm.sectoplay = vm.getSecToPlay();
        vm.playSecuence = function () {

            vm.PC = true;
            console.log(vm.sectoplay)
            var i = 0;                     //  set your counter to 0

            function myLoop() {           //  create a loop function
                setTimeout(function () {    //  call a Xs setTimeout when the loop is called
                    vm.getEl(vm.sectoplay[i]);          //  your code here
                    i++;                     //  increment the counter
                    if (i < vm.sectoplay.length) {            //  if the counter < sectoplay.length, call the loop function
                        myLoop();             //  ..  again which will trigger another 
                    }
                    finished = true;                    //  ..  setTimeout()
                }, 500);

            }

            myLoop();

            //return finished;
        }
        //************************************************************************************* */
        //asincronous functuion which we don´t know wen is called (user click) so we don´t know wen we get the value
        var foo;
        var teclag = document.getElementById("greenkey");
        var teclar = document.getElementById("redkey");
        var teclab = document.getElementById("bluekey");
        var teclay = document.getElementById("yellowkey");
        var val;
        vm.getUserelement = new Promise(function (resolve, reject) {

            function userValue() {

                console.log('inside sayHello')
                teclag.addEventListener('click', function () {
                    console.log('listener 1 added')

                    resolve(val = 1);

                });
                teclar.addEventListener('click', function () {
                    console.log('listener 2 added')


                    resolve(val = 2);

                });
                teclab.addEventListener('click', function () {
                    console.log('listener added')
                    resolve(val = 3);


                });
                teclay.addEventListener('click', function () {
                    console.log('listener added')

                    resolve(val = 4);

                });

            }

            userValue();

        });


        vm.startPlay = function () {

            vm.playSecuence(vm.sectoplay);
            for (var i = 0; i < vm.sectoplay.length; i++) {
                console.log('dentro del for', vm.sectoplay[i],vm.sectoplay.length);
                pc = vm.sectoplay[i];
                console.log('antes de la promesa vm.sectoplay[i]=', vm.sectoplay[i],' pc=',pc);
                vm.getUserelement.then(function (val) {
                    console.log('i=',i,'value: ', val,vm.sectoplay, ' pc ', pc,'sectoplay[i]', vm.sectoplay[i]); // outputs 'Hello World!'
                      
                    if (pc != val) {
                        secuenceFactory.playBuzz();
                    } else{
                        vm.getSecToPlay()
                    }

                });
            };//end for
          //  vm.startPlay();
            // vm.CompareSecuence(sectoplay,playersec);
            //vm.getUserelement(foo,callback);
        };

        vm.draw();
    }
})(angular);
