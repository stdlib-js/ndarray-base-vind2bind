"use strict";var c=function(f,a){return function(){try{return a||f((a={exports:{}}).exports,a),a.exports}catch(l){throw (a=0, l)}};};var i=c(function(j,s){
var b=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function q(f,a,l,m,r,v){var o,n,u,t,e;for(o=f.length,n=1,e=0;e<o;e++)n*=f[e];if(v==="clamp")r<0?r=0:r>=n&&(r=n-1);else if(v==="wrap")r<0?(r+=n,r<0&&(r%=n,r!==0&&(r+=n))):r>=n&&(r-=n,r>=n&&(r%=n));else if(v==="normalize"&&r<0&&(r+=n),r<0||r>=n)throw new RangeError(g('0jf5E',n,r));if(u=l,b(m)){for(e=0;e<o;e++)t=r%f[e],r-=t,r/=f[e],u+=t*a[e];return u}for(e=o-1;e>=0;e--)t=r%f[e],r-=t,r/=f[e],u+=t*a[e];return u}s.exports=q
});var w=i();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
