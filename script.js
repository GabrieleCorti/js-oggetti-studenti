var studente = {
    cognome: "Corti",
    nome: "Gabriele",
    eta: 21
}

var lista = document.getElementById("student_data");

for (const key in studente) {
    
    lista.innerHTML += "<li>" + key + ":" + " " + studente[key] + "</li>";

}

var listaStudenti = document.getElementById("student_list");
var allStudenti = [
    {
        cognome: "Giordano",
        nome: "Antonio",
        eta: 21
    },
    {
        cognome: "Conti",
        nome: "Sabrina",
        eta: 21
    },
    {
        cognome: "Alfonsi",
        nome: "Andrea",
        eta: 21
    },
    {
        cognome: "Rigoldi",
        nome: "Carolina",
        eta: 21
    },
    {
        cognome: "Varisco",
        nome: "Fabio",
        eta: 21
    }
];

for (let i = 0; i < allStudenti.length; i++) {
    
    listaStudenti.innerHTML += "<li>" + allStudenti[i]["nome"] + " " +allStudenti[i]["cognome"] + "</li>";

}