    // start with strings, numbers and booleans
    // let age = 50;
    // let age2 = age;
    // console.log(age, age2);
    // age = 660;
    // console.log(age, age2);

    // let name = 'Yordan';
    // let name2 = 'Petko';
    // console.log(name, name2);
    // name = 'Yori';
    // console.log(name, name2);
    // name2 = 'Jelio';
    // console.log(name, name2);
    

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.

    // You might think we can just do something like this:
    const team = players;
    // however what happens when we update that array?
    team[0] = 'Wessy';
    console.log(team,players);

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    const team3 = [].concat(players);

    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread
    const team4 = [...players];

    const team5 = Array.from(players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    // const captain = person;
    // person.age = 55;
    // console.log(captain, person);

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {age: 50});
    console.log(person, cap2);

    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    console.log(cap3);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const personal = {
        name: 'Yordan',
        age: 2,
        social: {
            facebook: 'Yordan Zhelev',
            twitter: 'test'
        }
    }

    console.clear();
    
    const dev = Object.assign({}, personal);
    const dev2 = JSON.parse(JSON.stringify(personal));
    


