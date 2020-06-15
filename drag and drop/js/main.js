const lista = document.getElementById("lista");


Sortable.create(lista, {
    animation: 150,
    chosenClass: "seleccionado",
    // ghostClass: "fantasma"
    dragClass: "drag",

    onEnd: () =>{
        console.log("Se inserto un elemento");
    },

    group: "lista-personas",
    store: {
        // GUARDAR EL ORDEN DE LA LISTA EN LOCAL STORAGE
        set: (sortable) => {
            const orden = sortable.toArray();
            // CONVIERTE EL ARRAY A CADENA DE TEXTO CON JOIN 
            localStorage.setItem(sortable.options.group.name, orden.join("|"));
        },

        // OBTENER EL ORDEN DE LA LISTA 
        get: (sortable) => {
           const orden = localStorage.getItem(sortable.options.group.name);
           return orden ? orden.split("|") : [];
        }
    }
});
