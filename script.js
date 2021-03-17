var studente = {
    cognome: "Corti",
    nome: "Gabriele",
    eta: 21
}

var lista = document.getElementById("student_data");

for (const key in studente) {
    
    lista.innerHTML += "<li>" + key + " " + studente[key] + "</li>";

}