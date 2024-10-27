import aboutBackground from "../images/background/aboutBackground.jpg";

const styles = (theme) => ({
    root: {
        paddingTop: `${theme.mixins.toolbar.minHeight}px`,
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
        minHeight: `100vh`, // Changed from 'height: fit-content' to 'minHeight: 100vh' for proper vertical centering
        boxSizing: "border-box",
        background: `url(${aboutBackground}) no-repeat center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Ensures vertical and horizontal centering within the parent
    },
    title: {
        marginBottom: `${theme.mixins.toolbar.minHeight * 0.5}px`,
        marginTop: `${theme.mixins.toolbar.minHeight * 0.5}px`,
    },
    profile: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        width: "80%", // Optional: Sets a responsive width
        maxWidth: "600px", // Optional: Limits the maximum width for larger screens
        [theme.breakpoints.down("sm")]: {
            width: "90%", // Adjust width for smaller screens
        },
    },
    image: {
        height: "13rem",
        width: "13rem", // Ensures the image is perfectly square
        objectFit: "cover", // Maintains aspect ratio and covers the container
        borderRadius: "50%", // Makes the image circular if it's square
    },
    skills: {
        height: "fit-content",
        flexGrow: "0",
        justifyContent: "center",
    },
    skillBlock: {
        height: "4rem",
        margin: "0.5rem 0",
    },
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius: '20px',
        padding: "1rem", // Optional: Adds padding inside the box for better spacing
        margin: "1rem 0", // Optional: Adds margin between boxes
        width: "100%", // Ensures the box takes full width of its container
        boxSizing: "border-box", // Ensures padding and border are included in the total width and height
    },
    category: {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0.5rem",
        minWidth: "20%",
        [theme.breakpoints.down("sm")]: {
            minWidth: "30%",
        },
        backgroundColor: "#018786",
        borderRadius: '20px 0px 0px 20px',
        color: "white",
    },
    logos: {
        padding: "0.2em",
        display: "inline-flex",
        flexDirection: "row",
        height: "inherit",
    },
    logoDiv: {
        width: "auto",
        maxWidth:"10.5vw",
        height: "inherit",
        marginLeft: "0.6rem",
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "10vw",
        },
    },
    accordion: {
        borderRadius: "5px",
        width: "60%",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%", // Adjust accordion width for smaller screens
        },
    },
    accordionSummary: {
        backgroundColor: "#018786",
        borderRadius: "5px",
        color: "white",
    },
    accordionDetails: {
        backgroundColor: "rgba(255,255,255)",
        borderBottom: "1px solid grey",
        display: "flex",
        justifyContent: "space-between",
    },
});

export default styles;
