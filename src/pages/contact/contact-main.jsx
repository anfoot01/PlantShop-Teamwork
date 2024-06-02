import { FarmsContactUs } from "./farms"
import { FormContactUs } from "./form"
import { ContactsContactUs } from "./contacts"
import { CommonBanner } from "../../shared/banner"
import ContactBanner from "/banners/contact-bg.jpg"

export const ContactUsPage = () => {
  return (
    <div className="contactus_page">
        <CommonBanner imgSrc={ContactBanner} altText={'ContactBanner'}/>
        <ContactsContactUs/>
        <FarmsContactUs/>
        <FormContactUs/>
    </div>
  )
}
