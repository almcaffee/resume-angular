import {
  TimesCircleIcon
} from "./chunk-JEDTU54L.js";
import "./chunk-54XJLZHM.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-RCP32DAF.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-N3N53OH5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QVGBW7TY.js";
import "./chunk-AFRS2OIU.js";
import "./chunk-HSNDBVJ3.js";

// node_modules/primeng/fesm2022/primeng-chip.mjs
function Chip_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 6);
    ɵɵlistener("error", function Chip_div_0_img_2_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.imageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.image, ɵɵsanitizeUrl);
  }
}
function Chip_div_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r8.icon);
    ɵɵproperty("ngClass", "p-chip-icon");
    ɵɵattribute("data-pc-section", "icon");
  }
}
function Chip_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Chip_div_0_ng_template_3_span_0_Template, 1, 4, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.icon);
  }
}
function Chip_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.label);
  }
}
function Chip_div_0_ng_container_6_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 13);
    ɵɵlistener("click", function Chip_div_0_ng_container_6_ng_container_1_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r13.close($event));
    })("keydown", function Chip_div_0_ng_container_6_ng_container_1_span_1_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r15.onKeydown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r11.removeIcon);
    ɵɵproperty("ngClass", "pi-chip-remove-icon");
    ɵɵattribute("data-pc-section", "removeicon");
  }
}
function Chip_div_0_ng_container_6_ng_container_1_TimesCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesCircleIcon", 14);
    ɵɵlistener("click", function Chip_div_0_ng_container_6_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_click_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r16.close($event));
    })("keydown", function Chip_div_0_ng_container_6_ng_container_1_TimesCircleIcon_2_Template_TimesCircleIcon_keydown_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r18 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r18.onKeydown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵclassMap("pi-chip-remove-icon");
    ɵɵattribute("data-pc-section", "removeicon");
  }
}
function Chip_div_0_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Chip_div_0_ng_container_6_ng_container_1_span_1_Template, 1, 4, "span", 11)(2, Chip_div_0_ng_container_6_ng_container_1_TimesCircleIcon_2_Template, 1, 3, "TimesCircleIcon", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.removeIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r9.removeIcon);
  }
}
function Chip_div_0_ng_container_6_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chip_div_0_ng_container_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Chip_div_0_ng_container_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chip_div_0_ng_container_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function Chip_div_0_ng_container_6_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r21.close($event));
    })("keydown", function Chip_div_0_ng_container_6_span_2_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r22);
      const ctx_r23 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r23.onKeydown($event));
    });
    ɵɵtemplate(1, Chip_div_0_ng_container_6_span_2_1_Template, 1, 0, null, 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "removeicon");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.removeIconTemplate);
  }
}
function Chip_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Chip_div_0_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 5)(2, Chip_div_0_ng_container_6_span_2_Template, 2, 2, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.removeIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.removeIconTemplate);
  }
}
function Chip_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵprojection(1);
    ɵɵtemplate(2, Chip_div_0_img_2_Template, 1, 1, "img", 2)(3, Chip_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(5, Chip_div_0_div_5_Template, 2, 2, "div", 4)(6, Chip_div_0_ng_container_6_Template, 3, 2, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r3 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵɵattribute("data-pc-name", "chip")("aria-label", ctx_r0.label)("data-pc-section", "root");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.image)("ngIfElse", _r3);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.removable);
  }
}
var _c0 = ["*"];
var Chip = class _Chip {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Whether to display a remove icon.
   * @group Props
   */
  removable = false;
  /**
   * Icon of the remove element.
   * @group Props
   */
  removeIcon;
  /**
   * Callback to invoke when a chip is removed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  visible = true;
  removeIconTemplate;
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "removeicon":
          this.removeIconTemplate = item.template;
          break;
        default:
          this.removeIconTemplate = item.template;
          break;
      }
    });
  }
  containerClass() {
    return {
      "p-chip p-component": true,
      "p-chip-image": this.image != null
    };
  }
  close(event) {
    this.visible = false;
    this.onRemove.emit(event);
  }
  onKeydown(event) {
    if (event.key === "Enter" || event.key === "Backspace") {
      this.close(event);
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  static ɵfac = function Chip_Factory(t) {
    return new (t || _Chip)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Chip,
    selectors: [["p-chip"]],
    contentQueries: function Chip_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      style: "style",
      styleClass: "styleClass",
      removable: "removable",
      removeIcon: "removeIcon"
    },
    outputs: {
      onRemove: "onRemove",
      onImageError: "onImageError"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "src", "error", 4, "ngIf", "ngIfElse"], ["iconTemplate", ""], ["class", "p-chip-text", 4, "ngIf"], [4, "ngIf"], [3, "src", "error"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-chip-text"], ["tabindex", "0", "class", "pi-chip-remove-icon", 3, "click", "keydown", 4, "ngIf"], ["tabindex", "0", 3, "class", "ngClass", "click", "keydown", 4, "ngIf"], ["tabindex", "0", 3, "class", "click", "keydown", 4, "ngIf"], ["tabindex", "0", 3, "ngClass", "click", "keydown"], ["tabindex", "0", 3, "click", "keydown"], ["tabindex", "0", 1, "pi-chip-remove-icon", 3, "click", "keydown"], [4, "ngTemplateOutlet"]],
    template: function Chip_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Chip_div_0_Template, 7, 11, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, TimesCircleIcon],
    styles: ["@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chip, [{
    type: Component,
    args: [{
      selector: "p-chip",
      template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" *ngIf="visible" [attr.data-pc-name]="'chip'" [attr.aria-label]="label" [attr.data-pc-section]="'root'">
            <ng-content></ng-content>
            <img [src]="image" *ngIf="image; else iconTemplate" (error)="imageError($event)" />
            <ng-template #iconTemplate><span *ngIf="icon" [class]="icon" [ngClass]="'p-chip-icon'" [attr.data-pc-section]="'icon'"></span></ng-template>
            <div class="p-chip-text" *ngIf="label" [attr.data-pc-section]="'label'">{{ label }}</div>
            <ng-container *ngIf="removable">
                <ng-container *ngIf="!removeIconTemplate">
                    <span tabindex="0" *ngIf="removeIcon" [class]="removeIcon" [ngClass]="'pi-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)"></span>
                    <TimesCircleIcon tabindex="0" *ngIf="!removeIcon" [class]="'pi-chip-remove-icon'" [attr.data-pc-section]="'removeicon'" (click)="close($event)" (keydown)="onKeydown($event)" />
                </ng-container>
                <span *ngIf="removeIconTemplate" tabindex="0" [attr.data-pc-section]="'removeicon'" class="pi-chip-remove-icon" (click)="close($event)" (keydown)="onKeydown($event)">
                    <ng-template *ngTemplateOutlet="removeIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi,.pi-chip-remove-icon.pi{line-height:1.5}.pi-chip-remove-icon{cursor:pointer}.p-chip img{border-radius:50%}}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    onRemove: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipModule = class _ChipModule {
  static ɵfac = function ChipModule_Factory(t) {
    return new (t || _ChipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChipModule,
    declarations: [Chip],
    imports: [CommonModule, TimesCircleIcon, SharedModule],
    exports: [Chip, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, TimesCircleIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TimesCircleIcon, SharedModule],
      exports: [Chip, SharedModule],
      declarations: [Chip]
    }]
  }], null, null);
})();
export {
  Chip,
  ChipModule
};
//# sourceMappingURL=primeng_chip.js.map
