import {
  RecentPlaylistsComponent
} from "./chunk-Q7XHDWJ2.js";
import {
  NgxWhatsNewComponent,
  NgxWhatsNewModule,
  WhatsNewService,
  open
} from "./chunk-KDMRIURV.js";
import {
  ERROR,
  PLAYLIST_PARSE_BY_URL,
  PLAYLIST_PARSE_RESPONSE
} from "./chunk-ARLSKJ4U.js";
import {
  MatSnackBar,
  getFilenameFromUrl,
  v4_default
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
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-CZ2VXG7N.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-BDY4BXGD.js";
import {
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel
} from "./chunk-FHIW4JSF.js";
import {
  ActivatedRoute,
  DataService,
  Router,
  Store,
  addPlaylist,
  invoke,
  isTauri,
  parsePlaylist,
  selectActiveTypeFilters,
  setSelectedFilters
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
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RCJSYGGY.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-EY4ID5NF.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  AsyncPipe,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DOWN_ARROW,
  Directionality,
  Directive,
  DomPortalOutlet,
  ENTER,
  ESCAPE,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  Inject,
  InjectionToken,
  Injector,
  Input,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatFabButton,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatRipple,
  MatRippleModule,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  Platform,
  QueryList,
  RIGHT_ARROW,
  SPACE,
  Self,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  UP_ARROW,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __async,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animate,
  asapScheduler,
  booleanAttribute,
  delay,
  effect,
  filter,
  hasModifierKey,
  inject,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  merge,
  normalizePassiveListenerOptions,
  numberAttribute,
  of,
  setClassMetadata,
  startWith,
  state,
  style,
  switchMap,
  take,
  takeUntil,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-L3GV7X4D.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  constructor(_elementRef, _ngZone, _changeDetectorRef, _animationMode, defaults) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._isNoopAnimation = false;
    this._defaultColor = "primary";
    this._value = 0;
    this._bufferValue = 0;
    this.animationEnd = new EventEmitter();
    this._mode = "determinate";
    this._transitionendHandler = (event) => {
      if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
        return;
      }
      if (this.mode === "determinate" || this.mode === "buffer") {
        this._ngZone.run(() => this.animationEnd.next({
          value: this.value
        }));
      }
    };
    this._isNoopAnimation = _animationMode === "NoopAnimations";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener("transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener("transitionend", this._transitionendHandler);
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  static {
    this.\u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatProgressBar,
      selectors: [["mat-progress-bar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
      hostVars: 10,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
          \u0275\u0275classMap("mat-" + ctx.color);
          \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
        }
      },
      inputs: {
        color: "color",
        value: [2, "value", "value", numberAttribute],
        bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
        mode: "mode"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275template(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "div", 5);
          \u0275\u0275element(6, "span", 4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
        }
      },
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static {
    this.\u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatProgressBarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/menu.mjs
var _c0 = ["mat-menu-item", ""];
var _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
var _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "polygon", 3);
    \u0275\u0275elementEnd();
  }
}
var _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onAnimationDone($event));
    });
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275projection(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275property("id", ctx_r1.panelId)("@transformMenu", ctx_r1._panelAnimationState);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
var MAT_MENU_PANEL = new InjectionToken("MAT_MENU_PANEL");
var MatMenuItem = class _MatMenuItem {
  constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._document = _document;
    this._focusMonitor = _focusMonitor;
    this._parentMenu = _parentMenu;
    this._changeDetectorRef = _changeDetectorRef;
    this.role = "menuitem";
    this.disabled = false;
    this.disableRipple = false;
    this._hovered = new Subject();
    this._focused = new Subject();
    this._highlighted = false;
    this._triggersSubmenu = false;
    _parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
    this._focused.next(this);
  }
  ngAfterViewInit() {
    if (this._focusMonitor) {
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }
  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }
    this._hovered.complete();
    this._focused.complete();
  }
  /** Used to set the `tabindex`. */
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Returns the host DOM element. */
  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */
  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);
    const icons = clone.querySelectorAll("mat-icon, .material-icons");
    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }
    return clone.textContent?.trim() || "";
  }
  _setHighlighted(isHighlighted) {
    this._highlighted = isHighlighted;
    this._changeDetectorRef?.markForCheck();
  }
  _setTriggersSubmenu(triggersSubmenu) {
    this._triggersSubmenu = triggersSubmenu;
    this._changeDetectorRef?.markForCheck();
  }
  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }
  static {
    this.\u0275fac = function MatMenuItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMenuItem)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(MAT_MENU_PANEL, 8), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMenuItem,
      selectors: [["", "mat-menu-item", ""]],
      hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
      hostVars: 8,
      hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatMenuItem_click_HostBindingHandler($event) {
            return ctx._checkDisabled($event);
          })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
            return ctx._handleMouseEnter();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
          \u0275\u0275classProp("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
        }
      },
      inputs: {
        role: "role",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
      },
      exportAs: ["matMenuItem"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c2,
      decls: 5,
      vars: 3,
      consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
      template: function MatMenuItem_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c1);
          \u0275\u0275projection(0);
          \u0275\u0275elementStart(1, "span", 0);
          \u0275\u0275projection(2, 1);
          \u0275\u0275elementEnd();
          \u0275\u0275element(3, "div", 1);
          \u0275\u0275template(4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx._triggersSubmenu ? 4 : -1);
        }
      },
      dependencies: [MatRipple],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuItem, [{
    type: Component,
    args: [{
      selector: "[mat-menu-item]",
      exportAs: "matMenuItem",
      host: {
        "[attr.role]": "role",
        "class": "mat-mdc-menu-item mat-mdc-focus-indicator",
        "[class.mat-mdc-menu-item-highlighted]": "_highlighted",
        "[class.mat-mdc-menu-item-submenu-trigger]": "_triggersSubmenu",
        "[attr.tabindex]": "_getTabIndex()",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "disabled || null",
        "(click)": "_checkDisabled($event)",
        "(mouseenter)": "_handleMouseEnter()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatRipple],
      template: '<ng-content select="mat-icon, [matMenuItemIcon]"></ng-content>\n<span class="mat-mdc-menu-item-text"><ng-content></ng-content></span>\n<div class="mat-mdc-menu-ripple" matRipple\n     [matRippleDisabled]="disableRipple || disabled"\n     [matRippleTrigger]="_getHostElement()">\n</div>\n\n@if (_triggersSubmenu) {\n     <svg\n       class="mat-mdc-menu-submenu-icon"\n       viewBox="0 0 5 10"\n       focusable="false"\n       aria-hidden="true"><polygon points="0,0 5,5 0,10"/></svg>\n}\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    role: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is not a parent of the trigger or move the trigger outside of the menu.`);
}
var MAT_MENU_CONTENT = new InjectionToken("MatMenuContent");
var MatMenuContent = class _MatMenuContent {
  constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
    this._template = _template;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._document = _document;
    this._changeDetectorRef = _changeDetectorRef;
    this._attached = new Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */
  attach(context = {}) {
    if (!this._portal) {
      this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    }
    this.detach();
    if (!this._outlet) {
      this._outlet = new DomPortalOutlet(this._document.createElement("div"), this._componentFactoryResolver, this._appRef, this._injector);
    }
    const element = this._template.elementRef.nativeElement;
    element.parentNode.insertBefore(this._outlet.outletElement, element);
    this._changeDetectorRef?.markForCheck();
    this._portal.attach(this._outlet, context);
    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */
  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }
  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }
  static {
    this.\u0275fac = function MatMenuContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMenuContent)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatMenuContent,
      selectors: [["ng-template", "matMenuContent", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_MENU_CONTENT,
        useExisting: _MatMenuContent
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matMenuContent]",
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: ApplicationRef
  }, {
    type: Injector
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: trigger("transformMenu", [state("void", style({
    opacity: 0,
    transform: "scale(0.8)"
  })), transition("void => enter", animate("120ms cubic-bezier(0, 0, 0.2, 1)", style({
    opacity: 1,
    transform: "scale(1)"
  }))), transition("* => void", animate("100ms 25ms linear", style({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: trigger("fadeInItems", [
    // TODO(crisbeto): this is inside the `transformMenu`
    // now. Remove next time we do breaking changes.
    state("showing", style({
      opacity: 1
    })),
    transition("void => *", [style({
      opacity: 0
    }), animate("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])
  ])
};
var fadeInItems = matMenuAnimations.fadeInItems;
var transformMenu = matMenuAnimations.transformMenu;
var menuPanelUid = 0;
var MAT_MENU_DEFAULT_OPTIONS = new InjectionToken("mat-menu-default-options", {
  providedIn: "root",
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: "after",
    yPosition: "below",
    backdropClass: "cdk-overlay-transparent-backdrop"
  };
}
var MatMenu = class _MatMenu {
  /** Position of the menu in the X axis. */
  get xPosition() {
    return this._xPosition;
  }
  set xPosition(value) {
    if (value !== "before" && value !== "after" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }
    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */
  get yPosition() {
    return this._yPosition;
  }
  set yPosition(value) {
    if (value !== "above" && value !== "below" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }
    this._yPosition = value;
    this.setPositionClasses();
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */
  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;
    const newClassList = __spreadValues({}, this._classList);
    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(" ").forEach((className) => {
        newClassList[className] = false;
      });
    }
    this._previousPanelClass = classes;
    if (classes && classes.length) {
      classes.split(" ").forEach((className) => {
        newClassList[className] = true;
      });
      this._elementRef.nativeElement.className = "";
    }
    this._classList = newClassList;
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */
  get classList() {
    return this.panelClass;
  }
  set classList(classes) {
    this.panelClass = classes;
  }
  constructor(_elementRef, _unusedNgZone, defaultOptions, _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._elevationPrefix = "mat-elevation-z";
    this._baseElevation = null;
    this._directDescendantItems = new QueryList();
    this._classList = {};
    this._panelAnimationState = "void";
    this._animationDone = new Subject();
    this.closed = new EventEmitter();
    this.close = this.closed;
    this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    this._injector = inject(Injector);
    this.overlayPanelClass = defaultOptions.overlayPanelClass || "";
    this._xPosition = defaultOptions.xPosition;
    this._yPosition = defaultOptions.yPosition;
    this.backdropClass = defaultOptions.backdropClass;
    this.overlapTrigger = defaultOptions.overlapTrigger;
    this.hasBackdrop = defaultOptions.hasBackdrop;
  }
  ngOnInit() {
    this.setPositionClasses();
  }
  ngAfterContentInit() {
    this._updateDirectDescendants();
    this._keyManager = new FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._keyManager.tabOut.subscribe(() => this.closed.emit("tab"));
    this._directDescendantItems.changes.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._focused)))).subscribe((focusedItem) => this._keyManager.updateActiveItem(focusedItem));
    this._directDescendantItems.changes.subscribe((itemsList) => {
      const manager = this._keyManager;
      if (this._panelAnimationState === "enter" && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._directDescendantItems.destroy();
    this.closed.complete();
    this._firstItemFocusRef?.destroy();
  }
  /** Stream that emits whenever the hovered menu item changes. */
  _hovered() {
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe(startWith(this._directDescendantItems), switchMap((items) => merge(...items.map((item) => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  addItem(_item) {
  }
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */
  removeItem(_item) {
  }
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    switch (keyCode) {
      case ESCAPE:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this.closed.emit("keydown");
        }
        break;
      case LEFT_ARROW:
        if (this.parentMenu && this.direction === "ltr") {
          this.closed.emit("keydown");
        }
        break;
      case RIGHT_ARROW:
        if (this.parentMenu && this.direction === "rtl") {
          this.closed.emit("keydown");
        }
        break;
      default:
        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
          manager.setFocusOrigin("keyboard");
        }
        manager.onKeydown(event);
        return;
    }
    event.stopPropagation();
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */
  focusFirstItem(origin = "program") {
    this._firstItemFocusRef?.destroy();
    this._firstItemFocusRef = afterNextRender(() => {
      let menuPanel = null;
      if (this._directDescendantItems.length) {
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      }
      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */
  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */
  setElevation(depth) {
    if (this._baseElevation === null) {
      const styles = typeof getComputedStyle === "function" ? getComputedStyle(this._elementRef.nativeElement) : null;
      const value = styles?.getPropertyValue("--mat-menu-base-elevation-level") || "8";
      this._baseElevation = parseInt(value);
    }
    const elevation = Math.min(this._baseElevation + depth, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find((className) => {
      return className.startsWith(this._elevationPrefix);
    });
    if (!customElevation || customElevation === this._previousElevation) {
      const newClassList = __spreadValues({}, this._classList);
      if (this._previousElevation) {
        newClassList[this._previousElevation] = false;
      }
      newClassList[newElevation] = true;
      this._previousElevation = newElevation;
      this._classList = newClassList;
    }
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */
  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    this._classList = __spreadProps(__spreadValues({}, this._classList), {
      ["mat-menu-before"]: posX === "before",
      ["mat-menu-after"]: posX === "after",
      ["mat-menu-above"]: posY === "above",
      ["mat-menu-below"]: posY === "below"
    });
    this._changeDetectorRef?.markForCheck();
  }
  /** Starts the enter animation. */
  _startAnimation() {
    this._panelAnimationState = "enter";
  }
  /** Resets the panel animation to its initial state. */
  _resetAnimation() {
    this._panelAnimationState = "void";
  }
  /** Callback that is invoked when the panel animation completes. */
  _onAnimationDone(event) {
    this._animationDone.next(event);
    this._isAnimating = false;
  }
  _onAnimationStart(event) {
    this._isAnimating = true;
    if (event.toState === "enter" && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */
  _updateDirectDescendants() {
    this._allItems.changes.pipe(startWith(this._allItems)).subscribe((items) => {
      this._directDescendantItems.reset(items.filter((item) => item._parentMenu === this));
      this._directDescendantItems.notifyOnChanges();
    });
  }
  static {
    this.\u0275fac = function MatMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMenu)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MAT_MENU_DEFAULT_OPTIONS), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatMenu,
      selectors: [["mat-menu"]],
      contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MAT_MENU_CONTENT, 5);
          \u0275\u0275contentQuery(dirIndex, MatMenuItem, 5);
          \u0275\u0275contentQuery(dirIndex, MatMenuItem, 4);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.lazyContent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allItems = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.items = _t);
        }
      },
      viewQuery: function MatMenu_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function MatMenu_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
        }
      },
      inputs: {
        backdropClass: "backdropClass",
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
        xPosition: "xPosition",
        yPosition: "yPosition",
        overlapTrigger: [2, "overlapTrigger", "overlapTrigger", booleanAttribute],
        hasBackdrop: [2, "hasBackdrop", "hasBackdrop", (value) => value == null ? null : booleanAttribute(value)],
        panelClass: [0, "class", "panelClass"],
        classList: "classList"
      },
      outputs: {
        closed: "closed",
        close: "close"
      },
      exportAs: ["matMenu"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_MENU_PANEL,
        useExisting: _MatMenu
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "keydown", "click", "id"], [1, "mat-mdc-menu-content"]],
      template: function MatMenu_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, MatMenu_ng_template_0_Template, 3, 7, "ng-template");
        }
      },
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],
      encapsulation: 2,
      data: {
        animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenu, [{
    type: Component,
    args: [{
      selector: "mat-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matMenu",
      host: {
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.aria-describedby]": "null"
      },
      animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      standalone: true,
      template: `<ng-template>
  <div
    class="mat-mdc-menu-panel mat-mdc-elevation-specific"
    [id]="panelId"
    [class]="_classList"
    (keydown)="_handleKeydown($event)"
    (click)="closed.emit('click')"
    [@transformMenu]="_panelAnimationState"
    (@transformMenu.start)="_onAnimationStart($event)"
    (@transformMenu.done)="_onAnimationDone($event)"
    tabindex="-1"
    role="menu"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    [attr.aria-describedby]="ariaDescribedby || null">
    <div class="mat-mdc-menu-content">
      <ng-content></ng-content>
    </div>
  </div>
</ng-template>
`,
      styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_DEFAULT_OPTIONS]
    }]
  }, {
    type: ChangeDetectorRef
  }], {
    _allItems: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }],
    items: [{
      type: ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? null : booleanAttribute(value)
      }]
    }],
    panelClass: [{
      type: Input,
      args: ["class"]
    }],
    classList: [{
      type: Input
    }],
    closed: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var MAT_MENU_SCROLL_STRATEGY = new InjectionToken("mat-menu-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var MatMenuTrigger = class _MatMenuTrigger {
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */
  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }
  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */
  get menu() {
    return this._menu;
  }
  set menu(menu) {
    if (menu === this._menu) {
      return;
    }
    this._menu = menu;
    this._menuCloseSubscription.unsubscribe();
    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwMatMenuRecursiveError();
      }
      this._menuCloseSubscription = menu.close.subscribe((reason) => {
        this._destroyMenu(reason);
        if ((reason === "click" || reason === "tab") && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
    this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
  }
  constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, _menuItemInstance, _dir, _focusMonitor, _ngZone) {
    this._overlay = _overlay;
    this._element = _element;
    this._viewContainerRef = _viewContainerRef;
    this._menuItemInstance = _menuItemInstance;
    this._dir = _dir;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._overlayRef = null;
    this._menuOpen = false;
    this._closingActionsSubscription = Subscription.EMPTY;
    this._hoverSubscription = Subscription.EMPTY;
    this._menuCloseSubscription = Subscription.EMPTY;
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._handleTouchStart = (event) => {
      if (!isFakeTouchstartFromScreenReader(event)) {
        this._openedBy = "touch";
      }
    };
    this._openedBy = void 0;
    this.restoreFocus = true;
    this.menuOpened = new EventEmitter();
    this.onMenuOpen = this.menuOpened;
    this.menuClosed = new EventEmitter();
    this.onMenuClose = this.menuClosed;
    this._scrollStrategy = scrollStrategy;
    this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : void 0;
    _element.nativeElement.addEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
  }
  ngAfterContentInit() {
    this._handleHover();
  }
  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
    this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, passiveEventListenerOptions);
    this._menuCloseSubscription.unsubscribe();
    this._closingActionsSubscription.unsubscribe();
    this._hoverSubscription.unsubscribe();
  }
  /** Whether the menu is open. */
  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */
  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
  }
  /** Toggles the menu between the open and closed states. */
  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */
  openMenu() {
    const menu = this.menu;
    if (this._menuOpen || !menu) {
      return;
    }
    const overlayRef = this._createOverlay(menu);
    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;
    this._setPosition(menu, positionStrategy);
    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    overlayRef.attach(this._getPortal(menu));
    if (menu.lazyContent) {
      menu.lazyContent.attach(this.menuData);
    }
    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
    this._initMenu(menu);
    if (menu instanceof MatMenu) {
      menu._startAnimation();
      menu._directDescendantItems.changes.pipe(takeUntil(menu.close)).subscribe(() => {
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */
  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */
  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */
  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */
  _destroyMenu(reason) {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }
    const menu = this.menu;
    this._closingActionsSubscription.unsubscribe();
    this._overlayRef.detach();
    if (this.restoreFocus && (reason === "keydown" || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }
    this._openedBy = void 0;
    if (menu instanceof MatMenu) {
      menu._resetAnimation();
      if (menu.lazyContent) {
        menu._animationDone.pipe(
          filter((event) => event.toState === "void"),
          take(1),
          // Interrupt if the content got re-attached.
          takeUntil(menu.lazyContent._attached)
        ).subscribe({
          next: () => menu.lazyContent.detach(),
          // No matter whether the content got re-attached, reset the menu.
          complete: () => this._setIsMenuOpen(false)
        });
      } else {
        this._setIsMenuOpen(false);
      }
    } else {
      this._setIsMenuOpen(false);
      menu?.lazyContent?.detach();
    }
  }
  /**
   * This method sets the menu state to open and focuses the first item if
   * the menu was opened via the keyboard.
   */
  _initMenu(menu) {
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0;
    menu.direction = this.dir;
    this._setMenuElevation(menu);
    menu.focusFirstItem(this._openedBy || "program");
    this._setIsMenuOpen(true);
  }
  /** Updates the menu elevation based on the amount of parent menus that it has. */
  _setMenuElevation(menu) {
    if (menu.setElevation) {
      let depth = 0;
      let parentMenu = menu.parentMenu;
      while (parentMenu) {
        depth++;
        parentMenu = parentMenu.parentMenu;
      }
      menu.setElevation(depth);
    }
  }
  // set state rather than toggle to support triggers sharing a menu
  _setIsMenuOpen(isOpen) {
    if (isOpen !== this._menuOpen) {
      this._menuOpen = isOpen;
      this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
      if (this.triggersSubmenu()) {
        this._menuItemInstance._setHighlighted(isOpen);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */
  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);
      this._subscribeToPositions(menu, config.positionStrategy);
      this._overlayRef = this._overlay.create(config);
      this._overlayRef.keydownEvents().subscribe();
    }
    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */
  _getOverlayConfig(menu) {
    return new OverlayConfig({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
      backdropClass: menu.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */
  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe((change) => {
        const posX = change.connectionPair.overlayX === "start" ? "after" : "before";
        const posY = change.connectionPair.overlayY === "top" ? "below" : "above";
        if (this._ngZone) {
          this._ngZone.run(() => menu.setPositionClasses(posX, posY));
        } else {
          menu.setPositionClasses(posX, posY);
        }
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */
  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === "before" ? ["end", "start"] : ["start", "end"];
    let [overlayY, overlayFallbackY] = menu.yPosition === "above" ? ["bottom", "top"] : ["top", "bottom"];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;
    if (this.triggersSubmenu()) {
      overlayFallbackX = originX = menu.xPosition === "before" ? "start" : "end";
      originFallbackX = overlayX = originX === "end" ? "start" : "end";
      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }
        offsetY = overlayY === "bottom" ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === "top" ? "bottom" : "top";
      originFallbackY = overlayFallbackY === "top" ? "bottom" : "top";
    }
    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */
  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();
    const detachments = this._overlayRef.detachments();
    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : of();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(filter((active) => active !== this._menuItemInstance), filter(() => this._menuOpen)) : of();
    return merge(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */
  _handleMousedown(event) {
    if (!isFakeMousedownFromScreenReader(event)) {
      this._openedBy = event.button === 0 ? "mouse" : void 0;
      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    if (keyCode === ENTER || keyCode === SPACE) {
      this._openedBy = "keyboard";
    }
    if (this.triggersSubmenu() && (keyCode === RIGHT_ARROW && this.dir === "ltr" || keyCode === LEFT_ARROW && this.dir === "rtl")) {
      this._openedBy = "keyboard";
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */
  _handleClick(event) {
    if (this.triggersSubmenu()) {
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */
  _handleHover() {
    if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
      return;
    }
    this._hoverSubscription = this._parentMaterialMenu._hovered().pipe(filter((active) => active === this._menuItemInstance && !active.disabled), delay(0, asapScheduler)).subscribe(() => {
      this._openedBy = "mouse";
      if (this.menu instanceof MatMenu && this.menu._isAnimating) {
        this.menu._animationDone.pipe(take(1), delay(0, asapScheduler), takeUntil(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
      } else {
        this.openMenu();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */
  _getPortal(menu) {
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new TemplatePortal(menu.templateRef, this._viewContainerRef);
    }
    return this._portal;
  }
  static {
    this.\u0275fac = function MatMenuTrigger_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMenuTrigger)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(MAT_MENU_SCROLL_STRATEGY), \u0275\u0275directiveInject(MAT_MENU_PANEL, 8), \u0275\u0275directiveInject(MatMenuItem, 10), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatMenuTrigger,
      selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
      hostAttrs: [1, "mat-mdc-menu-trigger"],
      hostVars: 3,
      hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatMenuTrigger_click_HostBindingHandler($event) {
            return ctx._handleClick($event);
          })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
            return ctx._handleMousedown($event);
          })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
        }
      },
      inputs: {
        _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
        menu: [0, "matMenuTriggerFor", "menu"],
        menuData: [0, "matMenuTriggerData", "menuData"],
        restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
      },
      outputs: {
        menuOpened: "menuOpened",
        onMenuOpen: "onMenuOpen",
        menuClosed: "menuClosed",
        onMenuClose: "onMenuClose"
      },
      exportAs: ["matMenuTrigger"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuTrigger, [{
    type: Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        "class": "mat-mdc-menu-trigger",
        "[attr.aria-haspopup]": 'menu ? "menu" : null',
        "[attr.aria-expanded]": "menuOpen",
        "[attr.aria-controls]": "menuOpen ? menu.panelId : null",
        "(click)": "_handleClick($event)",
        "(mousedown)": "_handleMousedown($event)",
        "(keydown)": "_handleKeydown($event)"
      },
      exportAs: "matMenuTrigger",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_SCROLL_STRATEGY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_MENU_PANEL]
    }, {
      type: Optional
    }]
  }, {
    type: MatMenuItem,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: NgZone
  }], {
    _deprecatedMatMenuTriggerFor: [{
      type: Input,
      args: ["mat-menu-trigger-for"]
    }],
    menu: [{
      type: Input,
      args: ["matMenuTriggerFor"]
    }],
    menuData: [{
      type: Input,
      args: ["matMenuTriggerData"]
    }],
    restoreFocus: [{
      type: Input,
      args: ["matMenuTriggerRestoreFocus"]
    }],
    menuOpened: [{
      type: Output
    }],
    onMenuOpen: [{
      type: Output
    }],
    menuClosed: [{
      type: Output
    }],
    onMenuClose: [{
      type: Output
    }]
  });
})();
var MatMenuModule = class _MatMenuModule {
  static {
    this.\u0275fac = function MatMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatMenuModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatMenuModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, CdkScrollableModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MatRippleModule, MatCommonModule, OverlayModule, MatMenu, MatMenuItem, MatMenuContent, MatMenuTrigger],
      exports: [CdkScrollableModule, MatMenu, MatCommonModule, MatMenuItem, MatMenuContent, MatMenuTrigger],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/toolbar.mjs
var _c02 = ["*", [["mat-toolbar-row"]]];
var _c12 = ["*", "mat-toolbar-row"];
var MatToolbarRow = class _MatToolbarRow {
  static {
    this.\u0275fac = function MatToolbarRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatToolbarRow)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatToolbarRow,
      selectors: [["mat-toolbar-row"]],
      hostAttrs: [1, "mat-toolbar-row"],
      exportAs: ["matToolbarRow"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarRow, [{
    type: Directive,
    args: [{
      selector: "mat-toolbar-row",
      exportAs: "matToolbarRow",
      host: {
        "class": "mat-toolbar-row"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatToolbar = class _MatToolbar {
  constructor(_elementRef, _platform, document2) {
    this._elementRef = _elementRef;
    this._platform = _platform;
    this._document = document2;
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
  static {
    this.\u0275fac = function MatToolbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatToolbar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatToolbar,
      selectors: [["mat-toolbar"]],
      contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatToolbarRow, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._toolbarRows = _t);
        }
      },
      hostAttrs: [1, "mat-toolbar"],
      hostVars: 6,
      hostBindings: function MatToolbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
          \u0275\u0275classProp("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matToolbar"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      ngContentSelectors: _c12,
      decls: 2,
      vars: 0,
      template: function MatToolbar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c02);
          \u0275\u0275projection(0);
          \u0275\u0275projection(1, 1);
        }
      },
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbar, [{
    type: Component,
    args: [{
      selector: "mat-toolbar",
      exportAs: "matToolbar",
      host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n',
      styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    color: [{
      type: Input
    }],
    _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarModule = class _MatToolbarModule {
  static {
    this.\u0275fac = function MatToolbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatToolbarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatToolbarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatToolbar, MatToolbarRow],
      exports: [MatToolbar, MatToolbarRow, MatCommonModule]
    }]
  }], null, null);
})();

// node_modules/@tauri-apps/plugin-shell/dist-js/index.js
function open2(path, openWith) {
  return __async(this, null, function* () {
    yield invoke("plugin:shell|open", {
      path,
      with: openWith
    });
  });
}

// src/app/shared/components/about-dialog/about-dialog.component.ts
var AboutDialogComponent = class _AboutDialogComponent {
  constructor(appVersion) {
    this.appVersion = appVersion;
  }
  static {
    this.\u0275fac = function AboutDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 31, consts: [["mat-dialog-content", ""], ["src", "./assets/icons/icon-tv-256.png", "width", "128"], ["mat-dialog-title", ""], ["href", "https://github.com/4gray/iptvnator", "target", "_blank", 3, "title"], ["src", "./assets/icons/github-light.png", 3, "title"], ["href", "http://twitter.com/share?text=IPTVnator \u2014 free cross-platform IPTV player. Available as PWA and as native application.&url=https://github.com/4gray/iptvnator&hashtags=iptv,m3u,video-player", 3, "title"], ["height", "32", "src", "./assets/icons/twitter-light.png", 3, "title"], ["href", "https://github.com/sponsors/4gray", "target", "_blank", 3, "title"]], template: function AboutDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275element(3, "img", 1)(4, "br");
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "h2", 2);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n            ");
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n            ");
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "\n                ");
        \u0275\u0275elementStart(20, "a", 3);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275element(23, "img", 4);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\xA0\n                ");
        \u0275\u0275elementStart(26, "a", 5);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275text(28, "\n                    ");
        \u0275\u0275element(29, "img", 6);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275text(31, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, "\n                ");
        \u0275\u0275elementStart(33, "a", 7);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "local_cafe");
        \u0275\u0275elementEnd()();
        \u0275\u0275text(38, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 11, "ABOUT.TITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "ABOUT.DESCRIPTION"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 15, "ABOUT.VERSION"), ": ", ctx.appVersion, "");
        \u0275\u0275advance(5);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(21, 17, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 19, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(24, 21, "ABOUT.GITHUB_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 23, "ABOUT.TWITTER_TOOLTIP"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 25, "ABOUT.TWITTER_TOOLTIP"));
        \u0275\u0275advance(4);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 27, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(35, 29, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
      }
    }, dependencies: [MatIconModule, MatIcon, TranslateModule, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutDialogComponent, { className: "AboutDialogComponent", filePath: "src\\app\\shared\\components\\about-dialog\\about-dialog.component.ts", lineNumber: 63 });
})();

// node_modules/@tauri-apps/api/path.js
var BaseDirectory;
(function(BaseDirectory2) {
  BaseDirectory2[BaseDirectory2["Audio"] = 1] = "Audio";
  BaseDirectory2[BaseDirectory2["Cache"] = 2] = "Cache";
  BaseDirectory2[BaseDirectory2["Config"] = 3] = "Config";
  BaseDirectory2[BaseDirectory2["Data"] = 4] = "Data";
  BaseDirectory2[BaseDirectory2["LocalData"] = 5] = "LocalData";
  BaseDirectory2[BaseDirectory2["Document"] = 6] = "Document";
  BaseDirectory2[BaseDirectory2["Download"] = 7] = "Download";
  BaseDirectory2[BaseDirectory2["Picture"] = 8] = "Picture";
  BaseDirectory2[BaseDirectory2["Public"] = 9] = "Public";
  BaseDirectory2[BaseDirectory2["Video"] = 10] = "Video";
  BaseDirectory2[BaseDirectory2["Resource"] = 11] = "Resource";
  BaseDirectory2[BaseDirectory2["Temp"] = 12] = "Temp";
  BaseDirectory2[BaseDirectory2["AppConfig"] = 13] = "AppConfig";
  BaseDirectory2[BaseDirectory2["AppData"] = 14] = "AppData";
  BaseDirectory2[BaseDirectory2["AppLocalData"] = 15] = "AppLocalData";
  BaseDirectory2[BaseDirectory2["AppCache"] = 16] = "AppCache";
  BaseDirectory2[BaseDirectory2["AppLog"] = 17] = "AppLog";
  BaseDirectory2[BaseDirectory2["Desktop"] = 18] = "Desktop";
  BaseDirectory2[BaseDirectory2["Executable"] = 19] = "Executable";
  BaseDirectory2[BaseDirectory2["Font"] = 20] = "Font";
  BaseDirectory2[BaseDirectory2["Home"] = 21] = "Home";
  BaseDirectory2[BaseDirectory2["Runtime"] = 22] = "Runtime";
  BaseDirectory2[BaseDirectory2["Template"] = 23] = "Template";
})(BaseDirectory || (BaseDirectory = {}));

// node_modules/@tauri-apps/plugin-fs/dist-js/index.js
var SeekMode;
(function(SeekMode2) {
  SeekMode2[SeekMode2["Start"] = 0] = "Start";
  SeekMode2[SeekMode2["Current"] = 1] = "Current";
  SeekMode2[SeekMode2["End"] = 2] = "End";
})(SeekMode || (SeekMode = {}));
function readTextFile(path, options) {
  return __async(this, null, function* () {
    if (path instanceof URL && path.protocol !== "file:") {
      throw new TypeError("Must be a file URL.");
    }
    const arr = yield invoke("plugin:fs|read_text_file", {
      path: path instanceof URL ? path.toString() : path,
      options
    });
    const bytes = arr instanceof ArrayBuffer ? arr : Uint8Array.from(arr);
    return new TextDecoder().decode(bytes);
  });
}

// src/app/home/file-upload/drag-drop-file-upload.directive.ts
var DragDropFileUploadDirective = class _DragDropFileUploadDirective {
  constructor() {
    this.defaultColor = "rgb(255 255 255 / 15%)";
    this.fileDropped = new EventEmitter();
    this.background = this.defaultColor;
  }
  dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "rgb(255 255 255 / 25%)";
  }
  dragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
  }
  drop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
  static {
    this.\u0275fac = function DragDropFileUploadDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDropFileUploadDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DragDropFileUploadDirective, selectors: [["", "appDragDropFileUpload", ""]], hostVars: 2, hostBindings: function DragDropFileUploadDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dragover", function DragDropFileUploadDirective_dragover_HostBindingHandler($event) {
          return ctx.dragOver($event);
        })("dragleave", function DragDropFileUploadDirective_dragleave_HostBindingHandler($event) {
          return ctx.dragLeave($event);
        })("drop", function DragDropFileUploadDirective_drop_HostBindingHandler($event) {
          return ctx.drop($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.background);
      }
    }, outputs: { fileDropped: "fileDropped" }, standalone: true });
  }
};

// src/app/home/file-upload/file-upload.component.ts
var FileUploadComponent = class _FileUploadComponent {
  constructor() {
    this.fileSelected = new EventEmitter();
    this.fileRejected = new EventEmitter();
    this.addClicked = new EventEmitter();
    this.closeDialog = new EventEmitter();
    this.store = inject(Store);
    this.allowedContentTypes = [
      "application/mpegurl",
      "application/x-mpegurl",
      "application/octet-stream",
      "application/vnd.apple.mpegurl",
      "application/vnd.apple.mpegurl.audio",
      "audio/x-mpegurl",
      "audio/mpegurl"
    ];
  }
  openDialog(fileField) {
    return __async(this, null, function* () {
      if (isTauri()) {
        yield open({
          multiple: false,
          directory: false,
          filters: [
            {
              name: "Playlist files",
              extensions: ["m3u", "m3u8"]
            }
          ]
        }).then((path) => __async(this, null, function* () {
          const title = path.split("/").pop();
          const fileContent = yield readTextFile(path);
          this.store.dispatch(parsePlaylist({
            uploadType: "FILE",
            playlist: fileContent,
            title,
            path
          }));
          this.closeDialog.emit();
        }));
      } else {
        fileField.click();
      }
    });
  }
  upload(fileList) {
    if (!this.allowedContentTypes.includes(fileList[0].type)) {
      this.fileRejected.emit(fileList[0].name);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (uploadEvent) => this.fileSelected.emit({
      uploadEvent,
      file: fileList[0]
    });
    fileReader.readAsText(fileList[0]);
    this.addClicked.emit();
  }
  static {
    this.\u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload"]], outputs: { fileSelected: "fileSelected", fileRejected: "fileRejected", addClicked: "addClicked", closeDialog: "closeDialog" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 8, consts: [["fileField", ""], ["appDragDropFileUpload", "", 1, "file-upload", 3, "click", "fileDropped"], [1, "upload-icon"], [1, "label"], ["type", "file", "name", "playlist", "accept", ".m3u,.m3u8", "hidden", "", "multiple", "", 3, "change"]], template: function FileUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function FileUploadComponent_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          const fileField_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(ctx.openDialog(fileField_r2));
        })("fileDropped", function FileUploadComponent_Template_div_fileDropped_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event));
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-icon", 2);
        \u0275\u0275text(3, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "br");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "input", 4, 0);
        \u0275\u0275listener("change", function FileUploadComponent_Template_input_change_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event.target.files));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 2, "HOME.FILE_UPLOAD.DRAG_DROP") + " " + \u0275\u0275pipeBind1(8, 4, "HOME.FILE_UPLOAD.OR"), "\n        ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(11, 6, "HOME.FILE_UPLOAD.CHOOSE_PLAYLIST"), "");
      }
    }, dependencies: [DragDropFileUploadDirective, MatIconModule, MatIcon, TranslateModule, TranslatePipe], styles: ["\n\n.file-upload[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px dashed #999;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 10px;\n  gap: 20px;\n}\n.file-upload[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n.file-upload[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #999;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent", filePath: "src\\app\\home\\file-upload\\file-upload.component.ts", lineNumber: 18 });
})();

// src/app/home/stalker-portal-import/stalker-portal-import.component.ts
var StalkerPortalImportComponent = class _StalkerPortalImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      macAddress: new FormControl("", [Validators.required]),
      password: new FormControl(""),
      username: new FormControl(""),
      portalUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString())
    });
    this.dataService = inject(DataService);
    this.store = inject(Store);
  }
  addPlaylist() {
    this.form.value.portalUrl = this.transformPortalUrl(this.form.value.portalUrl);
    this.store.dispatch(addPlaylist({ playlist: this.form.value }));
    this.addClicked.emit();
  }
  transformPortalUrl(url) {
    if (url.endsWith("/c")) {
      return url.replace("/c", "/portal.php");
    }
    if (url.endsWith("/c/")) {
      return url.replace("/c/", "/portal.php");
    }
    if (url.endsWith("/stalker_portal")) {
      return url.replace("/stalker_portal/c", "/stalker_portal/server/load.php");
    }
    return url;
  }
  static {
    this.\u0275fac = function StalkerPortalImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerPortalImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerPortalImportComponent, selectors: [["app-stalker-portal-import"]], outputs: { addClicked: "addClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 20, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "portalUrl"], ["matInput", "", "type", "text", "id", "portalUrl", "formControlName", "portalUrl"], ["for", "macAddress"], ["matInput", "", "type", "text", "id", "macAddress", "formControlName", "macAddress"], ["mat-button", "", "type", "submit", 3, "click", "disabled"]], template: function StalkerPortalImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275element(17, "input", 6);
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275elementStart(38, "button", 9);
        \u0275\u0275listener("click", function StalkerPortalImportComponent_Template_button_click_38_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "HOME.STALKER_PORTAL.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOME.STALKER_PORTAL.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "HOME.STALKER_PORTAL.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 16, "HOME.STALKER_PORTAL.MAC_ADDRESS"));
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(40, 18, "HOME.STALKER_PORTAL.ADD"), "\n    ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerPortalImportComponent, { className: "StalkerPortalImportComponent", filePath: "src\\app\\home\\stalker-portal-import\\stalker-portal-import.component.ts", lineNumber: 45 });
})();

// src/app/home/text-import/text-import.component.ts
var TextImportComponent = class _TextImportComponent {
  constructor() {
    this.textAdded = new EventEmitter();
    this.textForm = new FormGroup({
      text: new FormControl("", Validators.required)
    });
  }
  static {
    this.\u0275fac = function TextImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextImportComponent, selectors: [["app-text-import"]], outputs: { textAdded: "textAdded" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 8, consts: [[3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "text", "matInput", "", "placeholder", "#EXTM3U url-tvg=..."], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function TextImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function TextImportComponent_Template_form_ngSubmit_0_listener() {
          return ctx.textAdded.emit(ctx.textForm.value.text);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "textarea", 2);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "button", 3);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.textForm);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "HOME.TEXT_IMPORT.LABEL"));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.textForm.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(13, 6, "HOME.TEXT_IMPORT.BUTTON_LABEL"), "\n    ");
      }
    }, dependencies: [MatButtonModule, MatButton, MatInputModule, MatInput, MatFormField, MatLabel, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 300px !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextImportComponent, { className: "TextImportComponent", filePath: "src\\app\\home\\text-import\\text-import.component.ts", lineNumber: 24 });
})();

// src/app/home/url-upload/url-upload.component.ts
function UrlUploadComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(2, 1, "HOME.URL_UPLOAD.CORS_NOTE"), "\n    ");
  }
}
var UrlUploadComponent = class _UrlUploadComponent {
  constructor(fb, dataService) {
    this.fb = fb;
    this.dataService = dataService;
    this.urlAdded = new EventEmitter();
    this.isElectron = this.dataService.isElectron;
  }
  ngOnInit() {
    const urlRegex = "(https?://.*?)";
    this.form = this.fb.group({
      playlistUrl: [
        "",
        [Validators.required, Validators.pattern(urlRegex)]
      ]
    });
  }
  static {
    this.\u0275fac = function UrlUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlUploadComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlUploadComponent, selectors: [["app-url-upload"]], outputs: { urlAdded: "urlAdded" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 9, consts: [[3, "ngSubmit", "formGroup"], [1, "full-width"], ["type", "url", "matInput", "", "formControlName", "playlistUrl", 3, "placeholder"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-button", 3, "disabled"]], template: function UrlUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function UrlUploadComponent_Template_form_ngSubmit_0_listener() {
          return ctx.urlAdded.emit(ctx.form.value.playlistUrl);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275element(4, "input", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275template(8, UrlUploadComponent_p_8_Template, 3, 3, "p", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementStart(10, "button", 4);
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 5, "HOME.URL_UPLOAD.PLAYLIST_URL"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.isElectron);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(12, 7, "HOME.URL_UPLOAD.ADD_PLAYLIST"), "\n    ");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatCardModule,
      MatInputModule,
      MatInput,
      MatFormField,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      TranslateModule,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlUploadComponent, { className: "UrlUploadComponent", filePath: "src\\app\\home\\url-upload\\url-upload.component.ts", lineNumber: 28 });
})();

// src/app/home/xtream-code-import/xtream-code-import.component.ts
var XtreamCodeImportComponent = class _XtreamCodeImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      serverUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString())
    });
    this.dataService = inject(DataService);
    this.store = inject(Store);
  }
  addPlaylist() {
    const serverUrlAsString = this.form.value.serverUrl;
    const url = new URL(serverUrlAsString);
    const serverUrl = `${url.protocol}//${url.hostname}${url.port ? ":" + url.port : ""}`;
    this.store.dispatch(addPlaylist({
      playlist: __spreadProps(__spreadValues({}, this.form.value), {
        serverUrl
      })
    }));
    this.addClicked.emit();
  }
  extractParams(urlAsString) {
    if (this.form.get("username").value !== "" || this.form.get("password").value !== "")
      return;
    try {
      const url = new URL(urlAsString);
      const username = url.searchParams.get("username") || "";
      const password = url.searchParams.get("password") || "";
      this.form.get("username")?.setValue(username);
      this.form.get("password")?.setValue(password);
    } catch (error) {
      console.error("Invalid URL", error);
    }
  }
  static {
    this.\u0275fac = function XtreamCodeImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamCodeImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamCodeImportComponent, selectors: [["app-xtream-code-import"]], outputs: { addClicked: "addClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 23, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "serverUrl"], ["matInput", "", "type", "text", "id", "serverUrl", "formControlName", "serverUrl", 3, "input"], ["for", "username"], ["matInput", "", "type", "text", "id", "username", "formControlName", "username"], ["for", "password"], ["matInput", "", "type", "text", "id", "password", "formControlName", "password"], ["mat-button", "", "type", "submit", 3, "click", "disabled"]], template: function XtreamCodeImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "input", 6);
        \u0275\u0275listener("input", function XtreamCodeImportComponent_Template_input_input_17_listener() {
          return ctx.extractParams(ctx.form.value.serverUrl);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275elementStart(37, "mat-form-field", 1);
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275elementStart(39, "mat-label", 9);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n        ");
        \u0275\u0275element(43, "input", 10);
        \u0275\u0275text(44, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n    ");
        \u0275\u0275elementStart(46, "button", 11);
        \u0275\u0275listener("click", function XtreamCodeImportComponent_Template_button_click_46_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "HOME.XTREAM_PLAYLIST.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "HOME.XTREAM_PLAYLIST.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "HOME.XTREAM_PLAYLIST.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 17, "HOME.XTREAM_PLAYLIST.USERNAME"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 19, "HOME.XTREAM_PLAYLIST.PASSWORD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(48, 21, "HOME.XTREAM_PLAYLIST.ADD"), "\n    ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamCodeImportComponent, { className: "XtreamCodeImportComponent", filePath: "src\\app\\home\\xtream-code-import\\xtream-code-import.component.ts", lineNumber: 45 });
})();

// src/app/shared/components/add-playlist/add-playlist-dialog.component.ts
function AddPlaylistDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-file-upload", 2);
    \u0275\u0275listener("fileRejected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileRejected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectFile($event));
    })("fileSelected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileSelected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePlaylist($event));
    })("closeDialog", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_closeDialog_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-url-upload", 3);
    \u0275\u0275listener("urlAdded", function AddPlaylistDialogComponent_Conditional_7_Template_app_url_upload_urlAdded_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendPlaylistsUrl($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-text-import", 4);
    \u0275\u0275listener("textAdded", function AddPlaylistDialogComponent_Conditional_8_Template_app_text_import_textAdded_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadAsText($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-stalker-portal-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_9_Template_app_stalker_portal_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-xtream-code-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_10_Template_app_xtream_code_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
var AddPlaylistDialogComponent = class _AddPlaylistDialogComponent {
  constructor(data, dataService, dialogRef, store, snackBar, translateService) {
    this.dataService = dataService;
    this.dialogRef = dialogRef;
    this.store = store;
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.playlistType = data.type;
  }
  /**
   * Parse and store uploaded playlist
   * @param payload
   */
  handlePlaylist(payload) {
    const playlist = payload.uploadEvent.target.result;
    this.store.dispatch(parsePlaylist({
      uploadType: "FILE",
      playlist,
      title: payload.file.name,
      path: payload.file.path
    }));
    this.closeDialog();
  }
  rejectFile(filename) {
    this.snackBar.open(this.translateService.instant("HOME.FILE_UPLOAD.REJECTED", {
      filename
    }));
  }
  /**
   * Sends url of the playlist to the renderer process
   * @param playlistUrl url of the added playlist
   */
  sendPlaylistsUrl(playlistUrl) {
    this.dataService.sendIpcEvent(PLAYLIST_PARSE_BY_URL, {
      title: getFilenameFromUrl(playlistUrl),
      url: playlistUrl
    });
    this.closeDialog();
  }
  /**
   * Sends IPC event to the renderer process to parse playlist
   * @param text playlist as string
   */
  uploadAsText(playlist) {
    this.store.dispatch(parsePlaylist({
      uploadType: "TEXT",
      playlist,
      title: this.translateService.instant("HOME.IMPORTED_AS_TEXT")
    }));
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function AddPlaylistDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddPlaylistDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPlaylistDialogComponent, selectors: [["app-add-playlist"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "fileRejected", "fileSelected", "closeDialog"], [3, "urlAdded"], [3, "textAdded"], [3, "addClicked"]], template: function AddPlaylistDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275template(6, AddPlaylistDialogComponent_Conditional_6_Template, 3, 0)(7, AddPlaylistDialogComponent_Conditional_7_Template, 3, 0)(8, AddPlaylistDialogComponent_Conditional_8_Template, 3, 0)(9, AddPlaylistDialogComponent_Conditional_9_Template, 3, 0)(10, AddPlaylistDialogComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("\n    ", \u0275\u0275pipeBind1(2, 3, "HOME.URL_UPLOAD.ADD_PLAYLIST"), ": ", ctx.playlistType, "\n");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.playlistType === "file" ? 6 : ctx.playlistType === "url" ? 7 : ctx.playlistType === "text" ? 8 : ctx.playlistType === "stalker" ? 9 : ctx.playlistType === "xtream" ? 10 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      TranslateModule,
      TranslatePipe,
      FileUploadComponent,
      XtreamCodeImportComponent,
      StalkerPortalImportComponent,
      TextImportComponent,
      UrlUploadComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPlaylistDialogComponent, { className: "AddPlaylistDialogComponent", filePath: "src\\app\\shared\\components\\add-playlist\\add-playlist-dialog.component.ts", lineNumber: 38 });
})();

// src/app/shared/components/header/header.component.ts
function HeaderComponent_div_16_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_button_61_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSettings());
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "MENU.SETTINGS"));
  }
}
function HeaderComponent_div_16_For_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-checkbox", 19);
    \u0275\u0275listener("click", function HeaderComponent_div_16_For_73_Template_mat_checkbox_click_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function HeaderComponent_div_16_For_73_Template_mat_checkbox_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPlaylistFilterChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_16_For_73_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const type_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(type_r5.checked, $event) || (type_r5.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", true);
    \u0275\u0275twoWayProperty("ngModel", type_r5.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5.title);
  }
}
function HeaderComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "button", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("file"));
    });
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("url"));
    });
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "button", 12);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("xtream"));
    });
    \u0275\u0275text(26, "\n                ");
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "video_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "\n            ");
    \u0275\u0275elementStart(35, "button", 12);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("stalker"));
    });
    \u0275\u0275text(37, "\n                ");
    \u0275\u0275elementStart(38, "mat-icon");
    \u0275\u0275text(39, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "\n                ");
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, "\n        ");
    \u0275\u0275elementStart(46, "button", 13);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275text(48, "\n            ");
    \u0275\u0275elementStart(49, "mat-icon");
    \u0275\u0275text(50, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n        \n        ");
    \u0275\u0275text(53, "\n        ");
    \u0275\u0275elementStart(54, "button", 14);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275text(56, "\n            ");
    \u0275\u0275elementStart(57, "mat-icon");
    \u0275\u0275text(58, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n        ");
    \u0275\u0275template(61, HeaderComponent_div_16_button_61_Template, 6, 3, "button", 15);
    \u0275\u0275text(62, "\n\n        ");
    \u0275\u0275elementStart(63, "mat-menu", null, 1);
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "section", 16);
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_section_click_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(67, "\n                ");
    \u0275\u0275elementStart(68, "h4");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n                ");
    \u0275\u0275repeaterCreate(72, HeaderComponent_div_16_For_73_Template, 7, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, "\n\n        ");
    \u0275\u0275elementStart(76, "mat-menu", null, 2);
    \u0275\u0275text(78, "\n            ");
    \u0275\u0275elementStart(79, "button", 17);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("file"));
    });
    \u0275\u0275text(81, "\n                ");
    \u0275\u0275elementStart(82, "mat-icon");
    \u0275\u0275text(83, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n                ");
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "\n            ");
    \u0275\u0275elementStart(90, "button", 17);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("url"));
    });
    \u0275\u0275text(92, "\n                ");
    \u0275\u0275elementStart(93, "mat-icon");
    \u0275\u0275text(94, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n                ");
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "\n\n            ");
    \u0275\u0275elementStart(101, "button", 17);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("text"));
    });
    \u0275\u0275text(103, "\n                ");
    \u0275\u0275elementStart(104, "mat-icon");
    \u0275\u0275text(105, "text_format");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "\n                ");
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(110, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(111, "\n            ");
    \u0275\u0275element(112, "mat-divider");
    \u0275\u0275text(113, "\n            ");
    \u0275\u0275elementStart(114, "button", 17);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_114_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("xtream"));
    });
    \u0275\u0275text(116, "\n                ");
    \u0275\u0275elementStart(117, "mat-icon");
    \u0275\u0275text(118, "video_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(119, "\n                ");
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(123, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "\n            ");
    \u0275\u0275elementStart(125, "button", 17);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_16_Template_button_click_125_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("stalker"));
    });
    \u0275\u0275text(127, "\n                ");
    \u0275\u0275elementStart(128, "mat-icon");
    \u0275\u0275text(129, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "\n                ");
    \u0275\u0275elementStart(131, "span");
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(135, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filterPlaylistMenu_r6 = \u0275\u0275reference(64);
    const addPlaylistMenu_r7 = \u0275\u0275reference(77);
    const ctx_r1 = \u0275\u0275nextContext();
    const pwaMenu_r8 = \u0275\u0275reference(20);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 25, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 27, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(14, 29, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 31, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(25, 33, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 35, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(36, 37, "HOME.TABS.STALKER_PORTAL_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 39, "HOME.TABS.STALKER_PORTAL_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", addPlaylistMenu_r7)("matTooltip", \u0275\u0275pipeBind1(47, 41, "HOME.URL_UPLOAD.ADD_PLAYLIST"));
    \u0275\u0275advance(8);
    \u0275\u0275property("matMenuTriggerFor", filterPlaylistMenu_r6)("matTooltip", \u0275\u0275pipeBind1(55, 43, "HOME.FILTER_BY_TYPE"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isElectron || ctx_r1.isTauri)("ngIfElse", pwaMenu_r8);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(70, 45, "HOME.FILTER_BY_TYPE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.playlistTypes);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(80, 47, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 49, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(91, 51, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 53, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(102, 55, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 57, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(115, 59, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 61, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(126, 63, "HOME.TABS.STALKER_PORTAL_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(133, 65, "HOME.TABS.STALKER_PORTAL_IMPORT"));
  }
}
function HeaderComponent_ng_template_19_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function HeaderComponent_ng_template_19_ng_container_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSettings());
    });
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 2, "MENU.SETTINGS_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "MENU.SETTINGS"));
  }
}
function HeaderComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
    \u0275\u0275elementStart(8, "mat-menu", null, 3);
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275template(11, HeaderComponent_ng_template_19_ng_container_11_Template, 14, 6, "ng-container", 21);
    \u0275\u0275text(12, "\n        ");
    \u0275\u0275text(13, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n");
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 3, "MENU.OPEN"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.isHome);
  }
}
function HeaderComponent_ngx_whats_new_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-whats-new", 23);
    \u0275\u0275listener("closeModal", function HeaderComponent_ngx_whats_new_22_Template_ngx_whats_new_closeModal_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDialogVisibility(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r1.modals)("options", ctx_r1.options);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(activatedRoute, dialog, dataService, router, store, whatsNewService) {
    this.activatedRoute = activatedRoute;
    this.dialog = dialog;
    this.dataService = dataService;
    this.router = router;
    this.store = store;
    this.whatsNewService = whatsNewService;
    this.isElectron = this.dataService.isElectron;
    this.isTauri = this.dataService.getAppEnvironment() === "tauri";
    this.isDialogVisible$ = this.whatsNewService.dialogState$;
    this.options = this.whatsNewService.options;
    this.modals = this.whatsNewService.getLatestChanges();
    this.isHome = true;
    this.playlistTypes = [
      {
        title: "M3U (local, url, text)",
        id: "m3u",
        checked: true
      },
      {
        title: "Xtream",
        id: "xtream",
        checked: true
      },
      {
        title: "Stalker",
        id: "stalker",
        checked: true
      }
    ];
    this.selectedTypeFilters = this.store.selectSignal(selectActiveTypeFilters);
    effect(() => {
      if (this.selectedTypeFilters) {
        this.playlistTypes = this.playlistTypes.map((type) => {
          type.checked = this.selectedTypeFilters().includes(type.id);
          return type;
        });
      }
    });
  }
  ngOnInit() {
    this.isHome = this.activatedRoute.snapshot.component.name === HomeComponent.name;
  }
  /**
   * Navigates to the settings page
   */
  openSettings() {
    this.router.navigate(["/settings"]);
  }
  /**
   * Opens the provided URL string in new browser window
   * @param url url to open
   */
  openUrl(url) {
    return __async(this, null, function* () {
      if (this.isTauri) {
        yield open2(url);
      } else {
        window.open(url, "_blank");
      }
    });
  }
  /**
   * Sets the visibility flag of the modal window
   * @param visible show/hide window flag
   */
  setDialogVisibility(visible) {
    if (this.modals.length > 0) {
      this.whatsNewService.changeDialogVisibleState(visible);
    }
  }
  /**
   * Opens the about dialog with description and version of
   * the app
   */
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, {
      panelClass: "about-dialog-overlay",
      width: "600px",
      data: this.dataService.getAppVersion()
    });
  }
  opedAddPlaylistDialog(type) {
    this.dialog.open(AddPlaylistDialogComponent, {
      width: "600px",
      data: { type }
    });
  }
  onPlaylistFilterChange() {
    this.store.dispatch(setSelectedFilters({
      selectedFilters: this.playlistTypes.filter((f) => f.checked).map((f) => f.id)
    }));
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(WhatsNewService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { title: "title", subtitle: "subtitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 6, consts: [["pwaMenu", ""], ["filterPlaylistMenu", "matMenu"], ["addPlaylistMenu", "matMenu"], ["menu", "matMenu"], [1, "logo"], ["src", "./assets/icons/icon-tv-256.png", "height", "100"], [1, "main"], [1, "title"], [1, "subtitle"], ["class", "menu", "style", "display: flex; gap: 16px;", 4, "ngIf"], [3, "items", "options", "closeModal", 4, "ngIf"], [1, "menu", 2, "display", "flex", "gap", "16px"], ["mat-fab", "", "extended", "", 3, "click"], ["mat-icon-button", "", "data-test-id", "add-playlist", 1, "add-playlist-btn", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "filter-playlist-by-type", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "open-settings", 3, "matTooltip", "click", 4, "ngIf", "ngIfElse"], [1, "filter-container", 3, "click"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "data-test-id", "open-settings", 3, "click", "matTooltip"], [3, "click", "change", "ngModelChange", "checked", "ngModel"], ["mat-icon-button", "", "data-test-id", "pwa-menu", 3, "matMenuTriggerFor"], [4, "ngIf"], ["mat-menu-item", "", "data-test-id", "pwa-open-settings", 3, "click"], [3, "closeModal", "items", "options"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-toolbar");
        \u0275\u0275text(1, "\n    \n    ");
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n    \n    ");
        \u0275\u0275template(16, HeaderComponent_div_16_Template, 137, 67, "div", 9);
        \u0275\u0275text(17, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n\n");
        \u0275\u0275template(19, HeaderComponent_ng_template_19_Template, 15, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(21, "\n");
        \u0275\u0275template(22, HeaderComponent_ngx_whats_new_22_Template, 1, 2, "ngx-whats-new", 10);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275text(24, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.subtitle);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isHome);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 4, !ctx.isElectron && ctx.isDialogVisible$));
      }
    }, dependencies: [
      AsyncPipe,
      MatButtonModule,
      MatIconButton,
      MatFabButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatToolbarModule,
      MatToolbar,
      MatTooltipModule,
      MatTooltip,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      NgxWhatsNewModule,
      NgxWhatsNewComponent,
      ReactiveFormsModule,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  background: #1b1c1c;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  --mat-toolbar-standard-height: 100px;\n}\n.logo[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.main[_ngcontent-%COMP%] {\n  place-content: center flex-start;\n  align-self: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100%;\n  max-width: 100%;\n}\n.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.7em;\n  margin-top: 5px;\n  text-wrap: pretty;\n}\n.menu[_ngcontent-%COMP%] {\n  place-content: center;\n  align-self: center;\n  display: flex;\n}\n.filter-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.add-playlist-btn[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n}\n@media (max-width: 599px) {\n  .subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 48px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\shared\\components\\header\\header.component.ts", lineNumber: 50 });
})();

// src/app/home/home.component.ts
function HomeComponent_mat_progress_bar_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 6);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, ngZone, snackBar, store) {
    this.dataService = dataService;
    this.ngZone = ngZone;
    this.snackBar = snackBar;
    this.store = store;
    this.isLoading = false;
    this.commandsList = [
      {
        id: PLAYLIST_PARSE_RESPONSE,
        execute: (response) => {
          this.store.dispatch(addPlaylist({
            playlist: response.payload
          }));
        }
      },
      {
        id: ERROR,
        execute: (error) => {
          this.showNotification("Error: " + error.message);
        }
      }
    ];
    this.listeners = [];
    this.setRendererListeners();
  }
  /**
   * Set electrons main process listeners
   */
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      if (this.dataService.isElectron) {
        this.dataService.listenOn(command.id, (event, response) => this.ngZone.run(() => command.execute(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.execute(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  /**
   * Shows snack bar notification with a given message
   * @param message message to show
   * @param duration visibility duration of the snackbar
   */
  showNotification(message, duration = 2e3) {
    this.snackBar.open(message, null, {
      duration
    });
  }
  /**
   * Remove ipcRenderer listeners after component destroy
   */
  ngOnDestroy() {
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 7, consts: [[1, "grid-container"], ["id", "disclaimDiv", 2, "width", "100%", "color", "lightcoral", "text-align", "center", "margin-top", "20px", "font-weight", "bold"], ["href", "https://github.com/iptv-org/iptv#playlists", "target", "_blank"], [3, "title", "subtitle"], [1, "recent-playlists"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275text(3, "    \n        Disclaimer: Our app does not provide or host any digital content. If you are looking for IPTV channels, you can find it in this website: ");
        \u0275\u0275elementStart(4, "a", 2);
        \u0275\u0275text(5, "https://github.com/iptv-org/iptv#playlists");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275element(8, "app-header", 3);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275text(11, "\n    ");
        \u0275\u0275element(12, "app-recent-playlists", 4);
        \u0275\u0275text(13, "\n    ");
        \u0275\u0275template(14, HomeComponent_mat_progress_bar_14_Template, 1, 0, "mat-progress-bar", 5);
        \u0275\u0275text(15, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(9, 3, "HOME.TITLE"))("subtitle", \u0275\u0275pipeBind1(10, 5, "HOME.SUBTITLE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [
      HeaderComponent,
      MatProgressBarModule,
      MatProgressBar,
      NgIf,
      RecentPlaylistsComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n  .mat-tab-label-content {\n  text-transform: uppercase;\n}\n  .mat-tab-group.mat-background-primary .mat-tab-header-pagination {\n  display: none;\n}\n.playlists-container[_ngcontent-%COMP%] {\n  grid-area: playlists;\n}\n.recent-playlists[_ngcontent-%COMP%] {\n  height: calc(100vh - 100px);\n  overflow: auto;\n}\n@media only screen and (max-width: 480px) {\n  .tab-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 27 });
})();

export {
  MatProgressBar,
  MatProgressBarModule,
  MatMenuItem,
  MatMenu,
  MatMenuTrigger,
  MatMenuModule,
  MatToolbar,
  MatToolbarModule,
  HomeComponent,
  HeaderComponent
};
