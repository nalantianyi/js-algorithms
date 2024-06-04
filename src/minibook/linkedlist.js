/**
 * 链表的合并
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 *
 * 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
 */

/**
 * 此处先添加 ListNode 的简易实现
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    let values = [];
    let next = this.next;
    while (next && next.val) {
      if (next.val) values.push(next.val);
      next = next.next;
    }
    return values.join("->");
  }
}

// 原作者实现
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode();
  // cur 这里就是咱们那根“针”
  let cur = head;
  // “针”开始在 l1 和 l2 间穿梭了
  while (l1 && l2) {
    // 如果 l1 的结点值较小
    if (l1.val <= l2.val) {
      // 先串起 l1 的结点
      cur.next = l1;
      // l1 指针向前一步
      l1 = l1.next;
    } else {
      // l2 较小时，串起 l2 结点
      cur.next = l2;
      // l2 向前一步
      l2 = l2.next;
    }

    // “针”在串起一个结点后，也会往前一步
    cur = cur.next;
  }

  // 处理链表不等长的情况
  cur.next = l1 !== null ? l1 : l2;
  // 返回起始结点
  return head.next;
};

// 添加测试用例
const head1 = new ListNode();
const linkNode1 = new ListNode(1);
head1.next = linkNode1;
const linkNode2 = new ListNode(2);
linkNode1.next = linkNode2;
const linkNode3 = new ListNode(4);
linkNode2.next = linkNode3;

const head2 = new ListNode();
const linkNode4 = new ListNode(1);
head2.next = linkNode4;
const linkNode5 = new ListNode(3);
linkNode4.next = linkNode5;
const linkNode6 = new ListNode(4);
linkNode5.next = linkNode6;

console.log(head1 + "");
console.log(head2 + "");
console.log(mergeTwoLists(head1.next, head2.next) + ""); // 注意这里,按照原作者的实现要传入两个链表的第一个节点

/**
 * 链表结点的删除
 *
 * 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 * 示例 1:
 * 输入: 1->1->2
 * 输出: 1->2
 * 示例 2:
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 */

// 原作者实现
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while (cur != null && cur.next != null) {
    // 若当前结点和它后面一个结点值相等（重复）
    if (cur.val === cur.next.val) {
      // 删除靠后的那个结点（去重）
      cur.next = cur.next.next;
    } else {
      // 若不重复，继续遍历
      cur = cur.next;
    }
  }
  return head;
};
