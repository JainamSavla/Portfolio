const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

const terminalData = `[System Status: Online]
[User: Jainam Savla]
[Role: Web3 & AI Engineer]

$ cat info.txt
I am a builder at the intersection of decentralized systems and machine intelligence. 
I specialize in creating secure Ethereum smart contracts and high-performance MERN 
applications. 

My goal is to bridge the gap between complex backend logic and seamless user 
experiences to solve real-world problems.

$ run tech_stack.sh
> Languages: JavaScript, Python, Solidity, C++
> Frameworks: React, Node.js, Next.js, Hardhat
> AI/ML: PyTorch, OpenAI API, LangChain

$ _`;

const terminalBody = document.getElementById("terminal-content");
let index = 0;

function typeWriter() {
  if (index < terminalData.length) {
    // Add syntax highlighting for the "$" and ">" signs
    let char = terminalData.charAt(index);
    if (char === "$") {
      terminalBody.innerHTML += `<span class="t-blue">${char}</span>`;
    } else if (char === ">") {
      terminalBody.innerHTML += `<span class="t-green">${char}</span>`;
    } else {
      terminalBody.innerHTML += char;
    }

    index++;
    setTimeout(typeWriter, 15); // Adjust speed here
  } else {
    terminalBody.innerHTML += '<span class="cursor"></span>';
  }
}

// Trigger animation when scrolled into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWriter();
        observer.unobserve(entry.target); // Run only once
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector(".terminal-window"));
