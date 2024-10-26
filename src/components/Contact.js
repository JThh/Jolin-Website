import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ContactStyles";
import Typography from "@material-ui/core/Typography";
import { Container, IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language'; // Icon for personal website

class Contact extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id={"Contact"} className={classes.root}>
                <Typography className={classes.title} variant="h3" align={"center"} color={"primary"}>
                    Let's Talk
                </Typography>
                <Container maxWidth={"md"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={classes.card}>
                        <Typography color={"primary"} variant="h4" align={"center"} style={{ marginBottom: "1rem" }}>
                            Thank you for dropping by!
                        </Typography>
                        <Typography color={"primary"} variant="h6" align={"center"}>
                            If you'd like to get in touch, feel free to drop me an email at <a style={{ color: "inherit", textDecoration: "none" }} href={"mailto:yininghan19@outlook.com"}>yininghan19@outlook.com</a>
                        </Typography>
                        <div className={classes.icons}>
                            {/* GitHub Icon */}
                            <IconButton
                                aria-label="GitHub"
                                href={"https://github.com/YN-hh"} // Replace with Yining's GitHub URL
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <GitHubIcon color={"primary"} />
                            </IconButton>

                            {/* LinkedIn Icon */}
                            <IconButton
                                aria-label="LinkedIn"
                                href={"https://www.linkedin.com/in/yining-han-6832a6295/"} // Replace with Yining's LinkedIn URL
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon color={"primary"} />
                            </IconButton>

                            {/* Personal Website Icon */}
                            <IconButton
                                aria-label="Personal Website"
                                href={"https://yining-han.netlify.app"}
                                target={"_blank"}
                                rel="noopener noreferrer"
                            >
                                <LanguageIcon color={"primary"} />
                            </IconButton>

                            {/* Remove Twitter Icon if not needed */}
                            {/* <IconButton aria-label="Twitter" href={"https://twitter.com/YOUR_TWITTER_HANDLE"} target={"_blank"} rel="noopener noreferrer">
                                <TwitterIcon color={"primary"} />
                            </IconButton> */}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);
