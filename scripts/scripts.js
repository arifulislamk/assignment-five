let count = 0;
let selected = 0;
const alltickets = document.getElementsByClassName('seats');
for (const seat of alltickets) {
    seat.addEventListener('click', function (e) {
        count = count + 1;
        if (count === 4) {
            const applybtn = document.getElementById('apply-btn');
            applybtn.removeAttribute('disabled');
            applybtn.classList.add('bg-bg-green');
        }
        if (count < 5) {
            
            console.log(e.target.innerText)
            const clickedSeat = e.target.innerText;
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
            const nextbtn = document.getElementById('next-btn');
            nextbtn.setAttribute("onclick", "succeesful()");
            nextbtn.removeAttribute("disabled");
            seat.setAttribute("disabled",true);          
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

        const p = document.createElement('p');
        p.innerText = "Applied Cupon NEW15" ;
        p.classList.add('bg-bg-green','rounded-lg','text-center','px-2','py-1','text-white','font-medium')
        const p1 = document.createElement('p');
        p1.innerText = "Discount";
        p1.classList.add('lg:px-5', 'px-3', 'py-2','text-center');
        const p2 = document.createElement('p');
        p2.innerText = discount ;
        p2.classList.add('lg:px-5', 'px-3', 'py-2','text-center');

        const cuppon = document.getElementById('cuppon');
        cuppon.appendChild(p);
        cuppon.appendChild(p1);
        cuppon.appendChild(p2);
        
        // 
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

        const p = document.createElement('p');
        p.innerText = "Coupon Applied" ;
        p.classList.add('bg-bg-green','rounded-lg','text-center','px-2','py-1','text-white','font-medium')
        const p1 = document.createElement('p');
        p1.innerText = "Discount";
        p1.classList.add('lg:px-5', 'px-3', 'py-2','text-center');
        const p2 = document.createElement('p');
        p2.innerText = discount ;
        p2.classList.add('lg:px-5', 'px-3', 'py-2','text-center');

        const cuppon = document.getElementById('cuppon');
        cuppon.appendChild(p);
        cuppon.appendChild(p1);
        cuppon.appendChild(p2);

        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('cupon-input');
        input.classList.add('hidden');
    }
    else{
        alert('Coupon Not Valid')
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
    else{
        alert('Please fill at least name and number')
    }
}

// again in main website from succeesful
function continued() {
    const hiddendiv = document.getElementById('succeesful');
    hiddendiv.classList.add('hidden');
    const purchase = document.getElementById('purchase');
    purchase.classList.remove('hidden');
    const Cuppon = document.getElementById('Cuppon');
    Cuppon.classList.remove('hidden');
    const header = document.getElementById('header');
    header.classList.remove('hidden');
    window.location.reload();
}




