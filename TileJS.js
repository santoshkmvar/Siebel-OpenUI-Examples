function Tile(a){var b=a;console.log(b);var c="perspective( 800px ) rotateX( 0deg ) rotateY( 0deg ) translateZ( 0px )",d=function(){b.style.webkitTransformOrigin="50% 50%",b.style.MozTransformOrigin="50% 50%",b.style.msTransformOrigin="50% 50%",b.style.oTransformOrigin="50% 50%",b.style.transformOrigin="50% 50%",b.parentElement.style.webkitTransformStyle="preserve-3d",b.parentElement.style.MozTransformStyle="preserve-3d",b.parentElement.style.msTransformStyle="preserve-3d",b.parentElement.style.oTransformStyle="preserve-3d",b.parentElement.style.transformStyle="preserve-3d",b.style.webkitTransition="-webkit-transform 0.08s",b.style.MozTransition="-moz-transform 0.08s",b.style.msTransition="-ms-transform 0.08s",b.style.oTransition="-o-transform 0.08s",b.style.transition="transform 0.08s",b.style.outline="1px solid transparent",b.style.webkitFontSmoothing="antialiased",b.addEventListener("mouseenter",f,!1)},e=function(a,c){var d=b.offsetWidth,e=b.offsetHeight,f="perspective( 800px ) ";f+=a>d/4&&a<d/4*3&&c>e/4&&c<e/4*3?"rotateX( 0deg ) rotateY( 0deg ) translateZ( -30px )":Math.min(a,d-a)<Math.min(c,e-c)?a<d-a?"rotateX( 0deg ) rotateY( -50deg ) translateZ( 0px )":"rotateX( 0deg ) rotateY( 50deg ) translateZ( 0px )":c<e-c?"rotateX( 50deg ) rotateY( 0deg ) translateZ( 0px )":"rotateX( -50deg ) rotateY( 0deg ) translateZ( 0px )",b.style.webkitTransform=f,b.style.MozTransform=f,b.style.msTransform=f,b.style.oTransform=f,b.style.transform=f,document.addEventListener("mouseout",g,!1)},f=function(a){if(a.offsetX)return void e(a.offsetX,a.offsetY);var c=i(b),d=a.pageX-c.x,f=a.pageY-c.y;e(d,f)},g=function(a){b.style.webkitTransform=c,b.style.MozTransform=c,b.style.msTransform=c,b.style.oTransform=c,b.style.transform=c,document.removeEventListener("mouseout",g,!1)},h=function(a,b){return parseInt(a.getPropertyValue(b),10)},i=function(a){var b=0,c=0,d=!0;do{b+=a.offsetLeft,c+=a.offsetTop;var e=getComputedStyle(a,null),f=h(e,"border-top-width"),g=h(e,"border-left-width");if(c+=f,b+=g,d){var i=h(e,"padding-top"),j=h(e,"padding-left");c+=i,b+=j}d=!1}while(a=a.offsetParent);return{x:b,y:c}};d()}console.log("tilejs file loaded..");