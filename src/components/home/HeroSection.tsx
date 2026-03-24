import { Button, Flex, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const sectionStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    backgroundColor: "#121410",
    padding: "5rem 2rem 4rem",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
};

const gridNoiseStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: `
        radial-gradient(circle at 15% 50%, rgba(189, 206, 137, 0.04) 0%, transparent 50%),
        radial-gradient(circle at 85% 20%, rgba(238, 189, 142, 0.03) 0%, transparent 40%)
    `,
    pointerEvents: "none",
};

const containerStyle: React.CSSProperties = {
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
};

// Intentional asymmetry per DESIGN.md
const offsetStyle: React.CSSProperties = {
    paddingLeft: "1rem",
    borderLeft: "2px dashed rgba(189, 206, 137, 0.2)",
    marginBottom: "0.75rem",
};

const eyebrowStyle: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "0.75rem",
    color: "#eebd8e",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "0.5rem",
};

const headlineStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    color: "#e6ead8",
    margin: 0,
};

const accentStyle: React.CSSProperties = {
    color: "#bdce89",
};

const descStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "1.125rem",
    lineHeight: 1.7,
    color: "#e6ead8",
    opacity: 0.7,
    maxWidth: "560px",
    marginTop: "1.5rem",
};

const primaryButtonStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, #bdce89 0%, #5f6e34 100%)",
    border: "none",
    color: "#121410",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 600,
    borderRadius: "6px",
    height: "44px",
    padding: "0 1.75rem",
    fontSize: "0.9375rem",
};

const secondaryButtonStyle: React.CSSProperties = {
    background: "transparent",
    border: "1px solid rgba(189, 206, 137, 0.2)",
    color: "#bdce89",
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
    borderRadius: "6px",
    height: "44px",
    padding: "0 1.75rem",
    fontSize: "0.9375rem",
};

const statsStyle: React.CSSProperties = {
    marginTop: "4rem",
    paddingTop: "2rem",
    borderTop: "none",
    borderImage: "none",
};

const statLabelStyle: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "0.7rem",
    color: "#e6ead8",
    opacity: 0.4,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    display: "block",
    marginBottom: "4px",
};

const statValueStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#bdce89",
    display: "block",
};

interface StatItem {
    label: string;
    value: string;
}

const stats: StatItem[] = [
    { label: "open source", value: "100%" },
    { label: "framework", value: "astro" },
    { label: "status", value: "beta" },
];

const patchStyle: React.CSSProperties = {
    backgroundColor: "rgba(238, 189, 142, 0.06)",
    borderLeft: "2px dashed rgba(238, 189, 142, 0.35)",
    padding: "1rem 1.25rem",
    borderRadius: "0 6px 6px 0",
    marginTop: "2rem",
    maxWidth: "560px",
};

const patchLabelStyle: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "0.7rem",
    color: "#eebd8e",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "0.375rem",
};

const ECOSYSTEM_LABEL = "// lousy-agents ecosystem";
const DEV_NOTE_LABEL = "// dev note";

export function HeroSection() {
    return (
        <section style={sectionStyle}>
            <div style={gridNoiseStyle} />
            <div style={containerStyle}>
                <div style={offsetStyle}>
                    <Text style={eyebrowStyle}>{ECOSYSTEM_LABEL}</Text>
                </div>

                <Title level={1} style={headlineStyle}>
                    Docs that <span style={accentStyle}>don&apos;t</span>
                    <br />
                    pull punches.
                </Title>

                <Paragraph style={descStyle}>
                    Technical documentation for the Lousy Agents ecosystem.
                    Built for developers who read source code first and docs
                    second—when they absolutely have to.
                </Paragraph>

                <div style={patchStyle}>
                    <Text style={patchLabelStyle}>{DEV_NOTE_LABEL}</Text>
                    <Text
                        style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: "0.875rem",
                            color: "#e6ead8",
                            opacity: 0.75,
                            lineHeight: 1.6,
                        }}
                    >
                        This site is under active construction. Expect rough
                        edges, missing pages, and occasional correctness.
                    </Text>
                </div>

                <Flex gap={12} style={{ marginTop: "2.5rem" }} wrap="wrap">
                    <Button
                        style={primaryButtonStyle}
                        size="large"
                        href="/docs"
                    >
                        Get Started
                    </Button>
                    <Button
                        style={secondaryButtonStyle}
                        size="large"
                        href="https://github.com/lousy-agents/lousy-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </Button>
                </Flex>

                <div style={statsStyle}>
                    <Flex gap={48} wrap="wrap">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <Text style={statLabelStyle}>{stat.label}</Text>
                                <Text style={statValueStyle}>{stat.value}</Text>
                            </div>
                        ))}
                    </Flex>
                </div>
            </div>
        </section>
    );
}
