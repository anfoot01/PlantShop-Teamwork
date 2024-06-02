import { WhyUsAboutUs } from "./why_us"
import { AboutUsAboutUs } from "./about_us"
import { OfferAboutUs } from "./offer"
import { TeamAboutUs } from "./team"
import { CommonBanner } from "../../shared/banner"
import AboutUsBanner from "/banners/about-bg.jpg"

export const AboutUsPage = () => {
  return (
    <div className="aboutus_page">
          <CommonBanner imgSrc={AboutUsBanner} altText={'aboutus-banner'}/>
          <AboutUsAboutUs />
          <WhyUsAboutUs />
          <TeamAboutUs />
          <OfferAboutUs />
    </div>
  )
}
