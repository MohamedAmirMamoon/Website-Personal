import self from "../img/self.png"
import chosn from "../img/chosn.png"
import masjidfinder from "../img/masjidfinder.png"
import dreamwalkers from "../img/dreamwalkersimg.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Mohamed Amir Mamoon",
    lastName: "",
    initials: "mo", // the example uses first and last, but feel free to use three or more if you like.
    position: "a student at USC studying Computer Science and Business",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🏀',
            text: 'fueled by basketball'
        },
        {
            emoji: '🌉',
            text: 'based in the Bay Area and Los Angeles'
        },
        {
            emoji: "💻",
            text: "Software Engineering Intern at County of Marin & Fellow at Headstarter"
        },
        {
            emoji: "📧",
            text: "mamoon@usc.edu"
        }
    ],
    socials: [
        {
            link: "https://github.com/MohamedAmirMamoon",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mohamed-mamoon/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Mo. I'm a Software Engineering Intern at the County of Marin and a fellow at Headstarter. I'm currently studying Computer Science at USC, I enjoy hikling and hooping with friends, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'python', 'c++', 'html', 'css', 'node.js', 'express.js'],
            exposedTo: ['django', 'java', 'c']
        }
    ,
    hobbies: [
        {
            label: 'ball is life',
            emoji: '🏀'
        },
        {
            label: 'cutting hair',
            emoji: '💈'
        },
        {
            label: 'cooking',
            emoji: '🍝'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Mosque Finder",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: masjidfinder,
            description: "Created an app to allow people to find the closest mosque based off their current location using Google Maps API.",
            tools: "Tools: C++, React, Node.js, Express.js"
        },
        {
            title: "Dreamwalkers",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: dreamwalkers,
            description: "Developed a pokemon style top-down game in vanilla javascript.",
            tools: "Tools: Javascript, HTML, CSS, Figma, Tiled, Asprite "
        },
        {
            title: "Chosn AI",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: chosn,
            description: "Developed a pokemon style top-down game in vanilla javascript.",
            tools: "Tools: React, Node.js, Express.js"
        },
        
    ]
}