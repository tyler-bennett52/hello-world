// establish time
let currentDate = new Date();
let time = currentDate.getHours()
console.log(time)

// welcome the user based on time
function welcome() {
    if (time > 3 && time < 12) {
        alert('Good morning!')
    } else if (time >= 12 && time < 18 ) {
        alert('Good afternoon!')
    } else {
        alert('Good evening!')
    }
}
// display username in Your Art Here section
function tagPage() {
    let userName = prompt('What is your name?');
    if (userName === '') {
        userName = prompt('Seriously, you gotta put something here.')
    }
    console.log("User's name is " + userName);
    document.write(userName + ' wuz here');
    return userName
}

// change text displayed in Nav based on criminal background
function backgroundCheck() {
    let likesGraffiti = prompt('Are you good at graffiti? Y or N')
    if (likesGraffiti.toLowerCase() === 'y') {
        alert('TURN YOURSELF IN CRIMINAL!')
        document.write('Turn yourself in by contacting confession@local-pd.org')
    } else if (likesGraffiti.toLowerCase() === 'n') {
        alert('Good, graffiti is a criminal act of vandalism')
        document.write('Please report vandals to snitch@local-pd.org')
    } else {
        alert('You seem bad at following directions')
        document.write('*sigh* Different text shows here if you learn to follow directions')
    }
}