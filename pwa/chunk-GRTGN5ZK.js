import {
  SettingsComponent
} from "./chunk-2AK55Z2J.js";
import "./chunk-DSQXRORC.js";
import "./chunk-AFKQ3PMZ.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-L5DYQPB3.js";
import "./chunk-Q7XHDWJ2.js";
import "./chunk-KDMRIURV.js";
import "./chunk-IHEE5QXR.js";
import "./chunk-BLAGRDUN.js";
import "./chunk-3J2HDFX4.js";
import "./chunk-WLQZSEEB.js";
import "./chunk-ARLSKJ4U.js";
import {
  PlaylistInfoComponent
} from "./chunk-7D56BM5K.js";
import "./chunk-6QCFH7Z4.js";
import "./chunk-J4KICW5Y.js";
import "./chunk-UCJQWIMR.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-CZ2VXG7N.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-BDY4BXGD.js";
import "./chunk-DSAERC54.js";
import {
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import "./chunk-FHIW4JSF.js";
import "./chunk-XUXZW7VT.js";
import {
  ActivatedRoute,
  DataService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Store,
  XtreamStore,
  selectActivePlaylist,
  setActivePlaylist
} from "./chunk-PZD5NHA7.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3G7KW6UL.js";
import "./chunk-RCJSYGGY.js";
import "./chunk-EY4ID5NF.js";
import {
  CommonModule,
  MatButton,
  MatIcon,
  MatIconButton,
  NgIf,
  __async,
  effect,
  inject,
  input,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/loading-overlay/loading-overlay.component.ts
function LoadingOverlayComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "mat-progress-bar", 2);
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.current() / ctx_r0.total() * 100);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.current(), " / ", ctx_r0.total(), "");
  }
}
function LoadingOverlayComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "mat-progress-bar", 3);
    \u0275\u0275text(2, "\n                ");
  }
}
var LoadingOverlayComponent = class _LoadingOverlayComponent {
  constructor() {
    this.current = input(0);
    this.total = input(0);
  }
  static {
    this.\u0275fac = function LoadingOverlayComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingOverlayComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingOverlayComponent, selectors: [["app-loading-overlay"]], inputs: { current: [1, "current"], total: [1, "total"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "overlay"], [1, "progress-container"], ["mode", "determinate", 3, "value"], ["mode", "indeterminate"]], template: function LoadingOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275text(4, "\n                ");
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6, "Loading playlist...");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275template(8, LoadingOverlayComponent_Conditional_8_Template, 6, 3)(9, LoadingOverlayComponent_Conditional_9_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.current() !== 0 && ctx.total() !== 0 ? 8 : 9);
      }
    }, dependencies: [MatProgressBarModule, MatProgressBar, CommonModule], styles: ["\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.progress-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 8px;\n  min-width: 300px;\n  text-align: center;\n}\n.progress-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingOverlayComponent, { className: "LoadingOverlayComponent", filePath: "src\\app\\xtream-tauri\\loading-overlay\\loading-overlay.component.ts", lineNumber: 53 });
})();

// src/app/xtream-tauri/account-info/account-info.component.ts
function AccountInfoComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", ctx_r0.accountInfo == null ? null : ctx_r0.accountInfo.user_info == null ? null : ctx_r0.accountInfo.user_info.message, "\n            ");
  }
}
var AccountInfoComponent = class _AccountInfoComponent {
  constructor(data) {
    this.dataService = inject(DataService);
    this.store = inject(Store);
    this.currentPlaylist = this.store.selectSignal(selectActivePlaylist);
    this.setAccountInfo();
    this.vodStreamsCount = data.vodStreamsCount;
    this.liveStreamsCount = data.liveStreamsCount;
    this.seriesCount = data.seriesCount;
  }
  setAccountInfo() {
    return __async(this, null, function* () {
      const playlist = this.currentPlaylist();
      console.log(playlist);
      if (!playlist)
        return;
      try {
        this.accountInfo = yield this.dataService.fetchData(`${playlist.serverUrl}/player_api.php`, {
          username: playlist.username,
          password: playlist.password,
          action: "get_account_info"
        });
        console.log(this.accountInfo);
        if (this.accountInfo) {
          this.formattedExpDate = new Date(parseInt(this.accountInfo.user_info.exp_date) * 1e3).toLocaleDateString();
          this.formattedCreatedDate = new Date(parseInt(this.accountInfo.user_info.created_at) * 1e3).toLocaleDateString();
        }
      } catch (error) {
        console.error("Failed to fetch account info:", error);
      }
    });
  }
  get isActive() {
    return this.accountInfo?.user_info?.status === "Active";
  }
  get isTrial() {
    return this.accountInfo?.user_info?.is_trial === "1";
  }
  static {
    this.\u0275fac = function AccountInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AccountInfoComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountInfoComponent, selectors: [["app-account-info"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 103, vars: 26, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["class", "welcome-message", 4, "ngIf"], [1, "info-grid"], [1, "info-section"], [1, "formats"], [1, "ports"], ["mat-button", "", "mat-dialog-close", "", "color", "accent"], [1, "welcome-message"]], template: function AccountInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "h2", 0);
        \u0275\u0275text(2, "Account Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275template(6, AccountInfoComponent_div_6_Template, 2, 1, "div", 2);
        \u0275\u0275text(7, "\n            ");
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275text(9, "\n                ");
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275text(11, "\n                    ");
        \u0275\u0275elementStart(12, "h3");
        \u0275\u0275text(13, "User Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n                    ");
        \u0275\u0275elementStart(15, "mat-list");
        \u0275\u0275text(16, "\n                        ");
        \u0275\u0275elementStart(17, "mat-list-item");
        \u0275\u0275text(18, "\n                            Status:\n                            ");
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n                        ");
        \u0275\u0275elementStart(23, "mat-list-item");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n                        ");
        \u0275\u0275elementStart(26, "mat-list-item");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n                        ");
        \u0275\u0275elementStart(29, "mat-list-item");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n                        ");
        \u0275\u0275elementStart(32, "mat-list-item");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n                        ");
        \u0275\u0275elementStart(35, "mat-list-item");
        \u0275\u0275text(36, "\n                            Trial Account:\n                            ");
        \u0275\u0275elementStart(37, "span");
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n                        ");
        \u0275\u0275elementStart(41, "mat-list-item");
        \u0275\u0275text(42, "\n                            Allowed Formats:\n                            ");
        \u0275\u0275elementStart(43, "span", 5);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, "\n\n                ");
        \u0275\u0275elementStart(49, "div", 4);
        \u0275\u0275text(50, "\n                    ");
        \u0275\u0275elementStart(51, "h3");
        \u0275\u0275text(52, "Server Information");
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, "\n                    ");
        \u0275\u0275elementStart(54, "mat-list");
        \u0275\u0275text(55, "\n                        ");
        \u0275\u0275elementStart(56, "mat-list-item");
        \u0275\u0275text(57);
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, "\n                        ");
        \u0275\u0275elementStart(59, "mat-list-item");
        \u0275\u0275text(60);
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, "\n                        ");
        \u0275\u0275elementStart(62, "mat-list-item");
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, "\n                        ");
        \u0275\u0275elementStart(65, "mat-list-item");
        \u0275\u0275text(66);
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, "\n                        ");
        \u0275\u0275elementStart(68, "mat-list-item");
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, "\n                        ");
        \u0275\u0275elementStart(71, "mat-list-item");
        \u0275\u0275text(72);
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, "\n                        ");
        \u0275\u0275elementStart(74, "mat-list-item");
        \u0275\u0275text(75);
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, "\n                        ");
        \u0275\u0275elementStart(77, "mat-list-item");
        \u0275\u0275text(78, "\n                            Ports:\n                            ");
        \u0275\u0275elementStart(79, "div", 6);
        \u0275\u0275text(80, "\n                                ");
        \u0275\u0275elementStart(81, "span");
        \u0275\u0275text(82);
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, "\n                                ");
        \u0275\u0275elementStart(84, "span");
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, "\n                                ");
        \u0275\u0275elementStart(87, "span");
        \u0275\u0275text(88);
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "\n                            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n                        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, "\n        ");
        \u0275\u0275elementStart(96, "mat-dialog-actions");
        \u0275\u0275text(97, "\n            ");
        \u0275\u0275elementStart(98, "button", 7);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.message);
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.isActive);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.status);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                            Username:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.username, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("\n                            Active Connections:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.active_cons, "/", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.max_connections, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Created:\n                            ", ctx.formattedCreatedDate, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Expires: ", ctx.formattedExpDate, "\n                        ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("trial", ctx.isTrial);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.isTrial ? "Yes" : "No");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n                                ", ctx.accountInfo == null ? null : ctx.accountInfo.user_info == null ? null : ctx.accountInfo.user_info.allowed_output_formats == null ? null : ctx.accountInfo.user_info.allowed_output_formats.join(", "), "\n                            ");
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1("\n                            Live TV:\n                            ", ctx.liveStreamsCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Movies:\n                            ", ctx.vodStreamsCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            TV Series:\n                            ", ctx.seriesCount, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            URL:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.url, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Protocol:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.server_protocol, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Timezone:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.timezone, "\n                        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                            Server Time:\n                            ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.time_now, "\n                        ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("HTTP:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.port, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("HTTPS:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.https_port, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("RTMP:\n                                    ", ctx.accountInfo == null ? null : ctx.accountInfo.server_info == null ? null : ctx.accountInfo.server_info.rtmp_port, "");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(100, 24, "CLOSE"), "\n            ");
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      MatButton,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatCardModule,
      MatListModule,
      MatList,
      MatListItem,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n.account-info-card[_ngcontent-%COMP%] {\n  margin: 16px;\n  max-width: 1200px;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.info-section[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-left: 16px;\n  font-size: 1.1em;\n  border-bottom: 1px solid #333;\n  padding-bottom: 8px;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  height: auto !important;\n  margin-bottom: 8px;\n  padding: 8px 16px;\n}\nstrong[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  min-width: 140px;\n  display: inline-block;\n}\n.active[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-weight: 500;\n}\n.trial[_ngcontent-%COMP%] {\n  color: #ff9800;\n  font-weight: 500;\n}\n.formats[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.ports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.ports[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background: #2196f3;\n  border-radius: 4px;\n  font-size: 0.9em;\n}\n.welcome-message[_ngcontent-%COMP%] {\n  border: 1px solid #333;\n  padding: 16px;\n  border-radius: 4px;\n  margin-bottom: 16px;\n  text-align: center;\n  font-style: italic;\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .account-info-card[_ngcontent-%COMP%] {\n    margin: 8px;\n  }\n  .ports[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountInfoComponent, { className: "AccountInfoComponent", filePath: "src\\app\\xtream-tauri\\account-info\\account-info.component.ts", lineNumber: 143 });
})();

// src/app/xtream-tauri/navigation/navigation.component.ts
var _c0 = () => ({ exact: true });
var NavigationComponent = class _NavigationComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.currentPlaylist = this.store.selectSignal(selectActivePlaylist);
  }
  ngOnInit() {
    this.xtreamStore.checkPortalStatus();
  }
  getStatusColor() {
    const status = this.xtreamStore.portalStatus();
    switch (status) {
      case "active":
        return "status-active";
      case "inactive":
        return "status-inactive";
      case "expired":
        return "status-expired";
      default:
        return "status-unavailable";
    }
  }
  getStatusIcon() {
    const status = this.xtreamStore.portalStatus();
    switch (status) {
      case "active":
        return "check_circle";
      case "inactive":
        return "cancel";
      case "expired":
        return "warning";
      default:
        return "error";
    }
  }
  openAccountInfo() {
    this.dialog.open(AccountInfoComponent, {
      width: "80%",
      maxWidth: "1200px",
      maxHeight: "90vh",
      data: {
        vodStreamsCount: this.xtreamStore.vodStreams().length,
        liveStreamsCount: this.xtreamStore.liveStreams().length,
        seriesCount: this.xtreamStore.serialStreams().length
      }
    });
  }
  openSettings() {
    this.dialog.open(SettingsComponent, {
      width: "80%",
      maxWidth: "1200px",
      maxHeight: "90vh",
      data: {
        isDialog: true
      }
    });
  }
  isContentTypeActive(type) {
    return this.xtreamStore.selectedContentType() === type;
  }
  openPlaylistInfo() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  static {
    this.\u0275fac = function NavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavigationComponent, selectors: [["app-navigation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 133, vars: 18, consts: [[1, "portal-status-container"], [1, "portal-status-wrapper"], [1, "portal-header"], [1, "portal-icon"], [1, "portal-info"], [1, "portal-name"], [1, "portal-label"], [1, "portal-actions"], ["mat-icon-button", "", "routerLink", "/", "routerLinkActive", "active", "matTooltip", "Home", 1, "action-button", 3, "routerLinkActiveOptions"], ["mat-icon-button", "", "matTooltip", "Account Info", 1, "action-button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Playlist Info", 1, "action-button", 3, "click"], [1, "nav-section"], [1, "nav-group-label"], ["mat-list-item", "", "routerLink", "./vod", 3, "click"], ["matListItemIcon", ""], ["matListItemTitle", ""], ["mat-list-item", "", "routerLink", "./live", 3, "click"], ["mat-list-item", "", "routerLink", "./series", 3, "click"], ["mat-list-item", "", "routerLink", "./search", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "./recent", "routerLinkActive", "active", 3, "click"], ["mat-list-item", "", "routerLink", "./favorites", "routerLinkActive", "active", 3, "click"], [1, "navigation-bottom"], ["mat-list-item", "", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275text(7, "\n                ");
        \u0275\u0275elementStart(8, "mat-icon");
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275text(14, "\n            ");
        \u0275\u0275elementStart(15, "span", 5);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "span", 6);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n        ");
        \u0275\u0275elementStart(22, "div", 7);
        \u0275\u0275text(23, "\n            ");
        \u0275\u0275elementStart(24, "button", 8);
        \u0275\u0275text(25, "\n                ");
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n            ");
        \u0275\u0275elementStart(30, "button", 9);
        \u0275\u0275listener("click", function NavigationComponent_Template_button_click_30_listener() {
          return ctx.openAccountInfo();
        });
        \u0275\u0275text(31, "\n                ");
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n            ");
        \u0275\u0275elementStart(36, "button", 10);
        \u0275\u0275listener("click", function NavigationComponent_Template_button_click_36_listener() {
          return ctx.openPlaylistInfo();
        });
        \u0275\u0275text(37, "\n                ");
        \u0275\u0275elementStart(38, "mat-icon");
        \u0275\u0275text(39, "playlist_play");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n\n");
        \u0275\u0275elementStart(45, "div", 11);
        \u0275\u0275text(46, "\n    ");
        \u0275\u0275elementStart(47, "div", 12);
        \u0275\u0275text(48, "Main");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, "\n    ");
        \u0275\u0275elementStart(50, "mat-nav-list");
        \u0275\u0275text(51, "\n        ");
        \u0275\u0275elementStart(52, "a", 13);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_52_listener() {
          return ctx.xtreamStore.setSelectedContentType("vod");
        });
        \u0275\u0275text(53, "\n            ");
        \u0275\u0275elementStart(54, "mat-icon", 14);
        \u0275\u0275text(55, "movie");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, "\n            ");
        \u0275\u0275elementStart(57, "span", 15);
        \u0275\u0275text(58, "Movies");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, "\n        ");
        \u0275\u0275elementStart(61, "a", 16);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_61_listener() {
          return ctx.xtreamStore.setSelectedContentType("live");
        });
        \u0275\u0275text(62, "\n            ");
        \u0275\u0275elementStart(63, "mat-icon", 14);
        \u0275\u0275text(64, "live_tv");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, "\n            ");
        \u0275\u0275elementStart(66, "span", 15);
        \u0275\u0275text(67, "Live TV");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, "\n        ");
        \u0275\u0275elementStart(70, "a", 17);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_70_listener() {
          return ctx.xtreamStore.setSelectedContentType("series");
        });
        \u0275\u0275text(71, "\n            ");
        \u0275\u0275elementStart(72, "mat-icon", 14);
        \u0275\u0275text(73, "tv");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, "\n            ");
        \u0275\u0275elementStart(75, "span", 15);
        \u0275\u0275text(76, "TV Series");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, "\n\n");
        \u0275\u0275elementStart(81, "div", 11);
        \u0275\u0275text(82, "\n    ");
        \u0275\u0275elementStart(83, "div", 12);
        \u0275\u0275text(84, "Library");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, "\n    ");
        \u0275\u0275elementStart(86, "mat-nav-list");
        \u0275\u0275text(87, "\n        ");
        \u0275\u0275elementStart(88, "a", 18);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_88_listener() {
          return ctx.xtreamStore.setSelectedContentType(void 0);
        });
        \u0275\u0275text(89, "\n            ");
        \u0275\u0275elementStart(90, "mat-icon", 14);
        \u0275\u0275text(91, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n            ");
        \u0275\u0275elementStart(93, "span", 15);
        \u0275\u0275text(94, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, "\n        ");
        \u0275\u0275elementStart(97, "a", 19);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_97_listener() {
          return ctx.xtreamStore.setSelectedContentType(void 0);
        });
        \u0275\u0275text(98, "\n            ");
        \u0275\u0275elementStart(99, "mat-icon", 14);
        \u0275\u0275text(100, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, "\n            ");
        \u0275\u0275elementStart(102, "span", 15);
        \u0275\u0275text(103, "Recent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, "\n        ");
        \u0275\u0275elementStart(106, "a", 20);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_106_listener() {
          return ctx.xtreamStore.setSelectedContentType(void 0);
        });
        \u0275\u0275text(107, "\n            ");
        \u0275\u0275elementStart(108, "mat-icon", 14);
        \u0275\u0275text(109, "favorite");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, "\n            ");
        \u0275\u0275elementStart(111, "span", 15);
        \u0275\u0275text(112, "Favorites");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(114, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, "\n\n");
        \u0275\u0275elementStart(117, "div", 21);
        \u0275\u0275text(118, "\n    ");
        \u0275\u0275elementStart(119, "mat-nav-list");
        \u0275\u0275text(120, "\n        ");
        \u0275\u0275elementStart(121, "a", 22);
        \u0275\u0275listener("click", function NavigationComponent_Template_a_click_121_listener() {
          return ctx.openSettings();
        });
        \u0275\u0275text(122, "\n            ");
        \u0275\u0275elementStart(123, "mat-icon", 14);
        \u0275\u0275text(124, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(125, "\n            ");
        \u0275\u0275elementStart(126, "span", 15);
        \u0275\u0275text(127);
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(130, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(132, "\n");
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275classMap(ctx.getStatusColor());
        \u0275\u0275advance(6);
        \u0275\u0275classMap(ctx.getStatusColor());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getStatusIcon());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(((tmp_3_0 = ctx.currentPlaylist()) == null ? null : tmp_3_0.title) || "Unknown Portal");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.xtreamStore.portalStatus());
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(17, _c0));
        \u0275\u0275advance(28);
        \u0275\u0275classProp("active", ctx.isContentTypeActive("vod"));
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.isContentTypeActive("live"));
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.isContentTypeActive("series"));
        \u0275\u0275advance(57);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(128, 15, "MENU.SETTINGS"));
      }
    }, dependencies: [
      MatListModule,
      MatNavList,
      MatListItem,
      MatListItemIcon,
      MatListItemTitle,
      MatIcon,
      MatIconButton,
      RouterLink,
      RouterLinkActive,
      TranslateModule,
      TranslatePipe,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n[_nghost-%COMP%] {\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.navigation-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #333;\n  margin-top: auto;\n  padding-bottom: 16px;\n}\n.active[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  background: rgba(63, 81, 181, 0.12);\n  color: #3f51b5;\n  border-left: 4px solid #3f51b5;\n}\n.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\nmat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%] {\n  margin: -10px -10px 0px;\n  padding: 16px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(18, 18, 18, 0.8) 0%,\n      transparent 100%);\n  backdrop-filter: blur(20px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  min-height: 120px;\n}\n.portal-status-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n  opacity: 0.8;\n  transition: background 0.3s ease;\n}\n.portal-status-container.status-active[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-inactive[_ngcontent-%COMP%]::before, \n.portal-status-container.status-unavailable[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(244, 67, 54, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container.status-expired[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.3) 0%,\n      transparent 100%);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-status-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  height: 100%;\n  min-width: 0;\n  width: 100%;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.1);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  margin: 0;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-active[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-inactive[_ngcontent-%COMP%], \n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-unavailable[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-icon.status-expired[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%]   .portal-name[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: rgba(255, 255, 255, 0.95);\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-info[_ngcontent-%COMP%]   .portal-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  color: rgba(255, 255, 255, 0.7);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-top: 4px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  transition: all 0.2s ease;\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.portal-status-container[_ngcontent-%COMP%]   .portal-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.portal-status-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  margin-left: 8px;\n}\n.portal-status-container[_ngcontent-%COMP%]   .info-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.nav-section[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 5px 0;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-group-label[_ngcontent-%COMP%] {\n  padding: 0 16px 0;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  opacity: 0.7;\n}\n.nav-section[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 8px;\n  overflow: hidden;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavigationComponent, { className: "NavigationComponent", filePath: "src\\app\\xtream-tauri\\navigation\\navigation.component.ts", lineNumber: 31 });
})();

// src/app/xtream-tauri/xtream-shell/xtream-shell.component.ts
function XtreamShellComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-loading-overlay", 2);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("current", ctx_r0.getImportCount())("total", ctx_r0.itemsToImport());
  }
}
var XtreamShellComponent = class _XtreamShellComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.store = inject(Store);
    this.xtreamStore = inject(XtreamStore);
    this.getImportCount = this.xtreamStore.getImportCount;
    this.isImporting = this.xtreamStore.isImporting;
    this.itemsToImport = this.xtreamStore.itemsToImport;
    effect(() => {
      if (this.xtreamStore.currentPlaylist() !== null) {
        this.xtreamStore.initializeContent();
      }
    }, { allowSignalWrites: true });
  }
  ngOnInit() {
    this.store.dispatch(setActivePlaylist({
      playlistId: this.route.snapshot.params.id
    }));
  }
  static {
    this.\u0275fac = function XtreamShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamShellComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275ProvidersFeature([XtreamStore]), \u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "xtream-container"], [1, "navigation-sidebar"], [3, "current", "total"]], template: function XtreamShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, XtreamShellComponent_Conditional_0_Template, 3, 2);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n    ");
        \u0275\u0275element(3, "app-navigation", 1);
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275text(6, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isImporting() ? 0 : -1);
      }
    }, dependencies: [
      LoadingOverlayComponent,
      NavigationComponent,
      RouterOutlet,
      TranslateModule
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n}\n.xtream-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.navigation-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n  border-right: 1px solid #333;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamShellComponent, { className: "XtreamShellComponent", filePath: "src\\app\\xtream-tauri\\xtream-shell\\xtream-shell.component.ts", lineNumber: 22 });
})();
export {
  XtreamShellComponent
};
