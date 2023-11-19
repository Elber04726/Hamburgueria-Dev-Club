const list = document.querySelector("ul");
const buttonAll = document.querySelector(".button-all");
const buttonMap = document.querySelector(".button-map");
const buttonSum = document.querySelector(".button-sum");
const buttonFilter = document.querySelector(".button-filter");
let myLi = "";

function showAll() {
  myLi = "";
  menuOptions.forEach((list) => {
    myLi += `
  <li>
        <img class="img-figure" src=${list.src} alt="imge-logo" />
        <p>${list.name}</p>
        <p>R$${list.price}</p>
      </li>
  `;
  });
  list.innerHTML = myLi;
}

function showMap() {
  myLi = "";

  const newMap = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  newMap.forEach((list) => {
    myLi += `
  <li>
        <img class="img-figure" src=${list.src} alt="imge-logo" />
        <p>${list.name}</p>
        <p>R$${list.price}</p>
      </li>
  `;
  });
  list.innerHTML = myLi;
}

function sumAll() {
  const sum = menuOptions.reduce((acc, list) => acc + list.price, 0);

  list.innerHTML = `

      <li>
        <p>O valor a ser pago é de R$${sum}</p>
      </li>
`;
  console.log(sum);
}

function filter() {
  myLi = "";
  const filterAll = menuOptions.filter((list) => list.vegan === true);
  filterAll.forEach((list) => {
    myLi += `
  <li>
        <img class="img-figure" src=${list.src} alt="imge-logo" />
        <p>${list.name}</p>
        <p>R$${list.price}</p>
      </li>
  `;
  });
  list.innerHTML = myLi;
}

buttonFilter.addEventListener("click", filter);
buttonSum.addEventListener("click", sumAll);
buttonAll.addEventListener("click", showAll);
buttonMap.addEventListener("click", showMap);
