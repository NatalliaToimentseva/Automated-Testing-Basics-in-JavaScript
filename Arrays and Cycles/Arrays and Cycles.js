{//1. Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

    const movie= ['The Shawshank Redemption ','The Godfather','The Dark Knight','Inception','The Matrix','Seven Samurai',];

    //v1
    for(let name of movie){
        console.log(name);
    };

    //v2
    movie.forEach((item) => console.log(item));
}

{//2. Given an array of car manufacturers, convert the array to a string and back to an array

    let carManufacturers = ['BMW','Audi','Bentley','Cadillac','Chevrolet','Ford','Jeep','Volvo'];

    carManufacturers = carManufacturers.join('; ');
    console.log(carManufacturers);

    carManufacturers = carManufacturers.split('; ');
    console.log(carManufacturers);
}

{//3. Given an array of the names of your friends, add the words hello to each element of the array

    let names = ['James','William','Jack','Logan','John','Ava','Sophia','Mia','Ann'];

    names = names.map(item => 'Hello, ' + item);
    console.log(names);
}

{//4. Convert numeric array to Boolean
    let numericArr = [-1,0,1,2,3,5,8];

    numericArr = numericArr.map(item => Boolean(item));
    console.log(numericArr);
}

{//5. Sort the array [1,6,7,8,3,4,5,6] in descending order

    let numArr = [1,6,7,8,3,4,5,6];

    numArr.sort( (a, b) => b - a );
    console.log(numArr);
}

{//6. Filter array [1,6,7,8,3,4,5,6] by value> 3
    let arr = [1,6,7,8,3,4,5,6];

    let filter = arr.filter(numb => numb > 3);
    console.log(filter);
}

{//7. Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
    let arr = [1,6,7,8,3,4,5,6];
    let number = 6;

    function convert (arr, number) {
        let element = arr.findIndex(element => element == number);
        return `Index = ${element}`;
    }

    console.log(convert(arr,number));
}

{//8. Implement a loop that will print the number 'a' until it is less than 10
    for (let a = 0; a < 10; a++) {
        console.log(a)
    };
}

{//9. Implement a loop that prints prime numbers to the console
    let x = 20;

    nextLoop:
    for (let i = 2; i <= x; i++) {
        for (let y = 2; y < i; y++) { 
            if (i % y == 0) continue nextLoop;
        }
        console.log(i); 
    }
}

{//10. Implement a loop that prints odd numbers to the console
    for (let i = 0; i <= 20; i++) {
        if(i % 2 == 1) {
            console.log(i);
        }
    }
}