//1)Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  var countriesData = JSON.parse(this.response);

  const asia = countriesData.filter((a) => {
    if (a.region === "Asia") {
      return a.name;
    }
  });

  console.log(asia);
};

//========================================================================================================>

//2)Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  var countriesData = JSON.parse(this.response);

  const populate = countriesData.filter((element) => {
    return element.population < 200000;
  });

  console.log(populate);
};

//=========================================================================================================>

// 3)Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  var countriesData = JSON.parse(this.response);

  countriesData.forEach((element) => {
    console.log(
      `Name: ${element.name}`,
      `Capital: ${element.capital}`,
      `Flag: ${element.flag}`
    );
  });
};

//==========================================================================================================>

// 4)Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  var countriesData = JSON.parse(this.response);

  const population = countriesData.reduce((acc, element) => {
    return acc + element.population;
    0;
  });

  console.log(`Population:${population}`);
};

//==========================================================================================================>

// 5)Print the country which use US Dollars as currency

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", "true");

request.send();

request.onload = function () {
  var data = JSON.parse(this.response);

  for (i = 0; i < data.length; i++) {
    if (data[i].currencies[0].code === "USD") {
      console.log("name:", data[i].name, "==>", data[i].currencies[0].code);
    }
  }
};

//===========================
