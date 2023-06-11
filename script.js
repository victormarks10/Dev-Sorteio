function rafflenumber() {

    const min = (Math.ceil(document.querySelector(".min").value))
    const max = (Math.floor(document.querySelector(".max").value))


    if (min >= max) {
        alert("O valor minimo precisa ser menor que o valor maximo")
        console.log("min,max")
    } else {
        const result = Math.floor(Math.random() * (max - min) + min);
        alert(result)

    }


}  