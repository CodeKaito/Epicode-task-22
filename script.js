let inputSearch = document.getElementById('inputSearch');
let selectElement = document.getElementById("Select");
let tabellaDati = document.getElementById('tabellaDati');

let originalData; // Conservo l'array originale per ritorpare lo stato iniziale

let fetchApi = async () => {
  try {
    const risposta = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!risposta.ok) {
      throw new Error(`Errore di rete: ${risposta.status}`);
    }

    originalData = await risposta.json();
    creaTabella(originalData);

  } catch (error) {
    console.error('Si è verificato un errore durante la richiesta:', error.message);
  }
};

let filteredData = () => {
  const inputValue = inputSearch.value.trim().toLowerCase();
  const selection = selectElement.value.toLowerCase();

  const filteredArray = originalData.filter(oggetto => oggetto[selection].toLowerCase().includes(inputValue));

  tabellaDati.innerHTML = '';
  filteredArray.forEach(({ id, name, username, email }) => {
    const riga = `<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                  </tr>`;
    tabellaDati.innerHTML += riga;
  });
};

let creaTabella = (data) => {
  data.forEach(({ id, name, username, email }) => {
    const riga = `<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${username}</td>
                    <td>${email}</td>
                  </tr>`;
    tabellaDati.innerHTML += riga;
  });
};

window.onload = () => {
  fetchApi();
};

inputSearch.addEventListener("input", filteredData);
