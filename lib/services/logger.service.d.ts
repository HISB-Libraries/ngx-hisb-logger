import { LogLine } from "../modal/log-line";
import { Clipboard } from '@angular/cdk/clipboard';
import * as i0 from "@angular/core";
export declare class LoggerService {
    private clipboard;
    constructor(clipboard: Clipboard);
    private logStream;
    logStream$: import("rxjs").Observable<LogLine[]>;
    private log;
    debug(msg: string, source: string): void;
    info(msg: string, source: string): void;
    warn(msg: string, source: string): void;
    error(msg: string, source: string): void;
    clear(): void;
    /**
     * Copy the content to from the log to a clipboard.
     * Presently the format we use is 'timestamp - log level - source (this is currently the source of the class) - message'
     */
    copyLogs(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggerService>;
}
