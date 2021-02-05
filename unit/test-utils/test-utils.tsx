import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import React from "react";
import { store } from "../../store";

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (el: React.ReactElement, options = {}) =>
  render(el, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
