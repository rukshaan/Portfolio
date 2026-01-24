import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AboutParticles = ({ theme }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    // Define colors based on theme
    const darkColors = ["#FF0099", "#00F0FF", "#FFAA00", "#00FF66"];
    const lightColors = ["#800080", "#FF4500", "#008000", "#0000FF"];
    const particleColors = theme === 'light' ? lightColors : darkColors;

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1
            }}
            options={{
                fullScreen: { enable: false }, // Important: confines to parent container
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColors,
                    },
                    links: {
                        color: theme === 'light' ? "#000000" : "#ffffff",
                        distance: 150,
                        enable: false, // Disabled links to match the "colorful floating shape" look more
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.7,
                    },
                    shape: {
                        type: ["circle", "triangle", "edge", "polygon"],
                    },
                    size: {
                        value: { min: 3, max: 8 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default AboutParticles;
