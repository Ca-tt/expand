let users = [
    {
        name: 'Damir',
        age: 16,
    },
    {
        name: 'Alex',
        age: 29,
    }
]

function ageRestriction(age) {
    return age < 18;
}

let restrictedUsers = users.filter(user => ageRestriction(user.age));
console.log('restrictedUsers: ', restrictedUsers);
