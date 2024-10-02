const Webamp = window.Webamp;
const webamp = new Webamp({
    initialTracks: [
      {
        metaData: {
            artist: "Tyler, The Creator",
            title: "EARFQUAKE"
        },
        url: "https://eduardskibidiedger.github.io/2/049.%20Tyler,%20The%20Creator%20-%20EARFQUAKE.flac"
    },
    ],
  initialSkin: {
    url: "../../skins/PurpleGlow.wsz",
  },
  availableSkins: [
    {
      url: "../../skins/Axon.wsz",
      name: "Axon",
    },
    {
      url: "../../skins/m-lo_black.wsz",
      name: "Black",
    },
    {
      url: "../../skins/PurpleGlow.wsz",
      name: "Purple Glow",
    },
    {
      url: "../../skins/purpleplayer.wsz",
      name: "Purple",
    },
    {
      url: "../../skins/TSWNN.wsz",
      name: "TSWNN",
    },
    {
      url: "../../skins/Vaporwave.wsz",
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
        // Disguise Dropdown Functionality
        document.querySelectorAll('.dropdown-content a[data-title]').forEach(function(element) {
          element.addEventListener('click', function(event) {
              event.preventDefault();
              const newTitle = this.getAttribute('data-title');
              const newIcon = this.getAttribute('data-icon');

              // Change the document title
              document.title = newTitle;

              // Change the favicon
              const favicon = document.getElementById('favicon');
              if (favicon) {
                  favicon.href = newIcon;
              } else {
                  const link = document.createElement('link');
                  link.id = 'favicon';
                  link.rel = 'icon';
                  link.type = 'image/x-icon';
                  link.href = newIcon;
                  document.head.appendChild(link);
              }
          });
      });
webamp.renderWhenReady(document.getElementById("app"));