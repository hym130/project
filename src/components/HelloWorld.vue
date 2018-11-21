<template>
  <div class="components-container">
    456
    <div id="div1">

    </div>
    <button @click='fn'>
      点击
    </button>
    {{txt}}
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      txt: ""
    };
  },
  methods: {
    fn: function() {
      console.log(this.editorContent.$txt.formatText());
      this.txt = this.editorContent.$txt.formatText();
    }
  },
  mounted() {
    //E.config.mapAk = 'oIBoFwNoWBwNlLGzs51IAicMrdRGrLw3'
    E.config.menus = [
      "source",
      "|",
      "bold",
      "underline",
      "italic",
      "strikethrough",
      "eraser",
      "forecolor",
      "bgcolor",
      "|",
      "quote",
      "fontfamily",
      "fontsize",
      "head",
      "unorderlist",
      "orderlist",
      "alignleft",
      "aligncenter",
      "alignright",
      "|",
      "link",
      "unlink",
      "table",
      "|",
      "img",
      "video",
      "insertcode",
      "|",
      "undo",
      "redo",
      "fullscreen"
    ];
    E.config.uploadHeaders = {
      Accept: "application/json, text/plain, */*"
    };
    E.config.hideLinkImg = true;
    this.editorContent = new wangEditor("div1");
    this.editorContent.create();
  }
};
</script>
<style>
.w-e-menu {
  z-index: 2 !important;
}
.w-e-text-container {
  z-index: 1 !important;
}
#div1 {
  width: 100%;
  height: 300px;
}
</style>



