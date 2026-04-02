import { Drawer } from "antd";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import type { DocEntry } from "@/lib/docs-types";

interface MobileDocsDrawerProps {
    docs: DocEntry[];
    currentSlug: string;
    open: boolean;
    onClose: () => void;
}

const drawerBodyStyle: React.CSSProperties = {
    backgroundColor: "#121410",
    padding: 0,
    overscrollBehavior: "contain",
};

const drawerHeaderStyle: React.CSSProperties = {
    backgroundColor: "#121410",
    borderBottom: "1px solid rgba(70, 72, 62, 0.15)",
};

export function MobileDocsDrawer({
    docs,
    currentSlug,
    open,
    onClose,
}: MobileDocsDrawerProps) {
    return (
        <Drawer
            placement="left"
            open={open}
            onClose={onClose}
            size="default"
            styles={{
                body: drawerBodyStyle,
                wrapper: { maxWidth: "280px" },
                header: drawerHeaderStyle,
            }}
            title="Documentation navigation"
        >
            <DocsSidebar
                docs={docs}
                currentSlug={currentSlug}
                variant="drawer"
            />
        </Drawer>
    );
}
