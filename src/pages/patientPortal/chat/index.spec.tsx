import { render } from "test";

import { Chat } from "./index";

describe("Chat component testing with testing-library", () => {
  const { getByTestId } = render(<Chat />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
