let global = "global"
console.log(global, "from global scope")

// create a code block with its own scope within curly braces
{
    let block = "block"
    console.log(block, "from block scope")
    console.log(global, "global from block")
}

// Error: block is not defined, receive this because we're outside of the code block that it's scoped to
// console.log(block)

// fn1 is a block of code w/ it's own scope
function fn1() {

    console.log(global, "from nested fn1 scope")

    let function1Scope = "fn 1 scope"

    //doing if true so that this will always run, but still create a new scope
    if (true) {
        let x = 7
        var y = 10
    }

    console.log("y: ", y)
    // x doesn't exist outside of if condition
    // console.log("x: ", x)
}

// fn1()

function fn2(num) {
    console.log(num)
}

//using if(true) to create a block of code
if(true) {
    let x = 5
    fn2(x)
}
