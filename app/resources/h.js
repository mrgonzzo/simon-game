parking.factory('carSearchService', function ($timeout, $q) {
  vm.play = function (userel) {
      var defered = $q.defer();
      var promise = defered.promise;
      $timeout(function () {
          var result = [];
          angular.equals(cars, function (car) {
              if (_matches(car, criteria)) {
                  result.push(car);
              }
          });
          if (result.length > 0) {
              console.log('promesa resuelta')
              deferred.resolve(result);
          } else {
              console.log('promesa rechazada')
              deferred.reject("No se han encontrado resultados");
              secuenceFactory.playBuzz();
              fail = true;
          }
      }, 1000);
      return deferred.promise;
  };
  var _matches = function (car, criteria) {
      return angular.toJson(car).indexOf(criteria) > 0;
  };
  return {
      filter: _filter
  }
});


var diferir = $q.defer();
diferir.promise.then(function(){
    alert("Hola El Lado Oscuro de Java");
});
diferir.resolve();


return new Promise(function(resolve, reject){
    
        //get some object that can do async tasks
        var asyncObj = new MyAsyncObj();
    
        //when async task ends successfully, resolve promise
        asyncObj.onSuccess = function(result){
            resolve(result);
        };
        //when async task ends with error, reject promise   
        asyncObj.onError = function(error){
            reject(error);
        }
    
        //perform async operation
        asyncObj.doSomething();
      })


      /*****************************************************************************************************************************************************/
      $(document).ready(function(){
        
        
        let simon={
             colors:["green","red","yellow","blue"],
             sequence:[],
             userSequence:[],
             strict:false,
             buttonSounds : {},
             init: function(){
               let objectContext=this;
       
                  
               $("#start").on("click",function(){
                 
                  objectContext.setSounds();
                 
                 
                   //executes for the first time
         objectContext.emptyAllSequences();
                  //I generate the first of the sequence
             objectContext.generateAndAddRandomColor();
                  //I display the sequence on the board
             objectContext.displaySequenceOnBoard();
       
              
                  }); 
       
                 $("#title").addClass('tada animated');  
                           
                 $("#strict").on("click",function(){
                   $(this).toggleClass("active");
                   
                   if($(this).hasClass("active")){
                     objectContext.strict=true;
                   }else{
                     objectContext.strict=false;
                   }
                   
                 });
       
              $(".button").on("click",function(){
        
                             const color=$(this).attr("data-color");
                            objectContext.lightButton(color,0);
                             objectContext.userSequence.push(color);
       
       
                             let isSequenceCorrect=objectContext.checkUserSequence();
                   
                             if(!isSequenceCorrect){
                               //stop the click of the failed attempt to restart the next round clean
                               $(this).stop();
                             }
                            if(objectContext.userSequence.length===objectContext.sequence.length || !isSequenceCorrect){
       
                                 if(isSequenceCorrect){
                            if(objectContext.userSequence.length ===20){
                              //user wins and the game restarts
                              alert("You won!");
                              $("#count").html("WON");
                              objectContext.emptyAllSequences();
                                   $("#start").removeClass("active");
                                   $("#start").click();
                            }else{
                             //go to next step of the sequence 
                          setTimeout(function(){objectContext.generateAndAddRandomColor();
                                   objectContext.displaySequenceOnBoard();
                                   //reset the userSequence to check the whole sequence again 
                                   objectContext.emptyUserSequence(); }, 1500);               
                            } 
                                 }else{
       
                                   //if strict mode is on
                                   if(objectContext.strict){
                                    $(this).stop();
                                    alert("you lost, game will restart"); 
                                     //user looses
                                   $("#count").html("Lost");
                                   //wipe sequence array
                                    objectContext.emptyAllSequences();
                                   $("#start").removeClass("active");
                                   $("#start").click();  
                                   }else{
                                     $(this).stop();
                                     alert("Wrong answer. You can try again!");
                                     setTimeout(function(){
                                   objectContext.displaySequenceOnBoard();
                                   //reset the userSequence to check the whole sequence again 
                                   objectContext.emptyUserSequence(); }, 1500);  
                                         
       
                                   }
                                 }
                   }
                
            });
       
         },
             setSounds:function(){
               
               this.buttonSounds["green"] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
               this.buttonSounds["red"] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
               this.buttonSounds["yellow"] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
               this.buttonSounds["blue"] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
               
             },
          
             emptyUserSequence: function(){
                   this.userSequence.length=0;
             },
          
             emptyAISequence: function(){
                      this.sequence.length=0;
             },
          
             emptyAllSequences:function(){
               this.emptyUserSequence();
               this.emptyAISequence();
             },
             updateCount: function(){
               $("#count").html(this.sequence.length);
               
             },
          
             checkUserSequence:function(){
               
               for(let i=0,len=this.userSequence.length;i<len;i++){
                 
                 if(this.userSequence[i]!== this.sequence[i]){
                   return false;
                 }
                 
               }
               
               
               return true;    
             },
          
             generateAndAddRandomColor:function(){
        
               const randColorIndex=Math.floor(Math.random()*4);
                  
               
               const randColor=this.colors[randColorIndex];
               this.sequence.push(randColor);
               this.updateCount(); 
       
             },
          
             displaySequenceOnBoard: function(){
              
                 this.lightButtonsInSequence(this.sequence);
             },
                lightButtonsInSequence: function(sequence) {
                  var color = sequence[0];
                  var remainingSequence = sequence.slice(1);
                  var lightNextButtonFunction = remainingSequence.length > 0 ? jQuery.proxy(function(){
                    this.lightButtonsInSequence(remainingSequence);
                       }, this) : null;
                  console.log(this.buttonSounds[color]);
                  this.buttonSounds[color].play();
                  $("#"+color).animate({opacity : .3}, 500).animate({opacity : 1}, 250, lightNextButtonFunction);
                },
           lightButton: function(color,i,countBlocker){
               
               var objectContext=this;
               
                            $("#"+color).delay(800*i) 
               .animate({opacity : 0.3}, 300,function(){
       
                       objectContext.buttonSounds[color].play();
                         $("#"+color).animate({opacity : 1}, 250,function(){
                        
        
                         });
                     
                         
                       });
               
               
             }
           }
        simon.init();
       });
       
       /*********************************************************************************************************************************** */

       var simonApp = angular.module('simonApp', []);
       
       simonApp.directive('simonButton', ['$timeout', 'simonService', function($timeout, simonService) {
         var template = '';
       
         template += '<div id="' + '{{position}}' + '" class="col-xs-6">';
         template += '<div class="button" ng-class="{\'unselected\':getSelectedButton() !== \'{{position}}\',';
         template += '\'clickable\': isEnabled() }" ng-click="isEnabled() ? setSelectedButton() : null"></div>';
         template += '</div>';
       
         return {
           restrict: 'E',
           replace: true,
           scope: {
             position: '@position'
           },
           link: function(scope, element, attrs) {
             scope.getSelectedButton = function() {
               return simonService.getSelectedButton();
             };
       
             scope.setSelectedButton = function() {
               selectedButton = scope.position;
               simonService.addUserStep(scope.position);
             };
       
             scope.isEnabled = function() {
               return simonService.isEnabled();
             }
           },
           template: template
         };
       
       }]);
       
       simonApp.service('simonService', ['$rootScope', '$timeout', 'soundService', function($rootScope, $timeout, soundService) {
         var _pattern = [],
           _userPattern = [],
           _currentRound = 0,
           _buttonsEnabled = false,
           _selectedButton = '',
           _speed = 1000;
       
         var self = this;
       
         this.startRound = function() {
           $timeout(function() {
             _currentRound++;
       
             self.addStep();
       
             self.disableButtons();
       
             self.clearUserPattern();
       
             self.showPattern();
           }, 250);
         };
       
         this.startGame = function() {
           self.resetGame();
           self.startRound();
         };
       
         this.resetGame = function() {
           _pattern = [];
           _userPattern = [];
           _currentRound = 0;
           _buttonsEnabled = false;
           _selectedButton = '';
           _speed = 1000;
         };
       
         this.getRound = function() {
           return _currentRound;
         };
       
         this.speedUp = function(speed) {
           _speed = _speed / 2;
         };
       
         this.addUserStep = function(position) {
           _userPattern.push(position);
       
           soundService.play(position);
       
           self.disableButtons();
           self.setSelectedButton(position);
           $timeout(function() {
             self.clearSelectedButton();
             self.enableButtons();
             soundService.stop();
             $rootScope.$broadcast('userPatternChange');
           }, 250);
         };
       
         this.isUserPatternComplete = function() {
           return _userPattern.length === _currentRound;
         };
       
         this.clearUserPattern = function() {
           _userPattern = [];
         };
       
         this.addStep = function() {
           var element = Math.floor(Math.random() * 4 + 1);
       
           switch (element) {
             case 1:
               element = 'upper-left';
               break;
             case 2:
               element = 'upper-right';
               break;
             case 3:
               element = 'lower-left';
               break;
             case 4:
               element = 'lower-right';
               break;
           }
       
           _pattern.push(element);
         };
       
         this.showPattern = function(index) {
           var index = index || 0;
           self.clearSelectedButton();
           soundService.stop();
           $timeout(function() {
             if (index < _pattern.length) {
               self.setSelectedButton(_pattern[index]);
               soundService.play(_pattern[index]);
               index = index + 1;
               $timeout(function() {
                 self.showPattern(index);
               }, _speed);
             } else {
               $rootScope.$broadcast('patternGenerated');
             }
           }, 250);
         };
       
         this.checkPattern = function() {
           return _pattern[_userPattern.length - 1] === _userPattern[_userPattern.length - 1];
         };
       
         this.isEnabled = function() {
           return _buttonsEnabled;
         };
       
         this.enableButtons = function() {
           _buttonsEnabled = true;
         };
       
         this.disableButtons = function() {
           _buttonsEnabled = false;
         };
       
         this.getSelectedButton = function() {
           return _selectedButton;
         };
       
         this.setSelectedButton = function(btn) {
           _selectedButton = btn;
         };
       
         this.clearSelectedButton = function() {
           self.setSelectedButton('');
         };
       
       }]);
       
       simonApp.factory('soundService', function() {
         var sound = {
           'upperLeft': new buzz.sound('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', {
             loop: false,
             preload: true
           }),
           'upperRight': new buzz.sound('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', {
             loop: false,
             preload: true
           }),
           'lowerLeft': new buzz.sound('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', {
             loop: false,
             preload: true
           }),
           'lowerRight': new buzz.sound('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3', {
             loop: false,
             preload: true
           }),
           'play': function(position) {
             switch (position) {
               case 'upper-left':
                 this.upperLeft.togglePlay();
                 break;
               case 'upper-right':
                 this.upperRight.togglePlay();
                 break;
               case 'lower-left':
                 this.upperLeft.togglePlay();
                 break;
               case 'lower-right':
                 this.lowerRight.togglePlay();
                 break;
             }
           },
           'playAll': function() {
             buzz.all().play();
           },
           'stop': function() {
             buzz.all().stop();
           }
         };
       
         return sound;
       });
       
       simonApp.controller('MainController', ['$scope', '$timeout', 'simonService', 'soundService', function($scope, $timeout, simonService, soundService) {
       
         $scope.step = 0;
       
         $scope.message = '';
       
         $scope.strict = false;
       
         $scope.stopDisabled = true;
       
         $scope.startGame = function() {
           $scope.message = 'Starting Game!';
           $scope.gameOngoing = true;
           $scope.stopDisabled = true;
           simonService.disableButtons();
           $timeout(function() {
             $scope.message = '';
             simonService.startRound();
           }, 1500);
         };
       
         $scope.stopGame = function() {
           $scope.gameOngoing = false;
           $scope.stopDisabled = true;
           simonService.resetGame();
           simonService.disableButtons();
         };
       
         $scope.$on('patternGenerated', function() {
           simonService.enableButtons();
           $scope.stopDisabled = false;
           $scope.step = simonService.getRound();
         });
       
         $scope.$on('userPatternChange', function() {
           if (simonService.checkPattern()) {
             if (simonService.isUserPatternComplete()) {
               $scope.message = 'Correct!';
               if (simonService.getRound() === 5 || simonService.getRound() === 9 || simonService.getRound() === 13) {
                 simonService.speedUp();
               }
               if (simonService.getRound() === 20) {
                 $scope.message = 'Congratulations! You won!';
                 simonService.resetGame();
               }
               $timeout(function() {
                 $scope.message = '';
                 $scope.stopDisabled = true;
                 simonService.startRound();
               }, 1500);
             }
       
           } else {
             $scope.message = 'Wrong!';
             simonService.clearUserPattern();
             simonService.disableButtons();
             $scope.stopDisabled = true;
             $timeout(function() {
               $scope.message = '';
               if ($scope.strict) {
                 simonService.resetGame();
                 simonService.startRound();
               } else {
                 simonService.showPattern()
               }
             }, 1500);
           }
         });
       
       }]);