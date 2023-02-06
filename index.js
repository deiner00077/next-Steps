const progress = document.getElementById("progress")
console.log(progress);
let siguientes = document.getElementById("siguiente")
console.log(siguientes);
let anterior = document.getElementById("anterior")
console.log(anterior);
const circulo = document.querySelectorAll(".circulo")
console.log(circulo);

let currentActive = 1

siguientes.addEventListener("click", ()=>{
    currentActive++

    if(currentActive > circulo.length){
        currentActive = circulo.length
    }
    update()
})

anterior.addEventListener("click", ()=>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    update()
})
function update() {
    circulo.forEach((circulo, i) => {
        if( i <= currentActive){
            circulo.classList.add("activo")
        } else{
            circulo.classList.remove("activo")
        }
    })

    let actives = document.querySelectorAll(".activo")
    console.log(actives);

    progress.style.width = (actives.length - 1) /
    (circulo.length - 1) * 100 + "%"

    if(currentActive ===1 ){
        anterior.disabled = true;
    } else if(currentActive === circulo.length){
        siguientes.disabled = true
    } else{
        anterior.desable = false;
        anterior.disabled = false;
    }


   
}
