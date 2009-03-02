
function deriveHost() {
	var id = "tu_dummy_script";
	document.write('<script id="' + id + '"></script>');

	var dummy_script = document.getElementById(id);
	var src  = dummy_script.previousSibling.getAttribute("src");
	var host = src.match(/^\w+\:\/\//) ? src.match(/^\w+\:\/\/[^\/]*\//)[0] : "";

	dummy_script.parentNode.removeChild(dummy_script);
	return host;
}
var scriptHost = deriveHost();

// *
// * jQuery JavaScript Library v1.3.1 (http://jquery.com/)
// *
// * Copyright (c) 2009 John Resig
// * Dual licensed under the MIT and GPL licenses.
// * http://docs.jquery.com/License
// *
// * $Date: 2009-01-21 20:42:16 -0500 (Wed, 21 Jan 2009) $
// * $Rev: 6158 $
// *
// * &
// *
// * Sizzle CSS Selector Engine v0.9.3 (http://sizzlejs.com/)
// *
// * Copyright 2009, The Dojo Foundation
// * Released under the MIT, BSD, and GPL Licenses.
// *

try { jQuery } catch(e) {
  (function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.makeArray(E))},selector:"",jquery:"1.3.1",size:function(){return this.length},get:function(E){return E===g?o.makeArray(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,find:function(E){if(this.length===1&&!/,/.test(E)){var G=this.pushStack([],"find",E);G.length=0;o.find(E,this[0],G);return G}else{var F=o.map(this,function(H){return o.find(E,H)});return this.pushStack(/[^+>] [^+>]/.test(E)?o.unique(F):F,"find",E)}},clone:function(F){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.cloneNode(true),H=document.createElement("div");H.appendChild(I);return o.clean([H.innerHTML])[0]}else{return this.cloneNode(true)}});var G=E.find("*").andSelf().each(function(){if(this[h]!==g){this[h]=null}});if(F===true){this.find("*").andSelf().each(function(I){if(this.nodeType==3){return}var H=o.data(this,"events");for(var K in H){for(var J in H[K]){o.event.add(G[I],K,H[K][J],H[K][J].data)}}})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var F=o.expr.match.POS.test(E)?o(E):null;return this.map(function(){var G=this;while(G&&G.ownerDocument){if(F?F.index(G)>-1:o(G).is(E)){return G}G=G.parentNode}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML:null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(K,N,M){if(this[0]){var J=(this[0].ownerDocument||this[0]).createDocumentFragment(),G=o.clean(K,(this[0].ownerDocument||this[0]),J),I=J.firstChild,E=this.length>1?J.cloneNode(true):J;if(I){for(var H=0,F=this.length;H<F;H++){M.call(L(this[H],I),H>0?E.cloneNode(true):J)}}if(G){o.each(G,z)}}return this;function L(O,P){return N&&o.nodeName(O,"table")&&o.nodeName(P,"tr")?(O.getElementsByTagName("tbody")[0]||O.appendChild(O.ownerDocument.createElement("tbody"))):O}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){G=o.trim(G);if(G){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(G,E,I){if(E=="width"||E=="height"){var K,F={position:"absolute",visibility:"hidden",display:"block"},J=E=="width"?["Left","Right"]:["Top","Bottom"];function H(){K=E=="width"?G.offsetWidth:G.offsetHeight;var M=0,L=0;o.each(J,function(){M+=parseFloat(o.curCSS(G,"padding"+this,true))||0;L+=parseFloat(o.curCSS(G,"border"+this+"Width",true))||0});K-=Math.round(M+L)}if(o(G).is(":visible")){H()}else{o.swap(G,F,H)}return Math.max(0,K)}return o.curCSS(G,E,I)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,R){if(typeof R==="number"){R+=""}if(!R){return}if(typeof R==="string"){R=R.replace(/(<(\w+)[^>]*?)\/>/g,function(T,U,S){return S.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?T:U+"></"+S+">"});var O=o.trim(R).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+R+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var N=!O.indexOf("<table")&&O.indexOf("<tbody")<0?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&O.indexOf("<tbody")<0?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(R)){L.insertBefore(K.createTextNode(R.match(/^\s*/)[0]),L.firstChild)}R=o.makeArray(L.childNodes)}if(R.nodeType){G.push(R)}else{G=o.merge(G,R)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(){var G=arguments;return this.each(function(){for(var H=0,I=G.length;H<I;H++){o(G[H])[F](this)}})}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(">*",this).remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
  (function(){var Q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]+['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g,K=0,G=Object.prototype.toString;var F=function(X,T,aa,ab){aa=aa||[];T=T||document;if(T.nodeType!==1&&T.nodeType!==9){return[]}if(!X||typeof X!=="string"){return aa}var Y=[],V,ae,ah,S,ac,U,W=true;Q.lastIndex=0;while((V=Q.exec(X))!==null){Y.push(V[1]);if(V[2]){U=RegExp.rightContext;break}}if(Y.length>1&&L.exec(X)){if(Y.length===2&&H.relative[Y[0]]){ae=I(Y[0]+Y[1],T)}else{ae=H.relative[Y[0]]?[T]:F(Y.shift(),T);while(Y.length){X=Y.shift();if(H.relative[X]){X+=Y.shift()}ae=I(X,ae)}}}else{var ad=ab?{expr:Y.pop(),set:E(ab)}:F.find(Y.pop(),Y.length===1&&T.parentNode?T.parentNode:T,P(T));ae=F.filter(ad.expr,ad.set);if(Y.length>0){ah=E(ae)}else{W=false}while(Y.length){var ag=Y.pop(),af=ag;if(!H.relative[ag]){ag=""}else{af=Y.pop()}if(af==null){af=T}H.relative[ag](ah,af,P(T))}}if(!ah){ah=ae}if(!ah){throw"Syntax error, unrecognized expression: "+(ag||X)}if(G.call(ah)==="[object Array]"){if(!W){aa.push.apply(aa,ah)}else{if(T.nodeType===1){for(var Z=0;ah[Z]!=null;Z++){if(ah[Z]&&(ah[Z]===true||ah[Z].nodeType===1&&J(T,ah[Z]))){aa.push(ae[Z])}}}else{for(var Z=0;ah[Z]!=null;Z++){if(ah[Z]&&ah[Z].nodeType===1){aa.push(ae[Z])}}}}}else{E(ah,aa)}if(U){F(U,T,aa,ab)}return aa};F.matches=function(S,T){return F(S,null,null,T)};F.find=function(Z,S,aa){var Y,W;if(!Z){return[]}for(var V=0,U=H.order.length;V<U;V++){var X=H.order[V],W;if((W=H.match[X].exec(Z))){var T=RegExp.leftContext;if(T.substr(T.length-1)!=="\\"){W[1]=(W[1]||"").replace(/\\/g,"");Y=H.find[X](W,S,aa);if(Y!=null){Z=Z.replace(H.match[X],"");break}}}}if(!Y){Y=S.getElementsByTagName("*")}return{set:Y,expr:Z}};F.filter=function(ab,aa,ae,V){var U=ab,ag=[],Y=aa,X,S;while(ab&&aa.length){for(var Z in H.filter){if((X=H.match[Z].exec(ab))!=null){var T=H.filter[Z],af,ad;S=false;if(Y==ag){ag=[]}if(H.preFilter[Z]){X=H.preFilter[Z](X,Y,ae,ag,V);if(!X){S=af=true}else{if(X===true){continue}}}if(X){for(var W=0;(ad=Y[W])!=null;W++){if(ad){af=T(ad,X,W,Y);var ac=V^!!af;if(ae&&af!=null){if(ac){S=true}else{Y[W]=false}}else{if(ac){ag.push(ad);S=true}}}}}if(af!==g){if(!ae){Y=ag}ab=ab.replace(H.match[Z],"");if(!S){return[]}break}}}ab=ab.replace(/\s*,\s*/,"");if(ab==U){if(S==null){throw"Syntax error, unrecognized expression: "+ab}else{break}}U=ab}return Y};var H=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(S){return S.getAttribute("href")}},relative:{"+":function(W,T){for(var U=0,S=W.length;U<S;U++){var V=W[U];if(V){var X=V.previousSibling;while(X&&X.nodeType!==1){X=X.previousSibling}W[U]=typeof T==="string"?X||false:X===T}}if(typeof T==="string"){F.filter(T,W,true)}},">":function(X,T,Y){if(typeof T==="string"&&!/\W/.test(T)){T=Y?T:T.toUpperCase();for(var U=0,S=X.length;U<S;U++){var W=X[U];if(W){var V=W.parentNode;X[U]=V.nodeName===T?V:false}}}else{for(var U=0,S=X.length;U<S;U++){var W=X[U];if(W){X[U]=typeof T==="string"?W.parentNode:W.parentNode===T}}if(typeof T==="string"){F.filter(T,X,true)}}},"":function(V,T,X){var U="done"+(K++),S=R;if(!T.match(/\W/)){var W=T=X?T:T.toUpperCase();S=O}S("parentNode",T,U,V,W,X)},"~":function(V,T,X){var U="done"+(K++),S=R;if(typeof T==="string"&&!T.match(/\W/)){var W=T=X?T:T.toUpperCase();S=O}S("previousSibling",T,U,V,W,X)}},find:{ID:function(T,U,V){if(typeof U.getElementById!=="undefined"&&!V){var S=U.getElementById(T[1]);return S?[S]:[]}},NAME:function(S,T,U){if(typeof T.getElementsByName!=="undefined"&&!U){return T.getElementsByName(S[1])}},TAG:function(S,T){return T.getElementsByTagName(S[1])}},preFilter:{CLASS:function(V,T,U,S,Y){V=" "+V[1].replace(/\\/g,"")+" ";var X;for(var W=0;(X=T[W])!=null;W++){if(X){if(Y^(" "+X.className+" ").indexOf(V)>=0){if(!U){S.push(X)}}else{if(U){T[W]=false}}}}return false},ID:function(S){return S[1].replace(/\\/g,"")},TAG:function(T,S){for(var U=0;S[U]===false;U++){}return S[U]&&P(S[U])?T[1]:T[1].toUpperCase()},CHILD:function(S){if(S[1]=="nth"){var T=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(S[2]=="even"&&"2n"||S[2]=="odd"&&"2n+1"||!/\D/.test(S[2])&&"0n+"+S[2]||S[2]);S[2]=(T[1]+(T[2]||1))-0;S[3]=T[3]-0}S[0]="done"+(K++);return S},ATTR:function(T){var S=T[1].replace(/\\/g,"");if(H.attrMap[S]){T[1]=H.attrMap[S]}if(T[2]==="~="){T[4]=" "+T[4]+" "}return T},PSEUDO:function(W,T,U,S,X){if(W[1]==="not"){if(W[3].match(Q).length>1){W[3]=F(W[3],null,null,T)}else{var V=F.filter(W[3],T,U,true^X);if(!U){S.push.apply(S,V)}return false}}else{if(H.match.POS.test(W[0])){return true}}return W},POS:function(S){S.unshift(true);return S}},filters:{enabled:function(S){return S.disabled===false&&S.type!=="hidden"},disabled:function(S){return S.disabled===true},checked:function(S){return S.checked===true},selected:function(S){S.parentNode.selectedIndex;return S.selected===true},parent:function(S){return !!S.firstChild},empty:function(S){return !S.firstChild},has:function(U,T,S){return !!F(S[3],U).length},header:function(S){return/h\d/i.test(S.nodeName)},text:function(S){return"text"===S.type},radio:function(S){return"radio"===S.type},checkbox:function(S){return"checkbox"===S.type},file:function(S){return"file"===S.type},password:function(S){return"password"===S.type},submit:function(S){return"submit"===S.type},image:function(S){return"image"===S.type},reset:function(S){return"reset"===S.type},button:function(S){return"button"===S.type||S.nodeName.toUpperCase()==="BUTTON"},input:function(S){return/input|select|textarea|button/i.test(S.nodeName)}},setFilters:{first:function(T,S){return S===0},last:function(U,T,S,V){return T===V.length-1},even:function(T,S){return S%2===0},odd:function(T,S){return S%2===1},lt:function(U,T,S){return T<S[3]-0},gt:function(U,T,S){return T>S[3]-0},nth:function(U,T,S){return S[3]-0==T},eq:function(U,T,S){return S[3]-0==T}},filter:{CHILD:function(S,V){var Y=V[1],Z=S.parentNode;var X=V[0];if(Z&&(!Z[X]||!S.nodeIndex)){var W=1;for(var T=Z.firstChild;T;T=T.nextSibling){if(T.nodeType==1){T.nodeIndex=W++}}Z[X]=W-1}if(Y=="first"){return S.nodeIndex==1}else{if(Y=="last"){return S.nodeIndex==Z[X]}else{if(Y=="only"){return Z[X]==1}else{if(Y=="nth"){var ab=false,U=V[2],aa=V[3];if(U==1&&aa==0){return true}if(U==0){if(S.nodeIndex==aa){ab=true}}else{if((S.nodeIndex-aa)%U==0&&(S.nodeIndex-aa)/U>=0){ab=true}}return ab}}}}},PSEUDO:function(Y,U,V,Z){var T=U[1],W=H.filters[T];if(W){return W(Y,V,U,Z)}else{if(T==="contains"){return(Y.textContent||Y.innerText||"").indexOf(U[3])>=0}else{if(T==="not"){var X=U[3];for(var V=0,S=X.length;V<S;V++){if(X[V]===Y){return false}}return true}}}},ID:function(T,S){return T.nodeType===1&&T.getAttribute("id")===S},TAG:function(T,S){return(S==="*"&&T.nodeType===1)||T.nodeName===S},CLASS:function(T,S){return S.test(T.className)},ATTR:function(W,U){var S=H.attrHandle[U[1]]?H.attrHandle[U[1]](W):W[U[1]]||W.getAttribute(U[1]),X=S+"",V=U[2],T=U[4];return S==null?V==="!=":V==="="?X===T:V==="*="?X.indexOf(T)>=0:V==="~="?(" "+X+" ").indexOf(T)>=0:!U[4]?S:V==="!="?X!=T:V==="^="?X.indexOf(T)===0:V==="$="?X.substr(X.length-T.length)===T:V==="|="?X===T||X.substr(0,T.length+1)===T+"-":false},POS:function(W,T,U,X){var S=T[2],V=H.setFilters[S];if(V){return V(W,U,T,X)}}}};var L=H.match.POS;for(var N in H.match){H.match[N]=RegExp(H.match[N].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(T,S){T=Array.prototype.slice.call(T);if(S){S.push.apply(S,T);return S}return T};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(M){E=function(W,V){var T=V||[];if(G.call(W)==="[object Array]"){Array.prototype.push.apply(T,W)}else{if(typeof W.length==="number"){for(var U=0,S=W.length;U<S;U++){T.push(W[U])}}else{for(var U=0;W[U];U++){T.push(W[U])}}}return T}}(function(){var T=document.createElement("form"),U="script"+(new Date).getTime();T.innerHTML="<input name='"+U+"'/>";var S=document.documentElement;S.insertBefore(T,S.firstChild);if(!!document.getElementById(U)){H.find.ID=function(W,X,Y){if(typeof X.getElementById!=="undefined"&&!Y){var V=X.getElementById(W[1]);return V?V.id===W[1]||typeof V.getAttributeNode!=="undefined"&&V.getAttributeNode("id").nodeValue===W[1]?[V]:g:[]}};H.filter.ID=function(X,V){var W=typeof X.getAttributeNode!=="undefined"&&X.getAttributeNode("id");return X.nodeType===1&&W&&W.nodeValue===V}}S.removeChild(T)})();(function(){var S=document.createElement("div");S.appendChild(document.createComment(""));if(S.getElementsByTagName("*").length>0){H.find.TAG=function(T,X){var W=X.getElementsByTagName(T[1]);if(T[1]==="*"){var V=[];for(var U=0;W[U];U++){if(W[U].nodeType===1){V.push(W[U])}}W=V}return W}}S.innerHTML="<a href='#'></a>";if(S.firstChild&&S.firstChild.getAttribute("href")!=="#"){H.attrHandle.href=function(T){return T.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var S=F,T=document.createElement("div");T.innerHTML="<p class='TEST'></p>";if(T.querySelectorAll&&T.querySelectorAll(".TEST").length===0){return}F=function(X,W,U,V){W=W||document;if(!V&&W.nodeType===9&&!P(W)){try{return E(W.querySelectorAll(X),U)}catch(Y){}}return S(X,W,U,V)};F.find=S.find;F.filter=S.filter;F.selectors=S.selectors;F.matches=S.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){H.order.splice(1,0,"CLASS");H.find.CLASS=function(S,T){return T.getElementsByClassName(S[1])}}function O(T,Z,Y,ac,aa,ab){for(var W=0,U=ac.length;W<U;W++){var S=ac[W];if(S){S=S[T];var X=false;while(S&&S.nodeType){var V=S[Y];if(V){X=ac[V];break}if(S.nodeType===1&&!ab){S[Y]=W}if(S.nodeName===Z){X=S;break}S=S[T]}ac[W]=X}}}function R(T,Y,X,ab,Z,aa){for(var V=0,U=ab.length;V<U;V++){var S=ab[V];if(S){S=S[T];var W=false;while(S&&S.nodeType){if(S[X]){W=ab[S[X]];break}if(S.nodeType===1){if(!aa){S[X]=V}if(typeof Y!=="string"){if(S===Y){W=true;break}}else{if(F.filter(Y,[S]).length>0){W=S;break}}}S=S[T]}ab[V]=W}}}var J=document.compareDocumentPosition?function(T,S){return T.compareDocumentPosition(S)&16}:function(T,S){return T!==S&&(T.contains?T.contains(S):true)};var P=function(S){return S.nodeType===9&&S.documentElement.nodeName!=="HTML"||!!S.ownerDocument&&P(S.ownerDocument)};var I=function(S,Z){var V=[],W="",X,U=Z.nodeType?[Z]:Z;while((X=H.match.PSEUDO.exec(S))){W+=X[0];S=S.replace(H.match.PSEUDO,"")}S=H.relative[S]?S+"*":S;for(var Y=0,T=U.length;Y<T;Y++){F(S,U[Y],V)}return F.filter(W,V)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(S){return"hidden"===S.type||o.css(S,"display")==="none"||o.css(S,"visibility")==="hidden"};F.selectors.filters.visible=function(S){return"hidden"!==S.type&&o.css(S,"display")!=="none"&&o.css(S,"visibility")!=="hidden"};F.selectors.filters.animated=function(S){return o.grep(o.timers,function(T){return S===T.elem}).length};o.multiFilter=function(U,S,T){if(T){U=":not("+U+")"}return F.matches(U,S)};o.dir=function(U,T){var S=[],V=U[T];while(V&&V!=document){if(V.nodeType==1){S.push(V)}V=V[T]}return S};o.nth=function(W,S,U,V){S=S||1;var T=0;for(;W;W=W[U]){if(W.nodeType==1&&++T==S){break}}return W};o.sibling=function(U,T){var S=[];for(;U;U=U.nextSibling){if(U.nodeType==1&&U!=T){S.push(U)}}return S};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){G=false}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&typeof l.frameElement==="undefined"){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width="1px";L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L)})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}this[H].style.display=o.data(this[H],"olddisplay",K)}}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)==1){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n)}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(H,F){var E=H?"Left":"Top",G=H?"Right":"Bottom";o.fn["inner"+F]=function(){return this[F.toLowerCase()]()+j(this,"padding"+E)+j(this,"padding"+G)};o.fn["outer"+F]=function(J){return this["inner"+F]()+j(this,"border"+E+"Width")+j(this,"border"+G+"Width")+(J?j(this,"margin"+E)+j(this,"margin"+G):0)};var I=F.toLowerCase();o.fn[I]=function(J){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+F]||document.body["client"+F]:this[0]==document?Math.max(document.documentElement["client"+F],document.body["scroll"+F],document.documentElement["scroll"+F],document.body["offset"+F],document.documentElement["offset"+F]):J===g?(this.length?o.css(this[0],I):null):this.css(I,typeof J==="string"?J:J+"px")}})})();
}

// *
// * jQuery UI Core & Draggable & Resizable & Effects Core & Clip 1.6rc5 - New Wave Javascript (Packed)
// *
// * Copyright (c) 2009 Paul Bakaus (http://ui.jquery.com/)
// * Dual licensed under the MIT (MIT-LICENSE.txt)
// * and GPL (GPL-LICENSE.txt) licenses.
// *
// * http://docs.jquery.com/UI
// *

(function(B){var H=B.fn.remove,D=B.browser.mozilla&&(parseFloat(B.browser.version)<1.9);B.ui={version:"1.6rc5",plugin:{add:function(K,J,N){var M=B.ui[K].prototype;for(var L in N){M.plugins[L]=M.plugins[L]||[];M.plugins[L].push([J,N[L]])}},call:function(J,L,K){var N=J.plugins[L];if(!N){return }for(var M=0;M<N.length;M++){if(J.options[N[M][0]]){N[M][1].apply(J.element,K)}}}},contains:function(K,J){return document.compareDocumentPosition?K.compareDocumentPosition(J)&16:K!==J&&K.contains(J)},cssCache:{},css:function(J){if(B.ui.cssCache[J]){return B.ui.cssCache[J]}var K=B('<div class="ui-gen"></div>').addClass(J).css({position:"absolute",top:"-5000px",left:"-5000px",display:"block"}).appendTo("body");B.ui.cssCache[J]=!!((!(/auto|default/).test(K.css("cursor"))||(/^[1-9]/).test(K.css("height"))||(/^[1-9]/).test(K.css("width"))||!(/none/).test(K.css("backgroundImage"))||!(/transparent|rgba\(0, 0, 0, 0\)/).test(K.css("backgroundColor"))));try{B("body").get(0).removeChild(K.get(0))}catch(L){}return B.ui.cssCache[J]},hasScroll:function(L,J){if(B(L).css("overflow")=="hidden"){return false}var M=(J&&J=="left")?"scrollLeft":"scrollTop",K=false;if(L[M]>0){return true}L[M]=1;K=(L[M]>0);L[M]=0;return K},isOverAxis:function(J,L,K){return(J>L)&&(J<(L+K))},isOver:function(O,J,N,M,L,K){return B.ui.isOverAxis(O,N,L)&&B.ui.isOverAxis(J,M,K)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(D){var E=B.attr,C=B.fn.removeAttr,I="http://www.w3.org/2005/07/aaa",F=/^aria-/,G=/^wairole:/;B.attr=function(K,J,L){var M=L!==undefined;return(J=="role"?(M?E.call(this,K,J,"wairole:"+L):(E.apply(this,arguments)||"").replace(G,"")):(F.test(J)?(M?K.setAttributeNS(I,J.replace(F,"aaa:"),L):E.call(this,K,J.replace(F,"aaa:"))):E.apply(this,arguments)))};B.fn.removeAttr=function(J){return(F.test(J)?this.each(function(){this.removeAttributeNS(I,J.replace(F,""))}):C.call(this,J))}}B.fn.extend({remove:function(){B("*",this).add(this).each(function(){B(this).triggerHandler("remove")});return H.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var J;if((B.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){J=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(B.curCSS(this,"position",1))&&(/(auto|scroll)/).test(B.curCSS(this,"overflow",1)+B.curCSS(this,"overflow-y",1)+B.curCSS(this,"overflow-x",1))}).eq(0)}else{J=this.parents().filter(function(){return(/(auto|scroll)/).test(B.curCSS(this,"overflow",1)+B.curCSS(this,"overflow-y",1)+B.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!J.length?B(document):J}});B.extend(B.expr[":"],{data:function(L,K,J){return !!B.data(L,J[3])},tabbable:function(J){var L=J.nodeName.toLowerCase();function K(M){return !(B(M).is(":hidden")||B(M).parents(":hidden").length)}return(J.tabIndex>=0&&(("a"==L&&J.href)||(/input|select|textarea|button/.test(L)&&"hidden"!=J.type&&!J.disabled))&&K(J))}});function A(N,J,O,M){function L(Q){var P=B[N][J][Q]||[];return(typeof P=="string"?P.split(/,?\s+/):P)}var K=L("getter");if(M.length==1&&typeof M[0]=="string"){K=K.concat(L("getterSetter"))}return(B.inArray(O,K)!=-1)}B.widget=function(J,K){var L=J.split(".")[0];J=J.split(".")[1];B.fn[J]=function(P){var N=(typeof P=="string"),O=Array.prototype.slice.call(arguments,1);if(N&&P.substring(0,1)=="_"){return this}if(N&&A(L,J,P,O)){var M=B.data(this[0],J);return(M?M[P].apply(M,O):undefined)}return this.each(function(){var Q=B.data(this,J);(!Q&&!N&&B.data(this,J,new B[L][J](this,P)));(Q&&N&&B.isFunction(Q[P])&&Q[P].apply(Q,O))})};B[L]=B[L]||{};B[L][J]=function(N,O){var M=this;this.namespace=L;this.widgetName=J;this.widgetEventPrefix=B[L][J].eventPrefix||J;this.widgetBaseClass=L+"-"+J;this.options=B.extend({},B.widget.defaults,B[L][J].defaults,B.metadata&&B.metadata.get(N)[J],O);this.element=B(N).bind("setData."+J,function(Q,P,R){if(Q.target==N){return M._setData(P,R)}}).bind("getData."+J,function(Q,P){if(Q.target==N){return M._getData(P)}}).bind("remove",function(){return M.destroy()});this._init()};B[L][J].prototype=B.extend({},B.widget.prototype,K);B[L][J].getterSetter="option"};B.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(L,M){var K=L,J=this;if(typeof L=="string"){if(M===undefined){return this._getData(L)}K={};K[L]=M}B.each(K,function(N,O){J._setData(N,O)})},_getData:function(J){return this.options[J]},_setData:function(J,K){this.options[J]=K;if(J=="disabled"){this.element[K?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",K)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(K,L,M){var N=this.options[K],J=(K==this.widgetEventPrefix?K:this.widgetEventPrefix+K);L=B.Event(L);L.type=J;this.element.trigger(L,M);return !(B.isFunction(N)&&N.call(this.element[0],L,M)===false||L.isDefaultPrevented())}};B.widget.defaults={disabled:false};B.ui.mouse={_mouseInit:function(){var J=this;this.element.bind("mousedown."+this.widgetName,function(K){return J._mouseDown(K)}).bind("click."+this.widgetName,function(K){if(J._preventClickEvent){J._preventClickEvent=false;return false}});if(B.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(B.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(L){(this._mouseStarted&&this._mouseUp(L));this._mouseDownEvent=L;var J=this,M=(L.which==1),K=(typeof this.options.cancel=="string"?B(L.target).parents().add(L.target).filter(this.options.cancel).length:false);if(!M||K||!this._mouseCapture(L)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){J.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(L)&&this._mouseDelayMet(L)){this._mouseStarted=(this._mouseStart(L)!==false);if(!this._mouseStarted){L.preventDefault();return true}}this._mouseMoveDelegate=function(N){return J._mouseMove(N)};this._mouseUpDelegate=function(N){return J._mouseUp(N)};B(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(B.browser.safari||L.preventDefault());return true},_mouseMove:function(J){if(B.browser.msie&&!J.button){return this._mouseUp(J)}if(this._mouseStarted){this._mouseDrag(J);return J.preventDefault()}if(this._mouseDistanceMet(J)&&this._mouseDelayMet(J)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,J)!==false);(this._mouseStarted?this._mouseDrag(J):this._mouseUp(J))}return !this._mouseStarted},_mouseUp:function(J){B(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=true;this._mouseStop(J)}return false},_mouseDistanceMet:function(J){return(Math.max(Math.abs(this._mouseDownEvent.pageX-J.pageX),Math.abs(this._mouseDownEvent.pageY-J.pageY))>=this.options.distance)},_mouseDelayMet:function(J){return this.mouseDelayMet},_mouseStart:function(J){},_mouseDrag:function(J){},_mouseStop:function(J){},_mouseCapture:function(J){return true}};B.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);(function(A){A.widget("ui.draggable",A.extend({},A.ui.mouse,{_init:function(){if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}(this.options.cssNamespace&&this.element.addClass(this.options.cssNamespace+"-draggable"));(this.options.disabled&&this.element.addClass(this.options.cssNamespace+"-draggable-disabled"));this._mouseInit()},destroy:function(){if(!this.element.data("draggable")){return }this.element.removeData("draggable").unbind(".draggable").removeClass(this.options.cssNamespace+"-draggable "+this.options.cssNamespace+"-draggable-dragging "+this.options.cssNamespace+"-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(B){var C=this.options;if(this.helper||C.disabled||A(B.target).is("."+this.options.cssNamespace+"-resizable-handle")){return false}this.handle=this._getHandle(B);if(!this.handle){return false}return true},_mouseStart:function(B){var C=this.options;this.helper=this._createHelper(B);this._cacheHelperProportions();if(A.ui.ddmanager){A.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};A.extend(this.offset,{click:{left:B.pageX-this.offset.left,top:B.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(B);this.originalPageX=B.pageX;this.originalPageY=B.pageY;if(C.cursorAt){this._adjustOffsetFromHelper(C.cursorAt)}if(C.containment){this._setContainment()}this._trigger("start",B);this._cacheHelperProportions();if(A.ui.ddmanager&&!C.dropBehaviour){A.ui.ddmanager.prepareOffsets(this,B)}this.helper.addClass(C.cssNamespace+"-draggable-dragging");this._mouseDrag(B,true);return true},_mouseDrag:function(B,D){this.position=this._generatePosition(B);this.positionAbs=this._convertPositionTo("absolute");if(!D){var C=this._uiHash();this._trigger("drag",B,C);this.position=C.position}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}if(A.ui.ddmanager){A.ui.ddmanager.drag(this,B)}return false},_mouseStop:function(C){var D=false;if(A.ui.ddmanager&&!this.options.dropBehaviour){D=A.ui.ddmanager.drop(this,C)}if(this.dropped){D=this.dropped;this.dropped=false}if((this.options.revert=="invalid"&&!D)||(this.options.revert=="valid"&&D)||this.options.revert===true||(A.isFunction(this.options.revert)&&this.options.revert.call(this.element,D))){var B=this;A(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){B._trigger("stop",C);B._clear()})}else{this._trigger("stop",C);this._clear()}return false},_getHandle:function(C){var B=!this.options.handle||!A(this.options.handle,this.element).length?true:false;A(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==C.target){B=true}});return B},_createHelper:function(C){var D=this.options;var B=A.isFunction(D.helper)?A(D.helper.apply(this.element[0],[C])):(D.helper=="clone"?this.element.clone():this.element);if(!B.parents("body").length){B.appendTo((D.appendTo=="parent"?this.element[0].parentNode:D.appendTo))}if(B[0]!=this.element[0]&&!(/(fixed|absolute)/).test(B.css("position"))){B.css("position","absolute")}return B},_adjustOffsetFromHelper:function(B){if(B.left!=undefined){this.offset.click.left=B.left+this.margins.left}if(B.right!=undefined){this.offset.click.left=this.helperProportions.width-B.right+this.margins.left}if(B.top!=undefined){this.offset.click.top=B.top+this.margins.top}if(B.bottom!=undefined){this.offset.click.top=this.helperProportions.height-B.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var B=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0])){B.left+=this.scrollParent.scrollLeft();B.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body&&A.browser.mozilla)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&A.browser.msie)){B={top:0,left:0}}return{top:B.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:B.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var B=this.element.position();return{top:B.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:B.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var E=this.options;if(E.containment=="parent"){E.containment=this.helper[0].parentNode}if(E.containment=="document"||E.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,A(E.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(A(E.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(E.containment)){var C=A(E.containment)[0];var D=A(E.containment).offset();var B=(A(C).css("overflow")!="hidden");this.containment=[D.left+(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.margins.left,D.top+(parseInt(A(C).css("borderTopWidth"),10)||0)-this.margins.top,D.left+(B?Math.max(C.scrollWidth,C.offsetWidth):C.offsetWidth)-(parseInt(A(C).css("borderLeftWidth"),10)||0)-this.helperProportions.width-this.margins.left,D.top+(B?Math.max(C.scrollHeight,C.offsetHeight):C.offsetHeight)-(parseInt(A(C).css("borderTopWidth"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(E,G){if(!G){G=this.position}var B=E=="absolute"?1:-1;var D=this.options,C=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,F=(/(html|body)/i).test(C[0].tagName);return{top:(G.top+this.offset.relative.top*B+this.offset.parent.top*B-(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(F?0:C.scrollTop()))*B),left:(G.left+this.offset.relative.left*B+this.offset.parent.left*B-(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():F?0:C.scrollLeft())*B)}},_generatePosition:function(D){var H=this.options,E=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&A.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,I=(/(html|body)/i).test(E[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var C=D.pageX;var B=D.pageY;if(this.originalPosition){if(this.containment){if(D.pageX-this.offset.click.left<this.containment[0]){C=this.containment[0]+this.offset.click.left}if(D.pageY-this.offset.click.top<this.containment[1]){B=this.containment[1]+this.offset.click.top}if(D.pageX-this.offset.click.left>this.containment[2]){C=this.containment[2]+this.offset.click.left}if(D.pageY-this.offset.click.top>this.containment[3]){B=this.containment[3]+this.offset.click.top}}if(H.grid){var G=this.originalPageY+Math.round((B-this.originalPageY)/H.grid[1])*H.grid[1];B=this.containment?(!(G-this.offset.click.top<this.containment[1]||G-this.offset.click.top>this.containment[3])?G:(!(G-this.offset.click.top<this.containment[1])?G-H.grid[1]:G+H.grid[1])):G;var F=this.originalPageX+Math.round((C-this.originalPageX)/H.grid[0])*H.grid[0];C=this.containment?(!(F-this.offset.click.left<this.containment[0]||F-this.offset.click.left>this.containment[2])?F:(!(F-this.offset.click.left<this.containment[0])?F-H.grid[0]:F+H.grid[0])):F}}return{top:(B-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(I?0:E.scrollTop()))),left:(C-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():I?0:E.scrollLeft()))}},_clear:function(){this.helper.removeClass(this.options.cssNamespace+"-draggable-dragging");if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(B,C,D){D=D||this._uiHash();A.ui.plugin.call(this,B,[C,D]);if(B=="drag"){this.positionAbs=this._convertPositionTo("absolute")}return A.widget.prototype._trigger.call(this,B,C,D)},plugins:{},_uiHash:function(B){return{helper:this.helper,position:this.position,absolutePosition:this.positionAbs,options:this.options}}}));A.extend(A.ui.draggable,{version:"1.6rc5",eventPrefix:"drag",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cssNamespace:"ui",cursor:"default",cursorAt:null,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:null,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:null}});A.ui.plugin.add("draggable","connectToSortable",{start:function(B,D){var C=A(this).data("draggable");C.sortables=[];A(D.options.connectToSortable).each(function(){A(this+"").each(function(){if(A.data(this,"sortable")){var E=A.data(this,"sortable");C.sortables.push({instance:E,shouldRevert:E.options.revert});E._refreshItems();E._trigger("activate",B,C)}})})},stop:function(B,D){var C=A(this).data("draggable");A.each(C.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;C.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(B);this.instance.element.triggerHandler("sortreceive",[B,A.extend(this.instance._uiHash(),{sender:C.element})],this.instance.options.receive);this.instance.options.helper=this.instance.options._helper;if(C.options.helper=="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",B,C)}})},drag:function(C,F){var E=A(this).data("draggable"),B=this;var D=function(I){var O=this.offset.click.top,M=this.offset.click.left;var G=this.positionAbs.top,K=this.positionAbs.left;var J=I.height,L=I.width;var N=I.top,H=I.left;return A.ui.isOver(G+O,K+M,N,H,J,L)};A.each(E.sortables,function(G){if(D.call(E,this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=A(B).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return F.helper[0]};C.target=this.instance.currentItem[0];this.instance._mouseCapture(C,true);this.instance._mouseStart(C,true,true);this.instance.offset.click.top=E.offset.click.top;this.instance.offset.click.left=E.offset.click.left;this.instance.offset.parent.left-=E.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=E.offset.parent.top-this.instance.offset.parent.top;E._trigger("toSortable",C);E.dropped=this.instance.element;this.instance.fromOutside=true}if(this.instance.currentItem){this.instance._mouseDrag(C)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._mouseStop(C,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}E._trigger("fromSortable",C);E.dropped=false}}})}});A.ui.plugin.add("draggable","cursor",{start:function(C,D){var B=A("body");if(B.css("cursor")){D.options._cursor=B.css("cursor")}B.css("cursor",D.options.cursor)},stop:function(B,C){if(C.options._cursor){A("body").css("cursor",C.options._cursor)}}});A.ui.plugin.add("draggable","iframeFix",{start:function(B,C){A(C.options.iframeFix===true?"iframe":C.options.iframeFix).each(function(){A('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(A(this).offset()).appendTo("body")})},stop:function(B,C){A("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});A.ui.plugin.add("draggable","opacity",{start:function(C,D){var B=A(D.helper);if(B.css("opacity")){D.options._opacity=B.css("opacity")}B.css("opacity",D.options.opacity)},stop:function(B,C){if(C.options._opacity){A(C.helper).css("opacity",C.options._opacity)}}});A.ui.plugin.add("draggable","scroll",{start:function(C,D){var E=D.options;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){B.overflowOffset=B.scrollParent.offset()}},drag:function(D,E){var F=E.options,C=false;var B=A(this).data("draggable");if(B.scrollParent[0]!=document&&B.scrollParent[0].tagName!="HTML"){if((B.overflowOffset.top+B.scrollParent[0].offsetHeight)-D.pageY<F.scrollSensitivity){B.scrollParent[0].scrollTop=C=B.scrollParent[0].scrollTop+F.scrollSpeed}else{if(D.pageY-B.overflowOffset.top<F.scrollSensitivity){B.scrollParent[0].scrollTop=C=B.scrollParent[0].scrollTop-F.scrollSpeed}}if((B.overflowOffset.left+B.scrollParent[0].offsetWidth)-D.pageX<F.scrollSensitivity){B.scrollParent[0].scrollLeft=C=B.scrollParent[0].scrollLeft+F.scrollSpeed}else{if(D.pageX-B.overflowOffset.left<F.scrollSensitivity){B.scrollParent[0].scrollLeft=C=B.scrollParent[0].scrollLeft-F.scrollSpeed}}}else{if(D.pageY-A(document).scrollTop()<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()-F.scrollSpeed)}else{if(A(window).height()-(D.pageY-A(document).scrollTop())<F.scrollSensitivity){C=A(document).scrollTop(A(document).scrollTop()+F.scrollSpeed)}}if(D.pageX-A(document).scrollLeft()<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()-F.scrollSpeed)}else{if(A(window).width()-(D.pageX-A(document).scrollLeft())<F.scrollSensitivity){C=A(document).scrollLeft(A(document).scrollLeft()+F.scrollSpeed)}}}if(C!==false&&A.ui.ddmanager&&!F.dropBehaviour){A.ui.ddmanager.prepareOffsets(B,D)}}});A.ui.plugin.add("draggable","snap",{start:function(B,D){var C=A(this).data("draggable");C.snapElements=[];A(D.options.snap.constructor!=String?(D.options.snap.items||":data(draggable)"):D.options.snap).each(function(){var F=A(this);var E=F.offset();if(this!=C.element[0]){C.snapElements.push({item:this,width:F.outerWidth(),height:F.outerHeight(),top:E.top,left:E.left})}})},drag:function(M,K){var E=A(this).data("draggable");var Q=K.options.snapTolerance;var P=K.absolutePosition.left,O=P+E.helperProportions.width,D=K.absolutePosition.top,C=D+E.helperProportions.height;for(var N=E.snapElements.length-1;N>=0;N--){var L=E.snapElements[N].left,J=L+E.snapElements[N].width,I=E.snapElements[N].top,R=I+E.snapElements[N].height;if(!((L-Q<P&&P<J+Q&&I-Q<D&&D<R+Q)||(L-Q<P&&P<J+Q&&I-Q<C&&C<R+Q)||(L-Q<O&&O<J+Q&&I-Q<D&&D<R+Q)||(L-Q<O&&O<J+Q&&I-Q<C&&C<R+Q))){if(E.snapElements[N].snapping){(E.options.snap.release&&E.options.snap.release.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=false;continue}if(K.options.snapMode!="inner"){var B=Math.abs(I-C)<=Q;var S=Math.abs(R-D)<=Q;var G=Math.abs(L-O)<=Q;var H=Math.abs(J-P)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I-E.helperProportions.height,left:0}).top}if(S){K.position.top=E._convertPositionTo("relative",{top:R,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L-E.helperProportions.width}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J}).left}}var F=(B||S||G||H);if(K.options.snapMode!="outer"){var B=Math.abs(I-D)<=Q;var S=Math.abs(R-C)<=Q;var G=Math.abs(L-P)<=Q;var H=Math.abs(J-O)<=Q;if(B){K.position.top=E._convertPositionTo("relative",{top:I,left:0}).top}if(S){K.position.top=E._convertPositionTo("relative",{top:R-E.helperProportions.height,left:0}).top}if(G){K.position.left=E._convertPositionTo("relative",{top:0,left:L}).left}if(H){K.position.left=E._convertPositionTo("relative",{top:0,left:J-E.helperProportions.width}).left}}if(!E.snapElements[N].snapping&&(B||S||G||H||F)){(E.options.snap.snap&&E.options.snap.snap.call(E.element,M,A.extend(E._uiHash(),{snapItem:E.snapElements[N].item})))}E.snapElements[N].snapping=(B||S||G||H||F)}}});A.ui.plugin.add("draggable","stack",{start:function(B,C){var D=A.makeArray(A(C.options.stack.group)).sort(function(F,E){return(parseInt(A(F).css("zIndex"),10)||C.options.stack.min)-(parseInt(A(E).css("zIndex"),10)||C.options.stack.min)});A(D).each(function(E){this.style.zIndex=C.options.stack.min+E});this[0].style.zIndex=C.options.stack.min+D.length}});A.ui.plugin.add("draggable","zIndex",{start:function(C,D){var B=A(D.helper);if(B.css("zIndex")){D.options._zIndex=B.css("zIndex")}B.css("zIndex",D.options.zIndex)},stop:function(B,C){if(C.options._zIndex){A(C.helper).css("zIndex",C.options._zIndex)}}})})(jQuery);(function(B){B.widget("ui.resizable",B.extend({},B.ui.mouse,{_init:function(){var M=this,N=this.options;var Q=this.element.css("position");this.originalElement=this.element;this.element.addClass("ui-resizable").css({position:/static/.test(Q)?"relative":Q});B.extend(N,{_aspectRatio:!!(N.aspectRatio),helper:N.helper||N.ghost||N.animate?N.helper||"ui-resizable-helper":null,knobHandles:N.knobHandles===true?"ui-resizable-knob-handle":N.knobHandles});var I="1px solid #DEDEDE";N.defaultTheme={"ui-resizable":{display:"block"},"ui-resizable-handle":{position:"absolute",background:"#F2F2F2",fontSize:"0.1px"},"ui-resizable-n":{cursor:"n-resize",height:"4px",left:"0px",right:"0px",borderTop:I},"ui-resizable-s":{cursor:"s-resize",height:"4px",left:"0px",right:"0px",borderBottom:I},"ui-resizable-e":{cursor:"e-resize",width:"4px",top:"0px",bottom:"0px",borderRight:I},"ui-resizable-w":{cursor:"w-resize",width:"4px",top:"0px",bottom:"0px",borderLeft:I},"ui-resizable-se":{cursor:"se-resize",width:"4px",height:"4px",borderRight:I,borderBottom:I},"ui-resizable-sw":{cursor:"sw-resize",width:"4px",height:"4px",borderBottom:I,borderLeft:I},"ui-resizable-ne":{cursor:"ne-resize",width:"4px",height:"4px",borderRight:I,borderTop:I},"ui-resizable-nw":{cursor:"nw-resize",width:"4px",height:"4px",borderLeft:I,borderTop:I}};N.knobTheme={"ui-resizable-handle":{background:"#F2F2F2",border:"1px solid #808080",height:"8px",width:"8px"},"ui-resizable-n":{cursor:"n-resize",top:"0px",left:"45%"},"ui-resizable-s":{cursor:"s-resize",bottom:"0px",left:"45%"},"ui-resizable-e":{cursor:"e-resize",right:"0px",top:"45%"},"ui-resizable-w":{cursor:"w-resize",left:"0px",top:"45%"},"ui-resizable-se":{cursor:"se-resize",right:"0px",bottom:"0px"},"ui-resizable-sw":{cursor:"sw-resize",left:"0px",bottom:"0px"},"ui-resizable-nw":{cursor:"nw-resize",left:"0px",top:"0px"},"ui-resizable-ne":{cursor:"ne-resize",right:"0px",top:"0px"}};N._nodeName=this.element[0].nodeName;if(N._nodeName.match(/canvas|textarea|input|select|button|img/i)){var D=this.element;if(/relative/.test(D.css("position"))&&B.browser.opera){D.css({position:"relative",top:"auto",left:"auto"})}D.wrap(B('<div class="ui-wrapper"	style="overflow: hidden;"></div>').css({position:D.css("position"),width:D.outerWidth(),height:D.outerHeight(),top:D.css("top"),left:D.css("left")}));var K=this.element;this.element=this.element.parent();this.element.data("resizable",this);this.element.css({marginLeft:K.css("marginLeft"),marginTop:K.css("marginTop"),marginRight:K.css("marginRight"),marginBottom:K.css("marginBottom")});K.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});if(B.browser.safari&&N.preventDefault){K.css("resize","none")}N.proportionallyResize=K.css({position:"static",zoom:1,display:"block"});this.element.css({margin:K.css("margin")});this._proportionallyResize()}if(!N.handles){N.handles=!B(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}}if(N.handles.constructor==String){N.zIndex=N.zIndex||1000;if(N.handles=="all"){N.handles="n,e,s,w,se,sw,ne,nw"}var P=N.handles.split(",");N.handles={};var J={handle:"position: absolute; display: none; overflow:hidden;",n:"top: 0pt; width:100%;",e:"right: 0pt; height:100%;",s:"bottom: 0pt; width:100%;",w:"left: 0pt; height:100%;",se:"bottom: 0pt; right: 0px;",sw:"bottom: 0pt; left: 0px;",ne:"top: 0pt; right: 0px;",nw:"top: 0pt; left: 0px;"};for(var R=0;R<P.length;R++){var O=B.trim(P[R]),L=N.defaultTheme,H="ui-resizable-"+O,F=!B.ui.css(H)&&!N.knobHandles,S=B.ui.css("ui-resizable-knob-handle"),T=B.extend(L[H],L["ui-resizable-handle"]),E=B.extend(N.knobTheme[H],!S?N.knobTheme["ui-resizable-handle"]:{});var U=/sw|se|ne|nw/.test(O)?{zIndex:++N.zIndex}:{};var C=(F?J[O]:""),G=B(['<div class="ui-resizable-handle ',H,'" style="',C,J.handle,'"></div>'].join("")).css(U);if("se"==O){G.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}N.handles[O]=".ui-resizable-"+O;this.element.append(G.css(F?T:{}).css(N.knobHandles?E:{}).addClass(N.knobHandles?"ui-resizable-knob-handle":"").addClass(N.knobHandles))}if(N.knobHandles){this.element.addClass("ui-resizable-knob").css(!B.ui.css("ui-resizable-knob")?{}:{})}}this._renderAxis=function(Z){Z=Z||this.element;for(var V in N.handles){if(N.handles[V].constructor==String){N.handles[V]=B(N.handles[V],this.element).show()}if(N.transparent){N.handles[V].css({opacity:0})}if(this.element.is(".ui-wrapper")&&N._nodeName.match(/textarea|input|select|button/i)){var X=B(N.handles[V],this.element),Y=0;Y=/sw|ne|nw|se|n|s/.test(V)?X.outerHeight():X.outerWidth();var W=["padding",/ne|nw|n/.test(V)?"Top":/se|sw|s/.test(V)?"Bottom":/^e$/.test(V)?"Right":"Left"].join("");if(!N.transparent){Z.css(W,Y)}this._proportionallyResize()}if(!B(N.handles[V]).length){continue}}};this._renderAxis(this.element);N._handles=B(".ui-resizable-handle",M.element);if(N.disableSelection){N._handles.disableSelection()}N._handles.mouseover(function(){if(!N.resizing){if(this.className){var V=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}M.axis=N.axis=V&&V[1]?V[1]:"se"}});if(N.autoHide){N._handles.hide();B(M.element).addClass("ui-resizable-autohide").hover(function(){B(this).removeClass("ui-resizable-autohide");N._handles.show()},function(){if(!N.resizing){B(this).addClass("ui-resizable-autohide");N._handles.hide()}})}this._mouseInit()},destroy:function(){var D=this.element,C=D.children(".ui-resizable").get(0);this._mouseDestroy();var E=function(F){B(F).removeClass("ui-resizable ui-resizable-disabled").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};E(D);if(D.is(".ui-wrapper")&&C){D.parent().append(B(C).css({position:D.css("position"),width:D.outerWidth(),height:D.outerHeight(),top:D.css("top"),left:D.css("left")})).end().remove();E(C)}},_mouseCapture:function(E){if(this.options.disabled){return false}var C=false;for(var D in this.options.handles){if(B(this.options.handles[D])[0]==E.target){C=true}}if(!C){return false}return true},_mouseStart:function(C){var E=this.options,J=this.element.position(),D=this.element,H=function(O){return parseInt(O,10)||0},G=B.browser.msie&&B.browser.version<7;E.resizing=true;E.documentScroll={top:B(document).scrollTop(),left:B(document).scrollLeft()};if(D.is(".ui-draggable")||(/absolute/).test(D.css("position"))){var M=B.browser.msie&&!E.containment&&(/absolute/).test(D.css("position"))&&!(/relative/).test(D.parent().css("position"));var L=M?E.documentScroll.top:0,F=M?E.documentScroll.left:0;D.css({position:"absolute",top:(J.top+L),left:(J.left+F)})}if(B.browser.opera&&(/relative/).test(D.css("position"))){D.css({position:"relative",top:"auto",left:"auto"})}this._renderProxy();var N=H(this.helper.css("left")),I=H(this.helper.css("top"));if(E.containment){N+=B(E.containment).scrollLeft()||0;I+=B(E.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:N,top:I};this.size=E.helper||G?{width:D.outerWidth(),height:D.outerHeight()}:{width:D.width(),height:D.height()};this.originalSize=E.helper||G?{width:D.outerWidth(),height:D.outerHeight()}:{width:D.width(),height:D.height()};this.originalPosition={left:N,top:I};this.sizeDiff={width:D.outerWidth()-D.width(),height:D.outerHeight()-D.height()};this.originalMousePosition={left:C.pageX,top:C.pageY};E.aspectRatio=(typeof E.aspectRatio=="number")?E.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);if(E.preserveCursor){var K=B(".ui-resizable-"+this.axis).css("cursor");B("body").css("cursor",K=="auto"?this.axis+"-resize":K)}this._propagate("start",C);return true},_mouseDrag:function(C){var E=this.helper,F=this.options,K={},N=this,G=this.originalMousePosition,L=this.axis;var O=(C.pageX-G.left)||0,M=(C.pageY-G.top)||0;var J=this._change[L];if(!J){return false}var I=J.apply(this,[C,O,M]),H=B.browser.msie&&B.browser.version<7,D=this.sizeDiff;if(F._aspectRatio||C.shiftKey){I=this._updateRatio(I,C)}I=this._respectSize(I,C);this._propagate("resize",C);E.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!F.helper&&F.proportionallyResize){this._proportionallyResize()}this._updateCache(I);this._trigger("resize",C,this.ui());return false},_mouseStop:function(E){this.options.resizing=false;var G=this.options,J=function(N){return parseInt(N,10)||0},L=this;if(G.helper){var F=G.proportionallyResize,D=F&&(/textarea/i).test(F.get(0).nodeName),C=D&&B.ui.hasScroll(F.get(0),"left")?0:L.sizeDiff.height,I=D?0:L.sizeDiff.width;var M={width:(L.size.width-I),height:(L.size.height-C)},H=(parseInt(L.element.css("left"),10)+(L.position.left-L.originalPosition.left))||null,K=(parseInt(L.element.css("top"),10)+(L.position.top-L.originalPosition.top))||null;if(!G.animate){this.element.css(B.extend(M,{top:K,left:H}))}if(G.helper&&!G.animate){this._proportionallyResize()}}if(G.preserveCursor){B("body").css("cursor","auto")}this._propagate("stop",E);if(G.helper){this.helper.remove()}return false},_updateCache:function(C){var D=this.options;this.offset=this.helper.offset();if(C.left){this.position.left=C.left}if(C.top){this.position.top=C.top}if(C.height){this.size.height=C.height}if(C.width){this.size.width=C.width}},_updateRatio:function(F,E){var G=this.options,H=this.position,D=this.size,C=this.axis;if(F.height){F.width=(D.height*G.aspectRatio)}else{if(F.width){F.height=(D.width/G.aspectRatio)}}if(C=="sw"){F.left=H.left+(D.width-F.width);F.top=null}if(C=="nw"){F.top=H.top+(D.height-F.height);F.left=H.left+(D.width-F.width)}return F},_respectSize:function(J,E){var G=this.helper,H=this.options,Q=H._aspectRatio||E.shiftKey,N=this.axis,O=J.width&&H.maxWidth&&H.maxWidth<J.width,F=J.height&&H.maxHeight&&H.maxHeight<J.height,K=J.width&&H.minWidth&&H.minWidth>J.width,P=J.height&&H.minHeight&&H.minHeight>J.height;if(K){J.width=H.minWidth}if(P){J.height=H.minHeight}if(O){J.width=H.maxWidth}if(F){J.height=H.maxHeight}var D=this.originalPosition.left+this.originalSize.width,M=this.position.top+this.size.height;var I=/sw|nw|w/.test(N),C=/nw|ne|n/.test(N);if(K&&I){J.left=D-H.minWidth}if(O&&I){J.left=D-H.maxWidth}if(P&&C){J.top=M-H.minHeight}if(F&&C){J.top=M-H.maxHeight}var L=!J.width&&!J.height;if(L&&!J.left&&J.top){J.top=null}else{if(L&&!J.top&&J.left){J.left=null}}return J},_proportionallyResize:function(){var G=this.options;if(!G.proportionallyResize){return }var E=G.proportionallyResize,D=this.helper||this.element;if(!G.borderDif){var C=[E.css("borderTopWidth"),E.css("borderRightWidth"),E.css("borderBottomWidth"),E.css("borderLeftWidth")],F=[E.css("paddingTop"),E.css("paddingRight"),E.css("paddingBottom"),E.css("paddingLeft")];G.borderDif=B.map(C,function(H,J){var I=parseInt(H,10)||0,K=parseInt(F[J],10)||0;return I+K})}if(B.browser.msie&&!A(D)){return }E.css({height:(D.height()-G.borderDif[0]-G.borderDif[2])||0,width:(D.width()-G.borderDif[1]-G.borderDif[3])||0})},_renderProxy:function(){var D=this.element,F=this.options;this.elementOffset=D.offset();if(F.helper){this.helper=this.helper||B('<div style="overflow:hidden;"></div>');var C=B.browser.msie&&B.browser.version<7,G=(C?1:0),E=(C?2:-1);this.helper.addClass(F.helper).css({width:D.outerWidth()+E,height:D.outerHeight()+E,position:"absolute",left:this.elementOffset.left-G+"px",top:this.elementOffset.top-G+"px",zIndex:++F.zIndex});this.helper.appendTo("body");if(F.disableSelection){this.helper.disableSelection()}}else{this.helper=D}},_change:{e:function(E,D,C){return{width:this.originalSize.width+D}},w:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{left:G.left+D,width:E.width-D}},n:function(F,D,C){var H=this.options,E=this.originalSize,G=this.originalPosition;return{top:G.top+C,height:E.height-C}},s:function(E,D,C){return{height:this.originalSize.height+C}},se:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},sw:function(E,D,C){return B.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[E,D,C]))},ne:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[E,D,C]))},nw:function(E,D,C){return B.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[E,D,C]))}},_propagate:function(D,C){B.ui.plugin.call(this,D,[C,this.ui()]);(D!="resize"&&this._trigger(D,C,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,options:this.options,originalSize:this.originalSize,originalPosition:this.originalPosition}}}));B.extend(B.ui.resizable,{version:"1.6rc5",eventPrefix:"resize",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input,option",containment:false,delay:0,disableSelection:true,distance:1,ghost:false,grid:false,knobHandles:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,preserveCursor:true,preventDefault:true,proportionallyResize:false,transparent:false}});B.ui.plugin.add("resizable","alsoResize",{start:function(D,E){var F=E.options,C=B(this).data("resizable"),G=function(H){B(H).each(function(){B(this).data("resizable-alsoresize",{width:parseInt(B(this).width(),10),height:parseInt(B(this).height(),10),left:parseInt(B(this).css("left"),10),top:parseInt(B(this).css("top"),10)})})};if(typeof (F.alsoResize)=="object"&&!F.alsoResize.parentNode){if(F.alsoResize.length){F.alsoResize=F.alsoResize[0];G(F.alsoResize)}else{B.each(F.alsoResize,function(H,I){G(H)})}}else{G(F.alsoResize)}},resize:function(D,G){var H=G.options,C=B(this).data("resizable"),F=C.originalSize,J=C.originalPosition;var I={height:(C.size.height-F.height)||0,width:(C.size.width-F.width)||0,top:(C.position.top-J.top)||0,left:(C.position.left-J.left)||0},E=function(K,L){B(K).each(function(){var O=B(this),P=B(this).data("resizable-alsoresize"),N={},M=L&&L.length?L:["width","height","top","left"];B.each(M||["width","height","top","left"],function(Q,S){var R=(P[S]||0)+(I[S]||0);if(R&&R>=0){N[S]=R||null}});if(/relative/.test(O.css("position"))&&B.browser.opera){C._revertToRelativePosition=true;O.css({position:"absolute",top:"auto",left:"auto"})}O.css(N)})};if(typeof (H.alsoResize)=="object"&&!H.alsoResize.nodeType){B.each(H.alsoResize,function(K,L){E(K,L)})}else{E(H.alsoResize)}},stop:function(D,E){var C=B(this).data("resizable");if(C._revertToRelativePosition&&B.browser.opera){C._revertToRelativePosition=false;el.css({position:"relative"})}B(this).removeData("resizable-alsoresize-start")}});B.ui.plugin.add("resizable","animate",{stop:function(F,L){var H=L.options,M=B(this).data("resizable");var G=H.proportionallyResize,D=G&&(/textarea/i).test(G.get(0).nodeName),C=D&&B.ui.hasScroll(G.get(0),"left")?0:M.sizeDiff.height,J=D?0:M.sizeDiff.width;var E={width:(M.size.width-J),height:(M.size.height-C)},I=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,K=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;M.element.animate(B.extend(E,K&&I?{top:K,left:I}:{}),{duration:H.animateDuration,easing:H.animateEasing,step:function(){var N={width:parseInt(M.element.css("width"),10),height:parseInt(M.element.css("height"),10),top:parseInt(M.element.css("top"),10),left:parseInt(M.element.css("left"),10)};if(G){G.css({width:N.width,height:N.height})}M._updateCache(N);M._propagate("resize",F)}})}});B.ui.plugin.add("resizable","containment",{start:function(E,K){var I=K.options,N=B(this).data("resizable"),G=N.element;var D=I.containment,H=(D instanceof B)?D.get(0):(/parent/.test(D))?G.parent().get(0):D;if(!H){return }N.containerElement=B(H);if(/document/.test(D)||D==document){N.containerOffset={left:0,top:0};N.containerPosition={left:0,top:0};N.parentData={element:B(document),left:0,top:0,width:B(document).width(),height:B(document).height()||document.body.parentNode.scrollHeight}}else{N.containerOffset=B(H).offset();N.containerPosition=B(H).position();N.containerSize={height:B(H).innerHeight(),width:B(H).innerWidth()};var L=N.containerOffset,C=N.containerSize.height,J=N.containerSize.width,F=(B.ui.hasScroll(H,"left")?H.scrollWidth:J),M=(B.ui.hasScroll(H)?H.scrollHeight:C);N.parentData={element:H,left:L.left,top:L.top,width:F,height:M}}},resize:function(E,K){var G=K.options,O=B(this).data("resizable"),D=O.containerSize,L=O.containerOffset,I=O.size,J=O.position,N=G._aspectRatio||E.shiftKey,C={top:0,left:0},F=O.containerElement;if(F[0]!=document&&(/static/).test(F.css("position"))){C=O.containerPosition}if(J.left<(G.helper?L.left:0)){O.size.width=O.size.width+(G.helper?(O.position.left-L.left):(O.position.left-C.left));if(N){O.size.height=O.size.width/G.aspectRatio}O.position.left=G.helper?L.left:0}if(J.top<(G.helper?L.top:0)){O.size.height=O.size.height+(G.helper?(O.position.top-L.top):O.position.top);if(N){O.size.width=O.size.height*G.aspectRatio}O.position.top=G.helper?L.top:0}var H=Math.abs((G.helper?O.offset.left-C.left:(O.offset.left-C.left))+O.sizeDiff.width),M=Math.abs((G.helper?O.offset.top-C.top:(O.offset.top-L.top))+O.sizeDiff.height);if(H+O.size.width>=O.parentData.width){O.size.width=O.parentData.width-H;if(N){O.size.height=O.size.width/G.aspectRatio}}if(M+O.size.height>=O.parentData.height){O.size.height=O.parentData.height-M;if(N){O.size.width=O.size.height*G.aspectRatio}}},stop:function(D,J){var F=J.options,M=B(this).data("resizable"),I=M.position,K=M.containerOffset,C=M.containerPosition,E=M.containerElement;var H=B(M.helper),N=H.offset(),L=H.outerWidth()-M.sizeDiff.width,G=H.outerHeight()-M.sizeDiff.height;if(F.helper&&!F.animate&&(/relative/).test(E.css("position"))){B(this).css({left:N.left-C.left-K.left,width:L,height:G})}if(F.helper&&!F.animate&&(/static/).test(E.css("position"))){B(this).css({left:N.left-C.left-K.left,width:L,height:G})}}});B.ui.plugin.add("resizable","ghost",{start:function(E,F){var G=F.options,C=B(this).data("resizable"),H=G.proportionallyResize,D=C.size;if(!H){C.ghost=C.element.clone()}else{C.ghost=H.clone()}C.ghost.css({opacity:0.25,display:"block",position:"relative",height:D.height,width:D.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof G.ghost=="string"?G.ghost:"");C.ghost.appendTo(C.helper)},resize:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost){C.ghost.css({position:"relative",height:C.size.height,width:C.size.width})}},stop:function(D,E){var F=E.options,C=B(this).data("resizable"),G=F.proportionallyResize;if(C.ghost&&C.helper){C.helper.get(0).removeChild(C.ghost.get(0))}}});B.ui.plugin.add("resizable","grid",{resize:function(C,K){var F=K.options,M=B(this).data("resizable"),I=M.size,G=M.originalSize,H=M.originalPosition,L=M.axis,J=F._aspectRatio||C.shiftKey;F.grid=typeof F.grid=="number"?[F.grid,F.grid]:F.grid;var E=Math.round((I.width-G.width)/(F.grid[0]||1))*(F.grid[0]||1),D=Math.round((I.height-G.height)/(F.grid[1]||1))*(F.grid[1]||1);if(/^(se|s|e)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D}else{if(/^(ne)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D}else{if(/^(sw)$/.test(L)){M.size.width=G.width+E;M.size.height=G.height+D;M.position.left=H.left-E}else{M.size.width=G.width+E;M.size.height=G.height+D;M.position.top=H.top-D;M.position.left=H.left-E}}}}});function A(C){return !(B(C).is(":hidden")||B(C).parents(":hidden").length)}})(jQuery);(function(C){C.effects=C.effects||{};C.extend(C.effects,{version:"1.6rc5",save:function(E,G){for(var F=0;F<G.length;F++){if(G[F]!==null){E.data("ec.storage."+G[F],E[0].style[G[F]])}}},restore:function(E,G){for(var F=0;F<G.length;F++){if(G[F]!==null){E.css(G[F],E.data("ec.storage."+G[F]))}}},setMode:function(E,F){if(F=="toggle"){F=E.is(":hidden")?"show":"hide"}return F},getBaseline:function(G,F){var H,E;switch(G[0]){case"top":H=0;break;case"middle":H=0.5;break;case"bottom":H=1;break;default:H=G[0]/F.height}switch(G[1]){case"left":E=0;break;case"center":E=0.5;break;case"right":E=1;break;default:E=G[1]/F.width}return{x:E,y:H}},createWrapper:function(E){if(E.parent().is(".ui-effects-wrapper")){return E.parent()}var F={width:E.outerWidth(true),height:E.outerHeight(true),"float":E.css("float")};E.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var I=E.parent();if(E.css("position")=="static"){I.css({position:"relative"});E.css({position:"relative"})}else{var H=E.css("top");if(isNaN(parseInt(H,10))){H="auto"}var G=E.css("left");if(isNaN(parseInt(G,10))){G="auto"}I.css({position:E.css("position"),top:H,left:G,zIndex:E.css("z-index")}).show();E.css({position:"relative",top:0,left:0})}I.css(F);return I},removeWrapper:function(E){if(E.parent().is(".ui-effects-wrapper")){return E.parent().replaceWith(E)}return E},setTransition:function(F,H,E,G){G=G||{};C.each(H,function(J,I){unit=F.cssUnit(I);if(unit[0]>0){G[I]=unit[0]*E+unit[1]}});return G},animateClass:function(G,J,I,H){var E=(typeof I=="function"?I:(H?H:null));var F=(typeof I=="string"?I:null);return this.each(function(){var O={};var M=C(this);var N=M.attr("style")||"";if(typeof N=="object"){N=N.cssText}if(G.toggle){M.hasClass(G.toggle)?G.remove=G.toggle:G.add=G.toggle}var K=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.addClass(G.add)}if(G.remove){M.removeClass(G.remove)}var L=C.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(G.add){M.removeClass(G.add)}if(G.remove){M.addClass(G.remove)}for(var P in L){if(typeof L[P]!="function"&&L[P]&&P.indexOf("Moz")==-1&&P.indexOf("length")==-1&&L[P]!=K[P]&&(P.match(/color/i)||(!P.match(/color/i)&&!isNaN(parseInt(L[P],10))))&&(K.position!="static"||(K.position=="static"&&!P.match(/left|top|bottom|right/)))){O[P]=L[P]}}M.animate(O,J,F,function(){if(typeof C(this).attr("style")=="object"){C(this).attr("style")["cssText"]="";C(this).attr("style")["cssText"]=N}else{C(this).attr("style",N)}if(G.add){C(this).addClass(G.add)}if(G.remove){C(this).removeClass(G.remove)}if(E){E.apply(this,arguments)}})})}});C.fn.extend({_show:C.fn.show,_hide:C.fn.hide,__toggle:C.fn.toggle,_addClass:C.fn.addClass,_removeClass:C.fn.removeClass,_toggleClass:C.fn.toggleClass,effect:function(F,E,G,H){return C.effects[F]?C.effects[F].call(this,{method:F,options:E||{},duration:G,callback:H}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{var E=arguments[1]||{};E.mode="show";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{var E=arguments[1]||{};E.mode="hide";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{var E=arguments[1]||{};E.mode="toggle";return this.effect.apply(this,[arguments[0],E,arguments[2]||E.duration,arguments[3]||E.callback])}},addClass:function(H,E,G,F){return E?C.effects.animateClass.apply(this,[{add:H},E,G,F]):this._addClass(H)},removeClass:function(H,E,G,F){return E?C.effects.animateClass.apply(this,[{remove:H},E,G,F]):this._removeClass(H)},toggleClass:function(H,E,G,F){return E?C.effects.animateClass.apply(this,[{toggle:H},E,G,F]):this._toggleClass(H)},morph:function(F,I,E,H,G){return C.effects.animateClass.apply(this,[{add:I,remove:F},E,H,G])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(E){var F=this.css(E),G=[];C.each(["em","px","%","pt"],function(H,I){if(F.indexOf(I)>0){G=[parseFloat(F),I]}});return G}});C.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(F,E){C.fx.step[E]=function(G){if(G.state==0){G.start=D(G.elem,E);G.end=A(G.end)}G.elem.style[E]="rgb("+[Math.max(Math.min(parseInt((G.pos*(G.end[0]-G.start[0]))+G.start[0],10),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[1]-G.start[1]))+G.start[1],10),255),0),Math.max(Math.min(parseInt((G.pos*(G.end[2]-G.start[2]))+G.start[2],10),255),0)].join(",")+")"}});function A(E){var F;if(E&&E.constructor==Array&&E.length==3){return E}if(F=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(E)){return[parseInt(F[1],10),parseInt(F[2],10),parseInt(F[3],10)]}if(F=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(E)){return[parseFloat(F[1])*2.55,parseFloat(F[2])*2.55,parseFloat(F[3])*2.55]}if(F=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(E)){return[parseInt(F[1],16),parseInt(F[2],16),parseInt(F[3],16)]}if(F=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(E)){return[parseInt(F[1]+F[1],16),parseInt(F[2]+F[2],16),parseInt(F[3]+F[3],16)]}if(F=/rgba\(0, 0, 0, 0\)/.exec(E)){return B.transparent}return B[C.trim(E).toLowerCase()]}function D(G,E){var F;do{F=C.curCSS(G,E);if(F!=""&&F!="transparent"||C.nodeName(G,"body")){break}E="backgroundColor"}while(G=G.parentNode);return A(F)}var B={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};C.easing.jswing=C.easing.swing;C.extend(C.easing,{def:"easeOutQuad",swing:function(F,G,E,I,H){return C.easing[C.easing.def](F,G,E,I,H)},easeInQuad:function(F,G,E,I,H){return I*(G/=H)*G+E},easeOutQuad:function(F,G,E,I,H){return -I*(G/=H)*(G-2)+E},easeInOutQuad:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G+E}return -I/2*((--G)*(G-2)-1)+E},easeInCubic:function(F,G,E,I,H){return I*(G/=H)*G*G+E},easeOutCubic:function(F,G,E,I,H){return I*((G=G/H-1)*G*G+1)+E},easeInOutCubic:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G+E}return I/2*((G-=2)*G*G+2)+E},easeInQuart:function(F,G,E,I,H){return I*(G/=H)*G*G*G+E},easeOutQuart:function(F,G,E,I,H){return -I*((G=G/H-1)*G*G*G-1)+E},easeInOutQuart:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G+E}return -I/2*((G-=2)*G*G*G-2)+E},easeInQuint:function(F,G,E,I,H){return I*(G/=H)*G*G*G*G+E},easeOutQuint:function(F,G,E,I,H){return I*((G=G/H-1)*G*G*G*G+1)+E},easeInOutQuint:function(F,G,E,I,H){if((G/=H/2)<1){return I/2*G*G*G*G*G+E}return I/2*((G-=2)*G*G*G*G+2)+E},easeInSine:function(F,G,E,I,H){return -I*Math.cos(G/H*(Math.PI/2))+I+E},easeOutSine:function(F,G,E,I,H){return I*Math.sin(G/H*(Math.PI/2))+E},easeInOutSine:function(F,G,E,I,H){return -I/2*(Math.cos(Math.PI*G/H)-1)+E},easeInExpo:function(F,G,E,I,H){return(G==0)?E:I*Math.pow(2,10*(G/H-1))+E},easeOutExpo:function(F,G,E,I,H){return(G==H)?E+I:I*(-Math.pow(2,-10*G/H)+1)+E},easeInOutExpo:function(F,G,E,I,H){if(G==0){return E}if(G==H){return E+I}if((G/=H/2)<1){return I/2*Math.pow(2,10*(G-1))+E}return I/2*(-Math.pow(2,-10*--G)+2)+E},easeInCirc:function(F,G,E,I,H){return -I*(Math.sqrt(1-(G/=H)*G)-1)+E},easeOutCirc:function(F,G,E,I,H){return I*Math.sqrt(1-(G=G/H-1)*G)+E},easeInOutCirc:function(F,G,E,I,H){if((G/=H/2)<1){return -I/2*(Math.sqrt(1-G*G)-1)+E}return I/2*(Math.sqrt(1-(G-=2)*G)+1)+E},easeInElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return -(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E},easeOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K)==1){return E+L}if(!J){J=K*0.3}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}return G*Math.pow(2,-10*H)*Math.sin((H*K-I)*(2*Math.PI)/J)+L+E},easeInOutElastic:function(F,H,E,L,K){var I=1.70158;var J=0;var G=L;if(H==0){return E}if((H/=K/2)==2){return E+L}if(!J){J=K*(0.3*1.5)}if(G<Math.abs(L)){G=L;var I=J/4}else{var I=J/(2*Math.PI)*Math.asin(L/G)}if(H<1){return -0.5*(G*Math.pow(2,10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J))+E}return G*Math.pow(2,-10*(H-=1))*Math.sin((H*K-I)*(2*Math.PI)/J)*0.5+L+E},easeInBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*(G/=I)*G*((H+1)*G-H)+E},easeOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}return J*((G=G/I-1)*G*((H+1)*G+H)+1)+E},easeInOutBack:function(F,G,E,J,I,H){if(H==undefined){H=1.70158}if((G/=I/2)<1){return J/2*(G*G*(((H*=(1.525))+1)*G-H))+E}return J/2*((G-=2)*G*(((H*=(1.525))+1)*G+H)+2)+E},easeInBounce:function(F,G,E,I,H){return I-C.easing.easeOutBounce(F,H-G,0,I,H)+E},easeOutBounce:function(F,G,E,I,H){if((G/=H)<(1/2.75)){return I*(7.5625*G*G)+E}else{if(G<(2/2.75)){return I*(7.5625*(G-=(1.5/2.75))*G+0.75)+E}else{if(G<(2.5/2.75)){return I*(7.5625*(G-=(2.25/2.75))*G+0.9375)+E}else{return I*(7.5625*(G-=(2.625/2.75))*G+0.984375)+E}}}},easeInOutBounce:function(F,G,E,I,H){if(G<H/2){return C.easing.easeInBounce(F,G*2,0,I,H)*0.5+E}return C.easing.easeOutBounce(F,G*2-H,0,I,H)*0.5+I*0.5+E}})})(jQuery);(function(A){A.effects.clip=function(B){return this.queue(function(){var E=A(this),J=["position","top","left","height","width"];var H=A.effects.setMode(E,B.options.mode||"hide");var K=B.options.direction||"vertical";A.effects.save(E,J);E.show();var D=A.effects.createWrapper(E).css({overflow:"hidden"});var I=E[0].tagName=="IMG"?D:E;var F={size:(K=="vertical")?"height":"width",position:(K=="vertical")?"top":"left"};var C=(K=="vertical")?I.height():I.width();if(H=="show"){I.css(F.size,0);I.css(F.position,C/2)}var G={};G[F.size]=H=="show"?C:0;G[F.position]=H=="show"?0:C/2;I.animate(G,{queue:false,duration:B.duration,easing:B.options.easing,complete:function(){if(H=="hide"){E.hide()}A.effects.restore(E,J);A.effects.removeWrapper(E);if(B.callback){B.callback.apply(E[0],arguments)}E.dequeue()}})})}})(jQuery);

// *
// * TopUp {version} - The #1 Javascript Pop Up (Uncompressed)
// *
// * Copyright (c) {year} Paul Engel (Internetbureau Holder B.V.)
// * All rights reserved
// *
// * $Date: {date} $
// *

TopUp = function() {
	var initialized = false, selector = null, on_ready = [], displaying = false, options = null, group = null, index = null, selector_content = {};
	var default_preset = {
		layout: "dashboard",
		effect: "transform",
		modal: 0,
		fixed: 0,
		shaded: 0,
		resizable: 1
	}, presets = {};
	
	var extendjQuery = function() {
		jQuery.extend({
			typeOf: function(value) {
  			var s = typeof value;
				if (s === "object") {
					if (value) {
						if (typeof value.length === "number" && !(value.propertyIsEnumerable("length")) && typeof value.splice === "function")
							s = "array";
					} else
						s = "null";
				}
				return s;
			},
			keys: function(hash) {
				var keys = [];
				for (var key in hash)
					keys.push(key);
				return keys;
			},
			ie:  jQuery.browser.msie,
			ie6: jQuery.browser.msie && parseInt(jQuery.browser.version) == 6,
			ie7: jQuery.browser.msie && parseInt(jQuery.browser.version) == 7,
			ff2: jQuery.browser.mozilla && parseFloat(jQuery.browser.version) < 1.9
		});
		jQuery.fn.extend({
			id: function() {
				if (!this.is("[id]")) {
					var id = "";
					var counter = 0;
	    			do {id = "element_" + counter++} while (jQuery("#" + id).length);
					jQuery(this).attr("id", id);
				}
				return jQuery(this).attr("id");
			},
			bubbleDetect: function(selector, separator) {
				var detected = null;
				var element = this;
				jQuery.each(selector.split(separator || ","), function(i, e) {
					var selector = jQuery.trim(e);
					if (jQuery(selector).index(element) != -1)
						detected = {element: jQuery(element), selector: selector};
				});
				return detected || (element.parent()[0] ? jQuery(element.parent()[0]).bubbleDetect(selector, separator) : null);
			},
			center: function(only) {
			  var css = {top: parseInt((jQuery(window).height() - this.outerHeight()) / 2) + jQuery(window).scrollTop(),
	  		   			   left: parseInt((jQuery(window).width() - this.outerWidth()) / 2),
	  		   			   position: "absolute"};
			  
			  if (only && jQuery.inArray(only, "y") == -1)
			    delete css["top"];
			  if (only && jQuery.inArray(only, "x") == -1)
			    delete css["left"];
			  
				this.css(css);
				return this;
			},
			lockDimensions: function() {
				this.css({width: this.outerWidth(), height: this.outerHeight()});
				return this;
			},
			unlockDimensions: function() {
				this.css({width: "auto", height: "auto"});
				return this;
			},
			centerWrap: function(compare) {
        if (jQuery.typeOf(compare) != "array")
          compare = [compare];
				
				var current = {width: this.outerWidth(), height: this.outerHeight()}, delta = {width: 0, height: 0}, diff = 0;
        jQuery.each(compare, function(i, element) {
					
          diff = element.outerWidth() - current.width;
          if (delta.width < diff)
            delta.width = diff;
          diff = element.outerHeight() - current.height;
          if (delta.height < diff)
            delta.height = diff;
					
        });
				
				var offset = this.offset();
				jQuery("#tu_center_wrapper").css({
                													 top: offset.top - (delta.height == 0 ? 0 : parseInt(delta.height / 2)), 
                													 left: offset.left - (delta.width == 0 ? 0 : parseInt(delta.width / 2)),
                													 width: this.width() + delta.width, 
                													 height: this.height() + delta.height
                												 });
				
				jQuery("#tu_centered_content").append(this);
				
				this.css({
							top: "auto",
							left: "auto",
							width: "auto",
							height: "auto",
							display: "inline-block",
							position: "relative"
						 });
				if (jQuery.ff2)
					this.css({display: "table"});
				if (jQuery.ie)
					this.css({display: "inline"});
				
				jQuery("#tu_center_wrapper").show();
				
				return this;
			},
			removeCenterWrap: function() {
				var position = jQuery("#tu_center_wrapper").offset();
				var delta = {width: jQuery("#tu_center_wrapper").outerWidth() - this.outerWidth(), height: jQuery("#tu_center_wrapper").outerHeight() - this.outerHeight()};

				this.css({top: position.top + parseInt(delta.height / 2), left: position.left + parseInt(delta.width / 2), position: "absolute"}).appendTo("body");
				jQuery("#tu_center_wrapper").hide();

				return this;
			}
		});
	};
	var injectCode = function() {
		var images_url = TopUp.host + TopUp.images_path;
		
		var style = '<div></div>';
		var ff2fix = '<div></div>';
		var ie6fix = '<div></div>';
		var iefix = '<div></div>';
		var html = '<div></div>';

		jQuery(style).prependTo("head");
			
		if (jQuery.ff2)
			jQuery(ff2fix).insertAfter("head > style:first");
		if (jQuery.ie6)
			jQuery(ie6fix).insertAfter("head > style:first");
		if (jQuery.ie)
			jQuery(iefix).insertAfter("head > style:first");
	
	  jQuery(html).appendTo("body");
	};
	var bind = function() {
		var selectors = jQuery.keys(presets);
		selectors.unshift(".top_up,[toptions]");
		
		if ((selector = selectors.join()).length > 0)
			jQuery(selector).click(topUpClick);
		
		jQuery(document).keypress(keyPress);
	};
	var topUpClick = function(event) {
		TopUp.displayTopUp(jQuery(event.target));
		return false;
	};
	var keyPress = function(event) {
    if (jQuery("#top_up").is(":hidden"))
		  return;
		
		switch(event.keyCode) {
      case 27:
		    TopUp.close(); break;
		  case 37:
        TopUp.previous(); break;
		  case 39:
        TopUp.next(); break;
    }
	};
	
	var deriveTopUpOptions = function(top_up, opts) {
	  var toptions = jQuery.extend({}, {top_up: "#" + top_up.element.id(), preset: top_up.selector});
		  
	  if (top_up.element.is("[toptions]")) {
			jQuery.each(top_up.element.attr("toptions").split(","), function(i, option) {
				var key_value = option.split("=");
				toptions[jQuery.trim(key_value[0])] = jQuery.trim(key_value[1]);
			});
		}
		
		if (toptions.noGroup && parseInt(toptions.noGroup) == 1)
		  toptions.group = null;
  		
  	if (opts)
  	  toptions = jQuery.extend(toptions, opts);
    
    return toptions;
	};
	var deriveOptions = function(reference, opts, store) {
		var result = jQuery.extend({}, default_preset);
		
		if (opts) {
		  if (presets[opts.preset])
			  result = jQuery.extend(result, presets[opts.preset]);
			result = jQuery.extend(result, opts);
		}
		
		if (store) {
  		result.reference = result.reference ? eval(result.reference) : reference;
      if (!result.type)
        result.type = result.reference.toLowerCase().match(/\.(bmp|gif|jpg|jpeg|png|tif|wbmp)$/) ? "image" : "ajax";
    
			options = jQuery.extend({}, result);
		}
		
		return result;
	};
	
	var deriveGroup = function() {
		if (options.group) {
		
			if (group && group.name == options.group)
				return;
		
			group = {name: options.group, items: jQuery([])};
			jQuery.each(jQuery(selector), function(i, e) {
	      if (!jQuery(e).is("[tu_group]"))
  			  jQuery(e).attr("tu_group", deriveOptions(null, deriveTopUpOptions(jQuery(e).bubbleDetect(selector))).group);

				if (jQuery(e).attr("tu_group") == group.name)
					group.items = group.items.add(e);
			});
			
			var ids = jQuery.map(group.items, function(e, i){
      						return "#" + jQuery(e).id();
    						});
			index = options.top_up ? jQuery.inArray(options.top_up, ids) : -1;
			
		} else
			group = null;
	};
	var navigateInGroup = function(step) {
		index = index + step;

		if (index < 0)
			index = group.items.length - 1;
		if (index > group.items.length - 1)
			index = 0;

		TopUp.displayTopUp(group.items[index]);
	};
  
	var prepare = function() {
		jQuery(".tu_wrapper").attr("class", "tu_wrapper tu_" + options.layout);
		
		jQuery("#top_up .tu_frame").resizable("destroy");
    jQuery("#top_up .tu_frame,.tu_content").unlockDimensions();
		
		if (jQuery.ie6)
			jQuery("#top_up .tu_title,#top_up .tu_controls_wrapper").fadeOut(100);
	
		(parseInt(options.fixed) == 1) ?
			jQuery("#top_up").addClass("tu_fixed") :
			jQuery("#top_up").removeClass("tu_fixed");
	
		(parseInt(options.shaded) == 1) ?
			jQuery("#tu_overlay").addClass("tu_shaded") :
			jQuery("#tu_overlay").removeClass("tu_shaded");
	
		(parseInt(options.modal) == 1) || (parseInt(options.shaded) == 1) || (parseInt(options.overlayClose) == 1) ?
			jQuery("#tu_overlay").show() :
			jQuery("#tu_overlay").hide();
	};	
	var loadContent = function() {
	  jQuery(".tu_selector_content").removeClass("tu_selector_content");
	  
		switch(options.type) {
			case "image":
        options.content = new Image();
        jQuery(options.content).load(function(){ options.content = jQuery(this); onContentReady(); })
                               .attr("src", options.reference);
				break;
			case "selector":
				options.content = jQuery(options.reference).filter(function() {
				  var collect = selector_content[jQuery(this).id()] ? true : jQuery(this).parents("#top_up,#temp_up").length == 0;
				  return collect;
				}); break;
			case "html": case "dom":
				options.content = jQuery(options.reference); break;
			case "iframe":
				options.content = jQuery('<iframe src="' + options.reference + '" frameborder="0" border="0"></iframe>'); break;
			case "ajax":
			  jQuery.ajax({url: options.reference, cache: false, async: false, dataType: "html", success: onContentReady}); break;
			case "script":
			  options.content = null;
			  jQuery.ajax({url: options.reference, cache: false, async: false, dataType: "script", success: onContentReady});
			  break;
		}
		
		if (options.type == "selector") {
		  jQuery.each(options.content.addClass("tu_selector_content"), function(i, e) {
		    e = jQuery(e);
		    if (!selector_content[e.id()])
		      selector_content[e.id()] = {element: e, hidden: e.is(":hidden"), parent: e.parent()};
		  });
		}
		
    if (jQuery.inArray(options.type, ["selector", "html", "dom", "iframe"]) != -1)
		  onContentReady();
	};
	var onContentReady = function(html) {
	  if (html)
	    options.content = jQuery(html);
	  
	  switch(options.type) {
	    case "image": case "iframe":
			  options.resize = options.content;
			  jQuery(".tu_content").removeClass("tu_scrollable");
			  break;
			default:
	      options.resize = jQuery("#temp_up .tu_content");
			  jQuery(".tu_content").addClass("tu_scrollable");
	  }
    
		jQuery("#top_up").is(":hidden") ? show() : replace();
	};
  
	var	show = function() {
	  setContent();
	  setDimensions();
	  
	  moveContent("top_up");
		jQuery("#top_up").center();
		
		switch(options.effect) {
			case "transform":
			  var origin = jQuery(options.top_up);
			  if (origin.children().length > 0)
			    origin = jQuery(origin.children()[0]);
			  var dimensions = options.top_up ? 
                           jQuery.extend({width: origin.outerWidth(), height: origin.outerHeight()}, origin.offset()) : 
			                     {top: 0, left: 0, width: 10, height: 10};

        transform("from", dimensions, afterShow); break;
			case "clip":
			  jQuery("#top_up").show("clip", {direction: "vertical"}, 500, afterShow); break;
      default:
  			if (jQuery.ie7) {
  			  jQuery("#top_up").show();
  			  afterShow();
  			} else
  			  jQuery("#top_up").fadeIn(300, afterShow);
		}
	};
  var transform = function(direction, dimensions, callback) {
	  var topUp = jQuery("#top_up");
	  var frame = topUp.find(".tu_frame");
    
    if (direction == "from")
	    topUp.addClass("tu_transparent").show();
    
		var contentDiff = {width: topUp.outerWidth() - options.content.outerWidth(), height: topUp.outerHeight() - options.content.outerHeight()};
		var frameDiff   = {width: topUp.outerWidth() - frame.outerWidth(),           height: topUp.outerHeight() - frame.outerHeight()};
    
    var contentOffset = options.content.offset();
    var topUpOffset   = topUp.offset();
		dimensions.top    -= contentOffset.top - topUpOffset.top;
		dimensions.left   -= contentOffset.left - topUpOffset.left;
		dimensions.width  += contentDiff.width;
		dimensions.height += contentDiff.height;

	  var origin = {top: topUp.css("top"), left: topUp.css("left"), width: topUp.outerWidth(), height: topUp.outerHeight()};
	  var opts   = {duration: 400, to: direction == "from" ? origin : dimensions};
    var func = function() {
  	  topUp          .animate({top:   opts.to.top, left: opts.to.left}, opts.duration);
  	  options.content.animate({width: opts.to.width - contentDiff.width, height: opts.to.height - contentDiff.height}, opts.duration);
      frame          .animate({width: opts.to.width - frameDiff.width,   height: opts.to.height - frameDiff.height},   opts.duration, null, function() {
        direction == "to" ?
          topUp.fadeOut(250, callback) :
          callback.apply();
      });
    }
    
    if (direction == "from") {
	    topUp          .css({top:   dimensions.top, left: dimensions.left});
		  options.content.css({width: dimensions.width - contentDiff.width, height: dimensions.height - contentDiff.height});
		  frame          .css({width: dimensions.width - frameDiff.width,   height: dimensions.height - frameDiff.height});
      topUp.removeClass("tu_transparent").hide().fadeIn(jQuery.ie ? 0 : 300, func);
    } else
      func.apply();
  };
	var replace = function(callback) {
		var wrapper = jQuery("#top_up .tu_content").lockDimensions().wrapInner("<div></div>").children();
		
	  wrapper.fadeOut(250, function() {
      moveContent("temp_up");
      wrapper.remove();
      
	    if (callback)
			  callback.apply([], ["tu_content"]);
      else {
        clearContent();
	      setContent();
      }
      setDimensions();
      
	    jQuery("#top_up").centerWrap(jQuery("#temp_up"));
	    
	    var animation = {width: jQuery("#temp_up .tu_content").outerWidth(),
	                     height: jQuery("#temp_up .tu_content").outerHeight()};
	    jQuery("#top_up .tu_content").animate(animation, 400, function() {
	      moveContent("top_up");
        jQuery("#top_up").removeCenterWrap();
	      afterDisplay();
      });
    });
	};
  
  var setContent = function() {
    options.content.appendTo("#temp_up .tu_content");
  };
	var moveContent = function(to) {
	  var from = to == "top_up" ? "temp_up" : "top_up";
    jQuery("#" + from + " .tu_content").children().appendTo("#" + to + " .tu_content");
    
    if (to == "top_up")
      jQuery("#top_up .tu_content").css({width: jQuery("#temp_up .tu_content").css("width"), 
                                         height: jQuery("#temp_up .tu_content").css("height")});
	};
	var clearContent = function() {
    jQuery.each(selector_content, function(i, c) {
      if (!c.element.hasClass("tu_selector_content")) {
        if (c.hidden)
          c.element.hide();
        c.parent.append(c.element);
        delete selector_content[c.element.id()];
      }
    });
    
    jQuery(".tu_content").children(":not(.tu_selector_content)").remove();
	};
	
	var setDimensions = function(dimensions) {
	  var func = dimensions ? null : checkHeight;
	  
	  if (!dimensions) {
	    options.resize.unlockDimensions();
	    if (jQuery.inArray(options.type, ["image", "iframe"]) != -1)
	      jQuery("#temp_up .tu_content").unlockDimensions();
	    
	    dimensions = {};
	    if (options.width)
	      dimensions.width = parseInt(options.width);
	    if (options.height)
	      dimensions.height = parseInt(options.height);
	  }
	  
	  options.resize.css(dimensions);
	  
	  if (func)
	    func.apply();
	};
	var checkHeight = function() {
	  if (jQuery("#temp_up").outerHeight() <= jQuery(window).height() - 4)
	    return;
	  
	  var extra_height = jQuery("#temp_up").outerHeight() - jQuery("#temp_up .tu_content").height(),
	      dimensions = {height: jQuery(window).height() - 4 - extra_height};
	  
	  if (options.type == "image")
		  dimensions.width = parseInt(options.content.width() * (dimensions.height / options.content.height()));
	  
	  setDimensions(dimensions);
	};
  var checkPosition = function() {
    var offset     = jQuery("#top_up").offset();
    var dimensions = {width: jQuery("#top_up").outerWidth(), height: jQuery("#top_up").outerHeight()};
    var position   = {};
    
    if (offset.top - jQuery(window).scrollTop() < 2)
      position.top = jQuery(window).scrollTop() + 2;
    else if (offset.top + dimensions.height - jQuery(window).scrollTop() > jQuery(window).height() - 2)
      position.top = jQuery(window).scrollTop() + jQuery(window).height() - dimensions.height - 2;
      
    if (offset.left - jQuery(window).scrollLeft() < 2)
      position.left = jQuery(window).scrollLeft() + 2;
    else if (offset.left + dimensions.width - jQuery(window).scrollLeft() > jQuery(window).width() - 2)
      position.left = jQuery(window).scrollLeft() + jQuery(window).width() - dimensions.width - 24;

    if (jQuery.keys(position).length > 0)
      jQuery("#top_up").animate(position, 300);
  }
	
	var afterShow = function() {
		afterDisplay();
		
		jQuery("#top_up .tu_controls_wrapper").css("display", null);

		if (group && group.items.length > 1) {
			jQuery("#top_up .tu_previous_link").css("display", null);
			jQuery("#top_up .tu_next_link").css("display", null);
		} else {
			jQuery("#top_up .tu_previous_link").css("display", "none");
			jQuery("#top_up .tu_next_link").css("display", "none");
		}
		
    jQuery("#top_up .tu_title,#top_up .tu_close_link,#top_up .tu_controls_wrapper").fadeIn(jQuery.ie ? 0 : 200);
	};
	var afterDisplay = function() {
		if (jQuery.ie6) {
			jQuery("#top_up .tu_title").css({width: jQuery("#top_up").width()});
			jQuery("#top_up .tu_bottom_bar").css({width: jQuery("#top_up").width()});
			jQuery("#top_up .tu_controls_wrapper,#top_up .tu_title").fadeIn(100);
		}
		if (jQuery.ie) {
			jQuery("#top_up .tu_content").hide().show();
			options.content.scrollTop(0).scrollLeft(0);
		}
		
		jQuery("#top_up .tu_title").html(options.title);
		
		if (parseInt(options.resizable) == 1) {
		  var opts = {handles: "se", minWidth: 200, minHeight: 75, alsoResize: "#" + options.resize.id(), aspectRatio: options.type == "image"};
	    jQuery("#top_up .tu_frame").resizable(opts);
		}
		
		checkPosition();
		
		displaying = false;
	};
	
	var hide = function(callback) {
	  var duration = jQuery.ie ? 0 : 250;
	  var func = function() {
	    animateHide(callback)
	  };
	  
		jQuery("#top_up .tu_title").fadeOut(duration);
		jQuery("#top_up .tu_close_link").fadeOut(duration);
	  jQuery("#top_up .tu_controls_wrapper").fadeOut(duration, func);
	};
	var animateHide = function(callback) {
	  var afterHide = function() {
	    if (callback)
	      callback.apply();
	    jQuery(".tu_selector_content").removeClass("tu_selector_content");
	    
	    clearContent();
      moveContent("temp_up");
	  };
	  
    switch(options.effect) {
      case "transform":
			  var origin = jQuery(options.top_up);
			  if (origin.children().length > 0)
			    origin = jQuery(origin.children()[0]);
			  var dimensions = options.top_up ? 
                           jQuery.extend({width: origin.outerWidth(), height: origin.outerHeight()}, origin.offset()) : 
			                     {top: 0, left: 0, width: 10, height: 10};
			  transform("to", dimensions, afterHide); break;
      case "clip":
        jQuery("#top_up").hide("clip", {direction: "vertical"}, 400, afterHide); break;
      default:
        if (jQuery.ie7) {
          jQuery("#top_up").hide();
				  afterHide.apply();
        } else
          jQuery("#top_up").fadeOut(300, afterHide);
    }
		
		jQuery("#tu_overlay").hide();
	};
	
	return {
		host: scriptHost,
		images_path: "images/top_up/",
		init: function() {
			if (initialized)
				return false;
			initialized = true;
			
			jQuery(document).ready(function() {
				extendjQuery();
				injectCode();
				bind();
				
				jQuery("#top_up").draggable({cancel: ".tu_content,a"});
				jQuery.each(on_ready, function(i, func) {
					func.apply();
				});
			});
		},
		defaultPreset: function(set) {
		  default_preset = jQuery.extend(default_preset, set);
		},
		addPresets: function(sets) {
			presets = jQuery.extend(presets, sets);
		},
		ready: function(func) {
			on_ready.push(func);
		},
		rebind: function() {
			bind();
		},
		displayTopUp: function(element, opts) {
		  var top_up = jQuery(element).bubbleDetect(selector);
		  var toptions = deriveTopUpOptions(top_up, jQuery.extend(opts || {}, {trigger: "#" + jQuery(element).id()}));
  		TopUp.display(top_up.element.attr("href"), toptions);
	  },
		display: function(reference, opts) {
			if (displaying)
				return false;
			displaying = true;
			
			deriveOptions(reference, opts, true);
      deriveGroup();
      
			prepare();
			loadContent();
		},
		update: function(func) {
		  options.type = "html";
      options.resize = jQuery("#temp_up .tu_content");
		  jQuery(".tu_content").addClass("tu_scrollable");
		  
		  replace(func || function() {});
		},
		previous: function() {
			navigateInGroup(-1);
		},
		next: function() {
			navigateInGroup(1);
		},
		overlayClose: function() {
		  if (parseInt(options.overlayClose) == 1)
		    TopUp.close();
		},
		close: function(callback) {
      if (jQuery("#top_up").is(":visible"))
		    hide(callback);
		}
	}
}();
TopUp.init();

/* TODO */
/* - Simulate position fixed in IE */
/* - Fix the flickering when calling replaceTopUp (especially with iframe) */
/* - Implement dragging and resizing the top up correctly in IE (write own draggable and resizable?) */
