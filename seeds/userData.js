const faker = require("faker");

const users = [];

for (var i = 0; i < 10; i++) {
    const fakee = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthday: faker.date.past(),
        image: faker.internet.avatar()
    };

    users.push (fakee)
}

module.exports = users