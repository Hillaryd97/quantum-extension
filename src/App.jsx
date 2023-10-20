import { useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
