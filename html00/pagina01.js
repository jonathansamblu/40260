function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("alumno");
        myFunction(cd);
    };
    xhttp.open("GET", "../XML00/alumno.xml");
    xhttp.send();
}

function myFunction(cd) {
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td>" +
            cd[i].getElementsByTagName("nombre")[0].textContent +
            "</td><td>" +
            cd[i].getElementsByTagName("nacimiento")[0].textContent +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

