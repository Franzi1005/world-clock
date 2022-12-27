// Los Angeles

function updatetime() {
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do, YYYY");

  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("HH:mm:ss A");

  let sydneyDateElement = document.querySelector("#sydney-date");
  let sydneyTimeElement = document.querySelector("#sydney-time");

  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do, YYYY");

  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss A");

  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTimeElement = document.querySelector("#tokyo-time");

  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("MMMM Do, YYYY");

  tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("HH:mm:ss A");

  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do, YYYY");

  parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss A");
}

setInterval(updatetime, 1000);
