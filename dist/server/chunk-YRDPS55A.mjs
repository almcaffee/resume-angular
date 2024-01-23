import './polyfills.server.mjs';
import"./chunk-KRLCULJA.mjs";var T="[A-Za-z$_][0-9A-Za-z$_]*",L=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],x=["true","false","null","undefined","NaN","Infinity"],D=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],k=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],B=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],h=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],U=[].concat(B,D,k);function W(e){let n=e.regex,f=(s,{after:i})=>{let b="</"+s[0].slice(1);return s.input.indexOf(b,i)!==-1},t=T,u={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(s,i)=>{let b=s[0].length+s.index,m=s.input[b];if(m==="<"||m===","){i.ignoreMatch();return}m===">"&&(f(s,{after:b})||i.ignoreMatch());let I,w=s.input.substring(b);if(I=w.match(/^\s*=/)){i.ignoreMatch();return}if((I=w.match(/^\s+extends\s+/))&&I.index===0){i.ignoreMatch();return}}},c={$pattern:T,keyword:L,literal:x,built_in:U,"variable.language":h},g="[0-9](_?[0-9])*",o=`\\.(${g})`,l="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${l})((${o})|\\.)?|(${o}))[eE][+-]?(${g})\\b`},{begin:`\\b(${l})\\b((${o})\\b|\\.)?|(${o})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},a={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,a],subLanguage:"xml"}},S={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,a],subLanguage:"css"}},E={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,a],subLanguage:"graphql"}},N={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,a]},y={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},C=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,S,E,N,{match:/\$\d+/},A];a.contains=C.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(C)});let O=[].concat(y,a.contains),p=O.concat([{begin:/\(/,end:/\)/,keywords:c,contains:["self"].concat(O)}]),d={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:p},P={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},M={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...D,...k]}},$={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},F={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[d],illegal:/%/},Z={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function z(s){return n.concat("(?!",s.join("|"),")")}let G={match:n.concat(/\b/,z([...B,"super","import"]),t,n.lookahead(/\(/)),className:"title.function",relevance:0},K={begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},H={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},d]},v="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Y={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(v)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[d]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:p,CLASS_REFERENCE:M},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),$,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,S,E,N,y,{match:/\$\d+/},A,M,{className:"attr",begin:t+n.lookahead(":"),relevance:0},Y,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[y,e.REGEXP_MODE,{className:"function",begin:v,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:p}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:u.begin,end:u.end},{match:R},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},F,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[d,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},K,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[d]},G,Z,P,H,{match:/\$[(.]/}]}}function X(e){let n=W(e),f=T,t=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],u={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},R={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:t},contains:[n.exports.CLASS_REFERENCE]},r={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},c=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],g={$pattern:T,keyword:L.concat(c),literal:x,built_in:U.concat(t),"variable.language":h},o={className:"meta",begin:"@"+f},l=(a,_,S)=>{let E=a.contains.findIndex(N=>N.label===_);if(E===-1)throw new Error("can not find mode to replace");a.contains.splice(E,1,S)};Object.assign(n.keywords,g),n.exports.PARAMS_CONTAINS.push(o),n.contains=n.contains.concat([o,u,R]),l(n,"shebang",e.SHEBANG()),l(n,"use_strict",r);let A=n.contains.find(a=>a.label==="func.def");return A.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}export{X as default};
