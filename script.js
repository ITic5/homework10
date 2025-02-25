//HOMEWORK STARTS AT LINE 196

let cities = ["All", "Belgrade", "Rome", "Paris", "Barcelona", "London", "Berlin", "Lisabon", "Moscow"];
let typeOfVehicles = ["Car", "Bicycle", "Motorcycle", "Pickup Truck"];
let numberOfDays = [1, 2, 3, 4, 5, 6, 7];

let vehicles = [
    {
        city: "Belgrade",
        typeOfVehicle: "Car",
        numberOfDays: 6,
        price: 890,
        horsePowers: 190
    },
    {
        city: "Paris",
        typeOfVehicle: "Bicycle",
        numberOfDays: 3,
        price: 60,
        horsePowers: null
    },
    {
        city: "London",
        typeOfVehicle: "Motorcycle",
        numberOfDays: 5,
        price: 250,
        horsePowers: 110
    },
    {
        city: "Berlin",
        typeOfVehicle: "Pickup Truck",
        numberOfDays: 2,
        price: 300,
        horsePowers: 250
    },
    {
        city: "Moscow",
        typeOfVehicle: "Car",
        numberOfDays: 7,
        price: 1050,
        horsePowers: 220
    },
    {
        city: "Paris",
        typeOfVehicle: "Pickup Truck",
        numberOfDays: 4,
        price: 600,
        horsePowers: 275
    },
    {
        city: "London",
        typeOfVehicle: "Bicycle",
        numberOfDays: 1,
        price: 20,
        horsePowers: null
    },
    {
        city: "Berlin",
        typeOfVehicle: "Motorcycle",
        numberOfDays: 6,
        price: 320,
        horsePowers: 130
    },
    {
        city: "Moscow",
        typeOfVehicle: "Bicycle",
        numberOfDays: 5,
        price: 100,
        horsePowers: null
    },
    {
        city: "Belgrade",
        typeOfVehicle: "Pickup Truck",
        numberOfDays: 3,
        price: 450,
        horsePowers: 290
    },
    {
        city: "Paris",
        typeOfVehicle: "Car",
        numberOfDays: 2,
        price: 300,
        horsePowers: 180
    },
    {
        city: "London",
        typeOfVehicle: "Motorcycle",
        numberOfDays: 7,
        price: 350,
        horsePowers: 140
    },
    {
        city: "Berlin",
        typeOfVehicle: "Car",
        numberOfDays: 1,
        price: 150,
        horsePowers: 200
    },
    {
        city: "Moscow",
        typeOfVehicle: "Pickup Truck",
        numberOfDays: 5,
        price: 750,
        horsePowers: 300
    },
    {
        city: "Belgrade",
        typeOfVehicle: "Bicycle",
        numberOfDays: 4,
        price: 80,
        horsePowers: null
    }
];

//Exercise 1
let citySelector = document.querySelector("#city-selector");
for (let city of cities) {
    let cityOption = document.createElement("option");
    citySelector.appendChild(cityOption);
    cityOption.innerText = city;
}

//Exercise 2
let vehicleSelector = document.querySelector("#vehicle-selector");
for (let vehicle of typeOfVehicles) {
    let vehicleOption = document.createElement("option");
    vehicleSelector.appendChild(vehicleOption);
    vehicleOption.innerText = vehicle;
}

let daysSelector = document.querySelector("#days-selector");
for (let days of numberOfDays) {
    let daysOption = document.createElement("option");
    daysSelector.appendChild(daysOption);
    daysOption.innerText = days;
}

//Exercise 3
let selectedCity = null;
let selectedVehicle = null;
let selectedDays = null;


//Homework
let vehiclesList = document.querySelector("#vehicles-list");


for (let vehicle of vehicles) {
    let vehiclesWrapper = document.createElement("div");
    vehiclesWrapper.classList.add("vehicles-wrapper");
    let vehiclesHeading = document.createElement("h2");
    vehiclesHeading.classList.add("vehicles-heading");
    let vehiclesPrice = document.createElement("p");
    vehiclesPrice.classList.add("vehicles-price");
    let vehiclesHorsePower = document.createElement("p");
    vehiclesHorsePower.classList.add("vehicles-horse-power");
    let vehiclesDays = document.createElement("p");
    vehiclesDays.classList.add("vehicles-days");

    vehiclesHeading.innerText = vehicle.city;
    vehiclesPrice.innerText = "Price: $" + vehicle.price;
    if (vehicle.horsePowers > 0) {
        vehiclesHorsePower.innerText = "HP: " + vehicle.horsePowers;
    } else {
        vehiclesHorsePower.innerText = "--";
    }
    vehiclesDays.innerText = "Days booked: " + vehicle.numberOfDays;

    vehiclesWrapper.append(vehiclesHeading, vehiclesPrice, vehiclesHorsePower, vehiclesDays);
    vehiclesList.appendChild(vehiclesWrapper);
}

/**
 * 10. cas
 */
citySelector.addEventListener("change", function (e) {
    selectedCity = e.currentTarget.value;

    let allVehicles = document.getElementsByClassName("vehicles-wrapper");

    for (let v of allVehicles) {
        let city = v.querySelector(".vehicles-heading").textContent;
        v.classList.remove("hidden");
        if (city !== selectedCity && selectedCity !== "All") {
            v.classList.add("hidden");
        }
    }
});
vehicleSelector.addEventListener("change", function (e) {
    selectedVehicle = e.currentTarget.value;
});
daysSelector.addEventListener("change", function (e) {
    selectedDays = e.currentTarget.value;
});

//Homework
let citiesList = document.querySelectorAll("#city-selector option");

for (let city of citiesList) {
    let cityName = city.textContent;
    let cityHasVehicle = false;

    for (let vehicle of vehicles) {
        if (vehicle.city === cityName) {
            cityHasVehicle = true;
            break;
        }
    }

    if (!cityHasVehicle && cityName !== "All") {
        city.disabled = true;
    }
}