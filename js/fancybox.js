// build time:Tue Mar 26 2019 15:02:54 GMT+0800 (China Standard Time)
$(function(){var a=$(".recent-post-item img");if(a.length===0){a=$("#post-content img")}for(var t=0;t<a.length;t++){var o=$('<a href="'+a[t].src+'" data-fancybox="group" data-caption="'+a[t].alt+'" class="fancybox"></a>');var e=a[t].alt;var n=$(a[t]).wrap(o);if(e){n.after('<div class="img-alt">'+e+"</div>")}}$().fancybox({selector:"[data-fancybox]",loop:true,transitionEffect:"slide",buttons:["share","slideShow","fullScreen","download","thumbs","close"]});var r=$(".gallery-item");var i=[];r.each(function(a,t){i.push({src:$(t).data("url"),opts:{caption:$(t).data("title")}})});r.on("click",function(){$.fancybox.open(i,{loop:true,transitionEffect:"slide"},r.index(this));return false})});
//rebuild by neat 