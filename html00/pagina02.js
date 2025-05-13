const loadXMLDoc = async () => {
    try {
        const response = await fetch('../XML00/alumno.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const cds = xmlDoc.getElementsByTagName("alumno");
        myFunction(cds);
    } catch (error) {
        console.error('Error loading XML:', error);
    }
};

const myFunction = (cds) => {
    let table = "<tr><th>Nombre</th><th>Nacimiento</th></tr>";
    Array.from(cds).forEach(cd => {
        const nombre = cd.getElementsByTagName("nombre")[0]?.textContent || "N/A";
        const nacimiento = cd.getElementsByTagName("nacimiento")[0]?.textContent || "N/A";
        table += `<tr><td>${nombre}</td><td>${nacimiento}</td></tr>`;
    });
    document.getElementById("demo").innerHTML = table;
};
