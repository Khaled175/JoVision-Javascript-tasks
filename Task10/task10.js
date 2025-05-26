function getIP() {
    fetch('https://api.ipify.org/')
        .then(response => response.text())
        .then(data => {getIpBtn.textContent = data;})
        .catch(error => console.error('It seems there is a problem fetching the IP:', error));
}
