import {
  require_groupBy
} from "./chunk-RGESLAYI.js";
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from "./chunk-CZ2VXG7N.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import {
  ActivatedRoute,
  Router,
  XtreamStore
} from "./chunk-PZD5NHA7.js";
import {
  CommonModule,
  DatePipe,
  KeyValuePipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  TitleCasePipe,
  __async,
  __toESM,
  computed,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/recently-viewed/recently-viewed.component.ts
var import_groupBy = __toESM(require_groupBy());
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function RecentlyViewedComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearHistory());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    Clear History\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
function RecentlyViewedComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 4);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dialogRef.close());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
function RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                ");
    \u0275\u0275elementStart(1, "mat-card", 11);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_For_15_Template_mat_card_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.openItem(item_r5));
    });
    \u0275\u0275text(2, "\n                                    ");
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_For_15_Template_button_click_3_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeItem($event, item_r5.id));
    });
    \u0275\u0275text(4, "\n                                        ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                                    ");
    \u0275\u0275elementStart(9, "img", 13);
    \u0275\u0275listener("error", function RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_For_15_Template_img_error_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                                    ");
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12, "\n                                        ");
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                                        ");
    \u0275\u0275elementStart(16, "p", 15);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                                        ");
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n                                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n                            ");
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275property("src", item_r5.poster_url || "./assets/images/default-poster.png", \u0275\u0275sanitizeUrl)("alt", item_r5.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                                            ", \u0275\u0275pipeBind1(18, 7, item_r5.type), "\n                                        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                                            ", \u0275\u0275pipeBind2(22, 9, item_r5.viewed_at, "d MMMM, y, HH:mm"), "\n                                        ");
  }
}
function RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 7);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "h3", 8);
    \u0275\u0275text(4, "\n                            ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                        ");
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13, "\n                            ");
    \u0275\u0275repeaterCreate(14, RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_For_15_Template, 26, 12, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                ");
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                            ", group_r6.key, "\n                            ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", group_r6.value.length, " items)");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(group_r6.value);
  }
}
function RecentlyViewedComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "h2", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275repeaterCreate(7, RecentlyViewedComponent_Conditional_15_Conditional_1_For_8_Template, 18, 2, null, null, _forTrack0);
    \u0275\u0275pipe(9, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("\n                    Found ", ctx_r1.recentItems().length, " items across\n                    ", \u0275\u0275pipeBind1(5, 2, ctx_r1.getGroupedItems()).length, " playlists\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 4, ctx_r1.getGroupedItems()));
  }
}
function RecentlyViewedComponent_Conditional_15_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-card", 11);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_15_Conditional_2_For_4_Template_mat_card_click_1_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openItem(item_r8));
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function RecentlyViewedComponent_Conditional_15_Conditional_2_For_4_Template_button_click_3_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItem($event, item_r8.id));
    });
    \u0275\u0275text(4, "\n                            ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                        ");
    \u0275\u0275elementStart(9, "img", 13);
    \u0275\u0275listener("error", function RecentlyViewedComponent_Conditional_15_Conditional_2_For_4_Template_img_error_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                        ");
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275text(12, "\n                            ");
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                            ");
    \u0275\u0275elementStart(16, "p", 15);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                            ");
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n                ");
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275property("src", item_r8.poster_url || "./assets/images/default-poster.png", \u0275\u0275sanitizeUrl)("alt", item_r8.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r8.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                                ", \u0275\u0275pipeBind1(18, 7, item_r8.type), "\n                            ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                                ", \u0275\u0275pipeBind2(22, 9, item_r8.viewed_at, "d MMMM, y, hh:mm"), "\n                            ");
  }
}
function RecentlyViewedComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, RecentlyViewedComponent_Conditional_15_Conditional_2_For_4_Template, 26, 12, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.recentItems());
  }
}
function RecentlyViewedComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, RecentlyViewedComponent_Conditional_15_Conditional_1_Template, 11, 6)(2, RecentlyViewedComponent_Conditional_15_Conditional_2_Template, 6, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isGlobal ? 1 : 2);
  }
}
function RecentlyViewedComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No recently viewed items");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n    ");
  }
}
var RecentlyViewedComponent = class _RecentlyViewedComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
    this.xtreamStore = inject(XtreamStore);
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this.dialogData = inject(MAT_DIALOG_DATA, { optional: true });
    this.isGlobal = this.dialogData?.isGlobal ?? false;
    this.recentItems = computed(() => this.isGlobal ? this.xtreamStore.globalRecentItems() : this.xtreamStore.recentItems());
    this.currentPlaylist = this.xtreamStore.currentPlaylist;
    if (this.isGlobal) {
      this.loadGlobalItems();
    } else if (this.currentPlaylist()) {
      this.xtreamStore.loadRecentItems(this.currentPlaylist);
    }
  }
  loadGlobalItems() {
    return __async(this, null, function* () {
      try {
        yield this.xtreamStore.loadGlobalRecentItems();
      } catch (error) {
        console.error("Error loading global items:", error);
      }
    });
  }
  clearHistory() {
    if (this.isGlobal) {
      this.xtreamStore.clearGlobalRecentlyViewed();
    } else {
      this.xtreamStore.clearRecentItems(this.xtreamStore.currentPlaylist);
    }
  }
  openItem(item) {
    const type = item.type === "movie" ? "vod" : item.type;
    this.xtreamStore.setSelectedContentType(type);
    if (this.isGlobal) {
      this.dialogRef?.close();
      this.router.navigate([
        "/xtreams",
        item.playlist_id,
        type,
        item.category_id,
        item.xtream_id
      ]);
    } else {
      this.router.navigate(["..", type, item.category_id, item.xtream_id], {
        relativeTo: this.activatedRoute
      });
    }
  }
  removeItem(event, itemId) {
    event.stopPropagation();
    this.xtreamStore.removeRecentItem({
      itemId,
      playlistId: this.currentPlaylist().id
    });
  }
  getGroupedItems() {
    const items = this.recentItems();
    if (!this.isGlobal)
      return { default: items };
    const grouped = (0, import_groupBy.default)(items, "playlist_name");
    return grouped;
  }
  static {
    this.\u0275fac = function RecentlyViewedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentlyViewedComponent)(\u0275\u0275directiveInject(MatDialogRef, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentlyViewedComponent, selectors: [["app-recently-viewed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 3, consts: [[1, "recent-container"], [1, "header"], [1, "header-actions"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "playlist-section"], [1, "section-title"], [1, "playlist-group"], [1, "playlist-title"], [1, "item-count"], [1, "items-grid"], [1, "item-card", 3, "click"], ["mat-icon-button", "", 1, "remove-button", 3, "click"], [1, "poster", 3, "error", "src", "alt"], [1, "item-info"], [1, "type-badge"], [1, "viewed-at"], [1, "no-items"]], template: function RecentlyViewedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n");
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "\n        ");
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Recently Viewed");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementStart(9, "div", 2);
        \u0275\u0275text(10, "\n            ");
        \u0275\u0275template(11, RecentlyViewedComponent_Conditional_11_Template, 7, 0)(12, RecentlyViewedComponent_Conditional_12_Template, 7, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n\n    ");
        \u0275\u0275template(15, RecentlyViewedComponent_Conditional_15_Template, 3, 1)(16, RecentlyViewedComponent_Conditional_16_Template, 10, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n");
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        ctx.recentItems();
        \u0275\u0275advance(11);
        \u0275\u0275conditional(((tmp_1_0 = ctx.recentItems()) == null ? null : tmp_1_0.length) ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isGlobal ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(((tmp_3_0 = ctx.recentItems()) == null ? null : tmp_3_0.length) ? 15 : 16);
      }
    }, dependencies: [CommonModule, TitleCasePipe, DatePipe, KeyValuePipe, MatCardModule, MatCard, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.recent-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.items-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}\n.item-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: transform 0.2s;\n  position: relative;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.item-card[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.5);\n}\n.item-card[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n.item-card[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.poster[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n}\n.item-info[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.item-info[_ngcontent-%COMP%]   .viewed-at[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.no-items[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n}\n.no-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 16px;\n}\n.type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.type-badge.live[_ngcontent-%COMP%] {\n  background: #e53935;\n  color: white;\n}\n.type-badge.movie[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.type-badge.series[_ngcontent-%COMP%] {\n  background: #43a047;\n  color: white;\n}\n.playlist-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.2rem;\n  font-weight: normal;\n  color: var(--text-color-secondary);\n  padding: 0 8px;\n}\n.playlist-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem 0;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n.global-search-overlay[_nghost-%COMP%]   .recent-container[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .recent-container[_ngcontent-%COMP%] {\n  background: var(--background);\n  height: 100vh;\n}\n.global-search-overlay[_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  background: var(--surface);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentlyViewedComponent, { className: "RecentlyViewedComponent", filePath: "src\\app\\xtream-tauri\\recently-viewed\\recently-viewed.component.ts", lineNumber: 25 });
})();

export {
  RecentlyViewedComponent
};
