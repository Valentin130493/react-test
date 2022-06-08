import { render } from "test";

import { Login } from "./index";

describe("Login component testing with testing-library", () => {
  const { getByTestId } = render(<Login />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
