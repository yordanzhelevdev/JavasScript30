 window.onload = () => {
     const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

   

    // Regular
    console.log('hello');
    
    // Interpolated
    console.log('This is test %s', 'interpoladated log')
    
    // Styled
    console.log('%cI am styled text', 'background-color: pink; color: black')
    
    // warning!
    console.warn('This is warning console message');   

    // Error :|
    console.error('This is console error message');

    // Info
    console.info('This is console info message');

    // Testing
    //Note: assert only fires when its wrong
    console.assert(2 === 1, 'This is wrong');

    // clearing
     console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);

    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years`);
        console.groupEnd();
    });


    // counting
    console.count('Yordan');
    console.count('Yordan');
    console.count('Yordan');
    console.count('Yordan');
    console.count('Yordan');
    console.count('PPPPPPPPPPPPPEEEEe');
    console.count('PPPPPPPPPPPPPEEEEe');
    console.count('PPPPPPPPPPPPPEEEEe');
    console.count('PPPPPPPPPPPPPEEEEe');
    console.count('Yordan');
    console.count('Yordan');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/yordanzhelevdev')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
 }

