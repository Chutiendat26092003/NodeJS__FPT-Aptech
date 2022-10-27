/*
jQuery style
$("#someEl").click(function() {...});
*/


var wakeUp = function(callback) {
    console.log("I'm waking up!");
    if(callback)
        if(typeof callback === 'function')
            callback();

};

var checkPhone = function(callback) {
    console.log("Check phone...");
    if(callback)
        if(typeof callback === 'function')
            callback();
};

var eatBreakfast = function(callback) {
    console.log("I'm eating breakfas...!");
    if(callback)
        if(typeof callback === 'function')
            callback();
};

// wakeUp();
// checkPhone();
// eatBreakfast();

wakeUp(function() {
    checkPhone(function() {
        eatBreakfast();
    });
})