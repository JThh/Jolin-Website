import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ProjectsStyles";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, Card, CardContent, Link as MuiLink, Button } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import publications from "../data/ProjectsData";

const Publications = ({ classes }) => {
    return (
        <div id="Publications" className={classes.root}>
            <Typography className={classes.title} variant="h3" align="center" color="primary">
                Publications
            </Typography>
            <Container>
                <Grid container spacing={4}>
                    {publications.map((pub, index) => (
                        <Grid item xs={12} key={index}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        {pub.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {pub.journal}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {new Date(pub.date).toLocaleDateString()} | {pub.type}
                                    </Typography>
                                    <Typography variant="body1" style={{ marginTop: '0.5rem' }}>
                                        <strong>Contributors:</strong> {pub.contributors.join(', ')}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '0.5rem' }}>
                                        <strong>DOI:</strong> <MuiLink href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener">
                                            {pub.doi}
                                        </MuiLink>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '0.5rem' }}>
                                        <strong>Source:</strong> <MuiLink href={pub.sourceLink} target="_blank" rel="noopener">
                                            {pub.source}
                                        </MuiLink>
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        href={pub.showMoreLink}
                                        target="_blank"
                                        rel="noopener"
                                        className={classes.button}
                                        endIcon={<ArrowForwardIcon />}
                                        style={{ marginTop: '1rem' }}
                                    >
                                        Show More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default withStyles(styles)(Publications);
