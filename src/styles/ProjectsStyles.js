// src/styles/PublicationsStyles.js

const styles = theme => ({
    root: {
        padding: theme.spacing(6, 0),
        backgroundColor: theme.palette.background.default,
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
});

export default styles;
