import { render, screen } from "@testing-library/react";

import { SectionIntro } from "@/components/section-intro";

describe("SectionIntro", () => {
  it("renders title and description", () => {
    render(<SectionIntro title="Test Title" description="Summary" />);

    expect(screen.getByRole("heading", { name: "Test Title" })).toBeInTheDocument();
    expect(screen.getByText("Summary")).toBeInTheDocument();
  });

  it("respects the eyebrow label", () => {
    render(<SectionIntro eyebrow="Security" title="Overview" />);

    expect(screen.getByText("Security")).toHaveClass("uppercase");
  });
});
