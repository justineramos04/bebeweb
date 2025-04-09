let timer = parseInt(localStorage.getItem("timer")) || 300;
let countdownInterval;

// Reset timer if it's already expired
if (timer <= 0) {
    timer = 300;
    localStorage.setItem("timer", timer);
}

// Start the timer as soon as the page is loaded
window.onload = function() {
    startCountdown();
};

// Function to start the countdown timer
function startCountdown() {
    countdownInterval = setInterval(() => {
        if (timer > 0) {
            timer--; // Decrease timer by 1 every second
            document.getElementById("timer").textContent = formatTime(timer); // Update the timer display

            // Save the current timer to localStorage
            localStorage.setItem("timer", timer);
        } else {
            clearInterval(countdownInterval);
            localStorage.setItem("timer", 300); // Reset the timer in storage
            alert("Time's up! Gara, ulit ka sa umpisa."); 
            window.location.href = "index.html"; // Replace with your actual start page filename
        }
    }, 1000);
}

// Format timer in mm:ss format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
}


// Function to check answers on the third page
function checkAns() {
    const q1 = document.getElementById("ques1").value.trim().toLowerCase();
    const q2 = document.getElementById("ques2").value.trim().toLowerCase();
    const q3 = document.getElementById("ques3").value.trim().toLowerCase();
    const q4 = document.getElementById("ques4").value.trim().toLowerCase();
    const q5 = document.getElementById("ques5").value.trim().toLowerCase();

    const a1 = ["july 09, 2023", "july 9, 2023", "july 9 2023", "july 09 2023"];
    const a2 = ["2022"];
    const a3 = ["fairview"];
    const a4 = ["kitchen"];
    const a5 = ["yes", "uu", "oo", "yeah"];

    if (a1.includes(q1) && a2.includes(q2) && a3.includes(q3) && a4.includes(q4) && a5.includes(q5)) {
        alert("Another virus detected!");
        window.location.href = "fourthpage.html";  // Redirect to success page
    } else {
        alert("Gara, may mali. Sagutan mo ulit, boss.");
    }
}

function showMessageAndUnmute() {
    const messageBox = document.getElementById("messageBox");
    const video = document.getElementById("video");
    const heart = document.getElementById("hearts");
    const button = document.querySelector(".btn"); // Get the button element

    // Show the message box
    messageBox.style.display = "block";

    // Remove the "hidden" attribute to make the video visible
    video.removeAttribute("hidden");

    // Unmute the video
    video.muted = false;

    // Play the video manually (since autoplay might not work after interaction)
    video.play().catch((error) => {
        // If autoplay fails, log the error
        console.error('Video failed to play:', error);
    });

    heart.removeAttribute("hidden");

    button.style.display = "none";

}
