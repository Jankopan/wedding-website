import { useState, useEffect } from "react";
import "./App.css";
import RingsImage from "./assets/wedding-rings.png";
import LocationImage from "./assets/location.png";
import CrossfitImage from "./assets/crossfit.png";
import CoppenhagenImage from "./assets/coppenhagen.png";
import MallorcaImage from "./assets/mallorca.png";
import ItalyImage from "./assets/italy.jpg";
import SvatbaImage from "./assets/svatba.jpeg";
import HradyImage from "./assets/hrady.png";
import EngagementImage from "./assets/engagement.png";

const images = [
  { src: SvatbaImage, alt: "Svatba" },
  { src: CoppenhagenImage, alt: "Copenhagen" },
  { src: MallorcaImage, alt: "Mallorca" },
  { src: ItalyImage, alt: "Italy" },
  { src: CrossfitImage, alt: "Crossfit" },
  { src: HradyImage, alt: "Hrady" },
  { src: EngagementImage, alt: "Zásnuby" },
];

function App() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date("2025-09-20T00:00:00");
    return Math.max(targetDate - new Date(), 0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("2025-09-20T00:00:00");
      setTimeLeft(Math.max(targetDate - new Date(), 0));
    }, 1000);
    if (window.location.hash === "#timer") {
      window.history.replaceState(null, null, " ");
    }
    return () => clearInterval(interval);
  }, []);

  const bgColor = "white";
  const textColor = "black";

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund`;
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: `${bgColor}`,
          padding: "10px 0",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              listStyle: "none",
              padding: 0,
              margin: 15,
              flexWrap: "wrap",
            }}
          >
            {["Program", "Místo", "Dresscode", "Dary"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  style={{ color: `${textColor}`, textDecoration: "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${section.toLowerCase()}`).scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
          fontSize: "5vw",
          lineHeight: "1.2",
          fontFamily: "Whisper",
          position: "relative",
        }}
      >
        <img src={RingsImage} style={{ width: "100%", height: "auto" }} alt="Rings" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -80%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0, color: "grey", fontSize: "4vw" }}>Vanes & Honza</p>
          <p style={{ margin: 0, color: "grey", fontSize: "3vw" }}>se budou brát!</p>
          <p style={{ margin: "20px 0", color: "grey", fontSize: "1.8vw" }}>20. září 2025</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "30px",
          position: "relative",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: "2vw",
          }}
        >
          {formatTime(timeLeft)
            .split(" ")
            .map((part, index) =>
              isNaN(part) ? (
                <span
                  key={index}
                  style={{
                    margin: "0 5px",
                    fontFamily: "Whisper",
                    fontSize: "2vw",
                  }}
                >
                  {part}
                </span>
              ) : (
                <span
                  key={index}
                  style={{
                    fontSize: "3vw",
                    color: "#ffb3ba",
                    margin: "0 10px",
                    fontFamily: "Dancing Script",
                  }}
                >
                  {part}
                </span>
              ),
            )}
        </div>
      </div>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div
        id="program"
        style={{
          boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          width: "90%",
          padding: "20px",
          margin: "20px auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "4vw",
            fontFamily: "Whisper",
            color: "black",
            marginBottom: "0",
            marginTop: "1vw",
          }}
        >
          Program
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: "1vw",
            fontFamily: "Tuffy",
            color: "black",
            marginTop: "0",
          }}
        >
          Je možné, že program ještě trochu upravíme, tak jej doporučujeme průběžně sledovat!
        </p>
        <div className="tile">
          <span>10:00</span>
          <span>Příjezd hostů</span>
        </div>
        <div className="tile">
          <span>11:00</span>
          <span>Obřad</span>
        </div>
        <div className="tile">
          <span>13:00</span>
          <span>Oběd</span>
        </div>
        <div className="tile">
          <span>15:00</span>
          <span>Zábava a hry</span>
        </div>
        <div className="tile">
          <span>18:00</span>
          <span>Večeře</span>
        </div>
        <div className="tile">
          <span>20:00</span>
          <span>Taneční zábava</span>
        </div>
      </div>
      <div id="místo">
        <h2
          style={{
            fontSize: "4vw",
            fontFamily: "Whisper",
            color: "black",
            marginBottom: "0.3vw",
          }}
        >
          Místo
        </h2>
        <p
          style={{
            fontSize: "1.1vw",
            fontFamily: "Tuffy",
            color: "black",
            justifyContent: "center",
            marginTop: "0",
            marginBottom: "2vw",
          }}
        >
          <div>
            <img
              src={LocationImage}
              alt="Location"
              style={{
                width: "3vw",
                height: "3vw",
                marginBottom: "0.5vw",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "1.1vw",
              fontFamily: "Tuffy",
              color: "black",
              marginTop: "0",
              marginBottom: "0",
              alignItems: "center",
            }}
          >
            Řasnická stodola
            <br />
            Horní Řasnice 150, 464 01
            <br />
          </span>
        </p>
        <div
          style={{
            width: "80%",
            height: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139129.59532040983!2d15.090496624593294!3d50.934615919588325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47092bd152caf515%3A0xe79e92b1050c2872!2zxZhhc25pY2vDoSBzdG9kb2xh!5e0!3m2!1scs!2scz!4v1745847933815!5m2!1scs!2scz"
            width="100%"
            height="100%"
            style={{
              border: "0",
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div id="dresscode">
        <h2
          style={{
            textAlign: "center",
            fontSize: "4vw",
            fontFamily: "Whisper",
            color: "black",
            marginBottom: "0",
          }}
        >
          Dress code
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1vw",
            fontFamily: "Tuffy",
            color: "black",
            marginTop: "0",
          }}
        >
          Celý den budeme na zámku, proto bychom rádi, aby se hosté podle toho oblékli. Dámy rádi uvidíme v šatech, pány
          v košili a v saku. P.S. Dámy mohou přijít klidně v podpatcích.
        </p>
      </div>
      <div id="dary">
        <h2
          style={{
            textAlign: "center",
            fontSize: "4vw",
            fontFamily: "Whisper",
            color: "black",
            marginBottom: "0",
          }}
        >
          Dary
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1vw",
            fontFamily: "Tuffy",
            color: "black",
            marginTop: "0",
          }}
        >
          Největším darem jste vy!
          <br /> Svatebčané naši milí, dovolte nám prosbičku,
          <br /> raději než věcné dary, naplňte nám kasičku.
          <br /> Mnohokrát Vám děkujeme za každičký halíř,
          <br /> stokrát lepší než nést domů stodesátý talíř.
        </p>
      </div>
    </>
  );
}

export default App;
