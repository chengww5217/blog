// build time:Tue Oct 09 2018 20:26:46 GMT+0800 (China Standard Time)
$(function(){var a=$(".recent-post-item img");if(a.length===0){a=$("#post-content img")}for(var t=0;t<a.length;t++){var n=$('<a href="'+a[t].src+'" data-fancybox="group" data-caption="'+a[t].alt+'" class="fancybox"></a>');var o=a[t].alt;var e=$(a[t]).wrap(n);if(o){e.after('<div class="img-alt">'+o+"</div>")}}$().fancybox({selector:"[data-fancybox]",loop:true,transitionEffect:"slide"});var i=$(".gallery-item");var r=[];i.each(function(a,t){r.push({src:$(t).data("url"),opts:{caption:$(t).data("title")}})});i.on("click",function(){$.fancybox.open(r,{loop:true,transitionEffect:"slide"},i.index(this));return false})});
//rebuild by neat 