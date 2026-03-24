import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/layout/SiteHeader";

describe("SiteHeader", () => {
    describe("given no props", () => {
        it("should render a nav element for navigation links", () => {
            render(<SiteHeader />);

            expect(screen.getByRole("navigation")).toBeInTheDocument();
        });

        it("should render Home navigation link", () => {
            render(<SiteHeader />);

            expect(
                screen.getByRole("link", { name: /home/i }),
            ).toBeInTheDocument();
        });

        it("should render Docs navigation link", () => {
            render(<SiteHeader />);

            expect(
                screen.getByRole("link", { name: /docs/i }),
            ).toBeInTheDocument();
        });

        it("should render the site logo", () => {
            render(<SiteHeader />);

            expect(screen.getByText("lousy-docs")).toBeInTheDocument();
        });
    });
});
