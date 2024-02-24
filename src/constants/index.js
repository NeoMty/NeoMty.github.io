import { silma, itesm, fugas, equilibrium, gruporeforma, famai } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    java,
    python,
    swift,
    cs,
    androidstudio,
    unity,
    sqlserver,
    kotlin,
    mobile,
    bracketscurly,
    books,
    chat
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Development",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Development",
    },
    {
        imageUrl: python,
        name: "Python 3",
        type: "Development",
    },
    {
        imageUrl: swift,
        name: "Swift",
        type: "Development",
    },
    {
        imageUrl: cs,
        name: "C#",
        type: "Development",
    },
    {
        imageUrl: androidstudio,
        name: "Android Studio",
        type: "Mobile Development",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    },
    {
        imageUrl: sqlserver,
        name: "SQL Server",
        type: "Database",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Mobile Development",
    },
];

export const experiences = [
    {
        title: "UI Developer",
        company_name: "Equilibrium",
        icon: equilibrium,
        iconBg: "#accbe1",
        date: "February 2021 - June 2021",
        points: [
            "Developing a physics simulator app using SwiftUI",
            "Collaborating with other college students to deliver a product that high school students can use to learn.",
            "Implementing an intuitive design and ensuring cross-device compatibility.",
            "Participating in code reviews and providing constructive feedback to other classmates.",
        ],
    },
    {
        title: "Compiler/VM Developer",
        company_name: "Obiecti - Tecnológico de Monterrey",
        icon: itesm,
        iconBg: "#a2d2ff",
        date: "February 2022 - June 2022",
        points: [
            "Developing a new compiler and a virtual machine for a new programming language.",
            "Collaborating with other college student to design a new programming language in one semester.",
            "Implementing regular expressions, syntaxis diagrams, context-free grammar and other concepts related.",
            "Implementing a virtual machine so it can read and make operations following the instructions .obj file generated of a compiler.",
        ],
    },
    {
        title: "Android Auto Developer",
        company_name: "FuGas",
        icon: fugas,
        iconBg: "#fc8d8d",
        date: "September 2022",
        points: [
            "Winner of Blue Yonder's Challenge in Hack Mty 2022.",
            "Developing a car app using Android Auto, React.js and other related technologies.",
            "Collaborating with other college students to self-learn and solve a challenge under 24 hours.",
            "Implementing an interface easy to use so people can use it in a car without risking themselves.",
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Silma",
        icon: silma,
        iconBg: "#accbe1",
        date: "February 2023 - June 2023",
        points: [
            "Developing an inventory application for books and purchase items using React.js and other related technologies.",
            "Collaborating with other college students to self-learn front-end and back-end.",
            "Implementing a clean design and a robust structure that can be improved later on in the future.",
            "Participating in code reviews and providing feedback to other college students using SCRUM methodology with the help of a teacher.",
        ],
    },
    {
        title: "Android Mobile Developer",
        company_name: "Grupo Reforma",
        icon: gruporeforma,
        iconBg: "#C7F9CC",
        date: "August 2023 - February 2024",
        points: [
            "Developing mobile applications for Android devices using Android Studio, Kotlin and Java.",
            "Collaborating with cross-functional teams to create multiple types of interactive experiences for users.",
            "Implementing responsive design and ensuring a consistent content across all devices.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Famai",
        icon: famai,
        iconBg: "#accbe1",
        date: "September 2023",
        points: [
            "Project of Hack Mty 2023.",
            "A search engine where it reads a file coming of multiple file sources and can make a search of crucial information to optimize processes.",
            "Collaborating with other college students to self-learn and solve a challenge under 24 hours.",
            "Implementing an interface using React, Open AI API, Streamlit, and some libraries of Python which include ZeroMQ and Fitz.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: mobile,
        theme: 'btn-back-red',
        name: 'Equilibrium',
        description: 'Developing a physics simulator app using SwiftUI to help students learn and study physics concepts.',
        link: 'https://github.com/aroquev00/moviles-proyecto',
    },
    {
        iconUrl: bracketscurly,
        theme: 'btn-back-green',
        name: 'Obiecti',
        description: 'A compiler for a new programming language and virtual machine that it can read the .obj file generated by the compiler and follow its instructions for operations.',
        link: 'https://github.com/JuanMBriones/Obiecti',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'FuGas',
        description: 'Winner of Blue Yonder\'s Challenge in Hack Mty 2022. App to analyze gas consumption. Record data directly from car with Android Auto. Visualize data analysis via web with React.',
        link: 'https://devpost.com/software/fugas',
    },
    {
        iconUrl: books,
        theme: 'btn-back-pink',
        name: 'Silma Inventory',
        description: 'Inventory system for an independent editorial making easy manage books and purchase items as also product assortments.',
        link: 'https://github.com/gpaez-ol/silma',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'Famai',
        description: 'A search engine which reads a file coming of multiple file sources and can make a search of crucial information to optimize processes.',
        link: 'https://devpost.com/software/famai',
    }
];