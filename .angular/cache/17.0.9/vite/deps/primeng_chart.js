import {
  Chart,
  registerables
} from "./chunk-G5FLRZU6.js";
import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-N3N53OH5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵstyleProp
} from "./chunk-QVGBW7TY.js";
import "./chunk-AFRS2OIU.js";
import "./chunk-HSNDBVJ3.js";

// node_modules/chart.js/auto/auto.js
Chart.register(...registerables);
var auto_default = Chart;

// node_modules/primeng/fesm2022/primeng-chart.mjs
var UIChart = class _UIChart {
  platformId;
  el;
  /**
   * Type of the chart.
   * @group Props
   */
  type;
  /**
   * Array of per-chart plugins to customize the chart behaviour.
   * @group Props
   */
  plugins = [];
  /**
   * Width of the chart.
   * @group Props
   */
  width;
  /**
   * Height of the chart.
   * @group Props
   */
  height;
  /**
   * Whether the chart is redrawn on screen size change.
   * @group Props
   */
  responsive = true;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Data to display.
   * @group Props
   */
  get data() {
    return this._data;
  }
  set data(val) {
    this._data = val;
    this.reinit();
  }
  /**
   * Options to customize the chart.
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    this.reinit();
  }
  /**
   * Callback to execute when an element on chart is clicked.
   * @group Emits
   */
  onDataSelect = new EventEmitter();
  isBrowser = false;
  initialized;
  _data;
  _options = {};
  chart;
  constructor(platformId, el) {
    this.platformId = platformId;
    this.el = el;
  }
  ngAfterViewInit() {
    this.initChart();
    this.initialized = true;
  }
  onCanvasClick(event) {
    if (this.chart) {
      const element = this.chart.getElementsAtEventForMode(event, "nearest", {
        intersect: true
      }, false);
      const dataset = this.chart.getElementsAtEventForMode(event, "dataset", {
        intersect: true
      }, false);
      if (element && element[0] && dataset) {
        this.onDataSelect.emit({
          originalEvent: event,
          element: element[0],
          dataset
        });
      }
    }
  }
  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      let opts = this.options || {};
      opts.responsive = this.responsive;
      if (opts.responsive && (this.height || this.width)) {
        opts.maintainAspectRatio = false;
      }
      this.chart = new auto_default(this.el.nativeElement.children[0].children[0], {
        type: this.type,
        data: this.data,
        options: this.options,
        plugins: this.plugins
      });
    }
  }
  getCanvas() {
    return this.el.nativeElement.children[0].children[0];
  }
  getBase64Image() {
    return this.chart.toBase64Image();
  }
  generateLegend() {
    if (this.chart) {
      return this.chart.generateLegend();
    }
  }
  refresh() {
    if (this.chart) {
      this.chart.update();
    }
  }
  reinit() {
    if (this.chart) {
      this.chart.destroy();
      this.initChart();
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.initialized = false;
      this.chart = null;
    }
  }
  static ɵfac = function UIChart_Factory(t) {
    return new (t || _UIChart)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _UIChart,
    selectors: [["p-chart"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      type: "type",
      plugins: "plugins",
      width: "width",
      height: "height",
      responsive: "responsive",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      data: "data",
      options: "options"
    },
    outputs: {
      onDataSelect: "onDataSelect"
    },
    decls: 2,
    vars: 8,
    consts: [[2, "position", "relative"], ["role", "img", 3, "click"]],
    template: function UIChart_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "canvas", 1);
        ɵɵlistener("click", function UIChart_Template_canvas_click_1_listener($event) {
          return ctx.onCanvasClick($event);
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵstyleProp("width", ctx.responsive && !ctx.width ? null : ctx.width)("height", ctx.responsive && !ctx.height ? null : ctx.height);
        ɵɵadvance(1);
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("width", ctx.responsive && !ctx.width ? null : ctx.width)("height", ctx.responsive && !ctx.height ? null : ctx.height);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UIChart, [{
    type: Component,
    args: [{
      selector: "p-chart",
      template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas role="img" [attr.aria-label]="ariaLabel" [attr.aria-labelledby]="ariaLabelledBy" [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }], {
    type: [{
      type: Input
    }],
    plugins: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onDataSelect: [{
      type: Output
    }]
  });
})();
var ChartModule = class _ChartModule {
  static ɵfac = function ChartModule_Factory(t) {
    return new (t || _ChartModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChartModule,
    declarations: [UIChart],
    imports: [CommonModule],
    exports: [UIChart]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [UIChart],
      declarations: [UIChart]
    }]
  }], null, null);
})();
export {
  ChartModule,
  UIChart
};
//# sourceMappingURL=primeng_chart.js.map
