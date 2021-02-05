import React from "react";
import { styles } from "../../common/styles";
import { PeopleCard } from "../../components";
import { render, personDataMock } from "../test-utils";

describe("PeopleCard", () => {
  it("should match snapshot ", () => {
    const cardWrapper = render(<PeopleCard data={personDataMock} />);
    expect(cardWrapper.toJSON()).toMatchSnapshot();
  });

  it("should have name rendered", () => {
    const { getByText } = render(<PeopleCard data={personDataMock} />);

    const name = getByText(personDataMock.name);
    expect(name).toBeTruthy();
  });

  it("should have crew rendered", () => {
    const { getByText } = render(<PeopleCard data={personDataMock} />);

    const name = getByText(`Mass: ${personDataMock.mass}`);
    expect(name).toBeTruthy();
  });

  it("should render card not found message when data not passed ", () => {
    const { getByText } = render(<PeopleCard />);

    expect(getByText("Cards not found")).toBeTruthy();
  });
});
