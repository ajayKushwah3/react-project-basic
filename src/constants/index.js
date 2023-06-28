import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    Techicon,
    Robotronixicon,
    shopify,
    threejs,
    jobit,
    tripguide,
    carrent,
    CRUD,
    Formjs,
    Todoreact,
    arduino,
  } from "../assets";

  // import { TechForest } from "../assets";
  // import { Metaversus } from "../assets";
  // import { HooBank } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Embeded Robotics",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "ExpressJS",
      icon: figma,
    },
    {
      name: "Arduino UNO",
      icon: arduino,
    },
  ];
  
  const experiences = [
    {
      title: "Intern as a front-end developer",
      company_name: "Tech Forest",
      icon: Techicon,
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "Completed internship as a frontend developer, gaining hands-on experience in building web applications.",
        "Developed practical skills in HTML, CSS, JavaScript, and frontend frameworks like React, Bootstrap, tailwind CSS, Material UI",
        "Worked on real-world projects, applying frontend development principles, best practices, and industry standards.",
        "Solved challenges related to responsive layouts, interactivity, performance optimization, and cross-browser compatibility.",
        "Valuable experience in project management tools, version control systems like Git, and industry-standard collaboration platforms.",
      ],
    },
    {
      title: "MERN Stack Web Development",
      company_name: "Training",
      icon: Techicon,
      iconBg: "#383E56",
      date: "Oct 2022 - Dec 2022",
      points: [
        "I gained knowledge of frontend styling and responsiveness using HTML, CSS, Javascript along with the option to utilize UI libraries like Material-UI or Bootstrap, REact js",
        "Express.js: Developed expertise in Express.js, a backend framework for Node.js, to build robust and efficient web APIs and handle server-side logic.",
        "MongoDB: Acquired skills in using MongoDB, a NoSQL database, to store and manage data in a flexible and scalable manner.",
        "Node.js: Acquired knowledge in Node.js, a server-side JavaScript runtime, to build scalable and high-performance server applications.",
      ],
    },
    {
      title: "Embedded Robotics",
      company_name: "Robotronix",
      icon: Robotronixicon,
      iconBg: "#383E56",
      date: "April 2019 - May 2019",
      points: [
        "Worked with sensors and actuators to interact with the physical world, including LEDs, motors, temperature sensors, etc",
        "Learned about the importance of power supply considerations, pin configurations, and wiring connections in Arduino projects.",
        "Learned about Arduino Uno, a widely used microcontroller board based on the ATmega328P microcontroller.",
        "Acquired knowledge of the Arduino programming language, which is based on a simplified version of C programming",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tech Forest Website",
      description:
        "I have created Tech Forest website during my internship by using technologies such as HTML, CSS, and Bootstrap, It was a great experience",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/amisha-motwani/Tech-Forest",
    },
    {
      name: "Metaversus Website",
      description:
        "I have created Metaversus Website by using technologies such as HTML, CSS, Tailwind CSS, javascript, React js, Framer notion, threejs and Vite.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
      ],
      image:jobit,
      source_code_link: "https://github.com/amisha-motwani/Metaverse",
    },
    {
      name: "HooBank App",
      description:
        "I have created bank app by using technologies such as HTML, CSS, Tailwind CSS, javascript, React js, Framer motion and Vite. It was a wonderfull experience",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
      ],
      image:tripguide,
      source_code_link: "https://github.com/amisha-motwani/BankApp",
    },
    {
      name: "CRUD App",
      description:
        "I have created a CRUD (Create, Read, Update, Delete) application using React! CRUD functionality is a fundamental aspect of many web applications, allowing users to create, retrieve, update, and delete data. React with dynamic and interactive web applications.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name:"Javascript",
          color: "green-text-gradient",
        },
      ],
      image:CRUD,
      source_code_link: "https://github.com/amisha-motwani/FormWithReact",
    },
    {
      name: "Survey Form",
      description:
        "I have created a survey form using JavaScript, A survey form is a valuable tool for collecting data and feedback from users. JavaScript, as a versatile scripting language, empowers to create interactive and dynamic web forms that enhance the user experience, I used onClick, onSubmit, onChange events to create it",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
      ],
      image:Formjs,
      source_code_link: "https://github.com/amisha-motwani/FormWithJavascript",
    },
    {
      name: "To-Do List",
      description:
        "I have createda  to-do list application using React, A to-do list is a popular and practical application that helps users organize and manage their tasks effectively. By implementing it with React and React's state management to create a dynamic and interactive user interface.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
      ],
      image:Todoreact,
      source_code_link: "https://github.com/amisha-motwani/ToDoListWithReact",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };