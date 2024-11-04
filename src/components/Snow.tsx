import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
const { Particles, initParticlesEngine } = await import("@tsparticles/preact");
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";

const Snow = () => {
    const [, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            const { loadBasic } = await import("@tsparticles/basic");
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(
        async (container?: Container): Promise<void> => {
            console.log(container);
        },
        [],
    );

    const options: ISourceOptions = useMemo(
        () => ({
            preset: "snow",
            fullScreen: {
                zIndex: -1,
            },
            particles: {
                size: {
                    value: 4,
                },
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
