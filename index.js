
let nav_bottom = document.getElementById("bottom-nav-bar");
let cart_message = Array.from(document.querySelectorAll(".cart-message"));
let cartitem = document.getElementById("cartitem");
let cartBtn = Array.from(document.getElementsByClassName("total-cart-btn"));

// Products
// Factory function

// function productsList(id,image,title,price){
//   return{
//     id:id,
//     image:image,
//     title:title,
//     price:price
//   }
// }
// const products =[
//    productsList(0,"./images/1.png"," DELL Laptop",50),
//    productsList( 1,"./images/2.png"," HP Laptop",100),
//     productsList( 1,"./images/3.png"," TOSHIBA Laptop",50),
//     productsList( 2,"./images/4.png"," LENEVO Laptop",50),
// ]
// constructor function
function Productlist(catgory, image, title,description, price, hoverImage) {
  this.catgory = catgory;
  this.image = image;
  this.title = title;
  this.description = description;
  this.price = price;
  this.hoverImage = hoverImage;
}
const products = [
new Productlist("shirt","./product_images/shirts/product-1.jpg","Polo", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",3,"./product_images/shirts/product-1-hover.jpg"),
new Productlist("shirt","./product_images/shirts/product-2.jpg","Nike", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",4,"./product_images/shirts/product-2-hover.jpg"),
new Productlist("shirt","./product_images/shirts/product-1.jpg","Polo","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",4.5,"./product_images/shirts/product-2.jpg"),
new Productlist("shirt","./product_images/shirts/product-4a.jpg","Nike","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",3.5,"./product_images/shirts/product-4a-hover.jpg"),
new Productlist("shoe","./product_images/shoe/shoe4.jpg"," Nike shoe",  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",50,"./product_images/shoe/shoe4-hover.jpg"),
new Productlist("shoe","./product_images/shoe/shoe5.jpg"," Nike shoe",  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",30,"./product_images/shoe/shoe5-hover.jpg"),
new Productlist("shoe","./product_images/shoe/shoe6.jpg"," Nike shoe",  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",50,"./product_images/shoe/shoe6-hover.jpg"),
new Productlist("shoe","./product_images/shoe/shoe7.jpg"," Nike shoe",  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",20,"./product_images/shoe/shoe7-hover.jpg"),
new Productlist("bags","./product_images/bags/product-bag1-300x300.jpg","Bag" ,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",50,"./product_images/bags/product-bag1-hover.jpg"),
new Productlist("bags","./product_images/bags/product-bag2-300x300.jpg","Bag" ,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",30,"./product_images/bags/product-bag2-hover.jpg"),
new Productlist("bags","./product_images/bags/product-bag3-300x300.jpg","Bag" ,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",30,"./product_images/bags/product-bag3-hover.jpg"),
new Productlist("bags","./product_images/bags/product-bag4-300x300.jpg","Bag" ,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, alias!",10,"./product_images/bags/product-bag4-hover.jpg"),
];

// const products = [
//   new Productlist("shirt", "./product_images/shirts/product-1.jpg", " DELL Laptop", 50),
//   new Productlist("shirt", "./product_images/shirts/product-2.jpg", " HP Laptop", 100),
//   new Productlist("shirt", "./product_images/shirts/product-3a.jpg", " TOSHIBA Laptop", 50),
//   new Productlist("shirt", "./product_images/shirts/product-4a.jpg", " LENEVO Laptop", 50),
//   new Productlist("shoe", "./product_images/shoe/shoe5-300x300.jpg", " Nike shoe", 50),
//   new Productlist("shoe", "./product_images/shoe/shoe4-300x300.jpg", " Nike shoe", 50),
//   new Productlist("shoe", "./product_images/shoe/shoe6-300x300.jpg", " Nike shoe", 50),
//   new Productlist("shoe", "./product_images/shoe/shoe7-300x300.jpg", " Nike shoe", 50),
//   new Productlist("bags", "./product_images/bags/product-bag1-300x300.jpg", " Nike shoe", 50),
//   new Productlist("bags", "./product_images/bags/product-bag2-300x300.jpg", " Nike shoe", 50),
//   new Productlist("bags", "./product_images/bags/product-bag3-300x300.jpg", " Nike shoe", 50),
//   new Productlist("bags", "./product_images/bags/product-bag4-300x300.jpg", " Nike shoe", 50)
// ];

// const products= [
//   {
//     Id: 0,
//     image: "./images/1.png",
//     title: " DELL Laptop",
//     price: 50,
//   },
//   {
//     Id: 1,
//     image: "./images/2.png",
//     title: "HP Laptop",
//     price: 45,
//   },
//   {
//     Id: 2,
//     image: "./images/3.png",
//     title: "TOSHIBA Laptop",
//     price: 65,
//   },
//   {
//     Id: 3,
//     image: "./images/4.png",
//     title: "LENEVO Laptop",
//     price: 40,
//   },
// ];

function menutoggle() {
  if (nav_bottom.style.height == "0px") {
    nav_bottom.style.height = "320px";
  } else {
    nav_bottom.style.height = "0px";
  }
}
function getProductHtml(box, category = null) {
  let filteredProducts = category
    ? products.filter((item) => item.catgory === category)
    : products;
  const productHtml = filteredProducts.map((item, index) => {
    const { catgory,description, image, title, price, hoverImage } = item;

    return `<div class="${box}" onmouseover="this.querySelector('.images').src='${hoverImage}'"
    onmouseout="this.querySelector('.images').src='${image}'">

            <div class="img-box">
                <img class="images" src="${image}" alt="">
            </div>
            <h3>${title}</h3>
          <hr class="box-hr">
            
                <p>${description}</p>
                <div class="bottom">
                <div>*****(12)</div>
                <h2>$${price}</h2>
                </div>
                <button class="item-btn" onclick="addtocart(${index})"> <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                </button>
               
        </div>`;
  });
  return productHtml.join("");
}

document.getElementById("all-products").innerHTML = getProductHtml("box");
document.getElementById("shoes").innerHTML = getProductHtml("box", "shoe");
document.getElementById("bags").innerHTML = getProductHtml("box", "bags");
document.getElementById("shirt").innerHTML = getProductHtml("box", "shirt");

var cart = [];
function addtocart(index) {
  cart.push({ ...products[index] });
  displaycart();
  updateTotalCartBtn();
  const message = ` Successfully: ${products[index].title} has been added to your cart...`;
  cart_message.forEach((btn) => {
    btn.innerHTML = message;
    btn.style.display="flex";

  });
  setTimeout(() => {
    cart_message.forEach((btn) => {
      btn.innerHTML = "";
      btn.style.display="none";
    });
  }, 2000);
  
}
displayProducts()
// headre button

function updateTotalCartBtn() {
  const cartItemCount = cart.length;
  cartBtn.forEach((btn) => {
    btn.innerText = `${cartItemCount}`;
  });
}

function displaycart() {
  total = 0;
  if (cart.length === 0) {
    cartitem.innerHTML = "Your cart is empty";
    document.getElementById("totalcount").innerHTML = "$ 0.00";
  } else {
    cartitem.innerHTML = cart
      .map((item) => {
        const { image, title, price } = item;
        total = total + price;
        document.getElementById("totalcount").innerHTML = "$" + total + ".00";
        return `
          
            <div class="cart-items">
              <strong>${title}</strong>
              <h3>${price}</h3>
              <button class="item-btn" onclick="removefromcart(${cart.indexOf(
                item
              )})"><i class="fa fa-trash"></i></button>
            </div>
        `;
      })
      .join("");
  }
}

function removefromcart(index) {
  cart.splice(index, 1);
  displaycart();
  updateTotalCartBtn();
}
