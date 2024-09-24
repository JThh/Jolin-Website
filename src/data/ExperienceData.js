import React from "react";
import Button from '@material-ui/core/Button';

const exportedObject = [
    // {
    //     type:"item",
    //     title: "Software Engineer Intern",
    //     subHeading: "ByteDance, Feb 2023 - May 2023 (Expected)",
    //     details: [
    //         "AML Research Team: develop large-scale and integrated ML system for multi-modal learning",
    //         // "Advisors: Haibin Lin, Junda Zhang",
    //     ]
    // },
    {
        type:"item",
        title: "High Performance Software Engineer Intern",
        subHeading: "HPC-AI Tech / Lab, NUS, May 2022 - Aug 2022",
        details: [
            "Parallelized training of large embedding layers using multiple GPUs; invented parallel mixed-vocabulary embedding bag that supports up to 100B-parameter embedding.",
            "Initiated software cached GPU embedding that saves over 90% of embedding parameters",
            "Contributed to Colossal.AI, an open source project that gained over 5k stars on Github",
            "Supervised by Prof. Yang You, NUS Presidential Young Professor",
            [<Button variant="outlined" size={"small"} href="https://github.com/hpcaitech/ColossalAI" color={"inherit"} target={"_blank"}>
                View project
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://arxiv.org/pdf/2208.05321.pdf" color={"inherit"} target={"_blank"}>
                View paper
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://medium.com/@yangyou_berkeley/embedding-training-with-1-gpu-memory-and-10-times-less-budget-an-open-source-solution-for-6b4c3aba07a8" color={"inherit"} target={"_blank"}>
                View blogpost
            </Button>]
        ]
    },
    {
        type:"item",
        title: "Research Engineer Intern",
        subHeading: "Lee Kuan Yee School of Public Policy, NUS, Aug 2022 - Now",
        details: [
            "Automated online scraping of PDF files from over 1,000 websites and streamlined conversion to processable raw texts",
            "Embedded texts using GloVe pre-trained embeddings and evaluated similarity with subject keywords",
            "Adopted semi-supervised learning on small amount of labeled tweets, classifying ten times larger amount of unlabeled data by pretrained LLM",
            "Supervised by Prof. Ba Yuhao.",
            <Button variant="outlined" size={"small"} href="https://github.com/JThh/Handy-Tools-for-Social-Science-Research" color={"inherit"} target={"_blank"}>
                View open-source project
            </Button>
        ],
    },
    {
        type:"item",
        title: "Research Intern",
        subHeading: "Dartmouth College, Jun 2022 - Now",
        details: [
            "Perform chess player style few-shot prediction with limited training data",
            "Pretrain graph embedding using Role2Vec and adopt GCN-LSTM to encode sequential information from chess plays",
            "Surpass complex transformer-based model performances by 10% with small-scale training and test datasets (~400 games per player)",
            "Supervised by Prof. Soroush Vosoughi and advised by Wang Lili",
            <Button variant="outlined" size={"small"} href="https://www.cs.dartmouth.edu/~soroush/" color={"inherit"} target={"_blank"}>
                View Group Page
            </Button>,
        ],
    },
    // {
    //     type:"item",
    //     title: "Academic Services & Experiences",
    //     subHeading: "Volunteers, seminars, and academic reviews",
    //     details: [
    //         "[Nov 2022] Served as a student volunteer for AACL-IJCNLP 2022 virtual conference",
    //         "[Aug 2022] Served as sub-reviewer for Annual Meeting of the Association for Computational Linguistics(ACL) conference paper on discourse relation classification",
    //         "Mar 2022] Invited to talk at WING Recsys Seminar publicly on topic of my UROP research: Application of Graph Embedding in Course Recommender Systems",
    //         "Oct 2021: Presented Stanford's PinSage paper to research class (CS2309) students and professors",
    //         [<Button variant="outlined" size={"small"} href="https://wing-nus.github.io/ir-seminar/" color={"inherit"} target={"_blank"}>
    //             View seminar
    //         </Button>,
    //         " ",
    //         <Button variant="outlined" size={"small"} href="https://docs.google.com/presentation/d/1d5i2Vys4NiapB7rw27-PaGVc44Nx5_DuGAXr8Q4rZq0/edit?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View PinSage slides
    //         </Button>]
    //     ],
    // },
    // {
    //     type:"item",
    //     title: "Paper Reviewer",
    //     subHeading: "ACL, Aug 2022",
    //     details: [
    //         "Served as sub-reviewer for Annual Meeting of the Association for Computational Linguistics(ACL) conference paper on discourse relation classification",
    //         // <Button variant="outlined" size={"small"} href="https://yisong.me/" color={"inherit"} target={"_blank"}>
    //         //     View my written reviews
    //         // </Button>,
    //     ],
    // },
    {
        type:"item",
        title: "Teaching Assistant",
        subHeading: "National University of Singapore, Jan 2021 - May 2021, Aug 2022 - Dec 2022",
        details: [
            "Teach graduate-level course IND5003 (data analytics for sense-making) with Prof. Lim Tiong Wee, and undergraduate-level BT2101 (Econometrics Modeling for Business Analytics)",
            "Co-host 3-hour weekly session to address over 70 students' concerns on machine learning and statistical concepts",
            "Mentor over 15 project groups and grade project reports and presentations",
        ]
    },
    {
        type:"item",
        title: "Undergraduate Researcher",
        subHeading: "National University of Singapore, Aug 2022 - Now",
        details: [
            "Final Year Project (On-going); Topic: weighted fairness notion of indivisible chores. Supervised by NUS Presidential Young Professor Warut Suksompong",
            "Adapted over 10 fairness notions such as WEF, WPROP, WMMS for indivisible goods to indivisible chores",
            "Proved implications from WEF(x,y) to WPROP(x,y) without help of WPROP*(x,y) notion",
            "Established relations between WEF(x,y) and 2-WMMS notions and reached contrary conclusions to indivisible goods",
            [<Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1bSG1p9HqGQ9u2nN03TPoGOuKI0iD3W7P/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View interim thesis
            </Button>,' ',
            <Button variant="outlined" size={"small"} href="https://docs.google.com/presentation/d/1KL4rEWKGvqqiAF8LqTBSI6CTjimJkdIUUEJrXsiIu3M/edit?usp=sharing" color={"inherit"} target={"_blank"}>
                View defense slides
            </Button>]
        ],
    },
    {
        type:"item",
        title: "Research Engineer Intern",
        subHeading: "Lee Kuan Yee School of Public Policy, NUS, May 2022 - Aug 2022",
        details: [
            "Collaborated with Postdoc Lucas Shen and Lim Jing Zhi on task: match job profiles with government-issued occupation categories",
            "Applied search engine domain-specific methods: Boolean, (Weighted) Vector Space Retrieval, in task scenario: job profiles as queries and occupations as documents",
            "Employed unsupervised learning on over 3 million unlabeled job profiles and labeled them with high human-verified accuracy",
            "Refined query algorithms via multi-processing and achieved a query speed of lower than 0.1s per record",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1BOr9og58OsLSWCRijI1kAoHFHYHv0JFv/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View technical report
            </Button>,
        ],
    },
    // {
    //     type:"item",
    //     title: "Seminar Speaker",
    //     subHeading: "National University of Singapore, Mar 2022 & Oct 2021",
    //     details: [
    //         "Talk #1: invited with NUS Ph.D. students to talk at WING Recsys Seminar open to the public. Topic on my UROP research: Application of Graph Embedding in Course Recommender Systems",
    //         "Talk #2: presented PinSage paper to fellow research (CS2309) classmates and professors",
    //         [<Button variant="outlined" size={"small"} href="https://docs.google.com/presentation/d/19k22sj5RgvQf-8qGXNi7d-VU9UhajRYhbz0pyZ0kbCs/edit?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View slides (#1)
    //         </Button>,
    //         " ",
    //         <Button variant="outlined" size={"small"} href="https://wing-nus.github.io/ir-seminar/" color={"inherit"} target={"_blank"}>
    //             View seminar (#1)
    //         </Button>, " "],
    //         [<Button variant="outlined" size={"small"} href="https://docs.google.com/presentation/d/1d5i2Vys4NiapB7rw27-PaGVc44Nx5_DuGAXr8Q4rZq0/edit?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View slides (#2)
    //         </Button>,
    //         " ",
    //         <Button variant="outlined" size={"small"} href="https://docs.google.com/document/d/13RdJ_eTRLocqB6hyu7AnbNFBi04MUwzBt-PoSxnEWBk/edit?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View testimonial (#2)
    //         </Button>,]
    //     ],
    // },
    {
        type:"item",
        title: "NLP Engineer Intern",
        subHeading: "RevisitVocab, Jan 2022 - May 2022",
        details: [
            "Worked closely with CEO, Darius He, on his startup flagship product Revisitvocab, an English learning platform",
            "Designed three algorithms to classifty sentence difficulties; reached 95% F1 score with pretrained LLMs",
            "Initiated knowledge-based recommender system design to push user-profile specific resources",
            <Button variant="outlined" size={"small"} href="https://www.revisitvocab.com/" color={"inherit"} target={"_blank"}>
                View Revisitvocab
            </Button>,
        ],
    },
    {
        type:"year",
        year: 2022
    },
    {
        type:"item",
        title: "Undergraduate Researcher",
        subHeading: "National University of Singapore, May 2021 - May 2022",
        details: [
            "Undergraduate Research Opportunity Program; Researched at NUS WING (Web IR/NLP) Group, supervised by A/P Min-Yen Kan",
            "Designed statistical Surprisal metric and leveraged divergence metrics to analyse university course policy effects",
            "Applied knowledge graph hyperbolic embedding to construct university-level course recommender informed with course relationships",
            "Identified graph sparsity and applied cross-community graph augmentation technique boosting performance by 10%",
            // "Designed statistical Surprisal metric and divergence metrics to analyze cross-cohort university policy effectiveness",
            // "Applied hyperbolic embedding to pretrain tree-structured course knowledge graphs and built course relation-informed course recommender",
            // "Identified graph sparsity issue and performed edge augmentations boosting performance by over 10% across metrics",
            // "Seeking to submit as a workshop paper to conferences such as ITiCSE 2023 and LoG 2022",
            [<Button variant="outlined" size={"small"} href="https://bit.ly/3yiDIiR" color={"inherit"} target={"_blank"}>
                View survey paper
            </Button>, 
            " ",
            <Button variant="outlined" size={"small"} href="https://bit.ly/3lZFgcK" color={"inherit"} target={"_blank"}>
                View methodology paper
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1f26YuKNQAWCBWztKdPFQNwDPigz1NYf7/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View UROP thesis
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://bit.ly/3DIYYTL" color={"inherit"} target={"_blank"}>
                View presentation
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://jthh-cohort-analysis-toolkit-srcapp-i8e7rj.streamlitapp.com/" color={"inherit"} target={"_blank"}>
                View visual web-app
            </Button>,]
        ]
    },
    {
        type:"item",
        title: "Research Engineer Intern",
        subHeading: "Interdisciplinary Project: CASMIDA, NUS, Dec 2021 - Feb 2022",
        details: [
            "Project: identify role of digital tools in campus sexual misconduct cases; supervised by Prof. Bimlesh Wadhwa and Prof. Michelle Ho",
            "Conducted Vadar and Roberta sentiment and emotional analysis to quantigy public concerns on misconduct cases",
            "Performed social network analysis on Twitter by node degrees, weakly connected components, and hashtag co-occurrences",
            "Co-authored a journal paper and submitted it to top-tier journal Computers in Human Behavior",
            [<Button variant="outlined" size={"small"} href="https://casmida.com/" color={"inherit"} target={"_blank"}>
                View project page
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1Rv8D0JzWVx4e4tS34hYSqNE6aN0BTMW0/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View peer-review draft
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1zeTut0f9_pGHu_-eWcRQcVThvcwE_7sc/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View technical report
            </Button>,]
        ]
    },
    {
        type:"item",
        title: "Summer Analyst (DDC)",
        subHeading: "Deloitte, Remote, Jun 2021 - Aug 2021",
        details: [
            "Tasked to analyze current financial market needs: business management interfaces powered with artificial intelligence.",
            "Created intelligent business interface 'Qinda' receiving natural language orders and returning business dashboards; expected to benefit over one-fifth of businesses in Chinese financial market.",
            "Awarded excellent pitch and product design among over one thousand competitors worldwide",
            [<Button variant="outlined" size={"small"} href="https://docs.google.com/document/d/1COy8IxYc7K1sq1sF7cCu36CX-DUjf0KU/edit?usp=sharing&ouid=106025952695326074993&rtpof=true&sd=true" color={"inherit"} target={"_blank"}>
                View testimonial
            </Button>,
            " ",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1zDA6gcEUT7V5F9_qN4k3h8GCqpRL0YdP/view?usp=sharing" color={"inherit"} target={"_blank"}>
                View demo video
            </Button>]
        ],
    },
    {
        type:"year",
        year: 2021
    },
    {
        type:"item",
        title: "Vice Director, Operations",
        subHeading: "Global China Connection, NUS, Dec 2020 - Jun 2021",
        details: [
            "Invited industry leaders such as Investment Head of J.P.Morgan Asia and academics such as Dean of NUS Business School to deliver talks on enhancing China's connection with world",
            "Maintained operations website, prepared host slides, and connected with speakers",
            "Participated in Alibaba-GCC collaborated event and won a 2nd grand team prize in branding competition",
            <Button variant="outlined" size={"small"} href="https://drive.google.com/drive/folders/1QppjqdbBbX9YdqVeryF9Ybh18-9OC4Fm?usp=sharing" color={"inherit"} target={"_blank"}>
                View event photos
            </Button>,
        ],
    },
    {
        type:"item",
        title: "Programmes Executive",
        subHeading: "Student's Life Cell, NUS Students' Union (NUSSU), Nov 2020 - Aug 2021",
        details: [
            "Coordinated NUS annual Rags and Flags event, manage floats, and design scoresheets",
            "Co-headed team to analyze student prevalent sentiments from feedback surveys, illuminating COVID-19 policy effects",
            <Button variant="outlined" size={"small"} href="https://jthh-pru-feedback-dashboard-application-app-vsf6qa.streamlitapp.com/" color={"inherit"} target={"_blank"}>
                View demo
            </Button>,
        ],
    },
    // {
    //     type:"year",
    //     year: 2020
    // },
    // {
    //     type:"item",
    //     title: "Student Volunteer",
    //     subHeading: "Moral Welfare Home, Thye Hua Kwan Moral Society, Singapore, Jun 2020 - Oct 2020",
    //     details: [
    //         "Delivered weekly caring session to intellectually challenging seniors and made presentation to keep them relaxed and refreshed",
    //         <Button variant="outlined" size={"small"} href="https://docs.google.com/presentation/d/1sjQF146O5Z3LTKELkrFPigSmMCqDWDKYIS0cKSJGAOw/edit?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View slides
    //         </Button>,
    //     ],
    // },
    // {
    //     type:"item",
    //     title: "CCA Member",
    //     subHeading: "National University of Singapore, Aug 2019 - May 2020",
    //     details: [
    //         "Song writer and singer at Geyao Band; content writer at Wechat subscription team that has 20k+ followers; member of NUS Debate Team",
    //         <Button variant="outlined" size={"small"} href="https://drive.google.com/file/d/1EZ_AAwITRAI2I2Y7FpKWf3dcDk3n-w54/view?usp=sharing" color={"inherit"} target={"_blank"}>
    //             View writing sample
    //         </Button>,
    //     ],
    // }
];

export default exportedObject;