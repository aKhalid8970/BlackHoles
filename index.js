
/* ----------------------------------------------------NAVBAR -------------------------------------- */
// Select the navbar
const navbar = document.getElementById('navbar');
let items = document.querySelectorAll(".nav-containers a")

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
    // Add the 'scrolled' class when the user scrolls
    navbar.classList.add('scrolled');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("backdrop")
    }
} else {
    // Remove the 'scrolled' class when at the top
    navbar.classList.remove('scrolled');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("backdrop")
    }
}
});

const option = document.getElementById('option');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
if (window.scrollY > 0) {
    // Add the 'scrolled' class when the user scrolls
    option.classList.add('scrolled');
} else {
    // Remove the 'scrolled' class when at the top
    option.classList.remove('scrolled');
}
});

/* ----------------------------------------------------NAVBAR -------------------------------------- */

/* ----------------------------------------------------Scientists -------------------------------------- */
let michell_text = "Michell was the first person to theorize the existence of black holes. He used the principles of physics which Isaac Newton had established to describe how star densities can be confirmed by analyzing how their gravitational fields affect celestial bodies orbiting it. He concluded that the gravity of some stars can be so strong that its own light rays would not be able to escape that gravitational field, but it would just be forced to return towards it. Michell did not follow through on this possibility, but he opened the door for others to add on to his work."
let pierre_text = "Laplace was a French physicist who made significant advancements on the theory behind black holes before black holes was even a term. In his publishment called Exposition du Systeme du Monde, Laplace use Michell’s theory to make more advancements to it. Using Newton’s corpuscular theory, which states that light emits ‘minute particles’ which are called corpuscles, that there should be stars which do not let any light emit out from it. Laplace did include calculations of escape velocity, but light not being able to escape a gravitational field was not numerically reasonable to showcase during this era."
let einstein_text = "In 1915, Albert Einstein, German-American physicist, proposed the theory of general relativity. This theory states that smallest distance between two points is the path which a beam of light takes, called geodesics"
let child_text = "Karl Schawzschild, German astronomer, became a professor of the University of Gottingen’s observatory, later on he became the director of the Astrophysical Observatory in Potsdam. He used general relativity to analyze the geometric region near a singularity (area where the curvature of spacetime reaches an infinite level when it was warped. He set the radius of a black hole equal to 2GM/c^2, where G is the gravitational constant, M is the mass of the black hole, and c is the speed of light. This is known as the Schwarzschild radius"
const image = document.querySelector(".scientist_image");

document.querySelector(".michell").addEventListener("click", () => {
    document.querySelector(".scientists_text").textContent = michell_text;    
    image.src = 'images/michell.jpg';
});


document.querySelector(".einstein").addEventListener("click", () => {
    document.querySelector(".scientists_text").textContent = einstein_text;    
    image.src = 'images/einstein.jpg';
});

document.querySelector(".pierre").addEventListener("click", () => {
    document.querySelector(".scientists_text").textContent = pierre_text;
    image.src = 'images/Pierre-Simon_Laplace.jpg'
});

document.querySelector(".child").addEventListener("click", () => {
    document.querySelector(".scientists_text").textContent = child_text;
    image.src = 'images/child.jpg'
});


/* ----------------------------------------------------Scientists -------------------------------------- */


/* ----------------------------------------------------Types -------------------------------------- */


/* ----------------------------------------------------Types -------------------------------------- */

let primordial_text = "When the Universe first formed, raw materials began to condense, forming primordial black holes. According to NASA, the sizes for these black holes range from ‘100,000 times less than a paperclip to 100,000 times more than the sun’.  The conditions for primordial black holes only existed in the boiling hot early universe. Once the universe cooled down, the conditions for primordial black holes did not exist anymore. As of right now, scientists do not have tangible evidence for the existence of primordial black holes. The most accepted theory is that smaller primordial black holes evaporated when the universe aged more due to quantum mechanics. There could be larger primordial black holes out there right now, but there is no tangible evidence to back this up."
let stellar_text = "If a star with a mass of twenty times more than the sun were to run out of its fuel, causing the core of it to collapse within itself bringing about a supernova explosion, then a stellar black hole will be what remains. These black holes have a special characteristic: they are in a binary system with stars. This pairing is what actually allows scientists to observe stellar black holes. There could potentially be up to one-hundred million stellar black holes in just the milky way galaxy."
let supermassive_text = "These black holes are the monsters of the universe, as they facilitate the centripetal motion of entire huge galaxies, such as our own. Supermassive black holes on average have 100,000 to a billion times of the sun’s mass, according to NASA. The origin behind these black holes is cloudy, as scientists aren’t certain as to how they formed. The most accepted theory is that supermassive black holes formed in the early stages of the universe from collapsing supermassive stars. "
let intermediate_text = "Intermediate black holes are quite difficult to define. They are larger than stellar-mass black holes but do not reach the size of supermassive black holes. They form from the collisions between multiple stellar-mass black holes, which in-turn create an intermediate-mass black hole"

document.querySelector(".primordial").addEventListener("click", () =>{
    document.querySelector(".description h1").innerHTML = "Primordial Black Holes";
    document.querySelector(".description p").innerHTML = primordial_text;
});


document.querySelector(".stellar").addEventListener("click", () =>{
    document.querySelector(".description h1").innerHTML = "Stellar Black Holes";
    document.querySelector(".description p").innerHTML = stellar_text;
});


document.querySelector(".intermediate").addEventListener("click", () =>{
    document.querySelector(".description h1").innerHTML = "Intermediate-mass Black Holes";
    document.querySelector(".description p").innerHTML = intermediate_text;
});


document.querySelector(".supermassive").addEventListener("click", () =>{
    document.querySelector(".description h1").innerHTML = "Supermassive Black Holes";
    document.querySelector(".description p").innerHTML = supermassive_text;
});



/* ----------------------------------------------------Space Missions -------------------------------------- */

let chandra_text = "The Chandra X-Ray Observatory pinpointed a supermassive black hole that ripped through a star, and is leveraging the wreckage of that star to destroy another one. This supermassive black hole destroyed the star, and it created a ring of debris around the black hole. This ring of debris is in the orbital plane of the other star, which is colliding with it, releasing X-rays which the Chandra X-Ray Observatory is detecting";
let roman_text = "Could detect primordial black holes, likely forming in the beginning stages of the universe. These black holes cannot be created by any physical process known to humans (as of right now). As of right now, an object can only become a black hole if it has at least an eighth of the sun’s mass. However in the early universe, those conditions may not have been true. A black hole that has the mass of earth would be the size of a coin.";
let hubble_text = "The Hubble Space Telescope orbits at 515 km over the earth’s surface. It made history in 1990 when it launched as it was able to detect near UltraViolet light, the visible spectrum, and near Infrared light. This wide range of the electromagnetic spectrum split the Hubble Space Telescope apart from other ordinary ones. The first interaction between the Hubble Telescope and black holes happened in 1990, as the telescope captured a jet radiating from a galaxy. Astronomers collected this data and concluded that jets like this only radiate from black holes. Hubble led to a new discovery: that black holes were in the middle of the vast majority of galaxies. It also cemented the discovery that supermassive black holes exist, as the Hubble Telescope captured fuming gas orbiting at enormous velocity around something extremely massive yet mind-numbingly dense in the Virgo A galaxy. This concluded that supermassive black holes exist.";
let eht_text = "A very unique telescope which is a combination of devices, apparatuses, and techniques of observation which produce images that humans are not able to see with their own abilities. It basically has a giant ear, which is a lens that receives radio signals that are emitted by black holes. With bonded radio dishes around Earth, the giant ear of EHT is basically the size of earth. This tremendous radio signal receiver is the reason for the emission sizes of Sagittarius A and M87. It is funded by the US National Science Foundation, European Research Council, Ministry of Science and Technology Taiwan, Max-Planck-Gesellschaft, John Templeton Foundation, and many more.";
let arcus_text = "A telescope that is set to launch in 2031. There will be a wide variety of information which the Arcus telescope detects, but regarding black holes, it will be able to detect the outflow of celestial objects from supermassive black holes";
let missions_texts_container = [chandra_text, roman_text, hubble_text, eht_text, arcus_text];


let chandra_title = "Chandra X-Ray Observatory";
let roman_title = "Roman Mission NASA";
let hubble_title = "Hubble Space Telescope";
let eht_title = "Event Horizon Telescope";
let arcus_title = "Arcus Telescope";
let missions_titles_container = [chandra_title, roman_title, hubble_title, eht_title, arcus_title];

const image2 = document.querySelector(".description img")

let images_container = ["images/chandra.jpg", "images/roman.png", "images/hubble.webp", "images/eht.jpg", "images/arcus.jpg"];

let i = 0;

function swtichMission() {
    document.querySelector(".mission_title").textContent = missions_titles_container[i];
    document.querySelector(".mission_text").textContent = missions_texts_container[i];
    image2.src = images_container[i];
}

document.querySelector(".arrow.left").addEventListener("click", () => {
    i--;

    swtichMission();

    if (i == 0) {
        document.querySelector(".arrow-container.left > div").classList.add("hidden");
    } else if (i == 3){
        document.querySelector(".arrow-container.right > div").classList.remove("hidden");
    }

});

document.querySelector(".arrow.right").addEventListener("click", () => {
    i++;
    
    swtichMission();
    if (i == 4) {
        document.querySelector(".arrow-container.right > div").classList.add("hidden");
    } else if (i == 1){
        document.querySelector(".arrow-container.left > div").classList.remove("hidden");
    }

});


/* ----------------------------------------------------Space Missions -------------------------------------- */
