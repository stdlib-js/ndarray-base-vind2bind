"use strict";var c=function(f,a){return function(){return a||f((a={exports:{}}).exports,a),a.exports}};var s=c(function(j,v){
var b=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function q(f,a,i,m,r,l){var o,n,u,t,e;for(o=f.length,n=1,e=0;e<o;e++)n*=f[e];if(l==="clamp")r<0?r=0:r>=n&&(r=n-1);else if(l==="wrap")r<0?(r+=n,r<0&&(r%=n,r!==0&&(r+=n))):r>=n&&(r-=n,r>=n&&(r%=n));else if(l==="normalize"&&r<0&&(r+=n),r<0||r>=n)throw new RangeError(g('0jf5E',n,r));if(u=i,b(m)){for(e=0;e<o;e++)t=r%f[e],r-=t,r/=f[e],u+=t*a[e];return u}for(e=o-1;e>=0;e--)t=r%f[e],r-=t,r/=f[e],u+=t*a[e];return u}v.exports=q
});var w=s();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
