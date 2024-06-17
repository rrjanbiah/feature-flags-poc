import React from "react";
import "./App.css";
import { Flags } from "react-feature-flags";
import { IFeatureFlag } from "./types";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Feature Flags - Usage</h1>
      </header>
      <Flags
        authorizedFlags={["specialUsersOnly"]}
        renderOn={(activeFeatureFlag: IFeatureFlag[]) => (
          <>
            <h2>Special User Content (renderProps)</h2>
            <p>
              Active Feature Flag: {JSON.stringify(activeFeatureFlag)} (pass it
              down to other components if required, or remove from the argument)
            </p>
          </>
        )}
        renderOff={(activeFeatureFlag: IFeatureFlag[]) => (
          <>
            <h2>Normal User Content (renderProps)</h2>
            <p>
              Active Feature Flag: {JSON.stringify(activeFeatureFlag)} (pass it
              down to other components if required, or remove from the argument)
            </p>
          </>
        )}
      />

      <hr />

      <Flags authorizedFlags={["specialUsersOnly"]}>
        <h2>Special User Content (children props)</h2>
      </Flags>

      <hr />

      <Flags
        authorizedFlags={["specialUsersOnly", "normalUsersOnly"]}
        exactFlags
        renderOn={() => <h2>Normal and Special User Content (renderProps)</h2>}
      />
      <hr />
    </div>
  );
}

export default App;
