
const alltickets = document.getElementsByClassName('seats');
for(const seat of alltickets){
    seat.addEventListener('click',function(e){
        console.log(e.target.innerText)
        const clickedSeat = e.target.innerText ;
        console.log(clickedSeat , 'clieked')

        setBackgroundColorById(clickedSeat);
     
        const seatValue = getValueById('seat-left');
        const avaleavail = seatValue - 1 ;
        setTextById('seat-left', avaleavail) ;

        makeTable(clickedSeat); 
    })
}