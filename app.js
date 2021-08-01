var btn = document.querySelector("#btn");
var txt = document.querySelector("#txt")
var out=document.querySelector("#output")
console.log(btn);
btn.addEventListener("click", function click() {
    console.log("Magic");
    // console.log(txt.value);
    out.innerText=txt.value;
});

