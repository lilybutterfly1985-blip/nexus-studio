// activity domain module
export type RecordMap = Record<string, unknown>;

export function recordActivity(input: RecordMap = {}) { return { id: crypto.randomUUID(), status: 'OK' }; }
export function listActivity(input: RecordMap = {}) { return []; }
