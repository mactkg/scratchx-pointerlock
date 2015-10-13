(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=// definition of blocks
{
  title: "scratchx-pointerlock",
  descriptor: {
    en: {
      blocks: [
        [' ', 'Enable pointer lock', 'lock'],
        [' ', 'Disable pointer lock', 'unlock'],
        ['r', 'movement of mouse x', 'getMovementX'],
        ['r', 'movement of mouse y', 'getMovementY'],
        ['h', 'When pointer moved', 'whenMoved']
      ]
    },
    ja: {
      blocks: [
        [' ', 'マウスロックを有効にする', 'lock'],
        [' ', 'マウスロックを無効にする', 'unlock'],
        ['r', 'x座標の移動量', 'getMovementX'],
        ['r', 'y座標の移動量', 'getMovementY'],
        ['h', 'マウスが動いたとき', 'whenMoved']
      ]
    }
  }
}

},{}],2:[function(require,module,exports){
module.exports={isMoved:!1,movementX:0,movementY:0,_shutdown:function(){},_getStatus:function(){return{status:2,msg:"Ready"}},lock:function(){document.body.reqPointerLock=document.body.requestPointerLock||document.body.mozRequestPointerLock||document.body.webkitRequestPointerLock,document.body.reqPointerLock();var e=this;document.addEventListener("mousemove",function(o){e.movementX=o.movementX||o.mozMovementX||o.webkitMovementX,e.movementY=o.movementY||o.mozMovementY||o.webkitMovementY,e.isMoved=!0})},unlock:function(){document.reqPointerUnlock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock,document.reqPointerUnlock()},getMovementX:function(){var e=this.movementX;return e},getMovementY:function(){var e=this.movementY;return e},whenMoved:function(){var e=this.isMoved;return this.isMoved=!1,e}};

},{}],3:[function(require,module,exports){
var ext=require("./ext.js"),data=require("./data.json");!function(t){for(var e=window.location.search.replace(/^\?|\/$/g,""),r=e.split("&"),a="en",n=0;n<r.length;n++){var i=r[n].split("=");i.length>1&&"lang"==i[0]&&(a=i[1])}for(var o in ext)ext.hasOwnProperty(o)&&(t[o]=ext[o]);ScratchExtensions.register(data.title,data.descriptor[a],t)}({});
},{"./data.json":1,"./ext.js":2}]},{},[3]);
