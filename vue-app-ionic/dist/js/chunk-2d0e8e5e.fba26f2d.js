(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8e5e"],{"8adc":function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return a}));var r=n("c682"),a=function(e,t,n,a,i){var c=e.ownerDocument.defaultView,o=function(e){return e.startX<=50&&t()},u=function(e){var t=e.deltaX,n=t/c.innerWidth;a(n)},d=function(e){var t=e.deltaX,n=c.innerWidth,r=t/n,a=e.velocityX,o=n/2,u=a>=0&&(a>.2||e.deltaX>o),d=u?1-r:r,s=d*n,w=0;if(s>5){var f=s/Math.abs(a);w=Math.min(f,540)}i(u,r<=0?.01:r,w)};return Object(r["createGesture"])({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o,onStart:n,onMove:u,onEnd:d})}}}]);
//# sourceMappingURL=chunk-2d0e8e5e.fba26f2d.js.map