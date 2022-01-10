export default {
  name: "discourse-image-annotator",

  initialize(container) {
    const chat = container.lookup("service:chat");
    if (!chat) {
      return;
    }

    const currentUser = container.lookup("current-user:main");
    if (!currentUser?.has_chat_enabled) {
      return;
    }

    chat.addChatPane({ name: "jitsi", title: "video_pane.title", icon: "thumbs-up" })
  }
}
