import { Icon } from "@iconify/react";
import meloroids from "../assets/photos/meloroids-img.png";
import weather from "../assets/photos/weather-img.jpg";
import unleashed from "../assets/photos/unleashed.jpg";
import nba from "../assets/photos/nba-img.jpg";
import ProducerFolio from "../assets/photos/beat-store.jpg";
export const projectData = [
  {
    name: "Meloroids",
    logLine: "Data for music producers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras sit lectus massa eget. Auctor bibendum laoreet cum elementum venenatis vel et ultrices. Purus facilisi aliquet aliquam nunc. Sed tellus iaculis imperdiet scelerisque scelerisque amet pharetra dui. Neque in in vulputate aliquet lobortis tempus vitae. Eget venenatis nulla at ornare fermentum at. Purus ultrices viverra eget etiam nunc vitae elit ligula. Augue nunc euismod adipiscing posuere eleifend dolor pharetra non amet. Nunc nibh orci felis cras tortor ultrices tellus hendrerit interdum.",
    image: meloroids,

    icon: "material-symbols:queue-music-rounded",
    repository: "https://github.com/petehodnefield/meloroids",
    liveDeployment: "a",
    technology: ["React.js", "CSS", "Express.js", "MongoDB", "GraphQL"],
  },
  {
    name: "Unleashed",
    logLine: "Report and find lost pets",
    description:
      "Unleashed is a place to connect and see if someone has seen your lost pet. Or if you have found an “unleashed” animal, you can look to this site to see if you can contact their owner.",
    image: unleashed,
    icon: "mdi:paw",
    repository: "https://github.com/MegGedde/Unleashed",
    liveDeployment: "s",
    technology: [
      "JavaScript",
      "Handlebars.js",
      "CSS",
      "HTML",
      "Express.js",
      "MySQL",
      "Sequelize",
      "AWS S3",
    ],
  },
  {
    name: "DEI Calendar",
    logLine: "A hub for DEI events",
    description:
      "DEI Calendar is a place for employees to learn about upcoming cultural festivals and holidays to enable them to connect with each other to plan for celebrations. Employees / Users will be able to express their interest in participating in an event or celebration.",
    image:
      "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",

    icon: "material-symbols:calendar-month",
    repository: "https://github.com/petehodnefield/project-three",
    liveDeployment: "d",
    technology: ["React.js", "CSS", "Express.js", "MongoDB", "GraphQL"],
  },
  {
    name: "WeatherDash",
    logLine: "Weather for a selected city",
    description:
      "Weather Dashboard is a forecast app that allows the user to enter a city. Upon submission you are shown the current forecast, as well as the five-day forecast for that city. Weather Dashboard also remembers previous searches.    ",
    image: weather,
    icon: "mdi:weather-fog",
    repository: "https://github.com/petehodnefield/weather-dashboard",
    liveDeployment: "https://petehodnefield.github.io/weather-dashboard/",
    technology: ["JavaScript", "CSS", "HTML", "OpenWeather API"],
  },
  {
    name: "NBA SOTY",
    logLine: "The most popular songs from a player's draft year",
    description:
      "Our application uses a clean and simple design to merge the interests of NBA statistics and music. All you do is enter in the name of your favorite NBA player and you immediately get stats such as their jersey number, current team, and draft year. We wanted to add a fun spin to it and also pull up the most popular song of the year that the player was drafted. The search bar stays within reach so you can easily search for another player’s stats. The application also uses local storage to remember your most recent searches. This concept can be used as a base for even more features such as showing more statistics and videos of player highlights.",
    image: nba,
    icon: "iconoir:basketball",
    repository: "https://github.com/Undisputed06/nba-song-of-the-year",
    liveDeployment: "https://undisputed06.github.io/nba-song-of-the-year/",
    technology: [
      "HTML",
      "Bootstrap",
      "JavaScript",
      "Ball Don't Lie API",
      "YouTube API",
    ],
  },
  {
    name: "ProducerFolio",
    logLine: "Royalty-Free Guitar Loops",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras sit lectus massa eget. Auctor bibendum laoreet cum elementum venenatis vel et ultrices. Purus facilisi aliquet aliquam nunc. Sed tellus iaculis imperdiet scelerisque scelerisque amet pharetra dui. Neque in in vulputate aliquet lobortis tempus vitae. Eget venenatis nulla at ornare fermentum at. Purus ultrices viverra eget etiam nunc vitae elit ligula. Augue nunc euismod adipiscing posuere eleifend dolor pharetra non amet. Nunc nibh orci felis cras tortor ultrices tellus hendrerit interdum.",
    image: ProducerFolio,
    icon: "fa6-solid:guitar",
    repository: "https://github.com/petehodnefield/beat-store-react",
    liveDeployment: "a",
    technology: ["React.js", "CSS", "Email.js", "", ""],
  },
];
