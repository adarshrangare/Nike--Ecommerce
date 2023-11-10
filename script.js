
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./Assets/img/air.png",
        },
        {
          code: "darkblue",
          img: "./Assets/img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./Assets/img/jordan.png",
        },
        {
          code: "green",
          img: "./Assets/img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./Assets/img/blazer.png",
        },
        {
          code: "green",
          img: "./Assets/img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./Assets/img/crater.png",
        },
        {
          code: "lightgray",
          img: "./Assets/img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./Assets/img/hippie.png",
        },
        {
          code: "black",
          img: "./Assets/img/hippie2.png",
        },
      ],
    },
  ];

  const slider = document.querySelector(".slider");
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");
  console.log(menuItems);

  let bgArray = ["https://images.unsplash.com/photo-1521459467264-802e2ef3141f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546872003-917e15185482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546453667-8a8d2d07bc20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1582402512074-5895b456c856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRleHR1cmV8ZW58MHx8MHx8fDA%3D",

  "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
];

    


  menuItems.forEach((item,index)=>{
    
        item.addEventListener("click",(e)=>{
            console.log(index +"clicked");
            
            wrapper.style.transform = `translateX(${-100*index}vw)`;

            e.target.style.color = "coral";
            
            console.log(bgArray[index]);

            let bg = "url("+bgArray[index]+")";

            slider.style.background = bg;

            (function(){
                menuItems.forEach((item,index2)=>{
                    if(index!=index2){
                    item.style.color = "lightgrey";
                    }
                    
                })

            })()

        })
        
  })

  
  console.log(products)

 function renderProductsOnHome(){

    const productSection = document.querySelector(".productSection");

    products.forEach((product)=>{

        const {title,price, colors:[{img}]} = product;
        console.log(product)
        productSection.innerHTML += `<div class="productContainerMain">
        <div class="subProductContainer">
            <img src="${img}" alt="${title}" class="productImage">
            <div class="textArea">
                <div class="productTitle">${title}</div>
                <div class="productPrice">₹${price}</div>
            </div>
        </div>
        
        
            <button class="addToCart"><i class="fa-solid fa-cart-plus"></i>Add to Cart</button>
        

    </div>`


    })



 } 

 renderProductsOnHome()