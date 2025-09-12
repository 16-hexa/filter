import { Route, Routes } from 'react-router-dom';
import {BonusProgram, Catalog, Collaboration, Employment, ItemPage, MainPage, ShopMainPage} from "@/pages";
import {FilterLayout, ShopLayout} from "@shared/layouts";

const Router = () => {
  return (
    <div>
      <Routes>
          <Route element={<FilterLayout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/bonus" element={<BonusProgram />} />
              <Route path="/collab" element={<Collaboration />} />
              <Route path="/employment" element={<Employment />} />
          </Route>

          <Route element={<ShopLayout />}>
              <Route path="/shop" element={<ShopMainPage />} />
              <Route path="catalog" element={<Catalog />} />
          </Route>

          <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
};

export default Router;
