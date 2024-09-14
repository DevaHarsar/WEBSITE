/*function f1(data) {
    console.log(`hello:f1: ${data}`);
    f2();
}
function f2() {
    console.log("hi");
}
setTimeout(f1, 3000, "I am")

//simple banking account
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
    setTimeout(func, 3000);
}
function trigger() {
    const data = 10;
    if (data > 0)
        exec(data, success)
    else if (data < 0)
        exec(data, failer)
    else {
        exec("error", notworking)
    }
}
trigger();
*/

//API FUNCTIOn
async function api() {
    try {
        const respond = await fetch("https://66e526e65cc7f9b6273c6bc8.mockapi.io/register")
        const data =await  respond.json()
        // console.table(data)
        return data
    } catch (error) {
        console.log(error)
    }
   
}
async function APIdata()
{
    const val=await api()
    // console.log(val);
    const struct=val.map((data)=> {console.log(data)})
    console.log(struct[0])
}
APIdata()