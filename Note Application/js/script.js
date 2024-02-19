const addBox = document.querySelector(".add-box");
var popupBox = document.querySelector(".popup-box");
var closeIcon = popupBox.querySelector("header i");
var titleTag = popupBox.querySelector("input");
var descTag = popupBox.querySelector("textarea");
var addBtn = popupBox.querySelector("button");
popupTitle = popupBox.querySelector("header p");

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");   

let isUpdate = false;
let updateId;

// to Show Popup
addBox.addEventListener("click", ()=>{
    popupTitle.innerText = "Add a new Note";
    addBtn.innerText = "Add Note";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
})

// to Close Popup
closeIcon.addEventListener("click", ()=>{
    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
})

function showNotes()
{
    if(!notes) return;
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, id) => {
        let filterDesc = note.description.replaceAll("\n", '<br/>');
        let liTag = `
        <li class="note">
            <div class="details">
                <p>${note.title}</p>
                <span>${filterDesc}</span>
            </div>
            <div class="bottom-content">
                <span>${note.date}</span>
                <div class="setting">
                    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                    <ul class="menu">
                        <li onclick="updateNote(${id},'${note.title}','${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
                        <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                    </ul>
                </div>
            </div>
        </li>
        `
        addBox.insertAdjacentHTML("afterend", liTag)
    });
}

showNotes();

function showMenu(elem)
{   
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e=>{
        if(e.target.tagName != "I" || e.target != elem)
        {
            elem.parentElement.classList.remove("show");
        }   
    })
}
// to delete note
function deleteNote(noteId)
{   
    let confirmDel = confirm("Are you sure you want to delete this note?");
    if(!confirmDel) return;
    notes.splice(noteId, 1);
    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes();
}   

// to update note
function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\r\n');
    updateId = noteId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = description;
    popupTitle.innerText = "Update a Note";
    addBtn.innerText = "Update Note";
}

// to Add Note
addBtn.addEventListener("click" , e=>{
    e.preventDefault();
    let noteTitle = titleTag.value.trim();
    let noteDesc = descTag.value.trim();

    if(noteTitle || noteDesc)
    {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let day = dateObj.getDate();
        let year = dateObj.getFullYear();
        let noteInfo = {
            title : noteTitle,
            description : noteDesc,
            date : `${month} ${day} ${year}`
        }
        if(!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("notes",JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
})

let btn = document.getElementById('btn');
window.onscroll = function()
{
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}

btn.onclick = function()
{
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}