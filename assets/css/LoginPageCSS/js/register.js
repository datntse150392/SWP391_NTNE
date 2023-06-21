var changetype = document.querySelector('.changetype')

var changebutton = document.querySelector('.icon-container a')


console.log(changebutton)
changebutton.onclick = function () {
    if (changetype.getAttribute("type") === "text") {
        changetype.setAttribute("type", "password")
        changebutton.innerHTML = "<i class='fa-solid fa-eye'></i>"

    } else {
        changetype.setAttribute("type", "text")
        changebutton.innerHTML = "<i class='fa-solid fa-eye-slash'></i>"

    }
}