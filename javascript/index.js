function updateTime() {
    //Los Angeles -
    let losAngelesElement = document.querySelector("#los-angeles");

    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz('America/Los_Angeles');

        losAngelesDateElement.innerHTML = moment().format('MMMM Do YYYY');//"August 15th 2022";
        // This option is also ok
        // losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss')} <small>${losAngelesTime.format("A")}</small>`;
        losAngelesTimeElement.innerHTML = losAngelesTime.format('h:mm:ss [<small>]A[</small>] ');
    }
    //Paris
    let parisElement = document.querySelector("#paris");

    if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz('Europe/Paris');

        parisDateElement.innerHTML = moment().format('MMMM Do YYYY');//"August 15th 2022";
        // This option is also ok
        // parisTimeElement.innerHTML = `${parisTime.format('h:mm:ss')} <small>${parisTime.format("A")}</small>`;
        parisTimeElement.innerHTML = parisTime.format('h:mm:ss [<small>]A[</small>] ');
    }

};

updateTime();
setInterval(updateTime, 1000);

// Update City
function updateCity(event) {
    let cityTimeZone = event.target.value;

    if (cityTimeZone === 'current') {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split('/')[1];
    let cityTime = moment().tz(cityTimeZone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
          <div class="city-date">
            <div style="display: flex">
              <h2>${cityName}</h2>
            </div>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">Go back</a>
    `}

// Select a City 
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)


