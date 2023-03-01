/**
 * @name Legacy Font
 * @description This plugin is designed to return the legacy font that Discord used before the update (Whitney)
 * @version 1.1.1
 * @author cbtec
 * @website https://github.com/cbtecMain/BetterDiscord/tree/main/Legacy%20Font
 * @source https://raw.githubusercontent.com/cbtecMain/BetterDiscord/main/Legacy%20Font/LegacyFont.plugin.js
 */

console.log("LegacyFont by cbtec is a discontinued plugin, please navigate to the plugins folder and delete the plugin.")
  var style = document.createElement('div');
  style.innerHTML = `
  <div class="alertbox-cbtecwide">
<h3 class="alert-subhead">Update</h3>
<p class="alert-paragraph">
We're currently pushing a large update that will fix low frame rates and optimse the site.<br>
For now, we've pushed a temporary fix that resolves some display problems while we work on the hard stuff.<br>
Please clear your cache to take advantage of these updates!<br>
<span id="display-mobile">This can be performed by</span> <span id="display-pc">CTRL+F5 or F5</span><span id="display-mac">CMD+F5 or F5</span>
</p>
<style>
/* cbtec Wide imports go here!!! CBT-102 */

.alertbox-cbtecwide {
	max-width: 500px;
	max-height: 350px;
	border-radius: 15px;
	text-align: center;
	background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,86,1) 0%, rgba(0,254,255,1) 50%), var(--darkgrey),;
	padding: 10px;
	margin: 20px;
	justify-content: center;
	position: fixed;
	z-index: 0;
	transition: all .3s;
	animation: fadeout .25s forwards 20s;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.alert-subhead {
	font-family: var(--roboto);
	font-weight: 600;
	font-size:  2em;
}

.alert-paragraph {
	font-family: var(--roboto);
	font-weight: 400;
	padding-left: 20px;
	padding-right: 20px;
}
</style>
  `;
  document.body.appendChild(style);


const config = {"info":{"name":"Legacy Font","authors":[{"name":"cbtec","github_username":"cbtecMain"}],"version":"1.1.0","description":"This plugin is designed to return the legacy font that Discord used before the update (Whitney)","github":"https://github.com/cbtecMain/BetterDiscord/tree/main","github_raw":"https://raw.githubusercontent.com/cbtecMain/BetterDiscord/main/oldfont.plugin.js"},"changelog":[{"title":"v1.0.1","items":["Plugin compiles correctly after the new font update."]}],"main":"index.js"};
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

    return class LegacyFont extends Plugin {
        constructor() {
            super();
        }
    };

};
     return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
/*@end@*/
