// function loadInformation(){
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const loadInformation = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    displayTools(data.data);
    // console.log(data.data.tools[0].name);
}

const displayTools = tools => {
    console.log(tools);
    const toolContainer = document.getElementById('tool-container');
  
    tools.tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
    <div class="card h-100">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        <p class="card-text"> <ol> <li>${tool.features[0]} </li> <li>${tool.features[1]}</li> <li>${tool.features[2]}  </li>  </li> </ol> </p>
      </div>
      <div class="card-footer">
        <h6 class="card-title">${tool.name}</h6>
        <div class="d-flex justify-content-between">
        <small class="text-muted">${tool.published_in}</small>
        <ion-icon  name="arrow-forward-circle-outline"></ion-icon>
        </div>
      </div>
    </div>`;
    toolContainer.appendChild(toolDiv);
    })
}

loadInformation();
