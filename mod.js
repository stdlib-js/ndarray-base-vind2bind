// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,e,n,o,t,f){var a,i,l,u,c;for(a=r.length,i=1,c=0;c<a;c++)i*=r[c];if("clamp"===f)t<0?t=0:t>=i&&(t=i-1);else if("wrap"===f)t<0?(t+=i)<0&&0!==(t%=i)&&(t+=i):t>=i&&(t-=i)>=i&&(t%=i);else if("normalize"===f&&t<0&&(t+=i),t<0||t>=i)throw new RangeError(function(){var r,e=arguments,n="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}("0jf5E,L1",i,t));if(l=n,"column-major"===o){for(c=0;c<a;c++)t-=u=t%r[c],t/=r[c],l+=u*e[c];return l}for(c=a-1;c>=0;c--)t-=u=t%r[c],t/=r[c],l+=u*e[c];return l}export{r as default};
//# sourceMappingURL=mod.js.map
