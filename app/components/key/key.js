(function (angular) {

    angular.module('app').component('compKey', {
        // otra opción es poner aquí directamente el html asignándoselo a template:
        templateUrl: 'app/components/key/key.html',
        // en controller definimos la función que escribimos abajo
        controller: ['$state', 'soundFactory', 'tileFactory', 'secuenceFactory', '$timeout','$q', controllerCompKey],
        // declaramos un alias para no tener que usar $ctrl.
        controllerAs: 'compKey',
        bindings: {
            itemKey: '<'
        }
    });

    function controllerCompKey($state, soundFactory, tileFactory, secuenceFactory, $timeout,$q) {
        var vm = this;
        var sectoplay = [];
        var playersec = [];
        var counterplayerel = 0;
        var greencanvas = document.getElementById('greenkey');
        secuenceFactory.setgreenCanvas(greencanvas);
        var redcanvas = document.getElementById("redkey");
        secuenceFactory.setredCanvas(redcanvas);
        var bluecanvas = document.getElementById("bluekey");
        secuenceFactory.setblueCanvas(bluecanvas);
        var yellowcanvas = document.getElementById("yellowkey");
        secuenceFactory.setyellowCanvas(yellowcanvas);

        //     playersec.push(1); playersec.push(2);playersec.push(3);playersec.push(4);

        var gprop = tileFactory.getGreencprop();
        var bprop = tileFactory.getBluecprop();
        var rprop = tileFactory.getRedcprop();
        var yprop = tileFactory.getYellowcprop();

        vm.actionPlayGreen = function () {
            secuenceFactory.playGreen();
            $timeout(function () {
                tileFactory.drawtile(greencanvas, gprop, "green");
            }, 250);

        };

        vm.actionPlayRed = function () {
            secuenceFactory.playRed();
            $timeout(function () {
                tileFactory.drawtile(redcanvas, rprop, "#E50000");
            }, 250);

        };

        vm.actionPlayBlue = function () {
            secuenceFactory.playBlue();
            $timeout(function () {
                tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            }, 250);


        };
        vm.actionPlayYellow = function () {
            secuenceFactory.playYellow();

            $timeout(function () {
                tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
            }, 250);

        };
        vm.draw = function () {
            tileFactory.drawtile(greencanvas, gprop, "green");
            tileFactory.drawtile(redcanvas, rprop, "#D50000");
            tileFactory.drawtile(bluecanvas, bprop, "#0000FF");
            tileFactory.drawtile(yellowcanvas, yprop, "#DDDD00");
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
        vm.playSecuence = function () {
            sectoplay = secuenceFactory.getSecuence();
            var i = 0;                     //  set your counter to 0

            function myLoop() {           //  create a loop function
                setTimeout(function () {    //  call a Xs setTimeout when the loop is called
                    vm.getEl(sectoplay[i]);          //  your code here
                    i++;                     //  increment the counter
                    if (i < sectoplay.length) {            //  if the counter < sectoplay.length, call the loop function
                        myLoop();             //  ..  again which will trigger another 
                    }                        //  ..  setTimeout()
                }, 500);
            }

            myLoop();
            console.log(sectoplay)
            return sectoplay;
        }
        vm.getPlayerSecuence = function () {
            
            }

        vm.draw();
    }
})(angular);






















 /* 
        var sel;
        vm.userSec = function (n){
            sel=n;
            return sel
        }
        return new Promise(function(resolve, reject){
            
                //get some object that can do async tasks
                var usertile = vm.userSec(n);
            
                //when async task ends successfully, resolve promise
                usertile.onSuccess = function(result){
                    resolve(result);
                };
                //when async task ends with error, reject promise   
                usertile.onError = function(error){
                    reject(error);
                }
            
                //perform async operation
                usertile.doSomething();
              })

        vm.userEl = function (data) {
            //playersec.push(n);.
            var defered = $q.defer();
            var promise = defered.promise;
            vm.userSec(data).success(function(data) {
                            defered.resolve(data);
                        }).error(function(err) {
                            defered.reject(err)
                        });
            return promise //playersec;
        }
        vm.startPlay=function(){
            vm.cPlay();
        };
        var fail = false;
        var i = 0;
        vm.check = function () {
            if (fail != true) {
           //console.log('if (computersec[i] == vm.userSec())', computersec[i], vm.userEl());
                vm.userEl().then(function(data) {
                    chkUser=data;
                });
    
                if (computersec[i] == chkUser) {
                    i++;
                    if (i < computersec.length) {            //  if the counter < sectoplay.length, call the loop function
                        check();             //  ..  again which will trigger another 
                    } else {
                        vm.cPlay();
                    }
                } else {
                    secuenceFactory.playBuzz();
                    fail = true;
                };
            }
       
    }//end check
        vm.cPlay = function () {
            console.log('startPlay clicked')
            computersec = vm.playSecuence();
            console.log('computersec', computersec);
            var i = 0;
            var fail = false;
            
       //     vm.check();
            
          
        }*/