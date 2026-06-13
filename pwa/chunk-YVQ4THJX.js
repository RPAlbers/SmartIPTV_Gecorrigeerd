import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-7SWSYMZ3.js";
import "./chunk-DSAERC54.js";
import {
  MatCard,
  MatCardActions,
  MatCardModule
} from "./chunk-TZPCFWSH.js";
import "./chunk-FHIW4JSF.js";
import "./chunk-XUXZW7VT.js";
import {
  ActivatedRoute,
  Router,
  XtreamStore
} from "./chunk-PZD5NHA7.js";
import {
  MatTooltip
} from "./chunk-XVZ23CSF.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-3G7KW6UL.js";
import "./chunk-RCJSYGGY.js";
import "./chunk-EY4ID5NF.js";
import {
  MatIcon,
  NgOptimizedImage,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-L3GV7X4D.js";

// src/app/xtream-tauri/category-content-view/category-content-view.component.ts
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "img", 4);
    \u0275\u0275listener("error", function CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.target.src = "./assets/images/default-poster.png");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    let tmp_14_0;
    \u0275\u0275nextContext();
    const i_r6 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", (tmp_14_0 = i_r6.poster_url) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : "./assets/images/default-poster.png");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "img", 5);
    \u0275\u0275text(2, "\n                ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n                        ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const rating_r7 = \u0275\u0275readContextLet(7);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "XTREAM.IMDB_RATING"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", rating_r7, "\n                    ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275declareLet(1);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-card", 2);
    \u0275\u0275listener("click", function CategoryContentViewComponent_Conditional_0_For_4_Template_mat_card_click_3_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onItemClick(item_r3));
    });
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275template(5, CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template, 3, 1)(6, CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template, 3, 0);
    \u0275\u0275declareLet(7);
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275template(9, CategoryContentViewComponent_Conditional_0_For_4_Conditional_9_Template, 8, 4);
    \u0275\u0275elementStart(10, "mat-card-actions");
    \u0275\u0275text(11, "\n                    ");
    \u0275\u0275elementStart(12, "div", 3);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    const i_r8 = \u0275\u0275storeLet(item_r3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(i_r8.poster_url ? 5 : 6);
    \u0275\u0275advance(2);
    const rating_r9 = \u0275\u0275storeLet(item_r3.rating);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(rating_r9 ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(i_r8.title || "No name");
  }
}
function CategoryContentViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275repeaterCreate(3, CategoryContentViewComponent_Conditional_0_For_4_Template, 17, 5, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n\n    ");
    \u0275\u0275elementStart(6, "mat-paginator", 1);
    \u0275\u0275listener("page", function CategoryContentViewComponent_Conditional_0_Template_mat_paginator_page_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.paginatedContent());
    \u0275\u0275advance(3);
    \u0275\u0275property("length", ctx_r3.totalPages() * ctx_r3.limit())("pageSize", ctx_r3.limit())("pageSizeOptions", ctx_r3.pageSizeOptions);
  }
}
var CategoryContentViewComponent = class _CategoryContentViewComponent {
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
    this.router = inject(Router);
    this.xtreamStore = inject(XtreamStore);
    this.limit = this.xtreamStore.limit;
    this.pageSizeOptions = [5, 10, 25, 50, 100];
    this.paginatedContent = this.xtreamStore.getPaginatedContent;
    this.selectedCategory = this.xtreamStore.getSelectedCategory;
    this.totalPages = this.xtreamStore.getTotalPages;
  }
  onPageChange(event) {
    this.xtreamStore.setPage(event.pageIndex + 1);
    this.xtreamStore.setLimit(event.pageSize);
    localStorage.setItem("xtream-page-size", event.pageSize.toString());
  }
  onItemClick(item) {
    console.log(item);
    this.xtreamStore.setSelectedItem(item);
    this.router.navigate([item.xtream_id], {
      relativeTo: this.activatedRoute
    });
  }
  static {
    this.\u0275fac = function CategoryContentViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryContentViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryContentViewComponent, selectors: [["app-category-content-view"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "grid"], ["aria-label", "Select page", 3, "page", "length", "pageSize", "pageSizeOptions"], [3, "click"], [1, "title"], ["fill", "", "priority", "", "placeholder", "", "placeholder", "data:image/png;base64,iVBORw0K...", 1, "stream-icon", 3, "error", "ngSrc"], ["src", "./assets/images/default-poster.png", 1, "stream-icon"], [1, "rating", 3, "matTooltip"]], template: function CategoryContentViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CategoryContentViewComponent_Conditional_0_Template, 8, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.selectedCategory() ? 0 : -1);
      }
    }, dependencies: [
      MatCardModule,
      MatCard,
      MatCardActions,
      MatIcon,
      MatPaginatorModule,
      MatPaginator,
      MatTooltip,
      NgOptimizedImage,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  padding: 10px;\n}\nmat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 170px;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative !important;\n  border-radius: 12px;\n  display: block;\n  background-color: #f0f0f0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%]::after {\n  content: "No cover";\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryContentViewComponent, { className: "CategoryContentViewComponent", filePath: "src\\app\\xtream-tauri\\category-content-view\\category-content-view.component.ts", lineNumber: 25 });
})();
export {
  CategoryContentViewComponent
};
