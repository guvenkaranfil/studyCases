// Helpers
import { LinkedList } from './helpers';

import { convertLinkedListToArray, findLongestString } from './';

test.skip('should convert given linked list to array. If it is empty return empty array', () => {
    const linkedList = new LinkedList();

    expect(convertLinkedListToArray(linkedList.fromArray([2, 4, 3, 10, 15])))
        .toStrictEqual([2, 4, 3, 10, 15])
    expect(convertLinkedListToArray(linkedList.fromArray([25, 6, 7, 12])))
        .toStrictEqual([25, 6, 7, 12])
    expect(convertLinkedListToArray(linkedList.fromArray([])))
        .toStrictEqual([])
});

test('should find the longest string value given linked list head', () => {
    const linkedList = new LinkedList();

    expect(findLongestString(linkedList.fromArray(["abc", "abcde", "abcdefg", "erewq"]))).toBe("abcdefg")
    expect(findLongestString(linkedList.fromArray(["1231", "abc11", "123456abcede", "12321"]))).toBe("123456abcede")
    expect(findLongestString(linkedList.fromArray(["123"]))).toBe("123")
    expect(findLongestString(linkedList.fromArray([]))).toBe("")
});