import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageNotFound } from "../pages/utility_pages/404";

import { TeamPage } from "../pages/team/team-main";
import { Landing } from "../pages/landing/landing-main";
import { AboutUsPage } from "../pages/about-us/aboutus-main";
import { ShopPage } from "../pages/shop/shop-main";
import { ShopItem } from "../pages/shop/shop_item";
import { ServicePage } from "../pages/services/service-main";
import { QualityStandartPage } from "../pages/quality-stan/quality_stan-main";
import { ContactUsPage } from "../pages/contact/contact-main";

export const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<Landing />} />
          <Route index={true} path="/aboutus" element={<AboutUsPage />} />
          <Route index={true} path="/team" element={<TeamPage />} />
          <Route index={true} path="/shop" element={<ShopPage />} />
          <Route index={true} path="/shop/shop-item/:id" element={<ShopItem />} />
          <Route index={true} path="/service" element={<ServicePage />} />
          <Route index={true} path="/quality" element={<QualityStandartPage />} />
          <Route index={true} path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    )
  }
  