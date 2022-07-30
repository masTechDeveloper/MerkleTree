const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let whitelistAddress = [
  "0x46c669b59bD12A87A55a91cF7cb5bD87840B3002",
  "0x97FA19643E35e66ec4cf15c483e3336217A58E12",
  "0x49f4d5778E7D14A3560407076de4E0dD2ec5DeD4",
  "0x4635B7475fD34de3D9f54359070a6755Ce0695b7",
];

const leafNode = whitelistAddress.map((_add) => keccak256(_add));
// console.log("Leaf Node" + leafNode);

const merkleTree = new MerkleTree(leafNode, keccak256, { sortPairs: true });
// console.log(merkleTree);

// Get Root Hash

const rootHash = merkleTree.getRoot();
console.log("Root Hash is String = \n" + merkleTree.toString());

console.log("Root Hash Buffer = " + rootHash);
