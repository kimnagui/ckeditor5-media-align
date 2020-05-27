import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import MediaStyleEditing from "./mediaembedediting";
import MediaStyleUI from "./mediaembedui";

export default class MediaStyle extends Plugin {
  static get requires() {
    return [MediaStyleEditing, MediaStyleUI];
  }

  static get pluginName() {
    return "MediaStyle";
  }
}
