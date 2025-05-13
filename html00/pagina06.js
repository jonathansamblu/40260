const picture = (id, name) => {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
        <figure>
            <img src="${url}" alt="${name}" class="redonda">
            <figcaption>${name}</figcaption>
        </figure>
    `;
};

document.getElementById('app').innerHTML = picture(1, "John") + picture(2, "Jane");

const lista = document.querySelectorAll('img');
for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener('click', function () {
        this.classList.toggle('redonda');
    });
}
