"use strict";

const data = {
  fruits: [
    {
      id: 100,
      name: "Apple",
      imgPath:
        "https://cathe.com/wp-content/uploads/2015/07/shutterstock_124592107.jpg",
      price: 500,
      desc: "4 pcs",
      count: 0,
    },
    {
      id: 101,
      name: "Avocado",
      imgPath:
        "https://www.plantgrower.org/uploads/6/5/5/4/65545169/avocado_orig.jpg",
      price: 500,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 102,
      name: "Banana",
      imgPath:
        "https://idealmarket.com/wp-content/uploads/2020/03/GreenBanana500.jpg",
      price: 500,
      desc: "1 bunch",
      count: 0,
    },
    {
      id: 103,
      name: "Pear",
      imgPath: "https://m.media-amazon.com/images/I/61OHAsXEmgL._SS500_.jpg",
      price: 500,
      desc: "4 pcs",
      count: 0,
    },
    {
      id: 104,
      name: "Orange",
      imgPath:
        "https://thefruitshopper.com/wp-content/uploads/2019/11/Oranges.jpg",
      price: 200,
      desc: "5 pcs",
      count: 0,
    },
    {
      id: 105,
      name: "Pawpaw",
      imgPath: "https://www.concise.ng/wp-content/uploads/2019/02/pawpaw4.jpg",
      price: 500,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 106,
      name: "Water melon",
      imgPath:
        "https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg",
      price: 700,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 107,
      name: "Nigeria Pineaple",
      imgPath:
        "https://connectnigeria.com/articles/wp-content/uploads/2019/10/pineapple.jpg",
      price: 700,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 108,
      name: "Cotonou Pineapple",
      imgPath:
        "https://cdn.shopify.com/s/files/1/0107/2408/1722/products/pineapple_7da52848-c075-47cd-b080-e28e0381a7a1_1024x1024.jpg?v=1588922631",
      price: 400,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 109,
      name: "Coconut",
      imgPath:
        "https://www.plantgrower.org/uploads/6/5/5/4/65545169/published/coconut-white-balsamic-condimento.jpg?1515168579",
      price: 300,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 110,
      name: "Bread Fruit",
      imgPath:
        "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-usa.com/news/markets/researcher-there-is-enormous-potential-for-breadfruit-in-the-protein-sector/11790997-1-eng-GB/Researcher-There-is-enormous-potential-for-breadfruit-in-the-protein-sector_wrbm_large.jpg",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 111,
      name: "Lime",
      imgPath: "https://universityhealthnews.com/media/benefits-of-lime.jpg",
      price: 200,
      desc: "5 pcs",
      count: 0,
    },
    {
      id: 112,
      name: "Local Lemon",
      imgPath:
        "https://cdn.shopify.com/s/files/1/0107/2408/1722/products/lemon_08fb84ce-3ca3-4296-822b-5eed35ba0b0f_grande.jpg?v=1588922598",
      price: 500,
      desc: "4 pcs",
      count: 0,
    },
    {
      id: 113,
      name: "Foreign Lemon",
      imgPath:
        "https://cdn.shopify.com/s/files/1/1251/5761/files/Lemon_Bunches_331bf113-04d1-4866-bdc0-96c8d0f6d584_large.jpg?v=1504651460",
      price: 1000,
      desc: "4 pcs",
      count: 0,
    },
    {
      id: 114,
      name: "Seed & Seedless grapes",
      imgPath:
        "https://qph.fs.quoracdn.net/main-qimg-4d69f906cbc6aa6822285637d1f8b022.webp",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 115,
      name: "Grape fruit",
      imgPath: "https://www.organicfacts.net/wp-content/uploads/grapefruit.jpg",
      price: 500,
      desc: "5 pcs",
      count: 0,
    },
    {
      id: 116,
      name: "Red grape fruit",
      imgPath: "https://m.media-amazon.com/images/I/910hnj4umDL._AC_SS350_.jpg",
      price: 800,
      desc: "5 pcs",
      count: 0,
    },
    {
      id: 117,
      name: "Kiwi fruit",
      imgPath:
        "https://image.freepik.com/free-photo/kiwi-fruit-isolated-white_88281-796.jpg",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 118,
      name: "Blueberries",
      imgPath:
        "https://www.captel.com/wp-content/uploads/2018/07/health-benefits-of-blueberries.jpg",
      price: 2000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 119,
      name: "Raspberries",
      imgPath:
        "https://www.extension.iastate.edu/news/files/eo-news/images/raspberrybush_0.jpg",
      price: 2000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 120,
      name: "Plums",
      imgPath:
        "https://frost-line.com/wp-content/uploads/2018/07/frostline_sljiva.jpg",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 121,
      name: "Peaches",
      imgPath:
        "https://specials-images.forbesimg.com/imageserve/5f42b5182138dffac9bf05b7/960x0.jpg?cropX1=549&cropX2=8140&cropY1=0&cropY2=5693",
      price: 500,
      desc: "4 pcs",
      count: 0,
    },
    {
      id: 122,
      name: "Strawberries",
      imgPath:
        "https://food.fnr.sndimg.com/content/dam/images/food/editorial/blog/legacy/healthyeats/2009/6/strawberries_lead.jpg.rend.hgtvcom.616.462.suffix/1505155442257.jpeg",
      price: 2000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 123,
      name: "Blackberries",
      imgPath:
        "https://ag.tennessee.edu/news/Plant%20of%20the%20Month%20Photos/2019/blackberries-cropped%20from%20Pixabay%20web.jpg",
      price: 2000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 124,
      name: "Marrow",
      imgPath:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/three-marrows-in-a-box-4bd88c3.jpg?quality=90&resize=385%2C350",
      price: 500,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 125,
      name: "Beetroot",
      imgPath:
        "https://www.yates.com.au/media/plants/vegetable/pr-tn-vege-beetroot.jpg",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
    {
      id: 126,
      name: "Pomegranate",
      imgPath:
        "https://target.scene7.com/is/image/Target/GUEST_26ce8f8a-31ea-4d39-8cea-26b8cba9475b?wid=488&hei=488&fmt=pjpeg",
      price: 1000,
      desc: "1 pcs",
      count: 0,
    },
  ],
  vegies: [
    {
      id: 201,
      name: "Broccoli",
      imgPath:
        "https://i5.walmartimages.ca/images/Large/094/505/6000200094505.jpg",
      price: 1500,
      count: 0,
      desc: "",
    },
    {
      id: 202,
      name: "Cabbage",
      imgPath:
        "https://images.squarespace-cdn.com/content/v1/5a8212f5e9bfdff7bedd9efb/1540415741231-3ODZ5WRPPAQ9KA68491Z/ke17ZwdGBToddI8pDm48kLreX6X1GQw84lH7SQwNiGJZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHatko3j2JsLXkVzLOA65PO-_qao9rgSF4sbDc4F1z7u6nB5GcNXOIsGm8NVpNW6CQ/Cabbage",
      price: 500,
      count: 0,
      desc: "",
    },
    {
      id: 203,
      name: "Lettuce",
      imgPath:
        "https://5.imimg.com/data5/TB/TU/MY-1542160/leaf-lettuce1-500x500.jpg",
      price: 300,
      count: 0,
      desc: "",
    },
    {
      id: 204,
      name: "Spinach",
      imgPath:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/270609_2200-732x549.jpg",
      price: 500,
      count: 0,
      desc: "",
    },
    {
      id: 205,
      name: "Carrot",
      imgPath:
        "https://images-na.ssl-images-amazon.com/images/I/51jqI%2BrGQQL.jpg",
      price: 1000,
      count: 0,
      desc: "",
    },
    {
      id: 206,
      name: "Cauliflower",
      imgPath:
        "https://5.imimg.com/data5/SE/NK/MY-48969557/fresh-cauliflower-500x500.png",
      price: 1500,
      count: 0,
      desc: "",
    },
    {
      id: 207,
      name: "Pumpkin",
      imgPath:
        "https://www.happyseedsshop.com/wp-content/uploads/2020/06/desi-ppp.jpg",
      price: 700,
      count: 0,
      desc: "",
    },
    {
      id: 208,
      name: "Cucumber",
      imgPath:
        "https://post.healthline.com/wp-content/uploads/2020/09/AN88-Cucumbers-732x549-thumb-1-732x549.jpg",
      price: 100,
      count: 0,
      desc: "1 pcs",
    },
    {
      id: 209,
      name: "Celery",
      imgPath:
        "https://5.imimg.com/data5/EF/TA/JR/SELLER-78828265/green-celery-250x250.jpg",
      price: 500,
      count: 0,
      desc: "",
    },
    {
      id: 210,
      name: "Garlic",
      imgPath:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/health-benefits-of-garlic-main-image-700-350-c77722b.jpg?quality=90&resize=768,574",
      price: 200,
      count: 0,
      desc: "",
    },
    {
      id: 211,
      name: "Egg plant",
      imgPath:
        "https://vitamedica.com/wellness-blog/wp-content/uploads/2010/09/Eggplant.jpg",
      price: 300,
      count: 0,
      desc: "",
    },
    {
      id: 212,
      name: "Butterscotch",
      imgPath: "https://www.melissas.com/v/vspfiles/photos/1708-2T.jpg",
      price: 500,
      count: 0,
      desc: "",
    },
    {
      id: 213,
      name: "Sweet peas",
      imgPath:
        "https://cdn.shopify.com/s/files/1/1891/5035/products/sugar_peas1_x700.png?v=1510650702",
      price: 200,
      count: 0,
      desc: "",
    },
    {
      id: 214,
      name: "Mushroom",
      imgPath:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/278858_2200-732x549.jpg",
      price: 200,
      count: 0,
      desc: "",
    },
    {
      id: 215,
      name: "Sweetbell peppers",
      imgPath:
        "https://cdn.shopify.com/s/files/1/0200/5036/products/02851-02_1200x630.jpeg?v=1421396769",
      price: 400,
      count: 0,
      desc: "",
    },
    {
      id: 216,
      name: "Kale Leaf",
      imgPath:
        "https://cdn2.stylecraze.com/wp-content/uploads/2013/05/1968_13-Amazing-Benefits-Of-Kale-Karam-Saag-For-Skin-Hair-And-Health_iS.jpg",
      price: 1000,
      count: 0,
      desc: "",
    },
    {
      id: 217,
      name: "Breadfruit Leaf",
      imgPath:
        "https://i.pinimg.com/originals/99/84/f4/9984f4e7177bf7976d1b4849cf97d88d.jpg",
      price: 700,
      count: 0,
      desc: "",
    },
    {
      id: 218,
      name: "Prunes (Date)",
      imgPath:
        "https://media.premiumtimesng.com/wp-content/files/2016/11/Dates2.jpg",
      price: 1000,
      count: 0,
      desc: "1 pack",
    },
    {
      id: 219,
      name: "Purple Cabbage",
      imgPath:
        "https://cdn.shopify.com/s/files/1/0004/4426/8609/products/Red_Cabbage_5af0d65c-a029-4157-8ae5-1683f40bad12_400x400.jpg?v=1544523526",
      price: 800,
      count: 0,
      desc: "",
    },
  ],
};

const btnHamburger = document.querySelector(".hamburger");
const btnCheckout = document.querySelector(".order__checkout");
const btnClose = document.querySelector(".closeBtn");
const btnSubmitOrder = document.querySelector(".modal__submit");
const totalUI = document.getElementById("total");
const basketUI = document.getElementById("basket");
const sidebarUI = document.querySelector(".sidebar__overlay");
const orderUI = document.querySelector(".order__contentBox");
const orderBasket = document.querySelector(".order__menu");
const displayModal = document.querySelector(".countBasket");
const modal = document.querySelector(".modal__overlay");
const displayBasketRow = document.querySelector(".basket__content");
const displayBasketTotal = document.querySelector(".basket__total");
const customerName = document.querySelector(".modal__name");
const customerAddress = document.querySelector(".modal__address");
const customerPhone = document.querySelector(".modal__phone");

let products;
let basket;

// INITIALIZE LOCAL STORAGE
function init() {
  products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : localStorage.setItem(
        "products",
        JSON.stringify([...data.vegies, ...data.fruits])
      );

  basket = localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : localStorage.setItem("basket", JSON.stringify([]));

  basketUI.textContent = basket.length;
}
init();

// SHOW CART MODAL
displayModal.addEventListener("click", checkout);
btnCheckout.addEventListener("click", checkout);

// HIDE CART MODAL
btnClose.addEventListener("click", function () {
  modal.classList.remove("showModal");
});

// RENDER PRODUCTS TO ORDER PAGE
function displayOrderProducts() {
  orderUI.innerHTML = "";

  products.map((product) => {
    const html = `
    <div class="order__content">
      <div class="order__imgBox">
          <img src=${product.imgPath} alt=${product.name} class="order__img">
      </div>
      <div class="order__info">
          <h2 class="order__title">${product.name}</h2>
          <p class="order__desc">${product.desc}</p>
          <p class="order__price" id="price-${product.id}">${product.price}</p>
      </div>
      <div class="order__cta">
          <button id=decrement-${product.id} disabled class="order__btn" onclick="decrementCount(${product.id})">-</button>
          <input id="input-${product.id}" type="text" class="order__input" disabled value=${product.count}>
          <button id="increment" onclick="incrementCount(${product.id})" class="order__btn">+</button>
      </div>
    </div>
    `;
    orderUI.insertAdjacentHTML("afterbegin", html);
  });
}
displayOrderProducts();

// PRODUCT INCREMENT
function incrementCount(id) {
  const item = products.find((product) => product.id === id);
  const currentItem = basket.find((cur) => cur.id === item.id);

  if (currentItem) {
    currentItem.count++;
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    basket.push(item) && item.count++;
    document.getElementById(`input-${id}`).value = item.count;
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));
  }

  localStorage.setItem("basket", JSON.stringify(basket));
  localStorage.setItem("products", JSON.stringify(products));

  const newBasket = JSON.parse(localStorage.getItem("basket"));

  basketUI.textContent = basket.length;
  document.getElementById(`decrement-${id}`).disabled = false;
  document.getElementById(`input-${id}`).value =
    currentItem?.count || item.count;
  totalUI.innerHTML = calcTotal(newBasket);
}

// PRODUCT DECREMENT
function decrementCount(id) {
  const item = basket.find((product) => product.id === id);
  item.count--;
  document.getElementById(`input-${id}`).value = item.count;
  localStorage.setItem("basket", JSON.stringify(basket));

  if (item.count === 0) {
    const index = basket.findIndex((prod) => prod.id === id);
    basket.splice(index, 1);
    basketUI.textContent = basket.length;
    document.getElementById(`decrement-${id}`).disabled = true;
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));
  }

  totalUI.innerHTML = calcTotal(basket);
}

// CALCULATE THE TOTAL AMOUNT OF ITEM IN THE BASKET
function calcTotal(arr) {
  const newArr = [...arr];
  const prices = [];
  newArr?.forEach((item) => {
    const { price, count } = item;
    prices.push(price * count);
  });

  return prices.reduce((acc, cur) => acc + cur, 0);
}

// DISPLAY BASKET ITEMS IN THE MODAL
function displayBasket(basketArray) {
  basketArray.map((item) => {
    const html = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.count}</td>
        <td>${item.count * item.price}</td>
      </tr>
    `;
    displayBasketRow.insertAdjacentHTML("afterbegin", html);
  });
  displayBasketTotal.textContent = calcTotal(basket);
}

// SHOW CHECKOUT MODAL
function checkout() {
  displayBasketRow.innerHTML = "";
  modal.classList.add("showModal");
  displayBasket(basket);
}

// SUBMIT ORDER

btnSubmitOrder.addEventListener("click", function (e) {
  e.preventDefault();
  let message = "";

  for (let i = 0; i < basket.length; i++) {
    const element = basket[i];
    message = `${message}
(${i + 1}) ${element.name} - ${element.price} - ${element.count} = ${
      element.price * element.count
    } ------`;
  }

  message = `${message}

TOTAL AMOUNT OF ORDER = ${calcTotal(basket)}`;
  const template = {
    from_name: customerName.value,
    to_name: "Pickerschoice",
    message,
    customerName: customerName.value,
    customerAddress: customerAddress.value,
    customerPhone: customerPhone.value,
  };

  if (
    customerPhone.value?.length == 11 &&
    customerName.value &&
    customerAddress.value &&
    calcTotal(basket) > 0
  ) {
    emailjs
      .send("service_zc22ent", "template_9muun7d", template)
      .then(() => {
        modal.classList.remove("showModal");
        document.querySelector(".errorMsg").innerHTML = "Order sent";
        document.querySelector(".errorMsg").style.color = "green";
        localStorage.clear();
      })
      .catch(() => {
        document.querySelector(".errorMsg").innerHTML = "Could not send order";
      });
  } else {
    document.querySelector(".errorMsg").innerHTML =
      "Please fill all fields correctly";
  }
});
