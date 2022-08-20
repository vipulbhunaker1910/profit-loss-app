var intial_price=document.querySelector("#input-intial");
var qunatity=document.querySelector("#input-quantity");
var current_price=document.querySelector("#input-current");
var outpt=document.querySelector("#output");
var btn=document.querySelector("#btn-check");

function checklogic(){
    if(intial_price.value=="" || qunatity.value=="" || current_price.value==""){
        alert("Kindly enter the required fields");
    }
    else{
    if(intial_price.value<current_price.value)
    {
        var profit = (current_price.value - intial_price.value)*qunatity.value;
        var profit_percentage = (profit/current_price.value)*100
        var  message="Yayyyyy!! you have a Profit of "+profit+" with Profit percentage of "+profit_percentage.toFixed(2);
        
        showmessage(message,"green");
    }
    else if(intial_price.value>current_price.value)
    {
        var loss = (intial_price.value - current_price.value)*qunatity.value;
        var loss_percentage = (loss/current_price.value)*100;
        var message="Oh No!! you have a loss of "+loss+" with loss percentage of "+loss_percentage.toFixed(2);
       showmessage(message,"red");
    }
    else{
       var message="No Profit and No Loss"
       showmessage(message,"blue");
    }
}
}
function showmessage(msg,bg){
    outpt.innerText=msg;
    outpt.style.backgroundColor=bg;

}
btn.addEventListener("click",checklogic);