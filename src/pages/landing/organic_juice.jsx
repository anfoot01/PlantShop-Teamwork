import { organic } from "../../data/organic";

export const OrganicLanding = () => {
  return (
    <section className="organic">
      <div className="organic-items">
        {organic.map((item) => (
          <div
            key={item.id}
            className="organic-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="organic-item__title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
