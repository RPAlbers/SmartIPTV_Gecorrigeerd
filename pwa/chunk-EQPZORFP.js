import {
  CategoryContentViewComponent,
  CategoryViewComponent,
  ContentType,
  NavigationBarComponent,
  PlayerDialogComponent,
  PlaylistErrorViewComponent,
  VodDetailsComponent
} from "./chunk-L67YRY5R.js";
import "./chunk-H7VUURBU.js";
import "./chunk-EI2PIGDC.js";
import "./chunk-DSQXRORC.js";
import "./chunk-AFKQ3PMZ.js";
import "./chunk-R2T2KEKH.js";
import "./chunk-Q7XHDWJ2.js";
import "./chunk-KDMRIURV.js";
import {
  IpcCommand,
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-IHEE5QXR.js";
import "./chunk-BLAGRDUN.js";
import {
  ExternalPlayerInfoDialogComponent,
  PortalStore
} from "./chunk-QTVF6LFJ.js";
import "./chunk-LNFD2TIE.js";
import "./chunk-5SMZVLW2.js";
import "./chunk-3J2HDFX4.js";
import {
  STORE_KEY,
  StorageMap,
  VideoPlayer
} from "./chunk-WLQZSEEB.js";
import {
  ERROR,
  OPEN_MPV_PLAYER,
  OPEN_VLC_PLAYER,
  STALKER_REQUEST,
  STALKER_RESPONSE
} from "./chunk-ARLSKJ4U.js";
import "./chunk-7D56BM5K.js";
import {
  PlaylistsService
} from "./chunk-6QCFH7Z4.js";
import {
  MatSnackBar
} from "./chunk-J4KICW5Y.js";
import "./chunk-UCJQWIMR.js";
import {
  MatDialog
} from "./chunk-CZ2VXG7N.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-BDY4BXGD.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-7SWSYMZ3.js";
import "./chunk-DSAERC54.js";
import "./chunk-TZPCFWSH.js";
import "./chunk-FHIW4JSF.js";
import "./chunk-XUXZW7VT.js";
import {
  ActivatedRoute,
  DataService,
  Router,
  Store,
  selectCurrentPlaylist,
  toSignal
} from "./chunk-PZD5NHA7.js";
import "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-3G7KW6UL.js";
import "./chunk-RCJSYGGY.js";
import "./chunk-EY4ID5NF.js";
import {
  AsyncPipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  NgIf,
  NgOptimizedImage,
  NgZone,
  __spreadProps,
  __spreadValues,
  effect,
  inject,
  input,
  output,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L3GV7X4D.js";

// shared/stalker-portal-actions.enum.ts
var StalkerPortalActions;
(function(StalkerPortalActions2) {
  StalkerPortalActions2["GetCategories"] = "get_categories";
  StalkerPortalActions2["GetGenres"] = "get_genres";
  StalkerPortalActions2["CreateLink"] = "create_link";
  StalkerPortalActions2["GetOrderedList"] = "get_ordered_list";
  StalkerPortalActions2["Favorites"] = "favorites";
  StalkerPortalActions2["Handshake"] = "handshake";
  StalkerPortalActions2["DoAuth"] = "do_auth";
})(StalkerPortalActions || (StalkerPortalActions = {}));

// src/app/stalker/stalker-content-types.ts
var StalkerContentTypes = {
  stb: {
    doAuth: "do_auth",
    handshake: "handshake"
  },
  itv: {
    title: "Live streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetGenres,
    getLink: StalkerPortalActions.CreateLink
  },
  vod: {
    title: "VOD streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  },
  series: {
    title: "Series",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  }
  /* radio: {
      title: 'Radio',
      getContentAction: StalkerPortalActions.GetOrderedList,
      getCategoryAction: StalkerPortalActions.GetOrderedList,
      getLink: StalkerPortalActions.CreateLink,
  }, */
};

// src/app/stalker/favorites-button/favorites-button.component.ts
function FavoritesButtonComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function FavoritesButtonComponent_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToFavorites());
    });
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n    ", \u0275\u0275pipeBind1(5, 1, "PORTALS.ADD_TO_FAVORITES"), "\n");
  }
}
function FavoritesButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function FavoritesButtonComponent_ng_template_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites());
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n    ");
  }
}
var FavoritesButtonComponent = class _FavoritesButtonComponent {
  constructor() {
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.snackBar = inject(MatSnackBar);
    this.translateService = inject(TranslateService);
    this.portalId = this.route.snapshot.paramMap.get("id");
    this.serialMeta = input.required();
    this.isFavorite = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      this.isFavorite = favorites.some((i) => i.movie_id === this.serialMeta().movie_id);
    });
  }
  toggleFavorites(isFav) {
    if (isFav)
      this.removeFromFavorites();
    else
      this.addToFavorites();
  }
  removeFromFavorites() {
    this.playlistService.removeFromPortalFavorites(this.portalId, this.serialMeta().movie_id).subscribe(() => {
      this.snackBar.open(this.translateService.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
      this.checkFavoriteStatus();
    });
  }
  addToFavorites() {
    this.playlistService.addPortalFavorite(this.portalId, this.serialMeta()).subscribe(() => {
      this.snackBar.open(this.translateService.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
      this.checkFavoriteStatus();
    });
  }
  static {
    this.\u0275fac = function FavoritesButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesButtonComponent, selectors: [["app-favorites-button"]], inputs: { serialMeta: [1, "serialMeta"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["removeFromFavoritesButton", ""], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function FavoritesButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FavoritesButtonComponent_button_0_Template, 6, 3, "button", 1);
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275template(2, FavoritesButtonComponent_ng_template_2_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(4, "\n");
      }
      if (rf & 2) {
        const removeFromFavoritesButton_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", !ctx.isFavorite)("ngIfElse", removeFromFavoritesButton_r4);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, NgIf, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesButtonComponent, { className: "FavoritesButtonComponent", filePath: "src\\app\\stalker\\favorites-button\\favorites-button.component.ts", lineNumber: 16 });
})();

// src/app/stalker/stalker-series-view/stalker-series-view.component.ts
var _c0 = (a0, a1, a2) => ({ movie_id: a0, name: a1, cover: a2 });
function StalkerSeriesViewComponent_Conditional_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const serial_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSrc", serial_r1.screenshot_uri);
  }
}
function StalkerSeriesViewComponent_Conditional_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275text(2, "\n            ");
  }
}
function StalkerSeriesViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, StalkerSeriesViewComponent_Conditional_2_img_3_Template, 1, 1, "img", 4);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275template(5, StalkerSeriesViewComponent_Conditional_2_ng_template_5_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n\n        ");
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementStart(11, "h2");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "div", 6);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25, "\n                ");
    \u0275\u0275elementStart(26, "div", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32, "\n                ");
    \u0275\u0275elementStart(33, "div", 6);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n            ");
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39, "\n                ");
    \u0275\u0275elementStart(40, "div", 6);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementStart(45, "div");
    \u0275\u0275text(46, "\n                ");
    \u0275\u0275elementStart(47, "div", 6);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275elementStart(52, "div");
    \u0275\u0275text(53, "\n                ");
    \u0275\u0275elementStart(54, "div", 6);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, "\n            ");
    \u0275\u0275elementStart(59, "div");
    \u0275\u0275text(60, "\n                ");
    \u0275\u0275elementStart(61, "div", 6);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "div");
    \u0275\u0275text(67, "\n                ");
    \u0275\u0275elementStart(68, "div", 6);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n            ");
    \u0275\u0275elementStart(73, "div", 7);
    \u0275\u0275text(74, "\n                ");
    \u0275\u0275element(75, "app-favorites-button", 8);
    \u0275\u0275text(76, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n    ");
  }
  if (rf & 2) {
    const serial_r1 = ctx;
    const placeholderCover_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", serial_r1.screenshot_uri)("ngIfElse", placeholderCover_r2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(serial_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.description, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 21, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.director, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 23, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.actors, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 25, "XTREAM.YEAR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.year, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 27, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.genres_str, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(49, 29, "XTREAM.AGE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.age, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(56, 31, "XTREAM.IMDB_RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.rating_imdb, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(63, 33, "XTREAM.KINOPOISK_RATING"), ":\n                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.rating_kinopoisk, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(70, 35, "HOME.PLAYLISTS.ADDED"), ":\n                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.added, "\n            ");
    \u0275\u0275advance(4);
    \u0275\u0275property("serialMeta", \u0275\u0275pureFunction3(37, _c0, serial_r1.id, serial_r1.name, serial_r1.screenshot_uri));
  }
}
function StalkerSeriesViewComponent_For_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 12);
    \u0275\u0275listener("click", function StalkerSeriesViewComponent_For_7_For_9_Template_button_click_1_listener() {
      const episode_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.playEpisode.emit({ series: episode_r4, cmd: item_r5.cmd }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
  }
  if (rf & 2) {
    const episode_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\n                    ", \u0275\u0275pipeBind1(3, 2, "XTREAM.EPISODE"), " ", episode_r4, "\n                ");
  }
}
function StalkerSeriesViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275repeaterCreate(8, StalkerSeriesViewComponent_For_7_For_9_Template, 5, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n    ");
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r5.series);
  }
}
function sortByNumericValue(array) {
  if (!array)
    return [];
  const key = "name";
  return array.sort((a, b) => {
    const numericA = extractNumericValue(a[key]);
    const numericB = extractNumericValue(b[key]);
    return numericA - numericB;
  });
}
function extractNumericValue(str) {
  const matches = str.match(/\d+/);
  if (matches) {
    return parseInt(matches[0], 10);
  }
  return 0;
}
var StalkerSeriesViewComponent = class _StalkerSeriesViewComponent {
  constructor() {
    this.seasons = input.required({
      transform: sortByNumericValue
    });
    this.playEpisode = output();
  }
  static {
    this.\u0275fac = function StalkerSeriesViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerSeriesViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerSeriesViewComponent, selectors: [["app-stalker-series-view"]], inputs: { seasons: [1, "seasons"] }, outputs: { playEpisode: "playEpisode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [["placeholderCover", ""], [1, "container"], [1, "seasons"], [1, "image"], ["style", "position: relative", "fill", "", 3, "ngSrc", 4, "ngIf", "ngIfElse"], [1, "details"], [1, "label"], [1, "action-buttons"], [3, "serialMeta"], ["fill", "", 2, "position", "relative", 3, "ngSrc"], [1, "placeholder-cover"], [1, "episodes"], ["mat-stroked-button", "", 3, "click"]], template: function StalkerSeriesViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275template(2, StalkerSeriesViewComponent_Conditional_2_Template, 79, 41);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275repeaterCreate(6, StalkerSeriesViewComponent_For_7_Template, 11, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = ctx.seasons()[0]) ? 2 : -1, tmp_0_0);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.seasons());
      }
    }, dependencies: [
      FavoritesButtonComponent,
      MatButtonModule,
      MatButton,
      MatDividerModule,
      MatDivider,
      NgIf,
      NgOptimizedImage,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 350px 450px;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerSeriesViewComponent, { className: "StalkerSeriesViewComponent", filePath: "src\\app\\stalker\\stalker-series-view\\stalker-series-view.component.ts", lineNumber: 42 });
})();

// src/app/stalker/stalker-main-container.component.ts
var _c02 = () => [];
var _c1 = () => ({ width: "170px", height: "270px" });
var _c2 = () => ({ width: "60%", height: "30px" });
var _c3 = () => ({ width: "170px", height: "51px" });
function StalkerMainContainerComponent_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "ngx-skeleton-loader", 4);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275element(5, "ngx-skeleton-loader", 4);
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(3, _c2));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, StalkerMainContainerComponent_Conditional_2_Conditional_3_For_4_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02).constructor(14));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "ngx-skeleton-loader", 4);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(1, _c3));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, StalkerMainContainerComponent_Conditional_2_Conditional_4_For_4_Template, 3, 2, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02).constructor(14));
  }
}
function StalkerMainContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275template(3, StalkerMainContainerComponent_Conditional_2_Conditional_3_Template, 6, 1)(4, StalkerMainContainerComponent_Conditional_2_Conditional_4_Template, 6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.currentLayout === "category_content" ? 3 : ctx_r0.currentLayout === "category" ? 4 : -1);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-view", 6);
    \u0275\u0275listener("categoryClicked", function StalkerMainContainerComponent_Conditional_3_Case_1_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.categoryClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-paginator", 8);
    \u0275\u0275listener("page", function StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handlePageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r0.length)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 7);
    \u0275\u0275listener("itemClicked", function StalkerMainContainerComponent_Conditional_3_Case_2_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template, 3, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.currentLayout === "category_content" && ctx_r0.length && ctx_r0.length > 0 ? 3 : -1);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 9);
    \u0275\u0275listener("playClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_playClicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createLinkToPlayVod(ctx_r0.itemDetails.cmd));
    })("addToFavoritesClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.itemDetails);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-stalker-series-view", 10);
    \u0275\u0275listener("playEpisode", function StalkerMainContainerComponent_Conditional_3_Case_4_Template_app_stalker_series_view_playEpisode_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createLinkToPlayEpisode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("seasons", ctx_r0.seasons);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("itemClicked", function StalkerMainContainerComponent_Conditional_3_Case_5_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.favoriteClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", \u0275\u0275pipeBind1(2, 1, ctx_r0.favorites$));
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.TITLE"))("description", \u0275\u0275pipeBind1(3, 4, "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.DESCRIPTION"));
  }
}
function StalkerMainContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275template(1, StalkerMainContainerComponent_Conditional_3_Case_1_Template, 3, 1)(2, StalkerMainContainerComponent_Conditional_3_Case_2_Template, 4, 2)(3, StalkerMainContainerComponent_Conditional_3_Case_3_Template, 3, 1)(4, StalkerMainContainerComponent_Conditional_3_Case_4_Template, 3, 1)(5, StalkerMainContainerComponent_Conditional_3_Case_5_Template, 4, 3)(6, StalkerMainContainerComponent_Conditional_3_Case_6_Template, 5, 6);
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.currentLayout) === "category" ? 1 : tmp_1_0 === "category_content" ? 2 : tmp_1_0 === "vod-details" ? 3 : tmp_1_0 === "serial-details" ? 4 : tmp_1_0 === "favorites" ? 5 : tmp_1_0 === "not-available" ? 6 : -1);
  }
}
var StalkerMainContainerComponent = class _StalkerMainContainerComponent {
  constructor(activatedRoute, dataService, dialog, ngZone, playlistService, portalStore, router, snackBar, storage, store, translate) {
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.dialog = dialog;
    this.ngZone = ngZone;
    this.playlistService = playlistService;
    this.portalStore = portalStore;
    this.router = router;
    this.snackBar = snackBar;
    this.storage = storage;
    this.store = store;
    this.translate = translate;
    this.breadcrumbs = [];
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.listeners = [];
    this.isLoading = true;
    this.selectedContentType = ContentType.VODS;
    this.currentLayout = "category";
    this.searchPhrase = this.portalStore.searchPhrase();
    this.settings = toSignal(this.storage.get(STORE_KEY.Settings));
    this.items = [];
    this.navigationContentTypes = [
      {
        contentType: ContentType.ITV,
        label: "Live Streams",
        icon: "live_tv"
      },
      {
        contentType: ContentType.VODS,
        label: "VOD Streams",
        icon: "movie"
      },
      {
        contentType: ContentType.SERIES,
        label: "Series",
        icon: "video_library"
      }
      /* {
          contentType: ContentType.RADIO,
          label: 'Radio',
      }, */
    ];
    this.hideExternalInfoDialog = this.portalStore.hideExternalInfoDialog;
    this.length = 0;
    this.pageSize = 14;
    this.pageIndex = 0;
    this.seasons = [];
    this.commandsList = [
      new IpcCommand(STALKER_RESPONSE, (response) => this.handleResponse(response)),
      new IpcCommand(ERROR, (response) => {
        this.currentLayout = "not-available";
        this.showErrorAsNotification(response);
        this.isLoading = false;
      })
    ];
    effect(() => {
      if (this.currentPlaylist()) {
        if (this.currentPlaylist().password && this.currentPlaylist().username) {
          this.handshake();
        } else {
          this.selectedContentType = this.activatedRoute.snapshot.queryParams.type ?? ContentType.VODS;
          const action = this.activatedRoute.snapshot.queryParams.action ?? StalkerPortalActions.GetCategories;
          const { category, movie_id } = this.activatedRoute.snapshot.queryParams;
          if (action === StalkerPortalActions.GetCategories) {
            this.getCategories(this.selectedContentType);
          } else if (action === StalkerPortalActions.GetOrderedList && (category || movie_id)) {
            this.getOrderedList(this.selectedContentType, category, movie_id);
          }
        }
        this.favorites$ = this.playlistService.getPortalFavorites(this.currentPlaylist()._id);
      }
    }, { allowSignalWrites: true });
    this.portalStore.setSearchPhrase("");
  }
  ngOnInit() {
    this.commandsList.forEach((command) => {
      if (this.dataService.isElectron) {
        this.dataService.listenOn(command.id, (_event, response) => this.ngZone.run(() => command.callback(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.callback(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  handshake() {
    this.sendRequest({
      action: StalkerPortalActions.Handshake,
      type: ContentType.STB
    });
  }
  setInitialBreadcrumb(action, title) {
    this.breadcrumbs = [{ title, action }];
  }
  getCategories(contentType) {
    this.router.navigate([], { queryParams: { type: contentType } });
    this.selectedContentType = contentType;
    this.currentLayout = "category";
    const action = StalkerContentTypes[contentType].getCategoryAction;
    this.pageIndex = 0;
    this.setInitialBreadcrumb(action, this.translate.instant("PORTALS.ALL_CATEGORIES"));
    this.sendRequest({ action, type: contentType });
  }
  getOrderedList(type, category, movieId) {
    if (!movieId) {
      this.currentLayout = "category_content";
    } else {
      if (type === ContentType.SERIES) {
        this.currentLayout = "serial-details";
      } else if (type === ContentType.VODS) {
        this.currentLayout = "vod-details";
      }
    }
    const action = StalkerPortalActions.GetOrderedList;
    this.setInitialBreadcrumb(action, this.translate.instant("PORTALS.ALL_CATEGORIES"));
    this.sendRequest(__spreadValues({
      action,
      type,
      category
    }, movieId ? { movie_id: movieId } : {}));
  }
  sendRequest(params) {
    if (params.action !== StalkerPortalActions.CreateLink) {
      this.isLoading = true;
      this.items = [];
    }
    const { portalUrl, macAddress } = this.currentPlaylist();
    let token = {};
    if (sessionStorage.getItem(this.currentPlaylist()._id)) {
      token = sessionStorage.getItem(this.currentPlaylist()._id);
    }
    this.updateRoute(params);
    this.dataService.sendIpcEvent(STALKER_REQUEST, {
      url: portalUrl,
      macAddress,
      params: __spreadProps(__spreadValues({}, params), {
        token
      })
    });
  }
  updateRoute(params) {
    let queryParams;
    if (params.action === StalkerPortalActions.GetCategories) {
      queryParams = {
        action: params.action,
        type: params.type
      };
    } else if (params.action === StalkerPortalActions.GetOrderedList) {
      queryParams = __spreadValues(__spreadValues({
        action: params.action,
        type: params.type
      }, params.category ? { category: params.category } : {}), params.movie_id ? { movie_id: params.movie_id } : {});
    }
    this.router.navigate([], {
      queryParams
    });
  }
  showErrorAsNotification(response) {
    this.snackBar.open(`Error: ${response?.message ?? "Something went wrong"} (Status: ${response?.status ?? 0})`, null, { duration: 4e3 });
    this.isLoading = false;
  }
  handleResponse(response) {
    if (typeof response.payload !== "object") {
      this.isLoading = false;
      return;
    }
    if (this.currentLayout === "serial-details" && response.action !== StalkerPortalActions.CreateLink) {
      this.seasons = response.payload.js.data;
      this.portalStore.setCurrentSerial(this.seasons);
    }
    if (response.action === StalkerPortalActions.GetCategories || response.action === StalkerPortalActions.GetGenres) {
      this.items = response.payload.js.map((item) => ({
        category_name: item.title,
        category_id: item.id
      }));
    } else if (response.action === StalkerPortalActions.GetOrderedList) {
      if (response.payload.js.data && response.payload.js.data.length > 0)
        this.portalStore.setContent(response.payload.js.data);
      this.items = response.payload.js.data.map((item) => __spreadProps(__spreadValues({}, item), {
        cover: item.screenshot_uri
      }));
      this.length = response.payload.js.total_items;
    } else if (response.action === StalkerPortalActions.CreateLink) {
      let url = response.payload.js.cmd;
      if (url?.startsWith("ffmpeg")) {
        url = url.split(" ")[1];
      }
      this.openPlayer(url);
    } else if (response.action === StalkerPortalActions.Handshake) {
      const token = response.payload.js.token;
      sessionStorage.setItem(this.currentPlaylist()._id, token);
      this.sendRequest({
        action: StalkerPortalActions.DoAuth,
        login: this.currentPlaylist().username,
        password: this.currentPlaylist().password,
        type: ContentType.STB,
        token
      });
    } else if (response.action === StalkerPortalActions.DoAuth) {
      this.getCategories(this.selectedContentType);
    }
    this.isLoading = false;
  }
  openPlayer(streamUrl) {
    this.storage.get(STORE_KEY.Settings).subscribe((settings) => {
      const player = settings?.player ?? VideoPlayer.VideoJs;
      if (player === VideoPlayer.MPV) {
        if (!this.hideExternalInfoDialog())
          this.dialog.open(ExternalPlayerInfoDialogComponent);
        this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, {
          url: streamUrl,
          mpvPlayerPath: settings?.mpvPlayerPath
        });
      } else if (player === VideoPlayer.VLC) {
        if (!this.hideExternalInfoDialog())
          this.dialog.open(ExternalPlayerInfoDialogComponent);
        this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, {
          url: streamUrl,
          vlcPlayerPath: settings?.vlcPlayerPath
        });
      } else {
        this.dialog.open(PlayerDialogComponent, {
          data: {
            streamUrl,
            title: this.itvTitle
          },
          width: "80%"
        });
      }
    });
  }
  categoryClicked(item) {
    this.currentLayout = "category_content";
    this.currentCategoryId = item.category_id;
    const action = StalkerContentTypes[this.selectedContentType].getContentAction;
    this.portalStore.setSearchPhrase("");
    this.breadcrumbs.push({
      title: item.category_name,
      category_id: item.category_id,
      action
    });
    this.sendRequest({
      action,
      type: this.selectedContentType,
      category: item.category_id,
      genre: item.category_id
    });
  }
  favoriteClicked(item) {
    if (item.movie_id) {
      this.getSerialDetails(item);
    } else if (item.stream_id && item.details) {
      this.itemDetails = item.details;
      this.breadcrumbs.push({
        title: this.itemDetails?.info?.name,
        action: StalkerPortalActions.GetOrderedList
      });
      this.currentLayout = "vod-details";
    } else {
      this.snackBar.open("Something went wrong, id is missing.");
    }
  }
  getSerialDetails(item) {
    this.sendRequest({
      action: StalkerPortalActions.GetOrderedList,
      type: ContentType.SERIES,
      movie_id: item.id ?? item.movie_id
    });
    this.breadcrumbs.push({
      title: item.name,
      action: StalkerPortalActions.GetCategories
    });
    this.currentLayout = "serial-details";
  }
  getVodDetails(item) {
    const selectedContent = this.portalStore.getContentById(item.id)();
    this.itemDetails = {
      id: item.id,
      cmd: selectedContent.cmd,
      info: {
        movie_image: selectedContent.screenshot_uri,
        description: selectedContent.description,
        name: selectedContent.name,
        director: selectedContent.director,
        releasedate: selectedContent.year,
        genre: selectedContent.genres_str,
        actors: selectedContent.actors,
        rating_imdb: selectedContent.rating_imdb,
        rating_kinopoisk: selectedContent.rating_kinopoisk
      }
    };
    this.breadcrumbs.push({
      title: this.itemDetails?.info?.name,
      action: StalkerPortalActions.GetOrderedList
    });
    this.currentLayout = "vod-details";
  }
  itemClicked(item) {
    this.itvTitle = item.name;
    if (this.selectedContentType === ContentType.SERIES) {
      this.getSerialDetails(item);
    } else if (this.selectedContentType === ContentType.ITV) {
      this.createLinkToPlayVod(item.cmd);
    } else if (this.selectedContentType === ContentType.VODS) {
      this.getVodDetails(item);
    }
  }
  createLinkToPlayEpisode(payload) {
    this.sendRequest({
      action: StalkerPortalActions.CreateLink,
      type: ContentType.VODS,
      cmd: payload.cmd,
      series: payload.series,
      forced_storage: "undefined",
      disable_ad: "0",
      JsHttpRequest: "1-xml"
    });
  }
  createLinkToPlayVod(cmd) {
    this.sendRequest({
      action: StalkerPortalActions.CreateLink,
      type: this.selectedContentType,
      cmd: cmd ?? this.itemDetails.cmd,
      forced_storage: "undefined",
      disable_ad: "0",
      JsHttpRequest: "1-xml"
    });
  }
  breadcrumbClicked(breadcrumb) {
    const itemIndex = this.breadcrumbs.findIndex((i) => i === breadcrumb);
    if (itemIndex === this.breadcrumbs.length - 1)
      return;
    this.breadcrumbs.splice(itemIndex + 1, this.breadcrumbs.length - itemIndex - 1);
    if (breadcrumb.action === StalkerPortalActions.GetOrderedList) {
      this.currentLayout = "category_content";
    } else if (breadcrumb.action === StalkerPortalActions.GetCategories || breadcrumb.action === StalkerPortalActions.GetGenres) {
      this.pageIndex = 0;
      this.currentLayout = "category";
    } else if (breadcrumb.action === StalkerPortalActions.Favorites) {
      this.currentLayout = "favorites";
    }
    this.currentCategoryId = breadcrumb.category_id;
    this.sendRequest(__spreadValues({
      action: breadcrumb.action,
      type: this.selectedContentType
    }, breadcrumb.category_id ? {
      category: breadcrumb.category_id,
      genre: breadcrumb.category_id
    } : {}));
  }
  addToFavorites(item) {
    this.playlistService.addPortalFavorite(this.currentPlaylist()._id, item).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  removeFromFavorites(favoriteId) {
    this.playlistService.removeFromPortalFavorites(this.currentPlaylist()._id, favoriteId).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  setSearchPhrase(searchPhrase) {
    if (this.currentLayout === "category_content" && this.searchPhrase !== searchPhrase) {
      this.pageIndex = 0;
      this.searchPhrase = searchPhrase;
      this.sendRequest(__spreadValues({
        action: StalkerContentTypes[this.selectedContentType].getContentAction,
        type: this.selectedContentType,
        search: searchPhrase
      }, this.currentCategoryId ? {
        category: this.currentCategoryId,
        genre: this.currentCategoryId
      } : {}));
    }
  }
  handlePageChange(event) {
    this.pageIndex = Number(event.pageIndex);
    this.sendRequest({
      action: StalkerPortalActions.GetOrderedList,
      type: this.selectedContentType,
      category: this.currentCategoryId,
      genre: this.currentCategoryId,
      p: this.pageIndex + 1
    });
  }
  favoriteViewClicked() {
    this.currentLayout = "favorites";
    this.setInitialBreadcrumb(StalkerPortalActions.Favorites, this.translate.instant("PORTALS.MY_FAVORITES"));
  }
  ngOnDestroy() {
    this.portalStore.setSearchPhrase("");
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  static {
    this.\u0275fac = function StalkerMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerMainContainerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(PortalStore), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(StorageMap), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerMainContainerComponent, selectors: [["app-stalker-main-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 8, consts: [[3, "searchTextChanged", "contentTypeChanged", "breadcrumbClicked", "favoritesClicked", "breadcrumbs", "contentType", "clientSideSearch", "searchVisible", "contentTypeNavigationItems", "showCategories"], [1, "loading-wrapper"], [1, "loading-container", "category-content-view"], [1, "skeleton-item"], ["count", "1", 3, "theme"], [1, "loading-container", "category-view"], [3, "categoryClicked", "items"], [3, "itemClicked", "items"], ["aria-label", "Select page", 3, "page", "length", "pageIndex", "pageSize"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "playEpisode", "seasons"], [3, "title", "description"]], template: function StalkerMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-navigation-bar", 0);
        \u0275\u0275listener("searchTextChanged", function StalkerMainContainerComponent_Template_app_navigation_bar_searchTextChanged_0_listener($event) {
          return ctx.setSearchPhrase($event);
        })("contentTypeChanged", function StalkerMainContainerComponent_Template_app_navigation_bar_contentTypeChanged_0_listener($event) {
          return ctx.getCategories($event);
        })("breadcrumbClicked", function StalkerMainContainerComponent_Template_app_navigation_bar_breadcrumbClicked_0_listener($event) {
          return ctx.breadcrumbClicked($event);
        })("favoritesClicked", function StalkerMainContainerComponent_Template_app_navigation_bar_favoritesClicked_0_listener() {
          return ctx.favoriteViewClicked();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275template(2, StalkerMainContainerComponent_Conditional_2_Template, 6, 1)(3, StalkerMainContainerComponent_Conditional_3_Template, 8, 1);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("contentType", ctx.selectedContentType)("clientSideSearch", ctx.currentLayout === "category_content" ? false : true)("searchVisible", (ctx.currentLayout === "category" || ctx.currentLayout === "category_content") && (ctx.items == null ? null : ctx.items.length) > 0)("contentTypeNavigationItems", ctx.navigationContentTypes)("contentType", ctx.selectedContentType)("showCategories", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 2 : 3);
      }
    }, dependencies: [
      AsyncPipe,
      CategoryContentViewComponent,
      CategoryViewComponent,
      MatPaginatorModule,
      MatPaginator,
      NavigationBarComponent,
      NgxSkeletonLoaderModule,
      NgxSkeletonLoaderComponent,
      PlaylistErrorViewComponent,
      StalkerSeriesViewComponent,
      TranslateModule,
      TranslatePipe,
      VodDetailsComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.loading-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-content-view[_ngcontent-%COMP%] {\n  gap: 30px;\n}\n.category-view[_ngcontent-%COMP%] {\n  gap: 10px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerMainContainerComponent, { className: "StalkerMainContainerComponent", filePath: "src\\app\\stalker\\stalker-main-container.component.ts", lineNumber: 67 });
})();
export {
  StalkerMainContainerComponent
};
