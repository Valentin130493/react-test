import { render } from "test";

import { ExamDetails } from "./index";

describe("ExamDetails component testing with testing-library", () => {
  const { getByTestId } = render(<ExamDetails />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
