//import ice2 from "../../images/projects/ice2.png";
import ice2 from "./ice2.png";
import ice2device from "../../images/projects/device/icephone.png";

import calendor from "../../images/projects/Calendor.png";
import calendordevice from "../../images/projects/device/CalendorDevice.png";
import tictactop from "../../images/projects/tictactop.png";
import tictactopdevice from "../../images/projects/device/tictactopdevice.png";

export const dataprojects = [
  {
    id: 3,
    imgURL: tictactop,
    alt: "tictactoc homepage",
    imgURLdevice: tictactopdevice,
    altdevice: "tictactoe website homepage on a cell phone device",
    title: "Super TIC-TAC-TOE",
    codeLink: "https://github.com/KmiloLopez/supertictactoe",
    siteLink: "https://kmilolopez.github.io/supertictactoe/",
    descript: `Super TIC-TAC-TOE was created to revive the classic game of TIC-TAC-TOE by adding new rules, including an innovative turn condition. I hope you find as much joy in this game as I did.`,
    descriptIndeep: `The initial state of the gameboard is an empty array with 9 elements, which is rendered in the UI as a 3x3 grid. Each move updates the gameboard stored in Redux Toolkit.

If a square is already marked, it cannot be overwritten. Each square is assigned a class based on its content, either "X" or "O," and this is displayed as a pseudo-element in the UI. A restricted class is added to the square element once it is marked.

Pseudo-elements (::before and ::after) are part of CSS, which means they don't require additional HTTP requests to load image files, reducing the page's load time.

The possible winning combinations are predefined, and with every change to the board, the current state is checked against these combinations to determine if there's a winner. If no winner is found, the game proceeds to the next turn.`,
    usedtechno: "Redux Toolkit,  JavaScript,  React,  Styled Components",
  },

  {
    id: 2,
    imgURL: calendor,
    alt: "image showing different screens from app",
    imgURLdevice: calendordevice,
    altdevice: "Calendor website homepage on a cell phone device",
    title: "Calendor Task Manager",
    codeLink: "https://github.com/KmiloLopez/Tasks-Calendar-Frontend",
    siteLink: "https://calendor-tc65.onrender.com/add-task",
    descript:
      "Calendor is designed to help you better organize your time, providing peace of mind by ensuring everything is recorded on your personal calendar. You can efficiently organize your daily tasks. Our application allows you to Schedule tasks for each day, specifying their level of importance. Set the start and end time for each task. Provide a detailed description of daily tasks. Mark tasks as completed once finished. Additionally, in the general view of CAMILARY, you will see an icon at the top of each day indicating the days with scheduled tasks.",
  },
  {
    id: 1,
    imgURL: ice2,
    alt: "IceCream website homepage",
    imgURLdevice: ice2device,
    altdevice: "IceCream website homepage on a cell phone device",
    title: "IceCream Landing Page",
    codeLink: "https://github.com/KmiloLopez/Proyect-IceCream",
    siteLink: "https://jorgemomo.github.io/iceCream/",
    usedtechno: "HTML | CSS | SASS | BEM | TRELLO | GITHUB",
    descript:
      "HTML and SASS structure of the client section, ♠ JS library for the comments section, & structure, responsive and interactive buttons. ",
  },
];
