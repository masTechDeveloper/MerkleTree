const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const { USERS } = require("../wl");

let whitelistAddress = USERS;

async function generateRootHash() {
  const leafNode = whitelistAddress.map((_add) => keccak256(_add));
  // console.log("Leaf Node" + leafNode);

  const merkleTree = new MerkleTree(leafNode, keccak256, { sortPairs: true });
  // console.log(merkleTree);

  // Get Root Hash
  const rootHash = merkleTree.getRoot();
  console.log("Root Hash   \n \n" + merkleTree.toString("hex"));

  // console.log("Root Hash Buffer = \n" + rootHash);
}

module.exports = { generateRootHash };
