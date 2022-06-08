import { render } from "test";

import { PhysicianInfo } from "./index";

describe("PhysicianInfo component testing with testing-library", () => {
  const { getByTestId } = render(<PhysicianInfo />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
