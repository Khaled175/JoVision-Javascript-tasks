function makeSum() {
    const numbers = [];
    let sum = 0;

    for(let i = 0; i <= 100; i++) 
    {
        numbers.push(i);
        sum += i;
    }

    console.log(sum);

    const sumDisplay = document.getElementById('sum');
    sumDisplay.innerHTML = `The sum is: ${sum}<br>(You can also view it in the console)`;
}