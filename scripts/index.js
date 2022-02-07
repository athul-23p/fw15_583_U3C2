
document.getElementById('cart').addEventListener('click',function(){
    window.location.href='cart.html';
});

fetchFoodData();
async function fetchFoodData(){
    try{
        let res = await fetch(
          " https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
        );
    
        let data = await res.json();
        // console.log(data);
    
        let menu = data.meals.map(function(el){
            el.price = Math.round(Math.random()*500);
            return el;
        })
        
        

        // console.log(menu);
        renderMenu(menu);
    }
    catch(err){
        console.log('err:',err);
    }


}

function renderMenu(menuData){
    let menu = document.getElementById('menu');
    /**
     * name : strMeal
     * image :strMealThumb
     * price
     * addTocart btn
     */
    menuData.forEach(function(el){

        let card = document.createElement('div');
        card.classList.add('card');
        let img_div = document.createElement('div');
        let details_div = document.createElement('div');

        let img = document.createElement('img');
        img.setAttribute('src', el.strMealThumb);
        img_div.append(img);


        let name = document.createElement('h4');
        name.textContent = el.strMeal;
        let price = document.createElement('p');
        price.textContent= `$ ${el.price}`;

        details_div.append(name,price);

        let addTocart_btn = document.createElement("button");
        addTocart_btn.innerHTML = "Add to Cart";
        addTocart_btn.setAttribute("id", "addtocart");
        addTocart_btn.addEventListener('click',function(){addToCart(el)});
        card.append(img_div,details_div,addTocart_btn);
        menu.append(card);
    })
}

function addToCart(item){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(item);
    localStorage.setItem('cart',JSON.stringify(cart));
    updateCartCount(cart.length);

    // console.log(item);
}

function updateCartCount(count){
    let count_el = document.getElementById('count');
    count_el.textContent = count;
}