parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"FO+Z":[function(require,module,exports) {
"use strict";function e(e){for(var r=["所有的","都"],t=[],n=[],o=0;o<r.length;o++){var s=r[o],i=e.indexOf(s);t.push(i,i+s.length)}for(var l=0;l<t.length;l++)n.push(e.slice(t[l],t[l+1]));return n}function r(e){for(var r=["是"],t=[],n=[],o=0;o<r.length;o++){var s=r[o],i=e.indexOf(s);t.push(i,i+s.length)}n.push(e.slice(0,t[0]));for(var l=0;l<t.length;l++)n.push(e.slice(t[l],t[l+1]));return console.log(n),n}function t(e,r){if(e===r)return!0;for(var t=["","一","二","三","四","五","六","七","八","九","十"],n=["只","个","条","群"],o=0;o<t.length;o++)for(var s=t[o],i=0;i<n.length;i++){if(e===s+n[i]+r)return!0}return!1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.splitMajorPremise=e,exports.splitMinorPremise=r,exports.isABelongsToB=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./utils"),t="所有的猫都有尾巴",n="橘猫是一只猫",l=document.getElementById("input1"),o=document.getElementById("input2");function i(){var t=l.value,n=o.value,i=(0,e.splitMajorPremise)(t),u=(0,e.splitMinorPremise)(n),s=u[0],r=i[1],c=u[2];console.log(s,r),(0,e.isABelongsToB)(c,r)&&(console.log(s,i[3]),document.getElementById("result").innerHTML=s+i[3])}l.value=t,o.value=n,document.getElementById("begin").onclick=i;
},{"./utils":"FO+Z"}]},{},["Focm"], null)
//# sourceMappingURL=syllogism/syllogism.79ac5591.map