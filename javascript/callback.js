// function f1(data)
// {
//     console.log(`hello:f1: ${data}`);
//     f2();
// }
// function f2()
// {
//     console.log("hi");
// }
// setTimeout(f1,3000,"I am")

function success() {
    console.log("success")
}
function failer() {
    console.log("success")
}
function notworking() {
    console.log("error");
}
function exec(data, func) {
    if (data) {
        console.log(`balance amt: ${data}`)
    }
    setTimeout(func,3000);
}
function trigger() {
    const data =10;
    if (data > 0)
        exec(data, success)
    else if (data < 0)
        exec(data, failer)
    else {
          exec("error",notworking)
    }
}
trigger();