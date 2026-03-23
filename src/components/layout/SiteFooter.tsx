import { Flex, Typography } from "antd";

const { Text } = Typography;

const footerStyle: React.CSSProperties = {
    backgroundColor: "#1a1c18",
    padding: "2rem",
    marginTop: "auto",
    borderTop: "none",
};

const monoStyle: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "0.75rem",
    color: "#e6ead8",
    opacity: 0.4,
};

const linkStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.75rem",
    color: "#bdce89",
    opacity: 0.6,
    textDecoration: "none",
    cursor: "pointer",
};

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer style={footerStyle}>
            <Flex justify="space-between" align="center" wrap="wrap" gap={16}>
                <Text style={monoStyle}>
                    {`// lousy-docs ${year} — built with astro + antd`}
                </Text>
                <Flex gap={24}>
                    <a
                        href="https://github.com/lousy-agents"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        GitHub
                    </a>
                    <a href="/docs" style={linkStyle}>
                        Docs
                    </a>
                </Flex>
            </Flex>
        </footer>
    );
}
