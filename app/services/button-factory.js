(function (angular) {
    angular.module('app').factory('buttonFactory', [buttonFactory]);
    function buttonFactory() {
        var module = {};
        var self = module;
        
        
        var greencprop = {};
        
        greencprop.X = "300";
        greencprop.Y = "300";
        greencprop.r = "200";
        greencprop.aP = "440";
        greencprop.aF = "0";

       
        var redcprop = {};
        redcprop.X = "0";
        redcprop.Y = "300";
        redcprop.r = "200";
        redcprop.aP = "440";
        redcprop.aF = "0";

       
        var bluecprop = {};
        bluecprop.X = "300";
        bluecprop.Y = "0";
        bluecprop.r = "200";
        bluecprop.aP = "440";
        bluecprop.aF = "0";

        
        var yellowcprop = {};
        yellowcprop.X = "0";
        yellowcprop.Y = "0";
        yellowcprop.r = "200";
        yellowcprop.aP = "440";
        yellowcprop.aF = "0";
          
        module.getYellowcprop = function(){
        
        return yellowcprop
        };
        module.getRedcprop = function(){
            
        return redcprop
        };
        module.getBluecprop = function(){
            
        return bluecprop
        };
        module.getGreencprop = function(){

        return greencprop
        };

        module.drawbutton = function (canvas, properties, color) {
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

        return module;
    };
})(angular);