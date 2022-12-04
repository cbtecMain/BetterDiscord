/**
 * @name Legacy Font
 * @description This plugin is designed to return the legacy font that Discord used before the update (Uni Sans)
 * @version 1.1.0
 * @author cbtec
 * @website https://github.com/cbtecMain/BetterDiscord/tree/main
 * @source https://raw.githubusercontent.com/cbtecMain/BetterDiscord/main/oldfont.plugin.js
 */

console.log("Font: GG Sans => Whitney")
  var style = document.createElement('style');
  style.innerHTML = `
  @font-face {
    font-family: "Whitney";
    src: url(https://cdn.cbtec.org/fonts/whitney-book.otf);
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
    font-weight: 400;
   }

  :root {
    --font-primary: "Whitney","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif !important;
    --font-display: "Whitney","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif !important;
    --font-headline: "Whitney","Noto Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
   }
  `;
  document.head.appendChild(style);


const config = {"info":{"name":"Legacy Font","authors":[{"name":"cbtec","github_username":"cbtecMain"}],"version":"1.1.0","description":"This plugin is designed to return the legacy font that Discord used before the update (Uni Sans)","github":"https://github.com/cbtecMain/BetterDiscord/tree/main","github_raw":"https://raw.githubusercontent.com/cbtecMain/BetterDiscord/main/oldfont.plugin.js"},"changelog":[{"title":"v1.0.1","items":["Plugin compiles correctly after the new font update."]}],"main":"index.js"};
class Dummy {
    constructor() {this._config = config;}
    start() {}
    stop() {}
}

if (!global.ZeresPluginLibrary) {
    BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
        confirmText: "Download Now",
        cancelText: "Cancel",
        onConfirm: () => {
            require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                if (error) return require("electron").shell.openExternal("https://betterdiscord.app/Download?id=9");
                await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
            });
        }
    });
}
 
module.exports = !global.ZeresPluginLibrary ? Dummy : (([Plugin, Api]) => {
     const plugin = (Plugin, Library) => {

    const { Patcher, WebpackModules } = Library;

    return class SpotifyListenAlong extends Plugin {
        constructor() {
            super();
        }

        onStart() {
            const DeviceStore = WebpackModules.getByProps('getActiveSocketAndDevice');   
            if (DeviceStore?.getActiveSocketAndDevice) {
                Patcher.after(
                    DeviceStore,
                    'getActiveSocketAndDevice',
                    (_, args, ret) => {
                        if ( ret?.socket ) ret.socket.isPremium = true;
                        return ret;
                    }
                );
            }
        }

        onStop() {
            Patcher.unpatchAll()
        }
    };

};
     return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
/*@end@*/