import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import light_profile_image from './light-profile-image.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import gamering from './projects/gamering.jpeg'
import resuify from './projects/resuify.jpeg'
import shadowpanel from './projects/shadowpanel.jpeg'
import ratemystore from './projects/ratemystore.jpeg'
import tomato from "./projects/tomato.jpeg"
import neulife from "./projects/neulife.jpeg"

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    light_profile_image,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Resuify – AI Resume Builder',
        description: 'React.js, Node.js, Express.js, MongoDb, Redux, Tailwind CSS',
        bgImage: resuify,
        link: "https://resuify.vercel.app/"
    },
    {
        title: 'Gamering – Admin-Driven Game Store',
        description: 'React.js, Redux, Tailwind CSS, Supabase',
        bgImage: gamering,
        link: "https://gamering-nu.vercel.app/"
    },
    {
        title: 'ShadowPanel',
        description: 'React.js, Redux, Tailwind CSS',
        bgImage: shadowpanel,
        link: "https://shadow-panel-ochre.vercel.app/"
    },
    {
        title: 'RateMyStore',
        description: 'React.js, Node.js, Express.js, PostgreSQL, Redux, Tailwind CSS',
        bgImage: ratemystore,
        link: "https://rate-my-store-weld.vercel.app/"
    },
    {
        title: 'Tomato',
        description: 'React.js, Node.js, Express.js, MongoDb, Redux, Tailwind CSS',
        bgImage: tomato,
        link: "https://github.com/PrathameshChaughule/Food-Delivery-Website"
    },
    {
        title: 'nuelife',
        description: 'React.js, Tailwind CSS,',
        bgImage: neulife,
        link: "https://github.com/PrathameshChaughule/Interview-Task"
    },
]

export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Full Stack Web Development',
        description: 'Building scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js with clean architecture and RESTful APIs.',
        link: ''
    },
    {
        icon: assets.ui_icon,
        title: 'Frontend Development',
        description: 'Creating responsive and dynamic user interfaces using React.js, Tailwind CSS, Redux Toolkit, and modern UI/UX practices.',
        link: ''
    },
    {
        icon: assets.mobile_icon,
        title: 'Backend & API Development',
        description: 'Designing secure and efficient backend systems with Node.js and Express.js, including JWT authentication, RBAC, and API integrations.',
        link: ''
    },
    {
        icon: assets.web_icon,
        title: 'Custom Web Applications',
        description: 'Developing real-world applications like AI Resume Builder and eCommerce platforms with advanced features like ATS scoring and role-based access.',
        link: ''
    }
]

export const educationData = [
    {
        title: 'Bachelor of Engineering (B.E.)',
        institute: 'Finolex Academy of Management and Technology, Ratnagiri',
        duration: '2021 – 2025',
        description: 'CGPA: 7.6/10. Focused on software development, data structures, and web technologies.'
    },
    {
        title: 'Higher Secondary Certificate (CBSE)',
        institute: 'Jawahar Navodaya Vidyalaya, Ratnagiri',
        duration: '2020 – 2021',
        description: 'Percentage: 81%. Strong foundation in science and mathematics.'
    }
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Node Js, Express Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.E. in Electronics and Telecommunication Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 7 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];