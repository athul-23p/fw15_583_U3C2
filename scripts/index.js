
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
            el.price = Math.round(Math.random()*200);
            return el;
        })
    
        console.log(menu);
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
        card.append(img_div,details_div);
        menu.append(card);
    })
}