window.inAction=1,window.allowSlide=1,window.blockScroll=1,window.effectOffset=500,window.effectSpeed=1e3,window.slideSpeed=1e3,window.cleanupDelay=1400,window.horizontalMode=0,window.sidebarShown=0,window.loadingProgress=0,window.smoothScroll=0,window.scrollSpeed=.5,window.preload=1,window.setHashLink=1,window.hideSidebarOnBodyClick=1,window.collectScrolls=0,window.sliderStatus=0,window.minScrollToSlide=500,window.minSwipeToSlide=4,window.enableMobileZoom=0,window.hideOnScrollSensitivity=100,window.allowParallaxOnMobile=1,window.hidePopupOnBodyClick=1;var $html=$("html");$(window).on("load",function(){window.loaded=1}),$(document).ready(function(){"use strict";var e=$("body");function i(){var e=window.location.href.split("#")[1];if(e&&$('.slide[data-name="'+e+'"]').length>0){var i=$('.slide[data-name="'+e+'"]');window.isMobile&&window.isSimplifiedMobile||window.isScroll?i.length&&(!window.preload||window.loaded?$("html,body").stop().clearQueue().animate({scrollTop:i.position().top},window.effectSpeed):$(window).on("load",function(){$("html,body").stop().clearQueue().animate({scrollTop:i.position().top},window.effectSpeed)})):(window.stage=$(".slide").index(i)+1,n(window.stage))}}if(setTimeout(function(){$(window).trigger("ready")},1),e.hide().show(0),window.isScroll=e.hasClass("scroll"),window.isSimplifiedMobile=e.hasClass("simplifiedMobile"),(window.isScroll||window.isSimplifiedMobile&&window.isMobile)&&$html.addClass("scrollable"),$html.addClass("page-ready"),e.hasClass("fast")?(window.slideSpeed=700,window.cleanupDelay=1200,window.effectSpeed=800,window.scrollSpeed=.35,window.effectOffset=400):e.hasClass("slow")&&(window.slideSpeed=1400,window.cleanupDelay=2e3,window.effectSpeed=1400,window.effectOffset=400,window.scrollSpeed=.8,window.effectOffset=600),window.stage=1,window.stages=$(".slide").length,e.hasClass("horizontal")&&(window.horizontalMode=1),e.hasClass("noPreload")&&(window.preload=0),e.hasClass("animated")?window.isAnimated="auto":e.hasClass("animateOnEvent")&&(window.isAnimated="animateOnEvent",window.isMobile&&(window.isAnimated="auto",e.removeClass("animateOnEvent").addClass("animated"))),window.isSimplifiedMobile&&window.isMobile&&(window.isAnimated=!1,e.removeClass("animated animateOnEvent"),$("[class*='ae-']").addClass("done")),window.isAnimated||(window.cleanupDelay=0),e.hasClass("smoothScroll")&&!window.isMobile&&(window.smoothScroll=1),i(),$(window).on("popstate",function(e){setTimeout(function(){i()},100),e.preventDefault()}),window.preload){var o=[];function a(){var e=window.loadingProgress/window.images;window.progressBar.css("width",100*e+"%"),window.loadingProgress==window.images&&window.progressBar.addClass("loaded")}$("*").each(function(){"none"!==$(this).css("background-image")?o.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/,"").replace(/[\'\"]?\).*/,"")):$(this).is("img")&&o.push($(this).attr("src"))}),window.images=o.length,window.progressBar=$(".progress-bar"),$.cacheImage(o,{complete:function(){window.loadingProgress++,a()}}),a()}function d(){$html.addClass("page-loaded"),window.inAction=0,window.blockScroll=0,window.loaded=1,setTimeout(function(){window.isScroll&&(l(),g()),window.isMobile&&window.isSimplifiedMobile?($(".slide").addClass("selected animate active"),l(),g()):n(window.stage)},500)}function n(i){if(i=parseInt(i),!(window.isMobile&&window.isSimplifiedMobile||window.isScroll)){g();var o=$(".slide").eq(i-1),a=$(".slide.selected"),d=a.index(".slide")+1;T(),t(),v(),window.allowSlide=1,e.removeClass("sidebarShown lastSlide firstSlide hidePanel-top hidePanel-bottom"),0!=window.setStageClasses&&(1===window.stage&&e.addClass("firstSlide"),window.stages===window.stage&&1!==window.stages&&e.addClass("lastSlide"),e.removeClassByPrefix("stage-").addClass("stage-"+window.stage)),o.hasClass("whiteSlide")?e.addClass("whiteSlide"):e.removeClass("whiteSlide"),d!==i&&0!=window.setStageClasses&&(a.removeClass("selected").addClass("active"),o.removeClass("before after").addClass("selected active"),o.prevAll(".slide").addClass("before").removeClass("after"),o.nextAll(".slide").addClass("after").removeClass("before"),$(window).trigger("slideChange",[parseInt(i),o])),window.setHashLink&&(o.attr("data-name")||o.attr("id")?window.location.hash=o.attr("data-name")?o.attr("data-name"):o.attr("id"):window.location.toString().indexOf("#")>0&&"file:"!==location.protocol&&location.href.split("#")[0]&&(history.pushState?window.history.pushState("","",location.href.split("#")[0]):window.location.hash="")),o.find(".content, .container").scrollTop(0),window.loaded&&(window.blockScroll=1,setTimeout(function(){d!==i&&a.removeClass("active animate"),window.blockScroll=0},window.effectSpeed),window.effectOffset>window.slideSpeed&&(window.effectOffset=window.slideSpeed),setTimeout(function(){o.addClass("animate")},window.slideSpeed-window.effectOffset),$(".done").removeClass("done"),clearTimeout(window.clearElementAnimation),window.clearElementAnimation=setTimeout(function(){$(".slide.selected [class*='ae-']").addClass("done")},window.slideSpeed+window.effectSpeed+window.cleanupDelay))}}function t(e){$(".zoom-overlay-open").length>0&&($(".zoom-img").click(),e&&$(".zoom-img-wrap, .zoom-overlay").remove())}n(window.stage),$(".grid.masonry").masonry({itemSelector:"li",transitionDuration:"0.1s"}),$(".grid.masonry").imagesLoaded().progress(function(){$(".grid.masonry").masonry("layout")}),window.preload&&window.images&&!window.loaded||d(),window.loaded||$(window).on("load",function(){d()}),$(".animated").on("click","[class*='ae-']:not('.done')",function(){$(this).addClass("done")}),window.changeSlide=function(e){if("increase"===e?e=window.stage+1>=window.stages?window.stages:window.stage+1:"decrease"===e&&(e=window.stage-1<1?1:window.stage-1),window.isMobile&&window.isSimplifiedMobile||window.isScroll){window.stage=e;var i=$(".slide:eq("+(window.stage-1)+")"),o=$(i).offset().top;$("html,body").stop().clearQueue().animate({scrollTop:o},1e3)}else if(e!==window.stage&&e<=window.stages&&1!==window.inAction){window.inAction=1,window.stage=e;var a=0;$(".zoom-overlay-open").length>0&&(t(),a=550),setTimeout(function(){n(window.stage),setTimeout(function(){window.inAction=0},window.slideSpeed)},a)}},$(".nextSlide").on("click",function(){window.changeSlide("increase")}),$(".prevSlide").on("click",function(){window.changeSlide("decrease")}),$(".toFirstSlide").on("click",function(){window.changeSlide(1),history.pushState?window.history.pushState("","",location.href.split("#")[0]):window.location.hash="",v()}),$(".toLastSlide").on("click",function(){window.changeSlide(window.stages),history.pushState?window.history.pushState("","",location.href.split("#")[0]):window.location.hash="",v()}),$('[class*="toSlide-"]').on("click",function(){var e=parseInt($(this).attr("class").split("toSlide-")[1].split(" ")[0]);window.changeSlide(e),v()}),$(window).on("resize load ready",function(){$('[data-action="zoom"]').removeAttr("style"),$(".zoom-overlay").length>0&&t("fast"),window.windowHeight=$(window).height(),window.windowWidth=$(window).width(),window.documentHeight=$(document).height()});$("html,body").on("DOMMouseScroll mousewheel scroll touchmove",function(i){var o=$(".slide.selected .content"),a=Math.ceil(Math.abs(i.deltaY)*i.deltaFactor),d=window.isFirefox?2:1,n=window.isWindows?2*d:d,t=(i.originalEvent.wheelDelta?i.originalEvent.wheelDelta:i.deltaY*i.deltaFactor)*d*n,s=i.deltaY>=0?"up":"down",l=o.scrollTop(),w=o.find(".container").outerHeight(),r=detectZoom.device(),c=window.isFirefox&&window.isWindows?200:window.minScrollToSlide;if(a){if(window.isScroll&&!window.sidebarShown&&!window.popupShown&&!window.blockScroll)if(window.smoothScroll&&!window.isMobile){i.preventDefault(),t>1500&&(t=1500),t<-1e3&&(t=-1500);var h=$(window),p=h.scrollTop()-t;TweenLite.to(h,window.scrollSpeed,{scrollTo:{y:p,autoKill:!1},ease:Power4.easeOut,overwrite:"all"})}else window.isWindows||o.scrollTop(l-t);window.isScroll||window.isMobile&&window.isSimplifiedMobile||(w>window.windowHeight&&("up"===s&&0===o.scrollTop()||"down"===s&&o.scrollTop()+window.windowHeight>=Math.floor(w/r)?window.allowSlide=1:window.allowSlide=0,window.panelsToHide&&("down"===s&&o.scrollTop()>0?e.addClass("hidePanel-top"):"up"===s&&e.removeClass("hidePanel-top"),e.addClass("hidePanel-bottom"),"down"===s&&o.scrollTop()+window.windowHeight>=Math.floor(w/r)?e.removeClass("hidePanel-bottom"):"up"===s&&e.addClass("hidePanel-bottom")),window.sidebarShown||window.popupShown||window.blockScroll||(window.smoothScroll?(i.preventDefault(),t>1500&&(t=1500),t<-1e3&&(t=-1500),TweenLite.to(o,.5,{scrollTo:{y:l-t,autoKill:!1},ease:Power4.easeOut,overwrite:5})):(l="up"===s?l-a:l+a,o.scrollTop(l)))),window.allowSlide&&a&&(window.collectScrolls="down"==s?window.collectScrolls+a:window.collectScrolls-a,setTimeout(function(){window.collectScrolls=0},200)),Math.abs(window.collectScrolls)>=c&&window.allowSlide&&!window.sidebarShown&&!window.popupShown&&!window.disableOnScroll&&(window.collectScrolls=0,("down"===s&&window.stage!==window.stages||"up"===s&&1!==window.stage)&&1!==window.inAction&&("down"===s?window.changeSlide("increase"):window.changeSlide("decrease"))))}}),(window.isMobile&&window.isSimplifiedMobile||window.isScroll)&&$(window).on("DOMMouseScroll mousewheel scroll touchmove load",function(){l()});var s=0;function l(){++s>=2&&(T(),s=0),$(".slide").each(function(i,o){var a=$(o),d=a.index(".slide"),n=$(document).scrollTop(),t=a.offset().top,s=a.height(),l=window.windowHeight/2>s?s/2:window.windowHeight/2,w=t<window.windowHeight+n-l&&t>n-s+l,r=2*((n+window.windowHeight-t)/(window.windowHeight+s)-.5),c=!0;0===n&&(c=0===i),n+window.windowHeight===window.documentHeight&&(c=i===window.stages-1),0!=window.setStageClasses&&(w&&c?(a.prevAll(".slide").addClass("before").removeClass("after"),a.nextAll(".slide").addClass("after").removeClass("before"),a.addClass("selected animate active").removeClass("after before"),window.stage===d+1&&window.firstTimeTrigger||(window.stage=d+1,$(window).trigger("slideChange",[window.stage,a]),1===window.stage?e.addClass("firstSlide"):e.removeClass("firstSlide"),window.stages===window.stage?e.addClass("lastSlide"):e.removeClass("lastSlide"),e.removeClassByPrefix("stage-").addClass("stage-"+window.stage),a.hasClass("whiteSlide")?e.addClass("whiteSlide"):e.removeClass("whiteSlide"),"auto"==window.isAnimated&&(window.clearElementAnimation=setTimeout(function(){a.find("[class*='ae-']").addClass("done")},window.effectSpeed+window.cleanupDelay)),g()),window.firstTimeTrigger||(window.firstTimeTrigger=1,$(window).trigger("slideChange",[window.stage,a]))):a.removeClass("selected")),!(r>-1&&r<1)||window.allowParallaxOnMobile&&window.isMobile||(a.hasClass("parallax")||a.find(".parallax-element"))&&a.find(".parallax-element").each(function(){var e=$(this),i=parseInt(e.data("parallax-velocity"))?parseInt(e.data("parallax-velocity")):50,o=r*i;i>100&&(i=100),e.css("-webkit-transform","translate3d(0, "+o+"%, 0)").css("transform","translate3d(0, "+o+"%, 0)")})}),"animateOnEvent"==window.isAnimated&&(window.preload?window.loaded&&$("[class*='ae-']").each(function(e,i){var o=$(i);w(o)&&o.addClass("do").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).removeClassByPrefix("ae-").removeClass("do").addClass("done")})}):$("[class*='ae-']").each(function(e,i){var o=$(i);w(o)&&o.addClass("do").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){$(this).removeClassByPrefix("ae-").removeClass("do").addClass("done")})}))}function w(e){var i=$(window).scrollTop(),o=$(e),a=o.height(),d=i+window.windowHeight,n=o.offset().top,t=n+a;return a>=window.windowHeight/5?d>=n+a/5:i<n&&d>t}if($(".mobile .slides:not(.scroll):not(.simplifiedMobile), .slides.desktopSwipe").swipe({swipeStatus:function(e,i,o,a){window.allowSwipeUp=1,window.allowSwipeDown=1;var d=$(".slide.selected .content"),n=Math.floor(d.find(".container").outerHeight()),t="up",s="down",l=window.minSwipeToSlide,w=window.innerHeight;window.sidebarShown&&(d=$(".sidebar .content")),window.popupShown&&(d=$(".popup .content")),"start"===i&&(window.scrollTop=d.scrollTop()),window.horizontalMode&&(t="left",s="right"),!window.horizontalMode&&n>w&&(window.scrollTop+w<n&&(window.allowSwipeUp=0),window.scrollTop>0&&(window.allowSwipeDown=0)),window.sidebarShown||window.disableOnSwipe||(window.horizontalMode?o===t&&a>l?window.changeSlide("increase"):o===s&&a>l&&window.changeSlide("decrease"):o===t&&a>l&&window.allowSwipeUp&&window.allowSlide?window.changeSlide("increase"):o===s&&a>l&&window.allowSwipeDown&&window.allowSlide&&window.changeSlide("decrease"))},maxTimeThreshold:0,fingers:"all",allowPageScroll:"vertical"}),$(".slides.desktopSwipe *").on("click",function(){$(this).addClass("selectable")}),$(".panel .compact").length>0&&$(".panel .compact").each(function(e,i){var o=$(i).parents(".panel"),a=$(o).find(".desktop"),d=i,n=$(o).hasClass("forceMobileView");$(window).on("load resize ready",function(){var e=$(document).width(),i=parseInt($(o).css("padding-left").replace("px",""))+parseInt($(o).css("padding-right").replace("px",""));if((window.isMobile||$(document).width()<767)&&n)$(a).addClass("hidden"),$(d).removeClass("hidden");else{$(a).removeClass("hidden"),$(d).addClass("hidden");var t=0;a.children().each(function(){$(this).outerWidth()>$(this).children().outerWidth()?t+=Math.round($(this).outerWidth()):t+=Math.round($(this).children().outerWidth())}),t+Math.round(i)>e+2||(window.isMobile||e<767)&&n?($(a).addClass("hidden"),$(d).removeClass("hidden")):($(a).removeClass("hidden"),$(d).addClass("hidden"))}})}),$(".panel.hideOnScroll").length>0&&(window.panelsToHide=!0,window.isScroll||window.isSimplifiedMobile)){var r,c=0,h=window.hideOnScrollSensitivity?window.hideOnScrollSensitivity:100,p=$(".panel.hideOnScroll");$(window).on("mousewheel",function(e){var i=$(this).scrollTop(),o=$(p),a=Math.ceil(Math.abs(e.deltaY)*e.deltaFactor);i>r?(c+=a)>=h&&(o.addClass("hide"),c=h):(c-=a)<=h/5&&(c=0,o.removeClass("hide")),r=i,(i+window.windowHeight+h>=window.documentHeight||i+h<=0)&&o.removeClass("hide")})}$(document).on("keydown",function(e){var i=$(".slide.selected .content"),o=i.scrollTop()+parseInt(125);window.window.disableKeyNavigation||"input"==e.target.nodeName.toLowerCase()||"textarea"==e.target.nodeName.toLowerCase()||(37===e.keyCode&&(e.preventDefault(),window.horizontalMode&&window.changeSlide("decrease")),38===e.keyCode&&(window.horizontalMode?(e.preventDefault(),TweenLite.to(i,window.scrollSpeed,{scrollTo:{y:o,autoKill:!0},ease:Power4.easeOut,overwrite:5})):(e.preventDefault(),window.changeSlide("decrease"))),39===e.keyCode&&window.horizontalMode&&(e.preventDefault(),window.changeSlide("increase")),40===e.keyCode&&(window.horizontalMode?(e.preventDefault(),TweenLite.to(i,window.scrollSpeed,{scrollTo:{y:o,autoKill:!0},ease:Power4.easeOut,overwrite:5})):(e.preventDefault(),window.changeSlide("increase"))),27===e.keyCode&&(v(),T(),C(),t()))});var u=$(".navigation"),m=$(u).find("ul"),f=$(".slide:not(.exclude)").length;function g(){setTimeout(function(){$(m).length>0&&$(m).each(function(e,i){$(i).find("li.selected").removeClass("selected");var o=$(".slide.selected"),a=parseInt(o.data("parent-slide-id")),d=o.index(".slide:not(.exclude)");-1!==d?$(i).find("li").eq(d).addClass("selected"):a&&(d=$('.slide[data-slide-id="'+a+'"]').index(".slide:not(.exclude)"),$(i).find("li").eq(d).addClass("selected"))})},100)}function v(){if(window.sidebarShown){$html.removeClass("sidebarShown").removeClassByPrefix("sidebar_");var e=$(".sidebar.visible");e.removeClass("visible"),window.removeAnimationTimeout=setTimeout(function(){e.removeClass("animate active").find(".done").removeClass("done")},500),window.sidebarShown=0,window.allowSlide=1}}function C(e){if(e=void 0!==e&&e,$.isArray(window.popupShown)){var i=e||window.popupShown.slice(-1)[0],o=$('.popup.visible[data-popup-id="'+i+'"]'),a=o.find("iframe"),d=o.find("video");a.length>0&&$(a).each(function(e,i){var o=$(i).attr("src").indexOf("?autoplay")>-1?"?":"&";$(i).attr("src",$(i).attr("src").replace(o+"autoplay=1",""))}),d.length>0&&$(d).each(function(e,i){$(i)[0].pause(),$(i)[0].currentTime=0}),clearTimeout(window.clearPopupElementAnimation),o.addClass("hidePopup"),$(window).trigger("popupHidden"),setTimeout(function(){if(window.allowSlide=1,o.removeClass("visible animate active hidePopup").removeAttr("style").find(".done").removeClass("done"),$html.removeClass("popup_"+i),$.isArray(window.popupShown)){var e=window.popupShown.indexOf(i);-1!=e&&window.popupShown.splice(e,1)}window.popupShown.length<=0&&($html.removeClass("popupShown"),window.popupShown=!1)},500)}}$(m).length>0&&($(m).is(":empty")&&$(m).each(function(e,i){for(var o=1;o<=f;o++){var a=$(".slide:not(.exclude):eq("+(o-1)+")").data("title");void 0===a?$(i).append("<li></li>"):$(i).append('<li data-title="'+a+'"></li>')}}),$(".navigation li").on("click touchend",function(){var e=$(this).index(),i=$(".slide:not(.exclude):eq("+e+")").index(".slide");$(this).blur(),window.changeSlide(i+1)}),$(".side").hasClass("compact")||$(window).on("load resize ready",function(){var e=window.windowHeight-140,i=$(".side").removeClass("compact").find("ul"),o=0;$(i).children().each(function(){o+=Math.round($(this).outerHeight(!0))}),o>e?$(".side").addClass("compact"):$(".side").removeClass("compact")})),$("a[href^='#'][target!='_blank']").click(function(e){var i=$(this).attr("href").split("#")[1],o=i?$('.slide[id="'+i+'"], .slide[data-name="'+i+'"]'):$(".slide:eq(0)");if(o.length>0){if(e.preventDefault(),window.isMobile&&window.isSimplifiedMobile||window.isScroll){var a=o;a.length&&$("html,body").stop().clearQueue().animate({scrollTop:a.position().top},1e3),window.setHashLink&&(window.location.hash=i)}else window.stage=$(".slide").index(o)+1,n(window.stage);v()}}),$(".sidebarTrigger[data-sidebar-id]").on("click",function(){var e=$(this).data("sidebar-id");window.showSidebar(e)}),window.showSidebar=function(e){var i=e,o=$('.sidebar[data-sidebar-id="'+i+'"]'),a=$(o).hasClass("animated");window.sidebarShown?v():o.length>0&&(window.sidebarShown=1,window.allowSlide=0,$(o).removeClass("animate active").addClass("visible"),$html.addClass("sidebarShown sidebar_"+i),$(o).find(".content").scrollTop(0),a&&(clearTimeout(window.removeAnimationTimeout),setTimeout(function(){$(o).addClass("animate active")},100))),T()},$(document).on("mouseup touchstart",function(e){var i=$(".sidebarShown .sidebar, .dropdownTrigger");!i.is(e.target)&&0===i.has(e.target).length&&window.hideSidebarOnBodyClick&&v()}),$('.sidebar .close, .sidebar [data-sidebar-action="close"]').on("click touchstart",function(){v()}),$(".popupTrigger[data-popup-id]").on("click",function(){var e=$(this).data("popup-id");window.showPopup(e)}),window.showPopup=function(e){var i=e,o=$('.popup[data-popup-id="'+i+'"]'),a=o.hasClass("animated");if(o.length>0&&(v(),$(o).addClass("visible"),$(window).trigger("popupShown"),a&&setTimeout(function(){$(o).addClass("animate active"),clearTimeout(window.clearPopupElementAnimation),window.clearPopupElementAnimation=setTimeout(function(){$(o).find("[class*='ae-']").addClass("done")},window.effectSpeed+window.cleanupDelay)},100),$html.addClass("popupShown popup_"+i),$(o).find(".content").scrollTop(0),window.allowSlide=0,window.popupShown||(window.popupShown=[]),window.popupShown.push(i),$(o).hasClass("autoplay"))){var d=$(o),n=d.find("iframe"),t=d.find("video");if(n.length>0){var s=$(n).attr("src"),l=s.indexOf("?")>-1?"&":"?";$(n).attr("src",s+l+"autoplay=1")}else t.length>0&&$(t)[0].play()}T()},window.hidePopupOnBodyClick&&$(document).on("click",function(e){var i=$(".popupShown .popup .popupContent, .popupTrigger");!i.is(e.target)&&0===i.has(e.target).length&&i.length>0&&C()}),$('.popup [data-popup-action="close"]').on("click",function(){C($(this).parents(".popup").data("popup-id"))}),window.setPopupHash&&($(".popupTrigger[data-popup-id]").on("click",function(){var e=$(this).attr("data-popup-id");window.location.hash="#"+e}),window.setPopupHash=[],$(".popupTrigger").each(function(){var e=$(this).attr("data-popup-id");-1==$.inArray(e,window.setPopupHash)&&window.setPopupHash.push(e)}),-1!==$.inArray(window.location.hash.split("#")[1],window.setPopupHash)&&(setTimeout(function(){$('.popupTrigger[data-popup-id="'+window.location.hash.split("#")[1]+'"]').click()},500),$(window).on("popupHidden",function(){history.pushState?window.history.pushState("","",location.href.split("#")[0]):window.location.hash=""}))),$(window).on("resize load ready popupShown",function(){setTimeout(function(){var e;(e=$(".grid.equal, .flex.equal")).length&&$(e).each(function(e,i){var o=window.windowWidth,a=$(i).hasClass("later")?767:1024,a=$(i).data("equal-collapse-width")?parseInt($(i).data("equal-collapse-width")):a,d=$(i).find(".equalElement"),n=$(this).hasClass("equalMobile");if(o>=a||n){var t=0;$(d).each(function(e,i){$(i).css("height","auto"),t<$(i).outerHeight()&&(t=$(i).outerHeight())}),$(i).find(".equalElement").each(function(e,i){$(i).css("height",t+"px")})}else $(d).css("height","auto")})},1)}),$(window).on("resize",function(){$html.addClass("resizing")}).on("resizeEnd",function(){$html.removeClass("resizing")});var S=$(".slider");$(S).length>0&&$(S).each(function(e,i){var o=$(i),a=o.data("slider-id"),d=o.find(".selected").index();if(window.sliderStatus&&$html.removeClassByPrefix("slider_"+a).addClass("slider_"+a+"_"+d),o.hasClass("autoplay")){var n=o.data("slider-interval")?parseInt(o.data("slider-interval")):5e3,t=setInterval(function(){o.trigger("next")},n);0!=o.data("slider-stoponclick")&&$('[data-slider-id="'+a+'"]').on("mousedown touchstart",function(){clearInterval(t)})}(o.hasClass("clickable")||o.hasClass("autoplay"))&&o.on("click next",function(e){var i=$(this).data("slider-id"),o=$('.slider[data-slider-id="'+i+'"]'),a=e.target;"cancel"!=$(a).data("slider-event")&&(o.each(function(){var e=$(this),i=e.data("slider-id"),o=e.children(".selected"),a=o.nextOrFirst("li"),d=a.index(),n=$('.controller[data-slider-id="'+i+'"]'),t=e.is(".animated, .animateOnEvent");o.removeClass("selected").addClass("hide").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$(this).removeClass("hide")}),a.removeClass("hide").addClass("selected"),window.sliderStatus&&$html.removeClassByPrefix("slider_"+i).addClass("slider_"+i+"_"+d),t&&(e.addClass("animateOnEvent"),e.find("li").removeClassByPrefix("ae-").removeClass("do"),e.find(".selected").each(function(e){$(this).removeClassByPrefix("ae-").removeClass("do").addClass("ae-"+(e+1)).addClass("do")}),$(window).scroll()),i&&n.length>0&&n.each(function(){var e=$(this);e.children(".selected").removeClass("selected"),e.children("li:eq("+d+")").addClass("selected")})}),window.sliderStatus&&$html.removeClassByPrefix("slider_"+i).addClass("slider_"+i+"_"+d))})});var b=$(".controller");if(b.length>0){var y=b.data("controller-selector")?b.data("controller-selector"):"li";b.on("click",y,function(){var e=$(this),i=e.closest(".controller"),o=$(i.find(y)).index(e),a=i.data("slider-id"),d=$('.slider[data-slider-id="'+a+'"]'),n=$('.controller[data-slider-id="'+a+'"]');e.hasClass("selected")||(n.each(function(){var e=$(this);e.children(".selected").removeClass("selected"),e.children("li:eq("+o+")").addClass("selected")}),d.each(function(){var e=$(this),i=e.hasClass("animated");e.children(".selected").removeClass("selected").addClass("hide").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){$(this).removeClass("hide")}),e.children("li").eq(o).removeClass("hide").addClass("selected"),i&&(e.addClass("animateOnEvent"),e.find(">li").removeClassByPrefix("ae-").removeClass("do"),e.find(".selected").each(function(e){$(this).removeClassByPrefix("ae-").removeClass("do").addClass("ae-"+(e+1)).addClass("do")}),$(window).scroll())}),window.sliderStatus&&$html.removeClassByPrefix("slider_"+sliderID).addClass("slider_"+sliderID+"_"+o))})}function x(e,i){i=void 0!==i&&i;var o=e.offset(),a=e.position(),d=window.popupShown?Math.ceil(a.top):Math.ceil(o.top),n=Math.ceil(o.left),t=e.data("dropdown-id"),s=$('.dropdown[data-dropdown-id="'+t+'"]'),l=(l=e.data("dropdown-position")?e.data("dropdown-position"):s.attr("class")).split(" ");i||T(),-1!=l.indexOf("bottom")?(d-=s.outerHeight(),s.removeClass("top").addClass("bottom")):(d+=e.outerHeight(),s.removeClass("bottom").addClass("top")),-1!=l.indexOf("right")?(n=n-s.outerWidth()+e.outerWidth(),s.removeClass("left center").addClass("right")):-1!=l.indexOf("left")?s.removeClass("right center").addClass("left"):-1!=l.indexOf("center")&&(n=n-s.outerWidth()/2+e.outerWidth()/2,s.removeClass("right left").addClass("center")),s.addClass("show").css("top",d).css("left",n),$html.addClass("dropdownShown dropdown_"+t),window.dropdownShown=!0}function T(){window.dropdownShown&&($html.removeClass("dropdownShown").removeClassByPrefix("dropdown_"),window.dropdownShown=!1,s=0,$(".dropdown.show").addClass("hide").one("webkitTransitionEnd otransitionend msTransitionEnd transitionend",function(){$(this).removeClass("show hide"),$html.removeClass("dropdownShown").removeClassByPrefix("dropdown_")}),$(window).trigger("dropdownHidden"))}$("[data-slider-action]").click(function(){if($(this).data("slider-id")){var e,i,o=$(this),a=o.data("slider-id"),d=o.data("slider-action"),n=$('.slider[data-slider-id="'+a+'"]'),t=$('.controller[data-slider-id="'+a+'"]');window.sliderStatus&&$html.removeClassByPrefix("slider_"+a).addClass("slider_"+a+"_"+i),n.each(function(){var o=$(this),a=(t.data("controller-selector")&&t.data("controller-selector"),o.find(".selected")),n=o.hasClass("animated");"next"===d?e=a.nextOrFirst("li"):"prev"===d?e=a.prevOrLast("li"):(parseInt(d)||0===d)&&(i=parseInt(d),e=o.find(">li:eq("+i+")")),i=e.index(),a.removeClass("selected"),e.removeClass("hide").addClass("selected"),n&&(o.addClass("animateOnEvent"),o.find("li").removeClassByPrefix("ae-").removeClass("do"),o.find(".selected").each(function(e){$(this).removeClassByPrefix("ae-").removeClass("do").addClass("ae-"+(e+1)).addClass("do")}),$(window).scroll())}),t.each(function(){var e=$(this);a&&e.length>0&&(e.find(".selected").removeClass("selected").addClass("hide").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){o.removeClass("hide")}),e.find(y).eq(i).addClass("selected"))})}}),$("[data-slider-id].autoHeight").each(function(e,i){$(window).on("click resize load ready next",function(){var e=0;$(i).find(".selected");$(i).find(".selected").children().each(function(){e+=Math.round($(this).outerHeight(!0))}),$(i).height(e+"px")})}),$(".slider.clickable[data-slider-id], .controller[data-slider-id]").on("click",function(e){"cancel"!=$(e.target).data("slider-event")&&$(window).resize()}),window.dropdownShown=!1,$(".dropdownTrigger").on("click",function(){x($(this))}),$(".dropdownTrigger.hover").hover(function(){x($(this),"hover")}),$(window).on("resize",function(){T()}),$(document).on("mouseup touchstart",function(e){var i=$(".dropdownShown .dropdown");!i.is(e.target)&&0===i.has(e.target).length&&window.dropdownShown&&T()}),window.shareUrl=window.location.href,$(".share").data("url")&&(window.shareUrl=$(".dropdown").data("url")),window.shareText=document.title,$(".share").data("text")&&(window.shareText=$(".dropdown").data("url")),$(".share").sharrre({enableHover:!1,url:window.shareUrl,text:window.shareText,enableCounter:!1,share:{twitter:!0,facebook:!0,pinterest:!0,googlePlus:!0,stumbleupon:!0,linkedin:!0},buttons:{pinterest:{media:$(".dropdown").data("pinterest-image"),description:$(".dropdown").data("text")+" "+$(".dropdown").data("url")}},template:$(".share").html(),render:function(e){$(e.element).on("click touchstart",".social-twitter",function(){e.openPopup("twitter")}),$(e.element).on("click touchstart",".social-facebook",function(){e.openPopup("facebook")}),$(e.element).on("click touchstart",".social-pinterest",function(){e.openPopup("pinterest")}),$(e.element).on("click touchstart",".social-googlePlus",function(){e.openPopup("googlePlus")}),$(e.element).on("click touchstart",".social-stumbleupon",function(){e.openPopup("stumbleupon")}),$(e.element).on("click touchstart",".social-linkedin",function(){e.openPopup("linkedin")}),$(e.element).on("click touchstart",".mail",function(){var e=$(this).data("subject")?$(this).data("subject"):"",i=$(this).data("body")?$(this).data("body"):"",o=$(".dropdown").data("url")?$(".dropdown").data("url"):window.location.href;window.location.href="mailto:?subject="+encodeURIComponent(e)+"&body="+encodeURIComponent(i)+"%20"+o})}}),$(".dialogTrigger[data-dialog-id]").on("click",function(){var e=$(this).data("dialog-id");window.showDialog(e)}),window.showDialog=function(e){var i=$('.dialog[data-dialog-id="'+e+'"]');i.is(":visible")||i.addClass("reveal").slideDown(500,function(){$(this).removeClass("reveal").removeClass("hidden")})},$('.dialog [data-dialog-action="close"], .dialog [data-dialog-action="hide"]').on("click",function(){var e=$(this).parents(".dialog"),i=$(this).data("dialog-action"),o=e.data("dialog-id"),a=e.data("set-cookie"),d=e.data("cookie-name")?e.data("cookie-name"):o,n=!e.data("cookie-value")||e.data("cookie-value"),t=e.data("cookie-path");e.addClass("hide").slideUp(500,function(){$(this).removeClass("hide"),a&&"close"==i&&$.cookie(d,n,{expires:a,path:t})})}),$(".dialog[data-set-cookie]").each(function(e,i){var o=$(i).data("dialog-id"),a=$(i).data("cookie-name")?$(i).data("cookie-name"):o;!$(i).data("cookie-value")||$(i).data("cookie-value");$.cookie(a)&&$(i).hide()}),$(".dialog [data-href]").on("click",function(){$(this).data("target")?window.open($(this).data("href"),"_blank"):window.location=$(this).data("href")}),$(".dialog.hidden[data-dialog-delay]").each(function(){var e=parseFloat($(this).attr("data-dialog-delay")),i=$(this);isNaN(e)||setTimeout(function(){i.addClass("reveal").slideDown(500,function(){$(this).removeClass("reveal").removeClass("hidden")})},e)}),$(".dialog[data-dialog-hide-delay]").each(function(){var e=parseFloat($(this).attr("data-dialog-hide-delay")),i=$(this);isNaN(e)||setTimeout(function(){i.addClass("hide").slideUp(500,function(){$(this).removeClass("hide")})},e)}),$('.dialog [data-type="submit"]').click(function(){$(this).parents("form").submit()}),$("#contact-form, [data-ajax-form]").each(function(e,i){$(i).ajaxForm(function(){var e=$(i),o=$(i).find('[type="submit"]'),a=!!o.is("input"),d=o.data("success-text")?o.data("success-text"):"Done!",n=o.data("success-class")?o.data("success-class"):"green",t=a?o.val():o.html(),s=o.attr("class");a?o.val(d):o.text(d),o.addClass(n),setTimeout(function(){a?o.val(t):o.html(t),o.attr("class",s),e[0].reset()},4e3)})}),$("audio[data-sound-id]").each(function(e,i){var o=$(i),a=o.data("sound-id"),d=o[0],n=$('.soundTrigger[data-sound-id="'+a+'"]');d.autoplay?n.addClass("playing"):n.removeClass("playing")}),$(".soundTrigger").click(function(){var e=$(this).data("sound-id"),i=$('audio[data-sound-id="'+e+'"]'),o=i.data("sound-action")?i.data("sound-action"):"toggle",a=parseInt(i.data("sound-fade"))>=0||i.data("sound-fade")?parseInt(i.data("sound-fade")):500;!i[0].paused||"toggle"!==o&&"play"!==o?"toggle"!==o&&"pause"!==o||(i.animate({volume:0},a,function(){i[0].pause()}),$(this).removeClass("playing")):(i[0].play(),i.animate({volume:1},a),$(this).addClass("playing"))})}),window.isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.isMobile=!0),window.isMobile?$html.addClass("mobile"):$html.addClass("desktop"),window.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,window.isSafari=/^((?!chrome).)*safari/i.test(navigator.userAgent),window.isChrome=/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()),window.isChromeiOS=navigator.userAgent.match("CriOS"),window.isMSIE=navigator.userAgent.match("MSIE"),window.isEdge=navigator.userAgent.match("Edge"),
window.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>-1,window.isiPad=null!==navigator.userAgent.match(/iPad/i),window.isWindows=-1!==navigator.platform.toUpperCase().indexOf("WIN"),window.isOSX=-1!==navigator.platform.toUpperCase().indexOf("MAC"),window.isLinux=-1!==navigator.platform.toUpperCase().indexOf("LINUX"),window.isSafari&&$html.addClass("safari"),window.isFirefox&&$html.addClass("firefox"),window.isChrome&&$html.addClass("chrome"),window.isMSIE&&$html.addClass("msie"),window.isEdge&&$html.addClass("edge"),window.isAndroid&&$html.addClass("android"),window.isWindows&&$html.addClass("windows"),window.isOSX&&$html.addClass("osx"),window.isLinux&&$html.addClass("linux"),window.isRetina=window.matchMedia&&(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches)||window.devicePixelRatio&&window.devicePixelRatio>1.3,window.isRetina&&$html.addClass("retina");