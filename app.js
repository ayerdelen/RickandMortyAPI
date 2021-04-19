// function getData() {

// }

// getData()
const cardSection = document.querySelector(".card-section");
const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("keypress", setQuery);

function setQuery(e) {
  //Keyboard Enter key code: 13

  if (e.keyCode == 13) {
    getResults(e.target.value)
  }
}

function getResults(value) {
  cardSection.innerHTML = "";
  fetch(`https://rickandmortyapi.com/api/character/?name=${value}`)
  .then((res) => res.json())
  .then((data) => {
    if(data.results) {
      data.results.forEach(item => {
        
        createCard(item)
        
      })
      
    }
    else {
      cardSection.innerHTML = `<div class="wrong">Sorry Wrong Name ~~~</div>`
      
    }
  });
  searchInput.value = "";
}

const numb = 30;

const getNumbLoop = async () => {
  for (let i= 1; i <=numb ; i++) {
    await homePage(i)
    
  }
}

const homePage = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const res = await fetch(url)
  const rickandmorty = await res.json();
  createCard(rickandmorty)
}

function createCard(rickandmorty) {
  let html = `
  <div class="card-body">
  <div class="img-container">
    <img src="${rickandmorty.image}" alt="rickandmorty">
  </div>
  <div class="card-info">
      <div class="info-bar">
         <span class="info-tag">Name: </span>
         <p>${rickandmorty.name}</p> 
      </div>
      <div class="info-bar">
          <span class="info-tag">Gender: </span>
         <p>${rickandmorty.gender}</p>
      </div>
      <div class="info-bar">
          <span class="info-tag">Species: </span>
         <p>${rickandmorty.species}</p>
      </div>
      <div class="info-bar">
          <span class="info-tag">Status: </span>
         <p class="status">${rickandmorty.status}</p>
      </div>
      
  </div>
</div>
  `;

  cardSection.innerHTML += html;

}


getNumbLoop()