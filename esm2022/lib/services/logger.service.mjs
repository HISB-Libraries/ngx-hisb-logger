import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { LogLevel } from "../modal/log-level";
import { LogLine } from "../modal/log-line";
import * as i0 from "@angular/core";
export class LoggerService {
    constructor() {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: LoggerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: LoggerService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.7", ngImport: i0, type: LoggerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaGlzYi1sb2dnZXIvc3JjL2xpYi9zZXJ2aWNlcy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFJMUMsTUFBTSxPQUFPLGFBQWE7SUFIMUI7UUFLVSxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVksRUFBRSxDQUFDLENBQUM7UUFDdkQsZUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7S0E0QjVDO0lBM0JTLEdBQUcsQ0FBQyxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLENBQUMsR0FBVyxFQUFFLE1BQWM7UUFDL0IsTUFBTSxJQUFJLEdBQVksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxNQUFjO1FBQzlCLE1BQU0sSUFBSSxHQUFZLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUM5QixNQUFNLElBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBVyxFQUFFLE1BQWM7UUFDL0IsTUFBTSxJQUFJLEdBQVksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7OEdBOUJVLGFBQWE7a0hBQWIsYUFBYSxjQUZaLE1BQU07OzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtMb2dMZXZlbH0gZnJvbSBcIi4uL21vZGFsL2xvZy1sZXZlbFwiO1xuaW1wb3J0IHtMb2dMaW5lfSBmcm9tIFwiLi4vbW9kYWwvbG9nLWxpbmVcIjtcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9nU3RyZWFtID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2dMaW5lW10+KFtdKTtcbiAgbG9nU3RyZWFtJCA9IHRoaXMubG9nU3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIGxvZyhsaW5lOiBMb2dMaW5lKSB7XG4gICAgdGhpcy5sb2dTdHJlYW0ubmV4dCh0aGlzLmxvZ1N0cmVhbS52YWx1ZS5jb25jYXQobGluZSkpO1xuICB9XG5cbiAgZGVidWcobXNnOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbGluZTogTG9nTGluZSA9IG5ldyBMb2dMaW5lKG1zZywgTG9nTGV2ZWwuRGVidWcsIHNvdXJjZSk7XG4gICAgdGhpcy5sb2cobGluZSk7XG4gIH1cblxuICBpbmZvKG1zZzogc3RyaW5nLCBzb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IGxpbmU6IExvZ0xpbmUgPSBuZXcgTG9nTGluZShtc2csIExvZ0xldmVsLkluZm8sIHNvdXJjZSk7XG4gICAgdGhpcy5sb2cobGluZSk7XG4gIH1cblxuICB3YXJuKG1zZzogc3RyaW5nLCBzb3VyY2U6IHN0cmluZykge1xuICAgIGNvbnN0IGxpbmU6IExvZ0xpbmUgPSBuZXcgTG9nTGluZShtc2csIExvZ0xldmVsLldhcm4sIHNvdXJjZSk7XG4gICAgdGhpcy5sb2cobGluZSk7XG4gIH1cblxuICBlcnJvcihtc2c6IHN0cmluZywgc291cmNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaW5lOiBMb2dMaW5lID0gbmV3IExvZ0xpbmUobXNnLCBMb2dMZXZlbC5FcnJvciwgc291cmNlKTtcbiAgICB0aGlzLmxvZyhsaW5lKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubG9nU3RyZWFtLm5leHQoW10pXG4gIH1cbn1cbiJdfQ==