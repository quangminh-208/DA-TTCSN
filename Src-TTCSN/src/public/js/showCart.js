const ListPro = "http://localhost:3000/test";
const cart = document.querySelector('.List-Cart')
console.log(ListPro);
let abc
let convertAPItoHTML = async () => {
  let response = await fetch(ListPro)
  let commits = await response.json();
  console.log(commits);
  var htmlss = commits.map((commit, index) => `
    <tr>
    <td>
      <div
        class="row d-flex justify-content-center align-content-center"
      >
        <div
          class="col-md-2 d-flex justify-content-center"
          style="margin-top: 6%"
        >
          <i class="bi bi-x-lg" onclick="handleDeleteInCart(${commit.id})"></i>
        </div>
        <div class="col-4">
          <img
            src="${commit.URLPic}"
            alt=""
            style="width: 100%; height: auto"
          />
        </div>
        <div class="col-6" 
          style="overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          height: 1.3em;
          margin-bottom: 10px;">
          <p>
            ${commit.name}
          </p>
        </div>
      </div>
    </td>
    <td class="price unit-price item2" style="width: 100px;text-align: center;">
      <div>${commit.price}</div>
    </td>
    <td class="d-flex justify-content-center align-items-center>
      <div
        class="row"
        style="margin-bottom: 20px"
      >
        <div class="col-4 p-0">
          <button style="width: 100%;" type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="" onmouseover=minus()>
            -
          </button>
        </div>
        <div class="col-4 p-0">
          <input style="width: 100%;" type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
        </div>
        <div class="col-4 p-0">
          <button style="width: 100%;" type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onmouseover=plus()>
            +
          </button>
        </div>
      </div>
    </td>
    <td class="price sum-price item2" style="width: 100px; padding-left: 18px;text-align: center;"> 
    ${commit.price} 
    </td>
  </tr>
  `
  )

  cart.innerHTML = htmlss.join('')
}
convertAPItoHTML()
function handleDeleteInCart(ID) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  var links = `${ListPro}/${ID}`
  fetch(links, options)
    .then((response) => response.json)
    .then(function () {
      convertAPItoHTML()
    });
}


const ArrayPrice = document.querySelectorAll(".sum-price")


