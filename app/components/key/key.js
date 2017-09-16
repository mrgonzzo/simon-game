
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
        //vm.sectoplay = vm.getSecToPlay();
        vm.getSecToPlay = function () {
            sectoplay = secuenceFactory.getSecuence();
            vm.playSecuence(vm.sectoplay);
            console.log('peticion de sectoplay: ', sectoplay)
            return sectoplay
        }

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
        var val;
        vm.ArrayUV = [];
        /*
        vm.getUserelement = new Promise(function (resolve, reject) {

            function userValue() {

                console.log('inside userValue')
                greencanvas.addEventListener('click', function () {
                    console.log('listener 1 added')
                    val = 1;
                    vm.ArrayUV.push(val);
                    resolve(val);
                });
                redcanvas.addEventListener('click', function () {
                    console.log('listener 2 added')
                    val = 2;
                    vm.ArrayUV.push(val);
                    resolve(val);
                });
                bluecanvas.addEventListener('click', function () {
                    console.log('listener 3 added')
                    val = 3;
                    vm.ArrayUV.push(val);
                    resolve(val);
                });
                yellowcanvas.addEventListener('click', function () {
                    console.log('listener 4 added')
                    val = 4;
                    vm.ArrayUV.push(val);
                    resolve(val);
                });
            }

            userValue();
        });
*/
vm.getUserelement = function(){
    return $q(function (resolve, reject) {
        
                    function userValue() {
        
                        console.log('inside userValue')
                        greencanvas.addEventListener('click', function () {
                            console.log('listener 1 added')
                            val = 1;
                            vm.ArrayUV.push(val);
                            resolve(val);
                        });
                        redcanvas.addEventListener('click', function () {
                            console.log('listener 2 added')
                            val = 2;
                            vm.ArrayUV.push(val);
                            resolve(val);
                        });
                        bluecanvas.addEventListener('click', function () {
                            console.log('listener 3 added')
                            val = 3;
                            vm.ArrayUV.push(val);
                            resolve(val);
                        });
                        yellowcanvas.addEventListener('click', function () {
                            console.log('listener 4 added')
                            val = 4;
                            vm.ArrayUV.push(val);
                            resolve(val);
                        });
                    }
        
                    userValue();
                }

    );}
    //var promise = vm.getUserelement();
        vm.startPlay = function () {
            vm.sectoplay = vm.getSecToPlay();
            function compare(sectoplay) {
                console.log('compare: sectoplay=', sectoplay, 'vm.ArrayUV', vm.ArrayUV);
                var i = 0;
                function compareloop(sectoplay) {
                    var promise = vm.getUserelement();
                    console.log('compareloop: i=', i, ' sectoplay=', sectoplay, ' vm.ArrayUV', vm.ArrayUV, ' sectoplay[i]=', sectoplay[i])
                    pc = sectoplay[i];
                    uv = vm.ArrayUV[i];
                   promise.then(function (val) {
                        console.log('dentro de la promesa')
                        console.log('i=', i, 'value: ', val, 'vm.ArrayUV[]=', vm.ArrayUV, 'vm.ArrayUV[i]', vm.ArrayUV[i], 'sectoplay[]', sectoplay, ' pc=', pc, 'sectoplay[i]=', sectoplay[i]); // outputs 'Hello World!'

                        if (pc != val) {
                            secuenceFactory.playBuzz();
                            console.log('BUZZ')
                            sectoplay.length = 0;
                            vm.ArrayUV.length = 0;
                            i = 5000;
                        } else {
                            //vm.getSecToPlay()                           
                            i++;
                            if (i < sectoplay.length) {
                                console.log('vuelvo a comparar por que no termina el array')          //  if the counter < sectoplay.length, call the loop function
                                compareloop(sectoplay);   //  ..  again which will trigger another 
                            }
                            
                            console.log('i++', i);
                            console.log('comparado ok vuelvo a pedir secuencia')
                           
                        }
                    });
                   
 }compareloop(sectoplay);
            } 
            compare(vm.sectoplay);
        };
        vm.draw();
    }
})(angular);

