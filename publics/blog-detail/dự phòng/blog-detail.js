const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
document.querySelector('.date').textContent = formattedDate;

let minutes = 0;
document.querySelector('.time').innerHTML = `${minutes} minutes read`;
function read() {
    setTimeout(() => {
        minutes++;
        document.querySelector('.time').innerHTML = `${minutes} minutes read`;
    }, 1000*60);
}
read();