import project1_img from "../assets/project_1.png";
import project2_img from "../assets/project_2.png";
import project3_img from "../assets/weatherApp.jpg";
import project4_img from "../assets/project_4.svg";
import project5_img from "../assets/project_5.png";
import project6_img from "../assets/project_6.png";

const projects_data = [
  {
      id: 1,
      name: "School Management System",
      image: project6_img,
      github: "https://github.com/rukshaan/school-management-system",
      tech: "React, Node.js, Express, MongoDB",
      fullDescription: `The School Management System is a comprehensive platform designed to manage the day-to-day operations of schools. 
  It allows admins, teachers, and students to create accounts (login/signup) and access features according to their roles. 

  Admins can add teachers and students, manage subjects, create notices, and handle complaints. 
  Teachers can mark attendance, manage periods, and upload study material. 
  Students can view their attendance, notices, and submit complaints. 

  This system improves communication, ensures transparency, and simplifies administrative tasks for schools.`
    },
    {
      id: 2,
      name: "Weather Prediction App",
      image: project3_img,
      github: "https://github.com/rukshaan/WeatherappFlask",
      tech: "React, Python, Machine Learning, RapidAPI",
      fullDescription: `The Weather Prediction App is designed to provide accurate forecasts for the upcoming week. 
  It fetches historical weather data from RapidAPI and uses machine learning algorithms to predict the weather for the next 7 days. 

  The app displays temperature trends, humidity, wind speed, and other key parameters. 
  Users can check past data trends and get future predictions with visual charts. 
  It serves as a useful tool for planning outdoor activities and staying prepared for changing weather conditions.`
  },
  
  {
    id: 3,
    name: "E-Commerce site",
    image: project2_img,
    fullDescription:
      "This project is an Amazon-like e-commerce website built with Flask. It features user authentication, allowing users to register and log in securely. Customers can browse products, add items to the cart, and manage their selections before checkout, providing a smooth and interactive shopping experience. The platform demonstrates key e-commerce functionalities in a simple and user-friendly way.",
    tech: "HTML, CSS, JavaScript,python",
    github:"https://github.com/rukshaan/Flask_Ecommerce_Site",
    live: ""
  },
  {
    id: 4,
    name: "Portfolio Website",
    image: project1_img,
    description:
      "A personal portfolio website built to showcase my projects, skills, and experience with a clean and responsive design.",
    tech: "React, CSS, JavaScript",
    github: "",
    live: ""
  },
  {
    id: 5,
    name: "Web Application UI",
    image: project4_img,
    description:
      "A web application UI design demonstrating reusable components and clean layout structures.",
    tech: "HTML, CSS",
    github: "",
    live: ""
  },
  {
    id: 6,
    name: "Creative Web Design",
    image: project5_img,
    description:
      "A creative web design project focusing on visual presentation, animations, and responsive layouts.",
    tech: "HTML, CSS, JavaScript",
    github: "",
    live: ""
  }
];

export default projects_data;
