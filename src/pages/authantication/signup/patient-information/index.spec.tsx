import { render } from "test";

import { PatientInfo } from "./index";

describe("PatientInfo component testing with testing-library", () => {
  const { getByTestId } = render(<PatientInfo />);

  const container = getByTestId("container");

  it("renders without crashing", () => {
    expect(container.parentElement).toBeTruthy();
  });

  it("renders successfuly next.js logo", () => {
    expect(container.firstChild).toBeDefined();
  });
});
