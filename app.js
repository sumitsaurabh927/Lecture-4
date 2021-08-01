var btn = document.querySelector("#btn");
var txt = document.querySelector("#txt")
console.log(btn);
btn.addEventListener("click", function click() {
    console.log("Magic");
    console.log(txt.value)
});

