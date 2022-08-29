import { Slider } from "@mui/material";
import { useState } from "react";
import colorScroll from "./osuTheme";

const classes = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100vh",
    width: "100%",
  },
  navbar: {
    width: "100%",
    height: "55px",
    position: "absolute",
  },
  background: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "1rem",
    marginTop: "55px",
  },
  name: {
    width: "100%",
  },
  title: {
    width: "100%",
  },
  header: {
    width: "100%",
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  section: {
    width: "100%",
  },
};

function App() {
  const [theme, setTheme] = useState({
    navbar: "white",
    background: "#666666",
    title: "#202020",
    header: "#4d4d4d",
    body: "#222222",
    text: "white",
    highlight: "white",
  });

  //range [0,100]
  const [percent, setPercent] = useState(0);

  const handleChange = (event, percent) => {
    setPercent(percent);
    const updatedColor = Object.assign(theme, {
      navbar: colorScroll(percent, 57, 172),
      background: colorScroll(percent, 23, 28),
      title: colorScroll(percent, 31, 46),
      header: colorScroll(percent, 46, 56),
      body: colorScroll(percent, 34, 42),
      section: colorScroll(percent, 46, 56),
      text: colorScroll(percent, 166, 217),
      highlight: colorScroll(percent, 102, 255),
    });
    setTheme(updatedColor);
  };

  return (
    <div style={classes.container}>
      <div style={{ ...classes.navbar, backgroundColor: theme.navbar }} />

      <div style={{ ...classes.background, backgroundColor: theme.background }}>
        <div style={{ maxWidth: "1200px" }}>
          <div style={{ ...classes.title, backgroundColor: theme.title }}>
            <div
              style={{
                padding: "0.5rem",
                paddingInline: "2rem",
                fontSize: "1.25rem",
              }}
            >
              Some stuff
            </div>
          </div>
          <div style={{ ...classes.header, backgroundColor: theme.header }}>
            <div style={{ padding: "0.5rem", paddingInline: "2rem" }}>
              Jojo Quotes
            </div>
          </div>
          <div style={{ ...classes.body, backgroundColor: theme.body }}>
            <div
              style={{
                padding: "1rem",
                paddingInline: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                rowGap: "1rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>
                Kira Yoshikage Introduction
              </div>

              <div
                style={{
                  ...classes.section,
                  backgroundColor: theme.section,
                  borderLeft: `4px solid ${theme.highlight}`,
                }}
              >
                <div style={{ padding: "0.5rem", color: theme.text }}>
                  My name is Yoshikage Kira. I'm 33 years old. My house is in
                  the northeast section of Morioh, where all the villas are, and
                  I am not married. I work as an employee for the Kame Yu
                  department stores, and I get home every day by 8 PM at the
                  latest. I don't smoke, but I occasionally drink. I'm in bed by
                  11 PM, and make sure I get eight hours of sleep, no matter
                  what. After having a glass of warm milk and doing about twenty
                  minutes of stretches before going to bed, I usually have no
                  problems sleeping until morning. Just like a baby, I wake up
                  without any fatigue or stress in the morning.
                  <br />I was told there were no issues at my last check-up. I'm
                  trying to explain that I'm a person who wishes to live a very
                  quiet life. I take care not to trouble myself with any
                  enemies, like winning and losing, that would cause me to lose
                  sleep at night. That is how I deal with society, and I know
                  that is what brings me happiness. Although, if I were to fight
                  I wouldn't lose to anyone.
                </div>
              </div>

              <div
                style={{
                  ...classes.section,
                  backgroundColor: theme.section,
                  borderLeft: `4px solid ${theme.highlight}`,
                }}
              >
                <div style={{ padding: "0.5rem", color: theme.text }}>
                  Watashi no na wa "Kira yoshikage" nenrei 33-sai jitaku wa
                  moriōchō hokutō-bu no bessō chitai ni ari ... kekkon wa shite
                  inai ... shigoto wa "kameyūchēn-ten" no kaishain de mainichi
                  osokutomo yoru 8-ji made on tabak wa suwanai sake wa tashinamu
                  teido yoru 11 tokiniha yuka ni tsuki kanarazu 8-jikan wa
                  suimin o toru yō ni shite iru ... nerumae ni atatakai miruku o
                  nomi 20-bu hodo no sutoretchi de karada o hogushite kara yuka
                  niukuk to hotondo sa ... akanbō no yō ni hirō ya sutoresu o
                  nokosazu ni asa-me o samaseru nda ... kenkōshinda demo ijō
                  nashi to iwa reta yo
                </div>
              </div>

              <div
                style={{
                  ...classes.section,
                  backgroundColor: theme.section,
                  borderLeft: `4px solid ${theme.highlight}`,
                }}
              ></div>

              <div style={{ fontSize: "2rem" }}>
                Dio Brando's: You're approaching me?
              </div>
              <div
                style={{
                  ...classes.section,
                  backgroundColor: theme.section,
                  borderLeft: `4px solid ${theme.highlight}`,
                }}
              >
                <div style={{ padding: "0.5rem", color: theme.text }}>
                  ほう…向かってくるのか...逃げずにこのDIOに近づいてくるのか...せっかく祖父のジョセフがわたしの「世界」の正体を、試験終了チャイム直前まで問題を解いている受験生のような必死こいた気分で教えてくれたというのに
                </div>
              </div>

              <div
                style={{
                  ...classes.section,
                  backgroundColor: theme.section,
                  borderLeft: `4px solid ${theme.highlight}`,
                }}
              >
                <div style={{ padding: "0.5rem", color: theme.text }}>
                  That one athletic student going for 100 laps
                </div>
              </div>
              <div style={{ marginTop: "4rem", width: "100%" }}>
                <Slider
                  defaultValue={0}
                  style={{ color: colorScroll(percent, 57, 172) }}
                  value={percent}
                  min={0}
                  max={100}
                  step={0.01}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
