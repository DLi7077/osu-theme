export const darkMode = (hue) => ({
  navbar: `hsl(${hue},50%,45%)`,
  background: `hsl(${hue},10%,10%)`,
  title: `hsl(${hue},20%,15%)`,
  header: `hsl(${hue},20%,20%)`,
  body: `hsl(${hue},10%,15%)`,
  section: `hsl(${hue},10%,20%)`,
  text: `hsl(${hue},40%,90%)`,
  highlight: `hsl(${hue},100%,70%)`,
});

export const lightMode = (hue) => ({
  navbar: `hsl(${hue},60%,45%)`,
  background: `hsl(${hue},10%,90%)`,
  title: `hsl(${hue},80%,70%)`,
  header: `hsl(${hue},60%,60%)`,
  body: `hsl(${hue},10%,80%)`,
  section: `hsl(${hue},10%,90%)`,
  text: `hsl(${hue},100%,5%)`,
  highlight: `hsl(${hue},80%,40%)`,
});
