// ✅ 1. BASIC FOR LOOP

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        //console.log("5 is best number");
    }

    //console.log(element);
}

// 📝 Output (if uncommented):
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// ...
// 10

// 🔹 'let i = 0' → initialization
// 🔹 'i <= 10' → condition
// 🔹 'i++' → increment
// 🔹 Loop chalta hai jab tak condition true hai


// ❌ console.log(element); (outside loop)
// 🔸 Will throw error, kyunki element block-scoped hai (let se banaya)


// ✅ 2. NESTED FOR LOOP (table print)

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    }
}

// 📝 Outer loop → row wise (1 to 10)
// 📝 Inner loop → column wise (1 to 10)
// 🔸 Total 100 iterations (10x10) if both run


// ✅ 3. FOR LOOP ON ARRAY

let myArray = ["flash", "batman", "superman"];

//console.log(myArray.length); // 🔸 Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// 📝 Output (if uncommented):
// flash
// batman
// superman

// 🔹 Use array.length to loop through all elements


// ✅ 4. BREAK STATEMENT (loop ko turant rok deta hai)

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

// 📝 Output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

// 🔸 break loop ko wahi rok deta hai, jaise hi condition match hoti hai


// ✅ 5. CONTINUE STATEMENT (usi iteration ko skip karta hai)

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}

// 📝 Output:
// Value of i is 1
// ...
// Value of i is 4
// Detected 5
// Value of i is 6
// ...
// Value of i is 20

// 🔸 continue uss iteration ko skip karta hai jahan condition match ho jaye,
// loop aage badhta rehta hai
