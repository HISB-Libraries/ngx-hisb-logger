import { OnChanges, SimpleChanges } from '@angular/core';
import { LogLine } from "../../modal/log-line";
import * as i0 from "@angular/core";
export declare class NgxConsoleComponent implements OnChanges {
    private myScrollContainer;
    logs: LogLine[];
    scrollToElement(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxConsoleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxConsoleComponent, "ngx-console", never, { "logs": { "alias": "logs"; "required": false; }; }, {}, never, never, false, never>;
}
