document.addEventListener("DOMContentLoaded", function () {
  const widthDisplay = document.getElementById("widthDisplay");

  function updateWidthDisplay() {
    widthDisplay.textContent = "Current Width: " + window.innerWidth + "px";
  }

  updateWidthDisplay();

  window.addEventListener("resize", updateWidthDisplay);
});

document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
      lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
});

function copyEmail() {
  navigator.clipboard.writeText("lucash.1707@gmail.com");
  var messageElement = document.createElement("div");
  messageElement.textContent = "E-Mail has been copied to your clipboard!";
  messageElement.classList.add("CopiedMsg");
  messageElement.style.position = "absolute";
  messageElement.style.zIndex = "9999";
  messageElement.style.backgroundColor = "#333";
  messageElement.style.color = "#fff";
  messageElement.style.padding = "10px";
  messageElement.style.borderRadius = "5px";
  document.body.appendChild(messageElement);

  function moveMessage(event) {
    messageElement.style.left = event.clientX + "px";
    messageElement.style.top = event.clientY + "px";
  }

  document.addEventListener("mousemove", moveMessage);

  setTimeout(function() {
    document.removeEventListener("mousemove", moveMessage);
    document.body.removeChild(messageElement);
  }, 3000);
}


var projectList = document.getElementById("projectList");
if (projectList) {
projectList.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var button1Container = document.getElementById("button1Container");
if (button1Container) {
button1Container.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var button2Container = document.getElementById("button2Container");
if (button2Container) {
button2Container.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var button3Container = document.getElementById("button3Container");
if (button3Container) {
button3Container.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var button4Container = document.getElementById("button4Container");
if (button4Container) {
button4Container.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var githubLink = document.getElementById("githubLink");
if (githubLink) {
githubLink.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var socialIconsContainer = document.getElementById("socialIconsContainer");
if (socialIconsContainer) {
socialIconsContainer.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var socialIconsContainer1 = document.getElementById("socialIconsContainer1");
if (socialIconsContainer1) {
socialIconsContainer1.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}

var socialIconsContainer2 = document.getElementById("socialIconsContainer2");
if (socialIconsContainer2) {
socialIconsContainer2.addEventListener("click", function () {
  window.open("https://github.com/lhagfoss");
});
}      var projectList = document.getElementById("projectList");
    if (projectList) {
      projectList.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var button1Container = document.getElementById("button1Container");
    if (button1Container) {
      button1Container.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var button2Container = document.getElementById("button2Container");
    if (button2Container) {
      button2Container.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var button3Container = document.getElementById("button3Container");
    if (button3Container) {
      button3Container.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var button4Container = document.getElementById("button4Container");
    if (button4Container) {
      button4Container.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var githubLink = document.getElementById("githubLink");
    if (githubLink) {
      githubLink.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var socialIconsContainer = document.getElementById("socialIconsContainer");
    if (socialIconsContainer) {
      socialIconsContainer.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var socialIconsContainer1 = document.getElementById("socialIconsContainer1");
    if (socialIconsContainer1) {
      socialIconsContainer1.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }
    
    var socialIconsContainer2 = document.getElementById("socialIconsContainer2");
    if (socialIconsContainer2) {
      socialIconsContainer2.addEventListener("click", function () {
        window.open("https://github.com/lhagfoss");
      });
    }

function github() {
  window.open("https://github.com/lhagfoss");
}