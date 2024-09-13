import{k as Ae,l as Me,d as P,m as Q,p as Ne,q as je,r as I,o as z,c as C,g as d,t as _,n as Ve,s as oe,a as n,e as p,v as Oe,M as xe,x as H,_ as $e,w as l,P as He,y as fe,z as Je,C as We,A as se,B as ke,D as qe,F as Ge,H as Ze,I as Qe,J as Pe,K as Ke,L as D,b as a,N as Xe,O as Y,Y as ne,Q as W,R as te,S as Ye,T as Z,i as et,U as ue,V as tt,X as nt,W as rt,G as N,Z as j,$ as Ue,a0 as De,a1 as lt,j as pe,a2 as X,h as S,a3 as be,a4 as at,a5 as ye,a6 as Fe,a7 as ze,a8 as it,a9 as st,aa as Se,ab as ut,ac as ot,ad as pt,ae as dt,af as mt,ag as gt,ah as ft,ai as bt,aj as ct,f as Ce,ak as yt,al as xt}from"./index-D07_PQ_t.js";import{s as wt}from"./App-BTwiwmkJ.js";var Le={exports:{}};(function(b){var s=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var c=function(g){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,t={},e={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function f(m){return m instanceof i?new i(m.type,f(m.content),m.alias):Array.isArray(m)?m.map(f):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++r}),f.__id},clone:function f(m,w){w=w||{};var v,E;switch(e.util.type(m)){case"Object":if(E=e.util.objId(m),w[E])return w[E];v={},w[E]=v;for(var U in m)m.hasOwnProperty(U)&&(v[U]=f(m[U],w));return v;case"Array":return E=e.util.objId(m),w[E]?w[E]:(v=[],w[E]=v,m.forEach(function($,F){v[F]=f($,w)}),v);default:return m}},getLanguage:function(f){for(;f;){var m=o.exec(f.className);if(m)return m[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,m){f.className=f.className.replace(RegExp(o,"gi"),""),f.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(v){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(f){var m=document.getElementsByTagName("script");for(var w in m)if(m[w].src==f)return m[w]}return null}},isActive:function(f,m,w){for(var v="no-"+m;f;){var E=f.classList;if(E.contains(m))return!0;if(E.contains(v))return!1;f=f.parentElement}return!!w}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(f,m){var w=e.util.clone(e.languages[f]);for(var v in m)w[v]=m[v];return w},insertBefore:function(f,m,w,v){v=v||e.languages;var E=v[f],U={};for(var $ in E)if(E.hasOwnProperty($)){if($==m)for(var F in w)w.hasOwnProperty(F)&&(U[F]=w[F]);w.hasOwnProperty($)||(U[$]=E[$])}var h=v[f];return v[f]=U,e.languages.DFS(e.languages,function(B,q){q===h&&B!=f&&(this[B]=U)}),U},DFS:function f(m,w,v,E){E=E||{};var U=e.util.objId;for(var $ in m)if(m.hasOwnProperty($)){w.call(m,$,m[$],v||$);var F=m[$],h=e.util.type(F);h==="Object"&&!E[U(F)]?(E[U(F)]=!0,f(F,w,null,E)):h==="Array"&&!E[U(F)]&&(E[U(F)]=!0,f(F,w,$,E))}}},plugins:{},highlightAll:function(f,m){e.highlightAllUnder(document,f,m)},highlightAllUnder:function(f,m,w){var v={callback:w,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};e.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),e.hooks.run("before-all-elements-highlight",v);for(var E=0,U;U=v.elements[E++];)e.highlightElement(U,m===!0,v.callback)},highlightElement:function(f,m,w){var v=e.util.getLanguage(f),E=e.languages[v];e.util.setLanguage(f,v);var U=f.parentElement;U&&U.nodeName.toLowerCase()==="pre"&&e.util.setLanguage(U,v);var $=f.textContent,F={element:f,language:v,grammar:E,code:$};function h(q){F.highlightedCode=q,e.hooks.run("before-insert",F),F.element.innerHTML=F.highlightedCode,e.hooks.run("after-highlight",F),e.hooks.run("complete",F),w&&w.call(F.element)}if(e.hooks.run("before-sanity-check",F),U=F.element.parentElement,U&&U.nodeName.toLowerCase()==="pre"&&!U.hasAttribute("tabindex")&&U.setAttribute("tabindex","0"),!F.code){e.hooks.run("complete",F),w&&w.call(F.element);return}if(e.hooks.run("before-highlight",F),!F.grammar){h(e.util.encode(F.code));return}if(m&&g.Worker){var B=new Worker(e.filename);B.onmessage=function(q){h(q.data)},B.postMessage(JSON.stringify({language:F.language,code:F.code,immediateClose:!0}))}else h(e.highlight(F.code,F.grammar,F.language))},highlight:function(f,m,w){var v={code:f,grammar:m,language:w};if(e.hooks.run("before-tokenize",v),!v.grammar)throw new Error('The language "'+v.language+'" has no grammar.');return v.tokens=e.tokenize(v.code,v.grammar),e.hooks.run("after-tokenize",v),i.stringify(e.util.encode(v.tokens),v.language)},tokenize:function(f,m){var w=m.rest;if(w){for(var v in w)m[v]=w[v];delete m.rest}var E=new T;return A(E,E.head,f),y(f,E,m,E.head,0),x(E)},hooks:{all:{},add:function(f,m){var w=e.hooks.all;w[f]=w[f]||[],w[f].push(m)},run:function(f,m){var w=e.hooks.all[f];if(!(!w||!w.length))for(var v=0,E;E=w[v++];)E(m)}},Token:i};g.Prism=e;function i(f,m,w,v){this.type=f,this.content=m,this.alias=w,this.length=(v||"").length|0}i.stringify=function f(m,w){if(typeof m=="string")return m;if(Array.isArray(m)){var v="";return m.forEach(function(h){v+=f(h,w)}),v}var E={type:m.type,content:f(m.content,w),tag:"span",classes:["token",m.type],attributes:{},language:w},U=m.alias;U&&(Array.isArray(U)?Array.prototype.push.apply(E.classes,U):E.classes.push(U)),e.hooks.run("wrap",E);var $="";for(var F in E.attributes)$+=" "+F+'="'+(E.attributes[F]||"").replace(/"/g,"&quot;")+'"';return"<"+E.tag+' class="'+E.classes.join(" ")+'"'+$+">"+E.content+"</"+E.tag+">"};function u(f,m,w,v){f.lastIndex=m;var E=f.exec(w);if(E&&v&&E[1]){var U=E[1].length;E.index+=U,E[0]=E[0].slice(U)}return E}function y(f,m,w,v,E,U){for(var $ in w)if(!(!w.hasOwnProperty($)||!w[$])){var F=w[$];F=Array.isArray(F)?F:[F];for(var h=0;h<F.length;++h){if(U&&U.cause==$+","+h)return;var B=F[h],q=B.inside,we=!!B.lookbehind,Te=!!B.greedy,_e=B.alias;if(Te&&!B.pattern.global){var Re=B.pattern.toString().match(/[imsuy]*$/)[0];B.pattern=RegExp(B.pattern.source,Re+"g")}for(var ve=B.pattern||B,M=v.next,J=E;M!==m.tail&&!(U&&J>=U.reach);J+=M.value.length,M=M.next){var K=M.value;if(m.length>f.length)return;if(!(K instanceof i)){var re=1,O;if(Te){if(O=u(ve,J,f,we),!O||O.index>=f.length)break;var le=O.index,he=O.index+O[0].length,G=J;for(G+=M.value.length;le>=G;)M=M.next,G+=M.value.length;if(G-=M.value.length,J=G,M.value instanceof i)continue;for(var ee=M;ee!==m.tail&&(G<he||typeof ee.value=="string");ee=ee.next)re++,G+=ee.value.length;re--,K=f.slice(J,G),O.index-=J}else if(O=u(ve,0,K,we),!O)continue;var le=O.index,ae=O[0],de=K.slice(0,le),Ee=K.slice(le+ae.length),me=J+K.length;U&&me>U.reach&&(U.reach=me);var ie=M.prev;de&&(ie=A(m,ie,de),J+=de.length),k(m,ie,re);var Be=new i($,q?e.tokenize(ae,q):ae,_e,ae);if(M=A(m,ie,Be),Ee&&A(m,M,Ee),re>1){var ge={cause:$+","+h,reach:me};y(f,m,w,M.prev,J,ge),U&&ge.reach>U.reach&&(U.reach=ge.reach)}}}}}}function T(){var f={value:null,prev:null,next:null},m={value:null,prev:f,next:null};f.next=m,this.head=f,this.tail=m,this.length=0}function A(f,m,w){var v=m.next,E={value:w,prev:m,next:v};return m.next=E,v.prev=E,f.length++,E}function k(f,m,w){for(var v=m.next,E=0;E<w&&v!==f.tail;E++)v=v.next;m.next=v,v.prev=m,f.length-=E}function x(f){for(var m=[],w=f.head.next;w!==f.tail;)m.push(w.value),w=w.next;return m}if(!g.document)return g.addEventListener&&(e.disableWorkerMessageHandler||g.addEventListener("message",function(f){var m=JSON.parse(f.data),w=m.language,v=m.code,E=m.immediateClose;g.postMessage(e.highlight(v,e.languages[w],w)),E&&g.close()},!1)),e;var L=e.util.currentScript();L&&(e.filename=L.src,L.hasAttribute("data-manual")&&(e.manual=!0));function R(){e.manual||e.highlightAll()}if(!e.manual){var V=document.readyState;V==="loading"||V==="interactive"&&L&&L.defer?document.addEventListener("DOMContentLoaded",R):window.requestAnimationFrame?window.requestAnimationFrame(R):window.setTimeout(R,16)}return e}(s);b.exports&&(b.exports=c),typeof Ae<"u"&&(Ae.Prism=c)})(Le);var Tt=Le.exports;const vt=Me(Tt);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(b){b.type==="entity"&&(b.attributes.title=b.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(s,c){var g={};g["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[c]},g.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:g}};o["language-"+c]={pattern:/[\s\S]+/,inside:Prism.languages[c]};var r={};r[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",r)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(b,s){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+b+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:Prism.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(b){b.languages.typescript=b.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),b.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete b.languages.typescript.parameter,delete b.languages.typescript["literal-property"];var s=b.languages.extend("typescript",{});delete s["class-name"],b.languages.typescript["class-name"].inside=s,b.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:s}}}}),b.languages.ts=b.languages.typescript})(Prism);(function(b){var s=b.util.clone(b.languages.javascript),c=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,g=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(i,u){return i=i.replace(/<S>/g,function(){return c}).replace(/<BRACES>/g,function(){return g}).replace(/<SPREAD>/g,function(){return o}),RegExp(i,u)}o=r(o).source,b.languages.jsx=b.languages.extend("markup",s),b.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),b.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,b.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,b.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,b.languages.jsx.tag.inside.comment=s.comment,b.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:b.languages.jsx}},b.languages.jsx.tag),b.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:b.languages.jsx}}},b.languages.jsx.tag);var t=function(i){return i?typeof i=="string"?i:typeof i.content=="string"?i.content:i.content.map(t).join(""):""},e=function(i){for(var u=[],y=0;y<i.length;y++){var T=i[y],A=!1;if(typeof T!="string"&&(T.type==="tag"&&T.content[0]&&T.content[0].type==="tag"?T.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===t(T.content[0].content[1])&&u.pop():T.content[T.content.length-1].content==="/>"||u.push({tagName:t(T.content[0].content[1]),openedBraces:0}):u.length>0&&T.type==="punctuation"&&T.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&T.type==="punctuation"&&T.content==="}"?u[u.length-1].openedBraces--:A=!0),(A||typeof T=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var k=t(T);y<i.length-1&&(typeof i[y+1]=="string"||i[y+1].type==="plain-text")&&(k+=t(i[y+1]),i.splice(y+1,1)),y>0&&(typeof i[y-1]=="string"||i[y-1].type==="plain-text")&&(k=t(i[y-1])+k,i.splice(y-1,1),y--),i[y]=new b.Token("plain-text",k,null,k)}T.content&&typeof T.content!="string"&&e(T.content)}};b.hooks.add("after-tokenize",function(i){i.language!=="jsx"&&i.language!=="tsx"||e(i.tokens)})})(Prism);(function(b){var s=b.util.clone(b.languages.typescript);b.languages.tsx=b.languages.extend("jsx",s),delete b.languages.tsx.parameter,delete b.languages.tsx["literal-property"];var c=b.languages.tsx.tag;c.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+c.pattern.source+")",c.pattern.flags),c.lookbehind=!0})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var b="line-numbers",s=/\n(?!$)/g,c=Prism.plugins.lineNumbers={getLine:function(t,e){if(!(t.tagName!=="PRE"||!t.classList.contains(b))){var i=t.querySelector(".line-numbers-rows");if(i){var u=parseInt(t.getAttribute("data-start"),10)||1,y=u+(i.children.length-1);e<u&&(e=u),e>y&&(e=y);var T=e-u;return i.children[T]}}},resize:function(t){g([t])},assumeViewportIndependence:!0};function g(t){if(t=t.filter(function(i){var u=o(i),y=u["white-space"];return y==="pre-wrap"||y==="pre-line"}),t.length!=0){var e=t.map(function(i){var u=i.querySelector("code"),y=i.querySelector(".line-numbers-rows");if(!(!u||!y)){var T=i.querySelector(".line-numbers-sizer"),A=u.textContent.split(s);T||(T=document.createElement("span"),T.className="line-numbers-sizer",u.appendChild(T)),T.innerHTML="0",T.style.display="block";var k=T.getBoundingClientRect().height;return T.innerHTML="",{element:i,lines:A,lineHeights:[],oneLinerHeight:k,sizer:T}}}).filter(Boolean);e.forEach(function(i){var u=i.sizer,y=i.lines,T=i.lineHeights,A=i.oneLinerHeight;T[y.length-1]=void 0,y.forEach(function(k,x){if(k&&k.length>1){var L=u.appendChild(document.createElement("span"));L.style.display="block",L.textContent=k}else T[x]=A})}),e.forEach(function(i){for(var u=i.sizer,y=i.lineHeights,T=0,A=0;A<y.length;A++)y[A]===void 0&&(y[A]=u.children[T++].getBoundingClientRect().height)}),e.forEach(function(i){var u=i.sizer,y=i.element.querySelector(".line-numbers-rows");u.style.display="none",u.innerHTML="",i.lineHeights.forEach(function(T,A){y.children[A].style.height=T+"px"})})}}function o(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}var r=void 0;window.addEventListener("resize",function(){c.assumeViewportIndependence&&r===window.innerWidth||(r=window.innerWidth,g(Array.prototype.slice.call(document.querySelectorAll("pre."+b))))}),Prism.hooks.add("complete",function(t){if(t.code){var e=t.element,i=e.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!e.querySelector(".line-numbers-rows")&&Prism.util.isActive(e,b)){e.classList.remove(b),i.classList.add(b);var u=t.code.match(s),y=u?u.length+1:1,T,A=new Array(y+1).join("<span></span>");T=document.createElement("span"),T.setAttribute("aria-hidden","true"),T.className="line-numbers-rows",T.innerHTML=A,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),t.element.appendChild(T),g([i]),Prism.hooks.run("line-numbers",t)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})})();const Et={key:0},At=P({__name:"HighlightCode",props:{txt:{},lang:{}},setup(b){const s=b,c=Q();Ne(g),je(g);function g(){const r=c.value&&c.value.querySelector("code");r&&vt.highlightElement(r)}function o(){var t,e;const r=(s.txt||((e=(t=c.value)==null?void 0:t.querySelector("code"))==null?void 0:e.innerText)||"没有内容").trim();xe(r).then(()=>{H.success("复制成功")})}return(r,t)=>{const e=I("ElButton");return z(),C("div",{ref_key:"codeRef",ref:c,style:{position:"relative"}},[r.txt?(z(),C("pre",Et,[d("code",{class:Ve(`line-numbers language-${r.lang||"html"}`)},_(r.txt?r.txt+"":""),3)])):oe(r.$slots,"default",{key:1},void 0,!0),n(e,{onClick:o,icon:p(Oe),size:"small",style:{position:"absolute",right:"15px",top:"15px"},type:"primary"},null,8,["icon"])],512)}}}),kt=$e(At,[["__scopeId","data-v-d1004230"]]),Ut={class:"uni-temp"},Ft={class:"uni-temp-box"},zt={class:"uni-temp-ops"},St={key:0,class:"uni-temp-code"},Ct=P({__name:"UniTempCard",props:{txt:{}},setup(b){const s=b,c=Q(!1);function g(){const t=new URL(location.href);t.hash="#/repl",ke({"src/App.vue":s.txt}),window.open(t.toString()),ke("")}function o(){xe(s.txt||"没有内容").then(()=>{H.success("复制成功")})}function r(){c.value=!c.value}return(t,e)=>{const i=I("ElDivider"),u=I("el-icon");return z(),C("div",Ut,[d("div",Ft,[oe(t.$slots,"default",{},void 0,!0)]),n(i,{style:{margin:"0",padding:"0"}}),d("div",zt,[n(p(fe),{content:"在 Playground 中编辑"},{default:l(()=>[n(u,{onClick:g},{default:l(()=>[n(p(He))]),_:1})]),_:1}),n(p(fe),{content:"复制代码"},{default:l(()=>[n(u,{onClick:o},{default:l(()=>[n(p(Je))]),_:1})]),_:1}),n(p(fe),{content:"查看源代码"},{default:l(()=>[n(u,{onClick:r},{default:l(()=>[n(p(We))]),_:1})]),_:1})]),c.value?(z(),C("div",St,[n(p(kt),{txt:t.txt},null,8,["txt"])])):se("",!0)])}}}),It=$e(Ct,[["__scopeId","data-v-9a9d36a4"]]),$t=P({inheritAttrs:!1,__name:"UniAnchor",props:{items:{}},setup(b){const s=P({props:["items"],render(){return(this.$props.items||[]).map(g=>n(Qe,{key:g.key,href:g.key},{default(){return g.title},"sub-link"(){var o;return(o=g.children)!=null&&o.length?n(s,{items:g.children},null):null}}))}});return(c,g)=>(z(),C("div",null,[n(p(Ze),qe({direction:"vertical",type:"default",offset:30,onClick:g[0]||(g[0]=Ge(()=>{},["prevent"]))},c.$attrs),{default:l(()=>[n(p(s),{items:c.items},null,8,["items"])]),_:1},16)]))}}),Pt={__name:"App",setup(b){const s=Q("自定义的");return(c,g)=>(z(),C(D,null,[d("h1",null,_(s.value),1),Pe(d("input",{"onUpdate:modelValue":g[0]||(g[0]=o=>s.value=o)},null,512),[[Ke,s.value]])],64))}},Dt=P({__name:"UniCheckboxGroup1",setup(b){const s=Q([1]),c=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(g,o)=>{const r=I("ElText");return z(),C(D,null,[o[7]||(o[7]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(r,{type:"warning"},{default:l(()=>o[1]||(o[1]=[a(" UniCheckboxGroup ")])),_:1}),n(r,null,{default:l(()=>o[2]||(o[2]=[a(" 就是将 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[3]||(o[3]=[a(" ElCheckbox ")])),_:1}),n(r,null,{default:l(()=>o[4]||(o[4]=[a(" 改成 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[5]||(o[5]=[a(" options ")])),_:1}),n(r,null,{default:l(()=>o[6]||(o[6]=[a(" 配置传参 ")])),_:1})]),n(p(Xe),{options:c,modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t)},null,8,["modelValue"])],64)}}}),Lt=`<template>
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
`,_t=P({__name:"UniForm1",setup(b){const s=Y({}),c=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],g=[{key:"id",label:"ID"},{key:"title",label:"TITLE",component(){return W(te,{options:c})}},{key:"hidden",label:"默认隐藏",hidden:!0},{key:"btns"}];return(o,r)=>{const t=I("ElText");return z(),C(D,null,[r[14]||(r[14]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(t,{type:"warning"},{default:l(()=>r[0]||(r[0]=[a(" items ")])),_:1}),n(t,null,{default:l(()=>r[1]||(r[1]=[a(" 配置中的 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[2]||(r[2]=[a(" key ")])),_:1}),n(t,null,{default:l(()=>r[3]||(r[3]=[a(" 自动绑定 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[4]||(r[4]=[a(" model ")])),_:1}),n(t,null,{default:l(()=>r[5]||(r[5]=[a(" 响应式变量中的key ")])),_:1})]),d("p",null,[n(t,null,{default:l(()=>r[6]||(r[6]=[a(" 默认会是 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[7]||(r[7]=[a(" inline ")])),_:1}),n(t,null,{default:l(()=>r[8]||(r[8]=[a(" 布局 ")])),_:1})]),d("p",null,[n(t,null,{default:l(()=>r[9]||(r[9]=[a(" 默认 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[10]||(r[10]=[a(" key: 'btns' ")])),_:1}),n(t,null,{default:l(()=>r[11]||(r[11]=[a(" 展示按键，配置中有 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[12]||(r[12]=[a(" hidden?: boolean ")])),_:1}),n(t,null,{default:l(()=>r[13]||(r[13]=[a(" 会出现展开收起的按键 ")])),_:1})]),n(p(ne),{model:s,items:g,"label-width":"auto"},null,8,["model"]),d("pre",null,[d("code",null,_(JSON.stringify(s,null,2)),1)])],64)}}}),Rt=`<template>
  <UniForm :model="formModel" :items="items" label-width="auto" />
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
`,ht=P({__name:"UniForm2",setup(b){const s=Y({ipt:""});return(c,g)=>{const o=I("ElText"),r=I("ElInput");return z(),C(D,null,[g[5]||(g[5]=d("h1",{"data-id":""},"兼容用法",-1)),d("p",null,[n(o,null,{default:l(()=>g[1]||(g[1]=[a(" 是可以兼容 ")])),_:1}),n(o,{type:"warning"},{default:l(()=>g[2]||(g[2]=[a(" ElForm ")])),_:1}),n(o,null,{default:l(()=>g[3]||(g[3]=[a(" 语法的，在子元素中使用 ")])),_:1}),n(o,{type:"warning"},{default:l(()=>g[4]||(g[4]=[a(" ElFormItem ")])),_:1})]),n(p(ne),{model:s,"label-width":"auto"},{default:l(()=>[n(p(Ye),{label:"ID"},{default:l(()=>[n(r,{modelValue:s.ipt,"onUpdate:modelValue":g[0]||(g[0]=t=>s.ipt=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])],64)}}}),Bt=`<template>
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
`,Mt=P({__name:"UniForm3",setup(b){const s=Q(),c=Y({}),g=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],o=[{key:"id",label:"ID"},{key:"title",label:"TITLE",component(){return W(te,{options:g})}},{key:"hidden",label:"默认隐藏",hidden:!0},{key:"btns"}];return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[13]||(t[13]=d("h1",{"data-id":""},"展开/收起",-1)),d("p",null,[n(e,null,{default:l(()=>t[3]||(t[3]=[a(" 配置中有 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" hidden?: boolean ")])),_:1}),n(e,null,{default:l(()=>t[5]||(t[5]=[a(" 配置后，如果有 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[6]||(t[6]=[a(" key: 'btns' ")])),_:1}),n(e,null,{default:l(()=>t[7]||(t[7]=[a(" 的配置，会出现 展开/收起 的按键，也可以通过实例方法 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[8]||(t[8]=[a(" switchHidden: (val?: boolean) => void ")])),_:1}),n(e,null,{default:l(()=>t[9]||(t[9]=[a(" 进行切换 ")])),_:1})]),n(p(Z),{type:"primary",onClick:t[0]||(t[0]=i=>{var u;return(u=s.value)==null?void 0:u.switchHidden()})},{default:l(()=>t[10]||(t[10]=[a("切换")])),_:1}),n(p(Z),{type:"primary",onClick:t[1]||(t[1]=i=>{var u;return(u=s.value)==null?void 0:u.switchHidden(!0)})},{default:l(()=>t[11]||(t[11]=[a("显示")])),_:1}),n(p(Z),{type:"primary",onClick:t[2]||(t[2]=i=>{var u;return(u=s.value)==null?void 0:u.switchHidden(!1)})},{default:l(()=>t[12]||(t[12]=[a("隐藏")])),_:1}),n(p(et)),n(p(ne),{model:c,items:o,ref_key:"uniTableRef",ref:s,itemMinWidth:"1fr"},null,8,["model"])],64)}}}),Nt=`<template>
  <ElButton type="primary" @click="uniTableRef?.switchHidden()">切换</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(true)">显示</ElButton>
  <ElButton type="primary" @click="uniTableRef?.switchHidden(false)">隐藏</ElButton>
  <ElDivider />
  <UniForm :model="formModel" :items="items" ref="uniTableRef" itemMinWidth="1fr" />
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
`,jt=P({__name:"UniForm4",setup(b){const s=Y({id:""}),c=[{value:"1",label:"关羽"},{value:"2",label:"张飞"}],g=[{key:"id",label:"ID"},{key:"title",label:"TITLE",slots:{label(){return"label"},default(){return W(ue,{placeholder:"哇咔咔"})}},component(){return W(te,{options:c})}},{key:"name",label:"名称",component(){return[W(te,{options:c,"data-prop":"name"}),W(tt,null,{default(){return"多个元素的处理方式"}}),W(ue,{"data-prop":"name1"})]}},{key:"btns"}];return(o,r)=>{const t=I("ElText");return z(),C(D,null,[r[25]||(r[25]=d("h1",{"data-id":""},"插槽使用",-1)),r[26]||(r[26]=d("h3",null,"这里展示多种插槽方式，随便选一个你喜欢的使用就行",-1)),d("p",null,[n(t,null,{default:l(()=>r[0]||(r[0]=[a(" 配置中有 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[1]||(r[1]=[a(" component?: (...args: any[]) => VNodeChild ")])),_:1}),n(t,null,{default:l(()=>r[2]||(r[2]=[a(" 可以通过 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[3]||(r[3]=[a(" h ")])),_:1}),n(t,null,{default:l(()=>r[4]||(r[4]=[a(" 函数进行渲染自定义元素 ")])),_:1})]),d("p",null,[n(t,{type:"warning"},{default:l(()=>r[5]||(r[5]=[a(" component ")])),_:1}),n(t,null,{default:l(()=>r[6]||(r[6]=[a(" 返回值如果是数组，可以给数组中元素指定属性 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[7]||(r[7]=[a(" data-prop ")])),_:1}),n(t,null,{default:l(()=>r[8]||(r[8]=[a(" 用于对应 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[9]||(r[9]=[a(" model ")])),_:1}),n(t,null,{default:l(()=>r[10]||(r[10]=[a(" 响应式数据中的值，使用 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[11]||(r[11]=[a(" data- ")])),_:1}),n(t,null,{default:l(()=>r[12]||(r[12]=[a(" 开头是为了 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[13]||(r[13]=[a(" typescript ")])),_:1}),n(t,null,{default:l(()=>r[14]||(r[14]=[a(" 不会报错 ")])),_:1})]),d("p",null,[n(t,null,{default:l(()=>r[15]||(r[15]=[a(" 配置中的 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[16]||(r[16]=[a(" key: string ")])),_:1}),n(t,null,{default:l(()=>r[17]||(r[17]=[a(" 属性值可以对应插槽 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[18]||(r[18]=[a(" default ")])),_:1})]),d("p",null,[n(t,null,{default:l(()=>r[19]||(r[19]=[a(" 其他插槽，下划线分隔 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[20]||(r[20]=[a(" {key}_{slotName} ")])),_:1}),n(t,null,{default:l(()=>r[21]||(r[21]=[a(" 如： ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[22]||(r[22]=[a(" id_label ")])),_:1}),n(t,null,{default:l(()=>r[23]||(r[23]=[a(" 就是这里的label插槽 ")])),_:1})]),n(p(ne),{model:s,"label-width":"200px",itemMinWidth:"1fr",items:g},{id_label:l(()=>r[24]||(r[24]=[d("i",null,"通过 key 插槽的 label",-1)])),id:l(()=>[n(p(ue))]),_:1},8,["model"]),d("pre",null,[d("code",null,_(JSON.stringify(s,null,2)),1)])],64)}}}),Vt=`<template>
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
`,Ie="index",Ot=P({__name:"UniLayout1",setup(b){const s=[{name:"index",title:"首页"},{name:"index1",title:"首页1"}];function c(){H.success("标签页点击，请查看命令行"),console.log("------> 标签页点击",...arguments)}function g(){H.success("菜单点击，请查看命令行"),console.log("------> 菜单点击",...arguments)}return(o,r)=>(z(),C("div",null,[r[0]||(r[0]=d("h1",{"data-id":""},"默认布局",-1)),n(p(nt),{menus:s,menuActive:Ie,tagActive:Ie,onTagItemClick:c,onMenuItemClick:g})]))}}),Ht=`<template>
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
`,Jt=P({__name:"UniRadioGroup1",setup(b){const s=Q(1),c=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(g,o)=>{const r=I("ElText");return z(),C(D,null,[o[7]||(o[7]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(r,{type:"warning"},{default:l(()=>o[1]||(o[1]=[a(" UniRadioGroup ")])),_:1}),n(r,null,{default:l(()=>o[2]||(o[2]=[a(" 就是将 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[3]||(o[3]=[a(" ElRadio ")])),_:1}),n(r,null,{default:l(()=>o[4]||(o[4]=[a(" 改成 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[5]||(o[5]=[a(" options ")])),_:1}),n(r,null,{default:l(()=>o[6]||(o[6]=[a(" 配置传参 ")])),_:1})]),n(p(rt),{options:c,modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t)},null,8,["modelValue"])],64)}}}),Wt=`<template>
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
`,qt=P({__name:"UniSelect1",setup(b){const s=Q(1),c=[{value:1,label:"关羽"},{value:2,label:"张飞"}];return(g,o)=>{const r=I("ElText");return z(),C(D,null,[o[7]||(o[7]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(r,{type:"warning"},{default:l(()=>o[1]||(o[1]=[a(" UniSelect ")])),_:1}),n(r,null,{default:l(()=>o[2]||(o[2]=[a(" 就是将 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[3]||(o[3]=[a(" ElOption ")])),_:1}),n(r,null,{default:l(()=>o[4]||(o[4]=[a(" 改成 ")])),_:1}),n(r,{type:"warning"},{default:l(()=>o[5]||(o[5]=[a(" options ")])),_:1}),n(r,null,{default:l(()=>o[6]||(o[6]=[a(" 配置传参 ")])),_:1})]),n(p(te),{options:c,modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t)},null,8,["modelValue"])],64)}}}),Gt=`<template>
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
`,Zt=P({__name:"UniTable1",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[4]||(t[4]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" tableApi ")])),_:1}),n(e,null,{default:l(()=>t[1]||(t[1]=[a(" 必填属性，值来自于 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" useTable ")])),_:1}),n(e,null,{default:l(()=>t[3]||(t[3]=[a(" 的方法 ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},null,8,["tableApi"])],64)}}}),Qt=`<template>
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
`,Kt=P({__name:"UniTable10",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[2]||(t[2]=d("h1",{"data-id":""},"用户缓存",-1)),d("p",null,[n(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" cacheKey?: string ")])),_:1}),n(e,null,{default:l(()=>t[1]||(t[1]=[a(" 可以控制，用户是否可以选中缓存当前配置，值必须是全局唯一的 ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c,cacheKey:"EXP_UNI_TABLE_10"},null,8,["tableApi"])],64)}}}),Xt=`<template>
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
`,Yt=P({__name:"UniTable11",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID"},{key:"title",label:"TITLE",subset:[{key:"item1",label:"ITEM1"},{key:"item2",label:"ITEM2"}]}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[2]||(t[2]=d("h1",{"data-id":""},"多级表头",-1)),d("p",null,[n(e,null,{default:l(()=>t[0]||(t[0]=[a(" 子集使用 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a(" subset?: UniTableColumnPropsType[] ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},null,8,["tableApi"])],64)}}}),en=`<template>
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
`,tn=P({__name:"UniTable2",setup(b){const s=N({async api(o){const t=(await c({size:o.size,current:o.current,param:{}})).result;return{rows:t.rows,total:t.total}}});s.onCurrentChange(1);async function c(o){return g(o.size,o.current)}async function g(o,r){return{code:200,msg:"成功",result:{total:1e3,rows:t(o,r)}};function t(e,i){const u=(i-1)*e;return new Array(e).fill("").map((T,A)=>{const k=u+A+1;return{id:k,title:k+" - 随意",item1:k+" - 关羽",item2:k+" - 张飞",item3:k+" - 赵云",item4:k+" - 马超",item5:k+" - 黄忠",item6:k+" - 张辽"}})}}return(o,r)=>{const t=I("ElText");return z(),C(D,null,[r[3]||(r[3]=d("h1",{"data-id":""},"兼容原生",-1)),d("p",null,[n(t,null,{default:l(()=>r[0]||(r[0]=[a(" 可以忽略 ")])),_:1}),n(t,{type:"warning"},{default:l(()=>r[1]||(r[1]=[a(" columns ")])),_:1}),n(t,null,{default:l(()=>r[2]||(r[2]=[a(" 属性，直接使用默认插槽 ")])),_:1})]),n(p(j),{tableApi:p(s)},{default:l(()=>[n(p(Ue),{prop:"id",label:"ID"}),n(p(Ue),{prop:"title",label:"TITLE"})]),_:1},8,["tableApi"])],64)}}}),nn=`<template>
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
`,rn=P({__name:"UniTable3",setup(b){const s=De(),c=N({localPaging:!0,syncServer:!1,async api(){return o()}});c.onCurrentChange(1);const g=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function o(){console.log("有请求后台数据");const e=(await r()).result||[],i=e.length;return{rows:e,total:i}}async function r(){return{code:200,msg:"成功",result:t(150,1)};function t(e,i){const u=(i-1)*e;return new Array(e).fill("").map((T,A)=>{const k=u+A+1;return{id:k,title:k+" - 随意",item1:k+" - 关羽",item2:k+" - 张飞",item3:k+" - 赵云",item4:k+" - 马超",item5:k+" - 黄忠",item6:k+" - 张辽"}})}}return(t,e)=>{const i=I("ElText");return z(),C(D,null,[e[10]||(e[10]=d("h1",{"data-id":""},"本地分页",-1)),d("p",null,[n(i,{type:"warning"},{default:l(()=>e[0]||(e[0]=[a(" useTable ")])),_:1}),n(i,null,{default:l(()=>e[1]||(e[1]=[a(" 中有 ")])),_:1}),n(i,{type:"warning"},{default:l(()=>e[2]||(e[2]=[a(" localPaging?: boolean ")])),_:1}),n(i,null,{default:l(()=>e[3]||(e[3]=[a(" 属性设置为 ")])),_:1}),n(i,{type:"warning"},{default:l(()=>e[4]||(e[4]=[a(" true ")])),_:1})]),d("p",null,[n(i,{type:"warning"},{default:l(()=>e[5]||(e[5]=[a(" useTable ")])),_:1}),n(i,null,{default:l(()=>e[6]||(e[6]=[a(" 中有 ")])),_:1}),n(i,{type:"warning"},{default:l(()=>e[7]||(e[7]=[a(" syncServer?: boolean ")])),_:1}),n(i,null,{default:l(()=>e[8]||(e[8]=[a(" 属性，设置是否每次翻页都同步线上数据，默认值为 ")])),_:1}),n(i,{type:"warning"},{default:l(()=>e[9]||(e[9]=[a(" true ")])),_:1})]),n(p(j),{tableApi:p(c),columns:g,ref_key:"uniTableRef",ref:s},null,8,["tableApi"])],64)}}}),ln=`<template>
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
`,an=P({__name:"UniTable4",setup(b){const s=De(),c=N({async api(t){const i=(await o({size:t.size,current:t.current,param:{}})).result;return{rows:i.rows,total:i.total}}});c.onCurrentChange(1),lt(()=>s.value,t=>{console.log("ElTable实例 -> ",t.tableRef)});const g=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function o(t){return r(t.size,t.current)}async function r(t,e){return{code:200,msg:"成功",result:{total:1e3,rows:i(t,e)}};function i(u,y){const T=(y-1)*u;return new Array(u).fill("").map((k,x)=>{const L=T+x+1;return{id:L,title:L+" - 随意",item1:L+" - 关羽",item2:L+" - 张飞",item3:L+" - 赵云",item4:L+" - 马超",item5:L+" - 黄忠",item6:L+" - 张辽"}})}}return(t,e)=>{const i=I("ElText");return z(),C(D,null,[e[3]||(e[3]=d("h1",{"data-id":""},"ElTable实例",-1)),d("p",null,[n(i,{type:"warning"},{default:l(()=>e[0]||(e[0]=[a(" UniTable ")])),_:1}),n(i,null,{default:l(()=>e[1]||(e[1]=[a(" 组件的实例中获取 ")])),_:1}),n(i,{type:"warning"},{default:l(()=>e[2]||(e[2]=[a(" UniTableRef.tableRef ")])),_:1})]),n(p(j),{tableApi:p(c),columns:g,ref_key:"uniTableRef",ref:s},null,8,["tableApi"])],64)}}}),sn=`<template>
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
`,un=P({__name:"UniTable5",setup(b){const s=N({async api(e){const u=(await r({size:e.size,current:e.current,param:{}})).result;return{rows:u.rows,total:u.total}}});s.onCurrentChange(1);function c(e){return console.log(e),[...e,{key:"add1",render(){return 123}}]}const g=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];function o(e){H.success("table bar 点击回调，参数查看控制台"),console.log(e)}async function r(e){return t(e.size,e.current)}async function t(e,i){return{code:200,msg:"成功",result:{total:1e3,rows:u(e,i)}};function u(y,T){const A=(T-1)*y;return new Array(y).fill("").map((x,L)=>{const R=A+L+1;return{id:R,title:R+" - 随意",item1:R+" - 关羽",item2:R+" - 张飞",item3:R+" - 赵云",item4:R+" - 马超",item5:R+" - 黄忠",item6:R+" - 张辽"}})}}return(e,i)=>{const u=I("ElText");return z(),C(D,null,[i[12]||(i[12]=d("h1",{"data-id":""},"table bar管理",-1)),d("p",null,[n(u,null,{default:l(()=>i[0]||(i[0]=[a(" 使用插槽 ")])),_:1}),n(u,{type:"warning"},{default:l(()=>i[1]||(i[1]=[a(" bar_left ")])),_:1}),n(u,null,{default:l(()=>i[2]||(i[2]=[a(" 在左侧新增或者使用插槽 ")])),_:1}),n(u,{type:"warning"},{default:l(()=>i[3]||(i[3]=[a(" bar_right ")])),_:1}),n(u,null,{default:l(()=>i[4]||(i[4]=[a(" 在右侧新增，只要是这两个字符串开头就行 ")])),_:1})]),d("p",null,[n(u,null,{default:l(()=>i[5]||(i[5]=[a(" 统一处理更改，可以使用： ")])),_:1}),n(u,{type:"warning"},{default:l(()=>i[6]||(i[6]=[a(" formatBarItems ")])),_:1}),n(u,null,{default:l(()=>i[7]||(i[7]=[a(" 属性，参数是所有元素集合，返回类似的集合即可 ")])),_:1})]),n(p(j),{formatBarItems:c,tableApi:p(s),columns:g,onBarClick:o},{bar_right:l(()=>[n(p(Z),null,{default:l(()=>i[8]||(i[8]=[a("按键-right1")])),_:1}),n(p(Z),null,{default:l(()=>i[9]||(i[9]=[a("按键-right2")])),_:1})]),bar_right1:l(()=>[n(p(Z),null,{default:l(()=>i[10]||(i[10]=[a("按键-right3")])),_:1})]),bar_left:l(()=>[n(p(Z),null,{default:l(()=>i[11]||(i[11]=[a("按键-left1")])),_:1})]),_:1},8,["tableApi"])],64)}}}),on=`<template>
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
`,pn=P({__name:"UniTable6",setup(b){const s=Y({}),c=N({async api(i){const y=(await t({size:i.size,current:i.current,param:{}})).result;return{rows:y.rows,total:y.total}}});c.onCurrentChange(1);const g=pe(()=>[{key:"id",label:"ID"},{key:"title",label:"TITLE"}]),o=pe(()=>[{key:"id",label:"ID"},{key:"title",label:"TITLE",hidden:!0,component:()=>W(ue)},{key:"btns"}]);function r(){H.success("提交，控制台查看数据"),console.log("表单提交",s)}async function t(i){return e(i.size,i.current)}async function e(i,u){return{code:200,msg:"成功",result:{total:1e3,rows:y(i,u)}};function y(T,A){const k=(A-1)*T;return new Array(T).fill("").map((L,R)=>{const V=k+R+1;return{id:V,title:V+" - 随意",item1:V+" - 关羽",item2:V+" - 张飞",item3:V+" - 赵云",item4:V+" - 马超",item5:V+" - 黄忠",item6:V+" - 张辽"}})}}return(i,u)=>{const y=I("ElText");return z(),C(D,null,[u[3]||(u[3]=d("h1",{"data-id":""},"过滤表单",-1)),d("p",null,[n(y,null,{default:l(()=>u[0]||(u[0]=[a(" 可以使用插槽 ")])),_:1}),n(y,{type:"warning"},{default:l(()=>u[1]||(u[1]=[a(" filter_form ")])),_:1}),n(y,null,{default:l(()=>u[2]||(u[2]=[a(" ，使用后，会在table bar里面显示一个搜索按键，可以控制过滤元素的展示和隐藏 ")])),_:1})]),n(p(j),{tableApi:p(c),columns:g.value},{filter_form:l(()=>[n(p(ne),{model:s,"label-width":"auto",items:o.value,onSubmit:r},null,8,["model","items"])]),_:1},8,["tableApi","columns"])],64)}}}),dn=`<template>
  <UniTable :tableApi="tableApi" :columns="columns">
    <template #filter_form>
      <UniForm :model="formModel" label-width="auto" :items="items" @submit="onFormSubmit"></UniForm>
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
    { key: 'btns' },
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
`,mn=P({__name:"UniTable7",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID",fixed:!0},{key:"title",label:"TITLE",width:260},{key:"item1",label:"第一列",width:240,slots:{default({row:r}){return W(Z,null,{default(){return r.item1+" - 格式化后2"}})}}},{key:"item2",label:"第二列",hidden:!0,width:200},{key:"item3",label:"第三列",width:200},{key:"xx",prop:"item3",label:"第三列",width:200},{key:"item4",label:"第四列",width:200},{key:"item5",label:"第五列",width:200},{key:"item6",label:"第六列",width:200}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[11]||(t[11]=d("h1",{"data-id":""},"列配置",-1)),d("p",null,[n(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" key ")])),_:1}),n(e,null,{default:l(()=>t[1]||(t[1]=[a(" 是唯一的，存在时可以忽略 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" prop ")])),_:1}),n(e,null,{default:l(()=>t[3]||(t[3]=[a(" 属性 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" key: string ")])),_:1}),n(e,null,{default:l(()=>t[5]||(t[5]=[a(" 属性的值，还可以对应一个插槽名，用于自定义内容 ")])),_:1})]),d("p",null,[n(e,null,{default:l(()=>t[6]||(t[6]=[a(" 列配置时 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[7]||(t[7]=[a("UniTableColumnPropsType ")])),_:1}),n(e,null,{default:l(()=>t[8]||(t[8]=[a(" 的属性 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[9]||(t[9]=[a(" hidden?: boolean ")])),_:1}),n(e,null,{default:l(()=>t[10]||(t[10]=[a(" 可以控制初始是否隐藏 ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},{title:l(({row:i})=>[d("div",null,_(i.title+" - 格式化后1"),1)]),_:1},8,["tableApi"])],64)}}}),gn=`<template>
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
`,fn=P({__name:"UniTable8",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",slots:{default({row:r}){return W("span",{style:"color: #f00"},{default(){return r.id+"，h函数，内容插槽"}})},header(){return"h函数抬头插槽ID"}}},{key:"title",label:"TITLE"},{key:"item1",label:"ITEM1",component({row:r}){return r.item1+"，快速渲染default"}}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[16]||(t[16]=d("h1",{"data-id":""},"列插槽",-1)),d("p",null,[n(e,null,{default:l(()=>t[0]||(t[0]=[a(" 可以给一个 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a(" slots ")])),_:1}),n(e,null,{default:l(()=>t[2]||(t[2]=[a(" 属性，然后用 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[3]||(t[3]=[a(" h ")])),_:1}),n(e,null,{default:l(()=>t[4]||(t[4]=[a(" 函数写插槽 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[5]||(t[5]=[a(" slots?: Record<string, ((...args: any[]) => VNodeChild) | undefined> ")])),_:1})]),d("p",null,[n(e,null,{default:l(()=>t[6]||(t[6]=[a(" 也可以是对应的 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[7]||(t[7]=[a(" key ")])),_:1}),n(e,null,{default:l(()=>t[8]||(t[8]=[a(" 的值。每个 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[9]||(t[9]=[a(" key: string ")])),_:1}),n(e,null,{default:l(()=>t[10]||(t[10]=[a(" 的值对应一个插槽名 ")])),_:1})]),d("p",null,[n(e,null,{default:l(()=>t[11]||(t[11]=[a(" 快速渲染 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[12]||(t[12]=[a(" default ")])),_:1}),n(e,null,{default:l(()=>t[13]||(t[13]=[a(" 插槽，可以使用 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[14]||(t[14]=[a(" component?: (...args: any[]) => VNodeChild ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},{title_header:l(()=>t[15]||(t[15]=[a(" 抬头插槽，对应key ")])),title:l(({row:i})=>[a(_(i.title)+" 内容插槽，对应key ",1)]),_:1},8,["tableApi"])],64)}}}),bn=`<template>
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
`,cn=P({__name:"UniTable9",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID"},{key:"title",label:"TITLE",hidden:!0}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[5]||(t[5]=d("h1",{"data-id":""},"默认隐藏列",-1)),d("p",null,[n(e,null,{default:l(()=>t[0]||(t[0]=[a(" 列配置时 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[1]||(t[1]=[a("UniTableColumnPropsType ")])),_:1}),n(e,null,{default:l(()=>t[2]||(t[2]=[a(" 的属性 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[3]||(t[3]=[a(" hidden?: boolean ")])),_:1}),n(e,null,{default:l(()=>t[4]||(t[4]=[a(" 可以控制初始是否隐藏 ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},null,8,["tableApi"])],64)}}}),yn=`<template>
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
`,xn={style:{display:"flex",gap:"10px",color:"#fff"}},wn={style:{display:"flex",gap:"10px",color:"#fff"}},Tn=P({__name:"functionLib1",setup(b){const s=Y({clipVal:"这是一段文案",color:"#1E90FF",downloadText:"这是要下载的文案",downloadName:"a.txt",numberText:"1234567890",str1:"uni-form",str2:"uni-form",isObjStr1:!0,objStr1:JSON.stringify({"data-box":"1",onClick:"1","on-change":"1"},null,2),url:"https://www.baidu.com?a=b&c=d&a=c#aa?a=d&e=f"});async function c(t=3e3){await ft(t),H.success("延迟提示")}function g(){s.isObjStr1=!0;try{return JSON.stringify(bt(JSON.parse(s.objStr1)),null,2)}catch{s.isObjStr1=!1}}function o(){s.clipVal.length?xe(s.clipVal).then(()=>{H.success("复制成功")}):H.warning("没有可以复制的文案")}function r(){if(s.downloadName||H.warning("请输入文件名"),s.downloadText.length){const t=new Blob([s.downloadText]);ct(t,s.downloadName)}else H.warning("没有可以下载的文案")}return(t,e)=>{const i=I("ElButton"),u=I("ElInput"),y=I("el-color-picker"),T=I("ElAlert");return z(),C(D,null,[e[45]||(e[45]=d("h2",{"data-id":""},"写入剪贴板",-1)),n(u,{modelValue:s.clipVal,"onUpdate:modelValue":e[0]||(e[0]=A=>s.clipVal=A),placeholder:"请输入需要复制的文案"},{append:l(()=>[n(i,{onClick:o},{default:l(()=>e[11]||(e[11]=[a("复制")])),_:1})]),_:1},8,["modelValue"]),e[46]||(e[46]=d("h2",{"data-id":""},"颜色值转换",-1)),n(y,{modelValue:s.color,"onUpdate:modelValue":e[1]||(e[1]=A=>s.color=A)},null,8,["modelValue"]),e[47]||(e[47]=d("h3",{"data-id":"","data-level":"1"},"hex - rgb",-1)),d("p",null,[n(p(S),{style:X(`color: ${s.color};`)},{default:l(()=>[a(_(s.color),1)]),_:1},8,["style"]),n(p(S),null,{default:l(()=>e[12]||(e[12]=[a(" -> ")])),_:1}),n(p(S),{style:X(`color: ${s.color};`)},{default:l(()=>[a(_(p(be)(s.color)),1)]),_:1},8,["style"])]),e[48]||(e[48]=d("h3",{"data-id":"","data-level":"1"},"rgb - hex",-1)),d("p",null,[n(p(S),{style:X(`color: ${s.color};`)},{default:l(()=>[a(_(p(be)(s.color)),1)]),_:1},8,["style"]),n(p(S),null,{default:l(()=>e[13]||(e[13]=[a(" -> ")])),_:1}),n(p(S),{style:X(`color: ${s.color};`)},{default:l(()=>[a(_(p(at)(...p(be)(s.color))),1)]),_:1},8,["style"])]),e[49]||(e[49]=d("h3",{"data-id":"","data-level":"1"},"颜色加深",-1)),d("div",xn,[(z(),C(D,null,ye(9,A=>d("div",{style:X(`background: ${p(Fe)(s.color,A/10)}; width: 80px; line-height: 80px; text-align: center`)},_(p(Fe)(s.color,A/10)),5)),64))]),e[50]||(e[50]=d("h3",{"data-id":"","data-level":"1"},"颜色变浅",-1)),d("div",wn,[(z(),C(D,null,ye(9,A=>d("div",{style:X(`background: ${p(ze)(s.color,A/10)}; width: 80px; line-height: 80px; text-align: center`)},_(p(ze)(s.color,A/10)),5)),64))]),e[51]||(e[51]=d("h3",{"data-id":"","data-level":"1"},"ElementPlus 主题变量",-1)),d("pre",null,[d("code",null,_(JSON.stringify(p(it)(s.color),null,2)),1)]),e[52]||(e[52]=d("h2",{"data-id":""},"json 拷贝",-1)),n(p(S),{type:"primary"},{default:l(()=>e[14]||(e[14]=[a("cloneJson({a: 'b'})")])),_:1}),e[53]||(e[53]=d("h2",{"data-id":""},"文件下载",-1)),d("p",null,[n(p(S),null,{default:l(()=>e[15]||(e[15]=[a("主要用于配合后台下载文件的")])),_:1})]),n(u,{type:"textarea",modelValue:s.downloadText,"onUpdate:modelValue":e[2]||(e[2]=A=>s.downloadText=A),placeholder:"请输入文案"},null,8,["modelValue"]),e[54]||(e[54]=d("div",{style:{height:"15px"}},null,-1)),n(u,{modelValue:s.downloadName,"onUpdate:modelValue":e[3]||(e[3]=A=>s.downloadName=A),placeholder:"请输入文件名"},{append:l(()=>[n(i,{onClick:r},{default:l(()=>e[16]||(e[16]=[a("下载")])),_:1})]),_:1},8,["modelValue"]),e[55]||(e[55]=d("h2",{"data-id":""},"千分位",-1)),n(u,{modelValue:s.numberText,"onUpdate:modelValue":e[4]||(e[4]=A=>s.numberText=A),placeholder:"请输入数字"},{append:l(()=>[a(_(p(st)(s.numberText)),1)]),_:1},8,["modelValue"]),e[56]||(e[56]=d("h2",{"data-id":""},"中划线转驼峰",-1)),n(u,{modelValue:s.str1,"onUpdate:modelValue":e[5]||(e[5]=A=>s.str1=A),placeholder:"请输入"},{append:l(()=>[a(_(p(Se)(s.str1)),1)]),_:1},8,["modelValue"]),d("p",null,[n(p(S),null,{default:l(()=>e[17]||(e[17]=[a("首字母也大写")])),_:1})]),n(u,{modelValue:s.str2,"onUpdate:modelValue":e[6]||(e[6]=A=>s.str2=A),placeholder:"请输入"},{append:l(()=>[a(_(p(Se)(s.str2,!0)),1)]),_:1},8,["modelValue"]),e[57]||(e[57]=d("h2",{"data-id":""},"对象key转驼峰",-1)),d("p",null,[n(p(S),null,{default:l(()=>e[18]||(e[18]=[a(" 转义 ")])),_:1}),n(p(S),{type:"primary"},{default:l(()=>e[19]||(e[19]=[a(" useAttrs ")])),_:1}),n(p(S),null,{default:l(()=>e[20]||(e[20]=[a(" 数据的 ")])),_:1}),n(p(S),{type:"primary"},{default:l(()=>e[21]||(e[21]=[a(" key ")])),_:1}),n(p(S),null,{default:l(()=>e[22]||(e[22]=[a(" 为驼峰 ")])),_:1})]),n(u,{type:"textarea",modelValue:s.objStr1,"onUpdate:modelValue":e[7]||(e[7]=A=>s.objStr1=A),autosize:{minRows:4,maxRows:10}},null,8,["modelValue"]),Pe(n(T,{type:"warning"},{default:l(()=>e[23]||(e[23]=[a("输入有误")])),_:1},512),[[ut,!s.isObjStr1]]),d("pre",null,[d("code",null,_(g()),1)]),e[58]||(e[58]=d("h2",{"data-id":""},"切换全屏",-1)),n(i,{type:"primary",onClick:e[8]||(e[8]=A=>p(ot)())},{default:l(()=>e[24]||(e[24]=[a("切换")])),_:1}),e[59]||(e[59]=d("h2",{"data-id":""},"休眠/等待/延迟",-1)),n(i,{type:"primary",onClick:e[9]||(e[9]=A=>c(1e3))},{default:l(()=>e[25]||(e[25]=[a("延迟1s提示")])),_:1}),e[60]||(e[60]=d("h2",{"data-id":""},"url query",-1)),d("p",null,[n(p(S),null,{default:l(()=>e[26]||(e[26]=[a(" 无视查询字符串和哈希的顺序，只识别 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[27]||(e[27]=[a(" ? ")])),_:1}),n(p(S),null,{default:l(()=>e[28]||(e[28]=[a(" ，多个 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[29]||(e[29]=[a(" ? ")])),_:1}),n(p(S),null,{default:l(()=>e[30]||(e[30]=[a(" 会被合并 ")])),_:1})]),n(u,{modelValue:s.url,"onUpdate:modelValue":e[10]||(e[10]=A=>s.url=A)},null,8,["modelValue"]),d("p",null,[n(p(S),null,{default:l(()=>e[31]||(e[31]=[a(" 格式化查询字符串，重复 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[32]||(e[32]=[a("key")])),_:1}),n(p(S),null,{default:l(()=>e[33]||(e[33]=[a(" 后面的覆盖前面的，格式化后 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[34]||(e[34]=[a("Record<string, string>")])),_:1})]),d("pre",null,[d("code",null,_(JSON.stringify(p(pt)(s.url),null,2)),1)]),d("p",null,[n(p(S),null,{default:l(()=>e[35]||(e[35]=[a(" 格式化查询字符串，重复 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[36]||(e[36]=[a("key")])),_:1}),n(p(S),null,{default:l(()=>e[37]||(e[37]=[a(" 会形成数组，格式化后 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[38]||(e[38]=[a("Record<string, string | string[]>")])),_:1})]),d("pre",null,[d("code",null,_(JSON.stringify(p(dt)(s.url),null,2)),1)]),d("p",null,[n(p(S),null,{default:l(()=>e[39]||(e[39]=[a(" 格式化查询字符串，无论是否有重复的 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[40]||(e[40]=[a("key")])),_:1}),n(p(S),null,{default:l(()=>e[41]||(e[41]=[a(" ，值都会是数组，格式化后 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[42]||(e[42]=[a("Record<string, string[]>")])),_:1})]),d("pre",null,[d("code",null,_(JSON.stringify(p(mt)(s.url),null,2)),1)]),d("p",null,[n(p(S),null,{default:l(()=>e[43]||(e[43]=[a(" 格式化查询字符串 ")])),_:1}),n(p(S),{type:"warning"},{default:l(()=>e[44]||(e[44]=[a("[string, string][]")])),_:1})]),d("pre",null,[d("code",null,_(JSON.stringify(p(gt)(s.url),null,2)),1)])],64)}}}),vn=`<template>
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
`,En=P({__name:"useTable1",setup(b){const s=N({async api(r){const e=(await g({size:r.size,current:r.current,param:{}})).result;return{rows:e.rows,total:e.total}}});s.onCurrentChange(1);const c=[{key:"id",label:"ID"},{key:"title",label:"TITLE"}];async function g(r){return o(r.size,r.current)}async function o(r,t){return{code:200,msg:"成功",result:{total:1e3,rows:e(r,t)}};function e(i,u){const y=(u-1)*i;return new Array(i).fill("").map((A,k)=>{const x=y+k+1;return{id:x,title:x+" - 随意",item1:x+" - 关羽",item2:x+" - 张飞",item3:x+" - 赵云",item4:x+" - 马超",item5:x+" - 黄忠",item6:x+" - 张辽"}})}}return(r,t)=>{const e=I("ElText");return z(),C(D,null,[t[8]||(t[8]=d("h1",{"data-id":""},"基础使用",-1)),d("p",null,[n(e,{type:"warning"},{default:l(()=>t[0]||(t[0]=[a(" useTable ")])),_:1}),n(e,null,{default:l(()=>t[1]||(t[1]=[a(" 这个 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[2]||(t[2]=[a(" hook ")])),_:1}),n(e,null,{default:l(()=>t[3]||(t[3]=[a(" 会返回一个对象，直接提供给 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[4]||(t[4]=[a(" UniTable ")])),_:1}),n(e,null,{default:l(()=>t[5]||(t[5]=[a(" 的 ")])),_:1}),n(e,{type:"warning"},{default:l(()=>t[6]||(t[6]=[a(" tableApi ")])),_:1}),n(e,null,{default:l(()=>t[7]||(t[7]=[a(" 属性的值 ")])),_:1})]),n(p(j),{tableApi:p(s),columns:c},null,8,["tableApi"])],64)}}}),An=`<template>
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
`,ce={App:Pt,App_txt:wt,UniCheckboxGroup1:Dt,UniCheckboxGroup1_txt:Lt,"UniForm/UniForm1":_t,"UniForm/UniForm1_txt":Rt,"UniForm/UniForm2":ht,"UniForm/UniForm2_txt":Bt,"UniForm/UniForm3":Mt,"UniForm/UniForm3_txt":Nt,"UniForm/UniForm4":jt,"UniForm/UniForm4_txt":Vt,UniLayout1:Ot,UniLayout1_txt:Ht,UniRadioGroup1:Jt,UniRadioGroup1_txt:Wt,UniSelect1:qt,UniSelect1_txt:Gt,"UniTable/UniTable1":Zt,"UniTable/UniTable1_txt":Qt,"UniTable/UniTable10":Kt,"UniTable/UniTable10_txt":Xt,"UniTable/UniTable11":Yt,"UniTable/UniTable11_txt":en,"UniTable/UniTable2":tn,"UniTable/UniTable2_txt":nn,"UniTable/UniTable3":rn,"UniTable/UniTable3_txt":ln,"UniTable/UniTable4":an,"UniTable/UniTable4_txt":sn,"UniTable/UniTable5":un,"UniTable/UniTable5_txt":on,"UniTable/UniTable6":pn,"UniTable/UniTable6_txt":dn,"UniTable/UniTable7":mn,"UniTable/UniTable7_txt":gn,"UniTable/UniTable8":fn,"UniTable/UniTable8_txt":bn,"UniTable/UniTable9":cn,"UniTable/UniTable9_txt":yn,"functionLib/functionLib1":Tn,"functionLib/functionLib1_txt":vn,useTable1:En,useTable1_txt:An},kn={class:"uni-exp"},Un={key:0,style:{float:"right"}},Fn={key:0,class:"uni-exp-menu"},Cn=P({__name:"UniExample",props:{expKeys:{}},setup(b){const s=b,c=Q(),g=pe(()=>(Array.isArray(s.expKeys)?s.expKeys:[]).map(e=>e.endsWith("/")?Object.keys(ce).filter(i=>!i.endsWith("_txt")&&i.startsWith(e)):e).flat().map(e=>({key:e,component:ce[e],txt:ce[e+"_txt"]}))),o=pe(r);function r(){const t=c.value;return(t instanceof HTMLElement?[...t.querySelectorAll("[data-id]")]:[]).reduce((u,y)=>{const T=y.getAttribute("data-id")||y.innerText,A=+(y.getAttribute("data-level")||0),k=T.replace(/\s/g,""),x="#"+k;y.id=k;const L=i(u,A);return x&&!L.some(R=>R.key===x)&&L.push({key:x,title:T,level:A,children:[]}),u},[]);function i(u,y=0){if(y===0)return u;const T=u[u.length-1];if(T){if(T.level===y)return u;if(T.children=T.children||[],T.children)return i(T.children,y)}return u}}return(t,e)=>(z(),C("div",kn,[d("div",{class:"uni-exp-body",ref_key:"expScrollRef",ref:c},[oe(t.$slots,"pre"),g.value.length?(z(!0),C(D,{key:0},ye(g.value,i=>(z(),Ce(p(It),{key:i.key,txt:i.txt},{default:l(()=>[p(yt)()?(z(),C("div",Un,[n(p(S),null,{default:l(()=>[a(_(i.key),1)]),_:2},1024)])):se("",!0),(z(),Ce(xt(i.component)))]),_:2},1032,["txt"]))),128)):se("",!0),oe(t.$slots,"default")],512),o.value.length?(z(),C("div",Fn,[n(p($t),{items:o.value,container:c.value},null,8,["items","container"])])):se("",!0)]))}});export{kt as H,Cn as _};
