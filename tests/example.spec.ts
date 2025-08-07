import { describe, it, expect } from 'vitest';

describe('math', () => {
  it('adds numbers correctly', () => {
    expect(2 + 3).toBe(5);
  });

  it('subtracts numbers correctly', () => {
    expect(5 - 2).toBe(3);
  });
});