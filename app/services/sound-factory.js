(function (angular) {
    angular.module('app').factory('soundFactory', [soundFactory]);
    function soundFactory() {
        var module = {};
        var self = module;
        self.ismute = false;
        var bluesound = new Audio('app/resources/BlueSound2.mp3');
        var redsound = new Audio('app/resources/RedSound1.mp3');
        var yellowsound = new Audio('app/resources/YellowSound3.mp3');
        var greensound = new Audio('app/resources/GreenSound4.mp3');
        var buzzer = new Audio('app/resources/Buzzer.mp3');
        
        module.playbluesound = function () {
            if (!bluesound.mute) {
                if (!bluesound.paused) {
                    bluesound.pause();
                    bluesound.currentTime = 0;
                }
                bluesound.play();
            }
        };
        module.resetbluesound = function () {
            if (!bluesound.paused) {
                bluesound.pause();
            };
            bluesound.currentTime = 0;
        };
        module.playredsound = function (isMuted) {
            if (!redsound.mute) {
                if (!redsound.paused) {
                    redsound.pause();
                    redsound.currentTime = 0;
                }
                redsound.play();
            }
        };
        module.resetredsound = function () {
            if (!redsound.paused) {
                redsound.pause();
            }
            redsound.currentTime = 0;
        };
        module.playgreensound = function () {
            if (!greensound.mute) {
                if (!greensound.paused) {
                    greensound.pause();
                    greensound.currentTime = 0;
                }
                greensound.play();
            }
        };
        module.resetgreensound = function () {
            if (!greensound.paused) {
                greensound.pause();
            };
            greensound.currentTime = 0;
        };
        module.playyellowsound = function () {
            if (!yellowsound.mute) {
                if (!yellowsound.paused) {
                    yellowsound.pause();
                    yellowsound.currentTime = 0;
                }
                yellowsound.play();
            }
        };
        module.resetyellowsound = function () {
            if (!yellowsound.paused) {
                yellowsound.pause();
            };
            yellowsound.currentTime = 0;
        };
        module.playbuzzer = function () {
            if (!buzzer.mute) {
                if (!buzzer.paused) {
                    buzzer.pause();
                    buzzer.currentTime = 0;
                }
                buzzer.play();
            }
        };
        module.resetbuzzer = function () {
            if (!buzzer.paused) {
                buzzer.pause();
            };
            buzzer.currentTime = 0;
        };
        


        return module;
    };
})(angular);