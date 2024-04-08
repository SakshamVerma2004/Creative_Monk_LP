import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import NotFound from "../NotFound";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
