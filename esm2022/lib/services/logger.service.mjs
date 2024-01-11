import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { LogLevel } from "../modal/log-level";
import { LogLine } from "../modal/log-line";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/clipboard";
export class LoggerService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LoggerService, deps: [{ token: i1.Clipboard }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LoggerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.Clipboard }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaGlzYi1sb2dnZXIvc3JjL2xpYi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBSzFDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFJaEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBSjNDLENBQUM7SUFLTyxHQUFHLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQy9CLE1BQU0sSUFBSSxHQUFZLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUM5QixNQUFNLElBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBVyxFQUFFLE1BQWM7UUFDOUIsTUFBTSxJQUFJLEdBQVksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQy9CLE1BQU0sSUFBSSxHQUFZLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLE1BQU0sSUFBSSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVMsTUFBTSxPQUFPLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxNQUFNLE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7OEdBMUNVLGFBQWE7a0hBQWIsYUFBYSxjQUZaLE1BQU07OzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4uL21vZGFsL2xvZy1sZXZlbFwiO1xuaW1wb3J0IHtMb2dMaW5lfSBmcm9tIFwiLi4vbW9kYWwvbG9nLWxpbmVcIjtcbmltcG9ydCB7IENsaXBib2FyZCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jbGlwYm9hcmQnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xpcGJvYXJkOiBDbGlwYm9hcmQpe1xuICB9XG5cblxuICBwcml2YXRlIGxvZ1N0cmVhbSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9nTGluZVtdPihbXSk7XG4gIGxvZ1N0cmVhbSQgPSB0aGlzLmxvZ1N0cmVhbS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBsb2cobGluZTogTG9nTGluZSkge1xuICAgIHRoaXMubG9nU3RyZWFtLm5leHQodGhpcy5sb2dTdHJlYW0udmFsdWUuY29uY2F0KGxpbmUpKTtcbiAgfVxuXG4gIGRlYnVnKG1zZzogc3RyaW5nLCBzb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IGxpbmU6IExvZ0xpbmUgPSBuZXcgTG9nTGluZShtc2csIExvZ0xldmVsLkRlYnVnLCBzb3VyY2UpO1xuICAgIHRoaXMubG9nKGxpbmUpO1xuICB9XG5cbiAgaW5mbyhtc2c6IHN0cmluZywgc291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaW5lOiBMb2dMaW5lID0gbmV3IExvZ0xpbmUobXNnLCBMb2dMZXZlbC5JbmZvLCBzb3VyY2UpO1xuICAgIHRoaXMubG9nKGxpbmUpO1xuICB9XG5cbiAgd2Fybihtc2c6IHN0cmluZywgc291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaW5lOiBMb2dMaW5lID0gbmV3IExvZ0xpbmUobXNnLCBMb2dMZXZlbC5XYXJuLCBzb3VyY2UpO1xuICAgIHRoaXMubG9nKGxpbmUpO1xuICB9XG5cbiAgZXJyb3IobXNnOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbGluZTogTG9nTGluZSA9IG5ldyBMb2dMaW5lKG1zZywgTG9nTGV2ZWwuRXJyb3IsIHNvdXJjZSk7XG4gICAgdGhpcy5sb2cobGluZSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmxvZ1N0cmVhbS5uZXh0KFtdKVxuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgdGhlIGNvbnRlbnQgdG8gZnJvbSB0aGUgbG9nIHRvIGEgY2xpcGJvYXJkLlxuICAgKiBQcmVzZW50bHkgdGhlIGZvcm1hdCB3ZSB1c2UgaXMgJ3RpbWVzdGFtcCAtIGxvZyBsZXZlbCAtIHNvdXJjZSAodGhpcyBpcyBjdXJyZW50bHkgdGhlIHNvdXJjZSBvZiB0aGUgY2xhc3MpIC0gbWVzc2FnZSdcbiAgICovXG4gIGNvcHlMb2dzKCl7XG4gICAgY29uc3QgbG9ncz0gdGhpcy5sb2dTdHJlYW0udmFsdWUubWFwKGxvZ0xpbmU9PiBgJHtsb2dMaW5lLnRpbWVTdGFtcH0gLSAke2xvZ0xpbmUubGV2ZWx9IC0ke2xvZ0xpbmUuc291cmNlfSAtICR7bG9nTGluZS5saW5lfWApLmpvaW4oXCJcXG5cIik7XG4gICAgdGhpcy5jbGlwYm9hcmQuY29weShsb2dzKTtcbiAgfVxufVxuIl19