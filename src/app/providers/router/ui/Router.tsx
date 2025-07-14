import { Route, Routes } from 'react-router-dom';
import {BonusProgram, Catalog, Collaboration, Employment, ItemPage, MainPage, ShopMainPage} from "@/pages";

const Router = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/bonus" element={<BonusProgram />} />
          <Route path="/collab" element={<Collaboration />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/shop" element={<ShopMainPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
};

export default Router;
