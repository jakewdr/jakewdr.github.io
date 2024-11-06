import Snowfall from "react-snowfall";

const Snow = () => {
    return (
        <Snowfall
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
            }}
            color="#d9d9d9"
            snowflakeCount={175}
            wind={[-0.5, 0.5]}
            speed={[1, 1.5]}
            radius={[3, 4]}
        />
    );
};

export { Snow };
