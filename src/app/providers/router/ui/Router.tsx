import { Route, Routes } from 'react-router-dom';
import {BonusProgram, MainPage} from "@/pages";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bonus" element={<BonusProgram />} />
      </Routes>
    </div>
  );
};

export default Router;
