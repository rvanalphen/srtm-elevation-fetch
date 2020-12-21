const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const coords = {
        lat,
        lon,
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coords)
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
});


button.addEventListener('click', async event => {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const source = document.getElementById('source').value;
    const api_url = `elevation/${lat},${lon},${source}`
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json);

});