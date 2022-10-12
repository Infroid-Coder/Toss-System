function Toss(){
    let coin = document.getElementById("coin"); 
    let op = document.getElementById("toss-op");
    let num = Math.floor(Math.random() * 7);
    
    // op.style.animationName = "coinflip";
    // op.style.animationDuration = "2s";

        if (num <= 3){
            op.style.animationName = "coinflip";
            op.style.animationDuration = "0.5s";
            op.innerHTML = "Heads";
            op.style.padding = "70px 50px"
        } else {
            op.style.animationName = "coinflip";
            op.style.animationDuration = "0.5s";
            op.innerHTML = "Tails";
            op.style.padding = "70px 60px"
        }
        setTimeout(() => {
            op.style.animationName = "";
        }, 2000);
}