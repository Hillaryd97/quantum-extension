import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Guide from "./pages/Guide";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/guide" element={<Guide />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
