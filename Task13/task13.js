function fetchAge() {
    const name      = document.getElementById('nameField')  .value;
    const apiUrl    = `https://api.agify.io?name=${name}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
            const age = data.age;
            const popupMsg = `Your name is: ${name}\nYour age is: ${age}`;
            window.alert(popupMsg);
        })
        .catch(error => {
            console.error('Error fetching age:', error);
            window.alert('Error fetching age. Please try again.');
        });
}

//function to check if the name entered is valid (if needed)
/* function validate() {
    const name = document.getElementById('nameField').value;

    if (/^[a-zA-Z\s]*$/.test(name) && name.trim() !== '') {
        fetchAge(name);
    } else {
        window.alert('Please enter a valid name using letters.');
    }
} */
