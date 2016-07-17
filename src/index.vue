<template>
  <div class="vueProseMirror"></div>
</template>
<script>
  import prosemirror from "prosemirror";
  import { schema } from "prosemirror/dist/schema-basic";
  import { defaultMarkdownParser, defaultMarkdownSerializer } from "prosemirror/dist/markdown";
  import { exampleSetup, buildMenuItems } from "prosemirror/dist/example-setup";
  import { tooltipMenu, menuBar } from "prosemirror/dist/menu";
  export default {
    name: "ProseMirror",
    props: {
      content: String,
      onChange: Function,
      menuType: {
        type: String,
        default: "bar"
      },
      options: Object
    },
    data(){
      return {
        editor: null
      }
    },
    computed: {
      rawMarkdown(){
        return defaultMarkdownSerializer.serialize(this.editor.doc)
      },
      renderedContent(){
        let docFrag = this.editor.doc.content.toDOM();
        let div = document.createElement("div");
        div.appendChild( docFrag.cloneNode(true) );
        return div.innerHTML;
      }
    },
    ready(){
      const editorOptions = Object.assign({
        schema,
        place: this.el,
        doc: defaultMarkdownParser.parse(this.content),
        plugins: [exampleSetup.config({menuBar: false, tooltipMenu: false})]
      }, this.options);

      if (editorOptions.doc === undefined || editorOptions.doc === null) {
        editorOptions.doc = null;
        editorOptions.docFormat = null;
      }

      this.editor = new prosemirror.ProseMirror(editorOptions);

      let menu = buildMenuItems(schema);
      if (this.menuType === "bar") {
        tooltipMenu.detach(this.editor);
        menuBar.config({float: true, content: menu.fullMenu}).attach(this.editor);
      }
      else {
        menuBar.detach(this.editor);
        tooltipMenu.config({
          selectedBlockMenu: true,
          inlineContent: menu.inlineMenu,
          blockContent: menu.blockMenu
        }).attach(this.editor);
      }

      this.editor.on.change.add( () => {
        if( this.onChange && typeof this.onChange === "function" ){
          this.onChange.apply(null, [this.rawMarkdown, this.renderedContent])
        }
      });

      this.$watch("content", (val) => {
        this.editor.setDoc(defaultMarkdownParser.parse(val));
      });
    }
  }
</script>
