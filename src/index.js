// Los Angeles

function updatetime() {
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");

  if (losAngelesDateElement) {
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");
  }

  if (losAngelesTimeElement) {
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("HH:mm:ss A");
  }

  let sydneyDateElement = document.querySelector("#sydney-date");
  let sydneyTimeElement = document.querySelector("#sydney-time");

  if (sydneyDateElement) {
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
  }
  if (sydneyTimeElement) {
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("HH:mm:ss A");
  }

  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  if (tokyoDateElement) {
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do, YYYY");
  }
  if (tokyoTimeElement) {
    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss A");
  }

  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");
  if (parisDateElement) {
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do, YYYY");
  }
  if (parisTimeElement) {
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("HH:mm:ss A");
  }
}

setInterval(updatetime, 1000);

function displayTimeAndCity(event) {
  let limaDate = moment().tz("America/Lima").format("MMMM Do, YYYY");
  let limaTime = moment().tz("America/Lima").format("HH:mm:ss A");
  let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
  let newYorkTime = moment().tz("America/New_York").format("HH:mm:ss A");
  let hamburgDate = moment().tz("Europe/Berlin").format("MMMM Do, YYYY");
  let hamburgTime = moment().tz("Europe/Berlin").format("HH:mm:ss A");
  let newDelhiDate = moment().tz("Asia/Colombo").format("MMMM Do, YYYY");
  let newDelhiTime = moment().tz("Asia/Colombo").format("HH:mm:ss A");
  let londonDate = moment().tz("Europe/London").format("MMMM Do, YYYY");
  let londonTime = moment().tz("Europe/London").format("HH:mm:ss A");

  let currentTimeZone = moment.tz.guess();
  console.log(currentTimeZone);

  let currentDate = moment().tz(currentTimeZone).format("MMMM Do, YYYY");
  let currentTime = moment().tz(currentTimeZone).format("HH:mm:ss A");

  if (event.target.value === "lima") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>Lima, Peru 🦙</h2>
            <p>${limaDate}</p>
          </div>
          <div class="col-6 time">
            <h2>${limaTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }
  if (event.target.value === "new york") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>New York, USA 🍎</h2>
            <p>${newYorkDate}</p>
          </div>
          <div class="col-6 time">
            <h2>${newYorkTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }
  if (event.target.value === "hamburg") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>Hamburg, Germany ⚓</h2>
            <p>${hamburgDate}</p>
          </div>
          <div class="col-6 time">
            <h2 id=>${hamburgTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }
  if (event.target.value === "new delhi") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>New Delhi, India 👳🏾</h2>
            <p id=>${newDelhiDate}</p>
          </div>
          <div class="col-6 time">
            <h2 id=>${newDelhiTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }
  if (event.target.value === "london") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>London, UK 💂🏻</h2>
            <p id=>${londonDate}</p>
          </div>
          <div class="col-6 time">
            <h2 id=>${londonTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }

  if (event.target.value === "current") {
    citiesElement.innerHTML = `<div class="row city-row">
          <div class="col-6">
            <h2>${currentTimeZone}</h2>
            <p id=>${currentDate}</p>
          </div>
          <div class="col-6 time">
            <h2 id=>${currentTime}</h2>
          </div>
          <a href="/"> Back to home<a>
        </div>`;
  }
}

let citiesElement = document.querySelector("#city-rows");
let citySelectElement = document.querySelector("#cities");

citySelectElement.addEventListener("change", displayTimeAndCity);
