import { lazy } from "preact/compat";

const Snowfall = lazy(() => import("react-snowfall"));

const Snow = () => {
    return (
        <Snowfall
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
            }}
            color="#E2E8F0"
            snowflakeCount={175}
            wind={[-0.25, 1.5]}
            speed={[0.5, 2]}
            radius={[2, 3]}
            changeFrequency={200}
        />
    );
};

export { Snow };
