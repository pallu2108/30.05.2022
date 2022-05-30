// On clicking remove button the item should be removed from DOM as well as localstorage.
// let data=JSON.parse(localStorage.getItem("menu"))
// var bucket=document.getElementById("bucket")
// var sum= data.length;
// var prices=0;

// data.map(function(el,index){
//     prices=prices+el.price
//     console.log(prices)
//     var countdiv=document.getElementById("total_amount")
//     countdiv.innerText=prices
//     var div1=document.createElement("div")

//     let img=document.createElement("img");
//     img.src=el.image;
//     let price=document.createElement("p")
//     price.innerText=el.price;
//     let name=document.createElement("p")
//     name.innerText=el.title

//     let add=document.createElement("button")
//     add.innerText="remove"
//     add.setAttribute("id","remove_coffee")
//     add.addEventListener("click",function(){
//         remove(el,index)
//         console.log(el)
//     })
//     div1.append(img,name,price,add)
//     bucket.append(div1)
// })
// function remove(el,index)
// {
//     window.location.reload();
//     data.splice(index,1)
//     localStorage.setItem("coffee",JSON.stringify(data))
// }

let coffee = JSON.parse(localStorage.getItem("coffee"));
function gettotal(){
    let total = document.getElementById("total_amount");
    let x = 0;
    let price = coffee.reduce(function(sum,ele,i){
        return sum+ele.price;
    },0)
    total.innerHTML = price;
}
gettotal();

coffee.forEach((ele,i) => {
    restore()
    function restore(){
        let bucket = document.getElementById("bucket");
        let boxes = document.createElement("div");
        boxes.setAttribute("class","boxes");

        let title = document.createElement("p");
        title.innerText="Type :"+" "+ele.title;
        title.setAttribute("class","title");

        let image = document.createElement("img");
        image.src = ele.image;
        image.setAttribute("class","image");

        let price = document.createElement("p");
        price.innerText="Price : "+" "+ele.price;
        price.setAttribute("class","price");

        let btn = document.createElement("button");
        btn.innerText = "Remove"
        btn.setAttribute("class","btn");

        btn.addEventListener("click",function(){
            this.remove(ele,i);
        });
        function remove(ele,i){
            window.location.reload();
            items.splice(i,1);
            localStorage.setItem("coffee",JSON.stringify(coffee));
            
        }
        boxes.append(image,title,price,btn);
        document.querySelector("#bucket").append(boxes);

    }
})