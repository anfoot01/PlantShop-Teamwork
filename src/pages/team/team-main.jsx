import { TeamTeam } from "./team"
import { CommonBanner } from "../../shared/banner"
import TeamBanner from "/banners/team-bg.jpg"

export const TeamPage = () => {
  return (
    <div className="team_page">
        <CommonBanner imgSrc={TeamBanner} altText={'TeamBanner'}/>
        <TeamTeam/>
    </div>
  )
}
