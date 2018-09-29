/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);


/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define("alfrid",[],e):"object"==typeof exports?exports.alfrid=e():t.alfrid=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(82)},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(114),a=n(i);e.default=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,a.default)(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(8),l=r(110),f=n(l),h=r(109),c=n(h),d=r(111),v=n(d),_=r(112),p=n(_),m=r(65),g=(n(m),r(105)),E=n(g),M=void 0,b=function(){function t(){(0,a.default)(this,t),this.canvas,this._viewport=[0,0,0,0],this._enabledVertexAttribute=[],this.identityMatrix=s.mat4.create(),this._normalMatrix=s.mat3.create(),this._inverseModelViewMatrix=s.mat3.create(),this._modelMatrix=s.mat4.create(),this._matrix=s.mat4.create(),this._lastMesh=null,this._useWebGL2=!1,this._hasArrayInstance,this._extArrayInstance,this._hasCheckedExt=!1,s.mat4.identity(this.identityMatrix,this.identityMatrix),this.isMobile=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(this.isMobile=!0)}return(0,o.default)(t,[{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===t||void 0===t)return void console.error("Canvas not exist");void 0!==this.canvas&&null!==this.canvas&&this.destroy(),this.canvas=t,this.setSize(window.innerWidth,window.innerHeight);var r=void 0;e.ignoreWebgl2?r=this.canvas.getContext("webgl",e)||this.canvas.getContext("experimental-webgl",e):(r=this.canvas.getContext("experimental-webgl2",e)||this.canvas.getContext("webgl2",e),r?this._useWebGL2=!0:r=this.canvas.getContext("webgl",e)||this.canvas.getContext("experimental-webgl",e)),console.log("Using WebGL 2 ?",this.webgl2),this.initWithGL(r)}},{key:"initWithGL",value:function(t){this.canvas||(this.canvas=t.canvas),M=this.gl=t,this.extensions={};for(var e=0;e<E.default.length;e++)this.extensions[E.default[e]]=M.getExtension(E.default[e]);(0,c.default)(),(0,f.default)(M,"OES_vertex_array_object"),(0,f.default)(M,"ANGLE_instanced_arrays"),(0,f.default)(M,"WEBGL_draw_buffers"),this.enable(this.DEPTH_TEST),this.enable(this.CULL_FACE),this.enable(this.BLEND),this.enableAlphaBlending()}},{key:"setViewport",value:function(t,e,r,n){var i=!1;t!==this._viewport[0]&&(i=!0),e!==this._viewport[1]&&(i=!0),r!==this._viewport[2]&&(i=!0),n!==this._viewport[3]&&(i=!0),i&&(M.viewport(t,e,r,n),this._viewport=[t,e,r,n])}},{key:"scissor",value:function(t,e,r,n){M.scissor(t,e,r,n)}},{key:"clear",value:function(t,e,r,n){M.clearColor(t,e,r,n),M.clear(M.COLOR_BUFFER_BIT|M.DEPTH_BUFFER_BIT)}},{key:"setMatrices",value:function(t){this.camera=t,this.rotate(this.identityMatrix)}},{key:"useShader",value:function(t){this.shader=t,this.shaderProgram=this.shader.shaderProgram}},{key:"rotate",value:function(t){s.mat4.copy(this._modelMatrix,t),s.mat4.multiply(this._matrix,this.camera.matrix,this._modelMatrix),s.mat3.fromMat4(this._normalMatrix,this._matrix),s.mat3.invert(this._normalMatrix,this._normalMatrix),s.mat3.transpose(this._normalMatrix,this._normalMatrix),s.mat3.fromMat4(this._inverseModelViewMatrix,this._matrix),s.mat3.invert(this._inverseModelViewMatrix,this._inverseModelViewMatrix)}},{key:"draw",value:function(t,e){if(t.length)for(var r=0;r<t.length;r++)this.draw(t[r]);else{t.bind(this.shaderProgram),void 0!==this.camera&&(this.shader.uniform("uProjectionMatrix","mat4",this.camera.projection),this.shader.uniform("uViewMatrix","mat4",this.camera.matrix)),this.shader.uniform("uModelMatrix","mat4",this._modelMatrix),this.shader.uniform("uNormalMatrix","mat3",this._normalMatrix),this.shader.uniform("uModelViewMatrixInverse","mat3",this._inverseModelViewMatrix);var n=t.drawType;void 0!==e&&(n=e),t.isInstanced?M.drawElementsInstanced(t.drawType,t.iBuffer.numItems,M.UNSIGNED_SHORT,0,t.numInstance):n===M.POINTS?M.drawArrays(n,0,t.vertexSize):M.drawElements(n,t.iBuffer.numItems,M.UNSIGNED_SHORT,0),t.unbind()}}},{key:"drawTransformFeedback",value:function(t){var e=t.meshSource,r=t.meshDestination,n=t.numPoints,i=t.transformFeedback;e.bind(this.shaderProgram),r.generateBuffers(this.shaderProgram),M.bindTransformFeedback(M.TRANSFORM_FEEDBACK,i),r.attributes.forEach(function(t,e){M.bindBufferBase(M.TRANSFORM_FEEDBACK_BUFFER,e,t.buffer)}),M.enable(M.RASTERIZER_DISCARD),M.beginTransformFeedback(M.POINTS),M.drawArrays(M.POINTS,0,n),M.endTransformFeedback(),M.disable(M.RASTERIZER_DISCARD),M.useProgram(null),M.bindBuffer(M.ARRAY_BUFFER,null),r.attributes.forEach(function(t,e){M.bindBufferBase(M.TRANSFORM_FEEDBACK_BUFFER,e,null)}),M.bindTransformFeedback(M.TRANSFORM_FEEDBACK,null),e.unbind()}},{key:"setSize",value:function(t,e){this._width=t,this._height=e,this.canvas.width=this._width,this.canvas.height=this._height,this._aspectRatio=this._width/this._height,M&&this.viewport(0,0,this._width,this._height)}},{key:"showExtensions",value:function(){console.log("Extensions : ",this.extensions);for(var t in this.extensions)this.extensions[t]&&console.log(t,":",this.extensions[t])}},{key:"checkExtension",value:function(t){return!!this.extensions[t]}},{key:"getExtension",value:function(t){return this.extensions[t]}},{key:"enableAlphaBlending",value:function(){M.blendFunc(M.SRC_ALPHA,M.ONE_MINUS_SRC_ALPHA)}},{key:"enableAdditiveBlending",value:function(){M.blendFunc(M.ONE,M.ONE)}},{key:"enable",value:function(t){M.enable(t)}},{key:"disable",value:function(t){M.disable(t)}},{key:"viewport",value:function(t,e,r,n){this.setViewport(t,e,r,n)}},{key:"destroy",value:function(){if(this.canvas.parentNode)try{this.canvas.parentNode.removeChild(this.canvas)}catch(t){console.log("Error : ",t)}this.canvas=null}},{key:"FLOAT",get:function(){return(0,v.default)()}},{key:"HALF_FLOAT",get:function(){return(0,p.default)()}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"aspectRatio",get:function(){return this._aspectRatio}},{key:"webgl2",get:function(){return this._useWebGL2}}]),t}(),y=new b;e.default=y,t.exports=e.default},function(t,e,r){t.exports={"default":r(124),__esModule:!0}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(116),a=n(i),u=r(113),o=n(u),s=r(37),l=n(s);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,l.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(t,e):t.__proto__=e)}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(37),a=n(i);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,a.default)(e))&&"function"!=typeof e?t:e}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(37),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(3),h=n(f),c=(r(157),function(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}),d=function(t){for(var e=t.split("\n"),r=0;r<e.length;r++)e[r]=r+1+": "+e[r];return e.join("\n")},v=function(t){return t.slice?t.slice(0):new Float32Array(t)},_=void 0,p=r(52),m=r(161),g={"float":"uniform1f",vec2:"uniform2fv",vec3:"uniform3fv",vec4:"uniform4fv","int":"uniform1i",mat3:"uniformMatrix3fv",mat4:"uniformMatrix4fv"},E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=arguments[2];(0,o.default)(this,t),_=h.default.gl,this.parameters=[],this.uniformTextures=[],this._varyings=n,e||(e=p),r||(r=p);var i=this._createShaderProgram(e,!0),a=this._createShaderProgram(r,!1);this._attachShaderProgram(i,a)}return(0,l.default)(t,[{key:"bind",value:function(){h.default.shader!==this&&(_.useProgram(this.shaderProgram),h.default.useShader(this),this.uniformTextures=[])}},{key:"uniform",value:function(t,e,r){if("object"===("undefined"==typeof t?"undefined":(0,a.default)(t)))return void this.uniformObject(t);for(var n=g[e]||e,i=!1,u=void 0,o=-1,s=0;s<this.parameters.length;s++)if(u=this.parameters[s],u.name===t){i=!0,o=s;break}var l=!1;if(i?(this.shaderProgram[t]=u.uniformLoc,l=u.isNumber):(l="uniform1i"===n||"uniform1f"===n,this.shaderProgram[t]=_.getUniformLocation(this.shaderProgram,t),l?this.parameters.push({name:t,type:n,value:r,uniformLoc:this.shaderProgram[t],isNumber:l}):this.parameters.push({name:t,type:n,value:v(r),uniformLoc:this.shaderProgram[t],isNumber:l}),o=this.parameters.length-1),this.parameters[o].uniformLoc)if(n.indexOf("Matrix")===-1)if(l){var f=this.parameters[o].value!==r||!i;f&&(_[n](this.shaderProgram[t],r),this.parameters[o].value=r)}else c(this.parameters[o].value,r)&&i||(_[n](this.shaderProgram[t],r),this.parameters[o].value=v(r));else c(this.parameters[o].value,r)&&i||(_[n](this.shaderProgram[t],!1,r),this.parameters[o].value=v(r))}},{key:"uniformObject",value:function(e){for(var r in e){var n=e[r],i=t.getUniformType(n);if(n.concat&&n[0].concat){for(var a=[],u=0;u<n.length;u++)a=a.concat(n[u]);n=a}this.uniform(r,i,n)}}},{key:"_createShaderProgram",value:function(t,e){var r=e?h.default.VERTEX_SHADER:h.default.FRAGMENT_SHADER,n=_.createShader(r);return _.shaderSource(n,t),_.compileShader(n),_.getShaderParameter(n,_.COMPILE_STATUS)?n:(console.warn("Error in Shader : ",_.getShaderInfoLog(n)),console.log(d(t)),null)}},{key:"_attachShaderProgram",value:function(t,e){this.shaderProgram=_.createProgram(),_.attachShader(this.shaderProgram,t),_.attachShader(this.shaderProgram,e),_.deleteShader(t),_.deleteShader(e),this._varyings&&(console.log("Transform feedback setup : ",this._varyings),_.transformFeedbackVaryings(this.shaderProgram,this._varyings,_.SEPARATE_ATTRIBS)),_.linkProgram(this.shaderProgram)}}]),t}();E.getUniformType=function(t){var e=!!t.concat,r=function(t){return 9===t.length?"uniformMatrix3fv":16===t.length?"uniformMatrix4fv":"vec"+t.length};return e?r(t[0].concat?t[0]:t):"float"},e.default=E,t.exports=e.default},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,r){"use strict";function n(t){e.ARRAY_TYPE=o=t}function i(t){return t*s}function a(t,e){return Math.abs(t-e)<=u*Math.max(1,Math.abs(t),Math.abs(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=n,e.toRadian=i,e.equals=a;var u=e.EPSILON=1e-6,o=e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,s=(e.RANDOM=Math.random,Math.PI/180)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new k.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function u(t){var e=new k.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function s(t,e,r,n,i,a,u,o,s){var l=new k.ARRAY_TYPE(9);return l[0]=t,l[1]=e,l[2]=r,l[3]=n,l[4]=i,l[5]=a,l[6]=u,l[7]=o,l[8]=s,l}function l(t,e,r,n,i,a,u,o,s,l){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=a,t[5]=u,t[6]=o,t[7]=s,t[8]=l,t}function f(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function h(t,e){if(t===e){var r=e[1],n=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function c(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=e[6],l=e[7],f=e[8],h=f*u-o*l,c=-f*a+o*s,d=l*a-u*s,v=r*h+n*c+i*d;return v?(v=1/v,t[0]=h*v,t[1]=(-f*n+i*l)*v,t[2]=(o*n-i*u)*v,t[3]=c*v,t[4]=(f*r-i*s)*v,t[5]=(-o*r+i*a)*v,t[6]=d*v,t[7]=(-l*r+n*s)*v,t[8]=(u*r-n*a)*v,t):null}function d(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=e[6],l=e[7],f=e[8];return t[0]=u*f-o*l,t[1]=i*l-n*f,t[2]=n*o-i*u,t[3]=o*s-a*f,t[4]=r*f-i*s,t[5]=i*a-r*o,t[6]=a*l-u*s,t[7]=n*s-r*l,t[8]=r*u-n*a,t}function v(t){var e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],u=t[5],o=t[6],s=t[7],l=t[8];return e*(l*a-u*s)+r*(-l*i+u*o)+n*(s*i-a*o)}function _(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=e[6],f=e[7],h=e[8],c=r[0],d=r[1],v=r[2],_=r[3],p=r[4],m=r[5],g=r[6],E=r[7],M=r[8];return t[0]=c*n+d*u+v*l,t[1]=c*i+d*o+v*f,t[2]=c*a+d*s+v*h,t[3]=_*n+p*u+m*l,t[4]=_*i+p*o+m*f,t[5]=_*a+p*s+m*h,t[6]=g*n+E*u+M*l,t[7]=g*i+E*o+M*f,t[8]=g*a+E*s+M*h,t}function p(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=e[6],f=e[7],h=e[8],c=r[0],d=r[1];return t[0]=n,t[1]=i,t[2]=a,t[3]=u,t[4]=o,t[5]=s,t[6]=c*n+d*u+l,t[7]=c*i+d*o+f,t[8]=c*a+d*s+h,t}function m(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=e[6],f=e[7],h=e[8],c=Math.sin(r),d=Math.cos(r);return t[0]=d*n+c*u,t[1]=d*i+c*o,t[2]=d*a+c*s,t[3]=d*u-c*n,t[4]=d*o-c*i,t[5]=d*s-c*a,t[6]=l,t[7]=f,t[8]=h,t}function g(t,e,r){var n=r[0],i=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function E(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t}function M(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function b(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function y(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t}function x(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=r+r,o=n+n,s=i+i,l=r*u,f=n*u,h=n*o,c=i*u,d=i*o,v=i*s,_=a*u,p=a*o,m=a*s;return t[0]=1-h-v,t[3]=f-m,t[6]=c+p,t[1]=f+m,t[4]=1-l-v,t[7]=d-_,t[2]=c-p,t[5]=d+_,t[8]=1-l-h,t}function T(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=e[6],l=e[7],f=e[8],h=e[9],c=e[10],d=e[11],v=e[12],_=e[13],p=e[14],m=e[15],g=r*o-n*u,E=r*s-i*u,M=r*l-a*u,b=n*s-i*o,y=n*l-a*o,x=i*l-a*s,T=f*_-h*v,A=f*p-c*v,R=f*m-d*v,w=h*p-c*_,P=h*m-d*_,S=c*m-d*p,O=g*S-E*P+M*w+b*R-y*A+x*T;return O?(O=1/O,t[0]=(o*S-s*P+l*w)*O,t[1]=(s*R-u*S-l*A)*O,t[2]=(u*P-o*R+l*T)*O,t[3]=(i*P-n*S-a*w)*O,t[4]=(r*S-i*R+a*A)*O,t[5]=(n*R-r*P-a*T)*O,t[6]=(_*x-p*y+m*b)*O,t[7]=(p*M-v*x-m*E)*O,t[8]=(v*y-_*M+m*g)*O,t):null}function A(t,e,r){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/r,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function R(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function w(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))}function P(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t}function S(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t}function O(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t}function I(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t}function N(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]}function F(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],u=t[4],o=t[5],s=t[6],l=t[7],f=t[8],h=e[0],c=e[1],d=e[2],v=e[3],_=e[4],p=e[5],m=e[6],g=e[7],E=e[8];return Math.abs(r-h)<=k.EPSILON*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(n-c)<=k.EPSILON*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(i-d)<=k.EPSILON*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(a-v)<=k.EPSILON*Math.max(1,Math.abs(a),Math.abs(v))&&Math.abs(u-_)<=k.EPSILON*Math.max(1,Math.abs(u),Math.abs(_))&&Math.abs(o-p)<=k.EPSILON*Math.max(1,Math.abs(o),Math.abs(p))&&Math.abs(s-m)<=k.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(l-g)<=k.EPSILON*Math.max(1,Math.abs(l),Math.abs(g))&&Math.abs(f-E)<=k.EPSILON*Math.max(1,Math.abs(f),Math.abs(E))}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=i,e.fromMat4=a,e.clone=u,e.copy=o,e.fromValues=s,e.set=l,e.identity=f,e.transpose=h,e.invert=c,e.adjoint=d,e.determinant=v,e.multiply=_,e.translate=p,e.rotate=m,e.scale=g,e.fromTranslation=E,e.fromRotation=M,e.fromScaling=b,e.fromMat2d=y,e.fromQuat=x,e.normalFromMat4=T,e.projection=A,e.str=R,e.frob=w,e.add=P,e.subtract=S,e.multiplyScalar=O,e.multiplyScalarAndAdd=I,e.exactEquals=N,e.equals=F;var L=r(0),k=n(L);e.mul=_,e.sub=S},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new G.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t}function a(t){var e=new G.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function u(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)}function o(t,e,r){var n=new G.ARRAY_TYPE(3);return n[0]=t,n[1]=e,n[2]=r,n}function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function l(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t}function f(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function h(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function c(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function d(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function v(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}function _(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}function p(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t}function m(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t}function g(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}function E(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function M(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function b(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(r*r+n*n+i*i)}function y(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return r*r+n*n+i*i}function x(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n}function T(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function A(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function R(t,e){var r=e[0],n=e[1],i=e[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}function w(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function P(t,e,r){var n=e[0],i=e[1],a=e[2],u=r[0],o=r[1],s=r[2];return t[0]=i*s-a*o,t[1]=a*u-n*s,t[2]=n*o-i*u,t}function S(t,e,r,n){var i=e[0],a=e[1],u=e[2];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t[2]=u+n*(r[2]-u),t}function O(t,e,r,n,i,a){var u=a*a,o=u*(2*a-3)+1,s=u*(a-2)+a,l=u*(a-1),f=u*(3-2*a);return t[0]=e[0]*o+r[0]*s+n[0]*l+i[0]*f,t[1]=e[1]*o+r[1]*s+n[1]*l+i[1]*f,t[2]=e[2]*o+r[2]*s+n[2]*l+i[2]*f,t}function I(t,e,r,n,i,a){var u=1-a,o=u*u,s=a*a,l=o*u,f=3*a*o,h=3*s*u,c=s*a;return t[0]=e[0]*l+r[0]*f+n[0]*h+i[0]*c,t[1]=e[1]*l+r[1]*f+n[1]*h+i[1]*c,t[2]=e[2]*l+r[2]*f+n[2]*h+i[2]*c,t}function N(t,e){e=e||1;var r=2*G.RANDOM()*Math.PI,n=2*G.RANDOM()-1,i=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*i,t[1]=Math.sin(r)*i,t[2]=n*e,t}function F(t,e,r){var n=e[0],i=e[1],a=e[2],u=r[3]*n+r[7]*i+r[11]*a+r[15];return u=u||1,t[0]=(r[0]*n+r[4]*i+r[8]*a+r[12])/u,t[1]=(r[1]*n+r[5]*i+r[9]*a+r[13])/u,t[2]=(r[2]*n+r[6]*i+r[10]*a+r[14])/u,t}function L(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t}function k(t,e,r){var n=e[0],i=e[1],a=e[2],u=r[0],o=r[1],s=r[2],l=r[3],f=l*n+o*a-s*i,h=l*i+s*n-u*a,c=l*a+u*i-o*n,d=-u*n-o*i-s*a;return t[0]=f*l+d*-u+h*-s-c*-o,t[1]=h*l+d*-o+c*-u-f*-s,t[2]=c*l+d*-s+f*-o-h*-u,t}function C(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function D(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function U(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t}function B(t,e){var r=o(t[0],t[1],t[2]),n=o(e[0],e[1],e[2]);R(r,r),R(n,n);var i=w(r,n);return i>1?0:i<-1?Math.PI:Math.acos(i)}function q(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function X(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}function j(t,e){var r=t[0],n=t[1],i=t[2],a=e[0],u=e[1],o=e[2];return Math.abs(r-a)<=G.EPSILON*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(n-u)<=G.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(i-o)<=G.EPSILON*Math.max(1,Math.abs(i),Math.abs(o))}Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=i,e.clone=a,e.length=u,e.fromValues=o,e.copy=s,e.set=l,e.add=f,e.subtract=h,e.multiply=c,e.divide=d,e.ceil=v,e.floor=_,e.min=p,e.max=m,e.round=g,e.scale=E,e.scaleAndAdd=M,e.distance=b,e.squaredDistance=y,e.squaredLength=x,e.negate=T,e.inverse=A,e.normalize=R,e.dot=w,e.cross=P,e.lerp=S,e.hermite=O,e.bezier=I,e.random=N,e.transformMat4=F,e.transformMat3=L,e.transformQuat=k,e.rotateX=C,e.rotateY=D,e.rotateZ=U,e.angle=B,e.str=q,e.exactEquals=X,e.equals=j;var V=r(0),G=n(V);e.sub=h,e.mul=c,e.div=d,e.dist=b,e.sqrDist=y,e.len=u,e.sqrLen=x,e.forEach=function(){var t=i();return function(e,r,n,i,a,u){var o=void 0,s=void 0;for(r||(r=3),n||(n=0),s=i?Math.min(i*r+n,e.length):e.length,o=n;o<s;o+=r)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],a(t,t,u),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}}()},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new C.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function a(t){var e=new C.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function u(t,e,r,n){var i=new C.ARRAY_TYPE(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function o(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}function l(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function f(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function h(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t}function d(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t[3]=Math.ceil(e[3]),t}function v(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t[3]=Math.floor(e[3]),t}function _(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t}function p(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t}function m(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t[3]=Math.round(e[3]),t}function g(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function E(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t}function M(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(r*r+n*n+i*i+a*a)}function b(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return r*r+n*n+i*i+a*a}function y(t){var e=t[0],r=t[1],n=t[2],i=t[3];return Math.sqrt(e*e+r*r+n*n+i*i)}function x(t){var e=t[0],r=t[1],n=t[2],i=t[3];return e*e+r*r+n*n+i*i}function T(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t}function A(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t}function R(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=r*r+n*n+i*i+a*a;return u>0&&(u=1/Math.sqrt(u),t[0]=r*u,t[1]=n*u,t[2]=i*u,t[3]=a*u),t}function w(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function P(t,e,r,n){var i=e[0],a=e[1],u=e[2],o=e[3];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t[2]=u+n*(r[2]-u),t[3]=o+n*(r[3]-o),t}function S(t,e){return e=e||1,t[0]=C.RANDOM(),t[1]=C.RANDOM(),t[2]=C.RANDOM(),t[3]=C.RANDOM(),R(t,t),g(t,t,e),t}function O(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*u,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*u,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*u,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*u,t}function I(t,e,r){var n=e[0],i=e[1],a=e[2],u=r[0],o=r[1],s=r[2],l=r[3],f=l*n+o*a-s*i,h=l*i+s*n-u*a,c=l*a+u*i-o*n,d=-u*n-o*i-s*a;return t[0]=f*l+d*-u+h*-s-c*-o,t[1]=h*l+d*-o+c*-u-f*-s,t[2]=c*l+d*-s+f*-o-h*-u,t[3]=e[3],t}function N(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function F(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function L(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],u=e[0],o=e[1],s=e[2],l=e[3];return Math.abs(r-u)<=C.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(n-o)<=C.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-s)<=C.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-l)<=C.EPSILON*Math.max(1,Math.abs(a),Math.abs(l))}Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=i,e.clone=a,e.fromValues=u,e.copy=o,e.set=s,e.add=l,e.subtract=f,e.multiply=h,e.divide=c,e.ceil=d,e.floor=v,e.min=_,e.max=p,e.round=m,e.scale=g,e.scaleAndAdd=E,e.distance=M,e.squaredDistance=b,e.length=y,e.squaredLength=x,e.negate=T,e.inverse=A,e.normalize=R,e.dot=w,e.lerp=P,e.random=S,e.transformMat4=O,e.transformQuat=I,e.str=N,e.exactEquals=F,e.equals=L;var k=r(0),C=n(k);e.sub=f,e.mul=h,e.div=c,e.dist=M,e.sqrDist=b,e.len=y,e.sqrLen=x,e.forEach=function(){var t=i();return function(e,r,n,i,a,u){var o=void 0,s=void 0;for(r||(r=4),n||(n=0),s=i?Math.min(i*r+n,e.length):e.length,o=n;o<s;o+=r)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],a(t,t,u),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}}()},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.vec4=e.vec3=e.vec2=e.quat=e.mat4=e.mat3=e.mat2d=e.mat2=e.glMatrix=void 0;var i=r(0),a=n(i),u=r(5),o=n(u),s=r(6),l=n(s),f=r(1),h=n(f),c=r(7),d=n(c),v=r(8),_=n(v),p=r(9),m=n(p),g=r(2),E=n(g),M=r(3),b=n(M);e.glMatrix=a,e.mat2=o,e.mat2d=l,e.mat3=h,e.mat4=d,e.quat=_,e.vec2=m,e.vec3=E,e.vec4=b},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new S.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function a(t){var e=new S.ARRAY_TYPE(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function s(t,e,r,n){var i=new S.ARRAY_TYPE(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function l(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}function f(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t}function h(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=r*a-i*n;return u?(u=1/u,t[0]=a*u,t[1]=-n*u,t[2]=-i*u,t[3]=r*u,t):null}function c(t,e){var r=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=r,t}function d(t){return t[0]*t[3]-t[2]*t[1]}function v(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=r[0],s=r[1],l=r[2],f=r[3];return t[0]=n*o+a*s,t[1]=i*o+u*s,t[2]=n*l+a*f,t[3]=i*l+u*f,t}function _(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=Math.sin(r),s=Math.cos(r);return t[0]=n*s+a*o,t[1]=i*s+u*o,t[2]=n*-o+a*s,t[3]=i*-o+u*s,t}function p(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=r[0],s=r[1];return t[0]=n*o,t[1]=i*o,t[2]=a*s,t[3]=u*s,t}function m(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=-r,t[3]=n,t}function g(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t}function E(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function M(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))}function b(t,e,r,n){return t[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-t[2]*r[1],[t,e,r]}function y(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t}function x(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}function T(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}function A(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],u=e[0],o=e[1],s=e[2],l=e[3];return Math.abs(r-u)<=S.EPSILON*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(n-o)<=S.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(i-s)<=S.EPSILON*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(a-l)<=S.EPSILON*Math.max(1,Math.abs(a),Math.abs(l))}function R(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t}function w(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=i,e.clone=a,e.copy=u,e.identity=o,e.fromValues=s,e.set=l,e.transpose=f,e.invert=h,e.adjoint=c,e.determinant=d,e.multiply=v,e.rotate=_,e.scale=p,e.fromRotation=m,e.fromScaling=g,e.str=E,e.frob=M,e.LDU=b,e.add=y,e.subtract=x,e.exactEquals=T,e.equals=A,e.multiplyScalar=R,e.multiplyScalarAndAdd=w;var P=r(0),S=n(P);e.mul=v,e.sub=x},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new P.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function a(t){var e=new P.ARRAY_TYPE(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function s(t,e,r,n,i,a){var u=new P.ARRAY_TYPE(6);return u[0]=t,u[1]=e,u[2]=r,u[3]=n,u[4]=i,u[5]=a,u}function l(t,e,r,n,i,a,u){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=a,t[5]=u,t}function f(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=r*a-n*i;return s?(s=1/s,t[0]=a*s,t[1]=-n*s,t[2]=-i*s,t[3]=r*s,t[4]=(i*o-a*u)*s,t[5]=(n*u-r*o)*s,
	t):null}function h(t){return t[0]*t[3]-t[1]*t[2]}function c(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=r[0],f=r[1],h=r[2],c=r[3],d=r[4],v=r[5];return t[0]=n*l+a*f,t[1]=i*l+u*f,t[2]=n*h+a*c,t[3]=i*h+u*c,t[4]=n*d+a*v+o,t[5]=i*d+u*v+s,t}function d(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=Math.sin(r),f=Math.cos(r);return t[0]=n*f+a*l,t[1]=i*f+u*l,t[2]=n*-l+a*f,t[3]=i*-l+u*f,t[4]=o,t[5]=s,t}function v(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=r[0],f=r[1];return t[0]=n*l,t[1]=i*l,t[2]=a*f,t[3]=u*f,t[4]=o,t[5]=s,t}function _(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=r[0],f=r[1];return t[0]=n,t[1]=i,t[2]=a,t[3]=u,t[4]=n*l+a*f+o,t[5]=i*l+u*f+s,t}function p(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=-r,t[3]=n,t[4]=0,t[5]=0,t}function m(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function g(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function E(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function M(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)}function b(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t}function y(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t}function x(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t}function T(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t}function A(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function R(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],u=t[4],o=t[5],s=e[0],l=e[1],f=e[2],h=e[3],c=e[4],d=e[5];return Math.abs(r-s)<=P.EPSILON*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-l)<=P.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(i-f)<=P.EPSILON*Math.max(1,Math.abs(i),Math.abs(f))&&Math.abs(a-h)<=P.EPSILON*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(u-c)<=P.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(o-d)<=P.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=i,e.clone=a,e.copy=u,e.identity=o,e.fromValues=s,e.set=l,e.invert=f,e.determinant=h,e.multiply=c,e.rotate=d,e.scale=v,e.translate=_,e.fromRotation=p,e.fromScaling=m,e.fromTranslation=g,e.str=E,e.frob=M,e.add=b,e.subtract=y,e.multiplyScalar=x,e.multiplyScalarAndAdd=T,e.exactEquals=A,e.equals=R;var w=r(0),P=n(w);e.mul=c,e.sub=y},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new Z.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function a(t){var e=new Z.ARRAY_TYPE(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function o(t,e,r,n,i,a,u,o,s,l,f,h,c,d,v,_){var p=new Z.ARRAY_TYPE(16);return p[0]=t,p[1]=e,p[2]=r,p[3]=n,p[4]=i,p[5]=a,p[6]=u,p[7]=o,p[8]=s,p[9]=l,p[10]=f,p[11]=h,p[12]=c,p[13]=d,p[14]=v,p[15]=_,p}function s(t,e,r,n,i,a,u,o,s,l,f,h,c,d,v,_,p){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t[4]=a,t[5]=u,t[6]=o,t[7]=s,t[8]=l,t[9]=f,t[10]=h,t[11]=c,t[12]=d,t[13]=v,t[14]=_,t[15]=p,t}function l(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function f(t,e){if(t===e){var r=e[1],n=e[2],i=e[3],a=e[6],u=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=i,t[13]=u,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function h(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=e[6],l=e[7],f=e[8],h=e[9],c=e[10],d=e[11],v=e[12],_=e[13],p=e[14],m=e[15],g=r*o-n*u,E=r*s-i*u,M=r*l-a*u,b=n*s-i*o,y=n*l-a*o,x=i*l-a*s,T=f*_-h*v,A=f*p-c*v,R=f*m-d*v,w=h*p-c*_,P=h*m-d*_,S=c*m-d*p,O=g*S-E*P+M*w+b*R-y*A+x*T;return O?(O=1/O,t[0]=(o*S-s*P+l*w)*O,t[1]=(i*P-n*S-a*w)*O,t[2]=(_*x-p*y+m*b)*O,t[3]=(c*y-h*x-d*b)*O,t[4]=(s*R-u*S-l*A)*O,t[5]=(r*S-i*R+a*A)*O,t[6]=(p*M-v*x-m*E)*O,t[7]=(f*x-c*M+d*E)*O,t[8]=(u*P-o*R+l*T)*O,t[9]=(n*R-r*P-a*T)*O,t[10]=(v*y-_*M+m*g)*O,t[11]=(h*M-f*y-d*g)*O,t[12]=(o*A-u*w-s*T)*O,t[13]=(r*w-n*A+i*T)*O,t[14]=(_*E-v*b-p*g)*O,t[15]=(f*b-h*E+c*g)*O,t):null}function c(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=e[4],o=e[5],s=e[6],l=e[7],f=e[8],h=e[9],c=e[10],d=e[11],v=e[12],_=e[13],p=e[14],m=e[15];return t[0]=o*(c*m-d*p)-h*(s*m-l*p)+_*(s*d-l*c),t[1]=-(n*(c*m-d*p)-h*(i*m-a*p)+_*(i*d-a*c)),t[2]=n*(s*m-l*p)-o*(i*m-a*p)+_*(i*l-a*s),t[3]=-(n*(s*d-l*c)-o*(i*d-a*c)+h*(i*l-a*s)),t[4]=-(u*(c*m-d*p)-f*(s*m-l*p)+v*(s*d-l*c)),t[5]=r*(c*m-d*p)-f*(i*m-a*p)+v*(i*d-a*c),t[6]=-(r*(s*m-l*p)-u*(i*m-a*p)+v*(i*l-a*s)),t[7]=r*(s*d-l*c)-u*(i*d-a*c)+f*(i*l-a*s),t[8]=u*(h*m-d*_)-f*(o*m-l*_)+v*(o*d-l*h),t[9]=-(r*(h*m-d*_)-f*(n*m-a*_)+v*(n*d-a*h)),t[10]=r*(o*m-l*_)-u*(n*m-a*_)+v*(n*l-a*o),t[11]=-(r*(o*d-l*h)-u*(n*d-a*h)+f*(n*l-a*o)),t[12]=-(u*(h*p-c*_)-f*(o*p-s*_)+v*(o*c-s*h)),t[13]=r*(h*p-c*_)-f*(n*p-i*_)+v*(n*c-i*h),t[14]=-(r*(o*p-s*_)-u*(n*p-i*_)+v*(n*s-i*o)),t[15]=r*(o*c-s*h)-u*(n*c-i*h)+f*(n*s-i*o),t}function d(t){var e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],u=t[5],o=t[6],s=t[7],l=t[8],f=t[9],h=t[10],c=t[11],d=t[12],v=t[13],_=t[14],p=t[15],m=e*u-r*a,g=e*o-n*a,E=e*s-i*a,M=r*o-n*u,b=r*s-i*u,y=n*s-i*o,x=l*v-f*d,T=l*_-h*d,A=l*p-c*d,R=f*_-h*v,w=f*p-c*v,P=h*p-c*_;return m*P-g*w+E*R+M*A-b*T+y*x}function v(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=e[4],s=e[5],l=e[6],f=e[7],h=e[8],c=e[9],d=e[10],v=e[11],_=e[12],p=e[13],m=e[14],g=e[15],E=r[0],M=r[1],b=r[2],y=r[3];return t[0]=E*n+M*o+b*h+y*_,t[1]=E*i+M*s+b*c+y*p,t[2]=E*a+M*l+b*d+y*m,t[3]=E*u+M*f+b*v+y*g,E=r[4],M=r[5],b=r[6],y=r[7],t[4]=E*n+M*o+b*h+y*_,t[5]=E*i+M*s+b*c+y*p,t[6]=E*a+M*l+b*d+y*m,t[7]=E*u+M*f+b*v+y*g,E=r[8],M=r[9],b=r[10],y=r[11],t[8]=E*n+M*o+b*h+y*_,t[9]=E*i+M*s+b*c+y*p,t[10]=E*a+M*l+b*d+y*m,t[11]=E*u+M*f+b*v+y*g,E=r[12],M=r[13],b=r[14],y=r[15],t[12]=E*n+M*o+b*h+y*_,t[13]=E*i+M*s+b*c+y*p,t[14]=E*a+M*l+b*d+y*m,t[15]=E*u+M*f+b*v+y*g,t}function _(t,e,r){var n=r[0],i=r[1],a=r[2],u=void 0,o=void 0,s=void 0,l=void 0,f=void 0,h=void 0,c=void 0,d=void 0,v=void 0,_=void 0,p=void 0,m=void 0;return e===t?(t[12]=e[0]*n+e[4]*i+e[8]*a+e[12],t[13]=e[1]*n+e[5]*i+e[9]*a+e[13],t[14]=e[2]*n+e[6]*i+e[10]*a+e[14],t[15]=e[3]*n+e[7]*i+e[11]*a+e[15]):(u=e[0],o=e[1],s=e[2],l=e[3],f=e[4],h=e[5],c=e[6],d=e[7],v=e[8],_=e[9],p=e[10],m=e[11],t[0]=u,t[1]=o,t[2]=s,t[3]=l,t[4]=f,t[5]=h,t[6]=c,t[7]=d,t[8]=v,t[9]=_,t[10]=p,t[11]=m,t[12]=u*n+f*i+v*a+e[12],t[13]=o*n+h*i+_*a+e[13],t[14]=s*n+c*i+p*a+e[14],t[15]=l*n+d*i+m*a+e[15]),t}function p(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function m(t,e,r,n){var i=n[0],a=n[1],u=n[2],o=Math.sqrt(i*i+a*a+u*u),s=void 0,l=void 0,f=void 0,h=void 0,c=void 0,d=void 0,v=void 0,_=void 0,p=void 0,m=void 0,g=void 0,E=void 0,M=void 0,b=void 0,y=void 0,x=void 0,T=void 0,A=void 0,R=void 0,w=void 0,P=void 0,S=void 0,O=void 0,I=void 0;return Math.abs(o)<Z.EPSILON?null:(o=1/o,i*=o,a*=o,u*=o,s=Math.sin(r),l=Math.cos(r),f=1-l,h=e[0],c=e[1],d=e[2],v=e[3],_=e[4],p=e[5],m=e[6],g=e[7],E=e[8],M=e[9],b=e[10],y=e[11],x=i*i*f+l,T=a*i*f+u*s,A=u*i*f-a*s,R=i*a*f-u*s,w=a*a*f+l,P=u*a*f+i*s,S=i*u*f+a*s,O=a*u*f-i*s,I=u*u*f+l,t[0]=h*x+_*T+E*A,t[1]=c*x+p*T+M*A,t[2]=d*x+m*T+b*A,t[3]=v*x+g*T+y*A,t[4]=h*R+_*w+E*P,t[5]=c*R+p*w+M*P,t[6]=d*R+m*w+b*P,t[7]=v*R+g*w+y*P,t[8]=h*S+_*O+E*I,t[9]=c*S+p*O+M*I,t[10]=d*S+m*O+b*I,t[11]=v*S+g*O+y*I,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function g(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],u=e[5],o=e[6],s=e[7],l=e[8],f=e[9],h=e[10],c=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+l*n,t[5]=u*i+f*n,t[6]=o*i+h*n,t[7]=s*i+c*n,t[8]=l*i-a*n,t[9]=f*i-u*n,t[10]=h*i-o*n,t[11]=c*i-s*n,t}function E(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],u=e[1],o=e[2],s=e[3],l=e[8],f=e[9],h=e[10],c=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i-l*n,t[1]=u*i-f*n,t[2]=o*i-h*n,t[3]=s*i-c*n,t[8]=a*n+l*i,t[9]=u*n+f*i,t[10]=o*n+h*i,t[11]=s*n+c*i,t}function M(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],u=e[1],o=e[2],s=e[3],l=e[4],f=e[5],h=e[6],c=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+l*n,t[1]=u*i+f*n,t[2]=o*i+h*n,t[3]=s*i+c*n,t[4]=l*i-a*n,t[5]=f*i-u*n,t[6]=h*i-o*n,t[7]=c*i-s*n,t}function b(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function y(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(t,e,r){var n=r[0],i=r[1],a=r[2],u=Math.sqrt(n*n+i*i+a*a),o=void 0,s=void 0,l=void 0;return Math.abs(u)<Z.EPSILON?null:(u=1/u,n*=u,i*=u,a*=u,o=Math.sin(e),s=Math.cos(e),l=1-s,t[0]=n*n*l+s,t[1]=i*n*l+a*o,t[2]=a*n*l-i*o,t[3]=0,t[4]=n*i*l-a*o,t[5]=i*i*l+s,t[6]=a*i*l+n*o,t[7]=0,t[8]=n*a*l+i*o,t[9]=i*a*l-n*o,t[10]=a*a*l+s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function T(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=r,t[7]=0,t[8]=0,t[9]=-r,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function A(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-r,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=r,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function R(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=0,t[4]=-r,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function w(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=n+n,s=i+i,l=a+a,f=n*o,h=n*s,c=n*l,d=i*s,v=i*l,_=a*l,p=u*o,m=u*s,g=u*l;return t[0]=1-(d+_),t[1]=h+g,t[2]=c-m,t[3]=0,t[4]=h-g,t[5]=1-(f+_),t[6]=v+p,t[7]=0,t[8]=c+m,t[9]=v-p,t[10]=1-(f+d),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function P(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function S(t,e){var r=e[0],n=e[1],i=e[2],a=e[4],u=e[5],o=e[6],s=e[8],l=e[9],f=e[10];return t[0]=Math.sqrt(r*r+n*n+i*i),t[1]=Math.sqrt(a*a+u*u+o*o),t[2]=Math.sqrt(s*s+l*l+f*f),t}function O(t,e){var r=e[0]+e[5]+e[10],n=0;return r>0?(n=2*Math.sqrt(r+1),t[3]=.25*n,t[0]=(e[6]-e[9])/n,t[1]=(e[8]-e[2])/n,t[2]=(e[1]-e[4])/n):e[0]>e[5]&e[0]>e[10]?(n=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/n,t[0]=.25*n,t[1]=(e[1]+e[4])/n,t[2]=(e[8]+e[2])/n):e[5]>e[10]?(n=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/n,t[0]=(e[1]+e[4])/n,t[1]=.25*n,t[2]=(e[6]+e[9])/n):(n=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/n,t[0]=(e[8]+e[2])/n,t[1]=(e[6]+e[9])/n,t[2]=.25*n),t}function I(t,e,r,n){var i=e[0],a=e[1],u=e[2],o=e[3],s=i+i,l=a+a,f=u+u,h=i*s,c=i*l,d=i*f,v=a*l,_=a*f,p=u*f,m=o*s,g=o*l,E=o*f,M=n[0],b=n[1],y=n[2];return t[0]=(1-(v+p))*M,t[1]=(c+E)*M,t[2]=(d-g)*M,t[3]=0,t[4]=(c-E)*b,t[5]=(1-(h+p))*b,t[6]=(_+m)*b,t[7]=0,t[8]=(d+g)*y,t[9]=(_-m)*y,t[10]=(1-(h+v))*y,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function N(t,e,r,n,i){var a=e[0],u=e[1],o=e[2],s=e[3],l=a+a,f=u+u,h=o+o,c=a*l,d=a*f,v=a*h,_=u*f,p=u*h,m=o*h,g=s*l,E=s*f,M=s*h,b=n[0],y=n[1],x=n[2],T=i[0],A=i[1],R=i[2];return t[0]=(1-(_+m))*b,t[1]=(d+M)*b,t[2]=(v-E)*b,t[3]=0,t[4]=(d-M)*y,t[5]=(1-(c+m))*y,t[6]=(p+g)*y,t[7]=0,t[8]=(v+E)*x,t[9]=(p-g)*x,t[10]=(1-(c+_))*x,t[11]=0,t[12]=r[0]+T-(t[0]*T+t[4]*A+t[8]*R),t[13]=r[1]+A-(t[1]*T+t[5]*A+t[9]*R),t[14]=r[2]+R-(t[2]*T+t[6]*A+t[10]*R),t[15]=1,t}function F(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=r+r,o=n+n,s=i+i,l=r*u,f=n*u,h=n*o,c=i*u,d=i*o,v=i*s,_=a*u,p=a*o,m=a*s;return t[0]=1-h-v,t[1]=f+m,t[2]=c-p,t[3]=0,t[4]=f-m,t[5]=1-l-v,t[6]=d+_,t[7]=0,t[8]=c+p,t[9]=d-_,t[10]=1-l-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function L(t,e,r,n,i,a,u){var o=1/(r-e),s=1/(i-n),l=1/(a-u);return t[0]=2*a*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*s,t[6]=0,t[7]=0,t[8]=(r+e)*o,t[9]=(i+n)*s,t[10]=(u+a)*l,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*a*2*l,t[15]=0,t}function k(t,e,r,n,i){var a=1/Math.tan(e/2),u=1/(n-i);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+n)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*n*u,t[15]=0,t}function C(t,e,r,n){var i=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),u=Math.tan(e.leftDegrees*Math.PI/180),o=Math.tan(e.rightDegrees*Math.PI/180),s=2/(u+o),l=2/(i+a);return t[0]=s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=l,t[6]=0,t[7]=0,t[8]=-((u-o)*s*.5),t[9]=(i-a)*l*.5,t[10]=n/(r-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*r/(r-n),t[15]=0,t}function D(t,e,r,n,i,a,u){var o=1/(e-r),s=1/(n-i),l=1/(a-u);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*l,t[11]=0,t[12]=(e+r)*o,t[13]=(i+n)*s,t[14]=(u+a)*l,t[15]=1,t}function U(t,e,r,n){var i=void 0,a=void 0,u=void 0,o=void 0,s=void 0,l=void 0,f=void 0,h=void 0,c=void 0,d=void 0,v=e[0],_=e[1],p=e[2],m=n[0],g=n[1],E=n[2],M=r[0],b=r[1],y=r[2];return Math.abs(v-M)<Z.EPSILON&&Math.abs(_-b)<Z.EPSILON&&Math.abs(p-y)<Z.EPSILON?mat4.identity(t):(f=v-M,h=_-b,c=p-y,d=1/Math.sqrt(f*f+h*h+c*c),f*=d,h*=d,c*=d,i=g*c-E*h,a=E*f-m*c,u=m*h-g*f,d=Math.sqrt(i*i+a*a+u*u),d?(d=1/d,i*=d,a*=d,u*=d):(i=0,a=0,u=0),o=h*u-c*a,s=c*i-f*u,l=f*a-h*i,d=Math.sqrt(o*o+s*s+l*l),d?(d=1/d,o*=d,s*=d,l*=d):(o=0,s=0,l=0),t[0]=i,t[1]=o,t[2]=f,t[3]=0,t[4]=a,t[5]=s,t[6]=h,t[7]=0,t[8]=u,t[9]=l,t[10]=c,t[11]=0,t[12]=-(i*v+a*_+u*p),t[13]=-(o*v+s*_+l*p),t[14]=-(f*v+h*_+c*p),t[15]=1,t)}function B(t,e,r,n){var i=e[0],a=e[1],u=e[2],o=n[0],s=n[1],l=n[2],f=i-r[0],h=a-r[1],c=u-r[2],d=f*f+h*h+c*c;d>0&&(d=1/Math.sqrt(d),f*=d,h*=d,c*=d);var v=s*c-l*h,_=l*f-o*c,p=o*h-s*f;return t[0]=v,t[1]=_,t[2]=p,t[3]=0,t[4]=h*p-c*_,t[5]=c*v-f*p,t[6]=f*_-h*v,t[7]=0,t[8]=f,t[9]=h,t[10]=c,t[11]=0,t[12]=i,t[13]=a,t[14]=u,t[15]=1,t}function q(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function X(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))}function j(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function V(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function G(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}function Y(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t[4]=e[4]+r[4]*n,t[5]=e[5]+r[5]*n,t[6]=e[6]+r[6]*n,t[7]=e[7]+r[7]*n,t[8]=e[8]+r[8]*n,t[9]=e[9]+r[9]*n,t[10]=e[10]+r[10]*n,t[11]=e[11]+r[11]*n,t[12]=e[12]+r[12]*n,t[13]=e[13]+r[13]*n,t[14]=e[14]+r[14]*n,t[15]=e[15]+r[15]*n,t}function W(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function H(t,e){var r=t[0],n=t[1],i=t[2],a=t[3],u=t[4],o=t[5],s=t[6],l=t[7],f=t[8],h=t[9],c=t[10],d=t[11],v=t[12],_=t[13],p=t[14],m=t[15],g=e[0],E=e[1],M=e[2],b=e[3],y=e[4],x=e[5],T=e[6],A=e[7],R=e[8],w=e[9],P=e[10],S=e[11],O=e[12],I=e[13],N=e[14],F=e[15];return Math.abs(r-g)<=Z.EPSILON*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(n-E)<=Z.EPSILON*Math.max(1,Math.abs(n),Math.abs(E))&&Math.abs(i-M)<=Z.EPSILON*Math.max(1,Math.abs(i),Math.abs(M))&&Math.abs(a-b)<=Z.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))&&Math.abs(u-y)<=Z.EPSILON*Math.max(1,Math.abs(u),Math.abs(y))&&Math.abs(o-x)<=Z.EPSILON*Math.max(1,Math.abs(o),Math.abs(x))&&Math.abs(s-T)<=Z.EPSILON*Math.max(1,Math.abs(s),Math.abs(T))&&Math.abs(l-A)<=Z.EPSILON*Math.max(1,Math.abs(l),Math.abs(A))&&Math.abs(f-R)<=Z.EPSILON*Math.max(1,Math.abs(f),Math.abs(R))&&Math.abs(h-w)<=Z.EPSILON*Math.max(1,Math.abs(h),Math.abs(w))&&Math.abs(c-P)<=Z.EPSILON*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(d-S)<=Z.EPSILON*Math.max(1,Math.abs(d),Math.abs(S))&&Math.abs(v-O)<=Z.EPSILON*Math.max(1,Math.abs(v),Math.abs(O))&&Math.abs(_-I)<=Z.EPSILON*Math.max(1,Math.abs(_),Math.abs(I))&&Math.abs(p-N)<=Z.EPSILON*Math.max(1,Math.abs(p),Math.abs(N))&&Math.abs(m-F)<=Z.EPSILON*Math.max(1,Math.abs(m),Math.abs(F))}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=i,e.clone=a,e.copy=u,e.fromValues=o,e.set=s,e.identity=l,e.transpose=f,e.invert=h,e.adjoint=c,e.determinant=d,e.multiply=v,e.translate=_,e.scale=p,e.rotate=m,e.rotateX=g,e.rotateY=E,e.rotateZ=M,e.fromTranslation=b,e.fromScaling=y,e.fromRotation=x,e.fromXRotation=T,e.fromYRotation=A,e.fromZRotation=R,e.fromRotationTranslation=w,e.getTranslation=P,e.getScaling=S,e.getRotation=O,e.fromRotationTranslationScale=I,e.fromRotationTranslationScaleOrigin=N,e.fromQuat=F,e.frustum=L,e.perspective=k,e.perspectiveFromFieldOfView=C,e.ortho=D,e.lookAt=U,e.targetTo=B,e.str=q,e.frob=X,e.add=j,e.subtract=V,e.multiplyScalar=G,e.multiplyScalarAndAdd=Y,e.exactEquals=W,e.equals=H;var z=r(0),Z=n(z);e.mul=v,e.sub=V},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new M.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function a(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function u(t,e,r){r=.5*r;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t}function o(t,e){var r=2*Math.acos(e[3]),n=Math.sin(r/2);return 0!=n?(t[0]=e[0]/n,t[1]=e[1]/n,t[2]=e[2]/n):(t[0]=1,t[1]=0,t[2]=0),r}function s(t,e,r){var n=e[0],i=e[1],a=e[2],u=e[3],o=r[0],s=r[1],l=r[2],f=r[3];return t[0]=n*f+u*o+i*l-a*s,t[1]=i*f+u*s+a*o-n*l,t[2]=a*f+u*l+n*s-i*o,t[3]=u*f-n*o-i*s-a*l,t}function l(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],u=e[3],o=Math.sin(r),s=Math.cos(r);return t[0]=n*s+u*o,t[1]=i*s+a*o,t[2]=a*s-i*o,t[3]=u*s-n*o,t}function f(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],u=e[3],o=Math.sin(r),s=Math.cos(r);return t[0]=n*s-a*o,t[1]=i*s+u*o,t[2]=a*s+n*o,t[3]=u*s-i*o,t}function h(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],u=e[3],o=Math.sin(r),s=Math.cos(r);return t[0]=n*s+i*o,t[1]=i*s-n*o,t[2]=a*s+u*o,t[3]=u*s-a*o,t}function c(t,e){var r=e[0],n=e[1],i=e[2];return t[0]=r,t[1]=n,t[2]=i,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),t}function d(t,e,r,n){var i=e[0],a=e[1],u=e[2],o=e[3],s=r[0],l=r[1],f=r[2],h=r[3],c=void 0,d=void 0,v=void 0,_=void 0,p=void 0;return d=i*s+a*l+u*f+o*h,d<0&&(d=-d,s=-s,l=-l,f=-f,h=-h),1-d>1e-6?(c=Math.acos(d),v=Math.sin(c),_=Math.sin((1-n)*c)/v,p=Math.sin(n*c)/v):(_=1-n,p=n),t[0]=_*i+p*s,t[1]=_*a+p*l,t[2]=_*u+p*f,t[3]=_*o+p*h,t}function v(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],u=r*r+n*n+i*i+a*a,o=u?1/u:0;return t[0]=-r*o,t[1]=-n*o,t[2]=-i*o,t[3]=a*o,t}function _(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function p(t,e){var r=e[0]+e[4]+e[8],n=void 0;if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[3*i+i]&&(i=2);var a=(i+1)%3,u=(i+2)%3;n=Math.sqrt(e[3*i+i]-e[3*a+a]-e[3*u+u]+1),t[i]=.5*n,n=.5/n,t[3]=(e[3*a+u]-e[3*u+a])*n,t[a]=(e[3*a+i]+e[3*i+a])*n,t[u]=(e[3*u+i]+e[3*i+u])*n}return t}function m(t,e,r,n){var i=.5*Math.PI/180;e*=i,r*=i,n*=i;var a=Math.sin(e),u=Math.cos(e),o=Math.sin(r),s=Math.cos(r),l=Math.sin(n),f=Math.cos(n);return t[0]=a*s*f-u*o*l,t[1]=u*o*f+a*s*l,t[2]=u*s*l-a*o*f,t[3]=u*s*f+a*o*l,t}function g(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}Object.defineProperty(e,"__esModule",{value:!0}),e.setAxes=e.sqlerp=e.rotationTo=e.equals=e.exactEquals=e.normalize=e.sqrLen=e.squaredLength=e.len=e.length=e.lerp=e.dot=e.scale=e.mul=e.add=e.set=e.copy=e.fromValues=e.clone=void 0,e.create=i,e.identity=a,e.setAxisAngle=u,e.getAxisAngle=o,e.multiply=s,e.rotateX=l,e.rotateY=f,e.rotateZ=h,e.calculateW=c,e.slerp=d,e.invert=v,e.conjugate=_,e.fromMat3=p,e.fromEuler=m,e.str=g;var E=r(0),M=n(E),b=r(1),y=n(b),x=r(2),T=n(x),A=r(3),R=n(A),w=(e.clone=R.clone,e.fromValues=R.fromValues,e.copy=R.copy,e.set=R.set,e.add=R.add,e.mul=s,e.scale=R.scale,e.dot=R.dot,e.lerp=R.lerp,e.length=R.length),P=(e.len=w,e.squaredLength=R.squaredLength),S=(e.sqrLen=P,e.normalize=R.normalize);e.exactEquals=R.exactEquals,e.equals=R.equals,e.rotationTo=function(){var t=T.create(),e=T.fromValues(1,0,0),r=T.fromValues(0,1,0);return function(n,i,a){var o=T.dot(i,a);return o<-.999999?(T.cross(t,e,i),T.len(t)<1e-6&&T.cross(t,r,i),T.normalize(t,t),u(n,t,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(T.cross(t,i,a),n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=1+o,S(n,n))}}(),e.sqlerp=function(){var t=i(),e=i();return function(r,n,i,a,u,o){return d(t,n,u,o),d(e,i,a,o),d(r,t,e,2*o*(1-o)),r}}(),e.setAxes=function(){var t=y.create();return function(e,r,n,i){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=i[0],t[4]=i[1],t[7]=i[2],t[2]=-r[0],t[5]=-r[1],t[8]=-r[2],S(e,p(e,t))}}()},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(){var t=new B.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t}function a(t){var e=new B.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e}function u(t,e){var r=new B.ARRAY_TYPE(2);return r[0]=t,r[1]=e,r}function o(t,e){return t[0]=e[0],t[1]=e[1],t}function s(t,e,r){return t[0]=e,t[1]=r,t}function l(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t}function f(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}function h(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t}function c(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t}function d(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t}function v(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t}function _(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t}function p(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t}function m(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t}function g(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t}function E(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t}function M(t,e){var r=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(r*r+n*n)}function b(t,e){var r=e[0]-t[0],n=e[1]-t[1];return r*r+n*n}function y(t){var e=t[0],r=t[1];return Math.sqrt(e*e+r*r)}function x(t){var e=t[0],r=t[1];return e*e+r*r}function T(t,e){return t[0]=-e[0],t[1]=-e[1],t}function A(t,e){return t[0]=1/e[0],t[1]=1/e[1],t}function R(t,e){var r=e[0],n=e[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i),t}function w(t,e){return t[0]*e[0]+t[1]*e[1]}function P(t,e,r){var n=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=n,t}function S(t,e,r,n){var i=e[0],a=e[1];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t}function O(t,e){e=e||1;var r=2*B.RANDOM()*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t}function I(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t}function N(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i+r[4],t[1]=r[1]*n+r[3]*i+r[5],t}function F(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[3]*i+r[6],t[1]=r[1]*n+r[4]*i+r[7],t}function L(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[4]*i+r[12],t[1]=r[1]*n+r[5]*i+r[13],t}function k(t){return"vec2("+t[0]+", "+t[1]+")"}function C(t,e){return t[0]===e[0]&&t[1]===e[1]}function D(t,e){var r=t[0],n=t[1],i=e[0],a=e[1];return Math.abs(r-i)<=B.EPSILON*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(n-a)<=B.EPSILON*Math.max(1,Math.abs(n),Math.abs(a))}Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=i,e.clone=a,e.fromValues=u,e.copy=o,e.set=s,e.add=l,e.subtract=f,e.multiply=h,e.divide=c,e.ceil=d,e.floor=v,e.min=_,e.max=p,e.round=m,e.scale=g,e.scaleAndAdd=E,e.distance=M,e.squaredDistance=b,e.length=y,e.squaredLength=x,e.negate=T,e.inverse=A,e.normalize=R,e.dot=w,e.cross=P,e.lerp=S,e.random=O,e.transformMat2=I,e.transformMat2d=N,e.transformMat3=F,e.transformMat4=L,e.str=k,e.exactEquals=C,e.equals=D;var U=r(0),B=n(U);e.len=y,e.sub=f,e.mul=h,e.div=c,e.dist=M,e.sqrDist=b,e.sqrLen=x,e.forEach=function(){var t=i();return function(e,r,n,i,a,u){var o=void 0,s=void 0;for(r||(r=2),n||(n=0),s=i?Math.min(i*r+n,e.length):e.length,o=n;o<s;o+=r)t[0]=e[o],t[1]=e[o+1],a(t,t,u),e[o]=t[0],e[o+1]=t[1];return e}}()}])})},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(3),l=n(s),f=function(){function t(e,r){(0,a.default)(this,t),this._mesh=e,this._shader=r}return(0,o.default)(t,[{key:"draw",value:function(){this._shader.bind(),l.default.draw(this.mesh)}},{key:"mesh",get:function(){return this._mesh}},{key:"shader",get:function(){return this._shader}}]),t}();e.default=f,t.exports=e.default},function(t,e){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(3),l=n(s),f=r(8),h=r(65),c=n(h),d=void 0,v=35044,_=function(t){var e=void 0;return void 0!==t.buffer?e=t.buffer:(e=d.createBuffer(),t.buffer=e),e},p=function(t,e){for(var r=[],n=0;n<t.length;n+=e){for(var i=[],a=0;a<e;a++)i.push(t[n+a]);r.push(i)}return r},m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,a.default)(this,t),d=l.default.gl,this.drawType=e,this._attributes=[],this._numInstance=-1,this._enabledVertexAttribute=[],this._indices=[],this._faces=[],this._bufferChanged=[],this._hasIndexBufferChanged=!1,this._hasVAO=!1,this._isInstanced=!1,this._extVAO=!!l.default.gl.createVertexArray,this._useVAO=!!this._extVAO&&r}return(0,o.default)(t,[{key:"bufferVertex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return this.bufferData(t,"aVertexPosition",3,e),this.normals.length<this.vertices.length&&this.bufferNormal(t,e),this}},{key:"bufferTexCoord",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return this.bufferData(t,"aTextureCoord",2,e),this}},{key:"bufferNormal",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return this.bufferData(t,"aNormal",3,e),this}},{key:"bufferIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._drawType=e?d.DYNAMIC_DRAW:d.STATIC_DRAW,this._indices=new Uint16Array(t),this._numItems=this._indices.length,this}},{key:"bufferFlattenData",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=p(t,r);return this.bufferData(a,e,r,n=v,i=!1),this}},{key:"bufferData",value:function e(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=0,o=i,e=[];for(n||(n=t[0].length),this._isInstanced=a||this._isInstanced,u=0;u<t.length;u++)for(var s=0;s<t[u].length;s++)e.push(t[u][s]);var l=new Float32Array(e),f=this.getAttribute(r);return f?(f.itemSize=n,f.dataArray=l,f.source=t):this._attributes.push({name:r,source:t,itemSize:n,drawType:o,dataArray:l,isInstanced:a}),this._bufferChanged.push(r),this}},{key:"bufferInstance",value:function(t,e){if(!l.default.gl.vertexAttribDivisor)return void console.error("Extension : ANGLE_instanced_arrays is not supported with this device !");var r=t[0].length;this._numInstance=t.length,this.bufferData(t,e,r,v,!0)}},{key:"bind",value:function(t){this.generateBuffers(t),this.hasVAO?d.bindVertexArray(this.vao):(this.attributes.forEach(function(t){d.bindBuffer(d.ARRAY_BUFFER,t.buffer);var e=t.attrPosition;d.vertexAttribPointer(e,t.itemSize,d.FLOAT,!1,0,0),t.isInstanced&&d.vertexAttribDivisor(e,1)}),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,this.iBuffer))}},{key:"generateBuffers",value:function(t){var e=this;0!=this._bufferChanged.length&&(this._useVAO?(this._vao||(this._vao=d.createVertexArray()),d.bindVertexArray(this._vao),this._attributes.forEach(function(r){if(e._bufferChanged.indexOf(r.name)!==-1){var n=_(r);d.bindBuffer(d.ARRAY_BUFFER,n),d.bufferData(d.ARRAY_BUFFER,r.dataArray,r.drawType);var i=(0,c.default)(d,t,r.name);d.enableVertexAttribArray(i),d.vertexAttribPointer(i,r.itemSize,d.FLOAT,!1,0,0),r.attrPosition=i,r.isInstanced&&d.vertexAttribDivisor(i,1)}}),this._updateIndexBuffer(),d.bindVertexArray(null),this._hasVAO=!0):(this._attributes.forEach(function(r){if(e._bufferChanged.indexOf(r.name)!==-1){var n=_(r);d.bindBuffer(d.ARRAY_BUFFER,n),d.bufferData(d.ARRAY_BUFFER,r.dataArray,r.drawType);var i=(0,c.default)(d,t,r.name);d.enableVertexAttribArray(i),d.vertexAttribPointer(i,r.itemSize,d.FLOAT,!1,0,0),r.attrPosition=i,r.isInstanced&&d.vertexAttribDivisor(i,1)}}),this._updateIndexBuffer()),this._hasIndexBufferChanged=!1,this._bufferChanged=[])}},{key:"unbind",value:function(){this._useVAO&&d.bindVertexArray(null),this._attributes.forEach(function(t){t.isInstanced&&d.vertexAttribDivisor(t.attrPosition,0)})}},{key:"_updateIndexBuffer",value:function(){this._hasIndexBufferChanged||(this.iBuffer||(this.iBuffer=d.createBuffer()),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,this.iBuffer),d.bufferData(d.ELEMENT_ARRAY_BUFFER,this._indices,this._drawType),this.iBuffer.itemSize=1,this.iBuffer.numItems=this._numItems)}},{key:"computeNormals",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.generateFaces(),t?this._computeFaceNormals():this._computeVertexNormals()}},{key:"_computeFaceNormals",value:function(){for(var t=void 0,e=void 0,r=[],n=0;n<this._indices.length;n+=3){t=n/3,e=this._faces[t];var i=e.normal;r[e.indices[0]]=i,r[e.indices[1]]=i,r[e.indices[2]]=i}this.bufferNormal(r)}},{key:"_computeVertexNormals",value:function(){for(var t=void 0,e=f.vec3.create(),r=[],n=this.vertices,i=0;i<n.length;i++){f.vec3.set(e,0,0,0);for(var a=0;a<this._faces.length;a++)t=this._faces[a],t.indices.indexOf(i)>=0&&(e[0]+=t.normal[0],e[1]+=t.normal[1],e[2]+=t.normal[2]);f.vec3.normalize(e,e),r.push([e[0],e[1],e[2]])}this.bufferNormal(r)}},{key:"generateFaces",value:function(){for(var t=void 0,e=void 0,r=void 0,n=void 0,i=void 0,a=void 0,u=(f.vec3.create(),f.vec3.create(),f.vec3.create(),this.vertices),o=0;o<this._indices.length;o+=3){t=this._indices[o],e=this._indices[o+1],r=this._indices[o+2],n=u[t],i=u[e],a=u[r];var s={indices:[t,e,r],vertices:[n,i,a]};this._faces.push(s)}}},{key:"getAttribute",value:function(t){return this._attributes.find(function(e){return e.name===t})}},{key:"getSource",value:function(t){var e=this.getAttribute(t);return e?e.source:[]}},{key:"vertices",get:function(){
	return this.getSource("aVertexPosition")}},{key:"normals",get:function(){return this.getSource("aNormal")}},{key:"coords",get:function(){return this.getSource("aTextureCoord")}},{key:"indices",get:function(){return this._indices}},{key:"vertexSize",get:function(){return this.vertices.length}},{key:"faces",get:function(){return this._faces}},{key:"attributes",get:function(){return this._attributes}},{key:"hasVAO",get:function(){return this._hasVAO}},{key:"vao",get:function(){return this._vao}},{key:"numInstance",get:function(){return this._numInstance}},{key:"isInstanced",get:function(){return this._isInstanced}}]),t}();e.default=m,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(4),a=n(i),u=r(115),o=n(u);e.default=function s(t,e,r){null===t&&(t=Function.prototype);var n=(0,o.default)(t,e);if(void 0===n){var i=(0,a.default)(t);return null===i?void 0:s(i,e,r)}if("value"in n)return n.value;var u=n.get;if(void 0!==u)return u.call(r)}},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e,r){var n=r(133),i=r(38);t.exports=function(t){return n(i(t))}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(11),a=n(i),u={},o=void 0;u.plane=function(t,e,r){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"xy",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4,u=[],o=[],s=[],l=[],f=t/r,h=e/r,c=1/r,d=.5*-t,v=.5*-e,_=0,p=0;p<r;p++)for(var m=0;m<r;m++){var g=f*p+d,E=h*m+v,M=p/r,b=m/r;"xz"===n?(u.push([g,0,E+h]),u.push([g+f,0,E+h]),u.push([g+f,0,E]),u.push([g,0,E]),o.push([M,1-(b+c)]),o.push([M+c,1-(b+c)]),o.push([M+c,1-b]),o.push([M,1-b]),l.push([0,1,0]),l.push([0,1,0]),l.push([0,1,0]),l.push([0,1,0])):"yz"===n?(u.push([0,E,g]),u.push([0,E,g+f]),u.push([0,E+h,g+f]),u.push([0,E+h,g]),o.push([M,b]),o.push([M+c,b]),o.push([M+c,b+c]),o.push([M,b+c]),l.push([1,0,0]),l.push([1,0,0]),l.push([1,0,0]),l.push([1,0,0])):(u.push([g,E,0]),u.push([g+f,E,0]),u.push([g+f,E+h,0]),u.push([g,E+h,0]),o.push([M,b]),o.push([M+c,b]),o.push([M+c,b+c]),o.push([M,b+c]),l.push([0,0,1]),l.push([0,0,1]),l.push([0,0,1]),l.push([0,0,1])),s.push(4*_+0),s.push(4*_+1),s.push(4*_+2),s.push(4*_+0),s.push(4*_+2),s.push(4*_+3),_++}var y=new a.default(i);return y.bufferVertex(u),y.bufferTexCoord(o),y.bufferIndex(s),y.bufferNormal(l),y},u.sphere=function(t,e){function r(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=r/e*Math.PI-.5*Math.PI,u=n/e*Math.PI*2,o=i?1:t,s=[];s[1]=Math.sin(a)*o;var l=Math.cos(a)*o;s[0]=Math.cos(u)*l,s[2]=Math.sin(u)*l;var f=1e4;return s[0]=Math.floor(s[0]*f)/f,s[1]=Math.floor(s[1]*f)/f,s[2]=Math.floor(s[2]*f)/f,s}for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,u=[],o=[],s=[],l=[],f=1/e,h=0,c=0;c<e;c++)for(var d=0;d<e;d++){u.push(r(c,d)),u.push(r(c+1,d)),u.push(r(c+1,d+1)),u.push(r(c,d+1)),l.push(r(c,d,!0)),l.push(r(c+1,d,!0)),l.push(r(c+1,d+1,!0)),l.push(r(c,d+1,!0));var v=d/e,_=c/e;o.push([1-v,_]),o.push([1-v,_+f]),o.push([1-v-f,_+f]),o.push([1-v-f,_]),s.push(4*h+0),s.push(4*h+1),s.push(4*h+2),s.push(4*h+0),s.push(4*h+2),s.push(4*h+3),h++}n&&s.reverse();var p=new a.default(i);return p.bufferVertex(u),p.bufferTexCoord(o),p.bufferIndex(s),p.bufferNormal(l),p},u.cube=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;e=e||t,r=r||t;var i=t/2,u=e/2,o=r/2,s=[],l=[],f=[],h=[],c=0;s.push([-i,u,-o]),s.push([i,u,-o]),s.push([i,-u,-o]),s.push([-i,-u,-o]),h.push([0,0,-1]),h.push([0,0,-1]),h.push([0,0,-1]),h.push([0,0,-1]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++,s.push([i,u,-o]),s.push([i,u,o]),s.push([i,-u,o]),s.push([i,-u,-o]),h.push([1,0,0]),h.push([1,0,0]),h.push([1,0,0]),h.push([1,0,0]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++,s.push([i,u,o]),s.push([-i,u,o]),s.push([-i,-u,o]),s.push([i,-u,o]),h.push([0,0,1]),h.push([0,0,1]),h.push([0,0,1]),h.push([0,0,1]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++,s.push([-i,u,o]),s.push([-i,u,-o]),s.push([-i,-u,-o]),s.push([-i,-u,o]),h.push([-1,0,0]),h.push([-1,0,0]),h.push([-1,0,0]),h.push([-1,0,0]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++,s.push([i,u,-o]),s.push([-i,u,-o]),s.push([-i,u,o]),s.push([i,u,o]),h.push([0,1,0]),h.push([0,1,0]),h.push([0,1,0]),h.push([0,1,0]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++,s.push([i,-u,o]),s.push([-i,-u,o]),s.push([-i,-u,-o]),s.push([i,-u,-o]),h.push([0,-1,0]),h.push([0,-1,0]),h.push([0,-1,0]),h.push([0,-1,0]),l.push([0,0]),l.push([1,0]),l.push([1,1]),l.push([0,1]),f.push(4*c+0),f.push(4*c+1),f.push(4*c+2),f.push(4*c+0),f.push(4*c+2),f.push(4*c+3),c++;var d=new a.default(n);return d.bufferVertex(s),d.bufferTexCoord(l),d.bufferIndex(f),d.bufferNormal(h),d},u.skybox=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,r=[],n=[],i=[],u=[],o=0;r.push([t,t,-t]),r.push([-t,t,-t]),r.push([-t,-t,-t]),r.push([t,-t,-t]),u.push([0,0,-1]),u.push([0,0,-1]),u.push([0,0,-1]),u.push([0,0,-1]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3),o++,r.push([t,-t,-t]),r.push([t,-t,t]),r.push([t,t,t]),r.push([t,t,-t]),u.push([1,0,0]),u.push([1,0,0]),u.push([1,0,0]),u.push([1,0,0]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3),o++,r.push([-t,t,t]),r.push([t,t,t]),r.push([t,-t,t]),r.push([-t,-t,t]),u.push([0,0,1]),u.push([0,0,1]),u.push([0,0,1]),u.push([0,0,1]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3),o++,r.push([-t,-t,t]),r.push([-t,-t,-t]),r.push([-t,t,-t]),r.push([-t,t,t]),u.push([-1,0,0]),u.push([-1,0,0]),u.push([-1,0,0]),u.push([-1,0,0]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3),o++,r.push([t,t,t]),r.push([-t,t,t]),r.push([-t,t,-t]),r.push([t,t,-t]),u.push([0,1,0]),u.push([0,1,0]),u.push([0,1,0]),u.push([0,1,0]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3),o++,r.push([t,-t,-t]),r.push([-t,-t,-t]),r.push([-t,-t,t]),r.push([t,-t,t]),u.push([0,-1,0]),u.push([0,-1,0]),u.push([0,-1,0]),u.push([0,-1,0]),n.push([0,0]),n.push([1,0]),n.push([1,1]),n.push([0,1]),i.push(4*o+0),i.push(4*o+1),i.push(4*o+2),i.push(4*o+0),i.push(4*o+2),i.push(4*o+3);var s=new a.default(e);return s.bufferVertex(r),s.bufferTexCoord(n),s.bufferIndex(i),s.bufferNormal(u),s},u.bigTriangle=function(){if(!o){var t=[2,1,0],e=[[-1,-1],[-1,4],[4,-1]];o=new a.default,o.bufferData(e,"aPosition",2),o.bufferIndex(t)}return o},e.default=u,t.exports=e.default},function(t,e,r){t.exports=!r(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(23),i=r(69),a=r(49),u=Object.defineProperty;e.f=r(16)?Object.defineProperty:function(t,e,r){if(n(t),e=a(e,!0),n(r),i)try{return u(t,e,r)}catch(o){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(13),i=r(10),a=r(67),u=r(20),o="prototype",s=function(t,e,r){var l,f,h,c=t&s.F,d=t&s.G,v=t&s.S,_=t&s.P,p=t&s.B,m=t&s.W,g=d?i:i[e]||(i[e]={}),E=g[o],M=d?n:v?n[e]:(n[e]||{})[o];d&&(r=e);for(l in r)f=!c&&M&&void 0!==M[l],f&&l in g||(h=f?M[l]:r[l],g[l]=d&&"function"!=typeof M[l]?r[l]:p&&f?a(h,n):m&&M[l]==h?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[o]=t[o],e}(h):_&&"function"==typeof h?a(Function.call,h):h,_&&((g.virtual||(g.virtual={}))[l]=h,t&s.R&&E&&!E[l]&&u(E,l,h)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(18),i=r(28);t.exports=r(16)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(47)("wks"),i=r(29),a=r(13).Symbol,u="function"==typeof a,o=t.exports=function(t){return n[t]||(n[t]=u&&a[t]||(u?a:i)("Symbol."+t))};o.store=n},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=60,a=function(){function t(){r(this,t),this._delayTasks=[],this._nextTasks=[],this._deferTasks=[],this._highTasks=[],this._usurpTask=[],this._enterframeTasks=[],this._idTable=0,this._loop()}return n(t,[{key:"addEF",value:function(t,e){e=e||[];var r=this._idTable;return this._enterframeTasks[r]={func:t,params:e},this._idTable++,r}},{key:"removeEF",value:function(t){return void 0!==this._enterframeTasks[t]&&(this._enterframeTasks[t]=null),-1}},{key:"delay",value:function(t,e,r){var n=(new Date).getTime(),i={func:t,params:e,delay:r,time:n};this._delayTasks.push(i)}},{key:"defer",value:function(t,e){var r={func:t,params:e};this._deferTasks.push(r)}},{key:"next",value:function(t,e){var r={func:t,params:e};this._nextTasks.push(r)}},{key:"usurp",value:function(t,e){var r={func:t,params:e};this._usurpTask.push(r)}},{key:"_process",value:function(){var t=0,e=void 0,r=void 0,n=void 0;for(t=0;t<this._enterframeTasks.length;t++)e=this._enterframeTasks[t],null!==e&&void 0!==e&&e.func(e.params);for(;this._highTasks.length>0;)e=this._highTasks.pop(),e.func(e.params);var a=(new Date).getTime();for(t=0;t<this._delayTasks.length;t++)e=this._delayTasks[t],a-e.time>e.delay&&(e.func(e.params),this._delayTasks.splice(t,1));for(a=(new Date).getTime(),r=1e3/i;this._deferTasks.length>0;){if(e=this._deferTasks.shift(),n=(new Date).getTime(),!(n-a<r)){this._deferTasks.unshift(e);break}e.func(e.params)}for(a=(new Date).getTime(),r=1e3/i;this._usurpTask.length>0;)e=this._usurpTask.shift(),n=(new Date).getTime(),n-a<r&&e.func(e.params);this._highTasks=this._highTasks.concat(this._nextTasks),this._nextTasks=[],this._usurpTask=[]}},{key:"_loop",value:function(){var t=this;this._process(),window.requestAnimationFrame(function(){return t._loop()})}}]),t}(),u=new a;e.default=u},function(t,e,r){var n=r(25);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(7),l=n(s),f=r(31),h=n(f),c=r(64),d=n(c),v=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(0,a.default)(this,t),this.shader=new l.default(d.default.bigTriangleVert,e),this._width=r,this._height=n,this._uniforms={},this._hasOwnFbo=this._width>0&&this._width>0,this._uniforms={},this._hasOwnFbo&&(this._fbo=new h.default(this._width,this.height,mParmas))}return(0,o.default)(t,[{key:"uniform",value:function(t,e){this._uniforms[t]=e}},{key:"render",value:function(t){this.shader.bind(),this.shader.uniform("texture","uniform1i",0),t.bind(0),this.shader.uniform(this._uniforms)}},{key:"width",get:function(){return this._width}},{key:"height",get:function(){return this._height}},{key:"fbo",get:function(){return this._fbo}},{key:"hasFbo",get:function(){return this._hasOwnFbo}}]),t}();e.default=v,t.exports=e.default},function(t,e,r){var n=r(74),i=r(39);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}"},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){return 0!==t&&!(t&t-1)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),o=r(2),s=n(o),l=r(3),f=n(l),h=r(32),c=n(h),d=void 0,v=void 0,_=!1,p=void 0,m=function(){return!!f.default.webgl2||(p=f.default.getExtension("WEBGL_draw_buffers"),!!p)},g=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];(0,u.default)(this,t),d=f.default.gl,v=f.default.checkExtension("WEBGL_depth_texture"),this.width=e,this.height=r,this._multipleTargets=a,this.magFilter=n.magFilter||d.LINEAR,this.minFilter=n.minFilter||d.LINEAR_MIPMAP_NEAREST,this.wrapS=n.wrapS||d.CLAMP_TO_EDGE,this.wrapT=n.wrapT||d.CLAMP_TO_EDGE,this.useDepth=n.useDepth||!0,this.useStencil=n.useStencil||!1,this.texelType=n.type,i(this.width)&&i(this.height)||(this.wrapS=this.wrapT=d.CLAMP_TO_EDGE,this.minFilter===d.LINEAR_MIPMAP_NEAREST&&(this.minFilter=d.LINEAR)),_||m(),this._init()}return(0,s.default)(t,[{key:"_init",value:function(){var t=d.UNSIGNED_BYTE;if(this.texelType&&(t=this.texelType),this.texelType=t,this._textures=[],this._initTextures(),this.frameBuffer=d.createFramebuffer(),d.bindFramebuffer(d.FRAMEBUFFER,this.frameBuffer),f.default.webgl2){for(var e=[],r=0;r<this._textures.length;r++)d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,d.COLOR_ATTACHMENT0+r,d.TEXTURE_2D,this._textures[r].texture,0),e.push(d["COLOR_ATTACHMENT"+r]);d.drawBuffers(e),d.framebufferTexture2D(d.DRAW_FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,this.glDepthTexture.texture,0)}else{for(var n=0;n<this._textures.length;n++)d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0+n,d.TEXTURE_2D,this._textures[n].texture,0);this._multipleTargets&&p.drawBuffersWEBGL([p.COLOR_ATTACHMENT0_WEBGL,p.COLOR_ATTACHMENT1_WEBGL,p.COLOR_ATTACHMENT2_WEBGL,p.COLOR_ATTACHMENT3_WEBGL]),v&&d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.TEXTURE_2D,this.glDepthTexture.texture,0)}if(this.minFilter===d.LINEAR_MIPMAP_NEAREST)for(var i=0;i<this._textures.length;i++)d.bindTexture(d.TEXTURE_2D,this._textures[i].texture),d.generateMipmap(d.TEXTURE_2D);var a=d.checkFramebufferStatus(d.FRAMEBUFFER);a!=d.FRAMEBUFFER_COMPLETE&&console.log("GL_FRAMEBUFFER_COMPLETE failed, CANNOT use Framebuffer"),d.bindTexture(d.TEXTURE_2D,null),d.bindRenderbuffer(d.RENDERBUFFER,null),d.bindFramebuffer(d.FRAMEBUFFER,null),this.clear()}},{key:"_initTextures",value:function(){for(var t=(this._multipleTargets?4:1,0);t<4;t++){var e=this._createTexture();this._textures.push(e)}f.default.webgl2?this.glDepthTexture=this._createTexture(d.DEPTH_COMPONENT16,d.UNSIGNED_SHORT,d.DEPTH_COMPONENT,!0):this.glDepthTexture=this._createTexture(d.DEPTH_COMPONENT,d.UNSIGNED_SHORT)}},{key:"_createTexture",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];void 0===t&&(t=d.RGBA),void 0===e&&(e=this.texelType),r||(r=t);var i=d.createTexture(),a=new c.default(i,(!0)),u=n?f.default.NEAREST:this.magFilter,o=n?f.default.NEAREST:this.minFilter;return d.bindTexture(d.TEXTURE_2D,i),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,o),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,this.wrapS),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,this.wrapT),d.texImage2D(d.TEXTURE_2D,0,t,this.width,this.height,0,r,e,null),d.bindTexture(d.TEXTURE_2D,null),a}},{key:"bind",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&f.default.viewport(0,0,this.width,this.height),d.bindFramebuffer(d.FRAMEBUFFER,this.frameBuffer)}},{key:"unbind",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&f.default.viewport(0,0,f.default.width,f.default.height),d.bindFramebuffer(d.FRAMEBUFFER,null)}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this.bind(),f.default.clear(t,e,r,n),this.unbind()}},{key:"getTexture",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this._textures[t]}},{key:"getDepthTexture",value:function(){return this.glDepthTexture}},{key:"minFilter",value:function(t){return t!==d.LINEAR&&t!==d.NEAREST&&t!==d.LINEAR_MIPMAP_NEAREST?this:(this.minFilter=t,this)}},{key:"magFilter",value:function(t){return t!==d.LINEAR&&t!==d.NEAREST&&t!==d.LINEAR_MIPMAP_NEAREST?this:(this.magFilter=t,this)}},{key:"wrapS",value:function(t){return t!==d.CLAMP_TO_EDGE&&t!==d.REPEAT&&t!==d.MIRRORED_REPEAT?this:(this.wrapS=t,this)}},{key:"wrapT",value:function(t){return t!==d.CLAMP_TO_EDGE&&t!==d.REPEAT&&t!==d.MIRRORED_REPEAT?this:(this.wrapT=t,this)}}]),t}();e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){return 0!==t&&!(t&t-1)}function a(t){var e=t.width||t.videoWidth,r=t.height||t.videoHeight;return!(!e||!r)&&(i(e)&&i(r))}Object.defineProperty(e,"__esModule",{value:!0});var u=r(1),o=n(u),s=r(2),l=n(s),f=r(3),h=n(f),c=void 0,d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((0,o.default)(this,t),c=h.default.gl,r)this._texture=e;else{this._mSource=e,this._texture=c.createTexture(),this._isVideo="VIDEO"===e.tagName,this._premultiplyAlpha=!0,this._magFilter=n.magFilter||c.LINEAR,this._minFilter=n.minFilter||c.NEAREST_MIPMAP_LINEAR,this._wrapS=n.wrapS||c.MIRRORED_REPEAT,this._wrapT=n.wrapT||c.MIRRORED_REPEAT;var i=e.width||e.videoWidth;i?a(e)||(this._wrapS=this._wrapT=c.CLAMP_TO_EDGE,this._minFilter===c.NEAREST_MIPMAP_LINEAR&&(this._minFilter=c.LINEAR)):(this._wrapS=this._wrapT=c.CLAMP_TO_EDGE,this._minFilter===c.NEAREST_MIPMAP_LINEAR&&(this._minFilter=c.LINEAR)),c.bindTexture(c.TEXTURE_2D,this._texture),c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!0),e.exposure?c.texImage2D(c.TEXTURE_2D,0,c.RGBA,e.shape[0],e.shape[1],0,c.RGBA,c.FLOAT,e.data):c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,e),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,this._magFilter),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,this._minFilter),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,this._wrapS),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,this._wrapT);var u=h.default.getExtension("EXT_texture_filter_anisotropic");if(u){var s=c.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT);c.texParameterf(c.TEXTURE_2D,u.TEXTURE_MAX_ANISOTROPY_EXT,s)}this._canGenerateMipmap()&&c.generateMipmap(c.TEXTURE_2D),c.bindTexture(c.TEXTURE_2D,null)}}return(0,l.default)(t,[{key:"generateMipmap",value:function(){this._canGenerateMipmap()&&(c.bindTexture(c.TEXTURE_2D,this._texture),c.generateMipmap(c.TEXTURE_2D),c.bindTexture(c.TEXTURE_2D,null))}},{key:"updateTexture",value:function(t){t&&(this._mSource=t),c.bindTexture(c.TEXTURE_2D,this._texture),c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!0),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,this._mSource),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,this._magFilter),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,this._minFilter),this._canGenerateMipmap()&&c.generateMipmap(c.TEXTURE_2D),c.bindTexture(c.TEXTURE_2D,null)}},{key:"bind",value:function(t){void 0===t&&(t=0),h.default.shader&&(c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_2D,this._texture),this._bindIndex=t)}},{key:"_canGenerateMipmap",value:function(){return this._minFilter===c.LINEAR_MIPMAP_NEAREST||this._minFilter===c.NEAREST_MIPMAP_LINEAR||this._minFilter===c.LINEAR_MIPMAP_LINEAR||this._minFilter===c.NEAREST_MIPMAP_NEAREST}},{key:"minFilter",set:function(t){return t!==c.LINEAR&&t!==c.NEAREST&&t!==c.NEAREST_MIPMAP_LINEAR&&t!==c.NEAREST_MIPMAP_LINEAR&&t!==c.LINEAR_MIPMAP_LINEAR&&t!==c.NEAREST_MIPMAP_NEAREST?this:(this._minFilter=t,c.bindTexture(c.TEXTURE_2D,this._texture),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,this._minFilter),void c.bindTexture(c.TEXTURE_2D,null))},get:function(){return this._minFilter}},{key:"magFilter",set:function(t){return t!==c.LINEAR&&t!==c.NEAREST?this:(this._magFilter=t,c.bindTexture(c.TEXTURE_2D,this._texture),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,this._magFilter),void c.bindTexture(c.TEXTURE_2D,null))},get:function(){return this._magFilter}},{key:"wrapS",set:function(t){return t!==c.CLAMP_TO_EDGE&&t!==c.REPEAT&&t!==c.MIRRORED_REPEAT?this:(this._wrapS=t,c.bindTexture(c.TEXTURE_2D,this._texture),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,this._wrapS),void c.bindTexture(c.TEXTURE_2D,null))},get:function(){return this._wrapS}},{key:"wrapT",set:function(t){return t!==c.CLAMP_TO_EDGE&&t!==c.REPEAT&&t!==c.MIRRORED_REPEAT?this:(this._wrapT=t,c.bindTexture(c.TEXTURE_2D,this._texture),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,this._wrapT),void c.bindTexture(c.TEXTURE_2D,null))},get:function(){return this._wrapT}},{key:"premultiplyAlpha",set:function(t){this._premultiplyAlpha=t,c.bindTexture(c.TEXTURE_2D,this._texture),console.log("premultiplyAlpha:",t),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._premultiplyAlpha),c.bindTexture(c.TEXTURE_2D,null)},get:function(){return this._premultiplyAlpha}},{key:"texture",get:function(){return this._texture}}]),t}(),v=void 0,_=void 0,p=void 0;d.whiteTexture=function(){if(void 0===v){var t=document.createElement("canvas");t.width=t.height=4;var e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,4,4),v=new d(t)}return v},d.greyTexture=function(){if(void 0===_){var t=document.createElement("canvas");t.width=t.height=4;var e=t.getContext("2d");e.fillStyle="rgb(127, 127, 127)",e.fillRect(0,0,4,4),_=new d(t)}return _},d.blackTexture=function(){if(void 0===p){var t=document.createElement("canvas");t.width=t.height=4;var e=t.getContext("2d");e.fillStyle="rgb(127, 127, 127)",e.fillRect(0,0,4,4),p=new d(t)}return p},e.default=d,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(8),l=function(){function t(){(0,a.default)(this,t),this._matrix=s.mat4.create(),this._quat=s.quat.create(),this._orientation=s.mat4.create(),this._projection=s.mat4.create(),this.position=vec3.create()}return(0,o.default)(t,[{key:"lookAt",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,1,0];this._eye=vec3.clone(t),this._center=vec3.clone(e),vec3.copy(this.position,t),s.mat4.identity(this._matrix),s.mat4.lookAt(this._matrix,t,e,r)}},{key:"setFromOrientation",value:function(t,e,r,n){s.quat.set(this._quat,t,e,r,n),s.mat4.fromQuat(this._orientation,this._quat),s.mat4.translate(this._matrix,this._orientation,this.positionOffset)}},{key:"setProjection",value:function(t){this._projection=s.mat4.clone(t)}},{key:"setView",value:function(t){this._matrix=s.mat4.clone(t)}},{key:"setFromViewProj",value:function(t,e){this.setView(t),this.setProjection(e)}},{key:"matrix",get:function(){return this._matrix}},{key:"viewMatrix",get:function(){return this._matrix}},{key:"projection",get:function(){return this._projection}},{key:"projectionMatrix",get:function(){return this._projection}},{key:"eye",get:function(){return this._eye}},{key:"center",get:function(){return this._center}}]),t}();e.default=l,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(5),d=n(c),v=r(33),_=n(v),p=r(57),m=n(p),g=r(8),E=g.mat4.create(),M=g.vec3.create(),b=function(t){function e(){return(0,o.default)(this,e),(0,h.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,l.default)(e,[{key:"setPerspective",value:function(t,e,r,n){this._fov=t,this._near=r,this._far=n,this._aspectRatio=e,g.mat4.perspective(this._projection,t,e,r,n)}},{key:"setAspectRatio",value:function(t){this._aspectRatio=t,g.mat4.perspective(this.projection,this._fov,t,this._near,this._far)}},{key:"generateRay",value:function(t,e){var r=this.projectionMatrix,n=this.viewMatrix;return g.mat4.multiply(E,r,n),g.mat4.invert(E,E),g.vec3.transformMat4(M,t,E),g.vec3.sub(M,M,this.position),g.vec3.normalize(M,M),e?(e.origin=this.position,e.direction=M):e=new m.default(this.position,M),e}}]),e}(_.default);e.default=b,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(0,a.default)(this,t),this._req=new XMLHttpRequest,this._req.addEventListener("load",function(t){return e._onLoaded(t)}),this._req.addEventListener("progress",function(t){return e._onProgress(t)}),r&&(this._req.responseType="arraybuffer")}return(0,o.default)(t,[{key:"load",value:function(t,e){console.log("Loading : ",t),this._callback=e,this._req.open("GET",t),this._req.send()}},{key:"_onLoaded",value:function(){this._callback(this._req.response)}},{key:"_onProgress",value:function(){}}]),t}();e.default=s,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(22),l=n(s),f=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;(0,a.default)(this,t),this.easing=n,this._value=e,this._targetValue=e,this._efIndex=l.default.addEF(function(){return r._update()})}return(0,o.default)(t,[{key:"_update",value:function(){var t=1e-4;this._checkLimit(),this._value+=(this._targetValue-this._value)*this.easing,Math.abs(this._targetValue-this._value)<t&&(this._value=this._targetValue)}},{key:"setTo",value:function(t){this._targetValue=this._value=t}},{key:"add",value:function(t){this._targetValue+=t}},{key:"limit",value:function(t,e){return t>e?void this.limit(e,t):(this._min=t,this._max=e,void this._checkLimit())}},{key:"_checkLimit",value:function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)}},{key:"destroy",value:function(){l.default.removeEF(this._efIndex)}},{key:"value",set:function(t){this._targetValue=t},get:function(){return this._value}},{key:"targetValue",get:function(){return this._targetValue}}]),t}();e.default=f,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=r(118),a=n(i),u=r(117),o=n(u),s="function"==typeof o.default&&"symbol"==typeof a.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};e.default="function"==typeof o.default&&"symbol"===s(a.default)?function(t){return"undefined"==typeof t?"undefined":s(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":"undefined"==typeof t?"undefined":s(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,r){var n=r(23),i=r(139),a=r(39),u=r(46)("IE_PROTO"),o=function(){},s="prototype",l=function(){var t,e=r(68)("iframe"),n=a.length,i="<",u=">";for(e.style.display="none",r(132).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+u+"document.F=Object"+i+"/script"+u),t.close(),l=t.F;n--;)delete l[s][a[n]];return l()};t.exports=Object.create||function(t,e){var r;return null!==t?(o[s]=n(t),r=new o,o[s]=null,r[u]=t):r=l(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(44),i=r(28),a=r(14),u=r(49),o=r(17),s=r(69),l=Object.getOwnPropertyDescriptor;e.f=r(16)?l:function(t,e){if(t=a(t),e=u(e,!0),s)try{return l(t,e)}catch(r){}if(o(t,e))return i(!n.f.call(t,e),t[e])}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){var n=r(18).f,i=r(17),a=r(21)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},function(t,e,r){var n=r(47)("keys"),i=r(29);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){var n=r(13),i="__core-js_shared__",a=n[i]||(n[i]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(25);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(13),i=r(10),a=r(41),u=r(51),o=r(18).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:u.f(t)})}},function(t,e,r){e.f=r(21)},function(t,e){t.exports="// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"},function(t,e){t.exports="// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}"},function(t,e){t.exports="// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}"},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(3),l=n(s),f=r(158),h=n(f),c=void 0,d=131072,v=7,_=31,p=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if((0,a.default)(this,t),c=l.default.gl,n)return void(this.texture=e);
	var i=e.length>6;e[0].mipmapCount&&(i=e[0].mipmapCount>1),this.texture=c.createTexture(),this.magFilter=r.magFilter||c.LINEAR,this.minFilter=r.minFilter||c.LINEAR_MIPMAP_LINEAR,this.wrapS=r.wrapS||c.CLAMP_TO_EDGE,this.wrapT=r.wrapT||c.CLAMP_TO_EDGE,i||this.minFilter!=c.LINEAR_MIPMAP_LINEAR||(this.minFilter=c.LINEAR),c.bindTexture(c.TEXTURE_CUBE_MAP,this.texture);var u=[c.TEXTURE_CUBE_MAP_POSITIVE_X,c.TEXTURE_CUBE_MAP_NEGATIVE_X,c.TEXTURE_CUBE_MAP_POSITIVE_Y,c.TEXTURE_CUBE_MAP_NEGATIVE_Y,c.TEXTURE_CUBE_MAP_POSITIVE_Z,c.TEXTURE_CUBE_MAP_NEGATIVE_Z],o=1,s=0;if(o=e.length/6,this.numLevels=o,i)for(var f=0;f<6;f++)for(var h=0;h<o;h++)c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!1),s=f*o+h,e[s].shape?c.texImage2D(u[f],h,c.RGBA,e[s].shape[0],e[s].shape[1],0,c.RGBA,c.FLOAT,e[s].data):c.texImage2D(u[f],h,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,e[s]),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_S,this.wrapS),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_T,this.wrapT),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MAG_FILTER,this.magFilter),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MIN_FILTER,this.minFilter);else{for(var d=0,v=0;v<6;v++)d=v*o,c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!1),e[d].shape?c.texImage2D(u[v],0,c.RGBA,e[d].shape[0],e[d].shape[1],0,c.RGBA,c.FLOAT,e[d].data):c.texImage2D(u[v],0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,e[d]),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_S,this.wrapS),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_T,this.wrapT),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MAG_FILTER,this.magFilter),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MIN_FILTER,this.minFilter);c.generateMipmap(c.TEXTURE_CUBE_MAP)}c.bindTexture(c.TEXTURE_CUBE_MAP,null)}return(0,o.default)(t,[{key:"bind",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;l.default.shader&&(c.activeTexture(c.TEXTURE0+t),c.bindTexture(c.TEXTURE_CUBE_MAP,this.texture),c.uniform1i(l.default.shader.uniformTextures[t],t),this._bindIndex=t)}},{key:"unbind",value:function(){c.bindTexture(c.TEXTURE_CUBE_MAP,null)}}]),t}();p.parseDDS=function(t){var e=(0,h.default)(t),r=e.flags,n=new Int32Array(t,0,_),i=1;r&d&&(i=Math.max(1,n[v]));var a=e.images.map(function(e){var r=new Float32Array(t.slice(e.offset,e.offset+e.length));return{data:r,shape:e.shape,mipmapCount:i}});return new p(a)},e.default=p,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(5),d=n(c),v=r(33),_=n(v),p=r(8),m=function(t){function e(){(0,o.default)(this,e);var t=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this)),r=p.vec3.clone([0,0,15]),n=p.vec3.create(),i=p.vec3.clone([0,-1,0]);return t.lookAt(r,n,i),t.ortho(1,-1,1,-1),t}return(0,d.default)(e,t),(0,l.default)(e,[{key:"setBoundary",value:function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100;this.ortho(t,e,r,n,i,a)}},{key:"ortho",value:function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:100;this.left=t,this.right=e,this.top=r,this.bottom=n,mat4.ortho(this._projection,t,e,r,n,i,a)}}]),e}(_.default);e.default=m,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(8),l=s.vec3.create(),f=s.vec3.create(),h=s.vec3.create(),c=s.vec3.create(),d=s.vec3.create(),v=s.vec3.create(),_=s.vec3.create(),p=s.vec3.create(),m=function(){function t(e,r){(0,a.default)(this,t),this.origin=s.vec3.clone(e),this.direction=s.vec3.clone(r)}return(0,o.default)(t,[{key:"at",value:function(t){return s.vec3.copy(c,this.direction),s.vec3.scale(c,c,t),s.vec3.add(c,c,this.origin),c}},{key:"lookAt",value:function(t){s.vec3.sub(this.direction,t,this.origin),s.vec3.normalize(this.origin,this.origin)}},{key:"closestPointToPoint",value:function(t){var e=s.vec3.create();s.vec3.sub(t,this.origin);var r=s.vec3.dot(e,this.direction);return r<0?s.vec3.clone(this.origin):(s.vec3.copy(e,this.direction),s.vec3.scale(e,e,r),s.vec3.add(e,e,this.origin),e)}},{key:"distanceToPoint",value:function(t){return Math.sqrt(this.distanceSqToPoint(t))}},{key:"distanceSqToPoint",value:function(t){var e=s.vec3.create();s.vec3.sub(e,t,this.origin);var r=s.vec3.dot(e,this.direction);return r<0?s.vec3.squaredDistance(this.origin,t):(s.vec3.copy(e,this.direction),s.vec3.scale(e,e,r),s.vec3.add(e,e,this.origin),s.vec3.squaredDistance(e,t))}},{key:"intersectsSphere",value:function(t,e){return this.distanceToPoint(t)<=e}},{key:"intersectSphere",value:function(t,e){var r=s.vec3.create();s.vec3.sub(r,t,this.origin);var n=s.vec3.dot(r,this.direction),i=s.vec3.dot(r,r)-n*n,a=e*e;if(i>a)return null;var u=Math.sqrt(a-i),o=n-u,l=n+u;return o<0&&l<0?null:o<0?this.at(l):this.at(o)}},{key:"distanceToPlane",value:function(t,e){s.vec3.dot(e,this.direction)}},{key:"intersectTriangle",value:function(t,e,r){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];s.vec3.copy(l,t),s.vec3.copy(f,e),s.vec3.copy(h,r),s.vec3.sub(d,f,l),s.vec3.sub(v,h,l),s.vec3.cross(_,d,v);var i=s.vec3.dot(this.direction,_),a=void 0;if(i>0){if(n)return null;a=1}else{if(!(i<0))return null;a=-1,i=-i}s.vec3.sub(p,this.origin,l),s.vec3.cross(v,p,v);var u=a*s.vec3.dot(this.direction,v);if(u<0)return null;s.vec3.cross(d,d,p);var o=a*s.vec3.dot(this.direction,d);if(o<0)return null;if(u+o>i)return null;var c=-a*s.vec3.dot(p,_);return c<0?null:this.at(c/i)}}]),t}();e.default=m,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(8),l=function(){function t(){(0,a.default)(this,t),this._needUpdate=!0,this._x=0,this._y=0,this._z=0,this._sx=1,this._sy=1,this._sz=1,this._rx=0,this._ry=0,this._rz=0,this._position=s.vec3.create(),this._scale=s.vec3.fromValues(1,1,1),this._rotation=s.vec3.create(),this._matrix=s.mat4.create(),this._matrixRotation=s.mat4.create(),this._matrixScale=s.mat4.create(),this._matrixTranslation=s.mat4.create(),this._matrixQuaternion=s.mat4.create(),this._quat=s.quat.create()}return(0,o.default)(t,[{key:"_update",value:function(){s.vec3.set(this._scale,this._sx,this._sy,this._sz),s.vec3.set(this._rotation,this._rx,this._ry,this._rz),s.vec3.set(this._position,this._x,this._y,this._z),s.mat4.identity(this._matrixTranslation,this._matrixTranslation),s.mat4.identity(this._matrixScale,this._matrixScale),s.mat4.identity(this._matrixRotation,this._matrixRotation),s.mat4.rotateX(this._matrixRotation,this._matrixRotation,this._rx),s.mat4.rotateY(this._matrixRotation,this._matrixRotation,this._ry),s.mat4.rotateZ(this._matrixRotation,this._matrixRotation,this._rz),s.mat4.fromQuat(this._matrixQuaternion,this._quat),s.mat4.mul(this._matrixRotation,this._matrixQuaternion,this._matrixRotation),s.mat4.scale(this._matrixScale,this._matrixScale,this._scale),s.mat4.translate(this._matrixTranslation,this._matrixTranslation,this._position),s.mat4.mul(this._matrix,this._matrixTranslation,this._matrixRotation),s.mat4.mul(this._matrix,this._matrix,this._matrixScale),this._needUpdate=!1}},{key:"setRotationFromQuaternion",value:function(t){s.quat.copy(this._quat,t),this._needUpdate=!0}},{key:"matrix",get:function(){return this._needUpdate&&this._update(),this._matrix}},{key:"x",get:function(){return this._x},set:function(t){this._needUpdate=!0,this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._needUpdate=!0,this._y=t}},{key:"z",get:function(){return this._z},set:function(t){this._needUpdate=!0,this._z=t}},{key:"scaleX",get:function(){return this._sx},set:function(t){this._needUpdate=!0,this._sx=t}},{key:"scaleY",get:function(){return this._sy},set:function(t){this._needUpdate=!0,this._sy=t}},{key:"scaleZ",get:function(){return this._sz},set:function(t){this._needUpdate=!0,this._sz=t}},{key:"rotationX",get:function(){return this._rx},set:function(t){this._needUpdate=!0,this._rx=t}},{key:"rotationY",get:function(){return this._ry},set:function(t){this._needUpdate=!0,this._ry=t}},{key:"rotationZ",get:function(){return this._rz},set:function(t){this._needUpdate=!0,this._rz=t}}]),t}();e.default=l,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(3),d=n(c),v=r(26),_=n(v),p=r(163),m=r(164),g=r(162),E=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments[1],n=arguments[2],i=arguments[3],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,o.default)(this,e);var s=void 0;switch(t){case 5:default:s=p;break;case 9:s=m;break;case 13:s=g}var f=(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this,s,n,i,u));return f.uniform("uDirection",r),f.uniform("uResolution",[d.default.width,d.default.height]),f}return(0,h.default)(e,t),e}(_.default);e.default=E,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(59),d=n(c),v=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments[1],n=arguments[2],i=arguments[3];return(0,o.default)(this,e),(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,[1,0],r,n,i))}return(0,h.default)(e,t),e}(d.default);e.default=v,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=function(){function t(){(0,a.default)(this,t),this._passes=[]}return(0,o.default)(t,[{key:"addPass",value:function(t){this._passes.push(t)}},{key:"passes",get:function(){return this._passes}}]),t}();e.default=s,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(59),d=n(c),v=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments[1],n=arguments[2],i=arguments[3];return(0,o.default)(this,e),(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,[0,1],r,n,i))}return(0,h.default)(e,t),e}(d.default);e.default=v,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(36),l=n(s),f=r(22),h=n(f),c=r(8),d=function(t,e){var r=e||{};return t.touches?(r.x=t.touches[0].pageX,r.y=t.touches[0].pageY):(r.x=t.clientX,r.y=t.clientY),r},v=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;(0,a.default)(this,t),this._target=e,this._listenerTarget=n,this._mouse={},this._preMouse={},this.center=c.vec3.create(),this._up=c.vec3.fromValues(0,1,0),this.radius=new l.default(i),this.position=c.vec3.fromValues(0,0,this.radius.value),this.positionOffset=c.vec3.create(),this._rx=new l.default(0),this._rx.limit(-Math.PI/2,Math.PI/2),this._ry=new l.default(0),this._preRX=0,this._preRY=0,this._isLockZoom=!1,this._isLockRotation=!1,this._isInvert=!1,this.sensitivity=1,this._wheelBind=function(t){return r._onWheel(t)},this._downBind=function(t){return r._onDown(t)},this._moveBind=function(t){return r._onMove(t)},this._upBind=function(){return r._onUp()},this.connect(),h.default.addEF(function(){return r._loop()})}return(0,o.default)(t,[{key:"connect",value:function(){this.disconnect(),this._listenerTarget.addEventListener("mousewheel",this._wheelBind),this._listenerTarget.addEventListener("DOMMouseScroll",this._wheelBind),this._listenerTarget.addEventListener("mousedown",this._downBind),this._listenerTarget.addEventListener("touchstart",this._downBind),this._listenerTarget.addEventListener("mousemove",this._moveBind),this._listenerTarget.addEventListener("touchmove",this._moveBind),window.addEventListener("touchend",this._upBind),window.addEventListener("mouseup",this._upBind)}},{key:"disconnect",value:function(){this._listenerTarget.removeEventListener("mousewheel",this._wheelBind),this._listenerTarget.removeEventListener("DOMMouseScroll",this._wheelBind),this._listenerTarget.removeEventListener("mousedown",this._downBind),this._listenerTarget.removeEventListener("touchstart",this._downBind),this._listenerTarget.removeEventListener("mousemove",this._moveBind),this._listenerTarget.removeEventListener("touchmove",this._moveBind),window.removeEventListener("touchend",this._upBind),window.removeEventListener("mouseup",this._upBind)}},{key:"lock",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockZoom=t,this._isLockRotation=t,this._isMouseDown=!1}},{key:"lockZoom",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockZoom=t}},{key:"lockRotation",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLockRotation=t}},{key:"inverseControl",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isInvert=t}},{key:"_onDown",value:function(t){this._isLockRotation||(this._isMouseDown=!0,d(t,this._mouse),d(t,this._preMouse),this._preRX=this._rx.targetValue,this._preRY=this._ry.targetValue)}},{key:"_onMove",value:function(t){if(!this._isLockRotation&&(d(t,this._mouse),t.touches&&t.preventDefault(),this._isMouseDown)){var e=-(this._mouse.x-this._preMouse.x);this._isInvert&&(e*=-1),this._ry.value=this._preRY-.01*e*this.sensitivity;var r=-(this._mouse.y-this._preMouse.y);this._isInvert&&(r*=-1),this._rx.value=this._preRX-.01*r*this.sensitivity}}},{key:"_onUp",value:function(){this._isLockRotation||(this._isMouseDown=!1)}},{key:"_onWheel",value:function(t){if(!this._isLockZoom){var e=t.wheelDelta,r=t.detail,n=0;n=r?e?e/r/40*r>0?1:-1:-r/3:e/120,this.radius.add(2*-n)}}},{key:"_loop",value:function(){this._updatePosition(),this._target&&this._updateCamera()}},{key:"_updatePosition",value:function(){this.position[1]=Math.sin(this._rx.value)*this.radius.value;var t=Math.cos(this._rx.value)*this.radius.value;this.position[0]=Math.cos(this._ry.value+.5*Math.PI)*t,this.position[2]=Math.sin(this._ry.value+.5*Math.PI)*t,c.vec3.add(this.position,this.position,this.positionOffset)}},{key:"_updateCamera",value:function(){this._target.lookAt(this.position,this.center,this._up)}},{key:"rx",get:function(){return this._rx}},{key:"ry",get:function(){return this._ry}}]),t}();e.default=v,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(30),a=n(i),u=r(53),o=n(u),s=r(79),l=n(s),f=r(54),h=n(f),c=r(52),d=n(c),v=r(81),_=n(v),p=r(80),m=n(p),g={simpleColorFrag:a.default,bigTriangleVert:o.default,generalVert:l.default,copyFrag:h.default,basicVert:d.default,skyboxVert:_.default,skyboxFrag:m.default};e.default=g,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){return void 0===e.cacheAttribLoc&&(e.cacheAttribLoc={}),void 0===e.cacheAttribLoc[r]&&(e.cacheAttribLoc[r]=t.getAttribLocation(e,r)),e.cacheAttribLoc[r]},t.exports=e.default},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(128);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(25),i=r(13).document,a=n(i)&&n(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,r){t.exports=!r(16)&&!r(24)(function(){return 7!=Object.defineProperty(r(68)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(41),i=r(19),a=r(76),u=r(20),o=r(17),s=r(40),l=r(135),f=r(45),h=r(73),c=r(21)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",_="keys",p="values",m=function(){return this};t.exports=function(t,e,r,g,E,M,b){l(r,e,g);var y,x,T,A=function(t){if(!d&&t in S)return S[t];switch(t){case _:return function(){return new r(this,t)};case p:return function(){return new r(this,t)}}return function(){return new r(this,t)}},R=e+" Iterator",w=E==p,P=!1,S=t.prototype,O=S[c]||S[v]||E&&S[E],I=O||A(E),N=E?w?A("entries"):I:void 0,F="Array"==e?S.entries||O:O;if(F&&(T=h(F.call(new t)),T!==Object.prototype&&(f(T,R,!0),n||o(T,c)||u(T,c,m))),w&&O&&O.name!==p&&(P=!0,I=function(){return O.call(this)}),n&&!b||!d&&!P&&S[c]||u(S,c,I),s[e]=I,s[R]=m,E)if(y={values:w?I:A(p),keys:M?I:A(_),entries:N},b)for(x in y)x in S||a(S,x,y[x]);else i(i.P+i.F*(d||P),e,y);return y}},function(t,e,r){var n=r(74),i=r(39).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(17),i=r(77),a=r(46)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,r){var n=r(17),i=r(14),a=r(130)(!1),u=r(46)("IE_PROTO");t.exports=function(t,e){var r,o=i(t),s=0,l=[];for(r in o)r!=u&&n(o,r)&&l.push(r);for(;e.length>s;)n(o,r=e[s++])&&(~a(l,r)||l.push(r));return l}},function(t,e,r){var n=r(19),i=r(10),a=r(24);t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],u={};u[t]=e(r),n(n.S+n.F*a(function(){r(1)}),"Object",u)}},function(t,e,r){t.exports=r(20)},function(t,e,r){var n=r(38);t.exports=function(t){return Object(n(t))}},function(t,e){t.exports="// fxaa.frag\n\n#define SHADER_NAME FXAA\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform vec2 uResolution;\n\n\nfloat FXAA_SUBPIX_SHIFT = 1.0/4.0;\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\n\nvec4 applyFXAA(sampler2D tex) {\n    vec4 color;\n    vec2 fragCoord = gl_FragCoord.xy;\n    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * uResolution).xyz;\n    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * uResolution).xyz;\n    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * uResolution).xyz;\n    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * uResolution).xyz;\n    vec3 rgbM  = texture2D(tex, fragCoord  * uResolution).xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * uResolution;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * uResolution + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * uResolution + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * uResolution + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * uResolution + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, 1.0);\n    else\n        color = vec4(rgbB, 1.0);\n    return color;\n}\n\nvoid main(void) {\n \tvec4 color = applyFXAA(texture);\n    gl_FragColor = color;\n}"},function(t,e){t.exports="// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 pos      = aVertexPosition * scale;\n\tpos           += position;\n\tgl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tvTextureCoord = aTextureCoord;\n\tvNormal       = normalize(uNormalMatrix * aNormal);\n}"},function(t,e){t.exports="// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}"},function(t,e){t.exports="// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n\tgl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\t\n\tvVertex = aVertexPosition;\n\tvNormal = aNormal;\n}"},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=i(a),o=r(2),s=i(o),l=r(8),f=n(l),h=r(3),c=i(h),d=r(7),v=i(d),_=r(32),p=i(_),m=r(55),g=i(m),E=r(11),M=i(E),b=r(15),y=i(b),x=r(9),T=i(x),A=r(31),R=i(A),w=r(83),P=i(w),S=r(84),O=i(S),I=r(85),N=i(I),F=r(22),L=i(F),k=r(104),C=i(k),D=r(36),U=i(D),B=r(108),q=i(B),X=r(63),j=i(X),V=r(107),G=i(V),Y=r(33),W=i(Y),H=r(56),z=i(H),Z=r(34),Q=i(Z),K=r(86),J=i(K),$=r(57),tt=i($),et=r(58),rt=i(et),nt=r(35),it=i(nt),at=r(100),ut=i(at),ot=r(99),st=i(ot),lt=r(98),ft=i(lt),ht=r(101),ct=i(ht),dt=r(26),vt=i(dt),_t=r(61),pt=i(_t),mt=r(102),gt=i(mt),Et=r(62),Mt=i(Et),bt=r(60),yt=i(bt),xt=r(103),Tt=i(xt),At=r(89),Rt=i(At),wt=r(87),Pt=i(wt),St=r(88),Ot=i(St),It=r(90),Nt=i(It),Ft=r(92),Lt=i(Ft),kt=r(94),Ct=i(kt),Dt=r(93),Ut=i(Dt),Bt=r(91),qt=i(Bt),Xt=r(95),jt=i(Xt),Vt=r(96),Gt=i(Vt),Yt=r(97),Wt=i(Yt),Ht=r(64),zt=i(Ht),Zt="0.1.24",Qt=function(){function t(){(0,u.default)(this,t),this.glm=f,this.GL=c.default,this.GLTool=c.default,this.GLShader=v.default,this.GLTexture=p.default,this.GLCubeTexture=g.default,this.Mesh=M.default,this.Geom=y.default,this.Batch=T.default,this.FrameBuffer=R.default,this.CubeFrameBuffer=P.default,this.Scheduler=L.default,this.EventDispatcher=C.default,this.EaseNumber=U.default,this.TweenNumber=q.default,this.Camera=W.default,this.CameraOrtho=z.default,this.CameraPerspective=Q.default,this.Ray=tt.default,this.CameraCube=J.default,this.OrbitalControl=j.default,this.QuatRotation=G.default,this.BinaryLoader=it.default,this.ObjLoader=ut.default,this.ColladaParser=ft.default,this.HDRLoader=st.default,this.BatchCopy=Rt.default,this.BatchAxis=Pt.default,this.BatchBall=Ot.default,this.BatchBall=Ot.default,this.BatchLine=Lt.default,this.BatchSkybox=Ct.default,this.BatchSky=Ut.default,this.BatchFXAA=qt.default,this.BatchDotsPlane=Nt.default,this.Scene=jt.default,this.View=Gt.default,this.View3D=Wt.default,this.Object3D=rt.default,this.ShaderLibs=zt.default,this.EffectComposer=ct.default,this.Pass=vt.default,this.PassMacro=pt.default,this.PassBlur=gt.default,this.PassVBlur=Mt.default,this.PassHBlur=yt.default,this.PassFxaa=Tt.default,this.MultisampleFrameBuffer=O.default,this.TransformFeedbackObject=N.default;for(var e in f)f[e]&&(window[e]=f[e])}return(0,s.default)(t,[{key:"log",value:function(){navigator.userAgent.indexOf("Chrome")>-1?console.log("%clib alfrid : VERSION "+Zt,"background: #193441; color: #FCFFF5"):console.log("lib alfrid : VERSION ",Zt),console.log("%cClasses : ","color: #193441");for(var t in this)this[t]&&console.log("%c - "+t,"color: #3E606F")}}]),t}(),Kt=new Qt;e.default=Kt,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(3),l=n(s),f=r(55),h=n(f),c=void 0,d=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.default)(this,t),c=l.default.gl,this._size=e,this.magFilter=r.magFilter||c.LINEAR,this.minFilter=r.minFilter||c.LINEAR,this.wrapS=r.wrapS||c.CLAMP_TO_EDGE,this.wrapT=r.wrapT||c.CLAMP_TO_EDGE,this._init()}return(0,o.default)(t,[{key:"_init",value:function(){this.texture=c.createTexture(),this.glTexture=new h.default(this.texture,{},(!0)),c.bindTexture(c.TEXTURE_CUBE_MAP,this.texture),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MAG_FILTER,this.magFilter),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_MIN_FILTER,this.minFilter),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_S,this.wrapS),c.texParameteri(c.TEXTURE_CUBE_MAP,c.TEXTURE_WRAP_T,this.wrapT);for(var t=[c.TEXTURE_CUBE_MAP_POSITIVE_X,c.TEXTURE_CUBE_MAP_NEGATIVE_X,c.TEXTURE_CUBE_MAP_POSITIVE_Y,c.TEXTURE_CUBE_MAP_NEGATIVE_Y,c.TEXTURE_CUBE_MAP_POSITIVE_Z,c.TEXTURE_CUBE_MAP_NEGATIVE_Z],e=0;e<t.length;e++)c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,!1),c.texImage2D(t[e],0,c.RGBA,this.width,this.height,0,c.RGBA,c.FLOAT,null);this._frameBuffers=[];for(var r=0;r<t.length;r++){var n=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,n),c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,t[r],this.texture,0);var i=c.checkFramebufferStatus(c.FRAMEBUFFER);i!==c.FRAMEBUFFER_COMPLETE&&console.log("'gl.checkFramebufferStatus() returned '"+i),this._frameBuffers.push(n)}c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindRenderbuffer(c.RENDERBUFFER,null),c.bindTexture(c.TEXTURE_CUBE_MAP,null)}},{key:"bind",value:function(t){l.default.viewport(0,0,this.width,this.height),c.bindFramebuffer(c.FRAMEBUFFER,this._frameBuffers[t])}},{key:"unbind",value:function(){c.bindFramebuffer(c.FRAMEBUFFER,null),l.default.viewport(0,0,l.default.width,l.default.height)}},{key:"getTexture",value:function(){return this.glTexture}},{key:"width",get:function(){return this._size}},{key:"height",get:function(){return this._size}}]),t}();e.default=d,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){return 0!==t&&!(t&t-1)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),o=r(2),s=n(o),l=r(3),f=n(l),h=r(32),c=n(h),d=void 0,v=function(){function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,u.default)(this,t),d=f.default.gl,this.width=e,this.height=r,this.magFilter=n.magFilter||d.LINEAR,this.minFilter=n.minFilter||d.LINEAR,this.wrapS=n.wrapS||d.CLAMP_TO_EDGE,this.wrapT=n.wrapT||d.CLAMP_TO_EDGE,this.useDepth=n.useDepth||!0,this.useStencil=n.useStencil||!1,this.texelType=n.type,this._numSample=n.numSample||8,i(this.width)&&i(this.height)||(this.wrapS=this.wrapT=d.CLAMP_TO_EDGE,this.minFilter===d.LINEAR_MIPMAP_NEAREST&&(this.minFilter=d.LINEAR)),this._init()}return(0,s.default)(t,[{key:"_init",value:function(){var t=d.UNSIGNED_BYTE;this.texelType&&(t=this.texelType),this.texelType=t,this.frameBuffer=d.createFramebuffer(),this.frameBufferColor=d.createFramebuffer(),this.renderBufferColor=d.createRenderbuffer(),this.renderBufferDepth=d.createRenderbuffer(),this.glTexture=this._createTexture(),this.glDepthTexture=this._createTexture(d.DEPTH_COMPONENT16,d.UNSIGNED_SHORT,d.DEPTH_COMPONENT,!0),d.bindRenderbuffer(d.RENDERBUFFER,this.renderBufferColor),d.renderbufferStorageMultisample(d.RENDERBUFFER,this._numSample,d.RGBA8,this.width,this.height),d.bindRenderbuffer(d.RENDERBUFFER,this.renderBufferDepth),d.renderbufferStorageMultisample(d.RENDERBUFFER,this._numSample,d.DEPTH_COMPONENT16,this.width,this.height),d.bindFramebuffer(d.FRAMEBUFFER,this.frameBuffer),d.framebufferRenderbuffer(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.RENDERBUFFER,this.renderBufferColor),d.framebufferRenderbuffer(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.RENDERBUFFER,this.renderBufferDepth),d.bindFramebuffer(d.FRAMEBUFFER,null),d.bindFramebuffer(d.FRAMEBUFFER,this.frameBufferColor),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,this.glTexture.texture,0),d.bindFramebuffer(d.FRAMEBUFFER,null)}},{key:"_createTexture",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];void 0===t&&(t=d.RGBA),void 0===e&&(e=this.texelType),r||(r=t);var i=d.createTexture(),a=new c.default(i,(!0)),u=n?f.default.NEAREST:this.magFilter,o=n?f.default.NEAREST:this.minFilter;return d.bindTexture(d.TEXTURE_2D,i),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,o),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,this.wrapS),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,this.wrapT),d.texImage2D(d.TEXTURE_2D,0,t,this.width,this.height,0,r,e,null),d.bindTexture(d.TEXTURE_2D,null),a}},{key:"bind",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&f.default.viewport(0,0,this.width,this.height),d.bindFramebuffer(d.FRAMEBUFFER,this.frameBuffer)}},{key:"unbind",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&f.default.viewport(0,0,f.default.width,f.default.height);var e=this.width,r=this.height;d.bindFramebuffer(d.FRAMEBUFFER,null),d.bindFramebuffer(d.READ_FRAMEBUFFER,this.frameBuffer),d.bindFramebuffer(d.DRAW_FRAMEBUFFER,this.frameBufferColor),d.clearBufferfv(d.COLOR,0,[0,0,0,0]),d.blitFramebuffer(0,0,e,r,0,0,e,r,d.COLOR_BUFFER_BIT,f.default.NEAREST),d.bindFramebuffer(d.FRAMEBUFFER,null)}},{key:"getTexture",value:function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.glTexture}},{key:"getDepthTexture",value:function(){return this.glDepthTexture}}]),t}();e.default=v,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(3),l=n(s),f=r(7),h=n(f),c=r(11),d=n(c),v=void 0,_=function(){function t(e,r){(0,a.default)(this,t),v=l.default.gl,this._vs=e,this._fs=r,this._init()}return(0,o.default)(t,[{key:"_init",value:function(){this._meshCurrent=new d.default,this._meshTarget=new d.default,this._numPoints=-1,this._varyings=[],this.transformFeedback=v.createTransformFeedback()}},{key:"bufferData",value:function(t,e,r){var n=!!r;console.log("is Transform feedback ?",e,n),this._meshCurrent.bufferData(t,e,null,v.STREAM_COPY,!1),this._meshTarget.bufferData(t,e,null,v.STREAM_COPY,!1),n&&(this._varyings.push(r),this._numPoints<0&&(this._numPoints=t.length))}},{key:"bufferIndex",value:function(t){this._meshCurrent.bufferIndex(t),this._meshTarget.bufferIndex(t)}},{key:"uniform",value:function(t,e,r){this.shader&&this.shader.uniform(t,e,r)}},{key:"generate",value:function(){this.shader=new h.default(this._vs,this._fs,this._varyings)}},{key:"render",value:function(){this.shader||this.generate(),this.shader.bind(),l.default.drawTransformFeedback(this),this._swap()}},{key:"_swap",value:function(){var t=this._meshCurrent;
	this._meshCurrent=this._meshTarget,this._meshTarget=t}},{key:"numPoints",get:function(){return this._numPoints}},{key:"meshCurrent",get:function(){return this._meshCurrent}},{key:"meshTarget",get:function(){return this._meshTarget}},{key:"meshSource",get:function(){return this._meshCurrent}},{key:"meshDestination",get:function(){return this._meshTarget}}]),t}();e.default=_,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(5),d=n(c),v=r(34),_=n(v),p=r(8),m=[[p.vec3.fromValues(0,0,0),p.vec3.fromValues(1,0,0),p.vec3.fromValues(0,-1,0)],[p.vec3.fromValues(0,0,0),p.vec3.fromValues(-1,0,0),p.vec3.fromValues(0,-1,0)],[p.vec3.fromValues(0,0,0),p.vec3.fromValues(0,1,0),p.vec3.fromValues(0,0,1)],[p.vec3.fromValues(0,0,0),p.vec3.fromValues(0,-1,0),p.vec3.fromValues(0,0,-1)],[p.vec3.fromValues(0,0,0),p.vec3.fromValues(0,0,1),p.vec3.fromValues(0,-1,0)],[p.vec3.fromValues(0,0,0),p.vec3.fromValues(0,0,-1),p.vec3.fromValues(0,-1,0)]],g=function(t){function e(){(0,o.default)(this,e);var t=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this));return t.setPerspective(Math.PI/2,1,.1,1e3),t}return(0,d.default)(e,t),(0,l.default)(e,[{key:"face",value:function(t){var e=m[t];this.lookAt(e[0],e[1],e[2])}}]),e}(_.default);e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(3),d=n(c),v=r(11),_=n(v),p=r(7),m=n(p),g=r(9),E=n(g),M=r(160),b=r(159),y=function(t){function e(){(0,o.default)(this,e);var t=[],r=[],n=[0,1,2,3,4,5],i=9999;t.push([-i,0,0]),t.push([i,0,0]),t.push([0,-i,0]),t.push([0,i,0]),t.push([0,0,-i]),t.push([0,0,i]),r.push([1,0,0]),r.push([1,0,0]),r.push([0,1,0]),r.push([0,1,0]),r.push([0,0,1]),r.push([0,0,1]);var u=new _.default(d.default.LINES);u.bufferVertex(t),u.bufferIndex(n),u.bufferData(r,"aColor",3);var s=new m.default(M,b);return(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this,u,s))}return(0,h.default)(e,t),e}(E.default);e.default=y,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(15),m=n(p),g=r(7),E=n(g),M=r(9),b=n(M),y=r(79),x=r(30),T=function(t){function e(){(0,o.default)(this,e);var t=m.default.sphere(1,24),r=new E.default(y,x);return(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,r))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[1,1,1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1,1,1],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.shader.bind(),this.shader.uniform("position","uniform3fv",t),this.shader.uniform("scale","uniform3fv",r),this.shader.uniform("color","uniform3fv",n),this.shader.uniform("opacity","uniform1f",i),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(b.default);e.default=T,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(15),m=n(p),g=r(7),E=n(g),M=r(9),b=n(M),y=r(53),x=r(54),T=function(t){function e(){(0,o.default)(this,e);var t=m.default.bigTriangle(),r=new E.default(y,x),n=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,r));return r.bind(),r.uniform("texture","uniform1i",0),n}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(t){this.shader.bind(),t.bind(0),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(b.default);e.default=T,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(3),m=n(p),g=r(11),E=n(g),M=r(7),b=n(M),y=r(9),x=n(y),T=r(165),A=r(30),R=function(t){function e(){(0,o.default)(this,e);var t=[],r=[],n=0,i=100,u=void 0,s=void 0;for(u=-i;u<i;u+=1)for(s=-i;s<i;s+=1)t.push([u,s,0]),r.push(n),n++,t.push([u,0,s]),r.push(n),n++;var l=new E.default(m.default.POINTS);l.bufferVertex(t),l.bufferIndex(r);var f=new b.default(T,A),c=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,l,f));return c.color=[1,1,1],c.opacity=.5,c}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(){this.shader.bind(),this.shader.uniform("color","uniform3fv",this.color),this.shader.uniform("opacity","uniform1f",this.opacity),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(x.default);e.default=R,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(3),m=n(p),g=r(15),E=n(g),M=r(7),b=n(M),y=r(9),x=n(y),T=r(53),A=r(78),R=function(t){function e(){(0,o.default)(this,e);var t=E.default.bigTriangle(),r=new b.default(T,A),n=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,t,r));return r.bind(),r.uniform("texture","uniform1i",0),n}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(t){this.shader.bind(),t.bind(0),this.shader.uniform("uResolution","vec2",[1/m.default.width,1/m.default.height]),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(x.default);e.default=R,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(3),m=n(p),g=r(11),E=n(g),M=r(7),b=n(M),y=r(9),x=n(y),T=r(52),A=r(30),R=function(t){function e(){(0,o.default)(this,e);var t=[],r=[0,1],n=[[0,0],[1,1]];t.push([0,0,0]),t.push([0,0,0]);var i=new E.default(m.default.LINES);i.bufferVertex(t),i.bufferTexCoord(n),i.bufferIndex(r);var u=new b.default(T,A);return(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,i,u))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1,1,1],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this._mesh.bufferVertex([t,r]),this._shader.bind(),this._shader.uniform("color","vec3",n),this._shader.uniform("opacity","float",i),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(x.default);e.default=R,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(15),m=n(p),g=r(7),E=n(g),M=r(9),b=n(M),y=r(166),x=r(54),T=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24;(0,o.default)(this,e);var n=m.default.sphere(t,r,!0),i=new E.default(y,x);return(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,n,i))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(t){this.shader.bind(),t.bind(0),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(b.default);e.default=T,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(15),m=n(p),g=r(7),E=n(g),M=r(9),b=n(M),y=r(81),x=r(80),T=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;(0,o.default)(this,e);var r=m.default.skybox(t),n=new E.default(y,x);return(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,r,n))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"draw",value:function(t){this.shader.bind(),t.bind(0),(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"draw",this).call(this)}}]),e}(b.default);e.default=T,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(22),l=n(s),f=r(3),h=n(f),c=r(34),d=n(c),v=r(56),_=n(v),p=r(63),m=n(p),g=function(){function t(){var e=this;(0,a.default)(this,t),this._children=[],this._matrixIdentity=mat4.create(),h.default.enableAlphaBlending(),this._init(),this._initTextures(),this._initViews(),this._efIndex=l.default.addEF(function(){return e._loop()}),window.addEventListener("resize",function(){return e.resize()})}return(0,o.default)(t,[{key:"update",value:function(){}},{key:"render",value:function(){}},{key:"stop",value:function(){this._efIndex!==-1&&(this._efIndex=l.default.removeEF(this._efIndex))}},{key:"start",value:function(){var t=this;this._efIndex===-1&&(this._efIndex=l.default.addEF(function(){return t._loop()}))}},{key:"resize",value:function(){h.default.setSize(window.innerWidth,window.innerHeight),this.camera.setAspectRatio(h.default.aspectRatio)}},{key:"addChild",value:function(t){this._children.push(t)}},{key:"removeChild",value:function(t){var e=this._children.indexOf(t);return e==-1?void console.warn("Child no exist"):void this._children.splice(e,1)}},{key:"_initTextures",value:function(){}},{key:"_initViews",value:function(){}},{key:"_renderChildren",value:function(){for(var t=void 0,e=0;e<this._children.length;e++)t=this._children[e],t.toRender();h.default.rotate(this._matrixIdentity)}},{key:"_init",value:function(){this.camera=new d.default,this.camera.setPerspective(45*Math.PI/180,h.default.aspectRatio,.1,100),this.orbitalControl=new m.default(this.camera,window,15),this.orbitalControl.radius.value=10,this.cameraOrtho=new _.default}},{key:"_loop",value:function(){h.default.viewport(0,0,h.default.width,h.default.height),h.default.setMatrices(this.camera),this.update(),this._renderChildren(),this.render()}}]),t}();e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(7),l=n(s),f=function(){function t(e,r){(0,a.default)(this,t),this.shader=new l.default(e,r),this._init()}return(0,o.default)(t,[{key:"_init",value:function(){}},{key:"render",value:function(){}}]),t}();e.default=f,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(5),d=n(c),v=r(58),_=n(v),p=r(7),m=n(p),g=r(3),E=n(g),M=function(t){function e(t,r){(0,o.default)(this,e);var n=(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this));return n._children=[],n.shader=new m.default(t,r),n._init(),n._matrixTemp=mat4.create(),n}return(0,d.default)(e,t),(0,l.default)(e,[{key:"_init",value:function(){}},{key:"addChild",value:function(t){this._children.push(t)}},{key:"removeChild",value:function(t){var e=this._children.indexOf(t);return e==-1?void console.warn("Child no exist"):void this._children.splice(e,1)}},{key:"toRender",value:function(t){void 0===t&&(t=mat4.create()),mat4.mul(this._matrixTemp,t,this.matrix),E.default.rotate(this._matrixTemp),this.render();for(var e=0;e<this._children.length;e++){var r=this._children[e];r.toRender(this.matrix)}}},{key:"render",value:function(){}}]),e}(_.default);e.default=M,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(120),a=n(i),u=r(11),o=n(u),s=function(t){var e={};t.forEach(function(t){var r=t.mesh,n=r.vertices,i=r.normals,a=r.coords,u=r.triangles,s=r.name;if(!e[s]){var l=(new o.default).bufferFlattenData(n,"aVertexPosition",3).bufferFlattenData(a,"aTextureCoord",2).bufferFlattenData(i,"aNormal",3).bufferIndex(u);e[s]=l}t.glMesh=e[s]})},l=function(t){var e=a.default.parse(t);return s(e),e},f=function(t,e){a.default.load(t,function(t){s(t),e(t)})},h={parse:l,load:f};e.default=h,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(5),d=n(c),v=r(35),_=n(v),p=r(106),m=n(p),g=function(t){function e(){return(0,o.default)(this,e),(0,h.default)(this,(e.__proto__||(0,a.default)(e)).call(this,!0))}return(0,d.default)(e,t),(0,l.default)(e,[{key:"parse",value:function(t){return(0,m.default)(t)}},{key:"_onLoaded",value:function(){var t=this.parse(this._req.response);this._callback&&this._callback(t)}}]),e}(_.default);g.parse=function(t){return(0,m.default)(t)},e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(2),l=n(s),f=r(6),h=n(f),c=r(12),d=n(c),v=r(5),_=n(v),p=r(35),m=n(p),g=r(11),E=n(g),M=function(t){function e(){return(0,o.default)(this,e),(0,h.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,l.default)(e,[{key:"load",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;this._drawType=n,(0,d.default)(e.prototype.__proto__||(0,a.default)(e.prototype),"load",this).call(this,t,r)}},{key:"_onLoaded",value:function(){this.parseObj(this._req.response)}},{key:"parseObj",value:function(t){function e(t){var e=parseInt(t);return 3*(e>=0?e-1:e+c.length/3)}function r(t){var e=parseInt(t);return 3*(e>=0?e-1:e+d.length/3)}function n(t){var e=parseInt(t);return 2*(e>=0?e-1:e+v.length/2)}function i(t,e,r){l.push([c[t],c[t+1],c[t+2]]),l.push([c[e],c[e+1],c[e+2]]),l.push([c[r],c[r+1],c[r+2]]),_.push(3*p+0),_.push(3*p+1),_.push(3*p+2),p++}function a(t,e,r){f.push([v[t],v[t+1]]),f.push([v[e],v[e+1]]),f.push([v[r],v[r+1]])}function u(t,e,r){h.push([d[t],d[t+1],d[t+2]]),h.push([d[e],d[e+1],d[e+2]]),h.push([d[r],d[r+1],d[r+2]])}function o(t,o,s,l,f,h,c,d,v,_,p,m){var g=e(t),E=e(o),M=e(s),b=void 0;void 0===l?i(g,E,M):(b=e(l),i(g,E,b),i(E,M,b)),void 0!==f&&(g=n(f),E=n(h),M=n(c),void 0===l?a(g,E,M):(b=n(d),a(g,E,b),a(E,M,b))),void 0!==v&&(g=r(v),E=r(_),M=r(p),void 0===l?u(g,E,M):(b=r(m),u(g,E,b),u(E,M,b)))}for(var s=t.split("\n"),l=[],f=[],h=[],c=[],d=[],v=[],_=[],p=0,m=void 0,g=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,E=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,M=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,b=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,y=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,x=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,T=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,A=0;A<s.length;A++){var R=s[A];R=R.trim(),0!==R.length&&"#"!==R.charAt(0)&&(null!==(m=g.exec(R))?c.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])):null!==(m=E.exec(R))?d.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])):null!==(m=M.exec(R))?v.push(parseFloat(m[1]),parseFloat(m[2])):null!==(m=b.exec(R))?o(m[1],m[2],m[3],m[4]):null!==(m=y.exec(R))?o(m[2],m[5],m[8],m[11],m[3],m[6],m[9],m[12]):null!==(m=x.exec(R))?o(m[2],m[6],m[10],m[14],m[3],m[7],m[11],m[15],m[4],m[8],m[12],m[16]):null!==(m=T.exec(R))&&o(m[2],m[5],m[8],m[11],void 0,void 0,void 0,void 0,m[3],m[6],m[9],m[12]))}return this._generateMeshes({positions:l,coords:f,normals:h,indices:_})}},{key:"_generateMeshes",value:function(t){var e=65535,r=t.normals.length>0,n=t.coords.length>0,i=void 0;if(t.positions.length>e){var a=[],u=0,o={};for(o.positions=t.positions.concat(),o.coords=t.coords.concat(),o.indices=t.indices.concat(),o.normals=t.normals.concat();t.indices.length>0;){for(var s=Math.min(e,t.positions.length),l=t.indices.splice(0,s),f=[],h=[],c=[],d=void 0,v=0,_=0;_<l.length;_++)l[_]>v&&(v=l[_]),d=l[_],f.push(o.positions[d]),n&&h.push(o.coords[d]),r&&c.push(o.normals[d]),l[_]-=u;u=v+1,i=new E.default(this._drawType),i.bufferVertex(f),n&&i.bufferTexCoord(h),i.bufferIndex(l),r&&i.bufferNormal(c),a.push(i)}return this._callback&&this._callback(a,o),a}return i=new E.default(this._drawType),i.bufferVertex(t.positions),n&&i.bufferTexCoord(t.coords),i.bufferIndex(t.indices),r&&i.bufferNormal(t.normals),this._callback&&this._callback(i,t),i}}]),e}(m.default);M.parse=function(t){var e=new M;return e.parseObj(t)},e.default=M,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(26),l=(n(s),r(3)),f=n(l),h=r(15),c=n(h),d=r(31),v=n(d),_=function(){function t(e,r){arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.default)(this,t),this._width=e||f.default.width,this._height=r||f.default.height,this._params={},this.setSize(e,r),this._mesh=c.default.bigTriangle(),this._passes=[],this._returnTexture}return(0,o.default)(t,[{key:"addPass",value:function(t){if(t.passes)return void this.addPass(t.passes);if(t.length)for(var e=0;e<t.length;e++)this._passes.push(t[e]);else this._passes.push(t)}},{key:"render",value:function(t){var e=this,r=t,n=void 0;return this._passes.forEach(function(t){n=t.hasFbo?t.fbo:e._fboTarget,n.bind(),f.default.clear(0,0,0,0),t.render(r),f.default.draw(e._mesh),n.unbind(),t.hasFbo?r=t.fbo.getTexture():(e._swap(),r=e._fboCurrent.getTexture())}),this._returnTexture=r,r}},{key:"_swap",value:function(){var t=this._fboCurrent;this._fboCurrent=this._fboTarget,this._fboTarget=t,this._current=this._fboCurrent,this._target=this._fboTarget}},{key:"setSize",value:function(t,e){this._width=t,this._height=e,this._fboCurrent=new v.default(this._width,this._height,this._params),this._fboTarget=new v.default(this._width,this._height,this._params)}},{key:"getTexture",value:function(){return this._returnTexture}},{key:"passes",get:function(){return this._passes}}]),t}();e.default=_,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(62),d=n(c),v=r(60),_=n(v),p=r(61),m=n(p),g=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,r=arguments[1],n=arguments[2],i=arguments[3];(0,o.default)(this,e);var u=(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this)),s=new d.default(t,r,n,i),f=new _.default(t,r,n,i);return u.addPass(s),u.addPass(f),u}return(0,h.default)(e,t),e}(m.default);e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(4),a=n(i),u=r(1),o=n(u),s=r(6),l=n(s),f=r(5),h=n(f),c=r(3),d=n(c),v=r(26),_=n(v),p=r(78),m=n(p),g=function(t){function e(){(0,o.default)(this,e);var t=(0,l.default)(this,(e.__proto__||(0,a.default)(e)).call(this,m.default));return t.uniform("uResolution",[1/d.default.width,1/d.default.height]),t}return(0,h.default)(e,t),e}(_.default);e.default=g,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=!0;try{var l=document.createEvent("CustomEvent");l=null}catch(f){s=!1}var h=function(){function t(){(0,a.default)(this,t),this._eventListeners={}}return(0,o.default)(t,[{key:"addEventListener",value:function(t,e){return null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={}),this._eventListeners[t]||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),this}},{key:"on",value:function(t,e){return this.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={});var r=this._eventListeners[t];if("undefined"==typeof r)return this;for(var n=r.length,i=0;i<n;i++)r[i]===e&&(r.splice(i,1),i--,n--);return this}},{key:"off",value:function(t,e){return this.removeEventListener(t,e)}},{key:"dispatchEvent",value:function(t){null!==this._eventListeners&&void 0!==this._eventListeners||(this._eventListeners={});var e=t.type;try{null===t.target&&(t.target=this),t.currentTarget=this}catch(r){var n={type:e,detail:t.detail,dispatcher:this};return this.dispatchEvent(n)}var i=this._eventListeners[e];if(null!==i&&void 0!==i)for(var a=this._copyArray(i),u=a.length,o=0;o<u;o++){var s=a[o];s.call(this,t)}return this}},{key:"dispatchCustomEvent",value:function(t,e){var r=void 0;return s?(r=document.createEvent("CustomEvent"),r.dispatcher=this,r.initCustomEvent(t,!1,!1,e)):r={type:t,detail:e,dispatcher:this},this.dispatchEvent(r)}},{key:"trigger",value:function(t,e){return this.dispatchCustomEvent(t,e)}},{key:"_destroy",value:function(){if(null!==this._eventListeners){for(var t in this._eventListeners)if(this._eventListeners.hasOwnProperty(t)){for(var e=this._eventListeners[t],r=e.length,n=0;n<r;n++)e[n]=null;delete this._eventListeners[t]}this._eventListeners=null}}},{key:"_copyArray",value:function(t){for(var e=new Array(t.length),r=e.length,n=0;n<r;n++)e[n]=t[n];return e}}]),t}();e.default=h,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=["EXT_shader_texture_lod","EXT_sRGB","EXT_frag_depth","OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","WEBGL_depth_texture","EXT_texture_filter_anisotropic","OES_vertex_array_object","ANGLE_instanced_arrays","WEBGL_draw_buffers"],t.exports=e.default},function(t,e){"use strict";function r(t,e,r,n,i,a){function u(e){var r=0;do e[r++]=t[n];while(++n<_&&r<e.length);return r}function o(e,r,i){var a=0;do e[r+a++]=t[n];while(++n<_&&a<i);return a}function s(t,e,r,n){var i=4*n,a=o(e,r,i);if(a<i)throw new Error("Error reading raw pixels: got "+a+" bytes, expected "+i)}for(var l=new Array(4),f=null,h=void 0,c=void 0,d=void 0,v=new Array(2),_=t.length;a>0;){if(u(l)<l.length)throw new Error("Error reading bytes: expected "+l.length);if(2!==l[0]||2!==l[1]||0!==(128&l[2]))return e[r++]=l[0],e[r++]=l[1],e[r++]=l[2],e[r++]=l[3],void s(t,e,r,i*a-1);if(((255&l[2])<<8|255&l[3])!==i)throw new Error("Wrong scanline width "+((255&l[2])<<8|255&l[3])+", expected "+i);null===f&&(f=new Array(4*i)),h=0;for(var p=0;p<4;p++)for(c=(p+1)*i;h<c;){if(u(v)<v.length)throw new Error("Error reading 2-byte buffer");if((255&v[0])>128){if(d=(255&v[0])-128,0===d||d>c-h)throw new Error("Bad scanline data");for(;d-- >0;)f[h++]=v[1]}else{if(d=255&v[0],0===d||d>c-h)throw new Error("Bad scanline data");if(f[h++]=v[1],--d>0){if(o(f,h,d)<d)throw new Error("Error reading non-run data");h+=d}}}for(var m=0;m<i;m++)e[r+0]=f[m],e[r+1]=f[m+i],e[r+2]=f[m+2*i],e[r+3]=f[m+3*i],r+=4;a--}}function n(t){function e(){var e="";do{var r=t[n];if(r===f){++n;break}e+=String.fromCharCode(r)}while(++n<l);return e}t instanceof ArrayBuffer&&(t=new Uint8Array(t));for(var n=0,l=t.length,f=10,h=0,c=0,d=1,v=1,_=!1,p=0;p<20;p++){var m=e(),g=void 0;if(g=m.match(i));else if(g=m.match(o))_=!0;else if(g=m.match(u))d=Number(g[1]);else if(g=m.match(a));else if(g=m.match(s)){c=Number(g[1]),h=Number(g[2]);break}}if(!_)throw new Error("File is not run length encoded!");var E=new Uint8Array(h*c*4),M=h,b=c;r(t,E,0,n,M,b);for(var y=new Float32Array(h*c*4),x=0;x<E.length;x+=4){var T=E[x+0]/255,A=E[x+1]/255,R=E[x+2]/255,w=E[x+3],P=Math.pow(2,w-128);T*=P,A*=P,R*=P;var S=x;y[S+0]=T,y[S+1]=A,y[S+2]=R,y[S+3]=1}return{shape:[h,c],exposure:d,gamma:v,data:y}}Object.defineProperty(e,"__esModule",{value:!0});var i="#\\?RADIANCE",a="#.*",u="EXPOSURE=\\s*([0-9]*[.][0-9]*)",o="FORMAT=32-bit_rle_rgbe",s="-Y ([0-9]+) \\+X ([0-9]+)";e.default=n,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1),a=n(i),u=r(2),o=n(u),s=r(8),l=n(s),f=r(36),h=n(f),c=r(22),d=n(c),v=function(t,e){var r=e||{};return t.touches?(r.x=t.touches[0].pageX,r.y=t.touches[0].pageY):(r.x=t.clientX,r.y=t.clientY),r},_=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1;(0,a.default)(this,t),this._target=e,this._listenerTarget=n,this.matrix=l.default.mat4.create(),this.m=l.default.mat4.create(),this._vZaxis=l.default.vec3.clone([0,0,0]),this._zAxis=l.default.vec3.clone([0,0,1]),this.preMouse={x:0,y:0},this.mouse={x:0,y:0},this._isMouseDown=!1,this._rotation=l.default.quat.create(),this.tempRotation=l.default.quat.create(),this._rotateZMargin=0,this._offset=.004,this._slerp=-1,this._isLocked=!1,this._diffX=new h.default(0,i),this._diffY=new h.default(0,i),this._listenerTarget.addEventListener("mousedown",function(t){return r._onDown(t)}),this._listenerTarget.addEventListener("touchstart",function(t){return r._onDown(t)}),this._listenerTarget.addEventListener("mousemove",function(t){return r._onMove(t)}),this._listenerTarget.addEventListener("touchmove",function(t){return r._onMove(t)}),window.addEventListener("touchend",function(){return r._onUp()}),window.addEventListener("mouseup",function(){return r._onUp()}),d.default.addEF(function(){return r._loop()})}return(0,o.default)(t,[{key:"inverseControl",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isInvert=t}},{key:"lock",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._isLocked=t}},{key:"setCameraPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;if(this.easing=e,!(this._slerp>0)){var r=l.default.quat.clone(this._rotation);this._updateRotation(r),this._rotation=l.default.quat.clone(r),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0,this._isMouseDown=!1,this._isRotateZ=0,this._targetQuat=l.default.quat.clone(t),this._slerp=1}}},{key:"resetQuat",value:function(){this._rotation=l.default.quat.clone([0,0,1,0]),this.tempRotation=l.default.quat.clone([0,0,0,0]),this._targetQuat=void 0,this._slerp=-1}},{key:"_onDown",value:function(t){if(!this._isLocked){var e=v(t),r=l.default.quat.clone(this._rotation);this._updateRotation(r),this._rotation=r,this._isMouseDown=!0,this._isRotateZ=0,this.preMouse={x:e.x,y:e.y},e.y<this._rotateZMargin||e.y>window.innerHeight-this._rotateZMargin?this._isRotateZ=1:(e.x<this._rotateZMargin||e.x>window.innerWidth-this._rotateZMargin)&&(this._isRotateZ=2),this._diffX.setTo(0),this._diffY.setTo(0)}}},{key:"_onMove",value:function(t){this._isLocked||v(t,this.mouse)}},{key:"_onUp",value:function(){this._isLocked||(this._isMouseDown=!1)}},{key:"_updateRotation",value:function(t){this._isMouseDown&&!this._isLocked&&(this._diffX.value=-(this.mouse.x-this.preMouse.x),this._diffY.value=this.mouse.y-this.preMouse.y,this._isInvert&&(this._diffX.value=-this._diffX.targetValue,this._diffY.value=-this._diffY.targetValue));var e=void 0,r=void 0;if(this._isRotateZ>0)1===this._isRotateZ?(e=-this._diffX.value*this._offset,e*=this.preMouse.y<this._rotateZMargin?-1:1,r=l.default.quat.clone([0,0,Math.sin(e),Math.cos(e)]),l.default.quat.multiply(r,t,r)):(e=-this._diffY.value*this._offset,e*=this.preMouse.x<this._rotateZMargin?1:-1,r=l.default.quat.clone([0,0,Math.sin(e),Math.cos(e)]),l.default.quat.multiply(r,t,r));else{var n=l.default.vec3.clone([this._diffX.value,this._diffY.value,0]),i=l.default.vec3.create();l.default.vec3.cross(i,n,this._zAxis),l.default.vec3.normalize(i,i),e=l.default.vec3.length(n)*this._offset,r=l.default.quat.clone([Math.sin(e)*i[0],Math.sin(e)*i[1],Math.sin(e)*i[2],Math.cos(e)]),l.default.quat.multiply(t,r,t)}}},{key:"_loop",value:function(){l.default.mat4.identity(this.m),void 0===this._targetQuat?(l.default.quat.set(this.tempRotation,this._rotation[0],this._rotation[1],this._rotation[2],this._rotation[3]),this._updateRotation(this.tempRotation)):(this._slerp+=.1*(0-this._slerp),this._slerp<5e-4?(l.default.quat.copy(this._rotation,this._targetQuat),l.default.quat.copy(this.tempRotation,this._targetQuat),this._targetQuat=void 0,this._diffX.setTo(0),this._diffY.setTo(0),this._slerp=-1):(l.default.quat.set(this.tempRotation,0,0,0,0),l.default.quat.slerp(this.tempRotation,this._targetQuat,this._rotation,this._slerp))),l.default.vec3.transformQuat(this._vZaxis,this._vZaxis,this.tempRotation),l.default.mat4.fromQuat(this.matrix,this.tempRotation)}},{key:"easing",set:function(t){this._diffX.easing=t,this._diffY.easing=t},get:function(){return this._diffX.easing}}]),t}();e.default=_,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t){switch(t){default:case"linear":return h.Linear.None;case"expIn":return h.Exponential.In;case"expOut":return h.Exponential.Out;case"expInOut":return h.Exponential.InOut;case"cubicIn":return h.Cubic.In;case"cubicOut":return h.Cubic.Out;case"cubicInOut":return h.Cubic.InOut;case"quarticIn":return h.Quartic.In;case"quarticOut":return h.Quartic.Out;case"quarticInOut":return h.Quartic.InOut;case"quinticIn":return h.Quintic.In;case"quinticOut":return h.Quintic.Out;case"quinticInOut":return h.Quintic.InOut;case"sinusoidalIn":return h.Sinusoidal.In;case"sinusoidalOut":return h.Sinusoidal.Out;case"sinusoidalInOut":return h.Sinusoidal.InOut;case"circularIn":return h.Circular.In;case"circularOut":return h.Circular.Out;case"circularInOut":return h.Circular.InOut;case"elasticIn":return h.Elastic.In;case"elasticOut":return h.Elastic.Out;case"elasticInOut":return h.Elastic.InOut;case"backIn":return h.Back.In;case"backOut":return h.Back.Out;case"backInOut":return h.Back.InOut;case"bounceIn":return h.Bounce.in;case"bounceOut":return h.Bounce.out;case"bounceInOut":return h.Bounce.inOut}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=n(a),o=r(2),s=n(o),l=r(22),f=n(l),h={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e=void 0,r=.1,n=.4;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=n/4):e=n*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)))},Out:function(t){var e=void 0,r=.1,n=.4;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=n/4):e=n*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1);
	},InOut:function(t){var e=void 0,r=.1,n=.4;return 0===t?0:1===t?1:(!r||r<1?(r=1,e=n/4):e=n*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{"in":function(t){return 1-h.Bounce.out(1-t)},out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inOut:function(t){return t<.5?.5*h.Bounce.in(2*t):.5*h.Bounce.out(2*t-1)+.5}}},c=function(){function t(e){var r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expOut",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;(0,u.default)(this,t),this._value=e,this._startValue=e,this._targetValue=e,this._counter=1,this.speed=i,this.easing=n,this._needUpdate=!0,this._efIndex=f.default.addEF(function(){return r._update()})}return(0,s.default)(t,[{key:"_update",value:function(){var t=this._counter+this.speed;return t>1&&(t=1),this._counter===t?void(this._needUpdate=!1):(this._counter=t,void(this._needUpdate=!0))}},{key:"limit",value:function(t,e){return t>e?void this.limit(e,t):(this._min=t,this._max=e,void this._checkLimit())}},{key:"setTo",value:function(t){this._value=t,this._targetValue=t,this._counter=1}},{key:"_checkLimit",value:function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)}},{key:"destroy",value:function(){f.default.removeEF(this._efIndex)}},{key:"value",set:function(t){this._startValue=this._value,this._targetValue=t,this._checkLimit(),this._counter=0},get:function(){if(this._needUpdate){var t=i(this.easing),e=t(this._counter);this._value=this._startValue+e*(this._targetValue-this._startValue),this._needUpdate=!1}return this._value}},{key:"targetValue",get:function(){return this._targetValue}}]),t}();e.default=c,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(3),a=n(i),u=function(){a.default.VERTEX_SHADER=a.default.gl.VERTEX_SHADER,a.default.FRAGMENT_SHADER=a.default.gl.FRAGMENT_SHADER,a.default.COMPILE_STATUS=a.default.gl.COMPILE_STATUS,a.default.DEPTH_TEST=a.default.gl.DEPTH_TEST,a.default.CULL_FACE=a.default.gl.CULL_FACE,a.default.BLEND=a.default.gl.BLEND,a.default.POINTS=a.default.gl.POINTS,a.default.LINES=a.default.gl.LINES,a.default.TRIANGLES=a.default.gl.TRIANGLES,a.default.LINEAR=a.default.gl.LINEAR,a.default.NEAREST=a.default.gl.NEAREST,a.default.LINEAR_MIPMAP_NEAREST=a.default.gl.LINEAR_MIPMAP_NEAREST,a.default.NEAREST_MIPMAP_LINEAR=a.default.gl.NEAREST_MIPMAP_LINEAR,a.default.LINEAR_MIPMAP_LINEAR=a.default.gl.LINEAR_MIPMAP_LINEAR,a.default.NEAREST_MIPMAP_NEAREST=a.default.gl.NEAREST_MIPMAP_NEAREST,a.default.MIRRORED_REPEAT=a.default.gl.MIRRORED_REPEAT,a.default.CLAMP_TO_EDGE=a.default.gl.CLAMP_TO_EDGE,a.default.SCISSOR_TEST=a.default.gl.SCISSOR_TEST,a.default.UNSIGNED_BYTE=a.default.gl.UNSIGNED_BYTE};e.default=u,t.exports=e.default},function(t,e){"use strict";function r(t,e){var r=t.getExtension(e);if(!r)return!1;var n=e.split("_")[0],i=new RegExp(n+"$");for(var a in r){var u=r[a];if("function"==typeof u){var o=a.replace(i,"");a.substring&&(t[o]=r[a].bind(r))}}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(){if(u.default.webgl2)return u.default.gl.FLOAT;var t=u.default.getExtension("OES_texture_float");return t?u.default.gl.FLOAT:(console.warn("USING FLOAT BUT OES_texture_float NOT SUPPORTED"),u.default.gl.UNSIGNED_BYTE)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return o||(s=i()),s};var a=r(3),u=n(a),o=!1,s=void 0;t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(){if(u.default.webgl2)return u.default.gl.HALF_FLOAT;var t=u.default.getExtension("OES_texture_half_float");return t?t.HALF_FLOAT_OES:(console.warn("USING HALF FLOAT BUT OES_texture_half_float NOT SUPPORTED"),u.default.gl.UNSIGNED_BYTE)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return o||(s=i()),s};var a=r(3),u=n(a),o=!1,s=void 0;t.exports=e.default},function(t,e,r){t.exports={"default":r(121),__esModule:!0}},function(t,e,r){t.exports={"default":r(122),__esModule:!0}},function(t,e,r){t.exports={"default":r(123),__esModule:!0}},function(t,e,r){t.exports={"default":r(125),__esModule:!0}},function(t,e,r){t.exports={"default":r(126),__esModule:!0}},function(t,e,r){t.exports={"default":r(127),__esModule:!0}},function(t,e,r){(function(n){"use strict";function i(t,e){var r=new XMLHttpRequest;r.onload=function(){this.response;200==this.status&&e&&e(this.response)},r.open("get",t,!0),r.send()}Object.defineProperty(e,"__esModule",{value:!0});var a=r(8),u=void 0===n.document,o=2*Math.PI/360,s=null,l=null,f=null,h=null,c=null,d={libsPath:"./",workerPath:"./",no_flip:!0,use_transferables:!0,onerror:null,verbose:!1,config:{forceParser:!1},init:function(t){t=t||{};for(var e in t)this[e]=t[e];if(this.config=t,u)try{importScripts(this.libsPath+"gl-matrix-min.js",this.libsPath+"tinyxml.js")}catch(r){d.throwException(d.LIBMISSING_ERROR)}s=a.mat4.create(),l=vec3.create(),f=vec3.create(),h=vec3.create(),c=a.quat.create(),u&&console.log("Collada worker ready")},load:function(t,e){i(t,function(t){e(t?d.parse(t):null)})},_xmlroot:null,_nodes_by_id:null,_transferables:null,_controllers_found:null,_geometries_found:null,safeString:function(t){return t?this.convertID?this.convertID(t):t.replace(/ /g,"_"):""},LIBMISSING_ERROR:"Libraries loading error, when using workers remember to pass the URL to the tinyxml.js in the options.libsPath",NOXMLPARSER_ERROR:"TinyXML not found, when using workers remember to pass the URL to the tinyxml.js in the options.libsPath (Workers do not allow to access the native XML DOMParser)",throwException:function(t){throw u?self.postMessage({action:"exception",msg:t}):d.onerror&&d.onerror(t),t},getFilename:function(t){var e=t.lastIndexOf("\\");return e!=-1&&(t=t.substr(e+1)),e=t.lastIndexOf("/"),e!=-1&&(t=t.substr(e+1)),t},last_name:0,generateName:function(t){t=t||"name_";var e=t+this.last_name;return this.last_name++,e},parse:function(t,e,r){e=e||{},r=r||"_dae_"+Date.now()+".dae";var i=!1,a=null,u=null;if(this._transferables=[],this.verbose&&console.log(" - XML parsing..."),n.DOMParser&&!this.config.forceParser)a=new DOMParser,u=a.parseFromString(t,"text/xml"),this.verbose&&console.log(" - XML parsed");else{if(!n.DOMImplementation)return d.throwException(d.NOXMLPARSER_ERROR);try{a=new DOMImplementation}catch(o){return d.throwException(d.NOXMLPARSER_ERROR)}u=a.loadXML(t),this.verbose&&console.log(" - XML parsed");for(var s=u._nodes_by_id={},l=0,f=u.all.length;l<f;++l){var h=u.all[l];s[h.id]=h,h.getAttribute("sid")&&(s[h.getAttribute("sid")]=h)}this.extra_functions||(this.extra_functions=!0,DOMDocument.prototype.querySelector=DOMElement.prototype.querySelector=function(t){for(var e=t.split(" "),r=this;e.length;){var n=e.shift(),i=n.split("#"),a=i[0],u=i[1],o=a?r.getElementsByTagName(a):r.childNodes;if(u){for(var s=0;s<o.length;s++)if(o.item(s).getAttribute("id")==u){if(0==e.length)return o.item(s);r=o.item(s);break}}else{if(0==e.length)return o.item(0);r=o.item(0)}}return null},DOMDocument.prototype.querySelectorAll=DOMElement.prototype.querySelectorAll=function(t){function e(t,r){if(r){var i=r.shift(),a=t.getElementsByTagName(i);if(0!=r.length)for(var u=0;u<a.length;u++)e(a.item(u),r.concat());else for(var u=0;u<a.length;u++)n.push(a.item(u))}}var r=t.split(" ");if(1==r.length)return this.getElementsByTagName(t);var n=[];e(this,r);var i=new DOMNodeList(this.documentElement);return i._nodes=n,i.length=n.length,i},Object.defineProperty(DOMElement.prototype,"textContent",{get:function(){var t=this.getChildNodes();return t.item(0).toString()},set:function(){}}))}this._xmlroot=u;var c=u.querySelector("COLLADA");c&&(this._current_DAE_version=c.getAttribute("version"),console.log("DAE Version:"+this._current_DAE_version));var v=u.getElementsByTagName("visual_scene").item(0);if(!v)throw"visual_scene XML node not found in DAE";this._nodes_by_id={},this._controllers_found={},this._geometries_found={};var _={object_type:"SceneTree",light:null,materials:{},meshes:{},resources:{},root:{children:[]},external_files:{}},p=u.getElementsByTagName("asset")[0];p&&(_.metadata=this.readAsset(p));for(var m=v.childNodes,l=0;l<m.length;l++)if("node"==m.item(l).localName){var h=this.readNodeTree(m.item(l),_,0,i);h&&_.root.children.push(h)}for(var l=0;l<m.length;l++)"node"==m.item(l).localName&&this.readNodeInfo(m.item(l),_,0,i);this.readLibraryControllers(_);var g=this.readAnimations(u,_);if(g){var E="#animations_"+r.substr(0,r.indexOf("."));_.resources[E]=g,_.root.animations=E}return _.images=this.readImages(u),this._nodes_by_id={},this._controllers_found={},this._geometries_found={},this._xmlroot=null,_},readAsset:function(t){for(var e={},r=0;r<t.childNodes.length;r++){var n=t.childNodes.item(r);if(1==n.nodeType)switch(n.localName){case"contributor":var i=n.querySelector("authoring_tool");i&&(e.authoring_tool=i.textContext);break;case"unit":e.unit=n.getAttribute("name");break;default:e[n.localName]=n.textContent}}return e},readNodeTree:function(t,e,r,n){var i=this.safeString(t.getAttribute("id")),a=this.safeString(t.getAttribute("sid"));if(!i&&!a)return null;var u={id:a||i,children:[],_depth:r},o=t.getAttribute("type");o&&(u.type=o);var s=t.getAttribute("name");s&&(u.name=s),this._nodes_by_id[u.id]=u,i&&(this._nodes_by_id[i]=u),a&&(this._nodes_by_id[a]=u),u.model=this.readTransform(t,r,n);for(var l=0;l<t.childNodes.length;l++){var f=t.childNodes.item(l);if(1==f.nodeType)if("node"!=f.localName);else{var h=this.readNodeTree(f,e,r+1,n);h&&u.children.push(h)}}return u},readNodeInfo:function(t,e,r,n,i){var a,u=this.safeString(t.getAttribute("id")),o=this.safeString(t.getAttribute("sid"));if(u||o)a=this._nodes_by_id[u||o];else{if(!i)return null;a=this._nodes_by_id[i.id||i.sid]}if(!a)return console.warn("Collada: Node not found by id: "+(u||o)),null;for(var s=0;s<t.childNodes.length;s++){var l=t.childNodes.item(s);if(1==l.nodeType)if("node"!=l.localName){if("instance_geometry"==l.localName){var f=l.getAttribute("url"),h=f.toString().substr(1);if(a.mesh=h,!e.meshes[f]){var c=this.readGeometry(f,n);c&&(c.name=h,e.meshes[h]=c)}var d=l.querySelectorAll("instance_material");if(d)for(var v=0;v<d.length;++v){var _=d.item(v);if(_){var p=_.getAttribute("target").toString().substr(1);if(!e.materials[p]){var m=this.readMaterial(p);m&&(m.id=p,e.materials[m.id]=m)}0==v?a.material=p:(a.materials||(a.materials=[]),a.materials.push(p))}else console.warn("instance_material not found: "+s)}}if("instance_controller"==l.localName){var f=l.getAttribute("url"),g=this._xmlroot.querySelector("controller"+f);if(g){var c=this.readController(g,n,e),E=l.querySelector("bind_material");if(E)for(var M=E.querySelectorAll("technique_common"),b=0;b<M.length;b++)for(var y=M.item(b),x=y.querySelectorAll("instance_material"),v=0;v<x.length;v++){var T=x.item(v);if(T){var p=T.getAttribute("target").toString().substr(1);if(!e.materials[p]){var m=this.readMaterial(p);m&&(m.id=p,e.materials[m.id]=m)}0==v?a.material=p:(a.materials||(a.materials=[]),a.materials.push(p))}else console.warn("instance_material for controller not found: "+T)}if(c){var A=c;"morph"==c.type&&(A=c.mesh,a.morph_targets=c.morph_targets),A.name=f.toString(),a.mesh=f.toString(),e.meshes[f]=A}}}if("instance_light"==l.localName){var f=l.getAttribute("url");this.readLight(a,f)}if("instance_camera"==l.localName){var f=l.getAttribute("url");this.readCamera(a,f)}}else this.readNodeInfo(l,e,r+1,n,t)}},material_translate_table:{},light_translate_table:{point:"omni",directional:"directional",spot:"spot"},camera_translate_table:{xfov:"fov",aspect_ratio:"aspect",znear:"near",zfar:"far"},querySelectorAndId:function(t,e,r){for(var n=t.querySelectorAll(e),i=0;i<n.length;i++){var a=n.item(i).getAttribute("id");if(a&&(a=a.toString(),a==r))return n.item(i)}return null},getFirstChildElement:function(t,e){for(var r=t.childNodes,n=0;n<r.length;++n){var i=r.item(n);if(i.localName&&!e||e&&e==i.localName)return i}return null},readMaterial:function(t){var e=this.querySelectorAndId(this._xmlroot,"library_materials material",t);if(!e)return null;var r=e.querySelector("instance_effect");if(!r)return null;var n=r.getAttribute("url").substr(1),i=this.querySelectorAndId(this._xmlroot,"library_effects effect",n);if(!i)return null;var a=i.querySelector("technique");if(!a)return null;for(var u=i.querySelectorAll("newparam"),o={},s=0;s<u.length;s++){var l,f=u[s].querySelector("init_from");if(f)l=f.innerHTML;else{var h=u[s].querySelector("source");l=h.innerHTML}o[u[s].getAttribute("sid")]={parent:l}}var c={},d=this.readImages(this._xmlroot),v=a.querySelector("phong");if(v||(v=a.querySelector("blinn")),v||(v=a.querySelector("lambert")),!v)return null;for(var s=0;s<v.childNodes.length;++s){var _=v.childNodes.item(s);if(_.localName){var p=_.localName.toString();this.material_translate_table[p]&&(p=this.material_translate_table[p]);var m=this.getFirstChildElement(_);if(m)if("color"!=m.localName.toString())if("float"!=m.localName.toString()){if("texture"==m.localName.toString()){c.textures||(c.textures={});var g=m.getAttribute("texture");if(!g)continue;g.indexOf(".")===-1&&(g=this.getParentParam(o,g),d[g]&&(g=d[g].path));var E={map_id:g},M=m.getAttribute("texcoord");E.uvs=M,c.textures[p]=E}}else c[p]=this.readContentAsFloats(m)[0];else{var b=this.readContentAsFloats(m);"RGB_ZERO"==_.getAttribute("opaque")?c[p]=b.subarray(0,4):c[p]=b.subarray(0,3)}}}return c.object_type="Material",c},getParentParam:function(t,e){return t[e]&&t[e].parent?this.getParentParam(t,t[e].parent):e},readLight:function(t,e){function r(t,e){for(var r=0;r<e.childNodes.length;r++){var n=e.childNodes.item(r);if(n&&1==n.nodeType)switch(n.localName){case"color":t.color=d.readContentAsFloats(n);break;case"falloff_angle":t.angle_end=d.readContentAsFloats(n)[0],t.angle=t.angle_end-10}}}var n={},i=null;if(e.length>1)i=this._xmlroot.querySelector("library_lights "+e);else{var a=this._xmlroot.querySelector("library_lights");i=this.getFirstChildElement(a,"light")}if(!i)return null;var u=[],o=i.querySelector("technique_common");if(o)for(var s=0;s<o.childNodes.length;s++)1==o.childNodes.item(s).nodeType&&u.push(o.childNodes.item(s));for(var l=i.querySelectorAll("technique"),s=0;s<l.length;s++)for(var f=l.item(s),h=0;h<f.childNodes.length;h++)1==f.childNodes.item(h).nodeType&&u.push(f.childNodes.item(h));for(var s=0;s<u.length;s++){var o=u[s];switch(o.localName){case"point":n.type=this.light_translate_table[o.localName],r(n,o);break;case"directional":n.type=this.light_translate_table[o.localName],r(n,o);break;case"spot":n.type=this.light_translate_table[o.localName],r(n,o);break;case"intensity":n.intensity=this.readContentAsFloats(o)[0]}}if(t.model){n.position=[t.model[12],t.model[13],t.model[14]];var c=[-t.model[8],-t.model[9],-t.model[10]];n.target=[n.position[0]+c[0],n.position[1]+c[1],n.position[2]+c[2]]}else console.warn("Could not read light position for light: "+t.name+". Setting defaults."),n.position=[0,0,0],n.target=[0,-1,0];t.light=n},readCamera:function(t,e){function r(t,e){for(var r=0;r<e.childNodes.length;r++){var n=e.childNodes.item(r);if(n&&1==n.nodeType){var i=d.camera_translate_table[n.localName]||n.localName;t[i]=parseFloat(n.textContent)}}}var n={},i=this._xmlroot.querySelector("library_cameras "+e);if(!i)return null;var a=[],u=i.querySelector("technique_common");if(u)for(var o=0;o<u.childNodes.length;o++)1==u.childNodes.item(o).nodeType&&a.push(u.childNodes.item(o));for(var o=0;o<a.length;o++){var s=a[o];r(n,s)}n.yfov&&!n.fov&&(n.aspect?n.fov=n.yfov*n.aspect:console.warn("Could not convert camera yfov to xfov because aspect ratio not set")),t.camera=n},readTransform:function(t,e,r){for(var n=a.mat4.create(),i=a.mat4.create(),u=a.quat.create(),s=!1,l=0;l<t.childNodes.length;l++){var f=t.childNodes.item(l);if(f&&1==f.nodeType){if("matrix"==f.localName){var n=this.readContentAsFloats(f);return this.transformMatrix(n,0==e),n}if("translate"!=f.localName)if("rotate"!=f.localName){if("scale"==f.localName){var h=this.readContentAsFloats(f);if(r){var c=h[1];h[1]=h[2],h[2]=-c}a.mat4.scale(n,n,h)}}else{var h=this.readContentAsFloats(f);if(4==h.length){var d=f.getAttribute("sid");if("jointOrientX"==d&&(h[3]+=90,s=!0),r){var c=h[1];h[1]=h[2],h[2]=-c}0!=h[3]&&(a.quat.setAxisAngle(u,h.subarray(0,3),h[3]*o),a.mat4.fromQuat(i,u),a.mat4.multiply(n,n,i))}}else{var h=this.readContentAsFloats(f);if(r&&e>0){var c=h[1];h[1]=h[2],h[2]=-c}a.mat4.translate(n,n,h)}}}return n},readTransform2:function(t,e,r){for(var n=a.mat4.create(),i=a.quat.create(),u=a.mat4.create(),s=a.quat.create(),l=vec3.create(),f=vec3.fromValues(1,1,1),h=!1,c=0;c<t.childNodes.length;c++){var d=t.childNodes.item(c);if("matrix"==d.localName){var n=this.readContentAsFloats(d);return this.transformMatrix(n,0==e),n}if("translate"!=d.localName)if("rotate"!=d.localName){if("scale"==d.localName){var v=this.readContentAsFloats(d);if(r){var _=v[1];v[1]=v[2],v[2]=-_}f.set(v)}}else{var v=this.readContentAsFloats(d);if(4==v.length){var p=d.getAttribute("sid");if("jointOrientX"==p&&(v[3]+=90,h=!0),r){var _=v[1];v[1]=v[2],v[2]=-_}0!=v[3]&&(a.quat.setAxisAngle(s,v.subarray(0,3),v[3]*o),a.quat.multiply(i,i,s))}}else{var v=this.readContentAsFloats(d);l.set(v)}}if(r&&e>0){var _=l[1];l[1]=l[2],l[2]=-_}return a.mat4.translate(n,n,l),a.mat4.fromQuat(u,i),a.mat4.multiply(n,n,u),a.mat4.scale(n,n,f),n},readGeometry:function(t,e,r){if(void 0!==this._geometries_found[t])return this._geometries_found[t];var n=this._xmlroot.getElementById(t.substr(1));if(!n)return console.warn("readGeometry: geometry not found: "+t),this._geometries_found[t]=null,null;if("controller"==n.localName){var i=this.readController(n,e,r);return this._geometries_found[t]=i,i}if("geometry"!=n.localName)return console.warn("readGeometry: tag should be geometry, instead it was found: "+n.localName),this._geometries_found[t]=null,null;var a=n.querySelector("mesh");if(!a)return console.warn("readGeometry: mesh not found in geometry: "+t),this._geometries_found[t]=null,null;for(var o={},s=a.querySelectorAll("source"),l=0;l<s.length;l++){var f=s.item(l);if(f.querySelector){var h=f.querySelector("float_array");if(h){var c=this.readContentAsFloats(h),d=f.querySelector("accessor"),v=parseInt(d.getAttribute("stride"));o[f.getAttribute("id")]={stride:v,data:c}}}}var _=a.querySelector("vertices input"),p=o[_.getAttribute("source").substr(1)];o[a.querySelector("vertices").getAttribute("id")]=p;var m=null,g=a.querySelector("polygons");if(g&&(m=this.readTriangles(g,o)),!m){var E=a.querySelectorAll("triangles");E&&E.length&&(m=this.readTriangles(E,o))}if(!m){var M=a.querySelector("polylist");M&&(m=this.readPolylist(M,o))}if(!m){var b=a.querySelector("linestrips");b&&(m=this.readLineStrip(o,b))}if(!m)return console.log("no polygons or triangles in mesh: "+t),this._geometries_found[t]=null,null;if(e&&!this.no_flip){for(var y=0,x=m.vertices,l=0,T=x.length;l<T;l+=3)y=x[l+1],x[l+1]=x[l+2],x[l+2]=-y;x=m.normals;for(var l=0,T=x.length;l<T;l+=3)y=x[l+1],x[l+1]=x[l+2],x[l+2]=-y}if(u&&this.use_transferables)for(var l in m){var A=m[l];A&&A.buffer&&A.length>100&&this._transferables.push(A.buffer)}return m.filename=t,m.object_type="Mesh",this._geometries_found[t]=m,m},readTriangles:function(t,e){for(var r=[],n=[],i=0,a={},u=[],o=[],s=0,l="",f="",h=0;h<t.length;h++){var c=t.item(h),d="triangles"==c.localName;f=c.getAttribute("material"),0==h&&(n=this.readShapeInputs(c,e));for(var v=c.querySelectorAll("p"),_=(n.length,0);_<v.length;_++){var p=v.item(_);if(!p||!p.textContent)break;var m=p.textContent.trim().split(" "),g=-1,E=-1,M=-1,b=1;for(var y in n)b=Math.max(b,n[y][4]+1);for(var x=0,T=m.length;x<T;x+=b){var A=m.slice(x,x+b).join(" ");if(M=E,a.hasOwnProperty(A))E=a[A];else{for(var R=0;R<n.length;++R){var w=n[R],P=w[1],S=w[3],O=parseInt(m[x+w[4]]);0==R&&(u[P.length/w[2]]=O),O*=w[2];for(var I=0;I<w[2];++I){if(void 0===S[O+I])throw"UNDEFINED!";P.push(S[O+I])}}E=i,i+=1,a[A]=E}d||(0==x&&(g=E),x>2&&(o.push(g),o.push(M))),o.push(E)}}var N={name:l||"group"+h,start:s,length:o.length-s,material:f||""};s=o.length,r.push(N)}var F={vertices:new Float32Array(n[0][1]),info:{groups:r},_remap:new Uint32Array(u)};return this.transformMeshInfo(F,n,o),F},readPolylist:function(t,e){var r=[],n=0,i={},a=[],u=[],o="";o=t.getAttribute("material"),r=this.readShapeInputs(t,e);for(var s=t.querySelector("vcount"),l=this.readContentAsUInt32(s),f=t.querySelector("p"),h=this.readContentAsUInt32(f),c=r.length,d=0,v=0,_=l.length;v<_;++v)for(var p=l[v],m=-1,g=-1,E=-1,M=0;M<p;++M){var b=h.subarray(d,d+c).join(" ");if(E=g,i.hasOwnProperty(b))g=i[b];else{for(var y=0;y<r.length;++y){var x=r[y],T=parseInt(h[d+y]),A=x[1],R=x[3];0==y&&(a[A.length/c]=T),T*=x[2];for(var w=0;w<x[2];++w)A.push(R[T+w])}g=n,n+=1,i[b]=g}p>3&&(0==M&&(m=g),M>2&&(u.push(m),u.push(E))),u.push(g),d+=c}var P={vertices:new Float32Array(r[0][1]),info:{},_remap:new Uint32Array(a)};return this.transformMeshInfo(P,r,u),P},readShapeInputs:function(t,e){for(var r=[],n=t.querySelectorAll("input"),i=0;i<n.length;i++){var a=n.item(i);if(a.getAttribute){var u=a.getAttribute("semantic").toUpperCase(),o=e[a.getAttribute("source").substr(1)],s=parseInt(a.getAttribute("offset")),l=0;a.getAttribute("set")&&(l=parseInt(a.getAttribute("set"))),r.push([u,[],o.stride,o.data,s,l])}}return r},transformMeshInfo:function(t,e,r){for(var n={normal:"normals",texcoord:"coords"},i=1;i<e.length;++i){var a=e[i][0].toLowerCase(),u=e[i][1];u.length&&(n[a]&&(a=n[a]),t[a]&&(a+=e[i][5]),t[a]=new Float32Array(u))}return r&&r.length&&(t.vertices.length>65536?t.triangles=new Uint32Array(r):t.triangles=new Uint16Array(r)),t},readLineStrip:function(t,e){var r=[],n=0,i={},a=[],u=[],o=0,s=e.querySelectorAll("input");if(0==o)for(var l=0;l<s.length;l++){var f=s.item(l);if(f.getAttribute){var h=f.getAttribute("semantic").toUpperCase(),c=t[f.getAttribute("source").substr(1)],d=parseInt(f.getAttribute("offset")),v=0;f.getAttribute("set")&&(v=parseInt(f.getAttribute("set"))),r.push([h,[],c.stride,c.data,d,v])}}for(var _=e.querySelectorAll("p"),p=r.length,l=0;l<_.length;l++){var m=_.item(l);if(!m||!m.textContent)break;for(var g=m.textContent.trim().split(" "),E=-1,M=-1,b=0,y=g.length;b<y;b+=p){var x=g.slice(b,b+p).join(" ");if(M=E,i.hasOwnProperty(x))E=i[x];else{for(var T=0;T<r.length;++T){var A=r[T],R=parseInt(g[b+T]),w=A[1],P=A[3];0==T&&(a[w.length/p]=R),R*=A[2];for(var S=0;S<A[2];++S)w.push(P[R+S])}E=n,n+=1,i[x]=E}u.push(E)}}var O={primitive:"line_strip",vertices:new Float32Array(r[0][1]),info:{}};return this.transformMeshInfo(O,r,u)},findXMLNodeById:function(t,e,r){if(this._xmlroot._nodes_by_id){var n=this._xmlroot._nodes_by_id[r];if(n&&n.localName==e)return n}else{var n=this._xmlroot.getElementById(r);if(n)return n}for(var i=t.childNodes,a=0;a<i.length;++a){var u=i.item(a);if(1==u.nodeType&&u.localName==e){var o=u.getAttribute("id");if(o==r)return u}}return null},readImages:function(t){var e=t.querySelector("library_images");if(!e)return null;for(var r={},n=e.childNodes,i=0;i<n.length;++i){var a=n.item(i);if(1==a.nodeType){var u=a.querySelector("init_from");if(u&&u.textContent){var o=this.getFilename(u.textContent),s=a.getAttribute("id");r[s]={filename:o,map:s,name:a.getAttribute("name"),path:u.textContent}}}}return r},readAnimations:function(t,e){var r=t.querySelector("library_animations");if(!r)return null;for(var n=r.childNodes,i={object_type:"Animation",takes:{}},a={tracks:[]},u=a.tracks,o=0;o<n.length;++o){var s=n.item(o);if(1==s.nodeType&&"animation"==s.localName){var l=s.getAttribute("id");if(l)this.readAnimation(s,u);else{var f=s.querySelectorAll("animation");if(f.length)for(var h=0;h<f.length;++h){var c=f.item(h);this.readAnimation(c,u)}else this.readAnimation(s,u)}}}if(!u.length)return null;for(var d=0,o=0;o<u.length;++o)d<u[o].duration&&(d=u[o].duration);return a.name="default",a.duration=d,i.takes[a.name]=a,i},readAnimation:function(t,e){if("animation"!=t.localName)return null;var r=(t.getAttribute("id"),t.querySelectorAll("channel"));if(!r.length)return null;for(var n=e||[],i=0;i<r.length;++i){var a=this.readChannel(r.item(i),t);a&&n.push(a)}return n},readChannel:function(t,e){if("channel"!=t.localName||"animation"!=e.localName)return null;var r=t.getAttribute("source"),n=t.getAttribute("target"),i=this.findXMLNodeById(e,"sampler",r.substr(1));if(!i)return console.error("Error DAE: Sampler not found in "+r),null;for(var a={},o={},s={},l=i.querySelectorAll("input"),f=null,h=0;h<l.length;h++){var c=l.item(h),d=c.getAttribute("source"),v=c.getAttribute("semantic"),_=this.findXMLNodeById(e,"source",d.substr(1));if(_){var p=_.querySelector("param");if(p){var m=p.getAttribute("type");a[v]={source:d,type:m};var g=null;if("float"==m||"float4x4"==m){var E=_.querySelector("float_array"),M=this.readContentAsFloats(E);s[d]=M,g=M;var b=p.getAttribute("name");"TIME"==b&&(f=g),"OUTPUT"==v&&(b=v),b?o[b]=m:console.warn("Collada: <param> without name attribute in <animation>")}}}}if(!f)return console.error("Error DAE: no TIME info found in <channel>: "+t.getAttribute("source")),null;var y=n.split("/"),x={},T=y[0],A=this._nodes_by_id[T],R=A.id+"/"+y[1];x.name=y[1],x.property=R;var m="number",w=1,P=o.OUTPUT;switch(P){case"float":w=1;break;case"float3x3":w=9,m="mat3";break;case"float4x4":w=16,m="mat4"}x.type=m,x.value_size=w,x.duration=f[f.length-1];var S=s[a.OUTPUT.source];if(!S)return null;for(var O=f.length,I=w+1,N=new Float32Array(O*I),h=0;h<f.length;++h){N[h*I]=f[h];var F=S.subarray(h*w,(h+1)*w);"float4x4"==P&&this.transformMatrix(F,A?0==A._depth:0),N.set(F,h*I+1)}if(u&&this.use_transferables){var L=N;L&&L.buffer&&L.length>100&&this._transferables.push(L.buffer)}return x.data=N,x},findNode:function(t,e){if(t.id==e)return t;if(t.children)for(var r in t.children){var n=this.findNode(t.children[r],e);if(n)return n}return null},readLibraryControllers:function(t){var e=this._xmlroot.querySelector("library_controllers");if(!e)return null;for(var r=e.childNodes,n=0;n<r.length;++n){var i=r.item(n);if(1==i.nodeType&&"controller"==i.localName){var a=i.getAttribute("id");this._controllers_found[a]||this.readController(i,null,t)}}},readController:function(t,e,r){if("controller"==!t.localName)return console.warn("readController: not a controller: "+t.localName),null;var n=t.getAttribute("id");if(this._controllers_found[n])return this._controllers_found[n];var i=null,a=t.querySelector("skin");a&&(i=this.readSkinController(a,e,r));var u=t.querySelector("morph");return u&&(i=this.readMorphController(u,e,r,i)),this._controllers_found[n]?n+="_1blah":this._controllers_found[n]=i,i},readSkinController:function(t,e,r){var n=t.getAttribute("source"),i=this.readGeometry(n,e,r);if(!i)return null;var u=this.readSources(t,e);if(!u)return null;var o=null,s=t.querySelector("bind_shape_matrix");s?(o=this.readContentAsFloats(s),this.transformMatrix(o,!0,!0)):o=a.mat4.create();var l=[],f=t.querySelector("joints");if(f){for(var h=null,c=null,d=f.querySelectorAll("input"),v=0;v<d.length;v++){var _=d[v],p=_.getAttribute("semantic").toUpperCase(),m=_.getAttribute("source"),g=u[m.substr(1)];"JOINT"==p?h=g:"INV_BIND_MATRIX"==p&&(c=g)}if(!c||!h)return console.error("Error DAE: no joints or inv_bind sources found"),null;for(var v in h){var E=c.subarray(16*v,16*v+16),M=h[v],b=this._nodes_by_id[M];b?(this.transformMatrix(E,0==b._depth,!0),l.push([M,E])):console.warn("Node "+M+" not found")}}var y=t.querySelector("vertex_weights");if(y){for(var x=null,d=y.querySelectorAll("input"),v=0;v<d.length;v++)"WEIGHT"==d[v].getAttribute("semantic").toUpperCase()&&(x=u[d.item(v).getAttribute("source").substr(1)]);if(!x)throw"no weights found";for(var T=y.querySelector("vcount"),A=this.readContentAsUInt32(T),R=y.querySelector("v"),w=this.readContentAsUInt32(R),P=i.vertices.length/3,S=new Float32Array(4*P),O=new Uint8Array(4*P),I=0,N=i._remap,F=0,v=0,L=A.length;v<L;++v){for(var k=A[v],C=I,D=O.subarray(4*v,4*v+4),U=S.subarray(4*v,4*v+4),B=0,q=0;q<k&&q<4;++q)D[q]=w[C+2*q],D[q]>F&&(F=D[q]),U[q]=x[w[C+2*q+1]],B+=U[q];if(k>4&&B<1)for(var X=1/B,q=0;q<4;++q)U[q]*=X;I+=2*k}for(var j=new Float32Array(4*P),V=new Uint8Array(4*P),G=[],v=0;v<P;++v){for(var Y=4*N[v],U=S.subarray(Y,Y+4),D=O.subarray(Y,Y+4),W=0;W<3;++W){for(var H=W,z=U[W],q=W+1;q<4;++q)U[q]<=z||(H=q,z=U[q]);if(H!=W){var Z=U[W];U[W]=U[H],U[H]=Z,Z=D[W],D[W]=D[H],D[H]=Z}}j.set(U,4*v),V.set(D,4*v),U[0]&&(G[D[0]]=!0),U[1]&&(G[D[1]]=!0),U[2]&&(G[D[2]]=!0),U[3]&&(G[D[3]]=!0)}F>=l.length&&console.warn("Mesh uses higher bone index than bones found");for(var Q=[],K={},v=0;v<G.length;++v)G[v]&&(K[v]=Q.length,Q.push(l[v]));if(Q.length<l.length){for(var v=0;v<V.length;v++)V[v]=K[V[v]];l=Q}i.weights=j,i.bone_indices=V,i.bones=l,i.bind_matrix=o}return i},readMorphController:function(t,e,r,n){var i=t.getAttribute("source"),a=this.readGeometry(i,e,r);if(!a)return null;var u=this.readSources(t,e),o=[],s=t.querySelector("targets");if(!s)return null;for(var l=s.querySelectorAll("input"),f=null,h=null,c=0;c<l.length;c++){var d=l.item(c),v=d.getAttribute("semantic").toUpperCase(),_=u[d.getAttribute("source").substr(1)];"MORPH_TARGET"==v?f=_:"MORPH_WEIGHT"==v&&(h=_)}if(!f||!h)return console.warn("Morph controller without targets or weights. Skipping it."),null;for(var c in f){var p="#"+f[c],m=this.readGeometry(p,e,r);r.meshes[p]=m,o.push({mesh:p,weight:h[c]})}return a.morph_targets=o,a},readBindMaterials:function(t,e){for(var r=[],n=t.querySelectorAll("technique_common"),i=0;i<n.length;i++)for(var a=n.item(i),u=a.querySelectorAll("instance_material"),o=0;o<u.length;o++){var s=u.item(o);s&&r.push(s.getAttribute("symbol"))}return r},readSources:function(t,e){for(var r={},n=t.querySelectorAll("source"),i=0;i<n.length;i++){var a=n.item(i);if(a.querySelector){var u=a.querySelector("float_array");if(u){var o=this.readContentAsFloats(a);r[a.getAttribute("id")]=o}else{var s=a.querySelector("Name_array");if(s){var l=this.readContentAsStringsArray(s);if(!l)continue;r[a.getAttribute("id")]=l}else{var f=a.querySelector("IDREF_array");if(f){var l=this.readContentAsStringsArray(f);if(!l)continue;r[a.getAttribute("id")]=l}else;}}}}return r},readContentAsUInt32:function(t){if(!t)return null;var e=t.textContent;if(e=e.replace(/\n/gi," "),e=e.trim(),0==e.length)return null;for(var r=e.split(" "),n=new Uint32Array(r.length),i=0;i<r.length;i++)n[i]=parseInt(r[i]);return n},readContentAsFloats:function(t){if(!t)return null;var e=t.textContent;e=e.replace(/\n/gi," "),e=e.replace(/\s\s+/gi," "),e=e.replace(/\t/gi,""),e=e.trim();for(var r=e.split(" "),n=t.getAttribute("count"),i=n?parseInt(n):r.length,a=new Float32Array(i),u=0;u<r.length;u++)a[u]=parseFloat(r[u]);return a},readContentAsStringsArray:function(t){if(!t)return null;var e=t.textContent;e=e.replace(/\n/gi," "),e=e.replace(/\s\s/gi," "),e=e.trim();for(var r=e.split(" "),n=0;n<r.length;n++)r[n]=r[n].trim();if(t.getAttribute("count")&&parseInt(t.getAttribute("count"))!=r.length){var i=[],a="";for(var u in r)a?a+=" "+r[u]:a=r[u],this._nodes_by_id[this.safeString(a)]&&(i.push(this.safeString(a)),a="");var o=parseInt(t.getAttribute("count"));return i.length==o?i:(console.error("Error: bone names have spaces, avoid using spaces in names"),null)}return r},max3d_matrix_0:new Float32Array([0,-1,0,0,0,0,-1,0,1,0,0,-0,0,0,0,1]),transformMatrix:function(t,e,r){if(a.mat4.transpose(t,t),this.no_flip)return t;if(e){var n=new Float32Array(t.subarray(4,8));t.set(t.subarray(8,12),4),t.set(n,8),n=t.subarray(8,12),vec4.scale(n,n,-1)}else{var i=a.mat4.create(),u=t;i.set([u[0],u[2],-u[1]],0),
	i.set([u[8],u[10],-u[9]],4),i.set([-u[4],-u[6],u[5]],8),i.set([u[12],u[14],-u[13]],12),u.set(i)}return t}};e.default=d,t.exports=e.default}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(119),a=n(i),u=r(8),o=function(t){function e(t){var e=void 0;for(var r in n)r===t&&(e=n[r]);var i={};return e.diffuse&&(i.diffuseColor=e.diffuse),i.diffuseColor=e.diffuse||[0,0,0],i.shininess=e.shininess||0,e.textures&&(e.textures.diffuse&&(i.diffuseMapID=e.textures.diffuse.map_id),e.textures.normal&&(i.normalMapID=e.textures.normal.map_id)),i}function r(t,n){var o=u.mat4.create();if(t.model?u.mat4.multiply(o,n,t.model):u.mat4.copy(o,n),t.children.length>0&&t.children.forEach(function(t){r(t,o)}),t.mesh){var s={};s.modelMatrix=o,s.mesh=i[t.mesh],s.id=t.id,s.name=t.name,s.material=e(t.material),a.push(s)}}var n=t.materials,i=t.meshes,a=[],o=[];for(var s in i){var l=i[s],f=l.vertices,h=l.normals,c=l.coords,d=l.triangles,v={vertices:f,normals:h,coords:c,triangles:d};o.push({id:s,buffers:v})}var _=u.mat4.create();return r(t.root,_),a},s=function(t){var e=a.default.parse(t);return o(e)},l=function(t,e){a.default.load(t,function(t){e(o(t))})},f={load:l,parse:s};e.default=f,t.exports=e.default},function(t,e,r){r(146);var n=r(10).Object;t.exports=function(t,e){return n.create(t,e)}},function(t,e,r){r(147);var n=r(10).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e,r){r(148);var n=r(10).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},function(t,e,r){r(149),t.exports=r(10).Object.getPrototypeOf},function(t,e,r){r(150),t.exports=r(10).Object.setPrototypeOf},function(t,e,r){r(153),r(151),r(154),r(155),t.exports=r(10).Symbol},function(t,e,r){r(152),r(156),t.exports=r(51).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,r){var n=r(14),i=r(144),a=r(143);t.exports=function(t){return function(e,r,u){var o,s=n(e),l=i(s.length),f=a(u,l);if(t&&r!=r){for(;l>f;)if(o=s[f++],o!=o)return!0}else for(;l>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(27),i=r(72),a=r(44);t.exports=function(t){var e=n(t),r=i.f;if(r)for(var u,o=r(t),s=a.f,l=0;o.length>l;)s.call(t,u=o[l++])&&e.push(u);return e}},function(t,e,r){t.exports=r(13).document&&document.documentElement},function(t,e,r){var n=r(66);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(66);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){"use strict";var n=r(42),i=r(28),a=r(45),u={};r(20)(u,r(21)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(u,{next:i(1,r)}),a(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){var n=r(27),i=r(14);t.exports=function(t,e){for(var r,a=i(t),u=n(a),o=u.length,s=0;o>s;)if(a[r=u[s++]]===e)return r}},function(t,e,r){var n=r(29)("meta"),i=r(25),a=r(17),u=r(18).f,o=0,s=Object.isExtensible||function(){return!0},l=!r(24)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,n,{value:{i:"O"+ ++o,w:{}}})},h=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[n].i},c=function(t,e){if(!a(t,n)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[n].w},d=function(t){return l&&v.NEED&&s(t)&&!a(t,n)&&f(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:h,getWeak:c,onFreeze:d}},function(t,e,r){var n=r(18),i=r(23),a=r(27);t.exports=r(16)?Object.defineProperties:function(t,e){i(t);for(var r,u=a(e),o=u.length,s=0;o>s;)n.f(t,r=u[s++],e[r]);return t}},function(t,e,r){var n=r(14),i=r(71).f,a={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==a.call(t)?o(t):i(n(t))}},function(t,e,r){var n=r(25),i=r(23),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r(67)(Function.call,r(43).f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},function(t,e,r){var n=r(48),i=r(38);t.exports=function(t){return function(e,r){var a,u,o=String(i(e)),s=n(r),l=o.length;return s<0||s>=l?t?"":void 0:(a=o.charCodeAt(s),a<55296||a>56319||s+1===l||(u=o.charCodeAt(s+1))<56320||u>57343?t?o.charAt(s):a:t?o.slice(s,s+2):(a-55296<<10)+(u-56320)+65536)}}},function(t,e,r){var n=r(48),i=Math.max,a=Math.min;t.exports=function(t,e){return t=n(t),t<0?i(t+e,0):a(t,e)}},function(t,e,r){var n=r(48),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(129),i=r(136),a=r(40),u=r(14);t.exports=r(70)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==e?i(0,r):"values"==e?i(0,t[r]):i(0,[r,t[r]])},"values"),a.Arguments=a.Array,n("keys"),n("values"),n("entries")},function(t,e,r){var n=r(19);n(n.S,"Object",{create:r(42)})},function(t,e,r){var n=r(19);n(n.S+n.F*!r(16),"Object",{defineProperty:r(18).f})},function(t,e,r){var n=r(14),i=r(43).f;r(75)("getOwnPropertyDescriptor",function(){return function(t,e){return i(n(t),e)}})},function(t,e,r){var n=r(77),i=r(73);r(75)("getPrototypeOf",function(){return function(t){return i(n(t))}})},function(t,e,r){var n=r(19);n(n.S,"Object",{setPrototypeOf:r(141).set})},function(t,e){},function(t,e,r){"use strict";var n=r(142)(!0);r(70)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(13),i=r(17),a=r(16),u=r(19),o=r(76),s=r(138).KEY,l=r(24),f=r(47),h=r(45),c=r(29),d=r(21),v=r(51),_=r(50),p=r(137),m=r(131),g=r(134),E=r(23),M=r(14),b=r(49),y=r(28),x=r(42),T=r(140),A=r(43),R=r(18),w=r(27),P=A.f,S=R.f,O=T.f,I=n.Symbol,N=n.JSON,F=N&&N.stringify,L="prototype",k=d("_hidden"),C=d("toPrimitive"),D={}.propertyIsEnumerable,U=f("symbol-registry"),B=f("symbols"),q=f("op-symbols"),X=Object[L],j="function"==typeof I,V=n.QObject,G=!V||!V[L]||!V[L].findChild,Y=a&&l(function(){return 7!=x(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=P(X,e);n&&delete X[e],S(t,e,r),n&&t!==X&&S(X,e,n)}:S,W=function(t){var e=B[t]=x(I[L]);return e._k=t,e},H=j&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},z=function(t,e,r){return t===X&&z(q,e,r),E(t),e=b(e,!0),E(r),i(B,e)?(r.enumerable?(i(t,k)&&t[k][e]&&(t[k][e]=!1),r=x(r,{enumerable:y(0,!1)})):(i(t,k)||S(t,k,y(1,{})),t[k][e]=!0),Y(t,e,r)):S(t,e,r)},Z=function(t,e){E(t);for(var r,n=m(e=M(e)),i=0,a=n.length;a>i;)z(t,r=n[i++],e[r]);return t},Q=function(t,e){return void 0===e?x(t):Z(x(t),e)},K=function(t){var e=D.call(this,t=b(t,!0));return!(this===X&&i(B,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(B,t)||i(this,k)&&this[k][t])||e)},J=function(t,e){if(t=M(t),e=b(e,!0),t!==X||!i(B,e)||i(q,e)){var r=P(t,e);return!r||!i(B,e)||i(t,k)&&t[k][e]||(r.enumerable=!0),r}},$=function(t){for(var e,r=O(M(t)),n=[],a=0;r.length>a;)i(B,e=r[a++])||e==k||e==s||n.push(e);return n},tt=function(t){for(var e,r=t===X,n=O(r?q:M(t)),a=[],u=0;n.length>u;)!i(B,e=n[u++])||r&&!i(X,e)||a.push(B[e]);return a};j||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=c(arguments.length>0?arguments[0]:void 0),e=function(r){this===X&&e.call(q,r),i(this,k)&&i(this[k],t)&&(this[k][t]=!1),Y(this,t,y(1,r))};return a&&G&&Y(X,t,{configurable:!0,set:e}),W(t)},o(I[L],"toString",function(){return this._k}),A.f=J,R.f=z,r(71).f=T.f=$,r(44).f=K,r(72).f=tt,a&&!r(41)&&o(X,"propertyIsEnumerable",K,!0),v.f=function(t){return W(d(t))}),u(u.G+u.W+u.F*!j,{Symbol:I});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;et.length>rt;)d(et[rt++]);for(var et=w(d.store),rt=0;et.length>rt;)_(et[rt++]);u(u.S+u.F*!j,"Symbol",{"for":function(t){return i(U,t+="")?U[t]:U[t]=I(t)},keyFor:function(t){if(H(t))return p(U,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!j,"Object",{create:Q,defineProperty:z,defineProperties:Z,getOwnPropertyDescriptor:J,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!j||l(function(){var t=I();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,r,n=[t],i=1;arguments.length>i;)n.push(arguments[i++]);return e=n[1],"function"==typeof e&&(r=e),!r&&g(e)||(e=function(t,e){if(r&&(e=r.call(this,t,e)),!H(e))return e}),n[1]=e,F.apply(N,n)}}}),I[L][C]||r(20)(I[L],C,I[L].valueOf),h(I,"Symbol"),h(Math,"Math",!0),h(n.JSON,"JSON",!0)},function(t,e,r){r(50)("asyncIterator")},function(t,e,r){r(50)("observable")},function(t,e,r){r(145);for(var n=r(13),i=r(20),a=r(40),u=r(21)("toStringTag"),o=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var l=o[s],f=n[l],h=f&&f.prototype;h&&!h[u]&&i(h,u,l),a[l]=a.Array}},function(t,e){t.exports=function(t){"string"==typeof t&&(t=[t]);for(var e=[].slice.call(arguments,1),r=[],n=0;n<t.length-1;n++)r.push(t[n],e[n]||"");return r.push(t[n]),r.join("")}},function(t,e){function r(t){var e=new Int32Array(t,0,p);if(e[m]!==a)throw new Error("Invalid magic number in DDS header");if(!e[x]&o)throw new Error("Unsupported format, must contain a FourCC code");var r,n,R=e[T];switch(R){case s:r=8,n="dxt1";break;case l:r=16,n="dxt3";break;case f:r=16,n="dxt5";break;case c:n="rgba32f";break;case h:var w=new Uint32Array(t.slice(128,148));n=w[0];var P=w[1];w[2],w[3],w[4];if(P!==v||n!==_)throw new Error("Unsupported DX10 texture format "+n);n="rgba32f";break;default:throw new Error("Unsupported FourCC code: "+i(R))}var S=e[E],O=1;S&u&&(O=Math.max(1,e[y]));var I=!1,N=e[A];N&d&&(I=!0);var F,L=e[b],k=e[M],C=e[g]+4,D=L,U=k,B=[];if(R===h&&(C+=20),I)for(var q=0;q<6;q++){if("rgba32f"!==n)throw new Error("Only RGBA32f cubemaps are supported");var X=16;L=D,k=U;for(var j=Math.log(L)/Math.log(2)+1,V=0;V<j;V++)F=L*k*X,B.push({offset:C,length:F,shape:[L,k]}),V<O&&(C+=F),L=Math.floor(L/2),k=Math.floor(k/2)}else for(var V=0;V<O;V++)F=Math.max(4,L)/4*Math.max(4,k)/4*r,B.push({offset:C,length:F,shape:[L,k]}),C+=F,L=Math.floor(L/2),k=Math.floor(k/2);return{shape:[D,U],images:B,format:n,flags:S,cubemap:I}}function n(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function i(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}var a=542327876,u=131072,o=4,s=n("DXT1"),l=n("DXT3"),f=n("DXT5"),h=n("DX10"),c=116,d=512,v=3,_=2,p=31,m=0,g=1,E=2,M=3,b=4,y=7,x=20,T=21,A=28;t.exports=r},function(t,e){t.exports="// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\t// vec3 color = vNormal;\n\tvec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}"},function(t,e){t.exports="// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}"},function(t,e){t.exports="// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}"},function(t,e){t.exports="// blur13.frag\n// source  : https://github.com/Jam3/glsl-fast-gaussian-blur\n\n#define SHADER_NAME BLUR_13\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform vec2 uDirection;\nuniform vec2 uResolution;\n\nvec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n\tvec4 color = vec4(0.0);\n\tvec2 off1 = vec2(1.411764705882353) * direction;\n\tvec2 off2 = vec2(3.2941176470588234) * direction;\n\tvec2 off3 = vec2(5.176470588235294) * direction;\n\tcolor += texture2D(image, uv) * 0.1964825501511404;\n\tcolor += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;\n\tcolor += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;\n\tcolor += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;\n\tcolor += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;\n\tcolor += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;\n\tcolor += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;\n\treturn color;\n}\n\n\nvoid main(void) {\n    gl_FragColor = blur13(texture, vTextureCoord, uResolution, uDirection);\n}"},function(t,e){t.exports="// blur5.frag\n// source  : https://github.com/Jam3/glsl-fast-gaussian-blur\n\n#define SHADER_NAME BLUR_5\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform vec2 uDirection;\nuniform vec2 uResolution;\n\nvec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n\tvec4 color = vec4(0.0);\n\tvec2 off1 = vec2(1.3333333333333333) * direction;\n\tcolor += texture2D(image, uv) * 0.29411764705882354;\n\tcolor += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;\n\tcolor += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;\n\treturn color; \n}\n\n\nvoid main(void) {\n    gl_FragColor = blur5(texture, vTextureCoord, uResolution, uDirection);\n}"},function(t,e){t.exports="// blur9.frag\n// source  : https://github.com/Jam3/glsl-fast-gaussian-blur\n\n#define SHADER_NAME BLUR_9\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform vec2 uDirection;\nuniform vec2 uResolution;\n\nvec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n\tvec4 color = vec4(0.0);\n\tvec2 off1 = vec2(1.3846153846) * direction;\n\tvec2 off2 = vec2(3.2307692308) * direction;\n\tcolor += texture2D(image, uv) * 0.2270270270;\n\tcolor += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;\n\tcolor += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;\n\tcolor += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;\n\tcolor += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;\n\treturn color;\n}\n\n\nvoid main(void) {\n    gl_FragColor = blur9(texture, vTextureCoord, uResolution, uDirection);\n}"},function(t,e){t.exports="// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n    gl_PointSize = 1.0;\n    vNormal = aNormal;\n}"},function(t,e){t.exports="// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tmat4 matView = uViewMatrix;\n\tmatView[3][0] = 0.0;\n\tmatView[3][1] = 0.0;\n\tmatView[3][2] = 0.0;\n\t\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"}])});
	//# sourceMappingURL=alfrid.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(72);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(73);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(71);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(39);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 10 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(17);
	var IE8_DOM_DEFINE = __webpack_require__(43);
	var toPrimitive = __webpack_require__(33);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var core = __webpack_require__(7);
	var ctx = __webpack_require__(41);
	var hide = __webpack_require__(13);
	var has = __webpack_require__(10);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(9) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(87);
	var defined = __webpack_require__(23);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var store = __webpack_require__(31)('wks');
	var uid = __webpack_require__(22);
	var Symbol = __webpack_require__(8).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assetList = __webpack_require__(38);

	var _assetList2 = _interopRequireDefault(_assetList);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Assets.js

	var Assets = {};
	var _assets = [];

	var getAsset = function getAsset(id) {
		return assets.find(function (a) {
			return a.id === id;
		}).file;
	};

	var getExtension = function getExtension(mFile) {
		var ary = mFile.split('.');
		return ary[ary.length - 1];
	};

	Assets.init = function () {
		var hdrCubemaps = {};
		_assets = _assetList2.default.map(function (o) {
			var ext = getExtension(o.url);
			var file = getAsset(o.id);
			var texture = void 0;

			switch (ext) {
				case 'jpg':
				case 'png':
					texture = new _alfrid.GLTexture(file);
					return {
						id: o.id,
						file: texture
					};
					break;

				case 'hdr':
					var cubemapName = o.id.split('_')[0];
					texture = _alfrid2.default.HDRLoader.parse(file);

					var oAsset = {
						id: o.id,
						file: texture
					};

					if (!hdrCubemaps[cubemapName]) {
						hdrCubemaps[cubemapName] = [];
					}

					hdrCubemaps[cubemapName].push(oAsset);
					return oAsset;

					break;
				case 'dds':
					texture = _alfrid.GLCubeTexture.parseDDS(file);
					return {
						id: o.id,
						file: texture
					};
					break;

				case 'obj':
					var mesh = _alfrid.ObjLoader.parse(file);
					return {
						id: o.id,
						file: mesh
					};
					break;
			}
		});

		for (var s in hdrCubemaps) {
			if (hdrCubemaps[s].length == 6) {
				console.log('Generate Cubemap :', s);

				var ary = [Assets.get(s + '_posx'), Assets.get(s + '_negx'), Assets.get(s + '_posy'), Assets.get(s + '_negy'), Assets.get(s + '_posz'), Assets.get(s + '_negz')];

				var texture = new _alfrid2.default.GLCubeTexture(ary);
				_assets.push({
					id: s,
					file: texture
				});
			}
		}

		if (_assets.length > 0) {
			console.debug('ASSETS:');
			console.table(_assets);
		}
	};

	Assets.get = function (mId) {
		return _assets.find(function (a) {
			return a.id === mId;
		}).file;
	};

	exports.default = Assets;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = true;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(17);
	var dPs = __webpack_require__(92);
	var enumBugKeys = __webpack_require__(24);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(42)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(86).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(49);
	var enumBugKeys = __webpack_require__(24);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(10);
	var TAG = __webpack_require__(16)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(31)('keys');
	var uid = __webpack_require__(22);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(7);
	var global = __webpack_require__(8);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(20) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ },
/* 32 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var core = __webpack_require__(7);
	var LIBRARY = __webpack_require__(20);
	var wksExt = __webpack_require__(35);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(16);


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventEmitter = __webpack_require__(113).EventEmitter;

	function Emitter() {
	    EventEmitter.call(this);
	    this.setMaxListeners(20);
	}

	Emitter.prototype = Object.create(EventEmitter.prototype);
	Emitter.prototype.constructor = Emitter;

	Emitter.prototype.off = function(type, listener) {
	    if (listener) {
	        return this.removeListener(type, listener);
	    }
	    if (type) {
	        return this.removeAllListeners(type);
	    }
	    return this.removeAllListeners();
	};

	module.exports = Emitter;


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    mbs: 0,
	    secs: 0,
	    update: function(request, startTime, url, log) {
	        var length;
	        var headers = request.getAllResponseHeaders();
	        if (headers) {
	            var match = headers.match(/content-length: (\d+)/i);
	            if (match && match.length) {
	                length = match[1];
	            }
	        }
	        // var length = request.getResponseHeader('Content-Length');
	        if (length) {
	            length = parseInt(length, 10);
	            var mbs = length / 1024 / 1024;
	            var secs = (Date.now() - startTime) / 1000;
	            this.secs += secs;
	            this.mbs += mbs;
	            if (log) {
	                this.log(url, mbs, secs);
	            }
	        } else if(log) {
	            console.warn.call(console, 'Can\'t get Content-Length:', url);
	        }
	    },
	    log: function(url, mbs, secs) {
	        if (url) {
	            var file = 'File loaded: ' +
	                url.substr(url.lastIndexOf('/') + 1) +
	                ' size:' + mbs.toFixed(2) + 'mb' +
	                ' time:' + secs.toFixed(2) + 's' +
	                ' speed:' + (mbs / secs).toFixed(2) + 'mbps';

	            console.log.call(console, file);
	        }
	        var total = 'Total loaded: ' + this.mbs.toFixed(2) + 'mb' +
	            ' time:' + this.secs.toFixed(2) + 's' +
	            ' speed:' + this.getMbps().toFixed(2) + 'mbps';
	        console.log.call(console, total);
	    },
	    getMbps: function() {
	        return this.mbs / this.secs;
	    }
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var assetsToLoad = [{ "id": "noise", "url": "assets/img/noise.png", "type": "png" }, { "id": "paper-ball", "url": "assets/img/paper-ball.jpg", "type": "jpg" }];

	exports.default = assetsToLoad;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(75);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(74);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(82);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	var document = __webpack_require__(8).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(9) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(20);
	var $export = __webpack_require__(12);
	var redefine = __webpack_require__(50);
	var hide = __webpack_require__(13);
	var Iterators = __webpack_require__(25);
	var $iterCreate = __webpack_require__(89);
	var setToStringTag = __webpack_require__(29);
	var getPrototypeOf = __webpack_require__(48);
	var ITERATOR = __webpack_require__(16)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(28);
	var createDesc = __webpack_require__(21);
	var toIObject = __webpack_require__(15);
	var toPrimitive = __webpack_require__(33);
	var has = __webpack_require__(10);
	var IE8_DOM_DEFINE = __webpack_require__(43);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(49);
	var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(10);
	var toObject = __webpack_require__(51);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has = __webpack_require__(10);
	var toIObject = __webpack_require__(15);
	var arrayIndexOf = __webpack_require__(84)(false);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	module.exports = (function() {
	    try {
	        return !!new Blob();
	    } catch (e) {
	        return false;
	    }
	}());


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Emitter = __webpack_require__(36);
	var createLoader = __webpack_require__(55);
	var autoId = 0;

	module.exports = function createGroup(config) {
	    var group;
	    var map = {};
	    var assets = [];
	    var queue = [];
	    var numLoaded = 0;
	    var numTotal = 0;
	    var loaders = {};

	    var add = function(options) {
	        // console.debug('add', options);
	        if (Array.isArray(options)) {
	            options.forEach(add);
	            return group;
	        }
	        var isGroup = !!options.assets && Array.isArray(options.assets);
	        // console.debug('isGroup', isGroup);
	        var loader;
	        if (isGroup) {
	            loader = createGroup(configure(options, config));
	        } else {
	            loader = createLoader(configure(options, config));
	        }
	        loader.once('destroy', destroyHandler);
	        queue.push(loader);
	        loaders[loader.id] = loader;
	        return group;
	    };

	    var get = function(id) {
	        if (!arguments.length) {
	            return assets;
	        }
	        return map[id];
	    };

	    var find = function(id) {
	        if (get(id)) {
	            return get(id);
	        }
	        var found = null;
	        // assets.filter(function(asset) {
	        //     return asset.type === 'group';
	        // }).map(function(asset) {
	        //     return loaders[asset.id];
	        // }).some(function(loader) {
	        //     found = loader.find(id);
	        //     return !!found;
	        // });
	        Object.keys(loaders).some(function(key) {
	            found = loaders[key].find && loaders[key].find(id);
	            return !!found;
	        });
	        return found;
	    };

	    var getExtension = function(url) {
	        return url && url.split('?')[0].split('.').pop().toLowerCase();
	    };

	    var configure = function(options, defaults) {
	        if (typeof options === 'string') {
	            var url = options;
	            options = {
	                url: url
	            };
	        }

	        if (options.isTouchLocked === undefined) {
	            options.isTouchLocked = defaults.isTouchLocked;
	        }

	        if (options.blob === undefined) {
	            options.blob = defaults.blob;
	        }

	        if (options.basePath === undefined) {
	            options.basePath = defaults.basePath;
	        }

	        options.id = options.id || options.url || String(++autoId);
	        options.type = options.type || getExtension(options.url);
	        options.crossOrigin = options.crossOrigin || defaults.crossOrigin;
	        options.webAudioContext = options.webAudioContext || defaults.webAudioContext;
	        options.log = defaults.log;

	        return options;
	    };

	    var start = function() {
	        numTotal = queue.length;

	        queue.forEach(function(loader) {
	            loader
	                .on('progress', progressHandler)
	                .once('complete', completeHandler)
	                .once('error', errorHandler)
	                .start();
	        });

	        queue = [];

	        return group;
	    };

	    var progressHandler = function(progress) {
	        var loaded = numLoaded + progress;
	        group.emit('progress', loaded / numTotal);
	    };

	    var completeHandler = function(asset, id, type) {
	        if (Array.isArray(asset)) {
	            asset = { id: id, file: asset, type: type };
	        }
	        numLoaded++;
	        group.emit('progress', numLoaded / numTotal);
	        map[asset.id] = asset.file;
	        assets.push(asset);
	        group.emit('childcomplete', asset);
	        checkComplete();
	    };

	    var errorHandler = function(err) {
	        numTotal--;
	        if (group.listeners('error').length) {
	            group.emit('error', err);
	        } else {
	            console.error(err);
	        }
	        checkComplete();
	    };

	    var destroyHandler = function(id) {
	        loaders[id] = null;
	        delete loaders[id];

	        map[id] = null;
	        delete map[id];

	        assets.some(function(asset, i) {
	            if (asset.id === id) {
	                assets.splice(i, 1);
	                return true;
	            }
	        });
	    };

	    var checkComplete = function() {
	        if (numLoaded >= numTotal) {
	            group.emit('complete', assets, config.id, 'group');
	        }
	    };

	    var destroy = function() {
	        while (queue.length) {
	            queue.pop().destroy();
	        }
	        group.off('error');
	        group.off('progress');
	        group.off('complete');
	        assets = [];
	        map = {};
	        config.webAudioContext = null;
	        numTotal = 0;
	        numLoaded = 0;

	        Object.keys(loaders).forEach(function(key) {
	            loaders[key].destroy();
	        });
	        loaders = {};

	        group.emit('destroy', group.id);

	        return group;
	    };

	    // emits: progress, error, complete, destroy

	    group = Object.create(Emitter.prototype, {
	        _events: {
	            value: {}
	        },
	        id: {
	            get: function() {
	                return config.id;
	            }
	        },
	        add: {
	            value: add
	        },
	        start: {
	            value: start
	        },
	        get: {
	            value: get
	        },
	        find: {
	            value: find
	        },
	        getLoader: {
	            value: function(id) {
	                return loaders[id];
	            }
	        },
	        loaded: {
	            get: function() {
	                return numLoaded >= numTotal;
	            }
	        },
	        file: {
	            get: function() {
	                return assets;
	            }
	        },
	        destroy: {
	            value: destroy
	        }
	    });

	    config = configure(config || {}, {
	        basePath: '',
	        blob: false,
	        touchLocked: false,
	        crossOrigin: null,
	        webAudioContext: null,
	        log: false
	    });

	    if (Array.isArray(config.assets)) {
	        add(config.assets);
	    }

	    return Object.freeze(group);
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assetsLoader = __webpack_require__(53);
	assetsLoader.stats = __webpack_require__(37);

	module.exports = assetsLoader;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Emitter = __webpack_require__(36);
	var browserHasBlob = __webpack_require__(52);
	var stats = __webpack_require__(37);

	module.exports = function(options) {
	    var id = options.id;
	    var basePath = options.basePath || '';
	    var url = options.url;
	    var type = options.type;
	    var crossOrigin = options.crossOrigin;
	    var isTouchLocked = options.isTouchLocked;
	    var blob = options.blob && browserHasBlob;
	    var webAudioContext = options.webAudioContext;
	    var log = options.log;

	    var loader;
	    var loadHandler;
	    var request;
	    var startTime;
	    var timeout;
	    var file;

	    var start = function() {
	        startTime = Date.now();

	        switch (type) {
	            case 'json':
	                loadJSON();
	                break;
	            case 'jpg':
	            case 'png':
	            case 'gif':
	            case 'webp':
	                loadImage();
	                break;
	            case 'mp3':
	            case 'ogg':
	            case 'opus':
	            case 'wav':
	            case 'm4a':
	                loadAudio();
	                break;
	            case 'ogv':
	            case 'mp4':
	            case 'webm':
	            case 'hls':
	                loadVideo();
	                break;
	            case 'bin':
	            case 'binary':
	                loadXHR('arraybuffer');
	                break;
	            case 'txt':
	            case 'text':
	                loadXHR('text');
	                break;
	            default:
	                throw 'AssetsLoader ERROR: Unknown type for file with URL: ' + basePath + url + ' (' + type + ')';
	        }
	    };

	    var dispatchComplete = function(data) {
	        if (!data) {
	            return;
	        }
	        file = {id: id, file: data, type: type};
	        loader.emit('progress', 1);
	        loader.emit('complete', file, id, type);
	        removeListeners();
	    };

	    var loadXHR = function(responseType, customLoadHandler) {
	        loadHandler = customLoadHandler || completeHandler;

	        request = new XMLHttpRequest();
	        request.open('GET', basePath + url, true);
	        request.responseType = responseType;
	        request.addEventListener('progress', progressHandler);
	        request.addEventListener('load', loadHandler);
	        request.addEventListener('error', errorHandler);
	        request.send();
	    };

	    var progressHandler = function(event) {
	        if (event.lengthComputable) {
	            loader.emit('progress', event.loaded / event.total);
	        }
	    };

	    var completeHandler = function() {
	        if (success()) {
	            dispatchComplete(request.response);
	        }
	    };

	    var success = function() {
	        if (request && request.status < 400) {
	            stats.update(request, startTime, url, log);
	            return true;
	        }
	        errorHandler(request && request.statusText);
	        return false;
	    };

	    // json

	    var loadJSON = function() {
	        loadXHR('json', function() {
	            if (success()) {
	                var data = request.response;
	                if (typeof data === 'string') {
	                    data = JSON.parse(data);
	                }
	                dispatchComplete(data);
	            }
	        });
	    };

	    // image

	    var loadImage = function() {
	        if (blob) {
	            loadImageBlob();
	        } else {
	            loadImageElement();
	        }
	    };

	    var loadImageElement = function() {
	        request = new Image();
	        if (crossOrigin) {
	            request.crossOrigin = 'anonymous';
	        }
	        request.addEventListener('error', errorHandler, false);
	        request.addEventListener('load', elementLoadHandler, false);
	        request.src = basePath + url;
	    };

	    var elementLoadHandler = function() {
	        window.clearTimeout(timeout);
	        dispatchComplete(request);
	    };

	    var loadImageBlob = function() {
	        loadXHR('blob', function() {
	            if (success()) {
	                request = new Image();
	                request.addEventListener('error', errorHandler, false);
	                request.addEventListener('load', imageBlobHandler, false);
	                request.src = window.URL.createObjectURL(request.response);
	            }
	        });
	    };

	    var imageBlobHandler = function() {
	        window.URL.revokeObjectURL(request.src);
	        dispatchComplete(request);
	    };

	    // audio

	    var loadAudio = function() {
	        if (webAudioContext) {
	            loadAudioBuffer();
	        } else {
	            loadMediaElement('audio');
	        }
	    };

	    // video

	    var loadVideo = function() {
	        if (blob) {
	            loadXHR('blob');
	        } else {
	            loadMediaElement('video');
	        }
	    };

	    // audio buffer

	    var loadAudioBuffer = function() {
	        loadXHR('arraybuffer', function() {
	            if (success()) {
	                webAudioContext.decodeAudioData(
	                    request.response,
	                    function(buffer) {
	                        request = null;
	                        dispatchComplete(buffer);
	                    },
	                    function(e) {
	                        errorHandler(e);
	                    }
	                );
	            }
	        });
	    };

	    // media element

	    var loadMediaElement = function(tagName) {
	        request = document.createElement(tagName);

	        if (!isTouchLocked) {
	            // timeout because sometimes canplaythrough doesn't fire
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(elementLoadHandler, 2000);
	            request.addEventListener('canplaythrough', elementLoadHandler, false);
	        }

	        request.addEventListener('error', errorHandler, false);
	        request.preload = 'auto';
	        request.src = basePath + url;
	        request.load();

	        if (isTouchLocked) {
	            dispatchComplete(request);
	        }
	    };

	    // error

	    var errorHandler = function(err) {
	        window.clearTimeout(timeout);

	        var message = err;

	        if (request && request.tagName && request.error) {
	            var ERROR_STATE = ['', 'ABORTED', 'NETWORK', 'DECODE', 'SRC_NOT_SUPPORTED'];
	            message = 'MediaError: ' + ERROR_STATE[request.error.code] + ' ' + request.src;
	        } else if (request && request.statusText) {
	            message = request.statusText;
	        } else if (err && err.message) {
	            message = err.message;
	        } else if (err && err.type) {
	            message = err.type;
	        }

	        loader.emit('error', 'Error loading "' + basePath + url + '" ' + message);

	        destroy();
	    };

	    // clean up

	    var removeListeners = function() {
	        loader.off('error');
	        loader.off('progress');
	        loader.off('complete');

	        if (request) {
	            request.removeEventListener('progress', progressHandler);
	            request.removeEventListener('load', loadHandler);
	            request.removeEventListener('error', errorHandler);
	            request.removeEventListener('load', elementLoadHandler);
	            request.removeEventListener('canplaythrough', elementLoadHandler);
	            request.removeEventListener('load', imageBlobHandler);
	        }
	    };

	    var destroy = function() {
	        removeListeners();

	        if (request && request.abort && request.readyState < 4) {
	            request.abort();
	        }

	        request = null;
	        webAudioContext = null;
	        file = null;

	        window.clearTimeout(timeout);

	        loader.emit('destroy', id);
	    };

	    // emits: progress, error, complete

	    loader = Object.create(Emitter.prototype, {
	        _events: {
	            value: {}
	        },
	        id: {
	            value: options.id
	        },
	        start: {
	            value: start
	        },
	        loaded: {
	            get: function() {
	                return !!file;
	            }
	        },
	        file: {
	            get: function() {
	                return file;
	            }
	        },
	        destroy: {
	            value: destroy
	        }
	    });

	    return Object.freeze(loader);
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _ViewLines = __webpack_require__(64);

	var _ViewLines2 = _interopRequireDefault(_ViewLines);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// LineRenderer.js

	var LineRenderer = function () {
		function LineRenderer() {
			(0, _classCallCheck3.default)(this, LineRenderer);

			this._vLines = new _ViewLines2.default();
		}

		(0, _createClass3.default)(LineRenderer, [{
			key: 'render',
			value: function render(linesMap, textureExtra) {
				var curr = void 0,
				    next = void 0;
				for (var i = 1; i < linesMap.length - 2; i++) {
					curr = linesMap[i].getTexture();
					next = linesMap[i + 1].getTexture();

					this._vLines.render(curr, next, textureExtra);
				}
			}
		}]);
		return LineRenderer;
	}();

	exports.default = LineRenderer;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LinesMap = function () {
		function LinesMap() {
			(0, _classCallCheck3.default)(this, LinesMap);

			this._init();
		}

		(0, _createClass3.default)(LinesMap, [{
			key: '_init',
			value: function _init() {
				this._lineMaps = [];

				var numParticles = params.numParticles;
				var o = {
					minFilter: _alfrid.GL.NEAREST,
					magFilter: _alfrid.GL.NEAREST,
					type: _alfrid.GL.FLOAT
				};

				for (var i = 0; i < params.numSeg; i++) {
					var fbo = new _alfrid2.default.FrameBuffer(numParticles, numParticles, o);
					this._lineMaps.push(fbo);
				}

				this._bCopy = new _alfrid2.default.BatchCopy();
			}
		}, {
			key: 'reset',
			value: function reset(fbo) {
				for (var i = 0; i < this._lineMaps.length; i++) {
					this.save(fbo);
				}
			}
		}, {
			key: 'save',
			value: function save(fbo) {
				var targetFbo = this._lineMaps.pop();
				targetFbo.bind();
				_alfrid.GL.clear(0, 0, 0, 0);
				this._bCopy.draw(fbo.getTexture());
				targetFbo.unbind();
				this._lineMaps.unshift(targetFbo);
			}
		}, {
			key: 'maps',
			get: function get() {
				return this._lineMaps;
			}
		}]);
		return LinesMap;
	}(); // LinesMap.js


	exports.default = LinesMap;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _ViewSave = __webpack_require__(68);

	var _ViewSave2 = _interopRequireDefault(_ViewSave);

	var _ViewRender = __webpack_require__(67);

	var _ViewRender2 = _interopRequireDefault(_ViewRender);

	var _ViewSim = __webpack_require__(69);

	var _ViewSim2 = _interopRequireDefault(_ViewSim);

	var _ViewBg = __webpack_require__(62);

	var _ViewBg2 = _interopRequireDefault(_ViewBg);

	var _ViewBall = __webpack_require__(61);

	var _ViewBall2 = _interopRequireDefault(_ViewBall);

	var _ViewPost = __webpack_require__(66);

	var _ViewPost2 = _interopRequireDefault(_ViewPost);

	var _ViewFxaa = __webpack_require__(63);

	var _ViewFxaa2 = _interopRequireDefault(_ViewFxaa);

	var _ViewNoise = __webpack_require__(65);

	var _ViewNoise2 = _interopRequireDefault(_ViewNoise);

	var _SphereMap = __webpack_require__(59);

	var _SphereMap2 = _interopRequireDefault(_SphereMap);

	var _LinesMap = __webpack_require__(57);

	var _LinesMap2 = _interopRequireDefault(_LinesMap);

	var _TouchDetect = __webpack_require__(60);

	var _TouchDetect2 = _interopRequireDefault(_TouchDetect);

	var _LineRenderer = __webpack_require__(56);

	var _LineRenderer2 = _interopRequireDefault(_LineRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.getAsset = function (id) {
			return assets.find(function (a) {
					return a.id === id;
			}).file;
	}; // SceneApp.js

	var SceneApp = function (_alfrid$Scene) {
			(0, _inherits3.default)(SceneApp, _alfrid$Scene);

			function SceneApp() {
					(0, _classCallCheck3.default)(this, SceneApp);

					var _this = (0, _possibleConstructorReturn3.default)(this, (SceneApp.__proto__ || (0, _getPrototypeOf2.default)(SceneApp)).call(this));

					_alfrid.GL.enableAlphaBlending();

					_this._count = 0;
					_this.camera.setPerspective(Math.PI / 2, _alfrid.GL.aspectRatio, .1, 100);
					_this.orbitalControl.radius.value = 10;
					_this.orbitalControl.rx.value = _this.orbitalControl.ry.value = 0.3;

					_this.orbitalControl.radius.limit(9, 15);

					_this.resize();
					return _this;
			}

			(0, _createClass3.default)(SceneApp, [{
					key: '_initTextures',
					value: function _initTextures() {
							console.log('init textures');

							//	FBOS
							var numParticles = params.numParticles;
							var o = {
									minFilter: _alfrid.GL.NEAREST,
									magFilter: _alfrid.GL.NEAREST,
									type: _alfrid.GL.FLOAT
							};

							this._fboCurrent = new _alfrid2.default.FrameBuffer(numParticles, numParticles, o, true);
							this._fboTarget = new _alfrid2.default.FrameBuffer(numParticles, numParticles, o, true);

							this._fboRender = new _alfrid2.default.FrameBuffer(_alfrid.GL.width, _alfrid.GL.height);
							this._fboFXAA = new _alfrid2.default.FrameBuffer(_alfrid.GL.width, _alfrid.GL.height);
					}
			}, {
					key: '_initViews',
					value: function _initViews() {
							console.log('init views');

							//	helpers
							// this._bCopy = new alfrid.BatchCopy();
							// this._bAxis = new alfrid.BatchAxis();
							// this._bDots = new alfrid.BatchDotsPlane();
							this._bBall = new _alfrid2.default.BatchBall();

							this._vBg = new _ViewBg2.default();
							this._vBall = new _ViewBall2.default();
							this._vPost = new _ViewPost2.default();
							this._vNoise = new _ViewNoise2.default();

							this._touchDetect = new _TouchDetect2.default(this._vBall.mesh, this.camera, _alfrid.GL.canvas);

							//	views
							this._vRender = new _ViewRender2.default();
							this._vSim = new _ViewSim2.default();

							this._vSave = new _ViewSave2.default();
							_alfrid.GL.setMatrices(this.cameraOrtho);

							this._fboCurrent.bind();
							_alfrid.GL.clear(0, 0, 0, 0);
							this._vSave.render();
							this._fboCurrent.unbind();

							this._fboTarget.bind();
							_alfrid.GL.clear(0, 0, 0, 0);
							this._vSave.render();
							this._fboTarget.unbind();

							_alfrid.GL.setMatrices(this.camera);

							this._sphereMap = new _SphereMap2.default();
							this._linesMap = new _LinesMap2.default();
							this._linesMap.reset(this._fboCurrent);

							this._lineRenderer = new _LineRenderer2.default();
					}
			}, {
					key: 'updateFbo',
					value: function updateFbo() {
							var hit = this._touchDetect.hit;


							this._fboTarget.bind();
							_alfrid.GL.clear(0, 0, 0, 1);
							this._vSim.render(this._fboCurrent.getTexture(1), this._fboCurrent.getTexture(0), this._fboCurrent.getTexture(2), this._fboCurrent.getTexture(3), hit);
							this._fboTarget.unbind();

							var tmp = this._fboCurrent;
							this._fboCurrent = this._fboTarget;
							this._fboTarget = tmp;

							this._linesMap.save(this._fboCurrent);
					}
			}, {
					key: 'render',
					value: function render() {

							this._count++;
							if (this._count % params.skipCount == 0) {
									this._count = 0;
									this.updateFbo();
							}

							var p = this._count / params.skipCount;

							this._sphereMap.update();

							this._fboRender.bind();

							_alfrid.GL.clear(0, 0, 0, 0);
							_alfrid.GL.disable(_alfrid.GL.DEPTH_TEST);
							this._vBg.render();
							this._vNoise.render();
							_alfrid.GL.enable(_alfrid.GL.DEPTH_TEST);

							this._vBall.render();
							this._vRender.render(this._fboTarget.getTexture(0), this._fboCurrent.getTexture(0), p, this._fboCurrent.getTexture(2));
							this._lineRenderer.render(this._linesMap.maps, this._fboCurrent.getTexture(2));

							this._fboRender.unbind();

							//	RENDER POST 
							// this._fboFXAA.bind();
							_alfrid.GL.clear(0, 0, 0, 0);
							this._vPost.render(this._fboRender.getTexture(), this._sphereMap.getTexture());
							// this._fboFXAA.unbind();

							//	OUTPUT WITH FXAA
							// GL.clear(0, 0, 0, 0);
							// this._vFxaa.render(this._fboFXAA.getTexture());
					}
			}, {
					key: 'resize',
					value: function resize() {
							// const scale = 1.25;
							var scale = 1.;
							_alfrid.GL.setSize(window.innerWidth * scale, window.innerHeight * scale);
							this.camera.setAspectRatio(_alfrid.GL.aspectRatio);

							this._fboRender = new _alfrid2.default.FrameBuffer(_alfrid.GL.width, _alfrid.GL.height);
							this._fboFXAA = new _alfrid2.default.FrameBuffer(_alfrid.GL.width, _alfrid.GL.height);
					}
			}]);
			return SceneApp;
	}(_alfrid2.default.Scene);

	exports.default = SceneApp;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SphereMap = function () {
		function SphereMap() {
			(0, _classCallCheck3.default)(this, SphereMap);

			var fboMapSize = 256 * 2;
			this._fboSphere = new _alfrid2.default.FrameBuffer(fboMapSize, fboMapSize);
			// this._fboSphere = new alfrid.FrameBuffer(GL.width, GL.height);

			this._bBall = new _alfrid2.default.BatchBall();
		}

		(0, _createClass3.default)(SphereMap, [{
			key: 'update',
			value: function update() {
				this._fboSphere.bind();
				_alfrid.GL.clear();
				var s = params.sphereSize;
				this._bBall.draw([0, 0, 0], [s, s, s], [1, 1, 1]);
				this._fboSphere.unbind();
			}
		}, {
			key: 'getTexture',
			value: function getTexture() {
				return this._fboSphere.getTexture();
			}
		}]);
		return SphereMap;
	}(); // SphereMap.js

	exports.default = SphereMap;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var v0 = void 0,
	    v1 = void 0,
	    v2 = void 0; // TouchDetect.js

	var TouchDetect = function (_EventDispatcher) {
		(0, _inherits3.default)(TouchDetect, _EventDispatcher);

		function TouchDetect(mesh, camera) {
			var listenerTarget = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
			(0, _classCallCheck3.default)(this, TouchDetect);

			var _this = (0, _possibleConstructorReturn3.default)(this, (TouchDetect.__proto__ || (0, _getPrototypeOf2.default)(TouchDetect)).call(this));

			_this._mesh = mesh;
			_this._camera = camera;

			_this._isMouseDown = false;
			_this._listenerTarget = listenerTarget;
			_this._ray = new _alfrid.Ray([0, 0, 0], [0, 0, -1]);
			_this._hit = vec3.fromValues(-999, -999, -999);
			_this._count = 0;

			mesh.generateFaces();
			_this._faceVertices = mesh.faces.map(function (face) {
				return face.vertices;
			});

			_this._initEvents();
			return _this;
		}

		(0, _createClass3.default)(TouchDetect, [{
			key: '_initEvents',
			value: function _initEvents() {
				var _this2 = this;

				this._listenerTarget.addEventListener('mousedown', function () {
					return _this2._onDown();
				});
				this._listenerTarget.addEventListener('mouseup', function () {
					return _this2._onUp();
				});
				this._listenerTarget.addEventListener('mousemove', function (e) {
					return _this2._onMove(e);
				});
			}
		}, {
			key: '_onDown',
			value: function _onDown(e) {
				this._isMouseDown = true;
				this.trigger('down');
			}
		}, {
			key: '_onUp',
			value: function _onUp(e) {
				this._isMouseDown = false;
				this.trigger('up');
			}
		}, {
			key: '_onMove',
			value: function _onMove(e) {
				if (this._count++ % 5 !== 0) {
					return;
				}
				var mx = e.clientX / window.innerWidth * 2.0 - 1.0;
				var my = -(e.clientY / window.innerHeight) * 2.0 + 1.0;

				this._camera.generateRay([mx, my, 0], this._ray);

				var hit = void 0;
				var offset = 0;

				var faceVertices = this._faceVertices;

				for (var i = 0; i < faceVertices.length; i++) {
					var vertices = faceVertices[i];
					v0 = [vertices[0][0], vertices[0][1] + offset, vertices[0][2]];
					v1 = [vertices[1][0], vertices[1][1] + offset, vertices[1][2]];
					v2 = [vertices[2][0], vertices[2][1] + offset, vertices[2][2]];

					hit = this._ray.intersectTriangle(v0, v1, v2);
					if (hit) {
						break;
					}
				}

				if (!hit) {
					hit = [-999, -999, -999];
				}
				vec3.copy(this._hit, hit);
			}
		}, {
			key: 'isMouseDown',
			get: function get() {
				return this._isMouseDown;
			}
		}, {
			key: 'hit',
			get: function get() {
				return this._hit;
			}
		}]);
		return TouchDetect;
	}(_alfrid.EventDispatcher);

	exports.default = TouchDetect;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _Assets = __webpack_require__(19);

	var _Assets2 = _interopRequireDefault(_Assets);

	var _ball = __webpack_require__(115);

	var _ball2 = _interopRequireDefault(_ball);

	var _ball3 = __webpack_require__(114);

	var _ball4 = _interopRequireDefault(_ball3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ViewBall.js

	var ViewBall = function (_alfrid$View) {
		(0, _inherits3.default)(ViewBall, _alfrid$View);

		function ViewBall() {
			(0, _classCallCheck3.default)(this, ViewBall);

			var _this = (0, _possibleConstructorReturn3.default)(this, (ViewBall.__proto__ || (0, _getPrototypeOf2.default)(ViewBall)).call(this, null, _ball4.default));

			_this.shaderOutline = new _alfrid2.default.GLShader(_ball2.default, _alfrid2.default.ShaderLibs.simpleColorFrag);

			_this.shaderOutline.bind();
			_this.shaderOutline.uniform("uLineWidth", "float", 1.025);
			_this.shaderOutline.uniform("color", "vec3", [1, 1, 1]);
			_this.shaderOutline.uniform("opacity", "float", 1.0);

			_this.shader.bind();
			_this.shader.uniform(params.light);
			_this.shader.uniform("texture", "uniform1i", 0);
			return _this;
		}

		(0, _createClass3.default)(ViewBall, [{
			key: '_init',
			value: function _init() {
				this.mesh = _alfrid2.default.Geom.sphere(params.sphereSize, 24 * 1.5);
				this.texture = _Assets2.default.get('paper-ball');
			}
		}, {
			key: 'render',
			value: function render() {
				this.shader.bind();
				this.texture.bind(0);
				_alfrid.GL.draw(this.mesh);

				this.shaderOutline.bind();
				_alfrid.GL.gl.cullFace(_alfrid.GL.gl.FRONT);
				_alfrid.GL.draw(this.mesh);
				_alfrid.GL.gl.cullFace(_alfrid.GL.gl.BACK);
			}
		}]);
		return ViewBall;
	}(_alfrid2.default.View);

	exports.default = ViewBall;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _Assets = __webpack_require__(19);

	var _Assets2 = _interopRequireDefault(_Assets);

	var _bg = __webpack_require__(116);

	var _bg2 = _interopRequireDefault(_bg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ViewBg = function (_alfrid$View) {
		(0, _inherits3.default)(ViewBg, _alfrid$View);

		function ViewBg() {
			(0, _classCallCheck3.default)(this, ViewBg);
			return (0, _possibleConstructorReturn3.default)(this, (ViewBg.__proto__ || (0, _getPrototypeOf2.default)(ViewBg)).call(this, _alfrid2.default.ShaderLibs.bigTriangleVert, _bg2.default));
		}

		(0, _createClass3.default)(ViewBg, [{
			key: '_init',
			value: function _init() {
				this.mesh = _alfrid2.default.Geom.bigTriangle();
				this.texture = _Assets2.default.get('paper-ball');
			}
		}, {
			key: 'render',
			value: function render() {
				this.shader.bind();
				this.shader.uniform("texture", "uniform1i", 0);
				this.texture.bind(0);
				this.shader.uniform("uRatio", "float", _alfrid.GL.aspectRatio);
				_alfrid.GL.draw(this.mesh);
			}
		}]);
		return ViewBg;
	}(_alfrid2.default.View); // ViewBg.js

	exports.default = ViewBg;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _fxaa = __webpack_require__(117);

	var _fxaa2 = _interopRequireDefault(_fxaa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ViewFxaa.js

	var ViewFxaa = function (_alfrid$View) {
		(0, _inherits3.default)(ViewFxaa, _alfrid$View);

		function ViewFxaa() {
			(0, _classCallCheck3.default)(this, ViewFxaa);
			return (0, _possibleConstructorReturn3.default)(this, (ViewFxaa.__proto__ || (0, _getPrototypeOf2.default)(ViewFxaa)).call(this, _alfrid2.default.ShaderLibs.bigTriangleVert, _fxaa2.default));
		}

		(0, _createClass3.default)(ViewFxaa, [{
			key: '_init',
			value: function _init() {
				this.mesh = _alfrid2.default.Geom.bigTriangle();
			}
		}, {
			key: 'render',
			value: function render(texture) {
				this.shader.bind();
				this.shader.uniform("texture", "uniform1i", 0);
				texture.bind(0);
				this.shader.uniform("rtWidth", "float", _alfrid.GL.width);
				this.shader.uniform("rtHeight", "float", _alfrid.GL.height);
				_alfrid.GL.draw(this.mesh);
			}
		}]);
		return ViewFxaa;
	}(_alfrid2.default.View);

	exports.default = ViewFxaa;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _lines = __webpack_require__(119);

	var _lines2 = _interopRequireDefault(_lines);

	var _lines3 = __webpack_require__(118);

	var _lines4 = _interopRequireDefault(_lines3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ViewLines = function (_alfrid$View) {
		(0, _inherits3.default)(ViewLines, _alfrid$View);

		function ViewLines() {
			(0, _classCallCheck3.default)(this, ViewLines);
			return (0, _possibleConstructorReturn3.default)(this, (ViewLines.__proto__ || (0, _getPrototypeOf2.default)(ViewLines)).call(this, _lines2.default, _lines4.default));
		}

		(0, _createClass3.default)(ViewLines, [{
			key: '_init',
			value: function _init() {
				var _params = params,
				    numParticles = _params.numParticles;

				var positions = [];
				var indices = [];
				var count = 0;
				var ux = void 0,
				    uy = void 0;

				for (var j = 0; j < numParticles; j++) {
					for (var i = 0; i < numParticles; i++) {
						ux = i / numParticles;
						uy = j / numParticles;
						positions.push([ux, uy, 0]);
						positions.push([ux, uy, 1]);

						indices.push(count);
						indices.push(count + 1);
						count += 2;
					}
				}

				this.mesh = new _alfrid2.default.Mesh(_alfrid.GL.LINES);
				this.mesh.bufferVertex(positions);
				this.mesh.bufferIndex(indices);

				this.shader.bind();
				var s = 0.4;
				this.shader.uniform("color", "vec3", [s, s, s]);
				this.shader.uniform("opacity", "float", .25);
				this.shader.uniform("textureCurr", "uniform1i", 0);
				this.shader.uniform("textureNext", "uniform1i", 1);
				this.shader.uniform("textureExtra", "uniform1i", 2);
				this.shader.uniform("uNumSeg", "float", params.numSeg);
				this.shader.uniform(params.lineLife);
			}
		}, {
			key: 'render',
			value: function render(textureCurr, textureNext, textureExtra) {
				this.shader.bind();
				textureCurr.bind(0);
				textureNext.bind(1);
				textureExtra.bind(2);
				_alfrid.GL.draw(this.mesh);
			}
		}]);
		return ViewLines;
	}(_alfrid2.default.View); // ViewLines.js

	exports.default = ViewLines;
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _Assets = __webpack_require__(19);

	var _Assets2 = _interopRequireDefault(_Assets);

	var _noise = __webpack_require__(121);

	var _noise2 = _interopRequireDefault(_noise);

	var _noise3 = __webpack_require__(120);

	var _noise4 = _interopRequireDefault(_noise3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ViewNoise.js

	var num = 200;
	var random = function random(min, max) {
		return min + Math.random() * (max - min);
	};

	var ViewNoise = function (_alfrid$View) {
		(0, _inherits3.default)(ViewNoise, _alfrid$View);

		function ViewNoise() {
			(0, _classCallCheck3.default)(this, ViewNoise);

			var _this = (0, _possibleConstructorReturn3.default)(this, (ViewNoise.__proto__ || (0, _getPrototypeOf2.default)(ViewNoise)).call(this, _noise2.default, _noise4.default));

			_this.time = 0;
			return _this;
		}

		(0, _createClass3.default)(ViewNoise, [{
			key: '_init',
			value: function _init() {
				var positions = [];
				var extra = [];
				var indices = [];
				var count = 0;
				var m = mat4.create();

				function getPos() {
					var v = vec3.fromValues(0, 0, -params.sphereSize + random(.1, 1.0));
					mat4.identity(m, m);
					mat4.rotateY(m, m, Math.random() * Math.PI * 2);
					mat4.rotateX(m, m, Math.random() * Math.PI - Math.PI / 2);

					vec3.transformMat4(v, v, m);
					return v;
				}

				for (var i = 0; i < num; i++) {
					positions.push(getPos());
					extra.push([Math.random(), Math.random(), Math.random()]);
					indices.push(count);
					count++;
				}

				this.mesh = new _alfrid2.default.Mesh(_alfrid.GL.POINTS);
				this.mesh.bufferVertex(positions);
				this.mesh.bufferData(extra, 'aExtra');

				this.texture = _Assets2.default.get('noise');
			}
		}, {
			key: 'render',
			value: function render() {
				this.time += 0.01;
				this.shader.bind();
				this.shader.uniform("texture", "uniform1i", 0);
				this.texture.bind(0);
				this.shader.uniform("time", "float", this.time);
				_alfrid.GL.draw(this.mesh);
			}
		}]);
		return ViewNoise;
	}(_alfrid2.default.View);

	exports.default = ViewNoise;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _post = __webpack_require__(122);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ViewPost.js

	var ViewPost = function (_alfrid$View) {
		(0, _inherits3.default)(ViewPost, _alfrid$View);

		function ViewPost() {
			(0, _classCallCheck3.default)(this, ViewPost);

			var _this = (0, _possibleConstructorReturn3.default)(this, (ViewPost.__proto__ || (0, _getPrototypeOf2.default)(ViewPost)).call(this, _alfrid2.default.ShaderLibs.bigTriangleVert, _post2.default));

			_this.offset = new _alfrid2.default.EaseNumber(0);
			_this._toggle = false;

			window.addEventListener('keydown', function (e) {
				// console.log(e.keyCode);
				if (e.keyCode === 32) {
					_this._toggle = !_this._toggle;
					_this.offset.value = _this._toggle ? 1.0 : 0.0;

					document.body.classList.toggle('interacted', true);
				}
			});
			return _this;
		}

		(0, _createClass3.default)(ViewPost, [{
			key: '_init',
			value: function _init() {
				this.mesh = _alfrid2.default.Geom.bigTriangle();
			}
		}, {
			key: 'render',
			value: function render(texture, textureMap) {
				this.shader.bind();
				this.shader.uniform("texture", "uniform1i", 0);
				texture.bind(0);
				this.shader.uniform("textureMap", "uniform1i", 1);
				textureMap.bind(1);
				this.shader.uniform("offset", "float", this.offset.value);
				_alfrid.GL.draw(this.mesh);
			}
		}]);
		return ViewPost;
	}(_alfrid2.default.View);

	exports.default = ViewPost;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vsRender = __webpack_require__(124); // ViewRender.js

	var fsRender = __webpack_require__(123);
	var GL = _alfrid2.default.GL;

	var ViewRender = function (_alfrid$View) {
		(0, _inherits3.default)(ViewRender, _alfrid$View);

		function ViewRender() {
			(0, _classCallCheck3.default)(this, ViewRender);

			var _this = (0, _possibleConstructorReturn3.default)(this, (ViewRender.__proto__ || (0, _getPrototypeOf2.default)(ViewRender)).call(this, vsRender, fsRender));

			_this.time = Math.random() * 0xFFF;
			return _this;
		}

		(0, _createClass3.default)(ViewRender, [{
			key: '_init',
			value: function _init() {
				var positions = [];
				var coords = [];
				var indices = [];
				var count = 0;
				var numParticles = params.numParticles;
				var ux = void 0,
				    uy = void 0;

				for (var j = 0; j < numParticles; j++) {
					for (var i = 0; i < numParticles; i++) {
						ux = i / numParticles;
						uy = j / numParticles;
						positions.push([ux, uy, 0]);
						indices.push(count);
						count++;
					}
				}

				this.mesh = new _alfrid2.default.Mesh(GL.POINTS);
				this.mesh.bufferVertex(positions);
				this.mesh.bufferIndex(indices);

				this.shader.bind();
				this.shader.uniform(params.lineLife);
				this.shader.uniform('textureCurr', 'uniform1i', 0);
				this.shader.uniform('textureNext', 'uniform1i', 1);
				this.shader.uniform('textureExtra', 'uniform1i', 2);
				this.shader.uniform("uNumSeg", "float", params.numSeg);
			}
		}, {
			key: 'render',
			value: function render(textureCurr, textureNext, p, textureExtra) {
				this.time += 0.1;
				this.shader.bind();
				textureCurr.bind(0);
				textureNext.bind(1);
				textureExtra.bind(2);

				this.shader.uniform('uViewport', 'vec2', [GL.width, GL.height]);
				this.shader.uniform('percent', 'float', p);
				this.shader.uniform('time', 'float', this.time);

				GL.draw(this.mesh);
			}
		}]);
		return ViewRender;
	}(_alfrid2.default.View);

	exports.default = ViewRender;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vsSave = __webpack_require__(126); // ViewSave.js

	var fsSave = __webpack_require__(125);
	var GL = _alfrid2.default.GL;
	var random = function random(min, max) {
		return min + Math.random() * (max - min);
	};

	var ViewSave = function (_alfrid$View) {
		(0, _inherits3.default)(ViewSave, _alfrid$View);

		function ViewSave() {
			(0, _classCallCheck3.default)(this, ViewSave);
			return (0, _possibleConstructorReturn3.default)(this, (ViewSave.__proto__ || (0, _getPrototypeOf2.default)(ViewSave)).call(this, vsSave, fsSave));
		}

		(0, _createClass3.default)(ViewSave, [{
			key: '_init',
			value: function _init() {
				var positions = [];
				var coords = [];
				var indices = [];
				var extras = [];
				var count = 0;

				var numParticles = params.numParticles;
				var totalParticles = numParticles * numParticles;
				console.debug('Total Particles : ', totalParticles);
				var ux = void 0,
				    uy = void 0;
				var range = 3;
				var m = mat4.create();

				function getPos() {
					var v = vec3.fromValues(0, 0, -params.sphereSize);
					mat4.identity(m, m);
					mat4.rotateY(m, m, Math.random() * Math.PI * 2);
					mat4.rotateX(m, m, Math.random() * Math.PI - Math.PI / 2);

					vec3.transformMat4(v, v, m);
					return v;
				}

				for (var j = 0; j < numParticles; j++) {
					for (var i = 0; i < numParticles; i++) {
						// positions.push([random(-range, range), random(-range, range), random(-range, range)]);
						positions.push(getPos());

						ux = i / numParticles * 2.0 - 1.0 + .5 / numParticles;
						uy = j / numParticles * 2.0 - 1.0 + .5 / numParticles;

						extras.push([Math.random(), Math.random(), random(1, params.lineLife.uEnd)]);
						coords.push([ux, uy]);
						indices.push(count);
						count++;
					}
				}

				this.mesh = new _alfrid2.default.Mesh(GL.POINTS);
				this.mesh.bufferVertex(positions);
				this.mesh.bufferData(extras, 'aExtra', 3);
				this.mesh.bufferTexCoord(coords);
				this.mesh.bufferIndex(indices);

				// this.meshExtra = new alfrid.Mesh(GL.POINTS);
				// this.meshExtra.bufferVertex(extras);
				// this.meshExtra.bufferTexCoord(coords);
				// this.meshExtra.bufferIndex(indices);
			}
		}, {
			key: 'render',
			value: function render() {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

				this.shader.bind();
				// if(state === 0) {
				// 	GL.draw(this.mesh);	
				// } else if(state === 1) {
				// 	GL.draw(this.meshExtra);	
				// }
				GL.draw(this.mesh);
			}
		}]);
		return ViewSave;
	}(_alfrid2.default.View);

	exports.default = ViewSave;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(4);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(3);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(6);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(5);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GL = _alfrid2.default.GL; // ViewSim.js

	var fsSim = __webpack_require__(127);

	var ViewSim = function (_alfrid$View) {
		(0, _inherits3.default)(ViewSim, _alfrid$View);

		function ViewSim() {
			(0, _classCallCheck3.default)(this, ViewSim);

			var _this = (0, _possibleConstructorReturn3.default)(this, (ViewSim.__proto__ || (0, _getPrototypeOf2.default)(ViewSim)).call(this, _alfrid2.default.ShaderLibs.bigTriangleVert, fsSim));

			_this.time = Math.random() * 0xFF;
			return _this;
		}

		(0, _createClass3.default)(ViewSim, [{
			key: '_init',
			value: function _init() {
				this.mesh = _alfrid2.default.Geom.bigTriangle();

				this.shader.bind();
				this.shader.uniform('textureVel', 'uniform1i', 0);
				this.shader.uniform('texturePos', 'uniform1i', 1);
				this.shader.uniform('textureExtra', 'uniform1i', 2);
				this.shader.uniform('textureOrgPos', 'uniform1i', 3);
				this.shader.uniform(params.lineLife);
				this.shader.uniform("uNumSeg", "float", params.numSeg);
				this.shader.uniform('uSphereSize', 'float', params.sphereSize);
			}
		}, {
			key: 'render',
			value: function render(textureVel, texturePos, textureExtra, textureOrgPos, hit) {
				this.time += .01;
				this.shader.bind();
				this.shader.uniform('time', 'float', this.time);

				textureVel.bind(0);
				texturePos.bind(1);
				textureExtra.bind(2);
				textureOrgPos.bind(3);

				this.shader.uniform("uHit", "vec3", hit);

				GL.draw(this.mesh);
			}
		}]);
		return ViewSim;
	}(_alfrid2.default.View);

	exports.default = ViewSim;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _alfrid = __webpack_require__(1);

	var _alfrid2 = _interopRequireDefault(_alfrid);

	var _SceneApp = __webpack_require__(58);

	var _SceneApp2 = _interopRequireDefault(_SceneApp);

	var _assetsLoader = __webpack_require__(54);

	var _assetsLoader2 = _interopRequireDefault(_assetsLoader);

	var _datGui = __webpack_require__(110);

	var _datGui2 = _interopRequireDefault(_datGui);

	var _stats = __webpack_require__(128);

	var _stats2 = _interopRequireDefault(_stats);

	var _assetList = __webpack_require__(38);

	var _assetList2 = _interopRequireDefault(_assetList);

	var _Assets = __webpack_require__(19);

	var _Assets2 = _interopRequireDefault(_Assets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.params = {
		numParticles: 64 * 1,
		skipCount: 4,
		maxRadius: 5.5,
		sphereSize: 3,
		numSeg: 40,
		light: {
			lightPos: [0, 0, 1]
		},
		lineLife: {
			uEnd: 150,
			uLength: 40
		}
	};

	if (document.body) {
		_init();
	} else {
		window.addEventListener('DOMContentLoaded', _init);
	}

	function _init() {

		//	LOADING ASSETS
		if (_assetList2.default.length > 0) {
			//document.body.classList.add('isLoading');

			var loader = new _assetsLoader2.default({
				assets: _assetList2.default
			}).on('error', function (error) {
				console.error(error);
			}).on('progress', function (p) {
				// console.log('Progress : ', p);
				var loader = document.body.querySelector('.Loading-Bar');
				if (loader) loader.style.width = (p * 100).toFixed(2) + '%';
			}).on('complete', _onImageLoaded).start();
		} else {
			_init3D();
		}

		_init3D();
		document.body.classList.remove('isLoading');
	}

	function _onImageLoaded(o) {
		//	ASSETS
		console.log('Image Loaded : ', o);
		window.assets = o;
		var loader = document.body.querySelector('.Loading-Bar');
		loader.style.width = '100%';

		_init3D();

		setTimeout(function () {
			document.body.classList.remove('isLoading');
		}, 250);
	}

	function _init3D() {

		//	CREATE CANVAS
		var canvas = document.createElement('canvas');
		canvas.className = 'Main-Canvas';
		document.body.appendChild(canvas);

		//	INIT 3D TOOL
		_alfrid.GL.init(canvas, { ignoreWebgl2: true });

		//	INIT ASSETS
		_Assets2.default.init();

		//	INIT DAT-GUI
		// window.gui = new dat.GUI({ width:300 });
		// gui.add(params, 'maxRadius', 0.0, 10.0);

		//	CREATE SCENE
		var scene = new _SceneApp2.default();

		//	STATS
		// const stats = new Stats();
		// document.body.appendChild(stats.domElement);
		// alfrid.Scheduler.addEF(()=>stats.update());
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	var $Object = __webpack_require__(7).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(101);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102);
	module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(106);
	__webpack_require__(104);
	__webpack_require__(107);
	__webpack_require__(108);
	module.exports = __webpack_require__(7).Symbol;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105);
	__webpack_require__(109);
	module.exports = __webpack_require__(35).f('iterator');


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(15);
	var toLength = __webpack_require__(98);
	var toAbsoluteIndex = __webpack_require__(97);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(27);
	var gOPS = __webpack_require__(47);
	var pIE = __webpack_require__(28);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(8).document;
	module.exports = document && document.documentElement;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(26);
	var descriptor = __webpack_require__(21);
	var setToStringTag = __webpack_require__(29);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(16)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var META = __webpack_require__(22)('meta');
	var isObject = __webpack_require__(14);
	var has = __webpack_require__(10);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(18)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(17);
	var getKeys = __webpack_require__(27);

	module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(15);
	var gOPN = __webpack_require__(46).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(12);
	var core = __webpack_require__(7);
	var fails = __webpack_require__(18);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14);
	var anObject = __webpack_require__(17);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(41)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32);
	var defined = __webpack_require__(23);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(32);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(83);
	var step = __webpack_require__(90);
	var Iterators = __webpack_require__(25);
	var toIObject = __webpack_require__(15);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(26) });


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(12);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(51);
	var $getPrototypeOf = __webpack_require__(48);

	__webpack_require__(94)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(12);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(95).set });


/***/ },
/* 104 */
/***/ function(module, exports) {

	

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(96)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(44)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(8);
	var has = __webpack_require__(10);
	var DESCRIPTORS = __webpack_require__(9);
	var $export = __webpack_require__(12);
	var redefine = __webpack_require__(50);
	var META = __webpack_require__(91).KEY;
	var $fails = __webpack_require__(18);
	var shared = __webpack_require__(31);
	var setToStringTag = __webpack_require__(29);
	var uid = __webpack_require__(22);
	var wks = __webpack_require__(16);
	var wksExt = __webpack_require__(35);
	var wksDefine = __webpack_require__(34);
	var enumKeys = __webpack_require__(85);
	var isArray = __webpack_require__(88);
	var anObject = __webpack_require__(17);
	var isObject = __webpack_require__(14);
	var toIObject = __webpack_require__(15);
	var toPrimitive = __webpack_require__(33);
	var createDesc = __webpack_require__(21);
	var _create = __webpack_require__(26);
	var gOPNExt = __webpack_require__(93);
	var $GOPD = __webpack_require__(45);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(27);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(28).f = $propertyIsEnumerable;
	  __webpack_require__(47).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(20)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34)('asyncIterator');


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34)('observable');


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	var global = __webpack_require__(8);
	var hide = __webpack_require__(13);
	var Iterators = __webpack_require__(25);
	var TO_STRING_TAG = __webpack_require__(16)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(112)
	module.exports.color = __webpack_require__(111)

/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */

	/** @namespace */
	var dat = module.exports = dat || {};

	/** @namespace */
	dat.color = dat.color || {};

	/** @namespace */
	dat.utils = dat.utils || {};

	dat.utils.common = (function () {
	  
	  var ARR_EACH = Array.prototype.forEach;
	  var ARR_SLICE = Array.prototype.slice;

	  /**
	   * Band-aid methods for things that should be a lot easier in JavaScript.
	   * Implementation and structure inspired by underscore.js
	   * http://documentcloud.github.com/underscore/
	   */

	  return { 
	    
	    BREAK: {},
	  
	    extend: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (!this.isUndefined(obj[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	      
	    },
	    
	    defaults: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (this.isUndefined(target[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	    
	    },
	    
	    compose: function() {
	      var toCall = ARR_SLICE.call(arguments);
	            return function() {
	              var args = ARR_SLICE.call(arguments);
	              for (var i = toCall.length -1; i >= 0; i--) {
	                args = [toCall[i].apply(this, args)];
	              }
	              return args[0];
	            }
	    },
	    
	    each: function(obj, itr, scope) {

	      
	      if (ARR_EACH && obj.forEach === ARR_EACH) { 
	        
	        obj.forEach(itr, scope);
	        
	      } else if (obj.length === obj.length + 0) { // Is number but not NaN
	        
	        for (var key = 0, l = obj.length; key < l; key++)
	          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
	            return;
	            
	      } else {

	        for (var key in obj) 
	          if (itr.call(scope, obj[key], key) === this.BREAK)
	            return;
	            
	      }
	            
	    },
	    
	    defer: function(fnc) {
	      setTimeout(fnc, 0);
	    },
	    
	    toArray: function(obj) {
	      if (obj.toArray) return obj.toArray();
	      return ARR_SLICE.call(obj);
	    },

	    isUndefined: function(obj) {
	      return obj === undefined;
	    },
	    
	    isNull: function(obj) {
	      return obj === null;
	    },
	    
	    isNaN: function(obj) {
	      return obj !== obj;
	    },
	    
	    isArray: Array.isArray || function(obj) {
	      return obj.constructor === Array;
	    },
	    
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },
	    
	    isNumber: function(obj) {
	      return obj === obj+0;
	    },
	    
	    isString: function(obj) {
	      return obj === obj+'';
	    },
	    
	    isBoolean: function(obj) {
	      return obj === false || obj === true;
	    },
	    
	    isFunction: function(obj) {
	      return Object.prototype.toString.call(obj) === '[object Function]';
	    }
	  
	  };
	    
	})();


	dat.color.toString = (function (common) {

	  return function(color) {

	    if (color.a == 1 || common.isUndefined(color.a)) {

	      var s = color.hex.toString(16);
	      while (s.length < 6) {
	        s = '0' + s;
	      }

	      return '#' + s;

	    } else {

	      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

	    }

	  }

	})(dat.utils.common);


	dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

	  var Color = function() {

	    this.__state = interpret.apply(this, arguments);

	    if (this.__state === false) {
	      throw 'Failed to interpret color arguments';
	    }

	    this.__state.a = this.__state.a || 1;


	  };

	  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

	  common.extend(Color.prototype, {

	    toString: function() {
	      return toString(this);
	    },

	    toOriginal: function() {
	      return this.__state.conversion.write(this);
	    }

	  });

	  defineRGBComponent(Color.prototype, 'r', 2);
	  defineRGBComponent(Color.prototype, 'g', 1);
	  defineRGBComponent(Color.prototype, 'b', 0);

	  defineHSVComponent(Color.prototype, 'h');
	  defineHSVComponent(Color.prototype, 's');
	  defineHSVComponent(Color.prototype, 'v');

	  Object.defineProperty(Color.prototype, 'a', {

	    get: function() {
	      return this.__state.a;
	    },

	    set: function(v) {
	      this.__state.a = v;
	    }

	  });

	  Object.defineProperty(Color.prototype, 'hex', {

	    get: function() {

	      if (!this.__state.space !== 'HEX') {
	        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
	      }

	      return this.__state.hex;

	    },

	    set: function(v) {

	      this.__state.space = 'HEX';
	      this.__state.hex = v;

	    }

	  });

	  function defineRGBComponent(target, component, componentHexIndex) {

	    Object.defineProperty(target, component, {

	      get: function() {

	        if (this.__state.space === 'RGB') {
	          return this.__state[component];
	        }

	        recalculateRGB(this, component, componentHexIndex);

	        return this.__state[component];

	      },

	      set: function(v) {

	        if (this.__state.space !== 'RGB') {
	          recalculateRGB(this, component, componentHexIndex);
	          this.__state.space = 'RGB';
	        }

	        this.__state[component] = v;

	      }

	    });

	  }

	  function defineHSVComponent(target, component) {

	    Object.defineProperty(target, component, {

	      get: function() {

	        if (this.__state.space === 'HSV')
	          return this.__state[component];

	        recalculateHSV(this);

	        return this.__state[component];

	      },

	      set: function(v) {

	        if (this.__state.space !== 'HSV') {
	          recalculateHSV(this);
	          this.__state.space = 'HSV';
	        }

	        this.__state[component] = v;

	      }

	    });

	  }

	  function recalculateRGB(color, component, componentHexIndex) {

	    if (color.__state.space === 'HEX') {

	      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

	    } else if (color.__state.space === 'HSV') {

	      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

	    } else {

	      throw 'Corrupted color state';

	    }

	  }

	  function recalculateHSV(color) {

	    var result = math.rgb_to_hsv(color.r, color.g, color.b);

	    common.extend(color.__state,
	        {
	          s: result.s,
	          v: result.v
	        }
	    );

	    if (!common.isNaN(result.h)) {
	      color.__state.h = result.h;
	    } else if (common.isUndefined(color.__state.h)) {
	      color.__state.h = 0;
	    }

	  }

	  return Color;

	})(dat.color.interpret = (function (toString, common) {

	  var result, toReturn;

	  var interpret = function() {

	    toReturn = false;

	    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

	    common.each(INTERPRETATIONS, function(family) {

	      if (family.litmus(original)) {

	        common.each(family.conversions, function(conversion, conversionName) {

	          result = conversion.read(original);

	          if (toReturn === false && result !== false) {
	            toReturn = result;
	            result.conversionName = conversionName;
	            result.conversion = conversion;
	            return common.BREAK;

	          }

	        });

	        return common.BREAK;

	      }

	    });

	    return toReturn;

	  };

	  var INTERPRETATIONS = [

	    // Strings
	    {

	      litmus: common.isString,

	      conversions: {

	        THREE_CHAR_HEX: {

	          read: function(original) {

	            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	            if (test === null) return false;

	            return {
	              space: 'HEX',
	              hex: parseInt(
	                  '0x' +
	                      test[1].toString() + test[1].toString() +
	                      test[2].toString() + test[2].toString() +
	                      test[3].toString() + test[3].toString())
	            };

	          },

	          write: toString

	        },

	        SIX_CHAR_HEX: {

	          read: function(original) {

	            var test = original.match(/^#([A-F0-9]{6})$/i);
	            if (test === null) return false;

	            return {
	              space: 'HEX',
	              hex: parseInt('0x' + test[1].toString())
	            };

	          },

	          write: toString

	        },

	        CSS_RGB: {

	          read: function(original) {

	            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	            if (test === null) return false;

	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3])
	            };

	          },

	          write: toString

	        },

	        CSS_RGBA: {

	          read: function(original) {

	            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
	            if (test === null) return false;

	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3]),
	              a: parseFloat(test[4])
	            };

	          },

	          write: toString

	        }

	      }

	    },

	    // Numbers
	    {

	      litmus: common.isNumber,

	      conversions: {

	        HEX: {
	          read: function(original) {
	            return {
	              space: 'HEX',
	              hex: original,
	              conversionName: 'HEX'
	            }
	          },

	          write: function(color) {
	            return color.hex;
	          }
	        }

	      }

	    },

	    // Arrays
	    {

	      litmus: common.isArray,

	      conversions: {

	        RGB_ARRAY: {
	          read: function(original) {
	            if (original.length != 3) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2]
	            };
	          },

	          write: function(color) {
	            return [color.r, color.g, color.b];
	          }

	        },

	        RGBA_ARRAY: {
	          read: function(original) {
	            if (original.length != 4) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2],
	              a: original[3]
	            };
	          },

	          write: function(color) {
	            return [color.r, color.g, color.b, color.a];
	          }

	        }

	      }

	    },

	    // Objects
	    {

	      litmus: common.isObject,

	      conversions: {

	        RGBA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b,
	                a: original.a
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b,
	              a: color.a
	            }
	          }
	        },

	        RGB_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b
	            }
	          }
	        },

	        HSVA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v,
	                a: original.a
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v,
	              a: color.a
	            }
	          }
	        },

	        HSV_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v
	            }
	          }

	        }

	      }

	    }


	  ];

	  return interpret;


	})(dat.color.toString,
	dat.utils.common),
	dat.color.math = (function () {

	  var tmpComponent;

	  return {

	    hsv_to_rgb: function(h, s, v) {

	      var hi = Math.floor(h / 60) % 6;

	      var f = h / 60 - Math.floor(h / 60);
	      var p = v * (1.0 - s);
	      var q = v * (1.0 - (f * s));
	      var t = v * (1.0 - ((1.0 - f) * s));
	      var c = [
	        [v, t, p],
	        [q, v, p],
	        [p, v, t],
	        [p, q, v],
	        [t, p, v],
	        [v, p, q]
	      ][hi];

	      return {
	        r: c[0] * 255,
	        g: c[1] * 255,
	        b: c[2] * 255
	      };

	    },

	    rgb_to_hsv: function(r, g, b) {

	      var min = Math.min(r, g, b),
	          max = Math.max(r, g, b),
	          delta = max - min,
	          h, s;

	      if (max != 0) {
	        s = delta / max;
	      } else {
	        return {
	          h: NaN,
	          s: 0,
	          v: 0
	        };
	      }

	      if (r == max) {
	        h = (g - b) / delta;
	      } else if (g == max) {
	        h = 2 + (b - r) / delta;
	      } else {
	        h = 4 + (r - g) / delta;
	      }
	      h /= 6;
	      if (h < 0) {
	        h += 1;
	      }

	      return {
	        h: h * 360,
	        s: s,
	        v: max / 255
	      };
	    },

	    rgb_to_hex: function(r, g, b) {
	      var hex = this.hex_with_component(0, 2, r);
	      hex = this.hex_with_component(hex, 1, g);
	      hex = this.hex_with_component(hex, 0, b);
	      return hex;
	    },

	    component_from_hex: function(hex, componentIndex) {
	      return (hex >> (componentIndex * 8)) & 0xFF;
	    },

	    hex_with_component: function(hex, componentIndex, value) {
	      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
	    }

	  }

	})(),
	dat.color.toString,
	dat.utils.common);

/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * dat-gui JavaScript Controller Library
	 * http://code.google.com/p/dat-gui
	 *
	 * Copyright 2011 Data Arts Team, Google Creative Lab
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 */

	/** @namespace */
	var dat = module.exports = dat || {};

	/** @namespace */
	dat.gui = dat.gui || {};

	/** @namespace */
	dat.utils = dat.utils || {};

	/** @namespace */
	dat.controllers = dat.controllers || {};

	/** @namespace */
	dat.dom = dat.dom || {};

	/** @namespace */
	dat.color = dat.color || {};

	dat.utils.css = (function () {
	  return {
	    load: function (url, doc) {
	      doc = doc || document;
	      var link = doc.createElement('link');
	      link.type = 'text/css';
	      link.rel = 'stylesheet';
	      link.href = url;
	      doc.getElementsByTagName('head')[0].appendChild(link);
	    },
	    inject: function(css, doc) {
	      doc = doc || document;
	      var injected = document.createElement('style');
	      injected.type = 'text/css';
	      injected.innerHTML = css;
	      doc.getElementsByTagName('head')[0].appendChild(injected);
	    }
	  }
	})();


	dat.utils.common = (function () {
	  
	  var ARR_EACH = Array.prototype.forEach;
	  var ARR_SLICE = Array.prototype.slice;

	  /**
	   * Band-aid methods for things that should be a lot easier in JavaScript.
	   * Implementation and structure inspired by underscore.js
	   * http://documentcloud.github.com/underscore/
	   */

	  return { 
	    
	    BREAK: {},
	  
	    extend: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (!this.isUndefined(obj[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	      
	    },
	    
	    defaults: function(target) {
	      
	      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
	        
	        for (var key in obj)
	          if (this.isUndefined(target[key])) 
	            target[key] = obj[key];
	        
	      }, this);
	      
	      return target;
	    
	    },
	    
	    compose: function() {
	      var toCall = ARR_SLICE.call(arguments);
	            return function() {
	              var args = ARR_SLICE.call(arguments);
	              for (var i = toCall.length -1; i >= 0; i--) {
	                args = [toCall[i].apply(this, args)];
	              }
	              return args[0];
	            }
	    },
	    
	    each: function(obj, itr, scope) {

	      
	      if (ARR_EACH && obj.forEach === ARR_EACH) { 
	        
	        obj.forEach(itr, scope);
	        
	      } else if (obj.length === obj.length + 0) { // Is number but not NaN
	        
	        for (var key = 0, l = obj.length; key < l; key++)
	          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
	            return;
	            
	      } else {

	        for (var key in obj) 
	          if (itr.call(scope, obj[key], key) === this.BREAK)
	            return;
	            
	      }
	            
	    },
	    
	    defer: function(fnc) {
	      setTimeout(fnc, 0);
	    },
	    
	    toArray: function(obj) {
	      if (obj.toArray) return obj.toArray();
	      return ARR_SLICE.call(obj);
	    },

	    isUndefined: function(obj) {
	      return obj === undefined;
	    },
	    
	    isNull: function(obj) {
	      return obj === null;
	    },
	    
	    isNaN: function(obj) {
	      return obj !== obj;
	    },
	    
	    isArray: Array.isArray || function(obj) {
	      return obj.constructor === Array;
	    },
	    
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },
	    
	    isNumber: function(obj) {
	      return obj === obj+0;
	    },
	    
	    isString: function(obj) {
	      return obj === obj+'';
	    },
	    
	    isBoolean: function(obj) {
	      return obj === false || obj === true;
	    },
	    
	    isFunction: function(obj) {
	      return Object.prototype.toString.call(obj) === '[object Function]';
	    }
	  
	  };
	    
	})();


	dat.controllers.Controller = (function (common) {

	  /**
	   * @class An "abstract" class that represents a given property of an object.
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var Controller = function(object, property) {

	    this.initialValue = object[property];

	    /**
	     * Those who extend this class will put their DOM elements in here.
	     * @type {DOMElement}
	     */
	    this.domElement = document.createElement('div');

	    /**
	     * The object to manipulate
	     * @type {Object}
	     */
	    this.object = object;

	    /**
	     * The name of the property to manipulate
	     * @type {String}
	     */
	    this.property = property;

	    /**
	     * The function to be called on change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onChange = undefined;

	    /**
	     * The function to be called on finishing change.
	     * @type {Function}
	     * @ignore
	     */
	    this.__onFinishChange = undefined;

	  };

	  common.extend(

	      Controller.prototype,

	      /** @lends dat.controllers.Controller.prototype */
	      {

	        /**
	         * Specify that a function fire every time someone changes the value with
	         * this Controller.
	         *
	         * @param {Function} fnc This function will be called whenever the value
	         * is modified via this Controller.
	         * @returns {dat.controllers.Controller} this
	         */
	        onChange: function(fnc) {
	          this.__onChange = fnc;
	          return this;
	        },

	        /**
	         * Specify that a function fire every time someone "finishes" changing
	         * the value wih this Controller. Useful for values that change
	         * incrementally like numbers or strings.
	         *
	         * @param {Function} fnc This function will be called whenever
	         * someone "finishes" changing the value via this Controller.
	         * @returns {dat.controllers.Controller} this
	         */
	        onFinishChange: function(fnc) {
	          this.__onFinishChange = fnc;
	          return this;
	        },

	        /**
	         * Change the value of <code>object[property]</code>
	         *
	         * @param {Object} newValue The new value of <code>object[property]</code>
	         */
	        setValue: function(newValue) {
	          this.object[this.property] = newValue;
	          if (this.__onChange) {
	            this.__onChange.call(this, newValue);
	          }
	          this.updateDisplay();
	          return this;
	        },

	        /**
	         * Gets the value of <code>object[property]</code>
	         *
	         * @returns {Object} The current value of <code>object[property]</code>
	         */
	        getValue: function() {
	          return this.object[this.property];
	        },

	        /**
	         * Refreshes the visual display of a Controller in order to keep sync
	         * with the object's current value.
	         * @returns {dat.controllers.Controller} this
	         */
	        updateDisplay: function() {
	          return this;
	        },

	        /**
	         * @returns {Boolean} true if the value has deviated from initialValue
	         */
	        isModified: function() {
	          return this.initialValue !== this.getValue()
	        }

	      }

	  );

	  return Controller;


	})(dat.utils.common);


	dat.dom.dom = (function (common) {

	  var EVENT_MAP = {
	    'HTMLEvents': ['change'],
	    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
	    'KeyboardEvents': ['keydown']
	  };

	  var EVENT_MAP_INV = {};
	  common.each(EVENT_MAP, function(v, k) {
	    common.each(v, function(e) {
	      EVENT_MAP_INV[e] = k;
	    });
	  });

	  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

	  function cssValueToPixels(val) {

	    if (val === '0' || common.isUndefined(val)) return 0;

	    var match = val.match(CSS_VALUE_PIXELS);

	    if (!common.isNull(match)) {
	      return parseFloat(match[1]);
	    }

	    // TODO ...ems? %?

	    return 0;

	  }

	  /**
	   * @namespace
	   * @member dat.dom
	   */
	  var dom = {

	    /**
	     * 
	     * @param elem
	     * @param selectable
	     */
	    makeSelectable: function(elem, selectable) {

	      if (elem === undefined || elem.style === undefined) return;

	      elem.onselectstart = selectable ? function() {
	        return false;
	      } : function() {
	      };

	      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
	      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
	      elem.unselectable = selectable ? 'on' : 'off';

	    },

	    /**
	     *
	     * @param elem
	     * @param horizontal
	     * @param vertical
	     */
	    makeFullscreen: function(elem, horizontal, vertical) {

	      if (common.isUndefined(horizontal)) horizontal = true;
	      if (common.isUndefined(vertical)) vertical = true;

	      elem.style.position = 'absolute';

	      if (horizontal) {
	        elem.style.left = 0;
	        elem.style.right = 0;
	      }
	      if (vertical) {
	        elem.style.top = 0;
	        elem.style.bottom = 0;
	      }

	    },

	    /**
	     *
	     * @param elem
	     * @param eventType
	     * @param params
	     */
	    fakeEvent: function(elem, eventType, params, aux) {
	      params = params || {};
	      var className = EVENT_MAP_INV[eventType];
	      if (!className) {
	        throw new Error('Event type ' + eventType + ' not supported.');
	      }
	      var evt = document.createEvent(className);
	      switch (className) {
	        case 'MouseEvents':
	          var clientX = params.x || params.clientX || 0;
	          var clientY = params.y || params.clientY || 0;
	          evt.initMouseEvent(eventType, params.bubbles || false,
	              params.cancelable || true, window, params.clickCount || 1,
	              0, //screen X
	              0, //screen Y
	              clientX, //client X
	              clientY, //client Y
	              false, false, false, false, 0, null);
	          break;
	        case 'KeyboardEvents':
	          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
	          common.defaults(params, {
	            cancelable: true,
	            ctrlKey: false,
	            altKey: false,
	            shiftKey: false,
	            metaKey: false,
	            keyCode: undefined,
	            charCode: undefined
	          });
	          init(eventType, params.bubbles || false,
	              params.cancelable, window,
	              params.ctrlKey, params.altKey,
	              params.shiftKey, params.metaKey,
	              params.keyCode, params.charCode);
	          break;
	        default:
	          evt.initEvent(eventType, params.bubbles || false,
	              params.cancelable || true);
	          break;
	      }
	      common.defaults(evt, aux);
	      elem.dispatchEvent(evt);
	    },

	    /**
	     *
	     * @param elem
	     * @param event
	     * @param func
	     * @param bool
	     */
	    bind: function(elem, event, func, bool) {
	      bool = bool || false;
	      if (elem.addEventListener)
	        elem.addEventListener(event, func, bool);
	      else if (elem.attachEvent)
	        elem.attachEvent('on' + event, func);
	      return dom;
	    },

	    /**
	     *
	     * @param elem
	     * @param event
	     * @param func
	     * @param bool
	     */
	    unbind: function(elem, event, func, bool) {
	      bool = bool || false;
	      if (elem.removeEventListener)
	        elem.removeEventListener(event, func, bool);
	      else if (elem.detachEvent)
	        elem.detachEvent('on' + event, func);
	      return dom;
	    },

	    /**
	     *
	     * @param elem
	     * @param className
	     */
	    addClass: function(elem, className) {
	      if (elem.className === undefined) {
	        elem.className = className;
	      } else if (elem.className !== className) {
	        var classes = elem.className.split(/ +/);
	        if (classes.indexOf(className) == -1) {
	          classes.push(className);
	          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
	        }
	      }
	      return dom;
	    },

	    /**
	     *
	     * @param elem
	     * @param className
	     */
	    removeClass: function(elem, className) {
	      if (className) {
	        if (elem.className === undefined) {
	          // elem.className = className;
	        } else if (elem.className === className) {
	          elem.removeAttribute('class');
	        } else {
	          var classes = elem.className.split(/ +/);
	          var index = classes.indexOf(className);
	          if (index != -1) {
	            classes.splice(index, 1);
	            elem.className = classes.join(' ');
	          }
	        }
	      } else {
	        elem.className = undefined;
	      }
	      return dom;
	    },

	    hasClass: function(elem, className) {
	      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
	    },

	    /**
	     *
	     * @param elem
	     */
	    getWidth: function(elem) {

	      var style = getComputedStyle(elem);

	      return cssValueToPixels(style['border-left-width']) +
	          cssValueToPixels(style['border-right-width']) +
	          cssValueToPixels(style['padding-left']) +
	          cssValueToPixels(style['padding-right']) +
	          cssValueToPixels(style['width']);
	    },

	    /**
	     *
	     * @param elem
	     */
	    getHeight: function(elem) {

	      var style = getComputedStyle(elem);

	      return cssValueToPixels(style['border-top-width']) +
	          cssValueToPixels(style['border-bottom-width']) +
	          cssValueToPixels(style['padding-top']) +
	          cssValueToPixels(style['padding-bottom']) +
	          cssValueToPixels(style['height']);
	    },

	    /**
	     *
	     * @param elem
	     */
	    getOffset: function(elem) {
	      var offset = {left: 0, top:0};
	      if (elem.offsetParent) {
	        do {
	          offset.left += elem.offsetLeft;
	          offset.top += elem.offsetTop;
	        } while (elem = elem.offsetParent);
	      }
	      return offset;
	    },

	    // http://stackoverflow.com/posts/2684561/revisions
	    /**
	     * 
	     * @param elem
	     */
	    isActive: function(elem) {
	      return elem === document.activeElement && ( elem.type || elem.href );
	    }

	  };

	  return dom;

	})(dat.utils.common);


	dat.controllers.OptionController = (function (Controller, dom, common) {

	  /**
	   * @class Provides a select input to alter the property of an object, using a
	   * list of accepted values.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object|string[]} options A map of labels to acceptable values, or
	   * a list of acceptable string values.
	   *
	   * @member dat.controllers
	   */
	  var OptionController = function(object, property, options) {

	    OptionController.superclass.call(this, object, property);

	    var _this = this;

	    /**
	     * The drop down menu
	     * @ignore
	     */
	    this.__select = document.createElement('select');

	    if (common.isArray(options)) {
	      var map = {};
	      common.each(options, function(element) {
	        map[element] = element;
	      });
	      options = map;
	    }

	    common.each(options, function(value, key) {

	      var opt = document.createElement('option');
	      opt.innerHTML = key;
	      opt.setAttribute('value', value);
	      _this.__select.appendChild(opt);

	    });

	    // Acknowledge original value
	    this.updateDisplay();

	    dom.bind(this.__select, 'change', function() {
	      var desiredValue = this.options[this.selectedIndex].value;
	      _this.setValue(desiredValue);
	    });

	    this.domElement.appendChild(this.__select);

	  };

	  OptionController.superclass = Controller;

	  common.extend(

	      OptionController.prototype,
	      Controller.prototype,

	      {

	        setValue: function(v) {
	          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          return toReturn;
	        },

	        updateDisplay: function() {
	          this.__select.value = this.getValue();
	          return OptionController.superclass.prototype.updateDisplay.call(this);
	        }

	      }

	  );

	  return OptionController;

	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);


	dat.controllers.NumberController = (function (Controller, common) {

	  /**
	   * @class Represents a given property of an object that is a number.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object} [params] Optional parameters
	   * @param {Number} [params.min] Minimum allowed value
	   * @param {Number} [params.max] Maximum allowed value
	   * @param {Number} [params.step] Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberController = function(object, property, params) {

	    NumberController.superclass.call(this, object, property);

	    params = params || {};

	    this.__min = params.min;
	    this.__max = params.max;
	    this.__step = params.step;

	    if (common.isUndefined(this.__step)) {

	      if (this.initialValue == 0) {
	        this.__impliedStep = 1; // What are we, psychics?
	      } else {
	        // Hey Doug, check this out.
	        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
	      }

	    } else {

	      this.__impliedStep = this.__step;

	    }

	    this.__precision = numDecimals(this.__impliedStep);


	  };

	  NumberController.superclass = Controller;

	  common.extend(

	      NumberController.prototype,
	      Controller.prototype,

	      /** @lends dat.controllers.NumberController.prototype */
	      {

	        setValue: function(v) {

	          if (this.__min !== undefined && v < this.__min) {
	            v = this.__min;
	          } else if (this.__max !== undefined && v > this.__max) {
	            v = this.__max;
	          }

	          if (this.__step !== undefined && v % this.__step != 0) {
	            v = Math.round(v / this.__step) * this.__step;
	          }

	          return NumberController.superclass.prototype.setValue.call(this, v);

	        },

	        /**
	         * Specify a minimum value for <code>object[property]</code>.
	         *
	         * @param {Number} minValue The minimum value for
	         * <code>object[property]</code>
	         * @returns {dat.controllers.NumberController} this
	         */
	        min: function(v) {
	          this.__min = v;
	          return this;
	        },

	        /**
	         * Specify a maximum value for <code>object[property]</code>.
	         *
	         * @param {Number} maxValue The maximum value for
	         * <code>object[property]</code>
	         * @returns {dat.controllers.NumberController} this
	         */
	        max: function(v) {
	          this.__max = v;
	          return this;
	        },

	        /**
	         * Specify a step value that dat.controllers.NumberController
	         * increments by.
	         *
	         * @param {Number} stepValue The step value for
	         * dat.controllers.NumberController
	         * @default if minimum and maximum specified increment is 1% of the
	         * difference otherwise stepValue is 1
	         * @returns {dat.controllers.NumberController} this
	         */
	        step: function(v) {
	          this.__step = v;
	          return this;
	        }

	      }

	  );

	  function numDecimals(x) {
	    x = x.toString();
	    if (x.indexOf('.') > -1) {
	      return x.length - x.indexOf('.') - 1;
	    } else {
	      return 0;
	    }
	  }

	  return NumberController;

	})(dat.controllers.Controller,
	dat.utils.common);


	dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

	  /**
	   * @class Represents a given property of an object that is a number and
	   * provides an input element with which to manipulate it.
	   *
	   * @extends dat.controllers.Controller
	   * @extends dat.controllers.NumberController
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Object} [params] Optional parameters
	   * @param {Number} [params.min] Minimum allowed value
	   * @param {Number} [params.max] Maximum allowed value
	   * @param {Number} [params.step] Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberControllerBox = function(object, property, params) {

	    this.__truncationSuspended = false;

	    NumberControllerBox.superclass.call(this, object, property, params);

	    var _this = this;

	    /**
	     * {Number} Previous mouse y position
	     * @ignore
	     */
	    var prev_y;

	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');

	    // Makes it so manually specified values are not truncated.

	    dom.bind(this.__input, 'change', onChange);
	    dom.bind(this.__input, 'blur', onBlur);
	    dom.bind(this.__input, 'mousedown', onMouseDown);
	    dom.bind(this.__input, 'keydown', function(e) {

	      // When pressing entire, you can be as precise as you want.
	      if (e.keyCode === 13) {
	        _this.__truncationSuspended = true;
	        this.blur();
	        _this.__truncationSuspended = false;
	      }

	    });

	    function onChange() {
	      var attempted = parseFloat(_this.__input.value);
	      if (!common.isNaN(attempted)) _this.setValue(attempted);
	    }

	    function onBlur() {
	      onChange();
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }

	    function onMouseDown(e) {
	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);
	      prev_y = e.clientY;
	    }

	    function onMouseDrag(e) {

	      var diff = prev_y - e.clientY;
	      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

	      prev_y = e.clientY;

	    }

	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	    }

	    this.updateDisplay();

	    this.domElement.appendChild(this.__input);

	  };

	  NumberControllerBox.superclass = NumberController;

	  common.extend(

	      NumberControllerBox.prototype,
	      NumberController.prototype,

	      {

	        updateDisplay: function() {

	          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
	          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
	        }

	      }

	  );

	  function roundToDecimal(value, decimals) {
	    var tenTo = Math.pow(10, decimals);
	    return Math.round(value * tenTo) / tenTo;
	  }

	  return NumberControllerBox;

	})(dat.controllers.NumberController,
	dat.dom.dom,
	dat.utils.common);


	dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

	  /**
	   * @class Represents a given property of an object that is a number, contains
	   * a minimum and maximum, and provides a slider element with which to
	   * manipulate it. It should be noted that the slider element is made up of
	   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
	   * <code>&lt;slider&gt;</code> element.
	   *
	   * @extends dat.controllers.Controller
	   * @extends dat.controllers.NumberController
	   * 
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   * @param {Number} minValue Minimum allowed value
	   * @param {Number} maxValue Maximum allowed value
	   * @param {Number} stepValue Increment by which to change value
	   *
	   * @member dat.controllers
	   */
	  var NumberControllerSlider = function(object, property, min, max, step) {

	    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

	    var _this = this;

	    this.__background = document.createElement('div');
	    this.__foreground = document.createElement('div');
	    


	    dom.bind(this.__background, 'mousedown', onMouseDown);
	    
	    dom.addClass(this.__background, 'slider');
	    dom.addClass(this.__foreground, 'slider-fg');

	    function onMouseDown(e) {

	      dom.bind(window, 'mousemove', onMouseDrag);
	      dom.bind(window, 'mouseup', onMouseUp);

	      onMouseDrag(e);
	    }

	    function onMouseDrag(e) {

	      e.preventDefault();

	      var offset = dom.getOffset(_this.__background);
	      var width = dom.getWidth(_this.__background);
	      
	      _this.setValue(
	        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
	      );

	      return false;

	    }

	    function onMouseUp() {
	      dom.unbind(window, 'mousemove', onMouseDrag);
	      dom.unbind(window, 'mouseup', onMouseUp);
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }

	    this.updateDisplay();

	    this.__background.appendChild(this.__foreground);
	    this.domElement.appendChild(this.__background);

	  };

	  NumberControllerSlider.superclass = NumberController;

	  /**
	   * Injects default stylesheet for slider elements.
	   */
	  NumberControllerSlider.useDefaultStyles = function() {
	    css.inject(styleSheet);
	  };

	  common.extend(

	      NumberControllerSlider.prototype,
	      NumberController.prototype,

	      {

	        updateDisplay: function() {
	          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
	          this.__foreground.style.width = pct*100+'%';
	          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
	        }

	      }



	  );

	  function map(v, i1, i2, o1, o2) {
	    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
	  }

	  return NumberControllerSlider;
	  
	})(dat.controllers.NumberController,
	dat.dom.dom,
	dat.utils.css,
	dat.utils.common,
	".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


	dat.controllers.FunctionController = (function (Controller, dom, common) {

	  /**
	   * @class Provides a GUI interface to fire a specified method, a property of an object.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var FunctionController = function(object, property, text) {

	    FunctionController.superclass.call(this, object, property);

	    var _this = this;

	    this.__button = document.createElement('div');
	    this.__button.innerHTML = text === undefined ? 'Fire' : text;
	    dom.bind(this.__button, 'click', function(e) {
	      e.preventDefault();
	      _this.fire();
	      return false;
	    });

	    dom.addClass(this.__button, 'button');

	    this.domElement.appendChild(this.__button);


	  };

	  FunctionController.superclass = Controller;

	  common.extend(

	      FunctionController.prototype,
	      Controller.prototype,
	      {
	        
	        fire: function() {
	          if (this.__onChange) {
	            this.__onChange.call(this);
	          }
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          this.getValue().call(this.object);
	        }
	      }

	  );

	  return FunctionController;

	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);


	dat.controllers.BooleanController = (function (Controller, dom, common) {

	  /**
	   * @class Provides a checkbox input to alter the boolean property of an object.
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var BooleanController = function(object, property) {

	    BooleanController.superclass.call(this, object, property);

	    var _this = this;
	    this.__prev = this.getValue();

	    this.__checkbox = document.createElement('input');
	    this.__checkbox.setAttribute('type', 'checkbox');


	    dom.bind(this.__checkbox, 'change', onChange, false);

	    this.domElement.appendChild(this.__checkbox);

	    // Match original value
	    this.updateDisplay();

	    function onChange() {
	      _this.setValue(!_this.__prev);
	    }

	  };

	  BooleanController.superclass = Controller;

	  common.extend(

	      BooleanController.prototype,
	      Controller.prototype,

	      {

	        setValue: function(v) {
	          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
	          if (this.__onFinishChange) {
	            this.__onFinishChange.call(this, this.getValue());
	          }
	          this.__prev = this.getValue();
	          return toReturn;
	        },

	        updateDisplay: function() {
	          
	          if (this.getValue() === true) {
	            this.__checkbox.setAttribute('checked', 'checked');
	            this.__checkbox.checked = true;    
	          } else {
	              this.__checkbox.checked = false;
	          }

	          return BooleanController.superclass.prototype.updateDisplay.call(this);

	        }


	      }

	  );

	  return BooleanController;

	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common);


	dat.color.toString = (function (common) {

	  return function(color) {

	    if (color.a == 1 || common.isUndefined(color.a)) {

	      var s = color.hex.toString(16);
	      while (s.length < 6) {
	        s = '0' + s;
	      }

	      return '#' + s;

	    } else {

	      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

	    }

	  }

	})(dat.utils.common);


	dat.color.interpret = (function (toString, common) {

	  var result, toReturn;

	  var interpret = function() {

	    toReturn = false;

	    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

	    common.each(INTERPRETATIONS, function(family) {

	      if (family.litmus(original)) {

	        common.each(family.conversions, function(conversion, conversionName) {

	          result = conversion.read(original);

	          if (toReturn === false && result !== false) {
	            toReturn = result;
	            result.conversionName = conversionName;
	            result.conversion = conversion;
	            return common.BREAK;

	          }

	        });

	        return common.BREAK;

	      }

	    });

	    return toReturn;

	  };

	  var INTERPRETATIONS = [

	    // Strings
	    {

	      litmus: common.isString,

	      conversions: {

	        THREE_CHAR_HEX: {

	          read: function(original) {

	            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
	            if (test === null) return false;

	            return {
	              space: 'HEX',
	              hex: parseInt(
	                  '0x' +
	                      test[1].toString() + test[1].toString() +
	                      test[2].toString() + test[2].toString() +
	                      test[3].toString() + test[3].toString())
	            };

	          },

	          write: toString

	        },

	        SIX_CHAR_HEX: {

	          read: function(original) {

	            var test = original.match(/^#([A-F0-9]{6})$/i);
	            if (test === null) return false;

	            return {
	              space: 'HEX',
	              hex: parseInt('0x' + test[1].toString())
	            };

	          },

	          write: toString

	        },

	        CSS_RGB: {

	          read: function(original) {

	            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
	            if (test === null) return false;

	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3])
	            };

	          },

	          write: toString

	        },

	        CSS_RGBA: {

	          read: function(original) {

	            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
	            if (test === null) return false;

	            return {
	              space: 'RGB',
	              r: parseFloat(test[1]),
	              g: parseFloat(test[2]),
	              b: parseFloat(test[3]),
	              a: parseFloat(test[4])
	            };

	          },

	          write: toString

	        }

	      }

	    },

	    // Numbers
	    {

	      litmus: common.isNumber,

	      conversions: {

	        HEX: {
	          read: function(original) {
	            return {
	              space: 'HEX',
	              hex: original,
	              conversionName: 'HEX'
	            }
	          },

	          write: function(color) {
	            return color.hex;
	          }
	        }

	      }

	    },

	    // Arrays
	    {

	      litmus: common.isArray,

	      conversions: {

	        RGB_ARRAY: {
	          read: function(original) {
	            if (original.length != 3) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2]
	            };
	          },

	          write: function(color) {
	            return [color.r, color.g, color.b];
	          }

	        },

	        RGBA_ARRAY: {
	          read: function(original) {
	            if (original.length != 4) return false;
	            return {
	              space: 'RGB',
	              r: original[0],
	              g: original[1],
	              b: original[2],
	              a: original[3]
	            };
	          },

	          write: function(color) {
	            return [color.r, color.g, color.b, color.a];
	          }

	        }

	      }

	    },

	    // Objects
	    {

	      litmus: common.isObject,

	      conversions: {

	        RGBA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b,
	                a: original.a
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b,
	              a: color.a
	            }
	          }
	        },

	        RGB_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.r) &&
	                common.isNumber(original.g) &&
	                common.isNumber(original.b)) {
	              return {
	                space: 'RGB',
	                r: original.r,
	                g: original.g,
	                b: original.b
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              r: color.r,
	              g: color.g,
	              b: color.b
	            }
	          }
	        },

	        HSVA_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v) &&
	                common.isNumber(original.a)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v,
	                a: original.a
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v,
	              a: color.a
	            }
	          }
	        },

	        HSV_OBJ: {
	          read: function(original) {
	            if (common.isNumber(original.h) &&
	                common.isNumber(original.s) &&
	                common.isNumber(original.v)) {
	              return {
	                space: 'HSV',
	                h: original.h,
	                s: original.s,
	                v: original.v
	              }
	            }
	            return false;
	          },

	          write: function(color) {
	            return {
	              h: color.h,
	              s: color.s,
	              v: color.v
	            }
	          }

	        }

	      }

	    }


	  ];

	  return interpret;


	})(dat.color.toString,
	dat.utils.common);


	dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

	  css.inject(styleSheet);

	  /** Outer-most className for GUI's */
	  var CSS_NAMESPACE = 'dg';

	  var HIDE_KEY_CODE = 72;

	  /** The only value shared between the JS and SCSS. Use caution. */
	  var CLOSE_BUTTON_HEIGHT = 20;

	  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

	  var SUPPORTS_LOCAL_STORAGE = (function() {
	    try {
	      return 'localStorage' in window && window['localStorage'] !== null;
	    } catch (e) {
	      return false;
	    }
	  })();

	  var SAVE_DIALOGUE;

	  /** Have we yet to create an autoPlace GUI? */
	  var auto_place_virgin = true;

	  /** Fixed position div that auto place GUI's go inside */
	  var auto_place_container;

	  /** Are we hiding the GUI's ? */
	  var hide = false;

	  /** GUI's which should be hidden */
	  var hideable_guis = [];

	  /**
	   * A lightweight controller library for JavaScript. It allows you to easily
	   * manipulate variables and fire functions on the fly.
	   * @class
	   *
	   * @member dat.gui
	   *
	   * @param {Object} [params]
	   * @param {String} [params.name] The name of this GUI.
	   * @param {Object} [params.load] JSON object representing the saved state of
	   * this GUI.
	   * @param {Boolean} [params.auto=true]
	   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
	   * @param {Boolean} [params.closed] If true, starts closed
	   */
	  var GUI = function(params) {

	    var _this = this;

	    /**
	     * Outermost DOM Element
	     * @type DOMElement
	     */
	    this.domElement = document.createElement('div');
	    this.__ul = document.createElement('ul');
	    this.domElement.appendChild(this.__ul);

	    dom.addClass(this.domElement, CSS_NAMESPACE);

	    /**
	     * Nested GUI's by name
	     * @ignore
	     */
	    this.__folders = {};

	    this.__controllers = [];

	    /**
	     * List of objects I'm remembering for save, only used in top level GUI
	     * @ignore
	     */
	    this.__rememberedObjects = [];

	    /**
	     * Maps the index of remembered objects to a map of controllers, only used
	     * in top level GUI.
	     *
	     * @private
	     * @ignore
	     *
	     * @example
	     * [
	     *  {
	     *    propertyName: Controller,
	     *    anotherPropertyName: Controller
	     *  },
	     *  {
	     *    propertyName: Controller
	     *  }
	     * ]
	     */
	    this.__rememberedObjectIndecesToControllers = [];

	    this.__listening = [];

	    params = params || {};

	    // Default parameters
	    params = common.defaults(params, {
	      autoPlace: true,
	      width: GUI.DEFAULT_WIDTH
	    });

	    params = common.defaults(params, {
	      resizable: params.autoPlace,
	      hideable: params.autoPlace
	    });


	    if (!common.isUndefined(params.load)) {

	      // Explicit preset
	      if (params.preset) params.load.preset = params.preset;

	    } else {

	      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

	    }

	    if (common.isUndefined(params.parent) && params.hideable) {
	      hideable_guis.push(this);
	    }

	    // Only root level GUI's are resizable.
	    params.resizable = common.isUndefined(params.parent) && params.resizable;


	    if (params.autoPlace && common.isUndefined(params.scrollable)) {
	      params.scrollable = true;
	    }
	//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

	    // Not part of params because I don't want people passing this in via
	    // constructor. Should be a 'remembered' value.
	    var use_local_storage =
	        SUPPORTS_LOCAL_STORAGE &&
	            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

	    Object.defineProperties(this,

	        /** @lends dat.gui.GUI.prototype */
	        {

	          /**
	           * The parent <code>GUI</code>
	           * @type dat.gui.GUI
	           */
	          parent: {
	            get: function() {
	              return params.parent;
	            }
	          },

	          scrollable: {
	            get: function() {
	              return params.scrollable;
	            }
	          },

	          /**
	           * Handles <code>GUI</code>'s element placement for you
	           * @type Boolean
	           */
	          autoPlace: {
	            get: function() {
	              return params.autoPlace;
	            }
	          },

	          /**
	           * The identifier for a set of saved values
	           * @type String
	           */
	          preset: {

	            get: function() {
	              if (_this.parent) {
	                return _this.getRoot().preset;
	              } else {
	                return params.load.preset;
	              }
	            },

	            set: function(v) {
	              if (_this.parent) {
	                _this.getRoot().preset = v;
	              } else {
	                params.load.preset = v;
	              }
	              setPresetSelectIndex(this);
	              _this.revert();
	            }

	          },

	          /**
	           * The width of <code>GUI</code> element
	           * @type Number
	           */
	          width: {
	            get: function() {
	              return params.width;
	            },
	            set: function(v) {
	              params.width = v;
	              setWidth(_this, v);
	            }
	          },

	          /**
	           * The name of <code>GUI</code>. Used for folders. i.e
	           * a folder's name
	           * @type String
	           */
	          name: {
	            get: function() {
	              return params.name;
	            },
	            set: function(v) {
	              // TODO Check for collisions among sibling folders
	              params.name = v;
	              if (title_row_name) {
	                title_row_name.innerHTML = params.name;
	              }
	            }
	          },

	          /**
	           * Whether the <code>GUI</code> is collapsed or not
	           * @type Boolean
	           */
	          closed: {
	            get: function() {
	              return params.closed;
	            },
	            set: function(v) {
	              params.closed = v;
	              if (params.closed) {
	                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
	              } else {
	                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
	              }
	              // For browsers that aren't going to respect the CSS transition,
	              // Lets just check our height against the window height right off
	              // the bat.
	              this.onResize();

	              if (_this.__closeButton) {
	                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
	              }
	            }
	          },

	          /**
	           * Contains all presets
	           * @type Object
	           */
	          load: {
	            get: function() {
	              return params.load;
	            }
	          },

	          /**
	           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
	           * <code>remember</code>ing
	           * @type Boolean
	           */
	          useLocalStorage: {

	            get: function() {
	              return use_local_storage;
	            },
	            set: function(bool) {
	              if (SUPPORTS_LOCAL_STORAGE) {
	                use_local_storage = bool;
	                if (bool) {
	                  dom.bind(window, 'unload', saveToLocalStorage);
	                } else {
	                  dom.unbind(window, 'unload', saveToLocalStorage);
	                }
	                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
	              }
	            }

	          }

	        });

	    // Are we a root level GUI?
	    if (common.isUndefined(params.parent)) {

	      params.closed = false;

	      dom.addClass(this.domElement, GUI.CLASS_MAIN);
	      dom.makeSelectable(this.domElement, false);

	      // Are we supposed to be loading locally?
	      if (SUPPORTS_LOCAL_STORAGE) {

	        if (use_local_storage) {

	          _this.useLocalStorage = true;

	          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

	          if (saved_gui) {
	            params.load = JSON.parse(saved_gui);
	          }

	        }

	      }

	      this.__closeButton = document.createElement('div');
	      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
	      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
	      this.domElement.appendChild(this.__closeButton);

	      dom.bind(this.__closeButton, 'click', function() {

	        _this.closed = !_this.closed;


	      });


	      // Oh, you're a nested GUI!
	    } else {

	      if (params.closed === undefined) {
	        params.closed = true;
	      }

	      var title_row_name = document.createTextNode(params.name);
	      dom.addClass(title_row_name, 'controller-name');

	      var title_row = addRow(_this, title_row_name);

	      var on_click_title = function(e) {
	        e.preventDefault();
	        _this.closed = !_this.closed;
	        return false;
	      };

	      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

	      dom.addClass(title_row, 'title');
	      dom.bind(title_row, 'click', on_click_title);

	      if (!params.closed) {
	        this.closed = false;
	      }

	    }

	    if (params.autoPlace) {

	      if (common.isUndefined(params.parent)) {

	        if (auto_place_virgin) {
	          auto_place_container = document.createElement('div');
	          dom.addClass(auto_place_container, CSS_NAMESPACE);
	          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
	          document.body.appendChild(auto_place_container);
	          auto_place_virgin = false;
	        }

	        // Put it in the dom for you.
	        auto_place_container.appendChild(this.domElement);

	        // Apply the auto styles
	        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

	      }


	      // Make it not elastic.
	      if (!this.parent) setWidth(_this, params.width);

	    }

	    dom.bind(window, 'resize', function() { _this.onResize() });
	    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
	    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
	    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
	    this.onResize();


	    if (params.resizable) {
	      addResizeHandle(this);
	    }

	    function saveToLocalStorage() {
	      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
	    }

	    var root = _this.getRoot();
	    function resetWidth() {
	        var root = _this.getRoot();
	        root.width += 1;
	        common.defer(function() {
	          root.width -= 1;
	        });
	      }

	      if (!params.parent) {
	        resetWidth();
	      }

	  };

	  GUI.toggleHide = function() {

	    hide = !hide;
	    common.each(hideable_guis, function(gui) {
	      gui.domElement.style.zIndex = hide ? -999 : 999;
	      gui.domElement.style.opacity = hide ? 0 : 1;
	    });
	  };

	  GUI.CLASS_AUTO_PLACE = 'a';
	  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
	  GUI.CLASS_MAIN = 'main';
	  GUI.CLASS_CONTROLLER_ROW = 'cr';
	  GUI.CLASS_TOO_TALL = 'taller-than-window';
	  GUI.CLASS_CLOSED = 'closed';
	  GUI.CLASS_CLOSE_BUTTON = 'close-button';
	  GUI.CLASS_DRAG = 'drag';

	  GUI.DEFAULT_WIDTH = 245;
	  GUI.TEXT_CLOSED = 'Close Controls';
	  GUI.TEXT_OPEN = 'Open Controls';

	  dom.bind(window, 'keydown', function(e) {

	    if (document.activeElement.type !== 'text' &&
	        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
	      GUI.toggleHide();
	    }

	  }, false);

	  common.extend(

	      GUI.prototype,

	      /** @lends dat.gui.GUI */
	      {

	        /**
	         * @param object
	         * @param property
	         * @returns {dat.controllers.Controller} The new controller that was added.
	         * @instance
	         */
	        add: function(object, property) {

	          return add(
	              this,
	              object,
	              property,
	              {
	                factoryArgs: Array.prototype.slice.call(arguments, 2)
	              }
	          );

	        },

	        /**
	         * @param object
	         * @param property
	         * @returns {dat.controllers.ColorController} The new controller that was added.
	         * @instance
	         */
	        addColor: function(object, property) {

	          return add(
	              this,
	              object,
	              property,
	              {
	                color: true
	              }
	          );

	        },

	        /**
	         * @param controller
	         * @instance
	         */
	        remove: function(controller) {

	          // TODO listening?
	          this.__ul.removeChild(controller.__li);
	          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
	          var _this = this;
	          common.defer(function() {
	            _this.onResize();
	          });

	        },

	        destroy: function() {

	          if (this.autoPlace) {
	            auto_place_container.removeChild(this.domElement);
	          }

	        },

	        /**
	         * @param name
	         * @returns {dat.gui.GUI} The new folder.
	         * @throws {Error} if this GUI already has a folder by the specified
	         * name
	         * @instance
	         */
	        addFolder: function(name) {

	          // We have to prevent collisions on names in order to have a key
	          // by which to remember saved values
	          if (this.__folders[name] !== undefined) {
	            throw new Error('You already have a folder in this GUI by the' +
	                ' name "' + name + '"');
	          }

	          var new_gui_params = { name: name, parent: this };

	          // We need to pass down the autoPlace trait so that we can
	          // attach event listeners to open/close folder actions to
	          // ensure that a scrollbar appears if the window is too short.
	          new_gui_params.autoPlace = this.autoPlace;

	          // Do we have saved appearance data for this folder?

	          if (this.load && // Anything loaded?
	              this.load.folders && // Was my parent a dead-end?
	              this.load.folders[name]) { // Did daddy remember me?

	            // Start me closed if I was closed
	            new_gui_params.closed = this.load.folders[name].closed;

	            // Pass down the loaded data
	            new_gui_params.load = this.load.folders[name];

	          }

	          var gui = new GUI(new_gui_params);
	          this.__folders[name] = gui;

	          var li = addRow(this, gui.domElement);
	          dom.addClass(li, 'folder');
	          return gui;

	        },

	        open: function() {
	          this.closed = false;
	        },

	        close: function() {
	          this.closed = true;
	        },

	        onResize: function() {

	          var root = this.getRoot();

	          if (root.scrollable) {

	            var top = dom.getOffset(root.__ul).top;
	            var h = 0;

	            common.each(root.__ul.childNodes, function(node) {
	              if (! (root.autoPlace && node === root.__save_row))
	                h += dom.getHeight(node);
	            });

	            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
	              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
	              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
	            } else {
	              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
	              root.__ul.style.height = 'auto';
	            }

	          }

	          if (root.__resize_handle) {
	            common.defer(function() {
	              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
	            });
	          }

	          if (root.__closeButton) {
	            root.__closeButton.style.width = root.width + 'px';
	          }

	        },

	        /**
	         * Mark objects for saving. The order of these objects cannot change as
	         * the GUI grows. When remembering new objects, append them to the end
	         * of the list.
	         *
	         * @param {Object...} objects
	         * @throws {Error} if not called on a top level GUI.
	         * @instance
	         */
	        remember: function() {

	          if (common.isUndefined(SAVE_DIALOGUE)) {
	            SAVE_DIALOGUE = new CenteredDiv();
	            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
	          }

	          if (this.parent) {
	            throw new Error("You can only call remember on a top level GUI.");
	          }

	          var _this = this;

	          common.each(Array.prototype.slice.call(arguments), function(object) {
	            if (_this.__rememberedObjects.length == 0) {
	              addSaveMenu(_this);
	            }
	            if (_this.__rememberedObjects.indexOf(object) == -1) {
	              _this.__rememberedObjects.push(object);
	            }
	          });

	          if (this.autoPlace) {
	            // Set save row width
	            setWidth(this, this.width);
	          }

	        },

	        /**
	         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
	         * @instance
	         */
	        getRoot: function() {
	          var gui = this;
	          while (gui.parent) {
	            gui = gui.parent;
	          }
	          return gui;
	        },

	        /**
	         * @returns {Object} a JSON object representing the current state of
	         * this GUI as well as its remembered properties.
	         * @instance
	         */
	        getSaveObject: function() {

	          var toReturn = this.load;

	          toReturn.closed = this.closed;

	          // Am I remembering any values?
	          if (this.__rememberedObjects.length > 0) {

	            toReturn.preset = this.preset;

	            if (!toReturn.remembered) {
	              toReturn.remembered = {};
	            }

	            toReturn.remembered[this.preset] = getCurrentPreset(this);

	          }

	          toReturn.folders = {};
	          common.each(this.__folders, function(element, key) {
	            toReturn.folders[key] = element.getSaveObject();
	          });

	          return toReturn;

	        },

	        save: function() {

	          if (!this.load.remembered) {
	            this.load.remembered = {};
	          }

	          this.load.remembered[this.preset] = getCurrentPreset(this);
	          markPresetModified(this, false);

	        },

	        saveAs: function(presetName) {

	          if (!this.load.remembered) {

	            // Retain default values upon first save
	            this.load.remembered = {};
	            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

	          }

	          this.load.remembered[presetName] = getCurrentPreset(this);
	          this.preset = presetName;
	          addPresetOption(this, presetName, true);

	        },

	        revert: function(gui) {

	          common.each(this.__controllers, function(controller) {
	            // Make revert work on Default.
	            if (!this.getRoot().load.remembered) {
	              controller.setValue(controller.initialValue);
	            } else {
	              recallSavedValue(gui || this.getRoot(), controller);
	            }
	          }, this);

	          common.each(this.__folders, function(folder) {
	            folder.revert(folder);
	          });

	          if (!gui) {
	            markPresetModified(this.getRoot(), false);
	          }


	        },

	        listen: function(controller) {

	          var init = this.__listening.length == 0;
	          this.__listening.push(controller);
	          if (init) updateDisplays(this.__listening);

	        }

	      }

	  );

	  function add(gui, object, property, params) {

	    if (object[property] === undefined) {
	      throw new Error("Object " + object + " has no property \"" + property + "\"");
	    }

	    var controller;

	    if (params.color) {

	      controller = new ColorController(object, property);

	    } else {

	      var factoryArgs = [object,property].concat(params.factoryArgs);
	      controller = controllerFactory.apply(gui, factoryArgs);

	    }

	    if (params.before instanceof Controller) {
	      params.before = params.before.__li;
	    }

	    recallSavedValue(gui, controller);

	    dom.addClass(controller.domElement, 'c');

	    var name = document.createElement('span');
	    dom.addClass(name, 'property-name');
	    name.innerHTML = controller.property;

	    var container = document.createElement('div');
	    container.appendChild(name);
	    container.appendChild(controller.domElement);

	    var li = addRow(gui, container, params.before);

	    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
	    dom.addClass(li, typeof controller.getValue());

	    augmentController(gui, li, controller);

	    gui.__controllers.push(controller);

	    return controller;

	  }

	  /**
	   * Add a row to the end of the GUI or before another row.
	   *
	   * @param gui
	   * @param [dom] If specified, inserts the dom content in the new row
	   * @param [liBefore] If specified, places the new row before another row
	   */
	  function addRow(gui, dom, liBefore) {
	    var li = document.createElement('li');
	    if (dom) li.appendChild(dom);
	    if (liBefore) {
	      gui.__ul.insertBefore(li, params.before);
	    } else {
	      gui.__ul.appendChild(li);
	    }
	    gui.onResize();
	    return li;
	  }

	  function augmentController(gui, li, controller) {

	    controller.__li = li;
	    controller.__gui = gui;

	    common.extend(controller, {

	      options: function(options) {

	        if (arguments.length > 1) {
	          controller.remove();

	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [common.toArray(arguments)]
	              }
	          );

	        }

	        if (common.isArray(options) || common.isObject(options)) {
	          controller.remove();

	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [options]
	              }
	          );

	        }

	      },

	      name: function(v) {
	        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
	        return controller;
	      },

	      listen: function() {
	        controller.__gui.listen(controller);
	        return controller;
	      },

	      remove: function() {
	        controller.__gui.remove(controller);
	        return controller;
	      }

	    });

	    // All sliders should be accompanied by a box.
	    if (controller instanceof NumberControllerSlider) {

	      var box = new NumberControllerBox(controller.object, controller.property,
	          { min: controller.__min, max: controller.__max, step: controller.__step });

	      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
	        var pc = controller[method];
	        var pb = box[method];
	        controller[method] = box[method] = function() {
	          var args = Array.prototype.slice.call(arguments);
	          pc.apply(controller, args);
	          return pb.apply(box, args);
	        }
	      });

	      dom.addClass(li, 'has-slider');
	      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

	    }
	    else if (controller instanceof NumberControllerBox) {

	      var r = function(returned) {

	        // Have we defined both boundaries?
	        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

	          // Well, then lets just replace this with a slider.
	          controller.remove();
	          return add(
	              gui,
	              controller.object,
	              controller.property,
	              {
	                before: controller.__li.nextElementSibling,
	                factoryArgs: [controller.__min, controller.__max, controller.__step]
	              });

	        }

	        return returned;

	      };

	      controller.min = common.compose(r, controller.min);
	      controller.max = common.compose(r, controller.max);

	    }
	    else if (controller instanceof BooleanController) {

	      dom.bind(li, 'click', function() {
	        dom.fakeEvent(controller.__checkbox, 'click');
	      });

	      dom.bind(controller.__checkbox, 'click', function(e) {
	        e.stopPropagation(); // Prevents double-toggle
	      })

	    }
	    else if (controller instanceof FunctionController) {

	      dom.bind(li, 'click', function() {
	        dom.fakeEvent(controller.__button, 'click');
	      });

	      dom.bind(li, 'mouseover', function() {
	        dom.addClass(controller.__button, 'hover');
	      });

	      dom.bind(li, 'mouseout', function() {
	        dom.removeClass(controller.__button, 'hover');
	      });

	    }
	    else if (controller instanceof ColorController) {

	      dom.addClass(li, 'color');
	      controller.updateDisplay = common.compose(function(r) {
	        li.style.borderLeftColor = controller.__color.toString();
	        return r;
	      }, controller.updateDisplay);

	      controller.updateDisplay();

	    }

	    controller.setValue = common.compose(function(r) {
	      if (gui.getRoot().__preset_select && controller.isModified()) {
	        markPresetModified(gui.getRoot(), true);
	      }
	      return r;
	    }, controller.setValue);

	  }

	  function recallSavedValue(gui, controller) {

	    // Find the topmost GUI, that's where remembered objects live.
	    var root = gui.getRoot();

	    // Does the object we're controlling match anything we've been told to
	    // remember?
	    var matched_index = root.__rememberedObjects.indexOf(controller.object);

	    // Why yes, it does!
	    if (matched_index != -1) {

	      // Let me fetch a map of controllers for thcommon.isObject.
	      var controller_map =
	          root.__rememberedObjectIndecesToControllers[matched_index];

	      // Ohp, I believe this is the first controller we've created for this
	      // object. Lets make the map fresh.
	      if (controller_map === undefined) {
	        controller_map = {};
	        root.__rememberedObjectIndecesToControllers[matched_index] =
	            controller_map;
	      }

	      // Keep track of this controller
	      controller_map[controller.property] = controller;

	      // Okay, now have we saved any values for this controller?
	      if (root.load && root.load.remembered) {

	        var preset_map = root.load.remembered;

	        // Which preset are we trying to load?
	        var preset;

	        if (preset_map[gui.preset]) {

	          preset = preset_map[gui.preset];

	        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

	          // Uhh, you can have the default instead?
	          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

	        } else {

	          // Nada.

	          return;

	        }


	        // Did the loaded object remember thcommon.isObject?
	        if (preset[matched_index] &&

	          // Did we remember this particular property?
	            preset[matched_index][controller.property] !== undefined) {

	          // We did remember something for this guy ...
	          var value = preset[matched_index][controller.property];

	          // And that's what it is.
	          controller.initialValue = value;
	          controller.setValue(value);

	        }

	      }

	    }

	  }

	  function getLocalStorageHash(gui, key) {
	    // TODO how does this deal with multiple GUI's?
	    return document.location.href + '.' + key;

	  }

	  function addSaveMenu(gui) {

	    var div = gui.__save_row = document.createElement('li');

	    dom.addClass(gui.domElement, 'has-save');

	    gui.__ul.insertBefore(div, gui.__ul.firstChild);

	    dom.addClass(div, 'save-row');

	    var gears = document.createElement('span');
	    gears.innerHTML = '&nbsp;';
	    dom.addClass(gears, 'button gears');

	    // TODO replace with FunctionController
	    var button = document.createElement('span');
	    button.innerHTML = 'Save';
	    dom.addClass(button, 'button');
	    dom.addClass(button, 'save');

	    var button2 = document.createElement('span');
	    button2.innerHTML = 'New';
	    dom.addClass(button2, 'button');
	    dom.addClass(button2, 'save-as');

	    var button3 = document.createElement('span');
	    button3.innerHTML = 'Revert';
	    dom.addClass(button3, 'button');
	    dom.addClass(button3, 'revert');

	    var select = gui.__preset_select = document.createElement('select');

	    if (gui.load && gui.load.remembered) {

	      common.each(gui.load.remembered, function(value, key) {
	        addPresetOption(gui, key, key == gui.preset);
	      });

	    } else {
	      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
	    }

	    dom.bind(select, 'change', function() {


	      for (var index = 0; index < gui.__preset_select.length; index++) {
	        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
	      }

	      gui.preset = this.value;

	    });

	    div.appendChild(select);
	    div.appendChild(gears);
	    div.appendChild(button);
	    div.appendChild(button2);
	    div.appendChild(button3);

	    if (SUPPORTS_LOCAL_STORAGE) {

	      var saveLocally = document.getElementById('dg-save-locally');
	      var explain = document.getElementById('dg-local-explain');

	      saveLocally.style.display = 'block';

	      var localStorageCheckBox = document.getElementById('dg-local-storage');

	      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
	        localStorageCheckBox.setAttribute('checked', 'checked');
	      }

	      function showHideExplain() {
	        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
	      }

	      showHideExplain();

	      // TODO: Use a boolean controller, fool!
	      dom.bind(localStorageCheckBox, 'change', function() {
	        gui.useLocalStorage = !gui.useLocalStorage;
	        showHideExplain();
	      });

	    }

	    var newConstructorTextArea = document.getElementById('dg-new-constructor');

	    dom.bind(newConstructorTextArea, 'keydown', function(e) {
	      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
	        SAVE_DIALOGUE.hide();
	      }
	    });

	    dom.bind(gears, 'click', function() {
	      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
	      SAVE_DIALOGUE.show();
	      newConstructorTextArea.focus();
	      newConstructorTextArea.select();
	    });

	    dom.bind(button, 'click', function() {
	      gui.save();
	    });

	    dom.bind(button2, 'click', function() {
	      var presetName = prompt('Enter a new preset name.');
	      if (presetName) gui.saveAs(presetName);
	    });

	    dom.bind(button3, 'click', function() {
	      gui.revert();
	    });

	//    div.appendChild(button2);

	  }

	  function addResizeHandle(gui) {

	    gui.__resize_handle = document.createElement('div');

	    common.extend(gui.__resize_handle.style, {

	      width: '6px',
	      marginLeft: '-3px',
	      height: '200px',
	      cursor: 'ew-resize',
	      position: 'absolute'
	//      border: '1px solid blue'

	    });

	    var pmouseX;

	    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
	    dom.bind(gui.__closeButton, 'mousedown', dragStart);

	    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

	    function dragStart(e) {

	      e.preventDefault();

	      pmouseX = e.clientX;

	      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
	      dom.bind(window, 'mousemove', drag);
	      dom.bind(window, 'mouseup', dragStop);

	      return false;

	    }

	    function drag(e) {

	      e.preventDefault();

	      gui.width += pmouseX - e.clientX;
	      gui.onResize();
	      pmouseX = e.clientX;

	      return false;

	    }

	    function dragStop() {

	      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
	      dom.unbind(window, 'mousemove', drag);
	      dom.unbind(window, 'mouseup', dragStop);

	    }

	  }

	  function setWidth(gui, w) {
	    gui.domElement.style.width = w + 'px';
	    // Auto placed save-rows are position fixed, so we have to
	    // set the width manually if we want it to bleed to the edge
	    if (gui.__save_row && gui.autoPlace) {
	      gui.__save_row.style.width = w + 'px';
	    }if (gui.__closeButton) {
	      gui.__closeButton.style.width = w + 'px';
	    }
	  }

	  function getCurrentPreset(gui, useInitialValues) {

	    var toReturn = {};

	    // For each object I'm remembering
	    common.each(gui.__rememberedObjects, function(val, index) {

	      var saved_values = {};

	      // The controllers I've made for thcommon.isObject by property
	      var controller_map =
	          gui.__rememberedObjectIndecesToControllers[index];

	      // Remember each value for each property
	      common.each(controller_map, function(controller, property) {
	        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
	      });

	      // Save the values for thcommon.isObject
	      toReturn[index] = saved_values;

	    });

	    return toReturn;

	  }

	  function addPresetOption(gui, name, setSelected) {
	    var opt = document.createElement('option');
	    opt.innerHTML = name;
	    opt.value = name;
	    gui.__preset_select.appendChild(opt);
	    if (setSelected) {
	      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
	    }
	  }

	  function setPresetSelectIndex(gui) {
	    for (var index = 0; index < gui.__preset_select.length; index++) {
	      if (gui.__preset_select[index].value == gui.preset) {
	        gui.__preset_select.selectedIndex = index;
	      }
	    }
	  }

	  function markPresetModified(gui, modified) {
	    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
	//    console.log('mark', modified, opt);
	    if (modified) {
	      opt.innerHTML = opt.value + "*";
	    } else {
	      opt.innerHTML = opt.value;
	    }
	  }

	  function updateDisplays(controllerArray) {


	    if (controllerArray.length != 0) {

	      requestAnimationFrame(function() {
	        updateDisplays(controllerArray);
	      });

	    }

	    common.each(controllerArray, function(c) {
	      c.updateDisplay();
	    });

	  }

	  return GUI;

	})(dat.utils.css,
	"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
	".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
	dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

	      return function(object, property) {

	        var initialValue = object[property];

	        // Providing options?
	        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
	          return new OptionController(object, property, arguments[2]);
	        }

	        // Providing a map?

	        if (common.isNumber(initialValue)) {

	          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

	            // Has min and max.
	            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

	          } else {

	            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

	          }

	        }

	        if (common.isString(initialValue)) {
	          return new StringController(object, property);
	        }

	        if (common.isFunction(initialValue)) {
	          return new FunctionController(object, property, '');
	        }

	        if (common.isBoolean(initialValue)) {
	          return new BooleanController(object, property);
	        }

	      }

	    })(dat.controllers.OptionController,
	dat.controllers.NumberControllerBox,
	dat.controllers.NumberControllerSlider,
	dat.controllers.StringController = (function (Controller, dom, common) {

	  /**
	   * @class Provides a text input to alter the string property of an object.
	   *
	   * @extends dat.controllers.Controller
	   *
	   * @param {Object} object The object to be manipulated
	   * @param {string} property The name of the property to be manipulated
	   *
	   * @member dat.controllers
	   */
	  var StringController = function(object, property) {

	    StringController.superclass.call(this, object, property);

	    var _this = this;

	    this.__input = document.createElement('input');
	    this.__input.setAttribute('type', 'text');

	    dom.bind(this.__input, 'keyup', onChange);
	    dom.bind(this.__input, 'change', onChange);
	    dom.bind(this.__input, 'blur', onBlur);
	    dom.bind(this.__input, 'keydown', function(e) {
	      if (e.keyCode === 13) {
	        this.blur();
	      }
	    });
	    

	    function onChange() {
	      _this.setValue(_this.__input.value);
	    }

	    function onBlur() {
	      if (_this.__onFinishChange) {
	        _this.__onFinishChange.call(_this, _this.getValue());
	      }
	    }

	    this.updateDisplay();

	    this.domElement.appendChild(this.__input);

	  };

	  StringController.superclass = Controller;

	  common.extend(

	      StringController.prototype,
	      Controller.prototype,

	      {

	        updateDisplay: function() {
	          // Stops the caret from moving on account of:
	          // keyup -> setValue -> updateDisplay
	          if (!dom.isActive(this.__input)) {
	            this.__input.value = this.getValue();
	          }
	          return StringController.superclass.prototype.updateDisplay.call(this);
	        }

	      }

	  );

	  return StringController;

	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.utils.common),
	dat.controllers.FunctionController,
	dat.controllers.BooleanController,
	dat.utils.common),
	dat.controllers.Controller,
	dat.controllers.BooleanController,
	dat.controllers.FunctionController,
	dat.controllers.NumberControllerBox,
	dat.controllers.NumberControllerSlider,
	dat.controllers.OptionController,
	dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

	  var ColorController = function(object, property) {

	    ColorController.superclass.call(this, object, property);

	    this.__color = new Color(this.getValue());
	    this.__temp = new Color(0);

	    var _this = this;

	    this.domElement = document.createElement('div');

	    dom.makeSelectable(this.domElement, false);

	    this.__selector = document.createElement('div');
	    this.__selector.className = 'selector';

	    this.__saturation_field = document.createElement('div');
	    this.__saturation_field.className = 'saturation-field';

	    this.__field_knob = document.createElement('div');
	    this.__field_knob.className = 'field-knob';
	    this.__field_knob_border = '2px solid ';

	    this.__hue_knob = document.createElement('div');
	    this.__hue_knob.className = 'hue-knob';

	    this.__hue_field = document.createElement('div');
	    this.__hue_field.className = 'hue-field';

	    this.__input = document.createElement('input');
	    this.__input.type = 'text';
	    this.__input_textShadow = '0 1px 1px ';

	    dom.bind(this.__input, 'keydown', function(e) {
	      if (e.keyCode === 13) { // on enter
	        onBlur.call(this);
	      }
	    });

	    dom.bind(this.__input, 'blur', onBlur);

	    dom.bind(this.__selector, 'mousedown', function(e) {

	      dom
	        .addClass(this, 'drag')
	        .bind(window, 'mouseup', function(e) {
	          dom.removeClass(_this.__selector, 'drag');
	        });

	    });

	    var value_field = document.createElement('div');

	    common.extend(this.__selector.style, {
	      width: '122px',
	      height: '102px',
	      padding: '3px',
	      backgroundColor: '#222',
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
	    });

	    common.extend(this.__field_knob.style, {
	      position: 'absolute',
	      width: '12px',
	      height: '12px',
	      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
	      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
	      borderRadius: '12px',
	      zIndex: 1
	    });
	    
	    common.extend(this.__hue_knob.style, {
	      position: 'absolute',
	      width: '15px',
	      height: '2px',
	      borderRight: '4px solid #fff',
	      zIndex: 1
	    });

	    common.extend(this.__saturation_field.style, {
	      width: '100px',
	      height: '100px',
	      border: '1px solid #555',
	      marginRight: '3px',
	      display: 'inline-block',
	      cursor: 'pointer'
	    });

	    common.extend(value_field.style, {
	      width: '100%',
	      height: '100%',
	      background: 'none'
	    });
	    
	    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

	    common.extend(this.__hue_field.style, {
	      width: '15px',
	      height: '100px',
	      display: 'inline-block',
	      border: '1px solid #555',
	      cursor: 'ns-resize'
	    });

	    hueGradient(this.__hue_field);

	    common.extend(this.__input.style, {
	      outline: 'none',
	//      width: '120px',
	      textAlign: 'center',
	//      padding: '4px',
	//      marginBottom: '6px',
	      color: '#fff',
	      border: 0,
	      fontWeight: 'bold',
	      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
	    });

	    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
	    dom.bind(this.__field_knob, 'mousedown', fieldDown);

	    dom.bind(this.__hue_field, 'mousedown', function(e) {
	      setH(e);
	      dom.bind(window, 'mousemove', setH);
	      dom.bind(window, 'mouseup', unbindH);
	    });

	    function fieldDown(e) {
	      setSV(e);
	      // document.body.style.cursor = 'none';
	      dom.bind(window, 'mousemove', setSV);
	      dom.bind(window, 'mouseup', unbindSV);
	    }

	    function unbindSV() {
	      dom.unbind(window, 'mousemove', setSV);
	      dom.unbind(window, 'mouseup', unbindSV);
	      // document.body.style.cursor = 'default';
	    }

	    function onBlur() {
	      var i = interpret(this.value);
	      if (i !== false) {
	        _this.__color.__state = i;
	        _this.setValue(_this.__color.toOriginal());
	      } else {
	        this.value = _this.__color.toString();
	      }
	    }

	    function unbindH() {
	      dom.unbind(window, 'mousemove', setH);
	      dom.unbind(window, 'mouseup', unbindH);
	    }

	    this.__saturation_field.appendChild(value_field);
	    this.__selector.appendChild(this.__field_knob);
	    this.__selector.appendChild(this.__saturation_field);
	    this.__selector.appendChild(this.__hue_field);
	    this.__hue_field.appendChild(this.__hue_knob);

	    this.domElement.appendChild(this.__input);
	    this.domElement.appendChild(this.__selector);

	    this.updateDisplay();

	    function setSV(e) {

	      e.preventDefault();

	      var w = dom.getWidth(_this.__saturation_field);
	      var o = dom.getOffset(_this.__saturation_field);
	      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
	      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

	      if (v > 1) v = 1;
	      else if (v < 0) v = 0;

	      if (s > 1) s = 1;
	      else if (s < 0) s = 0;

	      _this.__color.v = v;
	      _this.__color.s = s;

	      _this.setValue(_this.__color.toOriginal());


	      return false;

	    }

	    function setH(e) {

	      e.preventDefault();

	      var s = dom.getHeight(_this.__hue_field);
	      var o = dom.getOffset(_this.__hue_field);
	      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

	      if (h > 1) h = 1;
	      else if (h < 0) h = 0;

	      _this.__color.h = h * 360;

	      _this.setValue(_this.__color.toOriginal());

	      return false;

	    }

	  };

	  ColorController.superclass = Controller;

	  common.extend(

	      ColorController.prototype,
	      Controller.prototype,

	      {

	        updateDisplay: function() {

	          var i = interpret(this.getValue());

	          if (i !== false) {

	            var mismatch = false;

	            // Check for mismatch on the interpreted value.

	            common.each(Color.COMPONENTS, function(component) {
	              if (!common.isUndefined(i[component]) &&
	                  !common.isUndefined(this.__color.__state[component]) &&
	                  i[component] !== this.__color.__state[component]) {
	                mismatch = true;
	                return {}; // break
	              }
	            }, this);

	            // If nothing diverges, we keep our previous values
	            // for statefulness, otherwise we recalculate fresh
	            if (mismatch) {
	              common.extend(this.__color.__state, i);
	            }

	          }

	          common.extend(this.__temp.__state, this.__color.__state);

	          this.__temp.a = 1;

	          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
	          var _flip = 255 - flip;

	          common.extend(this.__field_knob.style, {
	            marginLeft: 100 * this.__color.s - 7 + 'px',
	            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
	            backgroundColor: this.__temp.toString(),
	            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
	          });

	          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

	          this.__temp.s = 1;
	          this.__temp.v = 1;

	          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

	          common.extend(this.__input.style, {
	            backgroundColor: this.__input.value = this.__color.toString(),
	            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
	            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
	          });

	        }

	      }

	  );
	  
	  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
	  
	  function linearGradient(elem, x, a, b) {
	    elem.style.background = '';
	    common.each(vendors, function(vendor) {
	      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
	    });
	  }
	  
	  function hueGradient(elem) {
	    elem.style.background = '';
	    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
	    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
	  }


	  return ColorController;

	})(dat.controllers.Controller,
	dat.dom.dom,
	dat.color.Color = (function (interpret, math, toString, common) {

	  var Color = function() {

	    this.__state = interpret.apply(this, arguments);

	    if (this.__state === false) {
	      throw 'Failed to interpret color arguments';
	    }

	    this.__state.a = this.__state.a || 1;


	  };

	  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

	  common.extend(Color.prototype, {

	    toString: function() {
	      return toString(this);
	    },

	    toOriginal: function() {
	      return this.__state.conversion.write(this);
	    }

	  });

	  defineRGBComponent(Color.prototype, 'r', 2);
	  defineRGBComponent(Color.prototype, 'g', 1);
	  defineRGBComponent(Color.prototype, 'b', 0);

	  defineHSVComponent(Color.prototype, 'h');
	  defineHSVComponent(Color.prototype, 's');
	  defineHSVComponent(Color.prototype, 'v');

	  Object.defineProperty(Color.prototype, 'a', {

	    get: function() {
	      return this.__state.a;
	    },

	    set: function(v) {
	      this.__state.a = v;
	    }

	  });

	  Object.defineProperty(Color.prototype, 'hex', {

	    get: function() {

	      if (!this.__state.space !== 'HEX') {
	        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
	      }

	      return this.__state.hex;

	    },

	    set: function(v) {

	      this.__state.space = 'HEX';
	      this.__state.hex = v;

	    }

	  });

	  function defineRGBComponent(target, component, componentHexIndex) {

	    Object.defineProperty(target, component, {

	      get: function() {

	        if (this.__state.space === 'RGB') {
	          return this.__state[component];
	        }

	        recalculateRGB(this, component, componentHexIndex);

	        return this.__state[component];

	      },

	      set: function(v) {

	        if (this.__state.space !== 'RGB') {
	          recalculateRGB(this, component, componentHexIndex);
	          this.__state.space = 'RGB';
	        }

	        this.__state[component] = v;

	      }

	    });

	  }

	  function defineHSVComponent(target, component) {

	    Object.defineProperty(target, component, {

	      get: function() {

	        if (this.__state.space === 'HSV')
	          return this.__state[component];

	        recalculateHSV(this);

	        return this.__state[component];

	      },

	      set: function(v) {

	        if (this.__state.space !== 'HSV') {
	          recalculateHSV(this);
	          this.__state.space = 'HSV';
	        }

	        this.__state[component] = v;

	      }

	    });

	  }

	  function recalculateRGB(color, component, componentHexIndex) {

	    if (color.__state.space === 'HEX') {

	      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

	    } else if (color.__state.space === 'HSV') {

	      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

	    } else {

	      throw 'Corrupted color state';

	    }

	  }

	  function recalculateHSV(color) {

	    var result = math.rgb_to_hsv(color.r, color.g, color.b);

	    common.extend(color.__state,
	        {
	          s: result.s,
	          v: result.v
	        }
	    );

	    if (!common.isNaN(result.h)) {
	      color.__state.h = result.h;
	    } else if (common.isUndefined(color.__state.h)) {
	      color.__state.h = 0;
	    }

	  }

	  return Color;

	})(dat.color.interpret,
	dat.color.math = (function () {

	  var tmpComponent;

	  return {

	    hsv_to_rgb: function(h, s, v) {

	      var hi = Math.floor(h / 60) % 6;

	      var f = h / 60 - Math.floor(h / 60);
	      var p = v * (1.0 - s);
	      var q = v * (1.0 - (f * s));
	      var t = v * (1.0 - ((1.0 - f) * s));
	      var c = [
	        [v, t, p],
	        [q, v, p],
	        [p, v, t],
	        [p, q, v],
	        [t, p, v],
	        [v, p, q]
	      ][hi];

	      return {
	        r: c[0] * 255,
	        g: c[1] * 255,
	        b: c[2] * 255
	      };

	    },

	    rgb_to_hsv: function(r, g, b) {

	      var min = Math.min(r, g, b),
	          max = Math.max(r, g, b),
	          delta = max - min,
	          h, s;

	      if (max != 0) {
	        s = delta / max;
	      } else {
	        return {
	          h: NaN,
	          s: 0,
	          v: 0
	        };
	      }

	      if (r == max) {
	        h = (g - b) / delta;
	      } else if (g == max) {
	        h = 2 + (b - r) / delta;
	      } else {
	        h = 4 + (r - g) / delta;
	      }
	      h /= 6;
	      if (h < 0) {
	        h += 1;
	      }

	      return {
	        h: h * 360,
	        s: s,
	        v: max / 255
	      };
	    },

	    rgb_to_hex: function(r, g, b) {
	      var hex = this.hex_with_component(0, 2, r);
	      hex = this.hex_with_component(hex, 1, g);
	      hex = this.hex_with_component(hex, 0, b);
	      return hex;
	    },

	    component_from_hex: function(hex, componentIndex) {
	      return (hex >> (componentIndex * 8)) & 0xFF;
	    },

	    hex_with_component: function(hex, componentIndex, value) {
	      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
	    }

	  }

	})(),
	dat.color.toString,
	dat.utils.common),
	dat.color.interpret,
	dat.utils.common),
	dat.utils.requestAnimationFrame = (function () {

	  /**
	   * requirejs version of Paul Irish's RequestAnimationFrame
	   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	   */

	  return window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame ||
	      window.oRequestAnimationFrame ||
	      window.msRequestAnimationFrame ||
	      function(callback, element) {

	        window.setTimeout(callback, 1000 / 60);

	      };
	})(),
	dat.dom.CenteredDiv = (function (dom, common) {


	  var CenteredDiv = function() {

	    this.backgroundElement = document.createElement('div');
	    common.extend(this.backgroundElement.style, {
	      backgroundColor: 'rgba(0,0,0,0.8)',
	      top: 0,
	      left: 0,
	      display: 'none',
	      zIndex: '1000',
	      opacity: 0,
	      WebkitTransition: 'opacity 0.2s linear'
	    });

	    dom.makeFullscreen(this.backgroundElement);
	    this.backgroundElement.style.position = 'fixed';

	    this.domElement = document.createElement('div');
	    common.extend(this.domElement.style, {
	      position: 'fixed',
	      display: 'none',
	      zIndex: '1001',
	      opacity: 0,
	      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
	    });


	    document.body.appendChild(this.backgroundElement);
	    document.body.appendChild(this.domElement);

	    var _this = this;
	    dom.bind(this.backgroundElement, 'click', function() {
	      _this.hide();
	    });


	  };

	  CenteredDiv.prototype.show = function() {

	    var _this = this;
	    


	    this.backgroundElement.style.display = 'block';

	    this.domElement.style.display = 'block';
	    this.domElement.style.opacity = 0;
	//    this.domElement.style.top = '52%';
	    this.domElement.style.webkitTransform = 'scale(1.1)';

	    this.layout();

	    common.defer(function() {
	      _this.backgroundElement.style.opacity = 1;
	      _this.domElement.style.opacity = 1;
	      _this.domElement.style.webkitTransform = 'scale(1)';
	    });

	  };

	  CenteredDiv.prototype.hide = function() {

	    var _this = this;

	    var hide = function() {

	      _this.domElement.style.display = 'none';
	      _this.backgroundElement.style.display = 'none';

	      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
	      dom.unbind(_this.domElement, 'transitionend', hide);
	      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

	    };

	    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
	    dom.bind(this.domElement, 'transitionend', hide);
	    dom.bind(this.domElement, 'oTransitionEnd', hide);

	    this.backgroundElement.style.opacity = 0;
	//    this.domElement.style.top = '48%';
	    this.domElement.style.opacity = 0;
	    this.domElement.style.webkitTransform = 'scale(1.1)';

	  };

	  CenteredDiv.prototype.layout = function() {
	    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
	    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
	  };
	  
	  function lockScroll(e) {
	    console.log(e);
	  }

	  return CenteredDiv;

	})(dat.dom.dom,
	dat.utils.common),
	dat.dom.dom,
	dat.utils.common);

/***/ },
/* 113 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nuniform sampler2D texture;\nuniform vec3 lightPos;\nuniform mat3 uModelViewMatrixInverse;\n\nconst vec3 baseColor = vec3(.1);\n\n\nfloat diffuse(vec3 N, vec3 L) {\n\treturn max(dot(N, normalize(L)), 0.0);\n}\n\n\nvec3 diffuse(vec3 N, vec3 L, vec3 C) {\n\treturn diffuse(N, L) * C;\n}\n\n\nvoid main(void) {\n\tvec3 colorPaper = texture2D(texture, vTextureCoord).rgb;\n\tvec3 color = colorPaper * baseColor;\n\tvec3 L = uModelViewMatrixInverse * lightPos;\n\tfloat _diff = 1.0 - diffuse(vNormal, L);\n\n\tcolor.rgb *= 1.0 + _diff * 5.0;\n\n    gl_FragColor = vec4(color, 1.0);\n}"

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uLineWidth;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n\tvec3 position = aVertexPosition * uLineWidth;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}"

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float uRatio;\n\n\nfloat contrast(float mValue, float mScale, float mMidPoint) {\n\treturn clamp( (mValue - mMidPoint) * mScale + mMidPoint, 0.0, 1.0);\n}\n\nfloat contrast(float mValue, float mScale) {\n\treturn contrast(mValue,  mScale, .5);\n}\n\nvec2 contrast(vec2 mValue, float mScale, float mMidPoint) {\n\treturn vec2( contrast(mValue.r, mScale, mMidPoint), contrast(mValue.g, mScale, mMidPoint));\n}\n\nvec2 contrast(vec2 mValue, float mScale) {\n\treturn contrast(mValue, mScale, .5);\n}\n\nvoid main(void) {\n\tvec2 uv = vTextureCoord;\n\tuv.x = contrast(uv.x, uRatio * 0.5);\n\t// uv.y = contrast(uv.y, 1.0/uRatio);\n\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float rtWidth;\nuniform float rtHeight;\n\n\nfloat FXAA_SUBPIX_SHIFT = 1.0/4.0;\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\n\n\nvec4 applyFXAA(vec2 fragCoord, sampler2D tex) {\n    vec4 color;\n    vec2 inverseVP = vec2(1.0 / rtWidth, 1.0 / rtHeight);\n    vec3 rgbNW = texture2D(tex, (fragCoord + vec2(-1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbNE = texture2D(tex, (fragCoord + vec2(1.0, -1.0)) * inverseVP).xyz;\n    vec3 rgbSW = texture2D(tex, (fragCoord + vec2(-1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbSE = texture2D(tex, (fragCoord + vec2(1.0, 1.0)) * inverseVP).xyz;\n    vec3 rgbM  = texture2D(tex, fragCoord  * inverseVP).xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    //return texture2D(tex, fragCoord);\n    //return vec4(fragCoord, 0.0, 1.0);\n    //return vec4(rgbM, 1.0);\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, 1.0);\n    else\n        color = vec4(rgbB, 1.0);\n    return color;\n}\n\nvoid main(void) {\n    vec4 posPos = vec4(.0);\n\n\tvec2 rcpFrame = vec2(1.0/rtWidth, 1.0/rtHeight);\n\n \tposPos.xy = vTextureCoord.xy;\n \tposPos.zw = vTextureCoord.xy - (rcpFrame * (0.5 + FXAA_SUBPIX_SHIFT));\n\n \t// vec4 color = applyFXAA(posPos.xy * vec2(rtWidth, rtHeight), texture);\n \tvec4 color = applyFXAA(vTextureCoord * vec2(rtWidth, rtHeight), texture);\n \tgl_FragColor = color;\n}"

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nvarying float vAlpha;\nuniform sampler2D texture;\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n\tif(vAlpha <= 0.0) discard;\n    gl_FragColor = vec4(color, opacity * vAlpha);\n}"

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float uNumSeg;\nuniform float uEnd;\nuniform float uLength;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying float vAlpha;\n\nvoid main(void) {\n\n\tvec2 uv      = aVertexPosition.xy;\n\tvec3 posCurr = texture2D(textureCurr, uv).rgb;\n\tvec3 posNext = texture2D(textureNext, uv).rgb;\n\tvec3 extra = texture2D(textureExtra, uv).rgb;\n\n\tfloat a \t = 1.0;\n\tif(extra.b > uEnd + uLength) {\n\t\ta = 0.0;\n\t} else if(extra.b > uEnd ) {\n\t\ta = smoothstep(uEnd + uLength, uEnd, extra.b);\n\t}\n\n\n\tconst float lr = 20.0;\n\n\tif(extra.b < uNumSeg) {\n\t\ta = 0.0;\n\t} else if(extra.b < uNumSeg + lr) {\n\t\ta = smoothstep(uNumSeg, uNumSeg + lr, extra.b);\n\t}\n\n\tfloat dCurr = length(posCurr);\n\tfloat dNext = length(posNext);\n\n\ta = pow(a, 3.0);\n\n\tvAlpha = a;\n\n\tvec3 position = mix(posCurr, posNext, aVertexPosition.z);\n\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vNormal = aNormal;\n}"

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec3 vExtra;\nvarying float vAlpha;\nuniform sampler2D texture;\nuniform float time;\n\nvec2 rotate(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\tmat2 m = mat2(c, -s, s, c);\n\treturn m * v;\n}\n\nvoid main(void) {\n\n\tvec2 uv = gl_PointCoord - vec2(.5);\n\tuv = rotate(uv, vExtra.r + time);\n\tuv += vec2(.5);\n\n    vec4 color = texture2D(texture, uv);\n\n    color.a *= 0.5 * vAlpha;\n\n    if(color.a <= 0.05) discard;\n\n    gl_FragColor = color;\n}"

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aExtra;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float time;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\nvarying float vAlpha;\n\nconst float PI = 3.141592653;\n\nvoid main(void) {\n\tvec3 dir = normalize(aVertexPosition);\n\tfloat d = time * (1.0+aExtra.b);\n\tconst float range = 1.0;\n\td = mod(d, range);\n\n\t// vAlpha = smoothstep(range, 0.0, d);\n\tvAlpha = sin(PI * d/range);\n\n\tvec3 position = aVertexPosition + dir * d;\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n    vNormal = aNormal;\n\n    gl_PointSize = aExtra.r * 40.0 + 50.0;\n    vExtra = aExtra;\n}"

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "// copy.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform sampler2D textureMap;\n\nconst vec3 color0 = vec3(19.0, 18.0, 11.0)/255.0;\nconst vec3 color1 = vec3(239.0, 240.0, 235.0)/255.0;\nuniform float offset;\n\nvoid main(void) {\n\tvec4 color = texture2D(texture, vTextureCoord);\n\tvec3 colorMap = texture2D(textureMap, vTextureCoord).rgb;\n\n\t// color.r += colorMap.r;\n\n\t// if(colorMap.r > .5 && color.r >= 0.9) {\n\t// \tcolor.rgb = vec3(1.0) - color.rgb;\n\t// }\n\n\tif(color.r >= 0.9 && color.g < 0.01) {\n\t\tif(colorMap.r > .5) {\n\t\t\tcolor.rgb = vec3(1.0);\n\t\t} else {\n\t\t\tcolor.rgb = vec3(0.1);\n\t\t}\n\t}\n\n\n\tfloat br = length(color.rgb) / length(vec3(1.0));\n\tcolor.rgb = mix(color0, color1, br);\n\n\tvec3 invert = vec3(1.0) - color.rgb;\n\n\tcolor.rgb = mix(color.rgb, invert, offset);\n\n    gl_FragColor = color;\n}"

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\nvarying vec4 vColor;\n\nvoid main(void) {\n\tif(distance(gl_PointCoord, vec2(.5)) > .5) discard;\n    gl_FragColor = vColor;\n}"

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "// render.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform sampler2D textureCurr;\nuniform sampler2D textureNext;\nuniform sampler2D textureExtra;\nuniform float percent;\nuniform float time;\nuniform vec2 uViewport;\nuniform float uEnd;\nuniform float uLength;\nuniform float uNumSeg;\n\nvarying vec4 vColor;\nvarying vec3 vNormal;\n\nconst float radius = 0.015;\n\nvoid main(void) {\n\tvec2 uv      = aVertexPosition.xy;\n\tvec3 posCurr = texture2D(textureCurr, uv).rgb;\n\tvec3 posNext = texture2D(textureNext, uv).rgb;\n\tvec3 pos     = mix(posCurr, posNext, percent);\n\tvec3 extra   = texture2D(textureExtra, uv).rgb;\n\tgl_Position  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\n\tfloat a \t = 1.0;\n\tif(extra.b > uEnd + uLength) {\n\t\ta = 0.0;\n\t} else if(extra.b > uEnd ) {\n\t\ta = smoothstep(uEnd + uLength, uEnd, extra.b);\n\t}\n\n\tif(extra.b < uNumSeg) {\n\t\ta = smoothstep(0.0, uNumSeg, extra.b);\n\t}\n\n\tif(length(posNext) < length(posCurr)) {\n\t\ta = 0.0;\n\t}\n\n\ta = pow(a, 3.0);\n\t\n\tvColor       = vec4(vec3(1.0, 0.0, 0.0), a);\n\n\tfloat distOffset = uViewport.y * uProjectionMatrix[1][1] * radius / gl_Position.w;\n    gl_PointSize = distOffset * (1.0 + extra.x * 1.0);\n\n\tvNormal \t = aNormal;\n}"

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "// save.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec3 vColor;\nvarying vec3 vExtra;\n\nvoid main(void) {\n    gl_FragData[0] = vec4(vColor, 1.0);\n    gl_FragData[1] = vec4(0.0, 0.0, 0.0, 1.0);\n    gl_FragData[2] = vec4(vExtra, 1.0);\n    gl_FragData[3] = vec4(vColor, 1.0);\n}"

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "// save.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\nattribute vec3 aExtra;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vExtra;\n\nvoid main(void) {\n\tvColor       = aVertexPosition;\n\tvec3 pos     = vec3(aTextureCoord, 0.0);\n\tgl_Position  = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n\t\n\tgl_PointSize = 1.0;\n\t\n\tvNormal      = aNormal;\n\tvExtra       = aExtra;\n}"

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "// sim.frag\n\n#extension GL_EXT_draw_buffers : require \nprecision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D textureVel;\nuniform sampler2D texturePos;\nuniform sampler2D textureExtra;\nuniform sampler2D textureOrgPos;\nuniform float time;\nuniform float uSphereSize;\nuniform float uEnd;\nuniform float uNumSeg;\nuniform float uLength;\nuniform vec3 uHit;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0;  }\n\nvec4 permute(vec4 x) {  return mod289(((x*34.0)+1.0)*x);  }\n\nvec4 taylorInvSqrt(vec4 r) {  return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat snoise(vec3 v) { \n\tconst vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\tconst vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n\tvec3 i  = floor(v + dot(v, C.yyy) );\n\tvec3 x0 =   v - i + dot(i, C.xxx) ;\n\n\tvec3 g = step(x0.yzx, x0.xyz);\n\tvec3 l = 1.0 - g;\n\tvec3 i1 = min( g.xyz, l.zxy );\n\tvec3 i2 = max( g.xyz, l.zxy );\n\n\tvec3 x1 = x0 - i1 + C.xxx;\n\tvec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n\tvec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n\ti = mod289(i); \n\tvec4 p = permute( permute( permute( \n\t\t\t\t\t\t i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n\t\t\t\t\t + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n\t\t\t\t\t + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\tfloat n_ = 0.142857142857; // 1.0/7.0\n\tvec3  ns = n_ * D.wyz - D.xzx;\n\n\tvec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n\tvec4 x_ = floor(j * ns.z);\n\tvec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n\tvec4 x = x_ *ns.x + ns.yyyy;\n\tvec4 y = y_ *ns.x + ns.yyyy;\n\tvec4 h = 1.0 - abs(x) - abs(y);\n\n\tvec4 b0 = vec4( x.xy, y.xy );\n\tvec4 b1 = vec4( x.zw, y.zw );\n\n\tvec4 s0 = floor(b0)*2.0 + 1.0;\n\tvec4 s1 = floor(b1)*2.0 + 1.0;\n\tvec4 sh = -step(h, vec4(0.0));\n\n\tvec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\tvec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n\tvec3 p0 = vec3(a0.xy,h.x);\n\tvec3 p1 = vec3(a0.zw,h.y);\n\tvec3 p2 = vec3(a1.xy,h.z);\n\tvec3 p3 = vec3(a1.zw,h.w);\n\n\tvec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\tp0 *= norm.x;\n\tp1 *= norm.y;\n\tp2 *= norm.z;\n\tp3 *= norm.w;\n\n\tvec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\tm = m * m;\n\treturn 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdot(p2,x2), dot(p3,x3) ) );\n}\n\nvec3 snoiseVec3( vec3 x ){\n\n\tfloat s  = snoise(vec3( x ));\n\tfloat s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n\tfloat s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n\tvec3 c = vec3( s , s1 , s2 );\n\treturn c;\n\n}\n\n\nvec3 curlNoise( vec3 p ){\n\t\n\tconst float e = .1;\n\tvec3 dx = vec3( e   , 0.0 , 0.0 );\n\tvec3 dy = vec3( 0.0 , e   , 0.0 );\n\tvec3 dz = vec3( 0.0 , 0.0 , e   );\n\n\tvec3 p_x0 = snoiseVec3( p - dx );\n\tvec3 p_x1 = snoiseVec3( p + dx );\n\tvec3 p_y0 = snoiseVec3( p - dy );\n\tvec3 p_y1 = snoiseVec3( p + dy );\n\tvec3 p_z0 = snoiseVec3( p - dz );\n\tvec3 p_z1 = snoiseVec3( p + dz );\n\n\tfloat x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n\tfloat y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n\tfloat z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n\tconst float divisor = 1.0 / ( 2.0 * e );\n\treturn normalize( vec3( x , y , z ) * divisor );\n\n}\n\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n    \n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvec3 rotate(vec3 v, vec3 axis, float angle) {\n\tmat4 m = rotationMatrix(axis, angle);\n\treturn (m * vec4(v, 1.0)).xyz;\n}\n\nvec3 power(vec3 v, float t) {\n\treturn vec3(\n\t\t\tpow(v.x, t),\n\t\t\tpow(v.y, t),\n\t\t\tpow(v.z, t)\n\t\t);\n}\n\nvoid main(void) {\n\tvec3 pos        = texture2D(texturePos, vTextureCoord).rgb;\n\tvec3 vel        = texture2D(textureVel, vTextureCoord).rgb;\n\tvec3 extra      = texture2D(textureExtra, vTextureCoord).rgb;\n\tvec3 orgPos     = texture2D(textureOrgPos, vTextureCoord).rgb;\n\tfloat posOffset = mix(extra.r, 1.0, .925) * 0.2;\n\tvec3 acc        = curlNoise(pos * posOffset + time * .35);\n\t// acc \t\t\t= power(acc, 5.0);\n\n\t// float speed = mix(extra.g, 1.0, .95);\n\tfloat speed = 0.8 + extra.g * 0.5;\n\tspeed = pow(speed, 2.0) * (1.5 + acc.r);\n\n\tif(extra.b < uNumSeg) {\n\t\tspeed *= 0.001;\n\t}\n\t\n\tvel += acc * .001 * speed;\n\tvec3 dir = normalize(pos);\n\tvel += dir * 0.002 * speed;\n\n\n\tfloat distToHit = distance(pos, uHit);\n\tconst float minDist = 1.5;\n\tif(distToHit < minDist) {\n\t\tvec3 dirToHit = normalize(uHit - pos);\n\t\tfloat f = (minDist - distToHit) * 0.02;\n\t\tvel += dirToHit * f;\n\t}\n\n\n\tconst float decrease = .93;\n\tvel *= decrease;\n\n\textra.b += 1.0;\n\tpos += vel;\n\n\tif(extra.b > uEnd + uLength) {\n\t\tvec3 axis = normalize(extra);\n\t\torgPos = rotate(orgPos, axis, time * extra.r * extra.g);\n\t\tpos = orgPos;\n\t\textra.b = 0.0;\n\t}\n\n\tgl_FragData[0] = vec4(pos, 1.0);\n\tgl_FragData[1] = vec4(vel, 1.0);\n\tgl_FragData[2] = vec4(extra, 1.0);\n\tgl_FragData[3] = vec4(orgPos, 1.0);\n}"

/***/ },
/* 128 */
/***/ function(module, exports) {

	// stats.js - http://github.com/mrdoob/stats.js
	var Stats=function(){function h(a){c.appendChild(a.dom);return a}function k(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();k(++l%c.children.length)},!1);var g=(performance||Date).now(),e=g,a=0,r=h(new Stats.Panel("FPS","#0ff","#002")),f=h(new Stats.Panel("MS","#0f0","#020"));
	if(self.performance&&self.performance.memory)var t=h(new Stats.Panel("MB","#f08","#201"));k(0);return{REVISION:16,dom:c,addPanel:h,showPanel:k,begin:function(){g=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();f.update(c-g,200);if(c>e+1E3&&(r.update(1E3*a/(c-e),100),e=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){g=this.end()},domElement:c,setMode:k}};
	Stats.Panel=function(h,k,l){var c=Infinity,g=0,e=Math.round,a=e(window.devicePixelRatio||1),r=80*a,f=48*a,t=3*a,u=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=f;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,f);b.fillStyle=k;b.fillText(h,t,u);b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(f,
	v){c=Math.min(c,f);g=Math.max(g,f);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=k;b.fillText(e(f)+" "+h+" ("+e(c)+"-"+e(g)+")",t,u);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,e((1-f/v)*p))}}};"object"===typeof module&&(module.exports=Stats);


/***/ }
/******/ ]);