/*
    Program Name: Recipe Display
    
    Application Author: Rachel Hrenko

    Date: 11/16/17

    Filename: myRecipe.js
*/

/* global $ */

    //displays the next element after the current target 
    function display(event) {
        
        $(event.currentTarget).next().fadeIn("slow");
        
    }//end of display
    
    //attach event listener to h3 elements to invoke display function when clicked 
    
        //$("h3").click(display);

    //displays and animates the next element after the current target
    
    function display2(event) {
    
        $(event.currentTarget).next().animate( {height:'toggle'}, "slow" );
        
    }//end of display2
    
    //attach event listener to h3 elements to invoke display function when clicked 
        
        $("h3").click(display2);
        
    //change the background color h3 element when mouse hovers over it 
        
        $("h3").hover(function(){
            $(this).css("background-color", "white"); 
            }, function(){ 
            $(this).css("background-color", "lavender");
        });
        
    //add bon appetit after recipe using append
    
        $("div").append("<center> Bon Appetit!! </center>");