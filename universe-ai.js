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
    const toolContainer = document.getElementById('tool-container')
    tools.forEach(tool => {
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML = `
    <div class="card h-100">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        console.log(tool.features)
        <p class="card-text">${tool.features}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>`;
    toolContainer.appendChild(toolDiv);
    })
}

loadInformation();
