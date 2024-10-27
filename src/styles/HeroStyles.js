// HeroStyles.js

const styles = (theme) => ({
    root: {
        display: "flex", // Enables Flexbox on the root container
        alignItems: "center", // Vertically centers the content
        justifyContent: "center", // Horizontally centers the content
        minHeight: "100vh", // Ensures the root takes at least the full viewport height
        boxSizing: "border-box",
        background: "linear-gradient(#0E1219, #1A2533)", // Maintains the gradient background
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative", // Sets the root as the containing block for absolutely positioned children
        paddingTop: `${theme.mixins.toolbar.minHeight}px`, // Preserves toolbar spacing
        paddingBottom: `${theme.mixins.toolbar.minHeight}px`,
    },
    particles: {
        position: "absolute", // Positions particles behind the content
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, // Ensures particles are below the main content
    },
    rootGrid: {
        display: "flex", // Enables Flexbox on the Grid container
        flexDirection: "column", // Stacks children vertically
        alignItems: "center", // Centers children horizontally
        justifyContent: "center", // Centers children vertically
        zIndex: 2, // Ensures content is above particles
        width: "100%", // Allows Grid to take full width of the parent
        padding: "1rem", // Adds padding for better spacing
        boxSizing: "border-box",
    },
    intro: {
        textAlign: "center", // Centers text within the intro section
        "& a": {
            textDecoration: "none", // Removes underline from links
        },
        flexWrap: "wrap", // Allows content to wrap on smaller screens
    },
    imageContainer: {
        textAlign: "center", // Centers the image
        "& img":  {
            width: "13rem", // Sets image width
            height: "13rem", // Ensures the image is square
            objectFit: "cover", // Maintains aspect ratio
            borderRadius: "50%", // Makes the image circular
        },
    },
    button: {
        marginTop: "25px", // Adds space above the button
    },
});

export default styles;
