var fn_addin=function(o,i,e){var t=t||{};return t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=e||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.info={widget:!0,placeholderType:"none",id:"teamFocus",addin:"6a448447-dcf8-418e-a7f9-5f9dd1011efd",visibleSetting:"focusVisible"},o.console.log(o.elapsed()+": "+t.info.id+" started"),t.templates=t.templates||{},t.templates.teamfocus=Handlebars.template({1:function(e,t,o,i){return'\t\t\t<div class="icon-wrapper dash-icon more-toggle">\n\t\t\t\t<i class="icon-ellipsis more-icon"></i>\n\t\t\t</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,i){var s,a,l=t.helperMissing,n="function",d=this.escapeExpression;return'<div class="team-focus-content has-centered-3-col">\n\t<div class="side-col">\n\n\t</div>\n\t<div class="center-col">\n\t\t<span class="goal-label editable" data-ph="⟮ No Label ⟯">'+d(typeof(a=null!=(a=t.label||(null!=e?e.label:e))?a:l)==n?a.call(e,{name:"label",hash:{},data:i}):a)+'</span>\x3c!--\n\t\t--\x3e<span class="goal editable">'+d(typeof(a=null!=(a=t.goal||(null!=e?e.goal:e))?a:l)==n?a.call(e,{name:"goal",hash:{},data:i}):a)+'</span>\n\t\t<button class="team-focus-button add-team-focus"><i class="icon icon-plus"></i> Team Goal</button>\n\t</div>\n\t<div class="side-col">\n\t\t<div class="more more-dash">\n'+(null!=(s=t.if.call(e,null!=e?e.userIsAdmin:e,{name:"if",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?s:"")+'\t\t\t<div class="app dropdown more-dropdown dash-dropdown team-focus-dropdown nipple-top-left">\n\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t<li class="team-focus-edit">Edit</li>\n\t\t\t\t\t<li class="team-focus-clear">Clear</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'},useData:!0}),t.styles=t.styles||{},t.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML='.team-focus{margin-top:2px;line-height:1.8rem}.team-focus-content{display:flex}.team-focus.no-focus-set .team-focus-content{margin:0}.focus-fade-out .team-focus-content{animation:fade-out .5s ease 0s 1 forwards;pointer-events:none}@keyframes fade-out{from{opacity:1}to{opacity:0}}.team-focus .center-col{align-items:baseline}.team-focus-view{max-width:80vw;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.team-focus .editable{display:inline-block;border-bottom:1px solid rgba(255,255,255,0);transition:border .2s ease}.team-focus.show-editor .editable{display:inline-block;border-bottom:1px solid rgba(255,255,255,1);outline:0}.team-focus .goal-label{margin-right:12px;padding-bottom:5px;line-height:1;opacity:.85;font-size:.9375rem;font-weight:600;text-transform:uppercase;text-align:right}.team-focus .goal-label:empty{display:none}.team-focus.show-editor .goal-label{display:inline-block;border-bottom:1px solid rgba(255,255,255,0);text-align:left}.team-focus .goal-label:empty:before{content:attr(data-ph)}.team-focus .editable.goal-label:focus{min-width:92px;border-bottom:1px solid rgba(255,255,255,1)}.team-focus .goal{margin-right:7px;font-size:1.25rem;color:rgba(255,255,255,.8);text-align:left}.team-focus .goal:empty{width:0;min-width:auto;margin:0}.team-focus.show-editor .goal{min-width:150px;margin-right:7px}.team-focus .goal:empty:before{content:"D ";opacity:0}.team-focus .team-focus-button{padding:7px 19px 8px;display:inline-flex;opacity:0;background:rgba(255,255,255,.7);border-radius:50px;border:none;color:#181c1f;cursor:pointer;font-size:.875rem;font-weight:500;outline:0;transition:all .2s ease}.team-focus:hover .team-focus-button{opacity:1}.team-focus .team-focus-button:hover{background:#fff}.team-focus .team-focus-button i{margin-left:-4px;margin-right:4px}.team-focus .add-team-focus{display:none}.team-focus.no-focus-set .add-team-focus{display:inline-flex}.team-focus.focus-fade-out .team-focus-button,.team-focus.no-focus-set .more,.team-focus.show-editor .team-focus-button,.team-focus.show-editor ul{display:none}.team-focus .more{margin-left:4px}.team-focus .more-toggle{margin-top:-6px}.team-focus .icon-wrapper:after{height:28px;width:28px}.team-focus .more-icon{font-size:1rem}.team-focus-dropdown-wrapper{position:relative;font-size:1rem}.team-focus .dash-dropdown{left:-7px;margin-top:2px}.team-focus .more.invert .dash-dropdown{top:auto;bottom:calc(100% + 5px)}.team-focus-dropdown ul{min-width:90px}@media screen and (max-height:600px){.team-focus .goal-label{font-size:.8125rem}.team-focus .goal{font-size:1rem}}',document.getElementsByTagName("head")[0].appendChild(e)},t.collect.TeamFocus=o.collect.SyncedCollection.extend({initialize:function(e){(e=e||{}).name="teamFocus",e.serverIdAttribute="focusUuid",e.model=t.models.TeamFocus,e.transientProps=["createdDate"],e.apiUrl=o.globals.urlRootApi+"team/focus",o.collect.SyncedCollection.prototype.initialize.call(this,e)}}),t.models.TeamFocus=Backbone.Model.extend({initialize:function(e){e=e||{},this.idAttribute=this.collection.idAttribute||"csid",Backbone.Model.prototype.initialize.call(this,e)},defaults:function(){return{title:"Do the thing",createdDate:o.date(),updatedDate:o.now(),label:"This Week",active:!1,serverSetId:!1}}}),t.views.TeamFocus=Backbone.View.extend({template:t.templates.teamfocus,attributes:{id:"team-focus",class:"team-focus has-dash-icon u--fadeable"},events:{"click .team-focus-content":"handleClick","click .team-focus-edit":"toggleEditor","click .add-team-focus":"toggleEditor","click .team-focus-clear":"deactivate","click .team-focus-editor-close":"toggleEditor","click .team-focus-editor-save":"save","click .team-focus-dropdown":"eatClick","keydown .goal-label":"handleKeydown","keydown .goal":"handleKeydown","blur .editable":"handleBlur","click .more-dash":"toggleDropdown","focus .editable":"handleFocus"},initialize:function(){this.defaultLabel="Team Goal",this.dropdownOpen=!1,this.editorOpen=!1,this.focusSet=null,this.listenTo(o,"globalEvent:click",this.handleGlobalClick),this.listenTo(this.collection,"sync",this.onSync),this.collection.fetch({reset:!0}),this.listenTo(o,"focus:showMessage",this.hideGoal),this.listenTo(o,"focus:hideMessage",this.showGoal)},render:function(){var e={},t=this.options.order+"To";this.model&&this.model.get("active")?(e.goal=this.model.get("title"),e.label=this.model.get("label"),e.active=this.model.get("active"),e.userIsAdmin=o.models.teamInfo.get("team")&&o.models.teamInfo.get("team").userIsAdmin,this.$el.removeClass("no-focus-set"),this.$el.addClass("focus-set"),this.focusSet=!0):(this.model=null,this.$el.removeClass("focus-set"),this.$el.addClass("no-focus-set"),this.focusSet=!1),this.$el[t]("."+this.options.region)[this.renderedOnce?"mShow":"mFadeIn"]().html(this.template(e)),this.renderedOnce=!0,i("body").addClass("has-team-focus"),this.$content=this.$(".team-focus-content"),this.$goal=this.$(".goal"),this.$label=this.$(".goal-label"),this.$dropdownContainer=this.$(".more")},hideGoal:function(e){this.$el.mFadeOut(500,!1,e)},showGoal:function(e){this.$el.mFadeIn(500,!1,e)},handleClick:function(e){this.editorOpen||(this.focusSet&&this.dropdownOpen?this.toggleDropdown():this.focusSet||this.toggleEditor())},toggleDropdown:function(e,t){e&&e.stopPropagation();var o=!1,i=this.$(".more-dropdown");this.$el.offset().top+125>window.innerHeight?(o=!0,i.removeClass("nipple-top-left"),i.addClass("nipple-bottom-left")):(i.removeClass("nipple-bottom-left"),i.addClass("nipple-top-left")),void 0!==t?(this.dropdownOpen=t,this.$dropdownContainer.toggleClass("active",t),this.$dropdownContainer.toggleClass("invert",t&&o)):(this.dropdownOpen=!this.dropdownOpen,this.$dropdownContainer.toggleClass("active"),this.$dropdownContainer.toggleClass("invert",o))},toggleEditor:function(e,t){void 0!==t?(this.editorOpen=t,i(this.$el).toggleClass("show-editor",t),this.toggleDropdown(void 0,!1)):(this.editorOpen=!this.editorOpen,i(this.$el).toggleClass("show-editor")),this.editorOpen?(this.$goal.attr("contenteditable","true"),this.$label.attr("contenteditable","true"),this.focusSet||this.$label.text(this.defaultLabel),setEndOfContenteditable(this.$goal[0]),this.toggleDropdown(void 0,!1)):(this.$goal.attr("contenteditable","false"),this.$label.attr("contenteditable","false"))},handleKeydown:function(e){if(e&&13===e.keyCode){i(this.el).off("blur",".editable"),e.preventDefault(),this.save();var t=this;setTimeout(function(){i(t.el).on("blur",".editable",t,t.handleBlur)},10)}else e&&27===e.keyCode&&(this.toggleEditor(e,!1),this.toggleDropdown(e,!1),this.revertValues())},revertValues:function(){var e=this.model&&this.model.get("title"),t=this.model&&this.model.get("label");e||t?(this.$goal.text(e||""),this.$label.text(t||"")):this.delete()},save:function(){var e=this.$(".goal-label").text(),t=this.$(".goal").text();e=e&&e.trim(),t=t&&t.trim(),e||t?this.model?this.model.save({label:e,title:t}):this.collection.create({label:e,title:t,active:!0}):this.delete(),this.toggleEditor(void 0,!1),this.toggleDropdown(void 0,!1)},onSync:function(){this.model=this.collection.models&&this.collection.models.length&&this.collection.max(function(e){return e.get("active")?e.get("updatedDate"):0}),this.render(),this.listenTo(this.model,"change",this.render)},deactivate:function(){this.toggleDropdown(void 0,!1),this.$el.addClass("focus-fade-out");var e=this;setTimeout(function(){e.model&&e.model.save({active:!1}),e.collection.fetch({reset:!0}),e.model=null,e.render(),e.$el.removeClass("focus-fade-out")},1e3)},delete:function(){this.toggleDropdown(void 0,!1),this.model&&this.model.destroy(),this.model=null,this.render()},handleGlobalClick:function(e){(this.dropdownOpen||this.editorOpen)&&e&&!i.contains(this.$content[0],e.target)&&(this.toggleDropdown(e,!1),this.toggleEditor(e,!1))},handleBlur:function(e){var t=this;e&&e.data&&(t=e.data),t.timeout=setTimeout(function(){t.revertValues(),t.toggleEditor(void 0,!1),t.toggleDropdown(void 0,!1)},20)},handleFocus:function(e){this.timeout&&clearTimeout(this.timeout)},eatClick:function(e){e&&e.preventDefault(),e&&e.stopPropagation()}}),t.styles.style(),o.collect.teamfocus=new t.collect.TeamFocus,o.views.teamfocus=new t.views.TeamFocus({collection:o.collect.teamfocus,model:o.models.teamfocus,region:"team-focus-wrapper",order:"append"}),o.widgets.push(o.views.teamfocus),t};m.addinManager&&m.addinManager.registerAddinFn("6a448447-dcf8-418e-a7f9-5f9dd1011efd",fn_addin);