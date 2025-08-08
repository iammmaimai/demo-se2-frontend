import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter hook', () => {
  it('initializes count to 0 and val to 1', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toEqual(0);
    expect(result.current.val).toEqual(1);
  });

  it('increments count by default val', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toEqual(1);
  });

  it('updates val and increments count by new val', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.setVal(5));
    expect(result.current.val).toEqual(5);
    act(() => result.current.increment());
    expect(result.current.count).toEqual(5);
  });

  it('increments count multiple times with custom val', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.setVal(3));
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toEqual(6);
  });

  it('handles negative increment values', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.setVal(-2));
    act(() => result.current.increment());
    expect(result.current.count).toEqual(-2);
  });
});