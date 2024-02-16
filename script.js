// Global variables
let inputSearch = document.getElementById('inputSearch');

let buttonSearch = document.getElementById('buttonSearch');

let selectElement = document.getElementById("Select");

let fetchApi = async() => {
    try {
        const risposta = await fetch('https://jsonplaceholder.typicode.com/users');
    
        if (!risposta.ok) {
          throw new Error(`Errore di rete: ${risposta.status}`);
        }
    
        const data = await risposta.json();
        // console.log('Dati ricevuti:', datiJson);
        creaTabella(data);
        filteredData(data);

      } catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
      }
};

let filteredData = (data) => {
  inputSearch.addEventListener("keydown", () => {
    inputValue = inputSearch.value;
    let selection = selectElement.value.toLowerCase(); // Converte la selezione in minuscolo per evitare problemi di case-sensitive
    console.log(selection);

    switch (selection) {
      case "name":
        const nomiArray = data.map(oggetto => oggetto.name);
        console.log(nomiArray);
        break;
      case "username":
        const usernameArray = data.map(oggetto => oggetto.username);
        console.log(usernameArray);
        break;
      case "email":
        const emailArray = data.map(oggetto => oggetto.email);
        console.log(emailArray);
        break;
      default:
        console.error("Selezione non gestita");
    }
  });
};

// Funzione per creare la tabella
let creaTabella = (dati) => {
  const tabellaDati = document.getElementById('tabellaDati');

  // Itera attraverso i dati e crea le righe della tabella
  dati.forEach(({id, name, username, email }) => {
    const riga = `<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                  </tr>`;
    tabellaDati.innerHTML += riga;
  });
};

fetchApi();