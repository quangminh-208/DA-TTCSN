const ListPro = "http://localhost:3000/test";

      console.log(ListPro);
      function getCart(callback) {
        fetch(ListPro)
          .then((response) => {
            response.json();
          })
          .then(callback);
      }

      function AddToCart(data, callback) {
        var options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        };
        fetch(ListPro, options)
          .then((response) => response.json)
          .then(callback);
      }

      let btnCarts = document.querySelectorAll(".btn-cart");
      btnCarts.forEach((btnCart,index) => {
        btnCart.onclick = (e) => {
          var product = e.target.parentElement;
          // var idPro = product.querySelector("input").value;
          var URLPic = product.querySelector("img").src;
          var namePro = product.querySelector(".name-product").innerText;
          var pricePro = product.querySelector(".price-product").innerText;
          var formData = {
            id: index,
            name: namePro,
            URLPic: URLPic,
            price: pricePro,
          };
          AddToCart(formData);
          alert(`Thêm thành công sản phẩm vào giỏ hàng`);
        };
      });