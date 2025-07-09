// setTimeout(callbackFunction, delayInMilliseconds);// ek babar koi kaam delay ke baad  kart ahai
console.log("start")
setTimeout(function(){
    console.log("hello after 2 sec");
    
},2000)
console.log("end");


//@@@@@@@@@@@@@@@@@@@@@@@@@@ setInterval() @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// setInterval() baar-baar same delay ke baad function chalata hai — jab tak tum ise band nahi karti.

// setInterval(callbackFunction, intervalInMilliseconds);

// setInterval(() => {
//     console.log("repaeting every 1 sec ");
    
    
// }, 1000);


//@@@@@@@@@@@@@@@@@@@@@@@@  clearInterval() @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2

// : Kabhi-kabhi humein us interval ko band karna padta hai.

// const intervalID = setInterval(callback, delay);
// clearInterval(intervalID); // Stop the interval

let count = 1;

const id = setInterval(() => {
  console.log("Repeating... count:", count);
  count++;

  if (count > 5) {
    clearInterval(id);
    console.log("Interval stopped!");
  }
}, 1000);



//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@clearTimeout()@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@22

// clearTimeout(timeoutID);//syntax

const timeoutID = setTimeout(() => {
  console.log("Ye message nahi aayega 😌");
}, 5000);

clearTimeout(timeoutID); // Isne upar wale timeout ko cancel kar diya


