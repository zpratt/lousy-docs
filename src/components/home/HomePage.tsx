import { Flex } from "antd";
import { CoreModulesSection } from "@/components/home/CoreModulesSection";
import { DeveloperPatch } from "@/components/home/DeveloperPatch";
import { HeroSection } from "@/components/home/HeroSection";
import { SpecDrivenSection } from "@/components/home/SpecDrivenSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AntDProvider } from "@/components/providers/AntDProvider";
import { useIsMobile } from "@/hooks/useIsMobile";
import { HEADER_HEIGHT_PX } from "@/lib/layout-constants";

export function HomePage() {
    const isMobile = useIsMobile();

    return (
        <AntDProvider>
            <Flex
                vertical
                style={{ minHeight: "100vh", backgroundColor: "#121410" }}
            >
                <SiteHeader isMobile={isMobile} />
                <main style={{ flex: 1, paddingTop: `${HEADER_HEIGHT_PX}px` }}>
                    <HeroSection />
                    <CoreModulesSection />
                    <SpecDrivenSection />
                    <DeveloperPatch />
                </main>
                <SiteFooter />
            </Flex>
        </AntDProvider>
    );
}
