function shakeMagic8Ball(){
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-warning'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX this later//
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random()*8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "images/yes-image.jpg"; //change this!//
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "images/no-image.jpg"; //change this!//
            color = "text-danger";
        case 2:
            answer = "Maybe";
            image = "images/maybe-image.jpg"; //change this//
            color = "text-warning";
            break;
        case 3:
            answer = "Of Course";
            image = "images/yes-image.jpg"; //change//
            color = "text-success";
            break;
        case 4:
            answer = "Definitely";
            image = "images/yes-image.jpg"
            color = "text-danger";
            break;
        case 5:
            answer = "No";
            image = "images/no-image.jpg"; //change this!//
            color = "text-danger";
        case 6:
            answer = "Maybe";
            image = "images/maybe-image.jpg"; //change this//
            color = "text-warning"
            break;
        case 7:
            answer = "Don't think so";
            image = "images/no-image.jpg"; //change//
            color = "text-danger";
            break;
        case 8:
            answer = "Definitely";
            image = "images/yes-image.jpg"
            color = "text-danger";
            break;
            default:
                break;
    }



    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;
}