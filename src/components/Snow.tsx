import Snowfall from "react-snowfall";

const Snow = () => {
    return (
        <Snowfall
            style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
            }}
            color="#fff"
            snowflakeCount={200}
        />
    );
};

export { Snow };
