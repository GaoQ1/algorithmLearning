function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
  var root = this.root;

  if(!root){
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while(currentNode){
    if(val < currentNode.value){
      if(!currentNode.left){
        currentNode.left = newNode;
        break;
      }else{
        currentNode = currentNode.left;
      }
    }else{
      if(!currentNode.right){
        currentNode.right = newNode;
        break;
      }else{
        currentNode = currentNode.right;
      }
    }
  }
}

function inorder(node){
  if(node){
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
}

function preOrder(node){
  if(node){
    console.log(node.value);
    inorder(node.left);
    inorder(node.right);
  }
}

function postOrder(node){
  if(node){
    inorder(node.left);
    inorder(node.right);
    console.log(node.value);
  }
}

function getMin(node){
  if(!node){
    return 0;
  }
  if(node.left){
    return getMin(node.left)
  }
  return node.value
}

function getMax(node){
  if(!node){
    return 0;
  }
  if(node.right){
    return getMax(node.right)
  }
  return node.value
}

function height(node){
  if(!node){
    return 0;
  }else{
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}




var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);
