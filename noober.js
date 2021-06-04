window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create a variable for the ride data
  let rideData = json

  // Loop through the ride data 
  for (i=0; i < rideData.length; i++){

    // Create a variable to store ride type in memory
    let rideType 
    if (rideData[i].purpleRequested==true){
      rideType = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-purple-500 bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span class="text-purple-500">Noober Purple</span>
      </h1>
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
      `
    } else if (rideData[i].numberOfPassengers > 3){
      rideType = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-grya-900 bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober<span class="text font-bold">XL</span></span>
      </h1>
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      `
    } else {
      rideType = `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
      </h1>
      <div class="border-4 border-blue-500 p-4 my-4 text-left">
      `
    } 

    // Create variables to store passenger data to memory
    let passengerName = `${rideData[i].passengerDetails.first} ${rideData[i].passengerDetails.last}`
    let passengerPhone = rideData[i].passengerDetails.phoneNumber

    // Create variable to store # of passenger in memory for looping later
    let numberOfPassengers = rideData[i].numberOfPassengers

    // Create variables to store pickup details in memory
    let pickupLocationLine1 = rideData[i].pickupLocation.address
    let pickupLocationLine2 = `${rideData[i].pickupLocation.city}, ${rideData[i].pickupLocation.state} ${rideData[i].pickupLocation.zip}`
    
    // Create variables to store drop details in memory
    let dropLocationLine1 = rideData[i].dropoffLocation.address
    let dropLocationLine2 = `${rideData[i].dropoffLocation.city}, ${rideData[i].dropoffLocation.state} ${rideData[i].dropoffLocation.zip}`

    // Modifying rides element using HTML directly, using the data from rideData
    let ridesData= document.querySelector(`.rides`)
    ridesData.insertAdjacentHTML('beforeend',`
    ${rideType}
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupLocationLine1}</p>
          <p>${pickupLocationLine2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropLocationLine1}</p>
          <p>${dropLocationLine2}</p>
        </div>
      </div>
    </div>
    `
    ) 
  }
})