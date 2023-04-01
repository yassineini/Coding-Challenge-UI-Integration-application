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
    
    // Tabs Interaction for candidates
    $('[data-tabs-target]').click(function() {
        var target = $(this).data('tabs-target');
        $('[data-tabs-target]').removeClass('active');
        $(this).addClass('active');
        $('[role="tabpanel"]').addClass('hidden');
        $(target).removeClass('hidden');
        if($(this).hasClass('active'))
        {
            $("[data-tabs-target]").removeClass("border-purpleCustom");
            $(this).addClass("border-purpleCustom"); 
            $("[data-tabs-target]").removeClass("text-purpleCustom");
            $("[data-tabs-target]").removeClass("text-textprimary");
            //$("[data-tabs-target]").removeClass("border-b-2");
            $(this).addClass("text-purpleCustom"); 
            //$(this).addClass("border-b-2"); 
        }
      });
      $('[data-tabs-target]:first').addClass('active');
      $($('#myTabContent').children('div')[0]).removeClass('hidden');
});