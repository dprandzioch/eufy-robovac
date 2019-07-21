export declare enum CleanSpeed {
    NO_SUCTION = "No_suction",
    STANDARD = "Standard",
    BOOST_IQ = "Boost_IQ",
    MAX = "Max"
}
export declare enum ErrorCode {
    NO_ERROR = "no_error",
    WHEEL_STUCK = "Wheel_stuck",
    R_BRUSH_STUCK = "R_brush_stuck",
    CRASH_BAR_STUCK = "Crash_bar_stuck",
    SENSOR_DIRTY = "sensor_dirty",
    NOT_ENOUGH_POWER = "N_enough_pow",
    STUCK_5_MIN = "Stuck_5_min",
    FAN_STUCK = "Fan_stuck",
    S_BRUSH_STUCK = "S_brush_stuck"
}
export declare enum WorkStatus {
    RUNNING = "Running",
    CHARGING = "Charging",
    STAND_BY = "standby",
    SLEEPING = "Sleeping",
    RECHARGE_NEEDED = "Recharge",
    COMPLETED = "completed"
}
export declare enum Direction {
    LEFT = "left",
    RIGHT = "right",
    FORWARD = "forward",
    BACKWARD = "backward"
}
export declare enum WorkMode {
    AUTO = "auto",
    NO_SWEEP = "Nosweep",
    SMALL_ROOM = "SmallRoom",
    EDGE = "Edge",
    SPOT = "Spot"
}
export interface StatusResponse {
    devId: string;
    dps: {
        "1": boolean;
        "2": boolean;
        "3": string;
        "5": string;
        "15": string;
        "101": boolean;
        "102": string;
        "103": boolean;
        "104": number;
        "106": string;
    };
}
export declare class RoboVac {
    api: any;
    PLAY_PAUSE: string;
    DIRECTION: string;
    WORK_MODE: string;
    WORK_STATUS: string;
    GO_HOME: string;
    CLEAN_SPEED: string;
    FIND_ROBOT: string;
    BATTERY_LEVEL: string;
    ERROR_CODE: string;
    connected: boolean;
    statuses: StatusResponse;
    lastStatusUpdate: number;
    maxStatusUpdateAge: number;
    constructor(config: {
        deviceId?: string;
        localKey: string;
        ip?: string;
    });
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    doWork(work: () => Promise<any>): Promise<any>;
    getStatuses(force?: boolean): Promise<{
        devId: string;
        dps: {
            [key: string]: string | boolean | number;
        };
    }>;
    getCleanSpeed(force?: boolean): Promise<CleanSpeed>;
    setCleanSpeed(cleanSpeed: CleanSpeed): Promise<void>;
    getPlayPause(force?: boolean): Promise<boolean>;
    setPlayPause(state: boolean): Promise<void>;
    play(): Promise<void>;
    pause(): Promise<void>;
    getWorkMode(force?: boolean): Promise<WorkMode>;
    setWorkMode(workMode: WorkMode): Promise<void>;
    startCleaning(force?: boolean): Promise<void>;
    getWorkStatus(force?: boolean): Promise<WorkStatus>;
    setWorkStatus(workStatus: WorkStatus): Promise<void>;
    goHome(): Promise<void>;
    setFindRobot(state: boolean): Promise<void>;
    getFindRobot(force?: boolean): Promise<boolean>;
    getBatteyLevel(force?: boolean): Promise<number>;
    getErrorCode(force?: boolean): Promise<ErrorCode>;
    set(data: {
        [key: string]: string | number | boolean;
    }): Promise<void>;
    formatStatus(): void;
}
