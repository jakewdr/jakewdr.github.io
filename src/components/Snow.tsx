import { loadBasic } from "@tsparticles/basic";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";

const Snow = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            preset: "snow",
            fullScreen: {
                zIndex: -1,
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                number: {
                    value: 200,
                },
                move: {
                    enable: true,
                },
                opacity: {
                    value: 0.6,
                },
                random: true,
            },
        }),
        [],
    );

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};

export default Snow;
