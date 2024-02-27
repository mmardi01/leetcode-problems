
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
 
    let head = new ListNode();
    let rest : number = 0; 
    let it = head;
    while(l1 || l2) {
        if (l1 && l2 && (l1.val + l2.val + rest < 10)) {
            it.val = l1.val + l2.val + rest;
            rest = 0;
            l1 = l1?.next;
            l2 = l2?.next;
           
        }
        else if (l1 && l2 && (l1.val + l2.val + rest >= 10)) {
            it.val = (l1.val + l2.val - 10) + rest;
            rest = 1;
            l1 = l1?.next;
            l2 = l2?.next;
        }
        else if (l1) {
            if (l1.val + rest < 10) {
                it.val = l1.val + rest;
                rest = 0;
            }
            else {
                it.val = (l1.val + rest) - 10;
                rest = 1;
            }
            l1 = l1?.next;
        }
        else if (l2) {
            if (l2.val + rest < 10) {
                it.val = l2.val + rest;
                rest = 0;
            }
            else {
                it.val = (l2.val + rest) - 10;
                rest = 1;
            }
            l2 = l2?.next;
        }
        if (l1 || l2) {
            it.next = new ListNode();
            it = it.next
        }
    }
    if (rest) {
        it.next = new ListNode()
        it = it.next
        it.val = rest;
    }
        
    return head;
};
    
    const n = new ListNode(9);
    n.next = new ListNode(9);
    n.next.next = new ListNode(9);
    
    const d = new ListNode(9);
    d.next = new ListNode(9);
    d.next.next = new ListNode(9);
    // d.next.next.next = new ListNode(9);
    // d.next.next.next.next = new ListNode(9);
    // d.next.next.next.next.next = new ListNode(9);
    let head = addTwoNumbers(n,d);
    
    while (head) {
        console.log(head.val);
        head = head.next;
    }
