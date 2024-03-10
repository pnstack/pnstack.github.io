(self.webpackChunkblogs=self.webpackChunkblogs||[]).push([[340],{7110:(e,t,n)=>{"use strict";n.d(t,{A:()=>_});var s=n(9474),o=n(3274);function a(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),a=t.filter((e=>e!==n)),c=n?.props.children;return{mdxAdmonitionTitle:c,rest:a.length>0?(0,o.jsx)(o.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}var c=n(8835),i=n(2154),r=n(8101);const l={admonition:"admonition_PqR7",admonitionHeading:"admonitionHeading_S451",admonitionIcon:"admonitionIcon_bJEv",admonitionContent:"admonitionContent_36_1"};function d(e){let{type:t,className:n,children:s}=e;return(0,o.jsx)("div",{className:(0,c.A)(r.G.common.admonition,r.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:a,className:c}=e;return(0,o.jsxs)(d,{type:t,className:c,children:[(0,o.jsx)(u,{title:s,icon:n}),(0,o.jsx)(m,{children:a})]})}function p(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,o.jsx)(p,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,o.jsx)(h,{...f,...e,className:(0,c.A)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,o.jsx)(x,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(h,{...j,...e,className:(0,c.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const N={icon:(0,o.jsx)(v,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function k(e){return(0,o.jsx)(h,{...N,...e,className:(0,c.A)("alert alert--info",e.className),children:e.children})}function y(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const C={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function B(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const A={icon:(0,o.jsx)(B,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const w={icon:(0,o.jsx)(y,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:g,tip:b,info:k,warning:function(e){return(0,o.jsx)(h,{...C,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(h,{...A,...e,className:(0,c.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(g,{title:"secondary",...e}),important:e=>(0,o.jsx)(k,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(h,{...w,...e,className:(0,c.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const t=a(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,o.jsx)(n,{...t})}},2332:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(9474);var s=n(2154),o=n(8101),a=n(2238),c=n(8835);const i={iconEdit:"iconEdit_wCLN"};var r=n(3274);function l(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.A)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,r.jsxs)(a.A,{to:t,className:o.G.common.editThisPage,children:[(0,r.jsx)(l,{}),(0,r.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},7444:(e,t,n)=>{"use strict";n.d(t,{A:()=>ce});var s=n(9474);const o={},a=s.createContext(o);function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:function(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}(e.components),s.createElement(a.Provider,{value:t},e.children)}var i=n(8784),r=n(91),l=n(8835),d=n(4059),u=n(5476);function m(){const{prism:e}=(0,u.p)(),{colorMode:t}=(0,d.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var h=n(8101),p=n(4809),f=n.n(p);const g=/title=(?<quote>["'])(?<title>.*?)\1/,x=/\{(?<range>[\d,-]+)\}/,j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:s}=j[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:a}=t;if(a&&x.test(a)){const e=a.match(x).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(j).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,o),i=n.split("\n"),r=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let h=0;h<i.length;){const e=i[h].match(c);if(!e){h+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${h},`:d[t]?r[d[t]].start=h:u[t]&&(r[u[t]].range+=`${r[u[t]].start}-${h-1},`),i.splice(h,1)}n=i.join("\n");const m={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_MUJD"};var k=n(3274);function y(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const a=t[s];a&&"string"==typeof o&&(n[a]=o)})),n}(m());return(0,k.jsx)(t,{...n,style:s,className:(0,l.A)(n.className,N.codeBlockContainer,h.G.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_aj3G",codeBlockTitle:"codeBlockTitle_fV_D",codeBlock:"codeBlock_I8SK",codeBlockStandalone:"codeBlockStandalone_qrC3",codeBlockLines:"codeBlockLines_VJwP",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_T1YQ",buttonGroup:"buttonGroup_xxtn"};function B(e){let{children:t,className:n}=e;return(0,k.jsx)(y,{as:"pre",tabIndex:0,className:(0,l.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:C.codeBlockLines,children:t})})}var A=n(526);const w={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){const[n,o]=(0,s.useState)(),a=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=w);const o=(0,A._q)(t),a=(0,A.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=n(2667);const E={codeLine:"codeLine__23e",codeLineNumber:"codeLineNumber_dQWY",codeLineContent:"codeLineContent_VgcU"};function T(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,l.A)(n,s&&E.codeLine)}),i=t.map(((e,t)=>(0,k.jsx)("span",{...a({token:e,key:t})},t)));return(0,k.jsxs)("span",{...c,children:[s?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:E.codeLineNumber}),(0,k.jsx)("span",{className:E.codeLineContent,children:i})]}):i,(0,k.jsx)("br",{})]})}var S=n(2154);function z(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function M(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const H={copyButtonCopied:"copyButtonCopied_muhE",copyButtonIcons:"copyButtonIcons_l0NS",copyButtonIcon:"copyButtonIcon_H7Ji",copyButtonSuccessIcon:"copyButtonSuccessIcon_gzUR"};function I(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),c=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),(0,k.jsx)("button",{type:"button","aria-label":o?(0,S.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,S.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,S.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)("clean-btn",n,H.copyButton,o&&H.copyButtonCopied),onClick:i,children:(0,k.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(z,{className:H.copyButtonIcon}),(0,k.jsx)(M,{className:H.copyButtonSuccessIcon})]})})}function R(e){return(0,k.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const W={wordWrapButtonIcon:"wordWrapButtonIcon_jDGM",wordWrapButtonEnabled:"wordWrapButtonEnabled_q4rL"};function V(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,S.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,l.A)("clean-btn",t,s&&W.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,k.jsx)(R,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:c,language:i}=e;const{prism:{defaultLanguage:r,magicComments:d}}=(0,u.p)(),h=function(e){return e?.toLowerCase()}(i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??r),p=m(),f=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),a=(0,s.useRef)(null),c=(0,s.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),i=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return L(a,i),(0,s.useEffect)((()=>{i()}),[e,i]),(0,s.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),x=function(e){return e?.match(g)?.groups.title??""}(o)||a,{lineClassNames:j,code:b}=v(t,{metastring:o,language:h,magicComments:d}),N=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,k.jsxs)(y,{as:"div",className:(0,l.A)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[x&&(0,k.jsx)("div",{className:C.codeBlockTitle,children:x}),(0,k.jsxs)("div",{className:C.codeBlockContent,children:[(0,k.jsx)(_.f4,{theme:p,code:b,language:h??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,k.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,l.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,k.jsx)("code",{className:(0,l.A)(C.codeBlockLines,N&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,k.jsx)(T,{line:e,getLineProps:o,getTokenProps:a,classNames:j[t],showLineNumbers:N},t)))})})}}),(0,k.jsxs)("div",{className:C.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,k.jsx)(V,{className:C.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,k.jsx)(I,{className:C.codeButton,code:b})]})]})]})}function P(e){let{children:t,...n}=e;const o=(0,r.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof a?$:B;return(0,k.jsx)(c,{...n,children:a},String(o))}var D=n(2238);var q=n(752);const G={details:"details_P8Wq",isBrowser:"isBrowser_VBbK",collapsibleContent:"collapsibleContent_oegs"};function O(e){return!!e&&("SUMMARY"===e.tagName||O(e.parentElement))}function F(e,t){return!!e&&(e===t||F(e.parentElement,t))}function U(e){let{summary:t,children:n,...o}=e;const a=(0,r.A)(),c=(0,s.useRef)(null),{collapsed:i,setCollapsed:d}=(0,q.u)({initialState:!o.open}),[u,m]=(0,s.useState)(o.open),h=s.isValidElement(t)?t:(0,k.jsx)("summary",{children:t??"Details"});return(0,k.jsxs)("details",{...o,ref:c,open:u,"data-collapsed":i,className:(0,l.A)(G.details,a&&G.isBrowser,o.className),onMouseDown:e=>{O(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;O(t)&&F(t,c.current)&&(e.preventDefault(),i?(d(!1),m(!0)):d(!0))},children:[h,(0,k.jsx)(q.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),m(!e)},children:(0,k.jsx)("div",{className:G.collapsibleContent,children:n})})]})}const J={details:"details_ZDBq"},Z="alert alert--info";function Q(e){let{...t}=e;return(0,k.jsx)(U,{...t,className:(0,l.A)(Z,J.details,t.className)})}function Y(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,k.jsx)(k.Fragment,{children:t.filter((e=>e!==n))});return(0,k.jsx)(Q,{...e,summary:n,children:o})}var K=n(9160);function X(e){return(0,k.jsx)(K.A,{...e})}const ee={containsTaskList:"containsTaskList_rm3p"};function te(e){if(void 0!==e)return(0,l.A)(e,e?.includes("contains-task-list")&&ee.containsTaskList)}const ne={img:"img_GPZV"};var se=n(7110),oe=n(6238);const ae={Head:i.A,details:Y,Details:Y,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,k.jsx)("code",{...e}):(0,k.jsx)(P,{...e})},a:function(e){return(0,k.jsx)(D.A,{...e})},pre:function(e){return(0,k.jsx)(k.Fragment,{children:e.children})},ul:function(e){return(0,k.jsx)("ul",{...e,className:te(e.className)})},img:function(e){return(0,k.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,l.A)(t,ne.img))});var t},h1:e=>(0,k.jsx)(X,{as:"h1",...e}),h2:e=>(0,k.jsx)(X,{as:"h2",...e}),h3:e=>(0,k.jsx)(X,{as:"h3",...e}),h4:e=>(0,k.jsx)(X,{as:"h4",...e}),h5:e=>(0,k.jsx)(X,{as:"h5",...e}),h6:e=>(0,k.jsx)(X,{as:"h6",...e}),admonition:se.A,mermaid:oe.A};function ce(e){let{children:t}=e;return(0,k.jsx)(c,{components:ae,children:t})}},7050:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(9474);var s=n(8835),o=n(2238),a=n(3274);function c(e){const{permalink:t,title:n,subLabel:c,isNext:i}=e;return(0,a.jsxs)(o.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[c&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:c}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},923:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(9474);var s=n(8835),o=n(2154),a=n(2238);const c={tag:"tag_Hs71",tagRegular:"tagRegular_e3R4",tagWithCount:"tagWithCount_loXv"};var i=n(3274);function r(e){let{permalink:t,label:n,count:o}=e;return(0,i.jsxs)(a.A,{href:t,className:(0,s.A)(c.tag,o?c.tagWithCount:c.tagRegular),children:[n,o&&(0,i.jsx)("span",{children:o})]})}const l={tags:"tags_a9sy",tag:"tag_tQ0W"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(o.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(r,{label:t,permalink:n})},n)}))})]})}},4809:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=t;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);