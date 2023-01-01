// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,o,t,f,n,s){var i,l,m,a,d;for(i=e.length,l=1,d=0;d<i;d++)l*=e[d];if("clamp"===s)n<0?n=0:n>=l&&(n=l-1);else if("wrap"===s)n<0?(n+=l)<0&&0!==(n%=l)&&(n+=l):n>=l&&(n-=l)>=l&&(n%=l);else if(n<0||n>=l)throw new RangeError(r("0Mk5S",l,n));if(m=t,"column-major"===f){for(d=0;d<i;d++)n-=a=n%e[d],n/=e[d],m+=a*o[d];return m}for(d=i-1;d>=0;d--)n-=a=n%e[d],n/=e[d],m+=a*o[d];return m}export{e as default};
//# sourceMappingURL=index.mjs.map
