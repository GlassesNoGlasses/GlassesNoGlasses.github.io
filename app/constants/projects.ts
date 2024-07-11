
import { ProjectProps } from "../components/project-display/ProjectProps";

const programming = {
    Python: "/svg/python.svg",
    JavaScript: "/svg/javascript.svg",
    TypeScript: "/svg/typescript.svg",
    TailwindCSS: "/svg/tailwindcss.svg",
    React: "/svg/react.svg",
    NextJS: "/svg/nextjs.svg",
    TensorFlow: "/svg/tensorflow.svg",
    PyTorch: "/svg/pytorch.svg",
    NumPy: "/svg/numpy.svg",
    Pandas: "/svg/pandas.svg",
    GCP: "/svg/google-cloud.svg",
    AWSS3: "/svg/aws-s3.svg",
    OpenCV: "/svg/opencv.svg",
    SKLearn: "/svg/scikit-learn.svg",
    Gemini: "/svg/google-gemini.svg",
    Jupyter: "/svg/jupyter.svg",
    MatPlotLib: "/svg/matplotlib.svg",
    CSS: "/svg/css-3.svg",
    HTML: "/svg/html-5.svg",
    NodeJS: "/svg/nodejs.svg",
    MongoDB: "/svg/mongodb.svg",
    Jest: "/svg/jest.svg",
}

// Machine Learning Projects & AI

export const MangaRecommendation: ProjectProps = {
    title: "Manga Recommendation",
    subtitle: "For All the Weebs Out There",
    projectLink: "https://github.com/GlassesNoGlasses/PythonProjects/tree/main/Weeb-Recommendations",
    description: `Find yourself scrolling through manga pages for hours on end? Can't find the perfect manga to read?
    Or worse, have read all the good ones? Try out this manga recommendation model. Utilizing Python, NLTK, Genesis, and more.`,
    languages: [programming.Python],
    frameworks: [programming.SKLearn, programming.Pandas, programming.NumPy]
}

export const FaceRecognition: ProjectProps = {
    title: "Face Recognition",
    subtitle: "Your own Mac OS Face ID",
    projectLink: "https://github.com/GlassesNoGlasses/ComputerVision",
    description: `One of the most fun and rewarding projects I've worked on, 
    this face recognition model implements both the LBPH and Eigenface approaches utilizing OpenCV, Scikit-Learn, Pandas, and NumPy. 
    Custom data pipelines were created to preprocess and augment the users facial data, captured using webcams and the OpenCV library.`,
    languages: [programming.Python],
    frameworks: [programming.OpenCV, programming.SKLearn, programming.Pandas, programming.NumPy]
};

export const FingerPainting: ProjectProps = {
    title: "Finger Painting",
    subtitle: "Childrenhood Throwback",
    projectLink: "https://github.com/GlassesNoGlasses/ComputerVision",
    description: `The first computer vision project I worked on, this finger painting model uses OpenCV, Pandas, NumPy, 
    and Google's Gemini AI to track the user's finger and draw on the screen. The model is able to track the user's finger via 
    OpenCV webcam access and draw on the screen in real-time. A good introductory project all in all.`,
    languages: [programming.Python],
    frameworks: [programming.OpenCV, programming.Gemini, programming.Pandas, programming.NumPy]
}

export const SpamClassification: ProjectProps = {
    title: "Spam Classification",
    subtitle: "Stop the Spam!",
    projectLink: "https://github.com/GlassesNoGlasses/TFProjects/blob/main/projects/text/SMS_Spam_Classification.ipynb",
    description: `Who likes spam messages? Trick question, no one does. After being bombarded with spam messages, I decided 
    to take matters into my own hand and build a spam classification model using TensorFlow, recurrent neural networks, and LLM procedures.`,
    languages: [programming.Python],
    frameworks: [programming.TensorFlow, programming.SKLearn, programming.Jupyter, programming.Pandas, programming.NumPy]
}

export const SnakeAI: ProjectProps = {
    title: "Snake Game AI",
    subtitle: "Bot vs. Bot",
    projectLink: "https://github.com/GlassesNoGlasses/PythonProjects/tree/main/Snake",
    description: `Ever had to stop a game of snake midway through because your teachers or managers was passing through? Well, 
    you won't have to do that anymore! This snake game AI is able to play the game of snake on its own, utilizing the Pygame library for 
    game logistics and PyTorch to train and control the snake.`,
    languages: [programming.Python],
    frameworks: [programming.PyTorch, programming.MatPlotLib, programming.Pandas, programming.NumPy]
}

export const Grantors: ProjectProps = {
    title: "Grantors Web Application",
    subtitle: "A Better Grant Application Process",
    projectLink: "https://github.com/GlassesNoGlasses/c01w24-project-grantors",
    description: `A web application built for the Magnify Access organization to streamline the grant application process. 
    This project utilized the MERN stack and Docker to create a full-stack web application that allows users to browse, apply, and manage grants.`,
    languages: [programming.TypeScript],
    frameworks: [programming.React, programming.TailwindCSS, programming.NodeJS, programming.MongoDB, programming.Jest]
}

// Web Development Projects

export const JustForFun: ProjectProps = {
    title: "Just-For-Fun",
    subtitle: "Bringing Back the 3am Vibes",
    projectLink: "https://just-for-fun-chi.vercel.app/",
    description: `Ever have those random, sleep-deprived, 3am ideas that you thought were crazy, but then remembered that 
    you're a developer and can actually make it happen? This project is a collection of those ideas, ranging from fun games to
    random generators. Built with NextJS.`,
    languages: [programming.TypeScript],
    frameworks: [programming.React, programming.TailwindCSS, programming.NodeJS, programming.NextJS]
}

export const Biscord: ProjectProps = {
    title: "Biscord - Work in Progress",
    subtitle: "A Discord Clone",
    projectLink: "https://github.com/GlassesNoGlasses/biscord",
    description: `A Discord clone with message encryptions built with NextJS and Google Cloud Hosting. This project is still a work in progress,`,
    languages: [programming.TypeScript],
    frameworks: [programming.React, programming.TailwindCSS, programming.NodeJS, programming.MongoDB, programming.NextJS, programming.GCP]
}

export const MangaUpdate: ProjectProps = {
    title: "Manga-Update",
    subtitle: "For All the Closet Manga Lovers Out There",
    projectLink: "https://github.com/GlassesNoGlasses/Manga-Update-Chrome-Extension",
    description: `Ever wanted to stay up-to-date with your favorite manga series without having to constantly check the website? 
    This Chrome extension does just that, allowing users to subscribe to their favorite manga series and receive notifications when new chapters are released. 
    The extension utilizes chrome storage APIs, JavaScript, HTML and pure CSS to create a seamless user experience.`,
    languages: [programming.JavaScript, programming.CSS, programming.HTML],
    frameworks: []
}

export const FortuneCookie: ProjectProps = {
    title: "Fortune Cookie",
    subtitle: "Daily Wisdom",
    projectLink: "https://github.com/GlassesNoGlasses/fortune-cookie-extension",
    description: `"You will be successful in your internship endeavors." - Fortune Cookie. 
    Find your daily dose of wisdom with this Chrome extension that provides users with a new fortune cookie message every day. 
    Chrome storage APIs, JavaScript, HTML, and pure CSS to create a seamless user experience. NumPy, Pandas, and SKLearn were used to generate the fortunes. 
    Find on the Chrome Web Store!`,
    languages: [programming.JavaScript, programming.Python, programming.CSS, programming.HTML],
    frameworks: [programming.NumPy, programming.Pandas, programming.SKLearn]
}

export const WebpageAnalytics: ProjectProps = {
    title: "Webpage Analytics",
    subtitle: "Chrome Time Tracker",
    projectLink: "https://github.com/GlassesNoGlasses/Webpage-Analytics",
    description: `Ever wondered how much time you spend on each website, or on Chrome in general? Look no further! 
    This Chrome extension tracks the amount of time you spend on each website and provides a summary of your browsing habits 
    (i.e. most visited websites, time spent on each website, etc.). Made with Chrome storage APIs, JavaScript, HTML, and pure CSS. 
    Time to unpeal the layers of your browsing habits!`,
    languages: [programming.JavaScript, programming.CSS, programming.HTML],
    frameworks: []
}
