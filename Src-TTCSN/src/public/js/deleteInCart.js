const ListPro = "http://localhost:3000/test";
      console.log(ListPro);
      function getCart(callback) {
        fetch(ListPro)
          .then((response) => {
            response.json();
          })
          .then(callback);
      }

      function handleDeleteInCart(ID) {
        var options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
        fetch(ListPro + '/' + ID, options)
          .then((response) => response.json)
          .then(function (){
              
          });
      }