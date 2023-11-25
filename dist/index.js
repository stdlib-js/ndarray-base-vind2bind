"use strict";var i=function(f,a){return function(){return a||f((a={exports:{}}).exports,a),a.exports}};var m=i(function(y,v){
var b=require('@stdlib/error-tools-fmtprodmsg/dist');function g(f,a,s,c,r,l){var u,n,o,t,e;for(u=f.length,n=1,e=0;e<u;e++)n*=f[e];if(l==="clamp")r<0?r=0:r>=n&&(r=n-1);else if(l==="wrap")r<0?(r+=n,r<0&&(r%=n,r!==0&&(r+=n))):r>=n&&(r-=n,r>=n&&(r%=n));else if(l==="normalize"&&r<0&&(r+=n),r<0||r>=n)throw new RangeError(b('0jf5E',n,r));if(o=s,c==="column-major"){for(e=0;e<u;e++)t=r%f[e],r-=t,r/=f[e],o+=t*a[e];return o}for(e=u-1;e>=0;e--)t=r%f[e],r-=t,r/=f[e],o+=t*a[e];return o}v.exports=g
});var w=m();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
