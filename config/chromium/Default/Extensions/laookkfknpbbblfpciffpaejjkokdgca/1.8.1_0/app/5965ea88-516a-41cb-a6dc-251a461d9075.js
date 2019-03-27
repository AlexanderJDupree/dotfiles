var fn_addin=function(d,a,e){var l=l||{};return l.styles=l.styles||{},l.commands=l.commands||{},l.dependencies=e||l.dependencies||{},l.styles.style=function(){},l.views=l.views||{},l.collect=l.collect||{},l.models=l.models||{},l.templates=l.templates||{},l.info={addin:"5965ea88-516a-41cb-a6dc-251a461d9075",widget:!0,placeholderType:"none",immediateLoad:!0,id:"introduction"},d.console.log(d.elapsed()+": "+l.info.id+" started"),l.templates=l.templates||{},l.templates["introduction-button-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return'<button class="button">'+this.escapeExpression("function"==typeof(o=null!=(o=t.value||(null!=e?e.value:e))?o:t.helperMissing)?o.call(e,{name:"value",hash:{},data:i}):o)+"</button>"},useData:!0}),l.templates["introduction-content-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return'<div class="prompt">\n\t<div class="question"><span class="question-title">'+this.escapeExpression("function"==typeof(o=null!=(o=t.message||(null!=e?e.message:e))?o:t.helperMissing)?o.call(e,{name:"message",hash:{},data:i}):o)+'</span></div>\n\t<div class="tip" data-test="introduction-tip"></div>\n</div>\n<div class="buttons"></div>\n'},useData:!0}),l.templates["introduction-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){return'<p class="logo"><img src="img/logo-white.svg"></p>\n<p class=content></p>\n'},useData:!0}),l.templates["introduction-third-party"]=Handlebars.template({1:function(e,t,n,i){var o;return'<div class="thirdparty"><img src="'+this.escapeExpression("function"==typeof(o=null!=(o=t.logo||(null!=e?e.logo:e))?o:t.helperMissing)?o.call(e,{name:"logo",hash:{},data:i}):o)+'"></div>'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o,a;return'<div class="prompt">\n\t\x3c!-- '+(null!=(o=t.if.call(e,null!=e?e.logo:e,{name:"if",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?o:"")+' --\x3e\n\t<div class="question"><span class="question-title">'+this.escapeExpression("function"==typeof(a=null!=(a=t.message||(null!=e?e.message:e))?a:t.helperMissing)?a.call(e,{name:"message",hash:{},data:i}):a)+'</span></div>\n\t<div class="tip" data-test="introduction-tip"></div>\n</div>\n<div class="buttons"></div>\n'},useData:!0}),l.templates["introduction-tip-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var o;return"<div>"+this.escapeExpression("function"==typeof(o=null!=(o=t.value||(null!=e?e.value:e))?o:t.helperMissing)?o.call(e,{name:"value",hash:{},data:i}):o)+"</div>"},useData:!0}),l.styles=l.styles||{},l.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".intro,.intro .buttons,.intro .tip,.intro input{text-align:center}.intro .input,.intro input{color:#fff;font-weight:500;outline:0}.intro{height:100%;background:url(../img/overlay-center.png) center center no-repeat;background-size:cover;line-height:1.7em}.intro input{width:50%;margin:0 auto;padding-top:15px;display:block;background:0;border:0;border-bottom:3px solid #fff}.intro p{margin:0}.intro .logo{padding-top:20px}.intro img{width:80px;border-radius:100%;box-shadow:0 0 50px rgba(0,0,0,.1)}.intro .tip{margin:2rem 20px 0;font-size:1.1875rem;line-height:1.5;white-space:normal}.intro .tip a{text-decoration:underline}.intro .buttons{width:100%;position:absolute;bottom:0;font-size:18px}.intro .button{margin-left:18px;padding:12px;font-size:83.33333%}.intro .prompt{height:150px;position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.intro .question{line-height:120%;white-space:normal}.intro .input{min-width:50%;max-width:90%;margin:0 auto;padding-top:15px;display:inline-block!important;border-bottom:3px solid #fff;line-height:normal;overflow:hidden}.intro .thirdparty img{height:200px;width:200px}.intro .loading-icon{vertical-align:baseline}.intro .loading-icon.icon-only{border-width:3px;width:var(--size);height:var(--size);--size:42px;margin-right:0}",document.getElementsByTagName("head")[0].appendChild(e)},l.views.ExpandableInput=Backbone.View.extend({attributes:{class:"width-dynamic input",spellcheck:"false"},tagName:"input",initialize:function(){},render:function(){function t(e){var t=e.val()||e.text()||e.attr("placeholder");return t||(t=""),t}this.fakeEl=a("<span>").hide().appendTo(document.body),this.fakeEl.text(t(this.$el)).css("font",this.$el.css("font"));var n=this;return this.$el.on("input",function(){n.fakeEl.text(t(n.$el)).css("font",n.$el.css("font"));var e=n.fakeEl.width();n.$el.css({width:e+20})}).trigger("input"),this}}),l.views.Introduction=Backbone.View.extend({attributes:{id:"introduction",class:"intro"},template:l.templates["introduction-template"],initialize:function(){var e=this;this.activeView=null,localStorage.removeItem("doLoginOnNextLoad"),setTimeout(function(){e.render()},1)},render:function(){d.widgetManager.hideAppsExcept(".apps .full",!0);var e=(this.options.order||"append")+"To";this.$el[e]("."+this.options.region).mHide().html(this.template()).mFadeIn(1e3);var t=localStorage.getItem("loginParams");t?(l.views.loginPasswordPrompt=new l.views.LoginPasswordPrompt,this.$el.find(".content").append(l.views.loginPasswordPrompt.render(t).$el.mFadeIn(1e3)),this.processPendingLogin(t)):d.models.customization.get("displayname")?this.promptForEmail():this.promptForName()},promptForName:function(){d.sendEvent("Introduction","Name","Show"),l.views.namePrompt=new l.views.NamePrompt,this.activeView=l.views.namePrompt,this.$el.find(".content").append(l.views.namePrompt.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},promptForEmail:function(){l.views.emailPrompt=new l.views.EmailPrompt,this.activeView=l.views.emailPrompt,this.$el.find(".content").append(l.views.emailPrompt.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},showThirdPartyLogin:function(e){d.sendEvent("Introduction","Third Party Login","Show");var t={};t.parent=this,t.brandingInfo=e,l.views.thirdPartyLogin=new l.views.ThirdPartyLogin(t),this.activeView=l.views.thirdPartyLogin,this.$el.find(".content").append(l.views.thirdPartyLogin.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},promptForPasswordLogin:function(e){d.sendEvent("Introduction","Password For Login","Show");var t={};t.parent=this,t.passwordResetRequired=e,l.views.loginPasswordPrompt=new l.views.LoginPasswordPrompt(t),this.activeView=l.views.loginPasswordPrompt,this.$el.find(".content").append(l.views.loginPasswordPrompt.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},promptForPasswordCreate:function(e){d.sendEvent("Introduction","Password For Create","Show"),l.views.createPasswordPrompt=new l.views.CreatePasswordPrompt({inviteCode:e}),this.activeView=l.views.createPasswordPrompt,this.$el.find(".content").append(l.views.createPasswordPrompt.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},promptForPasswordReset:function(){d.sendEvent("Introduction","Password For Reset","Show"),l.views.resetPasswordPrompt=new l.views.ResetPasswordPrompt,this.activeView=l.views.resetPasswordPrompt,this.$el.find(".content").append(l.views.resetPasswordPrompt.render().$el.mFadeIn(1e3)),this.$el.find("#introduction-input").trigger("focus")},doneIntroductionWithMessage:function(){var e=this;this.handledDone||(this.handledDone=!0,localStorage.removeItem("doLoginOnNextLoad"),d.readyForWidgets=!0,d.conditionalFeatures.featureEnabled("team")&&a("body").addClass("has-team"),d.trigger("readyForWidgets"),this.$el.mFadeOut(1e3,!1,function(){d.appView.render(!0,function(){d.widgetManager.showApps(!0),d.trigger("weather:reset")}),e.destroy()}))},showLoading:function(e){var t=this.$el.find(".tip"),n=0,i=e?'<div class="loading"><span class="loading-icon icon-only"></span></div>':'<div class="loading"><span class="loading-icon"></span>Loading...</div>';t.html()&&(n=500),t.mFadeOut(n,!0,function(){t.html(i).mFadeIn(500)})},destroy:function(){this.undelegateEvents(),this.$el.removeData().off(),this.remove()},processPendingLogin:function(){var s=this,e=localStorage.getItem("pendingLoginState");l.views.introduction.showLoading(!0),a.ajax({type:"POST",contentType:"application/json",beforeSend:setMomentumAuthHeader,data:JSON.stringify({pendingState:e}),url:d.globals.urlRootLogin+"user/authenticate"}).done(function(e){s.successfulLogin(e,!0)}).fail(function(e,t){if(s.loading=!1,localStorage.removeItem("onetimeSent"),401===e.status){var n=localStorage.getItem("email"),i="The one-time link"+(n&&" for "+n)+" has expired."+(n&&" Try sending a new one-time login link to the same email, or use a different email address.");if(s.$el.find(".tip").html('<div class="loading">'+i+"</div>").mFadeIn(500),n){var o=new l.views.IntroductionButton({value:"Use a different email address",clicked:function(){return s.$el.find(".tip").html(""),s.$el.find(".buttons").remove(),s.promptForEmail()}});s.$el.find(".buttons").append(o.render().$el)}else{var a=new l.views.IntroductionButton({value:"Back to What's your email?",clicked:function(){return s.$el.find(".tip").html(""),s.$el.find(".buttons").remove(),s.promptForEmail()}});s.$el.find(".buttons").append(a.render().$el)}}else s.$el.find(".tip").html('<div class="loading">Sorry, we\'re having trouble connecting to our server. Please try again.</div>').mFadeIn(500)}),localStorage.removeItem("pendingLoginState")},successfulLogin:function(e,t){this.loading=!1,t&&d.commandManager.execute("user.cleanup",{type:"all"}),e.token&&(d.commandManager.execute("notification.dismiss"),localStorage.token=e.token,e.token_uuid&&(localStorage.token_uuid=e.token_uuid),e.features&&d.conditionalFeatures.setFeatures(e.features),d.widgetManager.hideAppsExcept(".apps .full",!0),d.trigger("user:successfulLogin",function(){localStorage.setItem("loggedIn",d.now()),localStorage.removeItem("onetimeSent"),l.views.introduction.doneIntroductionWithMessage()}))}}),l.views.NamePrompt=Backbone.View.extend({tagName:"span",template:l.templates["introduction-content-template"],events:{"keydown input":"updateOnEnter"},render:function(){var e={message:"Hello, what's your name?"};this.$el.html(this.template(e));var t=new l.views.ExpandableInput;this.$(".question").after(t.render().$el),t.$el.attr({id:"introduction-input","data-test":"introduction-name"});var n=this;function i(){var e=n.$el.find(".question-title").outerWidth();n.$el.find(".input").css({"min-width":e}).trigger("focus")}return setTimeout(i,10),this.listenTo(d,"appsReady",i),this},updateOnEnter:function(e){isTabOrEnter(e)&&(e.preventDefault(),this.save())},save:function(){d.sendEvent("Introduction","Name","Submit");var e=this,t=this.$el.find("input")[0].value.trim();t.length<1||(d.models.customization.save({displayname:t}),this.$el.mFadeOut(1e3,!0,function(){e.remove(),l.views.introduction.promptForEmail()}))}}),l.views.EmailPrompt=Backbone.View.extend({tagName:"span",template:l.templates["introduction-content-template"],events:{"keydown .input":"updateOnEnter"},initialize:function(){this.listenTo(d,"globalEvent:esc",this.handleBack),this.loading=!1},render:function(){var e=this,t={message:"What's your email, "+d.models.customization.get("displayname")+"?"},n=new l.views.IntroductionButton({value:"Stay logged out",clicked:function(){return e.stayOffline()}});this.$el.html(this.template(t)),this.$el.find(".buttons").append("Or would you rather stay logged out?").append(n.render().$el);var i=new l.views.ExpandableInput;this.$el.find(".question").after(i.render().$el),i.$el.attr({id:"introduction-input","data-test":"introduction-email"});var o=this;function a(){var e=o.$el.find(".question-title").outerWidth();o.$el.find(".input").css({"min-width":e}).trigger("focus")}return setTimeout(a,10),this.listenTo(d,"appsReady",a),this},handleBack:function(e){d.sendEvent("Introduction","Email","Escape Pressed"),this.stayOffline()},updateOnEnter:function(e){isTabOrEnter(e)&&(e.preventDefault(),this.checkEmail())},stayOffline:function(){d.widgetManager.hideAppsExcept(".apps .full",!0),d.sendEvent("Introduction","Email","Stay Offline Clicked"),localStorage.stayOffline=!0,localStorage.removeItem("onetimeSent"),localStorage.removeItem("pendingLoginState"),localStorage.removeItem("loginParams"),l.views.introduction.doneIntroductionWithMessage()},checkEmail:function(){d.sendEvent("Introduction","Email","Submit");var n=this,t=this.$el.find(".input").val().trim();if(t&&!(t.length<1))if(validateEmail(t))n.loading||(n.loading=!0,localStorage.email=t,l.views.introduction.showLoading(),a.ajax({type:"GET",contentType:"application/json",beforeSend:setMomentumAuthHeader,url:d.globals.urlRootApi+"user-search?email="+encodeURIComponent(t)}).done(function(e){e&&e.managedDomain?n.$el.mFadeOut(1e3,!0,function(){n.remove(),e.brandingInfo=e.brandingInfo||{},l.views.introduction.showThirdPartyLogin(e.brandingInfo),d.commandManager.execute("auth.thirdparty",t,function(){console.log("callback")})}):(n.$el.mFadeOut(1e3,!0,function(){n.remove(),l.views.introduction.promptForPasswordLogin(e.passwordResetRequired)}),n.loading=!1)}).fail(function(e,t){404===e.status?(n.$el.mFadeOut(1e3,!0,function(){n.remove(),l.views.introduction.promptForPasswordCreate()}),n.loading=!1):(n.loading=!1,n.$el.find(".tip").html('<div class="loading">Sorry, we\'re having trouble connecting to our server. Please try again.</div>').mFadeIn(500))}));else{var e=new l.views.IntroductionTip({value:"Sorry, "+t+" doesn't seem to be a valid email address. Please try again."});this.$el.find(".tip").html(e.render().$el.mFadeIn(500))}}}),l.views.ThirdPartyLogin=Backbone.View.extend({template:l.templates["introduction-third-party"],brandingInfoBase:{messageTemplate:"Logging in to {{companyName}}...",subMessageTemplate:"Redirecting to {{idProviderName}} to verify your account"},render:function(){var e=this,t=Object.assign({},this.brandingInfoBase,this.options.brandingInfo),n={message:t.message||t.messageTemplate.replace("{{companyName}}",t.companyName).replace("{{idProviderName}}",t.idProviderName),logo:t.logo};this.$el.html(this.template(n));var i=t.subMessage||t.subMessageTemplate.replace("{{companyName}}",t.companyName).replace("{{idProviderName}}",t.idProviderName);e.$el.find(".tip").text(i).addClass("loading").mFadeIn(500);var o=new l.views.IntroductionButton({value:"Back to What's your email?",clicked:function(){return e.returnToLogin()}});return this.$el.find(".buttons").append(o.render().$el),this},returnToLogin:function(){d.sendEvent("Introduction","Third Party Login","Return to Login Clicked");var e=this;localStorage.removeItem("onetimeSent"),e.$el.mFadeOut(1e3,!0,function(){e.remove(),d.models.customization.get("displayname")?l.views.introduction.promptForEmail():l.views.introduction.promptForName()})}}),l.views.LoginPasswordPrompt=Backbone.View.extend({tagName:"span",template:l.templates["introduction-content-template"],events:{"keydown input":"updateOnEnter"},initialize:function(e){this.listenTo(d,"globalEvent:esc",this.handleBack),this.loading=!1,e&&(this.passwordResetRequired=e.passwordResetRequired,this.parent=e.parent)},render:function(e){var t=this,n={message:this.passwordResetRequired?"What's your invite code?":"What's your password?"};if(this.$el.html(this.template(e?null:n)),e)return this;var i=new l.views.IntroductionButton({value:"Use a different email address",clicked:function(){return t.changeEmail()}}),o=new l.views.IntroductionButton({value:"Change your password",clicked:function(){return t.resetPassword()}});this.$el.find(".buttons").append(i.render().$el),this.$el.find(".buttons").append(o.render().$el);var a=new l.views.ExpandableInput;this.$el.find(".question").after(a.render().$el),a.$el.attr({id:"introduction-input","data-test":"introduction-prompt-password"}),this.$el.find(".input").attr("type","password").trigger("focus");var s=this;function r(){var e=s.$el.find(".question-title").outerWidth();s.$el.find(".input").css({"min-width":e}).trigger("focus")}return setTimeout(r,10),this.listenTo(d,"appsReady",r),this},handleBack:function(e){d.sendEvent("Introduction","Password For Login","Escape Pressed"),this.changeEmail(e)},updateOnEnter:function(e){isTabOrEnter(e)&&this.act()},changeEmail:function(e){d.sendEvent("Introduction","Password For Login","Change Email Clicked");var t=this;t.$el.mFadeOut(1e3,!0,function(){t.remove(),d.models.customization.get("displayname")?l.views.introduction.promptForEmail():l.views.introduction.promptForName()})},resetPassword:function(e){d.sendEvent("Introduction","Password For Login","Reset Password Clicked");var t=this;t.$el.mFadeOut(1e3,!0,function(){t.remove(),l.views.introduction.promptForPasswordReset()})},act:function(){this.passwordResetRequired?this.verifyInviteCode():this.login()},login:function(){d.sendEvent("Introduction","Password For Login","Submit");var i=this,e=localStorage.email,t=this.$el.find("input")[0].value;if(t.length<6){var n=new l.views.IntroductionTip({value:"Passwords need to be at least 6 characters long."});i.$el.find(".tip").html(n.render().$el.mFadeIn(500))}else i.loading||(i.loading=!0,l.views.introduction.showLoading(),a.ajax({type:"POST",contentType:"application/json",data:JSON.stringify({username:e,password:t}),beforeSend:setMomentumAuthHeader,url:d.globals.urlRootLogin+"user/authenticate"}).done(function(e){i.successfulLogin(e)}).fail(function(e,t){if(400===e.status||401===e.status){var n=new l.views.IntroductionTip({value:"The password you entered for the email "+localStorage.email+" isn't right."});i.$el.find(".tip").html(n.render().$el.mFadeIn(500)),i.loading=!1}else i.loading=!1,i.$el.find(".tip").html('<div class="loading">Sorry, we\'re having trouble connecting to our server. Please try again.</div>').mFadeIn(500)}))},successfulLogin:function(e,t){this.loading=!1,t&&d.commandManager.execute("user.cleanup",{type:"all"}),e.token&&(d.commandManager.execute("notification.dismiss"),localStorage.token=e.token,e.token_uuid&&(localStorage.token_uuid=e.token_uuid),e.features&&d.conditionalFeatures.setFeatures(e.features),d.widgetManager.hideAppsExcept(".apps .full",!0),d.trigger("user:successfulLogin",function(){localStorage.setItem("loggedIn",d.now()),localStorage.removeItem("onetimeSent"),l.views.introduction.doneIntroductionWithMessage()}))},verifyInviteCode:function(){d.sendEvent("Introduction","Invited team member first login","Submit");var i=this,e=localStorage.email,t=this.$el.find("input")[0].value;if(6===t.length)i.loading||(i.loading=!0,l.views.introduction.showLoading(),a.ajax({type:"POST",contentType:"application/json",data:JSON.stringify({username:e,code:t}),beforeSend:setMomentumAuthHeader,url:d.globals.urlRootLogin+"user/verify-invite"}).done(function(e){i.loading=!1,i.$el.mFadeOut(1e3,!0,function(){i.remove(),i.parent.promptForPasswordCreate(t)})}).fail(function(e,t){if(400===e.status||401===e.status){var n=new l.views.IntroductionTip({value:"The invite code you entered for the email "+localStorage.email+" isn't right."});i.$el.find(".tip").html(n.render().$el.mFadeIn(500)),i.loading=!1}else i.loading=!1,i.$el.find(".tip").html('<div class="loading">Sorry, we\'re having trouble connecting to our server. Please try again.</div>').mFadeIn(500)}));else{var n=new l.views.IntroductionTip({value:"Invitation codes are 6 digits long."});i.$el.find(".tip").html(n.render().$el.mFadeIn(500))}}}),l.views.CreatePasswordPrompt=Backbone.View.extend({tagName:"span",template:l.templates["introduction-content-template"],events:{"keydown input":"updateOnEnter"},initialize:function(e){this.listenTo(d,"globalEvent:esc",this.handleBack),this.loading=!1,e&&(this.inviteCode=e.inviteCode)},render:function(){var e=this,t={message:"Please choose a password."},n=new l.views.IntroductionButton({value:"Use a different email address",clicked:function(){return e.changeEmail()}});this.$el.html(this.template(t));var i=new l.views.ExpandableInput;this.$el.find(".question").after(i.render().$el),i.$el.attr({id:"introduction-input","data-test":"introduction-create-password"}),this.$el.find("input").attr("type","password").trigger("focus"),this.$el.find(".buttons").append(n.render().$el),this.$(".tip").html('Your privacy is important. Learn more about how we&lsquo;re protecting your privacy in our <a href="https://momentumdash.com/terms" target="_blank">Terms</a> and <a href="https://momentumdash.com/privacy" target="_blank">Privacy Policy</a>.');var o=this;function a(){var e=o.$el.find(".question-title").outerWidth();o.$el.find(".input").css({"min-width":e}).trigger("focus")}return setTimeout(a,10),this.listenTo(d,"appsReady",a),this},updateOnEnter:function(e){isTabOrEnter(e)&&this.create()},handleBack:function(e){d.sendEvent("Introduction","Password For Create","Escape Pressed"),this.changeEmail(e)},changeEmail:function(e){d.sendEvent("Introduction","Password For Create","Change Email Clicked");var t=this;t.$el.mFadeOut(1e3,!0,function(){t.remove(),l.views.introduction.promptForEmail()})},create:function(){d.sendEvent("Introduction","Password For Create","Submit");var o=this,e=localStorage.email,t=this.$el.find("input")[0].value;if(t.length<6){var n=new l.views.IntroductionTip({value:"Passwords need to be at least 6 characters long."});o.$el.find(".tip").html(n.render().$el.mFadeIn(500))}else if(!o.loading){o.loading=!0,l.views.introduction.showLoading();var i=this.inviteCode?d.globals.urlRootLogin+"user/create-password":d.globals.urlRootLogin+"user/register";a.ajax({type:"POST",contentType:"application/json",beforeSend:setMomentumAuthHeader,data:JSON.stringify({name:d.models.customization.get("displayname"),email:e,password:t,invite:this.inviteCode,version:d.globals.version}),url:i}).done(function(e){e.token?(localStorage.token=e.token,e.token_uuid&&(localStorage.token_uuid=e.token_uuid),e.features&&d.conditionalFeatures.setFeatures(e.features)):e.first_time_key&&(localStorage.first_time_key=e.first_time_key,localStorage.next_login_attempt=d.now(),e.token_uuid&&(localStorage.token_uuid=e.token_uuid)),d.widgetManager.hideAppsExcept(".apps .full",!0),l.views.introduction.doneIntroductionWithMessage()}).fail(function(e,t){var n="An error occurred during registration. Please try again shortly.";e.responseJSON&&e.responseJSON.msg&&(n=e.responseJSON.msg);var i=new l.views.IntroductionTip({value:n});o.$el.find(".tip").html(i.render().$el.mFadeIn(500))}).always(function(){o.loading=!1})}}}),l.views.ResetPasswordPrompt=Backbone.View.extend({tagName:"span",template:l.templates["introduction-content-template"],events:{"keydown input":"updateOnEnter"},initialize:function(){this.listenTo(d,"globalEvent:esc",this.handleBack),this.loading=!1},render:function(e){var t=this,n={message:"What would you like your new password to be?"},i=new l.views.IntroductionButton({value:"Use a different email address",clicked:function(){return t.changeEmail()}});this.$el.html(this.template(n));var o=new l.views.ExpandableInput;this.$el.find(".question").after(o.render().$el),o.$el.attr({id:"introduction-input","data-test":"introduction-reset-password"}),this.$el.find(".buttons").append("Changing password for "+localStorage.email).append(i.render().$el),this.$el.find("input").attr("type","password").trigger("focus");var a=this;function s(){var e=a.$el.find(".question-title").outerWidth();a.$el.find(".input").css({"min-width":e}).trigger("focus")}return setTimeout(s,10),this.listenTo(d,"appsReady",s),this},handleBack:function(e){d.sendEvent("Introduction","Password For Reset","Escape Pressed"),this.changeEmail(e)},changeEmail:function(e){d.sendEvent("Introduction","Password For Reset","Change Email Clicked");var t=this;t.$el.mFadeOut(1e3,!0,function(){t.remove(),l.views.introduction.promptForEmail()})},updateOnEnter:function(e){isTabOrEnter(e)&&this.reset()},reset:function(){d.sendEvent("Introduction","Password For Reset","Submit");var n=this,e=localStorage.email,t=this.$el.find("input")[0].value;if(t.length<6){var i=new l.views.IntroductionTip({value:"Passwords need to be at least 6 characters long."});n.$el.find(".tip").html(i.render().$el.mFadeIn(500))}else n.loading||(n.loading=!0,l.views.introduction.showLoading(),a.ajax({type:"POST",contentType:"application/json",data:JSON.stringify({name:d.models.customization.get("displayname"),email:e,password:t}),beforeSend:setMomentumAuthHeader,url:d.globals.urlRootLogin+"user/forgot"}).done(function(e){d.commandManager.execute("notification.show","Password change started","Check your email to change your password. Your password change email may take a few moments to arrive."),d.widgetManager.hideAppsExcept(".apps .full",!0),l.views.introduction.doneIntroductionWithMessage()}).fail(function(e,t){n.$el.find(".tip").html('<div class="loading">Sorry, we\'re having trouble connecting to our server. Please try again.</div>').mFadeIn(500)}).always(function(){n.loading=!1}))}}),l.views.IntroductionTip=Backbone.View.extend({template:l.templates["introduction-tip-template"],render:function(){var e={value:this.options.value};return this.setElement(a(a.trim(this.template(e)))),this}}),l.views.IntroductionButton=Backbone.View.extend({template:l.templates["introduction-button-template"],events:{click:"clicked"},render:function(){var e={value:this.options.value};return this.setElement(a(a.trim(this.template(e)))),this},clicked:function(e){this.options.clicked()}}),l.styles.style(),l.views.introduction=new l.views.Introduction({region:"full"}),l};m.addinManager&&m.addinManager.registerAddinFn("5965ea88-516a-41cb-a6dc-251a461d9075",fn_addin);