import React from "react";
import FetchUsers from "./components/FetchUsers";

const App = () => {
  return (
    < >
      <h1 className="text-center bg-#E2E9F3 text-white text-4xl pt-5 lg:text-6xl" />
        <p className="text-center my-4"> Random User Application</p>
      <FetchUsers />
    </>
  );
}

export default App;
