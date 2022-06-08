import { render } from "test";

import { CardInfo } from "./index";

describe("CardInfo component testing with testing-library", () => {
  const { getByTestId } = render(<CardInfo />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
