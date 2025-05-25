function evenSum() {
    const numbers = [];
    let sum = 0;

    for(let i = 0; i <= 100; i++) 
    {
        numbers.push(i);
        if(i%2 == 0)
        {
        sum += i;
        }
    }

    console.log(sum);

    const sumDisplay = document.getElementById('sum');
    sumDisplay.innerHTML = `The sum of even numbers is: ${sum}
    <br>(You can also view it in the console)`;
}