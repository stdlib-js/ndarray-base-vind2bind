// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r;var n=function(r,n,a,t,i,o){var s,m,f,l,d;for(s=r.length,m=1,d=0;d<s;d++)m*=r[d];if("clamp"===o)i<0?i=0:i>=m&&(i=m-1);else if("wrap"===o)i<0?(i+=m)<0&&0!==(i%=m)&&(i+=m):i>=m&&(i-=m)>=m&&(i%=m);else if(i<0||i>=m)throw new RangeError(e("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",m,i));if(f=a,"column-major"===t){for(d=0;d<s;d++)i-=l=i%r[d],i/=r[d],f+=l*n[d];return f}for(d=s-1;d>=0;d--)i-=l=i%r[d],i/=r[d],f+=l*n[d];return f};export{n as default};
//# sourceMappingURL=index.mjs.map
