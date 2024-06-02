import Arrow from "/about/arrow.svg"
import Photo from "/public/404/Photo.png"

export const PageNotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <div className="notfound__img">
          <img src={Photo} alt="Photo" />
        </div>
        <div className="notfound_item">
          <div className="notfound__slogan">404</div>
          <div className="notfound__title">Page not found</div>
          <div className="notfound__desc">
            The page you are looking for doesn&#39;t exist or has been moved
          </div>
          <a className="notfound__a" type="submit" href="/">
            Go to Homepage <img src={Arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
