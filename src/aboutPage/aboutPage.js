/**
 * @author Gregory Vincent
 * @date 5/24/22
 * About Page for Real Estate website
 */
import "./aboutPage.css";

function AboutPage() {
  return (
    <div className="main-container">
      {/** Text block about the owners. Top left quadrant of the page */}
      <div className="textBlock-One animated-text-left">
        <h1>About the owners of GKVRealEstate - Greg and Keisha Vincent</h1>
        <p>
          GKVRealEstate is the collective effort of the aforementioned owners.
          Both being highly educated and driven, they decided to embark on a
          journey to ensure financial freedom for not only themselves as time
          goes on, but their children and descendants far into the future.
        </p>
      </div>
      {/**Text block about the website creator and Real Estate. Bottom right quadrant of the page */}
      <div className="textBlock-Two animated-text-right">
        <h1>Real Estate Investing and our Values</h1>
        <p>
          {" "}
          To anybody with the means to get into such a practice, Real Estate
          Investing can serve as a way to secure yourself and family
          financially. However(and we can't stress this enough), it is not
          solely about collecting a check. At the end of the day, people's
          livelihoods are somewhat within your hands, which is why it is much
          more important to form honest and amicable relationships with tenants,
          so that both parties are satisfied.
        </p>
      </div>
    </div>
  );
}

/**
 * <div className="text-container">
        <p>
          GKVRealEstate is the collective effort of Gregory and Keisha Vincent.
          Both being highly educated and driven, they decided to embark on a
          journey to ensure financial freedom for not only themselves as time
          goes on, but their children as well. That leads to me, Gregory Vincent
          Jr. As the designer of this website's appearance, I take great pride
          in our family's collective success.
        </p>
      </div>
 */

export default AboutPage;