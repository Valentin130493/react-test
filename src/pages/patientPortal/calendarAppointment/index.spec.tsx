import { render } from "test";

import { CalendarAppointment } from "./index";

describe("CalendarAppointment component testing with testing-library", () => {
  const { getByTestId } = render(<CalendarAppointment />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
