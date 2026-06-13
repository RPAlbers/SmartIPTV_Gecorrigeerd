import {
  CategoryViewComponent
} from "./chunk-FWQQO4YK.js";
import "./chunk-WSH5IJNZ.js";
import "./chunk-67SZNSOH.js";
import "./chunk-KC25OGSN.js";
import "./chunk-OKC2LWEA.js";
import "./chunk-5E2U4X57.js";
import "./chunk-SPPA5QBE.js";
import "./chunk-EMMDYAAJ.js";
import "./chunk-WEMVKP6E.js";
import "./chunk-H6HSJUEJ.js";
import {
  ActivatedRoute,
  Router,
  RouterOutlet,
  Store,
  XtreamStore,
  invoke,
  transformCallback
} from "./chunk-5JZTGDVN.js";
import "./chunk-4GAH7JHC.js";
import {
  TranslateModule
} from "./chunk-DXN3EFMC.js";
import "./chunk-7HVMDVTX.js";
import "./chunk-ZAQMD6LU.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  NgIf,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YPE2NSDF.js";

// node_modules/@tauri-apps/api/event.js
var TauriEvent;
(function(TauriEvent2) {
  TauriEvent2["WINDOW_RESIZED"] = "tauri://resize";
  TauriEvent2["WINDOW_MOVED"] = "tauri://move";
  TauriEvent2["WINDOW_CLOSE_REQUESTED"] = "tauri://close-requested";
  TauriEvent2["WINDOW_DESTROYED"] = "tauri://destroyed";
  TauriEvent2["WINDOW_FOCUS"] = "tauri://focus";
  TauriEvent2["WINDOW_BLUR"] = "tauri://blur";
  TauriEvent2["WINDOW_SCALE_FACTOR_CHANGED"] = "tauri://scale-change";
  TauriEvent2["WINDOW_THEME_CHANGED"] = "tauri://theme-changed";
  TauriEvent2["WINDOW_CREATED"] = "tauri://window-created";
  TauriEvent2["WEBVIEW_CREATED"] = "tauri://webview-created";
  TauriEvent2["DRAG_ENTER"] = "tauri://drag-enter";
  TauriEvent2["DRAG_OVER"] = "tauri://drag-over";
  TauriEvent2["DRAG_DROP"] = "tauri://drag-drop";
  TauriEvent2["DRAG_LEAVE"] = "tauri://drag-leave";
})(TauriEvent || (TauriEvent = {}));
function _unlisten(event, eventId) {
  return __async(this, null, function* () {
    yield invoke("plugin:event|unlisten", {
      event,
      eventId
    });
  });
}
function listen(event, handler, options) {
  return __async(this, null, function* () {
    var _a;
    const target = typeof (options === null || options === void 0 ? void 0 : options.target) === "string" ? {
      kind: "AnyLabel",
      label: options.target
    } : (_a = options === null || options === void 0 ? void 0 : options.target) !== null && _a !== void 0 ? _a : {
      kind: "Any"
    };
    return invoke("plugin:event|listen", {
      event,
      target,
      handler: transformCallback(handler)
    }).then((eventId) => {
      return () => __async(this, null, function* () {
        return _unlisten(event, eventId);
      });
    });
  });
}

// src/app/shared/services/mpv-player.service.ts
var MpvPlayerService = class _MpvPlayerService {
  constructor() {
    this.activeProcessesSubject = new BehaviorSubject([]);
    this.activeProcesses$ = this.activeProcessesSubject.asObservable();
    this.initializeEventListeners();
    this.loadActiveProcesses();
  }
  initializeEventListeners() {
    return __async(this, null, function* () {
      yield listen("mpv-process-added", (event) => {
        const newProcess = event.payload;
        if (newProcess) {
          const currentProcesses = this.activeProcessesSubject.value;
          this.activeProcessesSubject.next([
            ...currentProcesses,
            newProcess
          ]);
        }
      });
      yield listen("mpv-process-removed", (event) => {
        const removedProcess = event.payload;
        if (removedProcess) {
          const currentProcesses = this.activeProcessesSubject.value;
          this.activeProcessesSubject.next(currentProcesses.filter((p) => p.id !== removedProcess.id));
        }
      });
    });
  }
  loadActiveProcesses() {
    return __async(this, null, function* () {
      try {
        const processes = yield invoke("get_active_mpv_processes");
        this.activeProcessesSubject.next(processes);
      } catch (error) {
        console.error("Failed to load active MPV processes:", error);
      }
    });
  }
  openStream(url, title, thumbnail, mpvPath = "") {
    return __async(this, null, function* () {
      return yield invoke("open_in_mpv", {
        url,
        path: mpvPath,
        title,
        thumbnail
      });
    });
  }
  playStream(processId) {
    return __async(this, null, function* () {
      yield invoke("mpv_play", { processId });
    });
  }
  pauseStream(processId) {
    return __async(this, null, function* () {
      yield invoke("mpv_pause", { processId });
    });
  }
  closeStream(processId) {
    return __async(this, null, function* () {
      yield invoke("close_mpv_process", { processId });
    });
  }
  static {
    this.\u0275fac = function MpvPlayerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MpvPlayerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MpvPlayerService, factory: _MpvPlayerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/mpv-player-bar/mpv-player-bar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MpvPlayerBarComponent_div_0_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "img", 9);
    \u0275\u0275listener("error", function MpvPlayerBarComponent_div_0_For_3_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    const process_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", process_r3.thumbnail, \u0275\u0275sanitizeUrl)("alt", process_r3.title);
  }
}
function MpvPlayerBarComponent_div_0_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "live_tv");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
  }
}
function MpvPlayerBarComponent_div_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275template(5, MpvPlayerBarComponent_div_0_For_3_Conditional_5_Template, 3, 2)(6, MpvPlayerBarComponent_div_0_For_3_Conditional_6_Template, 7, 0);
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275text(8, "\n                    ");
    \u0275\u0275elementStart(9, "span", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                    ");
    \u0275\u0275elementStart(12, "span", 6);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n\n            ");
    \u0275\u0275elementStart(17, "div", 7);
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementStart(20, "button", 8);
    \u0275\u0275listener("click", function MpvPlayerBarComponent_div_0_For_3_Template_button_click_20_listener() {
      const process_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeStream(process_r3.id));
    });
    \u0275\u0275text(21, "\n                    ");
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, "\n    ");
  }
  if (rf & 2) {
    const process_r3 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(process_r3.thumbnail ? 5 : 6);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(process_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(process_r3.url);
  }
}
function MpvPlayerBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275repeaterCreate(2, MpvPlayerBarComponent_div_0_For_3_Template, 28, 3, null, null, _forTrack0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 0, ctx_r3.activeProcesses$));
  }
}
var MpvPlayerBarComponent = class _MpvPlayerBarComponent {
  constructor(mpvPlayerService) {
    this.mpvPlayerService = mpvPlayerService;
    this.activeProcesses$ = this.mpvPlayerService.activeProcesses$;
  }
  closeStream(processId) {
    return __async(this, null, function* () {
      yield this.mpvPlayerService.closeStream(processId);
    });
  }
  static {
    this.\u0275fac = function MpvPlayerBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MpvPlayerBarComponent)(\u0275\u0275directiveInject(MpvPlayerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MpvPlayerBarComponent, selectors: [["app-mpv-player-bar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["class", "mpv-player-bar", 4, "ngIf"], [1, "mpv-player-bar"], [1, "player-item"], [1, "player-media"], [1, "media-info"], [1, "media-title"], [1, "media-url"], [1, "player-controls"], ["mat-icon-button", "", "title", "Close", 3, "click"], [1, "media-thumbnail", 3, "error", "src", "alt"], [1, "media-thumbnail-placeholder"]], template: function MpvPlayerBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MpvPlayerBarComponent_div_0_Template, 5, 2, "div", 0);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275text(2, "\n");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(1, 1, ctx.activeProcesses$)) == null ? null : tmp_0_0.length);
      }
    }, dependencies: [CommonModule, NgIf, AsyncPipe, MatIconModule, MatIcon, MatButtonModule, MatIconButton], styles: ["\n\n.mpv-player-bar[_ngcontent-%COMP%] {\n  background: #282828;\n  color: white;\n  padding: 16px;\n  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);\n  flex-shrink: 0;\n}\n.player-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.player-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  height: 56px;\n}\n.player-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.player-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.player-url[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #a0a0a0;\n  margin-top: 4px;\n}\n.player-media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.media-thumbnail[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.media-thumbnail-placeholder[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: #404040;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.media-thumbnail-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #b3b3b3;\n}\n.media-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.media-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.media-url[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b3b3b3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.player-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.player-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.player-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #1db954;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MpvPlayerBarComponent, { className: "MpvPlayerBarComponent", filePath: "src\\app\\shared\\components\\mpv-player-bar\\mpv-player-bar.component.ts", lineNumber: 18 });
})();

// src/app/xtream-tauri/xtream-main-container.component.ts
function XtreamMainContainerComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 6);
    \u0275\u0275listener("click", function XtreamMainContainerComponent_Conditional_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.historyBack());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
}
var XtreamMainContainerComponent = class _XtreamMainContainerComponent {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.xtreamStore = inject(XtreamStore);
    this.store = inject(Store);
  }
  categoryClicked(category) {
    const categoryId = category.category_id ?? category.id;
    this.xtreamStore.setSelectedCategory(Number(categoryId));
    this.router.navigate([categoryId], {
      relativeTo: this.route
    });
  }
  getContentLabel() {
    if (this.xtreamStore.getSelectedCategory() === null || this.xtreamStore.getSelectedCategory() === void 0) {
      return "Select a category";
    } else {
      const selectedCategory = this.xtreamStore.getSelectedCategory();
      return selectedCategory ? `Content for ${selectedCategory.name}` : "Category Content";
    }
  }
  historyBack() {
    this.router.navigate([".", this.xtreamStore.selectedCategoryId()], {
      relativeTo: this.route
    });
  }
  static {
    this.\u0275fac = function XtreamMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamMainContainerComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamMainContainerComponent, selectors: [["app-xtream-main-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 2, consts: [[1, "sidebar"], [1, "sidebar-header"], [3, "categoryClicked"], [1, "main-content"], [1, "content-header"], [1, "scrollable-content"], ["mat-icon-button", "", 3, "click"]], template: function XtreamMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275elementStart(8, "app-category-view", 2);
        \u0275\u0275listener("categoryClicked", function XtreamMainContainerComponent_Template_app_category_view_categoryClicked_8_listener($event) {
          return ctx.categoryClicked($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n\n");
        \u0275\u0275elementStart(11, "div", 3);
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275elementStart(15, "h2");
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275template(17, XtreamMainContainerComponent_Conditional_17_Template, 7, 0);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n    ");
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275element(23, "router-outlet");
        \u0275\u0275text(24, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n    ");
        \u0275\u0275element(26, "app-mpv-player-bar");
        \u0275\u0275text(27, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275conditional(ctx.xtreamStore.selectedItem() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n            ", ctx.getContentLabel(), "\n        ");
      }
    }, dependencies: [
      CategoryViewComponent,
      TranslateModule,
      RouterOutlet,
      MpvPlayerBarComponent,
      MatIcon,
      MatIconButton
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n.content-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.content-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.scrollable-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}", "\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  border-right: 1px solid #333;\n  display: flex;\n  flex-direction: column;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamMainContainerComponent, { className: "XtreamMainContainerComponent", filePath: "src\\app\\xtream-tauri\\xtream-main-container.component.ts", lineNumber: 27 });
})();
export {
  XtreamMainContainerComponent
};
