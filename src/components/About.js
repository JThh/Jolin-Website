import React, {Component} from 'react';
import styles from "../styles/AboutStyles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Box, Container,Grid} from "@material-ui/core";
import profilepic from "../images/profilepic.png";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Link from '@material-ui/core/Link';
import courseWork from "../data/CourseWork";
import awardData from "../data/awardData";
import skills from "../data/Skills"
// import news from "../data/News"

class About extends Component {

    renderMods(classes) {
        return courseWork.map(m =>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography variant={"body2"} style={{width:"70%"}}>
                    {m.module}
                </Typography>
                <Typography>
                    {m.grade}
                </Typography>
            </AccordionDetails>
        );
    }

    renderCerts(classes) {
        return awardData.map(a =>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography variant={"body2"}>
                    {a.name}
                </Typography>
            </AccordionDetails>
        );
    }

    renderSkills(classes) {
        return Object.entries(skills).map(e =>
            <Grid item xs={12} className={classes.skillBlock} data-aos={"fade-left"}>
                <Box className={classes.box} width={1} height="100%">
                    <Box className={classes.category} height="100%" >
                        <Typography variant="body1" align={"center"}>
                            {e[0]}
                        </Typography>
                    </Box>
                    <div className={classes.logos}>
                        {e[1].map(s => <div className={classes.logoDiv} style={{}}>
                                <img src={s} alt="skill" style={{width: "auto", maxWidth:"inherit", maxHeight:"75%"}} />
                            </div>
                            )}
                    </div>
                </Box>
            </Grid>
        )
    }

    // renderNews(classes) {
    //     return Object.entries(news).map(e =>
    //         <Grid item xs={12} className={classes.skillBlock} data-aos={"fade-left"}>
    //             <Box className={classes.box} width={1} height="100%">
    //                 <Typography variant="body1" align={"center"}>
    //                     {e[1]}
    //                 </Typography>
    //             </Box>
    //         </Grid>
    //     )
    // }

    render() {
        const {classes} = this.props;
        return (
            <div id={"About"} className={classes.root} >
                <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                    About Me
                </Typography>
                <Container>
                    <Grid container justify={"center"} spacing={5}>
                        <Grid item xs={12} md={5} >
                            <div className={classes.profile} data-aos={"fade-right"}>
                                <img className={classes.image} src={profilepic} alt={"profilepic"}/>
                                <Typography variant="h4" align={"center"} style={{marginBottom: "1rem", marginTop: "1rem"}}>
                                    Han Jiatong
                                </Typography>
                                <Typography variant="h5" align={"center"}>
                                    Year 4 Computer Science, NUS
                                </Typography>
                                <Typography variant="h6" align={"center"}>
                                    Turing Program, NUS
                                </Typography>
                                <Typography variant="body1" align={"center"} style={{marginTop: "1rem", marginBottom: "0.4rem"}}>
                                    major CAP: 4.80/5.00
                                </Typography>
                                <Accordion className={classes.accordion} style={{marginBottom: "0.4rem"}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={"primary"}/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.accordionSummary}
                                    >
                                        <Typography variant="body1" align={"center"} >Coursework</Typography>
                                    </AccordionSummary>
                                    {this.renderMods(classes)}
                                </Accordion>
                                <Accordion className={classes.accordion} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={"primary"}/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.accordionSummary}
                                    >
                                        <Typography variant="body1" align={"center"} >Awards and Certificates</Typography>
                                    </AccordionSummary>
                                    {this.renderCerts(classes)}
                                </Accordion>
                                {/* <Typography variant="body2" align={"center"} style={{marginTop: "0.8rem", marginBottom: "0.1rem"}}>
                                    <Link color="primary" href="https://drive.google.com/uc?export=download&id=1eP2Ix03ooi-1-cZJ-Df729boINKM9sII">
                                        {'Download CV (PDF)'}
                                    </Link>
                                </Typography> */}
                            </div>
                        </Grid>
                        <Grid item container xs={12} md={6} className={classes.skills}>
                            {/* <Typography variant="h4" align={"center"} style={{marginBottom: "1rem", marginTop: "1rem"}} color={"primary"}>
                                News
                            </Typography>
                            {this.renderNews(classes)} */}
                            <Typography variant="h4" align={"center"} style={{marginBottom: "1rem", marginTop: "1rem"}} color={"primary"}>
                                Skills
                            </Typography>
                            {this.renderSkills(classes)}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(About);