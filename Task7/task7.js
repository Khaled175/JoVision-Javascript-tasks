function currentTime() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    const sec = String(now.getSeconds()).padStart(2, '0');

    const timeString = hrs + ':' + min + ':' + sec;

    document.getElementById('clock').textContent = timeString;
}

setInterval(currentTime, 1000);

currentTime();
