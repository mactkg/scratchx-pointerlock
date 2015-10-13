// write down codes here...
module.exports = {
  isMoved: false,
  movementX: 0,
  movementY: 0,

  _shutdown: function() {
  },

  _getStatus: function() {
    return {status: 2, msg: 'Ready'};
  },

  lock: function() {
    document.body.reqPointerLock =  document.body.requestPointerLock    ||
                                    document.body.mozRequestPointerLock ||
                                    document.body.webkitRequestPointerLock;
    document.body.reqPointerLock();

    var that = this;
    document.addEventListener('mousemove', function(e) {
      that.movementX = e.movementX || e.mozMovementX || e.webkitMovementX;
      that.movementY = e.movementY || e.mozMovementY || e.webkitMovementY;
      that.isMoved = true;
    });
  },

  unlock: function() {
    document.reqPointerUnlock = document.exitPointerLock    ||
                                document.mozExitPointerLock ||
                                document.webkitExitPointerLock;
    document.reqPointerUnlock();
  },

  getMovementX: function() {
    var val = this.movementX;
    return val;
  },

  getMovementY: function() {
    var val = this.movementY;
    return val;
  },

  whenMoved: function() {
    var val = this.isMoved;
    this.isMoved = false;
    return val;
  }
};
