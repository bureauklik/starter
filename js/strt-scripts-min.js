$(document).ready(function(){var e=$("body"),t=function(){$(".acf-wide:not([data-stretch-type='standard'])").each(function(){var t=$(this);t.css({"margin-left":0,"margin-right":0,"padding-left":0,"padding-right":0});var a=t.offset().left-e.offset().left,n=e.outerWidth()-a-t.parent().outerWidth();t.css({"margin-left":-a,"margin-right":-n,"padding-left":"full"===t.data("stretch-type")?a:"","padding-right":"full"===t.data("stretch-type")?n:""})})};$(window).resize(t)}),function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t,a,n,s,i,d;if(t=document.getElementById("site-navigation"),t&&(a=t.getElementsByTagName("button")[0],"undefined"!=typeof a)){if(n=t.getElementsByTagName("ul")[0],"undefined"==typeof n)return void(a.style.display="none");for(n.setAttribute("aria-expanded","false"),-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),a.onclick=function(){-1!==t.className.indexOf("toggled")?(t.className=t.className.replace(" toggled",""),a.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false"),a.classList.toggle("is-active")):(t.className+=" toggled",a.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"),a.classList.toggle("is-active"))},s=n.getElementsByTagName("a"),i=0,d=s.length;i<d;i++)s[i].addEventListener("focus",e,!0),s[i].addEventListener("blur",e,!0);!function(e){var t,a,n=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t=this.parentNode,a;if(t.classList.contains("focus"))t.classList.remove("focus");else{for(e.preventDefault(),a=0;a<t.parentNode.children.length;++a)t!==t.parentNode.children[a]&&t.parentNode.children[a].classList.remove("focus");t.classList.add("focus")}},a=0;a<n.length;++a)n[a].addEventListener("touchstart",t,!1)}(t)}}(),function(){var e=/(trident|msie)/i.test(navigator.userAgent);e&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e=location.hash.substring(1),t;/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e),t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus()))},!1)}();