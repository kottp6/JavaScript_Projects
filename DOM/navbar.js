let btnopen = document.getElementById("open");
let btnclose = document.getElementById("close");
let cont = document.querySelector(".container");

btnclose.onclick= function()
{
    cont.classList.add("hide");
    this.classList.add("hide");
    btnopen.classList.remove("hide");
}

btnopen.onclick = function()
{
    this.classList.add('hide');
    btnclose.classList.remove('hide');
    cont.classList.remove('hide')
}

