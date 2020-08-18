const weatherForm = document.querySelector(`form`);
const search = document.querySelector(`input`);
const weatherOne = document.querySelector(`#weather-1`);
const weatherTwo = document.querySelector(`#weather-2`);

weatherForm.addEventListener(`submit`, (e) => {
    e.preventDefault();

    weatherOne.textContent = `Loading...`;
    weatherTwo.textContent = ``;

    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return weatherOne.textContent = data.error;
            }

            weatherOne.textContent = data.location;
            weatherTwo.textContent = data.forecast;
        });
    });
});