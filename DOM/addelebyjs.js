let names = ['ali','kottp','anas','kamal'];
let ages = [21,23,24,25];
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign='center';
function element (names,ages)
{
    //1) element
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // create content

    let head = document.createTextNode(names);
    let ageContent=document.createTextNode(ages);
    img.src = "images/1.jpg"

    title.appendChild(head);
    age.appendChild(ageContent);

    //style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color='#fff';
    card.style.padding='10px';
    card.style.margin='2px'; 
    card.style.display = 'inline-block';
    img.style.width = '100%';





    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}

for(let i=0 ; i<4; i++)
{
    element(names[i],ages[i]);
}