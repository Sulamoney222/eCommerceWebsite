const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnloginpopup = document.querySelector('.btnlogin-popup');
const show = document.querySelector('#show')
const product = document.querySelector('.products')
const theme = document.querySelector('.theme')
const menuBtn = document.getElementById('menu')
const remove = document.getElementById('remove')
const removemenuBtn = document.getElementById('removemenu')
const navigation = document.querySelector('.navigation')
const allLinks = document.querySelectorAll('.links')



menuBtn.addEventListener('click',()=>{
    navigation.classList.add('show')
     menuBtn.style.visibility = 'hidden'
    removemenuBtn.style.visibility = 'visible'
})
removemenuBtn.addEventListener('click',()=>{
    navigation.classList.remove('show')
     menuBtn.style.visibility = 'visible'
    removemenuBtn.style.visibility = 'hidden'
})

allLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
      if(navigation.classList.contains('show')){
        navigation.classList.remove()
      }
    })
  })
  console.log(allLinks);

registerlink.addEventListener('click', ()=> {
     wrapper.classList.add('active');
}) 

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

btnloginpopup.addEventListener('click',()=>{
    wrapper.classList.toggle('active-popup')
})
remove.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})


theme.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
   
})

function showpassword(){
    if(show.type=='password'){
        show.type='text'
    }else{
        show.type='password'
    }
}

//Displaying items
class Product{
    
    async getProducts(){
        try {
            let datas = await fetch('products.json')
            let response = await datas.json()

            let allProducts = response.items
            allProducts = allProducts.map((items)=>{
                const {id} = items.sys
                const {image, price, name} = items.field

                return {id, image, price, name}
            })
         return allProducts
        } catch (error) {
            console.log(error);
            
            
        }
    }

}

class Ui{

    displayProducts(products){
        let result = ''
        products.forEach(item => {
            result +=`
             <div class="row">
                <img src=${item.image}>
                <div class="product-text">
                    <h5>sales ${item.id}</h5>
                </div>
                <div class="heart-icon">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="ratting">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </div>
                <div class="price">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                </div>
            </div>
            `
            product.innerHTML = result
        });
    }
}

// "sys":{"id" :"1"},
// "field":{
//     "image":"lady1.jpg",
//      "name": "Nice Clothing",
//      "price": 234
// }


//https://www.figma.com/design/KfiYq1kwTpVXaOceftPxfP/Luxnet-LTD?node-id=0-1&p=f&t=cGsQbr1nDKzvOAVQ-0

//end of displaying items
const clients =[
    {
        img: 'lady1.jpg',
        fullName : 'Jeniffer Hurt',
        job : 'UI/UX',
        desc: "I'm so impressed with this store and can't wait to shop here again! Highly recommend to anyone looking for great fashion and excellent customer service!",
    },
    {
        img: 'white2.jpg',
        fullName : ' Sarah Johnsont',
        job : 'Frontend Developer',
        desc: `"I love the style and quality of the clothes, but I feel like the marketing sometimes doesnt do justice to how great the products are in person. The fabric is softer than expected, and the colors pop more than they appear online."`,
    },
    {
        img: 'white3.jpg',
        fullName : 'Mark Williams',
        job : 'Graphics Designer',
        desc: `"The marketing for this brand really speaks to me! The way they showcase versatility and comfort in their ads made me want to try it, and Im not disappointed. The clothes fit perfectly, and the designs are both stylish and practical"`,
    },
    {
        img: 'whute1.jpg',
        fullName : ' Emily Clark',
        job : 'UI/UX',
        desc: `"The clothes themselves are fine, but the marketing felt a bit misleading. The ads promise a more luxurious feel than what I received. The fabric is decent, but not as high-end as the photos made it seem."`,
    }
]
let count = 0

const fullname = document.getElementById('name')
const title = document.getElementById('title')
const desc = document.getElementById('desc')
const left = document.getElementById('left')
const right = document.getElementById('right')
const img = document.getElementById('img')
const rdmBtn = document.getElementById('random-btn')



window.addEventListener('DOMContentLoaded',()=>{
    let products = new Product()
    let display = new Ui()

    products.getProducts()
    .then((products)=>{
        display.displayProducts(products)

    })
    
    clientsData(count)
})

//creating a function for the clients
const clientsData = (person) =>{
    const user = clients[person]
    img.src = user.img;
    fullname.textContent = user.fullName;
    title.textContent = user.job;
    desc.textContent = user.desc;
}

//when clicking the next button
right.addEventListener('click',()=>{
    count++
   if(count > clients.length -1 ){
    count = 0
   }
    clientsData(count)
})

//when clicking the previous button
left.addEventListener('click', ()=>{
    count--
    if(count < 0){
        count = clients.length-1
    }
    clientsData(count)
})

//when clicking the random button
rdmBtn.addEventListener('click', ()=>{
  count = Math.floor(Math.random()* clients.length)
  clientsData(count)
   console.log(count);
   
})

