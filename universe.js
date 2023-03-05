// https://github.com/ProgrammingHero1/AI-universe-hub.githttps://github.com/ProgrammingHero1/AI-universe-hub.git

const loadInfo = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    displayInfo(data.data)

}
function displayCountry(result){
    const allCountry = document.getElementById('all-country');

//     for(let country of result){
//         console.log(country)
//     }
// }
       result.forEach(country => {
        // console.log(country.ccn3)
        let countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>

        <button onClick = "displayCode('${country.cca3}')">Details</button>
        `;
        allCountry.appendChild(countryDiv)
       })
}
const displayInfo = results => {
    const cardField = document.getElementById("card-field");

    results.forEach(result => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
                        <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${result.}</h5>
                          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                      </div>`;
    cardField.appendChild(cardDiv)
    })
    


}
loadInfo()
