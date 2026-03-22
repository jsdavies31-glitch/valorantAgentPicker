const button = document.querySelector("button")
const container = document.getElementById('outputDiv');


button.addEventListener("click",pickAgent)

function pickAgent(onclick){
    console.log('button pressed')
    sendRequest()
}

async function sendRequest(){
    
    try{
    const response  = await fetch(`https://valorant-api.com/v1/agents`)

   const {data} =  await response.json()
   console.log(data)
   
   writeResult(data)

    } catch (err){
        console.error("error sending request", err)
    }
    
   
}

function writeResult(data){
   container.innerHTML =""
   let ids =[]

   let randID = getRandomInt(data.length)

   const {uuid,displayName,abilities,description,displayIconSmall,role} = data[randID]
   console.log(uuid,displayName,abilities)

  let html = `
  <div id= response>
  <center><img src="${displayIconSmall}" /></center>
  <p class="body" style="font-family: sans-serif; color:white; text-align:center">
  Your chosen Agent is: <b>${displayName} </b> <br> 
  Your role is: <b> ${role.displayName} </b></p>

   ${abilities.map(row => row.displayIcon ?
     `<img src=${row?.displayIcon} width="40"height="40" class="abilities"></img>`:"").join('')} 

</div>
    <style> 
      .abilities{
        filter: invert(55%) sepia(74%) saturate(0%) hue-rotate(177deg) brightness(79%) contrast(76%);
        padding-right: 15px;
      }
      </style>`
    container.innerHTML = html
    container.classList.add("show")
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}