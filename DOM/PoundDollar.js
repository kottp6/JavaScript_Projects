let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");
let mybtn = document.getElementById("btn");

dollar.onkeyup= function()
{
    pound.value = dollar.value * 19.62 ;
}
pound.onkeyup= function()
{
    dollar.value = pound.value / 19.62;
}

// window.onload = function()
// {
//     //dollar.placeholder = "kottp";
//     //dollar.value = 1223;
//     dollar.focus();
// }

dollar.oncontextmenu = function()
{
    dollar.blur();
}

