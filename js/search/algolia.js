// build time:Sat Mar 26 2022 19:20:32 GMT+0800 (China Standard Time)
$(function(){$("a.icon-social.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow","hidden");$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$(".ais-search-box--input").focus()}});$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300});document.addEventListener("keydown",function i(e){if(e.code=="Escape"){a();document.removeEventListener("keydown",i)}})});var a=function(){$("body").css("overflow","auto");$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})};$(".search-mask, .search-close-button").on("click",a);var i=GLOBAL_CONFIG.algolia;var e=i.appId&&i.apiKey&&i.indexName;if(!e){return console.error("Algolia setting is invalid!")}var t=instantsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,searchParameters:{hitsPerPage:i.hits.per_page||10},searchFunction:function(a){var i=$("#algolia-search-input").find("input");if(i.val()){a.search()}}});t.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:false,magnifier:false,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder}));t.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(a){var i=a.permalink?a.permalink:GLOBAL_CONFIG.root+a.path;return'<a href="'+i+'" class="algolia-hit-item-link">'+a._highlightResult.title.value+"</a>"},empty:function(a){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,a.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}));t.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(a){var i=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,a.nbHits).replace(/\$\{time}/,a.processingTimeMS);return"<hr>"+i+'<span class="algolia-logo pull-right">'+'  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" />'+"</span>"}}}));t.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}));t.start()});
//rebuild by neat 