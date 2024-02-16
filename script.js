// Global variables
let inputSearch = document.getElementById('inputSearch');

let buttonSearch = document.getElementById('buttonSearch');

let selectElement = document.getElementById("Select");
let selection = selectElement.value;

let fetchApi = async() => {
    try {
        const risposta = await fetch('https://jsonplaceholder.typicode.com/users');
    
        if (!risposta.ok) {
          throw new Error(`Errore di rete: ${risposta.status}`);
        }
    
        const datiJson = await risposta.json();
        // console.log('Dati ricevuti:', datiJson);
        creaTabella(datiJson);
        
      } catch (error) {
        console.error('Si è verificato un errore durante la richiesta:', error.message);
      }
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