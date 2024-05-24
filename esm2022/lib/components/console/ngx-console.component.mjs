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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxConsoleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: NgxConsoleComponent, selector: "ngx-console", inputs: { logs: "logs" }, viewQueries: [{ propertyName: "myScrollContainer", first: true, predicate: ["terminal"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"terminal\" #terminal>\n  @for (item of logs; track item) {\n    <div [ngClass]=\"item.level\">{{item.timeStamp | date : 'yyyy-MM-dd hh:mm:ss'}} - {{item.source}} - {{item.level}} - {{item.line}}</div>\n  }\n</div>\n", styles: [".terminal{font-family:monospace;height:200px;overflow-y:scroll;background-color:#252525;color:#f5f5f5;padding:8px 8px 32px;border-radius:4px}.ERROR{color:red}.INFO{color:#f5f5f5}.WARN{color:#ffc107}.DEBUG{color:#3f51b5}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i1.DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxConsoleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-console', template: "<div class=\"terminal\" #terminal>\n  @for (item of logs; track item) {\n    <div [ngClass]=\"item.level\">{{item.timeStamp | date : 'yyyy-MM-dd hh:mm:ss'}} - {{item.source}} - {{item.level}} - {{item.line}}</div>\n  }\n</div>\n", styles: [".terminal{font-family:monospace;height:200px;overflow-y:scroll;background-color:#252525;color:#f5f5f5;padding:8px 8px 32px;border-radius:4px}.ERROR{color:red}.INFO{color:#f5f5f5}.WARN{color:#ffc107}.DEBUG{color:#3f51b5}\n"] }]
        }], propDecorators: { myScrollContainer: [{
                type: ViewChild,
                args: ['terminal']
            }], logs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbnNvbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWhpc2ItbG9nZ2VyL3NyYy9saWIvY29tcG9uZW50cy9jb25zb2xlL25neC1jb25zb2xlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWxvZ2dlci9zcmMvbGliL2NvbXBvbmVudHMvY29uc29sZS9uZ3gtY29uc29sZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLEtBQUssRUFBNEIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFRaEcsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9XLFNBQUksR0FBYyxFQUFFLENBQUM7S0FjL0I7SUFaQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDMUMsR0FBRyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUN0RCxJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDOzhHQWZVLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlOQ1JoQyxzT0FLQTs7MkZER2EsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7OEJBS1EsaUJBQWlCO3NCQUEvQyxTQUFTO3VCQUFDLFVBQVU7Z0JBQ1osSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvZ0xpbmV9IGZyb20gXCIuLi8uLi9tb2RhbC9sb2ctbGluZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY29uc29sZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtY29uc29sZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1jb25zb2xlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb25zb2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xuICBAVmlld0NoaWxkKCd0ZXJtaW5hbCcpIHByaXZhdGUgbXlTY3JvbGxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGxvZ3M6IExvZ0xpbmVbXSA9IFtdO1xuXG4gIHNjcm9sbFRvRWxlbWVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm15U2Nyb2xsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsKHtcbiAgICAgIHRvcDogdGhpcy5teVNjcm9sbENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYodGhpcy5teVNjcm9sbENvbnRhaW5lcj8ubmF0aXZlRWxlbWVudCl7XG4gICAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInRlcm1pbmFsXCIgI3Rlcm1pbmFsPlxuICBAZm9yIChpdGVtIG9mIGxvZ3M7IHRyYWNrIGl0ZW0pIHtcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIml0ZW0ubGV2ZWxcIj57e2l0ZW0udGltZVN0YW1wIHwgZGF0ZSA6ICd5eXl5LU1NLWRkIGhoOm1tOnNzJ319IC0ge3tpdGVtLnNvdXJjZX19IC0ge3tpdGVtLmxldmVsfX0gLSB7e2l0ZW0ubGluZX19PC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19