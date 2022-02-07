updateTotal();
renderCart();
function updateTotal(){
    let total = document.getElementById('total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log(cart);
    let total_price = cart.reduce(function(ac,el){
        return ac += el.price;
    },0)

    console.log(total_price);
    total.textContent = `${total_price}`;
}

function renderCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cart_el = document.getElementById('cart');
    cart_el.textContent ='';
    if(cart.length>0){
        cart.forEach(function(el,index){
            let card = document.createElement('div');
            card.classList.add('cart_card');

            let img_div = document.createElement('div');
            let img = document.createElement('img');
            img.setAttribute('src',el.strMealThumb);

            let details_div = document.createElement('div');
            let name = document.createElement('h4');
            name.textContent = el.strMeal;
            let price = document.createElement('p');
            price.textContent = `$ ${el.price}`;

            img_div.append(img);
            details_div.append(name,price);

            let remove_btn = document.createElement('button');
            remove_btn.textContent = 'Remove';
            remove_btn.setAttribute('id','remove');
            remove_btn.addEventListener('click',function(){
                removeItem(index);
            });
            card.append(img_div,details_div,remove_btn);
            cart_el.append(card);

        });
    }
    else{
        let h2 = document.createElement('h2');
        h2.textContent = 'Cart is Empty';
        cart_el.append(h2);
    }
}

function removeItem(index){
    // console.log(index);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart.length>0){
        cart.splice(index,1);
    }

    localStorage.setItem('cart',JSON.stringify(cart));
    updateTotal();
    renderCart();
}