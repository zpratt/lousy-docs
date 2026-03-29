import { Flex } from "antd";

interface TocHeading {
    depth: number;
    slug: string;
    text: string;
}

interface DocsTableOfContentsProps {
    headings: TocHeading[];
}

const tocStyle: React.CSSProperties = {
    width: "200px",
    minWidth: "200px",
    padding: "1.5rem 1rem",
    borderLeft: "1px solid rgba(70, 72, 62, 0.15)",
    height: "calc(100vh - 64px)",
    position: "sticky",
    top: "64px",
    overflowY: "auto",
};

const headingStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "0.75rem",
    color: "rgba(189, 206, 137, 0.5)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "1rem",
};

const tocLinkStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.75rem",
    color: "rgba(230, 234, 216, 0.6)",
    textDecoration: "none",
    display: "block",
    padding: "0.25rem 0",
    transition: "color 0.15s",
    lineHeight: 1.4,
};

export function DocsTableOfContents({ headings }: DocsTableOfContentsProps) {
    const filteredHeadings = headings.filter(
        (h) => h.depth >= 2 && h.depth <= 3,
    );

    if (filteredHeadings.length === 0) {
        return null;
    }

    return (
        <nav style={tocStyle} aria-label="Table of contents">
            <div style={headingStyle}>On This Page</div>
            <Flex vertical gap={0}>
                {filteredHeadings.map((heading) => (
                    <a
                        key={heading.slug}
                        href={`#${heading.slug}`}
                        style={{
                            ...tocLinkStyle,
                            paddingLeft:
                                heading.depth === 3 ? "1rem" : undefined,
                        }}
                    >
                        {heading.text}
                    </a>
                ))}
            </Flex>
        </nav>
    );
}
