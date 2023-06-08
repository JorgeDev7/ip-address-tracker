const inputIp = document.querySelector('#inputIp');
const form = document.querySelector('#formIp');

const ipName = document.querySelector('#ip');
const locationName = document.querySelector('#location');
const countrySpan = document.querySelector('#country');
const postalCodeSpan = document.querySelector('#postalCode');
const timezoneNumberSpan = document.querySelector('.timezoneNumber');
const ispName = document.querySelector('#isp');

const iconLocation = document.querySelector('.iconLoc');

form.addEventListener('submit', llamadoAPI)

async function llamadoAPI(e) {
    e.preventDefault();

    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_fRVKqCiiaP6mQtbCiDLO2cyR96Dp5&ipAddress=${inputIp.value}`)
    const res = await response.json();

    let map = L.map('map').setView([res?.location?.lat, res?.location?.lng], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: `&copy; <a href="${res?.as?.domain}">${res?.as?.name}</a>`
    }).addTo(map);

    if (inputIp.value !== "") {
        iconLocation.classList.remove('hidden')
    }

    inputIp.value = "";

    ipName.textContent = res.ip || "";
    locationName.textContent = res.location.city + "," || "";
    countrySpan.textContent = res.location.country || "";
    postalCodeSpan.textContent = res.location.postalCode || "";
    timezoneNumberSpan.textContent = "UTC " + res.location.timezone || "";
    ispName.textContent = res.isp || "";
}