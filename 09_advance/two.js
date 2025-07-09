// 🔹 STEP 1: Promise create kiya
// Promise ek object hota hai jo future mein complete hone wale async kaam ka vada karta hai
const mypromise = new Promise(function(resolve, reject) {

    let success = false;  // 🔸 is value ko true/false karke check kar sakte ho

    // Agar kaam successful hai toh promise resolve hoga
    if(success){
        resolve("✅ Kaam ho gya hai");
    }
    // Agar kaam fail ho gaya toh promise reject hoga
    else{
        reject("❌ Kaam fail ho gya hai");
    }

    // 📌 Promise ke andar hamesha ya toh resolve() ya reject() call hota hai
});


// 🔹 STEP 2: Promise consume karna
// .then() => jab promise resolve ho (success case)
// .catch() => jab promise reject ho (error case)
// .finally() => hamesha chalega, chahe success ho ya fail

mypromise
  .then(function(resolve) {
      // 🔸 pehla .then tab chalega jab promise resolve hoga
      console.log("🟢 Step 1 is here:", resolve);
      return "🔄 Step 2 is completed";
  })
  .then(function(step2) {
      // 🔸 ye dusra .then previous then ka return value receive karega
      console.log(step2);
      return "✅ Step 3 is completed";
  })
  .then(function(step3) {
      // 🔸 teesra .then chaining ka third step hai
      console.log(step3);
  })
  .catch(function(error) {
      // 🔸 agar promise reject ho gaya, ya kahin bhi error aayi toh ye chalega
      console.log("🔴 Error aa gyi hai:", error);
  })
  .finally(function() {
      // 🔸 ye block hamesha chalega — success ya fail dono mein
      console.log("🚩 Process completed - finally block always runs");
  });

/*
🔹 PROMISE SUMMARY 🔹

📌 Promise Syntax:
    const myPromise = new Promise(function(resolve, reject) {
        // async task
        if(success) {
            resolve("Data");
        } else {
            reject("Error");
        }
    });

📌 Kab use karein?
    - Jab koi kaam time le raha ho (e.g., API call, setTimeout, file read/write)
    - Asynchronous kaam ko better manage karne ke liye

📌 Important Methods:
    - .then()    => Jab promise resolve ho (success response)
    - .catch()   => Jab promise reject ho (error handle)
    - .finally() => Cleanup ya last statement (hamesha chalega)

📌 Use-case Examples:
    - User login check (success/fail)
    - API se data lena
    - Image ya video load hona
    - Delay ya timer lagana
*/

