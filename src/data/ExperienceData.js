import React from "react";
import Button from '@material-ui/core/Button';


const exportedObject = [
    {
        type: "item",
        title: "English Teacher",
        subHeading: "Oxford English Centre, Oxfordshire, UK, Aug 2024 - Sep 2024",
        details: [
            "Planned and delivered a 4-week curriculum for over 30 pre-intermediate and upper-intermediate Ukrainian immigrants.",
            "Selected tailored learning materials and teaching approaches, significantly enhancing students’ classroom engagement.",
            <Button
                variant="outlined"
                size={"small"}
                href="https://yining-han.netlify.app/experience#oxford-english-centre"
                color={"inherit"}
                target={"_blank"}
            >
                Learn More
            </Button>
        ],
    },
    {
        type: "item",
        title: "Intern",
        subHeading: "The Oxford Research Centre in the Humanities (TORCH), Oxfordshire, UK, Dec 2023",
        details: [
            "Checked over 100 spelling mistakes and broken links using Silktide to improve TORCH website content and accessibility.",
            "Produced subtitles for recent events on TORCH's YouTube channel to enhance accessibility.",
            <Button
                variant="outlined"
                size={"small"}
                href="https://yining-han.netlify.app/experience#torch-intern"
                color={"inherit"}
                target={"_blank"}
            >
                Learn More
            </Button>
        ],
    },
    {
        type: "item",
        title: "IELTS Tutor",
        subHeading: "New Oriental Education & Technology Group, Nanjing, China, Jun 2023 - Aug 2023",
        details: [
            "Improved the quality of materials for IELTS listening by proofreading 500-page slides and 200-page workbooks before class.",
            "Taught 50 high school students IELTS listening skills, accumulating an overall of 200 hours of teaching.",
            "Utilized review quizzes on tenses, irregular verbs, and articles, as well as playful games such as bingo for after-class practice, helping more than half of the students achieve Band 6.5 in IELTS listening.",
            <Button
                variant="outlined"
                size={"small"}
                href="https://yining-han.netlify.app/experience#ielts-tutor"
                color={"inherit"}
                target={"_blank"}
            >
                Learn More
            </Button>
        ],
    },
    {
        type: "item",
        title: "Research Assistant",
        subHeading: "Xi'an Jiaotong-Liverpool University, Jun 2022 - Aug 2023",
        details: [
            "Built a cross-sectional corpus of 26 Chinese undergraduates' disciplinary writing using Sketch Engine.",
            "Conducted Error Analysis, categorizing errors into grammatical, lexical-grammatical, and lexical errors.",
            "Designed a poster to demonstrate the corpus construction process and the ratio of each type of error.",
            <Button
                variant="outlined"
                size={"small"}
                href="https://yining-han.netlify.app/experience#research-assistant"
                color={"inherit"}
                target={"_blank"}
            >
                Learn More
            </Button>
        ],
    },
    {
        type: "item",
        title: "Undergraduate Researcher",
        subHeading: "Xi'an Jiaotong-Liverpool University, Sep 2019 - Jul 2023",
        details: [
            "Final Year Project: Systematically reviewed the effectiveness of AI-assisted tools in second and foreign language learning.",
            "Adapted methodologies for applied linguistics research, focusing on vocabulary acquisition and bilingualism.",
            "Published findings in reputable journals, contributing to the field of applied linguistics.",
            <Button
                variant="outlined"
                size={"small"}
                href="https://yining-han.netlify.app/publications"
                color={"inherit"}
                target={"_blank"}
            >
                View Publications
            </Button>
        ],
    },
    // Add more relevant experiences as needed
];

export default exportedObject;
