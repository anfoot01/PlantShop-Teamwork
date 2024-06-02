import { WhatGrowService } from "./what_grow"
import { OrganicService } from "./organic_only"
import { CommonBanner } from "../../shared/banner"
import ServiceBanner from "/banners/service-bg.jpg"

export const ServicePage = () => {
  return (
    <div className="service_page">
        <CommonBanner imgSrc={ServiceBanner} altText={'ServiceBanner'}/>
        <WhatGrowService/>
        <OrganicService/>
    </div>
  )
}
