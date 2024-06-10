document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();https://www.youtube.com/

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
      lenis.raf(time * 900);
  });

  gsap.ticker.lagSmoothing(0);
});

function updateWidth() {
  const pageWidth = document.documentElement.scrollWidth;
  document.getElementById("widthDisplay").innerHTML = `Webpage Width: ${pageWidth}px`;
}

updateWidth();
setInterval(updateWidth, 100);


function copyEmail() {
  navigator.clipboard.writeText("lucash.1707@gmail.com");
  var messageElement = document.createElement("div");
  messageElement.textContent = "E-Mail has been copied to your clipboard!";
  messageElement.classList.add("CopiedMsg");

  var emailText = document.querySelector(".or-copy-an");
  emailText.appendChild(messageElement);

  setTimeout(function() {
    emailText.removeChild(messageElement);
  }, 3000);
}

function topCopyEmail() {
  navigator.clipboard.writeText("lucash.1707@gmail.com");
  var messageElement = document.createElement("div");
  messageElement.textContent = "E-Mail has been copied to your clipboard!";
  messageElement.classList.add("CopiedMsgTop");

  var emailText = document.querySelector(".button");
  emailText.appendChild(messageElement);

  setTimeout(function() {
    emailText.removeChild(messageElement);
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