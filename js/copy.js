// build time:Tue Oct 09 2018 20:26:46 GMT+0800 (China Standard Time)
$(function(){var e=$('<i class="fa fa-clipboard" aria-hidden="true"></i>');var t=$('<div class="copy-notice"></div>');$("figure.highlight").prepend(e);$("figure.highlight").prepend(t);function o(e,t){if(document.queryCommandSupported&&document.queryCommandSupported("copy")){try{document.execCommand("copy");$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"})}catch(o){$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"});return false}}else{$(t).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}}$(".highlight .fa-clipboard").on("click",function(){var e=window.getSelection();var t=document.createRange();t.selectNodeContents($(this).next("table").find(".code pre")[0]);e.removeAllRanges();e.addRange(t);var n=e.toString();o(n,this);e.removeAllRanges()})});
//rebuild by neat 