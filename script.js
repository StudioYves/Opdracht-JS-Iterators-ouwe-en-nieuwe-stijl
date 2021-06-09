// OUDE STIJL: LOOPS >> WHILE LOOP

// let colors = ['yellow', 'blue', 'red', 'orange'];
// var i = 0;
   
//     while (i < 4) {
//         console.log(colors[i]);
//         i++;     
// };

// // OUDE STIJL: LOOPS >> FOR LOOP

// for (i = 0; i < 4; i++) {
//     console.log(colors[i]);
// }


// //NIEUWE STIJL: ARRAY METHODS


// colors.forEach(element => console.log(element));

//VRAGEN

//Mijn for loop neemt 3 regels in beslag

//Mijn while loop neemt 5 regels in beslag

//Mijn forEach method neemt 1 regel in beslag

//Minder gevoelig voor typfouten, want minder typwerk. Daardoor ook minder foutgevoelig.
//De array method heeft ook een betere leesbaarheid, want is logischer opgebouwd.

const person = {
        name: 'Piet',
        age: 38,
        gender: 'male',
        eyes: 'brown',
        length: 1.75
        };
        

        for (var property in person) {
            if (person.hasOwnProperty(property)) {
                console.log(`${property}: ${person[property]}`);
            }
          };
    

//Ja, je bent ook hier aan het itereren, want je doet herhaaldelijk hetzelfde.




