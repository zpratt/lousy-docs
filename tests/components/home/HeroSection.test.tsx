import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeroSection } from "@/components/home/HeroSection";

describe("HeroSection", () => {
    describe("given no props", () => {
        it("should render a Get Started link navigating to /docs", () => {
            render(<HeroSection />);

            const link = screen.getByRole("link", { name: /get started/i });

            expect(link).toHaveAttribute("href", "/docs");
        });

        it("should render a View on GitHub link navigating to the GitHub repository", () => {
            render(<HeroSection />);

            const link = screen.getByRole("link", { name: /view on github/i });

            expect(link).toHaveAttribute(
                "href",
                "https://github.com/lousy-agents/lousy-docs",
            );
        });
    });
});
