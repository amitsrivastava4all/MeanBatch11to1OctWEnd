window.addEventListener("load",init);  // init will call once window is loaded

function init(){
    document.getElementById("add").addEventListener("click",addNewItem); // init will bind the addNewitem with add button
}
//var model = new Model();
// Fetching HTML Values
function addNewItem(){
    var id = document.getElementById("itemId").value;
    var name = document.getElementById("itemName").value;
    var desc = document.getElementById("itemDesc").value;
    var price = document.getElementById("price").value;
    var color = document.getElementById("color").value;
    var url = document.getElementById("url").value;
    
    Model.addItem(id, name, desc, price, url, color);
    var lastObject = Model.itemArray[Model.itemArray.length-1];
    printItem(lastObject);
}


function printItem(itemObject){
    var tbody = document.getElementById("itemlist");
    var row = tbody.insertRow();
    var index = 0;
    for(let key in itemObject){
        if(key=='image'){
            var image = document.createElement("img");
            image.src = itemObject[key];
            image.width = image.height = 100;
            row.insertCell(index).appendChild(image);
        }
        else
        if(key=='color'){
            var divColor = document.createElement("div");
           // divColor.height = divColor.width="100px";
        //    divColor.style.borderRadius = "50%";
           // divColor.innerHTML="COLOR "+itemObject[key];
            //divColor.innerHTML= "      ";
           // divColor.height = divColor.width=100;
                
            divColor.style.backgroundColor=itemObject[key];
            row.insertCell(index).appendChild(divColor);
        }    
        else{
        row.insertCell(index).innerHTML = itemObject[key];
        }
    index++;
    }
  /*  row.insertCell(0).innerHTML = itemObject.id;
    row.insertCell(1).innerHTML = itemObject.name;
    row.insertCell(2).innerHTML = itemObject.desc;
    row.insertCell(3).innerHTML = itemObject.price;*/
}