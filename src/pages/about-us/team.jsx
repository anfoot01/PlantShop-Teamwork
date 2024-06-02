import { useState } from "react";
import { TeamCard } from "../../shared/team-card";
import teamData from "../../data/team.json";
export const TeamAboutUs = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const productList = teamData.slice(0, visibleItems);
  return (
    <div>
      {" "}
      <section className="team">
        <p className="team__mark">Team</p>
        <h2 className="team__title">Our Organic Experts</h2>
        <p className="team__desc">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="team__container">
          {productList.map((item, index) => (
            <TeamCard key={item.id || index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
