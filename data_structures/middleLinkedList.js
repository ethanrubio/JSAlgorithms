module.exports = {
  
  linkedListMiddleFinder: linkedList => {
        
    let fastPointer = linkedList.head;
    let slowPointer = linkedList.head;
    
    while (fastPointer.next !== null && fastPointer.next.next !== null) {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    
    return slowPointer.value;
  }
  
  
};