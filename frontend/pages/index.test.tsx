import { render } from "test-utils"
import { ChakraProvider } from "@chakra-ui/react";

import IndexPage from ".";

describe("Index page", () => {
  it("should match the snapshot", () => {
    const launch = {
      timestamp: 1605401340000,
      mission: "Mission Name",
      site: "Kennedy Space Center",
      rocket: "Falcon 9",
    };
    const { container } = render(<IndexPage launch={launch} />)
    expect(container.firstChild).toMatchSnapshot();
  });
});
