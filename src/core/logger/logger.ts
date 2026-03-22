import type { LogContext } from './logContext.js';

export function logInfo(message: string, context: LogContext = {}) {
  console.info(message, context);
}
