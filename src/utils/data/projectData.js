// projectsData.js

import Blogger from "@/assets/ProjectOverviews/Blogger.png"
import Codecraft from "@/assets/ProjectOverviews/CodeCrafter.png"
import Line from "@/assets/ProjectOverviews/Line.png"
import MusicCourse from "@/assets/ProjectOverviews/MusicCourse.png"
import PassStore from "@/assets/ProjectOverviews/PassStore.png"
import ToDo from "@/assets/ProjectOverviews/ToDo.png"
import VoiceNote from "@/assets/ProjectOverviews/VoiceNote.png"
import BubbleGame from "@/assets/ProjectOverviews/BubbleGame.png"


export const projects = [
  {
    title: 'Line',
    image: Line, // Replace with the correct image path
    description: 'Line is a collaborative drawing app where creativity meets real-time interaction on a shared canvas.',
    detailedDescription: `Line breaks the boundaries of online collaboration, allowing users to draw, create, and interact on a single 
    canvas in real-time. Whether you're sketching a masterpiece or brainstorming ideas, multiple users can join in and collaborate seamlessly. 
    Share your creative process by sending a link, and even download your artwork as an image. Line makes drawing fun and collaborative in a way 
    that’s never been easier.`,
    technologies: ['Next.js', 'React', 'Socket.io', 'Redux Toolkit', 'Tailwind CSS'],
    liveDemo: 'https://line-tau.vercel.app/',
    sourceCode: 'https://github.com/TheAJ25/Line',
  },
  {
    title: 'Pass-Store',
    image: PassStore, // Replace with the correct image path
    description: 'Pass-Store is a secure, user-friendly web app designed to manage your website credentials effortlessly.',
    detailedDescription: `Pass-Store ensures your login information stays safe with top-notch encryption and organization. 
    It allows you to store, edit, and retrieve website credentials without the fear of forgetting them. The easy-to-use interface 
    gives you full control over your passwords, while its accessibility across devices means you can access your credentials from anywhere. 
    Say goodbye to password chaos and hello to a simplified, secure solution.`,
    technologies: ['React', 'React-DOM', 'React-Toastify', 'UUID'],
    liveDemo: 'https://pass-storage.netlify.app/',
    sourceCode: 'https://github.com/TheAJ25/Pass-Store',
  },
  {
    title: 'Codecraft',
    image: Codecraft, // Replace with the correct image path
    description: 'Codecraft is an interactive, real-time code compiler designed to help developers test and showcase HTML, CSS, and JavaScript.',
    detailedDescription: `Codecraft brings code to life in real-time, allowing developers to see the immediate result of their work. 
    This online compiler lets you write, test, and preview HTML, CSS, and JavaScript in one space. It also features user authentication, 
    enabling developers to save and revisit their work anytime. With a rich editor and multi-panel view, Codecraft makes coding easier, 
    faster, and more fun.`,
    technologies: ['TypeScript', 'React', 'Vite', 'Codemirror', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT'],
    liveDemo: 'https://github.com/TheAJ25/CodeCraft/tree/main/client',
    sourceCode: 'https://github.com/TheAJ25/CodeCraft',
  },
  {
    title: 'Music Course App',
    image: MusicCourse,
    description: 'A frontend music course application built using Next.js and Aceternity UI, providing an interactive platform for users to learn music.',
    detailedDescription: 'This project is a frontend web application designed to deliver online music courses. It features a clean, user-friendly interface built using Next.js and Aceternity UI, allowing users to browse different music courses, view content, and track their progress. The app offers easy navigation, video integration, and interactive features, making learning music accessible and engaging for everyone.',
    technologies: ['Next.js', 'Aceternity UI', 'React'],
    liveDemo: 'https://music-course-app-r9cd-cmbv1gevh-abhijit-shaws-projects.vercel.app/',
    sourceCode: 'https://github.com/TheAJ25/Music_Course_app'
  },
  {
    title: 'VoiceNote',
    image: VoiceNote, // Replace with the correct image path
    description: 'VoiceNote is an intuitive app that transforms your voice into organized, accessible notes.',
    detailedDescription: `VoiceNote reimagines how you capture thoughts and ideas. With an intuitive interface and seamless recording 
    capabilities, you can quickly turn your voice into text. The app also provides effective note management, allowing you to organize and 
    revisit your recorded thoughts at any time. Whether you’re on the go or in the middle of a brainstorming session, VoiceNote is there to 
    capture your voice and keep you organized.`,
    technologies: ['React', 'React-DOM', 'React-Scripts', 'Web-Vitals', 'Babel Plugins', 'Testing Library', 'GitHub Pages'],
    liveDemo: 'https://voicetotextnotes.netlify.app/',
    sourceCode: 'https://github.com/TheAJ25/VoiceNote',
  },
  {
    title: 'To-Do App',
    image: ToDo, // Replace with the correct image path
    description: 'Stay organized and manage tasks effectively with this user-friendly To-Do app built with Next.js.',
    detailedDescription: `To-Do App is more than just a task manager – it’s a productivity partner. With seamless task creation, editing, and deletion, 
    managing your day has never been easier. The app uses Next.js for fast loading and SEO benefits, ensuring that your productivity tool is 
    both efficient and accessible. Get rid of your sticky notes and start managing your tasks in the most intuitive way possible.`,
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostCSS', 'Autoprefixer'],
    liveDemo: 'https://todotheaj.netlify.app/',
    sourceCode: 'https://github.com/TheAJ25/Context_api_todo',
  },
  {
    title: 'Blogger',
    image: Blogger, // Replace with the correct image path
    description: 'Create, edit, and manage your blog posts effortlessly with Blogger, a responsive and intuitive blogging platform.',
    detailedDescription: `Blogger is designed for those who love to write and share their thoughts with the world. Whether you're crafting 
    your next big idea or just sharing daily musings, Blogger provides an easy-to-use platform for creating, editing, and publishing posts. 
    Real-time updates and seamless notifications keep your writing journey on track, while the responsive design ensures your blog looks great 
    on any device.`,
    technologies: ['Next.js', 'React', 'Mongoose', 'Axios', 'Tailwind CSS'],
    liveDemo: 'https://blogger-chi-peach.vercel.app/',
    sourceCode: 'https://github.com/TheAJ25/Blogger',
  },
  {
    title: 'Bubble Game',
    image: BubbleGame,
    description: 'A fun and engaging bubble game built using simple HTML, CSS, and JavaScript, where users click on numbers in bubbles to score points within a timer.',
    detailedDescription: 'The Bubble Game challenges users to click on a number inside a bubble while a timer is running. Each bubble clicked scores points, and the game ends when the timer runs out. The game encourages fast thinking and hand-eye coordination. It is built using basic web technologies (HTML, CSS, JavaScript), providing a simple yet enjoyable interactive experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://bubblegamepro.netlify.app/',
    sourceCode: 'https://github.com/TheAJ25/Bubble_Game'
  }
];
