/* eslint-disable no-restricted-globals */
function displayErrorMessage() {
    document.getElementById("page-content").innerHTML = '';
    document.getElementById("page-content").innerHTML = `<h2>Oops</h2> <h4>We can't seem to find the page you're looking for</h4>`;
}

function displayTimeOutMessage() {
    document.getElementById("page-content").innerHTML = '';
    document.getElementById("page-content").innerHTML = `<h4>There was a problem building your preview</h4>
    <h4>Give Border a jingle below</h4>`;
}

function displayCountDown(minutes, seconds) {
    document.getElementById("page-content").innerHTML = '';
    document.getElementById("page-content").innerHTML = `<h4>Recursica is building your preview...</h4><h3>${minutes}m ${seconds}s</h3>`;
}

function getParams() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}
function getcreationTimeStamp() {
    const urlParams = getParams();
    return urlParams.get('creation');
}

function getCreationDate () {
    const creationTimeStamp = getcreationTimeStamp();
    const time = parseInt(creationTimeStamp);
    return new Date(time);
}

function getEndDate() {
    const minutes = 10;
    return new Date(getCreationDate().getTime() + minutes*60000);
}

function validate() {
    let isValid = true;
    const creationTimeStamp = getcreationTimeStamp();
    if (!creationTimeStamp || isNaN(creationTimeStamp)) {
        displayErrorMessage();
        isValid = false;
    }
    return isValid;
}

function getRemainingTime() {
    const endTime = getEndDate().getTime();
    const currentTime = new Date().getTime();
    const remainingTime = endTime - currentTime;
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    return {
        remainingTime,
        minutes,
        seconds,
    }
}

(function() {
    if (validate()) {
        let remainingTime = getRemainingTime();
        if (remainingTime.remainingTime < 0) {
          displayTimeOutMessage();
        } else {
            var counter = setInterval(function() {
                const remaining = getRemainingTime();
                displayCountDown(remaining.minutes, remaining.seconds);
                  
                if (remaining.remainingTime < 0) {
                  clearInterval(counter);
                  location.reload();
                }
              }, 1000);
        }
    }
 })();