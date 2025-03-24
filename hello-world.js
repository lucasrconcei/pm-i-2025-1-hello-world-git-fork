const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.addEventListener("keyup",function (evt) {
    
    if (nameInput.value === '' ) {
        messageP.innerText = '';
    }
    else {

        if (evt.keyCode == 13)
            helloWorld();
    }
})

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
        nameInput.value = "";
    }
})

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

function limparCampos() {
    nameInput.value = "";
    messageP.innerText = '';
}