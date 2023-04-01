import './style.css';
import $ from "jquery";


$(document).ready(function(){
    //Toggle for user icon in the nav
    $(".user-click").click(function(){
      $("#targetEl").toggle();
    });

    //Toggle mobile menu 
    $(".burger-menu").click(function(){
        $("#mobile-menu").toggle();
      });
});