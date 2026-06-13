import {
  CategoryContentViewComponent,
  CategoryViewComponent,
  ContentType,
  MatButtonToggleModule,
  NavigationBarComponent,
  PlayerDialogComponent,
  PlaylistErrorViewComponent,
  VodDetailsComponent
} from "./chunk-YFK5ICSA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KL2NI6UB.js";
import "./chunk-ZZJMYIWV.js";
import "./chunk-5OOBV4TS.js";
import "./chunk-HKYBYYWS.js";
import "./chunk-ARXSO5EQ.js";
import "./chunk-CVAVMGUJ.js";
import "./chunk-OFWQSLAY.js";
import {
  IpcCommand
} from "./chunk-RRCJMUS5.js";
import "./chunk-SIRA6WMX.js";
import {
  EpgViewComponent
} from "./chunk-WGPV2L3B.js";
import {
  ExternalPlayerInfoDialogComponent,
  PortalStore,
  WebPlayerViewComponent
} from "./chunk-B7ON46EJ.js";
import {
  FilterPipe
} from "./chunk-3UN5MFN4.js";
import "./chunk-SYEL4F3B.js";
import "./chunk-QUUTD2CT.js";
import {
  SettingsStore
} from "./chunk-3EOHYJUT.js";
import {
  VideoPlayer
} from "./chunk-LLVRALQE.js";
import {
  ERROR,
  OPEN_MPV_PLAYER,
  OPEN_VLC_PLAYER,
  REMOTE_CONTROL_CHANGE_CHANNEL,
  XTREAM_REQUEST,
  XTREAM_RESPONSE
} from "./chunk-ARLSKJ4U.js";
import "./chunk-WSH5IJNZ.js";
import {
  PlaylistsService
} from "./chunk-67SZNSOH.js";
import {
  MatSnackBar
} from "./chunk-KC25OGSN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-OKC2LWEA.js";
import {
  MatDialog
} from "./chunk-5E2U4X57.js";
import {
  MatListItemAvatar,
  MatListItemTitle,
  MatListModule,
  MatListOption,
  MatSelectionList
} from "./chunk-SPPA5QBE.js";
import "./chunk-QEVBXPQE.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-EMMDYAAJ.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-WEMVKP6E.js";
import "./chunk-H6HSJUEJ.js";
import {
  ActivatedRoute,
  DataService,
  Store,
  XtreamCodeActions,
  selectCurrentPlaylist
} from "./chunk-5JZTGDVN.js";
import "./chunk-4GAH7JHC.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-DXN3EFMC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7HVMDVTX.js";
import "./chunk-ZAQMD6LU.js";
import {
  AsyncPipe,
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  EventEmitter,
  KeyValuePipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  NgForOf,
  NgIf,
  NgZone,
  ScrollingModule,
  __spreadProps,
  __spreadValues,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YPE2NSDF.js";

// src/app/portals/live-stream-layout/live-stream-layout.component.ts
function LiveStreamLayoutComponent_mat_list_option_22_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", item_r2.stream_icon, \u0275\u0275sanitizeUrl);
  }
}
function LiveStreamLayoutComponent_mat_list_option_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-option", 9);
    \u0275\u0275listener("click", function LiveStreamLayoutComponent_mat_list_option_22_Template_mat_list_option_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.itemClicked.emit(item_r2));
    });
    \u0275\u0275text(1, "\n                        ");
    \u0275\u0275template(2, LiveStreamLayoutComponent_mat_list_option_22_img_2_Template, 1, 1, "img", 10);
    \u0275\u0275text(3, "\n                        ");
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("selected", item_r2.stream_id === (ctx_r2.activeLiveStream == null ? null : ctx_r2.activeLiveStream.stream_id))("value", item_r2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.stream_icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                            ", item_r2.name, "\n                        ");
  }
}
function LiveStreamLayoutComponent_Conditional_29_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275element(3, "app-web-player-view", 14);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("streamUrl", ctx_r2.streamUrl);
  }
}
function LiveStreamLayoutComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, LiveStreamLayoutComponent_Conditional_29_Conditional_1_Template, 6, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.streamUrl ? 1 : -1);
  }
}
function LiveStreamLayoutComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275element(5, "app-epg-view", 17);
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("epgItems", ctx_r2.epgItems);
  }
}
function LiveStreamLayoutComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275text(2, "Please select a channel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
}
var LiveStreamLayoutComponent = class _LiveStreamLayoutComponent {
  constructor() {
    this.player = VideoPlayer.VideoJs;
    this.itemClicked = new EventEmitter();
    this.searchString = signal("");
  }
  trackBy(_index, item) {
    return item.stream_id;
  }
  static {
    this.\u0275fac = function LiveStreamLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveStreamLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveStreamLayoutComponent, selectors: [["app-live-stream-layout"]], inputs: { channels: "channels", player: "player", epgItems: "epgItems", streamUrl: "streamUrl", activeLiveStream: "activeLiveStream" }, outputs: { itemClicked: "itemClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 17, consts: [[1, "sidebar"], [1, "sidebar-content"], [1, "search-panel"], [1, "search-bar"], ["matPrefix", ""], ["matInput", "", "type", "search", 3, "ngModelChange", "placeholder", "ngModel"], [3, "multiple"], [1, "scroll-viewport-portals", 3, "itemSize"], [3, "selected", "value", "click", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "click", "selected", "value"], ["matListItemAvatar", "", "class", "stream-icon", 3, "src", 4, "ngIf"], ["matListItemTitle", "", 1, "title"], ["matListItemAvatar", "", 1, "stream-icon", 3, "src"], [1, "video-player"], [3, "streamUrl"], [1, "epg"], [1, "epg-content"], [3, "epgItems"], [1, "no-channel-selected"]], template: function LiveStreamLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275elementStart(8, "mat-form-field", 3);
        \u0275\u0275text(9, "\n                    ");
        \u0275\u0275elementStart(10, "mat-icon", 4);
        \u0275\u0275text(11, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n                    ");
        \u0275\u0275elementStart(13, "input", 5);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function LiveStreamLayoutComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchString, $event) || (ctx.searchString = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "mat-selection-list", 6);
        \u0275\u0275text(19, "\n                ");
        \u0275\u0275elementStart(20, "cdk-virtual-scroll-viewport", 7);
        \u0275\u0275text(21, "\n                    ");
        \u0275\u0275template(22, LiveStreamLayoutComponent_mat_list_option_22_Template, 7, 4, "mat-list-option", 8);
        \u0275\u0275pipe(23, "filterBy");
        \u0275\u0275text(24, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n    ");
        \u0275\u0275template(29, LiveStreamLayoutComponent_Conditional_29_Template, 2, 1)(30, LiveStreamLayoutComponent_Conditional_30_Template, 9, 1)(31, LiveStreamLayoutComponent_Conditional_31_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n");
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.player === "videojs" || ctx.player === "html5" ? "itv-container" : "itv-container-epg");
        \u0275\u0275advance(13);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(14, 11, "CHANNELS.SEARCH_CHANNEL"));
        \u0275\u0275twoWayProperty("ngModel", ctx.searchString);
        \u0275\u0275advance(5);
        \u0275\u0275property("multiple", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("itemSize", 56);
        \u0275\u0275advance(2);
        \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(23, 13, ctx.channels, ctx.searchString(), "name"))("cdkVirtualForTrackBy", ctx.trackBy)("cdkVirtualForTemplateCacheSize", 0);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.player === "videojs" || ctx.player === "html5" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.streamUrl ? 30 : 31);
      }
    }, dependencies: [
      EpgViewComponent,
      FilterPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatListModule,
      MatSelectionList,
      MatListOption,
      MatListItemAvatar,
      MatListItemTitle,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatFormFieldModule,
      NgIf,
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      WebPlayerViewComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.itv-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 50% 50%;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar video-player video-player" "sidebar epg epg";\n  height: 100%;\n}\n.itv-container-epg[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 330px 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 0 0;\n  grid-auto-flow: row;\n  grid-template-areas: "sidebar epg epg" "sidebar epg epg" "sidebar epg epg";\n  height: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  grid-area: sidebar;\n}\n.video-player[_ngcontent-%COMP%] {\n  grid-area: video-player;\n}\n.epg[_ngcontent-%COMP%] {\n  grid-area: epg;\n}\n.search-panel[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: -15px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.epg-content[_ngcontent-%COMP%] {\n  height: calc(50vh - 20px);\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  padding-bottom: 20px;\n}\n.sidebar-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  border-right: #111 1px solid;\n  overflow-x: hidden;\n}\n.no-channel-selected[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nmat-list-option[_ngcontent-%COMP%] {\n  width: 320px;\n}\n  .search-bar div {\n  border-radius: 20px;\n}'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveStreamLayoutComponent, { className: "LiveStreamLayoutComponent", filePath: "src\\app\\portals\\live-stream-layout\\live-stream-layout.component.ts", lineNumber: 44 });
})();

// src/app/xtream/season-container/season-container.component.ts
function SeasonContainerComponent_ng_container_5_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 4);
    \u0275\u0275listener("click", function SeasonContainerComponent_ng_container_5_mat_card_2_Template_mat_card_click_0_listener() {
      const season_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSeason(season_r2.key));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-card-content");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const season_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Season ", season_r2.key, "");
  }
}
function SeasonContainerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275template(2, SeasonContainerComponent_ng_container_5_mat_card_2_Template, 5, 1, "mat-card", 3);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx_r2.seasons));
  }
}
function SeasonContainerComponent_ng_template_7_mat_card_7_mat_card_content_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card-content");
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", episode_r6.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function SeasonContainerComponent_ng_template_7_mat_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 5);
    \u0275\u0275listener("click", function SeasonContainerComponent_ng_template_7_mat_card_7_Template_mat_card_click_0_listener() {
      const episode_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEpisode(episode_r6));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275template(2, SeasonContainerComponent_ng_template_7_mat_card_7_mat_card_content_2_Template, 2, 1, "mat-card-content", 8);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const episode_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", episode_r6.info.movie_image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\n                ", episode_r6.episode_num, ". ", episode_r6.title, "\n            ");
  }
}
function SeasonContainerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-card", 5);
    \u0275\u0275listener("click", function SeasonContainerComponent_ng_template_7_Template_mat_card_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedSeason = void 0);
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4, "< Back to seasons");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275template(7, SeasonContainerComponent_ng_template_7_mat_card_7_Template, 7, 3, "mat-card", 7);
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.seasons[ctx_r2.selectedSeason]);
  }
}
var SeasonContainerComponent = class _SeasonContainerComponent {
  constructor() {
    this.episodeClicked = new EventEmitter();
  }
  selectSeason(seasonKey) {
    this.selectedSeason = seasonKey;
  }
  selectEpisode(episode) {
    this.episodeClicked.emit(episode);
  }
  static {
    this.\u0275fac = function SeasonContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeasonContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeasonContainerComponent, selectors: [["app-season-container"]], inputs: { seasons: "seasons" }, outputs: { episodeClicked: "episodeClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [["episodesView", ""], [1, "seasons-container"], [4, "ngIf", "ngIfElse"], ["class", "season-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "season-item", 3, "click"], [1, "episode-item", 3, "click"], [1, "episode-title"], ["class", "episode-item", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "episode-cover", 3, "src"]], template: function SeasonContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Seasons and episodes");
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275template(5, SeasonContainerComponent_ng_container_5_Template, 5, 3, "ng-container", 2);
        \u0275\u0275text(6, "\n\n    ");
        \u0275\u0275template(7, SeasonContainerComponent_ng_template_7_Template, 9, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(9, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n");
      }
      if (rf & 2) {
        const episodesView_r7 = \u0275\u0275reference(8);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.selectedSeason)("ngIfElse", episodesView_r7);
      }
    }, dependencies: [KeyValuePipe, NgForOf, MatCardModule, MatCard, MatCardContent, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  margin: 10px;\n  display: block;\n  padding: 20px 0;\n}\n.seasons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: wrap;\n  gap: 10px;\n}\n.season-item[_ngcontent-%COMP%], \n.episode-item[_ngcontent-%COMP%] {\n  min-height: 100px;\n  justify-content: center;\n  width: 150px;\n  cursor: pointer;\n  display: block;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.episode-item[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-title[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.episode-item[_ngcontent-%COMP%]   .episode-cover[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeasonContainerComponent, { className: "SeasonContainerComponent", filePath: "src\\app\\xtream\\season-container\\season-container.component.ts", lineNumber: 13 });
})();

// src/app/xtream/serial-details/serial-details.component.ts
function SerialDetailsComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.item.info.cover, \u0275\u0275sanitizeUrl);
  }
}
function SerialDetailsComponent_label_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.plot, "\n        ");
  }
}
function SerialDetailsComponent_label_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.RELEASE_DATE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.releaseDate, "\n        ");
  }
}
function SerialDetailsComponent_label_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.genre, "\n        ");
  }
}
function SerialDetailsComponent_label_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.rating, "\n        ");
  }
}
function SerialDetailsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.CAST"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.cast, "\n        ");
  }
}
function SerialDetailsComponent_label_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.director, "\n        ");
  }
}
function SerialDetailsComponent_label_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "XTREAM.EPISODE_RUN_TIME"), ":\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.episode_run_time, "\n        ");
  }
}
function SerialDetailsComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SerialDetailsComponent_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(5, 1, "PORTALS.ADD_TO_FAVORITES"), "\n            ");
  }
}
function SerialDetailsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 12);
    \u0275\u0275listener("click", function SerialDetailsComponent_ng_template_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n                ");
  }
}
var SerialDetailsComponent = class _SerialDetailsComponent {
  constructor() {
    this.addToFavoritesClicked = new EventEmitter();
    this.playClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.store = inject(Store);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.portalId = this.route.snapshot.paramMap.get("id");
    this.isFavorite = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      this.isFavorite = favorites.some((i) => i.series_id === this.seriesId);
    });
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavoritesClicked.emit(this.seriesId);
    } else {
      this.addToFavoritesClicked.emit({
        name: this.item.info.name,
        series_id: this.seriesId,
        cover: this.item.info.cover
      });
    }
    this.isFavorite = !this.isFavorite;
  }
  static {
    this.\u0275fac = function SerialDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SerialDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SerialDetailsComponent, selectors: [["app-serial-details"]], inputs: { item: "item", seriesId: "seriesId" }, outputs: { addToFavoritesClicked: "addToFavoritesClicked", playClicked: "playClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 14, consts: [["removeFromFavoritesButton", ""], [1, "container"], [1, "image"], [3, "src", 4, "ngIf"], [1, "details"], [4, "ngIf"], [1, "action-buttons"], ["mat-stroked-button", "", "color", "accent", 3, "click", 4, "ngIf", "ngIfElse"], [3, "episodeClicked", "seasons"], [3, "src"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function SerialDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275template(4, SerialDetailsComponent_img_4_Template, 1, 1, "img", 3);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275template(12, SerialDetailsComponent_label_12_Template, 2, 1, "label", 5);
        \u0275\u0275text(13, "\n        ");
        \u0275\u0275template(14, SerialDetailsComponent_label_14_Template, 6, 4, "label", 5);
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275template(16, SerialDetailsComponent_label_16_Template, 6, 4, "label", 5);
        \u0275\u0275text(17, "\n        ");
        \u0275\u0275template(18, SerialDetailsComponent_label_18_Template, 6, 4, "label", 5);
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275template(20, SerialDetailsComponent_div_20_Template, 6, 4, "div", 5);
        \u0275\u0275text(21, "\n        ");
        \u0275\u0275template(22, SerialDetailsComponent_label_22_Template, 6, 4, "label", 5);
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275template(24, SerialDetailsComponent_label_24_Template, 6, 4, "label", 5);
        \u0275\u0275text(25, "\n        ");
        \u0275\u0275elementStart(26, "div", 6);
        \u0275\u0275text(27, "\n            ");
        \u0275\u0275template(28, SerialDetailsComponent_button_28_Template, 6, 3, "button", 7);
        \u0275\u0275text(29, "\n\n            ");
        \u0275\u0275template(30, SerialDetailsComponent_ng_template_30_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(32, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n\n");
        \u0275\u0275elementStart(36, "app-season-container", 8);
        \u0275\u0275listener("episodeClicked", function SerialDetailsComponent_Template_app_season_container_episodeClicked_36_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.playClicked.emit($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, "\n");
      }
      if (rf & 2) {
        const removeFromFavoritesButton_r5 = \u0275\u0275reference(31);
        \u0275\u0275styleProp("background", (ctx.item.info == null ? null : ctx.item.info.backdrop_path) && ctx.item.info.backdrop_path.length > 0 ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + ctx.item.info.backdrop_path[0] + ") repeat-x" : "none");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.item.info.cover);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.item.info.name);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.plot);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.releaseDate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.genre);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.rating);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.cast);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.director);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.episode_run_time);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isFavorite)("ngIfElse", removeFromFavoritesButton_r5);
        \u0275\u0275advance(8);
        \u0275\u0275property("seasons", ctx.item.episodes);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      NgIf,
      SeasonContainerComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 350px 450px;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SerialDetailsComponent, { className: "SerialDetailsComponent", filePath: "src\\app\\xtream\\serial-details\\serial-details.component.ts", lineNumber: 32 });
})();

// src/app/xtream/xtream-main-container.component.ts
function XtreamMainContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275text(2, "\n");
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, ctx_r0.errorViewInfo.title))("description", \u0275\u0275pipeBind1(3, 4, ctx_r0.errorViewInfo.message));
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-view", 2);
    \u0275\u0275listener("categoryClicked", function XtreamMainContainerComponent_Conditional_3_Case_2_Template_app_category_view_categoryClicked_1_listener($event) {
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
function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "app-live-stream-layout", 3);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template_app_live_stream_layout_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("channels", ctx_r0.items)("player", ctx_r0.player)("streamUrl", ctx_r0.streamUrl)("epgItems", ctx_r0.epgItems)("activeLiveStream", ctx_r0.activeLiveStream);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "app-category-content-view", 4);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275template(1, XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_1_Template, 3, 5)(2, XtreamMainContainerComponent_Conditional_3_Case_3_Conditional_2_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.selectedContentType === "itv" ? 1 : 2);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 5);
    \u0275\u0275listener("playClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.playVod($event));
    })("addToFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_4_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
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
    \u0275\u0275property("item", ctx_r0.vodDetails);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-serial-details", 6);
    \u0275\u0275listener("playClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.playEpisode($event));
    })("addToFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Conditional_3_Case_5_Template_app_serial_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.vodDetails)("seriesId", ctx_r0.contentId);
  }
}
function XtreamMainContainerComponent_Conditional_3_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_6_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
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
function XtreamMainContainerComponent_Conditional_3_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-live-stream-layout", 7);
    \u0275\u0275listener("itemClicked", function XtreamMainContainerComponent_Conditional_3_Case_7_Template_app_live_stream_layout_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("channels", ctx_r0.favoritesLiveStream$)("player", ctx_r0.player)("streamUrl", ctx_r0.streamUrl)("epgItems", ctx_r0.epgItems);
  }
}
function XtreamMainContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275template(1, XtreamMainContainerComponent_Conditional_3_Case_1_Template, 5, 6)(2, XtreamMainContainerComponent_Conditional_3_Case_2_Template, 3, 1)(3, XtreamMainContainerComponent_Conditional_3_Case_3_Template, 3, 1)(4, XtreamMainContainerComponent_Conditional_3_Case_4_Template, 3, 1)(5, XtreamMainContainerComponent_Conditional_3_Case_5_Template, 3, 2)(6, XtreamMainContainerComponent_Conditional_3_Case_6_Template, 4, 3)(7, XtreamMainContainerComponent_Conditional_3_Case_7_Template, 3, 4);
    \u0275\u0275text(8, "\n");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.currentLayout) === "error-view" ? 1 : tmp_1_0 === "category" ? 2 : tmp_1_0 === "category_content" ? 3 : tmp_1_0 === "vod-details" ? 4 : tmp_1_0 === "serie-details" ? 5 : tmp_1_0 === "favorites" ? 6 : tmp_1_0 === "live-stream-favorites" ? 7 : -1);
  }
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
var ContentTypes = {
  [ContentType.ITV]: {
    getContentAction: XtreamCodeActions.GetLiveStreams,
    getCategoryAction: XtreamCodeActions.GetLiveCategories
  },
  [ContentType.VODS]: {
    getContentAction: XtreamCodeActions.GetVodStreams,
    getCategoryAction: XtreamCodeActions.GetVodCategories,
    getDetailsAction: XtreamCodeActions.GetVodInfo
  },
  [ContentType.SERIES]: {
    getContentAction: XtreamCodeActions.GetSeries,
    getCategoryAction: XtreamCodeActions.GetSeriesCategories,
    getDetailsAction: XtreamCodeActions.GetSeriesInfo
  }
};
var XtreamMainContainerComponent = class _XtreamMainContainerComponent {
  constructor() {
    this.dataService = inject(DataService);
    this.dialog = inject(MatDialog);
    this.ngZone = inject(NgZone);
    this.playlistService = inject(PlaylistsService);
    this.portalStore = inject(PortalStore);
    this.settingsStore = inject(SettingsStore);
    this.snackBar = inject(MatSnackBar);
    this.store = inject(Store);
    this.translate = inject(TranslateService);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
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
    ];
    this.breadcrumbs = [];
    this.items = [];
    this.listeners = [];
    this.selectedContentType = ContentType.VODS;
    this.currentLayout = "category";
    this.settings = this.settingsStore;
    this.isLoading = true;
    this.searchPhrase = this.portalStore.searchPhrase();
    this.errorViewInfo = { title: "", message: "" };
    this.epgItems = [];
    this.hideExternalInfoDialog = this.portalStore.hideExternalInfoDialog;
    this.commandsList = [
      new IpcCommand(XTREAM_RESPONSE, (response) => this.handleResponse(response)),
      new IpcCommand(ERROR, (response) => this.showErrorAsNotification(response)),
      new IpcCommand(REMOTE_CONTROL_CHANGE_CHANNEL, (response) => {
        this.remoteControlChangeChannel(response.type);
      })
    ];
    effect(() => {
      if (this.currentPlaylist()) {
        this.getCategories(this.selectedContentType);
        this.favorites$ = this.playlistService.getPortalFavorites(this.currentPlaylist()._id);
        this.favoritesLiveStream$ = this.playlistService.getPortalLiveStreamFavorites(this.currentPlaylist()._id);
      }
    });
  }
  ngOnInit() {
    this.setInitialBreadcrumb();
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
  handleResponse(response) {
    if (!response.payload) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.TITLE",
        message: "PORTALS.ERROR_VIEW.UNKNOWN_ERROR.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    } else {
      if (response.payload?.user_info?.status === "Expired") {
        this.errorViewInfo = {
          title: "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.TITLE",
          message: "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.DESCRIPTION"
        };
        this.currentLayout = "error-view";
      } else if (response.payload?.user_info?.auth === 0) {
        this.errorViewInfo = {
          title: "PORTALS.ERROR_VIEW.UNAUTHORIZED.TITLE",
          message: "PORTALS.ERROR_VIEW.UNAUTHORIZED.DESCRIPTION"
        };
        this.currentLayout = "error-view";
      }
    }
    switch (response.action) {
      case XtreamCodeActions.GetSeriesCategories:
      case XtreamCodeActions.GetVodCategories:
      case XtreamCodeActions.GetLiveCategories:
      case XtreamCodeActions.GetVodStreams:
      case XtreamCodeActions.GetLiveStreams:
      case XtreamCodeActions.GetSeries:
        this.items = response.payload;
        break;
      case XtreamCodeActions.GetVodInfo:
        this.currentLayout = "vod-details";
        this.vodDetails = response.payload;
        break;
      case XtreamCodeActions.GetSeriesInfo:
        this.currentLayout = "serie-details";
        this.vodDetails = response.payload;
        break;
      case "get_short_epg":
        this.epgItems = response.payload.epg_listings.map((i) => __spreadProps(__spreadValues({}, i), {
          title: b64DecodeUnicode(i.title).trim(),
          description: b64DecodeUnicode(i.description).trim()
        }));
        break;
      default:
        break;
    }
    this.isLoading = false;
  }
  getCategories(contentType = this.selectedContentType) {
    this.currentLayout = "category";
    const action = ContentTypes[contentType].getCategoryAction;
    this.setInitialBreadcrumb(action);
    this.sendRequest({ action });
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
  setInitialBreadcrumb(action = XtreamCodeActions.GetVodCategories) {
    this.breadcrumbs = [{ title: "All categories", action }];
  }
  categoryClicked(item) {
    this.items = [];
    this.streamUrl = void 0;
    this.portalStore.setSearchPhrase("");
    const action = ContentTypes[this.selectedContentType].getContentAction;
    this.breadcrumbs.push({
      title: item.category_name,
      category_id: item.category_id,
      action
    });
    this.sendRequest({ action, category_id: item.category_id });
    this.currentLayout = "category_content";
  }
  itemClicked(item) {
    let action;
    if (item.stream_type && item.stream_type === "movie") {
      this.items = [];
      action = XtreamCodeActions.GetVodInfo;
      this.breadcrumbs.push({ title: item.name, action });
      this.contentId = item.stream_id;
      this.sendRequest({ action, vod_id: item.stream_id });
    } else if (item.stream_type && item.stream_type === "live") {
      this.sendRequest({
        action: "get_short_epg",
        stream_id: item.stream_id,
        limit: 10
      });
      this.activeLiveStream = item;
      this.playLiveStream(item);
    } else if (item.series_id) {
      this.items = [];
      action = XtreamCodeActions.GetSeriesInfo;
      this.breadcrumbs.push({ title: item.name, action });
      this.contentId = item.series_id;
      this.sendRequest({ action, series_id: item.series_id });
    }
  }
  playLiveStream(item) {
    const { serverUrl, username, password } = this.currentPlaylist();
    const streamUrl = `${serverUrl}/${item.stream_type}/${username}/${password}/${item.stream_id}.m3u8`;
    this.activeLiveStream = item;
    this.openPlayer(streamUrl, item.name);
  }
  openPlayer(streamUrl, title) {
    this.streamUrl = streamUrl;
    this.player = this.settingsStore.player() ?? VideoPlayer.VideoJs;
    if (this.player === VideoPlayer.MPV) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, {
        url: streamUrl,
        mpvPlayerPath: this.settingsStore.mpvPlayerPath()
      });
    } else if (this.player === VideoPlayer.VLC) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, {
        url: streamUrl,
        vlcPlayerPath: this.settingsStore.vlcPlayerPath()
      });
    } else {
      if (this.selectedContentType !== ContentType.ITV) {
        this.dialog.open(PlayerDialogComponent, {
          data: { streamUrl, title },
          width: "80%"
        });
      }
    }
  }
  playVod(vodItem) {
    const { serverUrl, username, password } = this.currentPlaylist();
    this.items = [];
    const streamUrl = `${serverUrl}/movie/${username}/${password}/${vodItem.movie_data.stream_id}.${vodItem.movie_data.container_extension}`;
    this.openPlayer(streamUrl, vodItem.info.name);
  }
  playEpisode(episode) {
    const { serverUrl, username, password } = this.currentPlaylist();
    const player = this.settingsStore.player();
    const streamUrl = `${serverUrl}/series/${username}/${password}/${episode.id}.${episode.container_extension}`;
    if (player === VideoPlayer.MPV) {
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, { url: streamUrl });
    } else if (player === VideoPlayer.VLC) {
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, { url: streamUrl });
    } else {
      this.dialog.open(PlayerDialogComponent, {
        data: { streamUrl, player, title: episode.title },
        width: "80%"
      });
    }
  }
  changeContentType(contentType) {
    this.selectedContentType = contentType;
    this.getCategories();
  }
  showErrorAsNotification(response) {
    if ("status" in response && response.status === 401) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.UNAUTHORIZED.TITLE",
        message: "PORTALS.ERROR_VIEW.UNAUTHORIZED.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    } else if ("status" in response && response.status === 404) {
      this.errorViewInfo = {
        title: "PORTALS.ERROR_VIEW.NOT_FOUND.TITLE",
        message: "PORTALS.ERROR_VIEW.NOT_FOUND.DESCRIPTION"
      };
      this.currentLayout = "error-view";
    }
    this.snackBar.open(`Error: ${response?.message ?? "Something went wrong"} (Status: ${response?.status ?? 0})`, null, { duration: 4e3 });
    this.isLoading = false;
  }
  /**
   * Should get the position of the clicked breadcrumb and remove all the items after
   * @param breadcrumb clicked breadcrumb item
   */
  breadcrumbClicked(breadcrumb) {
    const itemIndex = this.breadcrumbs.findIndex((i) => i === breadcrumb);
    if (itemIndex === this.breadcrumbs.length - 1)
      return;
    this.items = [];
    this.breadcrumbs.splice(itemIndex + 1, this.breadcrumbs.length - itemIndex - 1);
    this.currentLayout = this.getLayoutViewBasedOnAction(breadcrumb.action);
    this.sendRequest(__spreadValues({
      action: breadcrumb.action
    }, breadcrumb.category_id ? { category_id: breadcrumb.category_id } : {}));
  }
  getLayoutViewBasedOnAction(action) {
    let result = "category";
    switch (action) {
      case XtreamCodeActions.GetLiveCategories:
      case XtreamCodeActions.GetVodCategories:
      case XtreamCodeActions.GetSeriesCategories:
        result = "category";
        break;
      case XtreamCodeActions.GetLiveStreams:
      case XtreamCodeActions.GetVodStreams:
      case XtreamCodeActions.GetSeries:
        result = "category_content";
        break;
      case XtreamCodeActions.GetVodInfo:
      case XtreamCodeActions.GetSeriesInfo:
        result = "vod-details";
        break;
      default:
        console.error(`Error: Unknown action was provided: ${action}`);
        break;
    }
    return result;
  }
  sendRequest(params) {
    if (params.action !== "get_short_epg") {
      this.isLoading = true;
    }
    const { serverUrl, username, password } = this.currentPlaylist();
    this.dataService.sendIpcEvent(XTREAM_REQUEST, {
      url: serverUrl,
      params: __spreadValues({
        password,
        username
      }, params)
    });
  }
  setSearchPhrase(searchPhrase) {
    this.searchPhrase = searchPhrase;
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
  favoritesClicked() {
    if (this.selectedContentType === ContentType.ITV) {
      this.currentLayout = "live-stream-favorites";
    } else {
      this.currentLayout = "favorites";
    }
    this.setInitialBreadcrumb();
  }
  remoteControlChangeChannel(type) {
    if (this.currentLayout === "category_content" && this.activeLiveStream) {
      let nextItem;
      const index = this.activeLiveStream.num - 1;
      if (type === "up") {
        if (index - 1 >= 0) {
          nextItem = this.items[index - 1];
        }
      } else if (type === "down") {
        const index2 = this.activeLiveStream.num - 1;
        if (index2 + 1 < this.items.length) {
          nextItem = this.items[index2 + 1];
        }
      }
      this.itemClicked(nextItem);
    }
  }
  static {
    this.\u0275fac = function XtreamMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamMainContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamMainContainerComponent, selectors: [["app-xtream-main-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 10, consts: [[3, "breadcrumbClicked", "contentTypeChanged", "searchTextChanged", "favoritesClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "breadcrumbs", "contentType", "showCategories", "searchVisible", "sortVisible", "favoriteVisible", "contentTypeNavigationItems", "activeLiveStream", "favoritesLiveStream$"], [3, "title", "description"], [3, "categoryClicked", "items"], [3, "itemClicked", "channels", "player", "streamUrl", "epgItems", "activeLiveStream"], [3, "itemClicked", "items"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item", "seriesId"], [3, "itemClicked", "channels", "player", "streamUrl", "epgItems"]], template: function XtreamMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-navigation-bar", 0);
        \u0275\u0275listener("breadcrumbClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_breadcrumbClicked_0_listener($event) {
          return ctx.breadcrumbClicked($event);
        })("contentTypeChanged", function XtreamMainContainerComponent_Template_app_navigation_bar_contentTypeChanged_0_listener($event) {
          return ctx.changeContentType($event);
        })("searchTextChanged", function XtreamMainContainerComponent_Template_app_navigation_bar_searchTextChanged_0_listener($event) {
          return ctx.setSearchPhrase($event);
        })("favoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_favoritesClicked_0_listener() {
          return ctx.favoritesClicked();
        })("addToFavoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_addToFavoritesClicked_0_listener($event) {
          return ctx.addToFavorites($event);
        })("removeFromFavoritesClicked", function XtreamMainContainerComponent_Template_app_navigation_bar_removeFromFavoritesClicked_0_listener($event) {
          return ctx.removeFromFavorites($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275template(2, XtreamMainContainerComponent_Conditional_2_Template, 3, 0)(3, XtreamMainContainerComponent_Conditional_3_Template, 9, 1);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("contentType", ctx.selectedContentType)("showCategories", ctx.currentLayout !== "error-view")("searchVisible", ctx.currentLayout === "category" || ctx.currentLayout === "category_content")("sortVisible", ctx.currentLayout === "category_content")("favoriteVisible", ctx.currentLayout === "category_content" || ctx.currentLayout === "live-stream-favorites")("contentTypeNavigationItems", ctx.navigationContentTypes)("activeLiveStream", ctx.activeLiveStream)("favoritesLiveStream$", ctx.favoritesLiveStream$);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 2 : 3);
      }
    }, dependencies: [
      MatButtonToggleModule,
      CategoryViewComponent,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      NavigationBarComponent,
      VodDetailsComponent,
      CategoryContentViewComponent,
      SerialDetailsComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      AsyncPipe,
      PlaylistErrorViewComponent,
      TranslateModule,
      TranslatePipe,
      LiveStreamLayoutComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.xtream-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 140px);\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  align-self: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamMainContainerComponent, { className: "XtreamMainContainerComponent", filePath: "src\\app\\xtream\\xtream-main-container.component.ts", lineNumber: 114 });
})();
export {
  XtreamMainContainerComponent
};
