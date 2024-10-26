import certificateIcon from "../images/certificate-icon.png";
import awardIcon from "../images/award-icon.png";

const exportedObject = [
    {
        id: 1,
        name: "Certificate in Teaching English to Speakers of Other Languages",
        imageLink: certificateIcon, // Replace with actual image if available
        description: "Certified in Teaching English to Speakers of Other Languages, enhancing skills in ESL instruction and curriculum development.",
        date: "July 2021",
        links: {
            // If there's a digital certificate or verification link, add it here
            verification: "https://certificates.example.com/tefl",
        }
    },
    {
        id: 2,
        name: "China Accreditation Test for Translators and Interpreters (CATTI) Level 3 Translator",
        imageLink: certificateIcon, // Replace with actual image if available
        description: "Achieved Level 3 certification in CATTI, demonstrating proficiency in translation and interpretation between Chinese and English.",
        date: "June 2022",
        links: {
            verification: "https://catti.example.com/level3",
        }
    },
    {
        id: 3,
        name: "University Academic Excellence Award",
        imageLink: awardIcon, // Replace with actual image if available
        description: "Recognized for outstanding academic performance and contributions to the university community.",
        date: "July 2023",
        links: {
            // If there's a specific page or announcement, add the link here
            announcement: "https://university.example.com/awards/academic-excellence",
        }
    },
    {
        id: 4,
        name: "Best Overall Academic Performance",
        imageLink: awardIcon, // Replace with actual image if available
        description: "Awarded for maintaining the highest GPA throughout the undergraduate program.",
        date: "July 2023",
        links: {}
    },
    {
        id: 5,
        name: "Best Performance in Final Year Project",
        imageLink: awardIcon, // Replace with actual image if available
        description: "Recognized for exemplary work and research in the final year project on applied linguistics.",
        date: "July 2023",
        links: {}
    }
];

export default exportedObject;
