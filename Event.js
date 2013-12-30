var Event = (function() {
  var Event = {},eventListners={};
  Event = {
    emit: function(eventName) {
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