import {
  CdkCopyToClipboard,
  ClipboardModule,
  ExternalPlayerInfoDialogComponent,
  WebPlayerViewComponent
} from "./chunk-QTVF6LFJ.js";
import {
  SettingsStore
} from "./chunk-3J2HDFX4.js";
import {
  VideoPlayer
} from "./chunk-WLQZSEEB.js";
import {
  OPEN_MPV_PLAYER,
  OPEN_VLC_PLAYER
} from "./chunk-ARLSKJ4U.js";
import {
  MatSnackBar
} from "./chunk-J4KICW5Y.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UCJQWIMR.js";
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
  MatFormField,
  MatFormFieldModule
} from "./chunk-FHIW4JSF.js";
import {
  DataService
} from "./chunk-PZD5NHA7.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-3G7KW6UL.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/player-dialog/player-dialog.component.ts
var PlayerDialogComponent = class _PlayerDialogComponent {
  constructor(data, snackBar, translateService) {
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.streamUrl = data.streamUrl;
    this.title = data.title;
  }
  showCopyNotification() {
    this.snackBar.open(this.translateService.instant("PORTALS.STREAM_URL_COPIED"), null, {
      duration: 2e3
    });
  }
  static {
    this.\u0275fac = function PlayerDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlayerDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlayerDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 10, consts: [["mat-dialog-title", ""], [1, "content"], [3, "streamUrl"], [1, "link-input"], ["matInput", "", "formControlName", "streamUrl", "disabled", "", 3, "value"], [1, "align-actions"], ["mat-button", "", 3, "click", "cdkCopyToClipboard"], ["mat-button", "", "mat-dialog-close", "", "color", "accent"]], template: function PlayerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275elementStart(3, "mat-dialog-content", 1);
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275element(5, "app-web-player-view", 2);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "mat-form-field", 3);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
        \u0275\u0275elementStart(13, "mat-dialog-actions", 5);
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function PlayerDialogComponent_Template_button_click_15_listener() {
          return ctx.showCopyNotification();
        });
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n    ");
        \u0275\u0275elementStart(22, "button", 7);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275property("streamUrl", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.streamUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkCopyToClipboard", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(20, 6, "PORTALS.COPY_STREAM_URL"), "\n    ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(24, 8, "CLOSE"), "\n    ");
      }
    }, dependencies: [ClipboardModule, CdkCopyToClipboard, MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatIconModule, MatIcon, MatInputModule, MatInput, TranslateModule, TranslatePipe, WebPlayerViewComponent], styles: ["/* src/app/xtream-tauri/player-dialog/player-dialog.component.scss */\n.content {\n  overflow: hidden;\n  padding: 10px !important;\n}\n.link-input {\n  width: 98%;\n  padding-top: 5px;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.align-actions {\n  justify-content: space-between;\n}\nmat-dialog-content .video-js {\n  height: 500px !important;\n}\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlayerDialogComponent, { className: "PlayerDialogComponent", filePath: "src\\app\\xtream-tauri\\player-dialog\\player-dialog.component.ts", lineNumber: 33 });
})();

// src/app/services/player.service.ts
var PlayerService = class _PlayerService {
  constructor() {
    this.dialog = inject(MatDialog);
    this.dataService = inject(DataService);
    this.settingsStore = inject(SettingsStore);
  }
  openPlayer(streamUrl, title, thumbnail, hideExternalInfoDialog = false, isLiveContent = false) {
    const player = this.settingsStore.player() ?? VideoPlayer.VideoJs;
    if (player === VideoPlayer.MPV) {
      if (!hideExternalInfoDialog) {
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      }
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, {
        url: streamUrl,
        mpvPlayerPath: this.settingsStore.mpvPlayerPath(),
        title,
        thumbnail
      });
    } else if (player === VideoPlayer.VLC) {
      if (!hideExternalInfoDialog) {
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      }
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, {
        url: streamUrl,
        vlcPlayerPath: this.settingsStore.vlcPlayerPath()
      });
    } else if (!isLiveContent) {
      this.dialog.open(PlayerDialogComponent, {
        data: { streamUrl, title },
        width: "80%",
        maxWidth: "1200px",
        maxHeight: "90vh"
      });
    }
  }
  static {
    this.\u0275fac = function PlayerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlayerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlayerService, factory: _PlayerService.\u0275fac, providedIn: "root" });
  }
};

export {
  PlayerService
};
