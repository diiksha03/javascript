// 🔹 STEP 1: Same Promise banaya jaisa pehle tha
const mypromise = new Promise(function(resolve, reject) {
    let success = true; // ✅ isko false karke error bhi test kar sakti ho

    if (success) {
        resolve("✅ Kaam ho gya hai");
    } else {
        reject("❌ Kaam fail ho gya hai");
    }
});


// 🔹 STEP 2: async function banate hain jisme hum await use kar sakein
async function handlePromise() {
    try {
        // 🔸 await promise ka result milne ka intezaar karega
        const result1 = await mypromise;
        console.log("🟢 Step 1:", result1);

        const result2 = "🔄 Step 2 is completed";
        console.log("🟢 Step 2:", result2);

        const result3 = "✅ Step 3 is completed";
        console.log("🟢 Step 3:", result3);
    } 
    catch (error) {
        // 🔸 Agar promise reject hota hai toh ye block chalega
        console.log("🔴 Error catch block mein aayi:", error);
    } 
    finally {
        // 🔸 Ye block hamesha chalega, chahe try chale ya catch
        console.log("🚩 Process completed - finally block (async version)");
    }
}

// 🔹 STEP 3: function call karna zaroori hai warna chalega hi nahi
handlePromise();

/*
🔹 async/await Summary 🔹

📌 async function:
    - Function ko async banana zaroori hai agar tum uske andar await lagana chahti ho
    - async function hamesha Promise return karta hai

📌 await:
    - Promise ka result milne tak rukta hai
    - Code ko easy-to-read banata hai

📌 try/catch:
    - Errors ko handle karta hai
    - catch tab chalega jab koi await waala kaam fail ho jaaye

📌 finally:
    - Har haal mein chalega (cleanup, UI hide karna etc.)

💡 Tip: async/await ka use tab karo jab tumhare paas multiple steps ho jo sequentially chalne chahiye.
*/





  // 🔸 Jab bhi koi function async hota hai, wo hamesha promise return karta hai
