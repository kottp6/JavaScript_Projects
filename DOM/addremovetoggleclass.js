let hello = document.getElementById("hallo");

// hello.onclick = function()
// {
//     hello.classList.add("name");

// }

// hello.oncontextmenu= function()
// {
//     hello.classList.remove("name");
// }

hello.onclick = function()
{
    hello.classList.toggle("name");
}
//console.log(hello.classList);