import { LogLevel } from "./log-level";
export declare class LogLine {
    timeStamp: Date;
    line: string;
    level: LogLevel;
    tags: string[];
    source: string;
    attachment?: any;
    constructor(line: string, level: LogLevel, source: string, tags?: string[], attachment?: any);
}
