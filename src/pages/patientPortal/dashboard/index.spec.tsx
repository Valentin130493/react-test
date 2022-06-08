import { render } from "test";

import { Dashboard } from "./index";

describe("Dashboard component testing with testing-library", () => {
  const { getByTestId } = render(<Dashboard />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
