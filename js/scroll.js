// build time:Wed Oct 10 2018 00:51:19 GMT+0800 (China Standard Time)
$(function(){var t=0;$(".toc-child").hide();$(window).scroll(throttle(function(t){var i=$(this).scrollTop();if(!isMobile()){a(i);s(i)}var o=e(i);if(i>56){if(o){$("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log()}else{$("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible")}$("#page-header").addClass("fixed");if($("#go-up").css("opacity")==="0"){$("#go-up").velocity("stop").velocity({translateX:-30,rotateZ:360,opacity:1},{easing:"easeOutQuart",duration:200})}}else{if(i===0){$("#page-header").removeClass("fixed").removeClass("visible")}$("#go-up").velocity("stop").velocity({translateX:0,rotateZ:180,opacity:0},{easing:"linear",duration:200})}},50,100));$("#go-up").on("click",function(){$("body").velocity("stop").velocity("scroll",{duration:500,easing:"easeOutQuart"})});$("#post-content").find("h1,h2,h3,h4,h5,h6").on("click",function(t){i("#"+$(this).attr("id"))});$(".toc-link").on("click",function(t){t.preventDefault();i($(this).attr("href"))});function e(e){var i=e>t;t=e;return i}function i(t){$(t).velocity("stop").velocity("scroll",{duration:500,easing:"easeInOutQuart"})}function o(t){t.velocity("stop").velocity("transition.fadeIn",{duration:500,easing:"easeInQuart"})}function a(t){var e=$("#content-outer").height();var i=$(window).height();var o=e>i?e-i:$(document).height()-i;var a=t/o;var n=Math.round(a*100);var s=n>100?100:n;$(".progress-num").text(s);$(".sidebar-toc__progress-bar").velocity("stop").velocity({width:s+"%"},{duration:100,easing:"easeInOutQuart"})}function n(t){if(window.history.replaceState&&t!==window.location.hash){window.history.replaceState(undefined,undefined,t)}}function s(t){if($(".toc-link").length===0){return false}if(t<200){$(".toc-link").removeClass("active");$(".toc-child").hide()}var e=$("#post-content").find("h1,h2,h3,h4,h5,h6");var i="";e.each(function(){var e=$(this);if(t>e.offset().top-25){i="#"+$(this).attr("id")}});var a=$(".toc-link.active");if(i&&a.attr("href")!==i){n(i);$(".toc-link").removeClass("active");var s=$('.toc-link[href="'+i+'"]');s.addClass("active");var c=s.parents(".toc-child");if(c.length>0){var l;c.length>1?l=c.eq(c.length-1).find(".toc-child"):l=c;if(l.length>0&&l.is(":hidden")){o(l)}c.eq(c.length-1).closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}else{if(s.closest(".toc-item").find(".toc-child").is(":hidden")){o(s.closest(".toc-item").find(".toc-child"))}s.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}}}});
//rebuild by neat 