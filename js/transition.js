// build time:Thu Mar 07 2019 15:56:24 GMT+0800 (China Standard Time)
$(function(){$(".layout").velocity("stop").velocity("transition.slideUpIn",{delay:500,duration:1e3,easing:"easeInOutQuart",complete:function(){if($(".sidebar-toc").length>0){setTimeout(function(){$("#toggle-sidebar").click()},200)}}});$("#top-container").velocity("stop").velocity("transition.fadeIn",{delay:500,duration:1e3,easing:"easeInOutQuart"})});
//rebuild by neat 