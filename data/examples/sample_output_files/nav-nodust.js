// src/templates/nav/v2/partials/add-to-project-section.dust
(function(){dust.register("src/templates/nav/v2/partials/add-to-project-section",body_0);function body_0(chk,ctx){return chk.w("<div class=\"add-to-project-section hide\"><div class=\"project-selection\"><div class=\"content\"><h3 class=\"title\">Bookmark</h3><div class=\"selected-asset\"><input id=\"selectedAsset\" class=\"text text--light selected\" type=\"text\" title=\"").f(ctx.get(["assetName"], false),ctx,"h").w("\" value=\"").f(ctx.get(["assetName"], false),ctx,"h").w("\" disabled /></div><div class=\"project-dropdown-container\"><div class=\"select select--inline\">").x(ctx.get(["projects"], false),ctx,{"block":body_1},{}).x(ctx.get(["project"], false),ctx,{"block":body_4},{}).w("</div></div></div><div class=\"footer\"><button type=\"button\" class=\"button button--hyperlink cancel-button\">").x(ctx.get(["small"], false),ctx,{"block":body_5},{}).nx(ctx.get(["small"], false),ctx,{"block":body_6},{}).w("</button><button ").x(ctx.get(["projects"], false),ctx,{"block":body_7},{}).w(" type=\"button\" class=\"button ").x(ctx.get(["projects"], false),ctx,{"block":body_8},{}).w(" save-button right\"><span class=\"button__text\">Save</span></button></div></div><div class=\"success-container hide\"><div class=\"content\"><svg viewBox=\"0 0 24 24\" width=\"32\" height=\"32\" style=\"margin-right: 5px;\"><path fill=\"transparent\" stroke-width=\"2px\" stroke=\"#a6266e\" d=\"M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1z\"></path><path fill=\"#000\" d=\"M6.4 12.5l1.4-1.4 2.3 2.3 6.3-5.6 1.2 1.5-7.5 6.9\"></path></svg><h3 class=\"title\">Bookmarked</h3></div><div class=\"footer\"><button type=\"button\" class=\"button button--hyperlink done-button right\"><span class=\"button__text\">Done</span></button><button type=\"button\" class=\"button button--hyperlink view-project-button\"><span class=\"button__text\">View Project</span></button></div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<select tabindex=\"-1\" class=\"select--light\" style=\"position: absolute; width: 100%; height: 100%; opacity: 0;\"><option disabled=\"\">Select Project</option>").s(ctx.get(["projects"], false),ctx,{"block":body_2},{}).w("</select><button class=\"button select__button dropdown-button\" type=\"button\"><span class=\"select__button__text\">Select Project</span><svg class=\"select__button__arrow\" width=\"13\" height=\"8\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.2 7.8l-5-5-4.8 4.8L0 6.2 6.2 0l6.4 6.4\"></path></svg></button><ul class=\"select__options dropdown-list\">").s(ctx.get(["projects"], false),ctx,{"block":body_3},{}).w("</ul>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<option>").f(ctx.get(["name"], false),ctx,"h").w("</option>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<li class=\"select__options__item\"><button tabindex=\"-1\" class=\"select__options__item__a\">").f(ctx.get(["name"], false),ctx,"h").w("</button></li>");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<input id=\"selectedProject\" class=\"text text--light selected\" type=\"text\" title=\"").f(ctx.getPath(false, ["project","name"]),ctx,"h").w("\" value=\"").f(ctx.getPath(false, ["project","name"]),ctx,"h").w("\" disabled />");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"#db2780\" type=\"close\" class=\"icon\"><circle fill=\"none\" class=\"st0\" cx=\"11.9\" cy=\"12\" r=\"10\"></circle><polygon fill=\"#A6276E\" points=\"15.2,7.6 11.9,10.9 8.5,7.6 7.4,8.7 10.8,12 7.4,15.4 8.5,16.5 11.9,13.1 15.2,16.5 16.3,15.4 13,12 16.3,8.7 \"></polygon><path fill=\"#A6276E\" d=\"M11.9,1C5.8,1,0.9,6,0.9,12s4.9,11,11,11s11-5,11-11S17.9,1,11.9,1z M11.9,21.5c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S17.1,21.5,11.9,21.5z\"></path></svg>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("\t\t\t<span class=\"button__text\">Cancel</span>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("disabled");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("button--disabled");}body_8.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/community-asset-item.dust
(function(){dust.register("src/templates/nav/v2/partials/community-asset-item",body_0);function body_0(chk,ctx){return chk.w("<div id=\"").f(ctx.get(["id"], false),ctx,"h").w("\" class=\"community-asset-item ").f(ctx.get(["type"], false),ctx,"h").w("\"><div class=\"main-section\"><a class=\"body-container\" data-index=\"").f(ctx.get(["index"], false),ctx,"h").w("\" ").nx(ctx.get(["sideMenu"], false),ctx,{"block":body_1},{}).w("><div class=\"photo-container\" style=\"background-image: ").f(ctx.get(["bgImageUrl"], false),ctx,"h").w("\">").x(ctx.get(["video"], false),ctx,{"block":body_4},{}).w("</div><div class=\"community-asset-content\"><div class=\"type\"><label>").f(ctx.get(["type"], false),ctx,"h").w("</label><h3>").f(ctx.get(["name"], false),ctx,"h").w("</h3></div><div class=\"asset-body\"><div class=\"details\"><div class=\"field\"><label>source</label><div class=\"value\">").f(ctx.get(["source"], false),ctx,"h").w("</div></div><div class=\"field\"><label>Date</label><div class=\"value\">").f(ctx.get(["date"], false),ctx,"h").w("</div></div>").h("eq",ctx,{"block":body_5},{"key":ctx.get(["type"], false),"value":"tutorial"}).x(ctx.get(["topicHelper"], false),ctx,{"block":body_7},{}).x(ctx.get(["format"], false),ctx,{"block":body_8},{}).w("<div class=\"external-link\"><svg version=\"1.1\" id=\"Layer_1\" class=\"icon-external\" x=\"0px\" y=\"0px\"width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\" xml:space=\"preserve\"><g><path d=\"M1,4v4v20h30V8V4H1z M29,26H3V10h26V26z\"/><polygon points=\"18.707,21.707 25,15.414 25,20 27,20 27,12 19,12 19,14 23.586,14 17.293,20.293 \t\"/></g></svg></div></div><div class=\"description\">").f(ctx.get(["description"], false),ctx,"h").w("</div></div></div></a><section class=\"social-section\"><a class=\"like-button ").x(ctx.get(["userHasLiked"], false),ctx,{"block":body_9},{}).w("\" data-guid=\"").f(ctx.get(["id"], false),ctx,"h").w("\"><svg class=\"icon-like\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g><path d=\"M17.077,2C14.919,2,13.035,3.301,12,5c-1.035-1.699-2.919-3-5.077-3C3.651,2,1,4.611,1,7.833C1,9.445,1.644,10.921,2.692,12C5.074,14.449,12,22,12,22s6.926-7.551,9.308-10C22.356,10.921,23,9.445,23,7.833C23,4.611,20.349,2,17.077,2z\"/></g></svg><span class=\"like-count\">").x(ctx.get(["likes"], false),ctx,{"block":body_10},{}).nx(ctx.get(["likes"], false),ctx,{"block":body_11},{}).w("</span></a><a class=\"bookmark-button\"><svg class=\"icon-bookmark\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\"><polygon points=\"6,1 6,23 12,17 18,23 18,1 \"></polygon></svg></a>").x(ctx.get(["addToProject"], false),ctx,{"block":body_12},{}).w("</section></div><div class=\"add-to-project-mount\"></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.nx(ctx.get(["video"], false),ctx,{"block":body_2},{}).w(" ");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w(" href=\"").f(ctx.get(["url"], false),ctx,"h").w("\" title=\"").f(ctx.get(["fullName"], false),ctx,"h").w("\" ").nx(ctx.get(["exchange"], false),ctx,{"block":body_3},{});}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("target=\"_blank\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<svg version=\"1.1\" class=\"icon-video\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"width=\"32px\" height=\"32px\" viewBox=\"0 0 32 32\" enable-background=\"new 0 0 32 32\" xml:space=\"preserve\"><g><path d=\"M16,2C8.269,2,2,8.269,2,16s6.269,14,14,14s14-6.269,14-14S23.731,2,16,2z M16,28C9.383,28,4,22.617,4,16S9.383,4,16,4s12,5.383,12,12S22.617,28,16,28z\"/><polygon points=\"11,22 23,16 11,10 \t\"/></g></svg>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.x(ctx.get(["level"], false),ctx,{"block":body_6},{});}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<div class=\"field\"><label>Level</label><div class=\"value\">").f(ctx.get(["level"], false),ctx,"h").w("</div></div>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("<div class=\"field\"><label>Topic</label><div class=\"value\">").f(ctx.get(["topicHelper"], false),ctx,"h").w("</div></div>");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<div class=\"field\"><label>Format</label><div class=\"value\">").f(ctx.get(["format"], false),ctx,"h").w("</div></div>");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("liked");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.f(ctx.get(["likes"], false),ctx,"h");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.w("0");}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.w("<a class=\"add-dataset-button\"><svg class=\"icon-add\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><path d=\"M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8c4.418,0,8-3.582,8-8S12.418,0,8,0z M12,9H9v3H7V9H4V7h3V4h2v3h3V9z\"/></svg></a>");}body_12.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/community-asset-small.dust
(function(){dust.register("src/templates/nav/v2/partials/community-asset-small",body_0);function body_0(chk,ctx){return chk.w("<div id=\"").f(ctx.get(["id"], false),ctx,"h").w("\" class=\"community-asset-item sm ").f(ctx.get(["type"], false),ctx,"h").w("\">").x(ctx.get(["bookmark"], false),ctx,{"block":body_1},{}).w("<div class=\"main-section\"><a class=\"body-container\" data-index=\"").f(ctx.get(["index"], false),ctx,"h").w("\" data-type=\"").f(ctx.get(["type"], false),ctx,"h").w("\" title=\"").f(ctx.get(["label"], false),ctx,"h").w("\" ").x(ctx.get(["url"], false),ctx,{"block":body_3},{}).w("><div class=\"community-asset-content\"><div class=\"type\"><label>").f(ctx.get(["type"], false),ctx,"h").w("</label><h3>").f(ctx.get(["label"], false),ctx,"h").f(ctx.get(["name"], false),ctx,"h").w("</h3></div><div class=\"asset-body\"><div class=\"field\"><div class=\"value\">").f(ctx.get(["date"], false),ctx,"h").w("</div></div></div></div></a><div class=\"confirm-delete-container hide\" data-index=\"").f(ctx.get(["index"], false),ctx,"h").w("\"><div class=\"delete-content\"><div class=\"asset-body\"><h4>Remove Bookmark From Project?</h4></div><div class=\"asset-footer\"><button class=\"button button--hyperlink confirm-delete\"><span><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1024 1024\" fill=\"#4b8400\" type=\"success\" class=\"icon\"><path class=\"path1\" d=\"M512 42.667c-260.267 0-469.333 209.067-469.333 469.333s209.067 469.333 469.333 469.333 469.333-209.067 469.333-469.333-209.067-469.333-469.333-469.333zM426.667 699.733l-157.867-157.867 59.733-59.733 98.133 98.133 268.8-238.933 55.467 64-324.267 294.4z\"></path></svg></span></button><button class=\"button button--hyperlink cancel-delete\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"#db2780\" type=\"close\" class=\"icon\"><circle fill=\"none\" class=\"st0\" cx=\"11.9\" cy=\"12\" r=\"10\"></circle><polygon fill=\"#A6276E\" points=\"15.2,7.6 11.9,10.9 8.5,7.6 7.4,8.7 10.8,12 7.4,15.4 8.5,16.5 11.9,13.1 15.2,16.5 16.3,15.4 13,12 16.3,8.7 \"></polygon><path fill=\"#A6276E\" d=\"M11.9,1C5.8,1,0.9,6,0.9,12s4.9,11,11,11s11-5,11-11S17.9,1,11.9,1z M11.9,21.5c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S17.1,21.5,11.9,21.5z\"></path></svg></button></div></div><div class=\"small community-loader hide\"><svg class=\"loader\" viewBox=\"25 25 50 50\"><circle class=\"loader__path\" cx=\"50\" cy=\"50\" r=\"20\"></circle></svg></div></div><section class=\"social-section ").x(ctx.get(["disableSocial"], false),ctx,{"block":body_4},{}).w(" ").x(ctx.get(["bookmark"], false),ctx,{"block":body_5},{}).w("\"><a class=\"like-button ").x(ctx.get(["userHasLiked"], false),ctx,{"block":body_6},{}).w("\" data-guid=\"").f(ctx.get(["id"], false),ctx,"h").w("\"><svg class=\"icon-like\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g><path d=\"M17.077,2C14.919,2,13.035,3.301,12,5c-1.035-1.699-2.919-3-5.077-3C3.651,2,1,4.611,1,7.833C1,9.445,1.644,10.921,2.692,12C5.074,14.449,12,22,12,22s6.926-7.551,9.308-10C22.356,10.921,23,9.445,23,7.833C23,4.611,20.349,2,17.077,2z\"/></g></svg><span class=\"like-count\">").x(ctx.get(["likes"], false),ctx,{"block":body_7},{}).nx(ctx.get(["likes"], false),ctx,{"block":body_8},{}).w("</span></a><a class=\"bookmark-button\"><svg class=\"icon-bookmark\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\"><polygon points=\"6,1 6,23 12,17 18,23 18,1 \"></polygon></svg></a></section></div><div class=\"add-to-project-mount\"></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<button class=\"button button--hyperlink delete-bookmark ").x(ctx.get(["disableDel"], false),ctx,{"block":body_2},{}).w("\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"#db2780\" type=\"close\" class=\"icon\"><circle fill=\"none\" class=\"st0\" cx=\"11.9\" cy=\"12\" r=\"10\"></circle><polygon fill=\"#A6276E\" points=\"15.2,7.6 11.9,10.9 8.5,7.6 7.4,8.7 10.8,12 7.4,15.4 8.5,16.5 11.9,13.1 15.2,16.5 16.3,15.4 13,12 16.3,8.7 \"></polygon><path fill=\"#A6276E\" d=\"M11.9,1C5.8,1,0.9,6,0.9,12s4.9,11,11,11s11-5,11-11S17.9,1,11.9,1z M11.9,21.5c-5.2,0-9.4-4.2-9.4-9.4s4.2-9.4,9.4-9.4s9.4,4.2,9.4,9.4S17.1,21.5,11.9,21.5z\"></path></svg></button>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("hide");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("href=\"").f(ctx.get(["url"], false),ctx,"h").w("\" target=\"_blank\"");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("hide");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("hide");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("liked");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.f(ctx.get(["likes"], false),ctx,"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("0");}body_8.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/community-drillin.dust
(function(){dust.register("src/templates/nav/v2/partials/community-drillin",body_0);function body_0(chk,ctx){return chk.w("<div id=\"dap-community-drillin\" class=\"").f(ctx.get(["type"], false),ctx,"h").w("\"><div class=\"community-drillin-navigation\"><a class=\"button button--hyperlink button--back\"><svg class=\"icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-4.9 9.1 24 24\" style=\"enable-background:new -4.9 9.1 24 24;\" xml:space=\"preserve\"><path d=\"M7.1,9.1c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S13.7,9.1,7.1,9.1z M7.1,31.4 c-5.7,0-10.3-4.6-10.3-10.3S1.4,10.8,7.1,10.8s10.3,4.6,10.3,10.3S12.8,31.4,7.1,31.4z\"/><circle cx=\"7.1\" cy=\"21.1\" r=\"12\" fill=\"none\"/><polygon points=\"7.5,16.6 6.3,15.4 0.5,21.1 6.3,26.8 7.5,25.6 3.8,22 13.8,22 13.8,20.2 3.8,20.2 \"/></svg>Back to Resources</a></div><div class=\"main-section\"><a class=\"community-drillin-header ").f(ctx.get(["type"], false),ctx,"h").w("\" href=\"").f(ctx.get(["url"], false),ctx,"h").w("\" ").nx(ctx.get(["exchange"], false),ctx,{"block":body_1},{}).w("><div class=\"type\"><label>").f(ctx.get(["type"], false),ctx,"h").w("</label></div><h3>").x(ctx.get(["name"], false),ctx,{"block":body_2},{}).x(ctx.get(["label"], false),ctx,{"block":body_3},{}).w("</h3><div class=\"details\">").x(ctx.get(["source"], false),ctx,{"block":body_4},{}).x(ctx.get(["date"], false),ctx,{"block":body_5},{}).h("eq",ctx,{"block":body_6},{"key":ctx.get(["type"], false),"value":"tutorial"}).x(ctx.get(["topicHelper"], false),ctx,{"block":body_8},{}).x(ctx.get(["format"], false),ctx,{"block":body_9},{}).w("</div></a><section class=\"social-section\"><a class=\"like-button ").x(ctx.get(["userHasLiked"], false),ctx,{"block":body_10},{}).w("\" data-guid=\"").f(ctx.get(["id"], false),ctx,"h").w("\"><svg class=\"icon-like\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g><path d=\"M17.077,2C14.919,2,13.035,3.301,12,5c-1.035-1.699-2.919-3-5.077-3C3.651,2,1,4.611,1,7.833C1,9.445,1.644,10.921,2.692,12C5.074,14.449,12,22,12,22s6.926-7.551,9.308-10C22.356,10.921,23,9.445,23,7.833C23,4.611,20.349,2,17.077,2z\"/></g></svg><span class=\"like-count\">").x(ctx.get(["likes"], false),ctx,{"block":body_11},{}).nx(ctx.get(["likes"], false),ctx,{"block":body_12},{}).w("</span></a><a class=\"bookmark-button\"><svg class=\"icon-bookmark\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\"><polygon points=\"6,1 6,23 12,17 18,23 18,1 \"></polygon></svg></a>").x(ctx.get(["addToProject"], false),ctx,{"block":body_13},{}).w("</section></div><div class=\"add-to-project-mount\"></div><div class=\"community-drillin-body\"><div class=\"large community-loader ").x(ctx.get(["source"], false),ctx,{"block":body_14},{}).w("\"><svg class=\"loader\" viewBox=\"25 25 50 50\"><circle class=\"loader__path\" cx=\"50\" cy=\"50\" r=\"20\"></circle></svg> </div><div class=\"drillin-content\">").x(ctx.get(["source"], false),ctx,{"block":body_15},{}).w("</div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("target=\"_blank\"");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.f(ctx.get(["name"], false),ctx,"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.f(ctx.get(["label"], false),ctx,"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.w("<div class=\"field\"><label>source</label><div class=\"value\">").f(ctx.get(["source"], false),ctx,"h").w("</div></div>");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.w("<div class=\"field\"><label>Date</label><div class=\"value\">").f(ctx.get(["date"], false),ctx,"h").w("</div></div>");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.x(ctx.get(["level"], false),ctx,{"block":body_7},{});}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.w("<div class=\"field\"><label>Level</label><div class=\"value\">").f(ctx.get(["level"], false),ctx,"h").w("</div></div>");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.w("<div class=\"field\"><label>Topic</label><div class=\"value\">").f(ctx.get(["topicHelper"], false),ctx,"h").w("</div></div>");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.w("<div class=\"field\"><label>Format</label><div class=\"value\">").f(ctx.get(["format"], false),ctx,"h").w("</div></div>");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.w("liked");}body_10.__dustBody=!0;function body_11(chk,ctx){return chk.f(ctx.get(["likes"], false),ctx,"h");}body_11.__dustBody=!0;function body_12(chk,ctx){return chk.w("0");}body_12.__dustBody=!0;function body_13(chk,ctx){return chk.w("<a class=\"add-dataset-button\"><svg class=\"icon-add\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\"><path d=\"M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8c4.418,0,8-3.582,8-8S12.418,0,8,0z M12,9H9v3H7V9H4V7h3V4h2v3h3V9z\"/></svg></a>");}body_13.__dustBody=!0;function body_14(chk,ctx){return chk.w("hide");}body_14.__dustBody=!0;function body_15(chk,ctx){return chk.w("<div><h3>Description</h3>").f(ctx.get(["description"], false),ctx,"h").w("</div>");}body_15.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/community-modal.dust
(function(){dust.register("src/templates/nav/v2/partials/community-modal",body_0);function body_0(chk,ctx){return chk.w("<div class=\"community-modal-container hide\"><div id=\"community-modal\" class=\"").f(ctx.get(["type"], false),ctx,"h").w("\"><div class=\"community-modal-navigation\"><a class=\"button button--hyperlink button--back\"><svg class=\"icon\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-4.9 9.1 24 24\" style=\"enable-background:new -4.9 9.1 24 24;\" xml:space=\"preserve\"><path d=\"M7.1,9.1c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S13.7,9.1,7.1,9.1z M7.1,31.4 c-5.7,0-10.3-4.6-10.3-10.3S1.4,10.8,7.1,10.8s10.3,4.6,10.3,10.3S12.8,31.4,7.1,31.4z\"/><circle cx=\"7.1\" cy=\"21.1\" r=\"12\" fill=\"none\"/><polygon points=\"7.5,16.6 6.3,15.4 0.5,21.1 6.3,26.8 7.5,25.6 3.8,22 13.8,22 13.8,20.2 3.8,20.2 \"/></svg></a></div><div class=\"community-modal-header\"><div class=\"type\"><label>").f(ctx.get(["type"], false),ctx,"h").w("</label></div><h3>").f(ctx.get(["name"], false),ctx,"h").w("</h3><div class=\"source\"><label>By </label><div class=\"value\">").f(ctx.get(["source"], false),ctx,"h").w("</div></div><div class=\"date\"><label>Date</label><div class=\"value\">").f(ctx.get(["date"], false),ctx,"h").w("</div></div><div class=\"community-dropdown-container\"><a class=\"community-dropdown-button\" href=\"").f(ctx.get(["url"], false),ctx,"h").w("\" ").nx(ctx.get(["exchange"], false),ctx,{"block":body_1},{}).w("><svg class=\"icon-dropdown\" width=\"13px\" height=\"64px\" viewBox=\"0 0 13 64\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"assets\" transform=\"translate(-620.000000, -89.000000)\" fill=\"#A6266E\"><g id=\"Group-4\" transform=\"translate(620.000000, 89.000000)\"><g id=\"Group-14\"><ellipse id=\"Oval\" transform=\"translate(6.400000, 6.400000) rotate(-270.000000) translate(-6.400000, -6.400000) \" cx=\"6.4\" cy=\"6.4\" rx=\"6.4\" ry=\"6.4\"></ellipse><ellipse id=\"Oval\" transform=\"translate(6.400000, 32.000000) rotate(-270.000000) translate(-6.400000, -32.000000) \" cx=\"6.4\" cy=\"32\" rx=\"6.4\" ry=\"6.4\"></ellipse><circle id=\"Oval\" transform=\"translate(6.400000, 57.600000) rotate(-270.000000) translate(-6.400000, -57.600000) \" cx=\"6.4\" cy=\"57.6\" r=\"6.4\"></circle></g></g></g></g></svg></a></div></div><div class=\"community-modal-body\"><iframe src=\"").f(ctx.get(["url"], false),ctx,"h").w("\" width=\"100%\" height=\"100%\" sandbox/>\t</div></div></div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("target=\"_blank\"");}body_1.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/community-video-modal.dust
(function(){dust.register("src/templates/nav/v2/partials/community-video-modal",body_0);function body_0(chk,ctx){return chk.w("<div class=\"community-modal-container video hide\"><div id=\"community-modal\"><div class=\"community-modal-body\"><button class=\"button button--hyperlink close-button\"><svg class=\"icon icon-close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M20.3 10.3L16 14.6l-4.3-4.3-1.4 1.4 4.3 4.3-4.3 4.3 1.4 1.4 4.3-4.3 4.3 4.3 1.4-1.4-4.3-4.3 4.3-4.3-1.4-1.4zM16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12-5.4 12-12 12z\"/></svg></button><div id=\"community-video-mount\"></div></div></div></div>");}body_0.__dustBody=!0;return body_0;})();
// src/templates/nav/v2/partials/notebook-asset.dust
(function(){dust.register("src/templates/nav/v2/partials/notebook-asset",body_0);function body_0(chk,ctx){return chk.w("<a class=\"community-asset-item notebook\" href=\"").f(ctx.get(["commonUrl"], false),ctx,"h").w("/analytics/notebooks/").f(ctx.get(["id"], false),ctx,"h").w("\" title=\"").f(ctx.get(["title"], false),ctx,"h").w("\"><div class=\"community-asset-content\"><div class=\"type\"><label>notebook</label><h3>").f(ctx.get(["title"], false),ctx,"h").w("</h3></div><div class=\"asset-body\"><div class=\"details\"><div class=\"language\"><label>Language</label><div class=\"value\">").f(ctx.getPath(false, ["runtime","language"]),ctx,"h").w("</div></div><div class=\"date\"><label>Last Modified</label><div class=\"value\">").f(ctx.get(["lastUpdated"], false),ctx,"h").w("</div></div></div></div></div></a>");}body_0.__dustBody=!0;return body_0;})();
/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable max-len */

(function() {
	var _ID_COMMUNITY_MENU = "dap-community-menu";
	var _ID_COMMUNITY_DRILLIN = "dap-community-drillin";
	var _ID_COMMUNITY_MODAL = "community-modal";
	var _ID_MODAL_MOUNT = "community-modal-mount";
	var _ID_SIDEMENU_SEARCH_RESULTS = "community-search-results";
	var _ID_SIDEMENU_RECENT_RESULTS = "community-recent-results";
	var _ID_MAIN_SEARCH_RESULTS = "main-search-results";
	var _ID_RECENT_COMMUNITY = "recent-community-content";
	var _ID_RECENT_BOOKMARKS = "community-recent-bookmarks";
	var _ID_FEATURED_RESULTS = "community-featured-results";
	var _ID_HELP_RESULTS = "community-help-results";
	var _ID_SIDEMENU_SEARCH = "sidemenu-community-search";
	var _ID_PROJECT_ENTRIES = "community-project-entries";
	var _ID_BOOKMARK_ENTRIES = "community-bookmark-entries";
	var _ID_DOCS_TOC_ENTRIES = "community-toc-entries";
	var _ID_SEARCH_SCROLL_LOADER = "search-scroll-loader";

	var _CLASS_ASSET_CONTENT = "community-asset-content";
	var _CLASS_ADD_TO_PROJECT_MOUNT = "add-to-project-mount";
	var _CLASS_BODY_CONTAINER = "body-container";
	var _CLASS_ADD_DATASET_BTN = "add-dataset-button";
	var _CLASS_BUTTON_DISABLED = "button--disabled";
	var _CLASS_BOOKMARK_BUTTON = "bookmark-button";
	var _CLASS_BOOKMARK_CONTAINER = "community-bookmarks-container";
	var _CLASS_ADD_TO_PROJECT_SECTION = "add-to-project-section";
	var _CLASS_PROJECT_SELECTION = "project-selection";
	var _CLASS_BOOKMARKED = "bookmarked";
	var _CLASS_BTN_DISABLED = "button--disabled";
	var _CLASS_CONTENT = "content";
	var _CLASS_CANCEL_BUTTON = "cancel-button";
	var _CLASS_CONFIRM_DELETE_CONTAINER = "confirm-delete-container";
	var _CLASS_CANCEL_DELETE = "cancel-delete";
	var _CLASS_CONFIRM_DELETE = "confirm-delete";
	var _CLASS_DROPDOWN_BUTTON = "dropdown-button";
	var _CLASS_DROPDOWN_LIST = "dropdown-list";
	var _CLASS_DELETE_CONTENT = "delete-content";
	var _CLASS_DELETE_BOOKMARK_BTN = "delete-bookmark";
	var _CLASS_DONE_BUTTON = "done-button";
	var _CLASS_RECENT_CONTAINER = "community-recent-container";
	var _CLASS_MAKER_BTN = "dap-action-bar_maker";
	var _CLASS_MENU_CLOSE_BUTTON = "community-close-button";
	var _CLASS_LOADER = "community-loader";
	var _CLASS_MIN_VIEW = "minimized-view";
	var _CLASS_PROJECT_DROPDOWN_CONTAINER = "project-dropdown-container";
	var _CLASS_EXPANDED_VIEW = "expanded-view";
	var _CLASS_DRILLIN_NAVIGATION = "community-drillin-navigation";
	var _CLASS_DROPDOWN_CONTAINER = "community-dropdown-container";
	var _CLASS_DRILLIN_CONTENT = "drillin-content";
	var _CLASS_HIDE = "hide";
	var _CLASS_ICON_DROPDOWN = "icon-dropdown";
	var _CLASS_ICON_EXPAND = "icon-expand";
	var _CLASS_COMMUNITY_DROPDOWN_BUTTON = "community-dropdown-button";
	var _CLASS_COMMUNITY_DROPDOWN = "community-dropdown-menu";
	var _CLASS_COMMUNITY_FILTER_DROPDOWN = "community-filter-dropdown";
	var _CLASS_COMMUNITY_MODAL = "community-modal";
	var _CLASS_COMMUNITY_MODAL_CONTAINER = "community-modal-container";
	var _CLASS_COMMUNITY_MODAL_NAVIGATION = "community-modal-navigation";
	var _CLASS_NAV_CONTAINER = "navigation-container";
	var _CLASS_CLOSE_BUTTON = "close-button";
	var _CLASS_FILTER_ICON = "icon-filter";
	var _CLASS_MAIN_SECTION = "main-section";
	var _CLASS_LIKE_BUTTON = "like-button";
	var _CLASS_LIKE_COUNT = "like-count";
	var _CLASS_BOOKMARKS_VIEW = "community-bookmarks-view";
	var _CLASS_TOC_VIEW = "community-toc-view";
	var _CLASS_PROJECTS_VIEW = "community-projects-view";
	var _CLASS_RECENT_VIEW = "community-recent-view";
	var _CLASS_SEARCH_VIEW = "community-search-view";
	var _CLASS_SAVE_BUTTON = "save-button";
	var _CLASS_STACK_EXCHANGE_CONTAINER = "stack-exchange-container";
	var _CLASS_OPEN = "open";
	var _CLASS_VIEWALL_BUTTON = "viewall-button";
	var _CLASS_VIEW_PROJECT_BUTTON = "view-project-button";
	var _CLASS_SUCCESS_CONTAINER = "success-container";
	var _CLASS_TITLE = "title";

	var _ASSET_TEMPLATE = "src/templates/nav/v2/partials/community-asset-item";
	var _ASSET_SM_TEMPLATE = "src/templates/nav/v2/partials/community-asset-small";

	var _VIEW = {
		BOOKMARKS: "bookmarks",
		RECENT: "recent",
		TOC: "toc",
		SEARCH: "search",
		PROJECTS: "projects"
	};

	var production = false;

	var cloudantBookmark = "";
	var exchangeBookmark = "";

	var _COMMUNITY_V1_API = "/api/community-content/";
	var _PROJECT_API = "/api/projects/";

	var _PROJECT_TYPE = "project";
	var _DOC_TYPE = "documentation";
	var _DOC_IMG_URL = "/docs/api/content/";
	var _DOC_CONTENT = "/docs/content/";
	var _DOC_TOC_URL = "docs/toc";
	var _PROJECT = "project";
	var _PROJECTS = "projects";
	var _PROJECT_BOOKMARKS = "projectBookmarks";
	var bgImgPath = "/graphics/community/card-image-";

	var helpEntry = [{ id: "get-started", date: "Sep 23, 2016", href: "getting-started/get-started.html", label: "Get started", type: _DOC_TYPE, disableSocial: true }];

	var Render = _Render();

	var communityApi = {
		clearBookmarks: function() {
			cloudantBookmark = "";
			exchangeBookmark = "";
		},
		renderModal: function(data) {
			Render.modal(data);
		},
		reload: function(options) {
			_reload(options);
		},
		init: _init
	};

	var bookmarks;
	var projects;
	var docTOC;
	var searchResults;
	var recentEntries = [];
	var drillinEntry;

	var currentView = _VIEW.RECENT;
	var showDrillin = false;
	var query;
	var player;
	var projectSelected;
	var modalOpenedId;
	var selectedFilterTab;

	var loadingMoreEntries = false;
	var assetIndex = 0;

	function _prepareSearchEntriesRequestParams(options, params) {
		if (query) {
			params.query = query;
		}

		if (options.hasOwnProperty("type")) {
			params.type = options.type;
		}

		if (options.hasOwnProperty("limit")) {
			params.limit = options.limit;
		}

		if (options.hasOwnProperty("recent")) {
			currentView = _VIEW.RECENT;
		} else {
			currentView = _VIEW.SEARCH;
		}

		if (options.hasOwnProperty("featured")) {
			params.featured = options.featured;
		}

		if (options.getDocs) {
			params.getDocs = options.getDocs;
		}

		if (cloudantBookmark) {
			params.cloudantBookmark = cloudantBookmark;
		}

		if (exchangeBookmark) {
			params.exchangeBookmark = exchangeBookmark;
		}
	}

	function _searchEntries(options) {
		var mountNodeId = options.mountNodeId;
		var mountNode = document.getElementById(mountNodeId);
		var request = new XMLHttpRequest();

		var params = {};

		searchResults = [];
		assetIndex = 0;

		_prepareSearchEntriesRequestParams(options, params);

		var	url = _constructQuery(_COMMUNITY_V1_API, params);

		request.open("GET", url, true);

		request.setRequestHeader("Content-type", "application/json");
		request.onload = function() {
			if (request.status === 200) {
				var parsedResponse = request.responseText;
				if (parsedResponse) {
					try {
						parsedResponse = JSON.parse(parsedResponse);
					} catch (err) {
						console.warn(new Error("Error: unable to parse response as JSON"));
						return;
					}
				}

				var parsedEntries = parsedResponse.entries;

				parsedEntries = _setHelpers(parsedEntries);
				_setBookmarks(parsedResponse);

				// if (parsedEntries.documentation) {
				// 	docEntries = parsedResponse.documentation;
				// }

				if (mountNodeId === _ID_SIDEMENU_SEARCH_RESULTS) {
					searchResults = parsedEntries;
				} else if (mountNodeId === _ID_SIDEMENU_RECENT_RESULTS) {
					recentEntries = parsedEntries;
				}

				_toggleLoader(mountNodeId);

				document.getElementById(_ID_SEARCH_SCROLL_LOADER).classList.remove(_CLASS_HIDE);
				Render.asset(options, parsedEntries);
			}
			return;
		};

		request.onerror = function() {
			return ("Error: " + request.status);
		};

		if (!options.bookmark && !options.featured) {
			_clearResults(mountNode);
			cloudantBookmark = "";
			exchangeBookmark = "";
		}

		if (options.mountNodeId.indexOf("main") > -1) {
			var loadMore = document.getElementsByClassName("load-more-container");
			loadMore[0].classList.add(_CLASS_HIDE);
		}

		document.getElementById(_ID_SEARCH_SCROLL_LOADER).classList.add(_CLASS_HIDE);

		_toggleLoader(options.mountNodeId);
		_trackSearch(query);

		request.send();
	}

	function _searchMoreEntries(options) {
		var mountNodeId = options.mountNodeId;
		var mountNode = document.getElementById(mountNodeId);
		var request = new XMLHttpRequest();

		var params = {};
		params.appendEntries = true;

		_prepareSearchEntriesRequestParams(options, params);

		var	url = _constructQuery(_COMMUNITY_V1_API, params);

		request.open("GET", url, true);

		request.setRequestHeader("Content-type", "application/json");
		request.onload = function() {
			if (request.status === 200) {
				var parsedResponse = request.responseText;
				if (parsedResponse) {
					try {
						parsedResponse = JSON.parse(parsedResponse);
					} catch (err) {
						console.warn(new Error("Error: unable to parse response as JSON"));
						return;
					}
				}

				var parsedEntries = parsedResponse.entries;

				parsedEntries = _setHelpers(parsedEntries);
				_setBookmarks(parsedResponse);

				// if (parsedEntries.documentation) {
				// 	docEntries = parsedResponse.documentation;
				// }

				if (mountNodeId === _ID_SIDEMENU_SEARCH_RESULTS) {
					searchResults = searchResults.concat(parsedEntries);
				} else if (mountNodeId === _ID_SIDEMENU_RECENT_RESULTS) {
					recentEntries = parsedEntries;
				}

				Render.asset(options, parsedEntries);
				loadingMoreEntries = false;
			}
			return;
		};

		request.onerror = function() {
			return ("Error: " + request.status);
		};

		request.send();
	}


	function _constructQuery(requestUrl, data) {
		var url = requestUrl;
		if (data) {
			var params = "";

			for (var key in data) {
				if (data[key]) {
					params += key + "=" + data[key] + "&";
				}
			}

			if (url.indexOf("?q=") > -1) {
				url += "&" + params;
			} else {
				url = url + "?" + params;
			}
		}
		return url;
	}

	function _clearResults(mountNode) {
		if (mountNode) {
			while (mountNode.firstChild) {
				mountNode.removeChild(mountNode.firstChild);
			}
		}
	}

	function _setBookmarks(parsedResponse) {
		if (parsedResponse.hasOwnProperty("cloudantBookmark")) {
			cloudantBookmark = parsedResponse.cloudantBookmark;
		} else {
			cloudantBookmark = "";
		}

		if (parsedResponse.hasOwnProperty("exchangeBookmark")) {
			exchangeBookmark = parsedResponse.exchangeBookmark;
		} else {
			exchangeBookmark = "";
		}
	}

	function _toggleLoader(mountNode) {
		if (mountNode.indexOf("recent") > -1) {
			var recentContainer = document.querySelector("." + _CLASS_RECENT_CONTAINER);
			var recentCommunityLoader = recentContainer.getElementsByClassName(_CLASS_LOADER);
			if (recentCommunityLoader) {
				recentCommunityLoader[0].classList.toggle(_CLASS_HIDE);
			}
		} else {
			var searchContainer = document.querySelector("." + _CLASS_SEARCH_VIEW);
			var recentLoader = searchContainer.getElementsByClassName(_CLASS_LOADER);
			if (recentLoader && recentLoader[0]) {
				recentLoader[0].classList.toggle(_CLASS_HIDE);
			}
		}
	}

	function _entryHelper() {
		function _topic(entry) {
			var topic = entry.topic;
			if (Array.isArray(entry.topic)) {
				topic = entry.topic[0];
				if (entry.topic > 1) {
					topic += " +" + entry.topic.length - 1;
				}
			}
			return topic;
		}

		function _bgImageUrl(entry, index) {
			var imageIndex = ((index % 45) + 1).toString();
			var bgImageUrl = "url('" + bgImgPath + imageIndex + ".svg')";
			return bgImageUrl;
		}

		function _updateDatasetName(entry) {
			var type = entry.type;
			if (type === "dataset") {
				return "data set";
			}
			return type;
		}

		function _enableAddToProject(entry) {
			var type = entry.type;
			if (type === "data set") {
				return true;
			}
			return false;
		}

		return {
			topic: _topic,
			bgImageUrl: _bgImageUrl,
			enableAddToProject: _enableAddToProject,
			updateDatasetName: _updateDatasetName
		};
	}

	function _setHelpers(entries) {
		var updatedEntries = entries.map(function(entry, index) {
			entry.topicHelper = _entryHelper().topic(entry);
			entry.bgImageUrl = _entryHelper().bgImageUrl(entry, index);
			entry.type = _entryHelper().updateDatasetName(entry);
			entry.addToProject = _entryHelper().enableAddToProject(entry);
			return entry;
		});

		return updatedEntries;
	}

	function _reload(options) {
		if (!options) {
			console.warn("WARNING: Options is requred in communityContent.reload");
			return;
		}

		if (!options.mountNodeId) {
			console.warn("WARNING: mountNodeId is not defined");
			return;
		}

		/* eslint-disable */
		if (!dust) {
			console.warn("WARNING: dust core is not loaded");
			return;
		}
		/* eslint-enable */

		var mountNodeId = options.mountNodeId;
		var mountNode = document.getElementById(mountNodeId);

		if (!mountNode) {
			console.warn("WARNING: mount node couldn't be found");
			return;
		}

		_searchEntries(options);
	}

	function _toggleDrillin(show) {
		var minimizedView = document.getElementsByClassName(_CLASS_MIN_VIEW);
		var expandedView = document.getElementsByClassName(_CLASS_EXPANDED_VIEW);

		if (!minimizedView || !expandedView) {
			return;
		}

		if (show) {
			minimizedView[0].classList.add(_CLASS_HIDE);
			expandedView[0].classList.remove(_CLASS_HIDE);
			showDrillin = true;
		} else {
			minimizedView[0].classList.remove(_CLASS_HIDE);
			expandedView[0].classList.add(_CLASS_HIDE);
			showDrillin = false;
		}
	}

	// function _toggleDropdown(dropdownContainer) {
	// 	var dropdownMenu = dropdownContainer.querySelector("." + _CLASS_COMMUNITY_DROPDOWN);
	// 	if (dropdownMenu) {
	// 		dropdownMenu.classList.toggle(_CLASS_HIDE);
	// 	}
	// }

	function _toggleModal(options) {
		var modalContainer = document.getElementsByClassName(_CLASS_COMMUNITY_MODAL_CONTAINER);
		if (modalContainer) {
			modalContainer = modalContainer[0];

			if (modalContainer.classList.contains(_CLASS_HIDE)) {
				modalContainer.classList.remove(_CLASS_HIDE);
				modalContainer.classList.add("show");
			} else {
				if (options && options.videoId) {
					if (player) {
						player.pauseVideo();
					}
				}
				modalContainer.classList.remove("show");
				setTimeout(function() {
					modalContainer.classList.add(_CLASS_HIDE);
				}, 199);
			}
		}
	}

	function _toggleRecentView(show) {
		var recentView = document.getElementsByClassName(_CLASS_RECENT_VIEW);
		var searchContainer = document.getElementsByClassName(_CLASS_SEARCH_VIEW);

		if (!recentView || !searchContainer) {
			return;
		}

		if (show) {
			recentView[0].classList.remove(_CLASS_HIDE);
			searchContainer[0].classList.add(_CLASS_HIDE);
			currentView = _VIEW.RECENT;
		} else {
			recentView[0].classList.add(_CLASS_HIDE);
			searchContainer[0].classList.remove(_CLASS_HIDE);
		}
	}

	function _updateView() {
		var bookmarksView = document.getElementsByClassName(_CLASS_BOOKMARKS_VIEW);
		var projectView = document.getElementsByClassName(_CLASS_PROJECTS_VIEW);
		var recentView = document.getElementsByClassName(_CLASS_RECENT_VIEW);
		var searchView = document.getElementsByClassName(_CLASS_SEARCH_VIEW);
		var tocView = document.getElementsByClassName(_CLASS_TOC_VIEW);

		if (!projectView || !recentView || !searchView || !bookmarksView || !tocView) {
			return;
		}

		bookmarksView[0].classList.add(_CLASS_HIDE);
		projectView[0].classList.add(_CLASS_HIDE);
		recentView[0].classList.add(_CLASS_HIDE);
		searchView[0].classList.add(_CLASS_HIDE);
		tocView[0].classList.add(_CLASS_HIDE);
		assetIndex = 0;

		switch (currentView) {
		case _VIEW.BOOKMARKS:
			bookmarksView[0].classList.remove(_CLASS_HIDE);
			break;
		case _VIEW.PROJECTS:
			projectView[0].classList.remove(_CLASS_HIDE);
			break;
		case _VIEW.RECENT:
			recentView[0].classList.remove(_CLASS_HIDE);
			break;
		case _VIEW.SEARCH:
			searchView[0].classList.remove(_CLASS_HIDE);
			_bindSearchScroll();
			break;
		case _VIEW.TOC:
			tocView[0].classList.remove(_CLASS_HIDE);
			break;
		default:
			break;
		}
	}

	function _getDocContent(href) {
		if (href) {
			var url = _COMMUNITY_V1_API + "docs/content/" + encodeURIComponent(href);
			var request = new XMLHttpRequest();
			var drillin = document.getElementById(_ID_COMMUNITY_DRILLIN);
			var drillinLoader;

			if (drillin) {
				drillinLoader = drillin.querySelector("." + _CLASS_LOADER);
			}

			request.open("GET", url, true);
			request.onload = function() {
				if (request.status === 200) {
					var parsedResponse = request.responseText;

					if (drillinLoader) {
						drillinLoader.classList.add(_CLASS_HIDE);
					}

					if (parsedResponse) {
						try {
							parsedResponse = JSON.parse(parsedResponse);
						} catch (err) {
							console.warn(new Error("Error: unable to parse response as JSON"));
							return;
						}
					}

					var parsedContent = JSON.parse(parsedResponse.content);
					var likes = parsedResponse.likes;
					if (likes) {
						drillinEntry.likes = likes.count;
						drillinEntry.userHasLiked = likes.userHasLiked;
						drillinEntry.loaded = true;
					}

					drillinEntry.date = parsedResponse.date;
					drillinEntry.content = _parseHtmlContent(href, parsedContent);

					if (drillinEntry.id.indexOf("get-started") > -1) {
						_updateHardcodedDocEntry(drillinEntry);
					}

					Render.drillin(drillinEntry);

				}
			};

			request.onerror = function() {
				return ("Error: " + request.status);
			};

			if (drillinLoader) {
				drillinLoader.classList.remove(_CLASS_HIDE);
			}

			request.send();
		}
	}

	function _updateHardcodedDocEntry(_drillinEntry) {
		_drillinEntry.disableSocial = false;
		helpEntry[0] = _drillinEntry;
	}

	function _parseHtmlContent(href, data) {
		if (href && data) {
			var path = href.split("/")[0];
			if (path.indexOf(".html") > -1) {
				path = path.split(".html")[0];
			}
			var parser = new DOMParser();
			var doc = parser.parseFromString(data, "text/html");
			var imgs = doc.getElementsByTagName("img");
			var links = doc.getElementsByTagName("a");
			if (imgs && imgs.length) {
				for (var idx = 0; idx < imgs.length; idx++) {
					var img = imgs[idx];
					var imgSrc = img.getAttribute("src");
					if (imgSrc && imgSrc.indexOf("http") === -1) {
						var newSrc = "/docs/api/content/";

						/* eslint-disable max-depth */

						if (imgSrc.indexOf(path) > -1) {
							newSrc += imgSrc;
						} else {
							newSrc += (path ? path + "/" : "") + imgSrc;
						}

						/* eslint-enable max-depth */
						img.src = newSrc;
					}
				}
			}

			// remove the blue elements

			if (production) {
				var blueElements = doc.getElementsByClassName("blue");
				if (blueElements) {
					for (var jdx = 0; jdx < blueElements.length; jdx++) {
						var blueElement = blueElements[jdx];
						blueElement.parentNode.removeChild(blueElement);
					}
				}
			}

			_updateDocLinks(links, path);
			var articleElements = doc.getElementsByTagName("article");
			if (articleElements && articleElements.length > 0) {
				return articleElements[0];
			}


			// Handle KC generated content
			var bodyElement = doc.getElementsByTagName("body");
			if (bodyElement) {
				return bodyElement[0];
			}
		}
		return data;
	}

	function _updateDocLinks(links, path) {
		if (links && links.length) {
			for (var jdx = 0; jdx < links.length; jdx++) {
				var link = links[jdx];
				var href = link.getAttribute("href");
				var newHref;
				if (href && href.indexOf("../") > -1) {
					newHref = _DOC_CONTENT + href.substring(3, href.length);
					link.href = newHref;
					link.setAttribute("target", "_blank");
				} else if (href && href.indexOf("#") === -1) {
					newHref = _DOC_CONTENT + path + "/" + href;
					link.href = newHref;
					link.setAttribute("target", "_blank");
				}
			}
		}
	}

	function _parseDocHref(href) {
		if (href && typeof (href) === "string") {
			var id = href;
			var slashIndex = id.lastIndexOf("/");
			slashIndex = slashIndex > -1 ? slashIndex + 1 : 0;
			id = id.substring(slashIndex, id.length);
			id = id.split(".html")[0];
			return id;
		}
		return href;
	}

	function _unescapeHTMLEntitities(string) {
		// return unescaped value
		const htmlUnescapes = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#x27;": "\'"
		};
		const reEscapedHtml = /&(?:amp|lt|gt|quot|#x27);/g;
		const reHasEscapedHtml = RegExp(reEscapedHtml.source);
		var replaced = function(entity) {
			return htmlUnescapes[entity];
		};
		return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, replaced) : string;
	}

	function _bindModalCloseButton() {
		var closeButton = document.getElementsByClassName(_CLASS_CLOSE_BUTTON);
		if (closeButton) {
			closeButton[0].onclick = function() {
				_toggleModal({ videoId: true });
			};
		}
	}

	function _bindAssets(data, options) {
		var mountNodeId = options.mountNodeId;
		if (!mountNodeId) {
			console.warn("_bindAssets: mountNodeId is not defined");
		}

		var assetItems = document.getElementById(mountNodeId).childNodes;
		if (assetItems && assetItems.length > 0) {
			// assign a new index if appending new entries to existing list
			for (var jdx = options.append ? assetIndex : 0; jdx < assetItems.length; jdx++) {
				var assetItem = assetItems[jdx];
				if (document.body.contains(assetItem) && assetItem) {
					var bodyContainer = assetItem.querySelector("." + _CLASS_BODY_CONTAINER);
					var likeButton = assetItem.querySelector("." + _CLASS_LIKE_BUTTON);
					var bookmarkButton = assetItem.querySelector("." + _CLASS_BOOKMARK_BUTTON);
					var type;
					// _bindDropdownButton(assetItems[jdx]);
					if (bodyContainer && !options.bookmark) {
						bodyContainer.onclick = function(evt) {
							var target = evt.target;
							if (target.classList.contains(_CLASS_ICON_DROPDOWN) ||
								target.classList.contains(_CLASS_COMMUNITY_DROPDOWN_BUTTON)) {
								return;
							}
							var index = this.dataset.index;
							type = this.dataset.type;

							if (mountNodeId === _ID_RECENT_COMMUNITY) {
								if (recentEntries[index].url.indexOf("youtube") > -1) {
									Render.modal(recentEntries[index]);
									_trackCardClick(recentEntries[index]);
								}
							} else if (mountNodeId === _ID_HELP_RESULTS) {
								drillinEntry = helpEntry[0];
								Render.drillin(drillinEntry);
								_trackCardClick(drillinEntry);
								_toggleDrillin(true);
							} else if (mountNodeId === _ID_PROJECT_ENTRIES) {
								currentView = _VIEW.BOOKMARKS;
								var bookmarkNode = document.querySelector("#" + _ID_BOOKMARK_ENTRIES);
								_clearResults(bookmarkNode);
								projectSelected = projects[index];
								assetIndex = 0;
								Render.asset({ mountNodeId: _ID_BOOKMARK_ENTRIES,
									bookmark: true }, projects[index].bookmarks);
								_updateView();
							} else {
								if (mountNodeId === _ID_SIDEMENU_RECENT_RESULTS) {
									drillinEntry = recentEntries[index];
								} else if (type === _DOC_TYPE && currentView === _VIEW.TOC) {
									drillinEntry = docTOC[index];
								} else {
									if (searchResults[index].video) {
										Render.modal(searchResults[index]);
										_trackCardClick(searchResults[index]);
										return;
									}
									drillinEntry = searchResults[index];
								}
								Render.drillin(drillinEntry);
								_trackCardClick(drillinEntry);
								_toggleDrillin(true);
							}
						};
					}

					if (bookmarkButton) {
						var tempData = options.append ? data[jdx - assetIndex] : data[jdx];
						_bindBookmarkSection(assetItem, tempData);
					}

					if (mountNodeId === _ID_BOOKMARK_ENTRIES) {
						_toggleConfirmDeleteBookmark(assetItem);
					}

					// Disable like button for unauthenicated users
					if (mountNodeId !== _ID_FEATURED_RESULTS && likeButton) {
						var tempIdx = options.append ? (jdx - assetIndex) : jdx;
						_bindLikeButton(mountNodeId, likeButton, tempIdx);
					}
				}
			}
		}
	}

	function _bindViewAllButtons() {
		var communityMenu = document.getElementById(_ID_COMMUNITY_MENU);
		if (!communityMenu) {
			return;
		}

		var viewAllButtons = communityMenu.querySelectorAll("." + _CLASS_VIEWALL_BUTTON);
		if (viewAllButtons) {
			for (var idx = 0; idx < viewAllButtons.length; idx++) {
				var button = viewAllButtons[idx];
				if (button) {
					button.onclick = function(evt) {
						var target = evt.target;
						var _view = target.dataset.view;

						if (_view === "doc") {
							currentView = _VIEW.TOC;
							_updateView();
							_getDocTOC(_ID_DOCS_TOC_ENTRIES);
						} else if (_view === "projects") {
							currentView = _VIEW.PROJECTS;
							_updateView();
							var projectEntries = document.getElementById(_ID_PROJECT_ENTRIES);
							if (projectEntries && !projectEntries.hasChildNodes()) {
								Render.asset({ mountNodeId: _ID_PROJECT_ENTRIES }, projects);
							}
						} else {
							var options = {
								mountNodeId: _ID_SIDEMENU_SEARCH_RESULTS
							};
							currentView = _VIEW.SEARCH;
							_updateView();
							communityApi.clearBookmarks();
							_searchEntries(options);
						}
						// _toggleRecentView();
					};
				}
			}
		}
	}

	function _bindBookmarkSection(assetItem, data) {
		var addDatasetButton = assetItem.querySelector("." + _CLASS_ADD_DATASET_BTN);
		var mainSection = assetItem.querySelector("." + _CLASS_MAIN_SECTION);
		var bookmarkButton = assetItem.querySelector("." + _CLASS_BOOKMARK_BUTTON);

		var addToProjectSection;
		var cancelButton;
		var saveButton;
		var successContainer;
		var _selectedProjectFromDropdown = null;
		var currentProject;
		var renderObj = {};

		if (data) {
			renderObj.assetName = data.fullName ? data.fullName : data.label;
		}

		if (bookmarkButton) {
			bookmarkButton.onclick = function() {
				_handleButtonClick();
			};
		}

		if (addDatasetButton) {
			addDatasetButton.onclick = function() {
				_handleButtonClick("dataset");
			};
		}

		function _handleButtonClick(type) {
			if (mainSection) {
				currentProject = _getCurrentProject();
				if (currentProject) {
					renderObj.project = currentProject;
					_selectedProjectFromDropdown = currentProject;

					// Clear projects after client side transition into a project to hide project dropdown list
					if (renderObj.projects) {
						renderObj.projects = null;
					}
				} else {
					renderObj.projects = projects;
				}

				Render.addToProjectSection(assetItem, renderObj);
				cancelButton = assetItem.querySelector("." + _CLASS_CANCEL_BUTTON);
				saveButton = assetItem.querySelector("." + _CLASS_SAVE_BUTTON);
				successContainer = assetItem.querySelector("." + _CLASS_SUCCESS_CONTAINER);
				addToProjectSection = assetItem.querySelector("." + _CLASS_ADD_TO_PROJECT_SECTION);

				var handleSaveClick;
				var title;

				if (type === "dataset") {
					title = "Add to Project";
					handleSaveClick = _addDataset;
				} else {
					title = "Bookmark";
					handleSaveClick = _saveBookmark;
				}

				var projectSelection = assetItem.querySelector("." + _CLASS_PROJECT_SELECTION);
				var titleEle = projectSelection.querySelector("." + _CLASS_TITLE);
				if (titleEle) {
					titleEle.innerHTML = title;
				}
				mainSection.classList.add(_CLASS_HIDE);
				addToProjectSection.classList.remove(_CLASS_HIDE);

				if (saveButton) {
					saveButton.onclick = function() {
						handleSaveClick();
					};
				}
			}

			_bindProjectDropdownButton();
			_bindDropdownList();
			_bindCancelButton(cancelButton);
		}

		function _bindCancelButton(cancelBtn) {
			if (cancelBtn) {
				cancelBtn.onclick = function() {
					_hideAddToProjectSection();
				};
			}
		}

		function _addDataset() {
			function _getProjectAccessKey() {
				var safeEntryId = encodeURIComponent(data.id);
				var safeProjectId = encodeURIComponent(_selectedProjectFromDropdown.id);
				var url = "/api/exchange/actions/projectKey?entryId=" + safeEntryId + "&projectId=" + safeProjectId;

				if (!saveButton.classList.contains(_CLASS_BUTTON_DISABLED)) {
					saveButton.classList.add(_CLASS_BUTTON_DISABLED);
				}

				var request = new XMLHttpRequest();

				request.open("GET", url, true);
				request.setRequestHeader("Content-Type", "application/json");

				request.onload = function() {
					if (request.status === 200) {
						var parsedResponse = request.responseText;
						if (parsedResponse) {
							try {
								parsedResponse = JSON.parse(parsedResponse);
							} catch (err) {
								console.warn(new Error("Error: unable to parse response as JSON"));
								return;
							}
						}
						_addDatasetToProject(parsedResponse.key);
						return;
					}
					saveButton.classList.remove(_CLASS_BUTTON_DISABLED);
					return;
				};
				request.send();
			}

			function _addDatasetToProject(accessKey) {
				var accessLink = data.url + "/data?accessKey=" + accessKey;
				var request = new XMLHttpRequest();
				var url = _PROJECT_API + _selectedProjectFromDropdown.id + "/assets";
				var projectSelection = assetItem.querySelector("." + _CLASS_PROJECT_SELECTION);

				var payload = [{
					"type": "dataset/exchange-v1",
					"name": data.name,
					"properties": {
						"format": "csv",	// TODO: read from entry when available
						"id": data.guid
					},
					"url": accessLink
				}];

				request.open("POST", url, true);
				request.setRequestHeader("Content-Type", "application/json");
				request.onload = function() {
					if (request.status === 200) {
						if (projectSelection) {
							projectSelection.classList.add(_CLASS_HIDE);
						}

						if (successContainer) {
							var title = successContainer.querySelector(".title");
							if (title) {
								title.innerHTML = "Added";
							}
							successContainer.classList.remove(_CLASS_HIDE);
						}
						return;
					}

					saveButton.classList.remove(_CLASS_BUTTON_DISABLED);
					return;
				};
				_bindSuccessContainer();
				request.send(JSON.stringify(payload));
			}


			_getProjectAccessKey();
		}

		function _saveBookmark() {
			var projectSelection = assetItem.querySelector("." + _CLASS_PROJECT_SELECTION);
			var bookmarkData = {
				"mime_type": "text/html",
				"type": "bookmark/community-v1",
				"properties": {
					"bookmark_type": data.type,
					"published": data.date,
					"guid": data.id
				}
			};

			if (data.type === "article" || data.type === "tutorial") {
				bookmarkData.name = data.name;
				bookmarkData.url = data.url;
			} else if (data.type === "documentation") {
				bookmarkData.name = data.label;
				bookmarkData.url = _DOC_CONTENT + data.href;
			} else {
				bookmarkData.name = data.name;
				bookmarkData.url = "/exchange/public/entry/view/" + data.id;
			}

			if (!saveButton.classList.contains(_CLASS_BUTTON_DISABLED)) {
				saveButton.classList.add(_CLASS_BUTTON_DISABLED);
			}

			var request = new XMLHttpRequest();
			var url = _PROJECT_API + _selectedProjectFromDropdown.id + "/assets";

			request.open("POST", url, true);
			request.setRequestHeader("Content-Type", "application/json");

			request.onload = function() {
				if (request.status === 200) {
					var parsedResponse = request.responseText;
					if (parsedResponse) {
						try {
							parsedResponse = JSON.parse(parsedResponse);
						} catch (err) {
							console.warn(new Error("Error: unable to parse response as JSON"));
							return;
						}
					}

					if (projectSelection) {
						projectSelection.classList.add(_CLASS_HIDE);
					}

					if (successContainer) {
						successContainer.classList.remove(_CLASS_HIDE);
						var title = successContainer.querySelector(".title");
						if (title) {
							title.innerHTML = "Bookmarked";
						}
					}

					if (!_selectedProjectFromDropdown.bookmarks) {
						_selectedProjectFromDropdown.bookmarks = [];
					}

					var id;
					if (Array.isArray(parsedResponse) && parsedResponse.length > 0) {
						id = parsedResponse[0].guid;
					}

					_selectedProjectFromDropdown.bookmarks.push({
						bookmark: true,
						date: data.date,
						id: id,
						name: bookmarkData.name,
						type: data.type,
						url: bookmarkData.url
					});

					bookmarkButton.classList.add(_CLASS_BOOKMARKED);
					return;
				}
				saveButton.classList.remove(_CLASS_BUTTON_DISABLED);
				return;
			};
			_bindSuccessContainer();
			request.send(JSON.stringify([bookmarkData]));
		}

		function _hideAddToProjectSection() {
			if (addToProjectSection) {
				addToProjectSection.classList.add(_CLASS_HIDE);
				mainSection.classList.remove(_CLASS_HIDE);
				if (!saveButton.classList.contains(_CLASS_BUTTON_DISABLED)) {
					saveButton.classList.add(_CLASS_BUTTON_DISABLED);
				}
			}
		}

		function _toggleDropdown() {
			var dropdownContainer = assetItem.querySelector("." + _CLASS_PROJECT_DROPDOWN_CONTAINER);
			if (dropdownContainer) {
				dropdownContainer.classList.toggle(_CLASS_OPEN);
			}
		}

		function _getProject(projectName) {
			if (projects && Array.isArray(projects)) {
				for (var idx = 0; idx < projects.length; idx++) {
					var project = projects[idx];
					if (project.name === projectName) {
						return project;
					}
				}
			}
		}

		function _handleDropdownSelection(projectName) {
			var dropdownButton = assetItem.querySelector("." + _CLASS_DROPDOWN_BUTTON);
			if (dropdownButton) {
				var dropdownText = dropdownButton.querySelector("span");
				dropdownText.innerHTML = projectName;
				_selectedProjectFromDropdown = _getProject(projectName);
				_toggleDropdown();
				if (saveButton) {
					saveButton.removeAttribute("disabled");
					saveButton.classList.remove(_CLASS_BTN_DISABLED);
				}
				document.removeEventListener("click", _hideDropdown, false);
			}
		}

		var _hideDropdown = function(evt) {
			if (!evt.target.closest("." + _CLASS_DROPDOWN_LIST)) {
				_toggleDropdown();
				document.removeEventListener("click", _hideDropdown, false);
				evt.stopPropagation();
			}
		};

		function _bindSuccessContainer() {
			var doneButton = assetItem.querySelector("." + _CLASS_DONE_BUTTON);
			var viewProjectButton = assetItem.querySelector("." + _CLASS_VIEW_PROJECT_BUTTON);
			var projectSelection = assetItem.querySelector("." + _CLASS_PROJECT_SELECTION);

			if (!saveButton.classList.contains(_CLASS_BUTTON_DISABLED)) {
				saveButton.classList.add(_CLASS_BUTTON_DISABLED);
			}

			if (doneButton && viewProjectButton) {
				doneButton.onclick = function() {
					addToProjectSection.classList.add(_CLASS_HIDE);
					mainSection.classList.remove(_CLASS_HIDE);
					successContainer.classList.add(_CLASS_HIDE);
					projectSelection.classList.remove(_CLASS_HIDE);
				};

				viewProjectButton.onclick = function() {
					if (_selectedProjectFromDropdown) {
						window.location = "/projects/" + _selectedProjectFromDropdown.id;
					}
				};
			}
		}

		function _bindProjectDropdownButton() {
			var dropdownButton = assetItem.querySelector("." + _CLASS_DROPDOWN_BUTTON);
			var dropdownText;
			if (dropdownButton) {
				dropdownText = dropdownButton.querySelector("span");
				dropdownButton.onclick = function() {
					setTimeout(function() {
						document.addEventListener("click", _hideDropdown, false);
					}, 0);
					_toggleDropdown();
				};
			}
		}

		function _bindDropdownList() {
			var dropdownList = assetItem.querySelector("." + _CLASS_DROPDOWN_LIST);
			if (dropdownList) {
				var selections = dropdownList.querySelectorAll("button");
				if (selections && selections.length > 0) {
					for (var idx = 0; idx < selections.length; idx++) {
						var selection = selections[idx];
						selection.onclick = function() {
							var projectName = this.innerHTML;
							_handleDropdownSelection(projectName);
						};
					}
				}
			}
		}
	}

	function _bindLikeButton(mountNodeId, likeButton, idx) {
		likeButton.onclick = function() {
			var guid = this.dataset.guid;
			var likeCount = this.querySelector("." + _CLASS_LIKE_COUNT);

			var url = _COMMUNITY_V1_API + guid + "/likes";
			var data = {};
			var request = new XMLHttpRequest();
			var likes;
			var entries;
			var entry;

			if (showDrillin) {
				entry = drillinEntry;
			} else if (mountNodeId === _ID_SIDEMENU_RECENT_RESULTS) {
				entry = recentEntries[idx];
			} else if (mountNodeId === _ID_DOCS_TOC_ENTRIES) {
				entry = docTOC[idx];
			} else if (mountNodeId === _ID_SIDEMENU_SEARCH_RESULTS) {
				entry = searchResults[idx];
			} else if (mountNodeId === _ID_HELP_RESULTS) {
				entry = helpEntry[0];
			}

			var title = entry.fullName ? entry.fullName : entry.label;

			if (!this.classList.contains("liked")) {
				title = entry.fullName ? entry.fullName : entry.label;

				data.type = entry.type;

				request.open("POST", url, true);


				request.setRequestHeader("Content-type", "application/json");
				request.onload = function() {
					if (request.status === 200) {
						var parsedResponse = request.responseText;
						if (parsedResponse) {
							try {
								parsedResponse = JSON.parse(parsedResponse);
							} catch (err) {
								console.warn(new Error("Error: unable to parse response as JSON"));
								return;
							}
						}
					}
					return;
				};
				this.classList.toggle("liked");
				likes = parseInt(likeCount.innerHTML, 10) + 1;
				likeCount.innerHTML = likes;
				request.send(JSON.stringify(data));
				_trackLike(title, entry.type);

				if (entry) {
					entry.userHasLiked = true;
					entry.likes = likes;
				}
			} else {
				request.open("DELETE", url, true);
				request.setRequestHeader("Content-type", "application/json");
				request.onload = function() {
					if (request.status !== 204) {
						console.warn(new Error("Error: unable to unlike resource"));
					}
				};
				this.classList.toggle("liked");
				likes = parseInt(likeCount.innerHTML, 10) - 1;
				likeCount.innerHTML = likes;
				request.send();
				_trackLike(title, entry.type, true);

				if (entry) {
					entry.userHasLiked = false;
					entry.likes = likes;
				}
			}
		};
	}

	function _toggleConfirmDeleteBookmark(assetItem) {
		if (assetItem) {
			var deleteButton = assetItem.querySelector("." + _CLASS_DELETE_BOOKMARK_BTN);
			var confirmContainer = assetItem.querySelector("." + _CLASS_CONFIRM_DELETE_CONTAINER);
			var assetContent = assetItem.querySelector("." + _CLASS_ASSET_CONTENT);

			if (deleteButton) {
				deleteButton.onclick = function() {
					assetContent.classList.add(_CLASS_HIDE);
					deleteButton.classList.add(_CLASS_HIDE);
					confirmContainer.classList.remove(_CLASS_HIDE);
				};
			}

			if (confirmContainer) {
				var cancelButton = confirmContainer.querySelector("." + _CLASS_CANCEL_DELETE);
				var confirmButton = confirmContainer.querySelector("." + _CLASS_CONFIRM_DELETE);
				var index = confirmContainer.dataset.index;

				if (cancelButton) {
					cancelButton.onclick = function() {
						assetContent.classList.remove(_CLASS_HIDE);
						deleteButton.classList.remove(_CLASS_HIDE);
						confirmContainer.classList.add(_CLASS_HIDE);
					};
				}

				if (confirmButton) {
					confirmButton.onclick = function() {
						if (index) {
							_deleteBookmark(confirmContainer, index);
						}
					};
				}
			}
		}
	}

	function _deleteBookmark(confirmContainer, index) {
		var request = new XMLHttpRequest();
		var url = _PROJECT_API + projectSelected.id + "/assets";
		var bookmarkContainer = document.getElementsByClassName(_CLASS_BOOKMARK_CONTAINER);
		var deleteContent = confirmContainer.querySelector("." + _CLASS_DELETE_CONTENT);
		var loader = confirmContainer.querySelector("." + _CLASS_LOADER);

		request.open("DELETE", url, true);
		request.setRequestHeader("Content-Type", "application/json");

		var payload = [{
			assetId: projectSelected.bookmarks[index].id,
			type: "bookmark/community-v1"
		}];

		request.onload = function() {
			if (request.status === 200) {
				var parsedResponse = request.responseText;
				if (parsedResponse) {
					try {
						parsedResponse = JSON.parse(parsedResponse);
					} catch (err) {
						console.warn(new Error("Error: unable to parse response as JSON"));
						return;
					}
				}
				projectSelected.bookmarks.splice(index, 1);
				var bookmarkNode = document.querySelector("#" + _ID_BOOKMARK_ENTRIES);
				_clearResults(bookmarkNode);
				Render.asset({
					mountNodeId: _ID_BOOKMARK_ENTRIES,
					bookmark: true
				}, projectSelected.bookmarks);
				return;
			}

			deleteContent.classList.remove(_CLASS_HIDE);
			loader.classList.add(_CLASS_HIDE);
			return;
		};

		deleteContent.classList.add(_CLASS_HIDE);
		loader.classList.remove(_CLASS_HIDE);
		request.send(JSON.stringify(payload));
	}

	function _reRenderEntries(options) {
		if (showDrillin) {
			var entries;
			var mountNodeId;
			if (currentView === _VIEW.RECENT && drillinEntry.type !== _DOC_TYPE) {
				entries = recentEntries;
				mountNodeId = _ID_SIDEMENU_RECENT_RESULTS;
			} else if (currentView === _VIEW.RECENT && drillinEntry.type === _DOC_TYPE) {
				entries = helpEntry;
				mountNodeId = _ID_HELP_RESULTS;
			} else if (currentView === _VIEW.SEARCH) {
				_bindSearchScroll();
				entries = searchResults;
				mountNodeId = _ID_SIDEMENU_SEARCH_RESULTS;
			} else if (currentView === _VIEW.TOC) {
				entries = docTOC;
				mountNodeId = _ID_DOCS_TOC_ENTRIES;
			}
			var mountNode = document.getElementById(mountNodeId);
			if (mountNode) {
				_clearResults(mountNode);
			}
			assetIndex = 0;
			Render.asset({ mountNodeId: mountNodeId }, entries);
		}
	}

	function _getDocTOC(mountNodeId) {
		var request = new XMLHttpRequest();
		var url = _COMMUNITY_V1_API + _DOC_TOC_URL;
		var mountNode = document.getElementById(mountNodeId);
		var options = {
			mountNodeId: mountNodeId,
			toc: true
		};
		var searchContainer = document.getElementsByClassName(_CLASS_TOC_VIEW)[0];
		var loader = searchContainer.getElementsByClassName(_CLASS_LOADER)[0];
		if (!docTOC) {
			request.open("GET", url, true);

			request.onload = function() {
				if (request.status === 200) {
					var parsedResponse = request.responseText;
					if (parsedResponse) {
						try {
							parsedResponse = JSON.parse(parsedResponse);
						} catch (err) {
							console.warn(new Error("Error: unable to parse response as JSON"));
							return;
						}
					}
					docTOC = [];
					var _helpEntry = helpEntry[0];
					if (parsedResponse && parsedResponse.toc) {
						docTOC = parsedResponse.toc;
						if (docTOC.length > 0 && docTOC[0] && !docTOC[0].date) {
							docTOC[0].date = helpEntry[0].date;
						}
						if (!_helpEntry.likes && docTOC[0]) {
							_helpEntry.likes = docTOC[0].likes;
							_helpEntry.userHasLiked = docTOC[0].userHasLiked;
							_helpEntry.disableSocial = false;
							_clearResults(document.getElementById(_ID_HELP_RESULTS));
							Render.asset({ mountNodeId: _ID_HELP_RESULTS }, helpEntry);
						}
					}
					loader.classList.add(_CLASS_HIDE);
					_clearResults(mountNode);
					assetIndex = 0;
					Render.asset(options, docTOC);
				}
				return;
			};
			loader.classList.remove(_CLASS_HIDE);
			request.send();
		} else if (mountNodeId === _ID_SIDEMENU_SEARCH_RESULTS) {
			_clearResults(mountNode);
			Render.asset(options, docTOC);
		} else if (!mountNode.hasChildNodes()) {
			_clearResults(mountNode);
			Render.asset(options, docTOC);
		}
	}

	function _getBookmarks() {
		var request = new XMLHttpRequest();
		var url = _COMMUNITY_V1_API + "projectBookmarks";
		var bookmarkContainer = document.getElementsByClassName(_CLASS_BOOKMARK_CONTAINER);
		var loader = bookmarkContainer[0].getElementsByClassName(_CLASS_LOADER)[0];
		var mountNode = document.getElementById(_ID_RECENT_BOOKMARKS);
		var options = {
			mountNodeId: _ID_RECENT_BOOKMARKS,
			bookmark: true,
			disableDel: true
		};

		request.open("GET", url, true);

		request.onload = function() {
			if (request.status === 200) {
				var parsedResponse = request.responseText;
				if (parsedResponse) {
					try {
						parsedResponse = JSON.parse(parsedResponse);
					} catch (err) {
						console.warn(new Error("Error: unable to parse response as JSON"));
						return;
					}
				}

				projects = parsedResponse;

				// decode the html entities in each project name
				for (var idx1 = 0; idx1 < projects.length; idx1++) {
					projects[idx1].name = _unescapeHTMLEntitities(projects[idx1].name);
				}

				var bookmarkEntry = [];
				if (projects && Array.isArray(projects) && projects.length > 0) {
					for (var idx = 0; idx < projects.length; idx++) {
						var project = projects[idx];
						if (project.bookmarks && Array.isArray(project.bookmarks) && project.bookmarks.length > 0) {
							bookmarkEntry.push(project.bookmarks[0]);
							break;
						}
					}
				}
				loader.classList.add(_CLASS_HIDE);
				_clearResults(mountNode);
				Render.asset(options, bookmarkEntry);
			}
			return;
		};
		request.send();
	}

	function _toggleCommunityFilterDropdown() {
		var filterDropDown = document.getElementsByClassName(_CLASS_COMMUNITY_FILTER_DROPDOWN);
		if (filterDropDown) {
			filterDropDown[0].classList.toggle("open");
		}
	}

	function _validateInput(input) {
		if (input && typeof input === "string") {
			return input.replace(/[^a-z0-9 ]/gi, "");
		}
		return input;
	}

	function _communityFilterListener() {
		var filters = document.getElementById("sidemenu-community-filter");
		var recentContainer = document.getElementsByClassName(_CLASS_RECENT_VIEW);
		var serachContainer = document.getElementsByClassName(_CLASS_SEARCH_VIEW);

		if (filters && recentContainer && serachContainer) {
			var tabs = filters.childNodes;
			for (var jdx = 1; jdx < tabs.length; jdx++) {
				var tab = tabs[jdx];

				/* eslint-disable */
				tab.onclick = function(evt) {
					var options = {
						mountNodeId: _ID_SIDEMENU_SEARCH_RESULTS,
					};

					if (selectedFilterTab === evt.target) {
						selectedFilterTab.classList.remove("selected");
						selectedFilterTab = null;
						_toggleCommunityFilterDropdown();
						if (!query) {
							_toggleRecentView(true);
						} else {
							options.getDocs = true;
							communityApi.clearBookmarks();
							communityApi.reload(options);
						}
						return
					}

					if (selectedFilterTab && selectedFilterTab.classList.length > 0) {
						selectedFilterTab.classList.remove("selected");
					}
					selectedFilterTab = evt.target;
					selectedFilterTab.classList.add("selected");
					currentView = _VIEW.SEARCH;
					_updateView();

					var filter = selectedFilterTab.dataset.filter;
					if (filter) {
						options.type = filter;
					}

					if (filter === _DOC_TYPE) {
						if (!query) {
							currentView = _VIEW.TOC;
							_updateView();
							_getDocTOC(_ID_DOCS_TOC_ENTRIES);
							_toggleCommunityFilterDropdown();
							communityApi.clearBookmarks();
							return;
						} else {
							options.getDocs = true;
						}					
					}
					options.limit = 5;

					_toggleCommunityFilterDropdown();
					communityApi.clearBookmarks();
					communityApi.reload(options);
				};
				/* eslint-enable */
			}
		}
	}

	function _communitySearchListener() {
		var searchInput = document.getElementById(_ID_SIDEMENU_SEARCH);
		var recentContainer = document.getElementsByClassName(_CLASS_RECENT_VIEW);
		var searchContainer = document.getElementsByClassName(_CLASS_SEARCH_VIEW);
		var stackExchange = document.getElementsByClassName(_CLASS_STACK_EXCHANGE_CONTAINER);

		function _finishTyping(input) {
			var newQuery = _validateInput(input.value.trim());
			var filter;
			if (newQuery && newQuery.length === 0) {
				query = "";
				return;
			}

			if (newQuery === query) {
				return;
			}

			if (selectedFilterTab) {
				filter = selectedFilterTab.dataset.filter;
			}

			query = newQuery;

			if (!query && filter === _DOC_TYPE) {
				_getDocTOC(_ID_SIDEMENU_SEARCH_RESULTS);
				return;
			}

			var options = {
				mountNodeId: _ID_SIDEMENU_SEARCH_RESULTS,
				limit: 5,
				query: query
			};

			if (!(filter === _DOC_TYPE)) {
				options.getDocs = true;
			}

			if (filter) {
				options.type = filter;
			}

			if (searchContainer && searchContainer[0].classList.contains(_CLASS_HIDE)) {
				searchContainer.classList.remove(_CLASS_HIDE);
				recentContainer.classList.add(_CLASS_HIDE);
			}
			communityApi.clearBookmarks();
			communityApi.reload(options);
		}

		if (searchInput && recentContainer && searchContainer) {
			var typingTimer;
			var typingInterval = 350;

			searchInput.addEventListener("input", function() {
				if (searchInput.value.length > 0) {
					recentContainer[0].classList.add(_CLASS_HIDE);
					searchContainer[0].classList.remove(_CLASS_HIDE);
					stackExchange[0].classList.add(_CLASS_HIDE);
				}
				// else {
				// 	recentContainer[0].classList.remove(_CLASS_HIDE);
				// 	searchContainer[0].classList.add(_CLASS_HIDE);
				// 	if (selectedFilterTab)	{
				// 		selectedFilterTab.classList.remove("selected");
				// 	}
				// 	stackExchange[0].classList.add(_CLASS_HIDE);
				// }
			});

			searchInput.onkeyup = function() {
				if (typingTimer) {
					clearTimeout(typingTimer);
				}

				if (currentView !== _VIEW.SEARCH) {
					currentView = _VIEW.SEARCH;
					_updateView();
				}

				typingTimer = setTimeout(function() {
					_finishTyping(searchInput);
				}, typingInterval);
			};

			searchInput.onkeydown = function() {
				clearTimeout(typingTimer);
			};
		}
	}

	function _bindBackButton() {
		var communityMenu = document.getElementById(_ID_COMMUNITY_MENU);
		if (!communityMenu) {
			return;
		}
		var navContainers = communityMenu.querySelectorAll("." + _CLASS_NAV_CONTAINER);
		if (navContainers) {
			for (var idx = 0; idx < navContainers.length; idx++) {
				var backButton = navContainers[idx].querySelector(".button--back");
				var searchInput = document.getElementById(_ID_SIDEMENU_SEARCH);
				backButton.onclick = function() {
					query = "";
					searchInput.value = "";
					if (selectedFilterTab && selectedFilterTab.classList.length > 0) {
						selectedFilterTab.classList.remove("selected");
						selectedFilterTab = "";
					}
					assetIndex = 0;
					switch (currentView) {
					case _VIEW.BOOKMARKS:
						projectSelected = null;
						currentView = _VIEW.PROJECTS;
						break;
					case _VIEW.PROJECTS:
						currentView = _VIEW.RECENT;
						break;
					case _VIEW.SEARCH:
						_removeSearchScroll();
						currentView = _VIEW.RECENT;
						break;
					case _VIEW.TOC:
						currentView = _VIEW.RECENT;
						break;
					default:
						break;
					}
					_updateView();
				};
			}
		}
	}

	function _bindFilterIcon() {
		// Attach listener to the community filter icon
		var communityMenu = document.getElementById(_ID_COMMUNITY_MENU);
		if (!communityMenu) {
			return;
		}

		var communityFilterIcon = communityMenu.querySelector("." + _CLASS_FILTER_ICON);
		if (communityFilterIcon) {
			communityFilterIcon.addEventListener("click", function() {
				_toggleCommunityFilterDropdown();
			});
		}
	}

	function _bindCloseButton() {
		var closeButton = document.getElementsByClassName(_CLASS_MENU_CLOSE_BUTTON);
		var makerButton = document.getElementsByClassName(_CLASS_MAKER_BTN);
		if (closeButton && makerButton) {
			closeButton[0].onclick = function() {
				makerButton[0].click();
			};
		}
	}

	function _trackLike(title, type, isUnlike) {
		if (window.analytics && title) {
			var action = isUnlike ? "unliked" : "liked";
			window.analytics.track("community_content", {
				type: type,
				action: action,
				action_context: "community card",
				title: title
			});
		}
	}

	function _trackSearch(_query) {
		if (window.analytics && _query) {
			window.analytics.track("community_content", {
				action: "search",
				action_context: "maker palette",
				query: _query
			});
		}
	}

	function _trackCardClick(asset) {
		if (window.analytics && asset) {
			window.analytics.track("community_content", {
				action: "click",
				action_context: "community card detail",
				id: asset.id,
				source: asset.source,
				title: asset.fullName || asset.label,
				type: asset.type
			});
		}
	}

	function _loadCommunityContent() {
		_getBookmarks();
		var options = {
			mountNodeId: _ID_SIDEMENU_RECENT_RESULTS,
			limit: 1,
			recent: true
		};
		_reload(options);
		Render.asset({ mountNodeId: _ID_HELP_RESULTS }, helpEntry);
	}

	function _getCurrentProject() {
		var path = window.location.pathname;
		var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;
		var guid = path.match(regex);
		if (guid && projects) {
			for (var key in projects) {
				if (projects[key].id === guid[0]) {
					return projects[key];
				}
			}
		}
	}

	function _loadYoutubeIframeAPI() {
		var tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	function _Render() {

		function _renderAddToProjectSection(assetNode, renderData) {
			if (assetNode) {
				var mountNode = assetNode.getElementsByClassName(_CLASS_ADD_TO_PROJECT_MOUNT);
				if (mountNode) {
					var addToProjectSection;
					var data = JSON.parse(JSON.stringify(renderData));

					if (data.type === _DOC_TYPE) {
						data.small = true;
					}

					/* eslint-disable */
					dust.render('src/templates/nav/v2/partials/add-to-project-section', data, function(err, out) {
						if (err) {
							console.warn(err);
							return;
						}
						addToProjectSection = out;
					});
					/* eslint-enable */
					mountNode[0].innerHTML = addToProjectSection;
				}
			}
		}

		function _renderAsset(options, renderData) {
			var mountNodeId = options.mountNodeId;
			var mountNode = document.getElementById(mountNodeId);
			var bindAssetOption = {};
			var template;

			if (renderData && renderData.length > 0) {
				var data = JSON.parse(JSON.stringify(renderData));
				/* eslint-disable */
				for (var i=0; i < data.length; i++) {
					data[i].index = i + assetIndex;

					if (mountNodeId === _ID_SIDEMENU_SEARCH_RESULTS || mountNodeId === _ID_SIDEMENU_RECENT_RESULTS) {
						data[i].sideMenu = true;
					}

					if (data[i].type === _DOC_TYPE) {
						template = _ASSET_SM_TEMPLATE;
						data[i].projects = projects;
					} else if (data[i].type === _PROJECT_TYPE || options.bookmark) {
						template = _ASSET_SM_TEMPLATE;
						data[i].disableSocial = true;
					} else {
						template = _ASSET_TEMPLATE;
						data[i].projects = projects;
					}

					if (options.disableDel) {
						data[i].disableDel = true;
					}

					dust.render(template, data[i], function(err, out) {
						if (err) {
							console.warn(err);
							return;
						}

						if (options.featured) {
							mountNode.insertAdjacentHTML("afterbegin", out);
						} else {
							mountNode.insertAdjacentHTML("beforeend", out);
						}
					});
					/* eslint-enable */
				}

				_bindAssets(data, options);
				assetIndex += data.length;

				if ((cloudantBookmark || exchangeBookmark) && options.mountNodeId.indexOf("main") > -1) {
					var loadMore = document.getElementsByClassName("load-more-container");
					loadMore[0].classList.remove(_CLASS_HIDE);
				}
			} else if (options.bookmark && renderData && renderData.length === 0) {
				mountNode.innerHTML = "<div class='no-bookmarks'>You don't have any bookmarks</div>";
			} else if (!cloudantBookmark && !exchangeBookmark && !options.append) {
				mountNode.innerHTML = "<div class='no-results'><div>No results found.</div>" +
					"<div class='different-keyword'>Try a different keyword.</div></div>";
				document.getElementById(_ID_SEARCH_SCROLL_LOADER).classList.add(_CLASS_HIDE);
			}


			if (!cloudantBookmark && !exchangeBookmark) {
				document.getElementById(_ID_SEARCH_SCROLL_LOADER).classList.add(_CLASS_HIDE);
			}
		}

		function _renderDrillin(data) {
			var mountNode = document.getElementsByClassName(_CLASS_EXPANDED_VIEW);
			if (mountNode) {
				_removeSearchScroll();
				_clearResults(mountNode[0]);
				var drillinTemplate;
				var renderData = JSON.parse(JSON.stringify(data));
				/* eslint-disable */

				if (data.type === _DOC_TYPE) {
					renderData.url = _DOC_CONTENT + data.href;
				}

				data.projects = projects;
				dust.render('src/templates/nav/v2/partials/community-drillin', renderData, function(err, out) {
					if (err) {
						console.warn(err);
						return;
					}
					drillinTemplate = out;
				});
				/* eslint-enable */

				if (data.type === _DOC_TYPE && !data.loaded) {
					_getDocContent(drillinEntry.href);
				}


				// Dataset, tutorials, articles don't have content that needs to he parsed
				if (!data.content) {
					mountNode[0].innerHTML += drillinTemplate;
				} else {
					var parser = new DOMParser();
					var doc = parser.parseFromString(drillinTemplate, "text/html");
					var drillin = doc.getElementById(_ID_COMMUNITY_DRILLIN);
					var drillinContent = doc.querySelector("." + _CLASS_DRILLIN_CONTENT);
					if (drillinContent && drillinContent.nodeType === 1) {
						drillinContent.appendChild(data.content);
					}
					var loader = doc.getElementsByClassName(_CLASS_LOADER)[0];
					loader.classList.add(_CLASS_HIDE);
					mountNode[0].innerHTML = drillin.outerHTML;
				}

				// var expandButton = mountNode[0].querySelector("." + _CLASS_ICON_EXPAND);
				// if (expandButton) {
				// 	expandButton.onclick = function() {
				// 		Render.modal(data);
				// 	};
				// }

				var _drillin = document.getElementById(_ID_COMMUNITY_DRILLIN);
				if (_drillin) {
					_bindBookmarkSection(_drillin, data);
				}

				var likeButton = mountNode[0].querySelector("." + _CLASS_LIKE_BUTTON);
				if (likeButton) {
					_bindLikeButton(null, likeButton);
				}
			}

			var backButton = document.querySelector("." + _CLASS_DRILLIN_NAVIGATION + " a");
			if (backButton) {
				backButton.onclick = function() {
					_reRenderEntries();
					_toggleDrillin();
				};
			}
		}

		function _renderModal(options) {
			var mountNode = document.getElementById(_ID_MODAL_MOUNT);
			if (mountNode) {
				if (modalOpenedId && modalOpenedId === options.id) {
					_toggleModal(options);
					return;
				}

				modalOpenedId = options.id;
				_clearResults(mountNode);

				if (options.videoId) {
					/* eslint-disable */
					dust.render("src/templates/nav/v2/partials/community-video-modal", options, function(err, out) {
						if (err) {
							console.warn(err);
							return;
						}

						mountNode.innerHTML += out;
					});
					/* eslint-enable */

					/* eslint-disable */
					if (YT) {
						player = new YT.Player("community-video-mount", {
							height: "390",
							width: "640",
							videoId: options.videoId,
							playerVars: { "autoplay": 1 }
						});
					}
					/* eslint-enable */

					_bindModalCloseButton();
				} else {
					/* eslint-disable */
					dust.render("src/templates/nav/v2/partials/community-modal", options, function(err, out) {
						if (err) {
							console.warn(err);
							return;
						}

						mountNode.innerHTML += out;
					});
					/* eslint-enable */
				}

				_toggleModal(options);

				var backButton = mountNode.querySelector("." + _CLASS_COMMUNITY_MODAL_NAVIGATION + " a");
				if (backButton) {
					backButton.onclick = function() {
						_toggleModal();
					};
				}

				var modalContainer = mountNode.querySelector("." + _CLASS_COMMUNITY_MODAL_CONTAINER);
				if (modalContainer) {
					modalContainer.onclick = function(evt) {
						var target = evt.target;
						if (target.classList.contains(_CLASS_COMMUNITY_MODAL_CONTAINER)) {
							_toggleModal(options);
						}
					};
				}
			}
		}

		return {
			addToProjectSection: _renderAddToProjectSection,
			asset: _renderAsset,
			drillin: _renderDrillin,
			modal: _renderModal
		};
	}

	function _sortEntries(entries) {
		return entries.sort(function(entryA, entryB) {
			var dateA = new Date(entryA.date);
			var dateB = new Date(entryB.date);
			if (dateA > dateB) {
				return -1;
			}

			if (dateA < dateB) {
				return 1;
			}

			return 0;
		});
	}

	function _checkEnvironment() {
		var communityMenu = document.getElementById(_ID_COMMUNITY_MENU);
		if (communityMenu) {
			production = communityMenu.dataset.prod === "true";
		}
	}

	function _throttle(func, wait, options) {
		var args;
		var context;
		var result;
		var timeout;
		var listOfOptions = options;
		var _now = Date.now || function() {
			return new Date().getTime();
		};
		var previous = 0;
		if (!listOfOptions) {
			listOfOptions = {};
		}

		var later = function() {
			previous = listOfOptions.leading === false ? 0 : _now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) {
				context = args = null;
			}
		};

		/* eslint-disable */
		var throttled = function() {
			var now = _now();
			if (!previous && listOfOptions.leading === false) {
				previous = now;
			}
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				result = func.apply(context, args);
				if (!timeout) {
					context = args = null;
				}
			} else if (!timeout && listOfOptions.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};

		throttled.cancel = function() {
			clearTimeout(timeout);
			previous = 0;
			timeout = context = args = null;
		};
		/* eslint-enable */

		return throttled;
	}

	var handleScroll = _throttle(function() {
		var view = document.getElementsByClassName(_CLASS_MIN_VIEW)[0];
		if (view.scrollTop + 91 > view.scrollHeight - view.offsetHeight && !loadingMoreEntries) {
			if (cloudantBookmark || exchangeBookmark) {
				loadingMoreEntries = true;
				var options = {
					append: true,
					getDocs: true,
					limit: 5,
					mountNodeId: _ID_SIDEMENU_SEARCH_RESULTS,
					query: query
				};
				if (selectedFilterTab && selectedFilterTab.dataset && selectedFilterTab.dataset.filter) {
					var filter = selectedFilterTab.dataset.filter;
					options.type = filter;
					options.getDocs = false;
				}
				_searchMoreEntries(options);
			} else {
				document.getElementById(_ID_SEARCH_SCROLL_LOADER).classList.add(_CLASS_HIDE);
			}
		}
	}, 1000);

	function _bindSearchScroll() {
		var view = document.getElementsByClassName(_CLASS_MIN_VIEW)[0];
		view.addEventListener("scroll", handleScroll, false);
	}

	function _removeSearchScroll() {
		var view = document.getElementsByClassName(_CLASS_MIN_VIEW)[0];
		view.removeEventListener("scroll", handleScroll, false);
	}

	function _init() {
		_loadYoutubeIframeAPI();
		_checkEnvironment();
		_bindCloseButton();
		_bindBackButton();
		_bindFilterIcon();
		_bindViewAllButtons();
		_communitySearchListener();
		_communityFilterListener();
		_loadCommunityContent();
	}

	document.addEventListener("DOMContentLoaded", function onLoad() {
		window.communityApi = communityApi;
	});
}());

/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016, 2017. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */


(function() {
	var _ID_CONTENT_NODE = "#contentNode";
	var _ID_TOP_NAV = "dapNav";
	var _ID_PROFILE_MENU = "#dap-profile-menu";
	var _ID_COMMUNITY_MENU = "#dap-community-menu";
	var _ID_SIDE_MENU = "#dap-side-menu";
	var _ID_TITLE_TEXT = "#dap-title-text";
	var _ID_SIDEMENU_RESULTS = "sidemenu-community-results";
	var _ID_SIDEMENU_RECENT_RESULTS = "community-recent-results";

	var _ID_NEW = "#dap-new";
	var _ID_CONTEXT = "#dap-context";
	var _ID_RECENT_ITEMS = "#dap-recent-items";
	var _ID_ACTION_BAR = "#dap-action-bar";
	var _ID_SIGN_IN = "#dap-sign-in";

	var _CLASS_CLOSE_ICON = ".link-close";
	var _CLASS_SIDEMENU_TOGGLE = ".sidemenu-toggle";
	var _CLASS_PROFILE_CONTAINER = ".dap-profile-container";
	var _CLASS_COMMUNITY_CONTAINER = ".dap-community-container";
	var _CLASS_FILTER_INPUT = ".dap-nav-filter input";
	var _CLASS_DROPDOWN_TOGGLE = ".dap-dropdown-toggle";
	var _CLASS_DROPDOWN_MENU = ".dap-dropdown-menu";
	var _CLASS_DROPDOWN_LINK = ".dap-dropdown-link";
	var _CLASS_HEADER_OVERLAY = ".header-overlay";
	var _CLASS_NAV_TITLE = ".dap-nav-title";
	var _CLASS_NAV_TITLE_ICON = ".dap-nav-title-icon";
	var _CLASS_SECONDARY_TITLE = ".dap-secondary-title";
	var _CLASS_SECONDARY_DRILL_IN = ".dap-secondary-drillin";
	var _CLASS_NAV_TITLE_CONTEXT = ".dap-nav-title-context";
	var _CLASS_STACK_EXCHANGE_CONTAINER = "stack-exchange-container";
	var _CLASS_HIDE = "hide";
	var _CLASS_HIDDEN = "hidden";
	var _CLASS_OPEN = "open";
	var _CLASS_DISABLED = "disabled";
	var _CLASS_SELECTED = "selected";

	// Action bar classes
	var _CLASS_ACTION_BAR_ENABLED = "action-bar-enabled";
	var _CLASS_ACTIONS_CONTAINER = "dap-action-bar_actions-container";
	var _CLASS_ACTION_DROPDOWN_BTN = "dap-action-bar_dropdown-button";
	var _CLASS_ACTION_BTN = "dap-action-bar_button";
	var _CLASS_ACTION_BAR_DROPDOWN = "dap-action-bar_dropdown";
	var _CLASS_ACTION_BAR_BREADCRUMBS = "dap-action-bar_breadcrumbs";
	var _CLASS_RHS_ACTIONS_CONTAINER = "dap-action-bar_rhs-actions-container";
	var _CLASS_MAKER_BTN = "dap-action-bar_maker";

	var _ACTION_BAR_CLASS_PREFIX = "dap-action-bar_";

	var _CLASS_TOOLTIP = _ACTION_BAR_CLASS_PREFIX + "tooltip";
	var _CLASS_TOOLTIP_TRIGGER = _ACTION_BAR_CLASS_PREFIX + "tooltip-trigger";

	var _ATTR_ARIA_DESCRIBEDBY = "aria-describedby";
	var _ATTR_ARIA_HIDDEN = "aria-hidden";

	var RECENT_ITEMS = "apsx.recent";
	var RECENT_PROJECTS = "projects";
	var RECENT_NOTEBOOKS = "notebooks";
	var RECENT_TOGGLE_OPEN = "toggle.open";
	var SIDEMENU_OPENED = "apsx.sidemenu.opened";
	var QUICK_START_GUIDE = "apsx.quickstart";

	var _LISTENER_ID_FILTER = "filter";
	var _LISTENER_ID_MENU = "menu";
	var _LISTENER_ID_ACTIONBAR = "actionbar";

	var _listeners = {};
	_listeners[_LISTENER_ID_MENU] = [];
	_listeners[_LISTENER_ID_FILTER] = [];
	_listeners[_LISTENER_ID_ACTIONBAR] = {};
	_listeners[_LISTENER_ID_ACTIONBAR] = {
		breadcrumbs: null,
		actions: null
	};

	var ACTION_BAR_IDS = {
		add: "add",
		change: "change",
		duplicate: "duplicate",
		download: "download",
		delete: "delete",
		fork: "fork"
	};

	var PAGES = {
		PROJECTS: "projects",
		PROJECT: "project",
		NOTEBOOK: "notebook",
		NOTEBOOK_PREVIEW: "notebook_preview"
	};

	var ACTION_BAR_CONSTANTS = {
		ACCOUNT_SETTINGS: "Go To Account Settings",
		CREATE_PROJECT: "Create Project",
		CREATE_SPARK: "Create Spark",
		CREATE_NOTEBOOK: "Create Notebook",
		CHANGE_SERVICE: "Change Service",
		DELETE: "Delete",
		ADD_COLLABORATOR: { id: ACTION_BAR_IDS.add, label: "Add Collaborator" },
		DUPLICATE_NOTEBOOK: { id: ACTION_BAR_IDS.duplicate, label: "Duplicate Notebook" },
		DOWNLOAD_NOTEBOOK: { id: ACTION_BAR_IDS.download, label: "Download Notebook" },
		DELETE_NOTEBOOK: { id: ACTION_BAR_IDS.delete, label: "Delete Notebook" },
		DUPLICATE_NOTEBOOKS: { id: ACTION_BAR_IDS.duplicate, label: "Duplicate Notebooks" },
		DOWNLOAD_NOTEBOOKS: { id: ACTION_BAR_IDS.download, label: "Download Notebooks" },
		DELETE_NOTEBOOKS: { id: ACTION_BAR_IDS.delete, label: "Delete Notebooks" },
		DUPLICATE_ASSET: { id: ACTION_BAR_IDS.duplicate, label: "Duplicate Asset" },
		DOWNLOAD_ASSET: { id: ACTION_BAR_IDS.download, label: "Download Asset" },
		DELETE_ASSET: { id: ACTION_BAR_IDS.delete, label: "Delete Asset" },
		DUPLICATE_ASSETS: { id: ACTION_BAR_IDS.duplicate, label: "Duplicate Assets" },
		DOWNLOAD_ASSETS: { id: ACTION_BAR_IDS.download, label: "Download Assets" },
		DELETE_ASSETS: { id: ACTION_BAR_IDS.delete, label: "Delete Assets" },
		DOWNLOAD_PROJECT: { id: ACTION_BAR_IDS.download, label: "Download Project" },
		DOWNLOAD_PROJECTS: { id: ACTION_BAR_IDS.download, label: "Download Projects" },
		DELETE_PROJECT: { id: ACTION_BAR_IDS.delete, label: "Delete Project" },
		DELETE_PROJECTS: { id: ACTION_BAR_IDS.delete, label: "Delete Projects" },
		DELETE_CONNECTION: { id: ACTION_BAR_IDS.delete, label: "Delete Connection" },
		DELETE_CONNECTIONS: { id: ACTION_BAR_IDS.delete, label: "Delete Connections" },
		DELETE_JOB: { id: ACTION_BAR_IDS.delete, label: "Delete Job" },
		DELETE_JOBS: { id: ACTION_BAR_IDS.delete, label: "Delete Jobs" },
		DELETE_COLLABORATOR: { id: ACTION_BAR_IDS.delete, label: "Delete Collaborator" },
		DELETE_COLLABORATORS: { id: ACTION_BAR_IDS.delete, label: "Delete Collaborators" },
		EDIT_NOTEBOOK: "Edit This Notebook",
		FORK_PROJECT: { id: ACTION_BAR_IDS.fork, label: "Fork Project" },
		FORK_NOTEBOOK: { id: ACTION_BAR_IDS.fork, label: "Fork Notebook" },
		SHARE_NOTEBOOK: "Share Notebook",
		STOP_KERNEL: "Stop Kernel",
		STOP_KERNELS: "Stop Kernels",
		SCHEDULE_JOB: "Schedule a Job",
		FORCE_UNLOCK: "Force Unlock",
		LOCKED_BY_USER: "This Notebook is locked by user",
		VIEW_PROJECT_INFO: "View Project Info",
		VIEW_NOTEBOOK_INFO: "View Notebook Info",
		VIEW_JOB_INFO: "View Job Info",
		VIEW_CONNECTION_INFO: "View Connection Info",
		VIEW_SERVICE_INFO: "View Service Info"
	};

	var sidemenuIdMap = {
		info: "dap-info-sidemenu",
		activity: "dap-activity-sidemenu",
		comments: "dap-comments-sidemenu",
		data: "dap-data-sidemenu",
		maker: "dap-community-menu"
	};

	var actionBarState = {
		activeSidemenuId: null,
		activeButton: null
	};

	var actionBarObj;

	var actionBarApi = {
		breadcrumbs: null,
		setVisible: function(visible) {
			_setVisible(visible);
		},
		setBreadcrumbs: function(breadcrumbs) {
			actionBarApi.breadcrumbs = breadcrumbs;
			_bindBreadcrumbs();
		},
		addBreadcrumbListener: function(callback) {
			_listeners[_LISTENER_ID_ACTIONBAR].breadcrumbs = callback;
		},
		addActionListener: function(actions) {
			_listeners[_LISTENER_ID_ACTIONBAR].actions = actions;
		},
		setRHSVisible: function(visible) {
			_setRHSVisible(visible);
		},
		openRHSPanel: function(panelId) {
			_openRHSPanel(panelId);
		},
		closeRHSPanel: function() {
			_closeRHSPanel();
		},
		addRHSListener: function(rhsActions) {
			_listeners[_LISTENER_ID_ACTIONBAR].rhsActions = rhsActions;
		},
		updateContext: function(context) {
			actionBarApi.context = context;
		},
		update: function(params) {
			_update(params);
		},
		context: null,
		page: null,
		openedRHSPanel: null,
		openQuickStartGuide: false
	};

	var navApi = {
		addMenuChangeListener: function(callback) {
			_listeners[_LISTENER_ID_MENU].push(callback);
		},
		removeMenuChangeListener: function(callback) {
			_removeFromArray(_listeners[_LISTENER_ID_MENU], callback);
		},
		setTitle: function(title) {
			_setTitle(title);
		},
		setDrillIn: function(drillIn) {
			_setDrillIn(drillIn);
		},
		setSignInTarget: function(target) {
			_setSignInTarget(target);
		},
		pushRecentProject: function(projectName, guid) {
			_pushRecent(RECENT_PROJECTS, projectName, guid);
		},
		deleteRecentProject: function(guid) {
			_deleteRecent(RECENT_PROJECTS, guid);
		},
		pushRecentNotebook: function(notebookName, guid, pguid) {
			_pushRecent(RECENT_NOTEBOOKS, notebookName, guid, pguid);
		},
		deleteRecentNotebook: function(guid) {
			_deleteRecent(RECENT_NOTEBOOKS, guid);
		},
		recentProjects: function() {
			return _listRecent(RECENT_PROJECTS);
		},
		recentNotebooks: function() {
			return _listRecent(RECENT_NOTEBOOKS);
		},
		resetNotificationCounter: function() {
			_setNotificationsCounter(0);
		},
		actionBar: actionBarApi
	};

	var pendingTooltips = {};
	var breadcrumbResizeHandler;

	function _removeFromArray(arr, item) {
		var idx = arr.indexOf(item);
		if (idx >= 0) {
			arr.splice(idx, 1);
		}
	}

	function _setVisible(visible) {
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		var contentNode = document.querySelector(_ID_CONTENT_NODE);
		if (!actionBar) {
			return;
		}

		if (visible) {
			actionBar.classList.remove(_CLASS_HIDE);
			if (contentNode) {
				contentNode.classList.add(_CLASS_ACTION_BAR_ENABLED);
			}
		} else {
			actionBar.classList.add(_CLASS_HIDE);
			if (contentNode) {
				contentNode.classList.remove(_CLASS_ACTION_BAR_ENABLED);
			}
		}
	}

	function _update(params) {
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		if (!actionBar) {
			return;
		}

		var actionsContainer = actionBar.querySelector("." + _CLASS_ACTIONS_CONTAINER);
		if (params.actions && actionsContainer && actionsContainer.hasChildNodes()) {
			_updateButtons(params.actions, actionsContainer);
		}

		var rhsActionsContainer = actionBar.querySelector("." + _CLASS_RHS_ACTIONS_CONTAINER);
		if (params.rhs && rhsActionsContainer && rhsActionsContainer.hasChildNodes()) {
			_updateButtons(params.rhs, rhsActionsContainer);
		}

		_updateTooltips();
	}

	function _initActionBarButtons() {
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		var contentNode = document.querySelector(_ID_CONTENT_NODE);
		if (actionBar) {
			actionBar.classList.remove(_CLASS_HIDE);
			if (contentNode && !actionBar.classList.contains(_CLASS_HIDE)) {
				contentNode.classList.add(_CLASS_ACTION_BAR_ENABLED);
			}
			_updateTooltips();
			_bindActionBar();
		}
	}

	function _updateButtons(params, buttonsContainer) {
		var buttonContainers = buttonsContainer.childNodes;
		for (var idx = 0; idx < buttonContainers.length; idx++) {
			var buttonContainer = buttonContainers[idx];
			var button = buttonContainer.firstElementChild;
			var actionId = button.dataset.action;

			var param = params[actionId];
			if (param) {
				if (param.hasOwnProperty("visible")) {
					if (param.visible) {
						buttonContainer.classList.remove(_CLASS_HIDE);
					} else {
						buttonContainer.classList.add(_CLASS_HIDE);
					}
				}

				if (param.hasOwnProperty("enabled")) {
					if (param.enabled) {
						buttonContainer.classList.remove(_CLASS_DISABLED);
					} else {
						buttonContainer.classList.add(_CLASS_DISABLED);
					}
				}

				if (param.hasOwnProperty("tooltip")) {
					if (param.tooltip === null) {
						param.tooltip = "";
					}
					button.dataset.actionbarTooltip = param.tooltip;
				}
			}
			_updateDropdownItems(buttonContainer, params);
		}
	}

	function _updateDropdownItems(buttonContainer, params) {
		var dropdownItems = buttonContainer.querySelectorAll("." + _CLASS_ACTION_BAR_DROPDOWN + " > li");
		for (var idx = 0; idx < dropdownItems.length; idx++) {
			var item = dropdownItems[idx];
			var actionId = item.dataset.action;
			var param = params[actionId];
			if (param && param.hasOwnProperty("visible")) {
				if (param.visible) {
					item.classList.remove(_CLASS_HIDE);
				} else {
					item.classList.add(_CLASS_HIDE);
				}
			}
		}
	}

	function _updateTooltips() {
		var tooltips = document.getElementsByClassName(_CLASS_TOOLTIP);
		while (tooltips.length > 0) {
			document.body.removeChild(tooltips[0]);
		}

		_updateTooltipsInContainer(_CLASS_ACTIONS_CONTAINER);
		_updateTooltipsInContainer(_CLASS_RHS_ACTIONS_CONTAINER);
		_updateTooltipListeners();
	}

	function _updateTooltipsInContainer(containerClass) {
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		if (!actionBar) {
			return;
		}

		var actionsContainer = actionBar.querySelector("." + containerClass);
		if (actionsContainer && actionsContainer.hasChildNodes()) {
			var buttonContainers = actionsContainer.childNodes;
			for (var idx = 0; idx < buttonContainers.length; idx++) {
				var buttonContainer = buttonContainers[idx];
				var button = buttonContainer.firstElementChild;
				if (button.dataset.hasOwnProperty("actionbarTooltip")) {
					var tooltipId = "dap-action-bar_tooltip-" + button.dataset.action;
					if (button.dataset.actionbarTooltip === "" || buttonContainer.classList.contains(_CLASS_DISABLED)) {
						buttonContainer.classList.remove(_CLASS_TOOLTIP_TRIGGER);
						buttonContainer.removeAttribute(_ATTR_ARIA_DESCRIBEDBY);
					} else {
						buttonContainer.classList.add(_CLASS_TOOLTIP_TRIGGER);
						buttonContainer.setAttribute(_ATTR_ARIA_DESCRIBEDBY, tooltipId);
						document.body.appendChild(_buildTooltip(tooltipId, button.dataset.actionbarTooltip));
					}
				}
			}
		}
	}

	function _buildTooltip(tooltipId, content) {
		var tooltip = document.createElement("div");
		tooltip.id = tooltipId;
		tooltip.className = _CLASS_TOOLTIP;
		tooltip.setAttribute(_ATTR_ARIA_HIDDEN, "true");
		tooltip.innerHTML = "<svg x='0px' y='0px' viewBox='0 0 9.1 16.1' >" +
			"<polyline points='9.1,15.7 1.4,8.1 9.1,0.5  '/>" +
			"<polygon points='8.1,16.1 0,8.1 8.1,0 8.1,1.4 1.4,8.1 8.1,14.7  '/></svg>" +
			"<span>" + content + "</span>";
		return tooltip;
	}

	function _updateTooltipLayout(tooltip, tooltipTrigger) {
		var textWidth = tooltip.querySelector("span").offsetWidth;
		var tooltipStyle = getComputedStyle(tooltip);
		var horizontalPadding = parseFloat(tooltipStyle.paddingLeft) +
				parseFloat(tooltipStyle.paddingRight);
		var tooltipCorrection = 3;
		var tooltipWidth = textWidth + horizontalPadding + tooltipCorrection;
		tooltip.style.width = tooltipWidth + "px";

		var viewportMargin = 5;
		var rightViewportMargin = document.documentElement.clientWidth - viewportMargin;
		var triggerLayout = tooltipTrigger.getBoundingClientRect();
		var tooltipLeft = Math.min(triggerLayout.left, rightViewportMargin - tooltipWidth);
		tooltip.style.left = Math.max(tooltipLeft, viewportMargin) + "px";

		var tooltipHeight = tooltip.clientHeight;
		var pointer = tooltip.querySelector("svg");
		var pointerLayout = pointer.getBoundingClientRect();
		tooltip.style.top = (triggerLayout.bottom + pointerLayout.height) + "px";

		var pointerCorrection = 1;
		pointer.style.left = (triggerLayout.left - tooltip.getBoundingClientRect().left +
				tooltipTrigger.offsetWidth / 2 - pointerLayout.width / 2	 + pointerCorrection) + "px";
	}

	function _updateTooltipListeners() {
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		if (!actionBar) {
			return;
		}

		var tooltipTriggers = actionBar.querySelectorAll("." + _CLASS_TOOLTIP_TRIGGER);
		for (var idx = 0; idx < tooltipTriggers.length; idx++) {
			var tooltipTrigger = tooltipTriggers[idx];
			tooltipTrigger.onmouseover = function() {
				_showTooltipWithDelay(this);
			};
			tooltipTrigger.onmouseleave = function() {
				_setTooltipVisible(this, false);
			};
			tooltipTrigger.onmousedown = function() {
				_setTooltipVisible(this, false);
			};
		}
	}

	function _showTooltipWithDelay(tooltipTrigger) {
		var tooltipId = tooltipTrigger.getAttribute(_ATTR_ARIA_DESCRIBEDBY);
		if (!tooltipId || pendingTooltips[tooltipId]) {
			return;
		}
		pendingTooltips[tooltipId] = setTimeout(function() {
			_setTooltipVisible(tooltipTrigger, true);
		}, 750);
	}

	function _setTooltipVisible(tooltipTrigger, visible) {
		if (tooltipTrigger.classList.contains(_CLASS_SELECTED)) {
			return;
		}
		var tooltipId = tooltipTrigger.getAttribute(_ATTR_ARIA_DESCRIBEDBY);
		if (!tooltipId) {
			return;
		}
		if (!visible) {
			clearTimeout(pendingTooltips[tooltipId]);
			delete pendingTooltips[tooltipId];
		}

		var tooltip = document.getElementById(tooltipId);
		if (tooltip) {
			if (visible) {
				_updateTooltipLayout(tooltip, tooltipTrigger);
			}
			tooltip.setAttribute(_ATTR_ARIA_HIDDEN, !visible);
		}
	}

	function _bindBreadcrumbs() {
		var breadcrumbs = actionBarApi.breadcrumbs;
		if (!breadcrumbs) {
			return;
		}

		var actionBar = document.querySelector(_ID_ACTION_BAR);
		if (actionBar) {
			var breadcrumbContainer = actionBar.getElementsByClassName(_CLASS_ACTION_BAR_BREADCRUMBS)[0];
			document.removeEventListener("click", _hideBreadcrumbDropdown);
			_drawAndFitBreadcrumbs(breadcrumbContainer, breadcrumbs);

			var ellipsis = breadcrumbContainer.querySelector(".dap-action-bar_breadcrumb-ellipsis");
			if (ellipsis) {
				ellipsis.onclick = function() {
					var dropdown = document.querySelector("#dap-action-bar .dap-action-bar_breadcrumb-dropdown");
					if (dropdown) {
						dropdown.classList.add("sticky");
					}
					setTimeout(function() {
						document.addEventListener("click", _hideBreadcrumbDropdown);
					}, 0);
				};
			}

			var drillIns = breadcrumbContainer.querySelectorAll("a");
			if (_listeners[_LISTENER_ID_ACTIONBAR].breadcrumbs && drillIns) {
				for (var jdx = 0; jdx < drillIns.length; jdx++) {
					if (drillIns[jdx]) {
						drillIns[jdx].onclick = _createBreadcrumbHandler(breadcrumbs[jdx]);
					}
				}
			}
		}
	}

	function _hideBreadcrumbDropdown() {
		var dropdown = document.querySelector("#dap-action-bar .dap-action-bar_breadcrumb-dropdown");
		if (dropdown) {
			dropdown.classList.remove("sticky");
		}
		document.removeEventListener("click", _hideBreadcrumbDropdown);
	}

	function _drawAndFitBreadcrumbs(breadcrumbContainer, breadcrumbs) {
		if (breadcrumbs.length < 3) {
			_drawBreadcrumbs(breadcrumbContainer, breadcrumbs, 0);
			return;
		}

		for (var idx = 0; idx < breadcrumbs.length - 1; idx++) {
			_drawBreadcrumbs(breadcrumbContainer, breadcrumbs, idx);
			if (!_isActionBarOverflown()) {
				return;
			}
		}
	}

	function _drawBreadcrumbs(breadcrumbContainer, breadcrumbs, inDropdownNr) {
		var breadcrumbIcon = "<svg class=\"dap-breadcrumb-separator\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"11\" viewBox=\"0 0 6 11\"><path width=\"6\" height=\"11\" d=\"M.7 10.7L0 10l4.6-4.6L0 .7.7 0l5.4 5.4\"><\/path><\/svg>";

		_clearDiv(breadcrumbContainer);
		for (var idx = 0; idx < breadcrumbs.length; idx++) {
			if (idx === 1 && inDropdownNr > 0) {
				breadcrumbContainer.innerHTML = breadcrumbContainer.innerHTML +
						_createBreadcrumbDropdown(breadcrumbs.slice(1, inDropdownNr + 1));
				idx = idx + inDropdownNr - 1;
			} else {
				breadcrumbContainer.innerHTML = breadcrumbContainer.innerHTML +
						"<div class='dap-action-bar_breadcrumb-drillin'>" +
						_createBreadcrumbElement(breadcrumbs[idx]) + "</div>";
			}

			if (idx < breadcrumbs.length - 1) {
				breadcrumbContainer.innerHTML = breadcrumbContainer.innerHTML + breadcrumbIcon;
			}
		}
	}

	function _createBreadcrumbDropdown(breadcrumbModels) {
		var dropdown = "<div class='dap-action-bar_breadcrumb-dropdown-container'>" +
				"<div class='dap-action-bar_breadcrumb-ellipsis'>...</div><div class='dap-action-bar_breadcrumb-dropdown'>" +
				"<svg x='0px' y='0px' viewBox='0 0 16 9' >" +
				"<polyline points='0,9 8,0 16,9'/>" +
				"</svg><ul>";
		for (var idx = 0; idx < breadcrumbModels.length; idx++) {
			dropdown = dropdown + "<li>" + _createBreadcrumbElement(breadcrumbModels[idx]) + "</li>";
		}
		dropdown = dropdown + "</ul></div>";
		return dropdown;
	}

	function _isActionBarOverflown() {
		var actionBarChildren = document.querySelectorAll("#dap-action-bar > div:not(.hidden)");
		if (actionBarChildren.length === 0) {
			return false;
		}
		var rightElement = actionBarChildren[actionBarChildren.length - 1];
		var actionBar = document.getElementById("dap-action-bar");
		return actionBar.getBoundingClientRect().width + 5 < rightElement.getBoundingClientRect().right;
	}

	function _createBreadcrumbElement(breadcrumbModel) {
		var element = "";
		if (breadcrumbModel.hasOwnProperty("url")) {
			element = "<a class='dap-action-bar_breadcrumb-link' href='" + breadcrumbModel.url +
					"'>" + _getTextSecure(breadcrumbModel.title) + "</a>";
		} else {
			element = "<span>" + _getTextSecure(breadcrumbModel.title) + "</span>";
		}
		return element;
	}

	function _createBreadcrumbHandler(breadcrumb) {
		return function(evt) {
			evt.preventDefault();
			_listeners[_LISTENER_ID_ACTIONBAR].breadcrumbs(breadcrumb);
		};
	}

	function _handleActionButtonClick() {
		var buttonContainer = this.parentElement;
		var dropdown = buttonContainer.querySelector("." + _CLASS_ACTION_BAR_DROPDOWN);
		var actionId = this.dataset.action;

		// If there's a dropdown, display dropdown
		if (dropdown) {
			var openDropdown = !buttonContainer.classList.contains(_CLASS_SELECTED);
			_closeAllDropdowns();
			if (openDropdown) {
				buttonContainer.classList.add(_CLASS_SELECTED);
				setTimeout(function() {
					document.addEventListener("click", _closeAllDropdowns, false);
				}, 0);
			}
		} else if (actionId && _listeners[_LISTENER_ID_ACTIONBAR].actions) {
			var actionObj = {};
			actionObj.id = actionId;
			actionObj.context = actionBarApi.context;
			_listeners[_LISTENER_ID_ACTIONBAR].actions(actionObj);
		}
	}

	function _closeAllDropdowns() {
		document.removeEventListener("click", _closeAllDropdowns, false);
		var dropdowns = document.querySelectorAll("." + _CLASS_ACTIONS_CONTAINER + " ." + _CLASS_ACTION_DROPDOWN_BTN);
		for (var idx = 0; idx < dropdowns.length; idx++) {
			dropdowns[idx].parentElement.classList.remove(_CLASS_SELECTED);
		}
	}

	function _handleDropdownItemClick(evt) {
		var actionId = this.dataset.action;
		if (actionId && _listeners[_LISTENER_ID_ACTIONBAR].actions) {
			var actionObj = {};
			actionObj.id = actionId;
			actionObj.context = actionBarApi.context;
			evt.preventDefault();
			evt.stopPropagation();
			_listeners[_LISTENER_ID_ACTIONBAR].actions(actionObj);
		}
		var buttonContainer = this.parentElement.parentElement;
		buttonContainer.classList.toggle(_CLASS_SELECTED);
	}

	function _bindActionBar() {
		// Attach listeners to the action bar
		var actionBarContainer = document.querySelector(_ID_ACTION_BAR);
		if (!actionBarContainer) {
			return;
		}

		var actionsContainer = actionBarContainer.querySelector("." + _CLASS_ACTIONS_CONTAINER);
		if (actionsContainer && actionsContainer.hasChildNodes() && actionsContainer.childNodes) {
			for (var idx = 0; idx < actionsContainer.childNodes.length; idx++) {
				var btnContainer = actionsContainer.childNodes[idx];
				var actionBtn = btnContainer.querySelector("." + _CLASS_ACTION_DROPDOWN_BTN);
				if (actionBtn) {
					_attachDropdownItemClickListeners(actionBtn);
				} else {
					actionBtn = btnContainer.querySelector("." + _CLASS_ACTION_BTN);
				}

				// Bind action bar buttons
				if (actionBtn) {
					actionBtn.onclick = _handleActionButtonClick;
				}
			}
		}

		var rhsActionsContainer = actionBarContainer.querySelector("." + _CLASS_RHS_ACTIONS_CONTAINER);
		if (rhsActionsContainer) {
			if (rhsActionsContainer.hasChildNodes()) {
				var rhsButtons = rhsActionsContainer.childNodes;

				for (var jdx = 0; jdx < rhsButtons.length; jdx++) {
					var btn = rhsButtons[jdx].firstChild;
					btn.onclick = function() {
						var btnActionId = this.dataset.action;
						var btnActionObj = {};
						if (btnActionId && _listeners[_LISTENER_ID_ACTIONBAR].rhsActions) {
							_handleRHSBtnClick(this);
						}
					};
				}
			}
		}
	}

	function _attachDropdownItemClickListeners(actionBarButton) {
		var dropdown = actionBarButton.parentElement.querySelector("." + _CLASS_ACTION_BAR_DROPDOWN);
		if (dropdown) {
			var dropdownButtons = dropdown.childNodes;
			for (var idx = 0; idx < dropdownButtons.length; idx++) {
				dropdownButtons[idx].onclick = _handleDropdownItemClick;
			}
		}
	}

	function _setRHSVisible(visible) {
		var actionBarContainer = document.querySelector(_ID_ACTION_BAR);
		if (!actionBarContainer) {
			return;
		}
		var rhsActionsContainer = actionBarContainer.querySelector("." + _CLASS_RHS_ACTIONS_CONTAINER);
		if (!rhsActionsContainer) {
			return;
		}

		if (visible) {
			rhsActionsContainer.classList.remove("hidden");
		} else {
			rhsActionsContainer.classList.add("hidden");
		}
	}

	function _openRHSPanel(panelId) {
		if (actionBarApi.openedRHSPanel === panelId) {
			return;
		}

		var button = document.querySelector("." + _CLASS_RHS_ACTIONS_CONTAINER +
				" [data-action=" + panelId + "]");
		if (button) {
			_handleRHSBtnClick(button);
		}
	}

	function _closeRHSPanel() {
		if (!actionBarApi.openedRHSPanel) {
			return;
		}
		var button = document.querySelector("." + _CLASS_RHS_ACTIONS_CONTAINER +
				" [data-action=" + actionBarApi.openedRHSPanel + "]");
		if (button) {
			_handleRHSBtnClick(button);
		}
	}

	function _handleRHSBtnClick(btn) {
		var rhsObj = {};
		var sidemenuId;
		var rhsSidemenu;
		var btnActionId = btn.dataset.action;
		var selected = btn.classList.contains(_CLASS_SELECTED);

		function _toggleActionBarSidemenu(menuId) {
			// We will only toggle maker pallete, and just
			// fire event for all other panels - DG
			if (menuId === "dap-community-menu") {
				rhsSidemenu = document.querySelector("#" + menuId);
				var recentResults = document.getElementById(_ID_SIDEMENU_RECENT_RESULTS);
				if (recentResults && !recentResults.hasChildNodes()) {
					window.communityApi.init();
				}
				_trackEvent("navigation", {
					element_type: "button",
					action: "click",
					location_on_ui: "action bar",
					status: "complete"
				});
			}

			if (!btn.classList.contains(_CLASS_SELECTED)) {
				btn.classList.add(_CLASS_SELECTED);
				if (rhsSidemenu) {
					rhsSidemenu.classList.add("open");
				}
			} else {
				btn.classList.remove(_CLASS_SELECTED);
				if (rhsSidemenu) {
					rhsSidemenu.classList.remove("open");
				}
			}
		}

		function _closeExistingMenu() {
			// Close existing sidemenu that's opened
			if (actionBarState.activeSidemenuId || actionBarState.activeSidemenuId === btnActionId) {
				var sidemenuId2 = sidemenuIdMap[actionBarState.activeSidemenuId];
				var rhsSidemenu2 = document.getElementById(sidemenuId2);
				rhsObj = _createRhsObj(actionBarState.activeSidemenuId, "closed", rhsSidemenu2);
				_listeners[_LISTENER_ID_ACTIONBAR].rhsActions(rhsObj);
				actionBarApi.openedRHSPanel = null;
				if (rhsSidemenu2) {
					rhsSidemenu2.classList.remove("open");
				}
				actionBarState.activeButton.classList.remove(_CLASS_SELECTED);

				actionBarState.activeSidemenuId = "";
				actionBarState.activeElementId = "";
				actionBarState.activeButton = "";
			}
		}

		_closeExistingMenu();

		if (!selected) {
			actionBarState.activeButton = btn;
			actionBarState.activeSidemenuId = btnActionId;
			sidemenuId = sidemenuIdMap[btnActionId];
			var element = document.getElementById(sidemenuId);
			rhsObj = _createRhsObj(btnActionId, "opened", element);
			_listeners[_LISTENER_ID_ACTIONBAR].rhsActions(rhsObj);
			actionBarApi.openedRHSPanel = btnActionId;
			_toggleActionBarSidemenu(sidemenuId);
		}

		function _createRhsObj(oid, oevent, oelement) {
			return {
				id: oid,
				event: oevent,
				element: oelement,
				registerElementId: function(eId) {
					actionBarState.activeElementId = eId;
				}
			};
		}
	}

	// Attach scroll listener to display title
	function _attachScrollListener(topNav) {
		if (!topNav) {
			return;
		}

		var pageTitle = topNav.querySelector(_CLASS_NAV_TITLE);
		if (pageTitle && pageTitle.classList.contains("portal-home")) {
			var showPageTitle;
			window.addEventListener("scroll", function() {
				showPageTitle = pageTitle.classList.contains("show");
				if (window.pageYOffset > 200) {
					if (!showPageTitle) {
						pageTitle.classList.add("show");
					}
				} else if (showPageTitle) {
					pageTitle.classList.remove("show");
				}
			});
		}
	}

	function _setSecondaryClass(elementClass, secondaryClass, add) {
		var element = document.querySelector(elementClass);
		if (element) {
			if (add) {
				if (!element.classList.contains(secondaryClass)) {
					element.classList.add(secondaryClass);
				}
			} else if (element.classList.contains(secondaryClass)) {
				element.classList.remove(secondaryClass);
			}
		}
	}

	function _setTitle(title) {
		var secondaryTitle = document.querySelector(_CLASS_SECONDARY_TITLE);
		_setSecondaryClass(_CLASS_SECONDARY_TITLE, "no-padding", !title);
		if (secondaryTitle) {
			var titleText = secondaryTitle.querySelector(_ID_TITLE_TEXT);
			if (titleText) {
				titleText.innerHTML = title || "";
			}
		}
	}

	function _setDrillIn(drillIn) {
		_setSecondaryClass(_CLASS_SECONDARY_DRILL_IN, "hidden", !drillIn);
		_setSecondaryClass(_CLASS_NAV_TITLE_CONTEXT, "hidden", drillIn);
		_setSecondaryClass(_CLASS_NAV_TITLE_ICON, "no-padding", drillIn);
		var contextSwitcher = document.querySelector("#dap-context");
		if (contextSwitcher) {
			if (drillIn) {
				contextSwitcher.classList.add("drillin");
			} else {
				contextSwitcher.classList.remove("drillin");
			}
		}
		_adjustContextSwitcher();
	}

	function _setSignInTarget(target) {
		var signIn = document.querySelector(_ID_SIGN_IN);
		if (signIn) {
			var loc = signIn.href.indexOf("sign_in_target=");
			if (loc !== -1) {
				signIn.href = signIn.href.substring(0, loc + 15) + target;
			} else {
				signIn.href = signIn.href + "&sign_in_target=" + target;
			}
		}
	}

	function _attachListeners() {
		var topNav = document.getElementById(_ID_TOP_NAV);
		if (!topNav) {
			console.warn("WARNING: Cannot find top-nav DOM element");
			return;
		}

		var headerOverlay = document.querySelector(_CLASS_HEADER_OVERLAY);

		// Attach listener to the slide out menu
		var sidemenuToggle = topNav.querySelector(_CLASS_SIDEMENU_TOGGLE);
		var sidemenu = topNav.querySelector(_ID_SIDE_MENU);
		var closeIcon = topNav.querySelector(_CLASS_CLOSE_ICON);

		function _toggleSidemenu() {
			if (sidemenu) {
				if (!sidemenu.classList.contains("open")) {
					sidemenu.classList.add("open");
					sidemenuToggle.classList.add("open");
					_updateRecentItems();
					_toggleSidemenuGlow();
					toggleHeaderOverlay();
					_listeners[_LISTENER_ID_MENU].forEach(function(callback) {
						callback("sidemenu");
					});
				} else {
					sidemenu.classList.remove("open");
					sidemenuToggle.classList.remove("open");
					headerOverlay.classList.remove("active");
					_listeners[_LISTENER_ID_MENU].forEach(function(callback) {
						callback();
					});
				}
			}
		}

		function _toggleSidemenuGlow() {
			var sideMenuOpened;

			if (isLocalStorageSupported()) {
				sideMenuOpened = localStorage.getItem(SIDEMENU_OPENED);
			}

			if (sidemenuToggle) {
				if (!sidemenuToggle.classList.contains("glow") && !sideMenuOpened) {
					sidemenuToggle.classList.add("glow");
				} else if (sidemenuToggle.classList.contains("glow")) {
					sidemenuToggle.classList.remove("glow");
					_storeSidemenuState();
				}
			}
		}

		function _storeSidemenuState() {
			if (isLocalStorageSupported()) {
				localStorage.setItem(SIDEMENU_OPENED, "true");
			}
		}

		if (sidemenu) {
			sidemenu.addEventListener("click", function(evt) {
				_toggleSidemenu();
			});
		}

		if (sidemenuToggle) {
			sidemenuToggle.addEventListener("click", function(evt) {
				_toggleSidemenu();
				evt.preventDefault();
			});
		}

		if (closeIcon) {
			closeIcon.addEventListener("click", function(evt) {
				_toggleSidemenu();
				evt.preventDefault();
			});
		}

		// Attach listener to the filter
		var filterArea = topNav.querySelector(_CLASS_FILTER_INPUT);
		if (filterArea) {
			filterArea.addEventListener("input", function(evt) {
				var value = evt.target.value;
				_listeners[_LISTENER_ID_FILTER].forEach(function(callback) {
					callback(value);
				});

				if (filterArea) {
					if (value && value !== "") {
						filterArea.classList.add("has-input");
					} else {
						filterArea.classList.remove("has-input");
					}
				}
			});

			filterArea.addEventListener("click", function(evt) {
				evt.stopPropagation();
			});
		}

		// Attach listener to the nav icon
		var navTitleIcon = document.querySelector(_CLASS_NAV_TITLE_ICON);

		if (navTitleIcon) {
			navTitleIcon.onclick = function() {
				_trackEvent("navigation", {
					element_type: "button",
					action: "click",
					location_on_ui: "header",
					status: "complete"
				});
			};
		}

		// Attach listener to the profile icon
		var profileContainer = topNav.querySelector(_CLASS_PROFILE_CONTAINER);
		var profileMenu;

		if (profileContainer) {
			profileMenu = topNav.querySelector(_ID_PROFILE_MENU);
			profileContainer.addEventListener("click", function(evt) {
				toggleHeaderOverlay();
				if (!profileMenu.classList.contains("open")) {
					profileContainer.classList.add("open");
					profileMenu.classList.add("open");
					_listeners[_LISTENER_ID_MENU].forEach(function(callback) {
						callback("profilemenu");
					});
				} else {
					profileContainer.classList.remove("open");
					profileMenu.classList.remove("open");
					headerOverlay.classList.remove("active");
					_listeners[_LISTENER_ID_MENU].forEach(function(callback) {
						callback();
					});
				}
				evt.stopPropagation();
			});

			var profileMenuLinks = profileContainer.querySelectorAll(_CLASS_DROPDOWN_LINK + " a");
			_trackDropdownLinks("profile menu", profileMenuLinks);
		}

		// Attach listener to the community icon
		var communityMenu;
		var communityContainer = topNav.querySelector(_CLASS_COMMUNITY_CONTAINER);

		// Attach listener to the New menu
		var newContainer = topNav.querySelector(_ID_NEW);
		var newMenu;

		if (newContainer) {
			newMenu = attachDropdownListeners(newContainer, "new menu", true);
		}

		// Attach listener to the context menu
		var contextContainer = topNav.querySelector(_ID_CONTEXT);
		var contextMenu;

		if (contextContainer) {
			contextMenu = attachDropdownListeners(contextContainer, "context menu", true);
		}

		var recentItemsContainer = topNav.querySelector("#dap-recent-items-container");
		if (recentItemsContainer) {
			attachDropdownListeners(recentItemsContainer, "recent projects", false, _storeRecentItemsState);
			if (isLocalStorageSupported() && _getOrCreateUserRecentStore()[RECENT_TOGGLE_OPEN] === "true") {
				recentItemsContainer.classList.add("open");
				var recentItems = recentItemsContainer.querySelector("#dap-recent-items");
				if (recentItems) {
					recentItems.classList.add("open");
				}
			}
		}

		function _storeRecentItemsState(recentItemsOpen) {
			_persistUserRecentItems(RECENT_TOGGLE_OPEN, recentItemsOpen ? "true" : "false");
		}

		function attachDropdownListeners(dropdownContainer, dropdownName, useOverlay, stateListener) {
			var dropdownButton = dropdownContainer.querySelector(_CLASS_DROPDOWN_TOGGLE) || "";
			var dropdownMenu = dropdownContainer.querySelector(_CLASS_DROPDOWN_MENU) || "";
			var dropdownLinks = dropdownMenu.querySelectorAll(_CLASS_DROPDOWN_LINK + " a");
			if (dropdownButton) {
				dropdownButton.addEventListener("click", function(evt) {
					if (useOverlay) {
						toggleHeaderOverlay();
					}
					evt.stopPropagation();
					evt.preventDefault();
					var stateOpen = false;
					if (!dropdownMenu.classList.contains("open")) {
						dropdownContainer.classList.add("open");
						dropdownMenu.classList.add("open");
						stateOpen = true;
					} else {
						dropdownContainer.classList.remove("open");
						dropdownMenu.classList.remove("open");
						if (useOverlay) {
							headerOverlay.classList.remove("active");
						}
					}
					if (stateListener) {
						stateListener(stateOpen);
					}
				});
			}
			_trackDropdownLinks(dropdownName, dropdownLinks);
			return dropdownMenu;
		}

		function _trackDropdownLinks(dropdownName, dropdownLinks) {
			if (dropdownLinks) {
				for (var idx = 0; idx < dropdownLinks.length; idx++) {
					var dropdownLink = dropdownLinks[idx];
					if (dropdownLink) {
						dropdownLink.addEventListener("click", function(evt) {
							_trackEvent("navigation", {
								action: "click",
								action_context: dropdownName,
								element_type: "dropdown menu",
								location_on_ui: "header",
								status: "complete",
								title: evt.target.title
							});
						});
					}
				}
			}
		}

		function closeAllMenus() {
			if (headerOverlay.classList.contains("active")) {
				if (newContainer && newMenu.classList.contains("open")) {
					newContainer.classList.remove("open");
					newMenu.classList.remove("open");
				}

				if (contextContainer && contextMenu.classList.contains("open")) {
					contextContainer.classList.remove("open");
					contextMenu.classList.remove("open");
				}

				if (profileMenu && profileMenu.classList.contains("open")) {
					profileContainer.classList.remove("open");
					profileMenu.classList.remove("open");
				}

				if (communityMenu && communityMenu.classList.contains("open")) {
					communityMenu.classList.remove("open");
				}

				if (sidemenu && sidemenu.classList.contains("open")) {
					sidemenu.classList.remove("open");
					sidemenuToggle.classList.remove("open");
				}

				_closeNotificationsPopup();

				_listeners[_LISTENER_ID_MENU].forEach(function(callback) {
					callback();
				});
				headerOverlay.classList.remove("active");
			}
		}

		if (headerOverlay) {
			headerOverlay.addEventListener("click", function(evt) {
				evt.stopPropagation();
				closeAllMenus();
			});
		}


		// Add margin if actionbar is enabled
		var actionBar = document.querySelector(_ID_ACTION_BAR);
		if (actionBar) {
			var contentNode = document.querySelector(_ID_CONTENT_NODE);
			if (contentNode && !actionBar.classList.contains("hide")) {
				contentNode.classList.add(_CLASS_ACTION_BAR_ENABLED);
			}
		}

		_attachScrollListener(topNav);

		document.body.addEventListener("click", function(evt) {
			if (filterArea && evt.target !== filterArea) {
				filterArea.classList.remove("focused");
			} else if (evt.target === filterArea && evt.target.value === "") {
				filterArea.classList.remove("focused");
			}
		});

		// Add a glowing effect around the side menu button until it's been opened
		var stringRegistration = "/registration/";
		if (isLocalStorageSupported()) {
			if (window.location.pathname.substr(0, stringRegistration.length) !== stringRegistration) {
				if (!localStorage[SIDEMENU_OPENED] || localStorage[SIDEMENU_OPENED] !== "true") {
					window.setTimeout(_toggleSidemenuGlow(), 0);
				}
			}

			// Open quick start guide in the landing page if it's a first time user
			if (!localStorage[QUICK_START_GUIDE]) {
				localStorage.setItem(QUICK_START_GUIDE, true);
				actionBarApi.openQuickStartPanel = true;
			}
		}
	}

	function toggleHeaderOverlay() {
		var headerOverlay = document.querySelector(_CLASS_HEADER_OVERLAY);
		if (headerOverlay) {
			headerOverlay.classList.add("active");
		}
	}

	function _pushRecent(itemType, itemName, guid, pguid) {
		var userId = _getUserId();
		if (!isLocalStorageSupported() || !userId) {
			return;
		}

		var recent = _getOrCreateUserRecentStore()[itemType] || [];
		recent.push({ name: itemName, guid: guid, pguid: pguid, timestamp: Date.now() });
		for (var index = 0; index < recent.length - 1; index++) {
			var current = recent[index];
			if (current.guid === guid) {
				recent.splice(index, 1);
				break;
			}
		}
		if (recent.length === 6) {
			recent.shift();
		}
		_persistUserRecentItems(itemType, recent);
	}

	function _deleteRecent(itemType, guid) {
		var userId = _getUserId();
		if (!isLocalStorageSupported() || !userId) {
			return;
		}

		var recent = _getOrCreateUserRecentStore()[itemType];
		if (!recent) {
			return;
		}

		for (var index = 0; index < recent.length; index++) {
			var current = recent[index];
			if (current.guid === guid) {
				recent.splice(index, 1);
				break;
			}
		}
		_persistUserRecentItems(itemType, recent);
	}

	function _getTextSecure(insecureText) {
		if (document) {
			var para = document.createElement("i");
			para.textContent = insecureText;
			return para.innerHTML;
		}
		return "";
	}

	function _updateRecentItems() {
		var recentItemsDom = document.querySelector(_ID_RECENT_ITEMS);
		if (!recentItemsDom) {
			return;
		}
		var context = recentItemsDom.dataset.context;
		var projects = _listRecent(RECENT_PROJECTS);
		projects.forEach(function(project) {
			project.url = "/projects/" + project.guid;
			if (context) {
				project.url = project.url + "?context=" + context;
			}
		});
		var notebooks = _listRecent(RECENT_NOTEBOOKS);
		notebooks.forEach(function(notebook) {
			notebook.url = "/analytics/notebooks/" + notebook.guid +
					"/view?projectid=" + notebook.pguid;
		});
		var recentItems = projects.concat(notebooks);
		if (recentItems.length > 0) {
			recentItems.sort(function(itemA, itemB) {
				return itemB.timestamp - itemA.timestamp;
			});
			recentItems = recentItems.slice(0, Math.min(5, recentItems.length));
			var markup = [];
			recentItems.forEach(function(entry) {
				markup.push("<li><a href='" + entry.url + "'>" + _getTextSecure(entry.name) + "</a></li>");
			});
			recentItemsDom.innerHTML = markup.join("");
		} else {
			recentItemsDom.innerHTML = "<li>No recent items</li>";
		}
	}

	function _listRecent(itemType) {
		// TODO: drop entries that are too old according to their timestamp
		return _getOrCreateUserRecentStore()[itemType] || [];
	}

	function _getOrCreateUserRecentStore() {
		var userId = _getUserId();
		if (!isLocalStorageSupported() || !userId) {
			return {};
		}

		var recentAll = localStorage[RECENT_ITEMS];
		if (!recentAll) {
			recentAll = {};
		} else {
			recentAll = JSON.parse(recentAll);
		}
		if (!recentAll[userId]) {
			recentAll[userId] = {};
			localStorage[RECENT_ITEMS] = JSON.stringify(recentAll);
		}

		return recentAll[userId];
	}

	function _persistUserRecentItems(key, value) {
		var userId = _getUserId();
		if (!isLocalStorageSupported() || !userId) {
			return;
		}
		_getOrCreateUserRecentStore();
		var recentAll = JSON.parse(localStorage[RECENT_ITEMS]);
		recentAll[userId][key] = value;
		localStorage[RECENT_ITEMS] = JSON.stringify(recentAll);
	}

	function _getUserId() {
		var nav = document.querySelector("#" + _ID_TOP_NAV);
		if (nav && nav.dataset && nav.dataset.userid && nav.dataset.userid !== "") {
			return nav.dataset.userid;
		}
	}

	function _clearDiv(mountNode) {
		while (mountNode.firstChild) {
			mountNode.removeChild(mountNode.firstChild);
		}
	}

	function isLocalStorageSupported() {
		if (typeof Storage === "undefined" || typeof localStorage !== "object") {
			return false;
		}

		try {
			localStorage.setItem("testLocalStorage", 1);
			localStorage.removeItem("testLocalStorage");
			return true;
		} catch (error) {
			return false;
		}
	}

	// TODO temporary workaround, should be replaced with pure CSS
	function _initContextSwitcher() {
		window.matchMedia("(max-width: 550px)").addListener(_adjustContextSwitcher);
		_adjustContextSwitcher();
	}

	function _adjustContextSwitcher() {
		var menu = document.querySelector("#dap-context-menu");
		var title = document.querySelector("#dap-context");
		if (!title || !menu) {
			return;
		}

		menu.style.width = "";
		title.style.width = "";
		var titleWidth = title.getBoundingClientRect().width;
		var menuWidth = menu.getBoundingClientRect().width;
		var finalWidth = Math.max(menuWidth, titleWidth);
		var drillin = title.classList.contains("drillin");
		if (!drillin) {
			menu.style.width = finalWidth + "px";
			title.style.width = finalWidth + "px";
		}
		title.style.visibility = "visible";

		title.onclick = function() {
			this.classList.toggle("open");
			menu.classList.toggle("open");
			toggleHeaderOverlay();
		};
	}

	function _trackEvent(eventName, eventObj) {
		if (!window.analytics) {
			return;
		}

		if (!eventName || !eventObj || typeof eventObj !== "object" || typeof eventName !== "string") {
			return;
		}
		window.analytics.track(eventName, eventObj);
	}


	var _NOTIFICATION_RESOURCE_PROJECT = "https://dataplatform.ibm.com/Project";
	var _NOTIFICATION_RESOURCE_NOTEBOOK = "https://dataplatform.ibm.com/Notebook";
	var _NOTIFICATION_TYPE_ADD = "Add";
	var _NOTIFICATION_TYPE_REMOVE = "Remove";

	var _NOTIFICATION_TYPE = {
		PROJECT_ADD_COLLABORATOR: "project_add_collaborator",
		PROJECT_REMOVE_COLLABORATOR: "project_remove_collaborator",
		NOTEBOOK_ADD_COMMENT: "notebook_add_comment"
	};

	var _notifications = [];
	var _newNotificationsNr = 0;
	var _notificationToastTimer;
	var _pendingToasts = [];

	function _initNotificationsButton() {
		var notificationEl = document.querySelector("#" + _ID_TOP_NAV + " .dap-notifications");
		if (notificationEl) {
			notificationEl.classList.remove(_CLASS_HIDDEN);
		}
		var notificationButton = document.querySelector("#" + _ID_TOP_NAV + " .dap-notifications .notifications-button");
		notificationButton.addEventListener("click", function() {
			var notificationPopup = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup");
			if (!notificationPopup.classList.contains(_CLASS_HIDDEN)) {
				_closeNotificationsPopup();
			} else {
				_openNotificationListPopup();
			}
		});
	}

	function _openNotificationListPopup() {
		if (_notificationToastTimer) {
			clearTimeout(_notificationToastTimer);
			_notificationToastTimer = null;
		}
		_clearNotificationsPopup();
		var latestNotifs = _notifications;
		var popup = _getNotificationPopupContentElement();
		if (latestNotifs.length === 0) { // TODO handle waiting for response (show list view with spinner)
			var view = popup.querySelector(".no-notification-view");
			view.classList.remove(_CLASS_HIDDEN);
		} else {
			var listView = popup.querySelector(".list-view");
			listView.classList.remove(_CLASS_HIDDEN);
			var listEl = popup.querySelector(".notification-list");
			listEl.innerHTML = _constructNotificationList(latestNotifs);
		}
		_setNotificationsCounter(0);
		var button = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notifications-button");
		button.classList.add(_CLASS_OPEN);
		var notificationPopup = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup");
		notificationPopup.classList.remove(_CLASS_HIDDEN);
		toggleHeaderOverlay();
	}

	function _closeNotificationsPopup() {
		if (_notificationToastTimer) {
			clearTimeout(_notificationToastTimer);
			_notificationToastTimer = null;
		}
		var button = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notifications-button");
		if (button) {
			button.classList.remove(_CLASS_OPEN);
		}

		var notificationPopup = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup");
		if (notificationPopup) {
			notificationPopup.onmouseover = null;
			notificationPopup.onmouseleave = null;
			notificationPopup.classList.add(_CLASS_HIDDEN);
			setTimeout(_tryShowPendingToasts, 1000);
		}
	}

	function _clearNotificationsPopup() {
		var popup = _getNotificationPopupContentElement();
		["no-notification-view", "list-view", "single-notification-view", "notification-group-view"].forEach(function(viewClass) {
			popup.querySelector("." + viewClass).classList.add(_CLASS_HIDDEN);
		});
	}

	function _getNotificationPopupContentElement() {
		return document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup .content");
	}

	function _setNotificationsCounter(nr) {
		var counter = document.querySelector("#" + _ID_TOP_NAV + " .dap-notifications .counter");
		if (!counter) {
			return;
		}

		_newNotificationsNr = nr;
		if (nr === 0) {
			counter.classList.add(_CLASS_HIDDEN);
		} else {
			counter.classList.remove(_CLASS_HIDDEN);
			var count = nr;
			if (nr > 99) {
				count = "99+";
			}
			counter.innerHTML = count;
		}
	}

	var _notificationRenderers = {
		default: function(notification) {
			return notification.entity.name;
		}
	};
	_notificationRenderers[_NOTIFICATION_TYPE.PROJECT_ADD_COLLABORATOR] = function(notification) {
		var entity = notification.entity;
		return _renderResource(entity.actor.name) + " added " +
				_renderNotificationObject(entity.object) +
				" to " + _renderResource(entity.target.name);

	};
	_notificationRenderers[_NOTIFICATION_TYPE.PROJECT_REMOVE_COLLABORATOR] = function(notification) {
		var entity = notification.entity;
		return _renderResource(entity.actor.name) + " removed " +
				_renderNotificationObject(entity.object) +
				" from " + _renderResource(entity.origin.name);
	};
	_notificationRenderers[_NOTIFICATION_TYPE.NOTEBOOK_ADD_COMMENT] = function(notification) {
		var entity = notification.entity;
		return _renderResource(entity.actor.name) + " commented in " +
				_renderResource(entity.target.name);
	};

	function _renderNotificationObject(notificationObject) {
		var objectName = "multiple users";
		if (Array.isArray(notificationObject)) {
			if (notificationObject.length === 1) {
				objectName = notificationObject[0].name;
			}
		} else {
			objectName = notificationObject.name;
		}
		return _renderResource(objectName);
	}

	function _formatAMPM(dateVar) {
		var hours = (dateVar.getHours());
		var minutes = dateVar.getMinutes();
		var ampm = hours > 12 ? "p" : "a";
		hours = hours % 12; /* eslint operator-assignment: ["error", "never"] */
		hours = hours ? hours : 12; // the hour '0' should be '12'
		hours = String(hours);
		minutes = String(minutes);

		if (hours.length < 2) {
			hours = "0" + hours;
		}
		if (minutes.length < 2) {
			minutes = "0" + minutes;
		}
		var strTime = hours + ":" + minutes + ampm;
		return strTime;
	}

	function _formatDate(dateVar) {
		var month = String((dateVar.getMonth() + 1));
		var day = String(dateVar.getDate());
		var year = String(dateVar.getFullYear());

		if (month.length < 2) {
			month = "0" + month;
		}
		if (day.length < 2) {
			day = "0" + day;
		}

		return [year, month, day].join("/") + " @ ";
	}

	function _renderTimestamp(notification) {
		var date = notification.metadata.created_at ? new Date(notification.metadata.created_at) : new Date();
		var dateTxt = _formatDate(date);
		var timeTxt = _formatAMPM(date);
		return "<div class='timestamp'>" + dateTxt + " " + timeTxt + "</div>";
	}

	function _renderResource(resourceName) {
		return "<span class='resource'>" + resourceName + "</span>";
	}

	function _renderNotification(notification) {
		var notificationType = _getNotificationType(notification);

		var html = "<div class='notification'>";
		if (notificationType) {
			var actor = notification.entity.actor;
			if (actor.image) {
				html = html + "<div class='profile-icon'><img src='" + actor.image.href + "'></div>";
			} else {
				html = html + "<div class='profile-icon initials'>" + _getInitials(notification.entity.actor.name) + "</div>";
			}
		}
		html = html + "<div class='text'><div class='message'>";
		var renderer = notificationType ? _notificationRenderers[notificationType] : _notificationRenderers.default;
		html = html + renderer(notification);
		html = html + "</div>";
		html = html + _renderTimestamp(notification);
		html = html + "</div></div>";
		return html;
	}

	function _getNotificationType(notification) {
		var entity = notification.entity;
		if (entity.target && entity.target.type === _NOTIFICATION_RESOURCE_PROJECT &&
				entity.type === _NOTIFICATION_TYPE_ADD) {
			return _NOTIFICATION_TYPE.PROJECT_ADD_COLLABORATOR;
		}

		if (entity.origin && entity.origin.type === _NOTIFICATION_RESOURCE_PROJECT &&
				entity.type === _NOTIFICATION_TYPE_REMOVE) {
			return _NOTIFICATION_TYPE.PROJECT_REMOVE_COLLABORATOR;
		}

		if (entity.target && entity.target.type === _NOTIFICATION_RESOURCE_NOTEBOOK &&
				entity.context && entity.context.type === _NOTIFICATION_RESOURCE_PROJECT &&
				entity.type === _NOTIFICATION_TYPE_ADD) {
			return _NOTIFICATION_TYPE.NOTEBOOK_ADD_COMMENT;
		}
	}

	function _getInitials(userName) {
		var nameParts = userName.split(" ");
		var initials = nameParts[0][0];
		if (nameParts.length > 1) {
			initials = initials + nameParts[nameParts.length - 1][0];
		}
		return initials.toUpperCase();
	}

	function _getNotifications() {
		var req = new XMLHttpRequest();
		req.open("GET", window.dsxApiProxy + "?url=" + window.dsxNotificationsApi + "/v1/notifications", true);
		req.setRequestHeader("Content-Type", "application/json");
		req.onload = function() {
			if (req.status === 200) {
				_handleReceivedNotifications(JSON.parse(req.responseText));
			} else {
				console.error("cannot get notfications");
			}
		};
		req.send();
	}

	function _handleReceivedNotifications(receivedNotifications) {
		if (!receivedNotifications || !receivedNotifications.resources) {
			return;
		}
		if (_notifications.length > 0) {
			_notifications = _notifications.concat(receivedNotifications);
		} else {
			_notifications = receivedNotifications.resources;
		}
		if (_notifications.length > 10) {
			_notifications = _notifications.slice(0, 10);
		}
	}

	function _isNotificationPopupOpen() {
		return !(document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup")
					.classList.contains(_CLASS_HIDDEN));
	}

	function _toastSingleNotification(notification) {
		_clearNotificationsPopup();
		var popup = _getNotificationPopupContentElement();
		var view = popup.querySelector(".single-notification-view");
		view.querySelector(".close-button").onclick = function(evt) {
			_closeNotificationsPopup();
			evt.stopPropagation();
		};
		var notifElement = view.querySelector(".notification");
		notifElement.innerHTML = _renderNotification(notification);
		view.onclick = function() {
			location.href = "/notifications";
		};
		view.classList.remove(_CLASS_HIDDEN);
		_showToast();
	}

	function _toastMultipleNotifications(notifArray) {
		_clearNotificationsPopup();
		var projects = {};
		notifArray.forEach(function(notification) {
			var notificationType = _getNotificationType(notification);
			if (notificationType) {
				if (notificationType === _NOTIFICATION_TYPE.PROJECT_ADD_COLLABORATOR) {
					projects[notification.entity.target.id] = 1;
				} else if (notificationType === _NOTIFICATION_TYPE.PROJECT_REMOVE_COLLABORATOR) {
					projects[notification.entity.origin.id] = 1;
				} else if (notificationType === _NOTIFICATION_TYPE.NOTEBOOK_ADD_COMMENT) {
					projects[notification.entity.context.id] = 1;
				}
			}
		});
		var projectsNr = Object.keys(projects).length;
		var popup = _getNotificationPopupContentElement();
		var view = popup.querySelector(".notification-group-view");
		var msg = view.querySelector(".message");
		view.querySelector(".close-button").onclick = function(evt) {
			_closeNotificationsPopup();
			evt.stopPropagation();
		};
		var counter = view.querySelector(".counter");
		counter.innerHTML = notifArray.length > 99 ? "99+" : notifArray.length;
		msg.innerHTML = "You have <span class='resource'>" + notifArray.length +
				" new notifications</span> " + (projectsNr === 1 ? "in" : "across") +
				" <span class='resource'>" + projectsNr +
				" project" + (projectsNr === 1 ? "" : "s") + "</span>";
		view.onclick = _openNotificationListPopup;
		view.classList.remove(_CLASS_HIDDEN);
		_showToast();
	}

	function _showToast() {
		var notificationPopup = document.querySelector("#" + _ID_TOP_NAV +
					" .dap-notifications .notification-popup");
		notificationPopup.onmouseover = function() {
			if (_notificationToastTimer) {
				clearTimeout(_notificationToastTimer);
			}
			notificationPopup.onmouseleave = _hideToastWithDelay;
		};
		notificationPopup.classList.remove(_CLASS_HIDDEN);
		_hideToastWithDelay();
	}

	function _hideToastWithDelay() {
		_notificationToastTimer = setTimeout(function() {
			_closeNotificationsPopup();
		}, 5000);
	}

	function _tryShowPendingToasts() {
		if (_isNotificationPopupOpen()) {
			return;
		}
		var toShow = _pendingToasts;
		_pendingToasts = [];
		if (toShow.length === 1) {
			_toastSingleNotification(toShow[0]);
		} else if (toShow.length > 1) {
			_toastMultipleNotifications(toShow);
		}
	}

	function _constructNotificationList(notifs) {
		var html = "";
		notifs.forEach(function(notif) {
			html = html + "<li>" + _renderNotification(notif) + "</li>";
		});
		return html;
	}

	function _handleNotificationFromSocket(msg) {
		_setNotificationsCounter(++_newNotificationsNr);
		var len = _notifications.unshift(msg.state);
		if (len > 10) {
			_notifications = _notifications.slice(0, 10);
		}
		_pendingToasts.push(msg.state);
		_tryShowPendingToasts();
	}

	function _initNotifications() {
//		if (!isLocalStorageSupported() || !localStorage["apsx.notifications"] ||
//			localStorage["apsx.notifications"] !== "true") {
//			return;
//		}

		if (!window.dsxNotificationsApi || !window.dsxApiProxy || !window.dsxWebSocket) {
			return;
		}

		_initNotificationsButton();
		_getNotifications();

		_initSocketIo("", function(socket) {
			socket.on("notification", _handleNotificationFromSocket);
		});
	}

	function _init() {
		window.dapHeader = navApi;
		window.globalHeader = navApi;
		_initContextSwitcher();
		_attachListeners();
		_initActionBarButtons();
		_initNotifications();
		window.addEventListener("resize", function() {
			clearTimeout(breadcrumbResizeHandler);
			breadcrumbResizeHandler = setTimeout(_bindBreadcrumbs, 200);
		});
	}

	/* global $, io */

	// 30 min.
	var SESSION_ID_CACHE_TIMEOUT = 30 * 60 * 1000;

	function _doXhr(options, acceptableReturnCodes, callback) {
		if (!options || !options.url) {
			callback(new Error("options parameter no provided or does not contain 'url'"));
			return;
		}

		var request = new XMLHttpRequest();
		request.open(options.method || "GET", options.url, true);

		if (options.headers) {
			for (var header in options.headers) {
				if (options.headers.hasOwnProperty(header)) {
					request.setRequestHeader(header, options.headers[header]);
				}
			}
		}

		request.onload = function() {
			if (acceptableReturnCodes.indexOf(request.status) === -1) {
				callback(new Error("Unexpected response code: " + request.status));
				return;
			}

			var result = request.responseText;
			if (options.json) {
				try {
					result = JSON.parse(result);
				} catch (exception) {
					callback(new Error("Error: unable to parse result as JSON"));
					return;
				}
			}
			callback(null, result);
			return;
		};
		request.onerror = callback;

		request.send(options.data);
	}

	function _getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function _getCachedOrigin(key) {
		var originJSON = sessionStorage.getItem(key);

		if (originJSON) {
			var originWithExpiry = JSON.parse(originJSON);

			if (originWithExpiry.expiry && originWithExpiry.expiry > new Date().getTime()) {
				return originWithExpiry.origin;
			}
			// The value is now stale and can no longer be relied upon. Remove.
			// ----------------------------------------------------------------------
			sessionStorage.removeItem(key);
			return null;
		}
		return null;
	}

	// Compute origin URL to use to connect SocketIO to the server

	function _computeOrigin(path, callback) {
		var storageKey = path + "/events";
		var origin = _getCachedOrigin(storageKey);
		if (origin) {
			callback(origin);
			return;
		}
		// Fetch it from the server
		_doXhr({ url: storageKey, json: true }, [200], function(err, result) {
			if (err) {
				console.warn("Error fetching microservice direct route from url: " + storageKey);
				callback(null);
				return;
			}

			// After 30 minutes, session id must be refreshed from the cdsx.sid cookie
			// rather than using the cached version from the sessionStorage object.
			// NOTE: If a client adjusts local time on his/her system, this solution
			// would be compromised. It is an edge case, but a possibility, nonetheless.
			// ------------------------------------------------------------------------
			var expiry = new Date().getTime() + SESSION_ID_CACHE_TIMEOUT;
			var originWithExpiry = { origin: result, expiry: expiry };

			sessionStorage.setItem(storageKey, JSON.stringify(originWithExpiry));
			callback(result);
		});
	}

	function _jsonp(url, callback) {
		var callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());

		var script = document.createElement("script");
		script.src = url + (url.indexOf("?") >= 0 ? "&" : "?") + "callback=" + callbackName;
		script.type = "text/javascript";
		script.async = true;
		document.body.appendChild(script);

		window[callbackName] = function(data) {
			delete window[callbackName];
			document.body.removeChild(script);
			callback(data);
		};

	/*
		$.ajax({
			url: url,
			dataType: "jsonp",
			async: true,
			cache: false,
			contentType: "text/json; charset=utf-8",
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			success: callback
		});
	*/
	}

	function _getEventSessionCookie(origin, path, callback) {
		var storageKey = path + "/socket-token-uid";
		var socketTokenUid = sessionStorage.getItem(storageKey);
		if (socketTokenUid !== null) {
			console.log("Found token in session storage:" + socketTokenUid);
			callback(socketTokenUid);
			return;
		}

		// just using 2 back slashes without prefixing with protocol results in e.g. https://// for IE
		var sessionpUrl = origin.url + path + "/sessionp";
		if (sessionpUrl.indexOf(window.location.protocol) === -1) {
			sessionpUrl = window.location.protocol + sessionpUrl;
		}

		_jsonp(sessionpUrl, function(result) {
			sessionStorage.setItem(storageKey, result.token);
			callback(result.token);
		});
	}

	function _initSocketIo(path, callback) {
		// Vary the reconnection parameters so a service instance going down
		// can't create a flood of requests and overwhelm the system.
		var reconnectionDelay = _getRandomInt(1000, 10000);      // Wait 1 - 10 seconds for retry
		var reconnectionDelayMax = _getRandomInt(5000, 1000);    // Wait 5 - 10 seconds between tries

		_computeOrigin(path, function(origin) {
			_getEventSessionCookie(origin, path, function() {
				var socket = io.connect(origin.url, {
					path: path + "/socket.io",
					query: "session_id=" + origin.sid,
					reconnection: true,
					reconnectionDelay: reconnectionDelay,
					reconnectionDelayMax: reconnectionDelayMax,
					reconnectionAttempts: 5
				});
				socket.on("connect", function() {
					socket.emit("message", "A message from the client");
					callback(socket);
				});

				socket.on("reconnect_failed", function() {
					sessionStorage.removeItem("socket-token-uid");
				});
			});
		});
	}

	document.addEventListener("DOMContentLoaded", function onLoad() {
		_init();
	});
}());
