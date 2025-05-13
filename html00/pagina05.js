let ejemplo = document.getElementById("demmo");
console.log(ejemplo);

function imagen(id) {
    const componente = "<figure>" +
        '<img src="https://picsum.photos/id/1' + id + '/200/200" alt="x">' +
        "<figcaption>John</figcaption>" +
        "</figure>";
    return componente;
}

ejemplo.innerHTML = "hola" + imagen(1);
