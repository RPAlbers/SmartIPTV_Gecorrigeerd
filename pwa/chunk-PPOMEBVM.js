import {
  DialogService,
  PlaylistInfoComponent
} from "./chunk-7D56BM5K.js";
import {
  MatDialog
} from "./chunk-CZ2VXG7N.js";
import {
  MatListItem,
  MatListModule,
  MatNavList
} from "./chunk-BDY4BXGD.js";
import {
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import {
  ActivatedRoute,
  DatabaseService,
  Router,
  RouterLink,
  Store,
  XtreamStore,
  removePlaylist,
  selectCurrentPlaylist
} from "./chunk-PZD5NHA7.js";
import {
  MatTooltipModule
} from "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-3G7KW6UL.js";
import {
  EventEmitter,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/playlist-error-view/playlist-error-view.component.ts
function PlaylistErrorViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275text(2, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275text(2, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-icon", 3);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPlaylistDetails());
    });
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "button", 6);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_11_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeClicked());
    });
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(8, 3, "PORTALS.ERROR_VIEW.HOME"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(15, 5, "PORTALS.ERROR_VIEW.PLAYLIST_SETTINGS"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(22, 7, "PORTALS.ERROR_VIEW.DELETE"), "\n            ");
  }
}
var PlaylistErrorViewComponent = class _PlaylistErrorViewComponent {
  constructor() {
    this.databaseService = inject(DatabaseService);
    this.dialog = inject(MatDialog);
    this.dialogService = inject(DialogService);
    this.router = inject(Router);
    this.store = inject(Store);
    this.translate = inject(TranslateService);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.showActionButtons = true;
    this.viewType = "ERROR";
  }
  openPlaylistDetails() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  removeClicked() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.removePlaylist(this.currentPlaylist()._id)
    });
  }
  removePlaylist(playlistId) {
    this.store.dispatch(removePlaylist({ playlistId }));
    this.router.navigate(["/"]);
    this.databaseService.deletePlaylist(playlistId);
  }
  static {
    this.\u0275fac = function PlaylistErrorViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistErrorViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistErrorViewComponent, selectors: [["app-playlist-error-view"]], inputs: { description: "description", showActionButtons: "showActionButtons", title: "title", viewType: "viewType" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "expired-account"], ["src", "./assets/images/broken-tv.svg"], ["src", "./assets/images/empty-category.svg", 1, "empty-category-img"], [1, "icon"], ["mat-stroked-button", "", "routerLink", "/"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function PlaylistErrorViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275template(2, PlaylistErrorViewComponent_Conditional_2_Template, 3, 0)(3, PlaylistErrorViewComponent_Conditional_3_Template, 3, 0)(4, PlaylistErrorViewComponent_Conditional_4_Template, 4, 0);
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "h3");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n\n    ");
        \u0275\u0275template(11, PlaylistErrorViewComponent_Conditional_11_Template, 25, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.viewType === "ERROR" ? 2 : ctx.viewType === "EMPTY_CATEGORY" ? 3 : ctx.viewType === "NO_SEARCH_RESULTS" ? 4 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", ctx.description, "\n    ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showActionButtons ? 11 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.expired-account[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n}\n.expired-account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(80%);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}\n.empty-category-img[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n  .dark-theme .expired-account img {\n  filter: invert(10%) !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistErrorViewComponent, { className: "PlaylistErrorViewComponent", filePath: "src\\app\\xtream-tauri\\playlist-error-view\\playlist-error-view.component.ts", lineNumber: 21 });
})();

// src/app/xtream-tauri/category-view/category-view.component.ts
function CategoryViewComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-list-item", 0);
    \u0275\u0275listener("click", function CategoryViewComponent_Conditional_6_For_4_Template_mat_list_item_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.categoryClicked.emit(item_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r2.isSelected(item_r2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", item_r2.category_name || item_r2.name || "No category name", "\n            ");
  }
}
function CategoryViewComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 3, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryViewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-nav-list");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275repeaterCreate(3, CategoryViewComponent_Conditional_6_For_4_Template, 4, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(5, CategoryViewComponent_Conditional_6_Conditional_5_Template, 4, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const items_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(items_r4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(items_r4 == null ? null : items_r4.length) ? 5 : -1);
  }
}
function CategoryViewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-playlist-error-view", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryViewComponent = class _CategoryViewComponent {
  constructor() {
    this.categoryClicked = new EventEmitter();
    this.xtreamStore = inject(XtreamStore);
    this.route = inject(ActivatedRoute);
  }
  ngOnInit() {
    const { categoryId } = this.route.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
  }
  isSelected(item) {
    const selectedCategory = this.xtreamStore.selectedCategoryId();
    const itemId = Number(item.category_id || item.id);
    return selectedCategory !== null && selectedCategory === itemId;
  }
  static {
    this.\u0275fac = function CategoryViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryViewComponent, selectors: [["app-category-view"]], outputs: { categoryClicked: "categoryClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "category-item", 3, "click"], ["title", "No results", 3, "description", "showActionButtons", "viewType"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n");
        \u0275\u0275declareLet(2);
        \u0275\u0275text(3, "\n");
        \u0275\u0275declareLet(4);
        \u0275\u0275text(5, "\n\n");
        \u0275\u0275template(6, CategoryViewComponent_Conditional_6_Template, 7, 1)(7, CategoryViewComponent_Conditional_7_Template, 5, 8);
      }
      if (rf & 2) {
        const items_r5 = \u0275\u0275storeLet(ctx.xtreamStore.getCategoriesBySelectedType());
        ctx.xtreamStore.selectedContentType();
        ctx.xtreamStore.selectedCategoryId();
        \u0275\u0275advance(6);
        \u0275\u0275conditional((items_r5 == null ? null : items_r5.length) > 0 ? 6 : 7);
      }
    }, dependencies: [
      MatCardModule,
      MatListModule,
      MatNavList,
      MatListItem,
      MatTooltipModule,
      PlaylistErrorViewComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding: 0 10px;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n.category-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: auto;\n  transition: all 0.2s ease;\n}\n.category-item.selected[_ngcontent-%COMP%] {\n  background-color: rgba(63, 81, 181, 0.1);\n  border-left: 4px solid #3f51b5;\n  margin-left: 4px;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  padding: 12px;\n}\n@media (max-width: 800px) {\n  .category-item[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 4px;\n  }\n}"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryViewComponent, { className: "CategoryViewComponent", filePath: "src\\app\\xtream-tauri\\category-view\\category-view.component.ts", lineNumber: 31 });
})();

export {
  CategoryViewComponent
};
