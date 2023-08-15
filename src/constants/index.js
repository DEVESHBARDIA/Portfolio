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
    amazon,
    ats,
    tesla,
    shopify,
    carrent,
    shirt,
    jobit,
    tripguide,
    threejs,
    portfolio,
  } from "../assets";
  
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
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Website Developer",
      company_name: "AI TECH SOLUTIONS",
      icon: ats,
      iconBg: "#383E56",
      date: "October 2022 - December 2022",
      points: [
        "Developing a web applications using HTML,CSS,JS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to learn multiple technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        " believe that if you show people the problems and you show them the solutions they will be moved to act.",
      name: "Bill Gates",
      designation: "Co-Founder",
      company: "Microsoft",
      image: "https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg",
    },
    {
      testimonial:
        "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      name: "Tim Berners-Lee",
      designation: "Inventer",
      company: "World Wide Web",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "It's not a faith in technology. It's faith in people.",
      name: "Steve Jobs",
      designation: "Co-Founder",
      company: "Apple",
      image: "data:image/jpeg;base64,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",
    },
  ];
  
  const projects = [
    {
      name: "Tshirt Designer",
      description:
        "Web-based platform where you can design your own tshirt with various colours and custom patterns of your choice!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threeJs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/DEVESHBARDIA/Tshirt_Designer",
    },
    {
      name: "Amazon-Clone",
      description:
        "Web application which is a basic fullstack clone of amazon.com built in the learning journey of Frontend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "commerce js",
          color: "green-text-gradient",
        },
        {
          name: "auth0",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/DEVESHBARDIA/Amazon-Clone",
    },
    {
      name: "3D Portfolio",
      description:
        "A 3D Portfolio to showcase all the information realted to me and give a proper sight of my work and experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/DEVESHBARDIA/Portfolio",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };