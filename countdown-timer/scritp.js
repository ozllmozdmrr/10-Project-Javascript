




const newSchool = '12 September 2022';

function countdown() {
    const newYearsDate = new Date(newSchool);
    const currentDate = new Date();

    const totalSeconds = ( newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);
}


// initial call
countdown();

setInterval(countdown, 1000);