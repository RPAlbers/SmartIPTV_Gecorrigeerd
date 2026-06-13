import {
  PlayerService
} from "./chunk-TYDAAMP4.js";
import {
  EpgViewComponent
} from "./chunk-FPI7Y6EH.js";
import {
  WebPlayerViewComponent
} from "./chunk-QTVF6LFJ.js";
import {
  FilterPipe
} from "./chunk-LNFD2TIE.js";
import "./chunk-RDMBWB6U.js";
import "./chunk-5SMZVLW2.js";
import {
  SettingsStore
} from "./chunk-3J2HDFX4.js";
import "./chunk-WLQZSEEB.js";
import "./chunk-ARLSKJ4U.js";
import {
  CategoryViewComponent
} from "./chunk-PPOMEBVM.js";
import "./chunk-7D56BM5K.js";
import "./chunk-6QCFH7Z4.js";
import "./chunk-J4KICW5Y.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UCJQWIMR.js";
import "./chunk-CZ2VXG7N.js";
import {
  MatListItem,
  MatListItemAvatar,
  MatListItemMeta,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-BDY4BXGD.js";
import {
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-FHIW4JSF.js";
import "./chunk-XUXZW7VT.js";
import {
  ActivatedRoute,
  FavoritesService,
  XtreamStore
} from "./chunk-PZD5NHA7.js";
import {
  MatTooltipModule
} from "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3G7KW6UL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-RCJSYGGY.js";
import "./chunk-EY4ID5NF.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ChangeDetectorRef,
  DatePipe,
  EventEmitter,
  MatIcon,
  MatIconButton,
  ScrollingModule,
  __async,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/portal-channels-list/portal-channels-list.component.ts
function PortalChannelsListComponent_mat_list_item_16_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                            ");
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2, "\n                                ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                                ");
    \u0275\u0275elementStart(7, "div", 14);
    \u0275\u0275text(8, "\n                                    ");
    \u0275\u0275element(9, "div", 15);
    \u0275\u0275text(10, "\n                                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                                ");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                        ");
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, (tmp_4_0 = ctx_r2.programTimings.get(item_r2.xtream_id)) == null ? null : tmp_4_0.start, "HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r2.currentProgramsProgress.get(item_r2.xtream_id), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, (tmp_6_0 = ctx_r2.programTimings.get(item_r2.xtream_id)) == null ? null : tmp_6_0.end, "HH:mm"));
  }
}
function PortalChannelsListComponent_mat_list_item_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                        ");
    \u0275\u0275template(6, PortalChannelsListComponent_mat_list_item_16_Conditional_9_Conditional_6_Template, 17, 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                            ", ctx_r2.currentPrograms.get(item_r2.xtream_id), "\n                        ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.currentProgramsProgress.has(item_r2.xtream_id) ? 6 : -1);
  }
}
function PortalChannelsListComponent_mat_list_item_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "div", 17);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6, "\n                            ");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "--:--");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                            ");
    \u0275\u0275element(10, "div", 14);
    \u0275\u0275text(11, "\n                            ");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "--:--");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                ");
  }
}
function PortalChannelsListComponent_mat_list_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 6);
    \u0275\u0275listener("click", function PortalChannelsListComponent_mat_list_item_16_Template_mat_list_item_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.playClicked.emit(item_r2));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "img", 7);
    \u0275\u0275listener("error", function PortalChannelsListComponent_mat_list_item_16_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275template(9, PortalChannelsListComponent_mat_list_item_16_Conditional_9_Template, 8, 2)(10, PortalChannelsListComponent_mat_list_item_16_Conditional_10_Template, 17, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function PortalChannelsListComponent_mat_list_item_16_Template_button_click_12_listener($event) {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFavorite($event, item_r2));
    });
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("activated", ((tmp_2_0 = ctx_r2.xtreamStore.selectedItem()) == null ? null : tmp_2_0.xtream_id) === item_r2.xtream_id);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", (tmp_3_0 = item_r2.stream_icon) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : item_r2.poster_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.currentPrograms.get(item_r2.xtream_id) ? 9 : 10);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", ctx_r2.favorites.get(item_r2.xtream_id) ? "star" : "star_outline", "\n                ");
  }
}
var PortalChannelsListComponent = class _PortalChannelsListComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.playClicked = new EventEmitter();
    this.xtreamStore = inject(XtreamStore);
    this.favoritesService = inject(FavoritesService);
    this.route = inject(ActivatedRoute);
    this.channels = this.xtreamStore.selectItemsFromSelectedCategory;
    this.favorites = /* @__PURE__ */ new Map();
    this.searchString = signal("");
    this.currentPrograms = /* @__PURE__ */ new Map();
    this.currentProgramsProgress = /* @__PURE__ */ new Map();
    this.programTimings = /* @__PURE__ */ new Map();
    this.requestedChannels = /* @__PURE__ */ new Set();
  }
  trackBy(_index, item) {
    return item.xtream_id;
  }
  ngOnInit() {
    const { categoryId } = this.route.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
    const playlist = this.xtreamStore.currentPlaylist();
    if (playlist) {
      this.favoritesService.getFavorites(playlist.id).subscribe((favorites) => {
        favorites.forEach((fav) => {
          this.favorites.set(fav.xtream_id, true);
        });
        console.log(this.favorites);
      });
    }
  }
  ngAfterViewInit() {
    if (this.viewport && this.xtreamStore.selectedContentType() === "live") {
      this.viewport.renderedRangeStream.subscribe((range) => {
        const visibleChannels = this.channels().slice(range.start, range.end);
        this.loadEpgForVisibleChannels(visibleChannels);
      });
    }
  }
  loadEpgForVisibleChannels(channels) {
    return __async(this, null, function* () {
      const playlist = this.xtreamStore.currentPlaylist();
      if (!playlist)
        return;
      for (const channel of channels) {
        if (this.requestedChannels.has(channel.xtream_id) || this.currentPrograms.has(channel.xtream_id)) {
          continue;
        }
        this.requestedChannels.add(channel.xtream_id);
        try {
          const epgData = yield this.xtreamStore.loadChannelEpg(channel.xtream_id);
          if (epgData && epgData.length > 0) {
            this.currentPrograms.set(channel.xtream_id, epgData[0].title);
            this.updateProgramProgress(channel.xtream_id, epgData[0]);
            this.cdr.detectChanges();
          }
        } catch (error) {
          console.error(`Failed to load EPG for channel ${channel.xtream_id}:`, error);
        }
      }
    });
  }
  updateProgramProgress(streamId, program) {
    const now = (/* @__PURE__ */ new Date()).getTime() / 1e3;
    const start = parseInt(program.start_timestamp);
    const end = parseInt(program.stop_timestamp);
    if (now >= start && now <= end) {
      const duration = end - start;
      const elapsed = now - start;
      const progress = elapsed / duration * 100;
      this.currentProgramsProgress.set(streamId, progress);
      this.programTimings.set(streamId, {
        start: start * 1e3,
        // Convert to milliseconds for date pipe
        end: end * 1e3
        // Convert to milliseconds for date pipe
      });
    }
  }
  isSelected(item) {
    const selectedCategory = this.xtreamStore.selectedCategoryId();
    const itemId = Number(item.category_id || item.id);
    return selectedCategory !== null && selectedCategory === itemId;
  }
  toggleFavorite(event, item) {
    event.stopPropagation();
    this.xtreamStore.toggleFavorite(item.xtream_id, this.xtreamStore.currentPlaylist().id).then((result) => {
      if (result) {
        this.favorites.set(item.xtream_id, true);
      } else {
        this.favorites.delete(item.xtream_id);
      }
      this.cdr.detectChanges();
    });
  }
  static {
    this.\u0275fac = function PortalChannelsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalChannelsListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PortalChannelsListComponent, selectors: [["app-portal-channels-list"]], viewQuery: function PortalChannelsListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkVirtualScrollViewport, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewport = _t.first);
      }
    }, outputs: { playClicked: "playClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 12, consts: [[1, "search-panel"], ["subscriptSizing", "dynamic", 1, "search-bar"], ["matPrefix", ""], ["matInput", "", "spellcheck", "false", "type", "search", 3, "ngModelChange", "placeholder", "ngModel"], [1, "scroll-viewport-portals", 3, "itemSize"], ["templateCacheSize", "200", 3, "activated", "click", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], ["templateCacheSize", "200", 3, "click", "activated"], ["matListItemAvatar", "", 1, "stream-icon", 3, "error", "src"], ["matListItemTitle", "", 1, "channel-info"], [1, "title"], ["mat-icon-button", "", "matListItemMeta", "", 3, "click"], [1, "program-info"], [1, "current-program"], [1, "progress-container"], [1, "progress-bar"], [1, "progress"], [1, "program-info", "no-epg-placeholder"], [1, "placeholder-bar"]], template: function PortalChannelsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-icon", 2);
        \u0275\u0275text(5, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "input", 3);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function PortalChannelsListComponent_Template_input_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchString, $event) || (ctx.searchString = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n\n");
        \u0275\u0275elementStart(12, "mat-nav-list");
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275elementStart(14, "cdk-virtual-scroll-viewport", 4);
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275template(16, PortalChannelsListComponent_mat_list_item_16_Template, 18, 5, "mat-list-item", 5);
        \u0275\u0275pipe(17, "filterBy");
        \u0275\u0275text(18, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 6, "CHANNELS.SEARCH_CHANNEL"));
        \u0275\u0275twoWayProperty("ngModel", ctx.searchString);
        \u0275\u0275advance(7);
        \u0275\u0275property("itemSize", 48);
        \u0275\u0275advance(2);
        \u0275\u0275property("cdkVirtualForOf", \u0275\u0275pipeBind3(17, 8, ctx.channels(), ctx.searchString(), "title"))("cdkVirtualForTrackBy", ctx.trackBy)("cdkVirtualForTemplateCacheSize", 0);
      }
    }, dependencies: [
      DatePipe,
      FilterPipe,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      ScrollingModule,
      CdkFixedSizeVirtualScroll,
      CdkVirtualForOf,
      CdkVirtualScrollViewport,
      MatCardModule,
      MatIcon,
      MatIconButton,
      MatListModule,
      MatNavList,
      MatListItem,
      MatListItemAvatar,
      MatListItemTitle,
      MatListItemMeta,
      MatInputModule,
      MatInput,
      TranslateModule,
      TranslatePipe,
      MatTooltipModule
    ], styles: ["\n\nmat-nav-list[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  display: block;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  width: 280px !important;\n}\n.scroll-viewport-portals[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 114px) !important;\n  width: 100%;\n  padding: 4px 0;\n}\n.title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  min-width: 0;\n  flex: 1;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  width: 325px;\n  min-width: 0;\n  box-sizing: border-box;\n  height: 80px !important;\n  transition: background-color 0.2s ease;\n  border-radius: 4px;\n  margin: 2px 8px;\n}\nmat-list-item[_ngcontent-%COMP%]     .mdc-list-item__content {\n  overflow: hidden;\n  flex: 1;\n}\nmat-list-item[_ngcontent-%COMP%]:hover {\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.1);\n}\nmat-list-item[_ngcontent-%COMP%]:hover   .channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1db954;\n}\nmat-list-item.mat-mdc-list-item-active[_ngcontent-%COMP%] {\n  background-color: rgba(29, 185, 84, 0.2);\n}\nmat-list-item.mat-mdc-list-item-active[_ngcontent-%COMP%]   .channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #1db954;\n}\n.search-bar[_ngcontent-%COMP%] {\n  width: 90%;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.search-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n  .search-bar div {\n  border-radius: 20px;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n.stream-icon[_ngcontent-%COMP%] {\n  background: none;\n  border-radius: 4px;\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  margin-right: 16px;\n}\n.channel-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n}\n.channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  transition: color 0.2s ease;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.channel-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: _ngcontent-%COMP%_marquee 6s linear infinite;\n}\n.channel-info[_ngcontent-%COMP%]   .current-program[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n.channel-info[_ngcontent-%COMP%]   .current-program[_ngcontent-%COMP%]:hover {\n  overflow: visible;\n  text-overflow: clip;\n  animation: _ngcontent-%COMP%_marquee 6s linear infinite;\n}\n.channel-info[_ngcontent-%COMP%]   .program-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  opacity: 0.6;\n  padding: 0 2px;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.1);\n  opacity: 0.6;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.channel-info[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #1db954;\n  transition: width 1s linear;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .placeholder-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 60%;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  margin: 4px 0;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.channel-info[_ngcontent-%COMP%]   .no-epg-placeholder[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n}\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n  .mdc-list-item__primary-text {\n  overflow: visible !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PortalChannelsListComponent, { className: "PortalChannelsListComponent", filePath: "src\\app\\xtream-tauri\\portal-channels-list\\portal-channels-list.component.ts", lineNumber: 61 });
})();

// src/app/xtream-tauri/live-stream-layout/live-stream-layout.component.ts
function LiveStreamLayoutComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function LiveStreamLayoutComponent_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToCategories());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8, "Channels");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
  }
}
function LiveStreamLayoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "h2");
    \u0275\u0275text(2, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
}
function LiveStreamLayoutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-portal-channels-list", 4);
    \u0275\u0275listener("playClicked", function LiveStreamLayoutComponent_Conditional_9_Template_app_portal_channels_list_playClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.playLive($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function LiveStreamLayoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-category-view", 5);
    \u0275\u0275listener("categoryClicked", function LiveStreamLayoutComponent_Conditional_10_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function LiveStreamLayoutComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275element(3, "app-web-player-view", 9);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("streamUrl", ctx_r1.streamUrl);
  }
}
function LiveStreamLayoutComponent_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "app-epg-view", 10);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("epgItems", ctx_r1.epgItems());
  }
}
function LiveStreamLayoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, LiveStreamLayoutComponent_Conditional_14_Conditional_1_Template, 6, 1);
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3, "\n            ");
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275template(6, LiveStreamLayoutComponent_Conditional_14_Conditional_6_Template, 3, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const isEmbeddedPlayer_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275conditional(isEmbeddedPlayer_r5 ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.epgItems().length > 0 ? 6 : -1);
  }
}
function LiveStreamLayoutComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2, "Select a category and channel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
}
var LiveStreamLayoutComponent = class _LiveStreamLayoutComponent {
  constructor() {
    this.favoritesService = inject(FavoritesService);
    this.playerService = inject(PlayerService);
    this.xtreamStore = inject(XtreamStore);
    this.settingsStore = inject(SettingsStore);
    this.epgItems = this.xtreamStore.epgItems;
    this.selectedCategoryId = this.xtreamStore.selectedCategoryId;
    this.hideExternalInfoDialog = this.xtreamStore.hideExternalInfoDialog;
    this.selectedContentType = this.xtreamStore.selectedContentType;
    this.route = inject(ActivatedRoute);
    this.player = this.settingsStore.player;
    this.favorites = /* @__PURE__ */ new Map();
  }
  ngOnInit() {
    const playlist = this.xtreamStore.currentPlaylist();
    if (playlist) {
      this.favoritesService.getFavorites(playlist.id).subscribe((favorites) => {
        favorites.forEach((fav) => {
          this.favorites.set(fav.xtream_id, true);
        });
      });
    }
    const { categoryId } = this.route.firstChild.snapshot.params;
    if (categoryId)
      this.xtreamStore.setSelectedCategory(Number(categoryId));
  }
  playLive(item) {
    const { serverUrl, username, password } = this.xtreamStore.currentPlaylist();
    const streamUrl = `${serverUrl}/live/${username}/${password}/${item.xtream_id}.m3u8`;
    this.openPlayer(streamUrl, item.title, item.poster_url);
    this.xtreamStore.setSelectedItem(item);
    this.xtreamStore.loadEpg();
  }
  openPlayer(streamUrl, title, thumbnail) {
    this.streamUrl = streamUrl;
    this.playerService.openPlayer(streamUrl, title, thumbnail, this.hideExternalInfoDialog(), this.selectedContentType() === "live");
  }
  selectCategory(category) {
    const categoryId = category.category_id ?? category.id;
    console.log("Selected category:", categoryId);
    this.xtreamStore.setSelectedCategory(categoryId);
  }
  backToCategories() {
    this.xtreamStore.setSelectedCategory(null);
  }
  static {
    this.\u0275fac = function LiveStreamLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveStreamLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveStreamLayoutComponent, selectors: [["app-live-stream-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 4, consts: [[1, "sidebar"], [1, "sidebar-header"], [1, "content-container"], ["mat-icon-button", "", 3, "click"], [3, "playClicked"], [3, "categoryClicked"], [1, "epg"], [1, "epg-content"], [1, "video-player"], [3, "streamUrl"], [3, "epgItems"], [1, "no-channel-selected"]], template: function LiveStreamLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275declareLet(0);
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275elementStart(2, "div", 0);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "div", 1);
        \u0275\u0275text(5, "\n        ");
        \u0275\u0275template(6, LiveStreamLayoutComponent_Conditional_6_Template, 10, 0)(7, LiveStreamLayoutComponent_Conditional_7_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275template(9, LiveStreamLayoutComponent_Conditional_9_Template, 3, 0)(10, LiveStreamLayoutComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
        \u0275\u0275elementStart(12, "div", 2);
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275template(14, LiveStreamLayoutComponent_Conditional_14_Template, 9, 2)(15, LiveStreamLayoutComponent_Conditional_15_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275storeLet(ctx.player() === "videojs" || ctx.player() === "html5");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.selectedCategoryId() ? 6 : 7);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedCategoryId() ? 9 : 10);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.streamUrl ? 14 : 15);
      }
    }, dependencies: [
      CategoryViewComponent,
      EpgViewComponent,
      FormsModule,
      MatFormFieldModule,
      MatIcon,
      MatIconButton,
      MatInputModule,
      MatListModule,
      PortalChannelsListComponent,
      TranslateModule,
      WebPlayerViewComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  min-width: 300px;\n  border-right: 1px solid #111;\n}\n.content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.video-player[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50%;\n}\n.epg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 50%;\n  overflow: hidden;\n}\n.epg-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n  padding-bottom: 20px;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.sidebar-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.no-channel-selected[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveStreamLayoutComponent, { className: "LiveStreamLayoutComponent", filePath: "src\\app\\xtream-tauri\\live-stream-layout\\live-stream-layout.component.ts", lineNumber: 45 });
})();
export {
  LiveStreamLayoutComponent
};
