module.exports = {
  //-- SITE SETTINGS -----
  author: "@sunisc",
  siteTitle: "Surya Poddutoori",
  siteShortTitle: "s.p", // Used as logo text in header, footer, and splash screen
  siteDescription: "Who is Surya?",
  siteUrl: "http://suryacodes.com/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Profile picure
  seoTitleSuffix: "Surya's Profile", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  mediumRssFeed:
    "",

  shownArticles: 0,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suryaunc/",
    },
    // {
    //   name: "",
    //   url: "",
    // },
    {
      name: "GitHub",
      url:
        "https://github.com/sunisc/",
    },
    {name: "Resume",
  url:"https://drive.google.com/file/d/1VIjV7zLBRpCfGPkDEAiqNPamLCu2kiR5/view?usp=sharing"}
    // {
    //   name: "",
    //   url: "",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suryaunc/",
    },
    {
      name: "GitHub",
      url: "https://github.com/sunisc/",
    },
  ],
}
