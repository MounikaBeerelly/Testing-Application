const axios = require("axios");

const functions = {
    add: (num1,num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const User = { firstName: 'Mounika'}
        User['lastName'] = 'Reddy';
        return User;
    },
    fetchUser: () => 
      axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => "error")
};

module.exports = functions;