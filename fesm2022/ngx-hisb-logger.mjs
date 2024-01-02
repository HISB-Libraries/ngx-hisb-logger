import * as i0 from '@angular/core';
import { Component, ViewChild, Input, Injectable, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { JsonPipe, AsyncPipe, CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import * as i1$1 from '@angular/cdk/clipboard';
import { BrowserModule } from '@angular/platform-browser';

class NgxConsoleComponent {
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

var LogLevel;
(function (LogLevel) {
    LogLevel["All"] = "ALL";
    LogLevel["Debug"] = "DEBUG";
    LogLevel["Info"] = "INFO";
    LogLevel["Warn"] = "WARN";
    LogLevel["Error"] = "ERROR";
})(LogLevel || (LogLevel = {}));

class LogLine {
    constructor(line, level, source, tags, attachment) {
        this.timeStamp = new Date();
        this.line = line;
        this.level = level;
        this.tags = tags ?? [];
        this.source = source;
        this.attachment = attachment ?? null;
    }
}

class LoggerService {
    constructor(clipboard) {
        this.clipboard = clipboard;
        this.logStream = new BehaviorSubject([]);
        this.logStream$ = this.logStream.asObservable();
    }
    log(line) {
        this.logStream.next(this.logStream.value.concat(line));
    }
    debug(msg, source) {
        const line = new LogLine(msg, LogLevel.Debug, source);
        this.log(line);
    }
    info(msg, source) {
        const line = new LogLine(msg, LogLevel.Info, source);
        this.log(line);
    }
    warn(msg, source) {
        const line = new LogLine(msg, LogLevel.Warn, source);
        this.log(line);
    }
    error(msg, source) {
        const line = new LogLine(msg, LogLevel.Error, source);
        this.log(line);
    }
    clear() {
        this.logStream.next([]);
    }
    /**
     * Copy the content to from the log to a clipboard.
     * Presently the format we use is 'timestamp - log level - source (this is currently the source of the class) - message'
     */
    copyLogs() {
        const logs = this.logStream.value.map(logLine => `${logLine.timeStamp} - ${logLine.level} -${logLine.source} - ${logLine.line}`).join("\n");
        this.clipboard.copy(logs);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: LoggerService, deps: [{ token: i1$1.Clipboard }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: LoggerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: LoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Clipboard }]; } });

class NgxHisbLoggerModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NgxHisbLoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.9", ngImport: i0, type: NgxHisbLoggerModule, declarations: [NgxConsoleComponent], imports: [JsonPipe,
            AsyncPipe,
            CommonModule,
            BrowserModule], exports: [NgxConsoleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NgxHisbLoggerModule, providers: [
            LoggerService
        ], imports: [CommonModule,
            BrowserModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.9", ngImport: i0, type: NgxHisbLoggerModule, decorators: [{
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

/*
 * Public API Surface of ngx-hisb-logger
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LogLine, LoggerService, NgxConsoleComponent, NgxHisbLoggerModule };
//# sourceMappingURL=ngx-hisb-logger.mjs.map
