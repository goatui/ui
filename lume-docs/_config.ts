import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  location: new URL("https://my-site.com/blog/"),
  src: "./src",
  server: {
    port: 7000,
    open: true,
    page404: "./404/",
  },
});



site.copy("assets", "assets");

site.data("site_data", {
  "company": "GOATUI",
  "title": "GOAT UI",
  "description": "GOAT UI contains design system and most used web components built using Stencil. So you don't need to include any additional framework dependencies, You can simple import required component js, and right away start using it.",
  "tagline": "A light weight web component library",
  "baseurl": "",
  "url": "https://goatui.com",
  "email": "contact@shivajivarma.com",
  "author": "Shivaji Varma",
  "author_url": "https://shivajivarma.com",
  "twitter_username": "goatui",
  "github_username": "goatui",
  "github_project": "components",
  "npm_package": "@goatui/components",
  "script": "https://cdn.jsdelivr.net/npm/@goatui/components@1.5.11/dist/goatui/goatui.esm.js",
  "themeCss": "https://cdn.jsdelivr.net/npm/@goatui/components@1.5.11/dist/goatui/assets/styles/theme.css",
  "componentsDetails": {
    "timestamp": "2023-11-01T03:56:16",
    "compiler": {
      "name": "@stencil/core",
      "version": "4.4.0",
      "typescriptVersion": "5.2.2"
    },
    "components": [
      {
        "filePath": "src/components/data-display/accordion/accordion/accordion.tsx",
        "fileName": "accordion.tsx",
        "tag": "goat-accordion",
        "readme": "# goat-avatar\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Accordion"
          },
          {
            "name": "description",
            "text": "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tags",
            "text": "display"
          },
          {
            "name": "img",
            "text": "/assets/img/accordion.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/accordion-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "align",
            "type": "\"end\" | \"start\"",
            "complexType": {
              "original": "'start' | 'end'",
              "resolved": "\"end\" | \"start\"",
              "references": {}
            },
            "mutable": false,
            "attr": "align",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'end'",
            "values": [
              {
                "value": "end",
                "type": "string"
              },
              {
                "value": "start",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "multiple",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "multiple",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The According size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:accordion-item-click",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Accordion",
          "description": "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.",
          "category": "Data Display",
          "tags": [
            "display"
          ],
          "img": "/assets/img/accordion.png",
          "imgDark": "/assets/img/accordion-dark.png"
        }
      },
      {
        "filePath": "src/components/data-display/accordion/accordion-item/accordion-item.tsx",
        "fileName": "accordion-item.tsx",
        "tag": "goat-accordion-item",
        "readme": "# goat-menu-item\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-accordion-item": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "heading",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "heading",
            "reflectToAttr": false,
            "docs": "The menu item value.",
            "docsTags": [],
            "default": "'Heading'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "icon",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "icon",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "open",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "open",
            "reflectToAttr": true,
            "docs": "Menu item selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:accordion-item-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the menu item is clicked.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [
          {
            "name": "title",
            "docs": ""
          }
        ],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-display/avatar/avatar.tsx",
        "fileName": "avatar.tsx",
        "tag": "goat-avatar",
        "readme": "# goat-avatar\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Avatar"
          },
          {
            "name": "description",
            "text": "Avatars in their simplest form display content within a circular container."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tags",
            "text": "display"
          },
          {
            "name": "example",
            "text": "<goat-avatar size=\"5rem\" name=\"Shivaji Varma\" src=\"/assets/img/avatar.png\"></goat-avatar>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "Avatar size.",
            "docsTags": [],
            "default": "'2rem'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "src",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "src",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Avatar",
          "description": "Avatars in their simplest form display content within a circular container.",
          "category": "Data Display",
          "tags": [
            "display"
          ],
          "example": "<goat-avatar size=\"5rem\" name=\"Shivaji Varma\" src=\"/assets/img/avatar.png\"></goat-avatar>"
        }
      },
      {
        "filePath": "src/components/data-display/badge/badge.tsx",
        "fileName": "badge.tsx",
        "tag": "goat-badge",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Badge"
          },
          {
            "name": "description",
            "text": "Renders a specified badge."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tag",
            "text": "content"
          },
          {
            "name": "example",
            "text": "<goat-badge content=\"5\" class='color-error'> <goat-icon name=\"notification\" size=\"lg\"></goat-icon></goat-badge>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "content",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "content",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Badge",
          "description": "Renders a specified badge.",
          "category": "Data Display",
          "tag": "content",
          "example": "<goat-badge content=\"5\" class='color-error'> <goat-icon name=\"notification\" size=\"lg\"></goat-icon></goat-badge>"
        }
      },
      {
        "filePath": "src/components/navigation/breadcrumb/breadcrumb.tsx",
        "fileName": "breadcrumb.tsx",
        "tag": "goat-breadcrumb",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Breadcrumb"
          },
          {
            "name": "description",
            "text": "Typography are used for rendering headlines, paragraphs and captions."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "tags",
            "text": "navigation"
          },
          {
            "name": "example",
            "text": "<goat-breadcrumb><goat-breadcrumb-item href=\"#\">Home</goat-breadcrumb-item><goat-breadcrumb-item href=\"#\" active>Page</goat-breadcrumb-item></goat-breadcrumb>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Breadcrumb",
          "description": "Typography are used for rendering headlines, paragraphs and captions.",
          "category": "Navigation",
          "tags": [
            "navigation"
          ],
          "example": "<goat-breadcrumb><goat-breadcrumb-item href=\"#\">Home</goat-breadcrumb-item><goat-breadcrumb-item href=\"#\" active>Page</goat-breadcrumb-item></goat-breadcrumb>"
        }
      },
      {
        "filePath": "src/components/navigation/breadcrumb/breadcrumb-item/breadcrumb-item.tsx",
        "fileName": "breadcrumb-item.tsx",
        "tag": "goat-breadcrumb-item",
        "readme": "# goat-tab\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-text",
          "goat-link"
        ],
        "dependencyGraph": {
          "goat-breadcrumb-item": [
            "goat-text",
            "goat-link"
          ]
        },
        "props": [
          {
            "name": "active",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "active",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "Hyperlink to navigate to on click.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "position",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "position",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "target",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "target",
            "reflectToAttr": false,
            "docs": "Sets or retrieves the window or frame at which to target content.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/general/button/button.tsx",
        "fileName": "button.tsx",
        "tag": "goat-button",
        "readme": "# goat-button\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Button"
          },
          {
            "name": "description",
            "text": "An interactive button with a range of presentation options."
          },
          {
            "name": "category",
            "text": "General"
          },
          {
            "name": "tags",
            "text": "controls"
          },
          {
            "name": "example",
            "text": "<goat-button>\nButton CTA\n</goat-button>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-calendar",
          "goat-code-highlighter",
          "goat-date-picker",
          "goat-empty-state",
          "goat-flow-designer",
          "goat-header-action",
          "goat-html-editor",
          "goat-input",
          "goat-modal",
          "goat-notification",
          "goat-number",
          "goat-select",
          "goat-table",
          "goat-time-picker"
        ],
        "dependencies": [
          "goat-icon",
          "goat-spinner"
        ],
        "dependencyGraph": {
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-calendar": [
            "goat-button"
          ],
          "goat-code-highlighter": [
            "goat-button"
          ],
          "goat-date-picker": [
            "goat-button"
          ],
          "goat-empty-state": [
            "goat-button"
          ],
          "goat-flow-designer": [
            "goat-button"
          ],
          "goat-header-action": [
            "goat-button"
          ],
          "goat-html-editor": [
            "goat-button"
          ],
          "goat-input": [
            "goat-button"
          ],
          "goat-modal": [
            "goat-button"
          ],
          "goat-notification": [
            "goat-button"
          ],
          "goat-number": [
            "goat-button"
          ],
          "goat-select": [
            "goat-button"
          ],
          "goat-table": [
            "goat-button"
          ],
          "goat-time-picker": [
            "goat-button"
          ]
        },
        "props": [
          {
            "name": "color",
            "type": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"dark\" | \"inverse\" | \"light\" | \"primary\" | \"secondary\" | \"success\"",
            "complexType": {
              "original": "'primary' | 'secondary' | 'success' | 'danger' | 'brand-primary' | 'brand-secondary' | 'dark' | 'light' | 'inverse'",
              "resolved": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"dark\" | \"inverse\" | \"light\" | \"primary\" | \"secondary\" | \"success\"",
              "references": {}
            },
            "mutable": false,
            "attr": "color",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'primary'",
            "values": [
              {
                "value": "brand-primary",
                "type": "string"
              },
              {
                "value": "brand-secondary",
                "type": "string"
              },
              {
                "value": "danger",
                "type": "string"
              },
              {
                "value": "dark",
                "type": "string"
              },
              {
                "value": "inverse",
                "type": "string"
              },
              {
                "value": "light",
                "type": "string"
              },
              {
                "value": "primary",
                "type": "string"
              },
              {
                "value": "secondary",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabledReason",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled-reason",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "Hyperlink to navigate to on click.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "icon",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "icon",
            "reflectToAttr": false,
            "docs": "Icon which will displayed on button.\nPossible values are icon names.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "iconAlign",
            "type": "\"end\" | \"start\"",
            "complexType": {
              "original": "'start' | 'end'",
              "resolved": "\"end\" | \"start\"",
              "references": {}
            },
            "mutable": false,
            "attr": "icon-align",
            "reflectToAttr": false,
            "docs": "Icon position.",
            "docsTags": [],
            "default": "'end'",
            "values": [
              {
                "value": "end",
                "type": "string"
              },
              {
                "value": "start",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "iconSize",
            "type": "string",
            "complexType": {
              "original": "'sm' | 'md' | 'lg' | string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "icon-size",
            "reflectToAttr": false,
            "docs": "Icon size.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "kind",
            "type": "\"block\" | \"default\" | \"simple\"",
            "complexType": {
              "original": "'default' | 'simple' | 'block'",
              "resolved": "\"block\" | \"default\" | \"simple\"",
              "references": {}
            },
            "mutable": false,
            "attr": "kind",
            "reflectToAttr": false,
            "docs": "Button kind.\nPossible values are `\"default\"`, `\"simple\"`, `\"block\"`. Defaults to `\"default\"`.\n`\"default\"` is a long button.\n`\"simple\"` is a text-only button.\n`\"block\"` is a full-width button.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "block",
                "type": "string"
              },
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "simple",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selected",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "selected",
            "reflectToAttr": true,
            "docs": "Button selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "Show loader.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"2xl\" | \"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",
              "resolved": "\"2xl\" | \"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "Button size.\nPossible values are `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"`, `\"2xl\"`, `\"full\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "2xl",
                "type": "string"
              },
              {
                "value": "full",
                "type": "string"
              },
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              },
              {
                "value": "xl",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "target",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "target",
            "reflectToAttr": false,
            "docs": "Sets or retrieves the window or frame at which to target content.",
            "docsTags": [],
            "default": "'_self'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "type",
            "type": "\"button\" | \"reset\" | \"submit\"",
            "complexType": {
              "original": "'button' | 'submit' | 'reset'",
              "resolved": "\"button\" | \"reset\" | \"submit\"",
              "references": {}
            },
            "mutable": false,
            "attr": "type",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'button'",
            "values": [
              {
                "value": "button",
                "type": "string"
              },
              {
                "value": "reset",
                "type": "string"
              },
              {
                "value": "submit",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "variant",
            "type": "\"default\" | \"ghost\" | \"light\" | \"link\" | \"outline\"",
            "complexType": {
              "original": "'default' | 'outline' | 'ghost' | 'light' | 'link'",
              "resolved": "\"default\" | \"ghost\" | \"light\" | \"link\" | \"outline\"",
              "references": {}
            },
            "mutable": false,
            "attr": "variant",
            "reflectToAttr": false,
            "docs": "Button variants.\nPossible values are `\"default\"`, `\"outline\"`, `\"ghost\"`. Defaults to `\"default\"`.\n`\"default\"` is a filled button.\n`\"outline\"` is an outlined button.\n`\"ghost\"` is a transparent button.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "ghost",
                "type": "string"
              },
              {
                "value": "light",
                "type": "string"
              },
              {
                "value": "link",
                "type": "string"
              },
              {
                "value": "outline",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `button` in `goat-button`. Use this method instead of the global\n`button.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `button` in `goat-button`. Use this method instead of the global\n`button.focus()`.",
            "docsTags": []
          },
          {
            "name": "triggerClick",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "triggerClick() => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "On click of button, a CustomEvent 'goat:click' will be triggered.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Button",
          "description": "An interactive button with a range of presentation options.",
          "category": "General",
          "tags": [
            "controls"
          ],
          "example": "<goat-button>\nButton CTA\n</goat-button>"
        }
      },
      {
        "filePath": "src/components/general/button-group/button-group.tsx",
        "fileName": "button-group.tsx",
        "tag": "goat-button-group",
        "readme": "# goat-button-group\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Button Group"
          },
          {
            "name": "description",
            "text": "Group a series of buttons together on a single line with the button group, and super-power."
          },
          {
            "name": "category",
            "text": "General"
          },
          {
            "name": "tags",
            "text": "controls"
          },
          {
            "name": "example",
            "text": "<goat-button-group>\n<goat-button block icon=\"home\"></goat-button>\n<goat-button block icon=\"alarm\"></goat-button>\n</goat-button-group>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-flow-designer",
          "goat-html-editor"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-flow-designer": [
            "goat-button-group"
          ],
          "goat-html-editor": [
            "goat-button-group"
          ]
        },
        "props": [],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Button Group",
          "description": "Group a series of buttons together on a single line with the button group, and super-power.",
          "category": "General",
          "tags": [
            "controls"
          ],
          "example": "<goat-button-group>\n<goat-button block icon=\"home\"></goat-button>\n<goat-button block icon=\"alarm\"></goat-button>\n</goat-button-group>"
        }
      },
      {
        "filePath": "src/components/calendar/calendar/calendar.tsx",
        "fileName": "calendar.tsx",
        "tag": "goat-calendar",
        "readme": "# goat-avatar\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Calendar"
          },
          {
            "name": "description",
            "text": "The calendar component is used to display information in a daily, weekly, monthly, or category view."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tags",
            "text": "calendar"
          },
          {
            "name": "img",
            "text": "/assets/img/calendar.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/calendar-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-button",
          "goat-select",
          "goat-calendar-column-view",
          "goat-calendar-month-view"
        ],
        "dependencyGraph": {
          "goat-calendar": [
            "goat-button",
            "goat-select",
            "goat-calendar-column-view",
            "goat-calendar-month-view"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-select": [
            "goat-icon",
            "goat-tag",
            "goat-button",
            "goat-spinner",
            "goat-menu",
            "goat-text",
            "goat-menu-item"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-calendar-column-view": [
            "goat-calendar-column-view-background"
          ]
        },
        "props": [
          {
            "name": "availableViews",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": false,
            "attr": "available-views",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[\r\n    { label: 'Day', value: 'day', type: 'column', days: 1 },\r\n    {\r\n      label: 'Week',\r\n      value: 'week',\r\n      type: 'column',\r\n      days: 7,\r\n    },\r\n    {\r\n      label: 'Month',\r\n      value: 'month',\r\n      type: 'month',\r\n    },\r\n  ]",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "contextDate",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "context-date",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "eventClickable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "event-clickable",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "events",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "Show loader.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "timezone",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": false,
            "attr": "timezone",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "view",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "view",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'week'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:calendar-event-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:column-view-date-click",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:column-view-event-click",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:month-view-event-click",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Calendar",
          "description": "The calendar component is used to display information in a daily, weekly, monthly, or category view.",
          "category": "Data Display",
          "tags": [
            "calendar"
          ],
          "img": "/assets/img/calendar.png",
          "imgDark": "/assets/img/calendar-dark.png"
        }
      },
      {
        "filePath": "src/components/calendar/calendar/column-view/column-view.tsx",
        "fileName": "column-view.tsx",
        "tag": "goat-calendar-column-view",
        "readme": "# goat-calendar-column-view\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [
          "goat-calendar"
        ],
        "dependencies": [
          "goat-calendar-column-view-background"
        ],
        "dependencyGraph": {
          "goat-calendar-column-view": [
            "goat-calendar-column-view-background"
          ],
          "goat-calendar": [
            "goat-calendar-column-view"
          ]
        },
        "props": [
          {
            "name": "contextDate",
            "type": "Date",
            "complexType": {
              "original": "Date",
              "resolved": "Date",
              "references": {
                "Date": {
                  "location": "global",
                  "id": "global::Date"
                }
              }
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "Date"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "currentTime",
            "type": "Date",
            "complexType": {
              "original": "Date",
              "resolved": "Date",
              "references": {
                "Date": {
                  "location": "global",
                  "id": "global::Date"
                }
              }
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "Date"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "days",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "days",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "7",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "eventClickable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "event-clickable",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "events",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "view",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "view",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'week'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:column-view-date-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:column-view-event-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/calendar/calendar/column-view/column-view-background/column-view-background.tsx",
        "fileName": "column-view-background.tsx",
        "tag": "goat-calendar-column-view-background",
        "readme": "# goat-calendar-column-view-background\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [
          "goat-calendar-column-view"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-calendar-column-view": [
            "goat-calendar-column-view-background"
          ]
        },
        "props": [
          {
            "name": "columns",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "columns",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "1",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/calendar/calendar/month-view/month-view.tsx",
        "fileName": "month-view.tsx",
        "tag": "goat-calendar-month-view",
        "readme": "# goat-calendar-column-view\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [
          "goat-calendar"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-calendar": [
            "goat-calendar-month-view"
          ]
        },
        "props": [
          {
            "name": "contextDate",
            "type": "Date",
            "complexType": {
              "original": "Date",
              "resolved": "Date",
              "references": {
                "Date": {
                  "location": "global",
                  "id": "global::Date"
                }
              }
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "Date"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "currentTime",
            "type": "Date",
            "complexType": {
              "original": "Date",
              "resolved": "Date",
              "references": {
                "Date": {
                  "location": "global",
                  "id": "global::Date"
                }
              }
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "Date"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "eventClickable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "event-clickable",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "events",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:month-view-date-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:month-view-event-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/calendar/calendar/month-view/month-view-background/month-view-background.tsx",
        "fileName": "month-view-background.tsx",
        "tag": "goat-calendar-month-view-background",
        "readme": "# goat-calendar-column-view-background\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "columns",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "columns",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "1",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/flow-designer/canvas/canvas.tsx",
        "fileName": "canvas.tsx",
        "tag": "goat-canvas",
        "readme": "# goat-flow-designer\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Canvas"
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "description",
            "text": "Canvas for drawing lines and shapes on."
          },
          {
            "name": "img",
            "text": "/assets/img/canvas.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-flow-designer"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-flow-designer": [
            "goat-canvas"
          ]
        },
        "props": [
          {
            "name": "padding",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "padding",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "1",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "shapes",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "viewbox",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "viewbox",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          },
          {
            "name": "zoom",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "zoom",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "1",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Canvas",
          "category": "Up coming",
          "description": "Canvas for drawing lines and shapes on.",
          "img": "/assets/img/canvas.png"
        }
      },
      {
        "filePath": "src/components/data-display/card/card.tsx",
        "fileName": "card.tsx",
        "tag": "goat-card",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "shadowLevel",
            "type": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
            "complexType": {
              "original": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined",
              "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
              "references": {}
            },
            "mutable": false,
            "attr": "shadow-level",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              },
              {
                "value": "xl",
                "type": "string"
              },
              {
                "value": "xs",
                "type": "string"
              },
              {
                "value": "xxl",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/condition-builder/cb-compound-expression/cb-compound-expression.tsx",
        "fileName": "cb-compound-expression.tsx",
        "tag": "goat-cb-compound-expression",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-text",
          "goat-cb-divider",
          "goat-tag"
        ],
        "dependencyGraph": {
          "goat-cb-compound-expression": [
            "goat-text",
            "goat-cb-divider",
            "goat-tag"
          ],
          "goat-tag": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "conditionOperator",
            "type": "\"and\" | \"or\"",
            "complexType": {
              "original": "'and' | 'or'",
              "resolved": "\"and\" | \"or\"",
              "references": {}
            },
            "mutable": false,
            "attr": "condition-operator",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "value": "and",
                "type": "string"
              },
              {
                "value": "or",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "fieldLabel",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "field-label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "fieldName",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "field-name",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/condition-builder/cb-divider/cb-divider.tsx",
        "fileName": "cb-divider.tsx",
        "tag": "goat-cb-divider",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [
          "goat-cb-compound-expression",
          "goat-cb-predicate",
          "goat-condition-builder"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-cb-compound-expression": [
            "goat-cb-divider"
          ],
          "goat-cb-predicate": [
            "goat-cb-divider"
          ],
          "goat-condition-builder": [
            "goat-cb-divider"
          ]
        },
        "props": [
          {
            "name": "connectEnd",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "connect-end",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "connectStart",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "connect-start",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "vertical",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "vertical",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/condition-builder/cb-expression/cb-expression.tsx",
        "fileName": "cb-expression.tsx",
        "tag": "goat-cb-expression",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-select"
        ],
        "dependencyGraph": {
          "goat-cb-expression": [
            "goat-select"
          ],
          "goat-select": [
            "goat-icon",
            "goat-tag",
            "goat-button",
            "goat-spinner",
            "goat-menu",
            "goat-text",
            "goat-menu-item"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ]
        },
        "props": [
          {
            "name": "operatorValue",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "operator-value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "operators",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/condition-builder/cb-predicate/cb-predicate.tsx",
        "fileName": "cb-predicate.tsx",
        "tag": "goat-cb-predicate",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-cb-divider",
          "goat-tag"
        ],
        "dependencyGraph": {
          "goat-cb-predicate": [
            "goat-cb-divider",
            "goat-tag"
          ],
          "goat-tag": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "conditionOperator",
            "type": "\"and\" | \"or\"",
            "complexType": {
              "original": "'and' | 'or'",
              "resolved": "\"and\" | \"or\"",
              "references": {}
            },
            "mutable": false,
            "attr": "condition-operator",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "value": "and",
                "type": "string"
              },
              {
                "value": "or",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "vertical",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "vertical",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/charts/chart-doughnut/chart-doughnut.tsx",
        "fileName": "chart-doughnut.tsx",
        "tag": "goat-chart-doughnut",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "ChartDoughnut"
          },
          {
            "name": "description",
            "text": "Use tags to label, categorize, or organize items using keywords that describe them."
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "tag",
            "text": "controls"
          },
          {
            "name": "example",
            "text": "<goat-chart-doughnut class=\"color-red\"></goat-chart-doughnut>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "ChartDoughnut",
          "description": "Use tags to label, categorize, or organize items using keywords that describe them.",
          "category": "Up coming",
          "tag": "controls",
          "example": "<goat-chart-doughnut class=\"color-red\"></goat-chart-doughnut>"
        }
      },
      {
        "filePath": "src/components/data-entry/checkbox/checkbox.tsx",
        "fileName": "checkbox.tsx",
        "tag": "goat-checkbox",
        "readme": "# goat-checkbox\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Checkbox"
          },
          {
            "name": "description",
            "text": "Captures boolean input with an optional indeterminate mode."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-checkbox value='true'>Want ice cream?</goat-checkbox>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-table"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-table": [
            "goat-checkbox"
          ]
        },
        "props": [
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "intermediate",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "intermediate",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "The checkbox label.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "rounded",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "rounded",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Checkbox",
          "description": "Captures boolean input with an optional indeterminate mode.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-checkbox value='true'>Want ice cream?</goat-checkbox>"
        }
      },
      {
        "filePath": "src/components/data-entry/code-editor/code-editor.tsx",
        "fileName": "code-editor.tsx",
        "tag": "goat-code-editor",
        "readme": "# goat-code-editor\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Code Editor"
          },
          {
            "name": "description",
            "text": "A browser based code editor."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "img",
            "text": "/assets/img/code-editor.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/code-editor-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-spinner"
        ],
        "dependencyGraph": {
          "goat-code-editor": [
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.",
            "docsTags": [],
            "default": "250",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "language",
            "type": "\"html\" | \"javascript\" | \"json\"",
            "complexType": {
              "original": "'javascript' | 'json' | 'html'",
              "resolved": "\"html\" | \"javascript\" | \"json\"",
              "references": {}
            },
            "mutable": false,
            "attr": "language",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'javascript'",
            "values": [
              {
                "value": "html",
                "type": "string"
              },
              {
                "value": "javascript",
                "type": "string"
              },
              {
                "value": "json",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "lineNumbers",
            "type": "\"off\" | \"on\"",
            "complexType": {
              "original": "'off' | 'on'",
              "resolved": "\"off\" | \"on\"",
              "references": {}
            },
            "mutable": false,
            "attr": "line-numbers",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'on'",
            "values": [
              {
                "value": "off",
                "type": "string"
              },
              {
                "value": "on",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Code Editor",
          "description": "A browser based code editor.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "img": "/assets/img/code-editor.png",
          "imgDark": "/assets/img/code-editor-dark.png"
        }
      },
      {
        "filePath": "src/components/data-display/code-highlighter/code-highlighter.tsx",
        "fileName": "code-highlighter.tsx",
        "tag": "goat-code-highlighter",
        "readme": "# goat-code-editor\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Code Highlighter"
          },
          {
            "name": "description",
            "text": "A browser based code highlighter."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tag",
            "text": "display, code"
          },
          {
            "name": "img",
            "text": "/assets/img/code-highlighter.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/code-highlighter-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-button",
          "goat-spinner"
        ],
        "dependencyGraph": {
          "goat-code-highlighter": [
            "goat-button",
            "goat-spinner"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "format",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "format",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "language",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "language",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "Language.javascript",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "lineNumbers",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "line-numbers",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Code Highlighter",
          "description": "A browser based code highlighter.",
          "category": "Data Display",
          "tag": "display, code",
          "img": "/assets/img/code-highlighter.png",
          "imgDark": "/assets/img/code-highlighter-dark.png"
        }
      },
      {
        "filePath": "src/components/condition-builder/condition-builder/condition-builder.tsx",
        "fileName": "condition-builder.tsx",
        "tag": "goat-condition-builder",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Condition Builder"
          },
          {
            "name": "description",
            "text": "A condition builder is a component that allows users to build a condition using a set of rules."
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tag",
            "text": "content"
          },
          {
            "name": "img",
            "text": "/assets/img/condition-builder.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-select",
          "goat-input",
          "goat-text",
          "goat-cb-divider",
          "goat-tag"
        ],
        "dependencyGraph": {
          "goat-condition-builder": [
            "goat-select",
            "goat-input",
            "goat-text",
            "goat-cb-divider",
            "goat-tag"
          ],
          "goat-select": [
            "goat-icon",
            "goat-tag",
            "goat-button",
            "goat-spinner",
            "goat-menu",
            "goat-text",
            "goat-menu-item"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-input": [
            "goat-button"
          ]
        },
        "props": [
          {
            "name": "content",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "content",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Condition Builder",
          "description": "A condition builder is a component that allows users to build a condition using a set of rules.",
          "category": "Data Display",
          "tag": "content",
          "img": "/assets/img/condition-builder.png"
        }
      },
      {
        "filePath": "src/components/layout/container/container.tsx",
        "fileName": "container.tsx",
        "tag": "goat-container",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "vertical",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "vertical",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/general/current-time/current-time.tsx",
        "fileName": "current-time.tsx",
        "tag": "goat-current-time",
        "readme": "# goat-current-time\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Current Time"
          },
          {
            "name": "description",
            "text": "The current time component displays the current time in a 12-hour format."
          },
          {
            "name": "category",
            "text": "General"
          },
          {
            "name": "tags",
            "text": "controls"
          },
          {
            "name": "example",
            "text": "<goat-current-time></goat-current-time>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "timezone",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "timezone",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Current Time",
          "description": "The current time component displays the current time in a 12-hour format.",
          "category": "General",
          "tags": [
            "controls"
          ],
          "example": "<goat-current-time></goat-current-time>"
        }
      },
      {
        "filePath": "src/components/data-entry/date/date-picker/date-picker.tsx",
        "fileName": "date-picker.tsx",
        "tag": "goat-date-picker",
        "readme": "# goat-date-picker\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Date Picker"
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "description",
            "text": "Captures date input."
          },
          {
            "name": "example",
            "text": "<goat-date-picker value='true'></goat-date-picker>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-date-picker": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Date Picker",
          "category": "Form Inputs",
          "description": "Captures date input.",
          "example": "<goat-date-picker value='true'></goat-date-picker>"
        }
      },
      {
        "filePath": "src/components/layout/divider/divider.tsx",
        "fileName": "divider.tsx",
        "tag": "goat-divider",
        "readme": "# goat-heading\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Divider"
          },
          {
            "name": "description",
            "text": "A divider can be used to segment content vertically or horizontally."
          },
          {
            "name": "category",
            "text": "Layout"
          },
          {
            "name": "example",
            "text": "<goat-divider style=\"width: 12rem;\">or</goat-divider>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-header-brand"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-header-brand": [
            "goat-divider"
          ]
        },
        "props": [
          {
            "name": "vertical",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "vertical",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Divider",
          "description": "A divider can be used to segment content vertically or horizontally.",
          "category": "Layout",
          "example": "<goat-divider style=\"width: 12rem;\">or</goat-divider>"
        }
      },
      {
        "filePath": "src/components/navigation/menu/dropdown/dropdown.tsx",
        "fileName": "dropdown.tsx",
        "tag": "goat-dropdown",
        "readme": "# goat-dropdown\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Dropdown"
          },
          {
            "name": "description",
            "text": "Enables native inputs to be used within a Form field."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "img",
            "text": "/assets/img/dropdown.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/dropdown-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-menu",
          "goat-menu-item",
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-dropdown": [
            "goat-menu",
            "goat-menu-item",
            "goat-icon"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": false,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "isOpen",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "is-open",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "items",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "null",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "positions",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "positions",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'bottom-right,top-right,bottom-left,top-left'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "(elm?: HTMLElement) => Promise<void>",
              "parameters": [
                {
                  "tags": [],
                  "text": ""
                }
              ],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                },
                "HTMLElement": {
                  "location": "global",
                  "id": "global::HTMLElement"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus(elm?: HTMLElement) => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          }
        ],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "click",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:menu-item-click",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:click",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "keydown",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "scroll",
            "target": "window",
            "capture": false,
            "passive": true
          }
        ],
        "metadata": {
          "name": "Dropdown",
          "description": "Enables native inputs to be used within a Form field.",
          "category": "Navigation",
          "img": "/assets/img/dropdown.png",
          "imgDark": "/assets/img/dropdown-dark.png"
        }
      },
      {
        "filePath": "src/components/data-display/empty-state/empty-state.tsx",
        "fileName": "empty-state.tsx",
        "tag": "goat-empty-state",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Empty State"
          },
          {
            "name": "description",
            "text": "A message that displays when there is no information to display."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "example",
            "text": "<goat-empty-state class=\"content-center\" headline=\"Empty list\" description=\"Nothing to display\">\r\n</goat-empty-state>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-menu",
          "goat-sidenav-menu",
          "goat-table",
          "goat-tree-view"
        ],
        "dependencies": [
          "goat-svg",
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-sidenav-menu": [
            "goat-empty-state"
          ],
          "goat-table": [
            "goat-empty-state"
          ],
          "goat-tree-view": [
            "goat-empty-state"
          ]
        },
        "props": [
          {
            "name": "action",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "action",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "actionDisabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "action-disabled",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "actionUrl",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "action-url",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "actionVariant",
            "type": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
            "complexType": {
              "original": "'default' | 'outline' | 'ghost' | 'link'",
              "resolved": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
              "references": {}
            },
            "mutable": false,
            "attr": "action-variant",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "ghost",
                "type": "string"
              },
              {
                "value": "link",
                "type": "string"
              },
              {
                "value": "outline",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "description",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "headline",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "headline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "illustration",
            "type": "\"no-document\"",
            "complexType": {
              "original": "'no-document'",
              "resolved": "\"no-document\"",
              "references": {}
            },
            "mutable": false,
            "attr": "illustration",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'no-document'",
            "values": [
              {
                "value": "no-document",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "resize",
            "target": "window",
            "capture": false,
            "passive": true
          }
        ],
        "metadata": {
          "name": "Empty State",
          "description": "A message that displays when there is no information to display.",
          "category": "Data Display",
          "example": "<goat-empty-state class=\"content-center\" headline=\"Empty list\" description=\"Nothing to display\">\r\n</goat-empty-state>"
        }
      },
      {
        "filePath": "src/components/flow-designer/flow-designer/flow-designer.tsx",
        "fileName": "flow-designer.tsx",
        "tag": "goat-flow-designer",
        "readme": "# goat-flow-designer\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Flow Designer"
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "description",
            "text": "An interactive button with a range of presentation options."
          },
          {
            "name": "img",
            "text": "/assets/img/flow-designer.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-canvas",
          "goat-icon",
          "goat-tag",
          "goat-button-group",
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-flow-designer": [
            "goat-canvas",
            "goat-icon",
            "goat-tag",
            "goat-button-group",
            "goat-button"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "blockSize",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "block-size",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "16",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "data",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Flow Designer",
          "category": "Up coming",
          "description": "An interactive button with a range of presentation options.",
          "img": "/assets/img/flow-designer.png"
        }
      },
      {
        "filePath": "src/components/data-entry/form-control/form-control.tsx",
        "fileName": "form-control.tsx",
        "tag": "goat-form-control",
        "readme": "# goat-field-group\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Form Control"
          },
          {
            "name": "description",
            "text": "The Form Control component adds a label and caption for its child control."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "form"
          },
          {
            "name": "example",
            "text": "<goat-form-control label='Full Name' required>\r\n<goat-input type='text'></goat-input>\r\n</goat-form-control>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-table"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-table": [
            "goat-form-control"
          ]
        },
        "props": [
          {
            "name": "caption",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "caption",
            "reflectToAttr": false,
            "docs": "The caption for the form control.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "error",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "error",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "The label for the form control.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": false,
            "docs": "Whether the form control is required.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "success",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "success",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "warning",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "warning",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Form Control",
          "description": "The Form Control component adds a label and caption for its child control.",
          "category": "Form Inputs",
          "tags": [
            "form"
          ],
          "example": "<goat-form-control label='Full Name' required>\r\n<goat-input type='text'></goat-input>\r\n</goat-form-control>"
        }
      },
      {
        "filePath": "src/components/navigation/header/header/header.tsx",
        "fileName": "header.tsx",
        "tag": "goat-header",
        "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Header"
          },
          {
            "name": "description",
            "text": "Headers are compositions that extend standard navbar functionalities."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "img",
            "text": "/assets/img/header.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/header-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "float",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "float",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Header",
          "description": "Headers are compositions that extend standard navbar functionalities.",
          "category": "Navigation",
          "img": "/assets/img/header.png",
          "imgDark": "/assets/img/header-dark.png"
        }
      },
      {
        "filePath": "src/components/navigation/header/header-action/header-action.tsx",
        "fileName": "header-action.tsx",
        "tag": "goat-header-action",
        "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-header-action": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "badge",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "badge",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'_self'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "color",
            "type": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"primary\" | \"secondary\" | \"success\"",
            "complexType": {
              "original": "'primary' | 'secondary' | 'success' | 'danger' | 'brand-primary' | 'brand-secondary'",
              "resolved": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"primary\" | \"secondary\" | \"success\"",
              "references": {}
            },
            "mutable": false,
            "attr": "color",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'brand-secondary'",
            "values": [
              {
                "value": "brand-primary",
                "type": "string"
              },
              {
                "value": "brand-secondary",
                "type": "string"
              },
              {
                "value": "danger",
                "type": "string"
              },
              {
                "value": "primary",
                "type": "string"
              },
              {
                "value": "secondary",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "Hyperlink to navigate to on click.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "icon",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "icon",
            "reflectToAttr": false,
            "docs": "Icon which will displayed on button.\r\nPossible values are icon names.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selected",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "selected",
            "reflectToAttr": false,
            "docs": "Button selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"none\" | \"sm\" | \"xl\" | \"xxl\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none'",
              "resolved": "\"lg\" | \"md\" | \"none\" | \"sm\" | \"xl\" | \"xxl\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "Button size.\r\nPossible values are `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"`, `\"xxl\"`, `\"none\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "none",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              },
              {
                "value": "xl",
                "type": "string"
              },
              {
                "value": "xxl",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "target",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "target",
            "reflectToAttr": false,
            "docs": "Sets or retrieves the window or frame at which to target content.",
            "docsTags": [],
            "default": "'_self'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "variant",
            "type": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
            "complexType": {
              "original": "'default' | 'outline' | 'ghost' | 'link'",
              "resolved": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
              "references": {}
            },
            "mutable": false,
            "attr": "variant",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "ghost",
                "type": "string"
              },
              {
                "value": "link",
                "type": "string"
              },
              {
                "value": "outline",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/navigation/header/header-brand/header-brand.tsx",
        "fileName": "header-brand.tsx",
        "tag": "goat-header-brand",
        "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-link",
          "goat-svg",
          "goat-divider"
        ],
        "dependencyGraph": {
          "goat-header-brand": [
            "goat-link",
            "goat-svg",
            "goat-divider"
          ]
        },
        "props": [
          {
            "name": "color",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "color",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'brand-primary'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'#'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "logo",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "logo",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "subTitle",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "sub-title",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-entry/html-editor/html-editor.tsx",
        "fileName": "html-editor.tsx",
        "tag": "goat-html-editor",
        "readme": "# goat-code-editor\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "HTML Editor"
          },
          {
            "name": "description",
            "text": "A browser based html editor."
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "img",
            "text": "/assets/img/html-editor.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/html-editor-dark.png"
          }
        ],
        "encapsulation": "none",
        "dependents": [],
        "dependencies": [
          "goat-button-group",
          "goat-button",
          "goat-spinner"
        ],
        "dependencyGraph": {
          "goat-html-editor": [
            "goat-button-group",
            "goat-button",
            "goat-spinner"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.",
            "docsTags": [],
            "default": "250",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "lineNumbers",
            "type": "\"off\" | \"on\"",
            "complexType": {
              "original": "'off' | 'on'",
              "resolved": "\"off\" | \"on\"",
              "references": {}
            },
            "mutable": false,
            "attr": "line-numbers",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'on'",
            "values": [
              {
                "value": "off",
                "type": "string"
              },
              {
                "value": "on",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "theme",
            "type": "\"vs-dark\" | \"vs-light\"",
            "complexType": {
              "original": "'vs-light' | 'vs-dark'",
              "resolved": "\"vs-dark\" | \"vs-light\"",
              "references": {}
            },
            "mutable": false,
            "attr": "theme",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'vs-light'",
            "values": [
              {
                "value": "vs-dark",
                "type": "string"
              },
              {
                "value": "vs-light",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed..",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "HTML Editor",
          "description": "A browser based html editor.",
          "category": "Up coming",
          "tags": [
            "input",
            " form"
          ],
          "img": "/assets/img/html-editor.png",
          "imgDark": "/assets/img/html-editor-dark.png"
        }
      },
      {
        "filePath": "src/components/general/icon/icon.tsx",
        "fileName": "icon.tsx",
        "tag": "goat-icon",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Icon"
          },
          {
            "name": "description",
            "text": "Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information."
          },
          {
            "name": "category",
            "text": "General"
          },
          {
            "name": "example",
            "text": "<goat-icon name=\"home\" size=\"2rem\"></goat-icon>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-accordion-item",
          "goat-button",
          "goat-dropdown",
          "goat-flow-designer",
          "goat-notification",
          "goat-progress",
          "goat-select",
          "goat-tab",
          "goat-tag",
          "goat-textarea",
          "goat-toast",
          "goat-tree-node"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-accordion-item": [
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon"
          ],
          "goat-dropdown": [
            "goat-icon"
          ],
          "goat-flow-designer": [
            "goat-icon"
          ],
          "goat-notification": [
            "goat-icon"
          ],
          "goat-progress": [
            "goat-icon"
          ],
          "goat-select": [
            "goat-icon"
          ],
          "goat-tab": [
            "goat-icon"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-textarea": [
            "goat-icon"
          ],
          "goat-toast": [
            "goat-icon"
          ],
          "goat-tree-node": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The Icon size.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Icon",
          "description": "Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.",
          "category": "General",
          "example": "<goat-icon name=\"home\" size=\"2rem\"></goat-icon>"
        }
      },
      {
        "filePath": "src/components/general/image/image.tsx",
        "fileName": "image.tsx",
        "tag": "goat-image",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "darkSrc",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "dark-src",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "imageTitle",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "image-title",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "src",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "src",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-entry/input/input/input.tsx",
        "fileName": "input.tsx",
        "tag": "goat-input",
        "readme": "# goat-input\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Input"
          },
          {
            "name": "description",
            "text": "Enables native inputs to be used within a Form field."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-input placeholder=\"Enter your name\"></goat-input>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-condition-builder"
        ],
        "dependencies": [
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-input": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-condition-builder": [
            "goat-input"
          ]
        },
        "props": [
          {
            "name": "autocomplete",
            "type": "\"off\" | \"on\"",
            "complexType": {
              "original": "'on' | 'off'",
              "resolved": "\"off\" | \"on\"",
              "references": {}
            },
            "mutable": false,
            "attr": "autocomplete",
            "reflectToAttr": false,
            "docs": "Indicates whether the value of the control can be automatically completed by the browser.",
            "docsTags": [],
            "default": "'off'",
            "values": [
              {
                "value": "off",
                "type": "string"
              },
              {
                "value": "on",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "clearable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "clearable",
            "reflectToAttr": false,
            "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "helperText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "helper-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "hideActions",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "hide-actions",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "invalid",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "invalid",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "invalidText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "invalid-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'warning' | 'default'",
              "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": true,
            "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "type",
            "type": "\"email\" | \"password\" | \"tel\" | \"text\"",
            "complexType": {
              "original": "'text' | 'password' | 'email' | 'tel'",
              "resolved": "\"email\" | \"password\" | \"tel\" | \"text\"",
              "references": {}
            },
            "mutable": false,
            "attr": "type",
            "reflectToAttr": false,
            "docs": "The type of control to display.\nPossible values are: `\"text\"`, `\"password\"`, `\"email\"`, `\"tel\"`. Defaults to `\"text\"`.",
            "docsTags": [],
            "default": "'text'",
            "values": [
              {
                "value": "email",
                "type": "string"
              },
              {
                "value": "password",
                "type": "string"
              },
              {
                "value": "tel",
                "type": "string"
              },
              {
                "value": "text",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          },
          {
            "name": "warn",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "warn",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "warnText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "warn-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Input",
          "description": "Enables native inputs to be used within a Form field.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-input placeholder=\"Enter your name\"></goat-input>"
        }
      },
      {
        "filePath": "src/components/navigation/link/link.tsx",
        "fileName": "link.tsx",
        "tag": "goat-link",
        "readme": "# goat-button\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Link"
          },
          {
            "name": "description",
            "text": "Links allow users to click their way from page to page."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "example",
            "text": "<goat-link href=\"#\">Link</goat-link>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-breadcrumb-item",
          "goat-header-brand"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-breadcrumb-item": [
            "goat-link"
          ],
          "goat-header-brand": [
            "goat-link"
          ]
        },
        "props": [
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "Hyperlink to navigate to on click.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "target",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "target",
            "reflectToAttr": false,
            "docs": "Sets or retrieves the window or frame at which to target content.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "triggerClick",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "triggerClick() => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          }
        ],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Link",
          "description": "Links allow users to click their way from page to page.",
          "category": "Navigation",
          "example": "<goat-link href=\"#\">Link</goat-link>"
        }
      },
      {
        "filePath": "src/components/navigation/menu/menu/menu.tsx",
        "fileName": "menu.tsx",
        "tag": "goat-menu",
        "readme": "# goat-menu\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Menu"
          },
          {
            "name": "description",
            "text": "Menus display a list of choices on temporary surfaces."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "img",
            "text": "/assets/img/menu.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/menu-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-dropdown",
          "goat-select"
        ],
        "dependencies": [
          "goat-empty-state"
        ],
        "dependencyGraph": {
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-dropdown": [
            "goat-menu"
          ],
          "goat-select": [
            "goat-menu"
          ]
        },
        "props": [
          {
            "name": "empty",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "empty",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "emptyState",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "empty-state",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "`{\r\n    \"headline\": \"No items\",\r\n    \"description\": \"There are no items to display\"\r\n  }`",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The menu item size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on first menu item. Use this method instead of the global\r\n`element.focus()`.",
            "docsTags": []
          }
        ],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "keydown",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Menu",
          "description": "Menus display a list of choices on temporary surfaces.",
          "category": "Navigation",
          "img": "/assets/img/menu.png",
          "imgDark": "/assets/img/menu-dark.png"
        }
      },
      {
        "filePath": "src/components/navigation/menu/menu-item/menu-item.tsx",
        "fileName": "menu-item.tsx",
        "tag": "goat-menu-item",
        "readme": "# goat-menu-item\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [
          "goat-dropdown",
          "goat-select"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-dropdown": [
            "goat-menu-item"
          ],
          "goat-select": [
            "goat-menu-item"
          ]
        },
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selected",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "selected",
            "reflectToAttr": true,
            "docs": "Menu item selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The menu item value.",
            "docsTags": [],
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:menu-item-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the menu item is clicked.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/modal/modal/modal.tsx",
        "fileName": "modal.tsx",
        "tag": "goat-modal",
        "readme": "# p4-modal\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Modal"
          },
          {
            "name": "description",
            "text": "Modals are used to display content in a layer above the app."
          },
          {
            "name": "category",
            "text": "Up coming"
          },
          {
            "name": "tags",
            "text": "controls"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-text",
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-modal": [
            "goat-text",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "show",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "os:prompt",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Modal",
          "description": "Modals are used to display content in a layer above the app.",
          "category": "Up coming",
          "tags": [
            "controls"
          ]
        }
      },
      {
        "filePath": "src/components/feedback/notification/notification.tsx",
        "fileName": "notification.tsx",
        "tag": "goat-notification",
        "readme": "# goat-alert\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Notification"
          },
          {
            "name": "description",
            "text": "Notifications are messages that communicate information to the user."
          },
          {
            "name": "category",
            "text": "Feedback"
          },
          {
            "name": "tags",
            "text": "notification"
          },
          {
            "name": "example",
            "text": "<goat-notification state=\"success\">\r\n     <div slot='title'>Successful saved the record</div>\r\n   </goat-notification>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-notification-manager"
        ],
        "dependencies": [
          "goat-button",
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-notification": [
            "goat-button",
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-notification-manager": [
            "goat-notification"
          ]
        },
        "props": [
          {
            "name": "actionLabel",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "action-label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'Dismiss'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "actionName",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "action-name",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'dismiss'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "actionable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "actionable",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "dismissible",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "dismissible",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "lowContrast",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "low-contrast",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"error\" | \"info\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'info' | 'warning'",
              "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'info'",
            "values": [
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "info",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:dismiss",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Notification",
          "description": "Notifications are messages that communicate information to the user.",
          "category": "Feedback",
          "tags": [
            "notification"
          ],
          "example": "<goat-notification state=\"success\">\r\n     <div slot='title'>Successful saved the record</div>\r\n   </goat-notification>"
        }
      },
      {
        "filePath": "src/components/feedback/notification-manager/notification-manager.tsx",
        "fileName": "notification-manager.tsx",
        "tag": "goat-notification-manager",
        "readme": "# goat-alert\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Notification Manager"
          },
          {
            "name": "description",
            "text": "Manages alert, toasts and notifications."
          },
          {
            "name": "category",
            "text": "Feedback"
          },
          {
            "name": "tags",
            "text": "notification"
          },
          {
            "name": "img",
            "text": "/assets/img/notification-manager.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/notification-manager-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-toast",
          "goat-notification"
        ],
        "dependencyGraph": {
          "goat-notification-manager": [
            "goat-toast",
            "goat-notification"
          ],
          "goat-toast": [
            "goat-icon"
          ],
          "goat-notification": [
            "goat-button",
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'global'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "position",
            "type": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
            "complexType": {
              "original": "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
              "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
              "references": {}
            },
            "mutable": false,
            "attr": "position",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'bottom-right'",
            "values": [
              {
                "value": "bottom-left",
                "type": "string"
              },
              {
                "value": "bottom-right",
                "type": "string"
              },
              {
                "value": "top-left",
                "type": "string"
              },
              {
                "value": "top-right",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:toast",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:notification",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Notification Manager",
          "description": "Manages alert, toasts and notifications.",
          "category": "Feedback",
          "tags": [
            "notification"
          ],
          "img": "/assets/img/notification-manager.png",
          "imgDark": "/assets/img/notification-manager-dark.png"
        }
      },
      {
        "filePath": "src/components/data-entry/input/number/number.tsx",
        "fileName": "number.tsx",
        "tag": "goat-number",
        "readme": "# goat-input\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Number"
          },
          {
            "name": "description",
            "text": "Enables native inputs to be used within a Form field."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-number value=\"100\"></goat-input>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-slider"
        ],
        "dependencies": [
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-number": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-slider": [
            "goat-number"
          ]
        },
        "props": [
          {
            "name": "autocomplete",
            "type": "\"off\" | \"on\"",
            "complexType": {
              "original": "'on' | 'off'",
              "resolved": "\"off\" | \"on\"",
              "references": {}
            },
            "mutable": false,
            "attr": "autocomplete",
            "reflectToAttr": false,
            "docs": "Indicates whether the value of the control can be automatically completed by the browser.",
            "docsTags": [],
            "default": "'off'",
            "values": [
              {
                "value": "off",
                "type": "string"
              },
              {
                "value": "on",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "clearable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "clearable",
            "reflectToAttr": false,
            "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "hideActions",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "hide-actions",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'warning' | 'default'",
              "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": true,
            "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number",
            "complexType": {
              "original": "number | null",
              "resolved": "number",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "null",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Number",
          "description": "Enables native inputs to be used within a Form field.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-number value=\"100\"></goat-input>"
        }
      },
      {
        "filePath": "src/components/feedback/progress/progress.tsx",
        "fileName": "progress.tsx",
        "tag": "goat-progress",
        "readme": "# goat-spinner\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Progress"
          },
          {
            "name": "description",
            "text": "Progress indicators express an unspecified wait time or display the length of a process."
          },
          {
            "name": "category",
            "text": "Feedback"
          },
          {
            "name": "tags",
            "text": "feedback, loading, progress, spinner"
          },
          {
            "name": "example",
            "text": "<goat-progress value=\"40\" label=\"Progress\" width=\"100%\" helper-text=\"Optional helper text goes here...\"></goat-progress>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-progress": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "helperText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "helper-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "hideLabel",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "hide-label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md'",
              "resolved": "\"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "\nPossible values are: `\"sm\"` and `\"md\"` in pixel. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "status",
            "type": "\"active\" | \"error\" | \"success\"",
            "complexType": {
              "original": "'active' | 'success' | 'error'",
              "resolved": "\"active\" | \"error\" | \"success\"",
              "references": {}
            },
            "mutable": false,
            "attr": "status",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'active'",
            "values": [
              {
                "value": "active",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "null",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Progress",
          "description": "Progress indicators express an unspecified wait time or display the length of a process.",
          "category": "Feedback",
          "tags": [
            "feedback",
            " loading",
            " progress",
            " spinner"
          ],
          "example": "<goat-progress value=\"40\" label=\"Progress\" width=\"100%\" helper-text=\"Optional helper text goes here...\"></goat-progress>"
        }
      },
      {
        "filePath": "src/components/data-entry/select/select.tsx",
        "fileName": "select.tsx",
        "tag": "goat-select",
        "readme": "# goat-select\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Select"
          },
          {
            "name": "description",
            "text": "Allows the user to select one or more options using a dropdown."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "img",
            "text": "/assets/img/select.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/select-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-calendar",
          "goat-cb-expression",
          "goat-condition-builder",
          "goat-table"
        ],
        "dependencies": [
          "goat-icon",
          "goat-tag",
          "goat-button",
          "goat-spinner",
          "goat-menu",
          "goat-text",
          "goat-menu-item"
        ],
        "dependencyGraph": {
          "goat-select": [
            "goat-icon",
            "goat-tag",
            "goat-button",
            "goat-spinner",
            "goat-menu",
            "goat-text",
            "goat-menu-item"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-calendar": [
            "goat-select"
          ],
          "goat-cb-expression": [
            "goat-select"
          ],
          "goat-condition-builder": [
            "goat-select"
          ],
          "goat-table": [
            "goat-select"
          ]
        },
        "props": [
          {
            "name": "clearable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "clearable",
            "reflectToAttr": false,
            "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "hideDropdownIcon",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "hide-dropdown-icon",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "isOpen",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "is-open",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "items",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": false,
            "attr": "items",
            "reflectToAttr": false,
            "docs": "[{\n  label: 'Shivaji Varma',\n  value: 'shivaji-varma',\n  icon: 'person'\n}]",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "multiple",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "multiple",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "positions",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "positions",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'bottom-right,top-right,bottom-left,top-left'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "search",
            "type": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
            "complexType": {
              "original": "'none' | 'initial' | 'contains' | 'managed'",
              "resolved": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
              "references": {}
            },
            "mutable": false,
            "attr": "search",
            "reflectToAttr": false,
            "docs": "Search type\nPossible values are `\"none\"`, `\"initial\"`, `\"contains\"`, `\"managed\"`. Defaults to `\"none\"`.",
            "docsTags": [],
            "default": "'none'",
            "values": [
              {
                "value": "contains",
                "type": "string"
              },
              {
                "value": "initial",
                "type": "string"
              },
              {
                "value": "managed",
                "type": "string"
              },
              {
                "value": "none",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The select input size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'warning' | 'default'",
              "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": true,
            "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:search",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          },
          {
            "event": "goat:search-enter",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "click",
            "target": "window",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:menu-item-click",
            "capture": false,
            "passive": false
          },
          {
            "event": "goat:tag-dismiss",
            "capture": false,
            "passive": false
          },
          {
            "event": "scroll",
            "target": "window",
            "capture": false,
            "passive": true
          }
        ],
        "metadata": {
          "name": "Select",
          "description": "Allows the user to select one or more options using a dropdown.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "img": "/assets/img/select.png",
          "imgDark": "/assets/img/select-dark.png"
        }
      },
      {
        "filePath": "src/components/app-shell/sidenav/sidenav.tsx",
        "fileName": "sidenav.tsx",
        "tag": "goat-sidenav",
        "readme": "# goat-menu\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name1",
            "text": "Side Navigation"
          },
          {
            "name": "description1",
            "text": "The side navigation component provides an easy way to navigate through your website / application."
          },
          {
            "name": "img1",
            "text": "/assets/img/sidenav.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name1": "Side Navigation",
          "description1": "The side navigation component provides an easy way to navigate through your website / application.",
          "img1": "/assets/img/sidenav.png"
        }
      },
      {
        "filePath": "src/components/app-shell/sidenav-menu/sidenav-menu.tsx",
        "fileName": "sidenav-menu.tsx",
        "tag": "goat-sidenav-menu",
        "readme": "# goat-menu\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-empty-state"
        ],
        "dependencyGraph": {
          "goat-sidenav-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "empty",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "empty",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "emptyState",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "empty-state",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "`{\n    \"headline\": \"No items\",\n    \"description\": \"There are no items to display\"\n  }`",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on first menu item. Use this method instead of the global\n`element.focus()`.",
            "docsTags": []
          }
        ],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "keydown",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/app-shell/sidenav-menu-item/sidenav-menu-item.tsx",
        "fileName": "sidenav-menu-item.tsx",
        "tag": "goat-sidenav-menu-item",
        "readme": "# goat-menu-item\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selected",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "selected",
            "reflectToAttr": true,
            "docs": "Menu item selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The menu item value.",
            "docsTags": [],
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:sidenav-menu-item-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the menu item is clicked.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-entry/slider/slider.tsx",
        "fileName": "slider.tsx",
        "tag": "goat-slider",
        "readme": "# goat-select\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Slider"
          },
          {
            "name": "description",
            "text": "Allows the user to select one or more options using a dropdown."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "img",
            "text": "/assets/img/slider.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/slider-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-number"
        ],
        "dependencyGraph": {
          "goat-slider": [
            "goat-number"
          ],
          "goat-number": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "max",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "max",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "100",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "min",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "min",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "0",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "0",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "click",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Slider",
          "description": "Allows the user to select one or more options using a dropdown.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "img": "/assets/img/slider.png",
          "imgDark": "/assets/img/slider-dark.png"
        }
      },
      {
        "filePath": "src/components/feedback/spinner/spinner.tsx",
        "fileName": "spinner.tsx",
        "tag": "goat-spinner",
        "readme": "# goat-spinner\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Spinner"
          },
          {
            "name": "description",
            "text": "Spinners provide a visual cue that an action is processing awaiting a course of change or a result."
          },
          {
            "name": "category",
            "text": "Feedback"
          },
          {
            "name": "tags",
            "text": "feedback, loading, progress, spinner"
          },
          {
            "name": "example",
            "text": "<goat-spinner class=\"rainbow\" size=\"2rem\"></goat-spinner>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-button",
          "goat-code-editor",
          "goat-code-highlighter",
          "goat-html-editor",
          "goat-select",
          "goat-tab"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-button": [
            "goat-spinner"
          ],
          "goat-code-editor": [
            "goat-spinner"
          ],
          "goat-code-highlighter": [
            "goat-spinner"
          ],
          "goat-html-editor": [
            "goat-spinner"
          ],
          "goat-select": [
            "goat-spinner"
          ],
          "goat-tab": [
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "description",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "description",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'Loading'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "string",
            "complexType": {
              "original": "'sm' | 'md' | 'lg' | string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"` and size in pixel. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Spinner",
          "description": "Spinners provide a visual cue that an action is processing awaiting a course of change or a result.",
          "category": "Feedback",
          "tags": [
            "feedback",
            " loading",
            " progress",
            " spinner"
          ],
          "example": "<goat-spinner class=\"rainbow\" size=\"2rem\"></goat-spinner>"
        }
      },
      {
        "filePath": "src/components/data-display/svg/svg.tsx",
        "fileName": "svg.tsx",
        "tag": "goat-svg",
        "readme": "# goat-icon\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "SVG"
          },
          {
            "name": "description",
            "text": "Render SVG content from an external source."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "example",
            "text": "<goat-svg src=\"https://icons.getbootstrap.com/assets/icons/bug.svg\" size=\"2rem\"></goat-svg>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-empty-state",
          "goat-header-brand"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-empty-state": [
            "goat-svg"
          ],
          "goat-header-brand": [
            "goat-svg"
          ]
        },
        "props": [
          {
            "name": "size",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The Icon size.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "src",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "src",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "SVG",
          "description": "Render SVG content from an external source.",
          "category": "Data Display",
          "example": "<goat-svg src=\"https://icons.getbootstrap.com/assets/icons/bug.svg\" size=\"2rem\"></goat-svg>"
        }
      },
      {
        "filePath": "src/components/navigation/tabs/tab/tab.tsx",
        "fileName": "tab.tsx",
        "tag": "goat-tab",
        "readme": "# goat-tab\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-icon",
          "goat-spinner"
        ],
        "dependencyGraph": {
          "goat-tab": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabledReason",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled-reason",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "icon",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "icon",
            "reflectToAttr": false,
            "docs": "Icon which will displayed on button.\r\nPossible values are bootstrap icon names.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selected",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "selected",
            "reflectToAttr": true,
            "docs": "Button selection state.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "showLoader",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "show-loader",
            "reflectToAttr": false,
            "docs": "Show loader.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "target",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "target",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "triggerClick",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "triggerClick() => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:tab-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "On click of tab, a CustomEvent 'goat:tab-click' will be triggered.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/navigation/tabs/tab-panel/tab-panel.tsx",
        "fileName": "tab-panel.tsx",
        "tag": "goat-tab-panel",
        "readme": "# goat-tab\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "active",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "active",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "value",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-display/table/table.tsx",
        "fileName": "table.tsx",
        "tag": "goat-table",
        "readme": "# goat-table\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Table"
          },
          {
            "name": "description",
            "text": "A configurable component for displaying tabular data."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "img",
            "text": "/assets/img/table.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/table-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-checkbox",
          "goat-button",
          "goat-form-control",
          "goat-select",
          "goat-text",
          "goat-empty-state"
        ],
        "dependencyGraph": {
          "goat-table": [
            "goat-checkbox",
            "goat-button",
            "goat-form-control",
            "goat-select",
            "goat-text",
            "goat-empty-state"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ],
          "goat-select": [
            "goat-icon",
            "goat-tag",
            "goat-button",
            "goat-spinner",
            "goat-menu",
            "goat-text",
            "goat-menu-item"
          ],
          "goat-tag": [
            "goat-icon"
          ],
          "goat-menu": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ]
        },
        "props": [
          {
            "name": "columns",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "Grid columns configuration.\r\n[\r\n{\r\n  \"name\":\"name\",\r\n  \"label\":\"Name\",\r\n  \"width\":300,\r\n  \"fixed\":true,\r\n  \"template\": function(row, column) { return row[column.name];}\r\n },\r\n{\r\n  \"name\":\"age\",\r\n  \"label\":\"Age\"\r\n}\r\n]",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "data",
            "type": "any[]",
            "complexType": {
              "original": "any[]",
              "resolved": "any[]",
              "references": {}
            },
            "mutable": false,
            "reflectToAttr": false,
            "docs": "Grid data to display on table\r\n[{\r\n 'id': '5e7118ddce4b3d577956457f',\r\n 'age': 21,\r\n 'name': 'John',\r\n 'company': 'India',\r\n 'email': 'john@example.com',\r\n 'phone': '+1 (839) 560-3581',\r\n 'address': '326 Irving Street, Grimsley, Texas, 4048'\r\n }]",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "any[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "emptyState",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "empty-state",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "{\r\n    title: 'No items',\r\n    description: 'There are no items to display',\r\n  }",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "keyField",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "key-field",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'id'",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "managed",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "managed",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "page",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "page",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "1",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "pageSize",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "page-size",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "10",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "paginate",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "paginate",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selectedRowKeys",
            "type": "string[]",
            "complexType": {
              "original": "string[]",
              "resolved": "string[]",
              "references": {}
            },
            "mutable": true,
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "[]",
            "values": [
              {
                "type": "string[]"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selectionType",
            "type": "\"checkbox\"",
            "complexType": {
              "original": "'checkbox' | undefined",
              "resolved": "\"checkbox\"",
              "references": {}
            },
            "mutable": false,
            "attr": "selection-type",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "value": "checkbox",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "sortBy",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "sort-by",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "sortOrder",
            "type": "\"asc\" | \"desc\"",
            "complexType": {
              "original": "'asc' | 'desc'",
              "resolved": "\"asc\" | \"desc\"",
              "references": {}
            },
            "mutable": true,
            "attr": "sort-order",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'asc'",
            "values": [
              {
                "value": "asc",
                "type": "string"
              },
              {
                "value": "desc",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "sortable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "sortable",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "totalItems",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "total-items",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:page",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:sort",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:table-cell-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:table-select-change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Table",
          "description": "A configurable component for displaying tabular data.",
          "category": "Data Display",
          "img": "/assets/img/table.png",
          "imgDark": "/assets/img/table-dark.png"
        }
      },
      {
        "filePath": "src/components/navigation/tabs/tabs/tabs.tsx",
        "fileName": "tabs.tsx",
        "tag": "goat-tabs",
        "readme": "# goat-tabs\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Tabs"
          },
          {
            "name": "description",
            "text": "An interactive button with a range of presentation options."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "tags",
            "text": "navigation"
          },
          {
            "name": "example",
            "text": "<goat-tabs>\r\n<goat-tabs-list>\r\n<goat-tab selected >Tab 1</goat-tab>\r\n<goat-tab>Tab 2</goat-tab>\r\n</goat-tabs-list>\r\n</goat-tabs>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:tab-click",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Tabs",
          "description": "An interactive button with a range of presentation options.",
          "category": "Navigation",
          "tags": [
            "navigation"
          ],
          "example": "<goat-tabs>\r\n<goat-tabs-list>\r\n<goat-tab selected >Tab 1</goat-tab>\r\n<goat-tab>Tab 2</goat-tab>\r\n</goat-tabs-list>\r\n</goat-tabs>"
        }
      },
      {
        "filePath": "src/components/navigation/tabs/tabs-list/tabs-list.tsx",
        "fileName": "tabs-list.tsx",
        "tag": "goat-tabs-list",
        "readme": "# goat-tabs\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "managed",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "managed",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "variant",
            "type": "\"contained\" | \"line\"",
            "complexType": {
              "original": "'line' | 'contained'",
              "resolved": "\"contained\" | \"line\"",
              "references": {}
            },
            "mutable": false,
            "attr": "variant",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'line'",
            "values": [
              {
                "value": "contained",
                "type": "string"
              },
              {
                "value": "line",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:tab-click",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/data-display/tag/tag.tsx",
        "fileName": "tag.tsx",
        "tag": "goat-tag",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Tag"
          },
          {
            "name": "description",
            "text": "Use tags to label, categorize, or organize items using keywords that describe them."
          },
          {
            "name": "category",
            "text": "Data Display"
          },
          {
            "name": "tag",
            "text": "controls"
          },
          {
            "name": "example",
            "text": "<goat-tag class=\"color-red\">Important</goat-tag>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-cb-compound-expression",
          "goat-cb-predicate",
          "goat-condition-builder",
          "goat-flow-designer",
          "goat-select"
        ],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-tag": [
            "goat-icon"
          ],
          "goat-cb-compound-expression": [
            "goat-tag"
          ],
          "goat-cb-predicate": [
            "goat-tag"
          ],
          "goat-condition-builder": [
            "goat-tag"
          ],
          "goat-flow-designer": [
            "goat-tag"
          ],
          "goat-select": [
            "goat-tag"
          ]
        },
        "props": [
          {
            "name": "color",
            "type": "\"blue\" | \"error\" | \"gray\" | \"green\" | \"info\" | \"primary\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
            "complexType": {
              "original": "'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'primary' | 'success' | 'info' | 'warning' | 'error'",
              "resolved": "\"blue\" | \"error\" | \"gray\" | \"green\" | \"info\" | \"primary\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
              "references": {}
            },
            "mutable": false,
            "attr": "color",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'gray'",
            "values": [
              {
                "value": "blue",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "gray",
                "type": "string"
              },
              {
                "value": "green",
                "type": "string"
              },
              {
                "value": "info",
                "type": "string"
              },
              {
                "value": "primary",
                "type": "string"
              },
              {
                "value": "red",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              },
              {
                "value": "yellow",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "filter",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "filter",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "imageSrc",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "image-src",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md'",
              "resolved": "\"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "Text size.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "value",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [
          {
            "event": "goat:click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          },
          {
            "event": "goat:tag-dismiss",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Tag",
          "description": "Use tags to label, categorize, or organize items using keywords that describe them.",
          "category": "Data Display",
          "tag": "controls",
          "example": "<goat-tag class=\"color-red\">Important</goat-tag>"
        }
      },
      {
        "filePath": "src/components/general/text/text.tsx",
        "fileName": "text.tsx",
        "tag": "goat-text",
        "readme": "# goat-heading\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Text"
          },
          {
            "name": "description",
            "text": "Typography are used for rendering headlines, paragraphs and captions."
          },
          {
            "name": "category",
            "text": "General"
          },
          {
            "name": "example",
            "text": "<goat-text type=\"heading\" level=\"1\">Heading</goat-typography>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-breadcrumb-item",
          "goat-cb-compound-expression",
          "goat-condition-builder",
          "goat-modal",
          "goat-select",
          "goat-table"
        ],
        "dependencies": [],
        "dependencyGraph": {
          "goat-breadcrumb-item": [
            "goat-text"
          ],
          "goat-cb-compound-expression": [
            "goat-text"
          ],
          "goat-condition-builder": [
            "goat-text"
          ],
          "goat-modal": [
            "goat-text"
          ],
          "goat-select": [
            "goat-text"
          ],
          "goat-table": [
            "goat-text"
          ]
        },
        "props": [
          {
            "name": "color",
            "type": "\"error\" | \"helper\" | \"inverse\" | \"on-color\" | \"primary\" | \"secondary\" | \"tertiary\"",
            "complexType": {
              "original": "'primary' | 'secondary' | 'tertiary' | 'helper' | 'error' | 'on-color' | 'inverse'",
              "resolved": "\"error\" | \"helper\" | \"inverse\" | \"on-color\" | \"primary\" | \"secondary\" | \"tertiary\"",
              "references": {}
            },
            "mutable": false,
            "attr": "color",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "'primary'",
            "values": [
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "helper",
                "type": "string"
              },
              {
                "value": "inverse",
                "type": "string"
              },
              {
                "value": "on-color",
                "type": "string"
              },
              {
                "value": "primary",
                "type": "string"
              },
              {
                "value": "secondary",
                "type": "string"
              },
              {
                "value": "tertiary",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "expressive",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "expressive",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "headingLevel",
            "type": "1 | 2 | 3 | 4 | 5 | 6",
            "complexType": {
              "original": "1 | 2 | 3 | 4 | 5 | 6",
              "resolved": "1 | 2 | 3 | 4 | 5 | 6",
              "references": {}
            },
            "mutable": false,
            "attr": "heading-level",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "value": "1",
                "type": "number"
              },
              {
                "value": "2",
                "type": "number"
              },
              {
                "value": "3",
                "type": "number"
              },
              {
                "value": "4",
                "type": "number"
              },
              {
                "value": "5",
                "type": "number"
              },
              {
                "value": "6",
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "headingSize",
            "type": "1 | 2 | 3 | 4 | 5 | 6 | 7",
            "complexType": {
              "original": "1 | 2 | 3 | 4 | 5 | 6 | 7",
              "resolved": "1 | 2 | 3 | 4 | 5 | 6 | 7",
              "references": {}
            },
            "mutable": false,
            "attr": "heading-size",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "7",
            "values": [
              {
                "value": "1",
                "type": "number"
              },
              {
                "value": "2",
                "type": "number"
              },
              {
                "value": "3",
                "type": "number"
              },
              {
                "value": "4",
                "type": "number"
              },
              {
                "value": "5",
                "type": "number"
              },
              {
                "value": "6",
                "type": "number"
              },
              {
                "value": "7",
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "type",
            "type": "\"body\" | \"body-compact\" | \"code\" | \"heading\" | \"heading-compact\" | \"helper-text\" | \"label\" | \"legal\"",
            "complexType": {
              "original": "'code' | 'helper-text' | 'label' | 'legal' | 'heading' | 'body' | 'body-compact' | 'heading-compact'",
              "resolved": "\"body\" | \"body-compact\" | \"code\" | \"heading\" | \"heading-compact\" | \"helper-text\" | \"label\" | \"legal\"",
              "references": {}
            },
            "mutable": false,
            "attr": "type",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "'body'",
            "values": [
              {
                "value": "body",
                "type": "string"
              },
              {
                "value": "body-compact",
                "type": "string"
              },
              {
                "value": "code",
                "type": "string"
              },
              {
                "value": "heading",
                "type": "string"
              },
              {
                "value": "heading-compact",
                "type": "string"
              },
              {
                "value": "helper-text",
                "type": "string"
              },
              {
                "value": "label",
                "type": "string"
              },
              {
                "value": "legal",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Text",
          "description": "Typography are used for rendering headlines, paragraphs and captions.",
          "category": "General",
          "example": "<goat-text type=\"heading\" level=\"1\">Heading</goat-typography>"
        }
      },
      {
        "filePath": "src/components/data-entry/textarea/textarea.tsx",
        "fileName": "textarea.tsx",
        "tag": "goat-textarea",
        "readme": "# goat-textarea\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Textarea"
          },
          {
            "name": "description",
            "text": "Enables native inputs to be used within a Form field."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-textarea placeholder=\"Enter some description over here\"></goat-textarea>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-textarea": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "clearable",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "clearable",
            "reflectToAttr": false,
            "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "debounce",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "debounce",
            "reflectToAttr": false,
            "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.",
            "docsTags": [],
            "default": "300",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "helperText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "helper-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "invalid",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "invalid",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "invalidText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "invalid-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": false,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'warning' | 'default'",
              "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": true,
            "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
            "docsTags": [],
            "default": "'default'",
            "values": [
              {
                "value": "default",
                "type": "string"
              },
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "warn",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "warn",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "warnText",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "warn-text",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `textarea` in `goat-textarea`. Use this method instead of the global\n`textarea.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `textarea` in `goat-textarea`. Use this method instead of the global\n`textarea.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:action-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the action button is clicked.",
            "docsTags": []
          },
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed..",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Textarea",
          "description": "Enables native inputs to be used within a Form field.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-textarea placeholder=\"Enter some description over here\"></goat-textarea>"
        }
      },
      {
        "filePath": "src/components/data-entry/date/time-picker/time-picker.tsx",
        "fileName": "time-picker.tsx",
        "tag": "goat-time-picker",
        "readme": "# goat-time-picker\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Time Picker"
          },
          {
            "name": "description",
            "text": "Captures time input."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-time-picker value='true'></goat-time-picker>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-button"
        ],
        "dependencyGraph": {
          "goat-time-picker": [
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "inline",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "inline",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "placeholder",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "placeholder",
            "reflectToAttr": false,
            "docs": "The input field placeholder.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\" | \"sm\"",
            "complexType": {
              "original": "'sm' | 'md' | 'lg'",
              "resolved": "\"lg\" | \"md\" | \"sm\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": true,
            "docs": "The input field size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              },
              {
                "value": "sm",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the value has changed.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          },
          {
            "event": "goat:input",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when a keyboard input occurred.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Time Picker",
          "description": "Captures time input.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-time-picker value='true'></goat-time-picker>"
        }
      },
      {
        "filePath": "src/components/feedback/toast/toast.tsx",
        "fileName": "toast.tsx",
        "tag": "goat-toast",
        "readme": "# goat-alert\n\n\n",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Toast"
          },
          {
            "name": "description",
            "text": "Toasts are lightweight notifications."
          },
          {
            "name": "category",
            "text": "Feedback"
          },
          {
            "name": "example",
            "text": "<goat-toast state=\"success\" message=\"Successful saved the record\"></goat-toast>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [
          "goat-notification-manager"
        ],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-toast": [
            "goat-icon"
          ],
          "goat-notification-manager": [
            "goat-toast"
          ]
        },
        "props": [
          {
            "name": "message",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "message",
            "reflectToAttr": false,
            "docs": "Message to display in the toast.",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "state",
            "type": "\"error\" | \"info\" | \"success\" | \"warning\"",
            "complexType": {
              "original": "'success' | 'error' | 'info' | 'warning'",
              "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
              "references": {}
            },
            "mutable": false,
            "attr": "state",
            "reflectToAttr": true,
            "docs": "Toast state.\nPossible values are `\"success\"`, `\"error\"`, `\"info\"`, `\"warning\"`. Defaults to `\"info\"`.",
            "docsTags": [],
            "default": "'info'",
            "values": [
              {
                "value": "error",
                "type": "string"
              },
              {
                "value": "info",
                "type": "string"
              },
              {
                "value": "success",
                "type": "string"
              },
              {
                "value": "warning",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [],
        "metadata": {
          "name": "Toast",
          "description": "Toasts are lightweight notifications.",
          "category": "Feedback",
          "example": "<goat-toast state=\"success\" message=\"Successful saved the record\"></goat-toast>"
        }
      },
      {
        "filePath": "src/components/data-entry/toggle/toggle.tsx",
        "fileName": "toggle.tsx",
        "tag": "goat-toggle",
        "readme": "# goat-checkbox\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "Toggle"
          },
          {
            "name": "description",
            "text": "Captures boolean input with an optional indeterminate mode."
          },
          {
            "name": "category",
            "text": "Form Inputs"
          },
          {
            "name": "tags",
            "text": "input, form"
          },
          {
            "name": "example",
            "text": "<goat-toggle value='true'>Want ice cream?</goat-toggle>"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [],
        "dependencyGraph": {},
        "props": [
          {
            "name": "configAria",
            "type": "any",
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "mutable": true,
            "attr": "config-aria",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "{}",
            "values": [
              {
                "type": "any"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "The checkbox label.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "name",
            "reflectToAttr": false,
            "docs": "The input field name.",
            "docsTags": [],
            "default": "`goat-input-${this.gid}`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "readonly",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "readonly",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "required",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "required",
            "reflectToAttr": true,
            "docs": "If true, required icon is show. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "rounded",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "rounded",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "size",
            "type": "\"lg\" | \"md\"",
            "complexType": {
              "original": "'md' | 'lg'",
              "resolved": "\"lg\" | \"md\"",
              "references": {}
            },
            "mutable": false,
            "attr": "size",
            "reflectToAttr": false,
            "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
            "docsTags": [],
            "default": "'md'",
            "values": [
              {
                "value": "lg",
                "type": "string"
              },
              {
                "value": "md",
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The input field value.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getComponentId",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getComponentId() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:blur",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input loses focus.",
            "docsTags": []
          },
          {
            "event": "goat:change",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.",
            "docsTags": []
          },
          {
            "event": "goat:focus",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the input has focus.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "Toggle",
          "description": "Captures boolean input with an optional indeterminate mode.",
          "category": "Form Inputs",
          "tags": [
            "input",
            " form"
          ],
          "example": "<goat-toggle value='true'>Want ice cream?</goat-toggle>"
        }
      },
      {
        "filePath": "src/components/navigation/tree-view/tree-node/tree-node.tsx",
        "fileName": "tree-node.tsx",
        "tag": "goat-tree-node",
        "readme": "# goat-menu\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-icon"
        ],
        "dependencyGraph": {
          "goat-tree-node": [
            "goat-icon"
          ]
        },
        "props": [
          {
            "name": "disabled",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "disabled",
            "reflectToAttr": true,
            "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "expanded",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": false,
            "attr": "expanded",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "true",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "href",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "href",
            "reflectToAttr": false,
            "docs": "Hyperlink to navigate to on click.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "label",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "label",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "''",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "level",
            "type": "number",
            "complexType": {
              "original": "number",
              "resolved": "number",
              "references": {}
            },
            "mutable": false,
            "attr": "level",
            "reflectToAttr": true,
            "docs": "",
            "docsTags": [],
            "default": "0",
            "values": [
              {
                "type": "number"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selectedNode",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": false,
            "attr": "selected-node",
            "reflectToAttr": true,
            "docs": "Menu item selection state.",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "value",
            "type": "number | string",
            "complexType": {
              "original": "string | number | null",
              "resolved": "number | string",
              "references": {}
            },
            "mutable": true,
            "attr": "value",
            "reflectToAttr": false,
            "docs": "The menu item value.",
            "docsTags": [],
            "values": [
              {
                "type": "number"
              },
              {
                "type": "string"
              }
            ],
            "optional": true,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "setBlur",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setBlur() => Promise<void>",
            "parameters": [],
            "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
            "docsTags": []
          }
        ],
        "events": [
          {
            "event": "goat:tree-node-click",
            "detail": "any",
            "bubbles": true,
            "complexType": {
              "original": "any",
              "resolved": "any",
              "references": {}
            },
            "cancelable": true,
            "composed": true,
            "docs": "Emitted when the menu item is clicked.",
            "docsTags": []
          }
        ],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "mouseup",
            "target": "window",
            "capture": false,
            "passive": true
          },
          {
            "event": "keyup",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {}
      },
      {
        "filePath": "src/components/navigation/tree-view/tree-view/tree-view.tsx",
        "fileName": "tree-view.tsx",
        "tag": "goat-tree-view",
        "readme": "# goat-menu\r\n\r\n\r\n\r",
        "overview": "",
        "usage": {},
        "docs": "",
        "docsTags": [
          {
            "name": "name",
            "text": "TreeView"
          },
          {
            "name": "description",
            "text": "A tree view is a hierarchical structure that provides nested levels of navigation."
          },
          {
            "name": "category",
            "text": "Navigation"
          },
          {
            "name": "img",
            "text": "/assets/img/tree-view.png"
          },
          {
            "name": "imgDark",
            "text": "/assets/img/tree-view-dark.png"
          }
        ],
        "encapsulation": "shadow",
        "dependents": [],
        "dependencies": [
          "goat-empty-state"
        ],
        "dependencyGraph": {
          "goat-tree-view": [
            "goat-empty-state"
          ],
          "goat-empty-state": [
            "goat-svg",
            "goat-button"
          ],
          "goat-button": [
            "goat-icon",
            "goat-spinner"
          ]
        },
        "props": [
          {
            "name": "empty",
            "type": "boolean",
            "complexType": {
              "original": "boolean",
              "resolved": "boolean",
              "references": {}
            },
            "mutable": true,
            "attr": "empty",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "false",
            "values": [
              {
                "type": "boolean"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "emptyState",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "empty-state",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "default": "`{\n    \"headline\": \"No items\",\n    \"description\": \"There are no items to display\"\n  }`",
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          },
          {
            "name": "selectedNode",
            "type": "string",
            "complexType": {
              "original": "string",
              "resolved": "string",
              "references": {}
            },
            "mutable": true,
            "attr": "selected-node",
            "reflectToAttr": false,
            "docs": "",
            "docsTags": [],
            "values": [
              {
                "type": "string"
              }
            ],
            "optional": false,
            "required": false
          }
        ],
        "methods": [
          {
            "name": "getSelectedNode",
            "returns": {
              "type": "Promise<string>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<string>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<string>"
            },
            "signature": "getSelectedNode() => Promise<string>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          },
          {
            "name": "setFocus",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "() => Promise<void>",
              "parameters": [],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "setFocus() => Promise<void>",
            "parameters": [],
            "docs": "Sets focus on first menu item. Use this method instead of the global\n`element.focus()`.",
            "docsTags": []
          },
          {
            "name": "subscribeToSelect",
            "returns": {
              "type": "Promise<void>",
              "docs": ""
            },
            "complexType": {
              "signature": "(cb: any) => Promise<void>",
              "parameters": [
                {
                  "tags": [],
                  "text": ""
                }
              ],
              "references": {
                "Promise": {
                  "location": "global",
                  "id": "global::Promise"
                }
              },
              "return": "Promise<void>"
            },
            "signature": "subscribeToSelect(cb: any) => Promise<void>",
            "parameters": [],
            "docs": "",
            "docsTags": []
          }
        ],
        "events": [],
        "styles": [],
        "slots": [],
        "parts": [],
        "listeners": [
          {
            "event": "goat:tree-node-click",
            "capture": false,
            "passive": false
          },
          {
            "event": "keydown",
            "target": "window",
            "capture": false,
            "passive": false
          }
        ],
        "metadata": {
          "name": "TreeView",
          "description": "A tree view is a hierarchical structure that provides nested levels of navigation.",
          "category": "Navigation",
          "img": "/assets/img/tree-view.png",
          "imgDark": "/assets/img/tree-view-dark.png"
        }
      }
    ],
    "typeLibrary": {},
    "categories": [
      {
        "name": "General",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/general/button/button.tsx",
            "fileName": "button.tsx",
            "tag": "goat-button",
            "readme": "# goat-button\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Button"
              },
              {
                "name": "description",
                "text": "An interactive button with a range of presentation options."
              },
              {
                "name": "category",
                "text": "General"
              },
              {
                "name": "tags",
                "text": "controls"
              },
              {
                "name": "example",
                "text": "<goat-button>\nButton CTA\n</goat-button>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-calendar",
              "goat-code-highlighter",
              "goat-date-picker",
              "goat-empty-state",
              "goat-flow-designer",
              "goat-header-action",
              "goat-html-editor",
              "goat-input",
              "goat-modal",
              "goat-notification",
              "goat-number",
              "goat-select",
              "goat-table",
              "goat-time-picker"
            ],
            "dependencies": [
              "goat-icon",
              "goat-spinner"
            ],
            "dependencyGraph": {
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-calendar": [
                "goat-button"
              ],
              "goat-code-highlighter": [
                "goat-button"
              ],
              "goat-date-picker": [
                "goat-button"
              ],
              "goat-empty-state": [
                "goat-button"
              ],
              "goat-flow-designer": [
                "goat-button"
              ],
              "goat-header-action": [
                "goat-button"
              ],
              "goat-html-editor": [
                "goat-button"
              ],
              "goat-input": [
                "goat-button"
              ],
              "goat-modal": [
                "goat-button"
              ],
              "goat-notification": [
                "goat-button"
              ],
              "goat-number": [
                "goat-button"
              ],
              "goat-select": [
                "goat-button"
              ],
              "goat-table": [
                "goat-button"
              ],
              "goat-time-picker": [
                "goat-button"
              ]
            },
            "props": [
              {
                "name": "color",
                "type": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"dark\" | \"inverse\" | \"light\" | \"primary\" | \"secondary\" | \"success\"",
                "complexType": {
                  "original": "'primary' | 'secondary' | 'success' | 'danger' | 'brand-primary' | 'brand-secondary' | 'dark' | 'light' | 'inverse'",
                  "resolved": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"dark\" | \"inverse\" | \"light\" | \"primary\" | \"secondary\" | \"success\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "color",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'primary'",
                "values": [
                  {
                    "value": "brand-primary",
                    "type": "string"
                  },
                  {
                    "value": "brand-secondary",
                    "type": "string"
                  },
                  {
                    "value": "danger",
                    "type": "string"
                  },
                  {
                    "value": "dark",
                    "type": "string"
                  },
                  {
                    "value": "inverse",
                    "type": "string"
                  },
                  {
                    "value": "light",
                    "type": "string"
                  },
                  {
                    "value": "primary",
                    "type": "string"
                  },
                  {
                    "value": "secondary",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabledReason",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled-reason",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "Hyperlink to navigate to on click.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "icon",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon",
                "reflectToAttr": false,
                "docs": "Icon which will displayed on button.\nPossible values are icon names.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "iconAlign",
                "type": "\"end\" | \"start\"",
                "complexType": {
                  "original": "'start' | 'end'",
                  "resolved": "\"end\" | \"start\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon-align",
                "reflectToAttr": false,
                "docs": "Icon position.",
                "docsTags": [],
                "default": "'end'",
                "values": [
                  {
                    "value": "end",
                    "type": "string"
                  },
                  {
                    "value": "start",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "iconSize",
                "type": "string",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg' | string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon-size",
                "reflectToAttr": false,
                "docs": "Icon size.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "kind",
                "type": "\"block\" | \"default\" | \"simple\"",
                "complexType": {
                  "original": "'default' | 'simple' | 'block'",
                  "resolved": "\"block\" | \"default\" | \"simple\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "kind",
                "reflectToAttr": false,
                "docs": "Button kind.\nPossible values are `\"default\"`, `\"simple\"`, `\"block\"`. Defaults to `\"default\"`.\n`\"default\"` is a long button.\n`\"simple\"` is a text-only button.\n`\"block\"` is a full-width button.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "block",
                    "type": "string"
                  },
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "simple",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selected",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected",
                "reflectToAttr": true,
                "docs": "Button selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "Show loader.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"2xl\" | \"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'",
                  "resolved": "\"2xl\" | \"full\" | \"lg\" | \"md\" | \"sm\" | \"xl\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "Button size.\nPossible values are `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"`, `\"2xl\"`, `\"full\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "2xl",
                    "type": "string"
                  },
                  {
                    "value": "full",
                    "type": "string"
                  },
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  },
                  {
                    "value": "xl",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "target",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "target",
                "reflectToAttr": false,
                "docs": "Sets or retrieves the window or frame at which to target content.",
                "docsTags": [],
                "default": "'_self'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "type",
                "type": "\"button\" | \"reset\" | \"submit\"",
                "complexType": {
                  "original": "'button' | 'submit' | 'reset'",
                  "resolved": "\"button\" | \"reset\" | \"submit\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "type",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'button'",
                "values": [
                  {
                    "value": "button",
                    "type": "string"
                  },
                  {
                    "value": "reset",
                    "type": "string"
                  },
                  {
                    "value": "submit",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "variant",
                "type": "\"default\" | \"ghost\" | \"light\" | \"link\" | \"outline\"",
                "complexType": {
                  "original": "'default' | 'outline' | 'ghost' | 'light' | 'link'",
                  "resolved": "\"default\" | \"ghost\" | \"light\" | \"link\" | \"outline\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "variant",
                "reflectToAttr": false,
                "docs": "Button variants.\nPossible values are `\"default\"`, `\"outline\"`, `\"ghost\"`. Defaults to `\"default\"`.\n`\"default\"` is a filled button.\n`\"outline\"` is an outlined button.\n`\"ghost\"` is a transparent button.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "ghost",
                    "type": "string"
                  },
                  {
                    "value": "light",
                    "type": "string"
                  },
                  {
                    "value": "link",
                    "type": "string"
                  },
                  {
                    "value": "outline",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `button` in `goat-button`. Use this method instead of the global\n`button.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `button` in `goat-button`. Use this method instead of the global\n`button.focus()`.",
                "docsTags": []
              },
              {
                "name": "triggerClick",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "triggerClick() => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "On click of button, a CustomEvent 'goat:click' will be triggered.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Button",
              "description": "An interactive button with a range of presentation options.",
              "category": "General",
              "tags": [
                "controls"
              ],
              "example": "<goat-button>\nButton CTA\n</goat-button>"
            }
          },
          {
            "filePath": "src/components/general/button-group/button-group.tsx",
            "fileName": "button-group.tsx",
            "tag": "goat-button-group",
            "readme": "# goat-button-group\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Button Group"
              },
              {
                "name": "description",
                "text": "Group a series of buttons together on a single line with the button group, and super-power."
              },
              {
                "name": "category",
                "text": "General"
              },
              {
                "name": "tags",
                "text": "controls"
              },
              {
                "name": "example",
                "text": "<goat-button-group>\n<goat-button block icon=\"home\"></goat-button>\n<goat-button block icon=\"alarm\"></goat-button>\n</goat-button-group>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-flow-designer",
              "goat-html-editor"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-flow-designer": [
                "goat-button-group"
              ],
              "goat-html-editor": [
                "goat-button-group"
              ]
            },
            "props": [],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Button Group",
              "description": "Group a series of buttons together on a single line with the button group, and super-power.",
              "category": "General",
              "tags": [
                "controls"
              ],
              "example": "<goat-button-group>\n<goat-button block icon=\"home\"></goat-button>\n<goat-button block icon=\"alarm\"></goat-button>\n</goat-button-group>"
            }
          },
          {
            "filePath": "src/components/general/current-time/current-time.tsx",
            "fileName": "current-time.tsx",
            "tag": "goat-current-time",
            "readme": "# goat-current-time\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Current Time"
              },
              {
                "name": "description",
                "text": "The current time component displays the current time in a 12-hour format."
              },
              {
                "name": "category",
                "text": "General"
              },
              {
                "name": "tags",
                "text": "controls"
              },
              {
                "name": "example",
                "text": "<goat-current-time></goat-current-time>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "timezone",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "timezone",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Current Time",
              "description": "The current time component displays the current time in a 12-hour format.",
              "category": "General",
              "tags": [
                "controls"
              ],
              "example": "<goat-current-time></goat-current-time>"
            }
          },
          {
            "filePath": "src/components/general/icon/icon.tsx",
            "fileName": "icon.tsx",
            "tag": "goat-icon",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Icon"
              },
              {
                "name": "description",
                "text": "Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information."
              },
              {
                "name": "category",
                "text": "General"
              },
              {
                "name": "example",
                "text": "<goat-icon name=\"home\" size=\"2rem\"></goat-icon>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-accordion-item",
              "goat-button",
              "goat-dropdown",
              "goat-flow-designer",
              "goat-notification",
              "goat-progress",
              "goat-select",
              "goat-tab",
              "goat-tag",
              "goat-textarea",
              "goat-toast",
              "goat-tree-node"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-accordion-item": [
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon"
              ],
              "goat-dropdown": [
                "goat-icon"
              ],
              "goat-flow-designer": [
                "goat-icon"
              ],
              "goat-notification": [
                "goat-icon"
              ],
              "goat-progress": [
                "goat-icon"
              ],
              "goat-select": [
                "goat-icon"
              ],
              "goat-tab": [
                "goat-icon"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-textarea": [
                "goat-icon"
              ],
              "goat-toast": [
                "goat-icon"
              ],
              "goat-tree-node": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The Icon size.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Icon",
              "description": "Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.",
              "category": "General",
              "example": "<goat-icon name=\"home\" size=\"2rem\"></goat-icon>"
            }
          },
          {
            "filePath": "src/components/general/text/text.tsx",
            "fileName": "text.tsx",
            "tag": "goat-text",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Text"
              },
              {
                "name": "description",
                "text": "Typography are used for rendering headlines, paragraphs and captions."
              },
              {
                "name": "category",
                "text": "General"
              },
              {
                "name": "example",
                "text": "<goat-text type=\"heading\" level=\"1\">Heading</goat-typography>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-breadcrumb-item",
              "goat-cb-compound-expression",
              "goat-condition-builder",
              "goat-modal",
              "goat-select",
              "goat-table"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-breadcrumb-item": [
                "goat-text"
              ],
              "goat-cb-compound-expression": [
                "goat-text"
              ],
              "goat-condition-builder": [
                "goat-text"
              ],
              "goat-modal": [
                "goat-text"
              ],
              "goat-select": [
                "goat-text"
              ],
              "goat-table": [
                "goat-text"
              ]
            },
            "props": [
              {
                "name": "color",
                "type": "\"error\" | \"helper\" | \"inverse\" | \"on-color\" | \"primary\" | \"secondary\" | \"tertiary\"",
                "complexType": {
                  "original": "'primary' | 'secondary' | 'tertiary' | 'helper' | 'error' | 'on-color' | 'inverse'",
                  "resolved": "\"error\" | \"helper\" | \"inverse\" | \"on-color\" | \"primary\" | \"secondary\" | \"tertiary\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "color",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'primary'",
                "values": [
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "helper",
                    "type": "string"
                  },
                  {
                    "value": "inverse",
                    "type": "string"
                  },
                  {
                    "value": "on-color",
                    "type": "string"
                  },
                  {
                    "value": "primary",
                    "type": "string"
                  },
                  {
                    "value": "secondary",
                    "type": "string"
                  },
                  {
                    "value": "tertiary",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "expressive",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "expressive",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "headingLevel",
                "type": "1 | 2 | 3 | 4 | 5 | 6",
                "complexType": {
                  "original": "1 | 2 | 3 | 4 | 5 | 6",
                  "resolved": "1 | 2 | 3 | 4 | 5 | 6",
                  "references": {}
                },
                "mutable": false,
                "attr": "heading-level",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "value": "1",
                    "type": "number"
                  },
                  {
                    "value": "2",
                    "type": "number"
                  },
                  {
                    "value": "3",
                    "type": "number"
                  },
                  {
                    "value": "4",
                    "type": "number"
                  },
                  {
                    "value": "5",
                    "type": "number"
                  },
                  {
                    "value": "6",
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "headingSize",
                "type": "1 | 2 | 3 | 4 | 5 | 6 | 7",
                "complexType": {
                  "original": "1 | 2 | 3 | 4 | 5 | 6 | 7",
                  "resolved": "1 | 2 | 3 | 4 | 5 | 6 | 7",
                  "references": {}
                },
                "mutable": false,
                "attr": "heading-size",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "7",
                "values": [
                  {
                    "value": "1",
                    "type": "number"
                  },
                  {
                    "value": "2",
                    "type": "number"
                  },
                  {
                    "value": "3",
                    "type": "number"
                  },
                  {
                    "value": "4",
                    "type": "number"
                  },
                  {
                    "value": "5",
                    "type": "number"
                  },
                  {
                    "value": "6",
                    "type": "number"
                  },
                  {
                    "value": "7",
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "type",
                "type": "\"body\" | \"body-compact\" | \"code\" | \"heading\" | \"heading-compact\" | \"helper-text\" | \"label\" | \"legal\"",
                "complexType": {
                  "original": "'code' | 'helper-text' | 'label' | 'legal' | 'heading' | 'body' | 'body-compact' | 'heading-compact'",
                  "resolved": "\"body\" | \"body-compact\" | \"code\" | \"heading\" | \"heading-compact\" | \"helper-text\" | \"label\" | \"legal\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "type",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'body'",
                "values": [
                  {
                    "value": "body",
                    "type": "string"
                  },
                  {
                    "value": "body-compact",
                    "type": "string"
                  },
                  {
                    "value": "code",
                    "type": "string"
                  },
                  {
                    "value": "heading",
                    "type": "string"
                  },
                  {
                    "value": "heading-compact",
                    "type": "string"
                  },
                  {
                    "value": "helper-text",
                    "type": "string"
                  },
                  {
                    "value": "label",
                    "type": "string"
                  },
                  {
                    "value": "legal",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Text",
              "description": "Typography are used for rendering headlines, paragraphs and captions.",
              "category": "General",
              "example": "<goat-text type=\"heading\" level=\"1\">Heading</goat-typography>"
            }
          }
        ]
      },
      {
        "name": "Layout",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/layout/divider/divider.tsx",
            "fileName": "divider.tsx",
            "tag": "goat-divider",
            "readme": "# goat-heading\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Divider"
              },
              {
                "name": "description",
                "text": "A divider can be used to segment content vertically or horizontally."
              },
              {
                "name": "category",
                "text": "Layout"
              },
              {
                "name": "example",
                "text": "<goat-divider style=\"width: 12rem;\">or</goat-divider>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-header-brand"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-header-brand": [
                "goat-divider"
              ]
            },
            "props": [
              {
                "name": "vertical",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "vertical",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Divider",
              "description": "A divider can be used to segment content vertically or horizontally.",
              "category": "Layout",
              "example": "<goat-divider style=\"width: 12rem;\">or</goat-divider>"
            }
          }
        ]
      },
      {
        "name": "Navigation",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/navigation/breadcrumb/breadcrumb.tsx",
            "fileName": "breadcrumb.tsx",
            "tag": "goat-breadcrumb",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Breadcrumb"
              },
              {
                "name": "description",
                "text": "Typography are used for rendering headlines, paragraphs and captions."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "tags",
                "text": "navigation"
              },
              {
                "name": "example",
                "text": "<goat-breadcrumb><goat-breadcrumb-item href=\"#\">Home</goat-breadcrumb-item><goat-breadcrumb-item href=\"#\" active>Page</goat-breadcrumb-item></goat-breadcrumb>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Breadcrumb",
              "description": "Typography are used for rendering headlines, paragraphs and captions.",
              "category": "Navigation",
              "tags": [
                "navigation"
              ],
              "example": "<goat-breadcrumb><goat-breadcrumb-item href=\"#\">Home</goat-breadcrumb-item><goat-breadcrumb-item href=\"#\" active>Page</goat-breadcrumb-item></goat-breadcrumb>"
            }
          },
          {
            "filePath": "src/components/navigation/menu/dropdown/dropdown.tsx",
            "fileName": "dropdown.tsx",
            "tag": "goat-dropdown",
            "readme": "# goat-dropdown\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Dropdown"
              },
              {
                "name": "description",
                "text": "Enables native inputs to be used within a Form field."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "img",
                "text": "/assets/img/dropdown.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/dropdown-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-menu",
              "goat-menu-item",
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-dropdown": [
                "goat-menu",
                "goat-menu-item",
                "goat-icon"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": false,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "isOpen",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "is-open",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "items",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "null",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "positions",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "positions",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'bottom-right,top-right,bottom-left,top-left'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "(elm?: HTMLElement) => Promise<void>",
                  "parameters": [
                    {
                      "tags": [],
                      "text": ""
                    }
                  ],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    },
                    "HTMLElement": {
                      "location": "global",
                      "id": "global::HTMLElement"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus(elm?: HTMLElement) => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              }
            ],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "click",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:menu-item-click",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:click",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "keydown",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "scroll",
                "target": "window",
                "capture": false,
                "passive": true
              }
            ],
            "metadata": {
              "name": "Dropdown",
              "description": "Enables native inputs to be used within a Form field.",
              "category": "Navigation",
              "img": "/assets/img/dropdown.png",
              "imgDark": "/assets/img/dropdown-dark.png"
            }
          },
          {
            "filePath": "src/components/navigation/header/header/header.tsx",
            "fileName": "header.tsx",
            "tag": "goat-header",
            "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Header"
              },
              {
                "name": "description",
                "text": "Headers are compositions that extend standard navbar functionalities."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "img",
                "text": "/assets/img/header.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/header-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "float",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "float",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Header",
              "description": "Headers are compositions that extend standard navbar functionalities.",
              "category": "Navigation",
              "img": "/assets/img/header.png",
              "imgDark": "/assets/img/header-dark.png"
            }
          },
          {
            "filePath": "src/components/navigation/link/link.tsx",
            "fileName": "link.tsx",
            "tag": "goat-link",
            "readme": "# goat-button\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Link"
              },
              {
                "name": "description",
                "text": "Links allow users to click their way from page to page."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "example",
                "text": "<goat-link href=\"#\">Link</goat-link>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-breadcrumb-item",
              "goat-header-brand"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-breadcrumb-item": [
                "goat-link"
              ],
              "goat-header-brand": [
                "goat-link"
              ]
            },
            "props": [
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "Hyperlink to navigate to on click.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "target",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "target",
                "reflectToAttr": false,
                "docs": "Sets or retrieves the window or frame at which to target content.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "triggerClick",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "triggerClick() => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              }
            ],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Link",
              "description": "Links allow users to click their way from page to page.",
              "category": "Navigation",
              "example": "<goat-link href=\"#\">Link</goat-link>"
            }
          },
          {
            "filePath": "src/components/navigation/menu/menu/menu.tsx",
            "fileName": "menu.tsx",
            "tag": "goat-menu",
            "readme": "# goat-menu\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Menu"
              },
              {
                "name": "description",
                "text": "Menus display a list of choices on temporary surfaces."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "img",
                "text": "/assets/img/menu.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/menu-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-dropdown",
              "goat-select"
            ],
            "dependencies": [
              "goat-empty-state"
            ],
            "dependencyGraph": {
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-dropdown": [
                "goat-menu"
              ],
              "goat-select": [
                "goat-menu"
              ]
            },
            "props": [
              {
                "name": "empty",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "emptyState",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty-state",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "`{\r\n    \"headline\": \"No items\",\r\n    \"description\": \"There are no items to display\"\r\n  }`",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The menu item size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on first menu item. Use this method instead of the global\r\n`element.focus()`.",
                "docsTags": []
              }
            ],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "keydown",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Menu",
              "description": "Menus display a list of choices on temporary surfaces.",
              "category": "Navigation",
              "img": "/assets/img/menu.png",
              "imgDark": "/assets/img/menu-dark.png"
            }
          },
          {
            "filePath": "src/components/navigation/tabs/tabs/tabs.tsx",
            "fileName": "tabs.tsx",
            "tag": "goat-tabs",
            "readme": "# goat-tabs\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Tabs"
              },
              {
                "name": "description",
                "text": "An interactive button with a range of presentation options."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "tags",
                "text": "navigation"
              },
              {
                "name": "example",
                "text": "<goat-tabs>\r\n<goat-tabs-list>\r\n<goat-tab selected >Tab 1</goat-tab>\r\n<goat-tab>Tab 2</goat-tab>\r\n</goat-tabs-list>\r\n</goat-tabs>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:tab-click",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Tabs",
              "description": "An interactive button with a range of presentation options.",
              "category": "Navigation",
              "tags": [
                "navigation"
              ],
              "example": "<goat-tabs>\r\n<goat-tabs-list>\r\n<goat-tab selected >Tab 1</goat-tab>\r\n<goat-tab>Tab 2</goat-tab>\r\n</goat-tabs-list>\r\n</goat-tabs>"
            }
          },
          {
            "filePath": "src/components/navigation/tree-view/tree-view/tree-view.tsx",
            "fileName": "tree-view.tsx",
            "tag": "goat-tree-view",
            "readme": "# goat-menu\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "TreeView"
              },
              {
                "name": "description",
                "text": "A tree view is a hierarchical structure that provides nested levels of navigation."
              },
              {
                "name": "category",
                "text": "Navigation"
              },
              {
                "name": "img",
                "text": "/assets/img/tree-view.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/tree-view-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-empty-state"
            ],
            "dependencyGraph": {
              "goat-tree-view": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "empty",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "emptyState",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty-state",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "`{\n    \"headline\": \"No items\",\n    \"description\": \"There are no items to display\"\n  }`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selectedNode",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "selected-node",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getSelectedNode",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getSelectedNode() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on first menu item. Use this method instead of the global\n`element.focus()`.",
                "docsTags": []
              },
              {
                "name": "subscribeToSelect",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "(cb: any) => Promise<void>",
                  "parameters": [
                    {
                      "tags": [],
                      "text": ""
                    }
                  ],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "subscribeToSelect(cb: any) => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              }
            ],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:tree-node-click",
                "capture": false,
                "passive": false
              },
              {
                "event": "keydown",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "TreeView",
              "description": "A tree view is a hierarchical structure that provides nested levels of navigation.",
              "category": "Navigation",
              "img": "/assets/img/tree-view.png",
              "imgDark": "/assets/img/tree-view-dark.png"
            }
          }
        ]
      },
      {
        "name": "Form Inputs",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/data-entry/checkbox/checkbox.tsx",
            "fileName": "checkbox.tsx",
            "tag": "goat-checkbox",
            "readme": "# goat-checkbox\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Checkbox"
              },
              {
                "name": "description",
                "text": "Captures boolean input with an optional indeterminate mode."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-checkbox value='true'>Want ice cream?</goat-checkbox>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-table"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-table": [
                "goat-checkbox"
              ]
            },
            "props": [
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "intermediate",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "intermediate",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "The checkbox label.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "rounded",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "rounded",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Checkbox",
              "description": "Captures boolean input with an optional indeterminate mode.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-checkbox value='true'>Want ice cream?</goat-checkbox>"
            }
          },
          {
            "filePath": "src/components/data-entry/code-editor/code-editor.tsx",
            "fileName": "code-editor.tsx",
            "tag": "goat-code-editor",
            "readme": "# goat-code-editor\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Code Editor"
              },
              {
                "name": "description",
                "text": "A browser based code editor."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "img",
                "text": "/assets/img/code-editor.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/code-editor-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-spinner"
            ],
            "dependencyGraph": {
              "goat-code-editor": [
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.",
                "docsTags": [],
                "default": "250",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "language",
                "type": "\"html\" | \"javascript\" | \"json\"",
                "complexType": {
                  "original": "'javascript' | 'json' | 'html'",
                  "resolved": "\"html\" | \"javascript\" | \"json\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "language",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'javascript'",
                "values": [
                  {
                    "value": "html",
                    "type": "string"
                  },
                  {
                    "value": "javascript",
                    "type": "string"
                  },
                  {
                    "value": "json",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "lineNumbers",
                "type": "\"off\" | \"on\"",
                "complexType": {
                  "original": "'off' | 'on'",
                  "resolved": "\"off\" | \"on\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "line-numbers",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'on'",
                "values": [
                  {
                    "value": "off",
                    "type": "string"
                  },
                  {
                    "value": "on",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Code Editor",
              "description": "A browser based code editor.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "img": "/assets/img/code-editor.png",
              "imgDark": "/assets/img/code-editor-dark.png"
            }
          },
          {
            "filePath": "src/components/data-entry/date/date-picker/date-picker.tsx",
            "fileName": "date-picker.tsx",
            "tag": "goat-date-picker",
            "readme": "# goat-date-picker\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Date Picker"
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "description",
                "text": "Captures date input."
              },
              {
                "name": "example",
                "text": "<goat-date-picker value='true'></goat-date-picker>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-date-picker": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Date Picker",
              "category": "Form Inputs",
              "description": "Captures date input.",
              "example": "<goat-date-picker value='true'></goat-date-picker>"
            }
          },
          {
            "filePath": "src/components/data-entry/form-control/form-control.tsx",
            "fileName": "form-control.tsx",
            "tag": "goat-form-control",
            "readme": "# goat-field-group\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Form Control"
              },
              {
                "name": "description",
                "text": "The Form Control component adds a label and caption for its child control."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "form"
              },
              {
                "name": "example",
                "text": "<goat-form-control label='Full Name' required>\r\n<goat-input type='text'></goat-input>\r\n</goat-form-control>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-table"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-table": [
                "goat-form-control"
              ]
            },
            "props": [
              {
                "name": "caption",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "caption",
                "reflectToAttr": false,
                "docs": "The caption for the form control.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "error",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "error",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "The label for the form control.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": false,
                "docs": "Whether the form control is required.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "success",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "success",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "warning",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "warning",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Form Control",
              "description": "The Form Control component adds a label and caption for its child control.",
              "category": "Form Inputs",
              "tags": [
                "form"
              ],
              "example": "<goat-form-control label='Full Name' required>\r\n<goat-input type='text'></goat-input>\r\n</goat-form-control>"
            }
          },
          {
            "filePath": "src/components/data-entry/input/input/input.tsx",
            "fileName": "input.tsx",
            "tag": "goat-input",
            "readme": "# goat-input\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Input"
              },
              {
                "name": "description",
                "text": "Enables native inputs to be used within a Form field."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-input placeholder=\"Enter your name\"></goat-input>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-condition-builder"
            ],
            "dependencies": [
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-input": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-condition-builder": [
                "goat-input"
              ]
            },
            "props": [
              {
                "name": "autocomplete",
                "type": "\"off\" | \"on\"",
                "complexType": {
                  "original": "'on' | 'off'",
                  "resolved": "\"off\" | \"on\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "autocomplete",
                "reflectToAttr": false,
                "docs": "Indicates whether the value of the control can be automatically completed by the browser.",
                "docsTags": [],
                "default": "'off'",
                "values": [
                  {
                    "value": "off",
                    "type": "string"
                  },
                  {
                    "value": "on",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "clearable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "clearable",
                "reflectToAttr": false,
                "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "helperText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "helper-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "hideActions",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "hide-actions",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "invalid",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "invalid",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "invalidText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "invalid-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'warning' | 'default'",
                  "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": true,
                "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "type",
                "type": "\"email\" | \"password\" | \"tel\" | \"text\"",
                "complexType": {
                  "original": "'text' | 'password' | 'email' | 'tel'",
                  "resolved": "\"email\" | \"password\" | \"tel\" | \"text\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "type",
                "reflectToAttr": false,
                "docs": "The type of control to display.\nPossible values are: `\"text\"`, `\"password\"`, `\"email\"`, `\"tel\"`. Defaults to `\"text\"`.",
                "docsTags": [],
                "default": "'text'",
                "values": [
                  {
                    "value": "email",
                    "type": "string"
                  },
                  {
                    "value": "password",
                    "type": "string"
                  },
                  {
                    "value": "tel",
                    "type": "string"
                  },
                  {
                    "value": "text",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              },
              {
                "name": "warn",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "warn",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "warnText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "warn-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Input",
              "description": "Enables native inputs to be used within a Form field.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-input placeholder=\"Enter your name\"></goat-input>"
            }
          },
          {
            "filePath": "src/components/data-entry/input/number/number.tsx",
            "fileName": "number.tsx",
            "tag": "goat-number",
            "readme": "# goat-input\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Number"
              },
              {
                "name": "description",
                "text": "Enables native inputs to be used within a Form field."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-number value=\"100\"></goat-input>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-slider"
            ],
            "dependencies": [
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-number": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-slider": [
                "goat-number"
              ]
            },
            "props": [
              {
                "name": "autocomplete",
                "type": "\"off\" | \"on\"",
                "complexType": {
                  "original": "'on' | 'off'",
                  "resolved": "\"off\" | \"on\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "autocomplete",
                "reflectToAttr": false,
                "docs": "Indicates whether the value of the control can be automatically completed by the browser.",
                "docsTags": [],
                "default": "'off'",
                "values": [
                  {
                    "value": "off",
                    "type": "string"
                  },
                  {
                    "value": "on",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "clearable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "clearable",
                "reflectToAttr": false,
                "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "hideActions",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "hide-actions",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The input field size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'warning' | 'default'",
                  "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": true,
                "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number",
                "complexType": {
                  "original": "number | null",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "null",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Number",
              "description": "Enables native inputs to be used within a Form field.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-number value=\"100\"></goat-input>"
            }
          },
          {
            "filePath": "src/components/data-entry/select/select.tsx",
            "fileName": "select.tsx",
            "tag": "goat-select",
            "readme": "# goat-select\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Select"
              },
              {
                "name": "description",
                "text": "Allows the user to select one or more options using a dropdown."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "img",
                "text": "/assets/img/select.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/select-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-calendar",
              "goat-cb-expression",
              "goat-condition-builder",
              "goat-table"
            ],
            "dependencies": [
              "goat-icon",
              "goat-tag",
              "goat-button",
              "goat-spinner",
              "goat-menu",
              "goat-text",
              "goat-menu-item"
            ],
            "dependencyGraph": {
              "goat-select": [
                "goat-icon",
                "goat-tag",
                "goat-button",
                "goat-spinner",
                "goat-menu",
                "goat-text",
                "goat-menu-item"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-calendar": [
                "goat-select"
              ],
              "goat-cb-expression": [
                "goat-select"
              ],
              "goat-condition-builder": [
                "goat-select"
              ],
              "goat-table": [
                "goat-select"
              ]
            },
            "props": [
              {
                "name": "clearable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "clearable",
                "reflectToAttr": false,
                "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "hideDropdownIcon",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "hide-dropdown-icon",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "isOpen",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "is-open",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "items",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": false,
                "attr": "items",
                "reflectToAttr": false,
                "docs": "[{\n  label: 'Shivaji Varma',\n  value: 'shivaji-varma',\n  icon: 'person'\n}]",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "multiple",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "multiple",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "positions",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "positions",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'bottom-right,top-right,bottom-left,top-left'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "search",
                "type": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
                "complexType": {
                  "original": "'none' | 'initial' | 'contains' | 'managed'",
                  "resolved": "\"contains\" | \"initial\" | \"managed\" | \"none\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "search",
                "reflectToAttr": false,
                "docs": "Search type\nPossible values are `\"none\"`, `\"initial\"`, `\"contains\"`, `\"managed\"`. Defaults to `\"none\"`.",
                "docsTags": [],
                "default": "'none'",
                "values": [
                  {
                    "value": "contains",
                    "type": "string"
                  },
                  {
                    "value": "initial",
                    "type": "string"
                  },
                  {
                    "value": "managed",
                    "type": "string"
                  },
                  {
                    "value": "none",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The select input size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'warning' | 'default'",
                  "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": true,
                "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:search",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              },
              {
                "event": "goat:search-enter",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "click",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:menu-item-click",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:tag-dismiss",
                "capture": false,
                "passive": false
              },
              {
                "event": "scroll",
                "target": "window",
                "capture": false,
                "passive": true
              }
            ],
            "metadata": {
              "name": "Select",
              "description": "Allows the user to select one or more options using a dropdown.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "img": "/assets/img/select.png",
              "imgDark": "/assets/img/select-dark.png"
            }
          },
          {
            "filePath": "src/components/data-entry/slider/slider.tsx",
            "fileName": "slider.tsx",
            "tag": "goat-slider",
            "readme": "# goat-select\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Slider"
              },
              {
                "name": "description",
                "text": "Allows the user to select one or more options using a dropdown."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "img",
                "text": "/assets/img/slider.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/slider-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-number"
            ],
            "dependencyGraph": {
              "goat-slider": [
                "goat-number"
              ],
              "goat-number": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "max",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "max",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "100",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "min",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "min",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "0",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "0",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "click",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Slider",
              "description": "Allows the user to select one or more options using a dropdown.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "img": "/assets/img/slider.png",
              "imgDark": "/assets/img/slider-dark.png"
            }
          },
          {
            "filePath": "src/components/data-entry/textarea/textarea.tsx",
            "fileName": "textarea.tsx",
            "tag": "goat-textarea",
            "readme": "# goat-textarea\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Textarea"
              },
              {
                "name": "description",
                "text": "Enables native inputs to be used within a Form field."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-textarea placeholder=\"Enter some description over here\"></goat-textarea>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-textarea": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "clearable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "clearable",
                "reflectToAttr": false,
                "docs": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.",
                "docsTags": [],
                "default": "300",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "helperText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "helper-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "invalid",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "invalid",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "invalidText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "invalid-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": false,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"default\" | \"error\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'warning' | 'default'",
                  "resolved": "\"default\" | \"error\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": true,
                "docs": "The input state.\nPossible values are: `\"success\"`, `\"error\"`, `\"warning\"`, 'default'. Defaults to `\"default\"`.",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "warn",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "warn",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "warnText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "warn-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `textarea` in `goat-textarea`. Use this method instead of the global\n`textarea.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `textarea` in `goat-textarea`. Use this method instead of the global\n`textarea.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:action-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the action button is clicked.",
                "docsTags": []
              },
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed..",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Textarea",
              "description": "Enables native inputs to be used within a Form field.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-textarea placeholder=\"Enter some description over here\"></goat-textarea>"
            }
          },
          {
            "filePath": "src/components/data-entry/date/time-picker/time-picker.tsx",
            "fileName": "time-picker.tsx",
            "tag": "goat-time-picker",
            "readme": "# goat-time-picker\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Time Picker"
              },
              {
                "name": "description",
                "text": "Captures time input."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-time-picker value='true'></goat-time-picker>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-time-picker": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "inline",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "inline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "placeholder",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "placeholder",
                "reflectToAttr": false,
                "docs": "The input field placeholder.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "If true, the user read the value cannot modify it. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The input field size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              },
              {
                "event": "goat:input",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when a keyboard input occurred.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Time Picker",
              "description": "Captures time input.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-time-picker value='true'></goat-time-picker>"
            }
          },
          {
            "filePath": "src/components/data-entry/toggle/toggle.tsx",
            "fileName": "toggle.tsx",
            "tag": "goat-toggle",
            "readme": "# goat-checkbox\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Toggle"
              },
              {
                "name": "description",
                "text": "Captures boolean input with an optional indeterminate mode."
              },
              {
                "name": "category",
                "text": "Form Inputs"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "example",
                "text": "<goat-toggle value='true'>Want ice cream?</goat-toggle>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "configAria",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "config-aria",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "{}",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "The checkbox label.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "rounded",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "rounded",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\"",
                "complexType": {
                  "original": "'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "The button size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:blur",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input loses focus.",
                "docsTags": []
              },
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.",
                "docsTags": []
              },
              {
                "event": "goat:focus",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the input has focus.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Toggle",
              "description": "Captures boolean input with an optional indeterminate mode.",
              "category": "Form Inputs",
              "tags": [
                "input",
                " form"
              ],
              "example": "<goat-toggle value='true'>Want ice cream?</goat-toggle>"
            }
          }
        ]
      },
      {
        "name": "Data Display",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/data-display/accordion/accordion/accordion.tsx",
            "fileName": "accordion.tsx",
            "tag": "goat-accordion",
            "readme": "# goat-avatar\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Accordion"
              },
              {
                "name": "description",
                "text": "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tags",
                "text": "display"
              },
              {
                "name": "img",
                "text": "/assets/img/accordion.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/accordion-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "align",
                "type": "\"end\" | \"start\"",
                "complexType": {
                  "original": "'start' | 'end'",
                  "resolved": "\"end\" | \"start\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "align",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'end'",
                "values": [
                  {
                    "value": "end",
                    "type": "string"
                  },
                  {
                    "value": "start",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "multiple",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "multiple",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg'",
                  "resolved": "\"lg\" | \"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The According size.\r\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:accordion-item-click",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Accordion",
              "description": "An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.",
              "category": "Data Display",
              "tags": [
                "display"
              ],
              "img": "/assets/img/accordion.png",
              "imgDark": "/assets/img/accordion-dark.png"
            }
          },
          {
            "filePath": "src/components/data-display/avatar/avatar.tsx",
            "fileName": "avatar.tsx",
            "tag": "goat-avatar",
            "readme": "# goat-avatar\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Avatar"
              },
              {
                "name": "description",
                "text": "Avatars in their simplest form display content within a circular container."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tags",
                "text": "display"
              },
              {
                "name": "example",
                "text": "<goat-avatar size=\"5rem\" name=\"Shivaji Varma\" src=\"/assets/img/avatar.png\"></goat-avatar>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "Avatar size.",
                "docsTags": [],
                "default": "'2rem'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "src",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "src",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Avatar",
              "description": "Avatars in their simplest form display content within a circular container.",
              "category": "Data Display",
              "tags": [
                "display"
              ],
              "example": "<goat-avatar size=\"5rem\" name=\"Shivaji Varma\" src=\"/assets/img/avatar.png\"></goat-avatar>"
            }
          },
          {
            "filePath": "src/components/data-display/badge/badge.tsx",
            "fileName": "badge.tsx",
            "tag": "goat-badge",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Badge"
              },
              {
                "name": "description",
                "text": "Renders a specified badge."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tag",
                "text": "content"
              },
              {
                "name": "example",
                "text": "<goat-badge content=\"5\" class='color-error'> <goat-icon name=\"notification\" size=\"lg\"></goat-icon></goat-badge>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "content",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "content",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Badge",
              "description": "Renders a specified badge.",
              "category": "Data Display",
              "tag": "content",
              "example": "<goat-badge content=\"5\" class='color-error'> <goat-icon name=\"notification\" size=\"lg\"></goat-icon></goat-badge>"
            }
          },
          {
            "filePath": "src/components/calendar/calendar/calendar.tsx",
            "fileName": "calendar.tsx",
            "tag": "goat-calendar",
            "readme": "# goat-avatar\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Calendar"
              },
              {
                "name": "description",
                "text": "The calendar component is used to display information in a daily, weekly, monthly, or category view."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tags",
                "text": "calendar"
              },
              {
                "name": "img",
                "text": "/assets/img/calendar.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/calendar-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-button",
              "goat-select",
              "goat-calendar-column-view",
              "goat-calendar-month-view"
            ],
            "dependencyGraph": {
              "goat-calendar": [
                "goat-button",
                "goat-select",
                "goat-calendar-column-view",
                "goat-calendar-month-view"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-select": [
                "goat-icon",
                "goat-tag",
                "goat-button",
                "goat-spinner",
                "goat-menu",
                "goat-text",
                "goat-menu-item"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-calendar-column-view": [
                "goat-calendar-column-view-background"
              ]
            },
            "props": [
              {
                "name": "availableViews",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": false,
                "attr": "available-views",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[\r\n    { label: 'Day', value: 'day', type: 'column', days: 1 },\r\n    {\r\n      label: 'Week',\r\n      value: 'week',\r\n      type: 'column',\r\n      days: 7,\r\n    },\r\n    {\r\n      label: 'Month',\r\n      value: 'month',\r\n      type: 'month',\r\n    },\r\n  ]",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "contextDate",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "context-date",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "eventClickable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "event-clickable",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "events",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "Show loader.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "timezone",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": false,
                "attr": "timezone",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "view",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "view",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'week'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:calendar-event-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:column-view-date-click",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:column-view-event-click",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:month-view-event-click",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Calendar",
              "description": "The calendar component is used to display information in a daily, weekly, monthly, or category view.",
              "category": "Data Display",
              "tags": [
                "calendar"
              ],
              "img": "/assets/img/calendar.png",
              "imgDark": "/assets/img/calendar-dark.png"
            }
          },
          {
            "filePath": "src/components/data-display/code-highlighter/code-highlighter.tsx",
            "fileName": "code-highlighter.tsx",
            "tag": "goat-code-highlighter",
            "readme": "# goat-code-editor\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Code Highlighter"
              },
              {
                "name": "description",
                "text": "A browser based code highlighter."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tag",
                "text": "display, code"
              },
              {
                "name": "img",
                "text": "/assets/img/code-highlighter.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/code-highlighter-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-button",
              "goat-spinner"
            ],
            "dependencyGraph": {
              "goat-code-highlighter": [
                "goat-button",
                "goat-spinner"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "format",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "format",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "language",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "language",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "Language.javascript",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "lineNumbers",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "line-numbers",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Code Highlighter",
              "description": "A browser based code highlighter.",
              "category": "Data Display",
              "tag": "display, code",
              "img": "/assets/img/code-highlighter.png",
              "imgDark": "/assets/img/code-highlighter-dark.png"
            }
          },
          {
            "filePath": "src/components/condition-builder/condition-builder/condition-builder.tsx",
            "fileName": "condition-builder.tsx",
            "tag": "goat-condition-builder",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Condition Builder"
              },
              {
                "name": "description",
                "text": "A condition builder is a component that allows users to build a condition using a set of rules."
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tag",
                "text": "content"
              },
              {
                "name": "img",
                "text": "/assets/img/condition-builder.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-select",
              "goat-input",
              "goat-text",
              "goat-cb-divider",
              "goat-tag"
            ],
            "dependencyGraph": {
              "goat-condition-builder": [
                "goat-select",
                "goat-input",
                "goat-text",
                "goat-cb-divider",
                "goat-tag"
              ],
              "goat-select": [
                "goat-icon",
                "goat-tag",
                "goat-button",
                "goat-spinner",
                "goat-menu",
                "goat-text",
                "goat-menu-item"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-input": [
                "goat-button"
              ]
            },
            "props": [
              {
                "name": "content",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "content",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Condition Builder",
              "description": "A condition builder is a component that allows users to build a condition using a set of rules.",
              "category": "Data Display",
              "tag": "content",
              "img": "/assets/img/condition-builder.png"
            }
          },
          {
            "filePath": "src/components/data-display/empty-state/empty-state.tsx",
            "fileName": "empty-state.tsx",
            "tag": "goat-empty-state",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Empty State"
              },
              {
                "name": "description",
                "text": "A message that displays when there is no information to display."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "example",
                "text": "<goat-empty-state class=\"content-center\" headline=\"Empty list\" description=\"Nothing to display\">\r\n</goat-empty-state>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-menu",
              "goat-sidenav-menu",
              "goat-table",
              "goat-tree-view"
            ],
            "dependencies": [
              "goat-svg",
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-sidenav-menu": [
                "goat-empty-state"
              ],
              "goat-table": [
                "goat-empty-state"
              ],
              "goat-tree-view": [
                "goat-empty-state"
              ]
            },
            "props": [
              {
                "name": "action",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "action",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "actionDisabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "action-disabled",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "actionUrl",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "action-url",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "actionVariant",
                "type": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
                "complexType": {
                  "original": "'default' | 'outline' | 'ghost' | 'link'",
                  "resolved": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "action-variant",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "ghost",
                    "type": "string"
                  },
                  {
                    "value": "link",
                    "type": "string"
                  },
                  {
                    "value": "outline",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "description",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "description",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "headline",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "headline",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "illustration",
                "type": "\"no-document\"",
                "complexType": {
                  "original": "'no-document'",
                  "resolved": "\"no-document\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "illustration",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'no-document'",
                "values": [
                  {
                    "value": "no-document",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "resize",
                "target": "window",
                "capture": false,
                "passive": true
              }
            ],
            "metadata": {
              "name": "Empty State",
              "description": "A message that displays when there is no information to display.",
              "category": "Data Display",
              "example": "<goat-empty-state class=\"content-center\" headline=\"Empty list\" description=\"Nothing to display\">\r\n</goat-empty-state>"
            }
          },
          {
            "filePath": "src/components/data-display/svg/svg.tsx",
            "fileName": "svg.tsx",
            "tag": "goat-svg",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "SVG"
              },
              {
                "name": "description",
                "text": "Render SVG content from an external source."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "example",
                "text": "<goat-svg src=\"https://icons.getbootstrap.com/assets/icons/bug.svg\" size=\"2rem\"></goat-svg>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-empty-state",
              "goat-header-brand"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-empty-state": [
                "goat-svg"
              ],
              "goat-header-brand": [
                "goat-svg"
              ]
            },
            "props": [
              {
                "name": "size",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "The Icon size.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "src",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "src",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "SVG",
              "description": "Render SVG content from an external source.",
              "category": "Data Display",
              "example": "<goat-svg src=\"https://icons.getbootstrap.com/assets/icons/bug.svg\" size=\"2rem\"></goat-svg>"
            }
          },
          {
            "filePath": "src/components/data-display/table/table.tsx",
            "fileName": "table.tsx",
            "tag": "goat-table",
            "readme": "# goat-table\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Table"
              },
              {
                "name": "description",
                "text": "A configurable component for displaying tabular data."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "img",
                "text": "/assets/img/table.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/table-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-checkbox",
              "goat-button",
              "goat-form-control",
              "goat-select",
              "goat-text",
              "goat-empty-state"
            ],
            "dependencyGraph": {
              "goat-table": [
                "goat-checkbox",
                "goat-button",
                "goat-form-control",
                "goat-select",
                "goat-text",
                "goat-empty-state"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-select": [
                "goat-icon",
                "goat-tag",
                "goat-button",
                "goat-spinner",
                "goat-menu",
                "goat-text",
                "goat-menu-item"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ]
            },
            "props": [
              {
                "name": "columns",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "Grid columns configuration.\r\n[\r\n{\r\n  \"name\":\"name\",\r\n  \"label\":\"Name\",\r\n  \"width\":300,\r\n  \"fixed\":true,\r\n  \"template\": function(row, column) { return row[column.name];}\r\n },\r\n{\r\n  \"name\":\"age\",\r\n  \"label\":\"Age\"\r\n}\r\n]",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "data",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "Grid data to display on table\r\n[{\r\n 'id': '5e7118ddce4b3d577956457f',\r\n 'age': 21,\r\n 'name': 'John',\r\n 'company': 'India',\r\n 'email': 'john@example.com',\r\n 'phone': '+1 (839) 560-3581',\r\n 'address': '326 Irving Street, Grimsley, Texas, 4048'\r\n }]",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "emptyState",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty-state",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "{\r\n    title: 'No items',\r\n    description: 'There are no items to display',\r\n  }",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "keyField",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "key-field",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'id'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "managed",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "managed",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "page",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "page",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "1",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "pageSize",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "page-size",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "10",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "paginate",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "paginate",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selectedRowKeys",
                "type": "string[]",
                "complexType": {
                  "original": "string[]",
                  "resolved": "string[]",
                  "references": {}
                },
                "mutable": true,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "string[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selectionType",
                "type": "\"checkbox\"",
                "complexType": {
                  "original": "'checkbox' | undefined",
                  "resolved": "\"checkbox\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "selection-type",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "value": "checkbox",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "sortBy",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "sort-by",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "sortOrder",
                "type": "\"asc\" | \"desc\"",
                "complexType": {
                  "original": "'asc' | 'desc'",
                  "resolved": "\"asc\" | \"desc\"",
                  "references": {}
                },
                "mutable": true,
                "attr": "sort-order",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'asc'",
                "values": [
                  {
                    "value": "asc",
                    "type": "string"
                  },
                  {
                    "value": "desc",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "sortable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "sortable",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "totalItems",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "total-items",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:page",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:sort",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:table-cell-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:table-select-change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Table",
              "description": "A configurable component for displaying tabular data.",
              "category": "Data Display",
              "img": "/assets/img/table.png",
              "imgDark": "/assets/img/table-dark.png"
            }
          },
          {
            "filePath": "src/components/data-display/tag/tag.tsx",
            "fileName": "tag.tsx",
            "tag": "goat-tag",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Tag"
              },
              {
                "name": "description",
                "text": "Use tags to label, categorize, or organize items using keywords that describe them."
              },
              {
                "name": "category",
                "text": "Data Display"
              },
              {
                "name": "tag",
                "text": "controls"
              },
              {
                "name": "example",
                "text": "<goat-tag class=\"color-red\">Important</goat-tag>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-cb-compound-expression",
              "goat-cb-predicate",
              "goat-condition-builder",
              "goat-flow-designer",
              "goat-select"
            ],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-tag": [
                "goat-icon"
              ],
              "goat-cb-compound-expression": [
                "goat-tag"
              ],
              "goat-cb-predicate": [
                "goat-tag"
              ],
              "goat-condition-builder": [
                "goat-tag"
              ],
              "goat-flow-designer": [
                "goat-tag"
              ],
              "goat-select": [
                "goat-tag"
              ]
            },
            "props": [
              {
                "name": "color",
                "type": "\"blue\" | \"error\" | \"gray\" | \"green\" | \"info\" | \"primary\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
                "complexType": {
                  "original": "'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'primary' | 'success' | 'info' | 'warning' | 'error'",
                  "resolved": "\"blue\" | \"error\" | \"gray\" | \"green\" | \"info\" | \"primary\" | \"red\" | \"success\" | \"warning\" | \"yellow\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "color",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'gray'",
                "values": [
                  {
                    "value": "blue",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "gray",
                    "type": "string"
                  },
                  {
                    "value": "green",
                    "type": "string"
                  },
                  {
                    "value": "info",
                    "type": "string"
                  },
                  {
                    "value": "primary",
                    "type": "string"
                  },
                  {
                    "value": "red",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  },
                  {
                    "value": "yellow",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "filter",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "filter",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "imageSrc",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "image-src",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md'",
                  "resolved": "\"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": true,
                "docs": "Text size.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "value",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:tag-dismiss",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Tag",
              "description": "Use tags to label, categorize, or organize items using keywords that describe them.",
              "category": "Data Display",
              "tag": "controls",
              "example": "<goat-tag class=\"color-red\">Important</goat-tag>"
            }
          }
        ]
      },
      {
        "name": "Feedback",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/feedback/notification/notification.tsx",
            "fileName": "notification.tsx",
            "tag": "goat-notification",
            "readme": "# goat-alert\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Notification"
              },
              {
                "name": "description",
                "text": "Notifications are messages that communicate information to the user."
              },
              {
                "name": "category",
                "text": "Feedback"
              },
              {
                "name": "tags",
                "text": "notification"
              },
              {
                "name": "example",
                "text": "<goat-notification state=\"success\">\r\n     <div slot='title'>Successful saved the record</div>\r\n   </goat-notification>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-notification-manager"
            ],
            "dependencies": [
              "goat-button",
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-notification": [
                "goat-button",
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-notification-manager": [
                "goat-notification"
              ]
            },
            "props": [
              {
                "name": "actionLabel",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "action-label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'Dismiss'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "actionName",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "action-name",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'dismiss'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "actionable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "actionable",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "dismissible",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "dismissible",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "lowContrast",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "low-contrast",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"error\" | \"info\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'info' | 'warning'",
                  "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'info'",
                "values": [
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "info",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:dismiss",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Notification",
              "description": "Notifications are messages that communicate information to the user.",
              "category": "Feedback",
              "tags": [
                "notification"
              ],
              "example": "<goat-notification state=\"success\">\r\n     <div slot='title'>Successful saved the record</div>\r\n   </goat-notification>"
            }
          },
          {
            "filePath": "src/components/feedback/notification-manager/notification-manager.tsx",
            "fileName": "notification-manager.tsx",
            "tag": "goat-notification-manager",
            "readme": "# goat-alert\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Notification Manager"
              },
              {
                "name": "description",
                "text": "Manages alert, toasts and notifications."
              },
              {
                "name": "category",
                "text": "Feedback"
              },
              {
                "name": "tags",
                "text": "notification"
              },
              {
                "name": "img",
                "text": "/assets/img/notification-manager.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/notification-manager-dark.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-toast",
              "goat-notification"
            ],
            "dependencyGraph": {
              "goat-notification-manager": [
                "goat-toast",
                "goat-notification"
              ],
              "goat-toast": [
                "goat-icon"
              ],
              "goat-notification": [
                "goat-button",
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "'global'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "position",
                "type": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                "complexType": {
                  "original": "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
                  "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "position",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'bottom-right'",
                "values": [
                  {
                    "value": "bottom-left",
                    "type": "string"
                  },
                  {
                    "value": "bottom-right",
                    "type": "string"
                  },
                  {
                    "value": "top-left",
                    "type": "string"
                  },
                  {
                    "value": "top-right",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:toast",
                "target": "window",
                "capture": false,
                "passive": false
              },
              {
                "event": "goat:notification",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Notification Manager",
              "description": "Manages alert, toasts and notifications.",
              "category": "Feedback",
              "tags": [
                "notification"
              ],
              "img": "/assets/img/notification-manager.png",
              "imgDark": "/assets/img/notification-manager-dark.png"
            }
          },
          {
            "filePath": "src/components/feedback/progress/progress.tsx",
            "fileName": "progress.tsx",
            "tag": "goat-progress",
            "readme": "# goat-spinner\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Progress"
              },
              {
                "name": "description",
                "text": "Progress indicators express an unspecified wait time or display the length of a process."
              },
              {
                "name": "category",
                "text": "Feedback"
              },
              {
                "name": "tags",
                "text": "feedback, loading, progress, spinner"
              },
              {
                "name": "example",
                "text": "<goat-progress value=\"40\" label=\"Progress\" width=\"100%\" helper-text=\"Optional helper text goes here...\"></goat-progress>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-progress": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "helperText",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "helper-text",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "hideLabel",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "hide-label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"md\" | \"sm\"",
                "complexType": {
                  "original": "'sm' | 'md'",
                  "resolved": "\"md\" | \"sm\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "\nPossible values are: `\"sm\"` and `\"md\"` in pixel. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "status",
                "type": "\"active\" | \"error\" | \"success\"",
                "complexType": {
                  "original": "'active' | 'success' | 'error'",
                  "resolved": "\"active\" | \"error\" | \"success\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "status",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'active'",
                "values": [
                  {
                    "value": "active",
                    "type": "string"
                  },
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "null",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Progress",
              "description": "Progress indicators express an unspecified wait time or display the length of a process.",
              "category": "Feedback",
              "tags": [
                "feedback",
                " loading",
                " progress",
                " spinner"
              ],
              "example": "<goat-progress value=\"40\" label=\"Progress\" width=\"100%\" helper-text=\"Optional helper text goes here...\"></goat-progress>"
            }
          },
          {
            "filePath": "src/components/feedback/spinner/spinner.tsx",
            "fileName": "spinner.tsx",
            "tag": "goat-spinner",
            "readme": "# goat-spinner\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Spinner"
              },
              {
                "name": "description",
                "text": "Spinners provide a visual cue that an action is processing awaiting a course of change or a result."
              },
              {
                "name": "category",
                "text": "Feedback"
              },
              {
                "name": "tags",
                "text": "feedback, loading, progress, spinner"
              },
              {
                "name": "example",
                "text": "<goat-spinner class=\"rainbow\" size=\"2rem\"></goat-spinner>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-button",
              "goat-code-editor",
              "goat-code-highlighter",
              "goat-html-editor",
              "goat-select",
              "goat-tab"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-button": [
                "goat-spinner"
              ],
              "goat-code-editor": [
                "goat-spinner"
              ],
              "goat-code-highlighter": [
                "goat-spinner"
              ],
              "goat-html-editor": [
                "goat-spinner"
              ],
              "goat-select": [
                "goat-spinner"
              ],
              "goat-tab": [
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "description",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "description",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'Loading'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "string",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg' | string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"` and size in pixel. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Spinner",
              "description": "Spinners provide a visual cue that an action is processing awaiting a course of change or a result.",
              "category": "Feedback",
              "tags": [
                "feedback",
                " loading",
                " progress",
                " spinner"
              ],
              "example": "<goat-spinner class=\"rainbow\" size=\"2rem\"></goat-spinner>"
            }
          },
          {
            "filePath": "src/components/feedback/toast/toast.tsx",
            "fileName": "toast.tsx",
            "tag": "goat-toast",
            "readme": "# goat-alert\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Toast"
              },
              {
                "name": "description",
                "text": "Toasts are lightweight notifications."
              },
              {
                "name": "category",
                "text": "Feedback"
              },
              {
                "name": "example",
                "text": "<goat-toast state=\"success\" message=\"Successful saved the record\"></goat-toast>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-notification-manager"
            ],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-toast": [
                "goat-icon"
              ],
              "goat-notification-manager": [
                "goat-toast"
              ]
            },
            "props": [
              {
                "name": "message",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "message",
                "reflectToAttr": false,
                "docs": "Message to display in the toast.",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "state",
                "type": "\"error\" | \"info\" | \"success\" | \"warning\"",
                "complexType": {
                  "original": "'success' | 'error' | 'info' | 'warning'",
                  "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "state",
                "reflectToAttr": true,
                "docs": "Toast state.\nPossible values are `\"success\"`, `\"error\"`, `\"info\"`, `\"warning\"`. Defaults to `\"info\"`.",
                "docsTags": [],
                "default": "'info'",
                "values": [
                  {
                    "value": "error",
                    "type": "string"
                  },
                  {
                    "value": "info",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  },
                  {
                    "value": "warning",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Toast",
              "description": "Toasts are lightweight notifications.",
              "category": "Feedback",
              "example": "<goat-toast state=\"success\" message=\"Successful saved the record\"></goat-toast>"
            }
          }
        ]
      },
      {
        "name": "Up coming",
        "hide": false,
        "components": [
          {
            "filePath": "src/components/data-display/accordion/accordion-item/accordion-item.tsx",
            "fileName": "accordion-item.tsx",
            "tag": "goat-accordion-item",
            "readme": "# goat-menu-item\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-accordion-item": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "heading",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "heading",
                "reflectToAttr": false,
                "docs": "The menu item value.",
                "docsTags": [],
                "default": "'Heading'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "icon",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "open",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "open",
                "reflectToAttr": true,
                "docs": "Menu item selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:accordion-item-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the menu item is clicked.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [
              {
                "name": "title",
                "docs": ""
              }
            ],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/breadcrumb/breadcrumb-item/breadcrumb-item.tsx",
            "fileName": "breadcrumb-item.tsx",
            "tag": "goat-breadcrumb-item",
            "readme": "# goat-tab\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-text",
              "goat-link"
            ],
            "dependencyGraph": {
              "goat-breadcrumb-item": [
                "goat-text",
                "goat-link"
              ]
            },
            "props": [
              {
                "name": "active",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "active",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "Hyperlink to navigate to on click.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "position",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "position",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "target",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "target",
                "reflectToAttr": false,
                "docs": "Sets or retrieves the window or frame at which to target content.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/calendar/calendar/column-view/column-view.tsx",
            "fileName": "column-view.tsx",
            "tag": "goat-calendar-column-view",
            "readme": "# goat-calendar-column-view\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [
              "goat-calendar"
            ],
            "dependencies": [
              "goat-calendar-column-view-background"
            ],
            "dependencyGraph": {
              "goat-calendar-column-view": [
                "goat-calendar-column-view-background"
              ],
              "goat-calendar": [
                "goat-calendar-column-view"
              ]
            },
            "props": [
              {
                "name": "contextDate",
                "type": "Date",
                "complexType": {
                  "original": "Date",
                  "resolved": "Date",
                  "references": {
                    "Date": {
                      "location": "global",
                      "id": "global::Date"
                    }
                  }
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "Date"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "currentTime",
                "type": "Date",
                "complexType": {
                  "original": "Date",
                  "resolved": "Date",
                  "references": {
                    "Date": {
                      "location": "global",
                      "id": "global::Date"
                    }
                  }
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "Date"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "days",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "days",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "7",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "eventClickable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "event-clickable",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "events",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "view",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "view",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'week'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:column-view-date-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:column-view-event-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/calendar/calendar/column-view/column-view-background/column-view-background.tsx",
            "fileName": "column-view-background.tsx",
            "tag": "goat-calendar-column-view-background",
            "readme": "# goat-calendar-column-view-background\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [
              "goat-calendar-column-view"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-calendar-column-view": [
                "goat-calendar-column-view-background"
              ]
            },
            "props": [
              {
                "name": "columns",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "columns",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "1",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/calendar/calendar/month-view/month-view.tsx",
            "fileName": "month-view.tsx",
            "tag": "goat-calendar-month-view",
            "readme": "# goat-calendar-column-view\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [
              "goat-calendar"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-calendar": [
                "goat-calendar-month-view"
              ]
            },
            "props": [
              {
                "name": "contextDate",
                "type": "Date",
                "complexType": {
                  "original": "Date",
                  "resolved": "Date",
                  "references": {
                    "Date": {
                      "location": "global",
                      "id": "global::Date"
                    }
                  }
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "Date"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "currentTime",
                "type": "Date",
                "complexType": {
                  "original": "Date",
                  "resolved": "Date",
                  "references": {
                    "Date": {
                      "location": "global",
                      "id": "global::Date"
                    }
                  }
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "Date"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "eventClickable",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "event-clickable",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "events",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [
              {
                "event": "goat:month-view-date-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              },
              {
                "event": "goat:month-view-event-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/calendar/calendar/month-view/month-view-background/month-view-background.tsx",
            "fileName": "month-view-background.tsx",
            "tag": "goat-calendar-month-view-background",
            "readme": "# goat-calendar-column-view-background\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "columns",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "columns",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "1",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/flow-designer/canvas/canvas.tsx",
            "fileName": "canvas.tsx",
            "tag": "goat-canvas",
            "readme": "# goat-flow-designer\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Canvas"
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "description",
                "text": "Canvas for drawing lines and shapes on."
              },
              {
                "name": "img",
                "text": "/assets/img/canvas.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [
              "goat-flow-designer"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-flow-designer": [
                "goat-canvas"
              ]
            },
            "props": [
              {
                "name": "padding",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "padding",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "1",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "shapes",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "viewbox",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "viewbox",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              },
              {
                "name": "zoom",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "zoom",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "1",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "Canvas",
              "category": "Up coming",
              "description": "Canvas for drawing lines and shapes on.",
              "img": "/assets/img/canvas.png"
            }
          },
          {
            "filePath": "src/components/data-display/card/card.tsx",
            "fileName": "card.tsx",
            "tag": "goat-card",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "shadowLevel",
                "type": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
                "complexType": {
                  "original": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined",
                  "resolved": "\"lg\" | \"md\" | \"sm\" | \"xl\" | \"xs\" | \"xxl\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "shadow-level",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  },
                  {
                    "value": "xl",
                    "type": "string"
                  },
                  {
                    "value": "xs",
                    "type": "string"
                  },
                  {
                    "value": "xxl",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/condition-builder/cb-compound-expression/cb-compound-expression.tsx",
            "fileName": "cb-compound-expression.tsx",
            "tag": "goat-cb-compound-expression",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-text",
              "goat-cb-divider",
              "goat-tag"
            ],
            "dependencyGraph": {
              "goat-cb-compound-expression": [
                "goat-text",
                "goat-cb-divider",
                "goat-tag"
              ],
              "goat-tag": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "conditionOperator",
                "type": "\"and\" | \"or\"",
                "complexType": {
                  "original": "'and' | 'or'",
                  "resolved": "\"and\" | \"or\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "condition-operator",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "value": "and",
                    "type": "string"
                  },
                  {
                    "value": "or",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "fieldLabel",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "field-label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "fieldName",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "field-name",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/condition-builder/cb-divider/cb-divider.tsx",
            "fileName": "cb-divider.tsx",
            "tag": "goat-cb-divider",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [
              "goat-cb-compound-expression",
              "goat-cb-predicate",
              "goat-condition-builder"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-cb-compound-expression": [
                "goat-cb-divider"
              ],
              "goat-cb-predicate": [
                "goat-cb-divider"
              ],
              "goat-condition-builder": [
                "goat-cb-divider"
              ]
            },
            "props": [
              {
                "name": "connectEnd",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "connect-end",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "connectStart",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "connect-start",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "vertical",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "vertical",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/condition-builder/cb-expression/cb-expression.tsx",
            "fileName": "cb-expression.tsx",
            "tag": "goat-cb-expression",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-select"
            ],
            "dependencyGraph": {
              "goat-cb-expression": [
                "goat-select"
              ],
              "goat-select": [
                "goat-icon",
                "goat-tag",
                "goat-button",
                "goat-spinner",
                "goat-menu",
                "goat-text",
                "goat-menu-item"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ],
              "goat-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ]
            },
            "props": [
              {
                "name": "operatorValue",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "operator-value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "operators",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/condition-builder/cb-predicate/cb-predicate.tsx",
            "fileName": "cb-predicate.tsx",
            "tag": "goat-cb-predicate",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-cb-divider",
              "goat-tag"
            ],
            "dependencyGraph": {
              "goat-cb-predicate": [
                "goat-cb-divider",
                "goat-tag"
              ],
              "goat-tag": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "conditionOperator",
                "type": "\"and\" | \"or\"",
                "complexType": {
                  "original": "'and' | 'or'",
                  "resolved": "\"and\" | \"or\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "condition-operator",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "value": "and",
                    "type": "string"
                  },
                  {
                    "value": "or",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "vertical",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "vertical",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/charts/chart-doughnut/chart-doughnut.tsx",
            "fileName": "chart-doughnut.tsx",
            "tag": "goat-chart-doughnut",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "ChartDoughnut"
              },
              {
                "name": "description",
                "text": "Use tags to label, categorize, or organize items using keywords that describe them."
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "tag",
                "text": "controls"
              },
              {
                "name": "example",
                "text": "<goat-chart-doughnut class=\"color-red\"></goat-chart-doughnut>"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "ChartDoughnut",
              "description": "Use tags to label, categorize, or organize items using keywords that describe them.",
              "category": "Up coming",
              "tag": "controls",
              "example": "<goat-chart-doughnut class=\"color-red\"></goat-chart-doughnut>"
            }
          },
          {
            "filePath": "src/components/layout/container/container.tsx",
            "fileName": "container.tsx",
            "tag": "goat-container",
            "readme": "# goat-heading\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "vertical",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "vertical",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/flow-designer/flow-designer/flow-designer.tsx",
            "fileName": "flow-designer.tsx",
            "tag": "goat-flow-designer",
            "readme": "# goat-flow-designer\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Flow Designer"
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "description",
                "text": "An interactive button with a range of presentation options."
              },
              {
                "name": "img",
                "text": "/assets/img/flow-designer.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-canvas",
              "goat-icon",
              "goat-tag",
              "goat-button-group",
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-flow-designer": [
                "goat-canvas",
                "goat-icon",
                "goat-tag",
                "goat-button-group",
                "goat-button"
              ],
              "goat-tag": [
                "goat-icon"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "blockSize",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "block-size",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "16",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "data",
                "type": "any[]",
                "complexType": {
                  "original": "any[]",
                  "resolved": "any[]",
                  "references": {}
                },
                "mutable": false,
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "[]",
                "values": [
                  {
                    "type": "any[]"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Flow Designer",
              "category": "Up coming",
              "description": "An interactive button with a range of presentation options.",
              "img": "/assets/img/flow-designer.png"
            }
          },
          {
            "filePath": "src/components/navigation/header/header-action/header-action.tsx",
            "fileName": "header-action.tsx",
            "tag": "goat-header-action",
            "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-header-action": [
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "badge",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "badge",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'_self'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "color",
                "type": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"primary\" | \"secondary\" | \"success\"",
                "complexType": {
                  "original": "'primary' | 'secondary' | 'success' | 'danger' | 'brand-primary' | 'brand-secondary'",
                  "resolved": "\"brand-primary\" | \"brand-secondary\" | \"danger\" | \"primary\" | \"secondary\" | \"success\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "color",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'brand-secondary'",
                "values": [
                  {
                    "value": "brand-primary",
                    "type": "string"
                  },
                  {
                    "value": "brand-secondary",
                    "type": "string"
                  },
                  {
                    "value": "danger",
                    "type": "string"
                  },
                  {
                    "value": "primary",
                    "type": "string"
                  },
                  {
                    "value": "secondary",
                    "type": "string"
                  },
                  {
                    "value": "success",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "Hyperlink to navigate to on click.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "icon",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon",
                "reflectToAttr": false,
                "docs": "Icon which will displayed on button.\r\nPossible values are icon names.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selected",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected",
                "reflectToAttr": false,
                "docs": "Button selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "size",
                "type": "\"lg\" | \"md\" | \"none\" | \"sm\" | \"xl\" | \"xxl\"",
                "complexType": {
                  "original": "'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none'",
                  "resolved": "\"lg\" | \"md\" | \"none\" | \"sm\" | \"xl\" | \"xxl\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "size",
                "reflectToAttr": false,
                "docs": "Button size.\r\nPossible values are `\"sm\"`, `\"md\"`, `\"lg\"`, `\"xl\"`, `\"xxl\"`, `\"none\"`. Defaults to `\"md\"`.",
                "docsTags": [],
                "default": "'md'",
                "values": [
                  {
                    "value": "lg",
                    "type": "string"
                  },
                  {
                    "value": "md",
                    "type": "string"
                  },
                  {
                    "value": "none",
                    "type": "string"
                  },
                  {
                    "value": "sm",
                    "type": "string"
                  },
                  {
                    "value": "xl",
                    "type": "string"
                  },
                  {
                    "value": "xxl",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "target",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "target",
                "reflectToAttr": false,
                "docs": "Sets or retrieves the window or frame at which to target content.",
                "docsTags": [],
                "default": "'_self'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "variant",
                "type": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
                "complexType": {
                  "original": "'default' | 'outline' | 'ghost' | 'link'",
                  "resolved": "\"default\" | \"ghost\" | \"link\" | \"outline\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "variant",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'default'",
                "values": [
                  {
                    "value": "default",
                    "type": "string"
                  },
                  {
                    "value": "ghost",
                    "type": "string"
                  },
                  {
                    "value": "link",
                    "type": "string"
                  },
                  {
                    "value": "outline",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/header/header-brand/header-brand.tsx",
            "fileName": "header-brand.tsx",
            "tag": "goat-header-brand",
            "readme": "# p4-top-navigation\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-link",
              "goat-svg",
              "goat-divider"
            ],
            "dependencyGraph": {
              "goat-header-brand": [
                "goat-link",
                "goat-svg",
                "goat-divider"
              ]
            },
            "props": [
              {
                "name": "color",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "color",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'brand-primary'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'#'",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "logo",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "logo",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "subTitle",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "sub-title",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/data-entry/html-editor/html-editor.tsx",
            "fileName": "html-editor.tsx",
            "tag": "goat-html-editor",
            "readme": "# goat-code-editor\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "HTML Editor"
              },
              {
                "name": "description",
                "text": "A browser based html editor."
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "tags",
                "text": "input, form"
              },
              {
                "name": "img",
                "text": "/assets/img/html-editor.png"
              },
              {
                "name": "imgDark",
                "text": "/assets/img/html-editor-dark.png"
              }
            ],
            "encapsulation": "none",
            "dependents": [],
            "dependencies": [
              "goat-button-group",
              "goat-button",
              "goat-spinner"
            ],
            "dependencyGraph": {
              "goat-html-editor": [
                "goat-button-group",
                "goat-button",
                "goat-spinner"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "debounce",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "debounce",
                "reflectToAttr": false,
                "docs": "Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.",
                "docsTags": [],
                "default": "250",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "lineNumbers",
                "type": "\"off\" | \"on\"",
                "complexType": {
                  "original": "'off' | 'on'",
                  "resolved": "\"off\" | \"on\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "line-numbers",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'on'",
                "values": [
                  {
                    "value": "off",
                    "type": "string"
                  },
                  {
                    "value": "on",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "name",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "name",
                "reflectToAttr": false,
                "docs": "The input field name.",
                "docsTags": [],
                "default": "`goat-input-${this.gid}`",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "readonly",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "readonly",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "required",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "required",
                "reflectToAttr": true,
                "docs": "If true, required icon is show. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "theme",
                "type": "\"vs-dark\" | \"vs-light\"",
                "complexType": {
                  "original": "'vs-light' | 'vs-dark'",
                  "resolved": "\"vs-dark\" | \"vs-light\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "theme",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'vs-light'",
                "values": [
                  {
                    "value": "vs-dark",
                    "type": "string"
                  },
                  {
                    "value": "vs-light",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The input field value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "getComponentId",
                "returns": {
                  "type": "Promise<string>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<string>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<string>"
                },
                "signature": "getComponentId() => Promise<string>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:change",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the value has changed..",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name": "HTML Editor",
              "description": "A browser based html editor.",
              "category": "Up coming",
              "tags": [
                "input",
                " form"
              ],
              "img": "/assets/img/html-editor.png",
              "imgDark": "/assets/img/html-editor-dark.png"
            }
          },
          {
            "filePath": "src/components/general/image/image.tsx",
            "fileName": "image.tsx",
            "tag": "goat-image",
            "readme": "# goat-icon\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "darkSrc",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "dark-src",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "imageTitle",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "image-title",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "src",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "src",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/menu/menu-item/menu-item.tsx",
            "fileName": "menu-item.tsx",
            "tag": "goat-menu-item",
            "readme": "# goat-menu-item\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [
              "goat-dropdown",
              "goat-select"
            ],
            "dependencies": [],
            "dependencyGraph": {
              "goat-dropdown": [
                "goat-menu-item"
              ],
              "goat-select": [
                "goat-menu-item"
              ]
            },
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selected",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected",
                "reflectToAttr": true,
                "docs": "Menu item selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The menu item value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:menu-item-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the menu item is clicked.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          },
          {
            "filePath": "src/components/modal/modal/modal.tsx",
            "fileName": "modal.tsx",
            "tag": "goat-modal",
            "readme": "# p4-modal\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name",
                "text": "Modal"
              },
              {
                "name": "description",
                "text": "Modals are used to display content in a layer above the app."
              },
              {
                "name": "category",
                "text": "Up coming"
              },
              {
                "name": "tags",
                "text": "controls"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-text",
              "goat-button"
            ],
            "dependencyGraph": {
              "goat-modal": [
                "goat-text",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "show",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "os:prompt",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {
              "name": "Modal",
              "description": "Modals are used to display content in a layer above the app.",
              "category": "Up coming",
              "tags": [
                "controls"
              ]
            }
          },
          {
            "filePath": "src/components/app-shell/sidenav/sidenav.tsx",
            "fileName": "sidenav.tsx",
            "tag": "goat-sidenav",
            "readme": "# goat-menu\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [
              {
                "name": "name1",
                "text": "Side Navigation"
              },
              {
                "name": "description1",
                "text": "The side navigation component provides an easy way to navigate through your website / application."
              },
              {
                "name": "img1",
                "text": "/assets/img/sidenav.png"
              }
            ],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {
              "name1": "Side Navigation",
              "description1": "The side navigation component provides an easy way to navigate through your website / application.",
              "img1": "/assets/img/sidenav.png"
            }
          },
          {
            "filePath": "src/components/app-shell/sidenav-menu/sidenav-menu.tsx",
            "fileName": "sidenav-menu.tsx",
            "tag": "goat-sidenav-menu",
            "readme": "# goat-menu\n\n\n",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-empty-state"
            ],
            "dependencyGraph": {
              "goat-sidenav-menu": [
                "goat-empty-state"
              ],
              "goat-empty-state": [
                "goat-svg",
                "goat-button"
              ],
              "goat-button": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "empty",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "emptyState",
                "type": "any",
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "mutable": true,
                "attr": "empty-state",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "`{\n    \"headline\": \"No items\",\n    \"description\": \"There are no items to display\"\n  }`",
                "values": [
                  {
                    "type": "any"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on first menu item. Use this method instead of the global\n`element.focus()`.",
                "docsTags": []
              }
            ],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "keydown",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          },
          {
            "filePath": "src/components/app-shell/sidenav-menu-item/sidenav-menu-item.tsx",
            "fileName": "sidenav-menu-item.tsx",
            "tag": "goat-sidenav-menu-item",
            "readme": "# goat-menu-item\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selected",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected",
                "reflectToAttr": true,
                "docs": "Menu item selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The menu item value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:sidenav-menu-item-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the menu item is clicked.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/tabs/tab/tab.tsx",
            "fileName": "tab.tsx",
            "tag": "goat-tab",
            "readme": "# goat-tab\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-icon",
              "goat-spinner"
            ],
            "dependencyGraph": {
              "goat-tab": [
                "goat-icon",
                "goat-spinner"
              ]
            },
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "disabledReason",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled-reason",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "icon",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "icon",
                "reflectToAttr": false,
                "docs": "Icon which will displayed on button.\r\nPossible values are bootstrap icon names.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selected",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected",
                "reflectToAttr": true,
                "docs": "Button selection state.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "showLoader",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "show-loader",
                "reflectToAttr": false,
                "docs": "Show loader.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "target",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "target",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              },
              {
                "name": "triggerClick",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "triggerClick() => Promise<void>",
                "parameters": [],
                "docs": "",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:tab-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "On click of tab, a CustomEvent 'goat:tab-click' will be triggered.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/tabs/tab-panel/tab-panel.tsx",
            "fileName": "tab-panel.tsx",
            "tag": "goat-tab-panel",
            "readme": "# goat-tab\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "active",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "active",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "value",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/tabs/tabs-list/tabs-list.tsx",
            "fileName": "tabs-list.tsx",
            "tag": "goat-tabs-list",
            "readme": "# goat-tabs\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [],
            "dependencyGraph": {},
            "props": [
              {
                "name": "managed",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "managed",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "variant",
                "type": "\"contained\" | \"line\"",
                "complexType": {
                  "original": "'line' | 'contained'",
                  "resolved": "\"contained\" | \"line\"",
                  "references": {}
                },
                "mutable": false,
                "attr": "variant",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "'line'",
                "values": [
                  {
                    "value": "contained",
                    "type": "string"
                  },
                  {
                    "value": "line",
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              }
            ],
            "methods": [],
            "events": [],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "goat:tab-click",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          },
          {
            "filePath": "src/components/navigation/tree-view/tree-node/tree-node.tsx",
            "fileName": "tree-node.tsx",
            "tag": "goat-tree-node",
            "readme": "# goat-menu\r\n\r\n\r\n\r",
            "overview": "",
            "usage": {},
            "docs": "",
            "docsTags": [],
            "encapsulation": "shadow",
            "dependents": [],
            "dependencies": [
              "goat-icon"
            ],
            "dependencyGraph": {
              "goat-tree-node": [
                "goat-icon"
              ]
            },
            "props": [
              {
                "name": "disabled",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "disabled",
                "reflectToAttr": true,
                "docs": "If true, the user cannot interact with the button. Defaults to `false`.",
                "docsTags": [],
                "default": "false",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "expanded",
                "type": "boolean",
                "complexType": {
                  "original": "boolean",
                  "resolved": "boolean",
                  "references": {}
                },
                "mutable": false,
                "attr": "expanded",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "true",
                "values": [
                  {
                    "type": "boolean"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "href",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "href",
                "reflectToAttr": false,
                "docs": "Hyperlink to navigate to on click.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "label",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": true,
                "attr": "label",
                "reflectToAttr": false,
                "docs": "",
                "docsTags": [],
                "default": "''",
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "level",
                "type": "number",
                "complexType": {
                  "original": "number",
                  "resolved": "number",
                  "references": {}
                },
                "mutable": false,
                "attr": "level",
                "reflectToAttr": true,
                "docs": "",
                "docsTags": [],
                "default": "0",
                "values": [
                  {
                    "type": "number"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "selectedNode",
                "type": "string",
                "complexType": {
                  "original": "string",
                  "resolved": "string",
                  "references": {}
                },
                "mutable": false,
                "attr": "selected-node",
                "reflectToAttr": true,
                "docs": "Menu item selection state.",
                "docsTags": [],
                "values": [
                  {
                    "type": "string"
                  }
                ],
                "optional": false,
                "required": false
              },
              {
                "name": "value",
                "type": "number | string",
                "complexType": {
                  "original": "string | number | null",
                  "resolved": "number | string",
                  "references": {}
                },
                "mutable": true,
                "attr": "value",
                "reflectToAttr": false,
                "docs": "The menu item value.",
                "docsTags": [],
                "values": [
                  {
                    "type": "number"
                  },
                  {
                    "type": "string"
                  }
                ],
                "optional": true,
                "required": false
              }
            ],
            "methods": [
              {
                "name": "setBlur",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setBlur() => Promise<void>",
                "parameters": [],
                "docs": "Sets blur on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.blur()`.",
                "docsTags": []
              },
              {
                "name": "setFocus",
                "returns": {
                  "type": "Promise<void>",
                  "docs": ""
                },
                "complexType": {
                  "signature": "() => Promise<void>",
                  "parameters": [],
                  "references": {
                    "Promise": {
                      "location": "global",
                      "id": "global::Promise"
                    }
                  },
                  "return": "Promise<void>"
                },
                "signature": "setFocus() => Promise<void>",
                "parameters": [],
                "docs": "Sets focus on the native `input` in `goat-input`. Use this method instead of the global\r\n`input.focus()`.",
                "docsTags": []
              }
            ],
            "events": [
              {
                "event": "goat:tree-node-click",
                "detail": "any",
                "bubbles": true,
                "complexType": {
                  "original": "any",
                  "resolved": "any",
                  "references": {}
                },
                "cancelable": true,
                "composed": true,
                "docs": "Emitted when the menu item is clicked.",
                "docsTags": []
              }
            ],
            "styles": [],
            "slots": [],
            "parts": [],
            "listeners": [
              {
                "event": "mouseup",
                "target": "window",
                "capture": false,
                "passive": true
              },
              {
                "event": "keyup",
                "target": "window",
                "capture": false,
                "passive": false
              }
            ],
            "metadata": {}
          }
        ]
      }
    ]
  }
})

site.use(jsx());
site.use(sass());
site.use(sitemap());

export default site;
