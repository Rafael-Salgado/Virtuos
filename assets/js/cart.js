window.onload=loadCart();

function loadCart(){  
  verifycart();
  var items = JSON.parse(localStorage.getItem("cart"));
  var keysProduct = Object.keys(items);
  console.log(keysProduct);
  var subtotal=0;
  for(let i = 0; i < keysProduct.length;i++){
    const itemHTML ='<tr class="table-body-row">'+
    '<td class="product-remove"><a href="#"><i class="far fa-window-close"></i></a></td>'+
    '<td class="product-image"><img src="'+items[i].img +'" alt="a"></td>'+
    '<td class="product-name">'+items[i].name +'</td>'+
    '<td class="product-price">$'+items[i].price +'</td>'+
    '<td class="product-quantity"><input type="number" placeholder="0"></td>'+
    '<td class="product-total">1</td>'+
  '</tr>';
  const itemsContainer = document.getElementById("products");
  itemsContainer.innerHTML += itemHTML;
  subtotal+=items[i].price;
  }
  document.getElementById("subtotal").innerHTML="$"+subtotal;
  subtotal+=3000;
  document.getElementById("total").innerHTML="$"+subtotal;
}

function verifycart(){

  if(!localStorage.getItem("cart"))

{localStorage.setItem("cart", JSON.stringify({}))}
}

function clearcart (){
localStorage.setItem("cart", JSON.stringify({}))
alert("Se procesó tu compra! Gracias")
} 

