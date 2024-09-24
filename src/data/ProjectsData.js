import colossalai from "../images/colossalai.png"
import unicausal from "../images/unicausal.png"
import socipy from "../images/socipy.png"
import freqawareembed from "../images/freqawareembed.png"
// import graphgre from "../images/graphgre.png"
import cohortanalyzer from "../images/cohortanalyzer.png"
import minkcut from "../images/minkcut.png"

const exportedObject = [
    {
        title: "Colossal-AI",
        imageLink: colossalai,
        description: "A unified deep learning system for big model era. Gained over 5K stars on Github",
        links: {
            github: "https://github.com/hpcaitech/ColossalAI",
            documentation: "https://www.colossalai.org/",
        },
        skills: [
            "CUDA",
            "PyTorch",
            "Transformer"
        ]
    },
    {
        title: "UniCausal",
        imageLink: unicausal,
        description: "A unified benchmark for causal text mining tasks across six datasets and three tasks. ",
        links: {
            github: "https://github.com/tanfiona/UniCausal",
            documentation: "https://arxiv.org/abs/2208.09163"
        },
        skills: [
            "HuggingFace",
            "Causal Reasoning"
        ]
    },
    {
        title: "Socipy",
        imageLink: socipy,
        description: "A social science research toolkit spanning areas of nlp, network analysis, and file streaming.",
        links: {
            github: "https://github.com/JThh/Handy-Tools-for-Social-Science-Research",
        },
        skills: [
            "Natural Languages Proccessing",
        ]
    },
    {
        title: "FreqAwareEmbedding",
        imageLink: freqawareembed,
        description: "A frequency-aware software cache for large recommendation system embeddings.",
        links: {
            paper: "https://arxiv.org/pdf/2208.05321.pdf",
            github: "https://github.com/hpcaitech/FreqCacheEmbedding",
        },
        skills: [
            "Recommendation system",
            "Parallel Computing"
        ]
    },
    {
        title: "Min. K-Cut",
        imageLink: minkcut,
        description: "A survey on minimum K-cut via edge contraction. Top project for graduate-level course CS5330",
        links: {
            paper: "https://drive.google.com/file/d/1eM0dL83fQrJidNrBw4AmepRJr28k8o4_/view?usp=sharing",
            slides: "https://drive.google.com/file/d/1aiWSq-TsxOJ9Wz95BJidQmS-1dwj2D72/view?usp=sharing"
        },
        skills: [
            "Randomized Algorithm",
            "Algorithm Complexity",
        ]
    },
    // {
    //     title: "GraphDRE",
    //     imageLink: graphgre,
    //     description: "Dialogue relation extraction with dependency graph convolutional networks",
    //     links: {
    //         paper: "https://bit.ly/3OcOdud"
    //     },
    //     skills: [
    //         "Graph Neural Networks",
    //         "Dependency Parsing",
    //     ]
    // },
    {
        title: "CohortAnalyzer",
        imageLink: cohortanalyzer,
        description: "Course enrolment statistical analysis toolkit (awarded $200 competition prize) ",
        links: {
            github: "https://github.com/JThh/Cohort-Analysis-Toolkit",
            report: "https://docs.google.com/document/d/1-SaGUwv0BMd5wm3iM6xNp8mwsuuriYKUJOIuHco3By8/edit?usp=sharing",
            demo: "https://jthh-cohort-analysis-toolkit-srcapp-i8e7rj.streamlitapp.com/",
            // certificate: "https://credentials.nus.edu.sg/4e4a1dea-28b9-4ebc-87d5-1cc2d41488b9"
        },
        skills: [
            "Data Visualization",
            "Statistical Analysis",
        ]
    },
];

export default exportedObject;