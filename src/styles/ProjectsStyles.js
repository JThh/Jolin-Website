// src/styles/ProjectsStyles.js

const styles = theme => ({
    root: {
        padding: theme.spacing(6, 0),
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    card: {
        padding: theme.spacing(2),
        boxShadow: theme.shadows[3],
    },
    button: {
        textTransform: 'none',
    },
    blackLink: {
        color: 'black',
        textDecoration: 'underline',
        '&:hover': {
            color: 'darkgray', // Slight color change on hover
            textDecoration: 'underline',
        },
    },    
});

export default styles;
