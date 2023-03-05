// function loadInformation(){
//     fetch('https://openapi.programming-hero.com/api/ai/tools')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const loadInformation = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    displayTools(data.data);
    // console.log(data.data.tools[0].name);
}

const displayTools = tools =>{
    console.log(tools);
    const toolContainer = document.getElementById('tool-container')
    tools.forEach(tool =>{

    })
}

loadInformation();
