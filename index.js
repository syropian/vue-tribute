'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var prosemirror = _interopDefault(require('prosemirror'));
var prosemirror_dist_schemaBasic = require('prosemirror/dist/schema-basic');
var prosemirror_dist_markdown = require('prosemirror/dist/markdown');
var prosemirror_dist_exampleSetup = require('prosemirror/dist/example-setup');
var prosemirror_dist_menu = require('prosemirror/dist/menu');

var index = { template: "<div class=vueProseMirror></div>",
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
  data: function data() {
    return {
      editor: null
    };
  },

  computed: {
    rawMarkdown: function rawMarkdown() {
      return prosemirror_dist_markdown.defaultMarkdownSerializer.serialize(this.editor.doc);
    },
    renderedContent: function renderedContent() {
      var docFrag = this.editor.doc.content.toDOM();
      var div = document.createElement("div");
      div.appendChild(docFrag.cloneNode(true));
      return div.innerHTML;
    }
  },
  ready: function ready() {
    var _this = this;

    var editorOptions = Object.assign({
      schema: prosemirror_dist_schemaBasic.schema,
      place: this.el,
      doc: prosemirror_dist_markdown.defaultMarkdownParser.parse(this.content),
      plugins: [prosemirror_dist_exampleSetup.exampleSetup.config({ menuBar: false, tooltipMenu: false })]
    }, this.options);

    if (editorOptions.doc === undefined || editorOptions.doc === null) {
      editorOptions.doc = null;
      editorOptions.docFormat = null;
    }

    this.editor = new prosemirror.ProseMirror(editorOptions);

    var menu = prosemirror_dist_exampleSetup.buildMenuItems(prosemirror_dist_schemaBasic.schema);
    if (this.menuType === "bar") {
      prosemirror_dist_menu.tooltipMenu.detach(this.editor);
      prosemirror_dist_menu.menuBar.config({ float: true, content: menu.fullMenu }).attach(this.editor);
    } else {
      prosemirror_dist_menu.menuBar.detach(this.editor);
      prosemirror_dist_menu.tooltipMenu.config({
        selectedBlockMenu: true,
        inlineContent: menu.inlineMenu,
        blockContent: menu.blockMenu
      }).attach(this.editor);
    }

    this.editor.on.change.add(function () {
      if (_this.onChange && typeof _this.onChange === "function") {
        _this.onChange.apply(null, [_this.rawMarkdown, _this.renderedContent]);
      }
    });

    this.$watch("content", function (val) {
      _this.editor.setDoc(prosemirror_dist_markdown.defaultMarkdownParser.parse(val));
    });
  }
};

module.exports = index;