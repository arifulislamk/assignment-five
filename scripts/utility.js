function setBackgroundColorById(elmentsId) {
    const elments = document.getElementById(elmentsId);
    elments.style.backgroundColor = '#1DD100';
}
function getValueById(elmentsId) {
    const elments = document.getElementById(elmentsId);
    const text = elments.innerText;
    const value = parseInt(text);
    return value;
}
function setTextById(elmentsId, value) {
    const elments = document.getElementById(elmentsId);
    elments.innerText = value;
}
function makeTable(text) {
    const td1 = document.createElement('td');
    td1.innerText = text;
    td1.classList.add('lg:px-12', 'px-3', 'py-2');

    const td2 = document.createElement('td');
    td2.innerText = 'Economoy';
    td2.classList.add('lg:px-12', 'px-3', 'py-2');

    const td3 = document.createElement('td');
    td3.innerText = 550;
    td3.classList.add('lg:px-12', 'px-3', 'py-2');

    const tr = document.createElement('tr');
    tr.classList.add('lg:px-12', 'py-3')
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    const tableelement = document.getElementById('table');
    tableelement.appendChild(tr);
}

