var fn_addin=function(a,r,e){var i=i||{};return i.styles=i.styles||{},i.commands=i.commands||{},i.dependencies=e||i.dependencies||{},i.styles.style=function(){},i.views=i.views||{},i.collect=i.collect||{},i.models=i.models||{},i.templates=i.templates||{},i.info={widget:!0,id:"search",class:"app-container search",region:"top-left",order:"append",placeholderType:"metric",addin:"162b82d0-f285-427c-8209-924f44ef4d21",visibleSetting:"searchVisible"},a.console.log(a.elapsed()+": "+i.info.id+" started"),i.styles=i.styles||{},i.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".search,.search .search-input{width:100%;max-width:var(--width);position:relative}.search{--width:230px;min-width:0;display:inline-block;flex:0 1 auto;order:6}.search .search-input{height:60px;padding:20px 0 20px 36px;z-index:2;background:0 0;border:none;-moz-box-sizing:border-box;box-sizing:border-box;color:#fff;cursor:pointer;line-height:20px;outline:0}.search .icon-search,.search-underline{position:absolute;z-index:1;transition:opacity var(--a-fast) ease}.flex-column .search-input{padding-left:40px}.search-input:focus{cursor:text}.search-underline{top:49px;left:9px;right:0;border-bottom:2px solid #fff;opacity:0}.search.active .search-underline{opacity:1}.flex-column .search .search-underline{left:19px}.search .icon-search{left:10px;top:0;line-height:57px;opacity:.7}.flex-column .search .icon-search{left:20px}.search:hover .icon-search{opacity:.85}.search.active .icon-search{opacity:1}",document.getElementsByTagName("head")[0].appendChild(e)},i.views.Search=Backbone.View.extend({className:"app-container search",events:{"focusin .search-input":"handleFocusIn","focusout .search-input":"handleFocusOut","keyup .search-input":"checkForEscape","submit .search-form":"doSearch"},initialize:function(){this.renderedOnce=!1,this.listenTo(a,"globalEvent:click",this.hideResults),this.listenTo(a,"globalEvent:esc",this.hide),this.listenTo(a,"globalEvent:toggleSearch",this.toggleShow),this.listenTo(a.models.customization,"change:searchVisible",this.visibleChanged),this.render()},render:function(){return this.$el.html(r.trim('<form class="search-form"><span class="search-underline"></span><i class="icon-search"></i><input type="text" id="search-input" class="search-input" autocomplete="off"></form>')),this.$input=this.$el.find("input"),this.renderedOnce=!0,this.$el.closest(".top-left").addClass("search-visible"),this.loadTriggered||(a.widgetManager.appReady(i.info.id),this.loadTriggered=!0),this},visibleChanged:function(e){var i=a.models.customization.get("searchVisible");i?this.renderedOnce?this.$el.mFadeIn():this.render():this.$el.mFadeOut(500,!1),this.$el.closest(".top-left").toggleClass("search-visible",i)},doSearch:function(e){e.preventDefault();var i=this.$el.find(".search-input")[0].value;if(0<i.length){var s=a.models.customization.get("searchProvider")||"bing",t=this.getSearchProvider(s);if(t&&t.prefix){a.usage.save({type:a.usage.types.SEARCH,providerId:t.id},!0,!0);var n=t.prefix+encodeURIComponent(i);t.suffix&&(n+=t.suffix),t.output&&"inline"==t.output?r(".search-results").attr("src",n).attr("target","_top").addClass("fadein").css("display","block"):window.location.href=n}}},getSearchProvider:function(e){return"google"===e?{id:"google-generic",prefix:"https://www.google.com/search?q="}:{id:"bing-app-1",prefix:"https://www.bing.com/search?q=",suffix:"&PC=ATMM&FORM=MMXT01"}},handleFocusIn:function(){r(".search").addClass("active"),a.sendEvent("Search","Focused")},handleFocusOut:function(){r(".search").removeClass("active")},hideResults:function(e){(!r.contains(this.el,e.target)&&r(".search-results").hasClass("fadein")||1==e.hide)&&r(".search-results").removeClass("fadein").css("display","none")},checkForEscape:function(e){27==e.keyCode&&this.hideResults({hide:"true"})},toggleShow:function(e){this.$input.is(":focus")?this.$input.trigger("blur"):this.$input.trigger("focus")},hide:function(){this.$input.is(":focus")&&this.$input.trigger("blur")}}),i.styles.style(),setTimeout(function(){i.views.search=a.widgetManager.handover("search",i.views.Search,{region:"top-left",order:"append"})}),i};m.addinManager&&m.addinManager.registerAddinFn("162b82d0-f285-427c-8209-924f44ef4d21",fn_addin);