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
   
   