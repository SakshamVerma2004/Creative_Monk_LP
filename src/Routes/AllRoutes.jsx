import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage";
import NotFound from "../NotFound";
import Thankyou from "../Thankyou";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/thankyou" element={<Thankyou/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
