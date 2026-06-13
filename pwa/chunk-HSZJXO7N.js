import {
  require_groupBy
} from "./chunk-IYUGM226.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatInput,
  MatInputModule
} from "./chunk-OKC2LWEA.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-5E2U4X57.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-EMMDYAAJ.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-WEMVKP6E.js";
import {
  ActivatedRoute,
  DatabaseService,
  Router,
  XtreamStore
} from "./chunk-5JZTGDVN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-7HVMDVTX.js";
import {
  KeyValuePipe,
  MatIcon,
  MatIconButton,
  Subject,
  __async,
  __toESM,
  debounceTime,
  inject,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-YPE2NSDF.js";

// src/app/xtream-tauri/search-results/search-results.component.ts
var import_groupBy = __toESM(require_groupBy());
var _c0 = ["searchInput"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function SearchResultsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "button", 10);
    \u0275\u0275listener("click", function SearchResultsComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogRef.close());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n        ");
  }
}
function SearchResultsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                Found ", ctx_r2.xtreamStore.searchResults().length, " results\n            ");
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                                ");
    \u0275\u0275elementStart(1, "img", 20);
    \u0275\u0275listener("error", function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                                            ");
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r5.poster_url, \u0275\u0275sanitizeUrl)("alt", item_r5.title);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                                ");
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2, "\n                                                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                                            ");
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                                ");
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                                            ");
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                                                    ", item_r5.playlist_name, "\n                                                ");
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                                ");
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2, "\n                                                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                                    ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                                                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                            ");
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r5.playlist_name);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "mat-card", 18);
    \u0275\u0275listener("click", function SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Template_mat_card_click_1_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r5));
    });
    \u0275\u0275text(2, "\n                                        ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4, "\n                                            ");
    \u0275\u0275template(5, SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_5_Template, 3, 2)(6, SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_6_Template, 7, 0);
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                            ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                                            ");
    \u0275\u0275elementStart(13, "div", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                                            ");
    \u0275\u0275template(16, SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_16_Template, 4, 1)(17, SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Conditional_17_Template, 10, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                                ");
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r5.poster_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r5.poster_url ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                                                ", item_r5.type, "\n                                            ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r5.playlist_id && ctx_r2.isGlobalSearch ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isGlobalSearch && item_r5.playlist_name ? 17 : -1);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2, "\n                            ");
    \u0275\u0275elementStart(3, "h3", 15);
    \u0275\u0275text(4, "\n                                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n                            ");
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13, "\n                                ");
    \u0275\u0275repeaterCreate(14, SearchResultsComponent_Conditional_39_Conditional_1_For_9_For_15_Template, 20, 9, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                    ");
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                                ", group_r7.key, "\n                                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", group_r7.value.length, "\n                                    items)");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(group_r7.value);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275elementStart(4, "h2", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    ");
    \u0275\u0275repeaterCreate(8, SearchResultsComponent_Conditional_39_Conditional_1_For_9_Template, 18, 2, null, null, _forTrack0);
    \u0275\u0275pipe(10, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("\n                        Found ", ctx_r2.xtreamStore.searchResults().length, " items\n                        across\n                        ", \u0275\u0275pipeBind1(6, 2, ctx_r2.getGroupedResults()).length, " playlists\n                    ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(10, 4, ctx_r2.getGroupedResults()));
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "img", 20);
    \u0275\u0275listener("error", function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                                ");
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r9.poster_url, \u0275\u0275sanitizeUrl)("alt", item_r9.title);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275text(2, "\n                                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "movie");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                                ");
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n                                ");
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                                        ", item_r9.playlist_name, "\n                                    ");
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                                    ");
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275text(2, "\n                                        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "playlist_play");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                                        ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                ");
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r9.playlist_name);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "mat-card", 18);
    \u0275\u0275listener("click", function SearchResultsComponent_Conditional_39_Conditional_2_For_5_Template_mat_card_click_1_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectItem(item_r9));
    });
    \u0275\u0275text(2, "\n                            ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4, "\n                                ");
    \u0275\u0275template(5, SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_5_Template, 3, 2)(6, SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_6_Template, 7, 0);
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                                ");
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n                                ");
    \u0275\u0275elementStart(13, "div", 19);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                                ");
    \u0275\u0275template(16, SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_16_Template, 4, 1)(17, SearchResultsComponent_Conditional_39_Conditional_2_For_5_Conditional_17_Template, 10, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n                    ");
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r9.poster_url ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r9.poster_url ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r9.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                                    ", item_r9.type, "\n                                ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r9.playlist_id && ctx_r2.isGlobalSearch ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isGlobalSearch && item_r9.playlist_name ? 17 : -1);
  }
}
function SearchResultsComponent_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3, "\n                    ");
    \u0275\u0275repeaterCreate(4, SearchResultsComponent_Conditional_39_Conditional_2_For_5_Template, 20, 9, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.xtreamStore.searchResults());
  }
}
function SearchResultsComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275template(1, SearchResultsComponent_Conditional_39_Conditional_1_Template, 12, 6)(2, SearchResultsComponent_Conditional_39_Conditional_2_Template, 7, 0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isGlobalSearch ? 1 : 2);
  }
}
function SearchResultsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "search_off");
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
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1('No results found for "', ctx_r2.searchTerm, '"');
  }
}
var SearchResultsComponent = class _SearchResultsComponent {
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.xtreamStore = inject(XtreamStore);
    this.router = inject(Router);
    this.activatedRoute = inject(ActivatedRoute);
    this.databaseService = inject(DatabaseService);
    this.searchTerm = "";
    this.filters = {
      live: true,
      movie: true,
      series: true
    };
    this.isGlobalSearch = false;
    this.searchSubject = new Subject();
    this.DEBOUNCE_TIME = 300;
    this.isGlobalSearch = data?.isGlobalSearch || false;
    this.searchSubject.pipe(debounceTime(this.DEBOUNCE_TIME)).subscribe(() => {
      this.executeSearch();
    });
  }
  ngAfterViewInit() {
    this.xtreamStore.setSelectedContentType(void 0);
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    });
  }
  onSearch() {
    if (this.searchTerm.length >= 3) {
      this.searchSubject.next(this.searchTerm);
    } else {
      this.xtreamStore.resetSearchResults();
    }
  }
  executeSearch() {
    const types = Object.entries(this.filters).filter(([_, enabled]) => enabled).map(([type]) => type);
    if (this.isGlobalSearch) {
      this.searchGlobal(this.searchTerm, types);
    } else {
      this.xtreamStore.searchContent({
        term: this.searchTerm,
        types
      });
    }
  }
  searchGlobal(term, types) {
    return __async(this, null, function* () {
      try {
        const results = yield this.databaseService.globalSearchContent(term, types);
        if (results && Array.isArray(results)) {
          this.xtreamStore.setGlobalSearchResults(results);
        }
      } catch (error) {
        console.error("Error in global search:", error);
        this.xtreamStore.resetSearchResults();
      }
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }
  selectItem(item) {
    if (this.isGlobalSearch && item.playlist_id) {
      this.dialogRef?.close();
      const type = item.type === "movie" ? "vod" : item.type;
      this.router.navigate([
        "/xtreams",
        item.playlist_id,
        type,
        item.category_id,
        item.xtream_id
      ]);
    } else {
      const type = item.type === "movie" ? "vod" : item.type;
      this.xtreamStore.resetSearchResults();
      this.xtreamStore.setSelectedContentType(type);
      this.router.navigate(item.type === "live" ? ["..", type, item.category_id] : ["..", type, item.category_id, item.xtream_id], { relativeTo: this.activatedRoute });
    }
  }
  getGroupedResults() {
    const results = this.xtreamStore.searchResults();
    if (!this.isGlobalSearch)
      return { default: results };
    return (0, import_groupBy.default)(results, "playlist_name");
  }
  static {
    this.\u0275fac = function SearchResultsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchResultsComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA, 8), \u0275\u0275directiveInject(MatDialogRef, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultsComponent, selectors: [["app-search-results"]], viewQuery: function SearchResultsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275ProvidersFeature([]), \u0275\u0275StandaloneFeature], decls: 43, vars: 7, consts: [["searchInput", ""], [1, "search-page"], [1, "header"], [1, "search-container"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "spellcheck", "false", "autofocus", "", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "type-filters"], [3, "ngModelChange", "ngModel"], [1, "results-container"], ["mat-icon-button", "", 3, "click"], [1, "results-count"], [1, "playlist-section"], [1, "section-title"], [1, "playlist-group"], [1, "playlist-title"], [1, "item-count"], [1, "results-grid"], [3, "click"], [1, "type-badge"], [1, "poster", 3, "error", "src", "alt"], [1, "poster-placeholder"], [1, "playlist-badge"], [1, "no-items"]], template: function SearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275template(7, SearchResultsComponent_Conditional_7_Template, 7, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275elementStart(13, "mat-label");
        \u0275\u0275text(14, "Search content");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n            ");
        \u0275\u0275elementStart(16, "input", 5, 0);
        \u0275\u0275twoWayListener("ngModelChange", function SearchResultsComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SearchResultsComponent_Template_input_ngModelChange_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n            ");
        \u0275\u0275elementStart(19, "mat-icon", 6);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n\n        ");
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275text(24, "\n            ");
        \u0275\u0275elementStart(25, "mat-checkbox", 8);
        \u0275\u0275twoWayListener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_25_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filters.live, $event) || (ctx.filters.live = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275text(26, "\n                Live TV\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n            ");
        \u0275\u0275elementStart(28, "mat-checkbox", 8);
        \u0275\u0275twoWayListener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_28_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filters.movie, $event) || (ctx.filters.movie = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_28_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275text(29, "\n                Movies\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n            ");
        \u0275\u0275elementStart(31, "mat-checkbox", 8);
        \u0275\u0275twoWayListener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_31_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filters.series, $event) || (ctx.filters.series = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function SearchResultsComponent_Template_mat_checkbox_ngModelChange_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275text(32, "\n                Series\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n\n        ");
        \u0275\u0275template(35, SearchResultsComponent_Conditional_35_Template, 4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n\n    ");
        \u0275\u0275elementStart(37, "div", 9);
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275template(39, SearchResultsComponent_Conditional_39_Template, 3, 1)(40, SearchResultsComponent_Conditional_40_Template, 10, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.isGlobalSearch ? 7 : -1);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.live);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.movie);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.filters.series);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.isGlobalSearch && ctx.xtreamStore.searchResults().length > 0 ? 35 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.xtreamStore.searchResults().length > 0 ? 39 : ctx.searchTerm && ctx.searchTerm.length >= 3 ? 40 : -1);
      }
    }, dependencies: [
      MatIconButton,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatIcon,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatDialogModule,
      KeyValuePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  height: 100%;\n  width: 100%;\n}\n.search-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.search-container[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-container[_ngcontent-%COMP%]   .type-filters[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.search-container[_ngcontent-%COMP%]   .results-count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.results-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  padding-bottom: 1rem;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  border-radius: 13px;\n  width: 100%;\n  aspect-ratio: 2/3;\n  object-fit: cover;\n  margin-bottom: 0.5rem;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 1rem;\n  font-weight: normal;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.6);\n  margin: 0.5rem 0;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.live[_ngcontent-%COMP%] {\n  background: #e53935;\n  color: white;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.movie[_ngcontent-%COMP%] {\n  background: #1e88e5;\n  color: white;\n}\n.results-container[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .type-badge.series[_ngcontent-%COMP%] {\n  background: #43a047;\n  color: white;\n}\n.no-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.no-items[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 1rem;\n}\n.no-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .search-page[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .search-page[_ngcontent-%COMP%] {\n  background: var(--background);\n  height: 100vh;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.playlist-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem 0;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%]   .item-count[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n.playlist-group[_ngcontent-%COMP%]   .results-grid[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .search-page[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .search-page[_ngcontent-%COMP%] {\n  background: var(--background);\n  height: 100vh;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 6px 8px;\n  font-size: 12px;\n  color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  backdrop-filter: blur(5px);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  flex-shrink: 0;\n}\n.global-search-overlay[_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .playlist-group[_ngcontent-%COMP%]   .playlist-title[_ngcontent-%COMP%] {\n  background: var(--surface);\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .playlist-badge[_ngcontent-%COMP%] {\n  display: none;\n}\n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%], \n.global-search-overlay[_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%], .global-search-overlay   [_nghost-%COMP%]   .results-grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .poster-placeholder[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.playlist-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  font-size: 1.2rem;\n  font-weight: normal;\n  color: var(--text-color-secondary);\n  padding: 0 8px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultsComponent, { className: "SearchResultsComponent", filePath: "src\\app\\xtream-tauri\\search-results\\search-results.component.ts", lineNumber: 53 });
})();

export {
  SearchResultsComponent
};
