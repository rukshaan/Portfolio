import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HeroParticles = ({ theme }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    // Define colors based on theme
    const darkColors = ["#df8908", "#b415ff", "#ffffff"]; // Hero brand colors
    const lightColors = ["#df8908", "#b415ff", "#161513"]; // Darker accents for light mode
    const particleColors = theme === 'light' ? lightColors : darkColors;

    return (
        <Particles
            id="hero-particles"
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
                fullScreen: { enable: false },
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
                            mode: "bubble", // Different interaction for Hero
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            duration: 2,
                            size: 10,
                            opacity: 0.8
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
                        enable: true, // Connected lines for Hero to look like "network/data" since user is Data Engineer
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default HeroParticles;
