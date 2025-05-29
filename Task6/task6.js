let numbers = Array.from({ length: 101 }, (_, i) => i);

function removeDivisibleBy3() {
    let filteredNumbers = numbers.filter(num => num % 3 !== 0);
    console.log('Numbers after removing divisible by 3:', filteredNumbers);
}

function add100to150() {
    let numbers100to150 = Array.from({ length: 51 }, (_, i) => i + 100);
    let combinedArray = numbers.concat(numbers100to150);
    console.log('Numbers from 0-100 and 100-150 combined:', combinedArray);
}

function add3toEachMember() {
    let modifiedNumbers = numbers.map(num => num + 3);
    console.log('Numbers after adding 3 to each member:', modifiedNumbers);
}

function printMembers2040() {
    let selectedMembers = numbers.slice(20, 41);
    console.log('Members from index 20 to 40:', selectedMembers);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleAndSort() {
    shuffleArray(numbers);
    console.log('Shuffled numbers:', numbers);

    numbers.sort((a, b) => b - a);
    console.log('Sorted in descending order:', numbers);
}