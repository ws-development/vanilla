var core_app=function(d){function u(t){if(e[t])return e[t].exports;var c=e[t]={i:t,l:!1,exports:{}};return d[t].call(c.exports,c,c.exports,u),c.l=!0,c.exports}var e={};return u.m=d,u.c=e,u.d=function(d,e,t){u.o(d,e)||Object.defineProperty(d,e,{configurable:!1,enumerable:!0,get:t})},u.n=function(d){var e=d&&d.__esModule?function(){return d.default}:function(){return d};return u.d(e,"a",e),e},u.o=function(d,u){return Object.prototype.hasOwnProperty.call(d,u)},u.p="/js/",u(u.s=7)}([function(d,u){d.exports=lib_core_app},function(d,u,e){d.exports=e(0)(155)},function(d,u,e){d.exports=e(0)(11)},function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.Events=void 0;var t=function(){function d(d,u){for(var e=0;e<u.length;e++){var t=u[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(d,t.key,t)}}return function(u,e,t){return e&&d(u.prototype,e),t&&d(u,t),u}}();u.onReady=function(d){"loading"!==document.readyState?d(void 0):document.addEventListener("DOMContentLoaded",d)},u.onResize=function(d){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;u&&!n.includes(u)||(n.push(u),window.addEventListener("resize",(0,f.default)(d,e)))};var c=function(d){if(d&&d.__esModule)return d;var u={};if(null!=d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(u[e]=d[e]);return u.default=d,u}(e(2)),f=function(d){return d&&d.__esModule?d:{default:d}}(e(12)),n=[],r=u.Events=function(){function d(){!function(d,u){if(!(d instanceof u))throw new TypeError("Cannot call a class as a function")}(this,d),this.vanillaReadyEvents=[],this.resizeListeners=[],this.onVanillaReady=this.onVanillaReady.bind(this),this.execute=this.execute.bind(this)}return t(d,[{key:"onVanillaReady",value:function(d){this.vanillaReadyEvents.push(d)}},{key:"addResizeListener",value:function(d){return this.resizeListeners.push(d)-1}},{key:"removeResizeListener",value:function(d){this.resizeListeners[d]=null}},{key:"execute",value:function(){var d=this;return window.addEventListener("resize",(0,f.default)(function(){var u=!0,e=!1,t=void 0;try{for(var c,f=d.resizeListeners[Symbol.iterator]();!(u=(c=f.next()).done);u=!0){var n=c.value;null!==n&&n()}}catch(d){e=!0,t=d}finally{try{!u&&f.return&&f.return()}finally{if(e)throw t}}},200)),c.resolvePromisesSequentially(this.vanillaReadyEvents).then()}}]),d}();u.default=new r},function(d,u){d.exports=function(d){var u=typeof d;return null!=d&&("object"==u||"function"==u)}},function(d,u,e){var t=e(14),c="object"==typeof self&&self&&self.Object===Object&&self,f=t||c||Function("return this")();d.exports=f},function(d,u,e){var t=e(5).Symbol;d.exports=t},function(d,u,e){"use strict";var t=e(8),c=e(10);(function(d){return d&&d.__esModule?d:{default:d}})(e(3)).default.onVanillaReady(function(){(0,t.parseDomForEmoji)(),(0,c.setupEmbeds)(),(0,c.setupSpoilers)()})},function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.isEmojiSupported=function(){return r},u.parseEmoji=function(d){return r?d:t.default.parse(d,f)},u.parseDomForEmoji=function(){var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;r||t.default.parse(d,f)};var t=function(d){return d&&d.__esModule?d:{default:d}}(e(9)),c=function(d){if(d&&d.__esModule)return d;var u={};if(null!=d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(u[e]=d[e]);return u.default=d,u}(e(2)),f={className:"fallBackEmoji",size:"72x72"},n="🦖",r=function(){var d=document.createElement("canvas");if(d.getContext&&d.getContext("2d")){var u=12*(window.devicePixelRatio||1),e=d.getContext("2d");return e.fillStyle="#f00",e.textBaseline="top",e.font="32px Arial",e.fillText(n,0,0),0!==e.getImageData(u,u,1,1).data[0]}return!1}();c.log("Emoji Supported: ",r)},function(d,u,e){(function(u){var e=u.location||{},t=function(){"use strict";function d(d,u){return document.createTextNode(u?d.replace(s,""):d)}function u(d){return d.replace(b,c)}function e(d,u){for(var t,c,f=d.childNodes,n=f.length;n--;)3===(c=(t=f[n]).nodeType)?u.push(t):1!==c||"ownerSVGElement"in t||p.test(t.nodeName.toLowerCase())||e(t,u);return u}function t(d){return r(d.indexOf(l)<0?d.replace(s,""):d)}function c(d){return o[d]}function f(){return null}function n(d,u){return String(d).replace(i,u)}function r(d,u){for(var e=[],t=0,c=0,f=0;f<d.length;)t=d.charCodeAt(f++),c?(e.push((65536+(c-55296<<10)+(t-56320)).toString(16)),c=0):55296<=t&&t<=56319?c=t:e.push(t.toString(16));return e.join(u||"-")}var a={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;return u<65536?v(u):(u-=65536,v(55296+(u>>10),56320+(1023&u)))},toCodePoint:r},onerror:function(){this.parentNode&&this.parentNode.replaceChild(d(this.alt,!1),this)},parse:function(c,r){return r&&"function"!=typeof r||(r={callback:r}),("string"==typeof c?function(d,e){return n(d,function(d){var c,f,n=d,r=t(d),a=e.callback(r,e);if(a){n="<img ".concat('class="',e.className,'" ','draggable="false" ','alt="',d,'"',' src="',a,'"'),c=e.attributes(d,r);for(f in c)c.hasOwnProperty(f)&&0!==f.indexOf("on")&&-1===n.indexOf(" "+f+"=")&&(n=n.concat(" ",f,'="',u(c[f]),'"'));n=n.concat("/>")}return n})}:function(u,c){for(var f,n,r,a,o,s,l,b,p,v,h,m,g,y=e(u,[]),x=y.length;x--;){for(r=!1,a=document.createDocumentFragment(),s=(o=y[x]).nodeValue,b=0;l=i.exec(s);){if((p=l.index)!==b&&a.appendChild(d(s.slice(b,p),!0)),h=l[0],m=t(h),b=p+h.length,g=c.callback(m,c)){(v=new Image).onerror=c.onerror,v.setAttribute("draggable","false"),f=c.attributes(h,m);for(n in f)f.hasOwnProperty(n)&&0!==n.indexOf("on")&&!v.hasAttribute(n)&&v.setAttribute(n,f[n]);v.className=c.className,v.alt=h,v.src=g,r=!0,a.appendChild(v)}v||a.appendChild(d(h,!1)),v=null}r&&(b<s.length&&a.appendChild(d(s.slice(b),!0)),o.parentNode.replaceChild(a,o))}return u})(c,{callback:r.callback||function(d,u){return"".concat(u.base,u.size,"/",d,u.ext)},attributes:"function"==typeof r.attributes?r.attributes:f,base:"string"==typeof r.base?r.base:a.base,ext:r.ext||a.ext,size:r.folder||function(d){return"number"==typeof d?d+"x"+d:d}(r.size||a.size),className:r.className||a.className,onerror:r.onerror||a.onerror})},replace:n,test:function(d){i.lastIndex=0;var u=i.test(d);return i.lastIndex=0,u}},o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},i=/\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:\u002a)\ufe0f?\u20e3|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca-\udfcc]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd74\udd75\udd7a\udd90\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u261d\u26f7\u26f9\u270a-\u270d])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\u0023\u20e3|\u0030\u20e3|\u0031\u20e3|\u0032\u20e3|\u0033\u20e3|\u0034\u20e3|\u0035\u20e3|\u0036\u20e3|\u0037\u20e3|\u0038\u20e3|\u0039\u20e3|\ud800\udc00|\ud83c[\udc04\udccf\udd70\udd71\udd7e\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude02\ude1a\ude2f\ude32-\ude3a\ude50\ude51\udf00-\udf21\udf24-\udf84\udf86-\udf93\udf96\udf97\udf99-\udf9b\udf9e-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcd-\udff0\udff3-\udff5\udff7-\udfff]|\ud83d[\udc00-\udc41\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfd\udcff-\udd3d\udd49-\udd4e\udd50-\udd67\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda4\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\udecb\udecd-\uded2\udee0-\udee5\udee9\udeeb\udeec\udef0\udef3-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26ce\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2705\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2728\u2733\u2734\u2744\u2747\u274c\u274e\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27a1\u27b0\u27bf\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299\ue50a]|(?:\u2639)(?:\ufe0f|(?!\ufe0e))/g,s=/\uFE0F/g,l=String.fromCharCode(8205),b=/[&<>'"]/g,p=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,v=String.fromCharCode;return a}();e.protocol||(t.base=t.base.replace(/^http:/,"")),d.exports=t}).call(u,e(1))},function(d,u,e){"use strict";function t(d){return d&&d.__esModule?d:{default:d}}function c(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body).querySelectorAll(".embedLink-excerpt").forEach(function(d){var u=(0,a.getData)(d,"untruncatedText");u?d.innerHTML=u:(u=d.innerHTML,(0,a.setData)(d,"untruncatedText",u)),f(d)})}function f(d){var u=parseInt(getComputedStyle(d)["max-height"],10);u&&u>0&&(0,i.default)(d,u)}function n(){if(this instanceof HTMLElement){this.closest(".embedVideo-ratio").innerHTML='<iframe frameborder="0" allow="autoplay; encrypted-media" class="embedVideo-iframe" src="'+this.dataset.url+'" allowfullscreen></iframe>'}}function r(){if(this instanceof HTMLElement){this.closest(".spoiler").classList.toggle("isShowingSpoiler")}}Object.defineProperty(u,"__esModule",{value:!0}),u.truncateEmbeds=c,u.truncateTextBasedOnMaxHeight=f,u.setupEmbeds=function(){(0,a.delegateEvent)("click",".js-playVideo",n),c(),o.default.addResizeListener(function(){c()})},u.setupSpoilers=function(){(0,a.delegateEvent)("click",".js-toggleSpoiler",r)};var a=e(11),o=t(e(3)),i=t(e(21))},function(d,u,e){d.exports=e(0)(257)},function(d,u,e){var t=e(4),c=e(13),f=e(15),n="Expected a function",r=Math.max,a=Math.min;d.exports=function(d,u,e){function o(u){var e=p,t=v;return p=v=void 0,x=u,m=d.apply(t,e)}function i(d){var e=d-y;return void 0===y||e>=u||e<0||O&&d-x>=h}function s(){var d=c();if(i(d))return l(d);g=setTimeout(s,function(d){var e=u-(d-y);return O?a(e,h-(d-x)):e}(d))}function l(d){return g=void 0,E&&p?o(d):(p=v=void 0,m)}function b(){var d=c(),e=i(d);if(p=arguments,v=this,y=d,e){if(void 0===g)return function(d){return x=d,g=setTimeout(s,u),j?o(d):m}(y);if(O)return g=setTimeout(s,u),o(y)}return void 0===g&&(g=setTimeout(s,u)),m}var p,v,h,m,g,y,x=0,j=!1,O=!1,E=!0;if("function"!=typeof d)throw new TypeError(n);return u=f(u)||0,t(e)&&(j=!!e.leading,h=(O="maxWait"in e)?r(f(e.maxWait)||0,u):h,E="trailing"in e?!!e.trailing:E),b.cancel=function(){void 0!==g&&clearTimeout(g),x=0,p=y=v=g=void 0},b.flush=function(){return void 0===g?m:l(c())},b}},function(d,u,e){var t=e(5);d.exports=function(){return t.Date.now()}},function(d,u,e){(function(u){var e="object"==typeof u&&u&&u.Object===Object&&u;d.exports=e}).call(u,e(1))},function(d,u,e){var t=e(4),c=e(16),f=NaN,n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt;d.exports=function(d){if("number"==typeof d)return d;if(c(d))return f;if(t(d)){var u="function"==typeof d.valueOf?d.valueOf():d;d=t(u)?u+"":u}if("string"!=typeof d)return 0===d?d:+d;d=d.replace(n,"");var e=a.test(d);return e||o.test(d)?i(d.slice(2),e?2:8):r.test(d)?f:+d}},function(d,u,e){var t=e(17),c=e(20),f="[object Symbol]";d.exports=function(d){return"symbol"==typeof d||c(d)&&t(d)==f}},function(d,u,e){var t=e(6),c=e(18),f=e(19),n="[object Null]",r="[object Undefined]",a=t?t.toStringTag:void 0;d.exports=function(d){return null==d?void 0===d?r:n:a&&a in Object(d)?c(d):f(d)}},function(d,u,e){var t=e(6),c=Object.prototype,f=c.hasOwnProperty,n=c.toString,r=t?t.toStringTag:void 0;d.exports=function(d){var u=f.call(d,r),e=d[r];try{d[r]=void 0;var t=!0}catch(d){}var c=n.call(d);return t&&(u?d[r]=e:delete d[r]),c}},function(d,u){var e=Object.prototype.toString;d.exports=function(d){return e.call(d)}},function(d,u){d.exports=function(d){return null!=d&&"object"==typeof d}},function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(d,u){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!u)throw Error("maxHeight is required");var t="string"==typeof d?document.querySelectorAll(d):d;if(t){var c=e.character||"…",f=e.classname||"js-shave",n=e.spaces||!0,r='<span class="js-shave-char">'+c+"</span>";"length"in t||(t=[t]);for(var a=0;a<t.length;a+=1){var o=t[a],i=o.style,s=o.querySelector("."+f),l=void 0===o.textContent?"innerText":"textContent";s&&(o.removeChild(o.querySelector(".js-shave-char")),o[l]=o[l]);var b=o[l],p=n?b:b.split(" ");if(!(p.length<2)){var v=i.height;i.height="auto";var h=i.maxHeight;if(i.maxHeight="none",o.offsetHeight<=u)i.height=v,i.maxHeight=h;else{for(var m=p.length-1,g=0,y=void 0;g<m;)y=g+m+1>>1,o[l]=n?p.slice(0,y):p.slice(0,y).join(" "),o.insertAdjacentHTML("beforeend",r),o.offsetHeight>u?m=n?y-2:y-1:g=y;o[l]=n?p.slice(0,m):p.slice(0,m).join(" "),o.insertAdjacentHTML("beforeend",r);var x=n?p.slice(m):p.slice(m).join(" ");o.insertAdjacentHTML("beforeend",'<span class="'+f+'" style="display:none;">'+x+"</span>"),i.height=v,i.maxHeight=h}}}}}}]);
//# sourceMappingURL=core-app.js.map