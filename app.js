function buscarProducto() {
    let consulta = document.getElementById("busqueda").value.trim().toLowerCase();
    let resultadoDiv = document.getElementById("resultado");

    if (consulta === "") {
        resultadoDiv.innerHTML = "<strong>Por favor ingresa un nombre.</strong>";
        return;
    }

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            let productos = data.productos;
            let encontrado = productos.find(p => p.nombre.toLowerCase() === consulta);

            if (!encontrado) {
                resultadoDiv.innerHTML = `<strong>No se encontró información del producto.</strong>`;
            } else {
                resultadoDiv.innerHTML = `
                    <h3>${encontrado.nombre}</h3>
                    <p><strong>Tipo:</strong> ${encontrado.tipo}</p>
                    <p><strong>Composición:</strong> ${encontrado.composicion}</p>
                    <p><strong>Dosis recomendada:</strong> ${encontrado.dosis}</p>
                    <p><strong>Advertencias:</strong> ${encontrado.advertencias}</p>
                    <p><strong>Tiempo de carencia:</strong> ${encontrado.carencia}</p>
                    <p><strong>Descripción:</strong> ${encontrado.descripcion}</p>
                    <p><strong>Fabricante:</strong> ${encontrado.fabricante}</p>
                `;
            }
        })
        .catch(() => {
            resultadoDiv.innerHTML = "<strong>Error al cargar los datos.</strong>";
        });
}
