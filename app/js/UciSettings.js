/**
    This file is part of Orange Confort+ | A centralized Javascript application to enable users to customize display and behaviour of websites to suit their advanced accessibility needs
    
    Copyright (C) 2014 - 2017  Orange SA

    Orange Confort+ is free software; you can redistribute it and/or
    modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    Orange Confort+ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details (LICENSE.txt file).
**/ 
/**
 * @class uci_typographie
 * @classdesc Cette classe permettra d'implémenter l'onglet settings
 */
/*global window */
/*global document: false */
/* global alert */
UciSettings = {
    /*
     * @constructor init
     */

    InitUciSettings: function () {
      return accessibilitytoolbar.make(["div", {id:"uci_contenu_onglet_settings", "class":"uci_contenu_onglet cdu_c", role:"tabpanel"},
          ["div", {"class":"uci_onglet_div margin-left margin-right-xlg"},
            ["div", {id:"uci_div_supprimer_miseenpage"},
              ["input", {type:"checkbox", value:"true", name:"a11yLinearize", id:"a11yLinearize", checked:accessibilitytoolbar.userPref.get("a11yLinearize") === "true" ? "checked" : false}],
              ["label", {"for":"a11yLinearize"}, accessibilitytoolbar.get('uci_label_listmode')],
              accessibilitytoolbar.makeHelpTpl("uci_link_help_listmode","uci_help_listmode",accessibilitytoolbar.get('uci_help_listmode'))
            ],
            ["div", {id:"uci_div_desactiver_transparence"},
              ["input", {type:"checkbox", value:"1", name:"a11ySupEffetTransp", id:"a11ySupEffetTransp", checked:accessibilitytoolbar.userPref.get("a11ySupEffetTransp") === "1" ? "checked" : false}],
              ["label", {"for":"a11ySupEffetTransp"}, accessibilitytoolbar.get('uci_label_disabletransp')],
              accessibilitytoolbar.makeHelpTpl("uci_link_help_disabletransp","uci_help_disabletransp",accessibilitytoolbar.get('uci_help_disabletransp'))
            ]
          ],
          ["div", {"class":"uci_onglet_div margin-left margin-right"},
            ["div", {id:"uci_div_disabled_fond_picture"},
              ["input", {type:"checkbox", value:"true", name:"a11ySupImageFont", id:"a11ySupImageFont", checked:accessibilitytoolbar.userPref.get("a11ySupImageFont") === "true" ? "checked" : false}],
              ["label", {"for":"a11ySupImageFont"}, accessibilitytoolbar.get('uci_label_disablebgpictures')]
            ],
            ["div", {id:"uci_div_disabled_first_plan_picture"},
              ["input", {type:"checkbox", value:"true", name:"a11ySupImageFirstPlan", id:"a11ySupImageFirstPlan", checked:accessibilitytoolbar.userPref.get("a11ySupImageFirstPlan") === "true" ? "checked" : false}],
              ["label", {"for":"a11ySupImageFirstPlan"}, accessibilitytoolbar.get('uci_label_disablepppictures')],
              accessibilitytoolbar.makeHelpTpl("uci_link_help_disablepppictures","uci_help_disablepppictures",accessibilitytoolbar.get('uci_help_disablepppictures'))
            ]
          ],
          ["div", {"class":"uci_onglet_div margin-left margin-right-xlg"},



                ["div", {"class":"margin-top-lg"}, accessibilitytoolbar.get('uci_shortcut_title'),
                  ["p", {"class":"font-normal margin-left-lg margin-top margin-bottom"}, accessibilitytoolbar.get('uci_shortcut_text')],
                    ["label", {"class": "uci_inline uci_shortcut_aligned","for":"a11ySupShortcut"}, accessibilitytoolbar.get('uci_label_shortcut')],
                    
                    ["li", { "class": "uci_inline", id:"uci_shortcut_list" },
                      ["button", {"class":"ucibtn ucibtn-sm ucibtn-secondary uci_bton_menu cdu_c uci_dropdown", "aria-haspopup":"true", "aria-expanded":"false", id:"uci_shortcut_menu_button", type:"button"}, accessibilitytoolbar.userPref.get("a11ySupShortcut")],
                      accessibilitytoolbar.makeHelpTpl("uci_link_help_shortcut","uci_help_shortcut",accessibilitytoolbar.get('uci_help_shortcut')),
                      ["div",
                        ["div", {id:"uci_shortcut_menu", style:"display:none;", class:"uci_submenu"},
                          ["div", {id:"uci_shortcut", "class":"uci_lang"},
                            ["input", {
                              "class": (accessibilitytoolbar.userPref.get("a11ySupShortcut") === "Q" ? "uci_choix active" : "uci_choix") + " ucibtn ucibtn-sm ucibtn-secondary",
                              type: "button",
                              name: "uci_shortcut_Q",
                              value: "Q",
                              id: "uci_shortcut_Q",
                              title: accessibilitytoolbar.get('uci_txt_menu_shortcut_q')
                            }],
                            ["input", {
                              "class": (accessibilitytoolbar.userPref.get("a11ySupShortcut") === "S" ? "uci_choix active" : "uci_choix") + " ucibtn ucibtn-sm ucibtn-secondary",
                              type: "button",
                              name: "uci_shortcut_S",
                              value: "S",
                              id: "uci_shortcut_S",
                              title: accessibilitytoolbar.get('uci_txt_menu_shortcut_s')
                            }],
                            ["input", {
                              "class": (accessibilitytoolbar.userPref.get("a11ySupShortcut") === "W" ? "uci_choix active" : "uci_choix") + " ucibtn ucibtn-sm ucibtn-secondary",
                              type: "button",
                              name: "uci_shortcut_W",
                              value: "W",
                              id: "uci_shortcut_W",
                              title: accessibilitytoolbar.get('uci_txt_menu_shortcut_w')
                            }],
                            ["input", {
                              "class": (accessibilitytoolbar.userPref.get("a11ySupShortcut") === "X" ? "uci_choix active" : "uci_choix") + " ucibtn ucibtn-sm ucibtn-secondary",
                              type: "button",
                              name: "uci_shortcut_X",
                              value: "X",
                              id: "uci_shortcut_X",
                              title: accessibilitytoolbar.get('uci_txt_menu_shortcut_x')
                            }],
                            ["input", {
                              "class": (accessibilitytoolbar.userPref.get("a11ySupShortcut") === "C" ? "uci_choix active" : "uci_choix") + " ucibtn ucibtn-sm ucibtn-secondary",
                              type: "button",
                              name: "uci_shortcut_C",
                              value: "C",
                              id: "uci_shortcut_C",
                              title: accessibilitytoolbar.get('uci_txt_menu_shortcut_c')
                            }],
                          ]
                        ]
                      ]
                    ]
                ]
              ]
            
                  
        ]);
    }
}