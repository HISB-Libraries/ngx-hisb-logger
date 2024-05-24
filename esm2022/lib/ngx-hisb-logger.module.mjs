import { NgModule } from '@angular/core';
import { NgxConsoleComponent } from './components/console/ngx-console.component';
import { AsyncPipe, CommonModule, JsonPipe } from "@angular/common";
import { LoggerService } from "./services/logger.service";
import { BrowserModule } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export class NgxHisbLoggerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbLoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbLoggerModule, declarations: [NgxConsoleComponent], imports: [JsonPipe,
            AsyncPipe,
            CommonModule,
            BrowserModule], exports: [NgxConsoleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbLoggerModule, providers: [
            LoggerService
        ], imports: [CommonModule,
            BrowserModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxHisbLoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxConsoleComponent
                    ],
                    imports: [
                        JsonPipe,
                        AsyncPipe,
                        CommonModule,
                        BrowserModule
                    ],
                    exports: [
                        NgxConsoleComponent,
                    ],
                    providers: [
                        LoggerService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhpc2ItbG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1oaXNiLWxvZ2dlci9zcmMvbGliL25neC1oaXNiLWxvZ2dlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDOztBQXFCeEQsTUFBTSxPQUFPLG1CQUFtQjs4R0FBbkIsbUJBQW1COytHQUFuQixtQkFBbUIsaUJBZjVCLG1CQUFtQixhQUduQixRQUFRO1lBQ1IsU0FBUztZQUNULFlBQVk7WUFDWixhQUFhLGFBR2IsbUJBQW1COytHQU1WLG1CQUFtQixhQUpuQjtZQUNWLGFBQWE7U0FDYixZQVJDLFlBQVk7WUFDWixhQUFhOzsyRkFTSixtQkFBbUI7a0JBakIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxRQUFRO3dCQUNSLFNBQVM7d0JBQ1QsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRTt3QkFDVixhQUFhO3FCQUNiO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neENvbnNvbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc29sZS9uZ3gtY29uc29sZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBc3luY1BpcGUsIENvbW1vbk1vZHVsZSwgSnNvblBpcGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TG9nZ2VyU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neENvbnNvbGVDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEpzb25QaXBlLFxuICAgIEFzeW5jUGlwZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Q29uc29sZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICBMb2dnZXJTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4SGlzYkxvZ2dlck1vZHVsZSB7IH1cbiJdfQ==