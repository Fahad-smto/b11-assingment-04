const colors = ["lightcoral", "lightblue", "lightgreen", "lightyellow", "lightsalmon", "lavender", "lightpink", "beige", "mintcream", "whitesmoke"];
let index = 0;

document.getElementById('colorButton').addEventListener('click', function () {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
})


let buttons = document.querySelectorAll(".card-btn");
let count1 = 23;
let count2 = 6;


   for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        let clickedButton = event.target;
        clickedButton.disabled = true;
        count1++;
        count2--;

        document.getElementById("counter1").textContent = count1;
        document.getElementById("counter2").textContent = count2;

           alert("You have completed your task");

           if (count2 === 0) {
            alert("Congratulations!!! You have completed your task!");
        }
      });
}

let cardButtons = document.querySelectorAll('.card-btn-full');
let activity = document.getElementById('activity_log_text');

function getDate() {
    let today = new Date();
    let hours = today.getHours();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();



    return hours + ':' + minutes + ':' + seconds + ' ' + amPm;
}

for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function (event) {
        let card = event.target.closest('.card-btn-full');
        console.log(card);
        let title = card.querySelector('h2').textContent;
        console.log(title);
        let date = getDate();
        let activityText = document.createElement('div');
        activityText.classList.add('activity');
        activityText.innerHTML = '<p> You have completed the task</p>' + title + ' at ' + date
        activity.appendChild(activityText);
    });
}

document.getElementById('clear_button').addEventListener('click', function () {
    activity.innerHTML = "";
});


// date update 

function dateUpdate() {
    let today = new Date()
    let day = today.getDate();
    let month = today.getMonth();
    let month1=month+1;
    let year = today.getFullYear();
    return day + "-" + month1 + "-" + year
}

document.getElementById('date_update').textContent = dateUpdate();