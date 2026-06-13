import {
  SettingsService,
  require_semver
} from "./chunk-DSQXRORC.js";
import {
  EpgService
} from "./chunk-AFKQ3PMZ.js";
import {
  HeaderComponent
} from "./chunk-R2T2KEKH.js";
import {
  SettingsStore
} from "./chunk-3J2HDFX4.js";
import {
  Language,
  Theme,
  VideoPlayer
} from "./chunk-WLQZSEEB.js";
import {
  SETTINGS_UPDATE,
  SET_MPV_PLAYER_PATH,
  SET_VLC_PLAYER_PATH
} from "./chunk-ARLSKJ4U.js";
import {
  DialogService
} from "./chunk-7D56BM5K.js";
import {
  PlaylistsService
} from "./chunk-6QCFH7Z4.js";
import {
  MatSnackBar
} from "./chunk-J4KICW5Y.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatInput,
  MatInputModule
} from "./chunk-UCJQWIMR.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-CZ2VXG7N.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-BDY4BXGD.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-DSAERC54.js";
import {
  MatError,
  MatFormField,
  MatLabel
} from "./chunk-FHIW4JSF.js";
import {
  DataService,
  Router,
  Store,
  addManyPlaylists,
  removeAllPlaylists,
  selectIsEpgAvailable
} from "./chunk-PZD5NHA7.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-3G7KW6UL.js";
import {
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RCJSYGGY.js";
import {
  CommonModule,
  KeyValuePipe,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  __toESM,
  inject,
  take,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3GV7X4D.js";

// src/app/settings/settings.component.ts
var semver = __toESM(require_semver());
function SettingsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-header", 18);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "SETTINGS.TITLE"))("subtitle", \u0275\u0275pipeBind1(3, 4, "SETTINGS.SUBTITLE") + ". " + \u0275\u0275pipeBind1(4, 6, "SETTINGS.DESCRIPTION"));
  }
}
function SettingsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "h2", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "SETTINGS.TITLE"));
  }
}
function SettingsComponent_ng_container_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "\n                        ");
    \u0275\u0275elementStart(2, "mat-form-field", 24);
    \u0275\u0275text(3, "\n                            ");
    \u0275\u0275elementStart(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                            ");
    \u0275\u0275element(8, "input", 25, 0);
    \u0275\u0275text(10, "\n                            ");
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                        ");
    \u0275\u0275elementStart(16, "button", 26);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_6_div_13_Template_button_click_16_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshEpg(ctx_r3.epgUrl.value[i_r3]));
    });
    \u0275\u0275text(18, "\n                            ");
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                        ");
    \u0275\u0275elementStart(23, "button", 27);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_6_div_13_Template_button_click_23_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeEpgSource(i_r3));
    });
    \u0275\u0275text(25, "\n                            ");
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const epgField_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "SETTINGS.EPG_URL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", i_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "SETTINGS.EPG_URL_ERROR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 10, "SETTINGS.REFRESH_EPG"))("disabled", epgField_r5.value === "");
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(24, 12, "SETTINGS.REFRESH_EPG"));
  }
}
function SettingsComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 20);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Add single or multiple URLs as EPG sources");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275template(13, SettingsComponent_ng_container_6_div_13_Template, 30, 14, "div", 21);
    \u0275\u0275text(14, "\n                    ");
    \u0275\u0275elementStart(15, "button", 22);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addEpgSource());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275element(21, "mat-divider");
    \u0275\u0275text(22, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(6, 3, "SETTINGS.EPG_URL_LABEL"), "\n                    ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.epgUrl.controls);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(17, 5, "SETTINGS.ADD_EPG_SOURCE"), "\n                    ");
  }
}
function SettingsComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r6 = ctx.$implicit;
    \u0275\u0275property("value", player_r6.id);
    \u0275\u0275attribute("data-test-id", player_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", player_r6.label, "\n                        ");
  }
}
function SettingsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275elementStart(13, "mat-form-field", 6);
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementStart(15, "mat-label", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                        ");
    \u0275\u0275element(19, "input", 30);
    \u0275\u0275text(20, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(5, 3, "SETTINGS.MPV_PLAYER_PATH_LABEL"), "\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(8, 5, "SETTINGS.MPV_PLAYER_PATH_DESCRIPTION"), "\n                    ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "SETTINGS.MPV_PLAYER_PATH"));
  }
}
function SettingsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275elementStart(13, "mat-form-field", 6);
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementStart(15, "mat-label", 31);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                        ");
    \u0275\u0275element(19, "input", 32);
    \u0275\u0275text(20, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(5, 3, "SETTINGS.VLC_PLAYER_PATH_LABEL"), "\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(8, 5, "SETTINGS.VLC_PLAYER_PATH_DESCRIPTION"), "\n                    ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 7, "SETTINGS.VLC_PLAYER_PATH"));
  }
}
function SettingsComponent_mat_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r7 = ctx.$implicit;
    \u0275\u0275property("value", language_r7.value);
    \u0275\u0275attribute("data-test-id", language_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "LANGUAGES." + language_r7.key));
  }
}
function SettingsComponent_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r8 = ctx.$implicit;
    \u0275\u0275property("value", theme_r8.value);
    \u0275\u0275attribute("data-test-id", theme_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "THEMES." + theme_r8.value));
  }
}
function SettingsComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                ");
    \u0275\u0275elementStart(13, "div", 11);
    \u0275\u0275text(14, "\n                    ");
    \u0275\u0275elementStart(15, "mat-form-field", 24);
    \u0275\u0275text(16, "\n                        ");
    \u0275\u0275element(17, "input", 33);
    \u0275\u0275text(18, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(7, 2, "SETTINGS.REMOTE_CONTROL_PORT"), "\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(10, 4, "SETTINGS.REMOTE_CONTROL_PORT_DESCRIPTION"), "\n                    ");
  }
}
var SettingsComponent = class _SettingsComponent {
  /**
   * Creates an instance of SettingsComponent and injects
   * required dependencies into the component
   */
  constructor(dialogService, dataService, epgService, formBuilder, playlistsService, router, settingsService, snackBar, store, translate, matDialog, data) {
    this.dialogService = dialogService;
    this.dataService = dataService;
    this.epgService = epgService;
    this.formBuilder = formBuilder;
    this.playlistsService = playlistsService;
    this.router = router;
    this.settingsService = settingsService;
    this.snackBar = snackBar;
    this.store = store;
    this.translate = translate;
    this.matDialog = matDialog;
    this.isDialog = false;
    this.languageEnum = Language;
    this.isTauri = this.dataService.getAppEnvironment() === "tauri";
    this.isPwa = this.dataService.getAppEnvironment() === "pwa";
    this.osPlayers = [
      {
        id: VideoPlayer.MPV,
        label: "MPV Player"
      },
      {
        id: VideoPlayer.VLC,
        label: "VLC"
      }
    ];
    this.players = [
      {
        id: VideoPlayer.Html5Player,
        label: "HTML5 Video Player"
      },
      {
        id: VideoPlayer.VideoJs,
        label: "VideoJs Player"
      },
      /* {
          id: VideoPlayer.DPlayer,
          label: 'DPlayer',
      },
      {
          id: VideoPlayer.ArtPlayer,
          label: 'ArtPlayer',
      }, */
      ...this.isTauri ? this.osPlayers : []
    ];
    this.epgAvailable$ = this.store.select(selectIsEpgAvailable);
    this.themeEnum = Theme;
    this.settingsForm = this.formBuilder.group(__spreadProps(__spreadValues({
      player: [VideoPlayer.VideoJs]
    }, this.isTauri ? { epgUrl: new FormArray([]) } : {}), {
      language: Language.ENGLISH,
      showCaptions: false,
      theme: Theme.LightTheme,
      mpvPlayerPath: "",
      vlcPlayerPath: "",
      remoteControl: false,
      remoteControlPort: 3e3
    }));
    this.epgUrl = this.settingsForm.get("epgUrl");
    this.settingsStore = inject(SettingsStore);
    this.isDialog = data?.isDialog ?? false;
  }
  /**
   * Reads the config object from the browsers
   * storage (indexed db)
   */
  ngOnInit() {
    this.setSettings();
    this.checkAppVersion();
  }
  /**
   * Sets saved settings from the indexed db store
   */
  setSettings() {
    const currentSettings = this.settingsStore.getSettings();
    this.settingsForm.patchValue(currentSettings);
    if (this.isTauri && currentSettings.epgUrl) {
      this.setEpgUrls(currentSettings.epgUrl);
    }
  }
  /**
   * Sets the epg urls to the form array
   * @param epgUrls urls of the EPG sources
   */
  setEpgUrls(epgUrls) {
    const URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    const urls = Array.isArray(epgUrls) ? epgUrls : [epgUrls];
    const filteredUrls = urls.map((url) => url.trim()).filter((url) => url !== "");
    filteredUrls.forEach((url) => {
      this.epgUrl.push(new FormControl(url, [Validators.pattern(URL_REGEX)]));
    });
  }
  /**
   * Checks whether the latest version of the application
   * is used and updates the version message in the
   * settings UI
   */
  checkAppVersion() {
    this.settingsService.getAppVersion().pipe(take(1)).subscribe((version) => this.showVersionInformation(version));
  }
  /**
   * Updates the message in settings UI about the used
   * version of the app
   * @param currentVersion current version of the application
   */
  showVersionInformation(currentVersion) {
    const isOutdated = this.isCurrentVersionOutdated(currentVersion);
    if (isOutdated) {
      this.updateMessage = `${this.translate.instant("SETTINGS.NEW_VERSION_AVAILABLE")}: ${currentVersion}`;
    } else {
      this.updateMessage = this.translate.instant("SETTINGS.LATEST_VERSION");
    }
  }
  /**
   * Compares actual with latest version of the
   * application
   * @param latestVersion latest version
   * @returns returns true if an update is available
   */
  isCurrentVersionOutdated(latestVersion) {
    this.version = this.dataService.getAppVersion();
    return semver.lt(this.version, latestVersion);
  }
  /**
   * Triggers on form submit and saves the config object to
   * the indexed db store
   */
  onSubmit() {
    this.settingsStore.updateSettings(this.settingsForm.value).then(() => {
      this.applyChangedSettings();
      this.dataService.sendIpcEvent(SETTINGS_UPDATE, this.settingsForm.value);
      this.dataService.sendIpcEvent(SET_MPV_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
      this.dataService.sendIpcEvent(SET_VLC_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
    });
    if (this.isDialog) {
      this.matDialog.closeAll();
    }
  }
  /**
   * Applies the changed settings to the app
   */
  applyChangedSettings() {
    this.settingsForm.markAsPristine();
    if (this.isTauri) {
      let epgUrls = this.settingsForm.value.epgUrl;
      if (epgUrls) {
        if (!Array.isArray(epgUrls)) {
          epgUrls = [epgUrls];
        }
        epgUrls = epgUrls.filter((url) => url !== "");
        if (epgUrls.length > 0) {
          this.epgService.fetchEpg(epgUrls);
        }
      }
    }
    this.translate.use(this.settingsForm.value.language);
    this.settingsService.changeTheme(this.settingsForm.value.theme);
    this.snackBar.open(this.translate.instant("SETTINGS.SETTINGS_SAVED"), null, {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  /**
   * Navigates back to the applications homepage
   */
  backToHome() {
    if (this.isDialog) {
      this.matDialog.closeAll();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  /**
   * Fetches and updates EPG from the given URL
   * @param url epg source url
   */
  refreshEpg(url) {
    this.epgService.fetchEpg([url]);
  }
  /**
   * Initializes new entry in form array for EPG URL
   */
  addEpgSource() {
    this.epgUrl.insert(this.epgUrl.length, new FormControl("", {
      validators: [
        Validators.pattern(/^(http|https|file):\/\/[^ "]+$/)
      ]
    }));
  }
  /**
   * Removes entry from form array for EPG URL
   * @param index index of the item to remove
   */
  removeEpgSource(index) {
    this.epgUrl.removeAt(index);
    this.settingsForm.markAsDirty();
  }
  exportData() {
    this.playlistsService.getAllData().pipe(take(1)).subscribe((data) => {
      const blob = new Blob([JSON.stringify(data)], {
        type: "text/plain"
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "playlists.json";
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const target = event.target;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const contents = reader.result;
          try {
            const parsedPlaylists = JSON.parse(contents.toString());
            if (!Array.isArray(parsedPlaylists)) {
              this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
                duration: 2e3
              });
            } else {
              this.store.dispatch(addManyPlaylists({
                playlists: parsedPlaylists
              }));
            }
          } catch (error) {
            this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
              duration: 2e3
            });
            console.error(error);
          }
        };
        reader.readAsText(file);
      }
    });
    input.click();
  }
  removeAll() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("SETTINGS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("SETTINGS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.store.dispatch(removeAllPlaylists())
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(EpgService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["ng-component"]], inputs: { isDialog: "isDialog" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 181, vars: 74, consts: [["epgField", ""], ["data-test-id", "settings-container", 1, "settings-container"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["formArrayName", "epgUrl", 4, "ngIf"], [1, "row"], [1, "column"], ["appearance", "outline"], ["formControlName", "player", "data-test-id", "select-video-player"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "language", "data-test-id", "select-language"], ["formControlName", "theme", "data-test-id", "select-theme"], [1, "column", 2, "margin-right", "10px"], ["formControlName", "showCaptions", 1, "column"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["align", "end", 1, "action-buttons"], ["mat-button", "", "color", "accent", "type", "reset", "data-test-id", "back-to-home", 3, "click"], ["mat-button", "", "color", "accent", "type", "submit", "data-test-id", "save-settings", 3, "disabled"], [3, "title", "subtitle"], ["mat-dialog-title", ""], ["formArrayName", "epgUrl"], ["style", "display: flex", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "accent", "type", "button", 3, "click"], [2, "display", "flex"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "url", 3, "formControlName"], ["matLine", "", "mat-icon-button", "", "color", "accent", "type", "button", 3, "click", "matTooltip", "disabled"], ["mat-icon-button", "", "matLine", "", "color", "accent", "type", "button", 3, "click", "matTooltip"], [3, "value"], ["for", "mpvPlayerPath"], ["matInput", "", "type", "text", "id", "mpvPlayerPath", "formControlName", "mpvPlayerPath"], ["for", "vlcPlayerPath"], ["matInput", "", "type", "text", "id", "vlcPlayerPath", "formControlName", "vlcPlayerPath"], ["matInput", "", "type", "text", "id", "remoteControlPort", "formControlName", "remoteControlPort"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SettingsComponent_Conditional_0_Template, 6, 8)(1, SettingsComponent_Conditional_1_Template, 5, 3);
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "form", 2);
        \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_4_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(5, "\n        ");
        \u0275\u0275template(6, SettingsComponent_ng_container_6_Template, 23, 7, "ng-container", 3);
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275text(9, "\n            ");
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "div", 5);
        \u0275\u0275text(19, "\n                ");
        \u0275\u0275elementStart(20, "mat-form-field", 6);
        \u0275\u0275text(21, "\n                    ");
        \u0275\u0275elementStart(22, "mat-label");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n                    ");
        \u0275\u0275elementStart(26, "mat-select", 7);
        \u0275\u0275text(27, "\n                        ");
        \u0275\u0275template(28, SettingsComponent_mat_option_28_Template, 2, 3, "mat-option", 8);
        \u0275\u0275text(29, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275template(34, SettingsComponent_Conditional_34_Template, 24, 9)(35, SettingsComponent_Conditional_35_Template, 24, 9);
        \u0275\u0275element(36, "mat-divider");
        \u0275\u0275text(37, "\n        ");
        \u0275\u0275elementStart(38, "div", 4);
        \u0275\u0275text(39, "\n            ");
        \u0275\u0275elementStart(40, "div", 5);
        \u0275\u0275text(41);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, "\n            ");
        \u0275\u0275elementStart(48, "div", 5);
        \u0275\u0275text(49, "\n                ");
        \u0275\u0275elementStart(50, "mat-form-field", 6);
        \u0275\u0275text(51, "\n                    ");
        \u0275\u0275elementStart(52, "mat-label");
        \u0275\u0275text(53);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, "\n                    ");
        \u0275\u0275elementStart(56, "mat-select", 9);
        \u0275\u0275text(57, "\n                        ");
        \u0275\u0275template(58, SettingsComponent_mat_option_58_Template, 3, 5, "mat-option", 8);
        \u0275\u0275pipe(59, "keyvalue");
        \u0275\u0275text(60, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, "\n        ");
        \u0275\u0275element(65, "mat-divider");
        \u0275\u0275text(66, "\n        ");
        \u0275\u0275elementStart(67, "div", 4);
        \u0275\u0275text(68, "\n            ");
        \u0275\u0275elementStart(69, "div", 5);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73);
        \u0275\u0275pipe(74, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, "\n            ");
        \u0275\u0275elementStart(77, "div", 5);
        \u0275\u0275text(78, "\n                ");
        \u0275\u0275elementStart(79, "mat-form-field", 6);
        \u0275\u0275text(80, "\n                    ");
        \u0275\u0275elementStart(81, "mat-label");
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, "\n                    ");
        \u0275\u0275elementStart(85, "mat-select", 10);
        \u0275\u0275text(86, "\n                        ");
        \u0275\u0275template(87, SettingsComponent_mat_option_87_Template, 3, 5, "mat-option", 8);
        \u0275\u0275pipe(88, "keyvalue");
        \u0275\u0275text(89, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, "\n        ");
        \u0275\u0275element(94, "mat-divider");
        \u0275\u0275text(95, "\n        ");
        \u0275\u0275elementStart(96, "div", 4);
        \u0275\u0275text(97, "\n            ");
        \u0275\u0275elementStart(98, "div", 5);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "translate");
        \u0275\u0275elementStart(101, "p");
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, "\n            ");
        \u0275\u0275elementStart(106, "div", 11);
        \u0275\u0275text(107, "\n                ");
        \u0275\u0275element(108, "mat-checkbox", 12);
        \u0275\u0275text(109, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(111, "\n        ");
        \u0275\u0275text(112, "\n        ");
        \u0275\u0275template(113, SettingsComponent_Conditional_113_Template, 22, 6);
        \u0275\u0275element(114, "mat-divider");
        \u0275\u0275text(115, "\n        ");
        \u0275\u0275text(116, "\n        ");
        \u0275\u0275element(117, "mat-divider");
        \u0275\u0275text(118, "\n        ");
        \u0275\u0275elementStart(119, "div", 4);
        \u0275\u0275text(120, "\n            ");
        \u0275\u0275elementStart(121, "div", 5);
        \u0275\u0275text(122);
        \u0275\u0275pipe(123, "translate");
        \u0275\u0275elementStart(124, "p");
        \u0275\u0275text(125);
        \u0275\u0275pipe(126, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(128, "\n            ");
        \u0275\u0275elementStart(129, "div", 5);
        \u0275\u0275text(130, "\n                ");
        \u0275\u0275elementStart(131, "button", 13);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_131_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.importData();
        });
        \u0275\u0275text(132);
        \u0275\u0275pipe(133, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(134, "\n                ");
        \u0275\u0275elementStart(135, "button", 13);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_135_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.exportData();
        });
        \u0275\u0275text(136);
        \u0275\u0275pipe(137, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(138, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(139, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, "\n\n        ");
        \u0275\u0275elementStart(141, "div", 4);
        \u0275\u0275text(142, "\n            ");
        \u0275\u0275elementStart(143, "div", 5);
        \u0275\u0275text(144);
        \u0275\u0275pipe(145, "translate");
        \u0275\u0275elementStart(146, "p");
        \u0275\u0275text(147);
        \u0275\u0275pipe(148, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(149, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(150, "\n            ");
        \u0275\u0275elementStart(151, "div", 5);
        \u0275\u0275text(152, "\n                ");
        \u0275\u0275elementStart(153, "button", 14);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_153_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.removeAll();
        });
        \u0275\u0275text(154);
        \u0275\u0275pipe(155, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(156, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(157, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(158, "\n\n        ");
        \u0275\u0275text(159, "\n\n        ");
        \u0275\u0275element(160, "mat-divider");
        \u0275\u0275text(161, "\n        ");
        \u0275\u0275elementStart(162, "div", 15);
        \u0275\u0275text(163, "\n            ");
        \u0275\u0275elementStart(164, "button", 16);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_164_listener() {
          return ctx.backToHome();
        });
        \u0275\u0275text(165, "\n                ");
        \u0275\u0275elementStart(166, "mat-icon");
        \u0275\u0275text(167, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275text(168);
        \u0275\u0275pipe(169, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(170, "\n            ");
        \u0275\u0275elementStart(171, "button", 17);
        \u0275\u0275text(172, "\n                ");
        \u0275\u0275elementStart(173, "mat-icon");
        \u0275\u0275text(174, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(175);
        \u0275\u0275pipe(176, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(177, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(178, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(179, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(180, "\n");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.isDialog ? 0 : 1);
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.settingsForm);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isTauri);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(12, 30, "SETTINGS.VIDEO_PLAYER_LABEL"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 32, "SETTINGS.VIDEO_PLAYER_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 34, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.players);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.settingsForm.value.player === "mpv" ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.settingsForm.value.player === "vlc" ? 35 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(42, 36, "SETTINGS.LANGUAGE"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 38, "SETTINGS.LANGUAGE_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 40, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(59, 42, ctx.languageEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(71, 44, "SETTINGS.THEME"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 46, "SETTINGS.THEME_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 48, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(88, 50, ctx.themeEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(100, 52, "SETTINGS.SHOW_CAPTIONS"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 54, "SETTINGS.SHOW_CAPTIONS_DESCRIPTION"));
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.settingsForm.value.remoteControl === true ? 113 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(123, 56, "SETTINGS.IMPORT_EXPORT_DATA"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(126, 58, "SETTINGS.IMPORT_EXPORT_DATA_DESCRIPTION"), "\n                ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(133, 60, "SETTINGS.IMPORT_DATA"), "\n                ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(137, 62, "SETTINGS.EXPORT_DATA"), "\n                ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(145, 64, "SETTINGS.REMOVE_ALL"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(148, 66, "SETTINGS.REMOVE_ALL_DESCRIPTION"), "\n                ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(155, 68, "SETTINGS.REMOVE_ALL_BUTTON"), "\n                ");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(169, 70, "SETTINGS.BACK_TO_HOME"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.settingsForm.pristine || !ctx.settingsForm.valid);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(176, 72, "SETTINGS.SAVE_CHANGES"), "\n            ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      KeyValuePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      HeaderComponent,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FormArrayName,
      TranslateModule,
      TranslatePipe,
      MatDialogModule,
      MatDialogTitle
    ], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  text-transform: uppercase;\n}\n.settings-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 100px);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  text-align: right;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2)   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.6;\n  padding: 2px 0;\n  margin: 0;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\settings\\settings.component.ts", lineNumber: 76 });
})();

export {
  SettingsComponent
};
