const pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Bulbasaur",
            height: 7,
            types: ["grass", "poison"],
        },
        {
            name: "Pikachu",
            height: 4,
            types: ["electic"],
        },
        {
            name:"Ditto",
            height: 3,
            types: ["notmal"],
        },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(item) {
        pokemonList.push(item);
    }

    return {
        getAll: getAll,
        add: add,
    };
})();


pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(`${pokemon.name} (height: ${pokemon.height})`);

    if (pokemon.height > 5) {
        document.write(" - Wow, that's big!");
    }

    document.write("<br>");
});