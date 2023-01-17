let i = 1
let URL = "https://pokeapi.co/api/v2/pokemon/"+i
let URLNAME = "https://pokeapi.co/api/v2/pokemon/"+name
const pokemonCard = document.querySelector("#pokemonCard");

siguiente = URL+i
anterior = URL-i

fetch(URL)
  .then((response) => response.json())
  .then(data => armarCards(data))

function armarCards(data) {

  const div = document.createElement("div");
  div.classList.add("card-pokemon");
  div.innerHTML = `<div class="card" style="width: 18rem;">
      <h1></h1>
      <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
      <div class="card-body">
      <ul>
        <li>
            Numero: ${data.id}
        </li>
        <li>
            Nombre: ${data.name}
        </li>
        <li>
            Tipo: ${data.types[0].type.name}
        </li>
      </ul>
      <button type="button" class="btn btn-outline-dark">Anterior</button>
      <button type="button" class="btn btn-outline-dark">Siguiente</button>
    </div>
    </div>
  </div>`;
  pokemonCard.append(div);
}