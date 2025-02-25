const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemons = []; // Array para almacenar los Pokémon y evitar múltiples llamadas

// Función para obtener y almacenar los Pokémon
async function obtenerPokemons() {
    const promesas = [];

    for (let i = 1; i <= 151; i++) {
        promesas.push(fetch(URL + i).then(response => response.json()));
    }

    pokemons = await Promise.all(promesas); // Espera todas las peticiones
    pokemons.sort((a, b) => a.id - b.id); // Ordena por ID

    mostrarPokemons(pokemons); // Muestra los Pokémon al cargar la página
}

// Función para mostrar Pokémon (filtrados o no)
function mostrarPokemons(lista) {
    listaPokemon.innerHTML = ""; // Limpiar la lista antes de mostrar nuevos elementos
    lista.forEach(poke => mostrarPokemon(poke));
}

// Función para crear el HTML de un Pokémon
function mostrarPokemon(poke) {
    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`).join('');

    let pokeId = poke.id.toString().padStart(3, "0"); // Formatear ID con ceros a la izquierda

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">ID: #${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${"Altura: " + poke.height}m</p>
                <p class="stat">${"Peso: " + poke.weight}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

// Evento para los botones de filtro
botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    if (botonId === "ver-todos") {
        mostrarPokemons(pokemons); // Mostrar todos
    } else {
        // Filtrar Pokémon por tipo y mostrar los que coincidan
        const pokemonsFiltrados = pokemons.filter(poke =>
            poke.types.some(type => type.type.name === botonId)
        );
        mostrarPokemons(pokemonsFiltrados);
    }
}));

// Llamar a la función para cargar los Pokémon al inicio
obtenerPokemons();
