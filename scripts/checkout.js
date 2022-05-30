let i = 0;
let id;
var time=Math.floor(Math.random()*4*1000)
var arr=["Your order is Accepted",
"Your order is being Prepared",
"Your order is being Packed",
"Your order is out for delivery",
"Order delivered"
]
function submitt(e){
    e.preventDefault();
    id=setInterval(function (){
        if(i==arr.length)
        {
            clearInterval(id)
        }
        else{
            alert(arr[i])
            i++;
        }
    },time)
}