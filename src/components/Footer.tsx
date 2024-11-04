const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        display: "flex",
        gap: "1rem",
        marginTop: "2rem",
    };

    const pStyle: React.CSSProperties = {
        padding: "0.5rem 1rem",
        color: "#000000",
        backgroundColor: "#E6E6E6",
        textDecoration: "none",
    };

    return (
        <footer style={footerStyle}>
            <p style={pStyle}>
                <i>
                    Written by me in <a href="https://astro.build/">Astro</a>
                </i>
            </p>
        </footer>
    );
};

export default Footer;
