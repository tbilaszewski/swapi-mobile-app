import PeopleScreen from "../../screens/PeopleScreen";
import React from "react";
import { render } from "../test-utils";
import { apisAreAvailable } from "expo";

describe("PeopleScreen", () => {
  it("should match snapshot", () => {
    const screen = render(<PeopleScreen />);

    jest.mock("api");

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
