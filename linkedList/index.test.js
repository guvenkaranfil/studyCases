// Helpers
import { LinkedList } from './helpers';

import { convertLinkedListToArray } from './';

test('should convert given linked list to array. If it is empty return empty array', () => {
    const linkedList = new LinkedList();

    expect(convertLinkedListToArray(linkedList.fromArray([2, 4, 3, 10, 15])))
        .toStrictEqual([2, 4, 3, 10, 15])
    expect(convertLinkedListToArray(linkedList.fromArray([25, 6, 7, 12])))
        .toStrictEqual([25, 6, 7, 12])
    expect(convertLinkedListToArray(linkedList.fromArray([])))
        .toStrictEqual([])
});