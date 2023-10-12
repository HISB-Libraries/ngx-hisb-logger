import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxConsoleComponent {
    constructor() {
        this.logs = [];
    }
    scrollToElement() {
        this.myScrollContainer.nativeElement.scroll({
            top: this.myScrollContainer.nativeElement.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnChanges(changes) {
        if (this.myScrollContainer?.nativeElement) {
            this.scrollToElement();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NgxConsoleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.9", type: NgxConsoleComponent, selector: "ngx-console", inputs: { logs: "logs" }, viewQueries: [{ propertyName: "myScrollContainer", first: true, predicate: ["terminal"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"terminal\" #terminal>\n  <div *ngFor=\"let item of logs\">\n    <div [ngClass]=\"item.level\">{{item.timeStamp | date : 'yyyy-MM-dd hh:mm:ss'}} - {{item.source}} - {{item.level}} - {{item.line}}</div>\n  </div>\n</div>\n", styles: [".terminal{font-family:monospace;height:200px;overflow-y:scroll;background-color:#252525;color:#f5f5f5;padding:8px 8px 32px;border-radius:4px}.ERROR{color:red}.INFO{color:#f5f5f5}.WARN{color:#ffc107}.DEBUG{color:#3f51b5}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NgxConsoleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-console', template: "<div class=\"terminal\" #terminal>\n  <div *ngFor=\"let item of logs\">\n    <div [ngClass]=\"item.level\">{{item.timeStamp | date : 'yyyy-MM-dd hh:mm:ss'}} - {{item.source}} - {{item.level}} - {{item.line}}</div>\n  </div>\n</div>\n", styles: [".terminal{font-family:monospace;height:200px;overflow-y:scroll;background-color:#252525;color:#f5f5f5;padding:8px 8px 32px;border-radius:4px}.ERROR{color:red}.INFO{color:#f5f5f5}.WARN{color:#ffc107}.DEBUG{color:#3f51b5}\n"] }]
        }], propDecorators: { myScrollContainer: [{
                type: ViewChild,
                args: ['terminal']
            }], logs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbnNvbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItbG9nZ2VyL3NyYy9saWIvY29tcG9uZW50cy9jb25zb2xlL25neC1jb25zb2xlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWxvZ2dlci9zcmMvbGliL2NvbXBvbmVudHMvY29uc29sZS9uZ3gtY29uc29sZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLEtBQUssRUFBNEIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFRaEcsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9XLFNBQUksR0FBYyxFQUFFLENBQUM7S0FjL0I7SUFaQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDMUMsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN0RCxJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OEdBZlUsbUJBQW1CO2tHQUFuQixtQkFBbUIsaU5DUmhDLDJPQUtBOzsyRkRHYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsYUFBYTs4QkFLUSxpQkFBaUI7c0JBQS9DLFNBQVM7dUJBQUMsVUFBVTtnQkFDWixJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9nTGluZX0gZnJvbSBcIi4uLy4uL21vZGFsL2xvZy1saW5lXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jb25zb2xlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1jb25zb2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWNvbnNvbGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neENvbnNvbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG4gIEBWaWV3Q2hpbGQoJ3Rlcm1pbmFsJykgcHJpdmF0ZSBteVNjcm9sbENvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbG9nczogTG9nTGluZVtdID0gW107XG5cbiAgc2Nyb2xsVG9FbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMubXlTY3JvbGxDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGwoe1xuICAgICAgdG9wOiB0aGlzLm15U2Nyb2xsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZih0aGlzLm15U2Nyb2xsQ29udGFpbmVyPy5uYXRpdmVFbGVtZW50KXtcbiAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwidGVybWluYWxcIiAjdGVybWluYWw+XG4gIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbG9nc1wiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwiaXRlbS5sZXZlbFwiPnt7aXRlbS50aW1lU3RhbXAgfCBkYXRlIDogJ3l5eXktTU0tZGQgaGg6bW06c3MnfX0gLSB7e2l0ZW0uc291cmNlfX0gLSB7e2l0ZW0ubGV2ZWx9fSAtIHt7aXRlbS5saW5lfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==