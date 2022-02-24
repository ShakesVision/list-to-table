let n = document.querySelector('.column');
let txt = document.querySelector('.text');
let output = document.querySelector('.output');
function generate() {
    let items = txt.value.split('\n');
    let c = n.value;
    let tData = "";
    tData += `<table>`
    for (let i = 0; i < items.length; i++) {
        if (c == n.value || c === 0) {
            tData += `<tr>`
        }
        tData += `<td> <span>${i+1}</span> ${items[i]} </td>`
        if (c == 1) {
            tData += `</tr>`
        }
        c--;
        if (c == 0)
            c = n.value;
    };
    console.log(tData);
    output.innerHTML += `${tData}</table>`
}

function clearFields() {
    output.innerHTML = n.value = txt.value = '';
}

const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);