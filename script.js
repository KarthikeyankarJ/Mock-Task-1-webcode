
async function fetchdata() {
  try{
    const response = await fetch("https://api.openbrewerydb.org/v1/breweries")
    const data = await response.json();
    data.forEach(element => {
      const breweriesdata = {
        ...element,
        name: element.name,
        address: element.address_1,
        website: element.website_url,
        phone:element.phone
      }
      breweriesfinaldata(breweriesdata)
    });
  }
  catch (error){
    console.log(error)
    document.body.innerHTML += `<h1>Page Not Found Error 404</h1>`
  }
}
function breweriesfinaldata(element){
  document.body.innerHTML += `
  <div class="body">
  <div class="container"  id="name2">
  <div class="position1">
  <div class="img"><img src="123.png"></div>
  <h4 class="name1">${element.name}</h4>
  <div class="shopsize">
  <div class="icon"><span class="material-symbols-outlined">
  local_convenience_store
  </span></div>
  <div class="headline"><h4>${element.brewery_type}</h4></div>
  </div>
  
  </div>
  


  <div class="info">
  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  home
  </span></div>
  <div class="headline"><h5>${element.address}</h5></div>
  </div>

  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  alternate_email
  </span></div>
  <div class="headline"><h5>${element.website_url}</h5></div>
  </div>


  <div class="topic">
  <div class="icon"><span class="material-symbols-outlined">
  call
  </span></div>
  <div class="headline"><h5>${element.phone}</h5></div>
  </div>
  </div>
  </div>
  </div>
  `
}
fetchdata()