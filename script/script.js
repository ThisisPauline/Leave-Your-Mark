//this is for the trail

document.addEventListener("mousemove", function (e) {
  console.log("Mouse move event detected");

  var trail = document.createElement("div");
  trail.className = "trail";
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".clear").addEventListener("click", function () {
    console.log("Clear button clicked");

    var trails = document.querySelectorAll(".trail");
    for (var i = 0; i < trails.length; i++) {
      trails[i].remove();
    }
  });
});

//this is for the cursor
document.addEventListener("mousemove", function (e) {
  var cursor = document.querySelector(".cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.addEventListener("mouseenter", function (e) {
  var cursorTrail = document.querySelector(".cursor-trail");
  cursorTrail.style.transform = "translate(-50%, -50%) scale(1)";
});

document.addEventListener("mouseleave", function (e) {
  var cursorTrail = document.querySelector(".cursor-trail");
  cursorTrail.style.transform = "translate(-50%, -50%) scale(0)";
});

//set the height of third container.
// Get the thirdP and thirdImage elements
const thirdText = document.getElementById("thirdText");
const thirdImage = document.getElementById("thirdImage");

// Set the height of the thirdImage container to match the height of the thirdP element
thirdImage.style.height = `${thirdText.offsetHeight}px`;

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (window.scrollY / maxScroll) * 100;
  progressBar.style.width = `${percentage}%`;
});
