import { render } from "test";

import { AppointmentHistory } from "./index";

describe("AppointmentHistory component testing with testing-library", () => {
  const { getByTestId } = render(<AppointmentHistory />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
