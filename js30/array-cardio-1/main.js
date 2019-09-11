const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 
                'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
                'Bellow, Saul', 'Benchley, Robert', 'Beneson, Peter', 'Ben-Gurion, David',
                'Benjamin Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas'];

// 1.Filter the list of inventors for those who were born in 1500's.

const fifteen = inventors.filter(function(inventor){
    if(inventor.year >=1500 && inventor.year < 1600){
        return true;
    } else {
        return false;
    }
});

console.table(fifteen);

// 2. Give array of inventors first and last names.

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);


// 3. Sort inventors by birthday, oldest to youngest.

const ordered = inventors.sort(function(firstPerson, secendPerson){
    if(firstPerson.year > secendPerson.year){
        return 1;
    } else {
        return -1
    }
});

console.table(ordered);


// 4. How many years  did all inventors live?

const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort investors by years lived.

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if(lastGuy > nextGuy){
        return - 1;
    } else {
        return 1;
    }
});

console.table(oldest);

// 6. Create a list of Boulvards in Paris that contain 'de' anywhere in the name.
// https://en.wikipedia.org/wiki/Category:Boulvard_in_Paris

// 7.Sort exercise - sum up the people alphabetically by last name.

const alpha = people.sort(function(lastOne, nextOne) {
    const[aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce exercise.
// Sum up yhe instances of ech oh these.

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);