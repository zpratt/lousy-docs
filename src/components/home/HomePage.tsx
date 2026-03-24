import { Flex } from "antd";
import { HeroSection } from "@/components/home/HeroSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AntDProvider } from "@/components/providers/AntDProvider";

export function HomePage() {
    return (
        <AntDProvider>
            <Flex
                vertical
                style={{ minHeight: "100vh", backgroundColor: "#121410" }}
            >
                <SiteHeader />
                <main style={{ flex: 1 }}>
                    <HeroSection />
                </main>
                <SiteFooter />
            </Flex>
        </AntDProvider>
    );
}
