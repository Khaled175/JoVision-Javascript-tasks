function submitBtn() {
    const name      = document.getElementById('nameField')  .value;
    const age       = document.getElementById('ageField')   .value;
    const timeStamp = new Date().toLocaleString();

    const formData =
    {
        "name"      :     name,
        "age"       :      age,
        "timestamp" :timeStamp
    };

    const {name:usrName, age:usrAge, timestamp:usrTimestamp} = formData;

    const popupMsg = `Your name is: ${usrName}\nYour age is: ${usrAge}\n${usrTimestamp}`;

    window.alert(popupMsg);
}
