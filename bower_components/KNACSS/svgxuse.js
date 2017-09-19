
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
(function(){if(window&&window.addEventListener){var c=Object.create(null),l,p,a=function(){clearTimeout(p);p=setTimeout(l,100)},q=function(){},t=function(){var e;window.addEventListener("resize",a,!1);window.addEventListener("orientationchange",a,!1);window.MutationObserver?(e=new MutationObserver(a),e.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{e.disconnect(),window.removeEventListener("resize",a,!1),window.removeEventListener("orientationchange",a,
!1)}catch(c){}}):(document.documentElement.addEventListener("DOMSubtreeModified",a,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",a,!1);window.removeEventListener("resize",a,!1);window.removeEventListener("orientationchange",a,!1)})},u=function(e){var c,a=location.hostname;if(window.XMLHttpRequest){c=new XMLHttpRequest;var m=document.createElement("a");m.href=e;e=m.hostname;c=void 0===c.withCredentials&&""!==e&&e!==a?XDomainRequest||void 0:XMLHttpRequest}return c};
l=function(){function e(){--n;0===n&&t()}function a(b){return function(){!0!==c[b.base]&&b.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+b.hash)}}function l(b){return function(){var c=document.body,a=document.createElement("x");b.onload=null;a.innerHTML=b.responseText;if(a=a.getElementsByTagName("svg")[0])a.setAttribute("aria-hidden","true"),a.style.position="absolute",a.style.width=0,a.style.height=0,a.style.overflow="hidden",c.insertBefore(a,c.firstChild);e()}}function m(a){return function(){a.onerror=
null;a.ontimeout=null;e()}}var d,f,g,h,n=0,b,k;q();k=document.getElementsByTagName("use");for(h=0;h<k.length;h+=1){try{f=k[h].getBoundingClientRect()}catch(v){f=!1}g=k[h].getAttributeNS("http://www.w3.org/1999/xlink","href").split("#");d=g[0];g=g[1];b=f&&0===f.left&&0===f.right&&0===f.top&&0===f.bottom;f&&0===f.width&&0===f.height&&!b?d.length&&(b=c[d],!0!==b&&setTimeout(a({useEl:k[h],base:d,hash:g}),0),void 0===b&&(g=u(d),void 0!==g&&(b=new g,c[d]=b,b.onload=l(b),b.onerror=m(b),b.ontimeout=m(b),
b.open("GET",d),b.send(),n+=1))):b||(void 0===c[d]?c[d]=!0:c[d].onload&&(c[d].abort(),c[d].onload=void 0,c[d]=!0))}k="";n+=1;e()};window.addEventListener("load",function r(){window.removeEventListener("load",r,!1);p=setTimeout(l,0)},!1)}})();
