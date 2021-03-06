console.log('all hooked up');
// side nav
const navOpen = document.querySelector('#nav-button');
const navClose = document.querySelector('#nav-button-close');
let nav = document.querySelector('#nav');

function openNavBar() {
    nav.style.display = 'block';
  };
  function closeNavBar() {
    nav.style.display = 'none';
  };
navOpen.addEventListener('click', openNavBar);
navClose.addEventListener('click', closeNavBar);



// gallery
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    current.src = e.target.src;
    // e.target.style.opacity = opacity;
}

//band members 
let index = 0;
const members = [
  {
  name: "M. Shadows",
  pic: "",
  instrument: "Lead Vocals",
  bio: "Matthew Charles Sanders (born July 31, 1981), better known as M. Shadows, is an American singer, songwriter, and musician. He is best known as the lead vocalist, songwriter, and a founding member of the American heavy metal band Avenged Sevenfold. In 2017, he was voted 3rd in the list of Top 25 Greatest Modern Frontmen by Ultimate Guitar."
},
  {
    name: "Synyster Gates",
    pic: "",
    instrument: "Lead Guitarist and Backing Vocalist",
    bio: "Brian Elwin Haner Jr. (born July 7, 1981), better known by his stage name Synyster Gates or simply Syn, is an American musician, best known for being the lead guitarist and backing vocalist of the band Avenged Sevenfold. He ranks No. 87 on Guitar World's 100 Greatest Guitarists of All Time. Gates was voted as Best Metal Guitarist in the World by Total Guitar in 2016 and once again in 2017"
  },
  {
    name: "Brooks Wackerman",
    pic: "",
    instrument: "Drums",
    bio: "On November 4, 2015, it was revealed that Wackerman was the new drummer for Avenged Sevenfold. Brooks was working with the band one year prior to the official announcement, because the band wanted to fit in with the new drummer. Like the previous drummer Arin Ilejay, but unlike the rest of the band members, he currently does not have a stage name. His first full-length album with the band was their October 2016 release The Stage, which showcased his progressive style of drumming, often using fast double-bass kicks and blast beats."
  },
  {
    name: "Zacky Vengeance",
    pic: "",
    instrument: "Rhythm Guitar",
    bio: "Zachary James Baker (born December 11, 1981), better known by his stage name Zacky Vengeance, is the rhythm guitarist and backing vocalist for the American metal/rock band Avenged Sevenfold."
  },
  {
    name: "Johnny Christ",
    pic: "",
    instrument: "Bass",
    bio: "Jonathan Lewis Seward (born November 18, 1984), better known by his stage name Johnny Christ, is the bassist of the band Avenged Sevenfold. Johnny Christ was the fourth bassist to join Avenged Sevenfold in 2002, replacing former members Matt Wendt, Dameon Ash, and Justin Sane. He grew up in Huntington Beach, California."
  }
];

// render info
let renderMembers = () => {
  let currentMember = members[index];
  let name = document.querySelector('#name');
  let pic = document.querySelector('#pic');
  let instrument = document.querySelector('#instrument');
  let bio = document.querySelector('#bio');
  name.innerHTML = currentMember.name;
  pic.innerHTML = currentMember.pic;
  instrument.innerHTML = currentMember.instrument;
  bio.innerHTML = currentMember.bio;
}
renderMembers();

// cycle members
const nextMember = () => {
  index++;
  console.log(index);
  renderMembers();
  if(index == 4) {
    index = -1
    }
};

let next = document.querySelector('#next')
next.addEventListener('click', nextMember);


