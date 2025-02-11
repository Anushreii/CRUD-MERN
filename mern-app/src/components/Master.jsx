import Fetch from "./Fetch";
import Insert from "./Insert";
import { Route, Routes } from "react-router-dom";
import Update from "./Update";
const Master = () => {
    return(
        <>
         <Routes>
            <Route path="/" element={<Fetch></Fetch>}></Route>
            <Route path="/insert" element={<Insert></Insert>}></Route>
            <Route path="/update/:p_id/:p_name/:p_cost/:p_discount" element={<Update></Update>}></Route>
         </Routes>
        </>
    )
}
export default Master;