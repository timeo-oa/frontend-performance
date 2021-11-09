import {DEFAULT_ROW_HEIGHT} from './tableConstants';

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
export function virtualScroll() {}

export function initVirtualScroll() {}