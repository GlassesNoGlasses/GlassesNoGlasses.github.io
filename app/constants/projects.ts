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
    subtitle: "AI & Machine Learning",
    projectLink: "https://github.com/GlassesNoGlasses/ComputerVision",
    description: "A face recognition model that uses a convolutional neural network to classify faces.",
    imagePaths: ["https://via.placeholder.com/150"],
    languages: [programming.Python],
    frameworks: [programming.OpenCV, programming.SKLearn, programming.Pandas, programming.NumPy]
};

export const FingerPainting: ProjectProps = {
    title: "Finger Painting",
    subtitle: "AI & Machine Learning",
    projectLink: "https://github.com/GlassesNoGlasses/ComputerVision",
    description: "A finger painting model that uses a convolutional neural network to classify finger paintings.",
    languages: [programming.Python],
    frameworks: [programming.OpenCV, programming.Gemini, programming.Pandas, programming.NumPy]
}

export const SpamClassification: ProjectProps = {
    title: "Spam Classification",
    subtitle: "AI & Machine Learning",
    projectLink: "https://github.com/GlassesNoGlasses/TFProjects/blob/main/projects/text/SMS_Spam_Classification.ipynb",
    description: "A spam classification model that uses TensorFlow, recurrent neural networks, and LLM procedures to classify spam messages.",
    languages: [programming.Python],
    frameworks: [programming.TensorFlow, programming.SKLearn, programming.Jupyter, programming.Pandas, programming.NumPy]
}

export const SnakeAI: ProjectProps = {
    title: "Snake Game AI",
    subtitle: "AI & Machine Learning",
    projectLink: "https://github.com/GlassesNoGlasses/PythonProjects/tree/main/Snake",
    description: "A spam classification model that uses TensorFlow, recurrent neural networks, and LLM procedures to classify spam messages.",
    languages: [programming.Python],
    frameworks: [programming.PyTorch, programming.MatPlotLib, programming.Pandas, programming.NumPy]
}
