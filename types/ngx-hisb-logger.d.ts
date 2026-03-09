import * as i0 from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '@angular/platform-browser';
import * as rxjs from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';

declare enum LogLevel {
    All = "ALL",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

declare class LogLine {
    timeStamp: Date;
    line: string;
    level: LogLevel;
    tags: string[];
    source: string;
    attachment?: any;
    constructor(line: string, level: LogLevel, source: string, tags?: string[], attachment?: any);
}

declare class NgxConsoleComponent implements OnChanges {
    private myScrollContainer;
    logs: LogLine[];
    scrollToElement(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxConsoleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxConsoleComponent, "ngx-console", never, { "logs": { "alias": "logs"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NgxHisbLoggerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxHisbLoggerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxHisbLoggerModule, [typeof NgxConsoleComponent], [typeof i2.JsonPipe, typeof i2.AsyncPipe, typeof i2.CommonModule, typeof i3.BrowserModule], [typeof NgxConsoleComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxHisbLoggerModule>;
}

declare class LoggerService {
    private clipboard;
    constructor(clipboard: Clipboard);
    private logStream;
    logStream$: rxjs.Observable<LogLine[]>;
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

export { LogLine, LoggerService, NgxConsoleComponent, NgxHisbLoggerModule };
