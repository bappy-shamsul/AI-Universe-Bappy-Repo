// function loadInformation(){
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const loadInformation = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayTools(data.data);
    // console.log(data.data.tools[0].name);
}

const displayTools = tools => {
    console.log(tools);
    const toolContainer = document.getElementById('tool-container');
    toolContainer.textContent = '';

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
        <div class="d-flex justify-content-between align-items-center">
        
        <small class="text-muted"> <span> <ion-icon name="calendar-outline"> </ion-icon></span> ${tool.published_in}</small>
        <button class="btn btn-danger h-1"><ion-icon  name="arrow-forward-circle-outline"></ion-icon></button>
        </div>
      </div>
    </div>`;
    toolContainer.appendChild(toolDiv);
    })
}

document.getElementById('btn-search').addEventListener('click', function(){
  const searchField = document.getElementById('field-search');
  const searchText = searchField.value;
  loadInformation(searchText);
})
loadInformation();
