import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { FlagsProvider } from "react-feature-flags";
import { featureFlags } from "./index.config";

test("renders without crashing", () => {
  expect(
    render(
      <FlagsProvider value={featureFlags}>
        <App />
      </FlagsProvider>
    )
  ).toBeTruthy();
});
