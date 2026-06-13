import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-ANEFSDKX.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-EMMDYAAJ.js";
import "./chunk-H6HSJUEJ.js";
import {
  ActivatedRoute,
  FavoritesService,
  Router,
  Store,
  XtreamStore,
  selectActivePlaylist
} from "./chunk-5JZTGDVN.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-DXN3EFMC.js";
import {
  AsyncPipe,
  DatePipe,
  MatIcon,
  MatIconButton,
  NgTemplateOutlet,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YPE2NSDF.js";

// src/app/shared/pipes/filter-by-type.pipe.ts
var FilterByTypePipe = class _FilterByTypePipe {
  transform(items, type) {
    if (!items)
      return [];
    return items.filter((item) => item.type === type);
  }
  static {
    this.\u0275fac = function FilterByTypePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterByTypePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterByType", type: _FilterByTypePipe, pure: true, standalone: true });
  }
};

// src/app/xtream-tauri/favorites/favorites.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => ({ type: "live" });
var _c1 = () => ({ type: "movie" });
var _c2 = () => ({ type: "series" });
function FavoritesComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementContainerEnd();
  }
}
function FavoritesComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementContainerEnd();
  }
}
function FavoritesComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementContainerEnd();
  }
}
function FavoritesComponent_ng_template_27_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "mat-card", 6);
    \u0275\u0275listener("click", function FavoritesComponent_ng_template_27_Conditional_1_For_4_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openItem(item_r2));
    });
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "img", 7);
    \u0275\u0275listener("error", function FavoritesComponent_ng_template_27_Conditional_1_For_4_Template_img_error_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "mat-card-content");
    \u0275\u0275text(6, "\n                            ");
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                            ");
    \u0275\u0275elementStart(10, "p", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function FavoritesComponent_ng_template_27_Conditional_1_For_4_Template_button_click_15_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.removeFromFavorites(item_r2));
    });
    \u0275\u0275text(16, "\n                            ");
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const type_r4 = \u0275\u0275nextContext(2).type;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", item_r2.poster_url || "assets/default-" + type_r4 + ".png", \u0275\u0275sanitizeUrl)("alt", item_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                                Added:\n                                ", \u0275\u0275pipeBind2(12, 4, item_r2.added_at, "d MMMM, y, hh:mm"), "\n                            ");
  }
}
function FavoritesComponent_ng_template_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, FavoritesComponent_ng_template_27_Conditional_1_For_4_Template, 22, 7, null, null, _forTrack0);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "filterByType");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
  }
  if (rf & 2) {
    const type_r4 = \u0275\u0275nextContext().type;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 2, \u0275\u0275pipeBind1(5, 0, ctx_r2.favorites$), type_r4));
  }
}
function FavoritesComponent_ng_template_27_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "favorite_border");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
  }
  if (rf & 2) {
    const type_r4 = \u0275\u0275nextContext().type;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("No favorite ", type_r4, " items");
  }
}
function FavoritesComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, FavoritesComponent_ng_template_27_Conditional_1_Template, 8, 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "filterByType");
    \u0275\u0275template(4, FavoritesComponent_ng_template_27_Conditional_4_Template, 10, 1);
  }
  if (rf & 2) {
    const type_r4 = ctx.type;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind2(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r2.favorites$), type_r4).length ? 1 : 4);
  }
}
var FavoritesComponent = class _FavoritesComponent {
  constructor() {
    this.favoritesService = inject(FavoritesService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.liveCount = 0;
    this.moviesCount = 0;
    this.seriesCount = 0;
  }
  ngOnInit() {
    const playlistId = this.store.selectSignal(selectActivePlaylist)()._id;
    this.favorites$ = this.favoritesService.getFavorites(playlistId);
    this.favorites$.subscribe((items) => {
      this.liveCount = items.filter((item) => item.type === "live").length;
      this.moviesCount = items.filter((item) => item.type === "movie").length;
      this.seriesCount = items.filter((item) => item.type === "series").length;
    });
  }
  removeFromFavorites(item) {
    return __async(this, null, function* () {
      yield this.favoritesService.removeFromFavorites(item.id, item.playlist_id);
      const playlistId = this.store.selectSignal(selectActivePlaylist)()._id;
      this.favorites$ = this.favoritesService.getFavorites(playlistId);
    });
  }
  openItem(item) {
    const type = item.type === "movie" ? "vod" : item.type;
    this.xtreamStore.setSelectedContentType(type);
    if (type === "live") {
      this.router.navigate(["..", type, item.category_id], {
        relativeTo: this.route
      });
    } else {
      this.router.navigate(["..", type, item.category_id, item.xtream_id], {
        relativeTo: this.route
      });
    }
  }
  static {
    this.\u0275fac = function FavoritesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesComponent, selectors: [["app-favorites"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 18, consts: [["itemsGrid", ""], [1, "favorites-container"], [1, "header"], [3, "label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "items-grid"], [1, "item-card", 3, "click"], [1, "item-image", 3, "error", "src", "alt"], [1, "added-date"], ["mat-icon-button", "", "color", "warn", 1, "favorite-button", 3, "click"], [1, "no-items"]], template: function FavoritesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n\n    ");
        \u0275\u0275elementStart(9, "mat-tab-group");
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementStart(11, "mat-tab", 3);
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275template(13, FavoritesComponent_ng_container_13_Template, 2, 0, "ng-container", 4);
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275elementStart(16, "mat-tab", 3);
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275template(18, FavoritesComponent_ng_container_18_Template, 2, 0, "ng-container", 4);
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n        ");
        \u0275\u0275elementStart(21, "mat-tab", 3);
        \u0275\u0275text(22, "\n            ");
        \u0275\u0275template(23, FavoritesComponent_ng_container_23_Template, 2, 0, "ng-container", 4);
        \u0275\u0275text(24, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n\n    ");
        \u0275\u0275template(27, FavoritesComponent_ng_template_27_Template, 5, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(29, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n");
      }
      if (rf & 2) {
        const itemsGrid_r5 = \u0275\u0275reference(28);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "CHANNELS.FAVORITES"));
        \u0275\u0275advance(6);
        \u0275\u0275propertyInterpolate1("label", "Live TV (", ctx.liveCount, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", itemsGrid_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(15, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate1("label", "Movies (", ctx.moviesCount, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", itemsGrid_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(16, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275propertyInterpolate1("label", "Series (", ctx.seriesCount, ")");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", itemsGrid_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction0(17, _c2));
      }
    }, dependencies: [
      AsyncPipe,
      DatePipe,
      FilterByTypePipe,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatIcon,
      MatIconButton,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      NgTemplateOutlet,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.favorites-container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.items-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 16px;\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n}\n.item-card[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.2s;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.item-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.item-image[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n}\n.favorite-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 1;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  flex-grow: 1;\n}\nmat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.2;\n  max-height: 2.4em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n}\n.added-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  margin: 4px 0 0 0;\n}\n.no-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesComponent, { className: "FavoritesComponent", filePath: "src\\app\\xtream-tauri\\favorites\\favorites.component.ts", lineNumber: 34 });
})();
export {
  FavoritesComponent
};
