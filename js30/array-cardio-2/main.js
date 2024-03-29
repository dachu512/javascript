const people = [
    { name: 'Wes', year: '1988' },
    { name: 'Kait', year: '1986' },
    { name: 'Irv', year: '1970' },
    { name: 'Lux', year: '2015' },
]

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice', id: 542328 }
]

// 1.Some and Every checks.
// At least one person 19?

const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();

    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log({isAdult});

// Is everyone 19?

const allAdults = people.every(function(person){
    const currentYear = (new Date()).getFullYear();

    if(currentYear - person.year >= 19) {
        return true;
    }
});

console.log({allAdults});

// 2. Find the comment with the ID of 823423.

const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
});

console.log(comment);

// 3. Find the comment with this ID, delete the comment with ID od 823423

const index = comments.findIndex(function(comment){
    if(comment.id === 823423) {
        return true;
    }
});

console.log(index);

comments.splice(index, 1);