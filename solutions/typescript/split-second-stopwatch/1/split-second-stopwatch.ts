const State = {
  ready: "ready",
  running: "running",
  stopped: "stopped",
} as const;
type StopWatchState = keyof typeof State;

export class SplitSecondStopwatch {
  private _state: StopWatchState;
  private _currentLap: number;
  private _previousLaps: number[];
  private startTime: number;

  constructor() {
    this._state = State.ready;
    this._previousLaps = [];
    this._currentLap = 0;
    this.startTime = 0;
  }

  private formatTime(ms: number): string {
    if (ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0",
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  private getCurrentLapMs(): number {
    if (this._state === State.running) {
      return this._currentLap + (Date.now() - this.startTime);
    }
    return this._currentLap;
  }

  public get state(): string {
    return this._state;
  }

  public get currentLap(): unknown {
    return this.formatTime(this.getCurrentLapMs());
  }

  public get total(): string {
    let previousTotalMs: number = 0;
    for (const lap of this._previousLaps) {
      previousTotalMs += lap;
    }
    return this.formatTime(previousTotalMs + this.getCurrentLapMs());
  }

  public get previousLaps(): string[] {
    return this._previousLaps.map((lap) => this.formatTime(lap));
  }

  public start(): void {
    switch (this._state) {
      case State.ready:
        this._currentLap = 0;
        this.startTime = Date.now();
        this._state = State.running;
        break;
      case State.stopped:
        this.startTime = Date.now();
        this._state = State.running;
        break;
      default:
        throw new Error("cannot start an already running stopwatch");
    }
  }

  public stop() {
    if (this._state !== State.running) {
      throw new Error("cannot stop a stopwatch that is not running");
    }
    this._currentLap += Date.now() - this.startTime;
    this._state = State.stopped;
  }

  public lap() {
    if (this._state !== State.running) {
      throw new Error("cannot lap a stopwatch that is not running");
    }
    const lapMs = this.getCurrentLapMs();
    this._previousLaps.push(lapMs);

    this._currentLap = 0;
    this.startTime = Date.now();
  }

  public reset(): any {
    if (this._state !== State.stopped) {
      throw new Error("cannot reset a stopwatch that is not stopped");
    }
    this._currentLap = 0;
    this._previousLaps = [];
    this.startTime = 0;
    this._state = State.ready;
  }

  public advanceTime(duration: string) {
if (this._state === State.running) {
      const [hours, minutes, seconds] = duration.split(":").map(Number);
      const advanceMs = (hours * 3600 + minutes * 60 + seconds) * 1000;

      this._currentLap += advanceMs;
    }
  }
}