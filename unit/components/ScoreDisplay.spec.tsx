import React from "react";
import { ScoreDisplay } from "../../components";
import { render } from "../test-utils";

describe("ScoreDisplay", () => {
  it("should match snapshot ", () => {
    const cardWrapper = render(<ScoreDisplay />);
    expect(cardWrapper.toJSON()).toMatchSnapshot();
  });

  it("should have both score with initial values ", () => {
    const { getAllByText } = render(<ScoreDisplay />);
    expect(getAllByText("0").length).toBe(2);
  });
});
