let xhr = new XMLHttpRequest();

xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function() {
    if (xhr.status >=200 && xhr.status < 300) {
        let country = JSON.parse(xhr.responseText);
     

        for (let i = 0; i < country.length; i++) {
            console.log(`
            ${country[i].name}'s flag: ${country[i].flag}`);
        }
    }
    else {
        console.log("Error: " + xhr.status);
    }

}

xhr.send();