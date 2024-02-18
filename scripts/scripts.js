let count = 0;
let selected = 0;
const alltickets = document.getElementsByClassName('seats');
for (const seat of alltickets) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        if (count === 2) {
            const applybtn = document.getElementById('apply-btn');
            applybtn.removeAttribute('disabled');
            applybtn.classList.add('bg-bg-green')
        }
        if (count < 5) {
            console.log(e.target.innerText)
            const clickedSeat = e.target.innerText;
            console.log(clickedSeat, 'clieked')
            setBackgroundColorById(clickedSeat);

            const seatValue = getValueById('seat-left');
            const avaleavail = seatValue - 1;
            setTextById('seat-left', avaleavail);

            const selectedSeat = getValueById('selected-seat');
            selected = selected + 1;
            setTextById('selected-seat', selected);
            setBackgroundColorById('selected-seat')

            makeTable(clickedSeat);

            const total = getValueById('total-price')
            const newtotal = total + 550;
            setTextById('total-price', newtotal)

            const grandtotal = getValueById('grand-total');
            let newGarndtotal = grandtotal + 550;
            setTextById('grand-total', newGarndtotal
            )
        }
    })
}

function apply() {
    const inputText = document.getElementById('cupon-input').value;
    if (inputText === 'NEW15') {
        const grand = document.getElementById('grand-total').innerText;
        const discount = grand / 100 * 15;
        const updateGrand = grand - discount;
        setTextById('grand-total', updateGrand);
        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('cupon-input');
        input.classList.add('hidden');
    }
    else if (inputText === 'Couple 20') {
        const grand = document.getElementById('grand-total').innerText;
        const discount = grand / 100 * 20;
        const updateGrand = grand - discount;
        setTextById('grand-total', updateGrand);
        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('cupon-input');
        input.classList.add('hidden');
    }
}
function succeesful() {
    const numinputText = document.getElementById('numberid').value;
    const naminputText = document.getElementById('nameid').value;
    if (naminputText.length > 0 && numinputText.length > 0) {
        const hiddendiv = document.getElementById('succeesful');
        hiddendiv.classList.remove('hidden');
        const purchase = document.getElementById('purchase');
        purchase.classList.add('hidden');
        const Cuppon = document.getElementById('Cuppon');
        Cuppon.classList.add('hidden');
        const header = document.getElementById('header');
        header.classList.add('hidden')
    }
}
function continued() {
    const hiddendiv = document.getElementById('succeesful');
    hiddendiv.classList.add('hidden');
    const purchase = document.getElementById('purchase');
    purchase.classList.remove('hidden');
    const Cuppon = document.getElementById('Cuppon');
    Cuppon.classList.remove('hidden');
    const header = document.getElementById('header');
    header.classList.remove('hidden')
}




