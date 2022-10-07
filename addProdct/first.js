
var productContainer;
if(localStorage.getItem("productData")==null)
{
    productContainer = [];
}
else
{
    productContainer =JSON.parse(localStorage.getItem("productData"));
    displayProducts();
}
var insp = document.getElementsByClassName("form-control");
var prodName = document.getElementById("inpName");
var prodCate = document.getElementById("inpCategory");
var prodCode = document.getElementById("inpCode");
var prodPrice = document.getElementById("inpPrice");
var prodDesc = document.getElementById("inpDesc");
var prodImg = document.getElementById("image-url");

function readurl(input){
    if(input.files){
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload=(e)=>{
            img.src = e.target.result
        }
    }

}

var mood = 'create';
var tmp;
var dash = prodCode.search("-");
var prodCompany = prodCode.slice(0,dash);
var prodModel = prodCode.slice(dash+1,prodCode.lenght);

function addProduct(){
    var prodName = document.getElementById("inpName").value;
    var prodCate = document.getElementById("inpCategory").value;
    var prodCode = document.getElementById("inpCode").value;
    var dash = prodCode.search("-");
    var prodCompany = prodCode.slice(0,dash);
    var prodModel = prodCode.slice(dash+1,prodCode.lenght);
    var prodPrice = document.getElementById("inpPrice").value;
    var prodDesc = document.getElementById("inpDesc").value;
    var prodImg = document.getElementById("image-url").value;
    
   
   

    //console.log("Name : " + prodName);

    var products = {
        name :prodName,
        category : prodCate,
        code : prodCode,
        company : prodCompany,
        model : prodModel,
        price : prodPrice,
        Desc : prodDesc,
        Img : prodImg,
        
        
    }


    if(mood === 'create'){
        productContainer.push(products);
    }

    else{
        productContainer[tmp]=products;
        mood = 'create'; 
        document.getElementById('addBtn').innerHTML = 'Add Product';
    }
    //clearForm();

    
    localStorage.setItem("productData", JSON.stringify(productContainer))
    //console.log(productContainer);
    //displayData();
    
    displayProducts();
    clearForm();
}

// function displayData(){
//     var temp ="";
//     for(var i=0; i<productContainer.length;i++)
//     {
//         temp+="<tr><td>"+productContainer[i].name+"</td><td>"+productContainer[i].category+"</td><td>"+productContainer[i].code+"</td><td>"+productContainer[i].company+"</td><td>"+productContainer[i].model+"</td><td>"+productContainer[i].price+"</td><td>"+productContainer[i].Desc+"</td></tr>"
//     }
//     document.getElementById("tableBody").innerHTML=temp;
// }

function clearForm(){
    for(var i = 0; i<insp.length ; i++){
        insp[i].value="";
    }

}

function searchProducts(term){
    var temp = ``;
    for(var i =0; i<productContainer.length; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            temp+=`
            <div class="col-md-3">
                        <div class="product">
                            <img src="${productContainer[i].Img}" alt="" class="img-fluid">
                            <h4>`+productContainer[i].name+`<span class="ml-3 badge badge-primary">`+productContainer[i].category+`</span></h4>
                            <p>`+productContainer[i].Desc+`</p>
                            <h4>Code : `+productContainer[i].code+`</h4>
                            <h5>Company : `+productContainer[i].company+`</h5>
                            <h5>Model :`+productContainer[i].model+`</h5>
                            <div class="price">`+productContainer[i].price+`</div>
                        </div>
                    </div>`;
        }
    }
    document.getElementById("productRow").innerHTML = temp;
    
}

function deleteProduct(index){
    window.alert("Are you sure delete element no " + index);
    var deleted = productContainer.splice(index,1);
    localStorage.setItem("productData", JSON.stringify(productContainer));    
    displayProducts();

}

function updateProduct(i)
{
    //console.log(indx)
    prodName.value = productContainer[i].name;
    prodCate.value = productContainer[i].category;
    prodCode.value = productContainer[i].code;
    prodPrice.value = productContainer[i].price;
    prodDesc.value = productContainer[i].Desc;
    prodImg.value = productContainer[i].Img;
    document.getElementById("addBtn").innerHTML = 'update Product';
    mood = 'update';
    tmp=i;
    scroll({
        top:0,
        behavior:"smooth"
    })

}

function validateForm(userName)
{
    var userNameRegex = /^[A-Z][a-z]{3,50}/;
    if(userNameRegex.test(userName) == false)
    {
        document.getElementById("addBtn").disabled = true;
    }
    else{
        document.getElementById("addBtn").disabled = false;
    }
}



function displayProducts(){
    var pro = "";
    for(var i =0; i<productContainer.length;i++){
        pro+=`<div class="col-md-3">
        <div class="product">
            <img src="${productContainer[i].Img}" alt="" class="img-fluid" >
            <h2>`+productContainer[i].name+`<span class="ml-3 badge badge-primary">`+productContainer[i].category+`</span></h4>
            <p>`+productContainer[i].Desc+`</p>
            <h3>Code : `+productContainer[i].code+`</h4>
            <h5>Company : `+productContainer[i].company+`</h5>
            <h5>Model :`+productContainer[i].model+`</h5>
            <div class="price">`+productContainer[i].price+`</div>

            <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger btn-sm " >delete</button>
            <button onclick="updateProduct(`+i+`)" class="btn btn-outline-warning btn-sm " >update</button>
        </div>
    </div>`;
   
    }
    document.getElementById("productRow").innerHTML=pro;
}






