import { DEFAULT_ROW_HEIGHT } from './tableConstants';

export function getHeight(rowHeight, numRows, hasInfiniteScroll) {
  const height = rowHeight || DEFAULT_ROW_HEIGHT;
  return hasInfiniteScroll
    ? `${numRows * height}px`
    : 'auto';
}

export function getData(data, start = 0, end = TABLE_PAGE_SIZE) {
  return data.slice(start, end);
}

//Will develop further(virtualScroll, initVirtualScroll) in the event that this needs to be tested: 
export function virtualScroll() { }

export function initVirtualScroll() { }

/**
 * Utility class that measures FPS.
 */
export class FPS {
  /**
   * Start measuring
   */
  static start() {
    this.start = null;
    this.frameCount = 0;
    this.running = true;
    this.frames = [];
    this.prevFrameTime = null;

    console.log('Starting frame counter');

    requestAnimationFrame(this.frameCounter);
  }

  /**
   * Stop measuring and print the result to console
   */
  static stop() {
    this.running = false;

    const
      elapsed = performance.now() - this.start,
      sum = this.frames.reduce((sum, time) => sum += time),
      average = this.frames.length / (sum / 1000),
      fps = this.frameCount / (elapsed / 1000);

    console.table({
      'Elapsed time': elapsed,
      'Frames': this.frameCount,
      'Frame sum': sum,
      'Average FPS 1': fps,
      'Average FPS 2': average
    });

    //console.log(this.frames);
  }

  // Internal function that counts animation frames
  static frameCounter() {
    const time = performance.now();

    if (FPS.start === null) {
      FPS.start = time;
      FPS.prevFrameTime = time;
    } else {
      FPS.frameCount++;
      FPS.frames.push(time - FPS.prevFrameTime);
    }

    FPS.prevFrameTime = time;

    if (FPS.running) {
      requestAnimationFrame(FPS.frameCounter)
    }
  }
}

/**
* Utility class that measures initial rendering time.
*/
export class RenderTimer {
  /**
   * Start measuring. In `sync` mode it will call the callback and then stop the timer.
   * When not in `sync` mode you should manually call `stop()
   * @param {Boolean} sync
   * @param {Function} callback
   */
  static start({ sync = true, callback }) {
    this.start = performance.now();
    this.running = true;

    console.log('Starting initial rendering measurement');

    callback && callback();

    if (sync) {
      this.stop();
    }
  }

  /**
   * Stop measuring
   */
  static stop() {
    if (this.running) {
      const elapsed = performance.now() - this.start;

      console.table({
        'Initial rendering (ms)': elapsed
      });

      this.running = false;
    }
  }
}
