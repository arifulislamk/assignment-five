
let count = 0 ;
const alltickets = document.getElementsByClassName('seats');
for (const seat of alltickets) {
    seat.addEventListener('click', function (e) {
        console.log(e.target.innerText)
        const clickedSeat = e.target.innerText;
        console.log(clickedSeat, 'clieked')
        setBackgroundColorById(clickedSeat);

        const seatValue = getValueById('seat-left');
        const avaleavail = seatValue - 1;
        setTextById('seat-left', avaleavail);

        makeTable(clickedSeat);

        const total = getValueById('total-price')
        const newtotal = total + 550;
        setTextById('total-price', newtotal)

        const grandtotal = getValueById('grand-total');
        let newGarndtotal = grandtotal + 550;
        setTextById('grand-total', newGarndtotal
        )   
        
        count = count + 1 ;
        if(count === 4){
            const applybtn = document.getElementById('apply-btn');
            applybtn.removeAttribute('disabled');
            applybtn.classList.add('bg-bg-green')
        }
    })
}

function apply(){
    const inputText = document.getElementById('cupon-input').value ;
    if(inputText === 'NEW15'){
        const grand = document.getElementById('grand-total').innerText ;
        const discount = grand/100 * 15 ;
        const updateGrand = grand - discount ;
        setTextById('grand-total', updateGrand);
        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('cupon-input');
        input.classList.add('hidden');
    }
    else if(inputText === 'Couple 20'){
        const grand = document.getElementById('grand-total').innerText ;
        const discount = grand/100 * 20 ;
        const updateGrand = grand - discount ;
        setTextById('grand-total', updateGrand);
        const btn = document.getElementById('apply-btn');
        btn.classList.add('hidden');
        const input = document.getElementById('cupon-input');
        input.classList.add('hidden');
    }
}
// const inputText = document.getElementById('cupon-input') ;
// const text = document.getElementById('text') ;
// console.log(text.innerText) ;
// inputText.addEventListener('keyup' , function inputText (event){
//     // console.log(inputText.value)
//     const text =  document.getElementById('text');
//     text.innerText = event.target.value ;
    
// })
// const applybtn = document.getElementById('apply-btn');
// applybtn.addEventListener('click', function(){
//     const grandtotal = document.getElementById('grand-total');
    
// })




