;(function($) {
    "use strict";  
    
    //* Form js
    function verificationForm(){
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches


        //validate last page 

        
        $("a.action-button").click(function () {
            //  if (animating) return false;
             // animating = true;
  
          
              current_fs = $(this).parent();
              next_fs = $(this).parent().next();
              
              //validate current form    
              
             var  ValidationPassed = true;
              $(this).parent()
              .find(".validateMe")
               .each(function(){
                    
               //  console.log($(this).val())
  
                 if($(this).val() == "")
                 {
  
                  //style the current form to show error
                  $(this).css('border','solid 1px #8D1328');
  
                  //an input is empty
                  ValidationPassed = false;
                 }
                 else{
                  $(this).css('border','1px solid #d8e1e7'); 
                 }
                  
               
              });
  
               //end form validation
              
  
  
              if(ValidationPassed)
              {
                  
                //submit form 
                $(this).submit();
                document.getElementById('msform').submit();
              }
              else{
  
                  //form validation failed.
                  //don't move to the next step
              }
              
  
               
  
              
          });


        $(".next").click(function () {
          //  if (animating) return false;
           // animating = true;

        
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            
            //validate current form    
            
           var  ValidationPassed = true;
            $(this).parent()
            .find(".validateMe")
             .each(function(){
                  
             //  console.log($(this).val())

               if($(this).val() == "")
               {

                //style the current form to show error
                $(this).css('border','solid 1px #8D1328');

                //an input is empty
                ValidationPassed = false;
               }
               else{
                $(this).css('border','1px solid #d8e1e7'); 
               }
                
             
            });

             //end form validation
            


            if(ValidationPassed)
            {
                //only move to the next form when input validation is valid
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                       /* 'transform': 'scale(' + scale + ')',
                        'position': 'absolute' */
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 400,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
              //  easing: 'easeInOutBack'
            });
            }
            else{

                //form validation failed.
                //don't move to the next step
            }
            

             

            
        });

        $(".previous").click(function () {
           // if (animating) return false;
          //  animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");


   

             
             
            //show the previous fieldset
            previous_fs.show();
            previous_fs.css({
                'opacity':'1',
             })
            
            //show the current fieldset
            current_fs.hide();
            
            //hide the current fieldset with style
            
            
            /*current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1 - now) * 50) + "%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    });
                },
                duration: 400,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
               // easing: 'easeInOutBack'
            });
            */

            //end hide the current fieldset with style


        });

        $(".submit").click(function () {
            return false;
        })
    }; 
    
 
    /*Function Calls*/  
    verificationForm ();
 

    //expandable inputs

/*
    $('input').on('keydown', function(evt) {
        var $this = $(this),
            size = parseInt($this.attr('size'), 10),
            isValidKey = (evt.which >= 65 && evt.which <= 90) || // a-zA-Z
                         (evt.which >= 48 && evt.which <= 57) || // 0-9
                         evt.which === 32;
    
        if ( evt.which === 8 && size > 0 ) {
            // backspace
            $this.attr('size', size - 1);
        } else if ( isValidKey ) {
            // all other keystrokes
            $this.attr('size', size + 1);
        }
    });
*/
    

})(jQuery); 


//function to show the name of the uploaded file
function showname (file, name) {
    var file = document.getElementById(''+file+''); 
    var name = document.getElementById(''+name+'');
    name.innerHTML= file.files.item(0).name;
  };


   