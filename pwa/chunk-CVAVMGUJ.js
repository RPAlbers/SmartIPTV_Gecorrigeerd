import {
  IpcCommand,
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-RRCJMUS5.js";
import {
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-SIRA6WMX.js";
import {
  AUTO_UPDATE_PLAYLISTS_RESPONSE,
  DELETE_ALL_PLAYLISTS,
  MIGRATE_PLAYLISTS,
  PLAYLIST_UPDATE,
  PLAYLIST_UPDATE_RESPONSE
} from "./chunk-ARLSKJ4U.js";
import {
  DialogService,
  PlaylistInfoComponent
} from "./chunk-WSH5IJNZ.js";
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
  MatDividerModule,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-SPPA5QBE.js";
import {
  MatFormField,
  MatPrefix
} from "./chunk-WEMVKP6E.js";
import {
  DataService,
  DatabaseService,
  GLOBAL_FAVORITES_PLAYLIST_ID,
  Router,
  Store,
  removePlaylist,
  selectActiveTypeFilters,
  selectAllPlaylistsMeta,
  selectPlaylistsLoadingFlag,
  updateManyPlaylists,
  updatePlaylist,
  updatePlaylistPositions
} from "./chunk-5JZTGDVN.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-DXN3EFMC.js";
import {
  AsyncPipe,
  BehaviorSubject,
  EventEmitter,
  MatButtonModule,
  MatIcon,
  MatIconModule,
  NgForOf,
  NgIf,
  NgZone,
  __spreadValues,
  combineLatest,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefer,
  ɵɵdeferOnIdle,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YPE2NSDF.js";

// src/app/home/recent-playlists/recent-playlists.component.ts
var _c0 = ["searchQuery"];
var RecentPlaylistsComponent_Conditional_0_Defer_12_DepsFn = () => [
  AsyncPipe,
  CdkDropList,
  MatIcon,
  MatNavList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  NgForOf,
  NgIf,
  import("./chunk-KPXD6WFB.js").then((m) => m.PlaylistItemComponent),
  TranslatePipe
];
var _c1 = () => [];
var _c2 = () => ({ width: "30%", height: "20px" });
var _c3 = () => ({ width: "50%", height: "10px" });
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_mat_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "mat-icon", 8);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(7, 2, "HOME.PLAYLISTS.NO_PLAYLISTS"), "\n                ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(11, 4, "HOME.PLAYLISTS.ADD_FIRST"), "\n                ");
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-playlist-item", 13);
    \u0275\u0275listener("editPlaylistClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_editPlaylistClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openInfoDialog($event));
    })("playlistClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_playlistClicked_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.getPlaylist(item_r8));
    })("refreshClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_refreshClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.refreshPlaylist($event));
    })("removeClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_removeClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("item", item_r8)("showActions", !ctx_r2.sidebarMode);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-list-item", 11);
    \u0275\u0275listener("click", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template_mat_list_item_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.getGlobalFavorites());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon", 8);
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n\n                ");
    \u0275\u0275template(15, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template, 1, 2, "app-playlist-item", 12);
    \u0275\u0275text(16, "\n            ");
  }
  if (rf & 2) {
    const playlists_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(8, 4, "HOME.PLAYLISTS.GLOBAL_FAVORITES"), "\n                    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(12, 6, "HOME.PLAYLISTS.GLOBAL_FAVORITES_DESCRIPTION"), "\n                    ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", playlists_r5)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-nav-list", 6);
    \u0275\u0275listener("cdkDropListDropped", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template_mat_nav_list_cdkDropListDropped_0_listener($event) {
      const playlists_r5 = \u0275\u0275restoreView(_r4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.drop($event, playlists_r5));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275template(2, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_mat_list_item_2_Template, 13, 6, "mat-list-item", 7);
    \u0275\u0275text(3, "\n\n            ");
    \u0275\u0275template(4, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template, 17, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlists_r5 = ctx.ngIf;
    const playlistsTemplate_r9 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", playlists_r5.length === 0)("ngIfElse", playlistsTemplate_r9);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template, 7, 2, "mat-nav-list", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.playlists$));
  }
}
function RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275element(2, "ngx-skeleton-loader", 17);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275element(6, "ngx-skeleton-loader", 19);
    \u0275\u0275text(7, "\n                    ");
    \u0275\u0275element(8, "ngx-skeleton-loader", 19);
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275element(13, "ngx-skeleton-loader", 21);
    \u0275\u0275text(14, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(2, _c2));
    \u0275\u0275advance(2);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(3, _c3));
  }
}
function RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 14);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_div_3_Template, 16, 4, "div", 15);
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1).constructor(10));
  }
}
function RecentPlaylistsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-form-field", 2);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon", 3);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "input", 4, 0);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("input", function RecentPlaylistsComponent_Conditional_0_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r1);
      const searchQuery_r2 = \u0275\u0275reference(7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchQueryUpdate(searchQuery_r2.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(9, "\n    ");
    \u0275\u0275template(10, RecentPlaylistsComponent_Conditional_0_Defer_10_Template, 4, 3)(11, RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_Template, 6, 2);
    \u0275\u0275defer(12, 10, RecentPlaylistsComponent_Conditional_0_Defer_12_DepsFn, null, 11);
    \u0275\u0275deferOnIdle();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 1, "HOME.PLAYLISTS.SEARCH_PLAYLISTS"));
  }
}
var RecentPlaylistsComponent = class _RecentPlaylistsComponent {
  constructor(databaseService, dialog, dialogService, electronService, ngZone, router, snackBar, store, translate) {
    this.databaseService = databaseService;
    this.dialog = dialog;
    this.dialogService = dialogService;
    this.electronService = electronService;
    this.ngZone = ngZone;
    this.router = router;
    this.snackBar = snackBar;
    this.store = store;
    this.translate = translate;
    this.searchQuery = new BehaviorSubject("");
    this.playlists$ = combineLatest([
      this.store.select(selectAllPlaylistsMeta),
      this.searchQuery,
      // eslint-disable-next-line @ngrx/avoid-combining-selectors
      this.store.select(selectActiveTypeFilters)
    ]).pipe(map(([playlists, searchQuery, filters]) => playlists.filter((item) => {
      const isStalkerFilter = item.macAddress && filters.includes("stalker");
      const isXtreamFilter = item.username && item.password && item.serverUrl && filters.includes("xtream");
      const isM3uFilter = !item.username && !item.password && !item.serverUrl && !item.macAddress && filters.includes("m3u");
      return isStalkerFilter && filters.includes("stalker") || isXtreamFilter && filters.includes("xtream") || isM3uFilter && filters.includes("m3u");
    }).filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => a.position - b.position)));
    this.allPlaylistsLoaded = this.store.selectSignal(selectPlaylistsLoadingFlag);
    this.sidebarMode = false;
    this.playlistClicked = new EventEmitter();
    this.commandsList = [
      new IpcCommand(PLAYLIST_UPDATE_RESPONSE, (response) => {
        this.snackBar.open(response.message, null, { duration: 2e3 });
        this.store.dispatch(updatePlaylist({
          playlistId: response.playlist._id,
          playlist: response.playlist
        }));
      }),
      new IpcCommand(AUTO_UPDATE_PLAYLISTS_RESPONSE, (playlists) => {
        this.store.dispatch(updateManyPlaylists({
          playlists
        }));
      })
    ];
  }
  ngOnInit() {
    this.setRendererListeners();
  }
  /**
   * Set electrons main process listeners
   */
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      if (this.electronService.isElectron) {
        this.electronService.listenOn(command.id, (event, response) => this.ngZone.run(() => command.callback(response)));
      }
    });
  }
  /**
   * Opens the details dialog with the information about the provided playlist
   * @param data selected playlist
   */
  openInfoDialog(data) {
    this.dialog.open(PlaylistInfoComponent, {
      data
    });
  }
  /**
   * Drop event handler - applies the new sort order to the playlists array
   * @param event drop event
   */
  drop(event, playlists) {
    moveItemInArray(playlists, event.previousIndex, event.currentIndex);
    this.store.dispatch(updatePlaylistPositions({
      positionUpdates: playlists.map((item, index) => ({
        id: item._id,
        changes: { position: index }
      }))
    }));
  }
  getGlobalFavorites() {
    this.router.navigate(["playlists", GLOBAL_FAVORITES_PLAYLIST_ID]);
    this.playlistClicked.emit(GLOBAL_FAVORITES_PLAYLIST_ID);
  }
  getPlaylist(playlistMeta) {
    if (playlistMeta.serverUrl) {
      this.router.navigate(["xtreams", playlistMeta._id]);
    } else if (playlistMeta.macAddress) {
      this.router.navigate(["portals", playlistMeta._id]);
    } else {
      this.router.navigate(["playlists", playlistMeta._id]);
      this.playlistClicked.emit(playlistMeta._id);
    }
  }
  /**
   * Triggers on remove click
   * @param playlistId playlist id to remove
   */
  removeClicked(playlistId) {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.removePlaylist(playlistId)
    });
  }
  /**
   * Removes the provided playlist from the database
   * @param playlistId playlist id to remove
   */
  removePlaylist(playlistId) {
    this.databaseService.deletePlaylist(playlistId);
    this.store.dispatch(removePlaylist({ playlistId }));
  }
  /**
   * Sends an IPC event with the playlist details to the main process to trigger the refresh operation
   * @param item playlist to update
   */
  refreshPlaylist(item) {
    this.electronService.sendIpcEvent(PLAYLIST_UPDATE, __spreadValues({
      id: item._id,
      title: item.title
    }, item.url ? { url: item.url } : { filePath: item.filePath }));
  }
  migratePlaylists() {
    this.electronService.sendIpcEvent(MIGRATE_PLAYLISTS);
  }
  deleteMigratedPlaylists() {
    this.electronService.sendIpcEvent(DELETE_ALL_PLAYLISTS);
  }
  /**
   * Removes command listeners on component destroy
   */
  ngOnDestroy() {
    if (this.electronService.isElectron) {
      this.commandsList.forEach((command) => this.electronService.removeAllListeners(command.id));
    }
  }
  trackByFn(_index, item) {
    return item._id;
  }
  onSearchQueryUpdate(searchQuery) {
    this.searchQuery.next(searchQuery);
  }
  onSearchHotkey(event) {
    event.preventDefault();
    event.stopPropagation();
    this.searchQueryInput?.nativeElement?.focus();
  }
  static {
    this.\u0275fac = function RecentPlaylistsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentPlaylistsComponent)(\u0275\u0275directiveInject(DatabaseService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentPlaylistsComponent, selectors: [["app-recent-playlists"]], viewQuery: function RecentPlaylistsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchQueryInput = _t.first);
      }
    }, hostBindings: function RecentPlaylistsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.control.f", function RecentPlaylistsComponent_keydown_control_f_HostBindingHandler($event) {
          return ctx.onSearchHotkey($event);
        }, false, \u0275\u0275resolveWindow)("keydown.meta.f", function RecentPlaylistsComponent_keydown_meta_f_HostBindingHandler($event) {
          return ctx.onSearchHotkey($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { sidebarMode: "sidebarMode" }, outputs: { playlistClicked: "playlistClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["searchQuery", ""], ["playlistsTemplate", ""], ["subscriptSizing", "dynamic", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "type", "search", "spellcheck", "false", "autocomplete", "off", 3, "input", "placeholder"], ["cdkDropList", "", "class", "playlists-list", 3, "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "playlists-list", 3, "cdkDropListDropped"], [4, "ngIf", "ngIfElse"], ["matListItemIcon", "", 1, "favorites-icon"], ["matListItemTitle", ""], ["matListItemLine", "", 1, "meta"], [3, "click"], [3, "item", "showActions", "editPlaylistClicked", "playlistClicked", "refreshClicked", "removeClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "editPlaylistClicked", "playlistClicked", "refreshClicked", "removeClicked", "item", "showActions"], ["id", "skeleton-container"], ["class", "skeleton-item", 4, "ngFor", "ngForOf"], [1, "skeleton-item"], ["count", "1", "appearance", "circle"], [1, "text"], ["count", "1", 3, "theme"], [1, "actions"], ["count", "2", "appearance", "circle"]], template: function RecentPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RecentPlaylistsComponent_Conditional_0_Template, 14, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.allPlaylistsLoaded() ? 0 : -1);
      }
    }, dependencies: [
      DragDropModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatListModule,
      NgForOf,
      NgxSkeletonLoaderModule,
      NgxSkeletonLoaderComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.playlists-list[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 96%;\n  margin: 10px 0;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #666;\n  margin-top: 2px !important;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n  .search-field > .mat-mdc-text-field-wrapper {\n  border-radius: 30px;\n}\n  .cdk-drag-preview .mat-list-item-content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 16px;\n  position: relative;\n  height: inherit;\n  width: 100%;\n  justify-content: space-between;\n}\n  .cdk-drag-preview .mat-list-item-content .mat-list-text {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  box-sizing: border-box;\n  overflow: hidden;\n  padding-left: 16px;\n}\n.favorites-icon[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n#skeleton-container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 20px;\n  height: 72px;\n}\n#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  align-self: center;\n  padding-left: 6px;\n  flex-direction: column;\n  display: flex;\n}\n@media (max-width: 599px) {\n  .favorites-icon[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    --mat-form-field-container-height: 48px;\n    --mat-form-field-filled-label-display: none;\n    --mat-form-field-container-vertical-padding: 12px;\n    --mat-form-field-filled-with-label-container-padding-top: 12px;\n    --mat-form-field-filled-with-label-container-padding-bottom: 12px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentPlaylistsComponent, { className: "RecentPlaylistsComponent", filePath: "src\\app\\home\\recent-playlists\\recent-playlists.component.ts", lineNumber: 73 });
})();

export {
  RecentPlaylistsComponent
};
