let input = document.querySelector('input')
let button = document.querySelector('button')
let qrcode = document.getElementById('#qrcode')



input.addEventListener('focus', () => {

    if (qrcode !== null) {
        location.reload()
    }

})
button.addEventListener("click", () => {

    if (input.value == "") {
        alert("Please enter an URL or text")
    } else {
        generateqr()
    }
})


function generateqr() {
    qrcode = new QRCode("qrcode",
        `${input.value}`);
}