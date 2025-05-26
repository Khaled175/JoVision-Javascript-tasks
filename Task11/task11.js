function getIP() {
    fetch('https://api.ipify.org/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch IP');
            } 
            return response.text()
        })
        .then(data => {getIpBtn.textContent = data;})
        .catch(error => {
            alert(error.message)
        });
}
