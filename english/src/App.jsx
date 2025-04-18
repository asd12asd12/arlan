import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

export function Header() {
  return (
    <header>
      <h1 className="assa">Landmark</h1>
    </header>
  );
}

export function Container() {
  return (
    <div className="ship">
      <div className="container">
        <div className="item-photo">
          <img
            className="a"
            src="https://turistas.me/uploads/touristic_materials/big_webp/1PccNsYqINMySjBbjoNs.webp"
            width={600}
            height={400}
            alt=""
          />
        </div>
        <div className="items">
          <div className="item">
            <a
              href="https://en.wikipedia.org/wiki/Lake_Burabay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Köktöbe</h2>
            </a>
            <div className="as">
              <h3>
                <p>
                  {" "}
                  Kok-Tobe is a mountain right above the city of Almaty. It is a
                  very popular{" "}
                </p>{" "}
                <p>
                  {" "}
                  place for people who live in the city and for tourists because
                  you can see a
                </p>{" "}
                <p>
                  {" "}
                  very beautiful view of all of Almaty and the nice mountains
                  around it. The
                </p>{" "}
                name "Kok-Tobe" means "Green Hill" in Kazakh.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="items sa">
          <div className="item">
            <a
              href="https://en.wikipedia.org/wiki/Baiterek_(monument)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Baiterek</h2>
            </a>
            <div className="as">
              <h3>
                <p>
                  Baiterek Tower, built in 2002. It stands 97 meters tall,
                  representing the year
                </p>{" "}
                <p>
                  1997 when Astana became the capital. The golden ball at the
                  top symbolizes
                </p>{" "}
                <p>
                  {" "}
                  the egg of the Samruk bird from Kazakh legend. You can take an
                  elevator
                </p>{" "}
                up and enjoy a panoramic view of the city.
              </h3>
            </div>
          </div>
        </div>
        <div className="item-photo">
          <img
            className="a"
            src="https://media-cdn.tripadvisor.com/media/photo-s/04/47/d9/ca/baiterek.jpg"
            width={600}
            height={400}
            alt=""
          />
        </div>
      </div>

      <div className="container">
        <div className="item-photo">
        <img
            className="a"
            src="https://isb-eng.kz/upload/iblock/035/vq7cgwzr8s31rcm8eky38y9r9jczd6ds.jpeg"
            width={600}
            height={400}
            alt=""
          />
        </div>
        <div className="items">
          <div className="item">
            <a
              href="https://en.wikipedia.org/wiki/Hazrat_Sultan_Mosque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Hazret Sultan Mosque</h2>
            </a>
            <div className="as">
              <h3>
                <p>
                  {" "}
                  Hazret Sultan Mosque is one of the biggest and most beautiful
                  mosques in
                </p>{" "}
                <p>
                  {" "}
                  Central Asia. It is in the city of Astana (Nur-Sultan), the
                  capital of{" "}
                </p>{" "}
                <p>
                  Kazakhstan. It is an important spiritual and cultural center,
                  and also a{" "}
                </p>{" "}
                <p>
                  {" "}
                  popular place for tourists to see. The name of the mosque
                  means "The Holy
                </p>{" "}
                <p>
                  {" "}
                  Sultan" and it is named after Khoja Ahmed Yasawi, a famous
                  theologian
                </p>{" "}
                from the Middle Ages.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
