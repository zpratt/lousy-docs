import { Flex } from "antd";

interface DocEntry {
    id: string;
    title: string;
}

interface DocsSidebarProps {
    docs: DocEntry[];
    currentSlug: string;
}

const sidebarStyle: React.CSSProperties = {
    width: "240px",
    minWidth: "240px",
    padding: "1.5rem 1rem",
    borderRight: "1px solid rgba(70, 72, 62, 0.15)",
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

const linkStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "0.875rem",
    color: "#e6ead8",
    textDecoration: "none",
    padding: "0.375rem 0.75rem",
    borderRadius: "4px",
    display: "block",
    transition: "background-color 0.15s, color 0.15s",
};

const activeLinkStyle: React.CSSProperties = {
    ...linkStyle,
    color: "#bdce89",
    backgroundColor: "rgba(189, 206, 137, 0.1)",
    borderLeft: "2px solid #bdce89",
    paddingLeft: "calc(0.75rem - 2px)",
};

function formatNavLabel(id: string): string {
    if (id === "README") {
        return "Overview";
    }
    return id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const navOrder = [
    "README",
    "init",
    "new",
    "lint",
    "copilot-setup",
    "mcp-server",
];

export function DocsSidebar({ docs, currentSlug }: DocsSidebarProps) {
    const sortedDocs = [...docs].sort((a, b) => {
        const aIndex = navOrder.indexOf(a.id);
        const bIndex = navOrder.indexOf(b.id);
        const aOrder = aIndex === -1 ? navOrder.length : aIndex;
        const bOrder = bIndex === -1 ? navOrder.length : bIndex;
        if (aOrder !== bOrder) {
            return aOrder - bOrder;
        }
        return a.id.localeCompare(b.id);
    });

    return (
        <aside style={sidebarStyle}>
            <div style={headingStyle}>Documentation</div>
            <Flex vertical gap={2}>
                {sortedDocs.map((doc) => (
                    <a
                        key={doc.id}
                        href={`/docs/${doc.id}`}
                        style={
                            currentSlug === doc.id ? activeLinkStyle : linkStyle
                        }
                    >
                        {doc.title || formatNavLabel(doc.id)}
                    </a>
                ))}
            </Flex>
        </aside>
    );
}
