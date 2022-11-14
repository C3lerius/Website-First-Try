const data = {
  country: "Suisse",
  population: 8.5,
  lang: ["DE", "FR", "IT", "RM"],
};

const card = `
  <div class="card>
    <h2>Pays : ${data.country}</2>
    <p>Population : ${data.population}</p>
    <p>Language(s) : ${data.lang}</p>
  </div>
`

document.querySelector('.container').innerHTML = card;