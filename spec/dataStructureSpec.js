const expect = require('chai').expect;
const linkedListMiddleFinder = require('../data_structures/middleLinkedList').linkedListMiddleFinder;

describe('linkedListMiddleFinder', () => {
    
  it('should be a function', () => {
    expect(linkedListMiddleFinder).to.be.a('function');
  });
  
  it('should return the middle of the linkedlist', () => {
    const LinkedList = () => {
      const list = {};
      list.head = null;
      list.tail = null;

      list.addToTail = value => {
        const newNode =  Node(value);

        if (list.head === null) {
          list.head = newNode;
          list.tail = newNode;
        }

        list.tail.next = newNode;

        list.tail = newNode;

      };

      list.removeHead = () => {

        if (list.head === null) {
          return null;
        }

        const result = list.head.value;

        const deleteNode = list.head;

        list.head = list.head.next;

        delete deleteNode;

        return result;

      };

      list.contains = target => {

        const truth = false;

        const recurse = node => {
          if (node.value === target) {
            truth = true;
          } else if (node.next === null) {
            truth = false;
          } else {
            recurse(node.next);
          }
        }

        recurse(list.head);

        return truth;

      };

      return list;
    };

    const Node = value => {
      const node = {};

      node.value = value;
      node.next = null;

      return node;
    };    
    
    const linkedList = LinkedList();
    
    linkedList.addToTail('Hello');
    linkedList.addToTail('21');
    linkedList.addToTail('Green');
    linkedList.addToTail('Blue');
    linkedList.addToTail('Ethan');
    
    const linkedListMiddleFinderTest = linkedListMiddleFinder(linkedList);
    expect(linkedListMiddleFinderTest).to.equal('Green');
  });
        
});