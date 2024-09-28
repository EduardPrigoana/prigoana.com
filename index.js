const Webamp = window.Webamp;
const webamp = new Webamp({
  initialTracks: [
    {
      url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
    },
    {
      url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Diablo_Swing_Orchestra_-_01_-_Heroines.mp3",
    },
    {
      url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Eclectek_-_02_-_We_Are_Going_To_Eclecfunk_Your_Ass.mp3",
    },
  ],
  initialSkin: {
    url: "./skins/PurpleGlow.wsz",
  },
  availableSkins: [
    {
      url: "./skins/Axon.wsz",
      name: "Axon",
    },
    {
      url: "./skins/m-lo_black.wsz",
      name: "Black",
    },
    {
      url: "./skins/PurpleGlow.wsz",
      name: "Purple Glow",
    },
    {
      url: "./skins/purpleplayer.wsz",
      name: "Purple",
    },
    {
      url: "./skins/TSWNN.wsz",
      name: "TSWNN",
    },
    {
      url: "./skins/Vaporwave.wsz",
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
