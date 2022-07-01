function increment() {
    document.getElementById("ppl").innerText++;
}

function save_ppl() {

    if (document.getElementById("ppl").innerText>0) {
        document.getElementById("prev").innerText+=" "+ document.getElementById("ppl").innerHTML+"-";
        increment_reset();
        return;
    } else {
        alert("No one has entered yet!")
    }
    
}

function increment_reset() {
    document.getElementById("ppl").innerText=0;
}