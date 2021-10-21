//This chucnk of javascript code comes from the same video as the .html file


window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
      "#00a5e3",
      "#8dd7bf",
      "#ff96c5",
      "#ff5768",
      "#ffbf65",
    ];
  
    pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
      });
    });

    const createBubble = index => {
      //Create bubbles
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = `jump 1s ease`;
      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    };
  });