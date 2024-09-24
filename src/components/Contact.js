import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/ContactStyles";
import Typography from "@material-ui/core/Typography";
import {Container, IconButton} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div id={"Contact"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                    Let's talk
                </Typography>
                <Container maxWidth={"md"} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div className={classes.card}>
                        <Typography color={"primary"} variant="h4" align={"center"} style={{marginBottom: "1rem"}}>
                            Thank you for dropping by!
                        </Typography>
                        <Typography color={"primary"} variant="h6" align={"center"}>
                            If you'd like to get in touch, feel free to drop me an email at <a style={{color:"inherit"}}href={"mailto:jiatong.han@u.nus.edu"}>jiatong.han@u.nus.edu</a>
                        </Typography>
                        <div className={classes.icons}>
                            <IconButton aria-label="github" href={"https://github.com/JThh/"} target={"_blank"}>
                                <GitHubIcon color={"primary"} />
                            </IconButton>
                            <IconButton aria-label="linkedin" href={"https://www.linkedin.com/in/hanjiatong/"} target={"_blank"}>
                                <LinkedInIcon color={"primary"} />
                            </IconButton>
                            <IconButton aria-label="twitter" href={"https://twitter.com/JiatongJt/"} target={"_blank"}>
                                <TwitterIcon color={"primary"} />
                            </IconButton>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);