let n = document.querySelector('.column');
let txt = document.querySelector('.text');
let output = document.querySelector('.output');
let selectedItems = [];
function generate() {
    let items = txt.value.split('\n');
    let c = n.value;
    let tData = "";
    tData += `<table class='data-table rtl'>`
    for (var i = 0; i < items.length; i++) {
        if (c == n.value || c === 0) {
            tData += `<tr>`
        }
        tData += `<td id="${i + 1}" onclick="highlightTd(${i + 1},'${items[i]}')"> <span>${i + 1}</span> ${items[i]} </td>`
        if (c == 1) {
            tData += `</tr>`
        }
        c--;
        if (c == 0)
            c = n.value;
    };
    output.innerHTML += `${tData}</table>`
}

function highlightTd(id,item) {
    document.getElementById(id).classList.toggle('active');
    let obj = selectedItems.find(v=>v.id === id);
    document.getElementById(id).classList.contains('active')? selectedItems.push({id,item}): selectedItems.pop(obj);
    document.querySelector('.selected .selected-count').innerText = selectedItems.length;    
}

function selectAll() {
    document.querySelectorAll('table td').forEach(t => t.classList.add('active'));
}
function deselectAll() {
    document.querySelectorAll('table td').forEach(t => t.classList.remove('active'));
}
function invertSelection() {
    document.querySelectorAll('table td').forEach(t => t.classList.toggle('active'));
}
function copyValues() {
    console.log(selectedItems)    
    val = (selectedItems.map(a => a.item));
    navigator.clipboard.writeText(val);
}

function clearFields() {
    output.innerHTML = n.value = txt.value = '';
}

function toggleTableDirection() {    
    document.querySelectorAll('.data-table').forEach(t => t.classList.toggle('rtl'));
}

const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);