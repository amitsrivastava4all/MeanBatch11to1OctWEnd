window.addEventListener("load",init);  // init will call once window is loaded
var autoNumberObject ;
function init(){
    document.getElementById("add").addEventListener("click",addNewItem); // init will bind the addNewitem with add button
    document.getElementById("delete").addEventListener("click",deleteRecords);
    document.getElementById("save").addEventListener("click",saveRecords);
    document.getElementById("load").addEventListener("click",loadRecords);
    autoNumberObject = autoNumberGenerator();
    //loadAutoNumber();
    document.getElementById("itemId").innerHTML = loadAutoNumber();
    printCounts();
}

function loadRecords(){
     if(!localStorage){
        alert("Ur Browser Doesn't Support LocalStorage...");
        return ;
    }
     if(!localStorage.items){
        alert("LocalStorage is Empty Can't Load any Record...");
        return ;
    }
    Model.itemArray = JSON.parse(localStorage.items);
    printRecords(Model.itemArray);
}

function saveRecords(){
    if(!localStorage){
        alert("Ur Browser Doesn't Support LocalStorage...");
        return ;
    }
    localStorage.items = JSON.stringify(Model.itemArray);
    alert("Data is Stored...");
}

function deleteRecords(){
    var itemArray = Model.deleteRecords();
    printRecords(itemArray);

}

function printRecords(itemArray){
        document.getElementById("itemlist").innerHTML="";
        itemArray.forEach(printItem);
}

function markDelete(event){
    console.log("Event Target is ",event.target);
    //console.log("Event Src ",event.srcElement);
    var currentImg = event.srcElement;
    var itemId = currentImg.getAttribute("item-id");
    console.log("Mark Delete Call ",itemId);
    var currentTR = currentImg.parentNode.parentNode;
    currentTR.classList.toggle("red");
    Model.markRecord(itemId);
    printCounts();
}

function printCounts(){
    document.getElementById("total").innerHTML = Model.itemArray.length;
    document.getElementById("mark").innerHTML = Model.countMark();
    document.getElementById("unmark").innerHTML = Model.countUnMark();
}

function edit(){
    console.log("Edit Call");
}

function createIcon(path,itemId,fn){
    var img = document.createElement("img");
    img.src = path;
    img.setAttribute("item-id",itemId);
    img.addEventListener("click",fn);
    return img;
}

function loadAutoNumber(){
     var id = autoNumberObject.next().value;
     return id;
}

//var model = new Model();
// Fetching HTML Values
function addNewItem(){
  // var id = ;
    var id = document.getElementById("itemId").innerHTML;
    var name = document.getElementById("itemName").value;
    var desc = document.getElementById("itemDesc").value;
    var price = document.getElementById("price").value;
    var color = document.getElementById("color").value;
    var url = document.getElementById("url").value;
    
    Model.addItem(id, name, desc, price, url, color);
    var lastObject = Model.itemArray[Model.itemArray.length-1];
    printItem(lastObject);
    document.getElementById("itemId").innerHTML = loadAutoNumber(); 
}


function printItem(itemObject){
    printCounts();
    var tbody = document.getElementById("itemlist");
    var row = tbody.insertRow();
    var index = 0;
    for(let key in itemObject){
        if(key=='markForDelete'){
            continue;
        }
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
var td = row.insertCell(index);
var deleteImage = createIcon("images/delete.png",itemObject.id,markDelete);
td.appendChild(deleteImage);
td.appendChild(createIcon("images/edit.png",itemObject.id,edit));

  /*  row.insertCell(0).innerHTML = itemObject.id;
    row.insertCell(1).innerHTML = itemObject.name;
    row.insertCell(2).innerHTML = itemObject.desc;
    row.insertCell(3).innerHTML = itemObject.price;*/
}