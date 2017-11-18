window.addEventListener("load",()=>{
        document.querySelector("#loader").className="hideit";
        console.log("hide it....");
});
function doAjax(url,fn){
         document.querySelector("#loader").className="showit";
    
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET",url);
    console.log("Request is Going to be send");
    httpReq.send(null);
    console.log("Request is Send....");
    httpReq.onreadystatechange=function(){
        console.log("Response is ",httpReq);
        if(httpReq.readyState==4 && httpReq.status==200){
            var object = JSON.parse(httpReq.responseText);
            console.log("Object is ",object); 
             document.querySelector("#loader").className="hideit";
            fn(object);
            //console.log("Response is Coming ",httpReq.responseText);
        }
    }
}

function callNews(){
    var newsSource = document.querySelector("#newssource").value;
    var url = "https://newsapi.org/v1/articles?source="+newsSource+"&apiKey=11f0dc28d8874be0bb82287cbcf26121";
    doAjax(url,printNews);
}

function callImages(){
    var search = document.querySelector("#search").value;
    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`;
    doAjax(url,printImages);
}

function printNews(object){
console.log("News ",object);
 document.querySelector("#images").innerHTML="";
for(let i = 0; i<object.articles.length; i++){
    var h3 = document.createElement("h3");
    h3.innerHTML=object.articles[i].title;
    var img  = document.createElement("img");
    img.src=object.articles[i].urlToImage;
    img.width=img.height=200;
    document.querySelector("#images").appendChild(img);
    document.querySelector("#images").appendChild(h3);
}
}

function printImages(object){
    document.querySelector("#images").innerHTML="";
 for(let i = 0; i<object.data.length; i++){   
var img = document.createElement("img");
img.width = img.height = 200;    
img.src = object.data[i].images.preview_gif.url;

document.querySelector("#images").appendChild(img);
 }
}