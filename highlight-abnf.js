(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{419:function(s,a){s.exports=function(s){var a="^[a-zA-Z][a-zA-Z0-9-]*",e="[!@#$^&',?+~`|:]",n=s.COMMENT(";","$"),i={className:"attribute",begin:a+"(?=\\s*=)"};return{illegal:e,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"].join(" "),contains:[i,n,{className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},{className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},{className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},{className:"symbol",begin:/%[si]/},s.QUOTE_STRING_MODE,s.NUMBER_MODE]}}}}]);
//# sourceMappingURL=highlight-abnf.js.map