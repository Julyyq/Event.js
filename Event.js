var Event = (function() {
  var Event = {},eventListners={};
  Event = {
    emit: function(eventName) {
			// arguments.callee指当前的调用函数
			// arguments.callee.length指形参数量
			// js中function.length指形参数量，arguments.length指实参数量
			// 这里不应该传形参，当时应该写错了todo
      var theArgs = Array.prototype.slice.call(arguments,arguments.callee.length);
      eventListners[eventName].apply(this,theArgs);
    },
    on: function(eventName, fn) {
      if(typeof eventName !== "string") {
        throw TypeError("The custom event name must be a string!");
      }
      eventListners[eventName] = fn;
    },
    unsubscribe: function(eventName) {
      delete eventListners[eventName];
    }
  }
  return Event;
})();