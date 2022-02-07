
document.querySelector('form').addEventListener('submit',placeOrder);

function placeOrder(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let address = document.getElementById('address').value;

    if(name!='' && number!='' && address!= ''){

        setTimeout(function(){
            alert('Your order is accepted')},0);
        setTimeout(function(){
            alert('Your order is being cooked')},3000);
        setTimeout(function(){
            alert('Your order is ready')},8000);
        setTimeout(function(){
            alert('Order out for delivery')},10000);
        setTimeout(function(){
            alert('Order delivered')},12000);
    
        localStorage.removeItem('cart');
    }
    else{
        alert('Please fill all the fields');
    }
}