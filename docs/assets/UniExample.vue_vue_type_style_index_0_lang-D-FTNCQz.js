import{l as ke,p as Me,d as R,q as Q,s as je,t as Ve,r as D,o as F,c as $,f as b,v as B,n as Ne,x as ue,a as r,e as m,y as Oe,z as xe,A as H,_ as Ie,w as l,P as He,B as fe,C as Je,D as qe,F as se,G as Ae,H as Ge,I as We,J as Ze,K as Qe,L as $e,M as Ke,N as L,O as Y,b as a,Q as X,h as C,R as be,S as Xe,T as ye,U as Ue,V as Se,W as Ye,X as et,Y as ze,Z as tt,$ as nt,a0 as rt,a1 as lt,a2 as at,a3 as it,a4 as st,a5 as ot,a6 as ut,a7 as pt,a8 as ne,a9 as q,aa as te,ab as dt,ac as Z,i as mt,ad as oe,ae as gt,af as ft,ag as bt,j as V,m as N,ah as Fe,ai as _e,aj as ct,k as pe,g as Ce,ak as yt,al as xt}from"./index-CFvlcqMZ.js";import{s as wt}from"./App-BTwiwmkJ.js";var De={exports:{}};(function(T){var o=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(d){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,t={},e={manual:d.Prism&&d.Prism.manual,disableWorkerMessageHandler:d.Prism&&d.Prism.disableWorkerMessageHandler,util:{encode:function f(g){return g instanceof i?new i(g.type,f(g.content),g.alias):Array.isArray(g)?g.map(f):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++n}),f.__id},clone:function f(g,y){y=y||{};var x,w;switch(e.util.type(g)){case"Object":if(w=e.util.objId(g),y[w])return y[w];x={},y[w]=x;for(var U in g)g.hasOwnProperty(U)&&(x[U]=f(g[U],y));return x;case"Array":return w=e.util.objId(g),y[w]?y[w]:(x=[],y[w]=x,g.forEach(function(I,A){x[A]=f(I,y)}),x);default:return g}},getLanguage:function(f){for(;f;){var g=u.exec(f.className);if(g)return g[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,g){f.className=f.className.replace(RegExp(u,"gi"),""),f.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(x){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(x.stack)||[])[1];if(f){var g=document.getElementsByTagName("script");for(var y in g)if(g[y].src==f)return g[y]}return null}},isActive:function(f,g,y){for(var x="no-"+g;f;){var w=f.classList;if(w.contains(g))return!0;if(w.contains(x))return!1;f=f.parentElement}return!!y}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(f,g){var y=e.util.clone(e.languages[f]);for(var x in g)y[x]=g[x];return y},insertBefore:function(f,g,y,x){x=x||e.languages;var w=x[f],U={};for(var I in w)if(w.hasOwnProperty(I)){if(I==g)for(var A in y)y.hasOwnProperty(A)&&(U[A]=y[A]);y.hasOwnProperty(I)||(U[I]=w[I])}var P=x[f];return x[f]=U,e.languages.DFS(e.languages,function(M,G){G===P&&M!=f&&(this[M]=U)}),U},DFS:function f(g,y,x,w){w=w||{};var U=e.util.objId;for(var I in g)if(g.hasOwnProperty(I)){y.call(g,I,g[I],x||I);var A=g[I],P=e.util.type(A);P==="Object"&&!w[U(A)]?(w[U(A)]=!0,f(A,y,null,w)):P==="Array"&&!w[U(A)]&&(w[U(A)]=!0,f(A,y,I,w))}}},plugins:{},highlightAll:function(f,g){e.highlightAllUnder(document,f,g)},highlightAllUnder:function(f,g,y){var x={callback:y,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",x),x.elements=Array.prototype.slice.apply(x.container.querySelectorAll(x.selector)),e.hooks.run("before-all-elements-highlight",x);for(var w=0,U;U=x.elements[w++];)e.highlightElement(U,g===!0,x.callback)},highlightElement:function(f,g,y){var x=e.util.getLanguage(f),w=e.languages[x];e.util.setLanguage(f,x);var U=f.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&e.util.setLanguage(U,x);var I=f.textContent,A={element:f,language:x,grammar:w,code:I};function P(G){A.highlightedCode=G,e.hooks.run("before-insert",A),A.element.innerHTML=A.highlightedCode,e.hooks.run("after-highlight",A),e.hooks.run("complete",A),y&&y.call(A.element)}if(e.hooks.run("before-sanity-check",A),U=A.element.parentElement,U&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!A.code){e.hooks.run("complete",A),y&&y.call(A.element);return}if(e.hooks.run("before-highlight",A),!A.grammar){P(e.util.encode(A.code));return}if(g&&d.Worker){var M=new Worker(e.filename);M.onmessage=function(G){P(G.data)},M.postMessage(JSON.stringify({language:A.language,code:A.code,immediateClose:!0}))}else P(e.highlight(A.code,A.grammar,A.language))},highlight:function(f,g,y){var x={code:f,grammar:g,language:y};if(e.hooks.run("before-tokenize",x),!x.grammar)throw new Error('The language "'+x.language+'" has no grammar.');return x.tokens=e.tokenize(x.code,x.grammar),e.hooks.run("after-tokenize",x),i.stringify(e.util.encode(x.tokens),x.language)},tokenize:function(f,g){var y=g.rest;if(y){for(var x in y)g[x]=y[x];delete g.rest}var w=new k;return E(w,w.head,f),v(f,w,g,w.head,0),c(w)},hooks:{all:{},add:function(f,g){var y=e.hooks.all;y[f]=y[f]||[],y[f].push(g)},run:function(f,g){var y=e.hooks.all[f];if(!(!y||!y.length))for(var x=0,w;w=y[x++];)w(g)}},Token:i};d.Prism=e;function i(f,g,y,x){this.type=f,this.content=g,this.alias=y,this.length=(x||"").length|0}i.stringify=function f(g,y){if(typeof g=="string")return g;if(Array.isArray(g)){var x="";return g.forEach(function(P){x+=f(P,y)}),x}var w={type:g.type,content:f(g.content,y),tag:"span",classes:["token",g.type],attributes:{},language:y},U=g.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(w.classes,U):w.classes.push(U)),e.hooks.run("wrap",w);var I="";for(var A in w.attributes)I+=" "+A+'="'+(w.attributes[A]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+I+">"+w.content+"</"+w.tag+">"};function p(f,g,y,x){f.lastIndex=g;var w=f.exec(y);if(w&&x&&w[1]){var U=w[1].length;w.index+=U,w[0]=w[0].slice(U)}return w}function v(f,g,y,x,w,U){for(var I in y)if(!(!y.hasOwnProperty(I)||!y[I])){var A=y[I];A=Array.isArray(A)?A:[A];for(var P=0;P<A.length;++P){if(U&&U.cause==I+","+P)return;var M=A[P],G=M.inside,we=!!M.lookbehind,Te=!!M.greedy,Re=M.alias;if(Te&&!M.pattern.global){var Le=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,Le+"g")}for(var ve=M.pattern||M,j=x.next,J=w;j!==g.tail&&!(U&&J>=U.reach);J+=j.value.length,j=j.next){var K=j.value;if(g.length>f.length)return;if(!(K instanceof i)){var re=1,O;if(Te){if(O=p(ve,J,f,we),!O||O.index>=f.length)break;var le=O.index,Pe=O.index+O[0].length,W=J;for(W+=j.value.length;le>=W;)j=j.next,W+=j.value.length;if(W-=j.value.length,J=W,j.value instanceof i)continue;for(var ee=j;ee!==g.tail&&(W<Pe||typeof ee.value=="string");ee=ee.next)re++,W+=ee.value.length;re--,K=f.slice(J,W),O.index-=J}else if(O=p(ve,0,K,we),!O)continue;var le=O.index,ae=O[0],de=K.slice(0,le),Ee=K.slice(le+ae.length),me=J+K.length;U&&me>U.reach&&(U.reach=me);var ie=j.prev;de&&(ie=E(g,ie,de),J+=de.length),S(g,ie,re);var Be=new i(I,G?e.tokenize(ae,G):ae,Re,ae);if(j=E(g,ie,Be),Ee&&E(g,j,Ee),re>1){var ge={cause:I+","+P,reach:me};v(f,g,y,j.prev,J,ge),U&&ge.reach>U.reach&&(U.reach=ge.reach)}}}}}}function k(){var f={value:null,prev:null,next:null},g={value:null,prev:f,next:null};f.next=g,this.head=f,this.tail=g,this.length=0}function E(f,g,y){var x=g.next,w={value:y,prev:g,next:x};return g.next=w,x.prev=w,f.length++,w}function S(f,g,y){for(var x=g.next,w=0;w<y&&x!==f.tail;w++)x=x.next;g.next=x,x.prev=g,f.length-=w}function c(f){for(var g=[],y=f.head.next;y!==f.tail;)g.push(y.value),y=y.next;return g}if(!d.document)return d.addEventListener&&(e.disableWorkerMessageHandler||d.addEventListener("message",function(f){var g=JSON.parse(f.data),y=g.language,x=g.code,w=g.immediateClose;d.postMessage(e.highlight(x,e.languages[y],y)),w&&d.close()},!1)),e;var h=e.util.currentScript();h&&(e.filename=h.src,h.hasAttribute("data-manual")&&(e.manual=!0));function z(){e.manual||e.highlightAll()}if(!e.manual){var _=document.readyState;_==="loading"||_==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return e}(o);T.exports&&(T.exports=s),typeof ke<"u"&&(ke.Prism=s),s.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},s.languages.markup.tag.inside["attr-value"].inside.entity=s.languages.markup.entity,s.languages.markup.doctype.inside["internal-subset"].inside=s.languages.markup,s.hooks.add("wrap",function(d){d.type==="entity"&&(d.attributes.title=d.content.replace(/&amp;/,"&"))}),Object.defineProperty(s.languages.markup.tag,"addInlined",{value:function(u,n){var t={};t["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:s.languages[n]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var e={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};e["language-"+n]={pattern:/[\s\S]+/,inside:s.languages[n]};var i={};i[u]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return u}),"i"),lookbehind:!0,greedy:!0,inside:e},s.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(s.languages.markup.tag,"addAttribute",{value:function(d,u){s.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+d+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:s.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),s.languages.html=s.languages.markup,s.languages.mathml=s.languages.markup,s.languages.svg=s.languages.markup,s.languages.xml=s.languages.extend("markup",{}),s.languages.ssml=s.languages.xml,s.languages.atom=s.languages.xml,s.languages.rss=s.languages.xml,function(d){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;d.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},d.languages.css.atrule.inside.rest=d.languages.css;var n=d.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(s),s.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},s.languages.javascript=s.languages.extend("clike",{"class-name":[s.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),s.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,s.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:s.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:s.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:s.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:s.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:s.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),s.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:s.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),s.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),s.languages.markup&&(s.languages.markup.tag.addInlined("script","javascript"),s.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),s.languages.js=s.languages.javascript,function(){if(typeof s>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var d="Loading…",u=function(h,z){return"✖ Error "+h+" while fetching file: "+z},n="✖ Error: File does not exist or is empty",t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},e="data-src-status",i="loading",p="loaded",v="failed",k="pre[data-src]:not(["+e+'="'+p+'"]):not(['+e+'="'+i+'"])';function E(h,z,_){var f=new XMLHttpRequest;f.open("GET",h,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?z(f.responseText):f.status>=400?_(u(f.status,f.statusText)):_(n))},f.send(null)}function S(h){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(z){var _=Number(z[1]),f=z[2],g=z[3];return f?g?[_,Number(g)]:[_,void 0]:[_,_]}}s.hooks.add("before-highlightall",function(h){h.selector+=", "+k}),s.hooks.add("before-sanity-check",function(h){var z=h.element;if(z.matches(k)){h.code="",z.setAttribute(e,i);var _=z.appendChild(document.createElement("CODE"));_.textContent=d;var f=z.getAttribute("data-src"),g=h.language;if(g==="none"){var y=(/\.(\w+)$/.exec(f)||[,"none"])[1];g=t[y]||y}s.util.setLanguage(_,g),s.util.setLanguage(z,g);var x=s.plugins.autoloader;x&&x.loadLanguages(g),E(f,function(w){z.setAttribute(e,p);var U=S(z.getAttribute("data-range"));if(U){var I=w.split(/\r\n?|\n/g),A=U[0],P=U[1]==null?I.length:U[1];A<0&&(A+=I.length),A=Math.max(0,Math.min(A-1,I.length)),P<0&&(P+=I.length),P=Math.max(0,Math.min(P,I.length)),w=I.slice(A,P).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(A+1))}_.textContent=w,s.highlightElement(_)},function(w){z.setAttribute(e,v),_.textContent=w})}}),s.plugins.fileHighlight={highlight:function(z){for(var _=(z||document).querySelectorAll(k),f=0,g;g=_[f++];)s.highlightElement(g)}};var c=!1;s.fileHighlight=function(){c||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),c=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(De);var Tt=De.exports;const vt=Me(Tt);(function(T){var o=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,s=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,d={pattern:RegExp(/(^|[^\w.])/.source+s+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};T.languages.java=T.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[d,{pattern:RegExp(/(^|[^\w.])/.source+s+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:d.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+s+/[A-Z]\w*\b/.source),lookbehind:!0,inside:d.inside}],keyword:o,function:[T.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),T.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),T.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":d,keyword:o,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+s+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:d.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+s+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:d.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return o.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);(function(T){var o=T.util.clone(T.languages.javascript),s="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function d(t,e){return t=t.replace(/<S>/g,function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"}).replace(/<BRACES>/g,function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"}).replace(/<SPREAD>/g,function(){return s}),RegExp(t,e)}s=d(s).source,T.languages.jsx=T.languages.extend("markup",o),T.languages.jsx.tag.pattern=d(`</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>`),T.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,T.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,T.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,T.languages.jsx.tag.inside.comment=o.comment,T.languages.insertBefore("inside","attr-name",{spread:{pattern:d("<SPREAD>"),inside:T.languages.jsx}},T.languages.jsx.tag),T.languages.insertBefore("inside","special-attr",{script:{pattern:d("=<BRACES>"),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:T.languages.jsx}}},T.languages.jsx.tag);var u=function(t){return t?typeof t=="string"?t:typeof t.content=="string"?t.content:t.content.map(u).join(""):""},n=function(t){for(var e=[],i=0;i<t.length;i++){var p=t[i],v=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?e.length>0&&e[e.length-1].tagName===u(p.content[0].content[1])&&e.pop():p.content[p.content.length-1].content==="/>"||e.push({tagName:u(p.content[0].content[1]),openedBraces:0}):e.length>0&&p.type==="punctuation"&&p.content==="{"?e[e.length-1].openedBraces++:e.length>0&&e[e.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?e[e.length-1].openedBraces--:v=!0),(v||typeof p=="string")&&e.length>0&&e[e.length-1].openedBraces===0){var k=u(p);i<t.length-1&&(typeof t[i+1]=="string"||t[i+1].type==="plain-text")&&(k+=u(t[i+1]),t.splice(i+1,1)),i>0&&(typeof t[i-1]=="string"||t[i-1].type==="plain-text")&&(k=u(t[i-1])+k,t.splice(i-1,1),i--),t[i]=new T.Token("plain-text",k,null,k)}p.content&&typeof p.content!="string"&&n(p.content)}};T.hooks.add("after-tokenize",function(t){t.language!=="jsx"&&t.language!=="tsx"||n(t.tokens)})})(Prism);(function(T){var o=T.util.clone(T.languages.typescript);T.languages.tsx=T.languages.extend("jsx",o),delete T.languages.tsx.parameter,delete T.languages.tsx["literal-property"];var s=T.languages.tsx.tag;s.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+s.pattern.source+")",s.pattern.flags),s.lookbehind=!0})(Prism);(function(){if(typeof Prism<"u"&&typeof document<"u"){var T="line-numbers",o=/\n(?!$)/g,s=Prism.plugins.lineNumbers={getLine:function(n,t){if(n.tagName==="PRE"&&n.classList.contains(T)){var e=n.querySelector(".line-numbers-rows");if(e){var i=parseInt(n.getAttribute("data-start"),10)||1,p=i+(e.children.length-1);t<i&&(t=i),t>p&&(t=p);var v=t-i;return e.children[v]}}},resize:function(n){u([n])},assumeViewportIndependence:!0},d=void 0;window.addEventListener("resize",function(){s.assumeViewportIndependence&&d===window.innerWidth||(d=window.innerWidth,u(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))}),Prism.hooks.add("complete",function(n){if(n.code){var t=n.element,e=t.parentNode;if(e&&/pre/i.test(e.nodeName)&&!t.querySelector(".line-numbers-rows")&&Prism.util.isActive(t,T)){t.classList.remove(T),e.classList.add(T);var i,p=n.code.match(o),v=p?p.length+1:1,k=new Array(v+1).join("<span></span>");(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=k,e.hasAttribute("data-start")&&(e.style.counterReset="linenumber "+(parseInt(e.getAttribute("data-start"),10)-1)),n.element.appendChild(i),u([e]),Prism.hooks.run("line-numbers",n)}}}),Prism.hooks.add("line-numbers",function(n){n.plugins=n.plugins||{},n.plugins.lineNumbers=!0})}function u(n){if((n=n.filter(function(e){var i,p=(i=e,i?window.getComputedStyle?getComputedStyle(i):i.currentStyle||null:null)["white-space"];return p==="pre-wrap"||p==="pre-line"})).length!=0){var t=n.map(function(e){var i=e.querySelector("code"),p=e.querySelector(".line-numbers-rows");if(i&&p){var v=e.querySelector(".line-numbers-sizer"),k=i.textContent.split(o);v||((v=document.createElement("span")).className="line-numbers-sizer",i.appendChild(v)),v.innerHTML="0",v.style.display="block";var E=v.getBoundingClientRect().height;return v.innerHTML="",{element:e,lines:k,lineHeights:[],oneLinerHeight:E,sizer:v}}}).filter(Boolean);t.forEach(function(e){var i=e.sizer,p=e.lines,v=e.lineHeights,k=e.oneLinerHeight;v[p.length-1]=void 0,p.forEach(function(E,S){if(E&&E.length>1){var c=i.appendChild(document.createElement("span"));c.style.display="block",c.textContent=E}else v[S]=k})}),t.forEach(function(e){for(var i=e.sizer,p=e.lineHeights,v=0,k=0;k<p.length;k++)p[k]===void 0&&(p[k]=i.children[v++].getBoundingClientRect().height)}),t.forEach(function(e){var i=e.sizer,p=e.element.querySelector(".line-numbers-rows");i.style.display="none",i.innerHTML="",e.lineHeights.forEach(function(v,k){p.children[k].style.height=v+"px"})})}}})();const Et={key:0},kt=R({__name:"HighlightCode",props:{txt:{},lang:{}},setup(T){const o=T,s=Q();je(d),Ve(d);function d(){const n=s.value&&s.value.querySelector("code");n&&vt.highlightElement(n)}function u(){var t,e;const n=(o.txt||((e=(t=s.value)==null?void 0:t.querySelector("code"))==null?void 0:e.innerText)||"没有内容").trim();xe(n).then(()=>{H.success("复制成功")})}return(n,t)=>{const e=D("ElButton");return F(),$("div",{ref_key:"codeRef",ref:s,style:{position:"relative"}},[n.txt?(F(),$("pre",Et,[b("code",{class:Ne(`line-numbers language-${n.lang||"html"}`)},B(n.txt?n.txt+"":""),3)])):ue(n.$slots,"default",{key:1},void 0,!0),r(e,{onClick:u,icon:m(Oe),size:"small",style:{position:"absolute",right:"15px",top:"15px"},type:"primary"},null,8,["icon"])],512)}}}),At=Ie(kt,[["__scopeId","data-v-e60bff00"]]),Ut={class:"uni-temp"},St={class:"uni-temp-box"},zt={class:"uni-temp-ops"},Ft={key:0,class:"uni-temp-code"},Ct=R({__name:"UniTempCard",props:{txt:{}},setup(T){const o=T,s=Q(!1);function d(){const t=new URL(location.href);t.hash="#/repl",Ae({"src/App.vue":o.txt}),window.open(t.toString()),Ae("")}function u(){xe(o.txt||"没有内容").then(()=>{H.success("复制成功")})}function n(){s.value=!s.value}return(t,e)=>{const i=D("ElDivider"),p=D("el-icon");return F(),$("div",Ut,[b("div",St,[ue(t.$slots,"default",{},void 0,!0)]),r(i,{style:{margin:"0",padding:"0"}}),b("div",zt,[r(m(fe),{content:"在 Playground 中编辑"},{default:l(()=>[r(p,{onClick:d},{default:l(()=>[r(m(He))]),_:1})]),_:1}),r(m(fe),{content:"复制代码"},{default:l(()=>[r(p,{onClick:u},{default:l(()=>[r(m(Je))]),_:1})]),_:1}),r(m(fe),{content:"查看源代码"},{default:l(()=>[r(p,{onClick:n},{default:l(()=>[r(m(qe))]),_:1})]),_:1})]),s.value?(F(),$("div",Ft,[r(m(At),{txt:t.txt},null,8,["txt"])])):se("",!0)])}}}),ht=Ie(Ct,[["__scopeId","data-v-8b1f3450"]]),It=R({inheritAttrs:!1,__name:"UniAnchor",props:{items:{}},setup(T){const o=R({props:["items"],render(){return(this.$props.items||[]).map(d=>r(Qe,{key:d.key,href:d.key},{default(){return d.title},"sub-link"(){var u;return(u=d.children)!=null&&u.length?r(o,{items:d.children},null):null}}))}});return(s,d)=>(F(),$("div",null,[r(m(Ze),Ge({direction:"vertical",type:"default",offset:30,onClick:d[0]||(d[0]=We(()=>{},["prevent"]))},s.$attrs),{default:l(()=>[r(m(o),{items:s.items},null,8,["items"])]),_:1},16)]))}}),$t={__name:"App",setup(T){const o=Q("自定义的");return(s,d)=>(F(),$(L,null,[b("h1",null,B(o.value),1),$e(b("input",{"onUpdate:modelValue":d[0]||(d[0]=u=>o.value=u)},null,512),[[Ke,o.value]])],64))}},_t={style:{display:"flex",gap:"10px",color:"#fff"}},Dt={style:{display:"flex",gap:"10px",color:"#fff"}},Rt=R({__name:"functionLib1",setup(T){const o=Y({clipVal:"这是一段文案",color:"#1E90FF",downloadText:"这是要下载的文案",downloadName:"a.txt",numberText:"1234567890",str1:"uni-form",str2:"uni-form",isObjStr1:!0,objStr1:JSON.stringify({"data-box":"1",onClick:"1","on-change":"1"},null,2),url:"https://www.baidu.com?a=b&c=d&a=c#aa?a=d&e=f"});async function s(t=3e3){await st(t),H.success("延迟提示")}function d(){o.isObjStr1=!0;try{return JSON.stringify(ot(JSON.parse(o.objStr1)),null,2)}catch{o.isObjStr1=!1}}function u(){o.clipVal.length?xe(o.clipVal).then(()=>{H.success("复制成功")}):H.warning("没有可以复制的文案")}function n(){if(o.downloadName||H.warning("请输入文件名"),o.downloadText.length){const t=new Blob([o.downloadText]);ut(t,o.downloadName)}else H.warning("没有可以下载的文案")}return(t,e)=>{const i=D("ElButton"),p=D("ElInput"),v=D("el-color-picker"),k=D("ElAlert");return F(),$(L,null,[e[45]||(e[45]=b("h2",{"data-id":""},"写入剪贴板",-1)),r(p,{modelValue:o.clipVal,"onUpdate:modelValue":e[0]||(e[0]=E=>o.clipVal=E),placeholder:"请输入需要复制的文案"},{append:l(()=>[r(i,{onClick:u},{default:l(()=>e[11]||(e[11]=[a("复制")])),_:1})]),_:1},8,["modelValue"]),e[46]||(e[46]=b("h2",{"data-id":""},"颜色值转换",-1)),r(v,{modelValue:o.color,"onUpdate:modelValue":e[1]||(e[1]=E=>o.color=E)},null,8,["modelValue"]),e[47]||(e[47]=b("h3",{"data-id":"","data-level":"1"},"hex - rgb",-1)),b("p",null,[r(m(C),{style:X(`color: ${o.color};`)},{default:l(()=>[a(B(o.color),1)]),_:1},8,["style"]),r(m(C),null,{default:l(()=>e[12]||(e[12]=[a(" -> ")])),_:1}),r(m(C),{style:X(`color: ${o.color};`)},{default:l(()=>[a(B(m(be)(o.color)),1)]),_:1},8,["style"])]),e[48]||(e[48]=b("h3",{"data-id":"","data-level":"1"},"rgb - hex",-1)),b("p",null,[r(m(C),{style:X(`color: ${o.color};`)},{default:l(()=>[a(B(m(be)(o.color)),1)]),_:1},8,["style"]),r(m(C),null,{default:l(()=>e[13]||(e[13]=[a(" -> ")])),_:1}),r(m(C),{style:X(`color: ${o.color};`)},{default:l(()=>[a(B(m(Xe)(...m(be)(o.color))),1)]),_:1},8,["style"])]),e[49]||(e[49]=b("h3",{"data-id":"","data-level":"1"},"颜色加深",-1)),b("div",_t,[(F(),$(L,null,ye(9,E=>b("div",{style:X(`background: ${m(Ue)(o.color,E/10)}; width: 80px; line-height: 80px; text-align: center`)},B(m(Ue)(o.color,E/10)),5)),64))]),e[50]||(e[50]=b("h3",{"data-id":"","data-level":"1"},"颜色变浅",-1)),b("div",Dt,[(F(),$(L,null,ye(9,E=>b("div",{style:X(`background: ${m(Se)(o.color,E/10)}; width: 80px; line-height: 80px; text-align: center`)},B(m(Se)(o.color,E/10)),5)),64))]),e[51]||(e[51]=b("h3",{"data-id":"","data-level":"1"},"ElementPlus 主题变量",-1)),b("pre",null,[b("code",null,B(JSON.stringify(m(Ye)(o.color),null,2)),1)]),e[52]||(e[52]=b("h2",{"data-id":""},"json 拷贝",-1)),r(m(C),{type:"primary"},{default:l(()=>e[14]||(e[14]=[a("cloneJson({a: 'b'})")])),_:1}),e[53]||(e[53]=b("h2",{"data-id":""},"文件下载",-1)),b("p",null,[r(m(C),null,{default:l(()=>e[15]||(e[15]=[a("主要用于配合后台下载文件的")])),_:1})]),r(p,{type:"textarea",modelValue:o.downloadText,"onUpdate:modelValue":e[2]||(e[2]=E=>o.downloadText=E),placeholder:"请输入文案"},null,8,["modelValue"]),e[54]||(e[54]=b("div",{style:{height:"15px"}},null,-1)),r(p,{modelValue:o.downloadName,"onUpdate:modelValue":e[3]||(e[3]=E=>o.downloadName=E),placeholder:"请输入文件名"},{append:l(()=>[r(i,{onClick:n},{default:l(()=>e[16]||(e[16]=[a("下载")])),_:1})]),_:1},8,["modelValue"]),e[55]||(e[55]=b("h2",{"data-id":""},"千分位",-1)),r(p,{modelValue:o.numberText,"onUpdate:modelValue":e[4]||(e[4]=E=>o.numberText=E),placeholder:"请输入数字"},{append:l(()=>[a(B(m(et)(o.numberText)),1)]),_:1},8,["modelValue"]),e[56]||(e[56]=b("h2",{"data-id":""},"中划线转驼峰",-1)),r(p,{modelValue:o.str1,"onUpdate:modelValue":e[5]||(e[5]=E=>o.str1=E),placeholder:"请输入"},{append:l(()=>[a(B(m(ze)(o.str1)),1)]),_:1},8,["modelValue"]),b("p",null,[r(m(C),null,{default:l(()=>e[17]||(e[17]=[a("首字母也大写")])),_:1})]),r(p,{modelValue:o.str2,"onUpdate:modelValue":e[6]||(e[6]=E=>o.str2=E),placeholder:"请输入"},{append:l(()=>[a(B(m(ze)(o.str2,!0)),1)]),_:1},8,["modelValue"]),e[57]||(e[57]=b("h2",{"data-id":""},"对象key转驼峰",-1)),b("p",null,[r(m(C),null,{default:l(()=>e[18]||(e[18]=[a(" 转义 ")])),_:1}),r(m(C),{type:"primary"},{default:l(()=>e[19]||(e[19]=[a(" useAttrs ")])),_:1}),r(m(C),null,{default:l(()=>e[20]||(e[20]=[a(" 数据的 ")])),_:1}),r(m(C),{type:"primary"},{default:l(()=>e[21]||(e[21]=[a(" key ")])),_:1}),r(m(C),null,{default:l(()=>e[22]||(e[22]=[a(" 为驼峰 ")])),_:1})]),r(p,{type:"textarea",modelValue:o.objStr1,"onUpdate:modelValue":e[7]||(e[7]=E=>o.objStr1=E),autosize:{minRows:4,maxRows:10}},null,8,["modelValue"]),$e(r(k,{type:"warning"},{default:l(()=>e[23]||(e[23]=[a("输入有误")])),_:1},512),[[tt,!o.isObjStr1]]),b("pre",null,[b("code",null,B(d()),1)]),e[58]||(e[58]=b("h2",{"data-id":""},"切换全屏",-1)),r(i,{type:"primary",onClick:e[8]||(e[8]=E=>m(nt)())},{default:l(()=>e[24]||(e[24]=[a("切换")])),_:1}),e[59]||(e[59]=b("h2",{"data-id":""},"休眠/等待/延迟",-1)),r(i,{type:"primary",onClick:e[9]||(e[9]=E=>s(1e3))},{default:l(()=>e[25]||(e[25]=[a("延迟1s提示")])),_:1}),e[60]||(e[60]=b("h2",{"data-id":""},"url query",-1)),b("p",null,[r(m(C),null,{default:l(()=>e[26]||(e[26]=[a(" 无视查询字符串和哈希的顺序，只识别 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[27]||(e[27]=[a(" ? ")])),_:1}),r(m(C),null,{default:l(()=>e[28]||(e[28]=[a(" ，多个 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[29]||(e[29]=[a(" ? ")])),_:1}),r(m(C),null,{default:l(()=>e[30]||(e[30]=[a(" 会被合并 ")])),_:1})]),r(p,{modelValue:o.url,"onUpdate:modelValue":e[10]||(e[10]=E=>o.url=E)},null,8,["modelValue"]),b("p",null,[r(m(C),null,{default:l(()=>e[31]||(e[31]=[a(" 格式化查询字符串，重复 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[32]||(e[32]=[a("key")])),_:1}),r(m(C),null,{default:l(()=>e[33]||(e[33]=[a(" 后面的覆盖前面的，格式化后 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[34]||(e[34]=[a("Record<string, string>")])),_:1})]),b("pre",null,[b("code",null,B(JSON.stringify(m(rt)(o.url),null,2)),1)]),b("p",null,[r(m(C),null,{default:l(()=>e[35]||(e[35]=[a(" 格式化查询字符串，重复 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[36]||(e[36]=[a("key")])),_:1}),r(m(C),null,{default:l(()=>e[37]||(e[37]=[a(" 会形成数组，格式化后 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[38]||(e[38]=[a("Record<string, string | string[]>")])),_:1})]),b("pre",null,[b("code",null,B(JSON.stringify(m(lt)(o.url),null,2)),1)]),b("p",null,[r(m(C),null,{default:l(()=>e[39]||(e[39]=[a(" 格式化查询字符串，无论是否有重复的 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[40]||(e[40]=[a("key")])),_:1}),r(m(C),null,{default:l(()=>e[41]||(e[41]=[a(" ，值都会是数组，格式化后 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[42]||(e[42]=[a("Record<string, string[]>")])),_:1})]),b("pre",null,[b("code",null,B(JSON.stringify(m(at)(o.url),null,2)),1)]),b("p",null,[r(m(C),null,{default:l(()=>e[43]||(e[43]=[a(" 格式化查询字符串 ")])),_:1}),r(m(C),{type:"warning"},{default:l(()=>e[44]||(e[44]=[a("[string, string][]")])),_:1})]),b("pre",null,[b("code",null,B(JSON.stringify(m(it)(o.url),null,2)),1)])],64)}}}),Lt=`<template>
  <h2 data-id>写入剪贴板</h2>
  <ElInput v-model="state.clipVal" placeholder="请输入需要复制的文案">
    <template #append>
      <ElButton @click="copy">复制</ElButton>
    </template>
  </ElInput>
  <h2 data-id>颜色值转换</h2>
  <el-color-picker v-model="state.color" />
  <h3 data-id data-level="1">hex - rgb</h3>
  <p>
    <ElText :style="\`color: \${state.color};\`">{{ state.color }}</ElText>
    <ElText> -> </ElText>
    <ElText :style="\`color: \${state.color};\`">{{ hexToRgb(state.color) }}</ElText>
  </p>
  <h3 data-id data-level="1">rgb - hex</h3>
  <p>
    <ElText :style="\`color: \${state.color};\`">{{ hexToRgb(state.color) }}</ElText>
    <ElText> -> </ElText>
    <ElText :style="\`color: \${state.color};\`">{{ rgbToHex(...hexToRgb(state.color)) }}</ElText>
  </p>
  <h3 data-id data-level="1">颜色加深</h3>
  <div style="display: flex; gap: 10px; color: #fff">
    <div v-for="i in 9" :style="\`background: \${darken(state.color, i / 10)}; width: 80px; line-height: 80px; text-align: center\`">
      {{ darken(state.color, i / 10) }}
    </div>
  </div>
  <h3 data-id data-level="1">颜色变浅</h3>
  <div style="display: flex; gap: 10px; color: #fff">
    <div v-for="i in 9" :style="\`background: \${lighten(state.color, i / 10)}; width: 80px; line-height: 80px; text-align: center\`">
      {{ lighten(state.color, i / 10) }}
    </div>
  </div>
  <h3 data-id data-level="1">ElementPlus 主题变量</h3>
  <pre><code>{{ JSON.stringify(getElePrimaryColor(state.color), null, 2) }}</code></pre>
  <h2 data-id>json 拷贝</h2>
  <ElText type="primary">cloneJson({a: 'b'})</ElText>
  <h2 data-id>文件下载</h2>
  <p>
    <ElText>主要用于配合后台下载文件的</ElText>
  </p>
  <ElInput type="textarea" v-model="state.downloadText" placeholder="请输入文案" />
  <div style="height: 15px"></div>
  <ElInput v-model="state.downloadName" placeholder="请输入文件名">
    <template #append>
      <ElButton @click="downloadFn">下载</ElButton>
    </template>
  </ElInput>
  <h2 data-id>千分位</h2>
  <ElInput v-model="state.numberText" placeholder="请输入数字">
    <template #append>
      {{ splitNumber(state.numberText) }}
    </template>
  </ElInput>
  <h2 data-id>中划线转驼峰</h2>
  <ElInput v-model="state.str1" placeholder="请输入">
    <template #append>
      {{ centerLineToHump(state.str1) }}
    </template>
  </ElInput>
  <p>
    <ElText>首字母也大写</ElText>
  </p>
  <ElInput v-model="state.str2" placeholder="请输入">
    <template #append>
      {{ centerLineToHump(state.str2, true) }}
    </template>
  </ElInput>
  <h2 data-id>对象key转驼峰</h2>
  <p>
    <ElText> 转义 </ElText>
    <ElText type="primary"> useAttrs </ElText>
    <ElText> 数据的 </ElText>
    <ElText type="primary"> key </ElText>
    <ElText> 为驼峰 </ElText>
  </p>
  <ElInput type="textarea" v-model="state.objStr1" :autosize="{ minRows: 4, maxRows: 10 }" />
  <ElAlert v-show="!state.isObjStr1" type="warning">输入有误</ElAlert>
  <pre><code>{{ _toHumpObj() }}</code></pre>
  <h2 data-id>切换全屏</h2>
  <!-- toggleFullScreen(true) 指定全屏 -->
  <!-- toggleFullScreen(false) 指定退出全屏 -->
  <!-- toggleFullScreen(true, {el}) 指定全屏的元素 -->
  <!-- toggleFullScreen(false, {el}) 指定退出全屏的元素 -->
  <!-- toggleFullScreen(null, {el}) 切换全屏的元素 -->
  <ElButton type="primary" @click="toggleFullScreen()">切换</ElButton>
  <h2 data-id>休眠/等待/延迟</h2>
  <ElButton type="primary" @click="_sleep(1000)">延迟1s提示</ElButton>
  <h2 data-id>url query</h2>
  <p>
    <ElText> 无视查询字符串和哈希的顺序，只识别 </ElText>
    <ElText type="warning"> ? </ElText>
    <ElText> ，多个 </ElText>
    <ElText type="warning"> ? </ElText>
    <ElText> 会被合并 </ElText>
  </p>
  <ElInput v-model="state.url" />
  <p>
    <ElText> 格式化查询字符串，重复 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> 后面的覆盖前面的，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQuery(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串，重复 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> 会形成数组，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string | string[]&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryHasArray(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串，无论是否有重复的 </ElText>
    <ElText type="warning">key</ElText>
    <ElText> ，值都会是数组，格式化后 </ElText>
    <ElText type="warning">Record&lt;string, string[]&gt;</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryArray(state.url), null, 2) }}</code></pre>
  <p>
    <ElText> 格式化查询字符串 </ElText>
    <ElText type="warning">[string, string][]</ElText>
  </p>
  <pre><code>{{ JSON.stringify(getUrlQueryToArray(state.url), null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage, ElText } from 'element-plus'
import {
  clipboardWriteText,
  sleep,
  toggleFullScreen,
  toHumpObj,
  centerLineToHump,
  hexToRgb,
  splitNumber,
  rgbToHex,
  darken,
  lighten,
  getElePrimaryColor,
  downloadFile,
  getUrlQuery,
  getUrlQueryHasArray,
  getUrlQueryToArray,
  getUrlQueryArray,
} from 'xuzn-ui'
const state = reactive({
  clipVal: '这是一段文案',
  color: '#1E90FF',
  downloadText: '这是要下载的文案',
  downloadName: 'a.txt',
  numberText: '1234567890',
  str1: 'uni-form',
  str2: 'uni-form',
  isObjStr1: true,
  objStr1: JSON.stringify({ 'data-box': '1', onClick: '1', 'on-change': '1' }, null, 2),
  url: 'https://www.baidu.com?a=b&c=d&a=c#aa?a=d&e=f',
})
async function _sleep(time: number = 3000) {
  await sleep(time)
  ElMessage.success('延迟提示')
}
function _toHumpObj() {
  state.isObjStr1 = true
  try {
    return JSON.stringify(toHumpObj(JSON.parse(state.objStr1)), null, 2)
  } catch (error) {
    state.isObjStr1 = false
  }
}
function copy() {
  if (state.clipVal.length) {
    clipboardWriteText(state.clipVal).then(() => {
      ElMessage.success('复制成功')
    })
  } else {
    ElMessage.warning('没有可以复制的文案')
  }
}
function downloadFn() {
  if (!state.downloadName) {
    ElMessage.warning('请输入文件名')
  }
  if (state.downloadText.length) {
    const blob = new Blob([state.downloadText])
    downloadFile(blob, state.downloadName)
  } else {
    ElMessage.warning('没有可以下载的文案')
  }
}
<\/script>
`,Pt=R({__name:"UniCheckboxGroup1",setup(T){const o=Q([1]),s=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(d,u)=>{const n=D("ElText");return F(),$(L,null,[u[7]||(u[7]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(n,{type:"warning"},{default:l(()=>u[1]||(u[1]=[a(" UniCheckboxGroup ")])),_:1}),r(n,null,{default:l(()=>u[2]||(u[2]=[a(" 就是将 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[3]||(u[3]=[a(" ElCheckbox ")])),_:1}),r(n,null,{default:l(()=>u[4]||(u[4]=[a(" 改成 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[5]||(u[5]=[a(" options ")])),_:1}),r(n,null,{default:l(()=>u[6]||(u[6]=[a(" 配置传参 ")])),_:1})]),r(m(pt),{options:s,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=t=>o.value=t)},null,8,["modelValue"])],64)}}}),Bt=`<template>
  <UniCheckboxGroup :options="options" v-model="val" />
</template>
<script setup lang="ts">
import { UniCheckboxGroup } from 'xuzn-ui'
import { ref } from 'vue'
const val = ref([1])
const options = [
  { value: 1, label: '关羽' },
  { value: 2, label: '张飞' },
]
<\/script>
`,Mt=R({__name:"UniForm1",setup(T){const o=Y({}),s=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],d=[{key:"id",label:"ID"},{key:"title",label:"TITLE",component(){return q(te,{options:s})}},{key:"hidden",label:"默认隐藏",hidden:!0},{key:"btns"}];return(u,n)=>{const t=D("ElText");return F(),$(L,null,[n[14]||(n[14]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(t,{type:"warning"},{default:l(()=>n[0]||(n[0]=[a(" items ")])),_:1}),r(t,null,{default:l(()=>n[1]||(n[1]=[a(" 配置中的 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[2]||(n[2]=[a(" key ")])),_:1}),r(t,null,{default:l(()=>n[3]||(n[3]=[a(" 自动绑定 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[4]||(n[4]=[a(" model ")])),_:1}),r(t,null,{default:l(()=>n[5]||(n[5]=[a(" 响应式变量中的key ")])),_:1})]),b("p",null,[r(t,null,{default:l(()=>n[6]||(n[6]=[a(" 默认会是 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[7]||(n[7]=[a(" inline ")])),_:1}),r(t,null,{default:l(()=>n[8]||(n[8]=[a(" 布局 ")])),_:1})]),b("p",null,[r(t,null,{default:l(()=>n[9]||(n[9]=[a(" 默认 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[10]||(n[10]=[a(" key: 'btns' ")])),_:1}),r(t,null,{default:l(()=>n[11]||(n[11]=[a(" 展示按键，配置中有 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[12]||(n[12]=[a(" hidden?: boolean ")])),_:1}),r(t,null,{default:l(()=>n[13]||(n[13]=[a(" 会出现展开收起的按键 ")])),_:1})]),r(m(ne),{model:o,labelWidth:"120",items:d},null,8,["model"]),b("pre",null,[b("code",null,B(JSON.stringify(o,null,2)),1)])],64)}}}),jt=`<template>
  <UniForm :model="formModel" labelWidth="120" :items="items" />
  <pre><code>{{ JSON.stringify(formModel, null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive } from 'vue'
const formModel = reactive({})
const options = [
  { value: '1', label: '关羽' },
  { value: '2', label: '张飞' },
]
const items: UniFormItemPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    component() {
      return h(UniSelect, { options })
    },
  },
  { key: 'hidden', label: '默认隐藏', hidden: true },
  { key: 'btns' },
]
<\/script>
`,Vt=R({__name:"UniForm2",setup(T){const o=Y({ipt:""});return(s,d)=>{const u=D("ElText"),n=D("ElInput");return F(),$(L,null,[d[5]||(d[5]=b("h1",{"data-id":""},"兼容用法",-1)),b("p",null,[r(u,null,{default:l(()=>d[1]||(d[1]=[a(" 是可以兼容 ")])),_:1}),r(u,{type:"warning"},{default:l(()=>d[2]||(d[2]=[a(" ElForm ")])),_:1}),r(u,null,{default:l(()=>d[3]||(d[3]=[a(" 语法的，在子元素中使用 ")])),_:1}),r(u,{type:"warning"},{default:l(()=>d[4]||(d[4]=[a(" ElFormItem ")])),_:1})]),r(m(ne),{model:o,"label-width":"auto"},{default:l(()=>[r(m(dt),{label:"ID"},{default:l(()=>[r(n,{modelValue:o.ipt,"onUpdate:modelValue":d[0]||(d[0]=t=>o.ipt=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}}),Nt=`<template>
  <UniForm :model="formModel" label-width="auto">
    <ElFormItem label="ID">
      <ElInput v-model="formModel.ipt" />
    </ElFormItem>
  </UniForm>
</template>
<script setup lang="ts">
import { ElFormItem } from 'element-plus'
import { UniForm } from 'xuzn-ui'
import { reactive } from 'vue'
const formModel = reactive({ ipt: '' })
<\/script>
`,Ot=R({__name:"UniForm3",setup(T){const o=Q(),s=Y({}),d=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],u=[{key:"id",label:"ID"},{key:"title",label:"TITLE",component(){return q(te,{options:d})}},{key:"hidden",label:"默认隐藏",hidden:!0},{key:"btns"}];return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[13]||(t[13]=b("h1",{"data-id":""},"展开/收起",-1)),b("p",null,[r(e,null,{default:l(()=>t[3]||(t[3]=[a(" 配置中有 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" hidden?: boolean ")])),_:1}),r(e,null,{default:l(()=>t[5]||(t[5]=[a(" 配置后，如果有 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[6]||(t[6]=[a(" key: 'btns' ")])),_:1}),r(e,null,{default:l(()=>t[7]||(t[7]=[a(" 的配置，会出现 展开/收起 的按键，也可以通过实例方法 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[8]||(t[8]=[a(" switchHidden: (val?: boolean) => void ")])),_:1}),r(e,null,{default:l(()=>t[9]||(t[9]=[a(" 进行切换 ")])),_:1})]),r(m(Z),{type:"primary",onClick:t[0]||(t[0]=i=>{var p;return(p=o.value)==null?void 0:p.switchHidden()})},{default:l(()=>t[10]||(t[10]=[a("切换")])),_:1}),r(m(Z),{type:"primary",onClick:t[1]||(t[1]=i=>{var p;return(p=o.value)==null?void 0:p.switchHidden(!0)})},{default:l(()=>t[11]||(t[11]=[a("显示")])),_:1}),r(m(Z),{type:"primary",onClick:t[2]||(t[2]=i=>{var p;return(p=o.value)==null?void 0:p.switchHidden(!1)})},{default:l(()=>t[12]||(t[12]=[a("隐藏")])),_:1}),r(m(mt)),r(m(ne),{model:s,items:u,ref_key:"uniTableRef",ref:o,labelWidth:"120",itemMinWidth:"1fr"},null,8,["model"])],64)}}}),Ht=`<template>
  <ElButton type="primary" @click="uniTableRef?.switchHidden()">切换</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(true)">显示</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(false)">隐藏</ElButton>
  <ElDivider />
  <UniForm :model="formModel" :items="items" ref="uniTableRef" labelWidth="120" itemMinWidth="1fr" />
</template>
<script setup lang="ts">
import { ElButton, ElDivider } from 'element-plus'
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive, ref } from 'vue'
const uniTableRef = ref()
const formModel = reactive({})
const options = [
  { value: '1', label: '关羽' },
  { value: '2', label: '张飞' },
]
const items: UniFormItemPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    component() {
      return h(UniSelect, { options })
    },
  },
  { key: 'hidden', label: '默认隐藏', hidden: true },
  { key: 'btns' },
]
<\/script>
`,Jt=R({__name:"UniForm4",setup(T){const o=Y({id:""}),s=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],d=[{key:"id",label:"ID"},{key:"title",label:"TITLE",slots:{label(){return"label"},default(){return q(oe,{placeholder:"哇咔咔"})}},component(){return q(te,{options:s})}},{key:"name",label:"名称",component(){return[q(te,{options:s,"data-prop":"name"}),q(gt,null,{default(){return"多个元素的处理方式"}}),q(oe,{"data-prop":"name1"})]}},{key:"btns"}];return(u,n)=>{const t=D("ElText");return F(),$(L,null,[n[25]||(n[25]=b("h1",{"data-id":""},"插槽使用",-1)),n[26]||(n[26]=b("h3",null,"这里展示多种插槽方式，随便选一个你喜欢的使用就行",-1)),b("p",null,[r(t,null,{default:l(()=>n[0]||(n[0]=[a(" 配置中有 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[1]||(n[1]=[a(" component?: (...args: any[]) => VNodeChild ")])),_:1}),r(t,null,{default:l(()=>n[2]||(n[2]=[a(" 可以通过 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[3]||(n[3]=[a(" h ")])),_:1}),r(t,null,{default:l(()=>n[4]||(n[4]=[a(" 函数进行渲染自定义元素 ")])),_:1})]),b("p",null,[r(t,{type:"warning"},{default:l(()=>n[5]||(n[5]=[a(" component ")])),_:1}),r(t,null,{default:l(()=>n[6]||(n[6]=[a(" 返回值如果是数组，可以给数组中元素指定属性 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[7]||(n[7]=[a(" data-prop ")])),_:1}),r(t,null,{default:l(()=>n[8]||(n[8]=[a(" 用于对应 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[9]||(n[9]=[a(" model ")])),_:1}),r(t,null,{default:l(()=>n[10]||(n[10]=[a(" 响应式数据中的值，使用 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[11]||(n[11]=[a(" data- ")])),_:1}),r(t,null,{default:l(()=>n[12]||(n[12]=[a(" 开头是为了 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[13]||(n[13]=[a(" typescript ")])),_:1}),r(t,null,{default:l(()=>n[14]||(n[14]=[a(" 不会报错 ")])),_:1})]),b("p",null,[r(t,null,{default:l(()=>n[15]||(n[15]=[a(" 配置中的 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[16]||(n[16]=[a(" key: string ")])),_:1}),r(t,null,{default:l(()=>n[17]||(n[17]=[a(" 属性值可以对应插槽 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[18]||(n[18]=[a(" default ")])),_:1})]),b("p",null,[r(t,null,{default:l(()=>n[19]||(n[19]=[a(" 其他插槽，下划线分隔 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[20]||(n[20]=[a(" {key}_{slotName} ")])),_:1}),r(t,null,{default:l(()=>n[21]||(n[21]=[a(" 如： ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[22]||(n[22]=[a(" id_label ")])),_:1}),r(t,null,{default:l(()=>n[23]||(n[23]=[a(" 就是这里的label插槽 ")])),_:1})]),r(m(ne),{model:o,"label-width":"200px",itemMinWidth:"1fr",items:d},{id_label:l(()=>n[24]||(n[24]=[b("i",null,"通过 key 插槽的 label",-1)])),id:l(()=>[r(m(oe))]),_:1},8,["model"]),b("pre",null,[b("code",null,B(JSON.stringify(o,null,2)),1)])],64)}}}),qt=`<template>
  <UniForm :model="formModel" label-width="200px" itemMinWidth="1fr" :items="items">
    <template #id_label>
      <i>通过 key 插槽的 label</i>
    </template>
    <template #id>
      <ElInput />
    </template>
  </UniForm>
  <pre><code>{{ JSON.stringify(formModel, null, 2) }}</code></pre>
</template>
<script setup lang="ts">
import { ElAlert, ElInput } from 'element-plus'
import { UniForm, UniFormItemPropsType, UniSelect } from 'xuzn-ui'
import { h, reactive } from 'vue'
const formModel = reactive({ id: '' })
const options = [
  { value: '1', label: '关羽' },
  { value: '2', label: '张飞' },
]
const items: UniFormItemPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    // 优先级高于 component
    slots: {
      label() {
        return 'label'
      },
      default() {
        return h(ElInput, { placeholder: '哇咔咔' })
      },
    },
    // 和slots.default同时存在时
    // 优先级较低，所以不会走这里
    component() {
      return h(UniSelect, { options })
    },
  },
  {
    key: 'name',
    label: '名称',
    component() {
      return [
        // 需要独立指定 prop
        h(UniSelect, { options, 'data-prop': 'name' }),
        h(ElAlert, null, {
          default() {
            return '多个元素的处理方式'
          },
        }),
        h(ElInput, { 'data-prop': 'name1' }),
      ]
    },
  },
  { key: 'btns' },
]
<\/script>
`,he="index",Gt=R({__name:"UniLayout1",setup(T){const o=[{name:"index",title:"首页"},{name:"index1",title:"首页1"}];function s(){H.success("标签页点击，请查看命令行"),console.log("------> 标签页点击",...arguments)}function d(){H.success("菜单点击，请查看命令行"),console.log("------> 菜单点击",...arguments)}return(u,n)=>(F(),$("div",null,[n[0]||(n[0]=b("h1",{"data-id":""},"默认布局",-1)),r(m(ft),{menus:o,menuActive:he,tagActive:he,onTagItemClick:s,onMenuItemClick:d})]))}}),Wt=`<template>
  <div>
    <h1 data-id>默认布局</h1>
    <LayoutIndex :menus="menus" :menuActive="routeName" :tagActive="routeName" @tagItemClick="onTagItemClick" @menuItemClick="onMenuItemClick"></LayoutIndex>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { LayoutIndex } from 'xuzn-ui'
const menus = [
  { name: 'index', title: '首页' },
  { name: 'index1', title: '首页1' },
]
const routeName = 'index'
function onTagItemClick() {
  ElMessage.success('标签页点击，请查看命令行')
  console.log('------> 标签页点击', ...arguments)
}
function onMenuItemClick() {
  ElMessage.success('菜单点击，请查看命令行')
  console.log('------> 菜单点击', ...arguments)
}
<\/script>
<style lang="scss"></style>
`,Zt=R({__name:"UniRadioGroup1",setup(T){const o=Q(1),s=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(d,u)=>{const n=D("ElText");return F(),$(L,null,[u[7]||(u[7]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(n,{type:"warning"},{default:l(()=>u[1]||(u[1]=[a(" UniRadioGroup ")])),_:1}),r(n,null,{default:l(()=>u[2]||(u[2]=[a(" 就是将 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[3]||(u[3]=[a(" ElRadio ")])),_:1}),r(n,null,{default:l(()=>u[4]||(u[4]=[a(" 改成 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[5]||(u[5]=[a(" options ")])),_:1}),r(n,null,{default:l(()=>u[6]||(u[6]=[a(" 配置传参 ")])),_:1})]),r(m(bt),{options:s,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=t=>o.value=t)},null,8,["modelValue"])],64)}}}),Qt=`<template>
  <UniRadioGroup :options="options" v-model="val" />
</template>
<script setup lang="ts">
import { UniRadioGroup } from 'xuzn-ui'
import { ref } from 'vue'
const val = ref(1)
const options = [
  { value: 1, label: '关羽' },
  { value: 2, label: '张飞' },
]
<\/script>
`,Kt=R({__name:"UniSelect1",setup(T){const o=Q(1),s=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(d,u)=>{const n=D("ElText");return F(),$(L,null,[u[7]||(u[7]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(n,{type:"warning"},{default:l(()=>u[1]||(u[1]=[a(" UniSelect ")])),_:1}),r(n,null,{default:l(()=>u[2]||(u[2]=[a(" 就是将 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[3]||(u[3]=[a(" ElOption ")])),_:1}),r(n,null,{default:l(()=>u[4]||(u[4]=[a(" 改成 ")])),_:1}),r(n,{type:"warning"},{default:l(()=>u[5]||(u[5]=[a(" options ")])),_:1}),r(n,null,{default:l(()=>u[6]||(u[6]=[a(" 配置传参 ")])),_:1})]),r(m(te),{options:s,modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=t=>o.value=t)},null,8,["modelValue"])],64)}}}),Xt=`<template>
  <UniSelect :options="options" v-model="val" />
</template>
<script setup lang="ts">
import { UniSelect } from 'xuzn-ui'
import { ref } from 'vue'
const val = ref(1)
const options = [
  { value: 1, label: '关羽' },
  { value: 2, label: '张飞' },
]
<\/script>
`,Yt=R({__name:"UniTable1",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[4]||(t[4]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" tableApi ")])),_:1}),r(e,null,{default:l(()=>t[1]||(t[1]=[a(" 必填属性，值来自于 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" useTable ")])),_:1}),r(e,null,{default:l(()=>t[3]||(t[3]=[a(" 的方法 ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},null,8,["tableApi"])],64)}}}),en=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,tn=R({__name:"UniTable10",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[2]||(t[2]=b("h1",{"data-id":""},"用户缓存",-1)),b("p",null,[r(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" cacheKey?: string ")])),_:1}),r(e,null,{default:l(()=>t[1]||(t[1]=[a(" 可以控制，用户是否可以选中缓存当前配置，值必须是全局唯一的 ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s,cacheKey:"EXP_UNI_TABLE_10"},null,8,["tableApi"])],64)}}}),nn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" cacheKey="EXP_UNI_TABLE_10" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,rn=R({__name:"UniTable11",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID"},{key:"title",label:"TITLE",subset:[{key:"item1",label:"ITEM1"},{key:"item2",label:"ITEM2"}]}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[2]||(t[2]=b("h1",{"data-id":""},"多级表头",-1)),b("p",null,[r(e,null,{default:l(()=>t[0]||(t[0]=[a(" 子集使用 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a(" subset?: UniTableColumnPropsType[] ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},null,8,["tableApi"])],64)}}}),ln=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  {
    key: 'title',
    label: 'TITLE',
    subset: [
      { key: 'item1', label: 'ITEM1' },
      { key: 'item2', label: 'ITEM2' },
    ],
  },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,an=R({__name:"UniTable2",setup(T){const o=V({async api(u){const t=(await s({size:u.size,current:u.current,param:{}})).result;return{rows:t.rows,total:t.total}}});o.onCurrentChange(1);async function s(u){return d(u.size,u.current)}async function d(u,n){return{code:200,msg:"成功",result:{total:1e3,rows:t(u,n)}};function t(e,i){const p=(i-1)*e;return new Array(e).fill("").map((k,E)=>{const S=p+E+1;return{id:S,title:S+" - 随意",item1:S+" - 关羽",item2:S+" - 张飞",item3:S+" - 赵云",item4:S+" - 马超",item5:S+" - 黄忠",item6:S+" - 张辽"}})}}return(u,n)=>{const t=D("ElText");return F(),$(L,null,[n[3]||(n[3]=b("h1",{"data-id":""},"兼容原生",-1)),b("p",null,[r(t,null,{default:l(()=>n[0]||(n[0]=[a(" 可以忽略 ")])),_:1}),r(t,{type:"warning"},{default:l(()=>n[1]||(n[1]=[a(" columns ")])),_:1}),r(t,null,{default:l(()=>n[2]||(n[2]=[a(" 属性，直接使用默认插槽 ")])),_:1})]),r(m(N),{tableApi:m(o)},{default:l(()=>[r(m(Fe),{prop:"id",label:"ID"}),r(m(Fe),{prop:"title",label:"TITLE"})]),_:1},8,["tableApi"])],64)}}}),sn=`<template>
  <UniTable :tableApi="tableApi">
    <ElTableColumn prop="id" label="ID"></ElTableColumn>
    <ElTableColumn prop="title" label="TITLE"></ElTableColumn>
  </UniTable>
</template>
<script setup lang="ts">
import { ElTableColumn } from 'element-plus'
import { useTable, UniTable } from 'xuzn-ui'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,on=R({__name:"UniTable3",setup(T){const o=_e(),s=V({localPaging:!0,syncServer:!1,async api(){return u()}});s.onCurrentChange(1);const d=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function u(){console.log("有请求后台数据");const e=(await n()).result||[],i=e.length;return{rows:e,total:i}}async function n(){return{code:200,msg:"成功",result:t(150,1)};function t(e,i){const p=(i-1)*e;return new Array(e).fill("").map((k,E)=>{const S=p+E+1;return{id:S,title:S+" - 随意",item1:S+" - 关羽",item2:S+" - 张飞",item3:S+" - 赵云",item4:S+" - 马超",item5:S+" - 黄忠",item6:S+" - 张辽"}})}}return(t,e)=>{const i=D("ElText");return F(),$(L,null,[e[10]||(e[10]=b("h1",{"data-id":""},"本地分页",-1)),b("p",null,[r(i,{type:"warning"},{default:l(()=>e[0]||(e[0]=[a(" useTable ")])),_:1}),r(i,null,{default:l(()=>e[1]||(e[1]=[a(" 中有 ")])),_:1}),r(i,{type:"warning"},{default:l(()=>e[2]||(e[2]=[a(" localPaging?: boolean ")])),_:1}),r(i,null,{default:l(()=>e[3]||(e[3]=[a(" 属性设置为 ")])),_:1}),r(i,{type:"warning"},{default:l(()=>e[4]||(e[4]=[a(" true ")])),_:1})]),b("p",null,[r(i,{type:"warning"},{default:l(()=>e[5]||(e[5]=[a(" useTable ")])),_:1}),r(i,null,{default:l(()=>e[6]||(e[6]=[a(" 中有 ")])),_:1}),r(i,{type:"warning"},{default:l(()=>e[7]||(e[7]=[a(" syncServer?: boolean ")])),_:1}),r(i,null,{default:l(()=>e[8]||(e[8]=[a(" 属性，设置是否每次翻页都同步线上数据，默认值为 ")])),_:1}),r(i,{type:"warning"},{default:l(()=>e[9]||(e[9]=[a(" true ")])),_:1})]),r(m(N),{tableApi:m(s),columns:d,ref_key:"uniTableRef",ref:o},null,8,["tableApi"])],64)}}}),un=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" ref="uniTableRef" />
</template>
<script setup lang="ts">
import { shallowRef } from 'vue'
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
const uniTableRef = shallowRef()
const tableApi = useTable({
  // 设置本地分页
  localPaging: true,
  // 是否每次翻页都同步线上数据，默认为true，false表示只会首次请求
  syncServer: false,
  async api() {
    return getPageList()
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList() {
  console.log('有请求后台数据')
  // 这里就没有分页参数需要传了
  const res = await getServerData()
  const rows = res.result || []
  const total = rows.length
  return { rows, total }
}

// 假装这是一个后台服务
// 直接返回了数组，没有分页数据
async function getServerData() {
  return { code: 200, msg: '成功', result: getRows(150, 1) }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,pn=R({__name:"UniTable4",setup(T){const o=_e(),s=V({async api(t){const i=(await u({size:t.size,current:t.current,param:{}})).result;return{rows:i.rows,total:i.total}}});s.onCurrentChange(1),ct(()=>o.value,t=>{console.log("ElTable实例 -> ",t.tableRef)});const d=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function u(t){return n(t.size,t.current)}async function n(t,e){return{code:200,msg:"成功",result:{total:1e3,rows:i(t,e)}};function i(p,v){const k=(v-1)*p;return new Array(p).fill("").map((S,c)=>{const h=k+c+1;return{id:h,title:h+" - 随意",item1:h+" - 关羽",item2:h+" - 张飞",item3:h+" - 赵云",item4:h+" - 马超",item5:h+" - 黄忠",item6:h+" - 张辽"}})}}return(t,e)=>{const i=D("ElText");return F(),$(L,null,[e[3]||(e[3]=b("h1",{"data-id":""},"ElTable实例",-1)),b("p",null,[r(i,{type:"warning"},{default:l(()=>e[0]||(e[0]=[a(" UniTable ")])),_:1}),r(i,null,{default:l(()=>e[1]||(e[1]=[a(" 组件的实例中获取 ")])),_:1}),r(i,{type:"warning"},{default:l(()=>e[2]||(e[2]=[a(" UniTableRef.tableRef ")])),_:1})]),r(m(N),{tableApi:m(s),columns:d,ref_key:"uniTableRef",ref:o},null,8,["tableApi"])],64)}}}),dn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" ref="uniTableRef" />
</template>
<script setup lang="ts">
import { shallowRef, watch } from 'vue'
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
const uniTableRef = shallowRef()
const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
watch(
  () => uniTableRef.value,
  (v) => {
    console.log('ElTable实例 -> ', v.tableRef)
  },
)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,mn=R({__name:"UniTable5",setup(T){const o=V({async api(e){const p=(await n({size:e.size,current:e.current,param:{}})).result;return{rows:p.rows,total:p.total}}});o.onCurrentChange(1);function s(e){return console.log(e),[...e,{key:"add1",render(){return 123}}]}const d=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];function u(e){H.success("table bar 点击回调，参数查看控制台"),console.log(e)}async function n(e){return t(e.size,e.current)}async function t(e,i){return{code:200,msg:"成功",result:{total:1e3,rows:p(e,i)}};function p(v,k){const E=(k-1)*v;return new Array(v).fill("").map((c,h)=>{const z=E+h+1;return{id:z,title:z+" - 随意",item1:z+" - 关羽",item2:z+" - 张飞",item3:z+" - 赵云",item4:z+" - 马超",item5:z+" - 黄忠",item6:z+" - 张辽"}})}}return(e,i)=>{const p=D("ElText");return F(),$(L,null,[i[12]||(i[12]=b("h1",{"data-id":""},"table bar管理",-1)),b("p",null,[r(p,null,{default:l(()=>i[0]||(i[0]=[a(" 使用插槽 ")])),_:1}),r(p,{type:"warning"},{default:l(()=>i[1]||(i[1]=[a(" bar_left ")])),_:1}),r(p,null,{default:l(()=>i[2]||(i[2]=[a(" 在左侧新增或者使用插槽 ")])),_:1}),r(p,{type:"warning"},{default:l(()=>i[3]||(i[3]=[a(" bar_right ")])),_:1}),r(p,null,{default:l(()=>i[4]||(i[4]=[a(" 在右侧新增，只要是这两个字符串开头就行 ")])),_:1})]),b("p",null,[r(p,null,{default:l(()=>i[5]||(i[5]=[a(" 统一处理更改，可以使用： ")])),_:1}),r(p,{type:"warning"},{default:l(()=>i[6]||(i[6]=[a(" formatBarItems ")])),_:1}),r(p,null,{default:l(()=>i[7]||(i[7]=[a(" 属性，参数是所有元素集合，返回类似的集合即可 ")])),_:1})]),r(m(N),{formatBarItems:s,tableApi:m(o),columns:d,onBarClick:u},{bar_right:l(()=>[r(m(Z),null,{default:l(()=>i[8]||(i[8]=[a("按键-right1")])),_:1}),r(m(Z),null,{default:l(()=>i[9]||(i[9]=[a("按键-right2")])),_:1})]),bar_right1:l(()=>[r(m(Z),null,{default:l(()=>i[10]||(i[10]=[a("按键-right3")])),_:1})]),bar_left:l(()=>[r(m(Z),null,{default:l(()=>i[11]||(i[11]=[a("按键-left1")])),_:1})]),_:1},8,["tableApi"])],64)}}}),gn=`<template>
  <UniTable :formatBarItems="formatBarItems" :tableApi="tableApi" :columns="columns" @bar-click="onBarClick">
    <template #bar_right>
      <ElButton>按键-right1</ElButton>
      <ElButton>按键-right2</ElButton>
    </template>
    <template #bar_right1>
      <ElButton>按键-right3</ElButton>
    </template>
    <template #bar_left>
      <ElButton>按键-left1</ElButton>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElButton, ElMessage } from 'element-plus'
import { useTable, UniTable, UniTableColumnPropsType, UniTableBarItemType } from 'xuzn-ui'
const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
function formatBarItems(items: UniTableBarItemType[]) {
  console.log(items)
  const val: UniTableBarItemType[] = [
    ...items,
    {
      key: 'add1',
      render() {
        return 123
      },
    },
  ]
  return val
}
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// table bar 点击回调
function onBarClick(item: UniTableBarItemType) {
  ElMessage.success('table bar 点击回调，参数查看控制台')
  console.log(item)
}

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,fn=R({__name:"UniTable6",setup(T){const o=Y({}),s=V({async api(i){const v=(await t({size:i.size,current:i.current,param:{}})).result;return{rows:v.rows,total:v.total}}});s.onCurrentChange(1);const d=pe(()=>[{key:"id",label:"ID"},{key:"title",label:"TITLE"}]),u=pe(()=>[{key:"id",label:"ID"},{key:"id1",label:"ID1"},{key:"id2",label:"ID2"},{key:"title",label:"TITLE",hidden:!0,component:()=>q(oe)}]);function n(){H.success("提交，控制台查看数据"),console.log("表单提交",o)}async function t(i){return e(i.size,i.current)}async function e(i,p){return{code:200,msg:"成功",result:{total:1e3,rows:v(i,p)}};function v(k,E){const S=(E-1)*k;return new Array(k).fill("").map((h,z)=>{const _=S+z+1;return{id:_,title:_+" - 随意",item1:_+" - 关羽",item2:_+" - 张飞",item3:_+" - 赵云",item4:_+" - 马超",item5:_+" - 黄忠",item6:_+" - 张辽"}})}}return(i,p)=>{const v=D("ElText");return F(),$(L,null,[p[3]||(p[3]=b("h1",{"data-id":""},"过滤表单",-1)),b("p",null,[r(v,null,{default:l(()=>p[0]||(p[0]=[a(" 可以使用插槽 ")])),_:1}),r(v,{type:"warning"},{default:l(()=>p[1]||(p[1]=[a(" filter_form ")])),_:1}),r(v,null,{default:l(()=>p[2]||(p[2]=[a(" ，使用后，会在table bar里面显示一个搜索按键，可以控制过滤元素的展示和隐藏 ")])),_:1})]),r(m(N),{tableApi:m(s),columns:d.value},{filter_form:l(()=>[r(m(ne),{"layout-type":"lr",model:o,"label-width":"auto",items:u.value,onSubmit:n},null,8,["model","items"])]),_:1},8,["tableApi","columns"])],64)}}}),bn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns">
    <template #filter_form>
      <UniForm layout-type="lr" :model="formModel" label-width="auto" :items="items" @submit="onFormSubmit"></UniForm>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElInput, ElMessage } from 'element-plus'
import { useTable, UniTable, UniTableColumnPropsType, UniForm, UniFormItemPropsType } from 'xuzn-ui'
import { computed, h, reactive } from 'vue'
const formModel = reactive({})
const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns = computed<UniTableColumnPropsType[]>(() => [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
])
const items = computed<UniFormItemPropsType[]>(() => {
  return [
    { key: 'id', label: 'ID' },
    { key: 'id1', label: 'ID1' },
    { key: 'id2', label: 'ID2' },
    {
      key: 'title',
      label: 'TITLE',
      // 初始隐藏
      hidden: true,
      // 会默认添加v-model
      // 默认就是input可以不写
      component: () => {
        return h(ElInput)
      },
    },
  ]
})
function onFormSubmit() {
  ElMessage.success('提交，控制台查看数据')
  console.log('表单提交', formModel)
}
// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,cn=R({__name:"UniTable7",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID",fixed:!0},{key:"title",label:"TITLE",width:260},{key:"item1",label:"第一列",width:240,slots:{default({row:n}){return q(Z,null,{default(){return n.item1+" - 格式化后2"}})}}},{key:"item2",label:"第二列",hidden:!0,width:200},{key:"item3",label:"第三列",width:200},{key:"xx",prop:"item3",label:"第三列",width:200},{key:"item4",label:"第四列",width:200},{key:"item5",label:"第五列",width:200},{key:"item6",label:"第六列",width:200}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[11]||(t[11]=b("h1",{"data-id":""},"列配置",-1)),b("p",null,[r(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" key ")])),_:1}),r(e,null,{default:l(()=>t[1]||(t[1]=[a(" 是唯一的，存在时可以忽略 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" prop ")])),_:1}),r(e,null,{default:l(()=>t[3]||(t[3]=[a(" 属性 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" key: string ")])),_:1}),r(e,null,{default:l(()=>t[5]||(t[5]=[a(" 属性的值，还可以对应一个插槽名，用于自定义内容 ")])),_:1})]),b("p",null,[r(e,null,{default:l(()=>t[6]||(t[6]=[a(" 列配置时 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[7]||(t[7]=[a("UniTableColumnPropsType ")])),_:1}),r(e,null,{default:l(()=>t[8]||(t[8]=[a(" 的属性 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[9]||(t[9]=[a(" hidden?: boolean ")])),_:1}),r(e,null,{default:l(()=>t[10]||(t[10]=[a(" 可以控制初始是否隐藏 ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},{title:l(({row:i})=>[b("div",null,B(i.title+" - 格式化后1"),1)]),_:1},8,["tableApi"])],64)}}}),yn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns">
    <template #title="{ row }">
      <!-- 这个插槽就是 ElTableColumn 的默认插槽 -->
      <div>{{ row.title + ' - 格式化后1' }}</div>
    </template>
  </UniTable>
</template>
<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
import { h } from 'vue'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID', fixed: true },
  { key: 'title', label: 'TITLE', width: 260 },
  {
    key: 'item1',
    label: '第一列',
    width: 240,
    // 这个插槽就是 ElTableColumn 的插槽
    slots: {
      default({ row }) {
        return h(ElButton, null, {
          default() {
            return row.item1 + ' - 格式化后2'
          },
        })
      },
    },
  },
  { key: 'item2', label: '第二列', hidden: true, width: 200 },
  { key: 'item3', label: '第三列', width: 200 },
  // key必须是唯一的，prop可以重复，prop没有值会读取key
  { key: 'xx', prop: 'item3', label: '第三列', width: 200 },
  { key: 'item4', label: '第四列', width: 200 },
  { key: 'item5', label: '第五列', width: 200 },
  { key: 'item6', label: '第六列', width: 200 },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,xn=R({__name:"UniTable8",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",slots:{default({row:n}){return q("span",{style:"color: #f00"},{default(){return n.id+"，h函数，内容插槽"}})},header(){return"h函数抬头插槽ID"}}},{key:"title",label:"TITLE"},{key:"item1",label:"ITEM1",component({row:n}){return n.item1+"，快速渲染default"}}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[16]||(t[16]=b("h1",{"data-id":""},"列插槽",-1)),b("p",null,[r(e,null,{default:l(()=>t[0]||(t[0]=[a(" 可以给一个 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a(" slots ")])),_:1}),r(e,null,{default:l(()=>t[2]||(t[2]=[a(" 属性，然后用 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[3]||(t[3]=[a(" h ")])),_:1}),r(e,null,{default:l(()=>t[4]||(t[4]=[a(" 函数写插槽 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[5]||(t[5]=[a(" slots?: Record<string, ((...args: any[]) => VNodeChild) | undefined> ")])),_:1})]),b("p",null,[r(e,null,{default:l(()=>t[6]||(t[6]=[a(" 也可以是对应的 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[7]||(t[7]=[a(" key ")])),_:1}),r(e,null,{default:l(()=>t[8]||(t[8]=[a(" 的值。每个 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[9]||(t[9]=[a(" key: string ")])),_:1}),r(e,null,{default:l(()=>t[10]||(t[10]=[a(" 的值对应一个插槽名 ")])),_:1})]),b("p",null,[r(e,null,{default:l(()=>t[11]||(t[11]=[a(" 快速渲染 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[12]||(t[12]=[a(" default ")])),_:1}),r(e,null,{default:l(()=>t[13]||(t[13]=[a(" 插槽，可以使用 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[14]||(t[14]=[a(" component?: (...args: any[]) => VNodeChild ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},{title_header:l(()=>t[15]||(t[15]=[a(" 抬头插槽，对应key ")])),title:l(({row:i})=>[a(B(i.title)+" 内容插槽，对应key ",1)]),_:1},8,["tableApi"])],64)}}}),wn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns">
    <!-- 对应key加_,后面就是其他插槽名 -->
    <!-- 比如这里title列的header插槽语法如下 -->
    <template #title_header> 抬头插槽，对应key </template>
    <!-- 默认就是default插槽 -->
    <template #title="{ row }"> {{ row.title }} 内容插槽，对应key </template>
  </UniTable>
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'
import { h } from 'vue'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  {
    key: 'id',
    slots: {
      default({ row }) {
        return h(
          'span',
          { style: 'color: #f00' },
          {
            default() {
              return row.id + '，h函数，内容插槽'
            },
          },
        )
      },
      header() {
        return 'h函数抬头插槽ID'
      },
    },
  },
  { key: 'title', label: 'TITLE' },
  {
    key: 'item1',
    label: 'ITEM1',
    component({ row }) {
      return row.item1 + '，快速渲染default'
    },
  },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,Tn=R({__name:"UniTable9",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID"},{key:"title",label:"TITLE",hidden:!0}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[5]||(t[5]=b("h1",{"data-id":""},"默认隐藏列",-1)),b("p",null,[r(e,null,{default:l(()=>t[0]||(t[0]=[a(" 列配置时 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a("UniTableColumnPropsType ")])),_:1}),r(e,null,{default:l(()=>t[2]||(t[2]=[a(" 的属性 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[3]||(t[3]=[a(" hidden?: boolean ")])),_:1}),r(e,null,{default:l(()=>t[4]||(t[4]=[a(" 可以控制初始是否隐藏 ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},null,8,["tableApi"])],64)}}}),vn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

const tableApi = useTable({
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE', hidden: true },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,En=R({__name:"useTable1",setup(T){const o=V({async api(n){const e=(await d({size:n.size,current:n.current,param:{}})).result;return{rows:e.rows,total:e.total}}});o.onCurrentChange(1);const s=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function d(n){return u(n.size,n.current)}async function u(n,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(n,t)}};function e(i,p){const v=(p-1)*i;return new Array(i).fill("").map((E,S)=>{const c=v+S+1;return{id:c,title:c+" - 随意",item1:c+" - 关羽",item2:c+" - 张飞",item3:c+" - 赵云",item4:c+" - 马超",item5:c+" - 黄忠",item6:c+" - 张辽"}})}}return(n,t)=>{const e=D("ElText");return F(),$(L,null,[t[8]||(t[8]=b("h1",{"data-id":""},"基础使用",-1)),b("p",null,[r(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" useTable ")])),_:1}),r(e,null,{default:l(()=>t[1]||(t[1]=[a(" 这个 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" hook ")])),_:1}),r(e,null,{default:l(()=>t[3]||(t[3]=[a(" 会返回一个对象，直接提供给 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" UniTable ")])),_:1}),r(e,null,{default:l(()=>t[5]||(t[5]=[a(" 的 ")])),_:1}),r(e,{type:"warning"},{default:l(()=>t[6]||(t[6]=[a(" tableApi ")])),_:1}),r(e,null,{default:l(()=>t[7]||(t[7]=[a(" 属性的值 ")])),_:1})]),r(m(N),{tableApi:m(o),columns:s},null,8,["tableApi"])],64)}}}),kn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns" />
</template>
<script setup lang="ts">
import { useTable, UniTable, UniTableColumnPropsType } from 'xuzn-ui'

const tableApi = useTable({
  // 必填方法
  async api(tableData) {
    const res = await getPageList({ size: tableData.size, current: tableData.current, param: {} })
    const result = res.result
    return {
      // 必要两个字段
      rows: result.rows,
      total: result.total,
    }
  },
})
tableApi.onCurrentChange(1)
const columns: UniTableColumnPropsType[] = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'TITLE' },
]

// 假装这是一个前端请求后端的方法
async function getPageList(params: { size: number; current: number; param?: {} }) {
  return getServerData(params.size, params.current)
}

// 假装这是一个后台服务
async function getServerData(size: number, current: number) {
  return { code: 200, msg: '成功', result: { total: 1000, rows: getRows(size, current) } }
  // 生成测试数据
  function getRows(size: number, current: number) {
    const start = (current - 1) * size
    const arr = new Array(size).fill('').map((_, i) => {
      const index = start + i + 1
      return {
        id: index,
        title: index + ' - 随意',
        item1: index + ' - 关羽',
        item2: index + ' - 张飞',
        item3: index + ' - 赵云',
        item4: index + ' - 马超',
        item5: index + ' - 黄忠',
        item6: index + ' - 张辽',
      }
    })
    return arr
  }
}
<\/script>
`,ce={App:$t,App_txt:wt,"functionLib/functionLib1":Rt,"functionLib/functionLib1_txt":Lt,UniCheckboxGroup1:Pt,UniCheckboxGroup1_txt:Bt,"UniForm/UniForm1":Mt,"UniForm/UniForm1_txt":jt,"UniForm/UniForm2":Vt,"UniForm/UniForm2_txt":Nt,"UniForm/UniForm3":Ot,"UniForm/UniForm3_txt":Ht,"UniForm/UniForm4":Jt,"UniForm/UniForm4_txt":qt,UniLayout1:Gt,UniLayout1_txt:Wt,UniRadioGroup1:Zt,UniRadioGroup1_txt:Qt,UniSelect1:Kt,UniSelect1_txt:Xt,"UniTable/UniTable1":Yt,"UniTable/UniTable1_txt":en,"UniTable/UniTable10":tn,"UniTable/UniTable10_txt":nn,"UniTable/UniTable11":rn,"UniTable/UniTable11_txt":ln,"UniTable/UniTable2":an,"UniTable/UniTable2_txt":sn,"UniTable/UniTable3":on,"UniTable/UniTable3_txt":un,"UniTable/UniTable4":pn,"UniTable/UniTable4_txt":dn,"UniTable/UniTable5":mn,"UniTable/UniTable5_txt":gn,"UniTable/UniTable6":fn,"UniTable/UniTable6_txt":bn,"UniTable/UniTable7":cn,"UniTable/UniTable7_txt":yn,"UniTable/UniTable8":xn,"UniTable/UniTable8_txt":wn,"UniTable/UniTable9":Tn,"UniTable/UniTable9_txt":vn,useTable1:En,useTable1_txt:kn},An={class:"uni-exp"},Un={key:0,style:{float:"right"}},Sn={key:0,class:"uni-exp-menu"},Cn=R({__name:"UniExample",props:{expKeys:{}},setup(T){const o=T,s=Q(),d=pe(()=>(Array.isArray(o.expKeys)?o.expKeys:[]).map(e=>e.endsWith("/")?Object.keys(ce).filter(i=>!i.endsWith("_txt")&&i.startsWith(e)):e).flat().map(e=>({key:e,component:ce[e],txt:ce[e+"_txt"]}))),u=pe(n);function n(){const t=s.value;return(t instanceof HTMLElement?[...t.querySelectorAll("[data-id]")]:[]).reduce((p,v)=>{const k=v.getAttribute("data-id")||v.innerText,E=+(v.getAttribute("data-level")||0),S=k.replace(/\s/g,""),c="#"+S;v.id=S;const h=i(p,E);return c&&!h.some(z=>z.key===c)&&h.push({key:c,title:k,level:E,children:[]}),p},[]);function i(p,v=0){if(v===0)return p;const k=p[p.length-1];if(k){if(k.level===v)return p;if(k.children=k.children||[],k.children)return i(k.children,v)}return p}}return(t,e)=>(F(),$("div",An,[b("div",{class:"uni-exp-body",ref_key:"expScrollRef",ref:s},[ue(t.$slots,"pre"),d.value.length?(F(!0),$(L,{key:0},ye(d.value,i=>(F(),Ce(m(ht),{key:i.key,txt:i.txt},{default:l(()=>[m(yt)()?(F(),$("div",Un,[r(m(C),null,{default:l(()=>[a(B(i.key),1)]),_:2},1024)])):se("",!0),(F(),Ce(xt(i.component)))]),_:2},1032,["txt"]))),128)):se("",!0),ue(t.$slots,"default")],512),u.value.length?(F(),$("div",Sn,[r(m(It),{items:u.value,container:s.value},null,8,["items","container"])])):se("",!0)]))}});export{At as H,Cn as _};
