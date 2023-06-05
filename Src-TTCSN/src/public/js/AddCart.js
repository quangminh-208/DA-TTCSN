
// const ListPro = "http://localhost:3000/test"

// function getCart(callback) {
//     fetch(ListPro)
//         .then((response) => {
//             response.json()
//         })
//         .then(callback);
// }



// function AddToCart(data,callback) {
//     var options = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(ListPro,options) 
//         .then((response) => response.json)
//         .then(callback)
// }


//     let btnCarts = document.querySelectorAll('.btn-cart');
//     btnCarts.forEach((btnCart) => {
//         btnCart.onclick = (e) => {
//             var product = e.target.parentElement
//             var idPro = product.querySelector('input').value
//             var URLPic = product.querySelector('img').src
//             var namePro = product.querySelector('.name-product')
//             var pricePro = product.querySelector('.price-product')
//             var formData = {
//                 ID: idPro,
//                 name: namePro,
//                 URLPic: URLPic,
//                 price: pricePro
//             }
//             AddToCart(formData)
//             console.log(URLPic)
//         }
//     })

    