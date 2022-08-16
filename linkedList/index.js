const convertLinkedListToArray = (head) => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

export { convertLinkedListToArray };
