// Introduction to JavaScript: Lesson 7: Loops & Arrays; //

// ****====---- Practice Exercise #3 ----====****  //

// Skills Practiced: querySelector(), change event, callback function, classList.remove, classList.add, conditional statements //

var body = document.querySelector("body");

var moodSelector = document.querySelector("#moods");

moodSelector.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
