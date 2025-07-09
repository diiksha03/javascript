let count=0;
const id=setInterval(() => {
    console.log("💖 Hello Diksha!");
    count++;
    if(count===6){
        clearInterval(id)
        console.log("done with repeating");
    }
    
    
}, 1500);