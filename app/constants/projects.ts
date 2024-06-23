import React from "react";
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
}

export const FaceRecognition: ProjectProps = {
    title: "Face Recognition",
    subtitle: "Your own Mac OS Face ID",
    projectLink: "https://github.com/GlassesNoGlasses/ComputerVision",
    description: `One of the most fun and rewarding projects I've worked on, 
    this face recognition model implements both the LBPH and Eigenface approaches utilizing OpenCV, Scikit-Learn, Pandas, and NumPy. 
    Custom data pipelines were created to preprocess and augment the users facial data, captured using webcams and the OpenCV library.`,
    imagePaths: ["https://via.placeholder.com/150"],
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
