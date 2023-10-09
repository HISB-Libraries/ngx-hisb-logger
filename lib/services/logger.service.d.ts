import { LogLine } from "../modal/log-line";
import * as i0 from "@angular/core";
export declare class LoggerService {
    private logStream;
    logStream$: import("rxjs").Observable<LogLine[]>;
    private log;
    debug(msg: string, source: string): void;
    info(msg: string, source: string): void;
    warn(msg: string, source: string): void;
    error(msg: string, source: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggerService>;
}
