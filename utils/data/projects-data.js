import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'WanderPack',
        description: "Developed a full-stack web application that connects travelers with hosts offering accommodations, similar to Airbnb. Implemented authentication and authorization functionalities using Passport JS, ensuring secure user access.Allowed users to list, edit and browse listings, see details, and leave reviews. Reviews can be deleted only",
        tools: ['Express', 'MongoDB', 'MVC', 'JavaScript', 'Mongoose', 'Mongo Atlas', 'CSS', 'Bootstrap', 'Joi', 'Claudinary', 'Mapbox'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Translit',
        description: 'Built and maintained a password-protected web app powered by GPT, enabling seamless language translations for users. Enhanced the efficiency of a Legal Translation Company by 50%, streamlining their translation processes. Improved UX by providing customizable options for input and output languages, document types, and GPT versions.',
        tools: ['React', 'ChatGPT API'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Kill Code',
        description: 'Developed a dynamic web application that enables users to write, edit, and test HTML, CSS, and JavaScript code seamlessly within their browser environment. Introduced real-time rendering: Allows users to witness immediate output on the same webpage while coding, enhancing the interactive coding experience.',
        tools: ['React', 'CSS','React ACE'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'SUMZ',
        description: "Built an AI-Powered app enabling users to input blog or web page links and receive concise summaries of the content. Introduced a user-friendly feature to track summary history and associated URLs, using the web browser's local storage.",
        tools: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Rapid API'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'iNAture',
        description: "Led a 5-member team and developed a minimalist academic project on the concept of a Forest Monitoring System aimed at promoting environmental conservation and awareness. Introduced a unique functionality allowing users to seamlessly switch between single map previews and double map previews for comparative analysis between two different locations.",
        tools: ['React', 'Leaflet JS', 'CSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Note It',
        description: "Built fully functional Note-Taking Mobile Application using React Native, featuring CRUD operations and authentication. • Ensured the security and accessibility of notes by using Firebase for the backend, providing a reliable storage solution.",
        tools: ['React Native', 'JavaScript', 'Firebase Firestore', 'Firebase Authentication'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 7,
        name: 'Artik',
        description: " Developed a GPT-powered web app, enabling users to generate articles based on a given keyword of selected word count. Applied real-time word count tracking enhancing the UX. ",
        tools: ['NextJS', 'JavaScript', 'CSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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