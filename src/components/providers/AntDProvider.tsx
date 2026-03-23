import { theme as antdTheme, ConfigProvider } from "antd";
import type { ReactNode } from "react";

const { darkAlgorithm } = antdTheme;

const terminalTheme = {
    algorithm: darkAlgorithm,
    token: {
        // Base colors
        colorBgBase: "#121410",
        colorBgContainer: "#1e201c",
        colorBgElevated: "#333531",
        colorBgLayout: "#121410",

        // Primary — Terminal Glow
        colorPrimary: "#bdce89",
        colorPrimaryBg: "#5f6e34",

        // Text
        colorTextBase: "#e6ead8",
        colorTextSecondary: "#eebd8e",

        // Borders — minimal per the "No-Line Rule"
        colorBorder: "#46483e26", // outline-variant at 15% opacity
        colorBorderSecondary: "#46483e1a",
        borderRadius: 6,
        borderRadiusLG: 8,
        borderRadiusSM: 4,

        // Typography
        fontFamily: "'Manrope', sans-serif",
        fontFamilyCode: "'Courier New', Courier, monospace",

        // Spacing
        sizeUnit: 4,
        sizeStep: 4,

        // Error color
        colorError: "#ffb4ab",
        colorWarning: "#eebd8e",

        // Motion
        motionDurationMid: "0.15s",
    },
    components: {
        Button: {
            defaultBg: "transparent",
            defaultBorderColor: "#bdce8933",
            defaultColor: "#bdce89",
            primaryShadow: "none",
            borderRadius: 6,
        },
        Menu: {
            darkItemBg: "transparent",
            darkSubMenuItemBg: "#1a1c18",
        },
        Typography: {
            titleMarginBottom: "0.5em",
            titleMarginTop: "0",
        },
    },
};

interface AntDProviderProps {
    children: ReactNode;
}

export function AntDProvider({ children }: AntDProviderProps) {
    return <ConfigProvider theme={terminalTheme}>{children}</ConfigProvider>;
}
