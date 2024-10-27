/*function hello()
{
    console.log("inside hello function");
    console.log("hello");
}
function demo()
{
    console.log("Calling hello function");
    hello();
}
console.log("Calling demo function");
demo();
console.log("done,bye");*/
function One()
{
    return 1;
}
function two()
{
    return One()+One();
}
function three()
{
    let ans=two()+One();
    console.log(ans);
}
three();