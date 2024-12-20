import React, { Component } from 'react';
import Particles from "react-particles-js";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/HeroStyles";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { HashLink } from "react-router-hash-link";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typed from "react-typed";

class Hero extends Component {
    particlesConfig = {
        particles: {
            number: {
                value: window.innerWidth < 600 ? 50 : 100,
            },
            size: {
                value: 3,
            },
            color: {
                value: "#3f51b5", // Primary color for consistency
            },
            line_linked: {
                color: "#3f51b5",
            },
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
            }
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div id={"Home"} className={classes.root}>
                <Particles className={classes.particles} params={this.particlesConfig} />
                <Grid container className={classes.rootGrid} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} className={classes.intro}>
                        <Typography variant="h3" color="primary" align="center">
                            Hello, I'm Yining (Jolin) Han
                        </Typography>
                        <Typography variant="h5" color="primary" align="center" style={{ marginTop: "1rem" }}>
                            and I'm <Typed
                                strings={[
                                    "an Applied Linguistics Researcher",
                                    "a Second Language Acquisition Specialist",
                                    "an Educational Technology Enthusiast"
                                ]}
                                typeSpeed={40}
                                backSpeed={45}
                                loop
                            />
                        </Typography>
                        <HashLink smooth to="/#About" className={classes.hashLink}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                endIcon={<ArrowDownwardIcon fontSize="large" />}
                            >
                                View More
                            </Button>
                        </HashLink>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Hero);
