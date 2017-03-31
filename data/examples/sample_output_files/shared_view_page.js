/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b){"use strict";function c(c){var d=b.console;e[c]||(e[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function d(a,b,d,e){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:function(){return c(e),d}})}a.migrateVersion="3.0.0",function(){var c=b.console&&b.console.log&&function(){b.console.log.apply(b.console,arguments)},d=/^[12]\./;c&&(a&&!d.test(a.fn.jquery)||c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),a.migrateWarnings&&c("JQMIGRATE: Migrate plugin loaded multiple times"),c("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion))}();var e={};a.migrateWarnings=[],void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){e={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&c("jQuery is not compatible with Quirks Mode");var f=a.fn.init,g=a.isNumeric,h=a.find,i=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init=function(a){var b=Array.prototype.slice.call(arguments);return"string"==typeof a&&"#"===a&&(c("jQuery( '#' ) is not a valid selector"),b[0]=[]),f.apply(this,b)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&i.test(a))try{document.querySelector(a)}catch(d){a=a.replace(j,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),c("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){c("Attribute selector with '#' was not fixed: "+b[0])}}return h.apply(this,b)};var k;for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(a.find[k]=h[k]);a.fn.size=function(){return c("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return c("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(b){function d(b){var c=b&&b.toString();return!a.isArray(b)&&c-parseFloat(c)+1>=0}var e=g(b),f=d(b);return e!==f&&c("jQuery.isNumeric() should not be called on constructed objects"),f},d(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),d(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),d(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var l=a.ajax;a.ajax=function(){var a=l.apply(this,arguments);return a.promise&&(d(a,"success",a.done,"jQXHR.success is deprecated and removed"),d(a,"error",a.fail,"jQXHR.error is deprecated and removed"),d(a,"complete",a.always,"jQXHR.complete is deprecated and removed")),a};var m=a.fn.removeAttr,n=a.fn.toggleClass,o=/\S+/g;a.fn.removeAttr=function(b){var d=this;return a.each(b.match(o),function(b,e){a.expr.match.bool.test(e)&&(c("jQuery.fn.removeAttr no longer sets boolean properties: "+e),d.prop(e,!1))}),m.apply(this,arguments)},a.fn.toggleClass=function(b){return void 0!==b&&"boolean"!=typeof b?n.apply(this,arguments):(c("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var c=this.getAttribute&&this.getAttribute("class")||"";c&&a.data(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||b===!1?"":a.data(this,"__className__")||"")}))};var p=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return p=!0,a=d.apply(this,arguments),p=!1,a})}),a.swap=function(a,b,d,e){var f,g,h={};p||c("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=d.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f};var q=a.data;a.data=function(b,d,e){var f;return d&&d!==a.camelCase(d)&&(f=a.hasData(b)&&q.call(this,b),f&&d in f)?(c("jQuery.data() always sets/gets camelCased names: "+d),arguments.length>2&&(f[d]=e),f[d]):q.apply(this,arguments)};var r=a.Tween.prototype.run;a.Tween.prototype.run=function(b){a.easing[this.easing].length>1&&(c('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,b,this.options.duration*b,0,1,this.options.duration)),r.apply(this,arguments)};var s=a.fn.load,t=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(b){var d,e=b.type,f=this.fixHooks[e],g=a.event.props;if(g.length)for(c("jQuery.event.props are deprecated and removed: "+g.join());g.length;)a.event.addProp(g.pop());if(f&&!f._migrated_&&(f._migrated_=!0,c("jQuery.event.fixHooks are deprecated and removed: "+e),(g=f.props)&&g.length))for(;g.length;)a.event.addProp(g.pop());return d=t.call(this,b),f&&f.filter?f.filter(d,b):d},a.each(["load","unload","error"],function(b,d){a.fn[d]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===d&&"string"==typeof a[0]?s.apply(this,a):(c("jQuery.fn."+d+"() is deprecated"),a.splice(0,0,d),arguments.length?this.on.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&c("'ready' event is deprecated")}},a.fn.extend({bind:function(a,b,d){return c("jQuery.fn.bind() is deprecated"),this.on(a,null,b,d)},unbind:function(a,b){return c("jQuery.fn.unbind() is deprecated"),this.off(a,null,b)},delegate:function(a,b,d,e){return c("jQuery.fn.delegate() is deprecated"),this.on(b,a,d,e)},undelegate:function(a,b,d){return c("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(a,"**"):this.off(b,a||"**",d)}});var u=a.fn.offset;a.fn.offset=function(){var b,d=this[0],e={top:0,left:0};return d&&d.nodeType?(b=(d.ownerDocument||document).documentElement,a.contains(b,d)?u.apply(this,arguments):(c("jQuery.fn.offset() requires an element connected to a document"),e)):(c("jQuery.fn.offset() requires a valid DOM element"),e)};var v=a.param;a.param=function(b,d){var e=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===d&&e&&(c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),d=e),v.call(this,b,d)};var w=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=a.Deferred,y=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var d=x(),e=d.promise();return d.pipe=e.pipe=function(){var b=arguments;return c("deferred.pipe() is deprecated"),a.Deferred(function(c){a.each(y,function(f,g){var h=a.isFunction(b[f])&&b[f];d[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g[0]+"With"](this===e?c.promise():this,h?[b]:arguments)})}),b=null}).promise()},b&&b.call(d,d),d}}(jQuery,window);
/*! vex.combined.js: vex 3.0.0, vex-dialog 1.0.6 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.vex=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){"use strict";var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;c<d;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}a=null}():!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;d<e;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",i(this,a)!==-1},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",i(this,a)===-1&&(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=i(this,a);b!==-1;)this.splice(b,1),f=!0,b=i(this,a);while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){n.number===-2146823252&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(window.self))},{}],2:[function(a,b,c){function d(a,b){if("string"!=typeof a)throw new TypeError("String expected");b||(b=document);var c=/<([\w:]+)/.exec(a);if(!c)return b.createTextNode(a);a=a.replace(/^\s+|\s+$/g,"");var d=c[1];if("body"==d){var e=b.createElement("html");return e.innerHTML=a,e.removeChild(e.lastChild)}var f=g[d]||g._default,h=f[0],i=f[1],j=f[2],e=b.createElement("div");for(e.innerHTML=i+a+j;h--;)e=e.lastChild;if(e.firstChild==e.lastChild)return e.removeChild(e.firstChild);for(var k=b.createDocumentFragment();e.firstChild;)k.appendChild(e.removeChild(e.firstChild));return k}b.exports=d;var e,f=!1;"undefined"!=typeof document&&(e=document.createElement("div"),e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',f=!e.getElementsByTagName("link").length,e=void 0);var g={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:f?[1,"X<div>","</div>"]:[0,"",""]};g.td=g.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],g.option=g.optgroup=[1,'<select multiple="multiple">',"</select>"],g.thead=g.tbody=g.colgroup=g.caption=g.tfoot=[1,"<table>","</table>"],g.polyline=g.ellipse=g.polygon=g.circle=g.text=g.line=g.path=g.rect=g.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],3:[function(a,b,c){"use strict";function d(a,b){if(void 0===a||null===a)throw new TypeError("Cannot convert first argument to object");for(var c=Object(a),d=1;d<arguments.length;d++){var e=arguments[d];if(void 0!==e&&null!==e)for(var f=Object.keys(Object(e)),g=0,h=f.length;g<h;g++){var i=f[g],j=Object.getOwnPropertyDescriptor(e,i);void 0!==j&&j.enumerable&&(c[i]=e[i])}}return c}function e(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:d})}b.exports={assign:d,polyfill:e}},{}],4:[function(a,b,c){function d(a,b){"object"!=typeof b?b={hash:!!b}:void 0===b.hash&&(b.hash=!0);for(var c=b.hash?{}:"",d=b.serializer||(b.hash?g:h),e=a&&a.elements?a.elements:[],f=Object.create(null),k=0;k<e.length;++k){var l=e[k];if((b.disabled||!l.disabled)&&l.name&&j.test(l.nodeName)&&!i.test(l.type)){var m=l.name,n=l.value;if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(n=void 0),b.empty){if("checkbox"!==l.type||l.checked||(n=""),"radio"===l.type&&(f[l.name]||l.checked?l.checked&&(f[l.name]=!0):f[l.name]=!1),!n&&"radio"==l.type)continue}else if(!n)continue;if("select-multiple"!==l.type)c=d(c,m,n);else{n=[];for(var o=l.options,p=!1,q=0;q<o.length;++q){var r=o[q],s=b.empty&&!r.value,t=r.value||s;r.selected&&t&&(p=!0,c=b.hash&&"[]"!==m.slice(m.length-2)?d(c,m+"[]",r.value):d(c,m,r.value))}!p&&b.empty&&(c=d(c,m,""))}}}if(b.empty)for(var m in f)f[m]||(c=d(c,m,""));return c}function e(a){var b=[],c=/^([^\[\]]*)/,d=new RegExp(k),e=c.exec(a);for(e[1]&&b.push(e[1]);null!==(e=d.exec(a));)b.push(e[1]);return b}function f(a,b,c){if(0===b.length)return a=c;var d=b.shift(),e=d.match(/^\[(.+?)\]$/);if("[]"===d)return a=a||[],Array.isArray(a)?a.push(f(null,b,c)):(a._values=a._values||[],a._values.push(f(null,b,c))),a;if(e){var g=e[1],h=+g;isNaN(h)?(a=a||{},a[g]=f(a[g],b,c)):(a=a||[],a[h]=f(a[h],b,c))}else a[d]=f(a[d],b,c);return a}function g(a,b,c){var d=b.match(k);if(d){var g=e(b);f(a,g,c)}else{var h=a[b];h?(Array.isArray(h)||(a[b]=[h]),a[b].push(c)):a[b]=c}return a}function h(a,b,c){return c=c.replace(/(\r)?\n/g,"\r\n"),c=encodeURIComponent(c),c=c.replace(/%20/g,"+"),a+(a?"&":"")+encodeURIComponent(b)+"="+c}var i=/^(?:submit|button|image|reset|file)$/i,j=/^(?:input|select|textarea|keygen)/i,k=/(\[[^\[\]]*\])/g;b.exports=d},{}],5:[function(b,c,d){(function(e){!function(b){if("object"==typeof d&&"undefined"!=typeof c)c.exports=b();else if("function"==typeof a&&a.amd)a([],b);else{var f;f="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:this,f.vexDialog=b()}}(function(){return function a(c,d,e){function f(h,i){if(!d[h]){if(!c[h]){var j="function"==typeof b&&b;if(!i&&j)return j(h,!0);if(g)return g(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var l=d[h]={exports:{}};c[h][0].call(l.exports,function(a){var b=c[h][1][a];return f(b?b:a)},l,l.exports,a,c,d,e)}return d[h].exports}for(var g="function"==typeof b&&b,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){function d(a,b){if("string"!=typeof a)throw new TypeError("String expected");b||(b=document);var c=/<([\w:]+)/.exec(a);if(!c)return b.createTextNode(a);a=a.replace(/^\s+|\s+$/g,"");var d=c[1];if("body"==d){var e=b.createElement("html");return e.innerHTML=a,e.removeChild(e.lastChild)}var f=g[d]||g._default,h=f[0],i=f[1],j=f[2],e=b.createElement("div");for(e.innerHTML=i+a+j;h--;)e=e.lastChild;if(e.firstChild==e.lastChild)return e.removeChild(e.firstChild);for(var k=b.createDocumentFragment();e.firstChild;)k.appendChild(e.removeChild(e.firstChild));return k}b.exports=d;var e,f=!1;"undefined"!=typeof document&&(e=document.createElement("div"),e.innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',f=!e.getElementsByTagName("link").length,e=void 0);var g={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:f?[1,"X<div>","</div>"]:[0,"",""]};g.td=g.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],g.option=g.optgroup=[1,'<select multiple="multiple">',"</select>"],g.thead=g.tbody=g.colgroup=g.caption=g.tfoot=[1,"<table>","</table>"],g.polyline=g.ellipse=g.polygon=g.circle=g.text=g.line=g.path=g.rect=g.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},{}],2:[function(a,b,c){function d(a,b){"object"!=typeof b?b={hash:!!b}:void 0===b.hash&&(b.hash=!0);for(var c=b.hash?{}:"",d=b.serializer||(b.hash?g:h),e=a&&a.elements?a.elements:[],f=Object.create(null),k=0;k<e.length;++k){var l=e[k];if((b.disabled||!l.disabled)&&l.name&&j.test(l.nodeName)&&!i.test(l.type)){var m=l.name,n=l.value;if("checkbox"!==l.type&&"radio"!==l.type||l.checked||(n=void 0),b.empty){if("checkbox"!==l.type||l.checked||(n=""),"radio"===l.type&&(f[l.name]||l.checked?l.checked&&(f[l.name]=!0):f[l.name]=!1),!n&&"radio"==l.type)continue}else if(!n)continue;if("select-multiple"!==l.type)c=d(c,m,n);else{n=[];for(var o=l.options,p=!1,q=0;q<o.length;++q){var r=o[q],s=b.empty&&!r.value,t=r.value||s;r.selected&&t&&(p=!0,c=b.hash&&"[]"!==m.slice(m.length-2)?d(c,m+"[]",r.value):d(c,m,r.value))}!p&&b.empty&&(c=d(c,m,""))}}}if(b.empty)for(var m in f)f[m]||(c=d(c,m,""));return c}function e(a){var b=[],c=/^([^\[\]]*)/,d=new RegExp(k),e=c.exec(a);for(e[1]&&b.push(e[1]);null!==(e=d.exec(a));)b.push(e[1]);return b}function f(a,b,c){if(0===b.length)return a=c;var d=b.shift(),e=d.match(/^\[(.+?)\]$/);if("[]"===d)return a=a||[],Array.isArray(a)?a.push(f(null,b,c)):(a._values=a._values||[],a._values.push(f(null,b,c))),a;if(e){var g=e[1],h=+g;isNaN(h)?(a=a||{},a[g]=f(a[g],b,c)):(a=a||[],a[h]=f(a[h],b,c))}else a[d]=f(a[d],b,c);return a}function g(a,b,c){var d=b.match(k);if(d){var g=e(b);f(a,g,c)}else{var h=a[b];h?(Array.isArray(h)||(a[b]=[h]),a[b].push(c)):a[b]=c}return a}function h(a,b,c){return c=c.replace(/(\r)?\n/g,"\r\n"),c=encodeURIComponent(c),c=c.replace(/%20/g,"+"),a+(a?"&":"")+encodeURIComponent(b)+"="+c}var i=/^(?:submit|button|image|reset|file)$/i,j=/^(?:input|select|textarea|keygen)/i,k=/(\[[^\[\]]*\])/g;b.exports=d},{}],3:[function(a,b,c){var d=a("domify"),e=a("form-serialize"),f=function(a){var b=document.createElement("form");b.classList.add("vex-dialog-form");var c=document.createElement("div");c.classList.add("vex-dialog-message"),c.appendChild(a.message instanceof window.Node?a.message:d(a.message));var e=document.createElement("div");return e.classList.add("vex-dialog-input"),e.appendChild(a.input instanceof window.Node?a.input:d(a.input)),b.appendChild(c),b.appendChild(e),b},g=function(a){var b=document.createElement("div");b.classList.add("vex-dialog-buttons");for(var c=0;c<a.length;c++){var d=a[c],e=document.createElement("button");e.type=d.type,e.textContent=d.text,e.classList.add(d.className),e.classList.add("vex-dialog-button"),0===c?e.classList.add("vex-first"):c===a.length-1&&e.classList.add("vex-last"),function(a){e.addEventListener("click",function(b){a.click&&a.click.call(this,b)}.bind(this))}.bind(this)(d),b.appendChild(e)}return b},h=function(a){var b={name:"dialog",open:function(b){var c=Object.assign({},this.defaultOptions,b);c.unsafeMessage&&!c.message?c.message=c.unsafeMessage:c.message&&(c.message=a._escapeHtml(c.message));var d=c.unsafeContent=f(c),e=a.open(c),h=c.beforeClose&&c.beforeClose.bind(e);if(e.options.beforeClose=function(){var a=!h||h();return a&&c.callback(this.value||!1),a}.bind(e),d.appendChild(g.call(e,c.buttons)),e.form=d,d.addEventListener("submit",c.onSubmit.bind(e)),c.focusFirstInput){var i=e.contentEl.querySelector("button, input, textarea");i&&i.focus()}return e},alert:function(a){return"string"==typeof a&&(a={message:a}),a=Object.assign({},this.defaultOptions,this.defaultAlertOptions,a),this.open(a)},confirm:function(a){if("object"!=typeof a||"function"!=typeof a.callback)throw new Error("dialog.confirm(options) requires options.callback.");return a=Object.assign({},this.defaultOptions,this.defaultConfirmOptions,a),this.open(a)},prompt:function(b){if("object"!=typeof b||"function"!=typeof b.callback)throw new Error("dialog.prompt(options) requires options.callback.");var c=Object.assign({},this.defaultOptions,this.defaultPromptOptions),d={unsafeMessage:'<label for="vex">'+a._escapeHtml(b.label||c.label)+"</label>",input:'<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="'+a._escapeHtml(b.placeholder||c.placeholder)+'" value="'+a._escapeHtml(b.value||c.value)+'" />'};b=Object.assign(c,d,b);var e=b.callback;return b.callback=function(a){a=a[Object.keys(a)[0]],e(a)},this.open(b)}};return b.buttons={YES:{text:"OK",type:"submit",className:"vex-dialog-button-primary",click:function(){this.value=!0}},NO:{text:"Cancel",type:"button",className:"vex-dialog-button-secondary",click:function(){this.value=!1,this.close()}}},b.defaultOptions={callback:function(){},afterOpen:function(){},message:"",input:"",buttons:[b.buttons.YES,b.buttons.NO],showCloseButton:!1,onSubmit:function(a){return a.preventDefault(),this.options.input&&(this.value=e(this.form,{hash:!0})),this.close()},focusFirstInput:!0},b.defaultAlertOptions={buttons:[b.buttons.YES]},b.defaultPromptOptions={label:"Prompt:",placeholder:"",value:""},b.defaultConfirmOptions={},b};b.exports=h},{domify:1,"form-serialize":2}]},{},[3])(3)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{domify:2,"form-serialize":4}],6:[function(a,b,c){var d=a("./vex");d.registerPlugin(a("vex-dialog")),b.exports=d},{"./vex":7,"vex-dialog":5}],7:[function(a,b,c){a("classlist-polyfill"),a("es6-object-assign").polyfill();var d=a("domify"),e=function(a){if("undefined"!=typeof a){var b=document.createElement("div");return b.appendChild(document.createTextNode(a)),b.innerHTML}return""},f=function(a,b){if("string"==typeof b&&0!==b.length)for(var c=b.split(" "),d=0;d<c.length;d++){var e=c[d];e.length&&a.classList.add(e)}},g=function(){var a=document.createElement("div"),b={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oanimationend",msAnimation:"MSAnimationEnd",animation:"animationend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}(),h={vex:"vex",content:"vex-content",overlay:"vex-overlay",close:"vex-close",closing:"vex-closing",open:"vex-open"},i={},j=1,k=!1,l={open:function(a){var b=function(a){console.warn('The "'+a+'" property is deprecated in vex 3. Use CSS classes and the appropriate "ClassName" options, instead.'),console.warn("See http://github.hubspot.com/vex/api/advanced/#options")};a.css&&b("css"),a.overlayCSS&&b("overlayCSS"),a.contentCSS&&b("contentCSS"),a.closeCSS&&b("closeCSS");var c={};c.id=j++,i[c.id]=c,c.isOpen=!0,c.close=function(){function a(a){return"none"!==d.getPropertyValue(a+"animation-name")&&"0s"!==d.getPropertyValue(a+"animation-duration")}if(!this.isOpen)return!0;var b=this.options;if(k&&!b.escapeButtonCloses)return!1;var c=function(){return!b.beforeClose||b.beforeClose.call(this)}.bind(this)();if(c===!1)return!1;this.isOpen=!1;var d=window.getComputedStyle(this.contentEl),e=a("")||a("-webkit-")||a("-moz-")||a("-o-"),f=function j(){this.rootEl.parentNode&&(this.rootEl.removeEventListener(g,j),delete i[this.id],this.rootEl.parentNode.removeChild(this.rootEl),b.afterClose&&b.afterClose.call(this),0===Object.keys(i).length&&document.body.classList.remove(h.open))}.bind(this);return g&&e?(this.rootEl.addEventListener(g,f),this.rootEl.classList.add(h.closing)):f(),!0},"string"==typeof a&&(a={content:a}),a.unsafeContent&&!a.content?a.content=a.unsafeContent:a.content&&(a.content=e(a.content));var m=c.options=Object.assign({},l.defaultOptions,a),n=c.rootEl=document.createElement("div");n.classList.add(h.vex),f(n,m.className);var o=c.overlayEl=document.createElement("div");o.classList.add(h.overlay),f(o,m.overlayClassName),m.overlayClosesOnClick&&o.addEventListener("click",function(a){a.target===o&&c.close()}),n.appendChild(o);var p=c.contentEl=document.createElement("div");if(p.classList.add(h.content),f(p,m.contentClassName),p.appendChild(m.content instanceof window.Node?m.content:d(m.content)),n.appendChild(p),m.showCloseButton){var q=c.closeEl=document.createElement("div");q.classList.add(h.close),f(q,m.closeClassName),q.addEventListener("click",c.close.bind(c)),p.appendChild(q)}return document.querySelector(m.appendLocation).appendChild(n),m.afterOpen&&m.afterOpen.call(c),document.body.classList.add(h.open),c},close:function(a){var b;if(a.id)b=a.id;else{if("string"!=typeof a)throw new TypeError("close requires a vex object or id string");b=a}return!!i[b]&&i[b].close()},closeTop:function(){var a=Object.keys(i);return!!a.length&&i[a[a.length-1]].close()},closeAll:function(){for(var a in i)this.close(a);return!0},getAll:function(){return i},getById:function(a){return i[a]}};window.addEventListener("keyup",function(a){27===a.keyCode&&(k=!0,l.closeTop(),k=!1)}),window.addEventListener("popstate",l.closeAll),l.defaultOptions={content:"",showCloseButton:!0,escapeButtonCloses:!0,overlayClosesOnClick:!0,appendLocation:"body",className:"",overlayClassName:"",contentClassName:"",closeClassName:""},Object.defineProperty(l,"_escapeHtml",{configurable:!1,enumerable:!1,writable:!1,value:e}),l.registerPlugin=function(a,b){var c=a(l),d=b||c.name;if(l[d])throw new Error("Plugin "+b+" is already registered.");l[d]=c},b.exports=l},{"classlist-polyfill":1,domify:2,"es6-object-assign":3}]},{},[6])(6)});
var CDSXAX=CDSXAX||{};CDSXAX.Feature=function(){"use strict";var e;e=function(e){var t,r,a,n,u,i,s,o,f=function(e){return e.startsWith("regexp:")};return t={getKarma:function(){return!!e("#data").data("featurehaskarma")&&e("#data").data("featurehaskarma")},getUsername:function(){return e("#data").data("featureuser")},getDataStructure:function(){return e("#data").data("featuredata")},getMyGroups:function(){return e("#data").data("featuregroups")?e("#data").data("featuregroups").trim().split(" "):[]},getMyEnabledFeatureKeys:function(){return e("#data").data("featureenabledkeys")?e("#data").data("featureenabledkeys").trim().split(" "):[]},getMyDisabledFeatureKeys:function(){return e("#data").data("featuredisabledkeys")?e("#data").data("featuredisabledkeys").trim().split(" "):[]},getMyFeatureVariants:function(){return e("#data").data("featurevariants")?e("#data").data("featurevariants").trim().split(" "):[]},getFeatures:function(){return r.features},getGroups:function(){var e=r.groups;return e},getPropertyForFeature:function(e,t){var r=null;return"string"==typeof e?r=e.getFeatures()[e]?e.getFeatures()[e][t]:void 0:"object"==typeof e&&(r=e[t]),r},getThreshold:function(e){return e.getPropertyForFeature(e,"threshold")},getPhase:function(e){return e.getPropertyForFeature(e,"phase")},getGroupsFor:function(e,r){var a=[];r||(r=t.getGroups());for(var n in r)r.hasOwnProperty(n)&&(r[n].indexOf(e)>=0&&a.push(n),a=a.concat(t.getRegexpGroupsFor(e,r,n)));return a},getRegexpGroupsFor:function(e,t,r){var a=[],n=[];if(r&&(n=t[r].filter(f)))for(var u=0;u<n.length;u++)new RegExp(n[u].replace("regexp:","")).test(e)&&a.push(r);return a},getVariants:function(e){return e.getPropertyForFeature(e,"variants")},hasVariants:function(e){return!!e.getVariants(e)},hasAccessToVariant:function(e,t,r){var a=!1,n=t.getPropertyForFeature(t,"variants");for(var u in n)if(u===r&&t.isListMember(e,n[u].whitelist)){a=!0;break}return a},useAnalytics:function(e){return t.getPropertyForFeature(e,"apm")===!0},getFeatureType:function(e){return t.getPropertyForFeature(e,"type")},isGroup:function(e){return"group"===t.getPropertyForFeature(e,"type")},isFeature:function(e){return"feature"===t.getPropertyForFeature(e,"type")},isListMember:function(e,r){var a=!1;r.indexOf(e)>=0&&(a=!0);for(var n in r)t.getGroupsFor(e).indexOf(n)>=0&&(a=!0);return a},isListed:function(e,t,r){var a=!1;return"string"==typeof t?a=t.isListMember(e,t.getFeatures()[t][r])===!0:"object"==typeof t&&(a=t.isListMember(e,t[r])===!0),a},isWhitelisted:function(e,t){return t.isListed(e,t,"whitelist")},isBlacklisted:function(e,t){return t.isListed(e,t,"blacklist")},init:function(){r=t.getDataStructure(),a=t.getKarma(),n=t.getUsername(),u=t.getMyGroups(),i=t.getMyEnabledFeatureKeys(),s=t.getMyDisabledFeatureKeys(),o=t.getMyFeatureVariants()}},t.init(),t},"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):window.feature=e(jQuery)}.call(this);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

module.exports = _dereq_('./lib/');

},{"./lib/":2}],2:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var parser = _dereq_('socket.io-parser');
var Manager = _dereq_('./manager');
var debug = _dereq_('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri == 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var io;

  if (opts.forceNew || opts['force new connection'] || false === opts.multiplex) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }

  return io.socket(parsed.path);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = _dereq_('./manager');
exports.Socket = _dereq_('./socket');

},{"./manager":3,"./socket":5,"./url":6,"debug":10,"socket.io-parser":44}],3:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var url = _dereq_('./url');
var eio = _dereq_('engine.io-client');
var Socket = _dereq_('./socket');
var Emitter = _dereq_('component-emitter');
var parser = _dereq_('socket.io-parser');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var object = _dereq_('object-component');
var debug = _dereq_('debug')('socket.io-client:manager');
var indexOf = _dereq_('indexof');
var Backoff = _dereq_('backo2');

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts){
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' == typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connected = [];
  this.encoding = false;
  this.packetBuffer = [];
  this.encoder = new parser.Encoder();
  this.decoder = new parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function() {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function(){
  for (var nsp in this.nsps) {
    this.nsps[nsp].id = this.engine.id;
  }
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function(v){
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function(v){
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function(v){
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function(v){
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function(v){
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function(v){
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function() {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};


/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function(fn){
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function() {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function(data){
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function(){
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function(){
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function(data){
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function(packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function(err){
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function(nsp){
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connect', function(){
      socket.id = self.engine.id;
      if (!~indexOf(self.connected, socket)) {
        self.connected.push(socket);
      }
    });
  }
  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function(socket){
  var index = indexOf(this.connected, socket);
  if (~index) this.connected.splice(index, 1);
  if (this.connected.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function(packet){
  debug('writing packet %j', packet);
  var self = this;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function(encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i]);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function() {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function(){
  var sub;
  while (sub = this.subs.shift()) sub.destroy();

  this.packetBuffer = [];
  this.encoding = false;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function(){
  this.skipReconnect = true;
  this.backoff.reset();
  this.readyState = 'closed';
  this.engine && this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function(reason){
  debug('close');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);
  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function(){
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function(){
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function(err){
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function(){
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function(){
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":4,"./socket":5,"./url":6,"backo2":7,"component-bind":8,"component-emitter":9,"debug":10,"engine.io-client":11,"indexof":40,"object-component":41,"socket.io-parser":44}],4:[function(_dereq_,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function(){
      obj.removeListener(ev, fn);
    }
  };
}

},{}],5:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var parser = _dereq_('socket.io-parser');
var Emitter = _dereq_('component-emitter');
var toArray = _dereq_('to-array');
var on = _dereq_('./on');
var bind = _dereq_('component-bind');
var debug = _dereq_('debug')('socket.io-client:socket');
var hasBin = _dereq_('has-binary');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp){
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  if (this.io.autoConnect) this.open();
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function() {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function(){
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' == this.io.readyState) this.onopen();
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function(ev){
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var parserType = parser.EVENT; // default
  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
  var packet = { type: parserType, data: args };

  // event ack callback
  if ('function' == typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function(packet){
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function(){
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' != this.nsp) {
    this.packet({ type: parser.CONNECT });
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function(reason){
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function(packet){
  if (packet.nsp != this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function(packet){
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function(id){
  var self = this;
  var sent = false;
  return function(){
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
    self.packet({
      type: type,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function(packet){
  debug('calling ack %s with %j', packet.id, packet.data);
  var fn = this.acks[packet.id];
  fn.apply(this, packet.data);
  delete this.acks[packet.id];
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function(){
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function(){
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function(){
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function(){
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function(){
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

},{"./on":4,"component-bind":8,"component-emitter":9,"debug":10,"has-binary":36,"socket.io-parser":44,"to-array":48}],6:[function(_dereq_,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = _dereq_('parseuri');
var debug = _dereq_('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc){
  var obj = uri;

  // default to window.location
  var loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' == typeof uri) {
    if ('/' == uri.charAt(0)) {
      if ('/' == uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.hostname + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' != typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    }
    else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  // define unique id
  obj.id = obj.protocol + '://' + obj.host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + obj.host + (loc && loc.port == obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"debug":10,"parseuri":42}],7:[function(_dereq_,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],8:[function(_dereq_,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],9:[function(_dereq_,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],10:[function(_dereq_,module,exports){

/**
 * Expose `debug()` as the module.
 */

module.exports = debug;

/**
 * Create a debugger with the given `name`.
 *
 * @param {String} name
 * @return {Type}
 * @api public
 */

function debug(name) {
  if (!debug.enabled(name)) return function(){};

  return function(fmt){
    fmt = coerce(fmt);

    var curr = new Date;
    var ms = curr - (debug[name] || curr);
    debug[name] = curr;

    fmt = name
      + ' '
      + fmt
      + ' +' + debug.humanize(ms);

    // This hackery is required for IE8
    // where `console.log` doesn't have 'apply'
    window.console
      && console.log
      && Function.prototype.apply.call(console.log, console, arguments);
  }
}

/**
 * The currently active debug mode names.
 */

debug.names = [];
debug.skips = [];

/**
 * Enables a debug mode by name. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} name
 * @api public
 */

debug.enable = function(name) {
  try {
    localStorage.debug = name;
  } catch(e){}

  var split = (name || '').split(/[\s,]+/)
    , len = split.length;

  for (var i = 0; i < len; i++) {
    name = split[i].replace('*', '.*?');
    if (name[0] === '-') {
      debug.skips.push(new RegExp('^' + name.substr(1) + '$'));
    }
    else {
      debug.names.push(new RegExp('^' + name + '$'));
    }
  }
};

/**
 * Disable debug output.
 *
 * @api public
 */

debug.disable = function(){
  debug.enable('');
};

/**
 * Humanize the given `ms`.
 *
 * @param {Number} m
 * @return {String}
 * @api private
 */

debug.humanize = function(ms) {
  var sec = 1000
    , min = 60 * 1000
    , hour = 60 * min;

  if (ms >= hour) return (ms / hour).toFixed(1) + 'h';
  if (ms >= min) return (ms / min).toFixed(1) + 'm';
  if (ms >= sec) return (ms / sec | 0) + 's';
  return ms + 'ms';
};

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

debug.enabled = function(name) {
  for (var i = 0, len = debug.skips.length; i < len; i++) {
    if (debug.skips[i].test(name)) {
      return false;
    }
  }
  for (var i = 0, len = debug.names.length; i < len; i++) {
    if (debug.names[i].test(name)) {
      return true;
    }
  }
  return false;
};

/**
 * Coerce `val`.
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

// persist

try {
  if (window.localStorage) debug.enable(localStorage.debug);
} catch(e){}

},{}],11:[function(_dereq_,module,exports){

module.exports =  _dereq_('./lib/');

},{"./lib/":12}],12:[function(_dereq_,module,exports){

module.exports = _dereq_('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = _dereq_('engine.io-parser');

},{"./socket":13,"engine.io-parser":25}],13:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = _dereq_('./transports');
var Emitter = _dereq_('component-emitter');
var debug = _dereq_('debug')('engine.io-client:socket');
var index = _dereq_('indexof');
var parser = _dereq_('engine.io-parser');
var parseuri = _dereq_('parseuri');
var parsejson = _dereq_('parsejson');
var parseqs = _dereq_('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Noop function.
 *
 * @api private
 */

function noop(){}

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts){
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' == typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.host = uri.host;
    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  }

  this.secure = null != opts.secure ? opts.secure :
    (global.location && 'https:' == location.protocol);

  if (opts.host) {
    var pieces = opts.host.split(':');
    opts.hostname = pieces.shift();
    if (pieces.length) {
      opts.port = pieces.pop();
    } else if (!opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = this.secure ? '443' : '80';
    }
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port ?
       location.port :
       (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.readyState = '';
  this.writeBuffer = [];
  this.callbackBuffer = [];
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized || null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = _dereq_('./transport');
Socket.transports = _dereq_('./transports');
Socket.parser = _dereq_('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    agent: this.agent,
    hostname: this.hostname,
    port: this.port,
    secure: this.secure,
    path: this.path,
    query: query,
    forceJSONP: this.forceJSONP,
    jsonp: this.jsonp,
    forceBase64: this.forceBase64,
    enablesXDR: this.enablesXDR,
    timestampRequests: this.timestampRequests,
    timestampParam: this.timestampParam,
    policyPort: this.policyPort,
    socket: this,
    pfx: this.pfx,
    key: this.key,
    passphrase: this.passphrase,
    cert: this.cert,
    ca: this.ca,
    ciphers: this.ciphers,
    rejectUnauthorized: this.rejectUnauthorized
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
    transport = 'websocket';
  } else if (0 == this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function() {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  var transport;
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function(transport){
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function(){
    self.onDrain();
  })
  .on('packet', function(packet){
    self.onPacket(packet);
  })
  .on('error', function(e){
    self.onError(e);
  })
  .on('close', function(){
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 })
    , failed = false
    , self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen(){
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' == msg.type && 'probe' == msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' == self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  //Handle any error that happens while probing
  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose(){
    onerror("transport closed");
  }

  //When the socket is closed while we're probing
  function onclose(){
    onerror("socket closed");
  }

  //When the socket is upgraded while we're probing
  function onupgrade(to){
    if (transport && to.name != transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  //Remove all listeners on the transport and on self
  function cleanup(){
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();

};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(parsejson(packet.data));
        break;

      case 'pong':
        this.setPing();
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.emit('error', err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if  ('closed' == this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' == self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api public
*/

Socket.prototype.ping = function () {
  this.sendPacket('ping');
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function() {
  for (var i = 0; i < this.prevBufferLen; i++) {
    if (this.callbackBuffer[i]) {
      this.callbackBuffer[i]();
    }
  }

  this.writeBuffer.splice(0, this.prevBufferLen);
  this.callbackBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (this.writeBuffer.length == 0) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' != this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, fn) {
  this.sendPacket('message', msg, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, fn) {
  if ('closing' == this.readyState || 'closed' == this.readyState) {
    return;
  }

  var packet = { type: type, data: data };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  this.callbackBuffer.push(fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.readyState = 'closing';

    var self = this;

    function close() {
      self.onClose('forced close');
      debug('socket closing - telling transport to close');
      self.transport.close();
    }

    function cleanupAndClose() {
      self.removeListener('upgrade', cleanupAndClose);
      self.removeListener('upgradeError', cleanupAndClose);
      close();
    }

    function waitForUpgrade() {
      // wait for upgrade to finish since we can't send packets while pausing a transport
      self.once('upgrade', cleanupAndClose);
      self.once('upgradeError', cleanupAndClose);
    }

    if (this.writeBuffer.length) {
      this.once('drain', function() {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // clean buffers in next tick, so developers can still
    // grab the buffers on `close` event
    setTimeout(function() {
      self.writeBuffer = [];
      self.callbackBuffer = [];
      self.prevBufferLen = 0;
    }, 0);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i<j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./transport":14,"./transports":15,"component-emitter":9,"debug":22,"engine.io-parser":25,"indexof":40,"parsejson":32,"parseqs":33,"parseuri":34}],14:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var parser = _dereq_('engine.io-parser');
var Emitter = _dereq_('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * A counter used to prevent collisions in the timestamps used
 * for cache busting.
 */

Transport.timestamps = 0;

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' == this.readyState || '' == this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' == this.readyState || 'open' == this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function(packets){
  if ('open' == this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function(data){
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":9,"engine.io-parser":25}],15:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var XHR = _dereq_('./polling-xhr');
var JSONP = _dereq_('./polling-jsonp');
var websocket = _dereq_('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts){
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname != location.hostname || port != opts.port;
    xs = opts.secure != isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling-jsonp":16,"./polling-xhr":17,"./websocket":19,"xmlhttprequest":20}],16:[function(_dereq_,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = _dereq_('./polling');
var inherit = _dereq_('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Callbacks count.
 */

var index = 0;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function(e){
    self.onError('jsonp poll error',e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  insertAt.parentNode.insertBefore(script, insertAt);
  this.script = script;

  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
  
  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch(e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function(){
      if (self.iframe.readyState == 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-inherit":21}],17:[function(_dereq_,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = _dereq_('xmlhttprequest');
var Polling = _dereq_('./polling');
var Emitter = _dereq_('component-emitter');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty(){}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR(opts){
  Polling.call(this, opts);

  if (global.location) {
    var isSSL = 'https:' == location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname != global.location.hostname ||
      port != opts.port;
    this.xs = opts.secure != isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function(opts){
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function(data, fn){
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function(err){
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function(){
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function(data){
    self.onData(data);
  });
  req.on('error', function(err){
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request(opts){
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined != opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function(){
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    if (this.supportsBinary) {
      // This has to be done after open because Firefox is stupid
      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
      xhr.responseType = 'arraybuffer';
    }

    if ('POST' == this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.hasXDR()) {
      xhr.onload = function(){
        self.onLoad();
      };
      xhr.onerror = function(){
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function(){
        if (4 != xhr.readyState) return;
        if (200 == xhr.status || 1223 == xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function(){
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function() {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function(){
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function(data){
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function(err){
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function(fromError){
  if ('undefined' == typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch(e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function(){
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response;
    } else {
      if (!this.supportsBinary) {
        data = this.xhr.responseText;
      } else {
        data = 'ok';
      }
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function(){
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function(){
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

if (global.document) {
  Request.requestsCount = 0;
  Request.requests = {};
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./polling":18,"component-emitter":9,"component-inherit":21,"debug":22,"xmlhttprequest":20}],18:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parseqs = _dereq_('parseqs');
var parser = _dereq_('engine.io-parser');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function() {
  var XMLHttpRequest = _dereq_('xmlhttprequest');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function(){
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function(onPause){
  var pending = 0;
  var self = this;

  this.readyState = 'pausing';

  function pause(){
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function(){
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function(){
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function(){
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function(data){
  var self = this;
  debug('polling got data %s', data);
  var callback = function(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' == self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' == packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' != this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' == this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function(){
  var self = this;

  function close(){
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' == this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  var callbackfn = function() {
    self.writable = true;
    self.emit('drain');
  };

  var self = this;
  parser.encodePayload(packets, this.supportsBinary, function(data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = +new Date + '-' + Transport.timestamps++;
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' == schema && this.port != 443) ||
     ('http' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":33,"xmlhttprequest":20}],19:[function(_dereq_,module,exports){
/**
 * Module dependencies.
 */

var Transport = _dereq_('../transport');
var parser = _dereq_('engine.io-parser');
var parseqs = _dereq_('parseqs');
var inherit = _dereq_('component-inherit');
var debug = _dereq_('debug')('engine.io-client:websocket');

/**
 * `ws` exposes a WebSocket-compatible interface in
 * Node, or the `WebSocket` or `MozWebSocket` globals
 * in the browser.
 */

var WebSocket = _dereq_('ws');

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts){
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function(){
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var self = this;
  var uri = this.uri();
  var protocols = void(0);
  var opts = { agent: this.agent };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  this.ws = new WebSocket(uri, protocols, opts);

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  this.ws.binaryType = 'arraybuffer';
  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function(){
  var self = this;

  this.ws.onopen = function(){
    self.onOpen();
  };
  this.ws.onclose = function(){
    self.onClose();
  };
  this.ws.onmessage = function(ev){
    self.onData(ev.data);
  };
  this.ws.onerror = function(e){
    self.onError('websocket error', e);
  };
};

/**
 * Override `onData` to use a timer on iOS.
 * See: https://gist.github.com/mloughran/2052006
 *
 * @api private
 */

if ('undefined' != typeof navigator
  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
  WS.prototype.onData = function(data){
    var self = this;
    setTimeout(function(){
      Transport.prototype.onData.call(self, data);
    }, 0);
  };
}

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function(packets){
  var self = this;
  this.writable = false;
  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  for (var i = 0, l = packets.length; i < l; i++) {
    parser.encodePacket(packets[i], this.supportsBinary, function(data) {
      //Sometimes the websocket has already been closed but the browser didn't
      //have a chance of informing us about it yet, in that case send will
      //throw an error
      try {
        self.ws.send(data);
      } catch (e){
        debug('websocket closed before onclose event');
      }
    });
  }

  function ondrain() {
    self.writable = true;
    self.emit('drain');
  }
  // fake drain
  // defer to next tick to allow Socket to clear writeBuffer
  setTimeout(ondrain, 0);
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function(){
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function(){
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function(){
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' == schema && this.port != 443)
    || ('ws' == schema && this.port != 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = +new Date;
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  return schema + '://' + this.hostname + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function(){
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

},{"../transport":14,"component-inherit":21,"debug":22,"engine.io-parser":25,"parseqs":33,"ws":35}],20:[function(_dereq_,module,exports){
// browser shim for xmlhttprequest module
var hasCORS = _dereq_('has-cors');

module.exports = function(opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) { }
  }
}

},{"has-cors":38}],21:[function(_dereq_,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],22:[function(_dereq_,module,exports){

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = _dereq_('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // is webkit? http://stackoverflow.com/a/16459606/376773
  return ('WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  return JSON.stringify(v);
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs() {
  var args = arguments;
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return args;

  var c = 'color: ' + this.color;
  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
  return args;
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // This hackery is required for IE8,
  // where the `console.log` function doesn't have 'apply'
  return 'object' == typeof console
    && 'function' == typeof console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      localStorage.removeItem('debug');
    } else {
      localStorage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = localStorage.debug;
  } catch(e) {}
  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

},{"./debug":23}],23:[function(_dereq_,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = _dereq_('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lowercased letter, i.e. "n".
 */

exports.formatters = {};

/**
 * Previously assigned color.
 */

var prevColor = 0;

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 *
 * @return {Number}
 * @api private
 */

function selectColor() {
  return exports.colors[prevColor++ % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function debug(namespace) {

  // define the `disabled` version
  function disabled() {
  }
  disabled.enabled = false;

  // define the `enabled` version
  function enabled() {

    var self = enabled;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // add the `color` if not set
    if (null == self.useColors) self.useColors = exports.useColors();
    if (null == self.color && self.useColors) self.color = selectColor();

    var args = Array.prototype.slice.call(arguments);

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %o
      args = ['%o'].concat(args);
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    if ('function' === typeof exports.formatArgs) {
      args = exports.formatArgs.apply(self, args);
    }
    var logFn = enabled.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }
  enabled.enabled = true;

  var fn = exports.enabled(namespace) ? enabled : disabled;

  fn.namespace = namespace;

  return fn;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":24}],24:[function(_dereq_,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options){
  options = options || {};
  if ('string' == typeof val) return parse(val);
  return options.long
    ? long(val)
    : short(val);
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!match) return;
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 's':
      return n * s;
    case 'ms':
      return n;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function short(ms) {
  if (ms >= d) return Math.round(ms / d) + 'd';
  if (ms >= h) return Math.round(ms / h) + 'h';
  if (ms >= m) return Math.round(ms / m) + 'm';
  if (ms >= s) return Math.round(ms / s) + 's';
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function long(ms) {
  return plural(ms, d, 'day')
    || plural(ms, h, 'hour')
    || plural(ms, m, 'minute')
    || plural(ms, s, 'second')
    || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) return;
  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],25:[function(_dereq_,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = _dereq_('./keys');
var hasBinary = _dereq_('has-binary');
var sliceBuffer = _dereq_('arraybuffer.slice');
var base64encoder = _dereq_('base64-arraybuffer');
var after = _dereq_('after');
var utf8 = _dereq_('utf8');

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = navigator.userAgent.match(/Android/i);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = _dereq_('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if ('function' == typeof supportsBinary) {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if ('function' == typeof utf8encode) {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  // String data
  if (typeof data == 'string' || data === undefined) {
    if (data.charAt(0) == 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      try {
        data = utf8.decode(data);
      } catch (e) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!global.ArrayBuffer) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary == 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data != 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data == '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = ''
    , n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (':' != chr) {
      length += chr;
    } else {
      if ('' == length || (length != (n = Number(length)))) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      msg = data.substr(i + 1, n);

      if (length != msg.length) {
        // parser error - ignoring payload
        return callback(err, 0, 1);
      }

      if (msg.length) {
        packet = exports.decodePacket(msg, binaryType, true);

        if (err.type == packet.type && err.data == packet.data) {
          // parser error in individual packet - ignoring payload
          return callback(err, 0, 1);
        }

        var ret = callback(packet, i + n, l);
        if (false === ret) return;
      }

      // advance cursor
      i += n;
      length = '';
    }
  }

  if (length != '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  var numberTooLong = false;
  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] == 255) break;

      if (msgLength.length > 310) {
        numberTooLong = true;
        break;
      }

      msgLength += tailArray[i];
    }

    if(numberTooLong) return callback(err, 0, 1);

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./keys":26,"after":27,"arraybuffer.slice":28,"base64-arraybuffer":29,"blob":30,"has-binary":36,"utf8":31}],26:[function(_dereq_,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],27:[function(_dereq_,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],28:[function(_dereq_,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],29:[function(_dereq_,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(chars){
  "use strict";

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i+1]);
      encoded3 = chars.indexOf(base64[i+2]);
      encoded4 = chars.indexOf(base64[i+3]);

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

},{}],30:[function(_dereq_,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(_dereq_,module,exports){
(function (global){
/*! https://mths.be/utf8js v2.0.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			var byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.0.0',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],32:[function(_dereq_,module,exports){
(function (global){
/**
 * JSON parse.
 *
 * @see Based on jQuery#parseJSON (MIT) and JSON2
 * @api private
 */

var rvalidchars = /^[\],:{}\s]*$/;
var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
var rtrimLeft = /^\s+/;
var rtrimRight = /\s+$/;

module.exports = function parsejson(data) {
  if ('string' != typeof data || !data) {
    return null;
  }

  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

  // Attempt to parse using the native JSON parser first
  if (global.JSON && JSON.parse) {
    return JSON.parse(data);
  }

  if (rvalidchars.test(data.replace(rvalidescape, '@')
      .replace(rvalidtokens, ']')
      .replace(rvalidbraces, ''))) {
    return (new Function('return ' + data))();
  }
};
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],33:[function(_dereq_,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],34:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],35:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = (function() { return this; })();

/**
 * WebSocket constructor.
 */

var WebSocket = global.WebSocket || global.MozWebSocket;

/**
 * Module exports.
 */

module.exports = WebSocket ? ws : null;

/**
 * WebSocket constructor.
 *
 * The third `opts` options object gets ignored in web browsers, since it's
 * non-standard, and throws a TypeError if passed to the constructor.
 * See: https://github.com/einaros/ws/issues/227
 *
 * @param {String} uri
 * @param {Array} protocols (optional)
 * @param {Object) opts (optional)
 * @api public
 */

function ws(uri, protocols, opts) {
  var instance;
  if (protocols) {
    instance = new WebSocket(uri, protocols);
  } else {
    instance = new WebSocket(uri);
  }
  return instance;
}

if (WebSocket) ws.prototype = WebSocket.prototype;

},{}],36:[function(_dereq_,module,exports){
(function (global){

/*
 * Module requirements.
 */

var isArray = _dereq_('isarray');

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Right now only Buffer and ArrayBuffer are supported..
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(data) {

  function _hasBinary(obj) {
    if (!obj) return false;

    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
         (global.Blob && obj instanceof Blob) ||
         (global.File && obj instanceof File)
        ) {
      return true;
    }

    if (isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
          if (_hasBinary(obj[i])) {
              return true;
          }
      }
    } else if (obj && 'object' == typeof obj) {
      if (obj.toJSON) {
        obj = obj.toJSON();
      }

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

  return _hasBinary(data);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"isarray":37}],37:[function(_dereq_,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],38:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var global = _dereq_('global');

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = 'XMLHttpRequest' in global &&
    'withCredentials' in new global.XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{"global":39}],39:[function(_dereq_,module,exports){

/**
 * Returns `this`. Execute this without a "context" (i.e. without it being
 * attached to an object of the left-hand side), and `this` points to the
 * "global" scope of the current JS execution.
 */

module.exports = (function () { return this; })();

},{}],40:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],41:[function(_dereq_,module,exports){

/**
 * HOP ref.
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Return own keys in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.keys = Object.keys || function(obj){
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

/**
 * Return own values in `obj`.
 *
 * @param {Object} obj
 * @return {Array}
 * @api public
 */

exports.values = function(obj){
  var vals = [];
  for (var key in obj) {
    if (has.call(obj, key)) {
      vals.push(obj[key]);
    }
  }
  return vals;
};

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api public
 */

exports.merge = function(a, b){
  for (var key in b) {
    if (has.call(b, key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/**
 * Return length of `obj`.
 *
 * @param {Object} obj
 * @return {Number}
 * @api public
 */

exports.length = function(obj){
  return exports.keys(obj).length;
};

/**
 * Check if `obj` is empty.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api public
 */

exports.isEmpty = function(obj){
  return 0 == exports.length(obj);
};
},{}],42:[function(_dereq_,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host'
  , 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
  var m = re.exec(str || '')
    , uri = {}
    , i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  return uri;
};

},{}],43:[function(_dereq_,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = _dereq_('isarray');
var isBuf = _dereq_('./is-buffer');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet){
  var buffers = [];
  var packetData = packet.data;

  function _deconstructPacket(data) {
    if (!data) return data;

    if (isBuf(data)) {
      var placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (isArray(data)) {
      var newData = new Array(data.length);
      for (var i = 0; i < data.length; i++) {
        newData[i] = _deconstructPacket(data[i]);
      }
      return newData;
    } else if ('object' == typeof data && !(data instanceof Date)) {
      var newData = {};
      for (var key in data) {
        newData[key] = _deconstructPacket(data[key]);
      }
      return newData;
    }
    return data;
  }

  var pack = packet;
  pack.data = _deconstructPacket(packetData);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  var curPlaceHolder = 0;

  function _reconstructPacket(data) {
    if (data && data._placeholder) {
      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
      return buf;
    } else if (isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        data[i] = _reconstructPacket(data[i]);
      }
      return data;
    } else if (data && 'object' == typeof data) {
      for (var key in data) {
        data[key] = _reconstructPacket(data[key]);
      }
      return data;
    }
    return data;
  }

  packet.data = _reconstructPacket(packet.data);
  packet.attachments = undefined; // no longer useful
  return packet;
};

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((global.Blob && obj instanceof Blob) ||
        (global.File && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./is-buffer":45,"isarray":46}],44:[function(_dereq_,module,exports){

/**
 * Module dependencies.
 */

var debug = _dereq_('debug')('socket.io-parser');
var json = _dereq_('json3');
var isArray = _dereq_('isarray');
var Emitter = _dereq_('component-emitter');
var binary = _dereq_('./binary');
var isBuf = _dereq_('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'BINARY_EVENT',
  'ACK',
  'BINARY_ACK',
  'ERROR'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {
  var str = '';
  var nsp = false;

  // first is type
  str += obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
    str += obj.attachments;
    str += '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' != obj.nsp) {
    nsp = true;
    str += obj.nsp;
  }

  // immediately followed by the id
  if (null != obj.id) {
    if (nsp) {
      str += ',';
      nsp = false;
    }
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    if (nsp) str += ',';
    str += json.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if ('string' == typeof obj) {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var p = {};
  var i = 0;

  // look up type
  p.type = Number(str.charAt(0));
  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
    var buf = '';
    while (str.charAt(++i) != '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) != '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' == str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' == c) break;
      p.nsp += c;
      if (i == str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i == str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    try {
      p.data = json.parse(str.substr(i));
    } catch(e){
      return error();
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(data){
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":43,"./is-buffer":45,"component-emitter":9,"debug":10,"isarray":46,"json3":47}],45:[function(_dereq_,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],46:[function(_dereq_,module,exports){
module.exports=_dereq_(37)
},{}],47:[function(_dereq_,module,exports){
/*! JSON v3.2.6 | http://bestiejs.github.io/json3 | Copyright 2012-2013, Kit Cambridge | http://kit.mit-license.org */
;(function (window) {
  // Convenience aliases.
  var getClass = {}.toString, isProperty, forEach, undef;

  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader = typeof define === "function" && define.amd;

  // Detect native implementations.
  var nativeJSON = typeof JSON == "object" && JSON;

  // Set up the JSON 3 namespace, preferring the CommonJS `exports` object if
  // available.
  var JSON3 = typeof exports == "object" && exports && !exports.nodeType && exports;

  if (JSON3 && nativeJSON) {
    // Explicitly delegate to the native `stringify` and `parse`
    // implementations in CommonJS environments.
    JSON3.stringify = nativeJSON.stringify;
    JSON3.parse = nativeJSON.parse;
  } else {
    // Export for web browsers, JavaScript engines, and asynchronous module
    // loaders, using the global `JSON` object if available.
    JSON3 = window.JSON = nativeJSON || {};
  }

  // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
  var isExtended = new Date(-3509827334573292);
  try {
    // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
    // results for certain dates in Opera >= 10.53.
    isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
      // Safari < 2.0.2 stores the internal millisecond time value correctly,
      // but clips the values returned by the date methods to the range of
      // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
      isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
  } catch (exception) {}

  // Internal: Determines whether the native `JSON.stringify` and `parse`
  // implementations are spec-compliant. Based on work by Ken Snyder.
  function has(name) {
    if (has[name] !== undef) {
      // Return cached feature test result.
      return has[name];
    }

    var isSupported;
    if (name == "bug-string-char-index") {
      // IE <= 7 doesn't support accessing string characters using square
      // bracket notation. IE 8 only supports this for primitives.
      isSupported = "a"[0] != "a";
    } else if (name == "json") {
      // Indicates whether both `JSON.stringify` and `JSON.parse` are
      // supported.
      isSupported = has("json-stringify") && has("json-parse");
    } else {
      var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
      // Test `JSON.stringify`.
      if (name == "json-stringify") {
        var stringify = JSON3.stringify, stringifySupported = typeof stringify == "function" && isExtended;
        if (stringifySupported) {
          // A test function object with a custom `toJSON` method.
          (value = function () {
            return 1;
          }).toJSON = value;
          try {
            stringifySupported =
              // Firefox 3.1b1 and b2 serialize string, number, and boolean
              // primitives as object literals.
              stringify(0) === "0" &&
              // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
              // literals.
              stringify(new Number()) === "0" &&
              stringify(new String()) == '""' &&
              // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
              // does not define a canonical JSON representation (this applies to
              // objects with `toJSON` properties as well, *unless* they are nested
              // within an object or array).
              stringify(getClass) === undef &&
              // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
              // FF 3.1b3 pass this test.
              stringify(undef) === undef &&
              // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
              // respectively, if the value is omitted entirely.
              stringify() === undef &&
              // FF 3.1b1, 2 throw an error if the given value is not a number,
              // string, array, object, Boolean, or `null` literal. This applies to
              // objects with custom `toJSON` methods as well, unless they are nested
              // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
              // methods entirely.
              stringify(value) === "1" &&
              stringify([value]) == "[1]" &&
              // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
              // `"[null]"`.
              stringify([undef]) == "[null]" &&
              // YUI 3.0.0b1 fails to serialize `null` literals.
              stringify(null) == "null" &&
              // FF 3.1b1, 2 halts serialization if an array contains a function:
              // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
              // elides non-JSON values from objects and arrays, unless they
              // define custom `toJSON` methods.
              stringify([undef, getClass, null]) == "[null,null,null]" &&
              // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
              // where character escape codes are expected (e.g., `\b` => `\u0008`).
              stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
              // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
              stringify(null, value) === "1" &&
              stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          } catch (exception) {
            stringifySupported = false;
          }
        }
        isSupported = stringifySupported;
      }
      // Test `JSON.parse`.
      if (name == "json-parse") {
        var parse = JSON3.parse;
        if (typeof parse == "function") {
          try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (parse("0") === 0 && !parse(false)) {
              // Simple parsing test.
              value = parse(serialized);
              var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
              if (parseSupported) {
                try {
                  // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                  parseSupported = !parse('"\t"');
                } catch (exception) {}
                if (parseSupported) {
                  try {
                    // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                    // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                    // certain octal literals.
                    parseSupported = parse("01") !== 1;
                  } catch (exception) {}
                }
                if (parseSupported) {
                  try {
                    // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                    // points. These environments, along with FF 3.1b1 and 2,
                    // also allow trailing commas in JSON objects and arrays.
                    parseSupported = parse("1.") !== 1;
                  } catch (exception) {}
                }
              }
            }
          } catch (exception) {
            parseSupported = false;
          }
        }
        isSupported = parseSupported;
      }
    }
    return has[name] = !!isSupported;
  }

  if (!has("json")) {
    // Common `[[Class]]` name aliases.
    var functionClass = "[object Function]";
    var dateClass = "[object Date]";
    var numberClass = "[object Number]";
    var stringClass = "[object String]";
    var arrayClass = "[object Array]";
    var booleanClass = "[object Boolean]";

    // Detect incomplete support for accessing string characters by index.
    var charIndexBuggy = has("bug-string-char-index");

    // Define additional utility methods if the `Date` methods are buggy.
    if (!isExtended) {
      var floor = Math.floor;
      // A mapping between the months of the year and the number of days between
      // January 1st and the first of the respective month.
      var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      // Internal: Calculates the number of days between the Unix epoch and the
      // first day of the given month.
      var getDay = function (year, month) {
        return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
      };
    }

    // Internal: Determines if a property is a direct property of the given
    // object. Delegates to the native `Object#hasOwnProperty` method.
    if (!(isProperty = {}.hasOwnProperty)) {
      isProperty = function (property) {
        var members = {}, constructor;
        if ((members.__proto__ = null, members.__proto__ = {
          // The *proto* property cannot be set multiple times in recent
          // versions of Firefox and SeaMonkey.
          "toString": 1
        }, members).toString != getClass) {
          // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
          // supports the mutable *proto* property.
          isProperty = function (property) {
            // Capture and break the object's prototype chain (see section 8.6.2
            // of the ES 5.1 spec). The parenthesized expression prevents an
            // unsafe transformation by the Closure Compiler.
            var original = this.__proto__, result = property in (this.__proto__ = null, this);
            // Restore the original prototype chain.
            this.__proto__ = original;
            return result;
          };
        } else {
          // Capture a reference to the top-level `Object` constructor.
          constructor = members.constructor;
          // Use the `constructor` property to simulate `Object#hasOwnProperty` in
          // other environments.
          isProperty = function (property) {
            var parent = (this.constructor || constructor).prototype;
            return property in this && !(property in parent && this[property] === parent[property]);
          };
        }
        members = null;
        return isProperty.call(this, property);
      };
    }

    // Internal: A set of primitive types used by `isHostType`.
    var PrimitiveTypes = {
      'boolean': 1,
      'number': 1,
      'string': 1,
      'undefined': 1
    };

    // Internal: Determines if the given object `property` value is a
    // non-primitive.
    var isHostType = function (object, property) {
      var type = typeof object[property];
      return type == 'object' ? !!object[property] : !PrimitiveTypes[type];
    };

    // Internal: Normalizes the `for...in` iteration algorithm across
    // environments. Each enumerated key is yielded to a `callback` function.
    forEach = function (object, callback) {
      var size = 0, Properties, members, property;

      // Tests for bugs in the current environment's `for...in` algorithm. The
      // `valueOf` property inherits the non-enumerable flag from
      // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
      (Properties = function () {
        this.valueOf = 0;
      }).prototype.valueOf = 0;

      // Iterate over a new instance of the `Properties` class.
      members = new Properties();
      for (property in members) {
        // Ignore all properties inherited from `Object.prototype`.
        if (isProperty.call(members, property)) {
          size++;
        }
      }
      Properties = members = null;

      // Normalize the iteration algorithm.
      if (!size) {
        // A list of non-enumerable properties inherited from `Object.prototype`.
        members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
        // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
        // properties.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, length;
          var hasProperty = !isFunction && typeof object.constructor != 'function' && isHostType(object, 'hasOwnProperty') ? object.hasOwnProperty : isProperty;
          for (property in object) {
            // Gecko <= 1.0 enumerates the `prototype` property of functions under
            // certain conditions; IE does not.
            if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
              callback(property);
            }
          }
          // Manually invoke the callback for each non-enumerable property.
          for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
        };
      } else if (size == 2) {
        // Safari <= 2.0.4 enumerates shadowed properties twice.
        forEach = function (object, callback) {
          // Create a set of iterated properties.
          var members = {}, isFunction = getClass.call(object) == functionClass, property;
          for (property in object) {
            // Store each property name to prevent double enumeration. The
            // `prototype` property of functions is not enumerated due to cross-
            // environment inconsistencies.
            if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
              callback(property);
            }
          }
        };
      } else {
        // No bugs detected; use the standard `for...in` algorithm.
        forEach = function (object, callback) {
          var isFunction = getClass.call(object) == functionClass, property, isConstructor;
          for (property in object) {
            if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
              callback(property);
            }
          }
          // Manually invoke the callback for the `constructor` property due to
          // cross-environment inconsistencies.
          if (isConstructor || isProperty.call(object, (property = "constructor"))) {
            callback(property);
          }
        };
      }
      return forEach(object, callback);
    };

    // Public: Serializes a JavaScript `value` as a JSON string. The optional
    // `filter` argument may specify either a function that alters how object and
    // array members are serialized, or an array of strings and numbers that
    // indicates which properties should be serialized. The optional `width`
    // argument may be either a string or number that specifies the indentation
    // level of the output.
    if (!has("json-stringify")) {
      // Internal: A map of control characters and their escaped equivalents.
      var Escapes = {
        92: "\\\\",
        34: '\\"',
        8: "\\b",
        12: "\\f",
        10: "\\n",
        13: "\\r",
        9: "\\t"
      };

      // Internal: Converts `value` into a zero-padded string such that its
      // length is at least equal to `width`. The `width` must be <= 6.
      var leadingZeroes = "000000";
      var toPaddedString = function (width, value) {
        // The `|| 0` expression is necessary to work around a bug in
        // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
        return (leadingZeroes + (value || 0)).slice(-width);
      };

      // Internal: Double-quotes a string `value`, replacing all ASCII control
      // characters (characters with code unit values between 0 and 31) with
      // their escaped equivalents. This is an implementation of the
      // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
      var unicodePrefix = "\\u00";
      var quote = function (value) {
        var result = '"', index = 0, length = value.length, isLarge = length > 10 && charIndexBuggy, symbols;
        if (isLarge) {
          symbols = value.split("");
        }
        for (; index < length; index++) {
          var charCode = value.charCodeAt(index);
          // If the character is a control character, append its Unicode or
          // shorthand escape sequence; otherwise, append the character as-is.
          switch (charCode) {
            case 8: case 9: case 10: case 12: case 13: case 34: case 92:
              result += Escapes[charCode];
              break;
            default:
              if (charCode < 32) {
                result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                break;
              }
              result += isLarge ? symbols[index] : charIndexBuggy ? value.charAt(index) : value[index];
          }
        }
        return result + '"';
      };

      // Internal: Recursively serializes an object. Implements the
      // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
      var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
        var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
        try {
          // Necessary for host object support.
          value = object[property];
        } catch (exception) {}
        if (typeof value == "object" && value) {
          className = getClass.call(value);
          if (className == dateClass && !isProperty.call(value, "toJSON")) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              if (getDay) {
                // Manually compute the year, month, date, hours, minutes,
                // seconds, and milliseconds if the `getUTC*` methods are
                // buggy. Adapted from @Yaffle's `date-shim` project.
                date = floor(value / 864e5);
                for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                date = 1 + date - getDay(year, month);
                // The `time` value specifies the time within the day (see ES
                // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                // to compute `A modulo B`, as the `%` operator does not
                // correspond to the `modulo` operation for negative numbers.
                time = (value % 864e5 + 864e5) % 864e5;
                // The hours, minutes, seconds, and milliseconds are obtained by
                // decomposing the time within the day. See section 15.9.1.10.
                hours = floor(time / 36e5) % 24;
                minutes = floor(time / 6e4) % 60;
                seconds = floor(time / 1e3) % 60;
                milliseconds = time % 1e3;
              } else {
                year = value.getUTCFullYear();
                month = value.getUTCMonth();
                date = value.getUTCDate();
                hours = value.getUTCHours();
                minutes = value.getUTCMinutes();
                seconds = value.getUTCSeconds();
                milliseconds = value.getUTCMilliseconds();
              }
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
                "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                // Months, dates, hours, minutes, and seconds should have two
                // digits; milliseconds should have three.
                "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                // Milliseconds are optional in ES 5.0, but required in 5.1.
                "." + toPaddedString(3, milliseconds) + "Z";
            } else {
              value = null;
            }
          } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
            // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
            // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
            // ignores all `toJSON` methods on these objects unless they are
            // defined directly on an instance.
            value = value.toJSON(property);
          }
        }
        if (callback) {
          // If a replacement function was provided, call it to obtain the value
          // for serialization.
          value = callback.call(object, property, value);
        }
        if (value === null) {
          return "null";
        }
        className = getClass.call(value);
        if (className == booleanClass) {
          // Booleans are represented literally.
          return "" + value;
        } else if (className == numberClass) {
          // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
          // `"null"`.
          return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
        } else if (className == stringClass) {
          // Strings are double-quoted and escaped.
          return quote("" + value);
        }
        // Recursively serialize objects and arrays.
        if (typeof value == "object") {
          // Check for cyclic structures. This is a linear search; performance
          // is inversely proportional to the number of unique nested objects.
          for (length = stack.length; length--;) {
            if (stack[length] === value) {
              // Cyclic structures cannot be serialized by `JSON.stringify`.
              throw TypeError();
            }
          }
          // Add the object to the stack of traversed objects.
          stack.push(value);
          results = [];
          // Save the current indentation level and indent one additional level.
          prefix = indentation;
          indentation += whitespace;
          if (className == arrayClass) {
            // Recursively serialize array elements.
            for (index = 0, length = value.length; index < length; index++) {
              element = serialize(index, value, callback, properties, whitespace, indentation, stack);
              results.push(element === undef ? "null" : element);
            }
            result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
          } else {
            // Recursively serialize object members. Members are selected from
            // either a user-specified list of property names, or the object
            // itself.
            forEach(properties || value, function (property) {
              var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
              if (element !== undef) {
                // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                // is not the empty string, let `member` {quote(property) + ":"}
                // be the concatenation of `member` and the `space` character."
                // The "`space` character" refers to the literal space
                // character, not the `space` {width} argument provided to
                // `JSON.stringify`.
                results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
              }
            });
            result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
          }
          // Remove the object from the traversed object stack.
          stack.pop();
          return result;
        }
      };

      // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
      JSON3.stringify = function (source, filter, width) {
        var whitespace, callback, properties, className;
        if (typeof filter == "function" || typeof filter == "object" && filter) {
          if ((className = getClass.call(filter)) == functionClass) {
            callback = filter;
          } else if (className == arrayClass) {
            // Convert the property names array into a makeshift set.
            properties = {};
            for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
          }
        }
        if (width) {
          if ((className = getClass.call(width)) == numberClass) {
            // Convert the `width` to an integer and create a string containing
            // `width` number of space characters.
            if ((width -= width % 1) > 0) {
              for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
            }
          } else if (className == stringClass) {
            whitespace = width.length <= 10 ? width : width.slice(0, 10);
          }
        }
        // Opera <= 7.54u2 discards the values associated with empty string keys
        // (`""`) only if they are used directly within an object member list
        // (e.g., `!("" in { "": 1})`).
        return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
      };
    }

    // Public: Parses a JSON source string.
    if (!has("json-parse")) {
      var fromCharCode = String.fromCharCode;

      // Internal: A map of escaped control characters and their unescaped
      // equivalents.
      var Unescapes = {
        92: "\\",
        34: '"',
        47: "/",
        98: "\b",
        116: "\t",
        110: "\n",
        102: "\f",
        114: "\r"
      };

      // Internal: Stores the parser state.
      var Index, Source;

      // Internal: Resets the parser state and throws a `SyntaxError`.
      var abort = function() {
        Index = Source = null;
        throw SyntaxError();
      };

      // Internal: Returns the next token, or `"$"` if the parser has reached
      // the end of the source string. A token may be a string, number, `null`
      // literal, or Boolean literal.
      var lex = function () {
        var source = Source, length = source.length, value, begin, position, isSigned, charCode;
        while (Index < length) {
          charCode = source.charCodeAt(Index);
          switch (charCode) {
            case 9: case 10: case 13: case 32:
              // Skip whitespace tokens, including tabs, carriage returns, line
              // feeds, and space characters.
              Index++;
              break;
            case 123: case 125: case 91: case 93: case 58: case 44:
              // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
              // the current position.
              value = charIndexBuggy ? source.charAt(Index) : source[Index];
              Index++;
              return value;
            case 34:
              // `"` delimits a JSON string; advance to the next character and
              // begin parsing the string. String tokens are prefixed with the
              // sentinel `@` character to distinguish them from punctuators and
              // end-of-string tokens.
              for (value = "@", Index++; Index < length;) {
                charCode = source.charCodeAt(Index);
                if (charCode < 32) {
                  // Unescaped ASCII control characters (those with a code unit
                  // less than the space character) are not permitted.
                  abort();
                } else if (charCode == 92) {
                  // A reverse solidus (`\`) marks the beginning of an escaped
                  // control character (including `"`, `\`, and `/`) or Unicode
                  // escape sequence.
                  charCode = source.charCodeAt(++Index);
                  switch (charCode) {
                    case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                      // Revive escaped control characters.
                      value += Unescapes[charCode];
                      Index++;
                      break;
                    case 117:
                      // `\u` marks the beginning of a Unicode escape sequence.
                      // Advance to the first character and validate the
                      // four-digit code point.
                      begin = ++Index;
                      for (position = Index + 4; Index < position; Index++) {
                        charCode = source.charCodeAt(Index);
                        // A valid sequence comprises four hexdigits (case-
                        // insensitive) that form a single hexadecimal value.
                        if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                          // Invalid Unicode escape sequence.
                          abort();
                        }
                      }
                      // Revive the escaped character.
                      value += fromCharCode("0x" + source.slice(begin, Index));
                      break;
                    default:
                      // Invalid escape sequence.
                      abort();
                  }
                } else {
                  if (charCode == 34) {
                    // An unescaped double-quote character marks the end of the
                    // string.
                    break;
                  }
                  charCode = source.charCodeAt(Index);
                  begin = Index;
                  // Optimize for the common case where a string is valid.
                  while (charCode >= 32 && charCode != 92 && charCode != 34) {
                    charCode = source.charCodeAt(++Index);
                  }
                  // Append the string as-is.
                  value += source.slice(begin, Index);
                }
              }
              if (source.charCodeAt(Index) == 34) {
                // Advance to the next character and return the revived string.
                Index++;
                return value;
              }
              // Unterminated string.
              abort();
            default:
              // Parse numbers and literals.
              begin = Index;
              // Advance past the negative sign, if one is specified.
              if (charCode == 45) {
                isSigned = true;
                charCode = source.charCodeAt(++Index);
              }
              // Parse an integer or floating-point value.
              if (charCode >= 48 && charCode <= 57) {
                // Leading zeroes are interpreted as octal literals.
                if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                  // Illegal octal literal.
                  abort();
                }
                isSigned = false;
                // Parse the integer component.
                for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                // Floats cannot contain a leading decimal point; however, this
                // case is already accounted for by the parser.
                if (source.charCodeAt(Index) == 46) {
                  position = ++Index;
                  // Parse the decimal component.
                  for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal trailing decimal.
                    abort();
                  }
                  Index = position;
                }
                // Parse exponents. The `e` denoting the exponent is
                // case-insensitive.
                charCode = source.charCodeAt(Index);
                if (charCode == 101 || charCode == 69) {
                  charCode = source.charCodeAt(++Index);
                  // Skip past the sign following the exponent, if one is
                  // specified.
                  if (charCode == 43 || charCode == 45) {
                    Index++;
                  }
                  // Parse the exponential component.
                  for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
                  if (position == Index) {
                    // Illegal empty exponent.
                    abort();
                  }
                  Index = position;
                }
                // Coerce the parsed value to a JavaScript number.
                return +source.slice(begin, Index);
              }
              // A negative sign may only precede numbers.
              if (isSigned) {
                abort();
              }
              // `true`, `false`, and `null` literals.
              if (source.slice(Index, Index + 4) == "true") {
                Index += 4;
                return true;
              } else if (source.slice(Index, Index + 5) == "false") {
                Index += 5;
                return false;
              } else if (source.slice(Index, Index + 4) == "null") {
                Index += 4;
                return null;
              }
              // Unrecognized token.
              abort();
          }
        }
        // Return the sentinel `$` character if the parser has reached the end
        // of the source string.
        return "$";
      };

      // Internal: Parses a JSON `value` token.
      var get = function (value) {
        var results, hasMembers;
        if (value == "$") {
          // Unexpected end of input.
          abort();
        }
        if (typeof value == "string") {
          if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
            // Remove the sentinel `@` character.
            return value.slice(1);
          }
          // Parse object and array literals.
          if (value == "[") {
            // Parses a JSON array, returning a new JavaScript array.
            results = [];
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing square bracket marks the end of the array literal.
              if (value == "]") {
                break;
              }
              // If the array literal contains elements, the current token
              // should be a comma separating the previous element from the
              // next.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "]") {
                    // Unexpected trailing `,` in array literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each array element.
                  abort();
                }
              }
              // Elisions and leading commas are not permitted.
              if (value == ",") {
                abort();
              }
              results.push(get(value));
            }
            return results;
          } else if (value == "{") {
            // Parses a JSON object, returning a new JavaScript object.
            results = {};
            for (;; hasMembers || (hasMembers = true)) {
              value = lex();
              // A closing curly brace marks the end of the object literal.
              if (value == "}") {
                break;
              }
              // If the object literal contains members, the current token
              // should be a comma separator.
              if (hasMembers) {
                if (value == ",") {
                  value = lex();
                  if (value == "}") {
                    // Unexpected trailing `,` in object literal.
                    abort();
                  }
                } else {
                  // A `,` must separate each object member.
                  abort();
                }
              }
              // Leading commas are not permitted, object property names must be
              // double-quoted strings, and a `:` must separate each property
              // name and value.
              if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                abort();
              }
              results[value.slice(1)] = get(lex());
            }
            return results;
          }
          // Unexpected token encountered.
          abort();
        }
        return value;
      };

      // Internal: Updates a traversed object member.
      var update = function(source, property, callback) {
        var element = walk(source, property, callback);
        if (element === undef) {
          delete source[property];
        } else {
          source[property] = element;
        }
      };

      // Internal: Recursively traverses a parsed JSON object, invoking the
      // `callback` function for each value. This is an implementation of the
      // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
      var walk = function (source, property, callback) {
        var value = source[property], length;
        if (typeof value == "object" && value) {
          // `forEach` can't be used to traverse an array in Opera <= 8.54
          // because its `Object#hasOwnProperty` implementation returns `false`
          // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
          if (getClass.call(value) == arrayClass) {
            for (length = value.length; length--;) {
              update(value, length, callback);
            }
          } else {
            forEach(value, function (property) {
              update(value, property, callback);
            });
          }
        }
        return callback.call(source, property, value);
      };

      // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
      JSON3.parse = function (source, callback) {
        var result, value;
        Index = 0;
        Source = "" + source;
        result = get(lex());
        // If a JSON string contains multiple tokens, it is invalid.
        if (lex() != "$") {
          abort();
        }
        // Reset the parser state.
        Index = Source = null;
        return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
      };
    }
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    define(function () {
      return JSON3;
    });
  }
}(this));

},{}],48:[function(_dereq_,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}]},{},[1])
(1)
});

//! moment.js
//! version : 2.15.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return md.apply(null,arguments)}
// This is done to register the method called with moment()
// without creating circular dependencies.
function b(a){md=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){
// IE8 will treat undefined and null as object if it wasn't for
// input != null
return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)
// even if its not own property I'd still call it non-empty
return!1;return!0}function f(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function g(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function h(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function i(a,b){for(var c in b)h(b,c)&&(a[c]=b[c]);return h(b,"toString")&&(a.toString=b.toString),h(b,"valueOf")&&(a.valueOf=b.valueOf),a}function j(a,b,c,d){return qb(a,b,c,d,!0).utc()}function k(){
// We need to deep clone this object.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function l(a){return null==a._pf&&(a._pf=k()),a._pf}function m(a){if(null==a._isValid){var b=l(a),c=nd.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function n(a){var b=j(NaN);return null!=a?i(l(b),a):l(b).userInvalidated=!0,b}function o(a){return void 0===a}function p(a,b){var c,d,e;if(o(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),o(b._i)||(a._i=b._i),o(b._f)||(a._f=b._f),o(b._l)||(a._l=b._l),o(b._strict)||(a._strict=b._strict),o(b._tzm)||(a._tzm=b._tzm),o(b._isUTC)||(a._isUTC=b._isUTC),o(b._offset)||(a._offset=b._offset),o(b._pf)||(a._pf=l(b)),o(b._locale)||(a._locale=b._locale),od.length>0)for(c in od)d=od[c],e=b[d],o(e)||(a[d]=e);return a}
// Moment prototype object
function q(b){p(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),pd===!1&&(pd=!0,a.updateOffset(this),pd=!1)}function r(a){return a instanceof q||null!=a&&null!=a._isAMomentObject}function s(a){return 0>a?Math.ceil(a)||0:Math.floor(a)}function t(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=s(b)),c}
// compare two arrays, return the number of differences
function u(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&t(a[d])!==t(b[d]))&&g++;return g+f}function v(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function w(b,c){var d=!0;return i(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}v(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function x(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),qd[b]||(v(c),qd[b]=!0)}function y(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function z(a){var b,c;for(c in a)b=a[c],y(b)?this[c]=b:this["_"+c]=b;this._config=a,
// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function A(a,b){var c,e=i({},a);for(c in b)h(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},i(e[c],a[c]),i(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)h(a,c)&&!h(b,c)&&d(a[c])&&(
// make sure changes to properties don't modify parent config
e[c]=i({},e[c]));return e}function B(a){null!=a&&this.set(a)}function C(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return y(d)?d.call(b,c):d}function D(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function E(){return this._invalidDate}function F(a){return this._ordinal.replace("%d",a)}function G(a,b,c,d){var e=this._relativeTime[c];return y(e)?e(a,b,c,d):e.replace(/%d/i,a)}function H(a,b){var c=this._relativeTime[a>0?"future":"past"];return y(c)?c(b):c.replace(/%s/i,b)}function I(a,b){var c=a.toLowerCase();zd[c]=zd[c+"s"]=zd[b]=a}function J(a){return"string"==typeof a?zd[a]||zd[a.toLowerCase()]:void 0}function K(a){var b,c,d={};for(c in a)h(a,c)&&(b=J(c),b&&(d[b]=a[c]));return d}function L(a,b){Ad[a]=b}function M(a){var b=[];for(var c in a)b.push({unit:c,priority:Ad[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function N(b,c){return function(d){return null!=d?(P(this,b,d),a.updateOffset(this,c),this):O(this,b)}}function O(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function P(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}
// MOMENTS
function Q(a){return a=J(a),y(this[a])?this[a]():this}function R(a,b){if("object"==typeof a){a=K(a);for(var c=M(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=J(a),y(this[a]))return this[a](b);return this}function S(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function T(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Ed[a]=e),b&&(Ed[b[0]]=function(){return S(e.apply(this,arguments),b[1],b[2])}),c&&(Ed[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function U(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function V(a){var b,c,d=a.match(Bd);for(b=0,c=d.length;c>b;b++)Ed[d[b]]?d[b]=Ed[d[b]]:d[b]=U(d[b]);return function(b){var e,f="";for(e=0;c>e;e++)f+=d[e]instanceof Function?d[e].call(b,a):d[e];return f}}
// format date using native date object
function W(a,b){return a.isValid()?(b=X(b,a.localeData()),Dd[b]=Dd[b]||V(b),Dd[b](a)):a.localeData().invalidDate()}function X(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Cd.lastIndex=0;d>=0&&Cd.test(a);)a=a.replace(Cd,c),Cd.lastIndex=0,d-=1;return a}function Y(a,b,c){Wd[a]=y(b)?b:function(a,d){return a&&c?c:b}}function Z(a,b){return h(Wd,a)?Wd[a](b._strict,b._locale):new RegExp($(a))}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function $(a){return _(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function _(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aa(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=t(a)}),c=0;c<a.length;c++)Xd[a[c]]=d}function ba(a,b){aa(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function ca(a,b,c){null!=b&&h(Xd,a)&&Xd[a](b,c._a,c,a)}function da(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function ea(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||fe).test(b)?"format":"standalone"][a.month()]:this._months}function fa(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[fe.test(b)?"format":"standalone"][a.month()]:this._monthsShort}function ga(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(
// this is not used
this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;12>d;++d)f=j([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null):(e=sd.call(this._longMonthsParse,g),-1!==e?e:null):"MMM"===b?(e=sd.call(this._shortMonthsParse,g),-1!==e?e:(e=sd.call(this._longMonthsParse,g),-1!==e?e:null)):(e=sd.call(this._longMonthsParse,g),-1!==e?e:(e=sd.call(this._shortMonthsParse,g),-1!==e?e:null))}function ha(a,b,c){var d,e,f;if(this._monthsParseExact)return ga.call(this,a,b,c);
// TODO: add sorting
// Sorting makes sure if one month (or abbr) is a prefix of another
// see sorting in computeMonthsParse
for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){
// test the regex
if(e=j([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}
// MOMENTS
function ia(a,b){var c;if(!a.isValid())
// No op
return a;if("string"==typeof b)if(/^\d+$/.test(b))b=t(b);else
// TODO: Another silent failure?
if(b=a.localeData().monthsParse(b),"number"!=typeof b)return a;return c=Math.min(a.date(),da(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ja(b){return null!=b?(ia(this,b),a.updateOffset(this,!0),this):O(this,"Month")}function ka(){return da(this.year(),this.month())}function la(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(h(this,"_monthsShortRegex")||(this._monthsShortRegex=ie),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function ma(a){return this._monthsParseExact?(h(this,"_monthsRegex")||na.call(this),a?this._monthsStrictRegex:this._monthsRegex):(h(this,"_monthsRegex")||(this._monthsRegex=je),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function na(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;12>b;b++)c=j([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(
// Sorting makes sure if one month (or abbr) is a prefix of another it
// will match the longer piece.
d.sort(a),e.sort(a),f.sort(a),b=0;12>b;b++)d[b]=_(d[b]),e[b]=_(e[b]);for(b=0;24>b;b++)f[b]=_(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}
// HELPERS
function oa(a){return pa(a)?366:365}function pa(a){return a%4===0&&a%100!==0||a%400===0}function qa(){return pa(this.year())}function ra(a,b,c,d,e,f,g){
//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var h=new Date(a,b,c,d,e,f,g);
//the date constructor remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function sa(a){var b=new Date(Date.UTC.apply(null,arguments));
//the Date.UTC function remaps years 0-99 to 1900-1999
return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}
// start-of-first-week - start-of-year
function ta(a,b,c){var// first-week day -- which january is always in the first week (4 for iso, 1 for other)
d=7+b-c,
// first-week day local weekday -- which local weekday is fwd
e=(7+sa(a,0,d).getUTCDay()-b)%7;return-e+d-1}
//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function ua(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ta(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=oa(f)+j):j>oa(a)?(f=a+1,g=j-oa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function va(a,b,c){var d,e,f=ta(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+wa(e,b,c)):g>wa(a.year(),b,c)?(d=g-wa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function wa(a,b,c){var d=ta(a,b,c),e=ta(a+1,b,c);return(oa(a)-d+e)/7}
// HELPERS
// LOCALES
function xa(a){return va(a,this._week.dow,this._week.doy).week}function ya(){return this._week.dow}function za(){return this._week.doy}
// MOMENTS
function Aa(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ba(a){var b=va(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}
// HELPERS
function Ca(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Da(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Ea(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:this._weekdays}function Fa(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ga(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;7>d;++d)f=j([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:null):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null):"dddd"===b?(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):"ddd"===b?(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:null))):(e=sd.call(this._minWeekdaysParse,g),-1!==e?e:(e=sd.call(this._weekdaysParse,g),-1!==e?e:(e=sd.call(this._shortWeekdaysParse,g),-1!==e?e:null)))}function Ia(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ha.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){
// test the regex
if(e=j([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}
// MOMENTS
function Ja(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Ca(a,this.localeData()),this.add(a-b,"d")):b}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function La(a){if(!this.isValid())return null!=a?this:NaN;
// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
if(null!=a){var b=Da(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Ma(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(h(this,"_weekdaysRegex")||(this._weekdaysRegex=pe),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Na(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(h(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Oa(a){return this._weekdaysParseExact?(h(this,"_weekdaysRegex")||Pa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(h(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=re),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Pa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],k=[];for(b=0;7>b;b++)c=j([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),k.push(d),k.push(e),k.push(f);for(
// Sorting makes sure if one weekday (or abbr) is a prefix of another it
// will match the longer piece.
g.sort(a),h.sort(a),i.sort(a),k.sort(a),b=0;7>b;b++)h[b]=_(h[b]),i[b]=_(i[b]),k[b]=_(k[b]);this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}
// FORMATTING
function Qa(){return this.hours()%12||12}function Ra(){return this.hours()||24}function Sa(a,b){T(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}
// PARSING
function Ta(a,b){return b._meridiemParse}
// LOCALES
function Ua(a){
// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(a+"").toLowerCase().charAt(0)}function Va(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Wa(a){return a?a.toLowerCase().replace("_","-"):a}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function Xa(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Wa(a[f]).split("-"),b=e.length,c=Wa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Ya(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&u(e,c,!0)>=b-1)
//the next array item is better than a shallower substring of this one
break;b--}f++}return null}function Ya(a){var b=null;
// TODO: Find a better way to register and load all the locales in Node
if(!we[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=se._abbr,require("./locale/"+a),
// because defineLocale currently also sets the global locale, we
// want to undo that for lazy loaded locales
Za(b)}catch(c){}return we[a]}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function Za(a,b){var c;
// moment.duration._locale = moment._locale = data;
return a&&(c=o(b)?ab(a):$a(a,b),c&&(se=c)),se._abbr}function $a(a,b){if(null!==b){var c=ve;
// treat as if there is no base config
// backwards compat for now: also set the locale
return b.abbr=a,null!=we[a]?(x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=we[a]._config):null!=b.parentLocale&&(null!=we[b.parentLocale]?c=we[b.parentLocale]._config:x("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),we[a]=new B(A(c,b)),Za(a),we[a]}
// useful for testing
return delete we[a],null}function _a(a,b){if(null!=b){var c,d=ve;
// MERGE
null!=we[a]&&(d=we[a]._config),b=A(d,b),c=new B(b),c.parentLocale=we[a],we[a]=c,
// backwards compat for now: also set the locale
Za(a)}else
// pass null for config to unupdate, useful for tests
null!=we[a]&&(null!=we[a].parentLocale?we[a]=we[a].parentLocale:null!=we[a]&&delete we[a]);return we[a]}
// returns locale data
function ab(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return se;if(!c(a)){if(b=Ya(a))return b;a=[a]}return Xa(a)}function bb(){return rd(we)}function cb(a){var b,c=a._a;return c&&-2===l(a).overflow&&(b=c[Zd]<0||c[Zd]>11?Zd:c[$d]<1||c[$d]>da(c[Yd],c[Zd])?$d:c[_d]<0||c[_d]>24||24===c[_d]&&(0!==c[ae]||0!==c[be]||0!==c[ce])?_d:c[ae]<0||c[ae]>59?ae:c[be]<0||c[be]>59?be:c[ce]<0||c[ce]>999?ce:-1,l(a)._overflowDayOfYear&&(Yd>b||b>$d)&&(b=$d),l(a)._overflowWeeks&&-1===b&&(b=de),l(a)._overflowWeekday&&-1===b&&(b=ee),l(a).overflow=b),a}
// date from iso format
function db(a){var b,c,d,e,f,g,h=a._i,i=xe.exec(h)||ye.exec(h);if(i){for(l(a).iso=!0,b=0,c=Ae.length;c>b;b++)if(Ae[b][1].exec(i[1])){e=Ae[b][0],d=Ae[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Be.length;c>b;b++)if(Be[b][1].exec(i[3])){
// match[2] should be 'T' or space
f=(i[2]||" ")+Be[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!ze.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),jb(a)}else a._isValid=!1}
// date from iso format or fallback
function eb(b){var c=Ce.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(db(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}
// Pick the first defined of two or three arguments.
function fb(a,b,c){return null!=a?a:null!=b?b:c}function gb(b){
// hooks is actually the exported moment object
var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function hb(a){var b,c,d,e,f=[];if(!a._d){
// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(d=gb(a),a._w&&null==a._a[$d]&&null==a._a[Zd]&&ib(a),a._dayOfYear&&(e=fb(a._a[Yd],d[Yd]),a._dayOfYear>oa(e)&&(l(a)._overflowDayOfYear=!0),c=sa(e,0,a._dayOfYear),a._a[Zd]=c.getUTCMonth(),a._a[$d]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];
// Zero out whatever was not defaulted, including time
for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];
// Check for 24:00:00.000
24===a._a[_d]&&0===a._a[ae]&&0===a._a[be]&&0===a._a[ce]&&(a._nextDay=!0,a._a[_d]=0),a._d=(a._useUTC?sa:ra).apply(null,f),
// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[_d]=24)}}function ib(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=fb(b.GG,a._a[Yd],va(rb(),1,4).year),d=fb(b.W,1),e=fb(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=fb(b.gg,a._a[Yd],va(rb(),f,g).year),d=fb(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>wa(c,f,g)?l(a)._overflowWeeks=!0:null!=i?l(a)._overflowWeekday=!0:(h=ua(c,d,e,f,g),a._a[Yd]=h.year,a._dayOfYear=h.dayOfYear)}
// date from string and format string
function jb(b){
// TODO: Move this to another part of the creation flow to prevent circular deps
if(b._f===a.ISO_8601)return void db(b);b._a=[],l(b).empty=!0;
// This array is used to make a Date, either with `new Date` or `Date.UTC`
var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=X(b._f,b._locale).match(Bd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(Z(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&l(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Ed[f]?(d?l(b).empty=!1:l(b).unusedTokens.push(f),ca(f,d,b)):b._strict&&!d&&l(b).unusedTokens.push(f);
// add remaining unparsed input length to the string
l(b).charsLeftOver=i-j,h.length>0&&l(b).unusedInput.push(h),
// clear _12h flag if hour is <= 12
b._a[_d]<=12&&l(b).bigHour===!0&&b._a[_d]>0&&(l(b).bigHour=void 0),l(b).parsedDateParts=b._a.slice(0),l(b).meridiem=b._meridiem,
// handle meridiem
b._a[_d]=kb(b._locale,b._a[_d],b._meridiem),hb(b),cb(b)}function kb(a,b,c){var d;
// Fallback
return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}
// date from string and array of format strings
function lb(a){var b,c,d,e,f;if(0===a._f.length)return l(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],jb(b),m(b)&&(f+=l(b).charsLeftOver,f+=10*l(b).unusedTokens.length,l(b).score=f,(null==d||d>f)&&(d=f,c=b));i(a,c||b)}function mb(a){if(!a._d){var b=K(a._i);a._a=g([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),hb(a)}}function nb(a){var b=new q(cb(ob(a)));
// Adding is smart enough around DST
return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function ob(a){var b=a._i,d=a._f;return a._locale=a._locale||ab(a._l),null===b||void 0===d&&""===b?n({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),r(b)?new q(cb(b)):(c(d)?lb(a):f(b)?a._d=b:d?jb(a):pb(a),m(a)||(a._d=null),a))}function pb(b){var d=b._i;void 0===d?b._d=new Date(a.now()):f(d)?b._d=new Date(d.valueOf()):"string"==typeof d?eb(b):c(d)?(b._a=g(d.slice(0),function(a){return parseInt(a,10)}),hb(b)):"object"==typeof d?mb(b):"number"==typeof d?
// from milliseconds
b._d=new Date(d):a.createFromInputFallback(b)}function qb(a,b,f,g,h){var i={};
// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
return"boolean"==typeof f&&(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,nb(i)}function rb(a,b,c,d){return qb(a,b,c,d,!1)}
// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function sb(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return rb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}
// TODO: Use [].sort instead?
function tb(){var a=[].slice.call(arguments,0);return sb("isBefore",a)}function ub(){var a=[].slice.call(arguments,0);return sb("isAfter",a)}function vb(a){var b=K(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;
// representation for dateAddRemove
this._milliseconds=+k+1e3*j+// 1000
6e4*i+// 1000 * 60
1e3*h*60*60,//using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+g+7*f,
// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+e+3*d+12*c,this._data={},this._locale=ab(),this._bubble()}function wb(a){return a instanceof vb}function xb(a){return 0>a?-1*Math.round(-1*a):Math.round(a)}
// FORMATTING
function yb(a,b){T(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+S(~~(a/60),2)+b+S(~~a%60,2)})}function zb(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Ge)||["-",0,0],f=+(60*e[1])+t(e[2]);return"+"===e[0]?f:-f}
// Return a moment from input, that is local/utc/zone equivalent to model.
function Ab(b,c){var d,e;
// Use low-level api, because this fn is low-level api.
return c._isUTC?(d=c.clone(),e=(r(b)||f(b)?b.valueOf():rb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):rb(b).local()}function Bb(a){
// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(a._d.getTimezoneOffset()/15)}
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function Cb(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=zb(Td,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Bb(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?Sb(this,Nb(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Bb(this):null!=b?this:NaN}function Db(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Eb(a){return this.utcOffset(0,a)}function Fb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Bb(this),"m")),this}function Gb(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var a=zb(Sd,this._i);0===a?this.utcOffset(0,!0):this.utcOffset(zb(Sd,this._i))}return this}function Hb(a){return this.isValid()?(a=a?rb(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Ib(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jb(){if(!o(this._isDSTShifted))return this._isDSTShifted;var a={};if(p(a,this),a=ob(a),a._a){var b=a._isUTC?j(a._a):rb(a._a);this._isDSTShifted=this.isValid()&&u(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Kb(){return this.isValid()?!this._isUTC:!1}function Lb(){return this.isValid()?this._isUTC:!1}function Mb(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Nb(a,b){var c,d,e,f=a,
// matching against regexp is expensive, do it on demand
g=null;// checks for null or undefined
return wb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(g=He.exec(a))?(c="-"===g[1]?-1:1,f={y:0,d:t(g[$d])*c,h:t(g[_d])*c,m:t(g[ae])*c,s:t(g[be])*c,ms:t(xb(1e3*g[ce]))*c}):(g=Ie.exec(a))?(c="-"===g[1]?-1:1,f={y:Ob(g[2],c),M:Ob(g[3],c),w:Ob(g[4],c),d:Ob(g[5],c),h:Ob(g[6],c),m:Ob(g[7],c),s:Ob(g[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Qb(rb(f.from),rb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new vb(f),wb(a)&&h(a,"_locale")&&(d._locale=a._locale),d}function Ob(a,b){
// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var c=a&&parseFloat(a.replace(",","."));
// apply sign while we're at it
return(isNaN(c)?0:c)*b}function Pb(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Qb(a,b){var c;return a.isValid()&&b.isValid()?(b=Ab(b,a),a.isBefore(b)?c=Pb(a,b):(c=Pb(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}
// TODO: remove 'name' arg after deprecation is removed
function Rb(a,b){return function(c,d){var e,f;
//invert the arguments, but complain about it
return null===d||isNaN(+d)||(x(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Nb(c,d),Sb(this,e,a),this}}function Sb(b,c,d,e){var f=c._milliseconds,g=xb(c._days),h=xb(c._months);b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&P(b,"Date",O(b,"Date")+g*d),h&&ia(b,O(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Tb(a,b){var c=a.diff(b,"days",!0);return-6>c?"sameElse":-1>c?"lastWeek":0>c?"lastDay":1>c?"sameDay":2>c?"nextDay":7>c?"nextWeek":"sameElse"}function Ub(b,c){
// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're local/utc/offset or not.
var d=b||rb(),e=Ab(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(y(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,rb(d)))}function Vb(){return new q(this)}function Wb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf()):!1}function Xb(a,b){var c=r(a)?a:rb(a);return this.isValid()&&c.isValid()?(b=J(o(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf()):!1}function Yb(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function Zb(a,b){var c,d=r(a)?a:rb(a);return this.isValid()&&d.isValid()?(b=J(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf())):!1}function $b(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function _b(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function ac(a,b,c){var d,e,f,g;// 1000
// 1000 * 60
// 1000 * 60 * 60
// 1000 * 60 * 60 * 24, negate dst
// 1000 * 60 * 60 * 24 * 7, negate dst
return this.isValid()?(d=Ab(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=J(b),"year"===b||"month"===b||"quarter"===b?(g=bc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:s(g)):NaN):NaN}function bc(a,b){
// difference in months
var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),
// b is in (anchor - 1 month, anchor + 1 month)
f=a.clone().add(e,"months");
//check for negative zero, return zero if negative zero
// linear across the month
// linear across the month
return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function cc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function dc(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?y(Date.prototype.toISOString)?this.toDate().toISOString():W(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):W(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ec(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=W(this,b);return this.localeData().postformat(c)}function fc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function gc(a){return this.from(rb(),a)}function hc(a,b){return this.isValid()&&(r(a)&&a.isValid()||rb(a).isValid())?Nb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function ic(a){return this.to(rb(),a)}
// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function jc(a){var b;return void 0===a?this._locale._abbr:(b=ab(a),null!=b&&(this._locale=b),this)}function kc(){return this._locale}function lc(a){
// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(a=J(a)){case"year":this.month(0);/* falls through */
case"quarter":case"month":this.date(1);/* falls through */
case"week":case"isoWeek":case"day":case"date":this.hours(0);/* falls through */
case"hour":this.minutes(0);/* falls through */
case"minute":this.seconds(0);/* falls through */
case"second":this.milliseconds(0)}
// weeks are a special case
// quarters are also special
return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function mc(a){
// 'date' is an alias for 'day', so it should be considered as such.
return a=J(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function nc(){return this._d.valueOf()-6e4*(this._offset||0)}function oc(){return Math.floor(this.valueOf()/1e3)}function pc(){return new Date(this.valueOf())}function qc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function rc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function sc(){
// new Date(NaN).toJSON() === null
return this.isValid()?this.toISOString():null}function tc(){return m(this)}function uc(){return i({},l(this))}function vc(){return l(this).overflow}function wc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function xc(a,b){T(0,[a,a.length],0,b)}
// MOMENTS
function yc(a){return Cc.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function zc(a){return Cc.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Ac(){return wa(this.year(),1,4)}function Bc(){var a=this.localeData()._week;return wa(this.year(),a.dow,a.doy)}function Cc(a,b,c,d,e){var f;return null==a?va(this,d,e).year:(f=wa(a,d,e),b>f&&(b=f),Dc.call(this,a,b,c,d,e))}function Dc(a,b,c,d,e){var f=ua(a,b,c,d,e),g=sa(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}
// MOMENTS
function Ec(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}
// HELPERS
// MOMENTS
function Fc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Gc(a,b){b[ce]=t(1e3*("0."+a))}
// MOMENTS
function Hc(){return this._isUTC?"UTC":""}function Ic(){return this._isUTC?"Coordinated Universal Time":""}function Jc(a){return rb(1e3*a)}function Kc(){return rb.apply(null,arguments).parseZone()}function Lc(a){return a}function Mc(a,b,c,d){var e=ab(),f=j().set(d,b);return e[c](f,a)}function Nc(a,b,c){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return Mc(a,b,c,"month");var d,e=[];for(d=0;12>d;d++)e[d]=Mc(a,d,c,"month");return e}
// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function Oc(a,b,c,d){"boolean"==typeof a?("number"==typeof b&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,"number"==typeof b&&(c=b,b=void 0),b=b||"");var e=ab(),f=a?e._week.dow:0;if(null!=c)return Mc(b,(c+f)%7,d,"day");var g,h=[];for(g=0;7>g;g++)h[g]=Mc(b,(g+f)%7,d,"day");return h}function Pc(a,b){return Nc(a,b,"months")}function Qc(a,b){return Nc(a,b,"monthsShort")}function Rc(a,b,c){return Oc(a,b,c,"weekdays")}function Sc(a,b,c){return Oc(a,b,c,"weekdaysShort")}function Tc(a,b,c){return Oc(a,b,c,"weekdaysMin")}function Uc(){var a=this._data;return this._milliseconds=Ue(this._milliseconds),this._days=Ue(this._days),this._months=Ue(this._months),a.milliseconds=Ue(a.milliseconds),a.seconds=Ue(a.seconds),a.minutes=Ue(a.minutes),a.hours=Ue(a.hours),a.months=Ue(a.months),a.years=Ue(a.years),this}function Vc(a,b,c,d){var e=Nb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}
// supports only 2.0-style add(1, 's') or add(duration)
function Wc(a,b){return Vc(this,a,b,1)}
// supports only 2.0-style subtract(1, 's') or subtract(duration)
function Xc(a,b){return Vc(this,a,b,-1)}function Yc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Zc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;
// if we have a mix of positive and negative values, bubble down first
// check: https://github.com/moment/moment/issues/2166
// The following code bubbles up values, see the tests for
// examples of what that means.
// convert days to months
// 12 months -> 1 year
return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Yc(_c(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=s(f/1e3),i.seconds=a%60,b=s(a/60),i.minutes=b%60,c=s(b/60),i.hours=c%24,g+=s(c/24),e=s($c(g)),h+=e,g-=Yc(_c(e)),d=s(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function $c(a){
// 400 years have 146097 days (taking into account leap year rules)
// 400 years have 12 months === 4800
return 4800*a/146097}function _c(a){
// the reverse of daysToMonths
return 146097*a/4800}function ad(a){var b,c,d=this._milliseconds;if(a=J(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+$c(b),"month"===a?c:c/12;switch(b=this._days+Math.round(_c(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;
// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}
// TODO: Use this.as('ms')?
function bd(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*t(this._months/12)}function cd(a){return function(){return this.as(a)}}function dd(a){return a=J(a),this[a+"s"]()}function ed(a){return function(){return this._data[a]}}function fd(){return s(this.days()/7)}
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function gd(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function hd(a,b,c){var d=Nb(a).abs(),e=jf(d.as("s")),f=jf(d.as("m")),g=jf(d.as("h")),h=jf(d.as("d")),i=jf(d.as("M")),j=jf(d.as("y")),k=e<kf.s&&["s",e]||1>=f&&["m"]||f<kf.m&&["mm",f]||1>=g&&["h"]||g<kf.h&&["hh",g]||1>=h&&["d"]||h<kf.d&&["dd",h]||1>=i&&["M"]||i<kf.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,gd.apply(null,k)}
// This function allows you to set the rounding function for relative time strings
function id(a){return void 0===a?jf:"function"==typeof a?(jf=a,!0):!1}
// This function allows you to set a threshold for relative time strings
function jd(a,b){return void 0===kf[a]?!1:void 0===b?kf[a]:(kf[a]=b,!0)}function kd(a){var b=this.localeData(),c=hd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function ld(){
// for ISO strings we do not use the normal bubbling rules:
//  * milliseconds bubble up until they become hours
//  * days do not bubble at all
//  * months bubble up until they become years
// This is because there is no context-free conversion between hours and days
// (think of clock changes)
// and also not between days and months (28-31 days per month)
var a,b,c,d=lf(this._milliseconds)/1e3,e=lf(this._days),f=lf(this._months);a=s(d/60),b=s(a/60),d%=60,a%=60,c=s(f/12),f%=12;
// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var md,nd;nd=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;c>d;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};
// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var od=a.momentProperties=[],pd=!1,qd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var rd;rd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)h(a,b)&&c.push(b);return c};var sd,td={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ud={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},vd="Invalid date",wd="%d",xd=/\d{1,2}/,yd={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},zd={},Ad={},Bd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Cd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Dd={},Ed={},Fd=/\d/,Gd=/\d\d/,Hd=/\d{3}/,Id=/\d{4}/,Jd=/[+-]?\d{6}/,Kd=/\d\d?/,Ld=/\d\d\d\d?/,Md=/\d\d\d\d\d\d?/,Nd=/\d{1,3}/,Od=/\d{1,4}/,Pd=/[+-]?\d{1,6}/,Qd=/\d+/,Rd=/[+-]?\d+/,Sd=/Z|[+-]\d\d:?\d\d/gi,Td=/Z|[+-]\d\d(?::?\d\d)?/gi,Ud=/[+-]?\d+(\.\d{1,3})?/,Vd=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Wd={},Xd={},Yd=0,Zd=1,$d=2,_d=3,ae=4,be=5,ce=6,de=7,ee=8;sd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){
// I know
var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1},T("M",["MM",2],"Mo",function(){return this.month()+1}),T("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),T("MMMM",0,0,function(a){return this.localeData().months(this,a)}),I("month","M"),L("month",8),Y("M",Kd),Y("MM",Kd,Gd),Y("MMM",function(a,b){return b.monthsShortRegex(a)}),Y("MMMM",function(a,b){return b.monthsRegex(a)}),aa(["M","MM"],function(a,b){b[Zd]=t(a)-1}),aa(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[Zd]=e:l(c).invalidMonth=a});
// LOCALES
var fe=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ge="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),he="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ie=Vd,je=Vd;
// FORMATTING
T("Y",0,0,function(){var a=this.year();return 9999>=a?""+a:"+"+a}),T(0,["YY",2],0,function(){return this.year()%100}),T(0,["YYYY",4],0,"year"),T(0,["YYYYY",5],0,"year"),T(0,["YYYYYY",6,!0],0,"year"),
// ALIASES
I("year","y"),
// PRIORITIES
L("year",1),
// PARSING
Y("Y",Rd),Y("YY",Kd,Gd),Y("YYYY",Od,Id),Y("YYYYY",Pd,Jd),Y("YYYYYY",Pd,Jd),aa(["YYYYY","YYYYYY"],Yd),aa("YYYY",function(b,c){c[Yd]=2===b.length?a.parseTwoDigitYear(b):t(b)}),aa("YY",function(b,c){c[Yd]=a.parseTwoDigitYear(b)}),aa("Y",function(a,b){b[Yd]=parseInt(a,10)}),
// HOOKS
a.parseTwoDigitYear=function(a){return t(a)+(t(a)>68?1900:2e3)};
// MOMENTS
var ke=N("FullYear",!0);
// FORMATTING
T("w",["ww",2],"wo","week"),T("W",["WW",2],"Wo","isoWeek"),
// ALIASES
I("week","w"),I("isoWeek","W"),
// PRIORITIES
L("week",5),L("isoWeek",5),
// PARSING
Y("w",Kd),Y("ww",Kd,Gd),Y("W",Kd),Y("WW",Kd,Gd),ba(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=t(a)});var le={dow:0,// Sunday is the first day of the week.
doy:6};
// FORMATTING
T("d",0,"do","day"),T("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),T("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),T("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),T("e",0,0,"weekday"),T("E",0,0,"isoWeekday"),
// ALIASES
I("day","d"),I("weekday","e"),I("isoWeekday","E"),
// PRIORITY
L("day",11),L("weekday",11),L("isoWeekday",11),
// PARSING
Y("d",Kd),Y("e",Kd),Y("E",Kd),Y("dd",function(a,b){return b.weekdaysMinRegex(a)}),Y("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Y("dddd",function(a,b){return b.weekdaysRegex(a)}),ba(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);
// if we didn't get a weekday name, mark the date as invalid
null!=e?b.d=e:l(c).invalidWeekday=a}),ba(["d","e","E"],function(a,b,c,d){b[d]=t(a)});
// LOCALES
var me="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ne="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),pe=Vd,qe=Vd,re=Vd;T("H",["HH",2],0,"hour"),T("h",["hh",2],0,Qa),T("k",["kk",2],0,Ra),T("hmm",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)}),T("hmmss",0,0,function(){return""+Qa.apply(this)+S(this.minutes(),2)+S(this.seconds(),2)}),T("Hmm",0,0,function(){return""+this.hours()+S(this.minutes(),2)}),T("Hmmss",0,0,function(){return""+this.hours()+S(this.minutes(),2)+S(this.seconds(),2)}),Sa("a",!0),Sa("A",!1),
// ALIASES
I("hour","h"),
// PRIORITY
L("hour",13),Y("a",Ta),Y("A",Ta),Y("H",Kd),Y("h",Kd),Y("HH",Kd,Gd),Y("hh",Kd,Gd),Y("hmm",Ld),Y("hmmss",Md),Y("Hmm",Ld),Y("Hmmss",Md),aa(["H","HH"],_d),aa(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),aa(["h","hh"],function(a,b,c){b[_d]=t(a),l(c).bigHour=!0}),aa("hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d)),l(c).bigHour=!0}),aa("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e)),l(c).bigHour=!0}),aa("Hmm",function(a,b,c){var d=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d))}),aa("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[_d]=t(a.substr(0,d)),b[ae]=t(a.substr(d,2)),b[be]=t(a.substr(e))});var se,te=/[ap]\.?m?\.?/i,ue=N("Hours",!0),ve={calendar:td,longDateFormat:ud,invalidDate:vd,ordinal:wd,ordinalParse:xd,relativeTime:yd,months:ge,monthsShort:he,week:le,weekdays:me,weekdaysMin:oe,weekdaysShort:ne,meridiemParse:te},we={},xe=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ye=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ze=/Z|[+-]\d\d(?::?\d\d)?/,Ae=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],
// YYYYMM is NOT allowed by the standard
["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Be=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ce=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),
// constant that refers to the ISO standard
a.ISO_8601=function(){};var De=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:n()}),Ee=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=rb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:n()}),Fe=function(){return Date.now?Date.now():+new Date};yb("Z",":"),yb("ZZ",""),
// PARSING
Y("Z",Td),Y("ZZ",Td),aa(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=zb(Td,a)});
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var Ge=/([\+\-]|\d\d)/gi;
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
a.updateOffset=function(){};
// ASP.NET json date format regex
var He=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ie=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Nb.fn=vb.prototype;var Je=Rb(1,"add"),Ke=Rb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Le=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});
// FORMATTING
T(0,["gg",2],0,function(){return this.weekYear()%100}),T(0,["GG",2],0,function(){return this.isoWeekYear()%100}),xc("gggg","weekYear"),xc("ggggg","weekYear"),xc("GGGG","isoWeekYear"),xc("GGGGG","isoWeekYear"),
// ALIASES
I("weekYear","gg"),I("isoWeekYear","GG"),
// PRIORITY
L("weekYear",1),L("isoWeekYear",1),
// PARSING
Y("G",Rd),Y("g",Rd),Y("GG",Kd,Gd),Y("gg",Kd,Gd),Y("GGGG",Od,Id),Y("gggg",Od,Id),Y("GGGGG",Pd,Jd),Y("ggggg",Pd,Jd),ba(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=t(a)}),ba(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),
// FORMATTING
T("Q",0,"Qo","quarter"),
// ALIASES
I("quarter","Q"),
// PRIORITY
L("quarter",7),
// PARSING
Y("Q",Fd),aa("Q",function(a,b){b[Zd]=3*(t(a)-1)}),
// FORMATTING
T("D",["DD",2],"Do","date"),
// ALIASES
I("date","D"),
// PRIOROITY
L("date",9),
// PARSING
Y("D",Kd),Y("DD",Kd,Gd),Y("Do",function(a,b){return a?b._ordinalParse:b._ordinalParseLenient}),aa(["D","DD"],$d),aa("Do",function(a,b){b[$d]=t(a.match(Kd)[0],10)});
// MOMENTS
var Me=N("Date",!0);
// FORMATTING
T("DDD",["DDDD",3],"DDDo","dayOfYear"),
// ALIASES
I("dayOfYear","DDD"),
// PRIORITY
L("dayOfYear",4),
// PARSING
Y("DDD",Nd),Y("DDDD",Hd),aa(["DDD","DDDD"],function(a,b,c){c._dayOfYear=t(a)}),
// FORMATTING
T("m",["mm",2],0,"minute"),
// ALIASES
I("minute","m"),
// PRIORITY
L("minute",14),
// PARSING
Y("m",Kd),Y("mm",Kd,Gd),aa(["m","mm"],ae);
// MOMENTS
var Ne=N("Minutes",!1);
// FORMATTING
T("s",["ss",2],0,"second"),
// ALIASES
I("second","s"),
// PRIORITY
L("second",15),
// PARSING
Y("s",Kd),Y("ss",Kd,Gd),aa(["s","ss"],be);
// MOMENTS
var Oe=N("Seconds",!1);
// FORMATTING
T("S",0,0,function(){return~~(this.millisecond()/100)}),T(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),T(0,["SSS",3],0,"millisecond"),T(0,["SSSS",4],0,function(){return 10*this.millisecond()}),T(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),T(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),T(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),T(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),T(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),
// ALIASES
I("millisecond","ms"),
// PRIORITY
L("millisecond",16),
// PARSING
Y("S",Nd,Fd),Y("SS",Nd,Gd),Y("SSS",Nd,Hd);var Pe;for(Pe="SSSS";Pe.length<=9;Pe+="S")Y(Pe,Qd);for(Pe="S";Pe.length<=9;Pe+="S")aa(Pe,Gc);
// MOMENTS
var Qe=N("Milliseconds",!1);
// FORMATTING
T("z",0,0,"zoneAbbr"),T("zz",0,0,"zoneName");var Re=q.prototype;Re.add=Je,Re.calendar=Ub,Re.clone=Vb,Re.diff=ac,Re.endOf=mc,Re.format=ec,Re.from=fc,Re.fromNow=gc,Re.to=hc,Re.toNow=ic,Re.get=Q,Re.invalidAt=vc,Re.isAfter=Wb,Re.isBefore=Xb,Re.isBetween=Yb,Re.isSame=Zb,Re.isSameOrAfter=$b,Re.isSameOrBefore=_b,Re.isValid=tc,Re.lang=Le,Re.locale=jc,Re.localeData=kc,Re.max=Ee,Re.min=De,Re.parsingFlags=uc,Re.set=R,Re.startOf=lc,Re.subtract=Ke,Re.toArray=qc,Re.toObject=rc,Re.toDate=pc,Re.toISOString=dc,Re.toJSON=sc,Re.toString=cc,Re.unix=oc,Re.valueOf=nc,Re.creationData=wc,
// Year
Re.year=ke,Re.isLeapYear=qa,
// Week Year
Re.weekYear=yc,Re.isoWeekYear=zc,
// Quarter
Re.quarter=Re.quarters=Ec,
// Month
Re.month=ja,Re.daysInMonth=ka,
// Week
Re.week=Re.weeks=Aa,Re.isoWeek=Re.isoWeeks=Ba,Re.weeksInYear=Bc,Re.isoWeeksInYear=Ac,
// Day
Re.date=Me,Re.day=Re.days=Ja,Re.weekday=Ka,Re.isoWeekday=La,Re.dayOfYear=Fc,
// Hour
Re.hour=Re.hours=ue,
// Minute
Re.minute=Re.minutes=Ne,
// Second
Re.second=Re.seconds=Oe,
// Millisecond
Re.millisecond=Re.milliseconds=Qe,
// Offset
Re.utcOffset=Cb,Re.utc=Eb,Re.local=Fb,Re.parseZone=Gb,Re.hasAlignedHourOffset=Hb,Re.isDST=Ib,Re.isLocal=Kb,Re.isUtcOffset=Lb,Re.isUtc=Mb,Re.isUTC=Mb,
// Timezone
Re.zoneAbbr=Hc,Re.zoneName=Ic,
// Deprecations
Re.dates=w("dates accessor is deprecated. Use date instead.",Me),Re.months=w("months accessor is deprecated. Use month instead",ja),Re.years=w("years accessor is deprecated. Use year instead",ke),Re.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Db),Re.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jb);var Se=Re,Te=B.prototype;Te.calendar=C,Te.longDateFormat=D,Te.invalidDate=E,Te.ordinal=F,Te.preparse=Lc,Te.postformat=Lc,Te.relativeTime=G,Te.pastFuture=H,Te.set=z,
// Month
Te.months=ea,Te.monthsShort=fa,Te.monthsParse=ha,Te.monthsRegex=ma,Te.monthsShortRegex=la,
// Week
Te.week=xa,Te.firstDayOfYear=za,Te.firstDayOfWeek=ya,
// Day of Week
Te.weekdays=Ea,Te.weekdaysMin=Ga,Te.weekdaysShort=Fa,Te.weekdaysParse=Ia,Te.weekdaysRegex=Ma,Te.weekdaysShortRegex=Na,Te.weekdaysMinRegex=Oa,
// Hours
Te.isPM=Ua,Te.meridiem=Va,Za("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===t(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),
// Side effect imports
a.lang=w("moment.lang is deprecated. Use moment.locale instead.",Za),a.langData=w("moment.langData is deprecated. Use moment.localeData instead.",ab);var Ue=Math.abs,Ve=cd("ms"),We=cd("s"),Xe=cd("m"),Ye=cd("h"),Ze=cd("d"),$e=cd("w"),_e=cd("M"),af=cd("y"),bf=ed("milliseconds"),cf=ed("seconds"),df=ed("minutes"),ef=ed("hours"),ff=ed("days"),gf=ed("months"),hf=ed("years"),jf=Math.round,kf={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11},lf=Math.abs,mf=vb.prototype;mf.abs=Uc,mf.add=Wc,mf.subtract=Xc,mf.as=ad,mf.asMilliseconds=Ve,mf.asSeconds=We,mf.asMinutes=Xe,mf.asHours=Ye,mf.asDays=Ze,mf.asWeeks=$e,mf.asMonths=_e,mf.asYears=af,mf.valueOf=bd,mf._bubble=Zc,mf.get=dd,mf.milliseconds=bf,mf.seconds=cf,mf.minutes=df,mf.hours=ef,mf.days=ff,mf.weeks=fd,mf.months=gf,mf.years=hf,mf.humanize=kd,mf.toISOString=ld,mf.toString=ld,mf.toJSON=ld,mf.locale=jc,mf.localeData=kc,
// Deprecations
mf.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ld),mf.lang=Le,
// Side effect imports
// FORMATTING
T("X",0,0,"unix"),T("x",0,0,"valueOf"),
// PARSING
Y("x",Rd),Y("X",Ud),aa("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),aa("x",function(a,b,c){c._d=new Date(t(a))}),
// Side effect imports
a.version="2.15.1",b(rb),a.fn=Se,a.min=tb,a.max=ub,a.now=Fe,a.utc=j,a.unix=Jc,a.months=Pc,a.isDate=f,a.locale=Za,a.invalid=n,a.duration=Nb,a.isMoment=r,a.weekdays=Rc,a.parseZone=Kc,a.localeData=ab,a.isDuration=wb,a.monthsShort=Qc,a.weekdaysMin=Tc,a.defineLocale=$a,a.updateLocale=_a,a.locales=bb,a.weekdaysShort=Sc,a.normalizeUnits=J,a.relativeTimeRounding=id,a.relativeTimeThreshold=jd,a.calendarFormat=Tb,a.prototype=Se;var nf=a;return nf});
//! moment-timezone.js
//! version : 0.5.7
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["moment"],b):"object"==typeof module&&module.exports?module.exports=b(require("moment")):b(a.moment)}(this,function(a){"use strict";function b(a){return a>96?a-87:a>64?a-29:a-48}function c(a){var c,d=0,e=a.split("."),f=e[0],g=e[1]||"",h=1,i=0,j=1;for(45===a.charCodeAt(0)&&(d=1,j=-1),d;d<f.length;d++)c=b(f.charCodeAt(d)),i=60*i+c;for(d=0;d<g.length;d++)h/=60,c=b(g.charCodeAt(d)),i+=c*h;return i*j}function d(a){for(var b=0;b<a.length;b++)a[b]=c(a[b])}function e(a,b){for(var c=0;c<b;c++)a[c]=Math.round((a[c-1]||0)+6e4*a[c]);a[b-1]=1/0}function f(a,b){var c,d=[];for(c=0;c<b.length;c++)d[c]=a[b[c]];return d}function g(a){var b=a.split("|"),c=b[2].split(" "),g=b[3].split(""),h=b[4].split(" ");return d(c),d(g),d(h),e(h,g.length),{name:b[0],abbrs:f(b[1].split(" "),g),offsets:f(c,g),untils:h,population:0|b[5]}}function h(a){a&&this._set(g(a))}function i(a){var b=a.toTimeString(),c=b.match(/\([a-z ]+\)/i);c&&c[0]?(c=c[0].match(/[A-Z]/g),c=c?c.join(""):void 0):(c=b.match(/[A-Z]{3,5}/g),c=c?c[0]:void 0),"GMT"===c&&(c=void 0),this.at=+a,this.abbr=c,this.offset=a.getTimezoneOffset()}function j(a){this.zone=a,this.offsetScore=0,this.abbrScore=0}function k(a,b){for(var c,d;d=6e4*((b.at-a.at)/12e4|0);)c=new i(new Date(a.at+d)),c.offset===a.offset?a=c:b=c;return a}function l(){var a,b,c,d=(new Date).getFullYear()-2,e=new i(new Date(d,0,1)),f=[e];for(c=1;c<48;c++)b=new i(new Date(d,c,1)),b.offset!==e.offset&&(a=k(e,b),f.push(a),f.push(new i(new Date(a.at+6e4)))),e=b;for(c=0;c<4;c++)f.push(new i(new Date(d+c,0,1))),f.push(new i(new Date(d+c,6,1)));return f}function m(a,b){return a.offsetScore!==b.offsetScore?a.offsetScore-b.offsetScore:a.abbrScore!==b.abbrScore?a.abbrScore-b.abbrScore:b.zone.population-a.zone.population}function n(a,b){var c,e;for(d(b),c=0;c<b.length;c++)e=b[c],I[e]=I[e]||{},I[e][a]=!0}function o(a){var b,c,d,e=a.length,f={},g=[];for(b=0;b<e;b++){d=I[a[b].offset]||{};for(c in d)d.hasOwnProperty(c)&&(f[c]=!0)}for(b in f)f.hasOwnProperty(b)&&g.push(H[b]);return g}function p(){try{var a=Intl.DateTimeFormat().resolvedOptions().timeZone;if(a){var b=H[r(a)];if(b)return b;z("Moment Timezone found "+a+" from the Intl api, but did not have that data loaded.")}}catch(c){}var d,e,f,g=l(),h=g.length,i=o(g),k=[];for(e=0;e<i.length;e++){for(d=new j(t(i[e]),h),f=0;f<h;f++)d.scoreOffsetAt(g[f]);k.push(d)}return k.sort(m),k.length>0?k[0].zone.name:void 0}function q(a){return D&&!a||(D=p()),D}function r(a){return(a||"").toLowerCase().replace(/\//g,"_")}function s(a){var b,c,d,e;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)d=a[b].split("|"),c=d[0],e=r(c),F[e]=a[b],H[e]=c,d[5]&&n(e,d[2].split(" "))}function t(a,b){a=r(a);var c,d=F[a];return d instanceof h?d:"string"==typeof d?(d=new h(d),F[a]=d,d):G[a]&&b!==t&&(c=t(G[a],t))?(d=F[a]=new h,d._set(c),d.name=H[a],d):null}function u(){var a,b=[];for(a in H)H.hasOwnProperty(a)&&(F[a]||F[G[a]])&&H[a]&&b.push(H[a]);return b.sort()}function v(a){var b,c,d,e;for("string"==typeof a&&(a=[a]),b=0;b<a.length;b++)c=a[b].split("|"),d=r(c[0]),e=r(c[1]),G[d]=e,H[d]=c[0],G[e]=d,H[e]=c[1]}function w(a){s(a.zones),v(a.links),A.dataVersion=a.version}function x(a){return x.didShowError||(x.didShowError=!0,z("moment.tz.zoneExists('"+a+"') has been deprecated in favor of !moment.tz.zone('"+a+"')")),!!t(a)}function y(a){return!(!a._a||void 0!==a._tzm)}function z(a){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(a)}function A(b){var c=Array.prototype.slice.call(arguments,0,-1),d=arguments[arguments.length-1],e=t(d),f=a.utc.apply(null,c);return e&&!a.isMoment(b)&&y(f)&&f.add(e.parse(f),"minutes"),f.tz(d),f}function B(a){return function(){return this._z?this._z.abbr(this):a.call(this)}}function C(a){return function(){return this._z=null,a.apply(this,arguments)}}if(void 0!==a.tz)return z("Moment Timezone "+a.tz.version+" was already loaded "+(a.tz.dataVersion?"with data from ":"without any data")+a.tz.dataVersion),a;var D,E="0.5.7",F={},G={},H={},I={},J=a.version.split("."),K=+J[0],L=+J[1];(K<2||2===K&&L<6)&&z("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+a.version+". See momentjs.com"),h.prototype={_set:function(a){this.name=a.name,this.abbrs=a.abbrs,this.untils=a.untils,this.offsets=a.offsets,this.population=a.population},_index:function(a){var b,c=+a,d=this.untils;for(b=0;b<d.length;b++)if(c<d[b])return b},parse:function(a){var b,c,d,e,f=+a,g=this.offsets,h=this.untils,i=h.length-1;for(e=0;e<i;e++)if(b=g[e],c=g[e+1],d=g[e?e-1:e],b<c&&A.moveAmbiguousForward?b=c:b>d&&A.moveInvalidForward&&(b=d),f<h[e]-6e4*b)return g[e];return g[i]},abbr:function(a){return this.abbrs[this._index(a)]},offset:function(a){return this.offsets[this._index(a)]}},j.prototype.scoreOffsetAt=function(a){this.offsetScore+=Math.abs(this.zone.offset(a.at)-a.offset),this.zone.abbr(a.at).replace(/[^A-Z]/g,"")!==a.abbr&&this.abbrScore++},A.version=E,A.dataVersion="",A._zones=F,A._links=G,A._names=H,A.add=s,A.link=v,A.load=w,A.zone=t,A.zoneExists=x,A.guess=q,A.names=u,A.Zone=h,A.unpack=g,A.unpackBase60=c,A.needsOffset=y,A.moveInvalidForward=!0,A.moveAmbiguousForward=!1;var M=a.fn;a.tz=A,a.defaultZone=null,a.updateOffset=function(b,c){var d,e=a.defaultZone;void 0===b._z&&(e&&y(b)&&!b._isUTC&&(b._d=a.utc(b._a)._d,b.utc().add(e.parse(b),"minutes")),b._z=e),b._z&&(d=b._z.offset(b),Math.abs(d)<16&&(d/=60),void 0!==b.utcOffset?b.utcOffset(-d,c):b.zone(d,c))},M.tz=function(b){return b?(this._z=t(b),this._z?a.updateOffset(this):z("Moment Timezone has no data for "+b+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},M.zoneName=B(M.zoneName),M.zoneAbbr=B(M.zoneAbbr),M.utc=C(M.utc),a.tz.setDefault=function(b){return(K<2||2===K&&L<9)&&z("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+a.version+"."),a.defaultZone=b?t(b):null,a};var N=a.momentProperties;return"[object Array]"===Object.prototype.toString.call(N)?(N.push("_z"),N.push("_a")):N&&(N._z=null),w({version:"2016h",zones:["Africa/Abidjan|GMT|0|0||48e5","Africa/Khartoum|EAT|-30|0||51e5","Africa/Algiers|CET|-10|0||26e5","Africa/Lagos|WAT|-10|0||17e6","Africa/Maputo|CAT|-20|0||26e5","Africa/Cairo|EET EEST|-20 -30|010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0|32e5","Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Africa/Johannesburg|SAST|-20|0||84e5","Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5","Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|32e4","America/Adak|HST HDT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Santo_Domingo|AST|40|0||29e5","America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0|14e4","America/Argentina/Buenos_Aires|ART|30|0|","America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Panama|EST|50|0||15e5","America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0|27e5","America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Fortaleza|BRT|30|0||34e5","America/Managua|CST|60|0||22e5","America/Manaus|AMT|40|0||19e5","America/Bogota|COT|50|0||90e5","America/Denver|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|77e4","America/Cancun|CST CDT EST|60 50 50|010101010102|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|VET VET|4u 40|01|1QMT0|29e5","America/Cayenne|GFT|30|0||58e3","America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Phoenix|MST|70|0||42e5","America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/New_York|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Rio_Branco|AMT ACT|40 50|01|1KLE0|31e4","America/Fort_Nelson|PST PDT MST|80 70 70|010101010102|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Halifax|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|EST EDT AST|50 40 40|0101010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guayaquil|ECT|50|0||27e5","America/Guyana|GYT|40|0||80e4","America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/La_Paz|BOT|40|0||19e5","America/Lima|PET|50|0||11e6","America/Mexico_City|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Metlakatla|PST AKST AKDT|80 90 80|012121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Montevideo|UYST UYT|20 30|010101010101|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Noronha|FNT|20|0||30e2","America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Paramaribo|SRT|30|0||24e4","America/Port-au-Prince|EST EDT|50 40|010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Santiago|CLST CLT|30 40|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5","America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|20e6","America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","Antarctica/Casey|+11 +08|-b0 -80|0101|1BN30 40P0 KL0|10","Antarctica/Davis|+05 +07|-50 -70|0101|1BPw0 3Wn0 KN0|70","Antarctica/DumontDUrville|+10|-a0|0||80","Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140|1","Asia/Tashkent|+05|-50|0||23e5","Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Rothera|-03|30|0||130","Antarctica/Syowa|+03|-30|0||20","Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Asia/Almaty|+06|-60|0||15e5","Asia/Baghdad|AST|-30|0||66e5","Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|25e5","Asia/Kamchatka|+12 +11|-c0 -b0|010|1Dp30 WM0|18e4","Asia/Baku|+04 +05|-40 -50|0101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|ICT|-70|0||15e6","Asia/Barnaul|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Brunei|BNT|-80|0||42e4","Asia/Kolkata|IST|-5u|0||15e6","Asia/Chita|+09 +10 +08|-90 -a0 -80|010120|1BWh0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|CHOT CHOST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST|-80|0||23e6","Asia/Colombo|+0530|-5u|0||22e5","Asia/Dhaka|BDT|-60|0||16e6","Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0|26e5","Asia/Dili|TLT|-90|0||19e4","Asia/Dubai|GST|-40|0||39e5","Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5","Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4","Asia/Hong_Kong|HKT|-80|0||73e5","Asia/Hovd|HOVT HOVST|-70 -80|0101010101010|1O8H0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|+08 +09|-80 -90|01010|1BWi0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|EET EEST +03|-20 -30 -30|010101010101012|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|WIB|-70|0||31e6","Asia/Jayapura|WIT|-90|0||26e4","Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|AFT|-4u|0||46e5","Asia/Karachi|PKT|-50|0||24e6","Asia/Urumqi|XJT|-60|0||32e5","Asia/Kathmandu|NPT|-5J|0||12e5","Asia/Khandyga|+10 +11 +09|-a0 -b0 -90|010102|1BWg0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|+07 +08|-70 -80|01010|1BWj0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|MYT|-80|0||71e5","Asia/Magadan|+11 +12 +10|-b0 -c0 -a0|010120|1BWf0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|WITA|-80|0||15e5","Asia/Manila|PHT|-80|0||24e6","Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Asia/Novokuznetsk|+07 +06|-70 -60|010|1Dp80 WM0|55e4","Asia/Novosibirsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|+06 +07|-60 -70|01010|1BWk0 1qM0 WM0 8Hz0|12e5","Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5","Asia/Rangoon|MMT|-6u|0||48e5","Asia/Sakhalin|+10 +11|-a0 -b0|010101|1BWg0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Seoul|KST|-90|0||23e6","Asia/Singapore|SGT|-80|0||56e5","Asia/Srednekolymsk|+11 +12|-b0 -c0|01010|1BWf0 1qM0 WM0 8Hz0|35e2","Asia/Tbilisi|+04|-40|0||11e5","Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|BTT|-60|0||79e3","Asia/Tokyo|JST|-90|0||38e6","Asia/Tomsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|ULAT ULAST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|+11 +12 +10|-b0 -c0 -a0|010102|1BWf0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|+10 +11|-a0 -b0|01010|1BWg0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|+09 +10|-90 -a0|01010|1BWh0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|+05 +06|-50 -60|01010|1BWl0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|+04 +05|-40 -50|01010|1BWm0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Atlantic/Cape_Verde|CVT|10|0||50e4","Atlantic/South_Georgia|GST|20|0||30","Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10|21e2","Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST|-a0|0||20e5","Australia/Darwin|ACST|-9u|0||12e4","Australia/Eucla|ACWST|-8J|0||368","Australia/Lord_Howe|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Perth|AWST|-80|0||18e5","Pacific/Easter|EASST EAST|50 60|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2","Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Etc/GMT+1|-01|10|0|","Etc/GMT+10|-10|a0|0|","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+2|-02|20|0|","Etc/GMT+4|-04|40|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Etc/GMT+9|-09|90|0|","Etc/GMT-1|+01|-10|0|","Etc/GMT-11|+11|-b0|0|","Etc/GMT-12|+12|-c0|0|","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Etc/GMT-7|+07|-70|0|","Etc/GMT-8|+08|-80|0|","Etc/GMT-9|+09|-90|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Astrakhan|+03 +04|-30 -40|010101|1BWn0 1qM0 WM0 8Hz0 3rd0","Europe/London|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Kaliningrad|EET EEST +03|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0|44e4","Europe/Volgograd|+03 +04|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0|10e5","Europe/Minsk|EET EEST +03|-20 -30 -30|0102|1BWo0 1qM0 WM0|19e5","Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0|16e6","Europe/Samara|+04 +03|-40 -30|010|1Dpb0 WM0|12e5","Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Pacific/Honolulu|HST|a0|0||37e4","Indian/Chagos|IOT|-60|0||30e2","Indian/Christmas|CXT|-70|0||21e2","Indian/Cocos|CCT|-6u|0||596","Indian/Mahe|SCT|-40|0||79e3","Indian/Maldives|MVT|-50|0||35e4","Indian/Mauritius|MUT|-40|0||15e4","Indian/Reunion|RET|-40|0||84e4","Pacific/Majuro|MHT|-c0|0||28e3","MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Pacific/Chatham|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|PGT BST|-a0 -b0|01|1NwE0|18e4","Pacific/Chuuk|CHUT|-a0|0||49e3","Pacific/Efate|VUT|-b0|0||66e3","Pacific/Enderbury|PHOT|-d0|0||1","Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483","Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0|88e4","Pacific/Funafuti|TVT|-c0|0||45e2","Pacific/Galapagos|GALT|60|0||25e3","Pacific/Gambier|GAMT|90|0||125","Pacific/Guadalcanal|SBT|-b0|0||11e4","Pacific/Guam|ChST|-a0|0||17e4","Pacific/Kiritimati|LINT|-e0|0||51e2","Pacific/Kosrae|KOST|-b0|0||66e2","Pacific/Marquesas|MART|9u|0||86e2","Pacific/Pago_Pago|SST|b0|0||37e2","Pacific/Nauru|NRT|-c0|0||10e3","Pacific/Niue|NUT|b0|0||12e2","Pacific/Norfolk|NFT NFT|-bu -b0|01|1PoCu|25e4","Pacific/Noumea|NCT|-b0|0||98e3","Pacific/Palau|PWT|-90|0||21e3","Pacific/Pitcairn|PST|80|0||56","Pacific/Pohnpei|PONT|-b0|0||34e3","Pacific/Port_Moresby|PGT|-a0|0||25e4","Pacific/Rarotonga|CKT|a0|0||13e3","Pacific/Tahiti|TAHT|a0|0||18e4","Pacific/Tarawa|GILT|-c0|0||29e3","Pacific/Tongatapu|TOT|-d0|0||75e3","Pacific/Wake|WAKT|-c0|0||16e3","Pacific/Wallis|WFT|-c0|0||94"],links:["Africa/Abidjan|Africa/Accra","Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Bissau","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Monrovia","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Sao_Tome","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|America/Danmarkshavn","Africa/Abidjan|Atlantic/Reykjavik","Africa/Abidjan|Atlantic/St_Helena","Africa/Abidjan|Etc/GMT","Africa/Abidjan|Etc/GMT+0","Africa/Abidjan|Etc/GMT-0","Africa/Abidjan|Etc/GMT0","Africa/Abidjan|Etc/Greenwich","Africa/Abidjan|GMT","Africa/Abidjan|GMT+0","Africa/Abidjan|GMT-0","Africa/Abidjan|GMT0","Africa/Abidjan|Greenwich","Africa/Abidjan|Iceland","Africa/Algiers|Africa/Tunis","Africa/Cairo|Egypt","Africa/Casablanca|Africa/El_Aaiun","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Khartoum|Africa/Addis_Ababa","Africa/Khartoum|Africa/Asmara","Africa/Khartoum|Africa/Asmera","Africa/Khartoum|Africa/Dar_es_Salaam","Africa/Khartoum|Africa/Djibouti","Africa/Khartoum|Africa/Juba","Africa/Khartoum|Africa/Kampala","Africa/Khartoum|Africa/Mogadishu","Africa/Khartoum|Africa/Nairobi","Africa/Khartoum|Indian/Antananarivo","Africa/Khartoum|Indian/Comoro","Africa/Khartoum|Indian/Mayotte","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Ndjamena","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|America/Juneau","America/Anchorage|America/Nome","America/Anchorage|America/Sitka","America/Anchorage|America/Yakutat","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Argentina/Catamarca","America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia","America/Argentina/Buenos_Aires|America/Argentina/Cordoba","America/Argentina/Buenos_Aires|America/Argentina/Jujuy","America/Argentina/Buenos_Aires|America/Argentina/La_Rioja","America/Argentina/Buenos_Aires|America/Argentina/Mendoza","America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos","America/Argentina/Buenos_Aires|America/Argentina/Salta","America/Argentina/Buenos_Aires|America/Argentina/San_Juan","America/Argentina/Buenos_Aires|America/Argentina/San_Luis","America/Argentina/Buenos_Aires|America/Argentina/Tucuman","America/Argentina/Buenos_Aires|America/Argentina/Ushuaia","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Buenos_Aires|America/Catamarca","America/Argentina/Buenos_Aires|America/Cordoba","America/Argentina/Buenos_Aires|America/Jujuy","America/Argentina/Buenos_Aires|America/Mendoza","America/Argentina/Buenos_Aires|America/Rosario","America/Campo_Grande|America/Cuiaba","America/Chicago|America/Indiana/Knox","America/Chicago|America/Indiana/Tell_City","America/Chicago|America/Knox_IN","America/Chicago|America/Matamoros","America/Chicago|America/Menominee","America/Chicago|America/North_Dakota/Center","America/Chicago|America/North_Dakota/New_Salem","America/Chicago|America/Rainy_River","America/Chicago|America/Rankin_Inlet","America/Chicago|America/Resolute","America/Chicago|America/Winnipeg","America/Chicago|CST6CDT","America/Chicago|Canada/Central","America/Chicago|US/Central","America/Chicago|US/Indiana-Starke","America/Chihuahua|America/Mazatlan","America/Chihuahua|Mexico/BajaSur","America/Denver|America/Boise","America/Denver|America/Cambridge_Bay","America/Denver|America/Edmonton","America/Denver|America/Inuvik","America/Denver|America/Ojinaga","America/Denver|America/Shiprock","America/Denver|America/Yellowknife","America/Denver|Canada/Mountain","America/Denver|MST7MDT","America/Denver|Navajo","America/Denver|US/Mountain","America/Fortaleza|America/Belem","America/Fortaleza|America/Maceio","America/Fortaleza|America/Recife","America/Fortaleza|America/Santarem","America/Halifax|America/Glace_Bay","America/Halifax|America/Moncton","America/Halifax|America/Thule","America/Halifax|Atlantic/Bermuda","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Los_Angeles|America/Dawson","America/Los_Angeles|America/Ensenada","America/Los_Angeles|America/Santa_Isabel","America/Los_Angeles|America/Tijuana","America/Los_Angeles|America/Vancouver","America/Los_Angeles|America/Whitehorse","America/Los_Angeles|Canada/Pacific","America/Los_Angeles|Canada/Yukon","America/Los_Angeles|Mexico/BajaNorte","America/Los_Angeles|PST8PDT","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Managua|America/Belize","America/Managua|America/Costa_Rica","America/Managua|America/El_Salvador","America/Managua|America/Guatemala","America/Managua|America/Regina","America/Managua|America/Swift_Current","America/Managua|America/Tegucigalpa","America/Managua|Canada/East-Saskatchewan","America/Managua|Canada/Saskatchewan","America/Manaus|America/Boa_Vista","America/Manaus|America/Porto_Velho","America/Manaus|Brazil/West","America/Mexico_City|America/Merida","America/Mexico_City|America/Monterrey","America/Mexico_City|Mexico/General","America/New_York|America/Detroit","America/New_York|America/Fort_Wayne","America/New_York|America/Indiana/Indianapolis","America/New_York|America/Indiana/Marengo","America/New_York|America/Indiana/Petersburg","America/New_York|America/Indiana/Vevay","America/New_York|America/Indiana/Vincennes","America/New_York|America/Indiana/Winamac","America/New_York|America/Indianapolis","America/New_York|America/Iqaluit","America/New_York|America/Kentucky/Louisville","America/New_York|America/Kentucky/Monticello","America/New_York|America/Louisville","America/New_York|America/Montreal","America/New_York|America/Nassau","America/New_York|America/Nipigon","America/New_York|America/Pangnirtung","America/New_York|America/Thunder_Bay","America/New_York|America/Toronto","America/New_York|Canada/Eastern","America/New_York|EST5EDT","America/New_York|US/East-Indiana","America/New_York|US/Eastern","America/New_York|US/Michigan","America/Noronha|Brazil/DeNoronha","America/Panama|America/Atikokan","America/Panama|America/Cayman","America/Panama|America/Coral_Harbour","America/Panama|America/Jamaica","America/Panama|EST","America/Panama|Jamaica","America/Phoenix|America/Creston","America/Phoenix|America/Dawson_Creek","America/Phoenix|America/Hermosillo","America/Phoenix|MST","America/Phoenix|US/Arizona","America/Rio_Branco|America/Eirunepe","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Antarctica/Palmer","America/Santiago|Chile/Continental","America/Santo_Domingo|America/Anguilla","America/Santo_Domingo|America/Antigua","America/Santo_Domingo|America/Aruba","America/Santo_Domingo|America/Barbados","America/Santo_Domingo|America/Blanc-Sablon","America/Santo_Domingo|America/Curacao","America/Santo_Domingo|America/Dominica","America/Santo_Domingo|America/Grenada","America/Santo_Domingo|America/Guadeloupe","America/Santo_Domingo|America/Kralendijk","America/Santo_Domingo|America/Lower_Princes","America/Santo_Domingo|America/Marigot","America/Santo_Domingo|America/Martinique","America/Santo_Domingo|America/Montserrat","America/Santo_Domingo|America/Port_of_Spain","America/Santo_Domingo|America/Puerto_Rico","America/Santo_Domingo|America/St_Barthelemy","America/Santo_Domingo|America/St_Kitts","America/Santo_Domingo|America/St_Lucia","America/Santo_Domingo|America/St_Thomas","America/Santo_Domingo|America/St_Vincent","America/Santo_Domingo|America/Tortola","America/Santo_Domingo|America/Virgin","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","Antarctica/DumontDUrville|Etc/GMT-10","Antarctica/Rothera|Etc/GMT+3","Antarctica/Syowa|Etc/GMT-3","Asia/Almaty|Antarctica/Vostok","Asia/Almaty|Asia/Bishkek","Asia/Almaty|Asia/Qyzylorda","Asia/Almaty|Etc/GMT-6","Asia/Baghdad|Asia/Aden","Asia/Baghdad|Asia/Bahrain","Asia/Baghdad|Asia/Kuwait","Asia/Baghdad|Asia/Qatar","Asia/Baghdad|Asia/Riyadh","Asia/Bangkok|Asia/Ho_Chi_Minh","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Saigon","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Hong_Kong|Hongkong","Asia/Jakarta|Asia/Pontianak","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kamchatka|Asia/Anadyr","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Kuching","Asia/Makassar|Asia/Ujung_Pandang","Asia/Rangoon|Asia/Yangon","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|Asia/Macao","Asia/Shanghai|Asia/Macau","Asia/Shanghai|Asia/Taipei","Asia/Shanghai|PRC","Asia/Shanghai|ROC","Asia/Singapore|Singapore","Asia/Tashkent|Antarctica/Mawson","Asia/Tashkent|Asia/Aqtau","Asia/Tashkent|Asia/Aqtobe","Asia/Tashkent|Asia/Ashgabat","Asia/Tashkent|Asia/Ashkhabad","Asia/Tashkent|Asia/Dushanbe","Asia/Tashkent|Asia/Oral","Asia/Tashkent|Asia/Samarkand","Asia/Tashkent|Etc/GMT-5","Asia/Tashkent|Indian/Kerguelen","Asia/Tbilisi|Etc/GMT-4","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Australia/Adelaide|Australia/Broken_Hill","Australia/Adelaide|Australia/South","Australia/Adelaide|Australia/Yancowinna","Australia/Brisbane|Australia/Lindeman","Australia/Brisbane|Australia/Queensland","Australia/Darwin|Australia/North","Australia/Lord_Howe|Australia/LHI","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/Currie","Australia/Sydney|Australia/Hobart","Australia/Sydney|Australia/Melbourne","Australia/Sydney|Australia/NSW","Australia/Sydney|Australia/Tasmania","Australia/Sydney|Australia/Victoria","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Astrakhan|Europe/Ulyanovsk","Europe/Athens|Asia/Nicosia","Europe/Athens|EET","Europe/Athens|Europe/Bucharest","Europe/Athens|Europe/Helsinki","Europe/Athens|Europe/Kiev","Europe/Athens|Europe/Mariehamn","Europe/Athens|Europe/Nicosia","Europe/Athens|Europe/Riga","Europe/Athens|Europe/Sofia","Europe/Athens|Europe/Tallinn","Europe/Athens|Europe/Uzhgorod","Europe/Athens|Europe/Vilnius","Europe/Athens|Europe/Zaporozhye","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Atlantic/Canary","Europe/Lisbon|Atlantic/Faeroe","Europe/Lisbon|Atlantic/Faroe","Europe/Lisbon|Atlantic/Madeira","Europe/Lisbon|Portugal","Europe/Lisbon|WET","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Paris|Africa/Ceuta","Europe/Paris|Arctic/Longyearbyen","Europe/Paris|Atlantic/Jan_Mayen","Europe/Paris|CET","Europe/Paris|Europe/Amsterdam","Europe/Paris|Europe/Andorra","Europe/Paris|Europe/Belgrade","Europe/Paris|Europe/Berlin","Europe/Paris|Europe/Bratislava","Europe/Paris|Europe/Brussels","Europe/Paris|Europe/Budapest","Europe/Paris|Europe/Busingen","Europe/Paris|Europe/Copenhagen","Europe/Paris|Europe/Gibraltar","Europe/Paris|Europe/Ljubljana","Europe/Paris|Europe/Luxembourg","Europe/Paris|Europe/Madrid","Europe/Paris|Europe/Malta","Europe/Paris|Europe/Monaco","Europe/Paris|Europe/Oslo","Europe/Paris|Europe/Podgorica","Europe/Paris|Europe/Prague","Europe/Paris|Europe/Rome","Europe/Paris|Europe/San_Marino","Europe/Paris|Europe/Sarajevo","Europe/Paris|Europe/Skopje","Europe/Paris|Europe/Stockholm","Europe/Paris|Europe/Tirane","Europe/Paris|Europe/Vaduz","Europe/Paris|Europe/Vatican","Europe/Paris|Europe/Vienna","Europe/Paris|Europe/Warsaw","Europe/Paris|Europe/Zagreb","Europe/Paris|Europe/Zurich","Europe/Paris|Poland","Europe/Volgograd|Europe/Kirov","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Chuuk|Pacific/Truk","Pacific/Chuuk|Pacific/Yap","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|HST","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Majuro|Kwajalein","Pacific/Majuro|Pacific/Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Pohnpei|Pacific/Ponape"]
}),a});
(function(dust){dust.register("base_comments",body_0);function body_0(chk,ctx){return chk.w("<div class=\"commentsMainWrapper\"><div class=\"commentsContentWrapper\">").x(ctx.get(["disconnectMode"], false),ctx,{"else":body_1,"block":body_4},{}).w("</div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.x(ctx.get(["waitingMode"], false),ctx,{"else":body_2,"block":body_3},{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"inputAreaContainer\"><div class=\"inputTextAreaContainer\"><div class=\"profilePicWrapper\"><div class=\"profilePic\"><img class=\"iconProfile\" src=\"").f(ctx.get(["apiPortal"], false),ctx,"h").w("/v1/accounts/").f(ctx.get(["userName"], false),ctx,"h").w("/picture?fill=white\"></div></div><div class=\"textAreaContainer\"><textarea id=\"commentInputTextId\" class=\"textAreaStyle commentsInputText\" placeholder=\"Add a comment\"></textarea><div id=\"hiddenDiv\" class=\"hiddenDiv\"></div></div></div><div id=\"buttonsBarId\" class=\"buttonsBar buttonBarHiddenState\"><input id=\"cancelButtonId\" class=\"cancelButton commentsButton button-tertiary\" type=\"button\" value=\"Cancel\" /><input id=\"postButtonId\" class=\"commentsButton button-secondary\" type=\"button\" value=\"Post\" /></div></div><div id=\"commentsListAnchorId\">").p("commentsList",ctx,ctx,{}).w("</div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div class=\"spinnerWrapper\"><div id=\"spinnerAnchor\" class=\"spinner areaSpinner\"></div></div>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div class=\"disconnectLabelWrapper\"><div id=\"disconnectDiv\">Please try again later</div><div class=\"refreshButtonWrapper\"><input id=\"refreshButton\" class=\"commentsButton button-secondary\" type=\"button\" value=\"Refresh Page\" /></div></div>");}body_4.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("commentsList",body_0);function body_0(chk,ctx){return chk.w("<!--//// Comments data//-->").x(ctx.get(["commentsList"], false),ctx,{"else":body_1,"block":body_4},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"separatorWrapper\"><div id=\"inputSeparator\" class=\"mainSeparator\"></div></div>").x(ctx.get(["noComments"], false),ctx,{"else":body_2,"block":body_3},{});}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div class=\"spinnerWrapper\"><div id=\"spinnerAnchor\" class=\"spinner areaSpinner\"></div></div>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<div class=\"noCommentsWrapper\"><svg class=\"noCommentsIcon\"><use xlink:href=\"#bubble_filled\"></use></svg><div class=\"noCommentsText\">No comments yet.</div></div>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div class=\"commentsListWrapper\">").s(ctx.get(["commentsList"], false),ctx,{"block":body_5},{}).w("</div>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.x(ctx.getPath(false, ["timeLineAdditionalAttributesTmp","newDate"]),ctx,{"block":body_6},{}).w("<div userid=\"").f(ctx.getPath(false, ["entity","author","username"]),ctx,"h").w("\" cguid=\"").f(ctx.getPath(false, ["metadata","guid"]),ctx,"h").w("\" class=\"commentWrapper\"><div class=\"commentContentBlock\"><!--  PHOTO SECTION  --><div class=\"profilePicWrapper\"><div class=\"profilePic\"><img class=\"iconProfile\" src=\"").f(ctx.get(["apiPortal"], false),ctx,"h").w("/v1/accounts/").f(ctx.getPath(false, ["entity","author","username"]),ctx,"h").w("/picture?fill=white\"></div></div><!--  COMMENT CONTENT  --><div class=\"commentContentWrapper\"><div class=\"commentHeaderWrapper\"><div class=\"commentHeaderLeft\"><div class=\"commentTitleWrapper\" title=\"").f(ctx.getPath(false, ["entity","author","display_name"]),ctx,"h").w("\">").x(ctx.getPath(false, ["entity","author","display_name"]),ctx,{"else":body_7,"block":body_8},{}).w("</div><div class=\"commentPostingTimeWrapper\">").f(ctx.getPath(false, ["timeLineAdditionalAttributesTmp","time"]),ctx,"h").x(ctx.getPath(false, ["metadata","updated_at"]),ctx,{"block":body_9},{}).w("</div></div><div class=\"commentsHeaderRight\"><div class=\"iconWrapper editCommentIcon\" title=\"Edit\"><svg class=\"iconStyle\"><use xlink:href=\"#icon_edit\"></use></svg></div><div class=\"iconWrapper deleteCommentIcon\" title=\"Delete\"><svg class=\"iconStyle\"><use xlink:href=\"#icon_trash\"></use></svg></div></div></div>").x(ctx.get(["editMode"], false),ctx,{"else":body_10,"block":body_11},{}).w("</div></div></div>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<div class=\"timeLine\"><div class=\"dateTimeLine\"></div><div class=\"dateTimeLineHeader\">").f(ctx.getPath(false, ["timeLineAdditionalAttributesTmp","timeLineLabel"]),ctx,"h").w("</div><div class=\"dateTimeLine\"></div></div>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.f(ctx.getPath(false, ["entity","author","username"]),ctx,"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.getPath(false, ["entity","author","display_name"]),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w(" (edited)");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("<div class=\"commentTextWrapper\">").f(ctx.getPath(false, ["entity","text"]),ctx,"h").w("</div>");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("<div class=\"commentEditTextAreaContainer\"><textarea class=\"textAreaStyle commentsInputText commentEditTextArea\">").f(ctx.getPath(false, ["entity","text"]),ctx,"h").w("</textarea><div class=\"hiddenDiv\"></div><div id=\"buttonsBarId\" class=\"buttonsBar\"><input class=\"editCancelButton cancelButton commentsButton button-tertiary\" type=\"button\" value=\"Cancel\" /><input class=\"editPostButton commentsButton button-secondary\" type=\"button\" value=\"Post\" /></div></div>");}body_11.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("connections_advancedInserttoCode",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2017** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/-->").h("select",ctx,{"block":body_1},{"key":ctx.get(["databasetype"], false)},"h").p("connections_data",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.h("eq",ctx,{"else":body_2,"block":body_3},{"value":"dashdb"},"h");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert metric\" data-metricsaspect=\"linksource\">Insert to code</button>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<span class=\"advancedInsertToCodeMenuWrapper\" id=advancedInsertToCodeMenu_").f(ctx.get(["name"], false),ctx,"h").w("><span class=\"advancedInsertTriangle\" id=advancedInsertTriangle_").f(ctx.get(["name"], false),ctx,"h").w("></span><button class=\"dataSourceInsert\" id=nbSourceAdvancedInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w(">Insert to code</button><div class=\"advancedInsertToCodeOptionsContainer\"><ul class=\"advancedInsertToCodeOptionsList\">").h("select",ctx,{"block":body_4},{"key":ctx.get(["language"], false)},"h").w("</ul></div></span>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.h("eq",ctx,{"block":body_5},{"value":"python"},"h").h("eq",ctx,{"block":body_10},{"value":"R"},"h").h("eq",ctx,{"block":body_13},{"value":"scala"},"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_ida_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"ibmdbpy\" data-containertype=\"ida.dataframe\">Insert ibmdbpy IdaDataFrame</li><li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"ibmdbpy\" data-containertype=\"pandas.dataframe\">Insert pandas DataFrame</li>").h("eq",ctx,{"block":body_6},{"key":ctx.get(["kernel"], false),"value":"python2-spark20"},"h").h("eq",ctx,{"block":body_7},{"key":ctx.get(["kernel"], false),"value":"python3-spark20"},"h").h("eq",ctx,{"block":body_8},{"key":ctx.get(["kernel"], false),"value":"python2"},"h").h("eq",ctx,{"block":body_9},{"key":ctx.get(["kernel"], false),"value":"python3"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQL Context DataFrame</li>");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQL Context DataFrame</li>");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_ida_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"ibmdbr\" data-containertype=\"ida.data.frame\">Insert ibmdbr ida.data.frame</li><li class=\"advancedInsertItem\" id=\"advancedInsertItem_r_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"ibmdbr\" data-containertype=\"r.data.frame\">Insert R data.frame</li>").h("eq",ctx,{"block":body_11},{"key":ctx.get(["kernel"], false),"value":"r"},"h").h("eq",ctx,{"block":body_12},{"key":ctx.get(["kernel"], false),"value":"r-spark20"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQLContext DataFrame</li>");}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_12.__dustBody=!0;function body_13(chk,ctx){return chk.h("eq",ctx,{"block":body_14},{"key":ctx.get(["kernel"], false),"value":"scala"},"h").h("eq",ctx,{"block":body_15},{"key":ctx.get(["kernel"], false),"value":"scala-spark20"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_13.__dustBody=!0;function body_14(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQLContext DataFrame</li>");}body_14.__dustBody=!0;function body_15(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_15.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("connections_data",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2017** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/--><div class=\"connectionDataWrapper\" id=\"connectionData_").f(ctx.get(["name"], false),ctx,"h").w("\"><div class=\"connectionDataContainer\"><div class=\"connectionContentWrapper\"><div class=\"connectionTypeLabel\" id=\"connectionType_").f(ctx.get(["name"], false),ctx,"h").w("\"></div><span class=\"paletteValueLabel\">Schema:</span><div id=\"connectionSchemaDropdown_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectDark connectionDataDropDown disabled\"><button id=\"greySelectButton__schema_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButton\" alt=\"Show dropdown choices\" aria-hidden=\"true\" disabled><span class=\"selectButtonText\">Choose Schema</span><svg class=\"selectButtonArrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon_chevron_up\"></use></svg></button></div><div id=\"connectionSpinnerSchema_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"spinner dropdownSpinner\"></div><span id=\"tableDropdownLabel_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"paletteValueLabel greyLabel\">Table:</span><div id=\"connectionTableDropdown_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectDark connectionDataDropDown disabled\"><button id=\"greySelectButton_table_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButton greySelectButton\" alt=\"Show dropdown choices\" aria-hidden=\"true\" disabled><span class=\"selectButtonText\">Choose Table</span><svg class=\"selectButtonArrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon_chevron_up\"></use></svg></button></div><div id=\"connectionSpinnerTable_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"spinner dropdownSpinner\"></div><button id=\"connectionInsertBtn_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"button-secondary paletteContentButton connectionInsertCodeBtn disabled metric\" data-metricsaspect=\"linksource\" disabled>Insert Code</button></div></div></div>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("connections_list",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2015** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/-->").s(ctx.get(["datasourcelist"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"dataSource\" data-key=\"").f(ctx.get(["servicekey"], false),ctx,"h").w("\" data-guid=\"").f(ctx.get(["guid"], false),ctx,"h").w("\" id=\"").f(ctx.get(["name"], false),ctx,"h").w("\" data-type=\"").f(ctx.get(["type"], false),ctx,"h").w("\"data-servicetype=\"").f(ctx.get(["servicetype"], false),ctx,"h").w("\" data-database= \"").f(ctx.get(["database"], false),ctx,"h").w("\" data-databasetype=\"").f(ctx.get(["databasetype"], false),ctx,"h").w("\"data-connectionname=\"").f(ctx.get(["connectionname"], false),ctx,"h").w("\"><div class=\"dataSourceContentWrapper\"><div class=\"dataSourceTextWrapper\"><section id=\"nbSourceTextContainerSection_").f(ctx.get(["name"], false),ctx,"h").w("\"><span class=\"dataSourceTitle paletteTextBold\">").f(ctx.get(["name"], false),ctx,"h",["s"]).w("</span><span class=\"dataSourceDescription paletteText\">").f(ctx.get(["description"], false),ctx,"h",["s"]).w("</span>").h("eq",ctx,{"else":body_2,"block":body_7},{"key":ctx.get(["dashdbforPython"], false),"value":"on"},"h").w("</section></div>").nx(ctx.get(["project"], false),ctx,{"block":body_8},{}).w("</div><span class=\"dataSourceProgressBar\"></span></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.h("eq",ctx,{"else":body_3,"block":body_6},{"key":ctx.get(["dashdbforR"], false),"value":"on"},"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.h("eq",ctx,{"else":body_4,"block":body_5},{"key":ctx.get(["dashdbforScala"], false),"value":"on"},"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert metric\" data-metricsaspect=\"linksource\">Insert to code</button>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.p("connections_advancedInserttoCode",ctx,ctx,{});}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.p("connections_advancedInserttoCode",ctx,ctx,{});}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.p("connections_advancedInserttoCode",ctx,ctx,{});}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<div class=\"dataSourceDelete\"><svg class=\"icon metric\" data-metricsaspect=\"linksource\"><use xlink:href=\"#icon_close\"></svg></div>");}body_8.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("connections_schemaDropdown",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2017** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/--><select id=\"schemaDropdownSelect_").f(ctx.get(["name"], false),ctx,"h").w("\" tabindex=\"-1\" class=\"selectInvisible\"><option disabled=\"\" selected=\"\">Choose Schema</option>").s(ctx.get(["optionsList"], false),ctx,{"block":body_1},{}).w("</select><button id=\"schemaDropdownBtn_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButton\" alt=\"Show dropdown choices\" aria-hidden=\"true\"><span id=\"schemaDropdownBtnText_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButtonText\">Choose Schema</span><svg class=\"selectButtonArrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon_chevron_up\"></use></svg></button><ul id=\"schemaDropdownOptions_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectOptions\" aria-hidden=\"true\">").s(ctx.get(["optionsList"], false),ctx,{"block":body_2},{}).w("</ul>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<option>").f(ctx.get(["schemaname"], false),ctx,"h").w("</option>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<li class=\"selectOptionsItem\"><button id=\"schemaDropdownOptionsItemBtn_").f(ctx.get(["name"], false),ctx,"h").w("_").f(ctx.get(["schemaname"], false),ctx,"h").w("\" tabindex=\"-1\" class=\"selectOptionsItemButton\" value=").f(ctx.get(["schemaname"], false),ctx,"h").w(">").f(ctx.get(["schemaname"], false),ctx,"h").w("</button></li>");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("connections_tableDropdown",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2017** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/--><select id=\"tableDropdownSelect_").f(ctx.get(["name"], false),ctx,"h").w("\" tabindex=\"-1\" class=\"selectInvisible\"><option disabled=\"\" selected=\"\">Choose Table</option>").s(ctx.get(["optionsList"], false),ctx,{"block":body_1},{}).w("</select><button id=\"tableDropdownBtn_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButton\" alt=\"Show dropdown choices\" aria-hidden=\"true\"><span id=\"tableDropdownBtnText_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectButtonText\">Choose Table</span><svg class=\"selectButtonArrow\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon_chevron_up\"></use></svg></button><ul id=\"tableDropdownOptions_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"selectOptions\" aria-hidden=\"true\">").s(ctx.get(["optionsList"], false),ctx,{"block":body_2},{}).w("</ul>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<option>").f(ctx.get(["tablename"], false),ctx,"h").w("</option>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<li class=\"selectOptionsItem\"><button id=\"tableDropdownOptionsItemBtn_").f(ctx.get(["name"], false),ctx,"h").w("_").f(ctx.get(["tablename"], false),ctx,"h").w("\" tabindex=\"-1\" class=\"selectOptionsItemButton\" value=").f(ctx.get(["tablename"], false),ctx,"h").w(">").f(ctx.get(["tablename"], false),ctx,"h").w("</button></li>");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("file",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2016** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/--><div class=\"dataSource\" id=\"").f(ctx.get(["name"], false),ctx,"h").w("\" ").x(ctx.get(["project_asset_id"], false),ctx,{"block":body_1},{}).x(ctx.get(["project_storage"], false),ctx,{"block":body_2},{}).w(" ").x(ctx.get(["type"], false),ctx,{"block":body_3},{}).w("><div class=\"dataSourceContentWrapper\"><div class=\"dataSourceTextWrapper\"><section id=\"nbSourceTextContainerSection_").f(ctx.get(["name"], false),ctx,"h").w("\"><span class=\"dataSourceTitle paletteTextBold\">").f(ctx.get(["name"], false),ctx,"h").w("</span><span class=\"dataSourceDescription paletteText\"></span>").h("eq",ctx,{"else":body_4,"block":body_42},{"key":ctx.get(["type"], false),"value":"file/datalake-v1"},"h").w("</section></div></div><span class=\"dataSourceProgressBar\"></span></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("data-project-asset-id=\"").f(ctx.get(["project_asset_id"], false),ctx,"h").w("\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("data-project_storage=\"").f(ctx.get(["project_storage"], false),ctx,"h").w("\"");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("data-type=\"").f(ctx.get(["type"], false),ctx,"h").w("\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.h("eq",ctx,{"else":body_5,"block":body_6},{"key":ctx.get(["enableAdvancedInsertTocode"], false),"value":"on"},"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.h("select",ctx,{"block":body_7},{"key":ctx.get(["filetype"], false)},"h");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.h("none",ctx,{"block":body_8},{},"h").h("eq",ctx,{"block":body_18},{"value":"csv"},"h").h("eq",ctx,{"block":body_30},{"value":"json"},"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<span class=\"advancedInsertToCodeMenuWrapper\" id=advancedInsertToCodeMenu_").f(ctx.get(["name"], false),ctx,"h").w("><span class=\"advancedInsertTriangle\"></span><button class=\"dataSourceInsert\" id=nbSourceAdvancedInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w(">Insert to code</button><div class=\"advancedInsertToCodeOptionsContainer\"><ul class=\"advancedInsertToCodeOptionsList\">").h("eq",ctx,{"block":body_9},{"key":ctx.get(["language"], false),"value":"python"},"h").h("eq",ctx,{"block":body_14},{"key":ctx.get(["language"], false),"value":"R"},"h").h("eq",ctx,{"block":body_17},{"key":ctx.get(["language"], false),"value":"scala"},"h").w("</ul></div></span>");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"pandas\">Insert StringIO object</li>").h("eq",ctx,{"block":body_10},{"key":ctx.get(["kernel"], false),"value":"python2-spark20"},"h").h("eq",ctx,{"block":body_11},{"key":ctx.get(["kernel"], false),"value":"python3-spark20"},"h").h("eq",ctx,{"block":body_12},{"key":ctx.get(["kernel"], false),"value":"python2"},"h").h("eq",ctx,{"block":body_13},{"key":ctx.get(["kernel"], false),"value":"python3"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession Setup</li>");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession Setup</li>");}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQLContext Setup</li>");}body_12.__dustBody=!0;function body_13(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQLContext Setup</li>");}body_13.__dustBody=!0;function body_14(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_read_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"read\">Insert textConnection object</li>").h("eq",ctx,{"block":body_15},{"key":ctx.get(["kernel"], false),"value":"r-spark20"},"h").h("eq",ctx,{"block":body_16},{"key":ctx.get(["kernel"], false),"value":"r"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_14.__dustBody=!0;function body_15(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession Setup</li>");}body_15.__dustBody=!0;function body_16(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert SQLContext Setup</li>");}body_16.__dustBody=!0;function body_17(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_17.__dustBody=!0;function body_18(chk,ctx){return chk.w("<span class=\"advancedInsertToCodeMenuWrapper\" id=advancedInsertToCodeMenu_").f(ctx.get(["name"], false),ctx,"h").w("><span class=\"advancedInsertTriangle\"></span><button class=\"dataSourceInsert\" id=nbSourceAdvancedInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w(">Insert to code</button><div class=\"advancedInsertToCodeOptionsContainer\"><ul class=\"advancedInsertToCodeOptionsList\">").h("eq",ctx,{"block":body_19},{"key":ctx.get(["language"], false),"value":"python"},"h").h("eq",ctx,{"block":body_24},{"key":ctx.get(["language"], false),"value":"R"},"h").h("eq",ctx,{"block":body_27},{"key":ctx.get(["language"], false),"value":"scala"},"h").w("</ul></div></span>");}body_18.__dustBody=!0;function body_19(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"pandas\">Insert Pandas DataFrame</li>").h("eq",ctx,{"block":body_20},{"key":ctx.get(["kernel"], false),"value":"python2-spark20"},"h").h("eq",ctx,{"block":body_21},{"key":ctx.get(["kernel"], false),"value":"python3-spark20"},"h").h("eq",ctx,{"block":body_22},{"key":ctx.get(["kernel"], false),"value":"python2"},"h").h("eq",ctx,{"block":body_23},{"key":ctx.get(["kernel"], false),"value":"python3"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_19.__dustBody=!0;function body_20(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_20.__dustBody=!0;function body_21(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_21.__dustBody=!0;function body_22(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li><li class=\"advancedInsertItem\" id=\"advancedInsertItem_sc_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sc\">Insert Spark RDD</li>");}body_22.__dustBody=!0;function body_23(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li><li class=\"advancedInsertItem\" id=\"advancedInsertItem_sc_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sc\">Insert Spark RDD</li>");}body_23.__dustBody=!0;function body_24(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_read_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"read\">Insert R DataFrame</li>").h("eq",ctx,{"block":body_25},{"key":ctx.get(["kernel"], false),"value":"r-spark20"},"h").h("eq",ctx,{"block":body_26},{"key":ctx.get(["kernel"], false),"value":"r"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_24.__dustBody=!0;function body_25(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_25.__dustBody=!0;function body_26(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_26.__dustBody=!0;function body_27(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sc_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sc\">Insert Spark RDD</li>").h("eq",ctx,{"block":body_28},{"key":ctx.get(["kernel"], false),"value":"scala-spark20"},"h").h("eq",ctx,{"block":body_29},{"key":ctx.get(["kernel"], false),"value":"scala"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_27.__dustBody=!0;function body_28(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_28.__dustBody=!0;function body_29(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_29.__dustBody=!0;function body_30(chk,ctx){return chk.w("<span class=\"advancedInsertToCodeMenuWrapper\" id=advancedInsertToCodeMenu_").f(ctx.get(["name"], false),ctx,"h").w("><span class=\"advancedInsertTriangle\"></span><button class=\"dataSourceInsert\" id=nbSourceAdvancedInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w(">Insert to code</button><div class=\"advancedInsertToCodeOptionsContainer\"><ul class=\"advancedInsertToCodeOptionsList\">").h("eq",ctx,{"block":body_31},{"key":ctx.get(["language"], false),"value":"python"},"h").h("eq",ctx,{"block":body_36},{"key":ctx.get(["language"], false),"value":"R"},"h").h("eq",ctx,{"block":body_39},{"key":ctx.get(["language"], false),"value":"scala"},"h").w("</ul></div></span>");}body_30.__dustBody=!0;function body_31(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_pandas_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"pandas\">Insert Pandas DataFrame</li>").h("eq",ctx,{"block":body_32},{"key":ctx.get(["kernel"], false),"value":"python2-spark20"},"h").h("eq",ctx,{"block":body_33},{"key":ctx.get(["kernel"], false),"value":"python3-spark20"},"h").h("eq",ctx,{"block":body_34},{"key":ctx.get(["kernel"], false),"value":"python2"},"h").h("eq",ctx,{"block":body_35},{"key":ctx.get(["kernel"], false),"value":"python3"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_31.__dustBody=!0;function body_32(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_32.__dustBody=!0;function body_33(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_33.__dustBody=!0;function body_34(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_34.__dustBody=!0;function body_35(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_35.__dustBody=!0;function body_36(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_read_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"read\">Insert R DataFrame</li>").h("eq",ctx,{"block":body_37},{"key":ctx.get(["kernel"], false),"value":"r-spark20"},"h").h("eq",ctx,{"block":body_38},{"key":ctx.get(["kernel"], false),"value":"r"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_36.__dustBody=!0;function body_37(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_37.__dustBody=!0;function body_38(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_38.__dustBody=!0;function body_39(chk,ctx){return chk.h("eq",ctx,{"block":body_40},{"key":ctx.get(["kernel"], false),"value":"scala-spark20"},"h").h("eq",ctx,{"block":body_41},{"key":ctx.get(["kernel"], false),"value":"scala"},"h").w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_credentials_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"credentials\">Insert Credentials</li>");}body_39.__dustBody=!0;function body_40(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sparksession_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sparksession\">Insert SparkSession DataFrame</li>");}body_40.__dustBody=!0;function body_41(chk,ctx){return chk.w("<li class=\"advancedInsertItem\" id=\"advancedInsertItem_sqlcontext_").f(ctx.get(["name"], false),ctx,"h").w("\" data-accesstype=\"sqlcontext\">Insert Spark SQL DataFrame</li>");}body_41.__dustBody=!0;function body_42(chk,ctx){return chk.h("eq",ctx,{"block":body_43},{"key":ctx.get(["kernel"], false),"value":"scala"},"h").x(ctx.get(["cataloguePython"], false),ctx,{"block":body_47},{}).x(ctx.get(["catalogueR"], false),ctx,{"block":body_52},{});}body_42.__dustBody=!0;function body_43(chk,ctx){return chk.h("eq",ctx,{"else":body_44,"block":body_46},{"key":ctx.get(["catalogue_filetype"], false),"value":"text/csv"},"h");}body_43.__dustBody=!0;function body_44(chk,ctx){return chk.h("eq",ctx,{"block":body_45},{"key":ctx.get(["filetype"], false),"value":"csv"},"h");}body_44.__dustBody=!0;function body_45(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_45.__dustBody=!0;function body_46(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_46.__dustBody=!0;function body_47(chk,ctx){return chk.h("eq",ctx,{"block":body_48},{"key":ctx.get(["kernel"], false),"value":"python2"},"h");}body_47.__dustBody=!0;function body_48(chk,ctx){return chk.h("eq",ctx,{"else":body_49,"block":body_51},{"key":ctx.get(["catalogue_filetype"], false),"value":"text/csv"},"h");}body_48.__dustBody=!0;function body_49(chk,ctx){return chk.h("eq",ctx,{"block":body_50},{"key":ctx.get(["filetype"], false),"value":"csv"},"h");}body_49.__dustBody=!0;function body_50(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_50.__dustBody=!0;function body_51(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_51.__dustBody=!0;function body_52(chk,ctx){return chk.h("eq",ctx,{"block":body_53},{"key":ctx.get(["language"], false),"value":"R"},"h");}body_52.__dustBody=!0;function body_53(chk,ctx){return chk.h("eq",ctx,{"else":body_54,"block":body_56},{"key":ctx.get(["catalogue_filetype"], false),"value":"text/csv"},"h");}body_53.__dustBody=!0;function body_54(chk,ctx){return chk.h("eq",ctx,{"block":body_55},{"key":ctx.get(["filetype"], false),"value":"csv"},"h");}body_54.__dustBody=!0;function body_55(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_55.__dustBody=!0;function body_56(chk,ctx){return chk.w("<button id=\"nbSourceInsertIntoCodeButton_").f(ctx.get(["name"], false),ctx,"h").w("\" class=\"dataSourceInsert\">Insert to code</button>");}body_56.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("files_list",body_0);function body_0(chk,ctx){return chk.w("<!--/******************************************************************************** IBM Confidential* OCO Source Materials* 5725-Y50* (C) Copyright IBM Corp. 2016** The source code for this program is not published or otherwise divested of* its trade secrets, irrespective of what has been deposited with the* U.S. Copyright Office.*******************************************************************************/--><div id=\"fileDatasource\" data-projectStorage=").f(ctx.get(["projectStorage"], false),ctx,"h").w(">").s(ctx.get(["fileList"], false),ctx,{"block":body_1},{}).w("</div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.p("file",ctx,ctx,{});}body_1.__dustBody=!0;return body_0}(dust));
/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.CommonCtrl = (function ($) {
  'use strict';

  var

  _jupyterEventsEnabled = false,

  /**
   *
   */
  _hasHtml5Validation = function () {
    return typeof document.createElement('input').checkValidity === 'function';
  },

  /**
   *
   */
  _hasjupyterVersionsEvent = function () {
    return _jupyterEventsEnabled;
  },

  /**
   *
   */
  _setjupyterVersionsEvent = function (state) {
    _jupyterEventsEnabled = state;
  },

   /**
    *
    */
  _checkValidityPolyfill = function (formElement, e) {
    var formIsValid = false;

    if (!formElement.checkValidity()) {
      // Prevent default stops form from firing
      e.preventDefault();
      // we decided to not style invalid fields for now
      //$(formElement).addClass('invalid');
    } else {
      // we decided to not style invalid fields for now
      //$(formElement).removeClass('invalid');
      formIsValid = true;
    }

    return formIsValid;
  },

  _showDarkPageSpinner = function (visible) {
    _showAreaSpinnerFor('.pageSpinner', visible);
    var body = $('body');
    if (visible) {
      body.addClass('overlayDark');
    } else {
      body.removeClass('overlayDark');
    }
  },

  _showLightPageSpinner = function (visible) {
    _showAreaSpinnerFor('.pageSpinner', visible);
    var body = $('body');
    if (visible) {
      body.addClass('overlayLight');
    } else {
      body.removeClass('overlayLight');
    }
  },

  _showAreaSpinnerFor = function (selectorOrjQueryObject, visible) {
    var spinner;
    if (selectorOrjQueryObject instanceof jQuery) {
      spinner = selectorOrjQueryObject;
    } else {
      spinner = $(selectorOrjQueryObject);
    }
    if (visible) {
      spinner.addClass('visibleSpinner');
    } else {
      spinner.removeClass('visibleSpinner');
    }
  },

  _openCenteredPopup = function (source, title, options) {
    options.left = window.top.outerWidth / 2 + window.top.screenX - (options.width / 2);
    options.top = window.top.outerHeight / 2 + window.top.screenY - (options.height / 2);
    var optionsString = _createOptionsString(options);
    return window.open(source, title, optionsString);
  },

  _createOptionsString = function (options) {
    var optionsString = '';
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        optionsString += key + '=' + options[key] + ',';
      }
    }
    return optionsString;
    //'toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no,'
  },

  /*using this function will bind an event to the passed element. The logic here: making a tooltip
   * message appear when the mouse hover over the element. The message is the text in this element*/
  _bindTextOverflowHandling = function (elem) {
    elem.bind('mouseenter', function () {
      var $this = $(this);

      if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
        $this.attr('title', $this.text());
      }
    });
  },

  /**
   * Decodes HTML special characters
   * Replaces escaped special characters (&amp;, &quot;, &#96;, ...) with the respective symbols (&, ", ', ...)
   * Counterpart to https://github.com/jashkenas/underscore/blob/master/underscore.js#L1411-L1437
   *
   * @param {String} input - The input string possibly containing escaped escaped HTML special characters
   *
   * @return {String} - A string where the escaped special HTML characters are replaced with the original symbols
   */
  _decodeHTMLSpecialCharacters = function (input) {
    return String(input)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
       /* jshint -W109 */
       // jscs:disable validateQuoteMarks
      .replace(/&#96;/g, "'")
      .replace(/&#x27;/g, "'")
       // jscs:enable validateQuoteMarks
       /* jshint +W109 */
      .replace(/&#x60;/g, '`')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  },

   /**
   * Get all query parameters as a JavaScript object
   *
   * @return {Object} - An object with all query parameters as key value pairs
   */
  _getAllQueryParameters = function () {

    var mapping = {};

    var queryParams = window.location.search;

    if (queryParams) {
      queryParams.substr('1').split('&').forEach(function (queryParam) {
        var kvp = queryParam.split('=');
        var key = kvp[0];
        var value = (kvp.length === 2) ? kvp[1] : '';
        mapping[key] = decodeURIComponent(value);
      });
    }

    return mapping;
  },

  /**
   * Get the value of a given query parameter key
   *
   * @param {String} key - The query parameter key
   *
   * @return {String} - The value of the query parameter (possibly undefined)
   */
  _getQueryParameter = function (key) {
    return _getAllQueryParameters()[key];
  },

  /**
   * Check if the given feature is enabled for the user
   *
   * @param {String} feature - The feature key
   *
   * @return {Boolean} - True if the feature is enabled for the user, otherwise false
   */
  _isFeatureEnabledForUser = function (feature) {
    return window.feature &&
      window.feature.getMyEnabledFeatureKeys() &&
      window.feature.getMyEnabledFeatureKeys().indexOf(feature) > -1;
  },

  /**
   * append a div to the body which contains all common SVGs
   *
   * @param {String} SpriteUrl - url where to fetch the data to bind in the div
   * @param {Object} [callback] - the callback function to be called after execution
   */
  _includeIconSpriteToBody = function (SpriteUrl, callback) {
    var iconSpriteContainer = $('<div>', {
      'class': 'iconsprite'
    });

    $('body').append(iconSpriteContainer);
    $('.iconsprite').load(SpriteUrl, callback);
  },

  /**
   * Formats timestamp according to unified standard across DSX
   * The Output format is D MMM YYYY, h:mm A (eg. 4 Sept 2016, 5:46 PM)
   *
   * @param {String} input - The input string is the UTC time in epoch
   *
   * @return {String} - A string in the unified format in human readable form
   */
  _getFormattedTimestamp = function (input) {
    var formattedTimestamp = moment(parseInt(input)).local().format('D MMM YYYY, h:mm A');
    if (formattedTimestamp.indexOf('1970') >= 0) {
      formattedTimestamp = moment(parseInt(input)).local().format('D MMM YYYY, h:mm A');
    }
    return (formattedTimestamp);
  },

  _createLink = function (url, text) {
    var link = $('<a>');
    link.attr('href', url);
    link.attr('target','_blank');
    link.text(text);
    link.prop('class', 'metric');
    link.attr('data-metricsaspect', 'linksource');
    return link.get(0).outerHTML;
  },

  _projectContextErrMsg = function () {
    var projectSettingsURL = '/projects/' + CDSXAX.NotebookCtrl.getProjectId() + '/settings?context=analytics';
    var projectSettingsLink = _createLink(projectSettingsURL,'project settings');
    CDSXAX.Dialog.showAlertMessage('This operation requires a project access token, ' +
    'which does not exist at the moment. ' +
    'Please ask your project administrator to create a token in ' + projectSettingsLink + '.');
  };

  return {
    showDarkPageSpinner: _showDarkPageSpinner,
    showLightPageSpinner: _showLightPageSpinner,
    showAreaSpinnerFor: _showAreaSpinnerFor,
    hasHtml5Validation: _hasHtml5Validation,
    setjupyterVersionsEvent: _setjupyterVersionsEvent,
    hasjupyterVersionsEvent: _hasjupyterVersionsEvent,
    checkValidityPolyfill: _checkValidityPolyfill,
    bindTextOverflowHandling: _bindTextOverflowHandling,
    decodeHTMLSpecialCharacters: _decodeHTMLSpecialCharacters,
    getQueryParameter: _getQueryParameter,
    includeIconSpriteToBody: _includeIconSpriteToBody,
    isFeatureEnabledForUser: _isFeatureEnabledForUser,
    getFormattedTimestamp: _getFormattedTimestamp,
    createLink: _createLink,
    projectContextErrMsg: _projectContextErrMsg,
    openCenteredPopup: _openCenteredPopup
  };
})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.ActionBar = (function ($) {
  'use strict';

  var
  _wnd = window,
  _con = _wnd.console,
  _actionBar,

  // ------------------------------------------------------------------------------------
  // Initialization
  // ------------------------------------------------------------------------------------

  // As of the current implementation of the action bar, the global header (and action bar)
  // will be available after initial HTML content has been loaded, that's why
  // we'll delay the initialization of this module until then.
  // Be aware that this assumes that the corresponding event listener in the
  // navigation bar is executed before the one below!
  // See: https://github.ibm.com/dap/portal-common-api/blob/master/src/js/nav/v2/nav.js
  _get = function () {

    if (_actionBar) {
      return $.when(_actionBar);
    }

    var deferred = new $.Deferred();

    function setupActionBar() {
      if (!window.globalHeader || !window.globalHeader.actionBar) {
        var err = 'Unable to initialize action bar since it\'s not accessible' +
                  ' through the global header object';
        deferred.reject(new Error(err));
      } else {
        _actionBar = window.globalHeader.actionBar;
        deferred.resolve(_actionBar);
      }
    }

    if (document.readyState === 'complete') {
      setupActionBar();
    }

    document.addEventListener('DOMContentLoaded', function onLoad() {
      setupActionBar();
    });

    return deferred.promise();
  },

  _insertProjectContextCreationCode = function (params) {
    // to be refactored with insertToCode handler in the pallete to a glocal generic insertToCode handler!
    var getProjectTokenForGUID = CDSXAX.ProjectInfoModel.getProjectContextCreationCodeWithProjectToken(params);
    $.when(getProjectTokenForGUID).done(_sendMessageForProjectContextCreationCode);
    $.when(getProjectTokenForGUID).fail(_handleTokenFail);
  },

  _handleTokenFail = function (response) {
    if (response.status === 401) {
      window.location.reload(true);
    } else if (response.status === 404) {
      CDSXAX.CommonCtrl.projectContextErrMsg();
    }
  },

  _sendMessageForProjectContextCreationCode = function (response) {
    var nbFrameSource, nbFrame;
    var message = {};
    var finalMessage;
    var code = $(response).filter('#code').text();
    var reducedCode = $(response).filter('#reducedCode').text();
    var questions = $(response).filter('#questions').text();
    var variableName = $(response).filter('#variableName').text();

    message.type = 'projectContextCreation';
    message.content = {};
    message.content.codeBlock = code;
    message.content.reducedCode = reducedCode;
    message.content.questions = questions;
    message.content.variableName = variableName;
    finalMessage = JSON.parse(JSON.stringify(message));

    nbFrameSource = $('#guest').attr('src');
    nbFrame = $('#guest')[0].contentWindow;
    if (nbFrame) {
      nbFrame.postMessage(finalMessage, nbFrameSource);
    } else {
      _con.log('notebook iframe unavailable');
    }
  };

  return {
    get: _get,
    insertProjectContextCreationCode: _insertProjectContextCreationCode
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that allows integration with NewRelic in support of gathering metric information
 *
 * @version 1.0
 * @exports CDSXAX/Metric
 * @namespace Metric
 */
CDSXAX.Metric = (function ($) {
  'use strict';

  var
  /**
   * Generic metrics provider definition
   *
   * @memberof Metric
   * @constructor
   */
  Metric = function (provider) {
    this.provider = provider;
  },
  // console shortcut
  _con = window.console,
  // from where (page) does the metric to be taken originate?
  _metricOrigin = $('#data').data('metricsorigin'),
  // shall we use semantic eventing instead of emitting plain JS events
  _useSemanticEventing = $('#data').data('metricsusese'),
  // the list of semantic events that we have to look for
  _semanticEventingList,
  // the metrics factory supposed to instantiate metrics provider
  _metricFactory,
  // the currently configured metrics provider instance
  _metricInstance,
  // the semantic event stack instance that collects event signatures and
  // compares them with previously recorded event in support of emitting a
  // semantic event
  _semanticStackInstance,
  /**
   * The semantic stack definition
   *
   * @memberof Metric
   * @constructor
   */
  SemanticStack = function () {
    var
    // holds signatures
    _items = [],
    // initialize the event
    _event = document.createEvent('Event'),

    _findEvent = function (forSignature) {
      // is the currently computed signature part of the configured signature list?
      return (_semanticEventingList[forSignature] !== undefined);
    },

    /**
     * Generate a hash code for a given string
     *
     * @param {String} str - the string for which to compute a has
     */
    _hashCode = function (str) {
      var hash = 5381, i, char;
      for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        /* jshint ignore:start */
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
        /* jshint ignore:end */
      }
      return hash;
    },

    /**
     * Add an element onto the stack
     *
     * @param {String} element - an element to be pushed
     */
    _push = function (element) {
      var currentSignature;
      // push to stack
      _items.push(element);
      // get the current signature of the stack
      currentSignature = _print();
      _con.log('Current signature: ' + currentSignature);
      if (_findEvent(currentSignature)) {
        // current signature corresponds with one in the list > dispatch to
        // emit an event
        window.dispatchEvent(_event);
      }
    },

    /**
     * Remove an element from the stack
     *
     * @returns {String}
     */
    _pop = function () {
      return _items.pop();
    },

    /**
     * Get an element from the stack
     *
     * @returns {String}
     */
    _peek = function () {
      return _items[_items.length - 1];
    },

    /**
     * Does the stack contain any items?
     *
     * @returns {Boolean}
     */
    _isEmpty = function () {
      return _items.length === 0;
    },

    /**
     * How many items are on the stack
     *
     * @returns {Number}
     */
    _size = function () {
      return _items.length;
    },

    /**
     * Empty the stack
     *
     */
    _clear = function () {
      _items = [];
    },

    /**
     * Provide a hash of the elements that are currently on the stack
     *
     * @returns {String}
     */
    _print = function () {
      return _hashCode(_items.toString());
    },

    /**
     * Initialize the stack
     */
    _init = function () {
      _event.initEvent('signaturefound', true, true);
    };

    return {
      push: _push,
      pop: _pop,
      peek: _peek,
      isEmpty: _isEmpty,
      size: _size,
      clear: _clear,
      print: _print,
      init: _init
    };
  },

  /**
   * A NewRelic metrics provider
   *
   * @memberof Metric
   * @constructor
   */
  _newRelicMetric = function (provider) {
    var
    /**
     * Submits a custom event to the metrics provider backend
     *
     * @param {String} type - the event type
     * @param {String} id - the element ID
     * @param {String} aspect - the aspect of the page where the event occured
     * @param {String} origin - the page where the event occured
     * @param {String} timestamp - an arbitrary timestamp
     */
    _submitEvent = function (type, id, aspect, origin, timestamp, isFeature, featureName, featureVariant) {
      _con.log('Submitting event for provider: ' + this.provider);
      _con.log('Event type: ' + type);
      _con.log('Target ID: ' + id);
      _con.log('Aspect: ' + aspect);
      _con.log('Origin: ' + origin);
      _con.log('Timestamp: ' + (timestamp));
      _con.log('Is Feature: ' + isFeature);
      _con.log('Feature Name: ' + (featureName ? featureName : 'n/a'));
      _con.log('Feature Variant: ' + (featureVariant ? featureVariant : 'n/a'));
      // emit an event to NewRelic
      if (isFeature) {
        newrelic.addPageAction(origin + '_' + aspect, {
          type: type,
          id: id,
          isFeature: isFeature,
          featureName: featureName ? featureName : 'n/a',
          featureVariant: featureVariant ? featureVariant : 'n/a',
          timestamp: timestamp
        });
      } else {
        newrelic.addPageAction(origin + '_' + aspect, {
          type: type,
          id: id,
          timestamp: timestamp
        });
      }
    },

    /**
     * Initializes the metrics provider implementation
     */
    _init = function () {
      Metric.call(this, provider);
    };

    return {
      submitEvent: _submitEvent,
      init: _init
    };
  },
  /**
   * Stub will be augmented later on
   *
   * @memberof Metric
   * @constructor
   */
  MetricFactory = function () {},

  /**
   * Wrapper to submit an event using a configured metrics provider implementation
   *
   * @memberof Metric
   */
  _submitEvent = function () {
    _metricInstance.submitEvent();
  },

  /**
   * Wrapper function to take care of the fact that some elements may not have
   * an aspect configured using the data-metricsaspect property.
   *
   * @memberof Metric
   * @param {String} forElement - the element for which an aspect should be retrieved
   * @returns {String}
   */
  _getAspect = function (forElement) {
    var aspect = $(forElement).data('metricsaspect');
    // special handling for VEX buttons. Generic VEX buttons don't have an ID
    // and don't allow to annotate data properties
    if
    (
      forElement.tagName &&
      forElement.tagName.indexOf('BUTTON') >= 0 &&
      $(forElement).hasClass('vex-dialog-button')
    ) {
      aspect = 'vexbutton';
    }

    return aspect;
  },

  /**
   * Wrapper function to take care of the fact that some elements do not have an
   * ID configured.
   *
   * @memberof Metric
   * @param {Object} forElement - the element for which an ID should be retrieved
   * @returns {String}
   */
  _getID = function (forElement) {
    var id = forElement.id;
    // special handling for VEX buttons. Generic VEX buttons don't have an ID
    // and don't allow to annotate data properties
    if
    (
      forElement.tagName &&
      forElement.tagName.indexOf('BUTTON') >= 0 &&
      $(forElement).hasClass('vex-dialog-button')
    ) {
      id = $(forElement).text().replace(/ /g,'');
    }

    return id;
  },

  /**
   * Determines whether the featurename data attribute is part of the markup
   *
   * @returns {Boolean}
   */
  _featureNameElementExists = function (element) {
    return $(element).data('featurename') && $(element).data('featurename').length > 0;
  },

  /**
   * Tries to determine whether an UI element belongs to a particular feature
   *
   * @memberof Metric
   * @param {Object} element - the element that should be checked
   * @returns {Boolean}
   */
  _getIsFeature = function (element) {
    var result = false;

    if (_featureNameElementExists(element)) {
      if (
          feature.getMyEnabledFeatureKeys() &&
          feature.getMyEnabledFeatureKeys().indexOf($(element).data('featurename')) >= 0 &&
          feature.useAnalytics($(element).data('featurename'))
      ) {
        result = true;
      }
    }

    return result;
  },

  /**
   * Tries to figure out whether the element belongs to a feature AND a feature variant
   *
   * @memberof Metric
   * @param {Object} element - the element that should be checked
   * @returns {String}
   */
  _getFeatureVariant = function (element) {
    var result;

    if ($(element).data('featurevariant') && $(element).data('featurevariant').length > 0) {
      result = $(element).data('featurevariant');
    }

    return result;
  },

  /**
   * Retrieves the name of a particular feature
   *
   * @memberof Metric
   * @param {Object} element - the element that should be checked
   * @returns {String}
   */
  _getFeatureName = function (element) {
    var result;

    if ($(element).data('featurename') && $(element).data('featurename').length > 0) {
      result = $(element).data('featurename');
    }

    return result;
  },

  /**
   * Submit an event to the metrics provider backend or simply push a has for
   * it onto the stack?
   *
   * @memberof Metric
   * @param {String} type - the event type
   * @param {String} id - the element ID
   * @param {String} aspect - the aspect of the page where the event occured
   * @param {String} origin - the page where the event occured
   * @param {String} timestamp - an arbitrary timestamp
   * @param {Object} instance - the instance of the metrics provider
   */
  _submitOrPush = function (type, id, aspect, origin, timestamp, instance, isFeature, featureName, featureVariant) {
    // push to stack instead of emit an event to the metrics provider if
    // semantic eventing is on
    if (_useSemanticEventing) {
      _semanticStackInstance.push(origin + '_' + aspect + '_' + id + '_' + type);
    } else {
      instance.submitEvent(type, id, aspect, origin, timestamp, isFeature, featureName, featureVariant);
    }
  },

  /**
   * Initialize eventing
   *
   * @memberof Metric
   * @param {Object} instance - the instance of the metrics provider
   */
  _initEventing = function (instance) {
    $('.metric').on('click', function (e) {
      _submitOrPush(
        e.type,
        _getID(e.target),
        _getAspect(this),
        _metricOrigin,
        (new Date()).getTime(),
        instance,
        _getIsFeature(e.target),
        _getFeatureName(e.target),
        _getFeatureVariant(e.target)
      );
    });
    $('.metric').on('focus', function (e) {
      _submitOrPush(
        e.type,
        _getID(e.target),
        _getAspect(this),
        _metricOrigin,
        (new Date()).getTime(),
        instance,
        _getIsFeature(e.target),
        _getFeatureName(e.target),
        _getFeatureVariant(e.target)
      );
    });
    $('.metric').on('change', function (e) {
      if (
        e.target.tagName.indexOf('INPUT') >= 0 ||
        e.target.tagName.indexOf('SELECT') >= 0 ||
        e.target.tagName.indexOf('TEXTAREA') >= 0
      ) {
        _submitOrPush(
          e.type,
          _getID(e.target),
          _getAspect(this),
          _metricOrigin,
          (new Date()).getTime(),
          instance,
          _getIsFeature(e.target),
          _getFeatureName(e.target),
          _getFeatureVariant(e.target)
        );
      }
    });
    $(window).on('drop', function (e) {
      _submitOrPush(
        e.type,
        _getID(e.target),
        _getAspect(e.target),
        _metricOrigin,
        (new Date()).getTime(),
        instance,
        _getIsFeature(e.target),
        _getFeatureName(e.target),
        _getFeatureVariant(e.target)
      );
    });
  },

  /**
   * Generic init function to initialize stuff
   *
   * @memberof Metric
   */
  _init = function () {
    var
    // is metrics gathering active?
    metrics = $('#data').data('metrics'),
    // which provider should be used
    provider = $('#data').data('metricsprovider');
    // create metric provider object per metrics provider impl
    _newRelicMetric.prototype = Object.create(Metric.prototype);
    // default metric implementation is NewRelic
    MetricFactory.prototype.metricClass = _newRelicMetric;
    // factory method for creating metric provider implementations
    MetricFactory.prototype.createMetric = function (provider) {
      _con.log('Creating metric provider for: ' + provider);
      // currently we only have one provider implementation
      switch (provider) {
        case 'newrelic':
          this.metricClass = _newRelicMetric;
          break;
      }

      return new this.metricClass(provider);
    };
    // initialize the metrics provider factory
    _metricFactory = new MetricFactory();
    // instantiate the configured metrics provider
    _metricInstance = _metricFactory.createMetric(provider);
    // and initialize the instance
    _metricInstance.init();
    // instantiate a semantic stack
    _semanticStackInstance = new SemanticStack();
    // and initialize it
    _semanticStackInstance.init();

    // Listen for the semantic event on semantic signatures found.
    window.addEventListener('signaturefound', function (e) {
      var signature = _semanticStackInstance.print(),
          event = _semanticEventingList[signature];
      _con.log('Signature "' + signature + '" found by ' + e.target + ' for semantic event "' + event + '"');
      // submit the semantic event to the metrics provider
      _metricInstance.submitEvent('semantic', 'n/a', event, _metricOrigin, (new Date()).getTime(), false, 'n/a', 'n/a');
      // clear the stack so we could start from scratch again
      _semanticStackInstance.clear();
    }, false);
    // is semantic eventing on?
    if (_useSemanticEventing) {
      _semanticEventingList = $('#data').data('metricsselist');
    }
    // is metrics gathering on?
    if (metrics) {
      _initEventing(_metricInstance);
    }
  };

  _init();

  return {
    init: _init,
    submitEvent: _submitEvent
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

'use strict';

var CDSXAX = CDSXAX || {};

// 30 min.
CDSXAX.SocketioHandler = (function ($) {
  var SESSION_ID_CACHE_TIMEOUT = 30 * 60 * 1000;

  var

  _getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  _getCachedOrigin = function (key) {
    var originJSON = sessionStorage.getItem(key);

    if (originJSON) {
      var originWithExpiry = JSON.parse(originJSON);

      if (originWithExpiry.expiry && originWithExpiry.expiry > new Date().getTime()) {
        return originWithExpiry.origin;
      } else {
        // The value is now stale and can no longer be relied upon. Remove.
        // ----------------------------------------------------------------------
        sessionStorage.removeItem(key);
        return null;
      }
    } else {
      return null;
    }
  },

  _initSocketIo = function (path, callback) {
    //Vary the reconnection parameters so a service instance going down
    //can't create a flood of requests and overwhelm the system.
    var reconnectionDelay = _getRandomInt(1000, 10000);   //Wait 1 - 10 seconds for retry
    var reconnectionDelayMax = _getRandomInt(5000, 1000);  //Wait 5 - 10 seconds between tries

    _computeOrigin(path, function (origin) {
      if (!origin) {
        callback(null);
        return;
      }

      _getEventSessionCookie(origin, path, function (token) {
        if (!token) {
          callback(null);
          return;
        }

        var socket = io.connect(origin.url, {
          path: path + '/socket.io',
          query: 'session_id=' + origin.sid,
          reconnection: true,
          reconnectionDelay: reconnectionDelay,
          reconnectionDelayMax: reconnectionDelayMax,
          reconnectionAttempts: 10
        });
        socket.on('connect', function () {
          socket.emit('message', 'A message from the client');
          callback(socket);
        });
        /*
        If the reconnect fails, then the server instance may no longer be there.
        Wipe our records so we obtain a new jsession id (session affinity cookie)
        when the page is refreshed.
        */
        socket.on('reconnect_failed', function () {
          sessionStorage.removeItem('socket-token-uid');
        });
      });
    });
  },

  // Compute origin URL to use to connect SocketIO to the server
  _computeOrigin = function (path, callback) {
    var storageKey = path + '/events';
    var origin = _getCachedOrigin(storageKey);
    if (origin) {
      callback(origin);
      return;
    }
    // Fetch it from the server
    _doXhr({url: storageKey, json: true}, [200], function (err, result) {
      if (err) {
        console.warn('Error fetching microservice direct route from url: ' + storageKey);
        callback(null);
      }

      // After 30 minutes, session id must be refreshed from the cdsx.sid cookie
      // rather than using the cached version from the sessionStorage object.
      // NOTE: If a client adjusts local time on his/her system, this solution
      // would be compromised. It is an edge case, but a possibility, nonetheless.
      // ------------------------------------------------------------------------
      var expiry = new Date().getTime() + SESSION_ID_CACHE_TIMEOUT;
      var originWithExpiry = {
        'origin': result,
        'expiry': expiry
      };

      sessionStorage.setItem(storageKey, JSON.stringify(originWithExpiry));
      callback(result);
    });
  },

  _getEventSessionCookie = function (origin, path, callback) {
    var storageKey = path + '/socket-token-uid';
    var socketTokenUid = sessionStorage.getItem(storageKey);
    if (socketTokenUid !== null) {
      console.log('Found token in session storage:' + socketTokenUid);
      callback(socketTokenUid);
      return;
    }

    // just using 2 back slashes without prefixing with protocol results in e.g. https://// for IE
    var sessionpUrl = origin.url + path + '/sessionp';
    if (sessionpUrl.indexOf(window.location.protocol) === -1) {
      sessionpUrl = window.location.protocol + sessionpUrl;
    }
    console.log('sending: url:' + sessionpUrl);
    _jsonp(sessionpUrl, function (result) {
      if (!result) {
        callback(null);
        return;
      }

      sessionStorage.setItem(storageKey, result.token);
      callback(result.token);
    });
  },

  _callbackHandler = function (callback, error) {
    return function (data) {
      if (error) {
        callback(null);
      } else {
        callback(data);
      }
    };
  },

  _jsonp = function (url, callback) {
    // TODO REMOVE JQUERY DEPENDENCY!!
    // Time ran out on making the above commented vanilla JS code for jsonp to work.

    $.ajax({
      url: url,
      dataType: 'jsonp',
      async: true,
      cache: false,
      contentType: 'text/json; charset=utf-8',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: _callbackHandler(callback, false),
      error: _callbackHandler(callback, true)
    });
  },

  _doXhr = function (options, acceptableReturnCodes, callback) {

    if (!options || !options.url) {
      callback(new Error('options parameter no provided or does not contain url'));
      return;
    }

    var request = new XMLHttpRequest();
    request.open(options.method || 'GET', options.url, true);

    if (options.headers) {
      for (var header in options.headers) {
        if (options.headers.hasOwnProperty(header)) {
          request.setRequestHeader(header, options.headers[header]);
        }
      }
    }

    request.onload = function () {
      if (acceptableReturnCodes.indexOf(request.status) === -1) {
        callback(new Error('Unexpected response code: ' + request.status));
      } else {
        var result = request.responseText;
        if (options.json) {
          try {
            result = JSON.parse(result);
          } catch (e) {
            callback(new Error('Error: unable to parse result as JSON'));
            return;
          }
        }
        callback(null, result);
      }
      return;
    };
    request.onerror = callback;

    request.send(options.data);

    return request;
  };

  return {
    initSocket: _initSocketIo
  };
})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.AccountsHandler = (function () {
  'use strict';

  var

  // ------------------------------------------------------------------------------------
  // Getters / Setters / Helpers
  // ------------------------------------------------------------------------------------

  _getAccountInfo = function (accounts) {

    if (!Array.isArray(accounts)) {
      accounts = [accounts];
    }

    return CDSXAX.AccountsModel.getAccountInfo(accounts.join(','));
  };

  return {
    getAccountInfo: _getAccountInfo,
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.AccountsModel = (function ($) {
  'use strict';

  var

  // ------------------------------------------------------------------------------------
  // URLs
  // ------------------------------------------------------------------------------------

  _getAccountInfoEndpoint = function (accounts) {
    return '/analytics/notebooks/accounts/' + encodeURIComponent(accounts);
  },

  // ------------------------------------------------------------------------------------
  // Promises
  // ------------------------------------------------------------------------------------

  _getAccountInfo = function (accounts) {
    return $.ajax({
      url: _getAccountInfoEndpoint(accounts),
      method: 'GET',
      cache: false
    });
  },

  _getSessionPulse = function () {
    return $.ajax({
      url: '/analytics/notebooks/sessionpulse',
      method: 'GET',
      cache: false
    });
  };

  return {
    getAccountInfo: _getAccountInfo,
    getSessionPulse: _getSessionPulse
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides support to do XHR calls against the scheduling backend
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingModel
 * @namespace SchedulingModel
 */
CDSXAX.SchedulingModel = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function ($, dateTime) {
    var

    model,

    URL_FRAGMENTS = {
      //jscs:disable maximumLineLength
      updateScheduleDialog: '{entryPrefix}/notebooks/{notebookId}/{projectId}/partials/schedules/dialog/{scheduleId}',
      createScheduleDialog: '{entryPrefix}/notebooks/{notebookId}/{projectId}/partials/schedules/dialog',
      paletteScheduleList: '{entryPrefix}/notebooks/{notebookId}/{projectId}/partials/schedules',
      updateScheduleForPartial: '{entryPrefix}/notebooks/{notebookId}/{projectId}/partials/schedules/{scheduleId}',
      createScheduleForPartial: '{entryPrefix}/notebooks/{notebookId}/{projectId}/partials/schedules',
      executionInfo: '{entryPrefix}/notebooks/{notebookId}/{projectId}/deploy/schedules/{scheduleId}',
      getAllSchedules: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules/all',
      getSchedule: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules/{scheduleId}',
      getScheduleForArtifact: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules',
      getScheduleForProject: '{entryPrefix}/notebooks/{projectId}/schedules',
      getScheduledVersionForNotebook: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules/filter/byVersion',
      deleteSchedule: '{entryPrefix}/notebooks/{notebookId}/schedules/delete/{scheduleId}',
      deleteAllSchedules: '{entryPrefix}/notebooks/{notebookId}/schedules/delete/all',
      pauseSchedule: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules/pause/{scheduleId}',
      resumeSchedule: '{entryPrefix}/notebooks/{notebookId}/{projectId}/schedules/resume/{scheduleId}',
      getEndpointInfo: '{entryPrefix}/notebooks/schedules/endpoint',
      getExecutionsForCronExpression: '{entryPrefix}/notebooks/schedules/executions'
      //jscs:enable maximumLineLength
    },

    // ---------------------------------------------------------------------------
    // Private Helper Functions
    // ---------------------------------------------------------------------------

    _getScheduleURL = function (options) {
      var

      urlFragmentKey = options.fragmentIdentifier,
      urlFragement = URL_FRAGMENTS[urlFragmentKey],
      interpolatedUrlFragment = urlFragement.replace(/{[^{}]+}/g, function (key) {
        return options[key.replace(/[{}]+/g, '')] || '';
      });

      return interpolatedUrlFragment;
    };

    model = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',
      /**
       * @memberof SchedulingModel
       */
      getEndpointInformation: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getEndpointInfo',
            entryPrefix: options.entryPrefix
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getExecutionsForCronExpression: function (options) {
        return $.ajax({
          type: 'POST',
          beforeSend: function (xhr) {
            if (options.localized) {
              xhr.setRequestHeader('X-CLIENT-TZ', dateTime.getTimezoneInformation());
            }
          },
          url: _getScheduleURL({
            fragmentIdentifier: 'getExecutionsForCronExpression',
            entryPrefix: options.entryPrefix
          }),
          data: {
            currentDate: options.currentDate || '',
            endDate: options.endDate || '',
            occurrences: options.occurrences || '',
            expression: options.expression
          }
        });
      },
      /**
       * @memberof SchedulingModel
       */
      sendScheduleData: function (options, data) {
        if (options.scheduleId) {
          return model.updateSchedule(options, data);
        } else {
          return model.createSchedule(options, data);
        }
      },
      /**
       * @memberof SchedulingModel
       */
      createSchedule: function (options, data) {
        return $.ajax({
          type: 'POST',
          url: _getScheduleURL({
            fragmentIdentifier: 'createScheduleForPartial',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          }),
          data: data
        });
      },
      /**
       * @memberof SchedulingModel
       */
      updateSchedule: function (options, data) {
        return $.ajax({
          type: 'PUT',
          url: _getScheduleURL({
            fragmentIdentifier: 'updateScheduleForPartial',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          }),
          data: data
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getSchedule: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getSchedule',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getSchedules: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getScheduleForArtifact',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getSchedulesForProject: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getScheduleForProject',
            entryPrefix: options.entryPrefix,
            projectId: options.projectId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getScheduledVersionForNotebook: function (options) {
        return $.ajax({
          type: 'GET',
          beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CLIENT-TZ', dateTime.getTimezoneInformation());
          },
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getScheduledVersionForNotebook',
            entryPrefix: options.entryPrefix,
            projectId: options.projectId,
            notebookId: options.notebookId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getAllSchedules: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'getAllSchedules',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      pauseSchedule: function (options) {
        return $.ajax({
          type: 'PUT',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'pauseSchedule',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      resumeSchedule: function (options) {
        return $.ajax({
          type: 'PUT',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'resumeSchedule',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      deleteSchedule: function (options) {
        return $.ajax({
          type: 'DELETE',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'deleteSchedule',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            scheduleId: options.scheduleId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      deleteAllSchedules: function (options) {
        return $.ajax({
          type: 'DELETE',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'deleteAllSchedules',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getExecutionInfo: function (options) {
        return $.ajax({
          type: 'GET',
          cache: false,
          url: _getScheduleURL({
            fragmentIdentifier: 'executionInfo',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookVersion || options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId
          })
        });
      },
      /**
       * @memberof SchedulingModel
       */
      getSchedulingDialogContents: function (options) {
        return $.ajax({
          type: 'GET',
          beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CLIENT-TZ', dateTime.getTimezoneInformation());
          },
          url: _getScheduleURL({
            fragmentIdentifier: options.scheduleId ? 'updateScheduleDialog' : 'createScheduleDialog',
            entryPrefix: options.entryPrefix,
            notebookId: options.notebookId,
            projectId: options.projectId,
            scheduleId: options.scheduleId,
          })
        });
      }
    };

    return model;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['jquery'],
      ['./schedulingDateTime'],
      schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
      require('jquery'),
      require('./schedulingDateTime')
    );
  } else {
    window.schedulingModel = schedulingFactory(jQuery, window.schedulingDateTime);
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.NotebookModel = (function ($) {
  'use strict';

  var

  _entryPrefix,

  // ------------------------------------------------------------------------------------
  // URLs
  // ------------------------------------------------------------------------------------

  _appendQueryParameters = function (url, qs) {
    var queryParamString = $.param(qs);
    return url + (queryParamString ? '?' + queryParamString : '');
  },

  _getNotebookEditUrl = function (notebookId, qs) {
    var url = _entryPrefix + '/notebooks/' + notebookId;
    return _appendQueryParameters(url, qs);
  },

  _getNotebookPreviewUrl = function (notebookId, qs) {
    var url = _entryPrefix + '/notebooks/' + notebookId + '/view';
    return _appendQueryParameters(url, qs);
  },

  _init = function (params) {
    _entryPrefix = params.entryPrefix;
  };

  return {
    init: _init,
    getNotebookEditUrl: _getNotebookEditUrl,
    getNotebookPreviewUrl: _getNotebookPreviewUrl
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.NotebookLockModel = (function ($) {
  'use strict';

  var

  // ------------------------------------------------------------------------------------
  // URLs
  // ------------------------------------------------------------------------------------

  _getNotebookLockUrl = function (notebookId) {
    return '/analytics/notebooks/' + notebookId + '/lock';
  },

  // ------------------------------------------------------------------------------------
  // Promises
  // ------------------------------------------------------------------------------------

  _getLockInfoForNotebook = function (notebookId) {
    return $.ajax({
      url: _getNotebookLockUrl(notebookId),
      method: 'GET',
      cache: false
    });
  },

  _lockNotebook = function (notebookId) {
    return $.ajax({
      url: _getNotebookLockUrl(notebookId),
      method: 'POST',
      cache: false
    });
  },

  _unlockNotebook = function (notebookId) {
    return $.ajax({
      url: _getNotebookLockUrl(notebookId),
      method: 'DELETE',
      cache: false
    });
  };

  return {
    getLockInfoForNotebook: _getLockInfoForNotebook,
    lockNotebook: _lockNotebook,
    unlockNotebook: _unlockNotebook
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.PaletteNotebookInfoTab = (function ($) {
  'use strict';

  var

  _wnd = window,
  _con = _wnd.console,

  _title = $('title'),
  _notebookTitleField = $('#notebookTitle'),
  _notebookDescriptionField = $('#notebookDescription'),
  _notebookTrustedCheck = $('#paletteTrustedCheck'),

  _timeoutHandle = null,
  _currentDelay = 2000,
  _startDelay = 2000,
  _userNotificationDuration = 5000,

  _persisted = {
    title: _notebookTitleField.text(),
    description: _notebookDescriptionField.text()
  },

  // ------------------------------------------------------------------------------------
  // Getters / Setters
  // ------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------
  // Updates
  // ------------------------------------------------------------------------------------

  _updateTrustedInfo = function (trusted) {
    var failureMessage = 'Trusted Value could not be updated';
    var promise = CDSXAX.NotebookInfoPaletteTabModel.updateTrustedInfo(trusted);
    promise.then(updateTrustSucceeded, updateTrustFailed);
    return promise;

    function updateTrustSucceeded() {
      _con.log('trust update success');
    }
    function updateTrustFailed() {
      CDSXAX.Dialog.showAlertMessage(failureMessage);
    }
  },

  _updateTitleAndDescription = function (nextTitle, nextDescription) {
    var //successMessage = 'Title and description have been saved',
      failureMessage = 'Title and description could not be updated',
      promise;

    function setChanged() {
      _notebookTitleField.addClass('textBoxUpdate');
      _notebookDescriptionField.addClass('textAreaUpdate');
    }

    function setBack() {
      _notebookTitleField.removeClass('textBoxUpdate');
      _notebookDescriptionField.removeClass('textAreaUpdate');
    }

    /**
     *  Update DOM and show message unless the user continued to type...
     *  Assumption if it succeeded once it will succeed always.
     */
    function updateSucceeded() {
      _persisted.title = nextTitle;
      _persisted.description = nextDescription;
      _title.text(nextTitle + ' - IBM Data Science Experience');
      CDSXAX.NotebookCtrl.setDisplayedNotebookTitle(nextTitle);
      if (nextTitle === _notebookTitleField.val() && nextDescription === _notebookDescriptionField.val()) {

        //Segment tracking
        //trigger an event regarding the change in the title or desciption of a notebook
        _sendSegmentEvent('triggerUpdateNotebookInfoEvent', {
          notebookId: CDSXAX.NotebookCtrl.getNotebookId()
        });

        setChanged();
        setTimeout(setBack, _userNotificationDuration);
      }
    }

    /**
     * Reset DOM and show message in case the user did not continue to type.
     * Assumption if it failed once it will always fail.
     */
    function updateFailed() {
      // Only reset fields if user did not continue to type in the meantime
      var resetOccurred = false,
        currentTitle = _notebookTitleField.val(),
        currentDescription = _notebookDescriptionField.val();

      if (nextTitle === currentTitle && currentTitle !== _persisted.title) {
        _notebookTitleField.val(_persisted.title);
        resetOccurred = true;
      }
      if (nextDescription === currentDescription && currentDescription !==
        _persisted.description) {
        _notebookDescriptionField.val(_persisted.description);
        resetOccurred = true;
      }
      if (resetOccurred) {
        CDSXAX.Dialog.showAlertMessage(failureMessage);
      }
    }

    _con.log('About to update notebook');
    if (nextTitle === _persisted.title && nextDescription === _persisted.description) {
      _con.log('Title and description are already up to date');
      return $.when('Update not necessary');
    } else {
      promise = CDSXAX.NotebookInfoPaletteTabModel.updateNotebookMetadata(nextTitle, nextDescription);
      promise.then(updateSucceeded, updateFailed);
      return promise;
    }
  },

  _updateTitleAndDescriptionWithCurrentFieldValues = function () {
    _updateTitleAndDescription(_notebookTitleField.val(), _notebookDescriptionField.val());
  },

  // ------------------------------------------------------------------------------------
  // Tabs
  // ------------------------------------------------------------------------------------

  _toggleTabs = function (tabListItemId) {
    if (tabListItemId === 'notebookInfoPalette_tabListItem_General') {
      $('#notebookInfoPalette_tabGeneralContent').show();
      $('#notebookInfoPalette_tabEnvironmentContent').hide();

      $('#notebookInfoPalette_tabListItem_General').addClass('infoTabListItemActive');
      $('#notebookInfoPalette_tabListItem_Environment').removeClass('infoTabListItemActive');
    } else {
      $('#notebookInfoPalette_tabGeneralContent').hide();
      $('#notebookInfoPalette_tabEnvironmentContent').show();

      $('#notebookInfoPalette_tabListItem_General').removeClass('infoTabListItemActive');
      $('#notebookInfoPalette_tabListItem_Environment').addClass('infoTabListItemActive');

      if (CDSXAX.NotebookCtrl.getKernel()) {
        _con.log('Kernel: ' + CDSXAX.NotebookCtrl.getKernel());
        CDSXAX.PaletteEnvironmentTab.showEnvironmentInfoTab(
          CDSXAX.NotebookCtrl.getSparkServiceId(),
          CDSXAX.NotebookCtrl.getKernel()
        );
      } else {
        _con.log('Kernel info not present.');
        CDSXAX.PaletteEnvironmentTab.showEnvironmentInfoTab(
          CDSXAX.NotebookCtrl.getSparkServiceId(),
          CDSXAX.NotebookCtrl.getLanguage()
        );
      }
    }
  },

  // ------------------------------------------------------------------------------------
  // Misc
  // ------------------------------------------------------------------------------------

  _formatTimeStamps = function () {
    // Last updated
    if (Boolean($('#data').data('last-updated'))) {
      $('#palette_infoLastModifiedLabel').text(
        CDSXAX.CommonCtrl.getFormattedTimestamp(
          $('#data').data('last-updated')
        )
      );
    }
    // Created
    if (Boolean($('#data').data('created'))) {
      $('#palette_infoCreationDateLabel').text(
        CDSXAX.CommonCtrl.getFormattedTimestamp(
          $('#data').data('created')
        )
      );
    }
  },

  // ------------------------------------------------------------------------------------
  // Event handlers
  // ------------------------------------------------------------------------------------

  _onTitleDescriptionChanged = function () {
    // After _startDelay/(1-0.95) = 40 seconds, the save will be triggered for the first time
    if (_timeoutHandle !== null) {
      _wnd.clearTimeout(_timeoutHandle);
      _timeoutHandle = null;
      _currentDelay = Math.floor(0.95 * _currentDelay);
    }
    _timeoutHandle = _wnd.setTimeout(function () {
      _timeoutHandle = null;
      _currentDelay = _startDelay;
      _updateTitleAndDescriptionWithCurrentFieldValues();
    }, _currentDelay);
  },

  _onTrustedCheckChange = function () {
    if ($(this).is(':checked')) {
      _updateTrustedInfo(true);
    } else {
      _updateTrustedInfo(false);
    }
  },

  _onNotebookDescriptionKeyup = function () {
    var maxLength = $('#notebookDescription').attr('maxlength');
    var currentlength = maxLength - $(this).val().length;
    $('#descriptionLength').text(currentlength);
  },

  _onTabClick = function () {
    var clickedTab = $(this).attr('id');
    _toggleTabs(clickedTab);
  },

  /**
   * Wrapper around the segment instrumentation plug-in for notebooks
   *
   * @param {String} eventHandler - the name of the event to be triggered
   * @param {Object} eventProperties - the properties to be sent to segment
   */
  _sendSegmentEvent = function (eventHandler, eventProperties) {
    if (window.apsx.metrics.segmentWrapper) {
      window.apsx.metrics.segmentWrapper.triggerSegmentEventForFeature(
        window.apsx.metrics.segmentWrapper.NOTEBOOK_PLUGIN_NAME,
        eventHandler,
        eventProperties
      );
    }
  },

  // ------------------------------------------------------------------------------------
  // Initialization
  // ------------------------------------------------------------------------------------

  _setupEventHandlersBeforeContentIsLoaded = function () {
    _notebookDescriptionField.on('keyup change', _onTitleDescriptionChanged);
    _notebookDescriptionField.keyup(_onNotebookDescriptionKeyup);
    _notebookTitleField.on('keyup change', _onTitleDescriptionChanged);
    _notebookTrustedCheck.change(_onTrustedCheckChange);
    $('#notebookInfoPalette_tabListItem_General').on('click', _onTabClick);
    $('#notebookInfoPalette_tabListItem_Environment').on('click', _onTabClick);
  },

  _init = function () {
    _setupEventHandlersBeforeContentIsLoaded();
    var trustedflag = $('#data').data('trusted');
    if (trustedflag === true) {
      $('#paletteTrustedCheck').prop('checked', true);
    }
    _toggleTabs('notebookInfoPalette_tabListItem_General');
    _formatTimeStamps();
  };

  _init();

  return {
    updateTitleAndDescriptionWithCurrentFieldValues: _updateTitleAndDescriptionWithCurrentFieldValues
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.NotebookInfoPaletteTabModel = (function ($) {
  'use strict';

  var

  _wnd = window,

  // ------------------------------------------------------------------------------------
  // URLs
  // ------------------------------------------------------------------------------------

  _getNotebookEditURL = function () {
    return _wnd.location.pathname;
  },

  _getUpdateTrustedInfoURL = function () {
    return _getNotebookEditURL();
  },

  _getUpdateNotebookMetadataURL = function () {
    return _getNotebookEditURL();
  },

  // ------------------------------------------------------------------------------------
  // Promises
  // ------------------------------------------------------------------------------------

  _updateTrustedInfo = function (trusted) {
    return $.ajax({
      url: _getUpdateTrustedInfoURL() + '/trust',
      method: 'PUT',
      data: {
        trusted: trusted
      }
    });
  },

  _updateNotebookMetadata = function (nextTitle, nextDescription) {
    return $.ajax({
      url: _getUpdateNotebookMetadataURL(),
      method: 'PUT',
      data: {
        'title': nextTitle,
        'description': nextDescription
      }
    });
  };

  return {
    updateTrustedInfo: _updateTrustedInfo,
    updateNotebookMetadata: _updateNotebookMetadata
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.PaletteCommentsTab = (function ($) {
  'use strict';

  var

  _con = window.console,
  _location = window.location,
  _notebookId,
  _notebookTitle,
  _projectId,
  _projectTitle,
  _userName,
  _userId,
  _apiPortalEndPoint,
  _tabContent = false,
  _useSocket = false,
  _editMode = false,
  _waitingMode = false,
  _baseAnchor,
  _commentsList = [],
  _textAreaOriginalHeight,
  _userNameDict = {},
  $_textAreaAnchor,
  $_postButtonAnchor,
  $_cancelButtonAnchor,
  _commentCharLimit = 10000,
  _entryEndPoint = '/analytics/notebooks',

  //------------------------------------
  //--------SETTER AND GETTERS----------
  //------------------------------------
  _isNotebookIdSet = function () {
    return !!_notebookId;
  },

  _isNotebookTitleSet = function () {
    return !!_notebookTitle;
  },

  _isProjectIdSet = function () {
    return !!_projectId;
  },

  _isProjectTitleSet = function () {
    return !!_projectTitle;
  },

  _setNotebookId = function (notebookId) {
    _notebookId = notebookId;
  },

  _setNotebookTitle = function (notebookTitle) {
    _notebookTitle = notebookTitle;
  },

  _setProjectId = function (projectId) {
    _projectId = projectId;
  },

  _setProjectTitle = function (projectTitle) {
    _projectTitle = projectTitle;
  },

  _getNotebookId = function () {
    if (!_isNotebookIdSet()) {
      _con.error('Comments: notebookId is not defined!');
      return '';
    }
    return _notebookId;
  },

  _getNotebookTitle = function () {
    if (!_isNotebookTitleSet()) {
      _con.error('Comments: notebookTitle is not defined!');
      return '';
    }
    return _notebookTitle;
  },

  _getProjectId = function () {
    if (!_isProjectIdSet()) {
      _con.warn('Comments: projectId is not defined!');
      return '';
    }
    return _projectId;
  },

  _getProjectTitle = function () {
    if (!_isProjectTitleSet()) {
      _con.warn('Comments: projectTitle is not defined!');
      return '';
    }
    return _projectTitle;
  },

  _setUserName = function (userName) {
    _userName = userName;
  },

  _getUserName = function () {
    return _userName;
  },

  _setUserId = function (userId) {
    _userId = userId;
  },

  _getApiPortal = function () {
    return _apiPortalEndPoint;
  },

  _setApiPortal = function (apiPortal) {
    _apiPortalEndPoint = apiPortal;
  },

  _setBaseAnchor = function (baseAnchorId) {
    _baseAnchor = $('#' + baseAnchorId);
  },

  _isBaseAnchorSet = function () {
    if (!_baseAnchor || !_baseAnchor.length) {
      return false;
    }
    return true;
  },

  _getBaseAnchor = function () {
    return _baseAnchor;
  },

  _setUseSocket = function (useSocket) {
    _useSocket = useSocket;
  },

  _isSocketReady = function () {
    return _useSocket;
  },

  _isWaitingMode = function () {
    return _waitingMode;
  },

  _setWaitingMode = function (waitingModeState) {
    _waitingMode = waitingModeState;
  },

  _isEditMode = function () {
    return _editMode;
  },

  _setEditMode = function (editMode) {
    _editMode = editMode;
  },

  _isTabContentLoaded = function () {
    return _tabContent;
  },

  _setTabContentLoaded = function (isLoaded) {
    _tabContent = isLoaded;
  },

  _setUserNameDict = function (userNameDict) {
    _userNameDict = userNameDict;
  },

  _getUserNameFromDict = function (userId) {
    if (userId && (typeof userId === 'string')) {
      return _userNameDict[userId.toLowerCase()];
    }
    return '';
  },

  _addEntryToUserNameDictionary = function (userId, displayName) {
    if (userId && (typeof userId === 'string')) {
      _userNameDict[userId] = displayName;
    }
  },

  _setTextAreaAnchor = function () {
    $_textAreaAnchor = $('#commentInputTextId');
  },

  _getTextAreaAnchor = function () {
    if (!$_textAreaAnchor) {
      _con.error('Text area anchor is not set!');
    }
    return $_textAreaAnchor;
  },

  _setPostButtonAnchor = function () {
    $_postButtonAnchor = $('#postButtonId');
  },

  _getPostButtonAnchor = function () {
    if (!$_postButtonAnchor) {
      _con.error('post button anchor is not set!');
    }
    return $_postButtonAnchor;
  },

  _setCancelButtonAnchor = function () {
    $_cancelButtonAnchor = $('#cancelButtonId');
  },

  _getCancelButtonAnchor = function () {
    if (!$_cancelButtonAnchor) {
      _con.error('post button anchor is not set!');
    }
    return $_cancelButtonAnchor;
  },

  _setTextAreaOriginalHeight = function () {
    _textAreaOriginalHeight = _getTextAreaAnchor().height();
  },

  _getTextAreaOriginalHeight = function () {
    return _textAreaOriginalHeight;
  },

  //comment
  _setCommentsList = function (comments) {
    if (Array.isArray(comments)) {
      _commentsList = comments;
    }
    _enhanceCommentsList();
  },

  _getCommentsList = function () {
    return _commentsList;
  },

  _checkExists = function (newComment) {
    return _getCommentsList().some(function (comment) {
      return (newComment.metadata.guid.toLowerCase() === comment.metadata.guid.toLowerCase());
    });
  },

  _findCommentForEditing = function (newComment) {
    return _getCommentsList().find(function (comment) {
      return (newComment.metadata.guid.toLowerCase() === comment.metadata.guid.toLowerCase());
    });
  },

  // returns 0 if comment was not found in the cached list
  //         1 if the comment was found and the update date matches also (identical comment)
  //         2 if the comment was found but the update date doesn't match
  _checkCommentStatusForEditing = function (newComment) {
    var currentComment = _findCommentForEditing(newComment);
    if (!currentComment) {
      _con.error('Comments: Edit a Comment. Comment not found in the list!');
      return 0;
    }

    if (newComment.metadata.updated_at === currentComment.metadata.updated_at) {
      return 1;
    }
    return 2;
  },

  _insertCommentElementIntoList = function (comment, index) {
    if (typeof index !== 'undefined') {
      _commentsList.splice(index, 0, comment);
    } else {
      _commentsList.push(comment);
    }
  },

  _isEmptyCommentsList = function () {
    return (_commentsList.length ? false : true);
  },

  _addCommentElemIntoList = function (comment) {
    if (_isEmptyCommentsList()) {
      _insertCommentElementIntoList(comment);
    } else {
      var newCommentCreationTime = new Date(comment.metadata.created_at);
      _commentsList.some(function (currentComment, index) {
        var currentCommentCreationTime = new Date(currentComment.metadata.created_at);
        if (newCommentCreationTime >= currentCommentCreationTime) {
          _insertCommentElementIntoList(comment, index);
          return true;
        }
      });
    }
    _enhanceCommentsList();
  },

  _deleteCommentFromList = function (data) {
    _commentsList.some(function (comment, index) {
      if (comment.metadata.guid.toLowerCase() === data.metadata.guid.toLowerCase()) {
        _commentsList.splice(index, 1);
        return true;
      }
    });

    _enhanceCommentsList();
  },

  _setEditModeToComment = function (commentId) {
    if (_isEmptyCommentsList()) {
      return;
    }

    return _commentsList.some(function (currentComment) {
      if (commentId.toLowerCase() === currentComment.metadata.guid.toLowerCase()) {
        currentComment.editMode = true;
        return true;
      }
    });
  },

  _removeEditModeForComment = function (commentId) {
    if (_isEmptyCommentsList()) {
      return;
    }

    return _commentsList.some(function (currentComment) {
      if (commentId.toLowerCase() === currentComment.metadata.guid.toLowerCase()) {
        delete currentComment.editMode;
        return true;
      }
    });
  },

  _addModifiedCommentIntoList = function (modifiedComment) {
    if (_isEmptyCommentsList()) {
      return;
    }

    _commentsList.some(function (currentComment, index) {
      if (modifiedComment.metadata.guid.toLowerCase() === currentComment.metadata.guid.toLowerCase()) {
        _commentsList.splice(index, 1, modifiedComment);
        return true;
      }
    });

    _enhanceCommentsList();
  },

  _getUserDisplayNameFromAccount = function (account) {
    if (account &&
        Array.isArray(account.resources) &&
        (account.resources.length > 0) &&
        account.resources[0].entity &&
        account.resources[0].entity.display_name) {
      return account.resources[0].entity.display_name;
    }
    return '';
  },

  _accountsSuccessCallbackHandler = function (callback) {
    return function (account) {
      callback(_getUserDisplayNameFromAccount(account));
    };
  },

  _accountsFailureCallbackHandler = function (callback) {
    return function () {
      _con.log('fetching user display name failed! using username instead...');
      callback(null);
    };
  },

  _fetchUserDisplayName = function (userName, callback) {
    CDSXAX.CommentsHandler.fetchUserAccounts(_entryEndPoint, [userName])
      .done(_accountsSuccessCallbackHandler(callback))
      .fail(_accountsFailureCallbackHandler(callback));
  },

  _updateCommentUserDisplayName = function (data, callback) {
    if (data &&
        data.entity &&
        data.entity.author &&
        data.entity.author.username) {
      var commentUserName = data.entity.author.username.toLowerCase();
      var commentUserDisplayName = _getUserNameFromDict(commentUserName);
      if (!commentUserDisplayName) {
        _fetchUserDisplayName(commentUserName, function (displayName) {
          if (displayName) {
            data.entity.author.display_name = displayName;
            _addEntryToUserNameDictionary(commentUserName, displayName);
          } else {
            data.entity.author.display_name = data.entity.author.username;
          }
          callback();
        });
        return;
      }

      data.entity.author.display_name = commentUserDisplayName;
    }
    callback();
  },

  //------------------------------------
  //---------PAGE EVENTS HANDLERS-------
  //------------------------------------
  _callEventHandler = function (callback) {
    return function () {
      callback($(this));
    };
  },

  _showSpinner = function () {
    var $spinner = $('#spinnerAnchor');
    //check if exists and the common module is there
    if ($spinner.length && CDSXAX.CommonCtrl) {
      CDSXAX.CommonCtrl.showAreaSpinnerFor($spinner, true);
    }
  },

  _setTextAreaOriginalSize = function () {
    _getTextAreaAnchor().height(_getTextAreaOriginalHeight());
  },

  _emptyTextArea = function () {
    _getTextAreaAnchor().val('');
    _setTextAreaOriginalSize();
  },

  _showCommentButtons = function () {
    $('#buttonsBarId').removeClass('buttonBarHiddenState');
  },

  _hideCommentButtons = function () {
    $('#buttonsBarId').addClass('buttonBarHiddenState');
  },

  _setPostButtonState = function ($postButton, validState) {
    if ($postButton && $postButton.length) {
      $postButton.attr('disabled', !validState);
    }
  },

  _validatePostButton = function () {
    var $textAnchor = _getTextAreaAnchor();
    var $postButton = _getPostButtonAnchor();
    if ($textAnchor && $textAnchor.length &&
        $postButton && $postButton.length) {
      _setPostButtonState($postButton, _checkValidState($textAnchor));
    }
  },

  _validateEditPostButton = function ($elem) {
    if ($elem && ($elem.length === 1)) {
      var $editPostButton = $elem.siblings('.buttonsBar').find('.editPostButton');
      if ($editPostButton && $editPostButton.length) {
        _setPostButtonState($editPostButton, _checkValidState($elem));
      }
    }
  },

  _refreshPage = function () {
    _location.reload(true);
  },

  _setupDisconnectionState = function () {
    var $refreshButton = $('#refreshButton');
    if ($refreshButton.length) {
      $refreshButton.on('click', _refreshPage);
    }
  },

  _updateEditTextAreaProps = function ($elem) {
    _validateEditPostButton($elem);
    _adaptHeight($elem);
  },

  _adaptHeight = function ($elem) {
    var content = $elem.val();
    var $connectedHiddenDiv = $elem.siblings('.hiddenDiv');
    $connectedHiddenDiv.css('width', $elem.width()).text(content + '\n\n');
    $elem.css('height', $connectedHiddenDiv.height());
  },

  _setSelectedComment = function ($elem) {
    if ((_cleanUpUserNameForMatching($elem.attr('userid')) === _cleanUpUserNameForMatching(_getUserName())) &&
        !_isEditMode() && !_isWaitingMode()) {
      $elem.addClass('selectedComment');
    }
  },

  _unSetSelectedComment = function ($elem) {
    $elem.removeClass('selectedComment');
  },

  _deleteEventHandler = function ($elem) {
    if (CDSXAX.Dialog && CDSXAX.Dialog.showConfirmationDialog) {
      CDSXAX.Dialog.showConfirmationDialog(
        'Delete Comment',
        'Are you sure you want to delete this comment?',
        'delete',
        'cancel',
        function (remove) {
          if (remove) {
            _deleteComment($elem);
          }
        }
      );
    } else {
      _deleteComment($elem);
    }
  },

  _deleteComment = function ($elem) {
    var cguid = _getCommentGuid($elem);
    if (cguid) {
      var data = {};
      data.metadata = {
        guid: cguid
      };

      _setWaitingMode(true);
      CDSXAX.CommentsHandler.deleteComment(_entryEndPoint, _getNotebookId(), cguid)
        .done(_callbackDecisionHandler(_deleteCommentReceivedHandler, data))
        .fail(_commentsOperationErrorHandler('failed to delete a comment!'))
        .always(_releaseWaitingMode);
    }
  },

  _editEventHandler = function ($elem) {
    var cguid = _getCommentGuid($elem);
    _setEditModeToComment(cguid);
    _rerenderCommentsList();
    _setEditMode(true);
  },

  _editComment = function (cguid, newText) {
    _setWaitingMode(true);
    CDSXAX.CommentsHandler.editComment(_entryEndPoint, _getNotebookId(), cguid, newText)
      .done(_callbackDecisionHandler(_editCommentReceivedHandler))
      .fail(_commentsOperationErrorHandler('failed to edit a comment!'))
      .always(_releaseWaitingMode);
  },

  _addNewComment = function () {
    var text = _getTextAreaAnchor().val();
    if (_checkValidInputText(text)) {
      _setWaitingMode(true);

      var props = {
        notebookId: _getNotebookId(),
        notebookTitle: _getNotebookTitle(),
        projectId: _getProjectId(),
        projectTitle: _getProjectTitle()
      };

      CDSXAX.CommentsHandler.addComment(_entryEndPoint, props, text)
        .done(_callbackDecisionHandler(_newCommentReceivedHandler))
        .fail(_commentsOperationErrorHandler('failed to add a comment!'))
        .always(_releaseWaitingMode);

      _emptyTextArea();
    } else {
      var alertMessage = 'Comment character limit is 10000!';
      _con.warn('Comments: Invalid user input! ' + alertMessage);
      _showAlertMessage(alertMessage);
    }
  },

  _editCommonButtonClickHandler = function (cguid) {
    _removeEditModeForComment(cguid);
    _rerenderCommentsList();
  },

  _editCancelHandler = function ($elem) {
    _editCommonButtonClickHandler(_getCommentGuid($elem));
  },

  _editPosthandler = function ($elem) {
    var cguid = _getCommentGuid($elem);
    var newText = _getCorrelatedTextareaContent($elem);
    if (_checkValidInputText(newText)) {
      _editComment(cguid, newText);
      _editCommonButtonClickHandler(cguid);
    } else {
      var alertMessage = 'Comment character limit is 10000!';
      _con.warn('Comments: Invalid user input! ' + alertMessage);
      _showAlertMessage(alertMessage);
    }
  },

  _setupAnchors = function () {
    _setTextAreaAnchor();
    _setPostButtonAnchor();
    _setCancelButtonAnchor();
    _setTextAreaOriginalHeight();
  },

  _setupPageEventsHandlers = function () {
    _setupAnchors();
    _getTextAreaAnchor().on('focus', _showCommentButtons);
    _getTextAreaAnchor().on('blur', _hideCommentButtons);
    _getTextAreaAnchor().on('keyup', _callEventHandler(_adaptHeight));
    _getTextAreaAnchor().on('focus keyup', _validatePostButton);
    _getPostButtonAnchor().on('mousedown', _addNewComment);
    _getCancelButtonAnchor().on('mousedown', _emptyTextArea);
  },

  _setupCommentsSpecificPageEvents = function () {
    $('.commentWrapper').on('mouseenter mouseover', _callEventHandler(_setSelectedComment));
    $('.commentWrapper').on('mouseleave', _callEventHandler(_unSetSelectedComment));
    $('.deleteCommentIcon').on('click', _callEventHandler(_deleteEventHandler));
    $('.editCommentIcon').on('click', _callEventHandler(_editEventHandler));
    $('.commentEditTextArea').on('keyup', _callEventHandler(_updateEditTextAreaProps));
    $('.editCancelButton').on('click', _callEventHandler(_editCancelHandler));
    $('.editPostButton').on('click', _callEventHandler(_editPosthandler));
    _updateEditTextAreaProps($('.commentEditTextArea'));
  },

  //------------------------------------
  //--------COMMON FUNCTIONS------------
  //------------------------------------
  _createCommentsListContext = function () {
    var context = {};
    context.apiPortal = _getApiPortal();
    context.commentsList = _getCommentsList();
    if (_getCommentsList().length === 0) {
      context.noComments = true;
    }
    return context;
  },

  _releaseWaitingMode = function () {
    _setWaitingMode(false);
  },

  _callbackDecisionHandler = function (responseHandler, additionalData) {
    return function (data) {
      // Previous implementation was to check for an active socket
      // i.e. if (!CDSXAX.CommentsHandler.isSocketActive()) ...
      // now we will update directly and check when a socket event comes if the
      // the action is done by my user and ignore if so
      if (data) {
        responseHandler(data);
      } else if (additionalData) {
        responseHandler(additionalData);
      } else {
        _con.log('Comments: unexpected data format returned!');
      }
    };
  },

  _commentsOperationErrorHandler = function (errMessage) {
    return function (jqXHR) {
      if (jqXHR && jqXHR.status) {
        if (jqXHR.status === 401) {
          //token probably has expired

          //log console statement
          _con.error('Comments: Not authorized! ' + errMessage);
          //rerender the tab to show the UI which contain a refresh page
          _renderCommentsTabContent();
          return;
        } else if (jqXHR.status === 400) {
          //input param is invalid or bad request

          //log console statement
          _con.error('Comments: Invalid input (text)! ' + errMessage);
          return;
        } else if (jqXHR.status === 408) {
          //request timeout

          //log console statement
          _con.error('Comments: Request timeout! ' + errMessage);
          //rerender the tab to show the UI which contain a refresh page
          _showAlertMessage(errMessage);
          return;
        }
      }

      //dump console statement
      _con.error('Comments: Something went wrong! ' + errMessage);
      //show UI warning message
      _showAlertMessage(errMessage);
    };
  },

  _commentsMainErrorHandler = function (errMessage) {
    return function (jqXHR) {
      var alertMessage = 'Comments: Something went wrong! ' + errMessage;
      if (jqXHR && jqXHR.status) {
        if (jqXHR.status === 401) {
          //token probably has expired
          alertMessage = 'Comments: Not authorized! probably token has expired! ' + errMessage;
        } else if (jqXHR.status === 408) {
          alertMessage = 'Comments: Request timeout! ' + errMessage;
        }
      }

      //dump console statement
      _con.error(alertMessage);
      //show UI warning message
      _renderCommentsTabContent(true);
    };
  },

  //------------------------------------
  //--------CLIENT SIDE RENDERING-------
  //------------------------------------
  _renderDustTemplate = function (template, context, callback) {
    dust.render(template, context, callback);
  },

  _renderCommentsTabContent = function (disconnected) {
    var context = {
      userName: _getUserName(),
      apiPortal: _getApiPortal(),
      waitingMode: !_isSocketReady()
    };

    if (disconnected) {
      context.disconnectMode = true;
    }

    _renderDustTemplate('base_comments', context, function (err, markup) {
      if (!_isBaseAnchorSet()) {
        _con.warn('Base anchor is not provided! do not know where to bind markup!!');
        return;
      }
      _getBaseAnchor().html(markup);
    });

    _showSpinner();
    if (_isSocketReady() && (!disconnected)) {
      _setupPageEventsHandlers();
      _fetchCommentsData();
    } else if (disconnected) {
      _setupDisconnectionState();
    }
  },

  _rerenderCommentsList = function () {
    _renderDustTemplate('commentsList', _createCommentsListContext(), function (err, markup) {
      var $commentsList = $('#commentsListAnchorId');
      if ($commentsList.length) {
        $commentsList.html(markup);
      }
    });
    _setupCommentsSpecificPageEvents();
    _setEditMode(false);
  },

  //------------------------------------
  //--------HELPER FUNCTIONS------------
  //------------------------------------
  _checkReceivedDataStructure = function (data) {
    if (Array.isArray(data)) {
      return !data.some(function (elem) {
        return (!elem.metadata || !elem.metadata.guid || (typeof elem.metadata.guid !== 'string'));
      });
    } else {
      return (data && data.metadata && data.metadata.guid && (typeof data.metadata.guid === 'string'));
    }
  },

  _checkReceivedEditDataStructure = function (data) {
    return (data && data.metadata && data.metadata.updated_at && (typeof data.metadata.updated_at === 'string'));
  },

  _checkValidData = function (data) {
    if (!_checkReceivedDataStructure(data)) {
      _con.error('Received data is not in the expected format!');
      return false;
    }
    return true;
  },

  _checkValidEditingData = function (data) {
    return _checkValidData(data) && _checkReceivedEditDataStructure(data);
  },

  _getCommentGuid = function ($elem) {
    var cguid = $elem.parents('.commentWrapper').attr('cguid');
    if (cguid) {
      return cguid;
    } else {
      _con.error('Comment guid is not avaiable!');
      return null;
    }
  },

  _getCorrelatedTextareaContent = function ($elem) {
    var $corrTextarea = $elem.parent().siblings('.commentEditTextArea');
    return $corrTextarea.val();
  },

  _enhanceCommentsList = function () {
    if (_isEmptyCommentsList()) {
      return;
    }
    var date;

    _getCommentsList().forEach(function (comment) {
      var newDate = new Date(comment.metadata.created_at);
      var newDateCheck = CDSXAX.CommentsTimeHandler.checkNewDate(date, newDate);
      comment.timeLineAdditionalAttributesTmp = {
        newDate: newDateCheck,
        time: CDSXAX.CommentsTimeHandler.getTime(newDate)
      };

      if (newDateCheck) {
        comment.timeLineAdditionalAttributesTmp.timeLineLabel = CDSXAX.CommentsTimeHandler.getTimeLineLabel(newDate);
      }

      date = newDate;
    });
  },

  _showAlertMessage = function (alertMessage) {
    if (CDSXAX.Dialog && CDSXAX.Dialog.showAlertMessage) {
      CDSXAX.Dialog.showAlertMessage(alertMessage);
    }
  },

  _trimInputString = function (inputText) {
    return inputText.replace(/[\s\r\n]/g, '');
  },

  _checkValidState = function ($textElem) {
    if (!$textElem || !$textElem.length) {
      return false;
    }

    // conditions to be false
    var inputText = $textElem.val();
    if (!inputText || !_trimInputString(inputText)) {
      return false;
    }

    return true;
  },

  _sendCommentSegmentEvent = function (eventHandler, eventProperties) {
    if (window.apsx.metrics.segmentWrapper) {
      window.apsx.metrics.segmentWrapper.triggerSegmentEventForFeature(
        window.apsx.metrics.segmentWrapper.COMMENTS_PLUGIN_NAME,
        eventHandler,
        eventProperties
      );
    }
  },

  _checkValidInputText = function (text) {
    return (text && (text.length <= _commentCharLimit));
  },

  _cleanUpUserNameForMatching = function (userName) {
    return userName.toLowerCase().replace(/\s/g, '');
  },

  //------------------------------------
  //-----SOCKET CALLBACK HANDLERS-------
  //------------------------------------
  _getAllCommentsHandler = function (data) {
    if (_checkValidData(data.resources)) {
      _setUserNameDict(data.userNameDictionary || {});
      _setCommentsList(data.resources);
      if (!_isEditMode()) {
        _rerenderCommentsList();
      }
    }
  },

  _newCommentReceivedHandler = function (data) {
    if (!_checkValidData(data)) {
      _con.error('Comments: Add New Comment, invalid data received!');
      return;
    }

    _updateCommentUserDisplayName(data, function () {
      if (!_checkExists(data)) {
        _con.log('Comments: adding a new comment...');
        //send segment New Comment event
        _sendCommentSegmentEvent('triggerAddNewCommentEvent', {
          notebookId: _getNotebookId(),
          commentId: ((data && data.metadata && data.metadata.guid) ? data.metadata.guid : '')
        });

        _addCommentElemIntoList(data);
        if (!_isEditMode()) {
          _rerenderCommentsList();
        }
      }
    });
  },

  _deleteCommentReceivedHandler = function (data) {
    if (!_checkValidData(data)) {
      _con.error('Comments: Delete a Comment, invalid data received!');
      return;
    }

    if (_checkExists(data)) {
      _con.log('Comments: deleting comment...');
      //send segment Delete Comment event
      _sendCommentSegmentEvent('triggerDeleteCommentEvent', {
        notebookId: _getNotebookId(),
        commentId: ((data && data.metadata && data.metadata.guid) ? data.metadata.guid : '')
      });

      _deleteCommentFromList(data);
      if (!_isEditMode()) {
        _rerenderCommentsList();
      }
    }
  },

  _editCommentReceivedHandler = function (data) {
    if (!_checkValidEditingData(data)) {
      _con.error('Comments: Edit a Comment, invalid data received!');
      return;
    }

    _updateCommentUserDisplayName(data, function () {
      if (_checkCommentStatusForEditing(data) === 2) {
        _con.log('Comments: Editing comment...');
        //send segment Edit Comment event
        _sendCommentSegmentEvent('triggerEditCommentEvent', {
          notebookId: _getNotebookId(),
          commentId: ((data && data.metadata && data.metadata.guid) ? data.metadata.guid : '')
        });

        _addModifiedCommentIntoList(data);
        if (!_isEditMode()) {
          _rerenderCommentsList();
        }
      }
    });
  },

  //------------------------------------
  //--------INIT AND LAZY FETCH---------
  //------------------------------------
  _initSocketHandler = function (socket) {
    var eventHandlers = {
      getAllCommentsHandler: _getAllCommentsHandler,
      newCommentHandler: _newCommentReceivedHandler,
      deleteCommentHandler: _deleteCommentReceivedHandler,
      editCommentHandler: _editCommentReceivedHandler
    };
    CDSXAX.CommentsHandler.init(socket, eventHandlers, function (err) {
      if (err) {
        _con.error('Socket error: Error registering listening events.');
      }
    });
  },

  _fetchCommentsData = function () {
    CDSXAX.CommentsHandler.getAllComments(_entryEndPoint, _getNotebookId())
    .done(_getAllCommentsHandler)
    .fail(_commentsMainErrorHandler('failed to fetch comments list! '));
  },

  _showTabConent = function () {
    if (!_isTabContentLoaded()) {
      _setTabContentLoaded(true);
      _renderCommentsTabContent();
    }
  },

  _showCommentTabContent = function (notebookObj, projectObj, userName, userId, apiPortalUrl, mountingAnchorId) {
    _setUserName(userName);
    _setUserId(userId);
    _setNotebookId(notebookObj.id);
    _setNotebookTitle(notebookObj.title);
    _setProjectId(projectObj.id);
    _setProjectTitle(projectObj.title);
    _setApiPortal(apiPortalUrl);
    _setBaseAnchor(mountingAnchorId);
    _showTabConent();
  },

  _useSocketCommunication = function (socket) {
    var activeBefore = _isSocketReady();
    _setUseSocket(true);
    _initSocketHandler(socket);

    if (_isTabContentLoaded() && (!activeBefore)) {
      _renderCommentsTabContent();
    }
  };

  return {
    showCommentTabContent: _showCommentTabContent,
    useSocket: _useSocketCommunication,
    updateNotebookTitle: _setNotebookTitle
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

'use strict';

var CDSXAX = CDSXAX || {};

CDSXAX.CommentsHandler = (function ($) {
  var

  _con = window.console,
  _socket,

  //------------------------------------
  //--------SETTER AND GETTERS----------
  //------------------------------------
  _setSocket = function (socket) {
    _socket = socket;
  },

  _isSocketConnected = function () {
    return !!_socket;
  },

  _isSocketActive = function () {
    return _isSocketConnected() && _getConnectedSocket().connected;
  },

  _getConnectedSocket = function () {
    return _socket;
  },

  //------------------------------------
  //--------HELPER FUNCTIONS------------
  //------------------------------------
  _getDataModuleForAddComment = function (assetId, text, notebookTitle, projectObject) {
    var module = {};
    module.assetId = assetId;
    module.text = text;
    module.notebookTitle = notebookTitle;
    module.project = {
      projectId: projectObject.id,
      projectTitle: projectObject.title
    };

    return module;
  },

  _getDataModule = function (assetId, text) {
    var module = {};
    module.assetId = assetId;
    module.text = text;
    return module;
  },

  //------------------------------------
  //--------SOCKET EMITTERS-------------
  //------------------------------------
  _emitEvent = function (socket, data) {
    socket.emit('comments-update', data);
  },

  _emitGetAllCommentsEvent = function (data) {
    if (!_isSocketConnected()) {
      _con.error('commentsHandler is not initialized or socket is not available!');
      return;
    }

    var payload = {
      data: data,
      eventType: 'all-comments'
    };
    _emitEvent(_getConnectedSocket(), payload);
  },

  _emitAddCommentEvent = function (data, roomId) {
    if (!_isSocketConnected()) {
      _con.error('commentsHandler is not initialized or socket is not available!');
      return;
    }

    var payload = {
      data: data,
      roomId: roomId,
      eventType: 'new-comment'
    };
    _emitEvent(_getConnectedSocket(), payload);
  },

  _emitDeleteCommentEvent = function (data, roomId) {
    if (!_isSocketConnected()) {
      _con.error('commentsHandler is not initialized or socket is not available!');
      return;
    }

    var payload = {
      data: data,
      roomId: roomId,
      eventType: 'delete-comment'
    };
    _emitEvent(_getConnectedSocket(), payload);
  },

  _emitEditCommentEvent = function (data, roomId) {
    if (!_isSocketConnected()) {
      _con.error('commentsHandler is not initialized or socket is not available!');
      return;
    }

    var payload = {
      data: data,
      roomId: roomId,
      eventType: 'edit-comment'
    };
    _emitEvent(_getConnectedSocket(), payload);
  },

  _serverResponseHandler = function (data, eventsHandlers) {
    switch (data.eventType) {
      case 'new-comment':
        eventsHandlers.newCommentHandler(data.data);
        break;
      case 'delete-comment':
        eventsHandlers.deleteCommentHandler(data.data);
        break;
      case 'all-comments':
        eventsHandlers.getAllCommentsHandler(data.data);
        break;
      case 'edit-comment':
        eventsHandlers.editCommentHandler(data.data);
        break;
    }
  },

  _callHandler = function (eventsHandlers, handler) {
    return function (data) {
      if (!data) {
        _con.error('data is not provided for call handler');
        return;
      }
      handler(data, eventsHandlers);
    };
  },

  _init = function (socket, eventsHandlers, callback) {
    if (!socket) {
      _con.log('commentsHandler: socket is not available!');
      callback({
        message: 'could not find socket!'
      });
      return;
    }

    if (!eventsHandlers || !eventsHandlers.newCommentHandler ||
          !eventsHandlers.deleteCommentHandler  ||
          !eventsHandlers.getAllCommentsHandler ||
          !eventsHandlers.editCommentHandler
        ) {
      callback({
        message: 'eventsHandlers is not defined or one of its functions is not defined',
        description: 'eventsHandlers should exist and have the functions: ' +
                   'newCommentHandler & deleteCommentHandler & getAllCommentsHandler & editCommentHandler'
      });
      return;
    }

    _setSocket(socket);
    socket.on('comments-server-response', _callHandler(eventsHandlers, _serverResponseHandler));
    callback();
  },

  //------------------------------------
  //---------------PROXY----------------
  //------------------------------------
  _getAllComments = function (entryEndPointUrl, assetId) {
    var allCommentUrl = entryEndPointUrl + '/' + assetId + '/comments';
    return $.ajax({
      url: allCommentUrl,
      method: 'GET',
      cache: false,
      contentType: 'application/json; charset=utf-8',
    });
  },

  _addComment = function (entryEndPointUrl, props, text) {
    var assetId = props.notebookId;
    var projectObject = {
      title: props.projectTitle,
      id: props.projectId
    };

    var addCommentUrl = entryEndPointUrl + '/' + assetId + '/comments';
    return $.ajax({
      url: addCommentUrl,
      method: 'POST',
      data: _getDataModuleForAddComment(assetId, text, props.notebookTitle, projectObject)
    });
  },

  _deleteComment = function (entryEndPointUrl, assetId, commentId) {
    var deleteUrl = entryEndPointUrl + '/' + assetId + '/comments/' + commentId;
    return $.ajax({
      url: deleteUrl,
      method: 'DELETE'
    });
  },

  _editComment = function (entryEndPointUrl, assetId, commentId, text) {
    var editUrl = entryEndPointUrl + '/' + assetId + '/comments/' + commentId;
    return $.ajax({
      url: editUrl,
      method: 'PATCH',
      data: _getDataModule(assetId, text)
    });
  },

  _fetchUserAccounts = function (entryEndPointUrl, userIdList) {
    var accountsUrl = entryEndPointUrl + '/comments/accounts/' + encodeURIComponent(userIdList.join(','));
    return $.ajax({
      url: accountsUrl,
      method: 'GET',
      cache: false
    });
  };

  return {
    getAllComments: _getAllComments,
    addComment: _addComment,
    deleteComment: _deleteComment,
    editComment: _editComment,
    fetchUserAccounts: _fetchUserAccounts,
    //socket io exposed functions
    init: _init,
    isSocketActive: _isSocketActive,
    emitAddCommentEvent: _emitAddCommentEvent,
    emitDeleteCommentEvent: _emitDeleteCommentEvent,
    emitGetAllCommentsEvent: _emitGetAllCommentsEvent,
    emitEditCommentEvent: _emitEditCommentEvent
  };
})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.CommentsTimeHandler = (function () {
  'use strict';

  var

  _monthList = [],

  _initMonths = function () {
    _monthList[0] = 'January';
    _monthList[1] = 'February';
    _monthList[2] = 'March';
    _monthList[3] = 'April';
    _monthList[4] = 'May';
    _monthList[5] = 'June';
    _monthList[6] = 'July';
    _monthList[7] = 'August';
    _monthList[8] = 'September';
    _monthList[9] = 'October';
    _monthList[10] = 'November';
    _monthList[11] = 'December';
  },

  _getMonth = function (month) {
    return _monthList[month];
  },

  _getDate = function (day) {
    if (day === 1) {
      return '1st';
    } else if (day === 2) {
      return '2nd';
    } else if (day === 3) {
      return '3rd';
    } else {
      return day + 'th';
    }
  },

  _sameDay = function (d1, d2) {
    return (d1.getDate() === d2.getDate());
  },

  _sameMonth = function (d1, d2) {
    return (d1.getMonth() === d2.getMonth());
  },

  _sameYear = function (d1, d2) {
    return (d1.getFullYear() === d2.getFullYear());
  },

  _sameDate = function (d1, d2) {
    return (_sameDay(d1, d2) && _sameMonth(d1, d2) && _sameYear(d1, d2));
  },

  _getTime = function (commentDate) {
    var hours = commentDate.getHours();
    var mins = commentDate.getMinutes();
    var inot = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    mins = mins < 10 ? ('0' + mins) : mins;
    return hours + ':' + mins + ' ' + inot;
  },

  _checkNewDate = function (oldDay, newDay) {
    if (!oldDay || !newDay) {
      return true;
    }
    return !_sameDate(oldDay, newDay);
  },

  checkToday = function (today, commentDate) {
    return _sameDate(today, commentDate);
  },

  checkYesterday = function (today, commentDate) {
    var yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return _sameDate(yesterday, commentDate);
  },

  _getTimeLineLabel = function (commentDate) {
    var today = new Date();
    if (checkToday(today, commentDate)) {
      return 'Today';
    } else if (checkYesterday(today, commentDate)) {
      return 'Yesterday';
    } else {
      return _getMonth(commentDate.getMonth()) + ' ' + _getDate(commentDate.getDate());
    }
  },

  _init = function () {
    _initMonths();
  };

  _init();

  return {
    getMonth: _getMonth,
    getDay: _getDate,
    getTime: _getTime,
    checkNewDate: _checkNewDate,
    getTimeLineLabel: _getTimeLineLabel
  };
})();

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015, 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.Palette = (function ($) {
  'use strict';

  var

  _con = window.console,

  _paletteCollapseButton = $('.paletteCollapseButton'),

  _paletteCollapsed = false,

  // ------------------------------------------------------------------------------------
  // Getters / Setters / Toggles
  // ------------------------------------------------------------------------------------

  _show = function (target) {
    $(target).removeClass('hidden');
  },

  // ------------------------------------------------------------------------------------
  // Palette Tab Content loading
  // ------------------------------------------------------------------------------------

  _loadDeferredTabContentMarkup = function (fetchMarkup, anchor, spinner) {

    function _toggleSpinner(show) {
      if (spinner.length) { // if exists
        CDSXAX.CommonCtrl.showAreaSpinnerFor(spinner.children('.spinner'), show);
        if (show) {
          spinner.show();
        } else {
          spinner.hide();
        }
      }
    }

    function _toggleDisplayOfTabContent(show) {
      if (show) {
        anchor.removeClass('hidden');
      } else {
        anchor.addClass('hidden');
      }
    }

    function _appendMarkupToDOM(markup) {
      anchor.empty();
      anchor.append(markup);
      _toggleDisplayOfTabContent(true);
    }

    function _hideCurrentContentMarkupAndShowError(xhr, textStatus, errorThrown) {
      _toggleDisplayOfTabContent(false);
      if (xhr.status === 401) {
        window.location.reload(true);
      } else {
        var errorMessage = 'Unable to load tab content. Error: ' + errorThrown + ', ' + xhr.responseText;
        _con.error(errorMessage);
        CDSXAX.Dialog.showAlertMessage(errorMessage);
      }
    }

    _toggleSpinner(true);
    anchor.empty();
    return $.when(fetchMarkup())
      .done(_appendMarkupToDOM)
      .fail(_hideCurrentContentMarkupAndShowError)
      .always(function () {
        _toggleSpinner(false);
      });
  },

  // ------------------------------------------------------------------------------------
  // Palette Navigation
  // ------------------------------------------------------------------------------------

  _rhsActionBarListener = function (rhsEvent) {

    console.log('rhs event: ' + JSON.stringify(rhsEvent));

    var type = rhsEvent.event;

    if (type === 'closed') {

      _togglePalette(false);

    } else if (type === 'opened') {

      var eventIdMapping = {
        'info': 'palette_link_info',
        'activity': 'palette_link_versioning',
        'comments': 'palette_link_comments',
        'data': 'palette_link_source'
      };

      var target = rhsEvent.id;

      if (eventIdMapping[target]) {
        _togglePalette(true);
        _navigateTo(eventIdMapping[target]);
      }

    }
  },

  _navigateTo = function (target) {
    _con.log('navigate_to(' + target + ')');
    var visiblePalette = $('.paletteCard').not('.hidden');
    visiblePalette.addClass('hidden');

    switch (target) {
      case 'palette_link_info':
        _show('.paletteInfo');
        if ($('#notebookDescription').val()) {
          var length = $('#notebookDescription').attr('maxlength') - $('#notebookDescription').val().length;
          $('#descriptionLength').text(length);
        }
        break;
      case 'palette_link_source':
        _show('.paletteSource');
        CDSXAX.PaletteDatasourcesTab.showDatasourcesTab(CDSXAX.NotebookCtrl.getSparkServiceId());
        break;
      case 'palette_link_environment':
        _show('.paletteEnvironment');
        break;
      case 'palette_link_sharing':
        _show('.paletteSharing');
        CDSXAX.PaletteSharing.fetchAndDisplaySharingUrl();
        break;
      case 'palette_link_schedule':
        _show('.paletteSchedule');
        CDSXAX.PaletteSchedulingTab.showScheduleTab();
        break;
      case 'palette_link_comments':
        _show('.paletteComments');

        var notebookObj = {},
            projectObj = {},
            userName, userId, apiPortal;

        // Note: At this point the palette needs to handle comments in two pages:
        // - Notebook Edit Page
        // - Notebook View Page
        // Ideally CDSXAX.Palette should be initialized with the parameters required below,
        // but due to dependency issues this would require reworking submodule initialization
        // Due to time constraints we'll keep a conditional in here for now,
        // but this should certainly be addressed at some point in the future
        if (CDSXAX.NotebookCtrl) {
          notebookObj.id = CDSXAX.NotebookCtrl.getNotebookId();
          notebookObj.title = CDSXAX.NotebookCtrl.getNotebookTitle();
          projectObj.id = CDSXAX.NotebookCtrl.getProjectId();
          projectObj.title = CDSXAX.NotebookCtrl.getProjectTitle();
          userName = CDSXAX.NotebookCtrl.getUserName();
          userId = CDSXAX.NotebookCtrl.getUserId();
          apiPortal = CDSXAX.NotebookCtrl.getApiPortal();
        } else if (CDSXAX.SharedView) {
          notebookObj.id = CDSXAX.SharedView.getNotebookId();
          notebookObj.title = CDSXAX.SharedView.getNotebookTitle();
          projectObj.id = CDSXAX.SharedView.getProjectId();
          projectObj.title = CDSXAX.SharedView.getProjectName();
          userName = CDSXAX.SharedView.getUserName();
          userId = CDSXAX.SharedView.getUserId();
          apiPortal = CDSXAX.SharedView.getApiPortal();
        } else {
          break;
        }

        CDSXAX.PaletteCommentsTab.showCommentTabContent(
          notebookObj,
          projectObj,
          userName,
          userId,
          apiPortal,
          'paletteCommentsContentAnchor'
        );

        break;
      case 'palette_link_versioning':
        _show('.paletteVersioning');
        CDSXAX.PaletteVersioningTab.showVersioningTab(CDSXAX.NotebookCtrl.getNotebookId());
        break;
      case 'palette_link_back':
        _show('.paletteMenu');
        break;
      default:
        _con.log('Palette click with no specific target', target);
    }
  },

  _togglePalette = function (show) {
    _paletteCollapsed = !show;
    if (show) {
      $('.palette').addClass('fadein');
      $('.palette').removeClass('collapsed');
      $('.centerContainer').addClass('palette-opened');
    } else {
      $('.palette').removeClass('fadein');
      $('.palette').addClass('collapsed');
      $('.centerContainer').removeClass('palette-opened');
    }
  },

  _collapsePallete = function () {
    _con.log('collapse_Pallete()');
    if (CDSXAX.ActionBar) {
      CDSXAX.ActionBar.get().then(function (actionBar) {
        actionBar.closeRHSPanel();
      });
    } else {
      _togglePalette(false);
    }
  }, // end _collapsePallete

  // ------------------------------------------------------------------------------------
  // Socket IO functions
  // ------------------------------------------------------------------------------------

  _getSocketNotebookRoomId = function () {
    var notebookId;
    // Note: At this point the palette needs to handle comments in two pages:
    // - Notebook Edit Page
    // - Notebook View Page
    // Ideally CDSXAX.Palette should be initialized with the parameters required below,
    // but due to dependency issues this would require reworking submodule initialization
    // Due to time constraints we'll keep a conditional in here for now,
    // but this should certainly be addressed at some point in the future
    if (CDSXAX.NotebookCtrl) {
      notebookId = CDSXAX.NotebookCtrl.getNotebookId();
    } else if (CDSXAX.SharedView) {
      notebookId = CDSXAX.SharedView.getNotebookId();
    }
    return 'notebook-' + notebookId;
  },

  _getSocketProjectRoomId = function () {
    if (CDSXAX.NotebookCtrl) {
      var projectId = CDSXAX.NotebookCtrl.getProjectId();
      if (projectId) {
        return 'project-' + projectId;
      }
    }
    return '';
  },

  _joinRoom = function (socket, roomId) {
    if (socket && roomId) {
      socket.emit('room-checkin', {
        roomId: roomId
      });
    }
  },

  _socketInitCallback = function (socket) {
    _joinRoom(socket, _getSocketNotebookRoomId());
    CDSXAX.PaletteCommentsTab.useSocket(socket);
    if (CDSXAX.NotebookCtrl) {
      _joinRoom(socket, _getSocketProjectRoomId());
      CDSXAX.PaletteDatasourcesTab.useSocket(socket);
    }
  },

  // ------------------------------------------------------------------------------------
  // Initialization
  // ------------------------------------------------------------------------------------

  _setupEventHandlers = function () {
    _paletteCollapseButton.click(_collapsePallete);
  },

  _initSocket = function () {
    CDSXAX.SocketioHandler.initSocket('/analytics/notebooks', _socketInitCallback);
  },

  _init = function () {
    _initSocket();
    _setupEventHandlers();
  };

  _init();

  return {
    loadDeferredTabContentMarkup: _loadDeferredTabContentMarkup,
    navigateTo: _navigateTo,
    rhsActionBarListener: _rhsActionBarListener,
    togglePalette: _togglePalette
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/

var CDSXAX = CDSXAX || {};

CDSXAX.NotebookLockHandler = (function ($) {
  'use strict';

  var

  _openConfirmUnlockDialog = function (label) {
    var

    deferred = $.Deferred(),
    header = 'Unlock notebook';

    CDSXAX.Dialog.showConfirmationDialog(
      header,
      label,
      'unlock',
      'cancel',
      function (flag) {
        if (flag) {
          deferred.resolve();
        } else {
          deferred.reject();
        }
      }
    );

    return deferred.promise();
  },

  _openConfirmUnlockDialogForLockHolder = function () {
    return _openConfirmUnlockDialog(
      '<p>' +
        'Are you sure you want to unlock this notebook?' +
      '</p>'
    );
  },

  _openConfirmUnlockDialogForAdmins = function (nameOfOtherUser) {
    var displayedName = nameOfOtherUser || 'Another user';
    return _openConfirmUnlockDialog(
      '<p>' +
        displayedName + ' is currently working on the notebook.' +
      '</p>' +
      '<p>' +
        'Are you sure you want to unlock this notebook?' +
      '</p>'
    );
  },

  _openLockedByAnotherUserDialog = function (nameOfOtherUser, projectUrl) {

    var

    deferred = $.Deferred(),

    lastFocusedElement = document.activeElement,
    header = 'Notebook is locked',
    label =
    '<div>' +
      '<p>' +
        'While you previewed the notebook, ' + nameOfOtherUser + ' ' +
        'started working on it.' +
      '</p>' +
      '<p>' +
        'You can wait until ' + nameOfOtherUser + ' unlocks the ' +
        'notebook, or you can contact ' +
          '<a href="' + projectUrl + '">' + nameOfOtherUser + '</a>' +
        ' or a ' +
          '<a href="' + projectUrl + '">project administrator</a> ' +
        'to unlock the notebook.' +
        '</p>' +
    '</div>',
    buttonBar = CDSXAX.Dialog.getYESButtonbar('Ok'),
    options = {};

    options.customClass = 'vex-message-dlg vex-custom-dimension vex-locked-dialog';
    options.title = header;
    options.showCloseButton = false;
    options.overlayClosesOnClick = false;
    options.escapeButtonCloses = false;
    options.afterOpen = function () {
      var content = this.contentEl;
      $(content).append(
        CDSXAX.Dialog.appendToDialogForm(
          label + buttonBar
        )
      );
      CDSXAX.Dialog.applyCustomDialogShims(this);
      return;
    };
    options.afterClose = function () {
      CDSXAX.Dialog.removeCustomDialogShims();
      $(lastFocusedElement).focus();
      deferred.resolve();
    };

    CDSXAX.Dialog.showCustomDialog(options);
    return deferred.promise();
  },

  _getCurrentLockHolderForNotebook = function (notebookId) {
    return CDSXAX.NotebookLockModel.getLockInfoForNotebook(notebookId);
  },

  _lockNotebook = function (notebookId) {
    return CDSXAX.NotebookLockModel.lockNotebook(notebookId);
  },

  _unlockNotebook = function (notebookId) {
    return CDSXAX.NotebookLockModel.unlockNotebook(notebookId);
  };

  return {
    getCurrentLockHolderForNotebook: _getCurrentLockHolderForNotebook,
    openConfirmUnlockDialogForLockHolder: _openConfirmUnlockDialogForLockHolder,
    openConfirmUnlockDialogForAdmins: _openConfirmUnlockDialogForAdmins,
    openLockedByAnotherUserDialog: _openLockedByAnotherUserDialog,
    lockNotebook: _lockNotebook,
    unlockNotebook: _unlockNotebook
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides utility function geared towards working date, time and timzone specific information.
 *
 * The module can be accessed using <code>window.schedulingDateTime</code> if not
 * using an AMD or RequireJS module loader system. At the time <code>window.schedulingDateTime</code>
 * is available within the currently opened notebook and on the notebook preview page.
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingDateTime
 * @namespace SchedulingDateTime
 */
CDSXAX.SchedulingDateTime = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function (moment) {
    var

    dateTime;

    dateTime = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',
      /**
       * Returns time value for a given ISO 8601 date+time representation
       *
       * @memberof SchedulingDateTime
       * @param {String} jsonDate - the ISO 8601 compliant date+time string
       * @returns {Number}
       */
      getTimeForISOFormat: function (jsonDate) {
        var time = null;
        if (typeof jsonDate === 'string') {
          time = (new Date(jsonDate)).getTime();
        }
        return time;
      },
      /**
       * Converts local date+time into UTC date+time
       *
       * @memberof SchedulingDateTime
       * @param {Date} milliSinceEpoch - timestamp of the Date to be converted
       * @returns {Number}
       */
      timeForLocalCalendarInsteadOfUTCCalendar: function (milliSinceEpoch) {
        // the number of milliseconds since Epoch converted to UTC by adding the timezone offset.
        return milliSinceEpoch + (new Date(milliSinceEpoch)).getTimezoneOffset() * 60 * 1000;
      },
      /**
       * Converts UTC date+time into local date+time
       *
       * @memberof SchedulingDateTime
       * @param {Date} milliSinceEpoch - timestamp of the Date to be converted
       * @returns {Number}
       */
      timeUTCCalendarInsteadOfLocalCalendar: function (milliSinceEpoch) {
        // the number of milliseconds since Epoch converted to local time by substracting the timezone offset.
        return milliSinceEpoch - (new Date(milliSinceEpoch)).getTimezoneOffset() * 60 * 1000;
      },
      /**
       * Returns a date object initialized using a given date and time value
       *
       * @memberof SchedulingDateTime
       * @param {Date} timeSelection - the data object that carries the time portion
       * @param {Date} daySelection - the date object that carries the date portion
       * @returns {Date}
       */
      getDateForTimeAndDay: function (timeSelection, daySelection) {
        var hour = timeSelection.getHours(),
        minute = timeSelection.getMinutes(),
        date = new Date(daySelection.getTime());

        // Adjust for selected time and the timeZoneOffset
        // Using setter for local time because dayOfMonth must not change during
        // this operation.
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(0);

        return date;
      },
      /**
       * Retrieves the duration for a distance represented by two distinct points in time
       *
       * @memberof SchedulingDateTime
       * @param {Date} scheduleStartDate - the start point of the distance
       * @param {Date} scheduleUntilDate - the end point of the distance
       * @returns {Object}
       */
      convertToDuration: function
      (
        scheduleStartDate,
        scheduleUntilDate
      ) {
        var durationInMs = 0,
        durationInMth = 0;

        if (scheduleStartDate && scheduleUntilDate) {
          durationInMs = scheduleUntilDate.getTime() - scheduleStartDate.getTime();
          var monthSinceGregorianStart = scheduleStartDate.getUTCFullYear() * 12 + scheduleStartDate.getUTCMonth();
          var monthSinceGregorianUntil = scheduleUntilDate.getUTCFullYear() * 12 + scheduleUntilDate.getUTCMonth();
          durationInMth = monthSinceGregorianUntil - monthSinceGregorianStart;
        }

        return {
          'durationInMs': durationInMs,
          'durationInMth': durationInMth
        };
      },
      /**
       * Returns a string value representing the timezone location of the user agent
       *
       * @memberof SchedulingDateTime
       * @returns {String}
       */
      getTimezoneInformation: function () {
        var timeZone = '';
        if (typeof Intl !== 'undefined') {
          timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          // For FF we end up with undefined despite the fact Intl is supported
          //
          // See:
          //
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1158733
          // https://bugzilla.mozilla.org/show_bug.cgi?id=895737
          // https://bugzilla.mozilla.org/show_bug.cgi?id=837961
          if (typeof timeZone === 'undefined') {
            timeZone = moment.tz.guess();
          }
        } else if (typeof moment !== 'undefined') {
          timeZone = moment.tz.guess();
        }
        return timeZone;
      },
      /**
       * Utility function that allows to compare two JavaScript Date objects to
       * figure out whether their day-month-year portions are equal.
       *
       * @memberof SchedulingDateTime
       * @param {Date} dateOne - date to compare with
       * @param {Date} dateTwo - date to be compared
       * @returns {Boolean}
       */
      isSameDateAs: function (dateOne, dateTwo) {
        return (
          dateOne.getFullYear() === dateTwo.getFullYear() &&
          dateOne.getMonth() === dateTwo.getMonth() &&
          dateOne.getDate() === dateTwo.getDate()
        );
      }
    };

    return dateTime;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['moment'],
      schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
      require('moment')
    );
  } else {
    window.schedulingDateTime = schedulingFactory(moment);
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides utility function geared towards working with job schedules.
 *
 * The module can be accessed using <code>window.schedulingTools</code> if not
 * using an AMD or RequireJS module loader system. At the time <code>window.schedulingTools</code>
 * is available within the currently opened notebook and on the notebook preview page.
 *
 * @see {@link http://www.quartz-scheduler.org/documentation/quartz-2.2.x/tutorials/crontrigger.html}
 * @see {@link http://www.cronmaker.com/}
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingTools
 * @namespace SchedulingTools
 */
CDSXAX.SchedulingTools = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function (moment, dateTime) {
    var

    tools,

    _REPEATS_TRANSLATION_MAP = {
      H: {value: 'hourly', key: 'H'},
      ED: {value: 'daily', key: 'ED'},
      EW: {value: 'weekly', key: 'EW'},
      M: {value: 'monthly', key: 'M'},
      Y: {value: 'yearly', key: 'Y'}
    },
    _DAY_OF_WEEK_TRANSLATION_MAP = {
      1: 'SUN',
      2: 'MON',
      3: 'TUE',
      4: 'WED',
      5: 'THU',
      6: 'FRI',
      7: 'SAT'
    },
    _MONTH_TRANSLATION_MAP = {
      1: 'JAN',
      2: 'FEB',
      3: 'MAR',
      4: 'APR',
      5: 'MAY',
      6: 'JUN',
      7: 'JUL',
      8: 'AUG',
      9: 'SEP',
      10: 'OCT',
      11: 'NOV',
      12: 'DEC'
    },
    // Default for new schedules
    _DEFAULT_SCHEDULE_METADATA = {
      occurrences: 5,
      repeat: 'EW',
      increment: 1
    };

    tools = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',
      /**
       * Tokenizes a string containing a Quartz cron expression
       *
       * @memberof SchedulingTools
       * @param {String} scheduleExpression - the Quartz cron expression
       * @returns {Array}
       */
      tokenizeScheduleExpression: function (scheduleExpression) {
        var

        tokens = [];

        tokens = scheduleExpression.split(/\s+/);
        // Ensure at least 6 tokens
        while (tokens.length < 7) {
          tokens.push('');
        }

        return tokens;
      },
      /**
       * Gets the increment from a schedule expression token
       *
       * @memberof SchedulingTools
       * @param {String} token - a Cron expression token that contains an increment
       * @return {Number}
       */
      getIncrementForToken: function (token) {
        var

        value = Number.NaN,
        literal = token;

        // Checking for 2/5, 4, *, otherwise
        if (/(\d+)\/(\d+)/g.test(token)) {
          literal = RegExp.$2;
          value = parseInt(literal, 10);
        } else if (/\*/.test(token)) {
          value = 1;
        }

        return value;
      },
      /**
       * Constructs a dictionary that represents schedule metadata
       *
       * @memberof SchedulingTools
       * @param {String} scheduleExpr - a Quartz Cron expression
       * @param {Number} durationInMilliseconds - duration in milli seconds
       * @param {Number} durationInMonth - duration in month
       * @returns {Object}
       */
      getScheduleMetadata: function (scheduleExpr, durationInMilliseconds, durationInMonth) {
        var

        tokens = [],
        metadata = {},
        metadataAssembled = false;

        // return default if expression is empty
        if (typeof scheduleExpr !== 'string' || scheduleExpr.length === 0) {
          return _DEFAULT_SCHEDULE_METADATA;
        }

        // now that we have a schedule expression tokenize it
        tokens = tools.tokenizeScheduleExpression(scheduleExpr);
        // kick-off with a check for an hourly schedule expression
        metadata.increment = tools.getIncrementForToken(tokens[2]);

        while (metadataAssembled === false) {
          // assemble metadata for an hourly schedule if applicable
          if (!Number.isNaN(metadata.increment)) {
            metadata.repeat = _REPEATS_TRANSLATION_MAP.H.key;
            metadata.occurrences = tools.getOccurences(
              durationInMilliseconds,
              durationInMonth,
              metadata.increment,
              metadata.repeat
            );

            // check for completeness
            metadataAssembled = tools.isScheduleMetadataAssembled(metadata, durationInMilliseconds);
            if (metadataAssembled) { break; }
          }

          // assemble metadata for a weekly schedule if applicable
          if (/\?/.test(tokens[3])) {
            metadata.repeat = _REPEATS_TRANSLATION_MAP.EW.key;
            metadata.increment = 7; // Increment not supported for this dimension !!
            metadata.occurrences = tools.getOccurences(
              durationInMilliseconds,
              durationInMonth,
              metadata.increment,
              metadata.repeat
            );

            // check for completeness
            metadataAssembled = tools.isScheduleMetadataAssembled(metadata, durationInMilliseconds);
            if (metadataAssembled) { break; }
          }

          // assemble metadata for a daily schedule if applicable
          metadata.increment = tools.getIncrementForToken(tokens[3]);
          if (!Number.isNaN(metadata.increment)) {
            metadata.repeat = _REPEATS_TRANSLATION_MAP.ED.key;
            metadata.occurrences = tools.getOccurences(
              durationInMilliseconds,
              durationInMonth,
              metadata.increment,
              metadata.repeat
            );

            // check for completeness
            metadataAssembled = tools.isScheduleMetadataAssembled(metadata, durationInMilliseconds);
            if (metadataAssembled) { break; }
          }

          // assemble metadata for a monthly schedule if applicable
          metadata.increment = tools.getIncrementForToken(tokens[4]);
          if (!Number.isNaN(metadata.increment)) {
            metadata.repeat = _REPEATS_TRANSLATION_MAP.M.key;
            metadata.occurrences = tools.getOccurences(
              durationInMilliseconds,
              durationInMonth,
              metadata.increment,
              metadata.repeat
            );

            // check for completeness
            metadataAssembled = tools.isScheduleMetadataAssembled(metadata, durationInMilliseconds);
            if (metadataAssembled) { break; }
          }

          // assemble metadata for a yearly schedule if applicable
          metadata.increment = tools.getIncrementForToken(tokens[6]) || 1;
          metadata.repeat = _REPEATS_TRANSLATION_MAP.Y.key;
          metadata.occurrences = tools.getOccurences(
            durationInMilliseconds,
            durationInMonth,
            metadata.increment,
            metadata.repeat
          );

          // check for completeness
          metadataAssembled = tools.isScheduleMetadataAssembled(metadata, durationInMilliseconds);
        }

        return metadata;
      },
      /**
       * Helper function to determine whether a schedule metadata dictionary is complete.
       *
       * @memberof SchedulingTools
       * @param {Object} metadata - the schedule metadata dictionary
       * @param {Number} durationInMilliseconds - duration in milli seconds if any
       * @returns {Boolean}
       */
      isScheduleMetadataAssembled: function (metadata, durationInMilliseconds) {
        if (typeof durationInMilliseconds === 'number') {
          if
          (
            tools.existsAndIsANumber(metadata.occurrences) &&
            metadata.repeat &&
            tools.existsAndIsANumber(metadata.increment)
          ) {
            return true;
          }
        } else {
          if (metadata.repeat && tools.existsAndIsANumber(metadata.increment)) {
            return true;
          }
        }
        return false;
      },
      /**
       * Evaluates whether a given value exists and is a number
       *
       * @memberof SchedulingTools
       * @param {Number} value - the value to check for
       * @returns {Boolean}
       */
      existsAndIsANumber: function (value) {
        return value && !Number.isNaN(value);
      },
      /**
       * Calculates the occurrences property for a schedule metadata dictionary
       *
       * @memberof SchedulingTools
       * @param {Number} durationInMilliseconds - duration in milli seconds
       * @param {Number} durationInMonth - duration in month
       * @param {Number} increment - the increment fragment of a schedule token
       * @param {String} repeat - repeat identifier
       * @returns {Number}
       */
      getOccurences: function (durationInMilliseconds, durationInMonth, increment, repeat) {
        var

        occurrences = 5;

        if (repeat === _REPEATS_TRANSLATION_MAP.H.key) {
          occurrences = typeof durationInMilliseconds === 'number' ?
              Math.floor(durationInMilliseconds / (increment * 60 * 60 * 1000)) : occurrences;
        } else if (repeat === _REPEATS_TRANSLATION_MAP.EW.key) {
          occurrences = typeof durationInMilliseconds === 'number' ?
              Math.floor(durationInMilliseconds / (increment * 24 * 60 * 60 * 1000)) : occurrences;
        } else if (repeat === _REPEATS_TRANSLATION_MAP.ED.key) {
          occurrences = typeof durationInMilliseconds === 'number' ?
              Math.floor(durationInMilliseconds / (increment * 24 * 60 * 60 * 1000)) : occurrences;
        } else if (repeat === _REPEATS_TRANSLATION_MAP.M.key) {
          occurrences = typeof durationInMonth === 'number' ?
              Math.floor(durationInMonth / increment) : occurrences;
        } else if (repeat === _REPEATS_TRANSLATION_MAP.Y.key) {
          occurrences = typeof durationInMonth === 'number' ?
              Math.floor(durationInMonth / (increment * 12)) : occurrences;
        }

        return occurrences;
      },
      /**
       * Assembles the Quartz schedule expression string based on a set of input values
       *
       * @memberof SchedulingTools
       * @param {Number} sec - seconds, allowed values are 0-59, allowed special characters are , - * /
       * @param {Number} minutes - minutes, allowed values are 0-59, allowed special characters are , - * /
       * @param {Number} hours - hours, allowed values are 0-23, allowed special characters are , - * /
       * @param {Number} dayOfMonth - day of month, allowed values are 1-31, allowed special characters are , - * ? / L W
       * @param {(Number|String)} month - month, allowed values are 1-12 or JAN-DEC, allowed special characters are , - * /
       * @param {(Number|String)} dayOfWeek - day of week, allowed values are 1-7 or SUN-SAT, allowed special characters are , - * ? / L #
       * @param {Number} year - year allowed values are 1970-2099, allowed special characters are , - * /
       * @returns {Array}
       */
      assembleScheduleExpression: function (sec, minutes, hours, dayOfMonth, month, dayOfWeek, year) {
        return [sec, minutes, hours, dayOfMonth, month, dayOfWeek, year].join(' ');
      },
      /**
       * Composes the Quartz cron based schedule expression as a string based on a set of given input values.
       * The expression type to be composed is determined by the repeats value.
       *
       * @memberof SchedulingTools
       * @param {String} repeats - indicator what type of schedule to compose. allowed values are ED, EW, H, M and Y
       * @param {Number} minutes - minutes, allowed values are 0-59, allowed special characters are , - * /
       * @param {Number} hours - hours, allowed values are 0-23, allowed special characters are , - * /
       * @param {Number} dayOfMonth - day of month, allowed values are 1-31, allowed special characters are , - * ? / L W
       * @param {(Number|String)} month - month, allowed values are 1-12 or JAN-DEC, allowed special characters are , - * /
       * @param {(Number|String)} dayOfWeek - day of week, allowed values are 1-7 or SUN-SAT, allowed special characters are , - * ? / L #
       * @returns {String}
       */
      getScheduleExpression: function (repeats, minutes, hours, dayOfMonth, month, dayOfWeek) {
        var expression = '';
        // * is less error-prone then 1/1 (start=1, inc=1) as some units like month do not start with 1 !!
        //jscs:disable maximumLineLength
        if (repeats && repeats === _REPEATS_TRANSLATION_MAP.ED.key && !Number.isNaN(minutes) && !Number.isNaN(hours)) {
          expression = tools.assembleScheduleExpression(0, minutes, hours, '*', '*', '?', '*');
        } else if (repeats && repeats === _REPEATS_TRANSLATION_MAP.EW.key && !Number.isNaN(minutes) && !Number.isNaN(hours)) {
          expression = tools.assembleScheduleExpression(0, minutes, hours, '?', '*', dayOfWeek, '*');
        } else if (repeats && repeats === _REPEATS_TRANSLATION_MAP.H.key && !Number.isNaN(minutes)) {
          expression = tools.assembleScheduleExpression(0, minutes, '*', '*','*','?','*');
        } else if (repeats && repeats === _REPEATS_TRANSLATION_MAP.M.key && !Number.isNaN(minutes) && !Number.isNaN(hours)) {
          expression = tools.assembleScheduleExpression(0, minutes, hours, dayOfMonth, '*','?','*');
        } else if (repeats && repeats === _REPEATS_TRANSLATION_MAP.Y.key && !Number.isNaN(minutes) && !Number.isNaN(hours)) {
          expression = tools.assembleScheduleExpression(0, minutes, hours, dayOfMonth, month,'?', '*');
        }
        //jscs:enable maximumLineLength

        return expression;
      },
      /**
       * Returns an abbreviation for a given week day
       *
       * @memberof SchedulingTools
       * @param {Number} index - the index of a particular week day. index starts with 1 and ends with 7.
       * @returns {String}
       */
      getDayOfWeek: function (index) {
        if (index) {
          return _DAY_OF_WEEK_TRANSLATION_MAP[index];
        }
        return '';
      },
      /**
       * Returns an abbreviation for a given month
       *
       * @memberof SchedulingTools
       * @param {Number} index - the index of a particular month. index starts with 1 and ends with 12.
       * @return {String}
       */
      getMonth: function (index) {
        if (index) {
          return _MONTH_TRANSLATION_MAP[index];
        }
        return '';
      },
      /**
       * Returns a human readable value for the repeats key
       *
       * @memberof SchedulingTools
       * @param {String} repeats - Repeats key to be resolved to a value
       * @returns {String}
       */
      getValueForRepeatsTranslationMap: function (repeats) {
        return _REPEATS_TRANSLATION_MAP[repeats].value;
      },
      /**
       * Composes a summary of the settings of a schedule either to be created or updated.
       * The summary will contain UTC-based date+time information.
       *
       * @memberof SchedulingTools
       * @param {Date} startsOnDate - the start date of the schedule
       * @param {Date} endsAfterDate - the end date of the schedule
       * @param {Data} startsOnTime - the start time of the schedule
       * @param {String} repeats - indicator of the schedule type
       * @returns {Object}
       */
      getUTCBasedSchedulingInfo: function (startsOnDate, endsAfterDate, startsOnTime, repeats) {
        var
        startsTime = new Date(dateTime.timeForLocalCalendarInsteadOfUTCCalendar(startsOnTime.getTime())),
        startsDate = new Date(dateTime.timeForLocalCalendarInsteadOfUTCCalendar(startsOnDate.getTime())),
        endsDate = new Date(dateTime.timeForLocalCalendarInsteadOfUTCCalendar(endsAfterDate.getTime())),
        endsTime = new Date(dateTime.timeForLocalCalendarInsteadOfUTCCalendar(endsAfterDate.getTime())),
        humanReadableText = 'scheduled to run ' +
          tools.getValueForRepeatsTranslationMap(repeats) +
          ' starting on ' + moment(startsDate).format('ddd, D MMMM YYYY') + ', ' +
          moment(startsTime).format('hh:mm A') + ' (UTC) ' +
          ' until ' +
          moment(endsDate).format('ddd, D MMMM YYYY') + ', ' +
          moment(endsTime).format('hh:mm A') + ' (UTC)' +
          '.';

        return {
          humanReadableText: humanReadableText,
          repeats: tools.getValueForRepeatsTranslationMap(repeats),
          startsDate: moment(startsDate).format('ddd, D MMMM YYYY'),
          startsTime: moment(startsTime).format('hh:mm A'),
          endsDate: moment(endsDate).format('ddd, D MMMM YYYY'),
          endsTime: moment(endsTime).format('hh:mm A')
        };
      },
      /**
       * Composes a summary of the settings of a schedule either to be created or updated.
       *
       * @memberof SchedulingTools
       * @param {Date} startsOnDate - the start date of the schedule
       * @param {Date} endsAfterDate - the end date of the schedule
       * @param {Data} startsOnTime - the start time of the schedule
       * @param {String} repeats - indicator of the schedule type
       * @returns {Object}
       */
      getLocalBasedSchedulingInfo: function (startsOnDate, endsAfterDate, startsOnTime, repeats) {
        var
        startsTime = new Date(startsOnTime.getTime()),
        startsDate = new Date(startsOnDate.getTime()),
        endsDate = new Date(endsAfterDate.getTime()),
        endsTime = new Date(endsAfterDate.getTime()),
        humanReadableText = 'scheduled to run ' +
          tools.getValueForRepeatsTranslationMap(repeats) +
          ' starting on ' + moment(startsDate).format('ddd, D MMMM YYYY') + ', ' +
          moment(startsTime).format('hh:mm A') +
          ' until ' +
          moment(endsDate).format('ddd, D MMMM YYYY') + ', ' +
          moment(endsTime).format('hh:mm A') + '.';

        return {
          humanReadableText: humanReadableText,
          repeats: tools.getValueForRepeatsTranslationMap(repeats),
          startsDate: moment(startsDate).format('ddd, D MMMM YYYY'),
          startsTime: moment(startsTime).format('hh:mm A'),
          endsDate: moment(endsDate).format('ddd, D MMMM YYYY'),
          endsTime: moment(endsTime).format('hh:mm A')
        };
      }
    };

    return tools;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['moment'],
      ['./schedulingDateTime'],
      schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
      require('moment'),
      require('./schedulingDateTime')
    );
  } else {
    window.schedulingTools = schedulingFactory(moment, window.schedulingDateTime);
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides support to interactively call the scheduling backend
 * from the browser console.
 *
 * The module can be accessed using <code>window.schedulingClient</code> if not
 * using an AMD or RequireJS module loader system. At the time <code>window.schedulingClient</code>
 * is available within the currently opened notebook and on the notebook preview page.
 *
 * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#/scheduler}
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingClient
 * @namespace SchedulingClient
 */
CDSXAX.SchedulingClient = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function ($, model, tools) {
    var

    client,
    _con = window.console,
    _lastError = {},
    _lastResult = null;

    client = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',
      /**
       * Returns the result of the scheduling client function that has been invoked most recently.
       *
       * @memberof SchedulingClient
       * @returns {Object}
       */
      getLastResult: function () {
        return _lastResult;
      },
      /**
       * Returns the last error state that the client has catched.
       *
       * @memberof SchedulingClient
       * @returns {Object}
       */
      getLastError: function () {
        return _lastError;
      },
      /**
       * Returns a list of executions points for a given cron expression based
       * on the values that are provided on the job schedule dialog.
       *
       * @memberof SchedulingClient
       */
      getExecutionsForCronExpressionUsingCurrentContext: function () {
        var

        expression = $('#schedule_computedExpression').text(),
        startsOnDate = new Date($('#schedule_startsOnDate').val()),
        endsAfterDate = new Date($('#schedule_endsAfterDate').val()),
        startsOnTime = new Date($('#schedule_startsOnTime').val()),
        mode = $('#schedule_repeats').val(),
        computedSummary = tools.getLocalBasedSchedulingInfo(
          startsOnDate,
          endsAfterDate,
          startsOnTime,
          mode
        );

        if (!computedSummary) {
          _con.error('Could not determine necessary data. Make sure you have the job schedule dialog open.');
          return;
        }

        client.getExecutionsForCronExpression({
          expression: expression,
          localized: true,
          currentDate: new Date(computedSummary.startsDate + ', ' + computedSummary.startsTime).toISOString(),
          endDate: new Date(computedSummary.endsDate + ', ' + computedSummary.endsTime).toISOString()
        });
      },
      /**
       * Returns a list of executions points for a given cron expression
       *
       * @memberof SchedulingClient
       * @param {Object} options - options to be passed to make the call
       * @param {Boolean} options.localized - indicates whether execution points shall be provided localized or in UTC date/time format
       * @param {Object} options.expression - the cron expression to be parsed
       * @param {Object} [options.currentDate] - Start date of the iteration
       * @param {Object} [options.endDate] - End date of the iteration
       * @param {Object} [options.occurrences] - The amount of executions you want to retrieve
       */
      getExecutionsForCronExpression: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'expression',
              'localized'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }

        var

        promise;

        promise = model.getExecutionsForCronExpression(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Eexcutions could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Returns endpoint information for both the batch schedule and batch deploy endpoint.
       *
       * @memberof SchedulingClient
       */
      getEndpointInformation: function () {
        var

        options = {},
        promise;

        options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();

        promise = model.getEndpointInformation(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Endpoint information could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Creates a new test schedule using default data. Schedule created will
       * be an hourly schedule. Start time will be set to NOW.
       *
       * Note: If you call this function on a checkpoint that is already scheduled
       * you will create a second schedule for that very checkpoint.
       *
       * @memberof SchedulingClient
       * @param {String} versionID - the version GUID of the checkpoint to be scheduled
       */
      createScheduleFromDefaultForVersion: function (versionID) {
        var

        startDate = new Date(),
        endDate = new Date(),
        data = {};

        endDate.setTime(startDate.getTime() + (1 * 60 * 60 * 1000));
        data = {
          artifactType: 'jupyterNotebook',
          artifactID: CDSXAX.NotebookCtrl.getNotebookId(),
          artifactVersion: versionID,
          artifactName: CDSXAX.NotebookCtrl.getNotebookTitle(),
          scheduleExpr: '0 0 * * * ? *',
          name: 'test schedule created from default',
          description: 'description for test schedule',
          startson: startDate.toISOString(),
          enddate: endDate.toISOString(),
          repeats: 'H'
        };
        client.createScheduleUsingCurrentContext(data, versionID);
      },
      /**
       * Creates a new job schedule using the current project ID and notebook ID.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/create_schedule}
       * @see {@link http://www.quartz-scheduler.org/documentation/quartz-2.1.x/tutorials/crontrigger.html}
       *
       * @memberof SchedulingClient
       * @param {Object} data - data used to create the job schedule
       * @param {String} [data.artifactType] - indicates the artifact type to be scheduled. This should be always set to <code>jupyterNotebook</code>
       * @param {String} data.artifactID - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactVersion] - GUID of the notebook version to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactName] - The name of the notebook to be scheduled. Don't use quotes as part of the name.
       * @param {String} data.scheduleExpr - The Quartz cron expression to be used to create the job schedule
       * @param {String} data.name - The name of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 256.
       * @param {String} data.description - The description of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 512.
       * @param {String} [data.startson] - ISO 8601 compliant start date and time format for the job schedule to be created.
       * @param {String} [data.enddate] - ISO 8601 compliant end date and time format for the job schedule to be created.
       * @param {String} [data.endsafter] - DEPRECATED: Indicates after how many executions the job schedule expires.
       * @param {String} [data.repeats] - Indicates the cycle used to repeatedly execute a job schedule. Could be either <code>H</code> (hourly), <code>ED</code> (daily), <code>EW</code> (weekly), <code>M</code> (monthly) or <code>Y</code> (yearly)
       * @param {String} [data.payload] - The JSON serialized HTML form payload.
       * @param {String} versionID - the version GUID of the checkpoint to be scheduled
       */
      createScheduleUsingCurrentContext: function (data, versionID) {
        if (!data) {
          _con.error(
              'The following data dictionary needs to be provided: ',
              [
               'artifactType',
               'artifactID',
               'artifactVersion',
               'artifactName',
               'scheduleExpr',
               'name',
               'description',
               'startson',
               'enddate',
               'endsafter',
               'repeats',
               'payload',
              ]
            );
          return;
        }
        client.createSchedule({
          notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
          notebookVersion: versionID,
          projectId: CDSXAX.NotebookCtrl.getProjectId()
        }, data);
      },
      /**
       * Creates a new job schedule.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/create_schedule}
       * @see {@link http://www.quartz-scheduler.org/documentation/quartz-2.1.x/tutorials/crontrigger.html}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {Object} data - data used to create the job schedule
       * @param {String} [data.artifactType] - indicates the artifact type to be scheduled. This should be always set to <code>jupyterNotebook</code>
       * @param {String} data.artifactID - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactVersion] - GUID of the notebook version to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactName] - The name of the notebook to be scheduled. Don't use quotes as part of the name.
       * @param {String} data.scheduleExpr - The Quartz cron expression to be used to create the job schedule
       * @param {String} data.name - The name of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 256.
       * @param {String} data.description - The description of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 512.
       * @param {String} [data.startson] - ISO 8601 compliant start date and time format for the job schedule to be created.
       * @param {String} [data.enddate] - ISO 8601 compliant end date and time format for the job schedule to be created.
       * @param {String} [data.endsafter] - DEPRECATED: Indicates after how many executions the job schedule expires.
       * @param {String} [data.repeats] - Indicates the cycle used to repeatedly execute a job schedule. Could be either <code>H</code> (hourly), <code>ED</code> (daily), <code>EW</code> (weekly), <code>M</code> (monthly) or <code>Y</code> (yearly)
       * @param {String} [data.payload] - The JSON serialized HTML form payload.
       */
      createSchedule: function (options, data) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        if (!data) {
          _con.error(
              'The following data dictionary needs to be provided: ',
              [
               'artifactType',
               'artifactID',
               'artifactVersion',
               'artifactName',
               'scheduleExpr',
               'name',
               'description',
               'startson',
               'enddate',
               'endsafter',
               'repeats',
               'payload',
              ]
            );
          return;
        }
        client.getSchedulesUsingCurrentContext();
        var promise = model.createSchedule(options, data);
        promise.then(function (result) {
          if (_lastResult && _lastResult.schedules.length > 0) {
            _con.log('One additional schedule has been created');
          } else {
            _con.log('One schedule has been created');
          }
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedule could not be created.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Returns job schedules scoped to the current notebook and project.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.getSchedulesUsingCurrentContext()
       *
       * @memberof SchedulingClient
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       */
      getSchedulesUsingCurrentContext: function () {
        var options = {
            notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
            projectId: CDSXAX.NotebookCtrl.getProjectId()
          };
        client.getSchedules(options);
      },
      /**
       * Returns job schedules scoped to the current notebook and project.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       */
      getSchedules: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getSchedules(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedules could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Returns job schedules scoped to the current project.
       * The Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.getSchedulesForProjectUsingCurrentContext()
       *
       * @memberof SchedulingClient
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       */
      getSchedulesForProjectUsingCurrentContext: function () {
        var options = {
            projectId: CDSXAX.NotebookCtrl.getProjectId()
          };
        client.getSchedulesForProject(options);
      },
      /**
       * Returns job schedules scoped to the current project.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       */
      getSchedulesForProject: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'projectId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getSchedulesForProject(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedules could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Returns scheduled versions for the current notebook and project.
       *
       * @example
       * window.schedulingClient.getScheduledVersionForNotebookUsingCurrentContext()
       *
       * @memberof SchedulingClient
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       */
      getScheduledVersionForNotebookUsingCurrentContext: function () {
        var options = {
            projectId: CDSXAX.NotebookCtrl.getProjectId(),
            notebookId: CDSXAX.NotebookCtrl.getNotebookId()
          };
        client.getScheduledVersionForNotebook(options);
      },
      /**
       * Returns scheduled versions for the provided notebook and project.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_scheduleby_artifactid}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.notebookId - GUID that identifies the checkpoint version to which a schedule belongs to.
       */
      getScheduledVersionForNotebook: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'projectId',
              'notebookId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getScheduledVersionForNotebook(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedules could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Deletes all schedules of the user currently logged in.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.deleteAllSchedulesUsingCurrentContext()
       *
       * @memberof SchedulingClient
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/delete_all_schedules}
       */
      deleteAllSchedulesUsingCurrentContext: function () {
        var options = {
            notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
            projectId: CDSXAX.NotebookCtrl.getProjectId()
          };
        client.deleteAllSchedules(options);
      },
      /**
       * Deletes all schedules of the user currently logged in.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/delete_all_schedules}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       */
      deleteAllSchedules: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.deleteAllSchedules(options);
        promise.then(function () {
          _lastResult = null;
          _con.log('All schedules have been deleted.');
        }).fail(function (data) {
          _con.error('Schedules could not be deleted.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Get the list of all schedules [including JupyterNotebook, Pipeline and Pipeline Model] for the user.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.getAllSchedulesUsingCurrentContext()
       *
       * @memberof SchedulingClient
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_all_schedules}
       */
      getAllSchedulesUsingCurrentContext: function () {
        var options = {
            notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
            projectId: CDSXAX.NotebookCtrl.getProjectId()
          };
        client.getAllSchedules(options);
      },
      /**
       * Get the list of all schedules [including JupyterNotebook, Pipeline and Pipeline Model] for the user.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_all_schedules}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       */
      getAllSchedules: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getAllSchedules(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedules could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Pauses a particular schedule.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.pauseScheduleUsingCurrentContext('18622773-fd6d-43fd-9e55-a943c0bb2b43')
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/pause_schedule}
       *
       * @memberof SchedulingClient
       * @param {String} scheduleId - the GUID of the job schedule to be paused.
       */
      pauseScheduleUsingCurrentContext: function (scheduleId) {
        var options = {
            notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
            projectId: CDSXAX.NotebookCtrl.getProjectId(),
            scheduleId: scheduleId
          };
        client.pauseSchedule(options);
      },
      /**
       * Pauses a particular schedule.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/pause_schedule}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule to be paused.
       */
      pauseSchedule: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.pauseSchedule(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedule could not be paused.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Resumes a particular schedule.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.resumeScheduleUsingCurrentContext('18622773-fd6d-43fd-9e55-a943c0bb2b43')
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/resume_schedule}
       *
       * @memberof SchedulingClient
       * @param {String} scheduleId - the GUID of the job schedule to be resumed.
       */
      resumeScheduleUsingCurrentContext: function (scheduleId) {
        var options = {
            notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
            projectId: CDSXAX.NotebookCtrl.getProjectId(),
            scheduleId: scheduleId
          };
        client.resumeSchedule(options);
      },
      /**
       * Resumes a particular schedule.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/resume_schedule}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule to be resumed.
       */
      resumeSchedule: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.resumeSchedule(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedule could not be resumed.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Deletes existing schedules by Id for the user. The API performs a soft-delete of the schedule metadata.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.deleteScheduleUsingCurrentContext('18622773-fd6d-43fd-9e55-a943c0bb2b43')
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/delete_schedule}
       *
       * @memberof SchedulingClient
       * @param {String} scheduleId - the GUID of the job schedule to be deleted.
       */
      deleteScheduleUsingCurrentContext: function (scheduleId) {
        var options = {
          notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
          projectId: CDSXAX.NotebookCtrl.getProjectId(),
          scheduleId: scheduleId
        };
        client.deleteSchedule(options);
      },
      /**
       * Deletes existing schedules by Id for the user. The API performs a soft-delete of the schedule metadata.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/delete_schedule}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule to be deleted.
       */
      deleteSchedule: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
          options.delete = true;
        }
        var promise = model.deleteSchedule(options);
        promise.then(function () {
          _lastResult = null;
          _con.log('Schedule successfully deleted.');
        }).fail(function (data) {
          _con.error('Schedule deletion failed.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Get the specific schedules [including JupyterNotebook, Pipeline and Pipeline Model] for the user.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.getScheduleUsingCurrentContext('18622773-fd6d-43fd-9e55-a943c0bb2b43')
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_schedule}
       *
       * @memberof SchedulingClient
       * @param {String} scheduleId - the GUID of the job schedule to be retrieved.
       */
      getScheduleUsingCurrentContext: function (scheduleId) {
        if (!scheduleId) {
          _con.log('No schedule ID provided.');
          return;
        }
        client.getSchedule({
          notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
          projectId: CDSXAX.NotebookCtrl.getProjectId(),
          scheduleId: scheduleId
        });
      },
      /**
       * Get the specific schedules [including JupyterNotebook, Pipeline and Pipeline Model] for the user.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/get_schedule}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule to be retrieved.
       */
      getSchedule: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getSchedule(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Schedule could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Updates schedule details for a particular schedule.
       * This API deletes the existing schedule and creates a new one with the updated details.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/update_schedule}
       * @see {@link http://www.quartz-scheduler.org/documentation/quartz-2.1.x/tutorials/crontrigger.html}
       *
       * @memberof SchedulingClient
       * @param {Object} data - data used to update the job schedule
       * @param {String} [data.artifactType] - indicates the artifact type to be scheduled. This should be always set to <code>jupyterNotebook</code>
       * @param {String} data.artifactID - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactVersion] - GUID of the notebook version to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactName] - The name of the notebook to be scheduled. Don't use quotes as part of the name.
       * @param {String} data.scheduleExpr - The Quartz cron expression to be used to create the job schedule
       * @param {String} data.name - The name of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 256.
       * @param {String} data.description - The description of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 512.
       * @param {String} [data.startson] - ISO 8601 compliant start date and time format for the job schedule to be created.
       * @param {String} [data.enddate] - ISO 8601 compliant end date and time format for the job schedule to be created.
       * @param {String} [data.endsafter] - DEPRECATED: Indicates after how many executions the job schedule expires.
       * @param {String} [data.repeats] - Indicates the cycle used to repeatedly execute a job schedule. Could be either <code>H</code> (hourly), <code>ED</code> (daily), <code>EW</code> (weekly), <code>M</code> (monthly) or <code>Y</code> (yearly)
       * @param {String} [data.payload] - The JSON serialized HTML form payload.
       * @param {String} scheduleId - the GUID of the job schedule to be updated.
       */
      updateScheduleUsingCurrentContext: function (data, scheduleId) {
        if (!data) {
          _con.error(
              'The following data dictionary needs to be provided: ',
              [
               'artifactType',
               'artifactID',
               'artifactVersion',
               'artifactName',
               'scheduleExpr',
               'name',
               'description',
               'startson',
               'enddate',
               'endsafter',
               'repeats',
               'payload',
              ]
            );
          return;
        }
        client.updateSchedule({
          notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
          projectId: CDSXAX.NotebookCtrl.getProjectId(),
          scheduleId: scheduleId
        }, data);
      },
      /**
       * Updates schedule details for a particular schedule.
       * This API deletes the existing schedule and creates a new one with the updated details.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/scheduler/update_schedule}
       * @see {@link http://www.quartz-scheduler.org/documentation/quartz-2.1.x/tutorials/crontrigger.html}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule to be updated.
       * @param {Object} data - data used to update the job schedule
       * @param {String} [data.artifactType] - indicates the artifact type to be scheduled. This should be always set to <code>jupyterNotebook</code>
       * @param {String} data.artifactID - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactVersion] - GUID of the notebook version to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} [data.artifactName] - The name of the notebook to be scheduled. Don't use quotes as part of the name.
       * @param {String} data.scheduleExpr - The Quartz cron expression to be used to create the job schedule
       * @param {String} data.name - The name of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 256.
       * @param {String} data.description - The description of the job schedule to be created. Don't use single quotes as part of the name. Max amount of characters is 512.
       * @param {String} [data.startson] - ISO 8601 compliant start date and time format for the job schedule to be created.
       * @param {String} [data.enddate] - ISO 8601 compliant end date and time format for the job schedule to be created.
       * @param {String} [data.endsafter] - DEPRECATED: Indicates after how many executions the job schedule expires.
       * @param {String} [data.repeats] - Indicates the cycle used to repeatedly execute a job schedule. Could be either <code>H</code> (hourly), <code>ED</code> (daily), <code>EW</code> (weekly), <code>M</code> (monthly) or <code>Y</code> (yearly)
       * @param {String} [data.payload] - The JSON serialized HTML form payload.
       */
      updateSchedule: function (options, data) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        if (!data) {
          _con.error(
              'The following data dictionary needs to be provided: ',
              [
               'artifactType',
               'artifactID',
               'artifactVersion',
               'artifactName',
               'scheduleExpr',
               'name',
               'description',
               'startson',
               'enddate',
               'endsafter',
               'repeats',
               'payload',
              ]
            );
          return;
        }
        var promise = model.updateSchedule(options, data);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Could not update schedule.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      },
      /**
       * Get execution info based on schedule ID.
       * Notebook ID and Project ID will be used from the current context.
       *
       * @example
       * window.schedulingClient.getExecutionInfoUsingCurrentContext('18622773-fd6d-43fd-9e55-a943c0bb2b43')
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/batch_deploy/schedule_info}
       *
       * @memberof SchedulingClient
       * @param {String} scheduleId - the GUID of the job schedule for which to retrieve execution info.
       */
      getExecutionInfoUsingCurrentContext: function (scheduleId) {
        if (!scheduleId) {
          _con.log('No schedule ID provided.');
          return;
        }
        client.getExecutionInfo({
          notebookId: CDSXAX.NotebookCtrl.getNotebookId(),
          projectId: CDSXAX.NotebookCtrl.getProjectId(),
          scheduleId: scheduleId
        });
      },
      /**
       * Get execution info based on schedule ID.
       *
       * @see {@link http://ngpmicroservicedocs.stage1.mybluemix.net/#!/batch_deploy/schedule_info}
       *
       * @memberof SchedulingClient
       * @param {Object} options - options necessary to be able to call the REST endpoint with the appropriate context information
       * @param {String} options.notebookId - GUID that identifies the notebook to be scheduled. Either provide the master GUID of a notebook or a checkpoint GUID.
       * @param {String} options.projectId - GUID that identifies the project to which the notebook to be scheduled belongs to.
       * @param {String} options.scheduleId - the GUID of the job schedule for which to retrieve execution info.
       */
      getExecutionInfo: function (options) {
        if (!options) {
          _con.error(
            'The following options need to be passed as a dictionary: ',
            [
              'notebookId',
              'projectId',
              'scheduleId'
            ]
          );
          return;
        } else {
          options.entryPrefix = CDSXAX.NotebookCtrl.getEntryPrefix();
        }
        var promise = model.getExecutionInfo(options);
        promise.then(function (result) {
          _lastResult = result;
          _con.log(result);
        }).fail(function (data) {
          _con.error('Execution information could not be retieved.');
          if (data) {
            _lastError = {
              errorDetails: {
                responseText: data.responseText,
                status: data.status,
                statusText: data.statusText
              }
            };
            _con.debug(_lastError);
          }
        });
      }
    };

    return client;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['jquery'],
      ['../../models/schedulingModel'],
      schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
      require('jquery'),
      require('../../models/schedulingModel')
    );
  } else {
    if (window.feature && window.feature.getMyEnabledFeatureKeys().indexOf('scheduling-tooling') >= 0) {
      window.schedulingClient = schedulingFactory(jQuery, window.schedulingModel, window.schedulingTools);
    }
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides the scheduling dialog in support of creating job schedules.
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingDialog
 * @namespace SchedulingDialog
 */
CDSXAX.SchedulingDialog = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function ($, model, tools, dateTime) {
    var

    dialog,
    _wnd = window,
    _con = window.console,
    _notebookTitleField = $('#notebookTitle'),

    _ENDDATE_TIME_OFFSET = 60 * 60000,
    _CHECKPOINT_URL_FRAGMENT = '/view?type=checkpoint&projectid=',
    _LATEST_VERSION_IDENTIFIER = 'LATEST';

    dialog = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',
      /**
       * Encodes a string value using the browsers built-in parser capability.
       *
       * @memberof SchedulingDialog
       * @param {String} data - the string that must be encoded
       * @returns {String}
       */
      htmlEncode: function (data) {
        return $('<div/>').text(data).html();
      },
      /**
       * Decodes a string value using the browsers built-in parser capability.
       *
       * @memberof SchedulingDialog
       * @param {String} data - the string that must be decoded
       * @returns {String}
       */
      htmlDecode: function (data) {
        return data ? $('<div/>').html(data).text() : '';
      },
      /**
       * Encodes the schedule description accordingly so it can be passed to the
       * scheduling endpoint.
       *
       * @memberof SchedulingDialog
       * @param {String} data - the string that must be encoded
       * @returns {String}
       */
      encodeDescription: function (data) {
        var

        htmlEncodedStr = dialog.htmlEncode(data),
        jsonEncodedStr = JSON.stringify(htmlEncodedStr);

        return jsonEncodedStr || '';
      },
      /**
       * Decodes the schedule description accordingly so it can be used on the
       * scheduling dialog.
       *
       * @memberof SchedulingDialog
       * @param {String} data - the string that must be decoded
       * @returns {String}
       */
      decodeDescription: function (data) {
        if (data === false || data.length === 0) {
          return '';
        }

        var

        jsonDecodedStr ,
        htmlDecodedStr;

        try {
          jsonDecodedStr = JSON.parse(data);
          htmlDecodedStr = dialog.htmlDecode(jsonDecodedStr);
        } catch (e) {
          _con.error('Unable to decode data from scheduling backend.');
        }

        return htmlDecodedStr || '';
      },
      /**
       * Retrieves the checkpoint GUID based on a given DOM element
       *
       * @memberof SchedulingDialog
       * @returns {String}
       */
      getCheckpointGUID: function () {
        var $select = $('#schedule_version'),
            $selectedOption = $select.find(':selected'),
            checkpointGUID,
            options;

        if ($selectedOption) {
          checkpointGUID = $selectedOption.val();
        }
        // If latest version is selected use the first checkpoint in the list
        // the assumption is, that the list of versions is sorted and thus
        // the first version is the latest version.
        if (checkpointGUID && checkpointGUID === _LATEST_VERSION_IDENTIFIER) {
          options = $select[0].options;
          checkpointGUID = options[1].value;
        }

        return checkpointGUID;
      },
      /**
       * Opens a new browser window to view the currently selected checkpoint version
       *
       * @memberof SchedulingDialog
       */
      viewVersion: function () {
        var checkpointGUID = dialog.getCheckpointGUID(),
            projectID,
            prefix,
            link;

        if (checkpointGUID) {
          projectID = CDSXAX.NotebookCtrl.getProjectId();
          prefix = CDSXAX.NotebookCtrl.getEntryPrefix();

          link = prefix + '/notebooks/' + checkpointGUID + _CHECKPOINT_URL_FRAGMENT + projectID;
          _wnd.open(link, '_blank');
        }
      },
      /**
       * Validates the content of a given <pre>&lt;textarea&gt;&lt;textarea/&gt;</pre> element.
       * The element needs to have a <pre>pattern</pre> attribute that contains a regular
       * expression. That expression will be used to validate the textarea contents.
       *
       * @todo Utility function, should be factored out.
       *
       * @memberof SchedulingDialog
       */
      validateTextArea: function () {
        var errorMsg = 'Please match the format requested.',
            textarea = this,
            pattern = new RegExp('^' + $(textarea).attr('pattern') + '$');

        if ($(textarea).val().length > 0) {
          // check each line of text
          $.each($(textarea).val().split('\n'), function () {
            // check if the line matches the pattern
            var hasError = !this.match(pattern);
            if (typeof textarea.setCustomValidity === 'function') {
              textarea.setCustomValidity(hasError ? errorMsg : '');
            } else {
              // Not supported by the browser, fallback to manual error display...
              $(textarea).toggleClass('error', !!hasError);
              $(textarea).toggleClass('ok', !hasError);
              if (hasError) {
                $(textarea).attr('title', errorMsg);
              } else {
                $(textarea).removeAttr('title');
              }
            }
            return !hasError;
          });
        }
      },
      /**
       * Enacts form validation on a fiven DOM container element (e.g. a DIV)
       *
       * @todo Utility function, should be factored out.
       *
       * @memberof SchedulingDialog
       * @param {Object} $forContainerElement - the jQuery object representing an HTML container for which form validation should be enacted.
       */
      enactFormValidation: function ($forContainerElement) {
        // this is kind of a hack to establish form validation in cases where there
        // is no tab widget available due to an instance that has no object store.
        // without a tab widget we need to enable form validation on our own.
        if ($forContainerElement && $forContainerElement.length === 0) {
          $forContainerElement = $('.vex-dialog-form');
        }

        CDSXAX.Tab.enactFormValidationForTab($forContainerElement);
      },
      /**
       * Sets the content of the summary SPAN that contains information towards
       * what settings will be used to initialize the schedule.
       *
       * @memberof SchedulingDialog
       * @param {String} notebookTitle - the title of the notebook for which to create or update a schedule
       */
      setSchedulingInfo: function (notebookTitle) {
        var

        startsOnDate = new Date($('#schedule_startsOnDate').val()),
        endsAfterDate = new Date($('#schedule_endsAfterDate').val()),
        startsOnTime = new Date($('#schedule_startsOnTime').val()),
        scheduleVersion = $('#schedule_version').children('option:selected').text() + ' ',

        mode = $('#schedule_repeats').val(),
        date = dateTime.getDateForTimeAndDay(startsOnTime, startsOnDate),

        minutesUTC = date.getUTCMinutes(),
        hoursUTC = date.getUTCHours(),
        dayOfMonthUTC = date.getUTCDate(),
        dayOfWeekUTC = tools.getDayOfWeek(date.getUTCDay() + 1),
        monthUTC = date.getUTCMonth(),
        yearUTC = date.getUTCFullYear,

        humanReadableText,
        computedExpression,
        $spanHumanReadableText = $('#schedule_summaryExplanatoryText'),
        $spanNotebookName = $('#schedule_notebookName'),
        $spanVersionLabel = $('#schedule_versionLabel'),
        $spanComputedExpression = $('#schedule_computedExpression'),
        $spanEndsAfterTime = $('#schedule_endsAfterTime');

        // save that information to a hidden SPAN for debugging purposes
        $spanEndsAfterTime.text(endsAfterDate.toString());

        humanReadableText =
          tools.getLocalBasedSchedulingInfo(
            startsOnDate,
            endsAfterDate,
            startsOnTime,
            mode
          ).humanReadableText;
        computedExpression = tools.getScheduleExpression(
          mode,
          minutesUTC,
          hoursUTC,
          dayOfMonthUTC,
          monthUTC + 1, // because getUTCMonth uses a zero based index
          dayOfWeekUTC,
          yearUTC
        );

        $spanNotebookName.text('"' + notebookTitle + '" notebook from ');
        $spanVersionLabel.text(scheduleVersion);
        $spanHumanReadableText.text(humanReadableText);
        $spanComputedExpression.text(computedExpression);
      },
      /**
       * Convenience function to open the scheduling dialog with data from the
       * currently opened notebook.
       *
       * @memberof SchedulingDialog
       * @param {String} [notebookVersion] - checkpoint GUID to be scheduled
       */
      openSchedulingDialogUsingCurrentContext: function (notebookVersion) {
        dialog.openSchedulingDialogWithInfo(
          CDSXAX.NotebookCtrl.getEntryPrefix(),
          CDSXAX.NotebookCtrl.getProjectId(),
          CDSXAX.NotebookCtrl.getNotebookId(),
          _notebookTitleField.val(),
          notebookVersion || '',
          function () {
            CDSXAX.CommonCtrl.showDarkPageSpinner(false);
          }
        );
      },
      /**
       * Wrapper function that composes a scheduling info dictionary and uses it
       * to open the scheduling dialog.
       *
       * @memberof SchedulingDialog
       * @param {String} entryPrefix - the prefix used to serve this app. For scheduling this is always <pre>/analytics</pre>
       * @param {String} projectID - the project GUID for which to create or update a schedule
       * @param {String} notebookID - the notebook GUID for which to create or update a schedule
       * @param {String} notebookTitle - the title of the notebook to be scheduled
       * @param {String} [notebookVersion] - checkpoint GUID to be scheduled
       * @param {Function} callback - will be called once the dialog closes
       */
      openSchedulingDialogWithInfo: function
      (
        entryPrefix,
        projectID,
        notebookID,
        notebookTitle,
        notebookVersion,
        callback
      ) {
        dialog.openSchedulingDialog(entryPrefix, false /* creation */, {
          name: '',
          description: '',
          projectID: projectID,
          notebookID: notebookID,
          notebookTitle: notebookTitle,
          notebookVersion: notebookVersion,
          scheduleExpr: null,
          scheduleStartTime: (new Date()).getTime(),
          scheduleUntilTime: (new Date()).getTime()
        }, callback);
      },
      /**
       * Opens the scheduling dialog. The dialog will be opened in either create
       * or update mode depending on whether the notebook already has a schedule.
       *
       * @param {String} entryPrefix - the prefix used to serve this app. For scheduling this is always <pre>/analytics</pre>
       * @param {String|Boolean} scheduleId - set to false if not updating a schedule but creating a new one
       * @param {Object} scheduleInfo - contains scheduling information
       * @param {String} scheduleInfo.name - schedule name
       * @param {String} scheduleInfo.description - schedule description
       * @param {String} scheduleInfo.projectID - project ID to which the artifact to be scheduled belongs to
       * @param {String} scheduleInfo.notebookID - the master GUID of the artifact to be scheduled
       * @param {String} scheduleInfo.notebookTitle - the title of the artifact to be scheduled
       * @param {String} scheduleInfo.notebookVersion - the checkpoint GUID of the artifact to be scheduled if any
       * @param {String} scheduleInfo.scheduleExpr - schedule expression
       * @param {Number} scheduleInfo.scheduleStartTime - schedule start date+time stamp
       * @param {Number} scheduleInfo.scheduleUntilTime - schedule end date+time stamp
       * @param {Function} callback - will be called once the dialog closes
       */
      openSchedulingDialog: function (entryPrefix, scheduleId, scheduleInfo, callback) {
        var

        projectID = scheduleInfo.projectID,
        notebookID = scheduleInfo.notebookID,
        notebookTitle = scheduleInfo.notebookTitle,
        notebookVersion = scheduleInfo.notebookVersion || '',
        lastFocusedElement = document.activeElement,
        modelOptions = {
          entryPrefix: entryPrefix,
          notebookId: notebookID,
          notebookVersion: notebookVersion,
          projectId: projectID,
          scheduleId: scheduleId
        };
        // Ensure that callback is always a function that can be called
        if (typeof callback !== 'function') {
          callback = function (err) {
            if (err) {
              _con.log(err);
            }
          };
        }

        CDSXAX.CommonCtrl.showDarkPageSpinner(true);
        window.schedulingModel.getSchedulingDialogContents(modelOptions).then(function (markup) {
          var

          options = {};

          options.customClass = 'vex-custom-dimension vex-scheduling-dlg';
          options.title = '';
          options.showCloseButton = false;
          options.overlayClosesOnClick = false;
          options.escapeButtonCloses = false;
          options.afterOpen = function () {
            var content = this.contentEl;
            $(content).append(
              CDSXAX.Dialog.appendToDialogForm(
                markup +
                CDSXAX.Dialog.getYESNOButtonbar({
                  'label': '',
                  'disabled': true
                }, {
                  'label': 'cancel',
                  'disabled': false
                })
              )
            );

            // initialize the datasource dialog stuff now that it is open
            dialog.init(notebookTitle, scheduleInfo);
            CDSXAX.Dialog.applyCustomDialogShims(this);
          };
          options.afterClose =  function () {
            CDSXAX.Dialog.removeCustomDialogShims();
            $(lastFocusedElement).focus();
            if (CDSXAX.Dialog.getFormData() !== null) {
              dialog.getScheduleData(entryPrefix, projectID, notebookID, notebookTitle, callback);
            } else {
              callback(null, false);  // PROTOCOL
            }
          };

          CDSXAX.CommonCtrl.showDarkPageSpinner(false);
          CDSXAX.Dialog.showCustomDialog(options);
        }).fail(function (result) {
          if (result.status === 401) {
            document.location.reload(true);
          } else {
            CDSXAX.Dialog.showAlertMessage(
              'Unable to open job schedule dialog due to error. Status code: ' + result.status
            );
            CDSXAX.CommonCtrl.showDarkPageSpinner(false);
          }
        });
      },
      /**
       * Retrieves the data that has been provided on the scheduling dialog and
       * does a create or update REST call against the scheduling backend.
       *
       * @param {String} entryPrefix - the prefix used to serve this app. For scheduling this is always <pre>/analytics</pre>
       * @param {String} projectID - the project GUID for which to create or update a schedule
       * @param {String} notebookID - the notebook GUID for which to create or update a schedule
       * @param {String} notebookTitle - the title of the notebook to be scheduled
       * @param {Function} callback - will be called once the dialog closes
       */
      getScheduleData: function (entryPrefix, projectID, notebookID, notebookTitle, callback) {
        var

        formData = CDSXAX.Dialog.getFormData(),
        expression, // final Cron expression
        name, // job schedule name
        description, // job schedule description
        runevery, // run every nth hour
        time, // at time
        startson, // starts on date > pretty format
        date, // starts on date > raw date format
        endsafter, // ends after n occurrences
        enddate, // occurrences translated to a date object
        monthUTC,
        yearUTC,
        hourUTC,
        minuteUTC,
        repeats, // repeats e.g. hourly,
        dayOfWeekUTC, // taken from startson 1 = SUN, 2 = MON, 3 = TUE, 4 = WED, 5 = THU, 6 = FRI, 7 = SAT
        dayOfMonthUTC,
        scheduleId,
        notebookVersion;

        if (formData) {

          // decode form data - maybe there's a more elegant way
          // to access array element by key directly
          $.each(formData, function (i, entry) {
            if (entry.name === 'name') {
              name = entry.value;
            } else if (entry.name === 'description') {
              description = entry.value;
            } else if (entry.name === 'runevery') {
              runevery = parseInt(entry.value);
            } else if (entry.name === 'time') {
              time = new Date(entry.value);
            } else if (entry.name === 'enddate') {
              enddate = new Date(entry.value);
            } else if (entry.name === 'endsafter') {
              endsafter = entry.value;
            } else if (entry.name === 'startdate') {
              date = new Date(entry.value);
            } else if (entry.name === 'startson') {
              startson = entry.value;
            } else if (entry.name === 'repeats') {
              repeats = entry.value;
            } else if (entry.name === 'schedule_id') {
              scheduleId = entry.value;
            } else if (entry.name === 'version') {
              notebookVersion = entry.value;
            }
          });

          date = dateTime.getDateForTimeAndDay(time, date);
          //enddate = dateTime.getDateForTimeAndDay(time, enddate);
          enddate = new Date(enddate.getTime());

          minuteUTC = date.getUTCMinutes();
          hourUTC = date.getUTCHours();
          dayOfMonthUTC = date.getUTCDate();
          dayOfWeekUTC = tools.getDayOfWeek(date.getUTCDay() + 1);
          monthUTC = date.getUTCMonth();
          yearUTC = date.getUTCFullYear();

          expression = tools.getScheduleExpression(
            repeats,
            minuteUTC,
            hourUTC,
            dayOfMonthUTC,
            monthUTC + 1, // because getUTCMonth uses a zero based index
            dayOfWeekUTC,
            yearUTC
          );

          var successCB = null;
          var failureCB = null;
          var modelOptions = {
            entryPrefix: entryPrefix,
            notebookId: notebookID,
            notebookVersion: notebookVersion,
            projectId: projectID,
            scheduleId: scheduleId
          };
          if (scheduleId) {
            // update
            successCB = dialog.successfulUpdateCB.bind(null, callback);
            failureCB = dialog.failedUpdateCB.bind(null, callback);
          } else {
            successCB = dialog.successfulCreationCB.bind(null, callback);
            failureCB = dialog.failedCreationCB.bind(null, callback);
          }
          CDSXAX.CommonCtrl.showDarkPageSpinner(true);
          model.sendScheduleData(modelOptions, {
            'artifactType': 'jupyterNotebook',
            'artifactID': notebookID,
            'artifactVersion': notebookVersion,
            'artifactName': notebookTitle,
            'scheduleExpr': expression,
            'name': name,
            'description': dialog.encodeDescription(description),
            'startson': date.toISOString(),
            'enddate': enddate.toISOString(),
            'endsafter': endsafter,
            'repeats': repeats,
            'payload': formData
          }).then(successCB, failureCB);
        }
      },
      /**
       * Callback for successful schedule creation.
       *
       * @memberof SchedulingDialog
       */
      successfulCreationCB: function (callback, data) {
        if (data && data.schedule) {
          var

          name = data.details.name,
          id = data.details.id;
          dialog.sendSchedulingSegmentEvent('triggerCreateScheduleEvent', {
            scheduleID: id,
            scheduleName: name
          });
          CDSXAX.Dialog.showInfoMessage('The "' + name + '" job was successfully scheduled.');
          callback(null, data.details);
        } else {
          CDSXAX.Dialog.showAlertMessage('Job schedule entry could not be created.');
          callback(new Error('Job schedule entry could not be created.'), true);
        }
      },
      /**
       * Callback for successful schedule update.
       *
       * @memberof SchedulingDialog
       */
      successfulUpdateCB: function (callback, data) {
        if (data && data.schedule) {
          var

          name = data.details.name,
          id = data.details.id;
          dialog.sendSchedulingSegmentEvent('triggerUpdateScheduleEvent', {
            scheduleID: id,
            scheduleName: name
          });
          CDSXAX.Dialog.showInfoMessage('The "' + name + '" job was successfully rescheduled.');
          callback(null, data.details);
        } else {
          CDSXAX.Dialog.showAlertMessage('Job schedule entry could not be updated.');
          callback(new Error('Job schedule entry could not be updated.'), true);
        }
      },
      /**
       * Wrapper around the segment instrumentation plug-in for scheduling
       *
       * @memberof SchedulingDialog
       * @param {String} eventHandler - the name of the event to be triggered
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      sendSchedulingSegmentEvent: function (eventHandler, eventProperties) {
        if (window.apsx.metrics.segmentWrapper) {
          window.apsx.metrics.segmentWrapper.triggerSegmentEventForFeature(
            window.apsx.metrics.segmentWrapper.SCHEDULING_PLUGIN_NAME,
            eventHandler,
            eventProperties
          );
        }
      },
      /**
       * Callback for failed schedule creation.
       *
       * @memberof SchedulingDialog
       */
      failedCreationCB: function (callback, XMLHttpRequest) {
        CDSXAX.Dialog.showAlertForResponse({
          'default': {
            'title': 'Job schedule entry could not be created. Status code: ' + XMLHttpRequest.status
          },
          'timeout': {
            'title': 'Creating a new job schedule...',
            'message': 'Check if your new job schedule is in the list of available jobs.'
          }
        }, XMLHttpRequest.status, XMLHttpRequest.responseText);
        callback(new Error('Job schedule entry could not be created.'), true);
      },
      /**
       * Callback for failed schedule update.
       *
       * @memberof SchedulingDialog
       */
      failedUpdateCB: function (callback, XMLHttpRequest) {
        CDSXAX.Dialog.showAlertForResponse({
          'default': {
            'title': 'Job schedule entry could not be updated. Status code: ' + XMLHttpRequest.status
          },
          'timeout': {
            'title': 'Updating the job schedule...',
            'message': 'Check if the updated job schedule is in the list of available jobs.'
          }
        }, XMLHttpRequest.status, XMLHttpRequest.responseText);
        callback(new Error('Job schedule entry could not be updated.'), true);
      },
      /**
       * Determines whether a textarea does not contain text but its placeholder.
       *
       * Introduced to circumvent shortcomings in IE1 concerning the placeholder
       * attribute that becomes the text value of the text area element.
       *
       * @memberof SchedulingDialog
       * @param {String} selector - selector used to identify the textarea element.
       * @returns {Boolean}
       */
      textAreaElementContainsPlaceholder: function (selector) {
        var

        $textarea = $(selector),
        $placeholderValue = $textarea.attr('placeholder'),
        $textareaValue = $textarea.val();

        return $placeholderValue === $textareaValue;
      },
      /**
       * Helper function to set end time based on certain heuristics
       *
       * @memberof SchedulingDialog
       * @param {Date} startDate - startDate of the schedule
       * @param {Date} endDate - endDate of the schedule
       * @param {Number} time - startTime of the schedule
       */
      setEndTime: function (startDate, endDate, time) {
        var

        $dropDown = $('#schedule_repeats'),
        repeats = $dropDown.val(),
        isSameDate = dateTime.isSameDateAs(startDate, endDate),
        isHourlySchedule = tools.getValueForRepeatsTranslationMap(repeats) === 'hourly',
        date = new Date(time),
        hours = date.getHours(),
        minutes = date.getMinutes();

        if (isSameDate && isHourlySchedule) {
          endDate.setHours(23);
          endDate.setMinutes(59);
          $('#schedule_endsAfterDate').val(
              endDate
          );
        } else {
          // per design decision end date will be with a 1h offset relative to the start date for new schedules
          endDate.setHours(hours + 1);
          endDate.setMinutes(minutes);
          $('#schedule_endsAfterDate').val(
              endDate
          );
        }
      },
      /**
       * Init function to initialize data and behaviour for scheduling
       *
       * @memberof SchedulingDialog
       * @param {String} notebookTitle - the title of the notebook to be scheduled
       * @param {Object} scheduleInfo - contains scheduling information
       * @param {String} scheduleInfo.name - schedule name
       * @param {String} scheduleInfo.description - schedule description
       * @param {String} scheduleInfo.projectID - project ID to which the artifact to be scheduled belongs to
       * @param {String} scheduleInfo.notebookID - the master GUID of the artifact to be scheduled
       * @param {String} scheduleInfo.notebookTitle - the title of the artifact to be scheduled
       * @param {String} scheduleInfo.notebookVersion - the checkpoint GUID of the artifact to be scheduled if any
       * @param {String} scheduleInfo.scheduleExpr - schedule expression
       * @param {Number} scheduleInfo.scheduleStartTime - schedule start date+time stamp
       * @param {Number} scheduleInfo.scheduleUntilTime - schedule end date+time stamp
       */
      init: function (notebookTitle, scheduleInfo) {
        // initialize metrics for the data source dialog separately
        // cause the dialog source markup and JS sources are loaded
        // dynamically after the dialog has been opened.
        CDSXAX.Metric.init();

        var

        scheduleId = $('#schedule_id').val(),
        scheduleName = $('#schedule_nameText').val(),
        scheduleExpr = $('#schedule_computedExpression').text(),
        // HACK:
        // In IE the placeholder becomes the textarea text and thus we try to
        // prevent to write that dummy text back to the text area
        scheduleDescription =
          dialog.textAreaElementContainsPlaceholder('#schedule_description') ?
              '' :
              $('#schedule_description').val(),
        //jscs:disable maximumLineLength
        // per design decision the initial start time will be 1h in advance to NOW
        scheduleStartTime = new Date($('#schedule_startsOnDate').val()).getTime() || scheduleInfo.scheduleStartTime + _ENDDATE_TIME_OFFSET,
        // per design decision end date will be initialized with a 1h offset relative to the start date for new schedules
        scheduleUntilTime = new Date($('#schedule_endsAfterDate').val()).getTime() || scheduleInfo.scheduleUntilTime + 2 * _ENDDATE_TIME_OFFSET,
        //jscs:enable maximumLineLength
        scheduleStartDate = null,
        scheduleUntilDate = null,
        scheduleParts;

        if (scheduleId && scheduleId.length > 0) {
          CDSXAX.Dialog.updateDialogHeader('Reschedule Job');
          CDSXAX.Dialog.updateYESButton('reschedule');
        } else {
          CDSXAX.Dialog.updateDialogHeader('Schedule Job');
          CDSXAX.Dialog.updateYESButton('schedule');
        }

        // Convert to equivalent local time
        if (scheduleStartTime) {
          scheduleStartDate = new Date(scheduleStartTime);
        }
        if (scheduleUntilTime) {
          scheduleUntilDate = new Date(scheduleUntilTime);
        }

        // scheduleExpr: '0 4 16 ? * Tue *',
        if (typeof scheduleExpr === 'string') {
          scheduleParts = tools.getScheduleMetadata(scheduleExpr);
        }

        $('#schedule_nameText').val(scheduleName);
        $('#schedule_description').text(dialog.decodeDescription(scheduleDescription));
        $('#schedule_timeText').timepicker({
          className: 'scheduleTimePicker',
          timeFormat: 'h:i A'
        });
        $('#schedule_timeText').on('change', function () {
          var

          localTime = $(this).timepicker('getTime').getTime(),
          date = new Date(localTime),
          $endDatePicker = $('#schedule_endsAfterText').datepicker().data('datepicker'),
          endDate = new Date($endDatePicker.date),
          $startDatePicker = $('#schedule_startsOnText').datepicker().data('datepicker'),
          startDate = new Date($startDatePicker.date);
          $('#schedule_startsOnTime').val(
              date
          );
          dialog.setEndTime(startDate, endDate, localTime);
          dialog.setSchedulingInfo(notebookTitle);
        });
        $('#schedule_timeText').timepicker('setTime', scheduleStartDate);
        $('#schedule_startsOnTime').val(
          scheduleStartDate
        );
        $('#schedule_endsAfterText').datepicker({
          language: 'en',
          classes: 'scheduleStartsOnDatePicker',
          dateFormat: 'dd MM yyyy',
          keyboardNav: true,
          position: 'top left',
          toggleSelected: false,
          minDate: new Date(),
          onSelect: function (formattedDate, date, picker) {
            var

            $timepicker = $('#schedule_timeText'),
            localTime = $timepicker.timepicker('getTime').getTime(),
            $startDatePicker = $('#schedule_startsOnText').datepicker().data('datepicker'),
            startDate = new Date($startDatePicker.date);

            picker.date = date;
            dialog.setEndTime(startDate, date, localTime);
            dialog.setSchedulingInfo(notebookTitle);
          }
        }).data('datepicker').selectDate(scheduleUntilDate);
        $('#schedule_endsAfterText').keypress(function (e) {
          if (e.which === 13) {
            var datepicker = $('#schedule_endsAfterText').datepicker().data('datepicker');
            datepicker.hide();
          }
        });
        $('#schedule_endsAfterDate').val(
          scheduleUntilDate
        );
        $('#schedule_startsOnText').datepicker({
          language: 'en',
          classes: 'scheduleStartsOnDatePicker',
          dateFormat: 'dd MM yyyy',
          keyboardNav: true,
          toggleSelected: false,
          minDate: new Date(),
          onSelect: function (formattedDate, date, picker) {
            var datepicker = $('#schedule_endsAfterText').datepicker().data('datepicker'),
                $timepicker = $('#schedule_timeText'),
                localTime = $timepicker.timepicker('getTime').getTime(),
                $endDatePicker,
                endDate;

            picker.date = date;

            if (datepicker.date < date && datepicker.date >= new Date()) {
              // sync starts on date with ends on min date
              datepicker.update('minDate', date);
              datepicker.selectDate(date);
              datepicker.date = date;
              $('#schedule_endsAfterDate').val(
                  date
              );
            } else if (datepicker.date > date && datepicker.date >= new Date()) {
              datepicker.update('minDate', date);
            }
            $('#schedule_startsOnDate').val(
                date
            );
            $endDatePicker = $('#schedule_endsAfterText').datepicker().data('datepicker');
            endDate = new Date($endDatePicker.date);
            dialog.setEndTime(date, endDate, localTime);
            dialog.setSchedulingInfo(notebookTitle);
          }
        }).data('datepicker').selectDate(scheduleStartDate);
        $('#schedule_startsOnText').keypress(function (e) {
          if (e.which === 13) {
            var datepicker = $('#schedule_startsOnText').datepicker().data('datepicker');
            datepicker.hide();
          }
        });
        $('#schedule_startsOnDate').val(
          scheduleStartDate
        );
        CDSXAX.FormHandling.appendArrowToEverySelectBox();
        CDSXAX.FormHandling.augmentFormElementWithIcon(
          CDSXAX.FormHandling.AUGMENTATION_LOC_AFTER,
          '.hasIcon'
        );
        $('#schedule_description').on('keyup input', function (e) {
          var target = e.target,
              remaining = 250 - $(target).val().length;

          $('#schedule_descCount').text(remaining + ' Characters Remaining');
        });
        // commented out due to issue #45. We should not limit input on description
        // fields anyhow. Instead the backend needs to escape input accordingly.
        //$('#schedule_description').keyup(dialog.validateTextArea);
        $('#schedule_nameText').on('keyup input', function (e) {
          var target = e.target,
              remaining = 50 - $(target).val().length;

          $('#schedule_nameCount').text(remaining + ' Characters Remaining');
        });

        $('#schedule_repeats').on('change', function () {
          var

          $timepicker = $('#schedule_timeText'),
          localTime = $timepicker.timepicker('getTime').getTime(),
          $startDatePicker = $('#schedule_startsOnText').datepicker().data('datepicker'),
          startDate = new Date($startDatePicker.date),
          $endDatePicker = $('#schedule_endsAfterText').datepicker().data('datepicker'),
          endDate = new Date($endDatePicker.date);

          dialog.setEndTime(startDate, endDate, localTime);
          dialog.setSchedulingInfo(notebookTitle);
        });
        $('#schedule_repeats').val(scheduleParts.repeat).change();
        $('#vexDialogForm').change(function () {
          dialog.setSchedulingInfo(notebookTitle);
        });

        $('#schedule_versionLink > a').on('click keyup', function (e) {
          if (e.which === 1) {
            dialog.viewVersion();
          }
        });

        dialog.enactFormValidation($('.vex-dialog-form'));
        dialog.setEndTime(
         scheduleStartDate,
         scheduleUntilDate,
         $('#schedule_timeText').timepicker('getTime').getTime()
        );
        dialog.setSchedulingInfo(notebookTitle);
      }
    };

    return dialog;
  };

  if (typeof define === 'function' && define.amd) {
    define(
        ['jquery'],
        ['../../models/schedulingModel'],
        ['./schedulingTools'],
        ['./schedulingDateTime'],
        schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
        require('jquery'),
        require('../../models/schedulingModel'),
        require('./schedulingTools'),
        require('./schedulingDateTime')
    );
  } else {
    window.schedulingDialog = schedulingFactory(
      jQuery,
      window.schedulingModel,
      window.schedulingTools,
      window.schedulingDateTime
    );
  }
}).call(this);

(function (global) {
  'use strict';

  if (!Number.isNaN) {
    var global_isNaN = global.isNaN;

    Object.defineProperty(Number, 'isNaN', {
      value: function isNaN(value) {
        return typeof value === 'number' && global_isNaN(value);
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
  }
})(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.Dialog = (function ($) {
  'use strict';

  var

  _KEY_ENTER = 13,
  _formData = null,
  _formDataFiles = {},

  /**
   * Provides access to the serialized form if any. Serialization only takes place
   * once the primary button is pressed. Any other button wouldn't serialize form
   * data.
   *
   * @returns {String|Object}
   */
  _getFormData = function () {
    return _formData;
  },

  /**
   * Input fields of type file can't be serialized. Thus their files object is
   * stored in a dictionary so they can be process later on.
   *
   * @returns {Object}
   */
  _getFormDataFiles = function () {
    return _formDataFiles;
  },

  /**
   * Composes a DIV element containing an arbitrary header string to be used
   * as part of a VEX dialog.
   *
   * @param {String} header - the title string to be shown on the dialog
   * @returns {String} HTML markup representing the header
   */
  _getDialogHeader = function (header) {
    var

    $headerContainer = $('<div>', {
      class: 'vex-dialog-header',
      id: 'vex-dialog-header-container_' + header.trim()
    }),
    $header = $('<h2>', {
      id: 'vex-dialog-header_' + header.trim()
    });

    $header.append(header);
    $headerContainer.append($header);
    return $headerContainer.prop('outerHTML');
  },

  /**
   * Updates the header element of a dialog
   *
   * @param {String} header - the title string to be shown on the dialog
   */
  _updateDialogHeader = function (header) {
    var $header = $('.vex-dialog-header > h2');
    $header.text(header);
  },

  /**
   * Composes a primary button to be used on a button bar.
   *
   * If providing a primitive parameter to the function that parameter
   * should be of type {String} where of providing a complex parameter
   * to the function that type should be an array.
   *
   * Example:
   *
   * {'label': 'some button label', 'disabled': false}
   *
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @returns {Object} the button
   */
  _composeYESButton = function (yesLabel) {
    return _composeButton(yesLabel, 'vex-dialog-button-primary', true);
  },

  /**
   * Updates an existing submit button with a new label text
   *
   * @param {String} yesLabel = The new label the button should use
   */
  _updateYESButton = function (yesLabel) {
    var $button = $('.vex-dialog-buttons').find('.vex-dialog-button-primary');

    if ($button.is('button')) {
      $button.text(yesLabel);
    } else if ($button.is('input')) {
      $button.val(yesLabel);
    }
  },

  /**
   * Composes a tertiary button to be used on a button bar.
   *
   * If providing a primitive parameter to the function that parameter
   * should be of type {String} where of providing a complex parameter
   * to the function that type should be an array.
   *
   * Example:
   *
   * {'label': 'some button label', 'disabled': false}
   *
   * @param {(String|Object)} noLabel - Either a primitive or object representation of the button
   * @returns {Object} the button
   */
  _composeNOButton = function (noLabel) {
    return _composeButton(noLabel, 'vex-dialog-button-tertiary', false);
  },

  /**
   * Updates an existing cancel button with a new label text
   *
   * @param {String} noLabel = The new label the button should use
   */
  _updateNOButton = function (noLabel) {
    var $button = $('.vex-dialog-buttons').find('.vex-dialog-button-tertiary');

    if ($button.is('button')) {
      $button.text(noLabel);
    } else if ($button.is('input')) {
      $button.val(noLabel);
    }
  },

  /**
   * Composes a button for the button bar using the provided CSS class
   *
   * @param {(String|Object)} label - Either a primitive or object representation of the button
   * @param {String} buttonClass - The CSS class used for the button
   * @returns {Object} the button
   */
  _composeButton = function (label, buttonClass, useSubmitType) {
    var $button,
        labelString,
        labelDisabled;

    if (typeof label === 'object') {
      labelString = label.label;
      labelDisabled = label.disabled;
    } else if (typeof label === 'string') {
      labelString = label;
    }

    if (useSubmitType) {
      $button = $('<input>', {
        class: buttonClass + ' vex-dialog-button vex-last metric',
        type: 'submit',
        id: 'vex-dialog-button_' + buttonClass + '_' + labelString.trim()
      });
      $button.val(labelString);
    } else {
      $button = $('<button>', {
        class: buttonClass + ' vex-dialog-button vex-last metric',
        type: 'button',
        id: 'vex-dialog-button_' + buttonClass + '_' + labelString.trim()
      });
      $button.append(labelString);
    }

    $button.attr('disabled', labelDisabled ? labelDisabled : false);
    $button.attr('data-metricsaspect', 'vexdialog');
    $button.attr('role', 'button');

    if (labelDisabled === true) {
      $button.addClass('vex-button-disabled');
    }

    return $button;
  },

  /**
   * Composes an empty button bar that can be used to host several buttons.
   *
   * If providing a primitive parameter to the function that parameter
   * should be of type {String} where of providing a complex parameter
   * to the function that type should be an array.
   *
   * Example:
   *
   * {'label': 'some button label', 'disabled': false}
   *
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @param {(String|Object)} noLabel - Either a primitive or object representation of the button
   * @returns {Object} the button bar
   */
  _composeButtonbar = function (yesLabel, noLabel) {
    var $buttonBarDIV,
        noLabelString,
        yesLabelString;

    if (typeof yesLabel === 'object') {
      yesLabelString = yesLabel.label;
    } else if (typeof yesLabel === 'string') {
      yesLabelString = yesLabel;
    }
    if (noLabel && typeof noLabel === 'object') {
      noLabelString = noLabel.label;
    } else if (noLabel && typeof noLabel === 'string') {
      noLabelString = noLabel;
    } else {
      noLabelString = '';
    }

    $buttonBarDIV = $('<div>', {
      class: 'vex-dialog-buttons',
      id: 'vex-dialog-buttons_' + yesLabelString.trim() + noLabelString.trim()
    });

    return $buttonBarDIV;
  },

  /**
   * Function that allows to enable a particular button on a button bar.
   *
   * @param {String} selector - a CSS selector used to find the button
   */
  _enableButton = function (selector) {
    _changeButtonState(selector, false);
  },

  /**
   * Function that allows to disable a particular button on a button bar
   *
   * @param {String} selector - a CSS selector used to find the button
   */
  _disableButton = function (selector) {
    _changeButtonState(selector, true);
  },

  /**
   * Function that allows to either enable or disable a button depending on
   * the given boolean flag.
   *
   * @param {String} selector - a CSS selector used to find the button
   * @param {Boolean} flag - toggle to enable or disable a button
   */
  _changeButtonState = function (selector, flag) {
    var $button = $(selector);

    if ($button && flag === true) {
      $button.attr('disabled', flag);
      $button.addClass('vex-button-disabled');
    } else if ($button) {
      $button.attr('disabled', flag);
      $button.removeClass('vex-button-disabled');
    }
  },

  /**
   * Function that allows to enable the primary button on a button bar
   *
   */
  _enableYESButton = function () {
    _enableButton('.vex-dialog-button-primary');
  },

  /**
   * Function that allows to disable the primary button on a button bar
   *
   */
  _disableYESButton = function () {
    _disableButton('.vex-dialog-button-primary');
  },

  /**
   * Function that allows to enable the tertiary button on a button bar
   *
   */
  _enableNOButton = function () {
    _enableButton('.vex-dialog-button-tertiary');
  },

  /**
   * Function that allows to disable the tertiary button on a button bar
   *
   */
  _disableNOButton = function () {
    _disableButton('.vex-dialog-button-tertiary');
  },

  /**
   * Function that composes a button bar consisting of a primary and tertiary button.
   *
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @param {(String|Object)} noLabel - Either a primitive or object representation of the button
   * @param {Object} [focusedButton] - Allows to specify which dialog button should get the initial focus
   * @returns {String} the HTML markup of the button bar
   */
  _getYESNOButtonbar = function (yesLabel, noLabel, focusedButton) {
    var $buttonBarDIV = _composeButtonbar(yesLabel, noLabel),
        $primaryButton = _composeYESButton(yesLabel),
        $tertiaryButton = _composeNOButton(noLabel);

    if (focusedButton && focusedButton === vex.dialog.buttons.YES) {
      $primaryButton.focus();
    } else if (focusedButton && focusedButton === vex.dialog.buttons.NO) {
      $tertiaryButton.focus();
    } else {
      $tertiaryButton.focus();
    }
    $buttonBarDIV.append($tertiaryButton);
    $buttonBarDIV.append($primaryButton);

    return $buttonBarDIV.prop('outerHTML');
  },

  /**
   * Function that composes a button bar consisting of a primary button.
   *
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @returns {String} the HTML markup of the button bar
   */
  _getYESButtonbar = function (yesLabel) {
    var $buttonBarDIV = _composeButtonbar(yesLabel),
        $primaryButton = _composeYESButton(yesLabel);

    $primaryButton.focus();
    $buttonBarDIV.append($primaryButton);

    return $buttonBarDIV.prop('outerHTML');
  },

  /**
   * Function that composes the markup for the confirmation message on a confirmation dialog.
   *
   * @param {String} label - The message that should be shown on the dialog
   * @returns {String} the HTML markup of the confirmation message
   */
  _getConfirmationLabel = function (label) {
    var $label = $('<div>', {
          class: 'vex-confirm-message',
          id: 'vex-confirm-message_' + label.trim()
        });

    $label.append(label);

    return $label.prop('outerHTML');
  },

  /**
   * Provides an HTML form as a simple wrapper element
   *
   * @returns {Object} the form element
   */
  _assembleDialogForm = function () {
    var $form = $('<form>', {
          class: 'vex-dialog-form',
          id: 'vexDialogForm'
        });

    return $form;
  },

  /**
   * Provides an HTM form as a simple wrapper
   *
   * @returns {String} the HTML markup of the form
   */
  _getDialogForm = function () {
    return _assembleDialogForm().prop('outerHTML');
  },

  /**
   * Allows to append given HTML markup to a form element
   *
   * @param {String} content - HTML content that should be appended to the form
   * @returns {String} the HTML markup of the form
   */
  _appendToDialogForm = function (content) {
    var $form = _assembleDialogForm();

    $form.append(content);

    return $form.prop('outerHTML');
  },

  /**
   * Function to compose the complete content of a confirmation dialog
   * including its button bar.
   *
   * @param {String} label - The message that should be shown on the dialog
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @param {(String|Object)} noLabel - Either a primitive or object representation of the button
   * @returns {String} the HTML markup of the confirmation dialog
   */
  _getConfirmationContent = function (label, yesLabel, noLabel) {
    var confirmationLabel = _getConfirmationLabel(label),
        yesnoButtonbar = _getYESNOButtonbar(yesLabel, noLabel);

    return confirmationLabel + yesnoButtonbar;
  },

  /**
   * Function to compose the complete content of a message dialog
   * including its button bar.
   *
   * @param {String} label - The message that should be shown on the dialog
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @returns {String} the HTML markup of the confirmation dialog
   */
  _getMessageContent = function (label, yesLabel) {
    var confirmationLabel = _getConfirmationLabel(label),
        yesButtonbar,
        returnValue;

    if (typeof yesLabel !== 'undefined') {
      yesButtonbar = _getYESButtonbar(yesLabel);
      returnValue = confirmationLabel + yesButtonbar;
    } else {
      returnValue = confirmationLabel;
    }
    return returnValue;
  },

  /**
   * Removes custom ARIA specific routines and amendments from the markup
   *
   */
  _removeCustomDialogShims = function () {
    if ($('.body-wrapper')) {
      $('.body-wrapper').attr('aria-hidden', 'false');
    }

    document.removeEventListener('focus', _dialogFocusEventListener);
  },

  /**
   * Adds ARIA specific routines respective proper focuse handling to modal dialogs
   *
   */
  _applyCustomDialogShims = function (content) {
    var instanceID = content ? content.id.toString() : '';

    if ($('.vex-dialog-header')) {
      $('.vex-content').attr('aria-labelledby', $('.vex-dialog-header').attr('id'));
    }
    if ($('.body-wrapper')) {
      $('.body-wrapper').attr('aria-hidden', 'true');
    }

    $('.vex-content').attr('tabindex', '-1');
    $('.vex-overlay').attr('tabindex', '-1');
    $('.vex-content').attr('role', 'dialog');
    $('.vex-content').attr('aria-hidden', 'false');
    $('.vex-close').attr('role', 'button');
    $('.vex-close').attr('tabindex', '0');
    $('.vex-close').attr('aria-label', 'close');
    $('.vex-content').get(0).focus();

    // register click handler for primary button
    $('.vex-dialog-button-primary').on('click', function (e) {
      if ($('.vex-dialog-form')) {
        var formElements = $('.vex-dialog-form').get(0).elements;

        _formData = $('.vex-dialog-form').serializeArray();
        // up to now we did not serialize file input types cause jQuery ignores them
        for (var i = 0; i < formElements.length; i++) {
          if (formElements[i].type === 'file') {
            _formDataFiles[formElements[i].name] = formElements[i].files[0];
          }
        }
      }
      e.preventDefault();
      _closeVEXDialogByID(instanceID);
    });
    // register click handler for cancel button
    $('.vex-dialog-button-tertiary').on('click', function () {
      _formData = null;
      _closeVEXDialogByID(instanceID);
    });
    $('.vex-dialog-form').on('submit', function (event) {
      event.preventDefault();
    });
    $('.vex-close').on('keypress', function (e) {
      e.which = e.which || e.keyCode;

      if (e.which === _KEY_ENTER) {
        _formData = null;
        _closeVEXDialogByID(instanceID);
      }
    });
    document.addEventListener('focus', _dialogFocusEventListener, true);
  },

  /**
   * Closes an open VEX dialog instance
   *
   * @param {String} instanceID - the VEX instance ID used to close the dialog belonging to that ID
   */
  _closeVEXDialogByID = function (instanceID) {
    vex.close(instanceID);
  },

  /**
   * Event listener to ensure that only the currently open VEX dialog receives
   * focus events.
   */
  _dialogFocusEventListener = function (event) {
    var dialog = $('.vex-content').get(0);

    if (dialog && !dialog.contains(event.target)) {
      event.stopPropagation();
      dialog.focus();
    }
  },

  /**
   * Function to retrieve a dialog partial and its state from a DIV element with id <pre>dialog_partials</pre>.
   *
   * @param {String} dialogSelector - the DIV element that is containing dialog markup
   * @returns {String}
   */
  _popDialogContent = function (dialogSelector) {
    var dialog = $('#dialog_partials ' + dialogSelector).detach();
    return dialog.prop('outerHTML');
  },

  /**
   * Function to append a dialog partial and its state to a DIV with id <pre>dialog_partials</pre>.
   *
   * @param {String} dialogSelector - the DIV element that is containing dialog markup
   */
  _pushDialogContent = function (dialogSelector) {
    $('#dialog_partials').append($(dialogSelector).clone());
  },

  /**
   * Function that opens a custom dialog that allows to tweak any given option.
   *
   * @param {Object} options - dictionary containing options to be passed to <pre>vex.open</pre>
   * @param {String} options.customClass - class name to be used for the dialog content
   * @param {String} options.title - string that is containing the dialog title
   * @param {Boolean} options.showCloseButton - flag that indicates whether the dialog should contain a cross icon thatt allows to close the dialog
   * @param {Boolean} options.overlayClosesOnClick - flag that indicates whether the dialog closes once the user clicks outside the dialog
   * @param {Boolean} options.escapeButtonCloses - flag that indicates whether the dialog closes once the user presses the ESC button
   * @param {Function} options.afterOpen - callback function that is triggered once the dialog is visible
   * @param {Function} options.afterClose - callback function that is triggered once the dialog has been closed
   * @returns {Object} the dialog
   */
  _showCustomDialog = function (options) {
    var

    input,
    customClass,
    dialog;

    if (options && typeof options.customClass !== 'undefined') {
      customClass = 'vex.vex-theme-aps vex-content ' + options.customClass;
    } else {
      customClass = 'vex.vex-theme-aps vex-content';
    }
    if (options && options.title) {
      input = CDSXAX.Dialog.getDialogHeader(options.title);
    } else {
      input = CDSXAX.Dialog.getDialogHeader('Title missing');
    }

    dialog = vex.open({
      className: 'vex-theme-aps',
      contentClassName: customClass,
      showCloseButton: options.showCloseButton || false,
      overlayClosesOnClick: options.overlayClosesOnClick || false,
      escapeButtonCloses: options.escapeButtonCloses || false,
      unsafeContent: input,
      afterOpen: options.afterOpen || null,
      beforeClose: options.beforeClose || null,
      afterClose: options.afterClose || null
    });

    // Register callback for vexClose if function is provided
    if (options && typeof options.closeCallback === 'function') {
      dialog.bind('vexClose', options.closeCallback);
    }
    return dialog;
  },

 /**
  * Function that opens a VEX alert dialog
  *
  * @param {String} message - Defining content of dialog
  * @param {Object} [options] - dictionary consisting of a custom title, a custom class and an optional callback
  * @returns {Object} the dialog
  */
  _showMessage = function (message, options) {
    var

    dialog,
    lastFocusedElement = document.activeElement;

    options.customClass = ' vex-message-dlg';
    options.showCloseButton = true;
    options.overlayClosesOnClick = true;
    options.escapeButtonCloses = true;
    options.afterOpen = function () {
      var content = this.contentEl;
      $(content).append(
        CDSXAX.Dialog.appendToDialogForm(
          CDSXAX.Dialog.getMessageContent(
            message,
            undefined
          )
        )
      );
      CDSXAX.Dialog.applyCustomDialogShims(this);

      return;
    };
    options.afterClose = function () {
      CDSXAX.Dialog.removeCustomDialogShims();
      $(lastFocusedElement).focus();
    };

    dialog = _showCustomDialog(options);
    return dialog;
  },

  /**
   * Function that opens a VEX alert dialog to show an informational message
   *
   * @param {String} message - Defining content of dialog
   * @param {String} [customClass] = a custom CSS class to modify the appearance of the dialog
   * @param {Object} [closeCallback] - Callback for the close event of the dialog
   * @returns {Object} the dialog
   */
  _showInfoMessage = function (message, customClass, closeCallback) {
    return _showMessage(
      message,
      {
        'title': 'Information',
        'customClass': customClass || undefined,
        'closeCallback': closeCallback || undefined
      }
    );
  },

  /**
   * Function that opens a VEX alert dialog to show an error message
   *
   * @param {String} message - Defining content of dialog
   * @param {String} customClass = a custom CSS class to modify the appearance of the dialog
   * @param {Object} [closeCallback] - Callback for the close event of the dialog
   * @returns {Object} the dialog
   */
  _showAlertMessage = function (message, customClass, closeCallback) {
    return _showMessage(
        message,
        {
          'title': 'Something went wrong',
          'customClass': customClass || undefined,
          'closeCallback': closeCallback || undefined
        }
      );
  },

  /**
   * Function that opens a VEX confirmation dialog that prompts the user to make a decission
   *
   * @param {String} title - The title text of the dialog
   * @param {String} label - The message that should be shown on the dialog
   * @param {(String|Object)} yesLabel - Either a primitive or object representation of the button
   * @param {(String|Object)} noLabel - Either a primitive or object representation of the button
   * @param {Function} callback - Callback function to be called once the dialog has been dismissed
   */
  _showConfirmationDialog = function (title, label, yesLabel, noLabel, callback) {
    var lastFocusedElement = document.activeElement;

    vex.open({
      className: 'vex-theme-aps',
      contentClassName: 'vex.vex-theme-aps vex-content vex-message-dlg',
      showCloseButton: false,
      overlayClosesOnClick: false,
      escapeButtonCloses: false,
      unsafeContent: CDSXAX.Dialog.getDialogHeader(title),
      afterOpen: function () {
        var content = this.contentEl;
        $(content).append(
          CDSXAX.Dialog.appendToDialogForm(
            CDSXAX.Dialog.getConfirmationContent(
              label,
              yesLabel,
              noLabel
            )
          )
        );
        CDSXAX.Dialog.applyCustomDialogShims(this);
        return;
      },
      afterClose: function () {
        CDSXAX.Dialog.removeCustomDialogShims();
        $(lastFocusedElement).focus();
        if (CDSXAX.Dialog.getFormData() !== null) {
          callback(true);
        } else {
          callback(false);
        }
      }
    });
  },

 /**
  * client_config   The messages specified by client
  * status          The status code of the received response
  * body            The body of the AJAX response
  * closeCallback   (Optional) Callback for the close event of the dialog
  *
  * The body might contain further details.
  *
  * client_config = {
  *    default: { title, message?, description?},
  *    timeout: { title, message?, description?}
  * }
  *
  * A property of the server response always overrules a client response.
  *
  * @param {Object} client_config
  * @param {Number} status
  * @param {String} body
  * @param {Object} [closeCallback] - Callback for the close event of the dialog
  * @returns {Object} the dialog
  */
  _showAlertForResponse = function (client_config, status, body, closeCallback) {
    var
      client_msg = null,
      server_msg = null,
      message = '';
    if (504 === status) {
      // Gateway Timeout occurred
      client_msg = client_config.timeout;
    } else {
      client_msg = client_config.default;
    }
    // Body of response makes only sense for no Gateway Errors
    try {
      if (body) {
        server_msg = JSON.parse(body);
      }
    } catch (e) {
      // Ignore
    }
    message += createLine(server_msg, client_msg, 'title');
    message += createLine(server_msg, client_msg, 'message');
    message += createLine(server_msg, client_msg, 'description');
    // look up property in msg otherwise in default_msg
    function createLine(msg, default_msg, property) {
      if (msg && typeof msg[property] === 'string') {
        return msg[property] + '<br />';
      } else if (default_msg && typeof default_msg[property] === 'string') {
        return default_msg[property] + '<br />';
      } else {
        return '';
      }
    }
    return _showAlertMessage(message, undefined, closeCallback);
  };

  return {
    getDialogHeader: _getDialogHeader,
    getYESNOButtonbar: _getYESNOButtonbar,
    getYESButtonbar: _getYESButtonbar,
    getConfirmationLabel: _getConfirmationLabel,
    getConfirmationContent: _getConfirmationContent,
    getMessageContent: _getMessageContent,
    enableButton: _enableButton,
    disableButton: _disableButton,
    enableYESButton: _enableYESButton,
    disableYESButton: _disableYESButton,
    enableNOButton: _enableNOButton,
    disableNOButton: _disableNOButton,
    getDialogForm: _getDialogForm,
    appendToDialogForm: _appendToDialogForm,
    popDialogContent: _popDialogContent,
    pushDialogContent: _pushDialogContent,
    showCustomDialog: _showCustomDialog,
    showAlertMessage: _showAlertMessage,
    showInfoMessage: _showInfoMessage,
    showMessage: _showMessage,
    showAlertForResponse: _showAlertForResponse,
    applyCustomDialogShims: _applyCustomDialogShims,
    removeCustomDialogShims: _removeCustomDialogShims,
    getFormData: _getFormData,
    getFormDataFiles: _getFormDataFiles,
    showConfirmationDialog: _showConfirmationDialog,
    updateYESButton: _updateYESButton,
    updateNOButton: _updateNOButton,
    updateDialogHeader: _updateDialogHeader
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2015
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.SharedView = (function ($) {
  'use strict';

  var

  _entryPrefix = '/analytics',
  _wnd = window,
  _con = _wnd.console,

  // ------------------------------------------------------------------------------------
  // Getters / Setters
  // ------------------------------------------------------------------------------------

  _getData = function () {
    return window.__CLIENT_DATA__ || {};
  },

  // Notebook

  _getNotebook = function () {
    return _getData().notebook || {};
  },

  _getNotebookId = function () {
    return _getNotebook().id;
  },

  _getNotebookTitle = function () {
    return _getNotebook().title;
  },

  _getNotebookSparkService = function () {
    return _getNotebook().sparkService;
  },

  _getNotebookOwner = function () {
    return _getNotebook().owner;
  },

  // Notebook Locks

  _getNotebookLock = function () {
    if (_getNotebook()) {
      return _getNotebook().lock;
    }

    return null;
  },

  _setNotebookLock = function (lockInfo) {
    if (_getNotebook()) {
      _getNotebook().lock = lockInfo;
    }
  },

  _isNotebookLocked = function () {
    return Boolean(_getNotebookLock());
  },

  _isNotebookLockedByUser = function () {
    var lock = _getNotebookLock();
    if (lock) {
      return lock.metadata && (lock.metadata.owner_guid === _getUserId() ||
        lock.metadata.owner_user_name === _getUserName());
    } else {
      return false;
    }
  },

  _getNotebookLockHolderUserName = function () {
    var lock = _getNotebookLock();
    if (lock && lock.metadata && typeof lock.metadata.owner_user_name === 'string') {
      return lock.metadata.owner_user_name;
    } else {
      return null;
    }
  },

  _resolveNotebookLockHolderDisplayName = function () {
    if (!_isNotebookLocked()) {
      return $.when('');
    } else if (_isNotebookLockedByUser()) {
      return $.when('You');
    } else if (_getNotebookLock().lockHolderDisplayName) {
      return $.when(_getNotebookLock().lockHolderDisplayName);
    } else {
      return _getDisplayNameForUserName(_getNotebookLockHolderUserName())
        .then(function (lockHolderDisplayName) {
          _getNotebookLock().lockHolderDisplayName = lockHolderDisplayName;
          return lockHolderDisplayName;
        });
    }
  },

  // User

  _getUser = function () {
    return _getData().user || {};
  },

  _getUserName = function () {
    return _getUser().userName;
  },

  _getUserId = function () {
    return _getUser().id;
  },

  _isUserAdmin = function () {
    return _getProjectUserRole() === 'admin';
  },

  _isUserEditor = function () {
    return _getProjectUserRole() === 'editor';
  },

  _isUserOwner = function () {
    return (_getUserName() === _getNotebookOwner() || _getUserId() === _getNotebookOwner());
  },

  // Project

  _getProject = function () {
    return _getData().project || {};
  },

  _getProjectId = function () {
    var projectInfo = _getProject();
    return projectInfo.metadata ? projectInfo.metadata.guid : undefined;
  },

  _getProjectName = function () {
    var projectInfo = _getProject();
    return projectInfo.entity ? projectInfo.entity.name : undefined;
  },

  _getProjectUrl = function () {
    return '/projects/' + _getProjectId() + '/collaborators?context=analytics';
  },

  // Project members, assets & computes

  _getProjectMemberAccountInfo = function (accountId) {
    var projectInfo = _getProject();
    if (projectInfo.entity && Array.isArray(projectInfo.entity.members)) {
      var members = projectInfo.entity.members;
      for (var i = 0; i < members.length; i++) {
        if (members[i].user_name === accountId) {
          return members[i];
        }
      }
    }

    return {};
  },

  _getProjectUserRole = function () {
    var userName = _getUserName();
    if (userName) {
      userName = userName.toLowerCase();
    }

    return _getProjectMemberAccountInfo(userName).role;
  },

  _getProjectSparkCompute = function (sparkServiceId) {
    var projectInfo = _getProject();
    if (projectInfo.entity && Array.isArray(projectInfo.entity.compute)) {
      var computes = projectInfo.entity.compute;
      for (var i = 0; i < computes.length; i++) {
        if (computes[i].type === 'spark' && computes[i].guid === sparkServiceId) {
          return computes[i];
        }
      }
    }

    return null;
  },

  _setIframeHeight = function (height) {
    $('#sharedNotebook').height(height);
  },

  // Misc

  _getDisplayNameForUserName = function (user_name) {
    return CDSXAX.AccountsHandler.getAccountInfo(user_name)
      .then(function (accountInfo) {
        var displayName = 'a project member';
        if (Array.isArray(accountInfo) && accountInfo.length === 1) {
          var lockHolderAccountInfo = accountInfo[0];
          if (lockHolderAccountInfo &&
            lockHolderAccountInfo.entity &&
            lockHolderAccountInfo.entity.display_name) {
            displayName = lockHolderAccountInfo.entity.display_name;
          }
        }

        return displayName;
      });
  },

  _getApiPortal = function () {
    return $('#data').data('apiportal');
  },

  _formatTimestamps = function () {
    var createdTimestamp = $('.down-section-versiondate > p').text();
    if (Boolean(createdTimestamp)) {
      $('.down-section-versiondate > p').text(
        CDSXAX.CommonCtrl.getFormattedTimestamp(createdTimestamp));
    }

    var updatedTimestamp = $('.down-section-lastupdated > p').text();
    if (Boolean(updatedTimestamp)) {
      $('.down-section-lastupdated > p').text(
        CDSXAX.CommonCtrl.getFormattedTimestamp(updatedTimestamp));
    }
  },

  // ------------------------------------------------------------------------------------
  // Action bar
  // ------------------------------------------------------------------------------------

  _buildActionBarBreadCrumbs = function () {
    var breadcrumbs = [];

    breadcrumbs.push({
      title: 'My Projects',
      url: '/projects?context=analytics',
    });

    if (_getProjectId() && _getProjectName()) {
      breadcrumbs.push({
        title: _getProjectName(),
        url: '/projects/' + _getProjectId() + '?context=analytics',
      });
    }

    breadcrumbs.push({
      title: _getNotebookTitle(),
    });

    return breadcrumbs;
  },

  _buildActionBarContext = function (params) {

    if (!params) {
      params = {};
    }

    function _buildActionsContext() {

      function _buildEditAction() {
        var visible;

        if (_isUserAdmin() || _isUserEditor()) {
          visible = (!_isNotebookLocked() || _isNotebookLockedByUser());
        } else {
          visible = false;
        }

        // Always hide the edit button if the spark service id isn't a compute
        if ((!_getProjectSparkCompute(_getNotebookSparkService())) && (!_isUserOwner())) {
          visible = false;
        }

        return {
          visible: visible,
          enabled: true,
          tooltip: 'Edit',
        };
      }

      function _buildUnlockAction() {

        var visible, enabled, tooltip;

        if (_isUserAdmin()) {
          visible = _isNotebookLocked();
          enabled = visible;
          if (enabled) {
            tooltip = 'Unlock';
          }
        } else if (_isUserEditor()) {
          visible = _isNotebookLocked();
          enabled = _isNotebookLockedByUser();
          if (enabled) {
            tooltip = 'Unlock';
          } else {
            // Use a default unless the display name is specified in the parameters
            var displayedName = params.lockHolderDisplayName || 'Another user';
            tooltip = displayedName + ' is currently working on the notebook';
          }
        } else {
          visible = enabled = false;
        }

        return {
          visible: visible,
          enabled: enabled,
          tooltip: tooltip,
        };
      }

      return {
        edit: _buildEditAction(),
        unlock: _buildUnlockAction(),
        share: {
          visible: (_isUserEditor() || _isUserAdmin()),
          enabled: (!_isNotebookLocked() || _isNotebookLockedByUser()),
          tooltip: 'Share',
        },
        download: {
          visible: true,
          enabled: true,
          tooltip: 'Download',
        },
      };
    }

    function _buildRHSContext() {
      return {
        info: {
          enabled: true,
          tooltip: 'Notebook Info',
        },
        activity: {
          enabled: false,
          tooltip: 'Versions',
        },
        comments: {
          enabled: true,
          tooltip: 'Comments',
        },
        data: {
          enabled: false,
        },
        maker: {
          enabled: true,
        },
      };
    }

    return {
      actions: _buildActionsContext(),
      rhs: _buildRHSContext(),
    };
  },

  _initActionBar = function () {

    CDSXAX.ActionBar.get().then(function (actionBar) {

      // Breadcrumbs
      actionBar.setBreadcrumbs(_buildActionBarBreadCrumbs());

      // Set initial context
      actionBar.update(_buildActionBarContext());

      // Action listeners
      actionBar.addActionListener(_onActionBarEvent);

      // RHS bar listeners
      if (CDSXAX.Palette) {
        // Hide palette
        CDSXAX.Palette.togglePalette(false);
        actionBar.addRHSListener(CDSXAX.Palette.rhsActionBarListener);

        // Open the default tab if the browser width exceeds a certain threshold
        if (window.innerWidth && window.innerWidth >= 1100) {
          actionBar.openRHSPanel('comments');
        }

      }

      // We've set up the initial action bar context before but we'd like to
      // resolve display names of users and show them in the tooltips of certain actions.
      // That way we won't have to wait for the information to be known to actually
      // display them in action bar elements.
      _resolveLockDisplayNamesAndRebuildActionBar();

    });
  },

  _downloadNotebook = function () {
    var downloadURL = $('#data').data('nburl');
    if (!downloadURL) {
      CDSXAX.Dialog.showAlertMessage('The notebook could not be prepared for download. Plase try again later.');
    } else {
      if (downloadURL.search(/access_token=/i) === -1) {
        downloadURL = downloadURL + '?format=ipynb';
      } else {
        downloadURL = downloadURL + '&format=ipynb';
      }

      window.open(downloadURL);
    }
  },

  _lockNotebookAndRedirectToEditMode = function () {
    var notebookId = _getNotebookId();
    try {
      // Trigger segment event for edit notebook
      if (window.apsx.metrics.segmentWrapper) {
        window.apsx.metrics.segmentWrapper.triggerSegmentEventForFeature(
          window.apsx.metrics.segmentWrapper.NOTEBOOK_PLUGIN_NAME,
          'triggerEditNotebookEvent', {
            notebookId: notebookId
          }
        );
      }
    } catch (error) {
      console.error('Segment event for edit notebook could not be sent:', error);
    }
    CDSXAX.CommonCtrl.showLightPageSpinner(true);
    CDSXAX.NotebookLockHandler.lockNotebook(_getNotebookId())
      .fail(function (xhr, status, error) {
        CDSXAX.CommonCtrl.showLightPageSpinner(false);
        if (xhr && xhr.status === 401) {
          console.error('Notebook locked by another user');
          CDSXAX.NotebookLockHandler.getCurrentLockHolderForNotebook(_getNotebookId())
            .then(function (lockInfo) {
              // Update internal state
              _setNotebookLock(lockInfo);
              // Rebuilt the action bar with this new information
              // Note that we don't need to include this into our
              // request chain since this can be done asynchronously
              _resolveLockDisplayNamesAndRebuildActionBar();
            })
            .then(_resolveNotebookLockHolderDisplayName)
            .then(function (displayName) {
              CDSXAX.NotebookLockHandler.openLockedByAnotherUserDialog(
                displayName,
                _getProjectUrl()
              );
            });
        } else {
          console.error('Unable to lock notebook:', error);
        }
      })
      .done(function () {
        var queryParams = {
          mode: 'edit',
        };
        // Pass on both the project id and the spark service if they were specified
        if (CDSXAX.CommonCtrl.getQueryParameter('projectid')) {
          queryParams.projectid = CDSXAX.CommonCtrl.getQueryParameter('projectid');
        }
        if (CDSXAX.CommonCtrl.getQueryParameter('tenant')) {
          queryParams.tenant = CDSXAX.CommonCtrl.getQueryParameter('tenant');
        }
        window.location.href = CDSXAX.NotebookModel.getNotebookEditUrl(_getNotebookId(), queryParams);
      });
  },

  _unlockNotebook = function () {
    var prompt;
    var administrative = false;
    var notebookId = _getNotebookId();
    if (_isUserAdmin() && !_isNotebookLockedByUser()) {
      administrative = true;
      prompt =
          $.when(_getNotebookLockHolderUserName())
          .then(_getDisplayNameForUserName)
          .then(CDSXAX.NotebookLockHandler.openConfirmUnlockDialogForAdmins);
    } else {
      prompt = CDSXAX.NotebookLockHandler.openConfirmUnlockDialogForLockHolder();
    }
    $.when(prompt).then(function () {
      try {
        // Trigger segment event for unlock notebook
        if (window.apsx.metrics.segmentWrapper) {
          window.apsx.metrics.segmentWrapper.triggerSegmentEventForFeature(
            window.apsx.metrics.segmentWrapper.NOTEBOOK_PLUGIN_NAME,
            'triggerUnlockNotebookEvent', {
              notebookId: notebookId,
              administrative: administrative
            }
          );
        }
      } catch (error) {
        console.error('Segment event for edit notebook could not be sent:', error);
      }
      CDSXAX.NotebookLockHandler.unlockNotebook(notebookId)
        .fail(function (xhr) {
          if (xhr && xhr.status === 404) {
            console.error('Already unlocked');
            delete _getNotebook().lock;
            _resolveLockDisplayNamesAndRebuildActionBar();
          }
        })
        .done(function () {
          delete _getNotebook().lock;
          _resolveLockDisplayNamesAndRebuildActionBar();
        });
    });
  },

  _rebuildActionBar = function (params) {
    return CDSXAX.ActionBar.get().then(function (actionBar) {
      actionBar.update(_buildActionBarContext(params));
    });
  },

  _resolveLockDisplayNamesAndRebuildActionBar = function () {
    return _resolveNotebookLockHolderDisplayName()
      .then(function (lockHolderDisplayName) {
        return {
          lockHolderDisplayName: lockHolderDisplayName
        };
      })
      .then(_rebuildActionBar);
  },

  // ------------------------------------------------------------------------------------
  // Event handlers
  // ------------------------------------------------------------------------------------

  _setupIFrameEventHandling = function () {
    if (CDSXAX.IFrameListenerPreview.isIFrameLoaded()) {
      _onIFrameLoaded();
    } else {
      $('#sharedNotebook').load(_onIFrameLoaded);
    }
  },

  _sendHeightRequest = function () {
    var message = {},
      nbFrameSource = $('#sharedNotebook')[0].src,
      nbFrame = $('#sharedNotebook')[0].contentWindow;
    message.type = 'nb_converter.getHeight';
    if (nbFrame) {
      nbFrame.postMessage(message, nbFrameSource);
    } else {
      _con.log('notebook iframe unavailable');
    }
  },

  _onIFrameLoaded = function () {
    CDSXAX.CommonCtrl.showLightPageSpinner(false);
    if ($('#sharedNotebook').attr('scrolling') === 'no') {
      _sendHeightRequest();
    }
  },

  _onActionBarEvent = function (actionEvent) {
    console.log('action event: ' + JSON.stringify(actionEvent));
    var action = actionEvent.id;
    switch (action) {
      case 'edit':
        _lockNotebookAndRedirectToEditMode();
        break;
      case 'unlock':
        _unlockNotebook();
        break;
      case 'share':
        CDSXAX.PortalMainFacade.openNotebookSharingDialog(_getNotebook());
        break;
      case 'download':
        _downloadNotebook();
        break;
      default:
    }
  },

  windowListener = function (event) {
    if (event.data && event.data.type && event.data.type === 'notebookUI.notebookHeight') {
      if (event.data.content) {
        _setIframeHeight(event.data.content);
      } else {
        _con.log('Data absent in notebookHeight message');
      }
    }
  },

  // ------------------------------------------------------------------------------------
  // Initialization
  // ------------------------------------------------------------------------------------

  _setUpEventHandlers = function () {
    _setupIFrameEventHandling();
    if (window.addEventListener) {
      window.addEventListener('message', windowListener, false);
    } else {
      window.attachEvent('onmessage', windowListener);
    }
  },

  _init = function () {
    CDSXAX.CommonCtrl.showLightPageSpinner(true);
    _setUpEventHandlers();
    CDSXAX.NotebookModel.init({
      entryPrefix: _entryPrefix
    });
    _initActionBar();
    _formatTimestamps();
  };

  _init();

  return {
    downloadNotebook: _downloadNotebook,
    initActionBar: _initActionBar,
    getNotebookId: _getNotebookId,
    getUserName: _getUserName,
    getUserId: _getUserId,
    getApiPortal: _getApiPortal,
    getNotebookTitle: _getNotebookTitle,
    getProjectId: _getProjectId,
    getProjectName: _getProjectName
  };
})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a wrapper that calls the segment instrumentation routines
 * that are bound to the <code>window.apsx.metrics.segmentWrapper</code> namespace.
 *
 * The module can be accessed using <code>window.apsx.metrics.segmentWrapper</code>
 * if not using an AMD or RequireJS module loader system.
 *
 * @version 1.0
 * @exports CDSXAX/SegmentWrapper
 * @namespace SegmentWrapper
 */
CDSXAX.SegmentWrapper = (function () {
  'use strict';

  var segmentFactory;

  segmentFactory = function () {
    var

    segment;

    segment = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      /**
       * plugin name for versioning specific routines
       *
       * @memberof SegmentWrapper
       */
      VERSIONING_PLUGIN_NAME: 'versioning',
      /**
       * plugin name for comments specific routines
       *
       * @memberof SegmentWrapper
       */
      COMMENTS_PLUGIN_NAME: 'comments',
      /**
       * plugin name for insert to code specific routines
       *
       * @memberof SegmentWrapper
       */
      INSERT_TO_CODE_PLUGIN_NAME: 'insertToCode',
      /**
       * plugin name for scheduling specific routines
       *
       * @memberof SegmentWrapper
       */
      SCHEDULING_PLUGIN_NAME: 'scheduling',
      /**
       * plugin name for new notebook specific routines
       *
       * @memberof SegmentWrapper
       */
      NEW_NOTEBOOK_PLUGIN_NAME: 'newNotebook',
      /**
       * plugin name for notebook specific routines
       *
       * @memberof SegmentWrapper
       */
      NOTEBOOK_PLUGIN_NAME: 'notebook',
      /**
       * plugin name for data source specific routines
       *
       * @memberof SegmentWrapper
       */
      DATA_SOURCE_PLUGIN_NAME: 'dataSource',

      /**
       * Gathers all event names from any plug-in that is currently registered.
       *
       * @memberof SegmentWrapper
       * @returns {Object}
       */
      getPluginEvents: function () {
        var

        events = {};

        if (window.apsx.metrics.plugins) {
          for (var plugin in window.apsx.metrics.plugins) {
            if (window.apsx.metrics.plugins.hasOwnProperty(plugin) && window.apsx.metrics.plugins[plugin]) {
              Object.assign(events, window.apsx.metrics.plugins[plugin].PLUGIN_EVENTS);
            }
          }
        }

        return events;
      },

      /**
       * Gathers all event names from a particular plug-in
       *
       * @memberof SegmentWrapper
       * @param {String} pluginName - The plug-in name for which event names shall be looked up
       * @returns {Object}
       */
      getPluginEvent: function (pluginName) {
        var

        events = {};

        if (window.apsx.metrics.plugins && window.apsx.metrics.plugins[pluginName]) {
          events = window.apsx.metrics.plugins[pluginName].PLUGIN_EVENTS;
        }

        return events;
      },

      /**
       * This function allows to send a new event using the segment instrumentation
       * routines that are bound to the <code>window.apsx.metrics.segmentWrapper</code>
       * namespace.
       *
       * @memberof SegmentWrapper
       * @param {String} eventTitle - the title of the event
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerSegmentEvent: function (eventTitle, eventProperties) {
        //check if segment analytics object is already defined
        if (window && window.analytics) {
          //submit event
          window.analytics.track(eventTitle, eventProperties);
        }
      },

      /**
       * This function allows to invoke a specific event using a plug-in name
       * identifier that locates the event to be triggered.
       *
       * @memberof SegmentWrapper
       * @param {String} eventPluginName - the name of the event plug-in that hosts the event routine to be triggered
       * @param {String} eventName - the name of the event to be triggered
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerSegmentEventForFeature: function (eventPluginName, eventName, eventProperties) {
        if (
          eventPluginName === false ||
          eventPluginName.length === 0
        ) {
          throw 'Segment event could only be triggered for a particular plug-in' +
                ' which requires a plug-in name as an argument.';
        }
        if (
          eventName === false ||
          eventName.length === 0
        ) {
          throw 'Segment event could only be triggered for a particular plug-in' +
                ' which requires an event name as an argument.';
        }

        if (window.apsx.metrics.plugins && window.apsx.metrics.plugins[eventPluginName]) {
          var

          plugin = window.apsx.metrics.plugins[eventPluginName];

          plugin[eventName](eventProperties);
        } else {
          throw 'Metrics plug-in namespace not bound or metrics plug-in is unavailable.';
        }
      }
    };

    return segment;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      segmentFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = segmentFactory(
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }

    window.apsx.metrics.segmentWrapper = segmentFactory();
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting comments specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/CommentsPlugin
 * @namespace CommentsPlugin
 *
 *@see {@link SegmentWrapper}
 */
CDSXAX.CommentsPlugin = (function () {
  'use strict';

  var commentsFactory;

  commentsFactory = function (segment) {
    var

    comments;

    comments = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        ADD_NEW_COMMENT: 'New Comment',
        DELETE_COMMENT: 'Delete Comment',
        EDIT_COMMENT: 'Edit Comment'
      },

      /**
       * Event that should be triggered if a new comment gets added
       *
       * @memberof CommentsPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerAddNewCommentEvent: function (eventProperties) {
        segment.triggerSegmentEvent(comments.PLUGIN_EVENTS.ADD_NEW_COMMENT, eventProperties);
      },

      /**
       * Event that should be triggered if a comment gets deleted
       *
       * @memberof CommentsPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerDeleteCommentEvent: function (eventProperties) {
        segment.triggerSegmentEvent(comments.PLUGIN_EVENTS.DELETE_COMMENT, eventProperties);
      },

      /**
       * Event that should be triggered if a comment gets edited
       *
       * @memberof CommentsPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerEditCommentEvent: function (eventProperties) {
        segment.triggerSegmentEvent(comments.PLUGIN_EVENTS.EDIT_COMMENT, eventProperties);
      },
    };

    return comments;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      commentsFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = commentsFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.COMMENTS_PLUGIN_NAME] = commentsFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting insert to code specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/InsertToCodePlugin
 * @namespace InsertToCodePlugin
 *
 * @see {@link SegmentWrapper}
 */
CDSXAX.InsertToCodePlugin = (function () {
  'use strict';

  var insertToCodeFactory;

  insertToCodeFactory = function (segment) {
    var

    insertToCode;

    insertToCode = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        INSERT_CODE: 'Insert Code'
      },

      /**
       * Event that should be triggered if code gets inserted into a notebook cell
       *
       * @memberof InsertToCodePlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerInsertCodeEvent: function (eventProperties) {
        segment.triggerSegmentEvent(insertToCode.PLUGIN_EVENTS.INSERT_CODE, eventProperties);
      }
    };

    return insertToCode;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      insertToCodeFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = insertToCodeFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.INSERT_TO_CODE_PLUGIN_NAME] = insertToCodeFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting scheduling specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/NewNotebookPlugin
 * @namespace NewNotebookPlugin
 *
 * @see {@link SegmentWrapper}
 */
CDSXAX.NewNotebookPlugin = (function () {
  'use strict';

  var newNotebookFactory;

  newNotebookFactory = function (segment) {
    var

    newNotebook;

    newNotebook = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        NEW_NOTEBOOK: 'New Notebook'
      },

      /**
       * This function fetchs the notebook information
       * You only need to pass the post request settings object as an input and the function
       * will do the rest
       *
       * @memberof NewNotebookPlugin
       * @param {Object} requestObject - the settings object of the sent post request
       *        It has the strucutre: settings
       *                                 |_ url
       *                                 |_ data
       *                                 ...
       * @param {Boolean} exchange - it determine if the request comes for an exchange sample.
       *                true for yes and false otherwise
       * @return {Object} attrs - the attributes needed for the New Notebook segment event
       */
      getNotebookAttributesFromReqObj: function (requestObject, exchange) {
        //init
        var attrs = {};
        attrs.language = '';
        attrs.sparkVersion = '';
        attrs.type = '';

        if (exchange) {
          attrs.type = 'sample';
        }

        //get values from request object
        //check that the object is defined
        if (requestObject && requestObject.data) {
          //get notebook language
          var dataJSON;
          try {
            dataJSON = JSON.parse(requestObject.data);
          } catch (e) {}

          if (dataJSON) {
            //language
            if (dataJSON.language) {
              attrs.language = dataJSON.language;
            }
            if (dataJSON.spark) {
              attrs.sparkVersion = dataJSON.spark;
            }

            //type
            if ((!exchange) && dataJSON.tab_id) {
              var typeProp = '';
              switch (dataJSON.tab_id) {
                case 'tabSample':
                  typeProp = 'sample';
                  break;
                case 'tabNew':
                  typeProp = 'new';
                  break;
                case 'tabFile':
                  typeProp = 'file';
                  break;
                case 'tabURL':
                  typeProp = 'url';
                  break;
              }
              attrs.type = typeProp;
            }
          }
        }
        return attrs;
      },

      /**
       * This function allows you to send a new "New Notebook" segment event.
       * You only need to pass the post request settings object as an input and the function
       * will do the rest. This function is called after the successful creation of a notebook.
       *
       * @memberof NewNotebookPlugin
       * @param {String} notebookId - the id of the created notebook.
       * @param {Object} requestSettings - the ajax settings object of the sent post request
       *        It has the strucutre: settings
       *                                 |_ url
       *                                 |_ data
       *                                 ...
       * @param {Boolean} exchange - it determine if the request comes for an exchange sample.
       * true for yes and false otherwise
       */
      triggerSegmentNewNotebookEvent: function (notebookId, requestSettings, exchange) {
        //extract notebook attributes from the ajax post request settings object (requestSettings).
        //this is refering to the object the request object (settings)
        var attrs = newNotebook.getNotebookAttributesFromReqObj(requestSettings, exchange);

        //check if notebookId exists otherwise send an empty string
        //this senario shouldn't happen but just in case.
        var segNotebookId = ((notebookId) ? notebookId : '');

        //submit event
        segment.triggerSegmentEvent(newNotebook.PLUGIN_EVENTS.NEW_NOTEBOOK, {
          notebookId: segNotebookId,
          notebookLanguage: attrs.language,
          sparkVersion: attrs.sparkVersion,
          type: attrs.type
        });
      },

      /**
       * Wrapper function that adheres to the <code>window.apsx.metrics.segmentWrapper</code> contract.
       *
       * @memberof NewNotebookPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerCreateNotebookEvent: function (eventProperties) {
        if (eventProperties) {
          newNotebook.triggerSegmentNewNotebookEvent(
            eventProperties.id,
            eventProperties.requestSettings,
            eventProperties.exchange
          );
        }
      },
    };

    return newNotebook;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      newNotebookFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = newNotebookFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.NEW_NOTEBOOK_PLUGIN_NAME] = newNotebookFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting comments specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/NotebookPlugin
 * @namespace NotebookPlugin
 *
 *@see {@link SegmentWrapper}
 */
CDSXAX.NotebookPlugin = (function () {
  'use strict';

  var notebookFactory;

  notebookFactory = function (segment) {
    var

    notebook;

    notebook = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        UPDATE_NOTEBOOK_INFO: 'Notebook Update:Title_Description',
        SEGMENT_TITLE_EDIT_NOTEBOOK: 'Edit Notebook',
        SEGMENT_TITLE_UNLOCK_NOTEBOOK: 'Unlock Notebook'
      },

      /**
       * Event that should be triggered if the notebook info respective title
       * or description are being updated
       *
       * @memberof CommentsPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerUpdateNotebookInfoEvent: function (eventProperties) {
        segment.triggerSegmentEvent(notebook.PLUGIN_EVENTS.UPDATE_NOTEBOOK_INFO, eventProperties);
      },

      /**
      * Event that should be triggered if a notebook is opened for editing
      * @param {object} eventPropreties
      **/
      triggerEditNotebookEvent: function (eventProperties) {
        if (eventProperties && typeof  eventProperties.notebookId === 'string') {
          segment.triggerSegmentEvent(notebook.PLUGIN_EVENTS.SEGMENT_TITLE_EDIT_NOTEBOOK, {
            what: 'notebook',
            action: 'edit',
            notebookId: eventProperties.notebookId
          });
        }
      },

      /**
      * Event that should be triggered if a notebook is unlocked
      * @param {object} eventProperties
      **/
      triggerUnlockNotebookEvent: function (eventProperties) {
        if (eventProperties && typeof eventProperties.notebookId === 'string' &&
          typeof eventProperties.administrative === 'boolean') {
          segment.triggerSegmentEvent(notebook.PLUGIN_EVENTS.SEGMENT_TITLE_UNLOCK_NOTEBOOK, {
            what: 'notebook',
            action: 'unlock',
            notebookId: eventProperties.notebookId,
            administrative: eventProperties.administrative
          });
        }
      }

    };

    return notebook;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      notebookFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = notebookFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.NOTEBOOK_PLUGIN_NAME] = notebookFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting scheduling specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/SchedulingPlugin
 * @namespace SchedulingPlugin
 *
 * @see {@link SegmentWrapper}
 */
CDSXAX.SchedulingPlugin = (function () {
  'use strict';

  var schedulingFactory;

  schedulingFactory = function (segment) {
    var

    scheduling;

    scheduling = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        CREATE_SCHEDULE: 'Create Schedule',
        UPDATE_SCHEDULE: 'Update Schedule'
      },

      /**
       * Event that should be triggered if a schedule gets created
       *
       * @memberof SchedulingPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerCreateScheduleEvent: function (eventProperties) {
        segment.triggerSegmentEvent(scheduling.PLUGIN_EVENTS.CREATE_SCHEDULE, eventProperties);
      },

      /**
       * Event that should be triggered if a schedule gets updated
       *
       * @memberof SchedulingPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerUpdateScheduleEvent: function (eventProperties) {
        segment.triggerSegmentEvent(scheduling.PLUGIN_EVENTS.UPDATE_SCHEDULE, eventProperties);
      }
    };

    return scheduling;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      schedulingFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = schedulingFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.SCHEDULING_PLUGIN_NAME] = schedulingFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting comments specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/DataSourcePlugin
 * @namespace DataSourcePlugin
 *
 *@see {@link SegmentWrapper}
 */
CDSXAX.DataSourcePlugin = (function () {
  'use strict';

  var dataSourceFactory;

  dataSourceFactory = function (segment) {
    var

    dataSource;

    dataSource = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        ADD_DATA_SOURCE: 'Add Data Source'
      },

      /**
       * Event that should be triggered if a data source gets added
       *
       * @memberof CommentsPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerAddDataSourceEvent: function (eventProperties) {
        segment.triggerSegmentEvent(dataSource.PLUGIN_EVENTS.ADD_DATA_SOURCE, eventProperties);
      },
    };

    return dataSource;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      dataSourceFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = dataSourceFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.DATA_SOURCE_PLUGIN_NAME] = dataSourceFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2017
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

/**
 * A module that provides a plug-in that interacts with the segment wrapper module
 * in support of emitting versioning specific segments events.
 *
 * @version 1.0
 * @exports CDSXAX/VersioningPlugin
 * @namespace VersioningPlugin
 *
 * @see {@link SegmentWrapper}
 */
CDSXAX.VersioningPlugin = (function () {
  'use strict';

  var versioningFactory;

  versioningFactory = function (segment) {
    var

    versioning;

    versioning = {
      /**
       * Semantic version identifier that can be parsed by for instance the
       * semver module.
       */
      version: '1.0.0',

      PLUGIN_EVENTS: {
        CREATE_NOTEBOOK_VERSION: 'New Notebook Version',
        DELETE_NOTEBOOK_VERSION: 'Delete Notebook Version',
        REVERT_NOTEBOOK_VERSION: 'Revert Notebook Version'
      },

      /**
       * Event that should be triggered after having created a new version/checkpoint
       *
       * @memberof VersioningPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerCreateNewVersionEvent: function (eventProperties) {
        segment.triggerSegmentEvent(versioning.PLUGIN_EVENTS.CREATE_NOTEBOOK_VERSION, eventProperties);
      },

      /**
       * Event that should be triggered after having deleted a version/checkpoint
       *
       * @memberof VersioningPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerDeleteVersionEvent: function (eventProperties) {
        segment.triggerSegmentEvent(versioning.PLUGIN_EVENTS.DELETE_NOTEBOOK_VERSION, eventProperties);
      },

      /**
       * Event that should be triggered after having reverted a version/checkpoint
       *
       * @memberof VersioningPlugin
       * @param {Object} eventProperties - the properties to be sent to segment
       */
      triggerRevertVersionEvent: function (eventProperties) {
        segment.triggerSegmentEvent(versioning.PLUGIN_EVENTS.REVERT_NOTEBOOK_VERSION, eventProperties);
      },
    };

    return versioning;
  };

  if (typeof define === 'function' && define.amd) {
    define(
      ['./segmentWrapper'],
      versioningFactory
    );
  } else if (typeof exports === 'object') {
    module.exports = versioningFactory(
      require('./segmentWrapper')
    );
  } else {
    if (typeof window.apsx === 'undefined') {
      window.apsx = {};
    }
    if (typeof window.apsx.metrics === 'undefined') {
      window.apsx.metrics = {};
    }
    if (typeof window.apsx.metrics.plugins === 'undefined') {
      window.apsx.metrics.plugins = {};
    }

    window.apsx.metrics.plugins[window.apsx.metrics.segmentWrapper.VERSIONING_PLUGIN_NAME] = versioningFactory(
      window.apsx.metrics.segmentWrapper
    );
  }
}).call(this);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.PortalMainFacade = (function ($) {
  'use strict';

  var _con = window.console;

  // Status Codes
  var STATUS_NONE = 'none';
  // - open ->
  var STATUS_INIT = 'init';
  // - message.ready === true ->
  var STATUS_READY = 'ready';
  // - send input ->
  var STATUS_OPEN = 'open';
  // - message.visible === true ->
  var STATUS_VISIBLE = 'visible';
  // - message.visible === false ->
  var STATUS_HIDDEN = 'hidden';
  // - message.backgroundJobs === 0 -> STATUS_NONE

  // State
  var status = STATUS_NONE;
  var iframe = null;
  var pendingDialogId = null;
  var pendingDialogInput = null;
  var pendingDialogTransactional = null;
  var pendingDialogCallback = null;

  var myOrigin = window.location.origin;
  window.addEventListener('message', function (event) {
    var messageOrigin = event.origin || event.originalEvent.origin;
    if (myOrigin === messageOrigin) {
      var data = event.data;
      try {
        var message = JSON.parse(data);
        if (message && message.type === 'NOTEBOOK_INTEROP') {
          if (message && message.state && message.state.ready) {
            switch (status) {
              case STATUS_INIT:
                status = _handleStatusInit(message);
                break;
            }
            // There might be yet another status transition
            switch (status) {
              case STATUS_READY:
                status = _handleStatusReady(message);
                break;
              case STATUS_OPEN:
                status = _handleStatusOpen(message);
                break;
              case STATUS_VISIBLE:
                status = _handleStatusVisible(message);
                break;
            }
            // There might be yet another status transitions
            switch (status) {
              case STATUS_HIDDEN:
                status = _handleStatusHidden(message);
                break;
            }
            _con.log(status);
          }
        }
      } catch (e) {
        _con.log(e);
      }
    }
  }, false);

  function _handleStatusInit(message) {
    if (message && message.state && message.state.ready) {
      return STATUS_READY;
    } else {
      return STATUS_INIT;
    }
  }

  function _handleStatusReady() {
    if (pendingDialogId) {
      iframe.contentWindow.postMessage(JSON.stringify({
        type: 'NOTEBOOK_INTEROP',
        dialogId: pendingDialogId,
        transactional: pendingDialogTransactional,
        input: pendingDialogInput
      }), myOrigin);
      pendingDialogId = null;
      pendingDialogTransactional = null;
      pendingDialogInput = null;
      return STATUS_OPEN;
    } else {
      return STATUS_READY;
    }
  }

  function _handleStatusOpen(message) {
    if (message && message.state && message.state.visible) {
      return STATUS_VISIBLE;
    } else {
      return STATUS_OPEN;
    }
  }

  function _handleStatusVisible(message) {
    if (message && message.state && !message.state.visible) {
      return STATUS_HIDDEN;
    } else {
      return STATUS_VISIBLE;
    }
  }

  function _handleStatusHidden(message) {
    if (message && message.state && !message.state.backgroundJobs) {
      _closeIFRAME();
      // Callback
      if (message && message.state && message.state.output) {
        if (typeof pendingDialogCallback === 'function') {
          pendingDialogCallback(message.state.output);
          pendingDialogCallback = null;
        }
      }
      return STATUS_NONE;
    } else {
      return STATUS_HIDDEN;
    }
  }

  function _openIFRAME() {
    if (status === STATUS_NONE) {
      if ($('#portal-main').length === 0) {
        _con.log('Creating IFrame for Dialog');
        $('body').append(
          '<iframe id=\'portal-main\' src=\'/notebook-interop\'' +
          ' style=\'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 10000;\'>' +
          '</iframe>');
        _con.log('IFrame created');
        iframe = $('#portal-main').get(0);
      }
      // Check if we can access the Iframe
      if (iframe && iframe.contentWindow) {
        _con.log('IFrame available');
        status = STATUS_INIT;
        return true;
      } else {
        _con.log('IFrame not available');
        _closeIFRAME();
        return false;
      }
    } else {
      return false;
    }
  }

  function _closeIFRAME() {
    $('#portal-main').remove();
    _con.log('IFrame removed');
  }

  function _openDialog(dialogId, transactional, input, callback) {
    if (_openIFRAME()) {
      pendingDialogId = dialogId;
      pendingDialogTransactional = transactional;
      pendingDialogInput = input;
      pendingDialogCallback = callback;
    }
  }

  var _openNotebookSharingDialog = function (notebook) {
    var entities = [];
    if (notebook && Array.isArray(notebook.shares)) {
      entities = notebook.shares.map(function (share) {
        return share.entity;
      });
    }
    _openDialog('shares-dialog', true, {
      notebook: notebook,
      entities: entities
    }, function (updatedEntities) {
      if (updatedEntities) {
        notebook.shares = mergeShares(notebook.shares, 'url', updatedEntities);
      }
    });
  };

  var _openGistPublishDialog = function (notebook) {
    _openDialog('publish-gist-dialog', true, {
      notebook: notebook
    }, function (gistShareEntity) {
      if (gistShareEntity) {
        notebook.shares = mergeShares(notebook.shares, 'gist', [gistShareEntity]);
      }
    });
  };

  var _openPushToGitHubDialog = function (notebook, project) {
    _openDialog('publish-github-dialog', true, {
      notebook: notebook,
      project: project
    }, function (gitHubShareEntity) {
      if (gitHubShareEntity) {
        notebook.shares = mergeShares(notebook.shares, 'github', [gitHubShareEntity]);
      }
    });
  };

  function mergeShares(shares, scope, updatedEntities) {
    var entityFilter = _getFilterForEntityScope(scope);
    var result = shares.filter(function (share) {
      return !(share && typeof share.entity === 'object' && entityFilter(share.entity));
    });
    var entitiesForScope = updatedEntities.filter(entityFilter);
    if (entitiesForScope.length === 1) {
      result.push({
        'url': null,
        'entity': entitiesForScope[0]
      });
    }
    return result;
  }

  function _getFilterForEntityScope(scope) {
    return function (entity) {
      return entity && typeof entity.scope === 'string' && entity.scope === scope;
    };
  }

  return {
    openNotebookSharingDialog: _openNotebookSharingDialog,
    openGistPublishDialog: _openGistPublishDialog,
    openPushToGitHubDialog: _openPushToGitHubDialog
  };

})(jQuery);

/*******************************************************************************
* IBM Confidential
* OCO Source Materials
* 5725-Y50
* (C) Copyright IBM Corp. 2016
*
* The source code for this program is not published or otherwise divested of
* its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office.
*******************************************************************************/
var CDSXAX = CDSXAX || {};

CDSXAX.ProjectInfoModel = (function ($) {
  'use strict';

  var

  _getProjectInfo = function (params) {
    function _buildProjectInfoUrl() {
      return params.entryPrefix + '/notebooks/projects/' + params.projectId;
    }

    return $.ajax({
      url: _buildProjectInfoUrl(),
      method: 'GET',
      cache: false,
      dataType: 'json'
    });
  },

  _getComputesWithPreselectionAndKernels = function (params) {
    function _buildProjectInfoUrl() {
      return params.entryPrefix + '/notebooks/projects/' + params.projectId + '/computes';
    }

    return $.ajax({
      url: _buildProjectInfoUrl(),
      method: 'GET',
      cache: false,
      dataType: 'json'
    });

  },

  _addCompute = function (params) {
    function _buildComputesUrl() {
      return params.entryPrefix + '/notebooks/projects/' + params.projectId +
        '/computes/' + params.sparkInstanceId;
    }

    return $.ajax({
      url: _buildComputesUrl(),
      method: 'POST',
      cache: false
    });
  },

  _getProjectContextCreationCodeWithProjectToken = function (params) {
    function _buildProjectContextCodeGenerationUrl() {
      var queryParams = {
        projectId: params.projectId,
        language: params.language,
        dataAccess: params.dataAccess,
        fileName: params.fileName
      };
      return params.entryPrefix +
        '/notebooks/projects/' + params.projectId + '/projectContextCode/generate' +
        '?' + $.param(queryParams);
    }

    return $.ajax({
      url: _buildProjectContextCodeGenerationUrl(),
      method: 'GET',
      cache: false
    });

  };

  return {
    getProjectInfo: _getProjectInfo,
    getComputesWithPreselectionAndKernels: _getComputesWithPreselectionAndKernels,
    getProjectContextCreationCodeWithProjectToken: _getProjectContextCreationCodeWithProjectToken,
    addCompute: _addCompute
  };

})(jQuery);
