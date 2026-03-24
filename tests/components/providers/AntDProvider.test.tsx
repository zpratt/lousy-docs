import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AntDProvider } from "@/components/providers/AntDProvider";

describe("AntDProvider", () => {
    describe("given child content", () => {
        it("renders children without crashing", () => {
            render(
                <AntDProvider>
                    <span data-testid="child">hello</span>
                </AntDProvider>,
            );

            expect(screen.getByTestId("child")).toBeInTheDocument();
        });
    });
});
