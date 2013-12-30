Event.js
========

Custom event implementation use plain javascript

Usage
========

    Event.on("eventName", fn);
    
    Event.emit("eventName", [args]);
    
    Event.unsubscribe("eventName");
    
    
Example
========

    function handler(msg) {
        console.log(msg);
    }
    
    Event.on("data:stored", handler);
    
    Event.emit("data:stored", "Data were already stored!");
    
    //output: "Data were already stored!"
