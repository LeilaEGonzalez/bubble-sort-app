import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollections } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollections = new CharactersCollections("Xaayb");
// charactersCollections.sort();
// console.log(charactersCollections.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
