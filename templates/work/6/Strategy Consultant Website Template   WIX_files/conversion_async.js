(function(){var f=this,k=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var e=Object.prototype.toString.call(a);if("[object Window]"==e)return"object";if("[object Array]"==e||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==e||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var l=function(a){l[" "](a);return a};l[" "]=function(){};var m=function(a,b){for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&b.call(void 0,a[e],e,a)};var n=window;var t;n:{var x=f.navigator;if(x){var y=x.userAgent;if(y){t=y;break n}}t=""};var A=-1!=t.indexOf("Opera")||-1!=t.indexOf("OPR"),B=-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE"),C=-1!=t.indexOf("Gecko")&&-1==t.toLowerCase().indexOf("webkit")&&!(-1!=t.indexOf("Trident")||-1!=t.indexOf("MSIE")),D=-1!=t.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(A&&f.opera)return a=f.opera.version,"function"==k(a)?a():a;C?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:D&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(t))?a[1]:"");return B&&(b=(b=f.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var E=function(a){this.b=[];this.a={};for(var b=0,e=arguments.length;b<e;++b)this.a[arguments[b]]=""},G=function(){var a=F,b=a.b.concat([]);m(a.a,function(a){""!=a&&b.push(a)});return b};var F,H="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function L(a){return null!=a?escape(a.toString()):""}function M(a){return null!=a?a.toString().substring(0,512):""}function N(a,b){var e=L(b);if(""!=e){var c=L(a);if(""!=c)return"&".concat(c,"=",e)}return""}function O(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function P(a){var b;if((a=a.google_custom_params)&&"object"==typeof a&&"function"!=typeof a.join){var e=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&"function"==typeof c.join){for(var d=[],g=0;g<c.length;++g){var h=O(c[g]);null!=h&&d.push(h)}c=0==d.length?null:d.join(",")}else c=O(c);(d=O(b))&&null!=c&&e.push(d+"="+c)}b=e.join(";")}else b="";return""==b?"":"&".concat("data=",encodeURIComponent(b))}
function Q(a){return"number"!=typeof a&&"string"!=typeof a?"":L(a.toString())}function R(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],e=0,c=a.length;e<c;e++){var d=a[e],g=[];d&&(g.push(Q(d.value)),g.push(Q(d.quantity)),g.push(Q(d.item_id)),g.push(Q(d.adwords_grouping)),g.push(Q(d.sku)),b.push("("+g.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""}
function S(a,b,e){var c=[];if(a){var d=a.screen;d&&(c.push(N("u_h",d.height)),c.push(N("u_w",d.width)),c.push(N("u_ah",d.availHeight)),c.push(N("u_aw",d.availWidth)),c.push(N("u_cd",d.colorDepth)));a.history&&c.push(N("u_his",a.history.length))}e&&"function"==typeof e.getTimezoneOffset&&c.push(N("u_tz",-e.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&c.push(N("u_java",b.javaEnabled())),b.plugins&&c.push(N("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(N("u_nmime",b.mimeTypes.length)));
return c.join("")}function T(a,b,e){var c="";if(b){var d;if(a.top==a)d=0;else{var g=a.location.ancestorOrigins;if(g)d=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var h;if(h=!!g&&null!=g.location.href)r:{try{l(g.foo);h=!0;break r}catch(p){}h=!1}d=h}catch(z){d=!1}d=d?1:2}}h="";h=e?e:1==d?a.top.location.href:a.location.href;c+=N("frm",d);c+=N("url",M(h));c+=N("ref",M(b.referrer))}return c}
function U(a){var b;F?(b=F,b=b.a.hasOwnProperty(2)?b.a[2]:""):b="";return"42631044"==b||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?"https:":"http:"}var V=/Android ([01]\.|2\.[01])/i;function W(){return new Image}function X(a,b,e){var c=W;"function"===typeof a.opt_image_generator&&(c=a.opt_image_generator);c=c();b+=N("async","1");c.src=b;c.onload=e&&"function"===typeof a.onload_callback?a.onload_callback:function(){}}
function Y(a){for(var b=window,e={},c=function(c){e[c]=a&&null!=a[c]?a[c]:b[c]},d=0;d<H.length;d++)c(H[d]);c("onload_callback");return e};window.google_trackConversion=function(a){a=Y(a);a.google_conversion_format=3;var b;var e=window,c=navigator,d=document,g=!1;if(a&&3==a.google_conversion_format){try{var h;if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)h=!1;else{a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?
a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version="7";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=1);F=new E(1,2,3);if("https:"!=U(n)&&!V.test(navigator.userAgent)&&F){var p=F,z=["42631043","42631044"];if(p.a.hasOwnProperty(2)&&""==p.a[2]){var q;r:{if(!(1E-4>Math.random())){var u=
Math.random();if(0>u){try{var I=new Uint16Array(1);window.crypto.getRandomValues(I);u=I[0]/65536}catch(aa){u=Math.random()}q=z[Math.floor(u*z.length)];break r}}q=null}q&&""!=q&&p.a.hasOwnProperty(2)&&(p.a[2]=q)}}h=!0}if(h){h="/?";"landing"==a.google_conversion_type&&(h="/extclk?");var J;J=U(e)+"//"+(a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com")+"/pagead/"+[a.google_remarketing_only?"viewthroughconversion/":"conversion/",L(a.google_conversion_id),
h,"random=",L(a.google_conversion_time)].join("");var Z=d?{visible:1,hidden:2,prerender:3,preview:4}[d.webkitVisibilityState||d.mozVisibilityState||d.visibilityState||""]||0:"0",v;e:{var K=a.google_conversion_language;if(null!=K){var r=K.toString();if(2==r.length){v=N("hl",r);break e}if(5==r.length){v=N("hl",r.substring(0,2))+N("gl",r.substring(3,5));break e}}v=""}b=[N("cv",a.google_conversion_js_version),N("fst",a.google_conversion_first_time),N("num",a.google_conversion_snippets),N("fmt",a.google_conversion_format),
N("value",a.google_conversion_value),N("currency_code",a.google_conversion_currency),N("label",a.google_conversion_label),N("oid",a.google_conversion_order_id),N("bg",a.google_conversion_color),v,N("guid","ON"),N("disvt",a.google_disable_viewthrough),N("is_call",a.google_is_call),N("eid",G().join()),R(a),S(e,c,a.google_conversion_date),P(a),T(e,d,a.google_conversion_page_url),a.google_remarketing_for_search&&!a.google_conversion_domain?"&srr=n":"",N("vis",Z)].join("");X(a,J+b,!0);if(a.google_remarketing_for_search&&
!a.google_conversion_domain){var w;w=U(e)+"//www.google.com/ads/user-lists/"+[L(a.google_conversion_id),"/?random=",Math.floor(1E9*Math.random())].join("");w+=[N("label",a.google_conversion_label),N("fmt","3"),T(e,d,a.google_conversion_page_url)].join("");X(a,w,!1)}g=!0}}catch(ba){}b=g}else b=!1;return b};})();
