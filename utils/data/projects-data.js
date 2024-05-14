import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "DropikMe",
    description:
      "Contributed to the development of DropikMe, a comprehensive transport management system, leveraging the MERN stack. Integrated Google Maps API for location services, implemented file upload functionality using Multer for image uploads, and facilitated secure storage with Amazon S3 bucket integration.",
    tools: [
      "Express",
      "MongoDB",
      "Node",
      "React",
      "AWS S3",
      "Node Mailer",
      "Joi",
      "Google Map Api",
      "EC2",
      "Multer",
      "Firebase",
      "TypeScript",
      "AWS S3",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "AMC Tracker",
    description:
      "Played a key role in the development of AMC Tracker, utilizing Next.js for efficient server-side rendering and enhanced performance. Collaborated closely with team members to design and implement robust features, ensuring seamless tracking of asset maintenance contracts.",
    tools: [
      "NextJS",
      "Node Mailer",
      "TypeScript",
      "MongoDb",
      "React-hook-form",
      "Material-ui",
      "JWT",
      "",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Library Management System (LMS)",
    description:
      "Led the development of a Library Management System (LMS) using Next.js, focusing on intuitive user interfaces and efficient data management. Implemented features for cataloging, borrowing, and tracking library resources, enhancing accessibility and usability for both administrators and users",
    tools: [
      "NextJS",
      "Node Mailer",
      "TypeScript",
      "MongoDb",
      "React-hook-form",
      "Material-ui",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Society Management System",
    description:
      "Currently involved in the development of an Society Management System using React, Node.js, Express, and PostgreSQL. Responsible for designing and implementing various modules, including event creation, registration, and attendee management, streamline event planning and execution processes",
    tools: [
      "React",
      "Vite",
      "PWA",
      "Firebase",
      "QR Generator",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
