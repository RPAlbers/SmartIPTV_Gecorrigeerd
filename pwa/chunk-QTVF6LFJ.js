import {
  ArtPlayerComponent,
  DPlayerComponent,
  HtmlVideoPlayerComponent,
  VjsPlayerComponent
} from "./chunk-5SMZVLW2.js";
import {
  STORE_KEY,
  StorageMap,
  VideoPlayer
} from "./chunk-WLQZSEEB.js";
import {
  getExtensionFromUrl
} from "./chunk-J4KICW5Y.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-UCJQWIMR.js";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-CZ2VXG7N.js";
import {
  RouterLink,
  toSignal
} from "./chunk-PZD5NHA7.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3G7KW6UL.js";
import {
  DOCUMENT,
  Directive,
  EMPTY,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  NgIf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  ReplaySubject,
  Subject,
  Subscription,
  __spreadProps,
  __spreadValues,
  asapScheduler,
  catchError,
  combineLatest,
  computed,
  distinctUntilChanged,
  effect,
  inject,
  input,
  isDevMode,
  isObservable,
  map,
  observeOn,
  of,
  queueScheduler,
  scheduled,
  setClassMetadata,
  shareReplay,
  take,
  takeUntil,
  tap,
  throwError,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3GV7X4D.js";

// src/app/portals/web-player-view/web-player-view.component.ts
function WebPlayerViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-vjs-player", 0);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.vjsOptions);
  }
}
function WebPlayerViewComponent_Conditional_1_app_html_video_player_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-html-video-player", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("channel", ctx_r0.channel);
  }
}
function WebPlayerViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275template(1, WebPlayerViewComponent_Conditional_1_app_html_video_player_1_Template, 1, 1, "app-html-video-player", 1);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.player === "html5");
  }
}
function WebPlayerViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-d-player", 3);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("channel", ctx_r0.channel)("volume", 1)("showCaptions", false);
  }
}
function WebPlayerViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-art-player", 3);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("channel", ctx_r0.channel)("volume", 1)("showCaptions", false);
  }
}
var WebPlayerViewComponent = class _WebPlayerViewComponent {
  constructor() {
    this.storage = inject(StorageMap);
    this.streamUrl = input.required();
    this.settings = toSignal(this.storage.get(STORE_KEY.Settings));
    effect(() => {
      this.player = this.settings()?.player ?? VideoPlayer.VideoJs;
      this.setChannel(this.streamUrl());
      this.setVjsOptions(this.streamUrl());
    }, { allowSignalWrites: true });
  }
  setVjsOptions(streamUrl) {
    const extension = getExtensionFromUrl(streamUrl);
    const mimeType = extension === "m3u" || extension === "m3u8" || extension === "ts" ? "application/x-mpegURL" : "video/mp4";
    this.vjsOptions = {
      sources: [{ src: streamUrl, type: mimeType }]
    };
  }
  setChannel(streamUrl) {
    this.channel = {
      url: streamUrl
    };
  }
  static {
    this.\u0275fac = function WebPlayerViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebPlayerViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebPlayerViewComponent, selectors: [["app-web-player-view"]], inputs: { streamUrl: [1, "streamUrl"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[3, "options"], [3, "channel", 4, "ngIf"], [3, "channel"], [3, "channel", "volume", "showCaptions"]], template: function WebPlayerViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebPlayerViewComponent_Conditional_0_Template, 3, 1)(1, WebPlayerViewComponent_Conditional_1_Template, 3, 1)(2, WebPlayerViewComponent_Conditional_2_Template, 3, 3)(3, WebPlayerViewComponent_Conditional_3_Template, 3, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.player === "videojs" ? 0 : ctx.player === "html5" ? 1 : ctx.player === "dplayer" ? 2 : ctx.player === "artplayer" ? 3 : -1);
      }
    }, dependencies: [
      HtmlVideoPlayerComponent,
      NgIf,
      VjsPlayerComponent,
      DPlayerComponent,
      ArtPlayerComponent
    ], styles: ["/* src/app/portals/web-player-view/web-player-view.component.scss */\napp-vjs-player > .video-js {\n  height: 50vh !important;\n}\napp-html-video-player > #video-player {\n  height: 50vh !important;\n}\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebPlayerViewComponent, { className: "WebPlayerViewComponent", filePath: "src\\app\\portals\\web-player-view\\web-player-view.component.ts", lineNumber: 34 });
})();

// node_modules/@ngrx/component-store/fesm2022/ngrx-component-store.mjs
function debounceSync() {
  return (source) => new Observable((observer) => {
    let actionSubscription;
    let actionValue;
    const rootSubscription = new Subscription();
    rootSubscription.add(source.subscribe({
      complete: () => {
        if (actionSubscription) {
          observer.next(actionValue);
        }
        observer.complete();
      },
      error: (error) => {
        observer.error(error);
      },
      next: (value) => {
        actionValue = value;
        if (!actionSubscription) {
          actionSubscription = asapScheduler.schedule(() => {
            observer.next(actionValue);
            actionSubscription = void 0;
          });
          rootSubscription.add(actionSubscription);
        }
      }
    }));
    return rootSubscription;
  });
}
function isOnStoreInitDefined(cs) {
  return typeof cs.ngrxOnStoreInit === "function";
}
function isOnStateInitDefined(cs) {
  return typeof cs.ngrxOnStateInit === "function";
}
var INITIAL_STATE_TOKEN = new InjectionToken("@ngrx/component-store Initial State");
var ComponentStore = class _ComponentStore {
  constructor(defaultState) {
    this.destroySubject$ = new ReplaySubject(1);
    this.destroy$ = this.destroySubject$.asObservable();
    this.stateSubject$ = new ReplaySubject(1);
    this.isInitialized = false;
    this.state$ = this.select((s) => s);
    this.state = toSignal(this.stateSubject$.pipe(takeUntil(this.destroy$)), {
      requireSync: false,
      manualCleanup: true
    });
    this.\u0275hasProvider = false;
    if (defaultState) {
      this.initState(defaultState);
    }
    this.checkProviderForHooks();
  }
  /** Completes all relevant Observable streams. */
  ngOnDestroy() {
    this.stateSubject$.complete();
    this.destroySubject$.next();
  }
  /**
   * Creates an updater.
   *
   * Throws an error if updater is called with synchronous values (either
   * imperative value or Observable that is synchronous) before ComponentStore
   * is initialized. If called with async Observable before initialization then
   * state will not be updated and subscription would be closed.
   *
   * @param updaterFn A static updater function that takes 2 parameters (the
   * current state and an argument object) and returns a new instance of the
   * state.
   * @return A function that accepts one argument which is forwarded as the
   *     second argument to `updaterFn`. Every time this function is called
   *     subscribers will be notified of the state change.
   */
  updater(updaterFn) {
    return (observableOrValue) => {
      let isSyncUpdate = true;
      let syncError;
      const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
      const subscription = observable$.pipe(
        // Push the value into queueScheduler
        observeOn(queueScheduler),
        // If the state is not initialized yet, we'll throw an error.
        tap(() => this.assertStateIsInitialized()),
        withLatestFrom(this.stateSubject$),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        map(([value, currentState]) => updaterFn(currentState, value)),
        tap((newState) => this.stateSubject$.next(newState)),
        catchError((error) => {
          if (isSyncUpdate) {
            syncError = error;
            return EMPTY;
          }
          return throwError(error);
        }),
        takeUntil(this.destroy$)
      ).subscribe();
      if (syncError) {
        throw syncError;
      }
      isSyncUpdate = false;
      return subscription;
    };
  }
  /**
   * Initializes state. If it was already initialized then it resets the
   * state.
   */
  initState(state) {
    scheduled([state], queueScheduler).subscribe((s) => {
      this.isInitialized = true;
      this.stateSubject$.next(s);
    });
  }
  /**
   * Sets the state specific value.
   * @param stateOrUpdaterFn object of the same type as the state or an
   * updaterFn, returning such object.
   */
  setState(stateOrUpdaterFn) {
    if (typeof stateOrUpdaterFn !== "function") {
      this.initState(stateOrUpdaterFn);
    } else {
      this.updater(stateOrUpdaterFn)();
    }
  }
  /**
   * Patches the state with provided partial state.
   *
   * @param partialStateOrUpdaterFn a partial state or a partial updater
   * function that accepts the state and returns the partial state.
   * @throws Error if the state is not initialized.
   */
  patchState(partialStateOrUpdaterFn) {
    const patchedState = typeof partialStateOrUpdaterFn === "function" ? partialStateOrUpdaterFn(this.get()) : partialStateOrUpdaterFn;
    this.updater((state, partialState) => __spreadValues(__spreadValues({}, state), partialState))(patchedState);
  }
  get(projector) {
    this.assertStateIsInitialized();
    let value;
    this.stateSubject$.pipe(take(1)).subscribe((state) => {
      value = projector ? projector(state) : state;
    });
    return value;
  }
  select(...args) {
    const {
      observablesOrSelectorsObject,
      projector,
      config
    } = processSelectorArgs(args);
    const source$ = hasProjectFnOnly(observablesOrSelectorsObject, projector) ? this.stateSubject$ : combineLatest(observablesOrSelectorsObject);
    return source$.pipe(config.debounce ? debounceSync() : noopOperator(), projector ? map((projectorArgs) => (
      // projectorArgs could be an Array in case where the entire state is an Array, so adding this check
      observablesOrSelectorsObject.length > 0 && Array.isArray(projectorArgs) ? projector(...projectorArgs) : projector(projectorArgs)
    )) : noopOperator(), distinctUntilChanged(config.equal), shareReplay({
      refCount: true,
      bufferSize: 1
    }), takeUntil(this.destroy$));
  }
  selectSignal(...args) {
    const selectSignalArgs = [...args];
    const options = typeof selectSignalArgs[args.length - 1] === "object" ? selectSignalArgs.pop() : {};
    const projector = selectSignalArgs.pop();
    const signals = selectSignalArgs;
    const computation = signals.length === 0 ? () => projector(this.state()) : () => {
      const values = signals.map((signal) => signal());
      return projector(...values);
    };
    return computed(computation, options);
  }
  /**
   * Creates an effect.
   *
   * This effect is subscribed to throughout the lifecycle of the ComponentStore.
   * @param generator A function that takes an origin Observable input and
   *     returns an Observable. The Observable that is returned will be
   *     subscribed to for the life of the component.
   * @return A function that, when called, will trigger the origin Observable.
   */
  effect(generator) {
    const origin$ = new Subject();
    generator(origin$).pipe(takeUntil(this.destroy$)).subscribe();
    return (observableOrValue) => {
      const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
      return observable$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        origin$.next(value);
      });
    };
  }
  /**
   * Used to check if lifecycle hooks are defined
   * but not used with provideComponentStore()
   */
  checkProviderForHooks() {
    asapScheduler.schedule(() => {
      if (isDevMode() && (isOnStoreInitDefined(this) || isOnStateInitDefined(this)) && !this.\u0275hasProvider) {
        const warnings = [isOnStoreInitDefined(this) ? "OnStoreInit" : "", isOnStateInitDefined(this) ? "OnStateInit" : ""].filter((defined) => defined);
        console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${warnings.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`);
      }
    });
  }
  assertStateIsInitialized() {
    if (!this.isInitialized) {
      throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`);
    }
  }
  static {
    this.\u0275fac = function ComponentStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentStore)(\u0275\u0275inject(INITIAL_STATE_TOKEN, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ComponentStore,
      factory: _ComponentStore.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentStore, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INITIAL_STATE_TOKEN]
    }]
  }], null);
})();
function processSelectorArgs(args) {
  const selectorArgs = Array.from(args);
  const defaultEqualityFn = (previous, current) => previous === current;
  let config = {
    debounce: false,
    equal: defaultEqualityFn
  };
  if (isSelectConfig(selectorArgs[selectorArgs.length - 1])) {
    config = __spreadValues(__spreadValues({}, config), selectorArgs.pop());
  }
  if (selectorArgs.length === 1 && typeof selectorArgs[0] !== "function") {
    return {
      observablesOrSelectorsObject: selectorArgs[0],
      projector: void 0,
      config
    };
  }
  const projector = selectorArgs.pop();
  const observables = selectorArgs;
  return {
    observablesOrSelectorsObject: observables,
    projector,
    config
  };
}
function isSelectConfig(arg) {
  const typedArg = arg;
  return typeof typedArg.debounce !== "undefined" || typeof typedArg.equal !== "undefined";
}
function hasProjectFnOnly(observablesOrSelectorsObject, projector) {
  return Array.isArray(observablesOrSelectorsObject) && observablesOrSelectorsObject.length === 0 && projector;
}
function noopOperator() {
  return (source$) => source$;
}

// src/app/xtream/portal.store.ts
var PortalStore = class _PortalStore extends ComponentStore {
  constructor() {
    super({
      searchPhrase: "",
      currentVod: void 0,
      currentSerial: void 0,
      content: [],
      hideExternalInfoDialog: localStorage.getItem("hideExternalInfoDialog") === "true",
      sortType: void 0
    });
    this.searchPhrase = this.selectSignal((state) => state.searchPhrase);
    this.currentSerial = this.selectSignal((state) => state.currentSerial);
    this.currentVod = this.selectSignal((state) => state.currentVod);
    this.hideExternalInfoDialog = this.selectSignal((state) => state.hideExternalInfoDialog);
    this.sortType = this.selectSignal((state) => state.sortType);
    this.getContentById = (id) => this.selectSignal((state) => state.content.find((i) => i.id === id));
    this.setSearchPhrase = this.updater((state, searchPhrase) => __spreadProps(__spreadValues({}, state), {
      searchPhrase
    }));
    this.setContent = this.updater((state, content) => __spreadProps(__spreadValues({}, state), {
      content
    }));
    this.setCurrentSerial = this.updater((state, currentSerial) => __spreadProps(__spreadValues({}, state), {
      currentSerial
    }));
    this.setCurrentVod = this.updater((state, currentVod) => __spreadProps(__spreadValues({}, state), {
      currentVod
    }));
    this.setHideExternalInfoDialog = this.updater((state, hideExternalInfoDialog) => {
      localStorage.setItem("hideExternalInfoDialog", hideExternalInfoDialog.toString());
      return __spreadProps(__spreadValues({}, state), { hideExternalInfoDialog });
    });
    this.setSortType = this.updater((state, sortType) => __spreadProps(__spreadValues({}, state), {
      sortType
    }));
  }
  static {
    this.\u0275fac = function PortalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalStore)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortalStore, factory: _PortalStore.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/external-player-info-dialog/external-player-info-dialog.component.ts
var ExternalPlayerInfoDialogComponent = class _ExternalPlayerInfoDialogComponent {
  constructor() {
    this.portalStore = inject(PortalStore);
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  setVisibility(value) {
    this.portalStore.setHideExternalInfoDialog(value);
  }
  static {
    this.\u0275fac = function ExternalPlayerInfoDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalPlayerInfoDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalPlayerInfoDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "centered"], [1, "icon"], [2, "cursor", "pointer", 3, "click", "routerLink"], [2, "justify-content", "space-between"], [3, "change"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"]], template: function ExternalPlayerInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n        ");
        \u0275\u0275elementStart(5, "mat-dialog-content", 1);
        \u0275\u0275text(6, "\n            ");
        \u0275\u0275elementStart(7, "div", 2);
        \u0275\u0275text(8, "\n                ");
        \u0275\u0275elementStart(9, "mat-icon", 3);
        \u0275\u0275text(10, "live_tv");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n                ");
        \u0275\u0275elementStart(12, "div");
        \u0275\u0275text(13, "\n                    The video is playing in external player window.");
        \u0275\u0275element(14, "br");
        \u0275\u0275text(15, "\n                    Please make sure that mpv/vlc player is correctly installed\n                    on your system.");
        \u0275\u0275element(16, "br");
        \u0275\u0275text(17, "\n                    See\n                    ");
        \u0275\u0275elementStart(18, "a", 4);
        \u0275\u0275listener("click", function ExternalPlayerInfoDialogComponent_Template_a_click_18_listener() {
          return ctx.openUrl("https://github.com/4gray/iptvnator/wiki/What-is-mpv-video-player-and-how-to-install-it-on-different-operating-systems%3F");
        });
        \u0275\u0275text(19, "installation instructions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n                    for more details.\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275elementStart(24, "mat-dialog-actions", 5);
        \u0275\u0275text(25, "\n            ");
        \u0275\u0275elementStart(26, "div");
        \u0275\u0275text(27, "\n                ");
        \u0275\u0275elementStart(28, "mat-checkbox", 6);
        \u0275\u0275listener("change", function ExternalPlayerInfoDialogComponent_Template_mat_checkbox_change_28_listener($event) {
          return ctx.setVisibility($event.checked);
        });
        \u0275\u0275text(29, "Don't show anymore");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n            ");
        \u0275\u0275elementStart(32, "button", 7);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "INFORMATION"));
        \u0275\u0275advance(31);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(34, 4, "CLOSE"), "\n            ");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatIconModule,
      MatIcon,
      RouterLink,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n.centered[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 24px;\n  margin: 20px;\n}\n.centered[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalPlayerInfoDialogComponent, { className: "ExternalPlayerInfoDialogComponent", filePath: "src\\app\\shared\\components\\external-player-info-dialog\\external-player-info-dialog.component.ts", lineNumber: 71 });
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static {
    this.\u0275fac = function Clipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Clipboard)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Clipboard,
      factory: _Clipboard.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static {
    this.\u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCopyToClipboard)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCopyToClipboard,
      selectors: [["", "cdkCopyToClipboard", ""]],
      hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
            return ctx.copy();
          });
        }
      },
      inputs: {
        text: [0, "cdkCopyToClipboard", "text"],
        attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
      },
      outputs: {
        copied: "cdkCopyToClipboardCopied"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static {
    this.\u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClipboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ClipboardModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

export {
  WebPlayerViewComponent,
  PortalStore,
  ExternalPlayerInfoDialogComponent,
  CdkCopyToClipboard,
  ClipboardModule
};
