import { render } from "test";

import { Appointment } from "./index";

describe("Appointment component testing with testing-library", () => {
  const { getByTestId } = render(<Appointment />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
