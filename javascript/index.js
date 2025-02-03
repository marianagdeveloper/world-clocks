function updateTime() {
    //Los Angeles -
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz('America/Los_Angeles');

    losAngelesDateElement.innerHTML = moment().format('MMMM Do YYYY');//"August 15th 2022";
    // losAngelesTimeElement.innerHTML = `${losAngelesTime.format('h:mm:ss')} <small>${losAngelesTime.format("A")}</small>`;
    losAngelesTimeElement.innerHTML = losAngelesTime.format('h:mm:ss [<small>]A[</small>] ');

    //Paris
    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz('Europe/Paris');

    parisDateElement.innerHTML = moment().format('MMMM Do YYYY');//"August 15th 2022";
    // parisTimeElement.innerHTML = `${parisTime.format('h:mm:ss')} <small>${parisTime.format("A")}</small>`;
    parisTimeElement.innerHTML = parisTime.format('h:mm:ss [<small>]A[</small>] ');
};

updateTime();
setInterval(updateTime, 1000);


