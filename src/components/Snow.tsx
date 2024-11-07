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
            snowflakeCount={150}
            wind={[0, 0]}
            speed={[0.5, 1]}
            radius={[2, 3]}
            changeFrequency={100}
        />
    );
};

export { Snow };
