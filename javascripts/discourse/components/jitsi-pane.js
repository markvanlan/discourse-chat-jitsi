import Component from "@ember/component";
import loadScript from "discourse/lib/load-script";

export default Component.extend({
  name: "jitsi",
  loading: true,

  init() {
    this._super(...arguments);
    // loadScript("https://jitsi.markvanlan.com/external_api.js").then(() => {
      // this.set("loading", false);
      // this.appEvents.on(`chat-pane:${this.name}-inactive`, this, "onActive");
      // const domain = 'jitsi.markvanlan.com';
      // const options = {
        // roomName: this.chatChannel.id,
        // width: this.element.offsetWidth,
        // height: this.element.offsetHeight,
        // parentNode: this.element,
        // userInfo: {
          // displayName: this.currentUser.username
        // }
      // };
      // const api = new JitsiMeetExternalAPI(domain, options);
    // });
  },

  willDestroyElement() {
    this.appEvents.off(`chat-pane:${this.name}-inactive`, this, "onActive");
  },

  onActive() {
    console.log(this.chatChannel.id)
  }
})
