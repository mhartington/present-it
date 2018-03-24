/*! Built with http://stenciljs.com */
PresentIt.loadBundle("bnfkf1gl",["exports","./chunk2.js"],function(e,t){var n=window.PresentIt.h;function o(e,t){var n,o={duration:300,easing:"cubic-bezier(0.26, 0.86, 0.44, 0.985)"};return"enter"===t&&(n=new KeyframeEffect(e,[{opacity:0},{opacity:1}],o)),"leave"===t&&(n=new KeyframeEffect(e,[{opacity:1},{opacity:0}],o)),new Animation(n,document.timeline)}var a=function(){function e(){this.active=!1,this.animation=o}return e.prototype.onPropsDidChange=function(){this.slideDidChange.emit({backgroundColor:this.backgroundColor,backgroundImage:this.backgroundImage})},e.prototype.watchHandler=function(){var e=this.animation;!0===this.active&&(e(this.el,"enter").play(),this.slideDidChange.emit({backgroundColor:this.backgroundColor,backgroundImage:this.backgroundImage})),!1===this.active&&e(this.el,"leave").play()},e.prototype.componentDidLoad=function(){this.checkContrast(),!0===this.active&&this.slideDidChange.emit({backgroundColor:this.backgroundColor,backgroundImage:this.backgroundImage})},e.prototype.checkContrast=function(){var e;if(this.backgroundColor){if(this.backgroundColor.startsWith("#")){var n=this.backgroundColor.replace("#","");e=t.hexToRgb(n)}this.backgroundColor.startsWith("rgb")&&(e=this.backgroundColor.replace(/[^\d,]/g,"").split(",")),e&&t.isLightColor(e)&&this.el.classList.add("has-light-background")}},e.prototype.hostData=function(){return{class:{active:this.active}}},e.prototype.render=function(){return n("div",{class:"slide-wrapper"},n("slot",null))},Object.defineProperty(e,"is",{get:function(){return"present-slide"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{active:{type:Boolean,attr:"active",watchCallbacks:["watchHandler"]},animation:{type:"Any",attr:"animation"},backgroundColor:{type:String,attr:"background-color",watchCallbacks:["onPropsDidChange"]},backgroundImage:{type:String,attr:"background-image",watchCallbacks:["onPropsDidChange"]},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"slideDidChange",method:"slideDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"present-slide{bottom:0;left:0;opacity:0;overflow:hidden;position:absolute;right:0;top:0;width:100%;pointer-events:none;z-index:2}present-slide.has-light-background{color:#222}present-slide.active,present-slide.active>*{pointer-events:initial;opacity:1}present-slide .slide-wrapper{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:auto;width:80%}"},enumerable:!0,configurable:!0}),e}();e.PresentSlide=a,Object.defineProperty(e,"__esModule",{value:!0})});