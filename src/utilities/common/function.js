// const addtodb = (id) => {
//   let count = localStorage.getItem(id);
//   if (count) {
//     count = parseInt(count);
//     count = count + 1;
//     localStorage.setItem(id, count);
//   } else {
//     localStorage.setItem(id, 1);
//   }
// };

const addtodb = (id) => {
  let teamCart;

  const existingCart = localStorage.getItem("Team-cart");

  if (existingCart) {
    teamCart = JSON.parse(existingCart);
  } else {
    teamCart = {};
  }

  let count = teamCart[id];

  if (count) {
    count = count + 1;
    teamCart[id] = count;
  } else {
    teamCart[id] = 1;
  }

  localStorage.setItem("Team-cart", JSON.stringify(teamCart));
};

const removePlayer = (id) => {
  const existingCart = JSON.parse(localStorage.getItem("Team-cart"));

  if (existingCart[id]) {
    delete existingCart[id];
  }
  localStorage.setItem("Team-cart", JSON.stringify(existingCart));
};

export { addtodb, removePlayer };
