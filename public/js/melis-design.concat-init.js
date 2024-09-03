// Created by conta on 8/17/2017.

/* Animations Init */
function animationsInit() {
    $('.panel-3d').find('.front .btn').on('click', function(){
        $(this).closest('.panel-3d').addClass('panel-flip');
    }).end()
        .find('.back .btn').on('click', function(){
        $(this).closest('.panel-3d').removeClass('panel-flip');
    });

    // disable animations on touch devices
    if (Modernizr.touch) {
        $('.panel-3d')
            .css('visibility', 'visible')
            .find('[class*="icon-"]')
            .css('visibility', 'visible');
        return;
    }

    // disable animations if browser doesn't support css transitions & 3d transforms
    if (!$('html.csstransitions.csstransforms3d').length)
        return;

    $('.panel-3d')
        .addClass('flip-default')
        .each(function(i){
            var t = $(this);
            setTimeout(function(){
                t.css('visibility', 'visible').addClass('animated fadeInLeft');
            }, (i+1)*300);
            setTimeout(function(){
                t.removeClass('flip-default fadeInLeft');
                setTimeout(function(){
                    t.find('[class*="icon-"]').css('visibility', 'visible').addClass('animated fadeInDown');
                }, (i+1)*200);
            }, (i+1)*800);
        });
}

/* Holder Init */
function holderInit() {
/*!
Holder - client side image placeholders
Version 2.9.9+jl7z
© 2021 Ivan Malopinsky - https://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(e){if(e.document){var t=e.document;t.querySelectorAll||(t.querySelectorAll=function(n){var r,i=t.createElement("style"),o=[];for(t.documentElement.firstChild.appendChild(i),t._qsa=[],i.styleSheet.cssText=n+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",e.scrollBy(0,0),i.parentNode.removeChild(i);t._qsa.length;)r=t._qsa.shift(),r.style.removeAttribute("x-qsa"),o.push(r);return t._qsa=null,o}),t.querySelector||(t.querySelector=function(e){var n=t.querySelectorAll(e);return n.length?n[0]:null}),t.getElementsByClassName||(t.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),t.querySelectorAll(e)}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),Array.prototype.forEach||(Array.prototype.forEach=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw TypeError();var r,i=arguments[1];for(r=0;n>r;r++)r in t&&e.call(i,t[r],r,t)}),function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob=e.atob||function(e){e=String(e);var n,r=0,i=[],o=0,a=0;if(e=e.replace(/\s/g,""),e.length%4===0&&(e=e.replace(/=+$/,"")),e.length%4===1)throw Error("InvalidCharacterError");if(/[^+\/0-9A-Za-z]/.test(e))throw Error("InvalidCharacterError");for(;r<e.length;)n=t.indexOf(e.charAt(r)),o=o<<6|n,a+=6,24===a&&(i.push(String.fromCharCode(o>>16&255)),i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o)),a=0,o=0),r+=1;return 12===a?(o>>=4,i.push(String.fromCharCode(255&o))):18===a&&(o>>=2,i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o))),i.join("")},e.btoa=e.btoa||function(e){e=String(e);var n,r,i,o,a,s,l,u=0,c=[];if(/[^\x00-\xFF]/.test(e))throw Error("InvalidCharacterError");for(;u<e.length;)n=e.charCodeAt(u++),r=e.charCodeAt(u++),i=e.charCodeAt(u++),o=n>>2,a=(3&n)<<4|r>>4,s=(15&r)<<2|i>>6,l=63&i,u===e.length+2?(s=64,l=64):u===e.length+1&&(l=64),c.push(t.charAt(o),t.charAt(a),t.charAt(s),t.charAt(l));return c.join("")}}(e),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),function(){if("performance"in e==!1&&(e.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in e.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),e.performance.now=function(){return Date.now()-t}}}(),e.requestAnimationFrame||(e.webkitRequestAnimationFrame&&e.webkitCancelAnimationFrame?!function(e){e.requestAnimationFrame=function(t){return webkitRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.webkitCancelAnimationFrame}(e):e.mozRequestAnimationFrame&&e.mozCancelAnimationFrame?!function(e){e.requestAnimationFrame=function(t){return mozRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=e.mozCancelAnimationFrame}(e):!function(e){e.requestAnimationFrame=function(t){return e.setTimeout(t,1e3/60)},e.cancelAnimationFrame=e.clearTimeout}(e))}}(this),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Holder=t():e.Holder=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){(function(t){function r(e,t,n,r){var a=i(n.substr(n.lastIndexOf(e.domain)),e);a&&o({mode:null,el:r,flags:a,engineSettings:t})}function i(e,t){var n={theme:j(z.settings.themes.gray,null),stylesheets:t.stylesheets,instanceOptions:t},r=e.indexOf("?"),i=[e];-1!==r&&(i=[e.slice(0,r),e.slice(r+1)]);var o=i[0].split("/");n.holderURL=e;var a=o[1],s=a.match(/([\d]+p?)x([\d]+p?)/);if(!s)return!1;if(n.fluid=-1!==a.indexOf("p"),n.dimensions={width:s[1].replace("p","%"),height:s[2].replace("p","%")},2===i.length){var l=y.parse(i[1]);if(b.truthy(l.ratio)){n.fluid=!0;var u=parseFloat(n.dimensions.width.replace("%","")),c=parseFloat(n.dimensions.height.replace("%",""));c=Math.floor(100*(c/u)),u=100,n.dimensions.width=u+"%",n.dimensions.height=c+"%"}if(n.auto=b.truthy(l.auto),l.bg&&(n.theme.bg=b.parseColor(l.bg)),l.fg&&(n.theme.fg=b.parseColor(l.fg)),l.bg&&!l.fg&&(n.autoFg=!0),l.theme&&Object.prototype.hasOwnProperty.call(n.instanceOptions.themes,l.theme)&&(n.theme=j(n.instanceOptions.themes[l.theme],null)),l.text&&(n.text=l.text),l.textmode&&(n.textmode=l.textmode),l.size&&parseFloat(l.size)&&(n.size=parseFloat(l.size)),null!=l.fixedSize&&(n.fixedSize=b.truthy(l.fixedSize)),l.font&&(n.font=l.font),l.align&&(n.align=l.align),l.lineWrap&&(n.lineWrap=l.lineWrap),n.nowrap=b.truthy(l.nowrap),n.outline=b.truthy(l.outline),b.truthy(l.random)){z.vars.cache.themeKeys=z.vars.cache.themeKeys||Object.keys(n.instanceOptions.themes);var f=z.vars.cache.themeKeys[0|Math.random()*z.vars.cache.themeKeys.length];n.theme=j(n.instanceOptions.themes[f],null)}}return n}function o(e){var t=e.mode,n=e.el,r=e.flags,i=e.engineSettings,o=r.dimensions,s=r.theme,l=o.width+"x"+o.height;t=null==t?r.fluid?"fluid":"image":t;var f=/holder_([a-z]+)/g,d=!1;if(null!=r.text&&(s.text=r.text,"object"===n.nodeName.toLowerCase())){for(var h=s.text.split("\\n"),p=0;p<h.length;p++)h[p]=b.encodeHtmlEntity(h[p]);s.text=h.join("\\n")}if(s.text){var g=s.text.match(f);null!==g&&g.forEach(function(e){"holder_dimensions"===e&&(s.text=s.text.replace(e,l))})}var m=r.holderURL,y=j(i,null);if(r.font&&(s.font=r.font,!y.noFontFallback&&"img"===n.nodeName.toLowerCase()&&z.setup.supportsCanvas&&"svg"===y.renderer&&(y=j(y,{renderer:"canvas"}))),r.font&&"canvas"==y.renderer&&(y.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&x.setAttr(n,{"data-background-src":m});else{var v={};v[z.vars.dataAttr]=m,x.setAttr(n,v)}r.theme=s,n.holderData={flags:r,engineSettings:y},("image"==t||"fluid"==t)&&x.setAttr(n,{alt:s.text?d?s.text:s.text+" ["+l+"]":l});var w={mode:t,el:n,holderSettings:{dimensions:o,theme:s,flags:r},engineSettings:y};"image"==t?(r.auto||(n.style.width=o.width+"px",n.style.height=o.height+"px"),"html"==y.renderer?n.style.backgroundColor=s.bg:(a(w),"exact"==r.textmode&&(n.holderData.resizeUpdate=!0,z.vars.resizableImages.push(n),u(n)))):"background"==t&&"html"!=y.renderer?a(w):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?n.style.height=o.height:null!=r.auto&&r.auto||(n.style.height=o.height+"px"),"%"==o.width.slice(-1)?n.style.width=o.width:null!=r.auto&&r.auto||(n.style.width=o.width+"px"),("inline"==n.style.display||""===n.style.display||"none"==n.style.display)&&(n.style.display="block"),c(n),"html"==y.renderer?n.style.backgroundColor=s.bg:(z.vars.resizableImages.push(n),u(n)))}function a(e){function n(){var t=null;switch(l.renderer){case"canvas":t=E(c,e);break;case"svg":t=A(c,e);break;default:throw"Holder: invalid renderer: "+l.renderer}return t}var r=null,i=e.mode,o=e.el,a=e.holderSettings,l=e.engineSettings;switch(l.renderer){case"svg":if(!z.setup.supportsSVG)return;break;case"canvas":if(!z.setup.supportsCanvas)return;break;default:return}var u={width:a.dimensions.width,height:a.dimensions.height,theme:a.theme,flags:a.flags},c=s(u);if(r=n(),null==r)throw"Holder: couldn't render placeholder";"background"==i?(o.style.backgroundImage="url("+r+")",l.noBackgroundSize||(o.style.backgroundSize=u.width+"px "+u.height+"px")):("img"===o.nodeName.toLowerCase()?x.setAttr(o,{src:r}):"object"===o.nodeName.toLowerCase()&&x.setAttr(o,{data:r,type:"image/svg+xml"}),l.reRender&&t.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn't render placeholder";"img"===o.nodeName.toLowerCase()?x.setAttr(o,{src:e}):"object"===o.nodeName.toLowerCase()&&x.setAttr(o,{data:e,type:"image/svg+xml"})},150)),x.setAttr(o,{"data-holder-rendered":!0})}function s(e){function t(e,t,n,r){t.width=n,t.height=r,e.width=Math.max(e.width,t.width),e.height+=t.height}var n=z.defaults.size,r=null!=e.flags.fixedSize?e.flags.fixedSize:e.theme.fixedSize;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:r?n:l(e.width,e.height,n,z.defaults.scale),units:e.theme.units?e.theme.units:z.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text||Math.floor(e.width)+"x"+Math.floor(e.height),e.noWrap=e.theme.nowrap||e.flags.nowrap,e.align=e.theme.align||e.flags.align||"center",e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var i=e.flags.lineWrap||z.setup.lineWrapRatio,o=e.width*i,a=o,s=new v({width:e.width,height:e.height}),u=s.Shape,c=new u.Rect("holderBg",{fill:e.theme.bg});if(c.resize(e.width,e.height),s.root.add(c),e.flags.outline){var f=new S(c.properties.fill);f=f.lighten(f.lighterThan("7f7f7f")?-.1:.1),c.properties.outline={fill:f.toHex(!0),width:2}}var d=e.theme.fg;if(e.flags.autoFg){var h=new S(c.properties.fill),p=new S("fff"),g=new S("000",{alpha:.285714});d=h.blendAlpha(h.lighterThan("7f7f7f")?g:p).toHex(!0)}var m=new u.Group("holderTextGroup",{text:e.text,align:e.align,font:e.font,fill:d});m.moveTo(null,null,1),s.root.add(m);var y=m.textPositionData=M(s);if(!y)throw"Holder: staging fallback not supported yet.";m.properties.leading=y.boundingBox.height;var b=null,w=null;if(y.lineCount>1){var x,O=0,A=0,E=0;w=new u.Group("line"+E),("left"===e.align||"right"===e.align)&&(a=e.width*(1-2*(1-i)));for(var j=0;j<y.words.length;j++){var T=y.words[j];b=new u.Text(T.text);var C="\\n"==T.text;!e.noWrap&&(O+T.width>=a||C===!0)&&(t(m,w,O,m.properties.leading),m.add(w),O=0,A+=m.properties.leading,E+=1,w=new u.Group("line"+E),w.y=A),C!==!0&&(b.moveTo(O,0),O+=y.spaceWidth+T.width,w.add(b))}if(t(m,w,O,m.properties.leading),m.add(w),"left"===e.align)m.moveTo(e.width-o,null,null);else if("right"===e.align){for(x in m.children)w=m.children[x],w.moveTo(e.width-w.width,null,null);m.moveTo(0-(e.width-o),null,null)}else{for(x in m.children)w=m.children[x],w.moveTo((m.width-w.width)/2,null,null);m.moveTo((e.width-m.width)/2,null,null)}m.moveTo(null,(e.height-m.height)/2,null),(e.height-m.height)/2<0&&m.moveTo(null,0,null)}else b=new u.Text(e.text),w=new u.Group("line0"),w.add(b),m.add(w),"left"===e.align?m.moveTo(e.width-o,null,null):"right"===e.align?m.moveTo(0-(e.width-o),null,null):m.moveTo((e.width-y.boundingBox.width)/2,null,null),m.moveTo(null,(e.height-y.boundingBox.height)/2,null);return s}function l(e,t,n,r){var i=parseInt(e,10),o=parseInt(t,10),a=Math.max(i,o),s=Math.min(i,o),l=.8*Math.min(s,a*r);return Math.round(Math.max(n,l))}function u(e){var t;t=null==e||null==e.nodeType?z.vars.resizableImages:[e];for(var n=0,r=t.length;r>n;n++){var i=t[n];if(i.holderData){var o=i.holderData.flags,s=T(i);if(s){if(!i.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var l=i.holderData.fluidConfig;switch(l.mode){case"width":s.height=s.width/l.ratio;break;case"height":s.width=s.height*l.ratio}}var u={mode:"image",holderSettings:{dimensions:s,theme:o.theme,flags:o},el:i,engineSettings:i.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=s,u.holderSettings.dimensions=o.dimensions),a(u)}else h(i)}}}function c(e){if(e.holderData){var t=T(e);if(t){var n=e.holderData.flags,r={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};r.fluidWidth&&!r.fluidHeight?(r.mode="width",r.ratio=r.initialDimensions.width/parseFloat(n.dimensions.height)):!r.fluidWidth&&r.fluidHeight&&(r.mode="height",r.ratio=parseFloat(n.dimensions.width)/r.initialDimensions.height),e.holderData.fluidConfig=r}else h(e)}}function f(){var e,n=[],r=Object.keys(z.vars.invisibleImages);r.forEach(function(t){e=z.vars.invisibleImages[t],T(e)&&"img"==e.nodeName.toLowerCase()&&(n.push(e),delete z.vars.invisibleImages[t])}),n.length&&k.run({images:n}),setTimeout(function(){t.requestAnimationFrame(f)},10)}function d(){z.vars.visibilityCheckStarted||(t.requestAnimationFrame(f),z.vars.visibilityCheckStarted=!0)}function h(e){e.holderData.invisibleId||(z.vars.invisibleId+=1,z.vars.invisibleImages["i"+z.vars.invisibleId]=e,e.holderData.invisibleId=z.vars.invisibleId)}function p(e){z.vars.debounceTimer||e.call(this),z.vars.debounceTimer&&t.clearTimeout(z.vars.debounceTimer),z.vars.debounceTimer=t.setTimeout(function(){z.vars.debounceTimer=null,e.call(this)},z.setup.debounce)}function g(){p(function(){u(null)})}var m=n(2),y=n(3),v=n(6),b=n(7),w=n(8),x=n(9),S=n(10),O=n(11),A=n(12),E=n(27),j=b.extend,T=b.dimensionCheck,C=O.svg_ns,k={version:O.version,addTheme:function(e,t){return null!=e&&null!=t&&(z.settings.themes[e]=t),delete z.vars.cache.themeKeys,this},addImage:function(e,t){var n=x.getNodeArray(t);return n.forEach(function(t){var n=x.newEl("img"),r={};r[z.setup.dataAttr]=e,x.setAttr(n,r),t.appendChild(n)}),this},setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&u(e))},run:function(e){e=e||{};var n={},a=j(z.settings,e);z.vars.preempted=!0,z.vars.dataAttr=a.dataAttr||z.setup.dataAttr,n.renderer=a.renderer?a.renderer:z.setup.renderer,-1===z.setup.renderers.join(",").indexOf(n.renderer)&&(n.renderer=z.setup.supportsSVG?"svg":z.setup.supportsCanvas?"canvas":"html");var s=x.getNodeArray(a.images),l=x.getNodeArray(a.bgnodes),u=x.getNodeArray(a.stylenodes),c=x.getNodeArray(a.objects);return n.stylesheets=[],n.svgXMLStylesheet=!0,n.noFontFallback=!!a.noFontFallback,n.noBackgroundSize=!!a.noBackgroundSize,u.forEach(function(e){if(e.attributes.rel&&e.attributes.href&&"stylesheet"==e.attributes.rel.value){var t=e.attributes.href.value,r=x.newEl("a");r.href=t;var i=r.protocol+"//"+r.host+r.pathname+r.search;n.stylesheets.push(i)}}),l.forEach(function(e){if(t.getComputedStyle){var r=t.getComputedStyle(e,null).getPropertyValue("background-image"),s=e.getAttribute("data-background-src"),l=s||r,u=null,c=a.domain+"/",f=l.indexOf(c);if(0===f)u=l;else if(1===f&&"?"===l[0])u=l.slice(1);else{var d=l.substr(f).match(/([^"]*)"?\)/);if(null!==d)u=d[1];else if(0===l.indexOf("url("))throw"Holder: unable to parse background URL: "+l}if(u){var h=i(u,a);h&&o({mode:"background",el:e,flags:h,engineSettings:n})}}}),c.forEach(function(e){var t={};try{t.data=e.getAttribute("data"),t.dataSrc=e.getAttribute(z.vars.dataAttr)}catch(i){t.error=i}var o=null!=t.data&&0===t.data.indexOf(a.domain),s=null!=t.dataSrc&&0===t.dataSrc.indexOf(a.domain);o?r(a,n,t.data,e):s&&r(a,n,t.dataSrc,e)}),s.forEach(function(e){var t={};try{t.src=e.getAttribute("src"),t.dataSrc=e.getAttribute(z.vars.dataAttr),t.rendered=e.getAttribute("data-holder-rendered")}catch(i){t.error=i}var o=null!=t.src,s=null!=t.dataSrc&&0===t.dataSrc.indexOf(a.domain),l=null!=t.rendered&&"true"==t.rendered;o?0===t.src.indexOf(a.domain)?r(a,n,t.src,e):s&&(l?r(a,n,t.dataSrc,e):!function(e,t,n,i,o){b.imageExists(e,function(e){e||r(t,n,i,o)})}(t.src,a,n,t.dataSrc,e)):s&&r(a,n,t.dataSrc,e)}),this}},z={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},M=function(){var e=null,t=null,n=null;return function(r){var i=r.root;if(z.setup.supportsSVG){var o=!1,a=function(e){return document.createTextNode(e)};(null==e||e.parentNode!==document.body)&&(o=!0),e=w.initSVG(e,i.properties.width,i.properties.height),e.style.display="block",o&&(t=x.newEl("text",C),n=a(null),x.setAttr(t,{x:0}),t.appendChild(n),e.appendChild(t),document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.top="-100%",e.style.left="-100%");var s=i.children.holderTextGroup,l=s.properties;x.setAttr(t,{y:l.font.size,style:b.cssProps({"font-weight":l.font.weight,"font-size":l.font.size+l.font.units,"font-family":l.font.family})});var u=x.newEl("textarea");u.innerHTML=l.text,n.nodeValue=u.value;var c=t.getBBox(),f=Math.ceil(c.width/i.properties.width),d=l.text.split(" "),h=l.text.match(/\\n/g);f+=null==h?0:h.length,n.nodeValue=l.text.replace(/[ ]+/g,"");var p=t.getComputedTextLength(),g=c.width-p,m=Math.round(g/Math.max(1,d.length-1)),y=[];if(f>1){n.nodeValue="";for(var v=0;v<d.length;v++)if(0!==d[v].length){n.nodeValue=b.decodeHtmlEntity(d[v]);var S=t.getBBox();y.push({text:d[v],width:S.width})}}return e.style.display="none",{spaceWidth:m,lineCount:f,boundingBox:c,words:y}}return!1}}();for(var D in z.flags)Object.prototype.hasOwnProperty.call(z.flags,D)&&(z.flags[D].match=function(e){return e.match(this.regex)});z.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},z.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},function(){var e=x.newEl("canvas");e.getContext&&-1!=e.toDataURL("image/png").indexOf("data:image/png")&&(z.setup.renderer="canvas",z.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(C,"svg").createSVGRect&&(z.setup.renderer="svg",z.setup.supportsSVG=!0)}(),d(),m&&m(function(){z.vars.preempted||k.run(),t.addEventListener?(t.addEventListener("resize",g,!1),t.addEventListener("orientationchange",g,!1)):t.attachEvent("onresize",g),"object"==typeof t.Turbolinks&&t.document.addEventListener("page:change",function(){k.run()})}),e.exports=k}).call(t,function(){return this}())},function(e,t){function n(e){function t(e){if(!x){if(!a.body)return i(t);for(x=!0;e=S.shift();)i(e)}}function n(e){(b||e.type===l||a[d]===f)&&(r(),t())}function r(){b?(a[v](m,n,u),e[v](l,n,u)):(a[p](y,n),e[p](c,n))}function i(e,t){setTimeout(e,+t>=0?t:1)}function o(e){x?i(e):S.push(e)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function A(){document.removeEventListener("DOMContentLoaded",A,!1),document.readyState="complete"},!1),document.readyState="loading");var a=e.document,s=a.documentElement,l="load",u=!1,c="on"+l,f="complete",d="readyState",h="attachEvent",p="detachEvent",g="addEventListener",m="DOMContentLoaded",y="onreadystatechange",v="removeEventListener",b=g in a,w=u,x=u,S=[];if(a[d]===f)i(t);else if(b)a[g](m,n,u),e[g](l,n,u);else{a[h](y,n),e[h](c,n);try{w=null==e.frameElement&&s}catch(O){}w&&w.doScroll&&!function E(){if(!x){try{w.doScroll("left")}catch(e){return i(E,50)}r(),t()}}()}return o.version="1.4.0",o.isReady=function(){return x},o}e.exports="undefined"!=typeof window&&n(window)},function(e,t,n){var r=encodeURIComponent,i=decodeURIComponent,o=n(4),a=n(5),s=/(\w+)\[(\d+)\]/,l=/\w+\.\w+/;t.parse=function(e){if("string"!=typeof e)return{};if(e=o(e),""===e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t={},n=e.split("&"),r=0;r<n.length;r++){var a,u,c,f=n[r].split("="),d=i(f[0]);if(a=s.exec(d))t[a[1]]=t[a[1]]||[],t[a[1]][a[2]]=i(f[1]);else if(a=l.test(d)){for(a=d.split("."),u=t;a.length;)if(c=a.shift(),c.length){if(u[c]){if(u[c]&&"object"!=typeof u[c])break}else u[c]={};a.length||(u[c]=i(f[1])),u=u[c]}}else t[f[0]]=null==f[1]?"":i(f[1])}return t},t.stringify=function(e){if(!e)return"";var t=[];for(var n in e){var i=e[n];if("array"!=a(i))t.push(r(n)+"="+r(e[n]));else for(var o=0;o<i.length;++o)t.push(r(n+"["+o+"]")+"="+r(i[o]))}return t.join("&")}},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){switch(n.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),typeof e)}},function(e,t){var n=function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}var n=1,r=function(e){n++,this.parent=null,this.children={},this.id=n,this.name="n"+n,"undefined"!=typeof e&&(this.name=e),this.x=this.y=this.z=0,this.width=this.height=0};r.prototype.resize=function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},r.prototype.moveTo=function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},r.prototype.add=function(e){var t=e.name;if("undefined"!=typeof this.children[t])throw"SceneGraph: child already exists: "+t;this.children[t]=e,e.parent=this};var i=function(){r.call(this,"root"),this.properties=e};i.prototype=new r;var o=function(e,n){if(r.call(this,e),this.properties={fill:"#000000"},"undefined"!=typeof n)t(this.properties,n);else if("undefined"!=typeof e&&"string"!=typeof e)throw"SceneGraph: invalid node name"};o.prototype=new r;var a=function(){o.apply(this,arguments),this.type="group"};a.prototype=new o;var s=function(){o.apply(this,arguments),this.type="rect"};s.prototype=new o;var l=function(e){o.call(this),this.type="text",this.properties.text=e};l.prototype=new o;var u=new i;return this.Shape={Rect:s,Text:l,Group:a},this.root=u,this};e.exports=n},function(e,t){(function(e){t.extend=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},t.cssProps=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n+":"+e[n]);return t.join(";")},t.encodeHtmlEntity=function(e){for(var t=[],n=0,r=e.length-1;r>=0;r--)n=e.charCodeAt(r),t.unshift(n>128?["&#",n,";"].join(""):e[r]);return t.join("")},t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},t.decodeHtmlEntity=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return t.height&&t.width?t:!1},t.truthy=function(e){return"string"==typeof e?"true"===e||"yes"===e||"1"===e||"on"===e||"✓"===e:!!e},t.parseColor=function(e){var t,n=/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,r=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,i=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0*\.\d{1,}|1)\)$/,o=e.match(n);if(null!==o)return t=o[1]||o[2],"#"!==t[0]?"#"+t:t;if(o=e.match(r),null!==o)return t="rgb("+o.slice(1).join(",")+")";if(o=e.match(i),null!==o){var a=function(e){return"0."+e.split(".")[1]},s=o.slice(1).map(function(e,t){return 3===t?a(e):e});return t="rgba("+s.join(",")+")"}return null},t.canvasRatio=function(){var t=1,n=1;if(e.document){var r=e.document.createElement("canvas");if(r.getContext){var i=r.getContext("2d");t=e.devicePixelRatio||1,n=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1}}return t/n}}).call(t,function(){return this}())},function(e,t,n){(function(e){var r=n(9),i="http://www.w3.org/2000/svg",o=8;t.initSVG=function(e,t,n){var a,s,l=!1;e&&e.querySelector?(s=e.querySelector("style"),null===s&&(l=!0)):(e=r.newEl("svg",i),l=!0),l&&(a=r.newEl("defs",i),s=r.newEl("style",i),r.setAttr(s,{type:"text/css"}),a.appendChild(s),e.appendChild(a)),e.webkitMatchesSelector&&e.setAttribute("xmlns",i);for(var u=0;u<e.childNodes.length;u++)e.childNodes[u].nodeType===o&&e.removeChild(e.childNodes[u]);for(;s.childNodes.length;)s.removeChild(s.childNodes[0]);return r.setAttr(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e},t.svgStringToDataURI=function(){var t="data:image/svg+xml;charset=UTF-8,",n="data:image/svg+xml;charset=UTF-8;base64,";return function(r,i){return i?n+btoa(e.unescape(encodeURIComponent(r))):t+encodeURIComponent(r)}}(),t.serializeSVG=function(t,n){if(e.XMLSerializer){var i=new XMLSerializer,o="",a=n.stylesheets;if(n.svgXMLStylesheet){for(var s=r.createXML(),l=a.length-1;l>=0;l--){var u=s.createProcessingInstruction("xml-stylesheet",'href="'+a[l]+'" rel="stylesheet"');s.insertBefore(u,s.firstChild)}s.removeChild(s.documentElement),o=i.serializeToString(s)}var c=i.serializeToString(t);return c=c.replace(/&amp;(#[0-9]{2,};)/g,"&$1"),o+c}}}).call(t,function(){return this}())},function(e,t){(function(e){t.newEl=function(t,n){return e.document?null==n?e.document.createElement(t):e.document.createElementNS(n,t):void 0},t.setAttr=function(e,t){for(var n in t)e.setAttribute(n,t[n])},t.createXML=function(){return e.DOMParser?(new DOMParser).parseFromString("<xml />","application/xml"):void 0},t.getNodeArray=function(t){var n=null;return"string"==typeof t?n=document.querySelectorAll(t):e.NodeList&&t instanceof e.NodeList?n=t:e.Node&&t instanceof e.Node?n=[t]:e.HTMLCollection&&t instanceof e.HTMLCollection?n=t:t instanceof Array?n=t:null===t&&(n=[]),n=Array.prototype.slice.call(n)}}).call(t,function(){return this}())},function(e,t){var n=function(e,t){"string"==typeof e&&(this.original=e,"#"===e.charAt(0)&&(e=e.slice(1)),/[^a-f0-9]+/i.test(e)||(3===e.length&&(e=e.replace(/./g,"$&$&")),6===e.length&&(this.alpha=1,t&&t.alpha&&(this.alpha=t.alpha),this.set(parseInt(e,16)))))};n.rgb2hex=function(e,t,n){function r(e){var t=(0|e).toString(16);return 16>e&&(t="0"+t),t}return[e,t,n].map(r).join("")},n.hsl2rgb=function(e,t,n){var r=e/60,i=(1-Math.abs(2*n-1))*t,o=i*(1-Math.abs(parseInt(r)%2-1)),a=n-i/2,s=0,l=0,u=0;return r>=0&&1>r?(s=i,l=o):r>=1&&2>r?(s=o,l=i):r>=2&&3>r?(l=i,u=o):r>=3&&4>r?(l=o,u=i):r>=4&&5>r?(s=o,u=i):r>=5&&6>r&&(s=i,u=o),s+=a,l+=a,u+=a,s=parseInt(255*s),l=parseInt(255*l),u=parseInt(255*u),[s,l,u]},n.prototype.set=function(e){this.raw=e;var t=(16711680&this.raw)>>16,n=(65280&this.raw)>>8,r=255&this.raw,i=.2126*t+.7152*n+.0722*r,o=-.09991*t-.33609*n+.436*r,a=.615*t-.55861*n-.05639*r;return this.rgb={r:t,g:n,b:r},this.yuv={y:i,u:o,v:a},this},n.prototype.lighten=function(e){var t=Math.min(1,Math.max(0,Math.abs(e)))*(0>e?-1:1),r=255*t|0,i=Math.min(255,Math.max(0,this.rgb.r+r)),o=Math.min(255,Math.max(0,this.rgb.g+r)),a=Math.min(255,Math.max(0,this.rgb.b+r)),s=n.rgb2hex(i,o,a);return new n(s)},n.prototype.toHex=function(e){return(e?"#":"")+this.raw.toString(16)},n.prototype.lighterThan=function(e){return e instanceof n||(e=new n(e)),this.yuv.y>e.yuv.y},n.prototype.blendAlpha=function(e){e instanceof n||(e=new n(e));var t=e,r=this,i=t.alpha*t.rgb.r+(1-t.alpha)*r.rgb.r,o=t.alpha*t.rgb.g+(1-t.alpha)*r.rgb.g,a=t.alpha*t.rgb.b+(1-t.alpha)*r.rgb.b;return new n(n.rgb2hex(i,o,a))},e.exports=n},function(e,t){e.exports={version:"2.9.9",svg_ns:"http://www.w3.org/2000/svg"}},function(e,t,n){function r(e,t){return f.element({tag:t,width:e.width,height:e.height,fill:e.properties.fill})}function i(e){return u.cssProps({fill:e.fill,"font-weight":e.font.weight,"font-family":e.font.family+", monospace","font-size":e.font.size+e.font.units})}function o(e,t,n){var r=n/2;return["M",r,r,"H",e-r,"V",t-r,"H",r,"V",0,"M",0,r,"L",e,t-r,"M",0,t-r,"L",e,r].join(" ")}var a=n(13)["default"],s=n(8),l=n(11),u=n(7),c=l.svg_ns,f={element:function(e){var t=e.tag,n=e.content||"";return delete e.tag,delete e.content,[t,n,e]}};e.exports=function(e,t){var n=t.engineSettings,l=n.stylesheets,u=l.map(function(e){return'<?xml-stylesheet rel="stylesheet" href="'+e+'"?>'}).join("\n"),d="holder_"+Number(new Date).toString(16),h=e.root,p=h.children.holderTextGroup,g="#"+d+" text { "+i(p.properties)+" } ";p.y+=.8*p.textPositionData.boundingBox.height;var m=[];Object.keys(p.children).forEach(function(e){var t=p.children[e];Object.keys(t.children).forEach(function(e){var n=t.children[e],r=p.x+t.x+n.x,i=p.y+t.y+n.y,o=f.element({tag:"text",content:n.properties.text,x:r,y:i});m.push(o)})});var y=f.element({tag:"g",content:m}),v=null;if(h.children.holderBg.properties.outline){var b=h.children.holderBg.properties.outline;v=f.element({tag:"path",d:o(h.children.holderBg.width,h.children.holderBg.height,b.width),"stroke-width":b.width,stroke:b.fill,fill:"none"})}var w=r(h.children.holderBg,"rect"),x=[];x.push(w),b&&x.push(v),x.push(y);var S=f.element({tag:"g",id:d,content:x}),O=f.element({tag:"style",content:g,type:"text/css"}),A=f.element({tag:"defs",content:O}),E=f.element({tag:"svg",content:[A,S],width:h.properties.width,height:h.properties.height,xmlns:c,viewBox:[0,0,h.properties.width,h.properties.height].join(" "),preserveAspectRatio:"none"}),j=String(a(E));/&amp;(x)?#[0-9A-Fa-f]/.test(j[0])&&(j=j.replace(/&amp;#/gm,"&#")),j=u+j;var T=s.svgStringToDataURI(j,"background"===t.mode);return T}},function(e,t,n){e.exports=n(14)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function o(e){function t(e){var t=l["default"](e),n={tag:t.tag,attr:{},children:[]};return t.id&&(n.attr.id=t.id,m["default"](!o.returnObject.ids.hasOwnProperty(t.id),'Ids must be unique and "'+t.id+'" is already assigned'),o.returnObject.ids[t.id]=n),t["class"]&&(n.attr["class"]=t["class"]),t.reference&&(m["default"](!o.returnObject.ids.hasOwnProperty(t.reference),'References must be unique and "'+t.id+'" is already assigned'),o.returnObject.references[t.reference]=n),o.escapeHTML=null!=t.escapeHTML?t.escapeHTML:o.escapeHTML,n}function n(e){if(Array.isArray(e)&&0===e.length)return{};var r=1,i=void 0,s=["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],l=e.slice(0);if("string"==typeof l[0])l[0]=t(l[0]);else{if(!Array.isArray(l[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(l[0]));r=0}for(;r<l.length;r++){if(l[r]===!1||null===l[r]){l[0]=!1;break}if(void 0!==l[r]&&l[r]!==!0)if("string"==typeof l[r])o.escapeHTML&&(l[r]=c.HTML(l[r])),l[0].children.push(l[r]);else if("number"==typeof l[r])l[0].children.push(l[r]);else if(Array.isArray(l[r])){if(Array.isArray(l[r][0])){if(l[r].reverse().forEach(function(e){l.splice(r+1,0,e)}),0!==r)continue;r++}l[r]=n(l[r]),l[r][0]&&l[0].children.push(l[r][0])}else if("function"==typeof l[r])i=l[r];else{if("object"!==a(l[r]))throw new TypeError('"'+l[r]+'" is not allowed as a value');for(var u in l[r])if(l[r].hasOwnProperty(u)){var f=l[r][u];l[r].hasOwnProperty(u)&&null!==f&&f!==!1&&(l[0].attr[u]=p["default"](u,f))}}}if(l[0]!==!1){var d="<"+l[0].tag;for(var h in l[0].attr)if(l[0].attr.hasOwnProperty(h)){var g=c.attribute(l[0].attr[h]),m=g;(o.quoteAttributes||/[ "'=<>]/.test(g))&&(m=o.quotationMark+g+o.quotationMark),d+=" "+h+"="+m}d+=">",-1===s.indexOf(l[0].tag)&&(l[0].children.forEach(function(e){return d+=e}),d+="</"+l[0].tag+">"),l[0]=d}return o.returnObject[0]=l[0],o.returnObject.rootElement=l[0],o.returnObject.toString=function(){return l[0]},i&&i(l[0]),o.returnObject}var r=Array.isArray(e),i="undefined"==typeof e?"undefined":a(e);if(!r&&"object"!==i)throw new Error("Argument must be either an array or an object and not "+JSON.stringify(e));if(r&&0===e.length)return{};var o={},s=[];return Array.isArray(e)?s=e.slice(0):(s=e.elementArray.slice(0),o=Object.assign(o,e),delete o.elementArray),o=Object.assign({},d["default"],o,{returnObject:{ids:{},references:{}}}),n(s)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e;

};t["default"]=o;var s=n(15),l=i(s),u=n(16),c=r(u),f=n(17),d=i(f),h=n(18),p=i(h),g=n(21),m=i(g);o.setDefaults=function(e){return Object.assign(d["default"],e),o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=e.match(/^[\w-]+/),n={tag:t?t[0]:"div"},r=e.match(/#([\w-]+)/),i=e.match(/\.[\w-]+/g),o=e.match(/\$([\w-]+)/);return r&&(n.id=r[1]),i&&(n["class"]=i.join(" ").replace(/\./g,"")),o&&(n.reference=o[1]),(e.endsWith("&")||e.endsWith("!"))&&(n.escapeHTML=!1),n}},function(e,t){"use strict";function n(e){return e||0===e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;"):""}function r(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}Object.defineProperty(t,"__esModule",{value:!0}),t.attribute=n,t.HTML=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={namespace:"xhtml",autoNamespacing:!0,escapeHTML:!0,quotationMark:'"',quoteAttributes:!0,convertTransformArray:!0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(19),a=r(o),s=n(20),l=r(s);t["default"]=function(e,t){return void 0===t?"":"style"===e&&"object"===("undefined"==typeof t?"undefined":i(t))?l["default"](t):"transform"===e&&Array.isArray(t)?a["default"](t):t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return e.map(function(e){var t=[];return"rotate"===e.type&&e.degrees&&t.push(e.degrees),e.x&&t.push(e.x),e.y&&t.push(e.y),e.type+"("+t+")"}).join(" ")}},function(e,t){"use strict";function n(e,t){return null!==t&&t!==!1&&void 0!==t?"string"==typeof t||"object"===("undefined"==typeof t?"undefined":r(t))?t:String(t):void 0}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=function(e){return JSON.stringify(e,n).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'")}},function(e,t,n){(function(t){"use strict";function r(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);o>i;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return r>n?-1:n>r?1:0}function i(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function o(e){return Object.prototype.toString.call(e)}function a(e){return i(e)?!1:"function"!=typeof t.ArrayBuffer?!1:"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):e?e instanceof DataView?!0:e.buffer&&e.buffer instanceof ArrayBuffer?!0:!1:!1}function s(e){if(S.isFunction(e)){if(E)return e.name;var t=e.toString(),n=t.match(T);return n&&n[1]}}function l(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function u(e){if(E||!S.isFunction(e))return S.inspect(e);var t=s(e),n=t?": "+t:"";return"[Function"+n+"]"}function c(e){return l(u(e.actual),128)+" "+e.operator+" "+l(u(e.expected),128)}function f(e,t,n,r,i){throw new j.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function d(e,t){e||f(e,!0,t,"==",j.ok)}function h(e,t,n,s){if(e===t)return!0;if(i(e)&&i(t))return 0===r(e,t);if(S.isDate(e)&&S.isDate(t))return e.getTime()===t.getTime();if(S.isRegExp(e)&&S.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(a(e)&&a(t)&&o(e)===o(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===r(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;s=s||{actual:[],expected:[]};var l=s.actual.indexOf(e);return-1!==l&&l===s.expected.indexOf(t)?!0:(s.actual.push(e),s.expected.push(t),g(e,t,n,s))}return n?e===t:e==t}function p(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function g(e,t,n,r){if(null===e||void 0===e||null===t||void 0===t)return!1;if(S.isPrimitive(e)||S.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=p(e),o=p(t);if(i&&!o||!i&&o)return!1;if(i)return e=A.call(e),t=A.call(t),h(e,t,n);var a,s,l=C(e),u=C(t);if(l.length!==u.length)return!1;for(l.sort(),u.sort(),s=l.length-1;s>=0;s--)if(l[s]!==u[s])return!1;for(s=l.length-1;s>=0;s--)if(a=l[s],!h(e[a],t[a],n,r))return!1;return!0}function m(e,t,n){h(e,t,!0)&&f(e,t,n,"notDeepStrictEqual",m)}function y(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(n){}return Error.isPrototypeOf(t)?!1:t.call({},e)===!0}function v(e){var t;try{e()}catch(n){t=n}return t}function b(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=v(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&f(i,n,"Missing expected exception"+r);var o="string"==typeof r,a=!e&&S.isError(i),s=!e&&i&&!n;if((a&&o&&y(i,n)||s)&&f(i,n,"Got unwanted exception"+r),e&&i&&n&&!y(i,n)||!e&&i)throw i}function w(e,t){e||f(e,!0,t,"==",w)}var x=n(22),S=n(23),O=Object.prototype.hasOwnProperty,A=Array.prototype.slice,E=function(){return"foo"===function(){}.name}(),j=e.exports=d,T=/\s*function\s+([^\(\s]*)\s*/;j.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=c(this),this.generatedMessage=!0);var t=e.stackStartFunction||f;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var n=new Error;if(n.stack){var r=n.stack,i=s(t),o=r.indexOf("\n"+i);if(o>=0){var a=r.indexOf("\n",o+1);r=r.substring(a+1)}this.stack=r}}},S.inherits(j.AssertionError,Error),j.fail=f,j.ok=d,j.equal=function(e,t,n){e!=t&&f(e,t,n,"==",j.equal)},j.notEqual=function(e,t,n){e==t&&f(e,t,n,"!=",j.notEqual)},j.deepEqual=function(e,t,n){h(e,t,!1)||f(e,t,n,"deepEqual",j.deepEqual)},j.deepStrictEqual=function(e,t,n){h(e,t,!0)||f(e,t,n,"deepStrictEqual",j.deepStrictEqual)},j.notDeepEqual=function(e,t,n){h(e,t,!1)&&f(e,t,n,"notDeepEqual",j.notDeepEqual)},j.notDeepStrictEqual=m,j.strictEqual=function(e,t,n){e!==t&&f(e,t,n,"===",j.strictEqual)},j.notStrictEqual=function(e,t,n){e===t&&f(e,t,n,"!==",j.notStrictEqual)},j["throws"]=function(e,t,n){b(!0,e,t,n)},j.doesNotThrow=function(e,t,n){b(!1,e,t,n)},j.ifError=function(e){if(e)throw e},j.strict=x(w,j,{equal:j.strictEqual,deepEqual:j.deepStrictEqual,notEqual:j.notStrictEqual,notDeepEqual:j.notDeepStrictEqual}),j.strict.strict=j.strict;var C=Object.keys||function(e){var t=[];for(var n in e)O.call(e,n)&&t.push(n);return t}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;10>n;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},i)).join("")?!1:!0}catch(o){return!1}}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,s,l=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)o.call(r,c)&&(l[c]=r[c]);if(i){s=i(r);for(var f=0;f<s.length;f++)a.call(r,s[f])&&(l[s[f]]=r[s[f]])}}return l}},function(e,t,n){(function(e,r){function i(e,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),x(r.showHidden)&&(r.showHidden=!1),x(r.depth)&&(r.depth=2),x(r.colors)&&(r.colors=!1),x(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),l(r,e,r.depth)}function o(e,t){var n=i.styles[t];return n?"["+i.colors[n][0]+"m"+e+"["+i.colors[n][1]+"m":e}function a(e,t){return e}function s(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function l(e,n,r){if(e.customInspect&&n&&j(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return b(i)||(i=l(e,i,r)),i}var o=u(e,n);if(o)return o;var a=Object.keys(n),g=s(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return c(n);if(0===a.length){if(j(n)){var m=n.name?": "+n.name:"";return e.stylize("[Function"+m+"]","special")}if(S(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(A(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return c(n)}var y="",v=!1,w=["{","}"];if(p(n)&&(v=!0,w=["[","]"]),j(n)){var x=n.name?": "+n.name:"";y=" [Function"+x+"]"}if(S(n)&&(y=" "+RegExp.prototype.toString.call(n)),A(n)&&(y=" "+Date.prototype.toUTCString.call(n)),E(n)&&(y=" "+c(n)),0===a.length&&(!v||0==n.length))return w[0]+y+w[1];if(0>r)return S(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var O;return O=v?f(e,n,r,g,a):a.map(function(t){return d(e,n,r,g,t,v)}),e.seen.pop(),h(O,y,w)}function u(e,t){if(x(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return v(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function f(e,t,n,r,i){for(var o=[],a=0,s=t.length;s>a;++a)o.push(M(t,String(a))?d(e,t,n,r,String(a),!0):"");return i.forEach(function(i){i.match(/^\d+$/)||o.push(d(e,t,n,r,i,!0))}),o}function d(e,t,n,r,i,o){var a,s,u;if(u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},u.get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),M(r,i)||(a="["+i+"]"),s||(e.seen.indexOf(u.value)<0?(s=m(n)?l(e,u.value,null):l(e,u.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),x(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function h(e,t,n){var r=0,i=e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function m(e){return null===e}function y(e){return null==e}function v(e){return"number"==typeof e}function b(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function x(e){return void 0===e}function S(e){return O(e)&&"[object RegExp]"===C(e)}function O(e){return"object"==typeof e&&null!==e}function A(e){return O(e)&&"[object Date]"===C(e)}function E(e){return O(e)&&("[object Error]"===C(e)||e instanceof Error)}function j(e){return"function"==typeof e}function T(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function C(e){return Object.prototype.toString.call(e)}function k(e){return 10>e?"0"+e.toString(10):e.toString(10)}function z(){var e=new Date,t=[k(e.getHours()),k(e.getMinutes()),k(e.getSeconds())].join(":");return[e.getDate(),L[e.getMonth()],t].join(" ")}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var D=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}for(var n=1,r=arguments,o=r.length,a=String(e).replace(D,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),s=r[n];o>n;s=r[++n])a+=m(s)||!O(s)?" "+s:" "+i(s);return a},t.deprecate=function(n,i){function o(){if(!a){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),a=!0}return n.apply(this,arguments)}if(x(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(r.noDeprecation===!0)return n;var a=!1;return o};var F,q={};t.debuglog=function(e){if(x(F)&&(F=r.env.NODE_DEBUG||""),e=e.toUpperCase(),!q[e])if(new RegExp("\\b"+e+"\\b","i").test(F)){var n=r.pid;q[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else q[e]=function(){};return q[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=g,t.isNull=m,t.isNullOrUndefined=y,t.isNumber=v,t.isString=b,t.isSymbol=w,t.isUndefined=x,t.isRegExp=S,t.isObject=O,t.isDate=A,t.isError=E,t.isFunction=j,t.isPrimitive=T,t.isBuffer=n(25);var L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",z(),t.format.apply(t,arguments))},t.inherits=n(26),t._extend=function(e,t){if(!t||!O(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(t,function(){return this}(),n(24))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){g&&h&&(g=!1,h.length?p=h.concat(p):m=-1,p.length&&s())}function s(){if(!g){var e=i(a);g=!0;for(var t=p.length;t;){for(h=p,p=[];++m<t;)h&&h[m].run();m=-1,t=p.length}h=null,g=!1,o(e)}}function l(e,t){this.fun=e,this.array=t}function u(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var h,p=[],g=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new l(e,t)),1!==p.length||g||i(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){e.exports="function"==typeof Object.create?function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){var r=n(9),i=n(7);e.exports=function(){var e=r.newEl("canvas"),t=null;return function(n){null==t&&(t=e.getContext("2d"));var r=i.canvasRatio(),o=n.root;e.width=r*o.properties.width,e.height=r*o.properties.height,t.textBaseline="middle";var a=o.children.holderBg,s=r*a.width,l=r*a.height,u=2,c=u/2;t.fillStyle=a.properties.fill,t.fillRect(0,0,s,l),a.properties.outline&&(t.strokeStyle=a.properties.outline.fill,t.lineWidth=a.properties.outline.width,t.moveTo(c,c),t.lineTo(s-c,c),t.lineTo(s-c,l-c),t.lineTo(c,l-c),t.lineTo(c,c),t.moveTo(0,c),t.lineTo(s,l-c),t.moveTo(0,l-c),t.lineTo(s,c),t.stroke());var f=o.children.holderTextGroup;t.font=f.properties.font.weight+" "+r*f.properties.font.size+f.properties.font.units+" "+f.properties.font.family+", monospace",t.fillStyle=f.properties.fill;for(var d in f.children){var h=f.children[d];for(var p in h.children){var g=h.children[p],m=r*(f.x+h.x+g.x),y=r*(f.y+h.y+g.y+f.properties.leading/2);t.fillText(g.properties.text,m,y)}}return e.toDataURL("image/png")}}()}])}),function(e,t){t&&(Holder=e.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package);
}

/* easy pie init */
function easyPieInit() {
    // generate easy-pie-charts
    if ( $('.easy-pie').length && $.fn.easyPieChart ) {
        $.each($('.easy-pie'), function(k,v) {
            var color = primaryColor;
            if ($(this).is('.info')) color = infoColor;
            if ($(this).is('.danger')) color = dangerColor;
            if ($(this).is('.success')) color = successColor;
            if ($(this).is('.warning')) color = warningColor;
            if ($(this).is('.inverse')) color = inverseColor;

            $(v).easyPieChart({
                barColor: color,
                animate: ($('html').is('.ie') ? false : 3000),
                lineWidth: 4,
                size: 50
            });
        });
    }
}

/* Widget Scrollable */
function widgetScrollableInit() {
    /* Slim Scroll Widgets */
    $('.widget-scroll').each(function() {
        $(this).find(".widget-body > .scroll-div").niceScroll({
            cursorwidth: 3,
            zindex: 2,
            cursorborder: "none",
            cursorborderradius: "0",
            cursorcolor: primaryColor

        });
    });

    /* Other non-widget Slim Scroll areas */
    $('*:not(#menu) .slim-scroll').each(function(){
        //$(this).height($(this).attr('data-scroll-height'))
        $(this).niceScroll({
            cursorwidth: 3,
            zindex: 2,
            cursorborder: "none",
            cursorborderradius: "0",
            cursorcolor: primaryColor
        });
    });

}

/* Bootstrap Datepicker */
function bootstrapDatepickerInit() {
    $.fn.bdatepicker = $.fn.datepicker;
    
    /* DatePicker */
    // default
    $("#datepicker1").bdatepicker({
        format: 'yyyy-mm-dd',
        startDate: "2013-02-14"
    });

    // component
    $('#datepicker2').bdatepicker({
        format: "dd MM yyyy",
        startDate: "2013-02-14"
    });

    // today button
    $('#datepicker3').bdatepicker({
        format: "dd MM yyyy",
        startDate: "2013-02-14",
        todayBtn: true
    });

    // advanced
    $('#datetimepicker4').bdatepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
    });

    // meridian
    $('#datetimepicker5').bdatepicker({
        format: "dd MM yyyy - HH:ii P",
        showMeridian: true,
        autoclose: true,
        startDate: "2013-02-14 10:00",
        todayBtn: true
    });

    // other
    if ($('#datepicker').length) $("#datepicker").bdatepicker({ showOtherMonths:true });
    if ($('#datepicker-inline').length) $('#datepicker-inline').bdatepicker({ inline: true, showOtherMonths:true });
    if ($('.datepicker-block').length) $('.datepicker-block').bdatepicker({ inline: true, showOtherMonths:true });
}

/* bootstrap-timepicker */
function bootstrapTimePickerInit() {    
    // https://getdatepicker.com/6/repl.html
    var $timepicker1 = new tempusDominus.TempusDominus(document.getElementById('timepicker1'), {
        display: {
            viewMode: 'clock',
            components: {
                decades: false,
                year: false,
                month: false,
                date: false,
                hours: true,
                minutes: true,
                seconds: false
            }
        },
        localization: {
            hourCycle: 'h12',
            format: 'hh:mm T'
        }
    });

    $("#timepicker1Input").on("click", function() {
        $(".timepicker1 .input-group-addon").trigger("click");
    });

    var $timepicker2_1 = new tempusDominus.TempusDominus(document.getElementById('timepicker2_1'), {
        display: {
            viewMode: 'clock',
            components: {
                decades: false,
                year: false,
                month: false,
                date: false,
                hours: true,
                minutes: true,
                seconds: true,
            }
        },
        localization: {
            hourCycle: 'h24',
            format: 'HH:mm:ss'
        }
    });

    $timepicker2_1.dates.formatInput = function(date) { 
        { return moment(date).format('HH:mm:ss') } 
    }

    $("#timepicker2Modal-btn").on("click", function() {
        var viewDate    = $timepicker2_1.actions.optionsStore._viewDate,
            hours       = viewDate.hours,
            mins        = viewDate.minutesFormatted,
            secs        = viewDate.secondsFormatted;

            $("#timepicker2").val( hours + ":" + mins + ":" + secs );
    });

    var $timepicker4 = new tempusDominus.TempusDominus(document.getElementById('timepicker4'), {
        display: {
            viewMode: 'clock',
            components: {
                decades: false,
                year: false,
                month: false,
                date: false,
                hours: true,
                minutes: true,
                seconds: false
            }
        },
        localization: {
            hourCycle: 'h12',
            format: 'HH:mm T'
        }
    }); 
    
    $("#timepicker4Input").on("click", function() {
        $("#timepicker4 .input-group-addon").trigger("click");
    });

    const linkedPicker1Element = document.getElementById('linkedPickers1');

    const linked1 = new tempusDominus.TempusDominus(linkedPicker1Element);

    const linked2 = new tempusDominus.TempusDominus(document.getElementById('linkedPickers2'), {
        useCurrent: false,
    });

    //using event listeners
    linkedPicker1Element.addEventListener(Namespace.events.change, (e) => {
        linked2.updateOptions({
            restrictions: {
                minDate: e.detail.date,
            },
        });
    });

    //using subscribe method
    const subscription = linked2.subscribe(Namespace.events.change, (e) => {
        linked1.updateOptions({
            restrictions: {
            maxDate: e.date,
            },
        });
    });
}

/* google map init */
var igms = false;
function initScripts() {
    if (igms) return;
    componentsPath = "";
    var $scripts = [
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.extensions.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.services.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.microformat.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/addons/markerclustererplus/markerclusterer.min.js"
    ];
    $.each($scripts, function(k,v){
        if ($('[src="'+v+'"]').length) return true;
        var scriptNode = document.createElement('script');

        scriptNode.src = v;
        $('head').prepend($(scriptNode));
    });

    $.extend($.ui.gmap.prototype, {
        pagination: function(prop) {
            var $el = $("<div id='pagination' class='btn-group btn-group-lg' style='width: 100%'>"
                + "<a href='#' class='col-md-2 back-btn btn btn-inverse'>&lsaquo;</a>"
                + "<a class='col-md-8 display btn btn-inverse'></a>"
                + "<a href='#' class='col-md-2 fwd-btn btn btn-inverse'>&rsaquo;</a>"
                + "</div>");

            var self = this, i = 0, prop = prop || 'title';
            self.set('pagination', function(a, b) {
                if (a) {
                    i = i + b;
                    $el.find('.display').text(self.get('markers')[i][prop]);
                    self.get('map').panTo(self.get('markers')[i].getPosition());
                }
            });
            self.get('pagination')(true, 0);
            $el.find('.back-btn').on("click", function(e) {
                e.preventDefault();
                self.get('pagination')((i > 0), -1, this);
            });
            $el.find('.fwd-btn').on("click", function(e) {
                e.preventDefault();
                self.get('pagination')((i < self.get('markers').length - 1), 1, this);
            });
            self.addControl($el, google.maps.ControlPosition.TOP_LEFT);
        }
    });
    igms = true;
}

function checkAPIMaps() {
    if (typeof google === 'object' && typeof google.maps === 'object') {
        initGoogleMaps();
    }

    if( $('#google-map-clustering').length || $('#google-map-extend-pagination').length || $('#google-map-filters').length || $('#google-map-geocoding').length || $('#google-map-json').length || $('#google-map-streetview').length || $('#google-fs').length || $('#google-fs-realestate').length ) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = "async";
        script.async = "defeer";
        // script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=handleApiReady";
        script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBrxUTzqWroARkIZ24zYukk7E43b9F38E4&callback=initGoogleMaps"
        if (!$('script[src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBrxUTzqWroARkIZ24zYukk7E43b9F38E4&callback=initGoogleMaps"]').length > 0) {
            //script exists
            document.body.appendChild(script);
        }
    }
}

function initGoogleMaps() {
    initScripts();

    /*
     * Clustering
     */
    if ($('#google-map-clustering').length)     {
        // We need to bind the map with the "init" event otherwise bounds will be null, bind('init')
        $('#google-map-clustering').gmap({'zoom': 2, 'disableDefaultUI':true}).on('init', function(evt, map) {
            var bounds = map.getBounds();
            var southWest = bounds.getSouthWest();
            var northEast = bounds.getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();
            for ( var i = 0; i < 1000; i++ ) {
                var lat = southWest.lat() + latSpan * Math.random();
                var lng = southWest.lng() + lngSpan * Math.random();
                $('#google-map-clustering').gmap('addMarker', {
                    'position': new google.maps.LatLng(lat, lng)
                }).on("click", function() {
                    $('#google-map-clustering').gmap('openInfoWindow', { content : 'Hello world!' }, this);
                });
            }
            // mcOptions = {imagePath: "https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m"};
            mcOptions = {imagePath: "https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"};

            $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers'), mcOptions));
            // $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, mcOptions));

            // To call methods in MarkerClusterer simply call
            // $('#google-map-clustering').gmap('get', 'MarkerClusterer').callingSomeMethod();
        });
    }

    /*
     * Extend with pagination
     */
    if ($('#google-map-extend-pagination').length) {
        var markers = [
            {'position': '59.32893000000001,18.064910000000054', 'title': 'Stockholm, Sweden' },
            {'position': '35.6894875,139.69170639999993', 'title': 'Tokyo, Japan' },
            {'position': '13.7234186, 100.47623190000002', 'title': 'Bangkok, Thailand' },
            {'position': '51.508129,-0.12800500000003012', 'title': 'London, Great Britain' },
            {'position': '40.7143528,-74.0059731', 'title': 'New York, USA' },
            {'position': '48.856614,2.3522219000000177', 'title': 'Paris, France' },
            {'position': '34.0522342,-118.2436849', 'title': 'Los Angeles, USA' },
            {'position': '55.75,37.616666699999996', 'title': 'Moskva, Ryssia' }
        ];

        $('#google-map-extend-pagination').gmap({'zoom': 5, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            $.each(markers, function(i, marker) {
                self.addMarker(marker).click(function() {
                    self.openInfoWindow({'content': this.title}, this);
                });
            });
        }}).gmap('pagination', 'title');
    }

    /*
     * Filtering
     */
    if ($('#google-map-filters').length) {
        // format
        String.prototype.format = function() { a = this; for ( k in arguments ) { a = a.replace("{" + k + "}", arguments[k]); } return a; };

        // bind('init')
        $('#google-map-filters').gmap({'disableDefaultUI':true}).on('init', function(evt, map) {
            //$('#google-map-filters').gmap('addControl', 'tags-control', google.maps.ControlPosition.TOP_LEFT);
            $('#google-map-filters').gmap('addControl', 'radios', google.maps.ControlPosition.TOP_LEFT);
            var southWest = map.getBounds().getSouthWest();
            var northEast = map.getBounds().getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();
            // var images = ['http://google-maps-icons.googlecode.com/files/friends.png', 'http://google-maps-icons.googlecode.com/files/home.png', 'http://google-maps-icons.googlecode.com/files/girlfriend.png', 'http://google-maps-icons.googlecode.com/files/dates.png', 'http://google-maps-icons.googlecode.com/files/realestate.png', 'http://google-maps-icons.googlecode.com/files/apartment.png', 'http://google-maps-icons.googlecode.com/files/family.png'];
            var images = [];
            var tags = ['jQuery', 'Google maps', 'Plugin', 'SEO', 'Java', 'PHP', 'C#', 'Ruby', 'JavaScript', 'HTML'];
            //$('#tags').append('<option value="all">All</option>');
            $.each(tags, function(i, tag) {
                //$('#tags').append(('<option value="{0}">{1}</option>').format(tag, tag));
                $('#radios').append(('<label style="margin-right:5px;display:block;"><input type="checkbox" style="margin-right:3px" value="{0}"/>{1}</label>').format(tag, tag));
            });
            for ( i = 0; i < 100; i++ ) {
                var temp = [];
                for ( j = 0; j < Math.random()*5; j++ ) {
                    temp.push(tags[Math.floor(Math.random()*10)]);
                }
                $('#google-map-filters').gmap('addMarker', { 'icon': images[(Math.floor(Math.random()*7))], 'tags':temp, 'bound':true, 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) } ).click(function() {
                    var visibleInViewport = ( $('#google-map-filters').gmap('inViewport', $(this)[0]) ) ? 'I\'m visible in the viewport.' : 'I\'m sad and hidden.';
                    $('#google-map-filters').gmap('openInfoWindow', { 'content': $(this)[0].tags + '<br/>' +visibleInViewport }, this);
                });
            }
            $('input:checkbox').on("click", function() {
                $('#google-map-filters').gmap('closeInfoWindow');
                $('#google-map-filters').gmap('set', 'bounds', null);
                var filters = [];
                $('input:checkbox:checked').each(function(i, checkbox) {
                    filters.push($(checkbox).val());
                });
                if ( filters.length > 0 ) {
                    $('#google-map-filters').gmap('find', 'markers', { 'property': 'tags', 'value': filters, 'operator': 'OR' }, function(marker, found) {
                        if (found) {
                            $('#google-map-filters').gmap('addBounds', marker.position);
                        }
                        marker.setVisible(found);
                    });
                } else {
                    $.each($('#google-map-filters').gmap('get', 'markers'), function(i, marker) {
                        $('#google-map-filters').gmap('addBounds', marker.position);
                        marker.setVisible(true);
                    });
                }
            });

            /*$("#tags").change(function() {
             $('#google-map-filters').gmap('closeInfoWindow');
             $('#google-map-filters').gmap('set', 'bounds', null);
             if ( $(this).val() == 'all' ) {
             $.each($('#google-map-filters').gmap('get', 'markers'), function(i, marker) {
             marker.setVisible(true);
             });
             } else {
             $('#google-map-filters').gmap('find', 'markers', { 'property': 'tags', 'value': $(this).val() }, function(marker, found) {
             if (found) {
             $('#google-map-filters').gmap('addBounds', marker.position);
             }
             marker.setVisible(found);
             });
             }
             });*/
        });
    }

    /*
     * Geocoding
     */
    if ($('#google-map-geocoding').length) {
        $('#google-map-geocoding').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        })
        // bind('init')
        .on('init', function(event, map) {
            var gmgLatLng = new google.maps.LatLng(53.29463136870075, -6.15019965916872);
            $('#google-map-geocoding').gmap('addMarker', {
                'position': gmgLatLng,
                'draggable': true,
                'bounds': false
            }, function(map, marker) {
                $('#modals').append('<div id="dialog'+marker.__gm_id+'" class="hide">' +
                    '<label for="country">Country</label>'+
                    '<input id="country'+marker.__gm_id+'" type="text" class="form-control" name="country" value=""/>' +
                    '<div class="separator bottom"></div><label for="state">State</label>' +
                    '<input id="state'+marker.__gm_id+'" type="text" class="form-control" name="state" value=""/>' +
                    '<div class="separator bottom"></div><label for="address">Address</label>' +
                    '<input id="address'+marker.__gm_id+'" type="text" class="form-control" name="address" value=""/>' +
                    '<div class="separator bottom"></div><label for="comment">Comment</label>' +
                    '<textarea id="comment" name="comment" class="form-control" rows="5"></textarea>' +
                    '</div>');
            }).dragend( function(event) {
                findLocation(event.latLng, this);
            }).on("click", function(event) {
                findLocation(event.latLng, this);
            });

            $('#google-map-geocoding').gmap('option', 'center', gmgLatLng );
            $('#google-map-geocoding').gmap('option', 'zoom', 16 );

            $(map).on("click", function(event) {
                $('#google-map-geocoding').gmap('addMarker', {
                    'position': event.latLng,
                    'draggable': true,
                    'bounds': false
                }, function(map, marker) {
                    $('#modals').append('<div id="dialog'+marker.__gm_id+'" class="hide">' +
                        '<label for="country">Country</label>'+
                        '<input id="country'+marker.__gm_id+'" type="text" class="form-control" name="country" value=""/>' +
                        '<div class="separator bottom"></div><label for="state">State</label>' +
                        '<input id="state'+marker.__gm_id+'" type="text" class="form-control" name="state" value=""/>' +
                        '<div class="separator bottom"></div><label for="address">Address</label>' +
                        '<input id="address'+marker.__gm_id+'" type="text" class="form-control" name="address" value=""/>' +
                        '<div class="separator bottom"></div><label for="comment">Comment</label>' +
                        '<textarea id="comment" name="comment" class="form-control" rows="5"></textarea>' +
                        '</div>');
                    findLocation(marker.getPosition(), marker);
                }).dragend( function(event) {
                    findLocation(event.latLng, this);
                }).on("click", function() {
                    openDialog(this);
                });
            });
        });

        function findLocation(location, marker) {
            $('#google-map-geocoding').gmap('search', {'location': location}, function(results, status) {
                if ( status === 'OK' ) {
                    $.each(results[0].address_components, function(i,v) {
                        if ( v.types[0] == "administrative_area_level_1" ||
                            v.types[0] == "administrative_area_level_2" ) {
                            $('#dialog'+marker.__gm_id + ' [name="state"]').attr('value', v.long_name);
                        } else if ( v.types[0] == "country") {
                            $('#dialog'+marker.__gm_id + ' [name="country"]').attr('value', v.long_name);
                        }
                    });
                    marker.setTitle(results[0].formatted_address);
                    $('#dialog'+marker.__gm_id + ' [name="address"]').attr('value', results[0].formatted_address);
                    openDialog(marker);
                }
            });
        }

        function openDialog(marker) {
            bootbox.dialog({
                message: $('#dialog'+marker.__gm_id).html(),
                title: "Edit location",
                buttons: {
                    success: {
                        'label': 'Save',
                        'className': 'btn-success',
                        'callback': function(){}
                    },
                    danger: {
                        'label': 'Remove',
                        'className': 'btn-danger',
                        'callback': function(){
                            marker.setMap(null);
                        }
                    }
                }
            });
        }
    }

    /*
     * JSON
     */
    if ($('#google-map-json').length) {
        $('#google-map-json').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        })
        // bind('init')
        .on('init', function() { 
            $.getJSON( componentsPath + '/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/data/demo.json', function(data) {
                $.each( data.markers, function(i, marker) {
                    $('#google-map-json').gmap('addMarker', {
                        'position': new google.maps.LatLng(marker.latitude, marker.longitude)
                    }).on("click", function() {
                        $('#google-map-json').gmap('openInfoWindow', { 'content': marker.content }, this);
                    });
                });
                $('#google-map-json').gmap('option', 'center', new google.maps.LatLng(data.markers[1].latitude, data.markers[1].longitude) );
                $('#google-map-json').gmap('option', 'zoom', 16 );
            });
        });
    }

    /*
     * Streetview
     */
    if ($('#google-map-streetview').length) {
        $('#google-map-streetview').gmap({ 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.microformat('.vevent', function(result, item, index) {
                var clone = $(item).clone().addClass('ui-dialog-vevent').append('<div id="streetview{0}" class="streetview"></div>'.replace('{0}', index));
                clone.find('p').remove();
                var latlng = new google.maps.LatLng(result.location[0].geo[0].latitude['value-title'], result.location[0].geo[0].longitude['value-title']);
                // self.addMarker( { 'bounds':true, 'position': latlng, 'title': result.summary, 'icon': 'http://google-maps-icons.googlecode.com/files/music-rock.png' }, function(map, marker) {
                self.addMarker( { 'bounds':true, 'position': latlng, 'title': result.summary }, function(map, marker) {
                    $(item).find('.summary').on("click", function() {
                        $(marker).triggerEvent('click');
                        return false;
                    });
                    $(item).on("mouseover", function() {
                        self.get('map').panTo(marker.getPosition());
                    });
                }).on("click", function() {
                    self.get('map').panTo( $(this)[0].getPosition());
                    //$(clone).dialog({ 'modal': true, 'width': 530, 'title': result.summary, 'resizable': false, 'draggable': false });
                    bootbox.alert($(clone).html());
                    self.displayStreetView('streetview{0}'.replace('{0}', index), { 'position': $(this)[0].getPosition() });
                });
            });
        }});
    }

    /*
     * Fullscreen
     */

    if ($('#google-fs').length) {
        $('#google-fs').height($(window).height() - $('#footer').height() - $('.navbar.main').height() - $('#menu-top').height());

        $('#google-fs').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        })
        // bind('init')
        .on('init', function() {
            $.getJSON( componentsPath + '/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/data/demo.json', function(data) {
                $.each( data.markers, function(i, marker) {
                    $('#google-fs').gmap('addMarker',
                        {
                            'position': new google.maps.LatLng(marker.latitude, marker.longitude),
                            'bounds': true,
                            'animation': google.maps.Animation.DROP
                        })
                        .on("click", function()
                        {
                            $('#google-fs').gmap('openInfoWindow', { 'content': marker.content }, this);
                        });
                });

                $('#google-fs').gmap('option', 'center', new google.maps.LatLng(data.markers[1].latitude, data.markers[1].longitude) );
                $('#google-fs').gmap('option', 'zoom', 16 );

                setTimeout(function(){
                    $('#google-fs').gmap('openInfoWindow', { 'content': data.markers[1].content }, $('#google-fs').gmap('get', 'markers')[1]);
                }, 1000);
            });
        });
    }

    /*
     * Real Estate
     */

    var mfsr = $('#google-fs-realestate');
    if (mfsr.length) {
        var mfsr_height = $(window).height() -
                $('#footer').height() -
                $('.navbar.main').height() -
                $('#menu-top').height(),
                mfsr_module = mfsr.data('module') || 'admin',
                mfsr_url = rootPath + mfsr_module + '/ajax/maps_google_realestate.json',
                mfsr_info_width = 'auto';

            switch (mfsr_module) {
                default:
                case 'admin':
                    mfsr_info_width = 240;
                    break;
                case 'realestate':
                    mfsr_info_width = 330;
                    break;
            }

            function msfr_info ( marker ) {
                var content = $('<div/>');
                content.addClass('innerAll inner-2x').html('<div></div>');

                if (mfsr_module == 'admin')
                    content.prepend('<h4></h4>').find(':header').text(marker.title);

                content.find('> div').addClass('msfr_info_content').html(marker.content);

                return content.html();
            }

            if (mfsr_module == 'admin')
                mfsr.height(mfsr_height);

            mfsr.gmap({
                'zoomControl' : true,
                'zoomControlOptions': {
                    'style' : google.maps.ZoomControlStyle.SMALL,
                    'position' : google.maps.ControlPosition.TOP_RIGHT
                },
                'panControl' : false,
                'streetViewControl' : false,
                'mapTypeControl': false,
                'overviewMapControl': false,
                'scrollwheel': false,
                'mapTypeId': google.maps.MapTypeId.ROADMAP,
                'zoom': 16
            })
            // bind('init')
            .on('init', function() {
                $.getJSON( mfsr_url, function(data) {
                    $.each( data.markers, function(i, marker) {
                        setTimeout(function() {
                            mfsr.gmap('addMarker', {
                                    'position': new google.maps.LatLng(marker.latitude, marker.longitude),
                                    'draggable': true,
                                    'animation': google.maps.Animation.DROP
                                })
                                .on("click", function() {
                                    mfsr.gmap('openInfoWindow', { 'content': msfr_info(marker), 'maxWidth': mfsr_info_width }, this);
                                });

                            if (i == 1) {
                                mfsr.gmap('openInfoWindow', { 'content': msfr_info(marker), 'maxWidth': mfsr_info_width }, mfsr.gmap('get', 'markers')[i]);
                                mfsr.gmap('option', 'center', new google.maps.LatLng(marker.latitude, marker.longitude) );
                            }
                        },
                        300*i);
                    });
                });
            });
    }

}

/* google maps vector init */
function mapsVectorInit() {
    $('#maps_vector_tabs a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var $this   = $(this),
            href    = $this.attr("href");

            if ( $this.attr('data-init') )
                return;

                $this.attr('data-init', 1);

                switch ( href ) {
                    case '#tab1':
                        initWorldMapGDP();
                        break;

                    case '#tab2':
                        initWorldMapMarkers();
                        break;

                    case '#tab3':
                        initUSAUnemployment();
                        break;

                    case '#tab4':
                        initRegionSelection();
                        break;

                    case '#tab5':
                        initFranceElections();
                        break;

                    case '#tab6':
                        initRandomColors();
                        break;

                    case '#tab7':
                        initMallMap();
                        break;

                    case '#tab8':
                        initProjectionMap();
                        break;
                    default:
                        console.log("Invalid input");
                }
    });

    // load this map by default
    //initWorldMapGDP();

    // GDP by country
    /* function initWorldMapGDP() {
        $('#world-map-gdp').vectorMap({
            map: 'world_mill',
            series: {
                regions: [{
                    values: gdpData,
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
            },
            onLabelShow: function(e, el, code){
                el.html(el.html()+' (GDP - '+gdpData[code]+')');
            }
        });
    } */

    //initWorldMapMarkers();    

    // World map markers
    function initWorldMapMarkers() {
        $('#world-map-markers').vectorMap({
            map: 'world_mill',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            markerStyle: {
                initial: {
                    fill: primaryColor,
                    stroke: '#383f47'
                }
            },
            backgroundColor: '#383f47',
            markers: [
                {latLng: [41.90, 12.45], name: 'Vatican City'},
                {latLng: [43.73, 7.41], name: 'Monaco'},
                {latLng: [-0.52, 166.93], name: 'Nauru'},
                {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                {latLng: [43.93, 12.46], name: 'San Marino'},
                {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                {latLng: [3.2, 73.22], name: 'Maldives'},
                {latLng: [35.88, 14.5], name: 'Malta'},
                {latLng: [12.05, -61.75], name: 'Grenada'},
                {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                {latLng: [13.16, -59.55], name: 'Barbados'},
                {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                {latLng: [-4.61, 55.45], name: 'Seychelles'},
                {latLng: [7.35, 134.46], name: 'Palau'},
                {latLng: [42.5, 1.51], name: 'Andorra'},
                {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                {latLng: [1.3, 103.8], name: 'Singapore'},
                {latLng: [1.46, 173.03], name: 'Kiribati'},
                {latLng: [-21.13, -175.2], name: 'Tonga'},
                {latLng: [15.3, -61.38], name: 'Dominica'},
                {latLng: [-20.2, 57.5], name: 'Mauritius'},
                {latLng: [26.02, 50.55], name: 'Bahrain'},
                {latLng: [0.33, 6.73], name: 'S�o Tom� and Pr�ncipe'}
            ]
        });
    }

    /* if ( $('#usa-unemployment').length ) {
        initUSAUnemployment();
    } */
    
    // USA unemployment
    function initUSAUnemployment() {
        var componentsPath = '';
            $.getJSON( componentsPath + '/MelisCore/assets/components/modules/admin/maps/vector/assets/lib/data/us-unemployment.json', function(data) {
                // $.getJSON('/MelisDesign/ajax/us-unemployment.json', function(data){
                var val = 2009;
                    statesValues = jvm.values.apply({}, jvm.values(data.states)),
                    metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
                    metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

                $('#usa-unemployment').vectorMap({
                    map: 'us_aea',
                    markers: data.metro.coords,
                    series: {
                        markers: [{
                            attribute: 'fill',
                            scale: ['#FEE5D9', '#A50F15'],
                            values: data.metro.unemployment[val],
                            min: jvm.min(metroUnemplValues),
                            max: jvm.max(metroUnemplValues)
                        },{
                            attribute: 'r',
                            scale: [5, 20],
                            values: data.metro.population[val],
                            min: jvm.min(metroPopValues),
                            max: jvm.max(metroPopValues)
                        }],
                        regions: [{
                            scale: ['#DEEBF7', '#08519C'],
                            attribute: 'fill',
                            values: data.states[val],
                            min: jvm.min(statesValues),
                            max: jvm.max(statesValues)
                        }]
                    },
                    onMarkerLabelShow: function(event, label, index){
                        label.html(
                            '<b>'+data.metro.names[index]+'</b><br/>'+
                            '<b>Population: </b>'+data.metro.population[val][index]+'</br>'+
                            '<b>Unemployment rate: </b>'+data.metro.unemployment[val][index]+'%'
                        );
                    },
                    onRegionLabelShow: function(event, label, code){
                        label.html(
                            '<b>'+label.html()+'</b></br>'+
                            '<b>Unemployment rate: </b>'+data.states[val][code]+'%'
                        );
                    }
                });

                var mapObject = $('#usa-unemployment').vectorMap('get', 'mapObject');

                $("#usa-unemployment-slider").slider({
                    value: val,
                    min: 2005,
                    max: 2009,
                    step: 1,
                    //create: JQSliderCreate,
                    slide: function( event, ui ) {
                        //$('#usa-unemployment-slider-year strong').html(ui.value);
                        val = ui.value;
                        mapObject.series.regions[0].setValues(data.states[ui.value]);
                        mapObject.series.markers[0].setValues(data.metro.unemployment[ui.value]);
                        mapObject.series.markers[1].setValues(data.metro.population[ui.value]);
                    }
                });
            });
    }

    //initRegionSelection();

    // regions selection
    function initRegionSelection() {
        map = new jvm.Map({
            container: $('#regions-selection'),
            map: 'de_merc',
            regionsSelectable: true,
            markersSelectable: true,
            markers: [
                {latLng: [52.50, 13.39], name: 'Berlin'},
                {latLng: [53.56, 10.00], name: 'Hamburg'},
                {latLng: [48.13, 11.56], name: 'Munich'},
                {latLng: [50.95, 6.96], name: 'Cologne'},
                {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
                {latLng: [48.77, 9.17], name: 'Stuttgart'},
                {latLng: [51.23, 6.78], name: 'Dusseldorf'},
                {latLng: [51.51, 7.46], name: 'Dortmund'},
                {latLng: [51.45, 7.01], name: 'Essen'},
                {latLng: [53.07, 8.80], name: 'Bremen'}
            ],
            markerStyle: {
                initial: {
                    fill: '#4DAC26'
                },
                selected: {
                    fill: '#CA0020'
                }
            },
            regionStyle: {
                initial: {
                    fill: '#B8E186'
                },
                selected: {
                    fill: '#F4A582'
                }
            },
            series: {
                markers: [{
                    attribute: 'r',
                    scale: [5, 15],
                    values: [
                        887.70,
                        755.16,
                        310.69,
                        405.17,
                        248.31,
                        207.35,
                        217.22,
                        280.71,
                        210.32,
                        325.42
                    ]
                }]
            },
            onRegionSelected: function(){
                if (window.localStorage) {
                    window.localStorage.setItem(
                        'jvectormap-selected-regions',
                        JSON.stringify(map.getSelectedRegions())
                    );
                }
            },
            onMarkerSelected: function(){
                if (window.localStorage) {
                    window.localStorage.setItem(
                        'jvectormap-selected-markers',
                        JSON.stringify(map.getSelectedMarkers())
                    );
                }
            }
        });
        map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
        map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );
    }

    //initFranceElections();

    // France elections
    function initFranceElections() {
        $.getJSON('/MelisDesign/ajax/france-elections.json', function(data){
            new jvm.Map({
                map: 'fr_merc_en',
                container: $('#france-2007'),
                series: {
                    regions: [{
                        scale: {
                            '1': '#4169E1',
                            '2': '#FF69B4'
                        },
                        attribute: 'fill',
                        values: data['year2007'].results
                    }]
                }
            });

            new jvm.Map({
                map: 'fr_merc_en',
                container: $('#france-2012'),
                series: {
                    regions: [{
                        scale: {
                            '1': '#FF69B4',
                            '2': '#4169E1'
                        },
                        attribute: 'fill',
                        values: data['year2012'].results
                    }]
                }
            });
        });
    }

    //initRandomColors();

    function initRandomColors() {
        // random colors
        var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'],
            generateColors = function() {
                var colors = {},
                    key;

                for (key in colorsMap.regions) {
                    colors[key] = palette[Math.floor(Math.random()*palette.length)];
                }
                return colors;
            },
            colorsMap;

            colorsMap = new jvm.Map({
                map: 'es_merc',
                container: $('#random-colors-map'),
                series: {
                    regions: [{
                        attribute: 'fill'
                    }]
                }
            });

            colorsMap.series.regions[0].setValues(generateColors());
            
            $('#update-colors-button').on("click", function(e){
                e.preventDefault();
                colorsMap.series.regions[0].setValues(generateColors());
            });
    }

    //initMallMap();

    // mall map
    function initMallMap() {
        $('#mall-map').vectorMap({
            map: 'mall',
            backgroundColor: 'transparent',
            markers: [{
                coords: [60, 110],
                name: 'Escalator 1',
                style: {fill: 'yellow'}
            },{
                coords: [260, 95],
                name: 'Escalator 2',
                style: {fill: 'yellow'}
            },{
                coords: [434, 95],
                name: 'Escalator 3',
                style: {fill: 'yellow'}
            },{
                coords: [634, 110],
                name: 'Escalator 4',
                style: {fill: 'yellow'}
            }],
            series: {
                regions: [{
                    values: {
                        F102: 'SPORTS & OUTDOOR',
                        F103: 'HOME DECOR',
                        F105: 'FASHION',
                        F106: 'OTHER',
                        F108: 'BEAUTY & SPA',
                        F109: 'FASHION',
                        F110: 'BEAUTY & SPA',
                        F111: 'URBAN FAVORITES',
                        F114: 'SERVICES',
                        F166: 'DINING',
                        F167: 'FASHION',
                        F169: 'DINING',
                        F170: 'ENTERTAINMENT',
                        F172: 'DINING',
                        F174: 'DINING',
                        F115: 'KIDS STUFF',
                        F117: 'LIFESTYLE',
                        F118: 'URBAN FAVORITES',
                        F119: 'FASHION',
                        F120: 'FASHION',
                        F122: 'KIDS STUFF',
                        F124: 'KIDS STUFF',
                        F125: 'KIDS STUFF',
                        F126: 'KIDS STUFF',
                        F128: 'KIDS STUFF',
                        F129: 'LIFESTYLE',
                        F130: 'HOME DECOR',
                        F132: 'DINING',
                        F133: 'SPORTS & OUTDOOR',
                        F134: 'KIDS STUFF',
                        F135: 'LIFESTYLE',
                        F136: 'LIFESTYLE',
                        F139: 'KIDS STUFF',
                        F153: 'DINING',
                        F155: 'FASHION',
                        F156: 'URBAN FAVORITES',
                        F157: 'URBAN FAVORITES',
                        F158: 'LINGERIE & UNDERWEAR',
                        F159: 'FASHION',
                        F160: 'FASHION',
                        F162: 'FASHION',
                        F164: 'FASHION',
                        F165: 'FASHION',
                        FR01: 'REST ROOMS',
                        FR02: 'REST ROOMS',
                        FR03: 'REST ROOMS',
                        FR04: 'REST ROOMS',
                        FFC: 'DINING'
                    },
                    scale: {
                        "FASHION": "#2761ad",
                        "LINGERIE & UNDERWEAR": "#d58aa3",
                        "BEAUTY & SPA": "#ee549f",
                        "URBAN FAVORITES": "#15bbba",
                        "SPORTS & OUTDOOR": "#8864ab",
                        "KIDS STUFF": "#ef4e36",
                        "ENTERTAINMENT": "#e47325",
                        "HOME DECOR": "#a2614f",
                        "LIFESTYLE": "#8a8934",
                        "DINING": "#73bb43",
                        "REST ROOMS": "#6c260f",
                        "SERVICES": "#504d7c",
                        "OTHER": "#c7b789"
                    }
                }]
            },
            onRegionLabelShow: function(e, el, code){
                if (el.html() === '') {
                    e.preventDefault();
                }
            }
        });
    }

    //initProjectionMap();

    function initProjectionMap() {
        // reverse projection map
        var mapProjection,
            markerIndex = 0,
            markersCoords = {};

            mapProjection = new jvm.Map({
                map: 'us_lcc',
                markerStyle: {
                    initial: {
                        fill: 'red'
                    }
                },
                container: $('#projection-map'),
                onMarkerLabelShow: function(e, label, code){
                    mapProjection.label.text(markersCoords[code].lat.toFixed(2)+', '+markersCoords[code].lng.toFixed(2));
                },
                onMarkerClick: function(e, code){
                    mapProjection.removeMarkers([code]);
                    mapProjection.label.hide();
                }
            });

            mapProjection.container.on("click", function(e){
                var latLng = mapProjection.pointToLatLng(e.offsetX, e.offsetY),
                    targetCls = $(e.target).attr('class');

                if (latLng && (!targetCls || (targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1))) {
                    markersCoords[markerIndex] = latLng;
                    mapProjection.addMarker(markerIndex, {latLng: [latLng.lat, latLng.lng]});
                    markerIndex += 1;
                }
            });
    }
}

/* ColVis.min.js */
function colVis() {
    /*! ColVis 1.1.2
 * ©2010-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     ColVis
 * @description Controls for column visibility in DataTables
 * @version     1.1.2
 * @file        dataTables.colReorder.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2015 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

(function(window, document, undefined) {


    var factory = function( $, DataTable ) {
    "use strict";
    
    /**
     * ColVis provides column visibility control for DataTables
     *
     * @class ColVis
     * @constructor
     * @param {object} DataTables settings object. With DataTables 1.10 this can
     *   also be and API instance, table node, jQuery collection or jQuery selector.
     * @param {object} ColVis configuration options
     */
    var ColVis = function( oDTSettings, oInit )
    {
        /* Santiy check that we are a new instance */
        if ( !this.CLASS || this.CLASS != "ColVis" )
        {
            alert( "Warning: ColVis must be initialised with the keyword 'new'" );
        }
    
        if ( typeof oInit == 'undefined' )
        {
            oInit = {};
        }
    
        var camelToHungarian = $.fn.dataTable.camelToHungarian;
        if ( camelToHungarian ) {
            camelToHungarian( ColVis.defaults, ColVis.defaults, true );
            camelToHungarian( ColVis.defaults, oInit );
        }
    
    
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Public class variables
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * @namespace Settings object which contains customisable information for
         *     ColVis instance. Augmented by ColVis.defaults
         */
        this.s = {
            /**
             * DataTables settings object
             *  @property dt
             *  @type     Object
             *  @default  null
             */
            "dt": null,
    
            /**
             * Customisation object
             *  @property oInit
             *  @type     Object
             *  @default  passed in
             */
            "oInit": oInit,
    
            /**
             * Flag to say if the collection is hidden
             *  @property hidden
             *  @type     boolean
             *  @default  true
             */
            "hidden": true,
    
            /**
             * Store the original visibility settings so they could be restored
             *  @property abOriginal
             *  @type     Array
             *  @default  []
             */
            "abOriginal": []
        };
    
    
        /**
         * @namespace Common and useful DOM elements for the class instance
         */
        this.dom = {
            /**
             * Wrapper for the button - given back to DataTables as the node to insert
             *  @property wrapper
             *  @type     Node
             *  @default  null
             */
            "wrapper": null,
    
            /**
             * Activation button
             *  @property button
             *  @type     Node
             *  @default  null
             */
            "button": null,
    
            /**
             * Collection list node
             *  @property collection
             *  @type     Node
             *  @default  null
             */
            "collection": null,
    
            /**
             * Background node used for shading the display and event capturing
             *  @property background
             *  @type     Node
             *  @default  null
             */
            "background": null,
    
            /**
             * Element to position over the activation button to catch mouse events when using mouseover
             *  @property catcher
             *  @type     Node
             *  @default  null
             */
            "catcher": null,
    
            /**
             * List of button elements
             *  @property buttons
             *  @type     Array
             *  @default  []
             */
            "buttons": [],
    
            /**
             * List of group button elements
             *  @property groupButtons
             *  @type     Array
             *  @default  []
             */
            "groupButtons": [],
    
            /**
             * Restore button
             *  @property restore
             *  @type     Node
             *  @default  null
             */
            "restore": null
        };
    
        /* Store global reference */
        ColVis.aInstances.push( this );
    
        /* Constructor logic */
        this.s.dt = $.fn.dataTable.Api ?
            new $.fn.dataTable.Api( oDTSettings ).settings()[0] :
            oDTSettings;
    
        this._fnConstruct( oInit );
        return this;
    };
    
    
    
    ColVis.prototype = {
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Public methods
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * Get the ColVis instance's control button so it can be injected into the
         * DOM
         *  @method  button
         *  @returns {node} ColVis button
         */
        button: function ()
        {
            return this.dom.wrapper;
        },
    
        /**
         * Alias of `rebuild` for backwards compatibility
         *  @method  fnRebuild
         */
        "fnRebuild": function ()
        {
            this.rebuild();
        },
    
        /**
         * Rebuild the list of buttons for this instance (i.e. if there is a column
         * header update)
         *  @method  fnRebuild
         */
        rebuild: function ()
        {
            /* Remove the old buttons */
            for ( var i=this.dom.buttons.length-1 ; i>=0 ; i-- ) {
                this.dom.collection.removeChild( this.dom.buttons[i] );
            }
            this.dom.buttons.splice( 0, this.dom.buttons.length );
            this.dom.groupButtons.splice(0, this.dom.groupButtons.length);
    
            if ( this.dom.restore ) {
                this.dom.restore.parentNode( this.dom.restore );
            }
    
            /* Re-add them (this is not the optimal way of doing this, it is fast and effective) */
            this._fnAddGroups();
            this._fnAddButtons();
    
            /* Update the checkboxes */
            this._fnDrawCallback();
        },
    
    
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Private methods (they are of course public in JS, but recommended as private)
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * Constructor logic
         *  @method  _fnConstruct
         *  @returns void
         *  @private
         */
        "_fnConstruct": function ( init )
        {
            this._fnApplyCustomisation( init );
    
            var that = this;
            var i, iLen;
            this.dom.wrapper = document.createElement('div');
            this.dom.wrapper.className = "ColVis";
    
            this.dom.button = $( '<button />', {
                    'class': !this.s.dt.bJUI ?
                        "ColVis_Button ColVis_MasterButton" :
                        "ColVis_Button ColVis_MasterButton ui-button ui-state-default"
                } )
                .append( '<span>'+this.s.buttonText+'</span>' )
                .bind( this.s.activate=="mouseover" ? "mouseover" : "click", function (e) {
                    e.preventDefault();
                    that._fnCollectionShow();
                } )
                .appendTo( this.dom.wrapper )[0];
    
            this.dom.catcher = this._fnDomCatcher();
            this.dom.collection = this._fnDomCollection();
            this.dom.background = this._fnDomBackground();
    
            this._fnAddGroups();
            this._fnAddButtons();
    
            /* Store the original visibility information */
            for ( i=0, iLen=this.s.dt.aoColumns.length ; i<iLen ; i++ )
            {
                this.s.abOriginal.push( this.s.dt.aoColumns[i].bVisible );
            }
    
            /* Update on each draw */
            this.s.dt.aoDrawCallback.push( {
                "fn": function () {
                    that._fnDrawCallback.call( that );
                },
                "sName": "ColVis"
            } );
    
            /* If columns are reordered, then we need to update our exclude list and
             * rebuild the displayed list
             */
            $(this.s.dt.oInstance).bind( 'column-reorder.dt', function ( e, oSettings, oReorder ) {
                for ( i=0, iLen=that.s.aiExclude.length ; i<iLen ; i++ ) {
                    that.s.aiExclude[i] = oReorder.aiInvertMapping[ that.s.aiExclude[i] ];
                }
    
                var mStore = that.s.abOriginal.splice( oReorder.iFrom, 1 )[0];
                that.s.abOriginal.splice( oReorder.iTo, 0, mStore );
    
                that.fnRebuild();
            } );
    
            $(this.s.dt.oInstance).bind( 'destroy.dt', function () {
                $(that.dom.wrapper).remove();
            } );
    
            // Set the initial state
            this._fnDrawCallback();
        },
    
    
        /**
         * Apply any customisation to the settings from the DataTables initialisation
         *  @method  _fnApplyCustomisation
         *  @returns void
         *  @private
         */
        "_fnApplyCustomisation": function ( init )
        {
            $.extend( true, this.s, ColVis.defaults, init );
    
            // Slightly messy overlap for the camelCase notation
            if ( ! this.s.showAll && this.s.bShowAll ) {
                this.s.showAll = this.s.sShowAll;
            }
    
            if ( ! this.s.restore && this.s.bRestore ) {
                this.s.restore = this.s.sRestore;
            }
    
            // CamelCase to Hungarian for the column groups 
            var groups = this.s.groups;
            var hungarianGroups = this.s.aoGroups;
            if ( groups ) {
                for ( var i=0, ien=groups.length ; i<ien ; i++ ) {
                    if ( groups[i].title ) {
                        hungarianGroups[i].sTitle = groups[i].title;
                    }
                    if ( groups[i].columns ) {
                        hungarianGroups[i].aiColumns = groups[i].columns;
                    }
                }
            }
        },
    
    
        /**
         * On each table draw, check the visibility checkboxes as needed. This allows any process to
         * update the table's column visibility and ColVis will still be accurate.
         *  @method  _fnDrawCallback
         *  @returns void
         *  @private
         */
        "_fnDrawCallback": function ()
        {
            var columns = this.s.dt.aoColumns;
            var buttons = this.dom.buttons;
            var groups = this.s.aoGroups;
            var button;
    
            for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
                button = buttons[i];
    
                if ( button.__columnIdx !== undefined ) {
                    $('input', button).prop( 'checked', columns[ button.__columnIdx ].bVisible );
                }
            }
    
            var allVisible = function ( columnIndeces ) {
                for ( var k=0, kLen=columnIndeces.length ; k<kLen ; k++ )
                {
                    if (  columns[columnIndeces[k]].bVisible === false ) { return false; }
                }
                return true;
            };
            var allHidden = function ( columnIndeces ) {
                for ( var m=0 , mLen=columnIndeces.length ; m<mLen ; m++ )
                {
                    if ( columns[columnIndeces[m]].bVisible === true ) { return false; }
                }
                return true;
            };
    
            for ( var j=0, jLen=groups.length ; j<jLen ; j++ )
            {
                if ( allVisible(groups[j].aiColumns) )
                {
                    $('input', this.dom.groupButtons[j]).prop('checked', true);
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', false);
                }
                else if ( allHidden(groups[j].aiColumns) )
                {
                    $('input', this.dom.groupButtons[j]).prop('checked', false);
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', false);
                }
                else
                {
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', true);
                }
            }
        },
    
    
        /**
         * Loop through the groups (provided in the settings) and create a button for each.
         *  @method  _fnAddgroups
         *  @returns void
         *  @private
         */
        "_fnAddGroups": function ()
        {
            var nButton;
    
            if ( typeof this.s.aoGroups != 'undefined' )
            {
                for ( var i=0, iLen=this.s.aoGroups.length ; i<iLen ; i++ )
                {
                    nButton = this._fnDomGroupButton( i );
                    this.dom.groupButtons.push( nButton );
                    this.dom.buttons.push( nButton );
                    this.dom.collection.appendChild( nButton );
                }
            }
        },
    
    
        /**
         * Loop through the columns in the table and as a new button for each one.
         *  @method  _fnAddButtons
         *  @returns void
         *  @private
         */
        "_fnAddButtons": function ()
        {
            var
                nButton,
                columns = this.s.dt.aoColumns;
    
            if ( $.inArray( 'all', this.s.aiExclude ) === -1 ) {
                for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
                {
                    if ( $.inArray( i, this.s.aiExclude ) === -1 )
                    {
                        nButton = this._fnDomColumnButton( i );
                        nButton.__columnIdx = i;
                        this.dom.buttons.push( nButton );
                    }
                }
            }
    
            if ( this.s.order === 'alpha' ) {
                this.dom.buttons.sort( function ( a, b ) {
                    var titleA = columns[ a.__columnIdx ].sTitle;
                    var titleB = columns[ b.__columnIdx ].sTitle;
    
                    return titleA === titleB ?
                        0 :
                        titleA < titleB ?
                            -1 :
                            1;
                } );
            }
    
            if ( this.s.restore )
            {
                nButton = this._fnDomRestoreButton();
                nButton.className += " ColVis_Restore";
                this.dom.buttons.push( nButton );
            }
    
            if ( this.s.showAll )
            {
                nButton = this._fnDomShowXButton( this.s.showAll, true );
                nButton.className += " ColVis_ShowAll";
                this.dom.buttons.push( nButton );
            }
    
            if ( this.s.showNone )
            {
                nButton = this._fnDomShowXButton( this.s.showNone, false );
                nButton.className += " ColVis_ShowNone";
                this.dom.buttons.push( nButton );
            }
    
            $(this.dom.collection).append( this.dom.buttons );
        },
    
    
        /**
         * Create a button which allows a "restore" action
         *  @method  _fnDomRestoreButton
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomRestoreButton": function ()
        {
            var
                that = this,
                dt = this.s.dt;
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        this.s.restore+
                    '</li>'
                )
                .click( function (e) {
                    for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, that.s.abOriginal[i], false );
                    }
                    that._fnAdjustOpenRows();
                    that.s.dt.oInstance.fnAdjustColumnSizing( false );
                    that.s.dt.oInstance.fnDraw( false );
                } )[0];
        },
    
    
        /**
         * Create a button which allows show all and show node actions
         *  @method  _fnDomShowXButton
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomShowXButton": function ( str, action )
        {
            var
                that = this,
                dt = this.s.dt;
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        str+
                    '</li>'
                )
                .click( function (e) {
                    for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
                    {
                        if (that.s.aiExclude.indexOf(i) === -1)
                        {
                            that.s.dt.oInstance.fnSetColumnVis( i, action, false );
                        }
                    }
                    that._fnAdjustOpenRows();
                    that.s.dt.oInstance.fnAdjustColumnSizing( false );
                    that.s.dt.oInstance.fnDraw( false );
                } )[0];
        },
    
    
        /**
         * Create the DOM for a show / hide group button
         *  @method  _fnDomGroupButton
         *  @param {int} i Group in question, order based on that provided in settings
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomGroupButton": function ( i )
        {
            var
                that = this,
                dt = this.s.dt,
                oGroup = this.s.aoGroups[i];
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        '<label>'+
                            '<input type="checkbox" />'+
                            '<span>'+oGroup.sTitle+'</span>'+
                        '</label>'+
                    '</li>'
                )
                .click( function (e) {
                    var showHide = !$('input', this).is(":checked");
                    if (  e.target.nodeName.toLowerCase() !== "li" )
                    {
                        showHide = ! showHide;
                    }
    
                    for ( var j=0 ; j < oGroup.aiColumns.length ; j++ )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( oGroup.aiColumns[j], showHide );
                    }
                } )[0];
        },
    
    
        /**
         * Create the DOM for a show / hide button
         *  @method  _fnDomColumnButton
         *  @param {int} i Column in question
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomColumnButton": function ( i )
        {
            var
                that = this,
                column = this.s.dt.aoColumns[i],
                dt = this.s.dt;
    
            var title = this.s.fnLabel===null ?
                column.sTitle :
                this.s.fnLabel( i, column.sTitle, column.nTh );
    
            return $(
                    '<li '+(dt.bJUI ? 'class="ui-button ui-state-default"' : '')+'>'+
                        '<label>'+
                            '<input type="checkbox" />'+
                            '<span>'+title+'</span>'+
                        '</label>'+
                    '</li>'
                )
                .click( function (e) {
                    var showHide = !$('input', this).is(":checked");
                    if (  e.target.nodeName.toLowerCase() !== "li" )
                    {
                        if ( e.target.nodeName.toLowerCase() == "input" || that.s.fnStateChange === null )
                        {
                            showHide = ! showHide;
                        }
                    }
    
                    /* Need to consider the case where the initialiser created more than one table - change the
                     * API index that DataTables is using
                     */
                    var oldIndex = $.fn.dataTableExt.iApiIndex;
                    $.fn.dataTableExt.iApiIndex = that._fnDataTablesApiIndex.call(that);
    
                    // Optimisation for server-side processing when scrolling - don't do a full redraw
                    if ( dt.oFeatures.bServerSide )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, showHide, false );
                        that.s.dt.oInstance.fnAdjustColumnSizing( false );
                        if (dt.oScroll.sX !== "" || dt.oScroll.sY !== "" )
                        {
                            that.s.dt.oInstance.oApi._fnScrollDraw( that.s.dt );
                        }
                        that._fnDrawCallback();
                    }
                    else
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, showHide );
                    }
    
                    $.fn.dataTableExt.iApiIndex = oldIndex; /* Restore */
    
                    if ( that.s.fnStateChange !== null )
                    {
                        if ( e.target.nodeName.toLowerCase() == "span" )
                        {
                            e.preventDefault();
                        }
                        that.s.fnStateChange.call( that, i, showHide );
                    }
                } )[0];
        },
    
    
        /**
         * Get the position in the DataTables instance array of the table for this
         * instance of ColVis
         *  @method  _fnDataTablesApiIndex
         *  @returns {int} Index
         *  @private
         */
        "_fnDataTablesApiIndex": function ()
        {
            for ( var i=0, iLen=this.s.dt.oInstance.length ; i<iLen ; i++ )
            {
                if ( this.s.dt.oInstance[i] == this.s.dt.nTable )
                {
                    return i;
                }
            }
            return 0;
        },
    
    
        /**
         * Create the element used to contain list the columns (it is shown and
         * hidden as needed)
         *  @method  _fnDomCollection
         *  @returns {Node} div container for the collection
         *  @private
         */
        "_fnDomCollection": function ()
        {
            return $('<ul />', {
                    'class': !this.s.dt.bJUI ?
                        "ColVis_collection" :
                        "ColVis_collection ui-buttonset ui-buttonset-multi"
                } )
            .css( {
                'display': 'none',
                'opacity': 0,
                'position': ! this.s.bCssPosition ?
                    'absolute' :
                    ''
            } )[0];
        },
    
    
        /**
         * An element to be placed on top of the activate button to catch events
         *  @method  _fnDomCatcher
         *  @returns {Node} div container for the collection
         *  @private
         */
        "_fnDomCatcher": function ()
        {
            var
                that = this,
                nCatcher = document.createElement('div');
            nCatcher.className = "ColVis_catcher";
    
            $(nCatcher).click( function () {
                that._fnCollectionHide.call( that, null, null );
            } );
    
            return nCatcher;
        },
    
    
        /**
         * Create the element used to shade the background, and capture hide events (it is shown and
         * hidden as needed)
         *  @method  _fnDomBackground
         *  @returns {Node} div container for the background
         *  @private
         */
        "_fnDomBackground": function ()
        {
            var that = this;
    
            var background = $('<div></div>')
                .addClass( 'ColVis_collectionBackground' )
                .css( 'opacity', 0 )
                .click( function () {
                    that._fnCollectionHide.call( that, null, null );
                } );
    
            /* When considering a mouse over action for the activation, we also consider a mouse out
             * which is the same as a mouse over the background - without all the messing around of
             * bubbling events. Use the catcher element to avoid messing around with bubbling
             */
            if ( this.s.activate == "mouseover" )
            {
                background.mouseover( function () {
                    that.s.overcollection = false;
                    that._fnCollectionHide.call( that, null, null );
                } );
            }
    
            return background[0];
        },
    
    
        /**
         * Show the show / hide list and the background
         *  @method  _fnCollectionShow
         *  @returns void
         *  @private
         */
        "_fnCollectionShow": function ()
        {
            var that = this, i, iLen, iLeft;
            var oPos = $(this.dom.button).offset();
            var nHidden = this.dom.collection;
            var nBackground = this.dom.background;
            var iDivX = parseInt(oPos.left, 10);
            var iDivY = parseInt(oPos.top + $(this.dom.button).outerHeight(), 10);
    
            if ( ! this.s.bCssPosition )
            {
                nHidden.style.top = iDivY+"px";
                nHidden.style.left = iDivX+"px";
            }
    
            $(nHidden).css( {
                'display': 'block',
                'opacity': 0
            } );
    
            nBackground.style.bottom ='0px';
            nBackground.style.right = '0px';
    
            var oStyle = this.dom.catcher.style;
            oStyle.height = $(this.dom.button).outerHeight()+"px";
            oStyle.width = $(this.dom.button).outerWidth()+"px";
            oStyle.top = oPos.top+"px";
            oStyle.left = iDivX+"px";
    
            document.body.appendChild( nBackground );
            document.body.appendChild( nHidden );
            document.body.appendChild( this.dom.catcher );
    
            /* This results in a very small delay for the end user but it allows the animation to be
             * much smoother. If you don't want the animation, then the setTimeout can be removed
             */
            $(nHidden).animate({"opacity": 1}, that.s.iOverlayFade);
            $(nBackground).animate({"opacity": 0.1}, that.s.iOverlayFade, 'linear', function () {
                /* In IE6 if you set the checked attribute of a hidden checkbox, then this is not visually
                 * reflected. As such, we need to do it here, once it is visible. Unbelievable.
                 */
                if ( $.browser && $.browser.msie && $.browser.version == "6.0" )
                {
                    that._fnDrawCallback();
                }
            });
    
            /* Visual corrections to try and keep the collection visible */
            if ( !this.s.bCssPosition )
            {
                iLeft = ( this.s.sAlign=="left" ) ?
                    iDivX :
                    iDivX - $(nHidden).outerWidth() + $(this.dom.button).outerWidth();
    
                nHidden.style.left = iLeft+"px";
    
                var iDivWidth = $(nHidden).outerWidth();
                var iDivHeight = $(nHidden).outerHeight();
                var iDocWidth = $(document).width();
    
                if ( iLeft + iDivWidth > iDocWidth )
                {
                    nHidden.style.left = (iDocWidth-iDivWidth)+"px";
                }
            }
    
            this.s.hidden = false;
        },
    
    
        /**
         * Hide the show / hide list and the background
         *  @method  _fnCollectionHide
         *  @returns void
         *  @private
         */
        "_fnCollectionHide": function (  )
        {
            var that = this;
    
            if ( !this.s.hidden && this.dom.collection !== null )
            {
                this.s.hidden = true;
    
                $(this.dom.collection).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
                    this.style.display = "none";
                } );
    
                $(this.dom.background).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
                    document.body.removeChild( that.dom.background );
                    document.body.removeChild( that.dom.catcher );
                } );
            }
        },
    
    
        /**
         * Alter the colspan on any fnOpen rows
         */
        "_fnAdjustOpenRows": function ()
        {
            var aoOpen = this.s.dt.aoOpenRows;
            var iVisible = this.s.dt.oApi._fnVisbleColumns( this.s.dt );
    
            for ( var i=0, iLen=aoOpen.length ; i<iLen ; i++ ) {
                aoOpen[i].nTr.getElementsByTagName('td')[0].colSpan = iVisible;
            }
        }
    };
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Static object methods
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Rebuild the collection for a given table, or all tables if no parameter given
     *  @method  ColVis.fnRebuild
     *  @static
     *  @param   object oTable DataTable instance to consider - optional
     *  @returns void
     */
    ColVis.fnRebuild = function ( oTable )
    {
        var nTable = null;
        if ( typeof oTable != 'undefined' )
        {
            nTable = $.fn.dataTable.Api ?
                new $.fn.dataTable.Api( oTable ).table().node() :
                oTable.fnSettings().nTable;
        }
    
        for ( var i=0, iLen=ColVis.aInstances.length ; i<iLen ; i++ )
        {
            if ( typeof oTable == 'undefined' || nTable == ColVis.aInstances[i].s.dt.nTable )
            {
                ColVis.aInstances[i].fnRebuild();
            }
        }
    };
    
    
    ColVis.defaults = {
        /**
         * Mode of activation. Can be 'click' or 'mouseover'
         *  @property activate
         *  @type     string
         *  @default  click
         */
        active: 'click',
    
        /**
         * Text used for the button
         *  @property buttonText
         *  @type     string
         *  @default  Show / hide columns
         */
        buttonText: 'Show / hide columns',
    
        /**
         * List of columns (integers) which should be excluded from the list
         *  @property aiExclude
         *  @type     array
         *  @default  []
         */
        aiExclude: [],
    
        /**
         * Show restore button
         *  @property bRestore
         *  @type     boolean
         *  @default  false
         */
        bRestore: false,
    
        /**
         * Restore button text
         *  @property sRestore
         *  @type     string
         *  @default  Restore original
         */
        sRestore: 'Restore original',
    
        /**
         * Show Show-All button
         *  @property bShowAll
         *  @type     boolean
         *  @default  false
         */
        bShowAll: false,
    
        /**
         * Show All button text
         *  @property sShowAll
         *  @type     string
         *  @default  Restore original
         */
        sShowAll: 'Show All',
    
        /**
         * Position of the collection menu when shown - align "left" or "right"
         *  @property sAlign
         *  @type     string
         *  @default  left
         */
        sAlign: 'left',
    
        /**
         * Callback function to tell the user when the state has changed
         *  @property fnStateChange
         *  @type     function
         *  @default  null
         */
        fnStateChange: null,
    
        /**
         * Overlay animation duration in mS
         *  @property iOverlayFade
         *  @type     integer|false
         *  @default  500
         */
        iOverlayFade: 500,
    
        /**
         * Label callback for column names. Takes three parameters: 1. the
         * column index, 2. the column title detected by DataTables and 3. the
         * TH node for the column
         *  @property fnLabel
         *  @type     function
         *  @default  null
         */
        fnLabel: null,
    
        /**
         * Indicate if the column list should be positioned by Javascript,
         * visually below the button or allow CSS to do the positioning
         *  @property bCssPosition
         *  @type     boolean
         *  @default  false
         */
        bCssPosition: false,
    
        /**
         * Group buttons
         *  @property aoGroups
         *  @type     array
         *  @default  []
         */
        aoGroups: [],
    
        /**
         * Button ordering - 'alpha' (alphabetical) or 'column' (table column
         * order)
         *  @property order
         *  @type     string
         *  @default  column
         */
        order: 'column'
    };
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Static object properties
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Collection of all ColVis instances
     *  @property ColVis.aInstances
     *  @static
     *  @type     Array
     *  @default  []
     */
    ColVis.aInstances = [];
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Constants
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Name of this class
     *  @constant CLASS
     *  @type     String
     *  @default  ColVis
     */
    ColVis.prototype.CLASS = "ColVis";
    
    
    /**
     * ColVis version
     *  @constant  VERSION
     *  @type      String
     *  @default   See code
     */
    ColVis.VERSION = "1.1.2";
    ColVis.prototype.VERSION = ColVis.VERSION;
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Initialisation
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /*
     * Register a new feature with DataTables
     */
    if ( typeof $.fn.dataTable == "function" &&
         typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
         $.fn.dataTableExt.fnVersionCheck('1.7.0') )
    {
        $.fn.dataTableExt.aoFeatures.push( {
            "fnInit": function( oDTSettings ) {
                var init = oDTSettings.oInit;
                var colvis = new ColVis( oDTSettings, init.colVis || init.oColVis || {} );
                return colvis.button();
            },
            "cFeature": "C",
            "sFeature": "ColVis"
        } );
    }
    else
    {
        alert( "Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download");
    }
    
    
    // Make ColVis accessible from the DataTables instance
    $.fn.dataTable.ColVis = ColVis;
    $.fn.DataTable.ColVis = ColVis;
    
    
    return ColVis;
    }; // /factory
    
    
    // Define as an AMD module if possible
    if ( typeof define === 'function' && define.amd ) {
        define( ['jquery', 'datatables'], factory );
    }
    else if ( typeof exports === 'object' ) {
        // Node/CommonJS
        factory( require('jquery'), require('datatables') );
    }
    else if ( jQuery && !jQuery.fn.dataTable.ColVis ) {
        // Otherwise simply initialise as normal, stopping multiple evaluation
        factory( jQuery, jQuery.fn.dataTable );
    }
    
    
    })(window, document);
}

/* DT_bootstrap.js */
function dtBootstrap() {
    /* Default class modification */
    $.extend( $.fn.dataTableExt.oStdClasses, {
        "sWrapper": "dataTables_wrapper"
    } );

    /* API method to get paging information */
    $.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
    {
        return {
            "iStart":         oSettings._iDisplayStart,
            "iEnd":           oSettings.fnDisplayEnd(),
            "iLength":        oSettings._iDisplayLength,
            "iTotal":         oSettings.fnRecordsTotal(),
            "iFilteredTotal": oSettings.fnRecordsDisplay(),
            "iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
            "iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
        };
    }

    /* Bootstrap style pagination control */
    $.extend( $.fn.dataTableExt.oPagination, {
        "bootstrap": {
            "fnInit": function( oSettings, nPaging, fnDraw ) {
                var oLang = oSettings.oLanguage.oPaginate;
                var fnClickHandler = function ( e ) {
                    e.preventDefault();
                    if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                        fnDraw( oSettings );
                    }
                };

                $(nPaging).append(
                    '<ul class="pagination">' +
                    '<li class="page-item prev disabled"><a class="page-link" href="#">&larr; ' + oLang.sFirst + '</a></li>' +
                    '<li class="page-item prev disabled"><a class="page-link" href="#">&larr; '+oLang.sPrevious+'</a></li>'+
                    '<li class="page-item next disabled"><a class="page-link" href="#">' + oLang.sNext + ' &rarr; </a></li>' +
                    '<li class="page-item next disabled"><a class="page-link" href="#">' + oLang.sLast + ' &rarr; </a></li>' +
                    '</ul>'
                );
                var els = $('a', nPaging);
                $(els[0]).bind('click.DT', { action: "first" }, fnClickHandler);
                $(els[1]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
                $(els[2]).bind('click.DT', { action: "next" }, fnClickHandler);
                $(els[3]).bind('click.DT', { action: "last" }, fnClickHandler);
            },

            "fnUpdate": function ( oSettings, fnDraw ) {
                var iListLength = 5;
                var oPaging = oSettings.oInstance.fnPagingInfo();
                var an = oSettings.aanFeatures.p;
                var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

                if ( oPaging.iTotalPages < iListLength) {
                    iStart = 1;
                    iEnd = oPaging.iTotalPages;
                }
                else if ( oPaging.iPage <= iHalf ) {
                    iStart = 1;
                    iEnd = iListLength;
                } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                    iStart = oPaging.iTotalPages - iListLength + 1;
                    iEnd = oPaging.iTotalPages;
                } else {
                    iStart = oPaging.iPage - iHalf + 1;
                    iEnd = iStart + iListLength - 1;
                }

                for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
                    // Remove the middle elements
                    $('li:gt(1)', an[i]).filter(':not(.next)').remove();

                    // Add the new list items and their event handlers
                    for ( j=iStart ; j<=iEnd ; j++ ) {
                        sClass = (j==oPaging.iPage+1) ? 'class="page-item active"' : '';
                        $('<li '+sClass+'><a class="page-link" href="#">'+j+'</a></li>')
                            .insertBefore( $('li.next:first', an[i])[0] )
                            .bind('click', function (e) {
                                e.preventDefault();
                                oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                                fnDraw( oSettings );
                            } );
                    }

                    // Add / remove disabled classes from the static elements
                    if ( oPaging.iPage === 0 ) {
                        $('li.prev', an[i]).addClass('disabled');
                    } else {
                        $('li.prev', an[i]).removeClass('disabled');
                    }

                    if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                        $('li.next', an[i]).addClass('disabled');
                    } else {
                        $('li.next', an[i]).removeClass('disabled');
                    }
                }
            }
        }
    } );


    /*
     * TableTools Bootstrap compatibility
     * Required TableTools 2.1+
     */
    if ( $.fn.DataTable.TableTools ) {
        // Set the classes that TableTools uses to something suitable for Bootstrap
        $.extend( true, $.fn.DataTable.TableTools.classes, {
            "container": "DTTT btn-group",
            "buttons": {
                "normal": "btn btn-primary",
                "disabled": "disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu",
                "buttons": {
                    "normal": "",
                    "disabled": "disabled"
                }
            },
            "print": {
                "info": "DTTT_print_info modal"
            },
            "select": {
                "row": "active"
            }
        } );

        // Have the collection use a bootstrap compatible dropdown
        $.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
            "collection": {
                "container": "ul",
                "button": "li",
                "liner": "a"
            }
        } );
    }
}

/* datatables.init.js */
function dataTablesInit() {
    (function ($, window) {
        function fnInitCompleteCallback(that) {
            var p = that.parents('.dataTables_wrapper').first();
            var l = p.find('.row').find('label');

            l.each(function(index, el) {
                var iw = $("<div>").addClass('col-md-8').appendTo($(el).parent());
                $(el).parent().addClass('form-group margin-none').parent().addClass('form-horizontal');
                $(el).find('input, select').addClass('form-control').removeAttr('size').appendTo(iw);
                $(el).addClass('col-md-4 control-label');
            });

            var s = p.find('select');
                    s.addClass('selectpicker').selectpicker();

            //$(".bootstrap-select .dropdown-toggle .filter-option").append("<span class='caret'></span>");
            var dtId = that.parents('.dataTables_wrapper').attr("id");
                $("#"+dtId).find(".bootstrap-select .dropdown-toggle").append("<span class='caret'></span>");
        }

        $(".tableTools").DataTable({
            "searching": true,
            "ordering": true,
            "processing": true,
            "responsive": true,
            "paging": true,
            "select": true,
            "dom": "<'row d-flex flex-row justify-content-between separator bottom table-tools'<'col-md-4'B><'col-md-4'l><'col-md-4'f>r>t<'row row-pagination'<'col-md-6'i><'col-md-6'p>>",
            "pageLength": 10,
            "columnDefs": [
                { 'bSortable': false, 'aTargets': [ 0 ] }
            ],
            "buttons": [
                'copy', 'excel', 'pdf'
            ],
            "fnInitComplete": function () {
                fnInitCompleteCallback(this);
            }
        });

        //var hiddenColumnsTable = $(".hiddenColumns").DataTable({
        $(".hiddenColumns").DataTable({
            "paging": true,
            "searching": true,
            "ordering": true,
            "searching": true,
            "pageLength": 10,
            "dom": "<'row d-flex flex-row justify-content-between separator bottom'<'col-md-4'B><'col-md-4'l><'col-md-4'f>r>t<'row row-pagination'<'col-md-6'i><'col-md-6'p>>",
            "buttons": ['colvis']
        });
        
        // select-column on B
        /* var $selectColumn = $(".select-column"),
            $toggleColumn = $(".select-toggle-column");

            if ( $selectColumn.length ) {
                $selectColumn.append( $toggleColumn );
            }

            $("body").on("change", "#select-toggle-vis", function() {
                var $this          = $(this),
                    columnSelected = $this.find(":selected").data("column");

                    // get the column API object
                    var column = hiddenColumnsTable.column( columnSelected );
                        
                        // toggle the visibility
                        column.visible( ! column.visible() );
                        if ( typeof columnSelected === "undefined" ) {
                            hiddenColumnsTable.columns.adjust().draw();
                            //hiddenColumnsTable.ajax.reload({}, false);
                        }
            }); */

    })(jQuery, window);
}

/* mixitup.init.js */
function mixItUpInit() {
    $(function() {
        //var containerEl = document.querySelector('.mixitup');
        //$('.mixitup').mixitup({ showOnLoad: 'mixit-filter-1' });
        if ( $('.mixitup').length > 0 ) {
            mixitup('.mixitup', {
                load: {
                    sort: 'order:asc'
                },
                animation: {
                    effects: 'fade',
                    duration: 700
                },
                classNames: {
                    block: 'button-filters',
                    elementFilter: 'filter'
                },
                selectors: {
                    target: '.mix-target'
                }
            });
        }
    });
}

/* fuelux-checkbox */
function fueluxCheckBoxInit() {
    /*
     * Fuel UX Checkbox
     * https://github.com/ExactTarget/fuelux
     *
     * Copyright (c) 2012 ExactTarget
     * Licensed under the MIT license.
     */

    (function($){

        var old = $.fn.checkbox;

        // CHECKBOX CONSTRUCTOR AND PROTOTYPE

        var Checkbox = function (element, options) {

            this.$element = $(element);
            this.options = $.extend({}, $.fn.checkbox.defaults, options);

            // cache elements
            this.$label = this.$element.parent();
            this.$icon = this.$label.find('i');
            this.$chk = this.$label.find('input[type=checkbox]');

            // set default state
            this.setState(this.$chk);

            // handle events
            this.$chk.on('change', $.proxy(this.itemchecked, this));
        };

        Checkbox.prototype = {

            constructor: Checkbox,

            setState: function ($chk) {
                $chk = $chk || this.$chk;

                var checked = $chk.is(':checked');
                var disabled = !!$chk.prop('disabled');

                // reset classes
                this.$icon.removeClass('checked disabled');

                // set state of checkbox
                if (checked === true) {
                    this.$icon.addClass('checked');
                }
                if (disabled === true) {
                    this.$icon.addClass('disabled');
                }
            },

            enable: function () {
                this.$chk.attr('disabled', false);
                this.$icon.removeClass('disabled');
            },

            disable: function () {
                this.$chk.attr('disabled', true);
                this.$icon.addClass('disabled');
            },

            toggle: function () {
                this.$chk.click();
            },

            itemchecked: function (e) {
                var chk = $(e.target);
                this.setState(chk);
            },

            check: function () {
                this.$chk.prop('checked', true);
                this.setState(this.$chk);
            },

            uncheck: function () {
                this.$chk.prop('checked', false);
                this.setState(this.$chk);
            },

            isChecked: function () {
                return this.$chk.is(':checked');
            }
        };


        // CHECKBOX PLUGIN DEFINITION

        $.fn.checkbox = function (option) {
            var args = Array.prototype.slice.call( arguments, 1 );
            var methodReturn;

            var $set = this.each(function () {
                var $this   = $( this );
                var data    = $this.data('checkbox');
                var options = typeof option === 'object' && option;

                if( !data ) $this.data('checkbox', (data = new Checkbox(this, options)));
                if( typeof option === 'string' ) methodReturn = data[ option ].apply( data, args );
            });

            return ( methodReturn === undefined ) ? $set : methodReturn;
        };

        $.fn.checkbox.defaults = {};

        $.fn.checkbox.Constructor = Checkbox;

        $.fn.checkbox.noConflict = function () {
            $.fn.checkbox = old;
            return this;
        };


        // CHECKBOX DATA-API

        $(function () {
            $('.checkbox-custom > input[type=checkbox]').each(function() {
                var $this = $(this);

                    if ($this.data('checkbox')) return;
                        $this.checkbox($this.data());
            });
        });

    })(jQuery);
}

/* events-carousel.init.js */
function eventsCarouselInit() {
    //$(function() {
        //$("#events-carousel").owlCarousel();
        /* $("#events-carousel").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        }); */
        //$("#events-speakers").owlCarousel();
        /* $("#events-speakers").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        }); */
        if ( $(".events-tns").length > 0 ) {
            var eventsSlider = tns({
                  container: ".events-tns",
                  items: 1,
                  mouseDrag: true,
                  slideBy: "page",
                  swipeAngle: false,
                  speed: 500,
                  nav: true,
                  navPosition: "bottom",
                  navAsThumbnails: false
            });
        }

        if ( $(".speakers-tns").length > 0 ) {
            var speakerSlider = tns({
                  container: ".speakers-tns",
                  items: 1,
                  mouseDrag: true,
                  slideBy: "page",
                  swipeAngle: false,
                  speed: 500,
                  nav: true,
                  navPosition: "bottom",
                  navAsThumbnails: false
            });
        }
    //});
}

/* gridalicious.init.js */
function gridaliciousInit() {
    (function($) {
        // $('[data-toggle="gridalicious"]')
        $(".gridalicious").each(function(){
            var $that = $(this);
            
                $that.removeClass('hide2');

                $that.gridalicious({
                    gutter: 13, // $that.attr('data-gridalicious-gutter') || 
                    width: 200, // $that.attr('data-gridalicious-width') ? parseInt($that.attr('data-gridalicious-width')) : 
                    animate: true,
                    selector: '.widget'
                });
        });
    })(jQuery);
}

/* prettyphoto.init.js */
function prettyPhotoInit() {
    (function($) {
        $("body").on("click", "a[rel^='prettyPhoto']", function(e) {
            e.preventDefault();

            $("a[rel^='prettyPhoto']").prettyPhoto();
        });
    })(jQuery);
}

/* jquery.bootpag.init.js */
function jqueryBootpagInit() {
    /*
     * JQuery Pagination Examples
     */
    $('.jquery-bootpag-pagination').bootpag({
        total: 23,
        page: 2,
        maxVisible: 10
    }).on('page', function(event, num){
        $(".jquery-bootpag-content").html("Page " + num); // or some ajax content loading ...
    });
}

/* bootstrap-select.init.js */
function bootstrapSelectInit() {
    if ( $('.selectpicker').length )
        $('.selectpicker').selectpicker();
}

/* tables-classic.init.js */
function tablesClassicInit() {
    (function($) {
        /* Table select / checkboxes utility */
        $('.checkboxs thead :checkbox').on("change", function() {
            if ( $(this).is(':checked') ) {
                $('.checkboxs tbody :checkbox').prop('checked', true).trigger('change').parent().addClass('checked');
                $('.checkboxs tbody :checkbox').prop('checked', true).closest(".checkbox-custom.checked").find(".fa").addClass("checked");
                $('.checkboxs tbody tr.selectable').addClass('selected');
                $('.checkboxs_actions').removeClass('hide').show();
            }
            else {
                $('.checkboxs tbody :checkbox').prop('checked', false).trigger('change').parent().removeClass('checked');
                $('.checkboxs tbody :checkbox').prop('checked', false).closest(".checkbox-custom:not(.checked)").find(".fa").removeClass("checked");
                $('.checkboxs tbody tr.selectable').removeClass('selected');
                $('.checkboxs_actions').hide();
            }
        });

        $('.checkboxs tbody tr').addClass('selectable');
        $('.checkboxs tbody :checked').each(function(){
            $(this).parent('tr').addClass('selected');
        });

        $('.checkboxs tbody').on('click', 'tr.selectable', function(e) {
            var $this   = $(this),
                $label  = $this.find(".checkbox-custom"),
                c       = $this.find(':checkbox'),
                s       = $(e.srcElement);

            if ($this.nodeName === 'INPUT') {
                if (c.is(':checked'))
                    $(this).addClass('selected');
                else
                    $(this).removeClass('selected');
            }
            else if ($this.nodeName != 'TD' && $this.nodeName != 'TR' && $this.nodeName != 'DIV') {
                return true;
            }
            else {
                if ( c.is(':checked') ) {
                    c.prop('checked', false).trigger('change').parent().removeClass('checked');
                    $(this).removeClass('selected');
                }
                else
                {
                    c.prop('checked', true).trigger('change').parent().addClass('checked');
                    $(this).addClass('selected');
                }
            }
            if ($('.checkboxs tr.selectable :checked').length == $('.checkboxs tr.selectable :checkbox').length)
                $('.checkboxs thead :checkbox').prop('checked', true).parent().addClass('checked');
            else
                $('.checkboxs thead :checkbox').prop('checked', false).parent().removeClass('checked');

            if ($('.checkboxs tr.selectable :checked').length >= 1)
                $('.checkboxs_actions').removeClass('hide').show();
            else
                $('.checkboxs_actions').hide();
        });

        if ($('.checkboxs tbody :checked').length == $('.checkboxs tbody :checkbox').length && $('.checkboxs tbody :checked').length)
            $('.checkboxs thead :checkbox').prop('checked', true).parent().addClass('checked');

        if ($('.checkboxs tbody :checked').length)
            $('.checkboxs_actions').removeClass('hide').show();

        $('.radioboxs tbody tr.selectable').on("click", function(e){
            var c = $(this).find(':radio');
            if (e.srcElement.nodeName == 'INPUT')
            {
                if (c.is(':checked'))
                    $(this).addClass('selected');
                else
                    $(this).removeClass('selected');
            }
            else if (e.srcElement.nodeName != 'TD' && e.srcElement.nodeName != 'TR')
            {
                return true;
            }
            else
            {
                if (c.is(':checked'))
                {
                    c.attr('checked', false);
                    $(this).removeClass('selected');
                }
                else
                {
                    c.attr('checked', true);
                    $('.radioboxs tbody tr.selectable').removeClass('selected');
                    $(this).addClass('selected');
                }
            }
        });

        // sortable tables
        if ($( ".js-table-sortable" ).length) {
            $( ".js-table-sortable" ).sortable(
                {
                    placeholder: "ui-state-highlight",
                    items: "tbody tr",
                    handle: ".js-sortable-handle",
                    forcePlaceholderSize: true,
                    helper: function(e, ui)
                    {
                        ui.children().each(function() {
                            $(this).width($(this).width());
                        });
                        return ui;
                    },
                    start: function(event, ui)
                    {
                        ui.placeholder.html('<td colspan="' + $(this).find('tbody tr:first td').length + '">&nbsp;</td>');
                    }
                });
        }
    })(jQuery);
}

/* ui.init.js */
function uiInit() {
    // Popover
    $('[data-toggle="popover"]').popover();
}

/* notify.init.js */
function notyfyInit() {
    $('[data-toggle="notyfy"]').on("click", function() {
        var self = $(this);
        if(self.data('layout') == 'inline')
        {
            $(self.data('custom')).notyfy(
                {
                    text: text[self.data('type')],
                    type: self.data('type'),
                    dismissQueue: true,
                    buttons: (self.data('type') != 'confirm') ? false : [{
                            addClass: 'btn btn-success btn-small glyphicons btn-icon ok_2',
                            text: '<i></i> Ok',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                                $(self.data('custom')).notyfy({
                                    force: true,
                                    text: 'You clicked "<strong>Ok</strong>" button.',
                                    type: 'success'
                                });
                            }
                        }, {
                            addClass: 'btn btn-danger btn-small glyphicons btn-icon remove_2',
                            text: 'Cancel',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                                $(self.data('custom')).notyfy({
                                    force: true,
                                    text: 'You clicked "Cancel" button',
                                    type: 'error'
                                });
                            }
                        }]
                });
            return false;
        }

        notyfy({
            text: notification[self.data('type')],
            type: self.data('type'),
            dismissQueue: true,
            layout: self.data('layout'),
            buttons: (self.data('type') != 'confirm') ? false : [{
                    addClass: 'btn btn-success btn-small btn-icon glyphicons ok_2',
                    text: '<i></i> Ok',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        notyfy({
                            force: true,
                            text: 'You clicked "<strong>Ok</strong>" button',
                            type: 'success',
                            layout: self.data('layout')
                        });
                    }
                }, {
                    addClass: 'btn btn-danger btn-small btn-icon glyphicons remove_2',
                    text: '<i></i> Cancel',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        notyfy({
                            force: true,
                            text: '<strong>You clicked "Cancel" button<strong>',
                            type: 'error',
                            layout: self.data('layout')
                        });
                    }
                }]
        });
        return false;
    });

    var notification = [];

    notification['alert'] = 'Best check yo self, you\'<strong>re not looking too good</strong>.';
    notification['primary'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    notification['error'] = '<strong>Change a few things up and try submitting again.</strong> This Error message.';
    notification['success'] = 'You <strong>successfully</strong> read this important alert message.';
    notification['information'] = 'This alert needs your attention, but it\'s not super <strong>important</strong>.';
    notification['warning'] = '<strong>Warning!</strong> Best check yo self, you\'re not looking too good.';
    notification['confirm'] = 'Do you want to continue?';
}

/* gritter.init.js */
function gritterInit() {
    $('.gritter-add-sticky').on("click", function() {
        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a sticky notice!',
            // (string | mandatory) the text inside the notification
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });

        // You can have it return a unique id, this can be used to manually remove it later using
        /*
         setTimeout(function(){

         $.gritter.remove(unique_id, {
         fade: true,
         speed: 'slow'
         });

         }, 6000)
         */
        return false;
    });

    $('.gritter-add-regular').on("click", function() {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a regular notice!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: ''
        });

        return false;

    });

    $('.gritter-add-primary').on("click", function() {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a primary notice!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'gritter-primary'
        });

        return false;

    });

    $('.gritter-add-max').on("click", function() {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice with a max of 3 on screen at one time!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function(){
                if($('.gritter-item-wrapper').length == 3)
                {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });
        return false;
    });

    $('.gritter-add-without-image').on("click", function() {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice without an image!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.'
        });
        return false;
    });

    $('.gritter-add-white').on("click", function() {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a light notification',
            // (string | mandatory) the text inside the notification
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });
        return false;
    });
}

/* modals.bootbox.init.js */
function modalsBootBoxInit() {
    $('#modals-bootbox-alert').on("click", function() {
        bootbox.alert("Hello World!", function(result) {
            $.gritter.add({
                title: 'Callback!',
                text: "I'm just a BootBox Alert callback!"
            });
        });
    });
    $('#modals-bootbox-confirm').on("click", function() {
        bootbox.confirm("Are you sure?", function(result) {
            $.gritter.add({
                title: 'Callback!',
                text: "BootBox Confirm Callback with result: "+ result
            });
        });
    });
    $('#modals-bootbox-prompt').on("click", function() {
        bootbox.prompt("What is your name?", function(result) {
            if (result === null) {
                $.gritter.add({
                    title: 'Callback!',
                    text: "BootBox Prompt Dismissed!"
                });
            } else {
                $.gritter.add({
                    title: 'Hi ' + result,
                    text: "BootBox Prompt Callback with result: "+ result
                });
            }
        });
    });
    $('#modals-bootbox-custom').on("click", function() {
        bootbox.dialog({
            message: "I am a custom dialog",
            title: "Custom title",
            buttons: {
                success: {
                    label: "Success!",
                    className: "btn-success",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Great success"
                        });
                    }
                },
                danger: {
                    label: "Danger!",
                    className: "btn-danger",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Uh oh, look out!"
                        });
                    }
                },
                main: {
                    label: "Click ME!",
                    className: "btn-primary",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Primary button!"
                        });
                    }
                }
            },
            onShown: function(e) {
                $(e.currentTarget).addClass("bootbox-custom");
            }
        });
    });

    
}

/* wysihtml5.init.js */
function wysiHTML5() {
    (function($) {
        var $textarea = $("textarea.wysihtml5");

            /* wysihtml5 */
            if ( $textarea.length > 0 )
                $textarea.wysihtml5();
                $textarea.css("display", "block");
    })(jQuery);
}

/* form-wizards.init.js */
function formWizardsInit() {
    $(function() {
        var bWizardTabClass = '';
        $('.wizard.wizard-design').each(function()
        {
            if ($(this).is('#rootwizard'))
                bWizardTabClass = 'bwizard-steps';
            else
                bWizardTabClass = '';

            var wiz = $(this);

            $(this).bootstrapWizard(
                {
                    onNext: function(tab, navigation, index)
                    {
                        if(index==1)
                        {
                            // Make sure we entered the title
                            if(!wiz.find('#inputTitle').val()) {
                                alert('You must enter the product title');
                                wiz.find('#inputTitle').trigger("focus");
                                return false;
                            }
                        }
                    },
                    onLast: function(tab, navigation, index)
                    {
                        // Make sure we entered the title
                        if(!wiz.find('#inputTitle').val()) {
                            alert('You must enter the product title');
                            wiz.find('#inputTitle').trigger("focus");
                            return false;
                        }
                    },
                    onTabClick: function(tab, navigation, index)
                    {
                        // Make sure we entered the title
                        if(!wiz.find('#inputTitle').val()) {
                            alert('You must enter the product title');
                            wiz.find('#inputTitle').trigger("focus");
                            return false;
                        }
                    },
                    onTabShow: function(tab, navigation, index)
                    {
                        var $total = navigation.find('li:not(.status)').length;
                        var $current = index+1;
                        var $percent = ($current/$total) * 100;

                        if (wiz.find('.progress-bar').length)
                        {
                            wiz.find('.progress-bar').css({width:$percent+'%'});
                            wiz.find('.progress-bar')
                                .find('.step-current').html($current)
                                .parent().find('.steps-total').html($total)
                                .parent().find('.steps-percent').html(Math.round($percent) + "%");
                        }

                        // update status
                        if (wiz.find('.step-current').length) wiz.find('.step-current').html($current);
                        if (wiz.find('.steps-total').length) wiz.find('.steps-total').html($total);
                        if (wiz.find('.steps-complete').length) wiz.find('.steps-complete').html(($current-1));

                        // mark all previous tabs as complete
                        navigation.find('li:not(.status)').removeClass('primary');
                        navigation.find('li:not(.status):lt('+($current-1)+')').addClass('primary');

                        // If it's the last tab then hide the last button and show the finish instead
                        if($current >= $total) {
                            wiz.find('.pagination .next').hide();
                            wiz.find('.pagination .finish').show();
                            wiz.find('.pagination .finish').removeClass('disabled');
                        } else {
                            wiz.find('.pagination .next').show();
                            wiz.find('.pagination .finish').hide();
                        }
                    },
                    tabClass: bWizardTabClass,
                    nextSelector: '.next',
                    previousSelector: '.previous',
                    firstSelector: '.first',
                    lastSelector: '.last'
                });

            wiz.find('.finish').on("click", function()
            {
                alert('Finished!, Starting over!');
                wiz.find("a[data-toggle*='tab']:first").trigger('click');
            });
        });
    });
}

/* widget-collapsible.init.js */
function widgetCollapsibleInit() {
    (function($) {
        $('.widget[data-toggle="collapse-widget"] .widget-body')
            .on('show.bs.collapse', function(){
                $(this).parents('.widget:first').attr('data-collapse-closed', "false");
            })
            .on('shown.bs.collapse', function(){
                setTimeout(function(){ $(window).on("resize"); }, 500);
            })
            .on('hidden.bs.collapse', function(){
                $(this).parents('.widget:first').attr('data-collapse-closed', "true");
            });

        $('.widget[data-toggle="collapse-widget"]').each(function()
        {
            // append toggle button
            if (!$(this).find('.widget-head > .collapse-toggle').length)
                $('<span class="collapse-toggle"></span>').appendTo($(this).find('.widget-head'));

            // make the widget body collapsible
            $(this).find('.widget-body').not('.collapse').addClass('collapse');

            // verify if the widget should be opened
            if ($(this).attr('data-collapse-closed') !== "true")
                $(this).find('.widget-body').addClass('in');

            // bind the toggle button
            $(this).find('.collapse-toggle').on('click', function(){
                $(this).parents('.widget:first').find('.widget-body').collapse('toggle');
            });
        });
    })(jQuery);
}

/* widget-progress.init.js */
function widgetProgressInit() {
    (function($) {
        $('#widget-progress-bar .progress-bar').width("50%");
        setInterval(function(){
            var w = mt_rand(30, 100);
            $('#widget-progress-bar .steps-percent').html(w + "%");
            $('#widget-progress-bar .progress-bar').width(w + "%");
        }, 2000);
    })(jQuery);
}

/* range-sliders-init.js */
function rangeSlidersInit() {
    $(function() {
        /* jQRangeSliders */

        // regular Range Slider
        $("#rangeSlider").rangeSlider();

        // edit Range Slider
        $("#rangeSliderEdit").editRangeSlider();

        // date Range Slider
        $("#rangeSliderDate").dateRangeSlider();

        // Range Slider without Arrows
        $("#rangeSliderWArrows").rangeSlider({ arrows: false });

        // Range Slider Formatter
        $("#rangeSliderFormatter").rangeSlider({
            formatter:function(val){
                var value = Math.round(val * 5) / 5,
                    decimal = value - Math.round(val);
                return "$" + (decimal == 0 ? value.toString() + ".0" : value.toString());
            }
        });


        // regular Range Slider
        $("#rangeSlider").rangeSlider();

        // edit Range Slider
        $("#rangeSliderEdit").editRangeSlider();

        // date Range Slider
        $("#rangeSliderDate").dateRangeSlider();

        // Range Slider without Arrows
        $("#rangeSliderWArrows").rangeSlider({ arrows: false });

        // Range Slider Formatter
        $("#rangeSliderFormatter").rangeSlider({
            formatter:function(val){
                var value = Math.round(val * 5) / 5,
                    decimal = value - Math.round(val);
                return "$" + (decimal == 0 ? value.toString() + ".0" : value.toString());
            }
        });

        // Range Slider Ruler
        $("#rangeSliderRuler").rangeSlider({
            scales: [
                // Primary scale
                {
                    first: function(val){ return val; },
                    next: function(val){ return val + 10; },
                    stop: function(val){ return false; },
                    label: function(val){ return val; },
                    format: function(tickContainer, tickStart, tickEnd){
                        tickContainer.addClass("myCustomClass");
                    }
                },
                // Secondary scale
                {
                    first: function(val){ return val; },
                    next: function(val){
                        if (val % 10 === 9){
                            return val + 2;
                        }
                        return val + 1;
                    },
                    stop: function(val){ return false; },
                    label: function(){ return null; }
                }
            ]
        });

        // Date Range Slider Ruler
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        $("#rangeSliderRulerDate").dateRangeSlider({
            bounds: {min: new Date(2012, 0, 1), max: new Date(2012, 11, 31, 12, 59, 59)},
            defaultValues: {min: new Date(2012, 1, 10), max: new Date(2012, 4, 22)},
            scales: [{
                first: function(value){ return value; },
                end: function(value) {return value; },
                next: function(value){
                    var next = new Date(value);
                    return new Date(next.setMonth(value.getMonth() + 1));
                },
                label: function(value){
                    return months[value.getMonth()];
                },
                format: function(tickContainer, tickStart, tickEnd){
                    tickContainer.addClass("myCustomClass");
                }
            }]
        });

        // Range Slider Step
        $("#rangeSliderStep").rangeSlider({step: 10});

        // Range Slider Wheel Zoom
        $("#rangeSliderWheelZoom").rangeSlider({wheelMode: "zoom"});

        // Range Slider Wheel Scroll
        $("#rangeSliderWheelScroll").rangeSlider({wheelMode: "scroll", wheelSpeed: 30});
    });
}

/* jqueryui-sliders.init.js */
function jqueryUiSlidersInit() {
    /*
     * Helper function for JQueryUI Sliders Create event
     */
    function JQSliderCreate() {
        $(this)
            .removeClass('ui-corner-all ui-widget-content')
            .wrap('<span class="ui-slider-wrap"></span>')
            .find('.ui-slider-handle')
            .removeClass('ui-corner-all ui-state-default');
    }

    $(function() {
        /*
         * JQueryUI Slider: Default slider
         */
        if ($('.slider-single').length > 0) {
            $( ".slider-single" ).slider({
                create: JQSliderCreate,
                value: 10,
                animate: true,
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
        }

        /*
         * JQueryUI Slider: Multiple Vertical Sliders
         */
        $( ".sliders-vertical > span" ).each(function() {
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
                create: JQSliderCreate,
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical",
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
        });

        /*
         * JQueryUI Slider: Range Slider
         */
        if ( $('.range-slider').length > 0 ) {
            $( ".range-slider .slider" ).each(function() {
                /* var t = $(this).parent(),
                    i = t.find('input'),
                    min = $(this).data('min') || 0,
                    max = $(this).data('max') || 500,
                    values = $(this).data('values') ? $(this).data('values').split(',') : [i.first().val(), i.last().val() || max];

                    $(this).slider({
                        create: JQSliderCreate,
                        range: true,
                        min: min,
                        max: max,
                        values: values,
                        slide: function( event, ui ) {
                            if (i.length == 1)
                                t.find(".amount").val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
                            else
                                i.each(function(k,v){ $(i[k]).val(ui.values[k]); });
                        }
                    });

                    if (i.length == 1)
                        t.find(".amount").val( $(this).slider( "values", 0 ) + " - " + $(this).slider( "values", 1 ) ); */
                var $this   = $(this),
                    t       = $this.parent(),
                    i       = t.find("input");

                    $this.slider({
                        range   : true,
                        min     : 0,
                        max     : 500,
                        values  : [ 75, 300 ],
                        slide   : function( event, ui ) {
                            $("#amount").val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                        }
                    });

                    $("#amount").val( "$" + $this.slider( "values", 0 ) + " - $" + $this.slider( "values", 1 ) );
            });
        }

        /*
         * JQueryUI Slider: Snap to Increments
         */
        if ($('.increments-slider').length > 0) {
            $( ".increments-slider .slider" ).slider({
                create: JQSliderCreate,
                value:100,
                min: 0,
                max: 500,
                step: 50,
                slide: function( event, ui ) {
                    $( ".increments-slider .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".increments-slider .amount" ).val( "$" + $( ".increments-slider .slider" ).slider( "value" ) );
        }

        /*
         * JQueryUI Slider: Vertical Range Slider
         */
        if ($('.vertical-range-slider').length > 0) {
            $( ".vertical-range-slider .slider" ).slider({
                create: JQSliderCreate,
                orientation: "vertical",
                range: true,
                min: 0,
                max: 500,
                values: [ 100, 400 ],
                slide: function( event, ui ) {
                    $( ".vertical-range-slider .amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".vertical-range-slider .amount" ).val( "$" + $( ".vertical-range-slider .slider" ).slider( "values", 0 ) +
                " - $" + $( ".vertical-range-slider .slider" ).slider( "values", 1 ) );
        }

        /*
         * JQueryUI Slider: Range fixed minimum
         */
        if ($('.slider-range-min').length > 0) {
            $( ".slider-range-min .slider" ).slider({
                create: JQSliderCreate,
                range: "min",
                value: 150,
                min: 1,
                max: 700,
                slide: function( event, ui ) {
                    $( ".slider-range-min .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".slider-range-min .amount" ).val( "$" + $( ".slider-range-min .slider" ).slider( "value" ) );
        }

        /*
         * JQueryUI Slider: Range fixed maximum
         */
        if ($('.slider-range-max').length > 0) {
            $( ".slider-range-max .slider" ).slider({
                create: JQSliderCreate,
                range: "max",
                min: 1,
                max: 700,
                value: 150,
                slide: function( event, ui ) {
                    $( ".slider-range-max .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".slider-range-max .amount" ).val( "$" + $( ".slider-range-max .slider" ).slider( "value" ) );
        }
    });
}

/* flotchart-simple-01.init.js */
function flotchartSimpleInit() {
    $(function() {
        if ( $("#chart_simple_001").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_simple_001 = {
                // data
                data: {
                    d1: [],
                    d2: []
                },
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        lines: {
                            show: true,
                            fill: false,
                            lineWidth: 2,
                            steps: false
                        },
                        points: {
                            show:true,
                            radius: 5,
                            lineWidth: 3,
                            fill: true,
                            fillColor: "#000"
                        }
                    },
                    xaxis: {
                        tickColor: 'transparent',
                        tickDecimals: 2,
                        tickSize: 2
                    },
                    yaxis: {
                        tickSize: 1000
                    },
                    legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                    shadowSize: 0,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.3",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_simple_001",
                // initialize
                init: function() {
                    // this.options.colors = ["#72af46", "#466baf"];
                    this.options.colors = [successColor, primaryColor];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    var that = this;

                    if (this.plot == null) {
                        this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                        this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                    }
                    this.plot = $.plot(
                        $(placeholder),
                        [{
                            label: "Data 1",
                            data: this.data.d1,
                            lines: { fill: 0.05 },
                            points: { fillColor: "#fff" }
                        },
                        {
                            label: "Data 2",
                            data: this.data.d2,
                            lines: { fill: 0.1 },
                            points: { fillColor: that.options.colors[1] }
                        }], this.options
                    );
                }
            };

            // uncomment to init on load, commented to suppress console error
            // charts.chart_simple_001.init();
        }

        // use with tabs
        $('a[href="#chart-simple-lines-001"]').on('shown.bs.tab', function(){
            if (charts.chart_simple_001.plot == null)
                charts.chart_simple_001.init();
        });

        $('body').on('click', '.btn-group a[href="#chart-simple-lines-001"]', function(){
            $(this).parent().find('[data-bs-toggle]').removeClass('active');
            $(this).addClass('active');
        });
    });
}

/* flotchart-simple-bars.init.js */
function flotchartSimpleBarsInit() {
    (function($) {
        if ( $("#chart_simple_bars_001").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_simple_bars_001 = {
                // data
                data: {
                    d1: [],
                    d2: []
                },
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        bars: {
                            show: true,
                            barWidth: .65,
                            fill: 1,
                            align: 'center'
                        },
                        shadowSize: 0
                    },
                    xaxis: {
                        tickColor: 'transparent',
                        tickDecimals: 2,
                        tickSize: 2
                    },
                    yaxis: {
                        tickSize: 1000
                    },
                    legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                    shadowSize: 0,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.3",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_simple_bars_001",
                // initialize
                init: function() {
                    this.options.colors = [successColor, primaryColor];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    if (this.plot == null)
                    {
                        this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                        this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                    }
                    this.plot = $.plot(
                        $(this.placeholder),
                        [{
                            label: "Data 1",
                            data: this.data.d1,
                            // bars: { lineWidth: 0 }
                        },
                            {
                                label: "Data 2",
                                data: this.data.d2,
                                // bars: { lineWidth: 0 }
                            }], this.options);
                }
            };

            // uncomment to init on load
            charts.chart_simple_bars.init();

            // use with tabs
            /* $('a[href="#chart-simple-bars-001"]').on('shown.bs.tab', function(){
             if (charts.chart_simple_bars_001.plot == null)
             charts.chart_simple_bars_001.init();
             });

             $('.btn-group [data-bs-toggle="tab"]').on('show.bs.tab', function(){
             $(this).parent().find('[data-toggle]').removeClass('active');
             $(this).addClass('active');
             });*/

            // use with tabs
            $('a[href="#chart-simple-bars-001"]').on('shown.bs.tab', function(){
                if (charts.chart_simple_bars_001.plot == null)
                    charts.chart_simple_bars_001.init();
            });

            $('body').on('click', '.btn-group a[href="#chart-simple-bars-001"]', function(){
                $(this).parent().find('[data-toggle]').removeClass('active');
                $(this).addClass('active');
            });
        }
    })(jQuery);
}

/* flotchart-simple-02.init.js */
function flotchartSimple02Init() {
    (function($) {
        if ( $("#chart_simple_02").length ) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_simple ={
                // data
                data:
                    {
                        d1: [],
                        d2: []
                    },

                // will hold the chart object
                plot: null,

                // chart options
                options:
                    {
                        grid:
                            {
                                color: "#dedede",
                                borderWidth: 1,
                                borderColor: "transparent",
                                clickable: true,
                                hoverable: true
                            },
                        series: {
                            lines: {
                                show: true,
                                fill: false,
                                lineWidth: 2,
                                steps: false
                            },
                            points: {
                                show:true,
                                radius: 5,
                                lineWidth: 3,
                                fill: true,
                                fillColor: "#000"
                            }
                        },
                        xaxis: {
                            tickColor: 'transparent',
                            tickDecimals: 2,
                            tickSize: 2
                        },
                        yaxis: {
                            tickSize: 1000
                        },
                        legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                        shadowSize: 0,
                        tooltip: true,
                        tooltipOpts: {
                            content: "%s : %y.3",
                            shifts: {
                                x: -30,
                                y: -50
                            },
                            defaultTheme: false
                        }
                    },

                placeholder: "#chart_simple_02",

                // initialize
                init: function()
                {
                    // this.options.colors = ["#72af46", "#466baf"];
                    this.options.colors = [successColor, primaryColor];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    var that = this;

                    if (this.plot == null)
                    {
                        this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                        this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                    }
                    this.plot = $.plot(
                        $(this.placeholder),
                        [{
                            label: "Data 1",
                            data: this.data.d1,
                            lines: { fill: 0.05 },
                            points: { fillColor: "#fff" }
                        },
                            {
                                label: "Data 2",
                                data: this.data.d2,
                                lines: { fill: 0.1 },
                                points: { fillColor: that.options.colors[1] }
                            }], this.options);
                }
            };

            // uncomment to init on load
            charts.chart_simple.init();

            // use with tabs
            /* $('a[href="#chart-simple-lines"]').on('shown.bs.tab', function(){
             if (charts.chart_simple.plot == null)
                 charts.chart_simple.init();
            });

            $('.btn-group [data-bs-toggle="tab"]').on('show.bs.tab', function(){
             $(this).parent().find('[data-toggle]').removeClass('active');
             $(this).addClass('active');
            }); */
        }
    })(jQuery);
}

/* flotchart-line.init.js */
function flotChartLineInit() {
    (function($) {
        if( $("#chart_lines_fill_nopoints").length ) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_lines_fill_nopoints = {
                // chart data
                data: {
                    d1: [],
                    d2: []
                },
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        grow: {active:false},
                        lines: {
                            show: true,
                            fill: true,
                            lineWidth: 2,
                            steps: false
                        },
                        points: {show:false}
                    },
                    legend: { position: "nw", backgroundColor: null, backgroundOpacity: 0, noColumns: 2 },
                    yaxis: { tickSize:25 },
                    xaxis: { tickColor: 'transparent', tickSize:5, tickDecimals: 0},
                    colors: [],
                    shadowSize:1,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_lines_fill_nopoints",
                // initialize
                init: function() {
                    // apply styling
                    charts.utility.applyStyle(this);

                    // generate some data
                    this.data.d1 = [[1, 3+charts.utility.randNum()], [2, 6+charts.utility.randNum()], [3, 9+charts.utility.randNum()], [4, 12+charts.utility.randNum()],[5, 15+charts.utility.randNum()],[6, 18+charts.utility.randNum()],[7, 21+charts.utility.randNum()],[8, 15+charts.utility.randNum()],[9, 18+charts.utility.randNum()],[10, 21+charts.utility.randNum()],[11, 24+charts.utility.randNum()],[12, 27+charts.utility.randNum()],[13, 30+charts.utility.randNum()],[14, 33+charts.utility.randNum()],[15, 24+charts.utility.randNum()],[16, 27+charts.utility.randNum()],[17, 30+charts.utility.randNum()],[18, 33+charts.utility.randNum()],[19, 36+charts.utility.randNum()],[20, 39+charts.utility.randNum()],[21, 42+charts.utility.randNum()],[22, 45+charts.utility.randNum()],[23, 36+charts.utility.randNum()],[24, 39+charts.utility.randNum()],[25, 42+charts.utility.randNum()],[26, 45+charts.utility.randNum()],[27,38+charts.utility.randNum()],[28, 51+charts.utility.randNum()],[29, 55+charts.utility.randNum()], [30, 60+charts.utility.randNum()]];
                    this.data.d2 = [[1, charts.utility.randNum()-5], [2, charts.utility.randNum()-4], [3, charts.utility.randNum()-4], [4, charts.utility.randNum()],[5, 4+charts.utility.randNum()],[6, 4+charts.utility.randNum()],[7, 5+charts.utility.randNum()],[8, 5+charts.utility.randNum()],[9, 6+charts.utility.randNum()],[10, 6+charts.utility.randNum()],[11, 6+charts.utility.randNum()],[12, 2+charts.utility.randNum()],[13, 3+charts.utility.randNum()],[14, 4+charts.utility.randNum()],[15, 4+charts.utility.randNum()],[16, 4+charts.utility.randNum()],[17, 5+charts.utility.randNum()],[18, 5+charts.utility.randNum()],[19, 2+charts.utility.randNum()],[20, 2+charts.utility.randNum()],[21, 3+charts.utility.randNum()],[22, 3+charts.utility.randNum()],[23, 3+charts.utility.randNum()],[24, 2+charts.utility.randNum()],[25, 4+charts.utility.randNum()],[26, 4+charts.utility.randNum()],[27,5+charts.utility.randNum()],[28, 2+charts.utility.randNum()],[29, 2+charts.utility.randNum()], [30, 3+charts.utility.randNum()]];

                    // make chart
                    this.plot = $.plot(
                        this.placeholder,
                        [{
                            label: "Visits",
                            data: this.data.d1,
                            lines: {fillColor: "rgba(0,0,0,0.01)"},
                            points: {fillColor: "#88bbc8"}
                        },
                            {
                                label: "Unique Visits",
                                data: this.data.d2,
                                lines: {fill: 0.05},
                                points: {fillColor: "#ed7a53"}
                            }],
                        this.options);
                }
            };

            charts.chart_lines_fill_nopoints.init();
        }

    })(jQuery);
}

/* flotchart-bars-ordered.init.js */
function flotchartBarsOrderedInit() {
    (function($) {
        if ( $("#chart_ordered_bars").length ) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_ordered_bars = {
                // chart data
                data: null,
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    bars: {
                        show:true,
                        barWidth: 0.2,
                        fill:1
                    },
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        grow: {active:false}
                    },
                    yaxis: { tickSize: 10 },
                    legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0, noColumns: 3 },
                    colors: [],
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_ordered_bars",
                // initialize
                init: function() {
                    this.options.colors = ["#cc6666", "#cca366", "#b7cc66"];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    //some data
                    var d1 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d1.push([i, parseInt(Math.random() * 30)]);

                    var d2 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d2.push([i, parseInt(Math.random() * 30)]);

                    var d3 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d3.push([i, parseInt(Math.random() * 30)]);

                    var ds = new Array();

                    ds.push({
                        label: "Data One",
                        data:d1,
                        bars: {order: 1}
                    });
                    ds.push({
                        label: "Data Two",
                        data:d2,
                        bars: {order: 2}
                    });
                    ds.push({
                        label: "Data Three",
                        data:d3,
                        bars: {order: 3}
                    });
                    this.data = ds;

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

            charts.chart_ordered_bars.init();
        }

    })(jQuery);
}

/* flotchart-bars-stacked.init.js */
function flotchartBarsStackedInit() {
    (function($) {
        if ( $("#chart_stacked_bars").length ) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_stacked_bars = {
                // chart data
                data: null,
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        grow: {active:false},
                        stack: 0,
                        lines: { show: false, fill: true, steps: false },
                        bars: { show: true, barWidth: 0.5, fill:1}
                    },
                    yaxis: { tickSize: 10 },
                    xaxis: { tickColor: 'transparent', tickSize:2 },
                    legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0, noColumns: 3 },
                    colors: [],
                    shadowSize:1,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_stacked_bars",
                // initialize
                init: function() {
                    this.options.colors = ["#7acc66", "#66cccc", "#77b7c5"];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    var d1 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d1.push([i, parseInt(Math.random() * 30)]);

                    var d2 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d2.push([i, parseInt(Math.random() * 20)]);

                    var d3 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d3.push([i, parseInt(Math.random() * 20)]);

                    this.data = new Array();

                    this.data.push({
                        label: "Data One",
                        data: d1
                    });
                    this.data.push({
                        label: "Data Two",
                        data: d2
                    });
                    this.data.push({
                        label: "Data Tree",
                        data: d3
                    });

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

            charts.chart_stacked_bars.init();
        }

    })(jQuery);
}

/* flotchart-pie.init.js */
function flotchartPieInit() {
    (function($) {
        if ( $("#chart_pie").length ) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_pie = {
                // chart data
                data: [
                    { label: "USA",  data: 38 },
                    { label: "Brazil",  data: 23 },
                    { label: "India",  data: 15 },
                    { label: "Turkey",  data: 9 },
                    { label: "France",  data: 7 },
                    { label: "China",  data: 5 },
                    { label: "Germany",  data: 3 }
                ],
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    series: {
                        pie: {
                            show: true,
                            highlight: {
                                opacity: 0.1
                            },
                            radius: 1,
                            stroke: {
                                color: '#fff',
                                width: 2
                            },
                            startAngle: 2,
                            combine: {
                                color: '#353535',
                                threshold: 0.05
                            },
                            label: {
                                show: true,
                                radius: 1,
                                formatter: function(label, series){
                                    return '<div class="label label-inverse">'+label+'&nbsp;'+Math.round(series.percent)+'%</div>';
                                }
                            }
                        },
                        grow: { active: false}
                    },
                    colors: [],
                    legend:{show:false},
                    grid: {
                        hoverable: true,
                        clickable: true,
                        backgroundColor : { }
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.1"+"%",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_pie",
                // initialize
                init: function() {
                    // apply styling
                    charts.utility.applyStyle(this);

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

            charts.chart_pie.init();
        }
    })(jQuery);
}

/* flotchart-donut.init.js */
function flotchartDonutInit() {
    (function($) {
        if( $("#chart_donut").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_donut = {
                // chart data
                data: [
                    { 
                        label: "USA",
                        data: 38 
                    },
                    { 
                        label: "Brazil",
                        data: 23
                    },
                    { 
                        label: "India",
                        data: 15
                    },
                    {
                        label: "Turkey",
                        data: 9 
                    },
                    {
                        label: "France",
                        data: 7
                    },
                    {
                        label: "China",
                        data: 5
                    },
                    {
                        label: "Germany",
                        data: 3
                    }
                ],
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    series: {
                        pie: {
                            show: true,
                            innerRadius: 0.4,
                            highlight: {
                                opacity: 0.1
                            },
                            radius: 1,
                            stroke: {
                                color: '#fff',
                                width: 8
                            },
                            startAngle: 2,
                            combine: {
                                color: '#EEE',
                                threshold: 0.05
                            },
                            label: {
                                show: true,
                                radius: 1,
                                formatter: function(label, series){
                                    return '<div class="label label-inverse">'+label+'&nbsp;'+Math.round(series.percent)+'%</div>';
                                }
                            }
                        },
                        grow: { active: false}
                    },
                    legend:{show:false},
                    grid: {
                        hoverable: true,
                        clickable: true,
                        backgroundColor : { }
                    },
                    colors: [],
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.1"+"%",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_donut",
                // initialize
                init: function() {
                    // apply styling
                    charts.utility.applyStyle(this);

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

            charts.chart_donut.init();
        }
    })(jQuery);
}

/* flotchart-bars-horizontal.init.js */
function flotchartBarsHorizontalInit() {
    (function($) {
        if ( $("#chart_horizontal_bars").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_horizontal_bars = {
                // chart data
                data: null,
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f" ,
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor:null,
                        minBorderMargin: 5 ,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20,
                        backgroundColor : { }
                    },
                    series: {
                        grow: {active:false},
                        bars: {
                            show:true,
                            horizontal: true,
                            barWidth:0.2,
                            fill:1
                        }
                    },
                    legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0 },
                    colors: [],
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_horizontal_bars",
                // initialize
                init: function() {
                    // apply styling
                    charts.utility.applyStyle(this);

                    var d1 = [];
                    for (var i = 0; i <= 5; i += 1)
                        d1.push([parseInt(Math.random() * 30),i ]);

                    var d2 = [];
                    for (var i = 0; i <= 5; i += 1)
                        d2.push([parseInt(Math.random() * 30),i ]);

                    var d3 = [];
                    for (var i = 0; i <= 5; i += 1)
                        d3.push([ parseInt(Math.random() * 30),i]);

                    this.data = new Array();
                    this.data.push({
                        data: d1,
                        bars: {
                            horizontal:true,
                            show: true,
                            barWidth: 0.2,
                            order: 1
                        }
                    });
                    this.data.push({
                        data: d2,
                        bars: {
                            horizontal:true,
                            show: true,
                            barWidth: 0.2,
                            order: 2
                        }
                    });
                    this.data.push({
                        data: d3,
                        bars: {
                            horizontal:true,
                            show: true,
                            barWidth: 0.2,
                            order: 3
                        }
                    });

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

            charts.chart_horizontal_bars.init();
        }

    })(jQuery);
}

/* flotchart-autoupdating.init.js */
function flotchartAutoUpdatingInit() {
    (function($) {
        if ( $("#chart_live").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_live = {
                // chart data
                data: [],
                totalPoints: 300,
                updateInterval: 200,
                // we use an inline data source in the example, usually data would
                // be fetched from a server
                getRandomData: function() {
                    if (this.data.length > 0)
                        this.data = this.data.slice(1);

                    // do a random walk
                    while (this.data.length < this.totalPoints) {
                        var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
                        var y = prev + Math.random() * 10 - 5;
                        if (y < 0)
                            y = 0;
                        if (y > 100)
                            y = 100;
                        this.data.push(y);
                    }

                    // zip the generated y values with the x values
                    var res = [];
                    for (var i = 0; i < this.data.length; ++i)
                        res.push([i, this.data[i]])

                    return res;
                },
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    series: {
                        grow: { active: false },
                        shadowSize: 0,
                        lines: {
                            show: true,
                            fill: true,
                            lineWidth: 2,
                            steps: false
                        }
                    },
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor:null,
                        minBorderMargin: 5 ,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20,
                        backgroundColor : { }
                    },
                    colors: [],
                    tooltip: true,
                    tooltipOpts: {
                        content: "Value is : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    },
                    yaxis: { min: 0, max: 100 },
                    xaxis: { show: true}
                },
                placeholder: "#chart_live",
                // initialize
                init: function() {
                    // apply styling
                    charts.utility.applyStyle(this);

                    this.plot = $.plot($(this.placeholder), [ this.getRandomData() ], this.options);
                    setTimeout(this.update, charts.chart_live.updateInterval);
                },
                // update
                update: function() {
                    charts.chart_live.plot.setData([ charts.chart_live.getRandomData() ]);
                    charts.chart_live.plot.draw();

                    setTimeout(charts.chart_live.update, charts.chart_live.updateInterval);
                }
            };

            charts.chart_live.init();
        }

    })(jQuery);
}

/* flotchart-finances-simple.init.js */
function flotchartFinancesSimpleInit() {
    (function($) {
        if ( $("#chart_finances_simple").length ) {
            if ( typeof charts == 'undefined' )
                return;

            charts.chart_simple = {
                // data
                data: {
                    d1: [],
                    d2: []
                },
                // will hold the chart object
                plot: null,
                // chart options
                options: {
                    grid:
                        {
                            color: "#dedede",
                            borderWidth: 1,
                            borderColor: "transparent",
                            clickable: true,
                            hoverable: true
                        },
                    series: {
                        lines: {
                            show: true,
                            fill: false,
                            lineWidth: 2,
                            steps: false
                        },
                        points: {
                            show:true,
                            radius: 5,
                            lineWidth: 3,
                            fill: true,
                            fillColor: "#000"
                        }
                    },
                    xaxis: {
                        tickColor: 'transparent',
                        tickDecimals: 2,
                        tickSize: 2
                    },
                    yaxis: {
                        tickSize: 1000
                    },
                    legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                    shadowSize: 0,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.3",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    }
                },
                placeholder: "#chart_finances_simple",
                // initialize
                init: function() {
                    // this.options.colors = ["#72af46", "#466baf"];
                    this.options.colors = [successColor, primaryColor];
                    this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                    var that = this;

                    if (this.plot == null) {
                        this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                        this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                    }
                    this.plot = $.plot(
                        $(this.placeholder),
                        [{
                            label: "Data 1",
                            data: this.data.d1,
                            lines: { fill: 0.05 },
                            points: { fillColor: "#fff" }
                        },
                        {
                            label: "Data 2",
                            data: this.data.d2,
                            lines: { fill: 0.1 },
                            points: { fillColor: that.options.colors[1] }
                        }], this.options);
                }
            };

            // uncomment to init on load
            charts.chart_simple.init();

            // use with tabs
            /* $('a[href="#chart-simple-lines"]').on('shown.bs.tab', function(){
             if (charts.chart_simple.plot == null)
                 charts.chart_simple.init();
            });

            $('.btn-group [data-bs-toggle="tab"]').on('show.bs.tab', function(){
             $(this).parent().find('[data-toggle]').removeClass('active');
             $(this).addClass('active');
            }); */
        }


    })(jQuery);
}

/* datepicker.init.js */
/* function datepickerInit() {

    $.fn.bdatepicker = $.fn.datepicker.noConflict();

    $(function() {

        // DatePicker
        // default
        $("#datepicker1").bdatepicker({
            format: 'yyyy-mm-dd',
            startDate: "2013-02-14"
        });

        // component
        $('#datepicker2').bdatepicker({
            format: "dd MM yyyy",
            startDate: "2013-02-14"
        });

        // today button
        $('#datepicker3').bdatepicker({
            format: "dd MM yyyy",
            startDate: "2013-02-14",
            todayBtn: true
        });

        // advanced
        $('#datetimepicker4').bdatepicker({
            format: "dd MM yyyy - hh:ii",
            autoclose: true,
            todayBtn: true,
            startDate: "2013-02-14 10:00",
            minuteStep: 10
        });

        // meridian
        $('#datetimepicker5').bdatepicker({
            format: "dd MM yyyy - HH:ii P",
            showMeridian: true,
            autoclose: true,
            startDate: "2013-02-14 10:00",
            todayBtn: true
        });

        if ($('#datepicker-box').length) $('#datepicker-box').bdatepicker({ inline: true, showOtherMonths:true });


        //window.initDatepicker = function(){
         // other
         // if ($('#datepicker').length) $("#datepicker").bdatepicker({ showOtherMonths:true });
         // if ($('#datepicker-box').length) $('#datepicker-box').bdatepicker({ inline: true, showOtherMonths:true });
        //}

        //initDatepicker();
    });
} */

/* uniform.init.js */
function uniformInit() {
    (function($){
        if ($('.uniformjs').length)
            $('.uniformjs').find(":checkbox, :radio").uniform();
    })(jQuery);
}

/* calendar.init.js */
function calendarInit() {
    $(function() {
        /* initialize the external events
         -----------------------------------------------------------------*/

        $('#external-events ul li').each(function() {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $(this).text().trim() // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0,  //  original position after the drag,
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
        });

        /* initialize the calendar
         -----------------------------------------------------------------*/

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true,
            //'/html/admin/ajax/calendarEvents.json'
            events: '/MelisDesign/js/calendar/calendarEvents.json',
            drop: function(date, allDay) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            }
        });
    });
}

/* bootstrap-switch.js */
function switchBootstrap() {
    /*! ============================================================
     * bootstrapSwitch v1.8 by Larentis Mattia @SpiritualGuru
     * http://www.larentis.eu/
     *
     * Enhanced for radiobuttons by Stein, Peter @BdMdesigN
     * http://www.bdmdesign.org/
     *
     * Project site:
     * http://www.larentis.eu/switch/
     * ============================================================
     * Licensed under the Apache License, Version 2.0
     * http://www.apache.org/licenses/LICENSE-2.0
     * ============================================================ */

    !function ($) {
        "use strict";
        $.fn['bootstrapSwitch'] = function (method) {
            var inputSelector = 'input[type!="hidden"]';
            var methods = {
                init: function () {
                    return this.each(function () {
                            var $element = $(this)
                                , $div
                                , $switchLeft
                                , $switchRight
                                , $label
                                , $form = $element.closest('form')
                                , myClasses = ""
                                , classes = $element.attr('class')
                                , color
                                , moving
                                , onLabel = "ON"
                                , offLabel = "OFF"
                                , icon = false
                                , textLabel = false;

                            $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                                if (classes.indexOf(el) >= 0)
                                    myClasses = el;
                            });

                            $element.addClass('has-switch');

                            if ($element.data('on') !== undefined)
                                color = "switch-" + $element.data('on');

                            if ($element.data('on-label') !== undefined)
                                onLabel = $element.data('on-label');

                            if ($element.data('off-label') !== undefined)
                                offLabel = $element.data('off-label');

                            if ($element.data('label-icon') !== undefined)
                                icon = $element.data('label-icon');

                            if ($element.data('text-label') !== undefined)
                                textLabel = $element.data('text-label');

                            $switchLeft = $('<span>')
                                .addClass("switch-left")
                                .addClass(myClasses)
                                .addClass(color)
                                .html(onLabel);

                            color = '';
                            if ($element.data('off') !== undefined)
                                color = "switch-" + $element.data('off');

                            $switchRight = $('<span>')
                                .addClass("switch-right")
                                .addClass(myClasses)
                                .addClass(color)
                                .html(offLabel);

                            $label = $('<label>')
                                .html("&nbsp;")
                                .addClass(myClasses)
                                .attr('for', $element.find(inputSelector).attr('id'));

                            if (icon) {
                                $label.html('<i class="icon ' + icon + '"></i>');
                            }

                            if (textLabel) {
                                $label.html('' + textLabel + '');
                            }

                            $div = $element.find(inputSelector).wrap($('<div>')).parent().data('animated', false);

                            if ($element.data('animated') !== false)
                                $div.addClass('switch-animate').data('animated', true);

                            $div
                                .append($switchLeft)
                                .append($label)
                                .append($switchRight);

                            $element.find('>div').addClass(
                                $element.find(inputSelector).is(':checked') ? 'switch-on' : 'switch-off'
                            );

                            if ($element.find(inputSelector).is(':disabled'))
                                $(this).addClass('deactivate');

                            var changeStatus = function ($this) {
                                if ($element.parent('label').is('.label-change-switch')) {

                                } else {
                                    $this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click');
                                }
                            };

                            $element.on('keydown', function (e) {
                                if (e.keyCode === 32) {
                                    e.stopImmediatePropagation();
                                    e.preventDefault();
                                    changeStatus($(e.target).find('span:first'));
                                }
                            });

                            $switchLeft.on('click', function (e) {
                                changeStatus($(this));
                            });

                            $switchRight.on('click', function (e) {
                                changeStatus($(this));
                            });

                            $element.find(inputSelector).on('change', function (e, skipOnChange) {
                                var $this = $(this)
                                    , $element = $this.parent()
                                    , thisState = $this.is(':checked')
                                    , state = $element.is('.switch-off');

                                e.preventDefault();

                                $element.css('left', '');

                                if (state === thisState) {

                                    if (thisState)
                                        $element.removeClass('switch-off').addClass('switch-on');
                                    else $element.removeClass('switch-on').addClass('switch-off');

                                    if ($element.data('animated') !== false)
                                        $element.addClass("switch-animate");

                                    if (typeof skipOnChange === 'boolean' && skipOnChange)
                                        return;

                                    $element.parent().trigger('switch-change', {'el': $this, 'value': thisState})
                                }
                            });

                            $element.find('label').on('mousedown touchstart', function (e) {
                                var $this = $(this);
                                moving = false;

                                e.preventDefault();
                                e.stopImmediatePropagation();

                                $this.closest('div').removeClass('switch-animate');

                                if ($this.closest('.has-switch').is('.deactivate')) {
                                    $this.off('click');
                                } else if ($this.closest('.switch-on').parent().is('.radio-no-uncheck')) {
                                    $this.off('click');
                                } else {
                                    $this.on('mousemove touchmove', function (e) {
                                        var $element = $(this).closest('.make-switch')
                                            , relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left
                                            , percent = (relativeX / $element.width()) * 100
                                            , left = 25
                                            , right = 75;

                                        moving = true;

                                        if (percent < left)
                                            percent = left;
                                        else if (percent > right)
                                            percent = right;

                                        $element.find('>div').css('left', (percent - right) + "%")
                                    });

                                    $this.on('click touchend', function (e) {
                                        var $this = $(this)
                                            , $target = $(e.target)
                                            , $myRadioCheckBox = $target.siblings('input');

                                        e.stopImmediatePropagation();
                                        e.preventDefault();

                                        $this.off('mouseleave');

                                        if (moving)
                                            $myRadioCheckBox.prop('checked', !(parseInt($this.parent().css('left')) < -25));
                                        else
                                            $myRadioCheckBox.prop("checked", !$myRadioCheckBox.is(":checked"));

                                        moving = false;
                                        $myRadioCheckBox.trigger('change');
                                    });

                                    $this.on('mouseleave', function (e) {
                                        var $this = $(this)
                                            , $myInputBox = $this.siblings('input');

                                        e.preventDefault();
                                        e.stopImmediatePropagation();

                                        $this.off('mouseleave');
                                        $this.trigger('mouseup');

                                        $myInputBox.prop('checked', !(parseInt($this.parent().css('left')) < -25)).trigger('change');
                                    });

                                    $this.on('mouseup', function (e) {
                                        e.stopImmediatePropagation();
                                        e.preventDefault();

                                        $(this).off('mousemove');
                                    });
                                }
                            });

                            if ($form.data('bootstrapSwitch') !== 'injected') {
                                $form.on('reset', function () {
                                    setTimeout(function () {
                                        $form.find('.make-switch').each(function () {
                                            var $input = $(this).find(inputSelector);

                                            $input.prop('checked', $input.is(':checked')).trigger('change');
                                        });
                                    }, 1);
                                });
                                $form.data('bootstrapSwitch', 'injected');
                            }
                        }
                    );
                },
                toggleActivation: function () {
                    var $this = $(this);

                    $this.toggleClass('deactivate');
                    $this.find(inputSelector).prop('disabled', $this.is('.deactivate'));
                },
                isActive: function () {
                    return !$(this).hasClass('deactivate');
                },
                setActive: function (active) {
                    var $this = $(this);

                    if (active) {
                        $this.removeClass('deactivate');
                        $this.find(inputSelector).prop('disabled', false);
                    }
                    else {
                        $this.addClass('deactivate');
                        $this.find(inputSelector).attr('disabled', 'disabled');
                    }
                },
                toggleState: function (skipOnChange) {
                    var $input = $(this).find(':checkbox');
                    $input.prop('checked', !$input.is(':checked')).trigger('change', skipOnChange);
                },
                toggleRadioState: function (skipOnChange) {
                    var $radioinput = $(this).find(':radio');
                    $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
                },
                toggleRadioStateAllowUncheck: function (uncheck, skipOnChange) {
                    var $radioinput = $(this).find(':radio');
                    if (uncheck) {
                        $radioinput.not(':checked').trigger('change', skipOnChange);
                    }
                    else {
                        $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
                    }
                },
                setState: function (value, skipOnChange) {
                    $(this).find(inputSelector).prop('checked', value).trigger('change', skipOnChange);
                },
                setOnLabel: function (value) {
                    var $switchLeft = $(this).find(".switch-left");
                    $switchLeft.html(value);
                },
                setOffLabel: function (value) {
                    var $switchRight = $(this).find(".switch-right");
                    $switchRight.html(value);
                },
                setOnClass: function (value) {
                    var $switchLeft = $(this).find(".switch-left");
                    var color = '';
                    if (value !== undefined) {
                        if ($(this).attr('data-on') !== undefined) {
                            color = "switch-" + $(this).attr('data-on')
                        }
                        $switchLeft.removeClass(color);
                        color = "switch-" + value;
                        $switchLeft.addClass(color);
                    }
                },
                setOffClass: function (value) {
                    var $switchRight = $(this).find(".switch-right");
                    var color = '';
                    if (value !== undefined) {
                        if ($(this).attr('data-off') !== undefined) {
                            color = "switch-" + $(this).attr('data-off')
                        }
                        $switchRight.removeClass(color);
                        color = "switch-" + value;
                        $switchRight.addClass(color);
                    }
                },
                setAnimated: function (value) {
                    var $element = $(this).find(inputSelector).parent();
                    if (value === undefined) value = false;
                    $element.data('animated', value);
                    $element.attr('data-animated', value);

                    if ($element.data('animated') !== false) {
                        $element.addClass("switch-animate");
                    } else {
                        $element.removeClass("switch-animate");
                    }
                },
                setSizeClass: function (value) {
                    var $element = $(this);
                    var $switchLeft = $element.find(".switch-left");
                    var $switchRight = $element.find(".switch-right");
                    var $label = $element.find("label");
                    $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                        if (el !== value) {
                            $switchLeft.removeClass(el);
                            $switchRight.removeClass(el);
                            $label.removeClass(el);
                        } else {
                            $switchLeft.addClass(el);
                            $switchRight.addClass(el);
                            $label.addClass(el);
                        }
                    });
                },
                status: function () {
                    return $(this).find(inputSelector).is(':checked');
                },
                destroy: function () {
                    var $element = $(this)
                        , $div = $element.find('div')
                        , $form = $element.closest('form')
                        , $inputbox;

                    $div.find(':not(input)').remove();

                    $inputbox = $div.children();
                    $inputbox.unwrap().unwrap();

                    $inputbox.off('change');

                    if ($form) {
                        $form.off('reset');
                        $form.removeData('bootstrapSwitch');
                    }

                    return $inputbox;
                }
            };

            if (methods[method])
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            else if (typeof method === 'object' || !method)
                return methods.init.apply(this, arguments);
            else
                $.error('Method ' + method + ' does not exist!');
        };
    }(jQuery);
}

/* bootstrap-switch.init.js */
function bootstrapSwitchInit() {
    (function($){
        if (typeof $.fn.bootstrapSwitch != 'undefined' && $('.make-switch').length)
            $('.make-switch:not(.has-switch)').bootstrapSwitch();
    })(jQuery);
}

/* form-validator.init.js */
function formValidatorInit() {
    $.validator.setDefaults({
        submitHandler: function() { alert("submitted!"); },
        showErrors: function(map, list) {
            this.currentElements.parents('label:first, div:first').find('.has-error').remove();
            this.currentElements.parents('.form-group:first').removeClass('has-error');

            $.each(list, function(index, error) {
                var ee = $(error.element);
                var eep = ee.parents('label:first').length ? ee.parents('label:first') : ee.parents('div:first');

                ee.parents('.form-group:first').addClass('has-error');
                eep.find('.has-error').remove();
                eep.append('<p class="has-error help-block">' + error.message + '</p>');
            });
            //refreshScrollers();
        }
    });

    $(function() {
        // validate signup form on keyup and submit
        $("#validateSubmitForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            }
        });

        // propose username by combining first- and lastname
        $("#username").on("focus", function() {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if(firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });

        //code to hide topic selection, disable for demo
        var newsletter = $("#newsletter");
        // newsletter topics are optional, hide at first
        var inital = newsletter.is(":checked");
        var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
        var topicInputs = topics.find("input").attr("disabled", !inital);
        // show when newsletter is checked
        newsletter.on("click", function() {
            topics[this.checked ? "removeClass" : "addClass"]("gray");
            topicInputs.attr("disabled", !this.checked);
        });
    });
}

/* dropzone.init.js */
function dropzoneInit() {
    (function($) {
        if (typeof Dropzone != 'undefined') {
            
            Dropzone.discover();

            Dropzone.options.demoUpload = {
                paramName: "file",
                maxFilesize: 20,
                addRemoveLinks: true,
                dictRemoveFileConfirmation: "Are you sure you want to remove the file?"
            };

            /* 
            //dictRemoveFileConfirmation: "Are you sure you want to remove the file?"
            var removeCallback  = undefined,
                $body           = $("body");

                $body.on("click", ".btn-remove-all-files", function() {
                    var $demoUpload = Dropzone.forElement("#demo-upload");
                        if ( $demoUpload.files.length ) {
                            $demoUpload.removeAllFiles();
                            $demoUpload.removeAllFiles(true);
                        }
                });

                // listen to click .remove-all, remove the item by calling removeCallback and hide modal
                $body.on("click", ".remove-all", function() {
                    if ( removeCallback ) {
                        removeCallback();
                    }

                    melisCoreTool.hideModal('remove-all-modal');
                });

                demoDropzone.confirm = function(question, accepted, rejected) {
                    // retain the callback to invoke to accept the removal
                    removeCallback = accepted;
                    // launch custom modal
                    melisCoreTool.showModal('remove-all-modal');
                }; */
        }
    })(jQuery);
}

/* plupload.init.js */
function plUploadInit() {
    $(function() {
        /* Plupload */
        $("#pluploadUploader").pluploadQueue({
            // General settings
            runtimes : 'gears,browserplus,html5',
            url : 'upload.php',
            max_file_size : '10mb',
            chunk_size : '1mb',
            unique_names : true,

            // Resize images on clientside if we can
            resize : {width : 320, height : 240, quality : 90},

            // Specify what files to browse for
            filters : [
                {title : "Image files", extensions : "jpg,gif,png"},
                {title : "Zip files", extensions : "zip"}
            ],

            // Flash settings
            flash_swf_url : 'plupload.flash.swf',

            // Silverlight settings
            silverlight_xap_url : 'plupload.silverlight.xap'
        });

        // Client side form validation
        $('#pluploadForm').on("submit", function(e) {
            var uploader = $('#pluploadUploader').pluploadQueue();

            // Files in queue upload them first
            if (uploader.files.length > 0) {
                // When all files are uploaded submit form, uploader.bind()
                uploader.on('StateChanged', function() {
                    if (uploader.files.length === (uploader.total.uploaded + uploader.total.failed)) {
                        $('#pluploadForm').trigger("submit");
                    }
                });

                uploader.start();
            } else {
                alert('You must queue at least one file.');
            }

            return false;
        });
    });
}

/* core.init.js */
function coreInit() {
    /* Remove Envato Frame */
    if (window.location != window.parent.location)
        top.location.href = document.location.href;

    (function($, window) {
        //window.onunload = function(){};

        $.expr.pseudos.scrollable = function( elem ) {
            var scrollable = false,
                props = [ '', '-x', '-y' ],
                re = /^(?:auto|scroll)$/i,
                elem = $(elem);

            $.each( props, function(i,v){
                return !( scrollable = scrollable || re.test( elem.css( 'overflow' + v ) ) );
            });

            return scrollable;
        };

        if (!Modernizr.touch && $('[href="#template-options"][data-auto-open]').length)
            $('#template-options').collapse('show');

        window.beautify = function (source) {
            var output,
                opts = {};

            opts.preserve_newlines = false;
            output = html_beautify(source, opts);
            return output;
        }

        // generate a random number within a range (PHP's mt_rand JavaScript implementation)
        window.mt_rand = function (min, max) {
            var argc = arguments.length;
            if (argc === 0) {
                min = 0;
                max = 2147483647;
            }
            else if (argc === 1) {
                throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
            }
            else {
                min = parseInt(min, 10);
                max = parseInt(max, 10);
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // scroll to element animation
        function scrollTo(id) {
            if ($(id).length)
                $('html,body').animate({scrollTop: $(id).offset().top},'slow');
        }

        window.resizeNiceScroll = function() {
            setTimeout(function(){
                $('.hasNiceScroll, #menu_kis, #menu').getNiceScroll().show().resize();
            }, 100);
        }

        // $('#content .modal').appendTo('body');

        // tooltips
        /* $('body.melis-design').tooltip({ 
            selector: '[data-toggle="tooltip"]',
            delay: 0
        }); */

        $(".render-my-account [data-toggle='tooltip'], .render-buttons-icons [data-toggle='tooltip']").tooltip();

        // popovers
        //$('[data-bs-toggle="popover"]').popover();

        // print
        $('[data-toggle="print"]').on("click", function(e) {
            e.preventDefault();
            window.print();
        });

        // carousels
        $('.carousel').each(function() {
            $(this).carousel();
        });

        // Google Code Prettify
        if ($('.prettyprint').length && typeof prettyPrint != 'undefined')
            prettyPrint();

        // show/hide toggle buttons
        $('[data-toggle="hide"]').on("click", function() {
            if ($(this).is('.bootboxTarget'))
                bootbox.alert($($(this).attr('data-target')).html());
            else {
                $($(this).attr('data-target')).toggleClass('hide');
                if ($(this).is('.scrollTarget') && !$($(this).attr('data-target')).is('.hide'))
                    scrollTo($(this).attr('data-target'));
            }
        });

        $('ul.collapse')
            .on('show.bs.collapse', function(e) {
                e.stopPropagation();
                $(this).closest('li').addClass('active');
            })
            .on('hidden.bs.collapse', function(e){
                e.stopPropagation();
                $(this).closest('li').removeClass('active');
            });

        $('[data-toggle="navbar-color"]').on('click', function(e){
            e.preventDefault();

            if ($(this).is('.active'))
                return;

            $('.navbar.main').toggleClass('navbar-inverse');

            $(this).parent().find('[data-toggle="navbar-color"].active').removeClass('active');
            $(this).addClass('active');
        });

        window.enableContentNiceScroll = function(hide) {
            if ($('html').is('.ie') || Modernizr.touch)
                return;

            if (typeof $.fn.niceScroll == 'undefined')
                return;

            if (typeof hide == 'undefined')
                var hide = true;

            $('#content .col-app, .col-separator')
                .filter(':scrollable')
                .not('.col-unscrollable')
                .filter(function(){
                    return !$(this).find('> .col-table').length;
                })
                .addClass('hasNiceScroll')
                .each(function() {
                    $(this).niceScroll({
                        horizrailenabled: false,
                        zindex: 2,
                        cursorborder: "none",
                        cursorborderradius: "0",
                        cursorcolor: primaryColor
                    });

                    if (hide == true)
                        $(this).getNiceScroll().hide();
                    else
                        $(this).getNiceScroll().resize().show();
                });
        }

        window.disableContentNiceScroll = function() {
            $('#content .hasNiceScroll').getNiceScroll().remove();
        }

        enableContentNiceScroll();

        if ($('html').is('.ie'))
            $('html').removeClass('app');

        $('body')
            .on('mouseenter', '[data-bs-toggle="dropdown"].dropdown-hover', function() {
                if (!$(this).parent('.dropdown').is('.open'))
                    $(this).trigger("click");
            });

        $('.navbar.main')
            .add('#menu-top')
            .on('mouseleave', function(){
                $(this).find('.dropdown.open').find('> [data-bs-toggle="dropdown"]').trigger("click");
            });

        $('[data-height]').each(function(){
            $(this).height($(this).data('height'));
        });

        $('.app [data-bs-toggle="tab"]')
            .on('shown.bs.tab', function(e) {
                $('.hasNiceScroll').getNiceScroll().resize();
            });

        window.enableNavbarMenusHover = function() {
            $('.navbar.main [data-bs-toggle="dropdown"]')
                .add('#menu-top [data-bs-toggle="dropdown"]')
                .addClass('dropdown-hover');
        }

        window.disableNavbarMenusHover = function(){
            $('.navbar.main [data-bs-toggle="dropdown"]')
                .add('#menu-top [data-bs-toggle="dropdown"]')
                .removeClass('dropdown-hover');
        }

        window.enableResponsiveNavbarSubmenus = function(){
            $('.navbar .dropdown-submenu > a').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).parent().toggleClass('open');
            });
        }

        window.disableResponsiveNavbarSubmenus = function(){
            $('.navbar .dropdown-submenu > a')
                .off('click')
                .parent()
                .removeClass('open');
        }

        if (typeof $.fn.setBreakpoints !== 'undefined') {
            $(window).setBreakpoints({
                distinct: false,
                breakpoints: [
                    768,
                    992
                ]
            });
            
            // bind
            $(window).on('exitBreakpoint768',function() {
                $('.container-fluid').addClass('menu-hidden');
                disableNavbarMenusHover();
                enableResponsiveNavbarSubmenus();
            });

            $(window).on('enterBreakpoint768',function() {
                $('.container-fluid').removeClass('menu-hidden');
                enableNavbarMenusHover();
                disableResponsiveNavbarSubmenus();
            });

            $(window).on('exitBreakpoint992',function() {
                disableContentNiceScroll();
            });

            $(window).on('enterBreakpoint992',function() {
                enableContentNiceScroll(false);
            });
        }

        //$(window).on('load', function() {
        $(function() {
            if ($(window).width() < 992)
                $('.hasNiceScroll').getNiceScroll().stop();

            if ($(window).width() < 768)
                enableResponsiveNavbarSubmenus();
            else
                enableNavbarMenusHover();

            if (typeof animations == 'undefined' && typeof $.fn.niceScroll !== 'undefined')
                $('.hasNiceScroll, #menu_kis, #menu').getNiceScroll().show().resize();

            if (typeof Holder != 'undefined') {
                Holder.addTheme("dark", {
                    bg: "#424242",
                    fg: "#aaa",
                    size: 9
                });

                Holder.addTheme("dark", {
                    bg: "#fff",
                    fg: "#c9c9c9",
                    size: 9
                });

                Holder.run();
            }
        });

    })(jQuery, window);
}

/* medical.init.js */
function medicalInit() {
    (function($) {

        if (typeof charts == 'undefined')
            return;

        charts.metricsDrawHook = function (plot, canvascontext) {
            var t = $('#metrics table');

            if (!t.length)
                return;

            if (t.length && t.is('.metricsDrawHook'))
                return;

            t.addClass('metricsDrawHook');
            t.find('tr').append('<td class="legendSelect"><input type="checkbox" checked="checked"></td>');
        }

        charts.chart_gender = {
            // chart data
            data: null,

            // will hold the chart object
            plot: null,

            // chart options
            options:
                {
                    bars: {
                        show:true,
                        barWidth: 0.3,
                        fill:1
                    },
                    grid: {
                        show: true,
                        aboveData: false,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor:null,
                        minBorderMargin: 5,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: false,
                        mouseActiveRadius: 20,
                        backgroundColor : { }
                    },
                    legend: { show: false, position: "ne", backgroundColor: null, backgroundOpacity: 0 },
                    colors: []
                },

            placeholder: "#chart_gender",

            // initialize
            init: function()
            {
                if (!$(this.placeholder).length)
                    return;

                // apply styling
                this.options.colors = ["#D67FB0", "#4193d0"];
                this.options.grid.backgroundColor = { colors: ["transparent", "transparent"]};
                this.options.grid.borderColor = primaryColor;
                this.options.grid.color = primaryColor;

                //some data
                var d1 = [];
                for (var i = 0; i <= 10; i += 1)
                    d1.push([i, parseInt(Math.random() * 30)]);

                var d2 = [];
                for (var i = 0; i <= 10; i += 1)
                    d2.push([i, parseInt(Math.random() * 30)]);

                var ds = new Array();

                ds.push({
                    label: "Data One",
                    data:d1,
                    bars: {order: 1}
                });
                ds.push({
                    label: "Data Two",
                    data:d2,
                    bars: {order: 2}
                });
                this.data = ds;

                this.plot = $.plot($(this.placeholder), this.data, this.options);
            }
        };

        charts.chart_metrics = {
            // chart data
            data:
                {
                    d: []
                },

            // will hold the chart object
            plot: null,

            // chart options
            options:
                {
                    grid: {
                        show: true,
                        aboveData: true,
                        color: "#3f3f3f",
                        labelMargin: 5,
                        axisMargin: 0,
                        borderWidth: 0,
                        borderColor:null,
                        minBorderMargin: 5 ,
                        clickable: true,
                        hoverable: true,
                        autoHighlight: true,
                        mouseActiveRadius: 20,
                        backgroundColor : { }
                    },
                    series: {
                        grow: { active:true, duration: 200 },
                        lines: {
                            show: true,
                            fill: .07,
                            lineWidth: 2
                        },
                        points: {show:false}
                    },
                    legend: {
                        backgroundColor: null,
                        backgroundOpacity: 0,
                        container: $('#metrics'),
                        labelFormatter: function(label, series) {
                            return '<a href="#" data-toggle="charts-metrics-toggle" data-series-idx="' + series.idx + '">' + label + '</a>';
                        }
                    },
                    yaxis: { min: 0 },
                    xaxis: {ticks:11, tickDecimals: 0},
                    colors: [],
                    shadowSize:1,
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s : %y.0",
                        shifts: {
                            x: -30,
                            y: -50
                        },
                        defaultTheme: false
                    },
                    hooks: { draw: [charts.metricsDrawHook] }
                },

            placeholder: "#chart_metrics",

            toggle: function(id) {
                var d = this.plot.getData(),
                    show = d[id].grow.growings[0].stepDirection == 'down',
                    nd = [];

                if (show)
                {
                    d[id].grow.growings[0].stepDirection = 'up';
                    d[id].data = this.data.d[id];
                }
                else
                {
                    var max = d[id].data.length;
                    d[id].data = [];

                    for (var i=1;i<=max;i++)
                        d[id].data.push([i, 0]);

                    d[id].grow.growings[0].stepDirection = 'down';
                }

                this.plot.setData(d);
                this.plot.draw();
            },

            changeData: function() {
                var d = this.plot.getData(),
                    that = this;

                this.data.d = [];

                // generate some data
                for (var i=0;i<=5;i++)
                {
                    this.data.d.push([]);
                    for (var j=1;j<=30;j++)
                        this.data.d[i].push([j, ((6-i)*10)+charts.utility.randNum()]);
                }

                $.each(d, function(index, value){
                    var a = $('[data-series-idx="'+index+'"]'),
                        c = a.closest('tr').find(':checked').length;

                    d[index].data = c ? that.data.d[index] : [];
                });

                this.plot.setData(d);
                this.plot.draw();
            },

            // initialize
            init: function()
            {
                if (!$(this.placeholder).length)
                    return;

                var that = this;

                $('body')
                    .on('click', '[data-toggle="charts-metrics-toggle"]', function(e)
                    {
                        e.preventDefault();
                        charts.chart_metrics.toggle($(this).attr('data-series-idx'));
                    })
                    .on('change', '.legendSelect :checkbox', function(){
                        var idx = $(this).closest('tr').find('[data-toggle="charts-metrics-toggle"]').attr('data-series-idx');
                        charts.chart_metrics.toggle(idx);
                    })
                    .on('click', '#metrics table tr', function(e){
                        if ($(e.target).is('a') || $(e.target).is(':checkbox'))
                            return;

                        var c = $(this).find(':checkbox');
                        c.prop('checked', !c.prop('checked')).trigger('change');
                    })
                    .on('click', '[data-toggle="charts-metrics-changedata"] .btn', function(){
                        if ($(this).is('.active')) return;
                        $('[data-toggle="charts-metrics-changedata"] .btn.active').removeClass('active');
                        $(this).addClass('active');
                        charts.chart_metrics.changeData();
                    });

                // apply styling
                this.options.colors = [primaryColor, "#cc6666", "#cca366", "#b7cc66", "#7acc66", "#66cccc"];
                this.options.grid.backgroundColor = { colors: ["transparent", "transparent"]};
                this.options.grid.borderColor = primaryColor;
                this.options.grid.color = primaryColor;

                // generate some data
                for (var i=0;i<=5;i++)
                {
                    this.data.d.push([]);
                    for (var j=1;j<=30;j++)
                        this.data.d[i].push([j, ((6-i)*10)+charts.utility.randNum()]);
                }

                // make chart
                this.plot = $.plot(
                    this.placeholder,
                    [{
                        label: "Hypertension",
                        data: this.data.d[0],
                        idx: 0,
                        grow: { growings:[ { stepMode: "linear" } ] }
                    },
                        {
                            label: "Blood Pressure",
                            data: this.data.d[1],
                            idx: 1
                        },
                        {
                            label: "Blood Sugar",
                            data: this.data.d[2],
                            idx: 2
                        },
                        {
                            label: "Alergy",
                            data: this.data.d[3],
                            idx: 3
                        },
                        {
                            label: "Macrobacterium",
                            data: this.data.d[4],
                            idx: 4
                        },
                        {
                            label: "Quadrigeminy",
                            data: this.data.d[5],
                            idx: 5
                        }],
                    this.options);
            }
        };

        charts.chart_gender.init();
        charts.chart_metrics.init();
    })(jQuery);
}

/* tables-responsive-footable.init.js */
function tablesResponsiveFootableInit() {
    $(function() {
        /* FooTable */
        if ( $('.footable').length )
            $('.footable').footable();
    });
}

/* dashboard.init.js */
function initDashboard() {
    animationsInit();
    easyPieInit();
    widgetScrollableInit();
    bootstrapDatepickerInit();
    flotchartSimpleInit();
    flotchartSimpleBarsInit();
}

/* portfolio.init.js */
function initPortfolio() {
    prettyPhotoInit();
    mixItUpInit();
}

/* support-tickets.init.js */
function initSupportTickets() {
    bootstrapDatepickerInit();
    fueluxCheckBoxInit();
}

/* support-questions.init.js */
function initSupportQuestions() {
    fueluxCheckBoxInit();
}

/* support-answers.init.js */
function initSupportAnswers() {
    fueluxCheckBoxInit();
}

/* events.init.js */
function initEvents() {
    eventsCarouselInit();
}

/* photo-gallery.init.js */
function initPhotoGallery() {
    gridaliciousInit();
}

/* gallery-video.init.js */
function initGalleryVideo() {
    gridaliciousInit();
    prettyPhotoInit();
}

/* carousel.init.js */
function initCarousel() {
    gridaliciousInit();
}

/* buttons.init.js */
function initButtons() {
    jqueryBootpagInit();
    uiInit();
}

/* tables.init.js */
function tablesInit() {
    jQueryDataTables();
    //tableTools();
    //colVis();
    //dtBootstrap();
    dataTablesInit();
    fueluxCheckBoxInit();
    bootstrapSelectInit();
    tablesClassicInit();
}

/* tables-responsive.init.js */
function tablesResponsiveInit() {
    footableJQuery();
    tablesResponsiveFootableInit();
}

/* notifications.init.js */
function initNotifications() {
    notyfyInit();
    gritterInit();
}

/* modals.init.js */
function initModals() {
    fueluxCheckBoxInit();
    modalsBootBoxInit();
    gritterInit();
    wysiHTML5();
    formWizardsInit();
}

/* widgets.init.js */
function initWidgets() {
    holderInit();
    easyPieInit();
    widgetCollapsibleInit();
    widgetProgressInit();
    widgetScrollableInit();
}

/* calendar.render.init.js */
function initCalendar() {
    uniformInit();
    calendarInit();
    bootstrapDatepickerInit();
}

/* sliders.init.js */
function initSliders() {
    jQueryRangeSliders();
    jqueryUiSlidersInit();
    rangeSlidersInit();
}

/* form-wizards.render.init.js */
function initFormWizards() {
    wysiHTML5();
    formWizardsInit();
}

function colorPickerInit() {
    var $minicolor = $(".minicolor");
        if ( $minicolor.length ) {
            $minicolor.each(function() {
                var $this = $(this);
                    $this.minicolors({
                        inline: true,
                        control: $this.attr("data-control") || 'hue',
                        defaultValue: $this.attr("data-defaultValue") || '',
                        format: $this.attr('data-format') || 'hex',
                        keywords: $this.attr('data-keywords') || '',
                        inline: $this.attr('data-inline') === 'true',
                        letterCase: $this.attr('data-letterCase') || 'lowercase',
                        opacity: $this.attr('data-opacity'),
                        position: $this.attr('data-position') || 'bottom',
                        swatches: $this.attr('data-swatches') ? $this.attr('data-swatches').split('|') : [],
                        change: function(hex, opacity) {
                            var log;
                                try {
                                    log = hex ? hex : 'transparent';

                                    if( opacity ) 
                                        log += ', ' + opacity;
                                    
                                    if ( $this.closest(".osta_color_code").find(".minicolor-hex").length ) {
                                        $this.closest(".osta_color_code").find(".minicolor-hex").val(hex);
                                    }
                                } catch(e) {}
                        },
                        theme: 'default'
                    });
            });
        }
}

function inputMaskInit() {
    $("#inputmask-date").inputmask("99/99/9999");
    $("#inputmask-date-1").inputmask("99/99/9999");
    $("#inputmask-date-2").inputmask("dd/mm/yyyy");
    $("#inputmask-currency").inputmask("€ 999.999.999,99");
    $("#inputmask-phone").inputmask("(999) 999-9999");
    $("#inputmask-tax").inputmask("99-9999999");
    $("#inputmask-decimal").inputmask("999.99");
    $("#inputmask-ssn").inputmask("999-99-9999");
}

/* form-elements.init.js */
function initFormElements() {
    switchBootstrap();
    bootstrapSwitchInit();
    fueluxCheckBoxInit();
    formWizardsInit();
    bootstrapDatepickerInit();
    bootstrapTimePickerInit();
    colorPickerInit();
    inputMaskInit();
}

/* form-validator.render.init.js */
function initFormValidator() {
    formValidatorInit();
}

/* file-manager.init.js */
function initFileManger() {
    plUploadInit();
    dropzoneInit();
}

/* inbox.init.js */
function initInbox() {
    coreInit();
}

/* finances.init.js */
function initFinances() {
    flotchartFinancesSimpleInit();
}

/* invoice.init.js */
function initInvoice() {
    coreInit();
}

/* bookings.init.js */
function initBookings() {
    tablesClassicInit();
    bootstrapSelectInit();
}

/* medical-overview.init.js */
function initMedicalOverview() {
    easyPieInit();
    medicalInit();
}

/* medical-appointments.init.js */
function initMedicalAppointments() {
    bootstrapDatepickerInit();
}

/* medical-metrics.init.js */
function initMedicalMetrics() {
    medicalInit();
}

/* social.init.js */
function initSocial() {
    holderInit();
}

/* shop-edit-products.init.js */
function initShopEditProductsInit() {
    wysiHTML5();
}

/* shop-products.init.js */
function initShopProductsInit() {
    holderInit();
    bootstrapSelectInit();
    uniformInit();
    tablesClassicInit();
}

/* my-account.init.js */
function initMyAccountInit() {
    holderInit();
    wysiHTML5();
}

/* ratings.init.js */
function initRatings() {
    holderInit();
    tablesResponsiveFootableInit();
}

/* remove body style */
function removeStyleAttr() {
    var $body = $("body");
        setTimeout(function() {
            $body.prop("style", null);
        }, 1000);
}

/* charts.init.js */
function initCharts() {
    flotchartSimple02Init();
    flotChartLineInit();
    flotchartBarsOrderedInit();
    flotchartBarsStackedInit();
    flotchartDonutInit();
    flotchartPieInit();
    flotchartBarsHorizontalInit();
    flotchartAutoUpdatingInit();
}

/**
 * Organize running of functions
 */
$(function() {
    var $body       = $("body"),
        $document   = $("document");

        /* ratings.init.js */
        initRatings();
        /* my-account.init.js */
        initMyAccountInit();
        /* shop-products.init.js */
        initShopProductsInit();
        /* shop-edit-products.init.js */
        initShopEditProductsInit();
        /* social.init.js */
        initSocial();
        /* medical-metrics.init.js */
        initMedicalMetrics();
        /* medical-appointments.init.js */
        initMedicalAppointments();
        /* medical-overview.init.js */
        initMedicalOverview();
        /* bookings.init.js */
        initBookings();
        /* invoice.init.js */
        initInvoice();
        /* inbox.init.js */
        initInbox();
        /* file-manager.init.js */
        initFileManger();
        /* form-validator.render.init.js */
        initFormValidator();
        /* form-elements.init.js */
        if ( typeof melisUserTabs != 'undefined' && activeTabId === 'id_melis_form_elements' ) {
            initFormElements();
        }
        /* else {
            initFormElements();
        } */
        /* form-wizards.render.init.js */
        initFormWizards();
        /* sliders.init.js */
        initSliders();
        /* charts.init.js */
        initCharts();
        /* calendar.render.init.js */
        initCalendar();
        /* widgets.init.js */
        initWidgets();
        /* modals.init.js */
        initModals();
        /* notifications.init.js */
        initNotifications();
        /* tables-responsive.init.js */
        tablesResponsiveInit();
        /* tables.init.js */
        tablesInit();
        /* buttons.init.js */
        initButtons();
        /* carousel.init.js */
        initCarousel();
        /* gallery-video.init.js */
        initGalleryVideo();
        /* photo-gallery.init.js */
        initPhotoGallery();
        /* events.init.js */
        initEvents();
        /* support-answers.init.js */
        initSupportAnswers();
        /* support-questions.init.js */
        initSupportQuestions();
        /* support-tickets.init.js */
        initSupportTickets();
        /* portfolio.init.js */
        initPortfolio();
        /* google maps vector init */
        mapsVectorInit();

        $(".dataTables_wrapper").find(".separator").addClass("d-flex flex-row");

        $body.on("click", "#blueimp-gallery .close.no-ajaxify", function() {
            removeStyleAttr();
        });

        $document.on("keyup", function(e) {
            if ( e.key === 'Escape' ) {
                removeStyleAttr();
            }
        });

        // spinner/loading button
        $body.on("click", ".spinner-border-btn", function() {
            var $this       = $(this),
                $spinner    = $(".spinner-border"),
                spinnerHtml = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

                if ( $spinner.length === 0 ) {
                    $this.prepend( spinnerHtml );
                }
        });

        $body.on("click", ".page-elements a", function(e) {
            e.preventDefault();
        });

        $body.on("click", ".show-code", function() {
            var $this = $(this),
                $sliderCode = $this.closest(".tns-wrapper").find(".slider-code");

                $sliderCode.toggleClass("shown");

                if ( $sliderCode.hasClass("shown") ) {
                    $sliderCode.fadeIn("slow");
                }
                else {
                    $sliderCode.fadeOut("slow");
                }
        });
});