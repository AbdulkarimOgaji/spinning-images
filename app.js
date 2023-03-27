console.log("running script");
const firstColumnSlides = document.querySelectorAll(".first-column");
const secondColumnSlides = document.querySelectorAll(".second-column");
const thirdColumnSlides = document.querySelectorAll(".third-column");

const firstColumnHeight = document.getElementById("first-column-height");
const secondColumnHeight = document.getElementById("second-column-height");
const thirdColumnHeight = document.getElementById("third-column-height");

const images = [
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedMLB%20SGP.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedHerro%20Max%20Ladder.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedBR%20Betting%20Mets%20ML.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedCam%20Smith.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedGala%20Parlay.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedDamir.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedGarin.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedIMG_5688.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedSuns%20Live.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedharden%205%2B.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedSGP.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedDulic%201st%20ATD.jpg",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedClarke%20DD.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedHerro%20Ladder.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedHero%20Max.PNG",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedKansas.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedNets.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedVassell%20Ladder.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedBarnes%20DD.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedDevers%20HR.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedSGP.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedGalatasary.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedFlamengo%20ML.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedFB%20Parlay.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedRed%20Scare.jpeg",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedStimmy%20%231.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedundefinedStimmmy%20%232.png",
  "https://s3.amazonaws.com/com.dbacommunity.images/undefinedRap%2031%2B.png",
];

async function setHeights() {
  firstColumnHeight.innerText = "Waiting for images to load";
  secondColumnHeight.innerText = "Waiting for images to load";
  thirdColumnHeight.innerText = "Waiting for images to load";

  // wait for all images to load
  console.log("waiting started");
  await Promise.all(
    Array.from(document.querySelectorAll("img")).map((img) => {
      if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
      return new Promise((resolve) => {
        img.addEventListener("load", () => resolve(true));
        img.addEventListener("error", () => resolve(false));
      });
    })
  );

  console.log("waiting stopped");

  firstColumnHeight.innerText = Array.from(
    document.querySelectorAll(".first-column img")
  ).reduce((acc, curr) => acc + curr.naturalHeight, 0);

  secondColumnHeight.innerText = Array.from(
    document.querySelectorAll(".second-column img")
  ).reduce((acc, curr) => acc + curr.naturalHeight, 0);

  thirdColumnHeight.innerText = Array.from(
    document.querySelectorAll(".third-column img")
  ).reduce((acc, curr) => acc + curr.naturalHeight, 0);
}

firstColumnSlides.forEach((el) => {
  images.slice(0, 5).forEach((url) => {
    let img = document.createElement("img");
    img.src = url;
    el.appendChild(img);
  });
});

secondColumnSlides.forEach((el) => {
  images.slice(9, 18).forEach((url) => {
    let img = document.createElement("img");
    img.src = url;
    el.appendChild(img);
  });
});

thirdColumnSlides.forEach((el) => {
  images.slice(18, 27).forEach((url) => {
    let img = document.createElement("img");
    img.src = url;
    el.appendChild(img);
  });
});

console.log("initializing");
const swiper = new Swiper(".swiper", {
  direction: "vertical",

  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  mousewheel: false,
  grabCursor: false,
  noSwiping: true,
  preventInteractionOnTransition: true,
  speed: 30000,
});

setHeights();
