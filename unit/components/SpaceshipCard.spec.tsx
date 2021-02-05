import React from "react";
import { SpaceshipCard } from "../../components/SpaceshipCard";
import { render, spaceshipDataMock } from "../test-utils";

describe("SpaceshipCard", () => {
  it("should match snapshot ", () => {
    const cardWrapper = render(<SpaceshipCard data={spaceshipDataMock} />);
    expect(cardWrapper.toJSON()).toMatchSnapshot();
  });

  it("should have name rendered", () => {
    const { getByText } = render(<SpaceshipCard data={spaceshipDataMock} />);

    const name = getByText(spaceshipDataMock.name);
    expect(name).toBeTruthy();
  });

  it("should have crew rendered", () => {
    const { getByText } = render(<SpaceshipCard data={spaceshipDataMock} />);

    const name = getByText(`Crew: ${spaceshipDataMock.crew}`);
    expect(name).toBeTruthy();
  });

  it("should render card not found message when data not passed ", () => {
    const { getByText } = render(<SpaceshipCard />);

    expect(getByText("Cards not found")).toBeTruthy();
  });
});
