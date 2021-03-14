import { render } from "test-utils";

import IndexPage from "./index";

describe("Index page", () => {
  it("should match the snapshot", () => {
    const { container } = render(<IndexPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
