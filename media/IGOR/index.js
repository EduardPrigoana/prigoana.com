const Webamp = window.Webamp;
const webamp = new Webamp({
  zIndex: 1,
  initialTracks: [
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "IGOR'S THEME",
      },
      url: "https://igor.prigoana.lol/music/01.%20IGOR'S%20THEME.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "EARFQUAKE",
      },
      url: "https://igor.prigoana.lol/music/02.%20EARFQUAKE.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "I THINK",
      },
      url: "https://igor.prigoana.lol/music/03.%20I%20THINK.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "BOYFRIEND",
      },
      url: "https://files.catbox.moe/b1bglt.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "RUNNING OUT OF TIME",
      },
      url: "https://igor.prigoana.lol/music/05.%20RUNNING%20OUT%20OF%20TIME.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "NEW MAGIC WAND",
      },
      url: "https://igor.prigoana.lol/music/06.%20NEW%20MAGIC%20WAND.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "A BOY IS A GUN",
      },
      url: "https://igor.prigoana.lol/music/07.%20A%20BOY%20IS%20A%20GUN_.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "PUPPET",
      },
      url: "https://igor.prigoana.lol/music/08.%20PUPPET.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "WHAT'S GOOD",
      },
      url: "https://igor.prigoana.lol/music/09.%20WHAT'S%20GOOD.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "WHAT'S GOOD (original release)",
      },
      url: "https://igor.prigoana.lol/music/11.%20WHAT'S%20GOOD%20Original%20Release.mp3",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "GONE, GONE / THANK YOU",
      },
      url: "https://igor.prigoana.lol/music/12.%20GONE%2C%20GONE%20-%20THANK%20YOU.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "I DONT LOVE YOU ANYMORE",
      },
      url: "https://igor.prigoana.lol/music/13.%20I%20DON'T%20LOVE%20YOU%20ANYMORE.flac"
    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "ARE WE STILL FRIENDS?",
      },
      url: "https://igor.prigoana.lol/music/14.%20ARE%20WE%20STILL%20FRIENDS_.flac",

    },
    {
      metaData: {
        artist: "Tyler, The Creator",
        title: "Best Interest (scrapped)",
      },
      url: "https://igor.prigoana.lol/music/15.%20BEST%20INTEREST.flac",

    }
  ],
  initialSkin: {
    url: "https://prigoana.lol/skins/PurpleGlow.wsz",
  },
  availableSkins: [
    {
      url: "https://prigoana.lol/skins/Axon.wsz",
      name: "Axon",
    },
    {
      url: "https://prigoana.lol/skins/m-lo_black.wsz",
      name: "Black",
    },
    {
      url: "https://prigoana.lol/skins/PurpleGlow.wsz",
      name: "Purple Glow",
    },
    {
      url: "https://prigoana.lol/skins/purpleplayer.wsz",
      name: "Purple",
    },
    {
      url: "https://prigoana.lol/skins/TSWNN.wsz",
      name: "TSWNN",
    },
    {
      url: "https://prigoana.lol/skins/Vaporwave.wsz",
      name: "Vaporwave",
    },
  ],
  __butterchurnOptions: {
    importButterchurn: () => Promise.resolve(window.butterchurn),
    getPresets: () => {
      const presets = window.butterchurnPresets.getPresets();
      return Object.keys(presets).map((name) => {
        return {
          name,
          butterchurnPresetObject: presets[name],
        };
      });
    },
    butterchurnOpen: true,
  },
});
webamp.renderWhenReady(document.getElementById("app"));
