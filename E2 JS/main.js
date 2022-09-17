class Pizza {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

let Napo = new Pizza(1, "Napolitana", ["Mozzarella, Tomate, Albahaca"], "600");
let CuatroQueso = new Pizza(
  2,
  "Cuatro Quesos",
  ["Mozzarella, Gorgonzola, Parmesano,Fontina"],
  "1800"
);
let Pepperonis = new Pizza(3, "Pepperoni", ["Mozzarella, Pepperoni"], "600");
let Estaciones = new Pizza(
  4,
  "Cuatro Estaciones",
  ["Alcauciles, Jamon, Aceitunas, Mariscos"],
  "1200"
);
let Champiñones = new Pizza(
  5,
  "Champiñon",
  ["Mozzarella, Tomate, Albahaca"],
  "1200"
);
let Hawaii = new Pizza(
  6,
  "Hawaii",
  ["Mozzarella, Ananá, Tomate, Jamón"],
  "500"
);

const menu = [Napo, CuatroQueso, Pepperonis, Estaciones, Champiñones, Hawaii];

//a) Las pizzas que tengan un id impar.
menu.forEach((e) => {
  e.id % 2 !== 0 ? console.log(`La pizza ${e.nombre} tiene un id impar`) : null;
});

function cingredientes(Pizza) {
  const items = Pizza.ingredientes;
  console.log(Pizza.nombre);
  items.forEach((e) => console.log(e));
}
console.log("----------");

//b)Todos los ingredientes de cada pizza El nombre de cada pizza con su respectivo precio.

menu.forEach((Pizza) => {
  console.log(
    "La Pizza " + Pizza.nombre + " cuesta " + Pizza.precio + "$ y tiene: "
  );

  logearIngredientes(Pizza);
  console.log("________________");
});
function logearIngredientes(Pizza) {
  Pizza.ingredientes.forEach((ingrediente) => {
    console.log(`- ${ingrediente}`);
  });
}

const PizzasMenos600 = menu.filter((Pizza) => Pizza.precio <= 600);

//c)¿Hay alguna pizza que valga menos de $600?
PizzasMenos600.forEach((Pizza) =>
  console.log("La " + Pizza.nombre + " vale " + Pizza.precio)
);

//__________________________________________________________________________________

//definimos variables
const form = document.getElementById("search-form");
const searchPizza = document.getElementById("search-id");
const id = document.getElementById("Numero");
const pizzaList = document.getElementById("pizza-list");

console.log(id.value);

//chekea el id
const checkId = () => {
  const idValue = id.value;
  let valid = false;
  const min = 1;
  const max = 6;

  if (isEmpty(idValue)) {
    showError(id, "Ingrese un numero entre 1 y 6");
  } else if (!isBetween(idValue, min, max)) {
    showError(id, "El numero debe ser entre 1 y 6");
  } else {
    showSucces(id);
    valid = true;
  }
  return valid;
};
//validaciones
const isEmpty = (value) => value === "";
const isBetween = (value, min, max) =>
  value < min || value > max ? false : true;

//error

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("succes");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSucces = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("succes");
  const succes = formField.querySelector("small");
  succes.textContent = "";
};

//renderisamos nuestra pizza7
const renderPizza = () => {
  const pizza = buscarPizza(id);
  console.log(pizza);

  return ` 
        <h2 id="nombre">
          <p> ${pizza.nombre} </p>
        </h2>
        <h3 id ="ingredientes" >
         ${pizza.ingredientes}
        </h3>
        <h4 id="price">
            <p>
                
                ${pizza.precio} $
            </p>
        </h4>
    `;
};

const renderCarrito = () => {
  pizzaList.innerHTML = renderPizza(id);
};

//Funciones para buscar pizza segun id
function buscarPizza(id) {
  const pizza = menu.find((e) => e.id == id.value);

  return pizza;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // guardar el estado de los inputs en variables
  let isIdValid = checkId();

  console.log("isIdValid ==>", isIdValid);

  if (isIdValid) {
    renderCarrito();
  }
});

/*const submitForm = (e) => {
  e.preventDefault(); // evitamos que se recargue la pagina

  renderCarrito();
};

const init = () => {
  searchPizza.addEventListener("click", submitForm);
};

init();*/
