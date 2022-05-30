// Add the coffee to local storage with key "coffee"
const url="https://masai-mock-api.herokuapp.com/coffee/menu"
 const container=document.getElementById("menu");
fetch(url)
.then(function (res){
    return res.json();
})
.then(function (res){
    appenddata(res.menu.data)
})
.catch(function (err){
    console.log(err);
})
function appenddata(data)
{
   console.log(data)
   container.innerHTML="";
   data.map(function(el){
       var div = document.createElement("div")
       let img = document.createElement("img");
       img.src=el.image;
       let name = document.createElement("p")
       name.innerText=el.title;
       let price = document.createElement("p")
       price.innerText=el.price

       let add=document.createElement("button")
       add.innerText="Add to Bucket"
       add.setAttribute("id","add_to_bucket")
       add.addEventListener("click",function(){
           addtobucket(el)
           console.log(el)
       })
       div.append(img,name,price,add)
       container.append(div)
   })
}

var arr=JSON.parse(localStorage.getItem("coffee"))||[];
var count=document.getElementById("coffee_count")
count.innerText=arr.length
function addtobucket(el)
{
    window.location.reload()
    arr.push(el)

    localStorage.setItem("coffee",JSON.stringify(arr))
}

