//Callbacks are functions that we write to be run at a later point (when some event happens)

//anonymous callback function w/ 3000ms wait time
setTimeout( () => { 
    console.log("start") 
}, 3000 );

const shoutHello = () => {
    console.log("HELLO!!!!!")
}

//named callback function(shoutHello) + 1000ms wait time
//no parenthesis after the function name, otherwise it will immediately run
setTimeout(shoutHello, 1000);

//same thing as line 14, except with an anonymous function
setTimeout(() => {
    console.log("HELLO!!!!!")
}, 1000)


console.log("end");
