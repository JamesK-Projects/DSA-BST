// #3 Create a BST class

class BinarySearchTree{
    constructor(key = null, value = null, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value){
        if(this.key == null){
            this.key = key;
            this.value = value;
        }
        else if(key < this.key){
            if(this.left == null){
                this.left = new BinarySearchTree(key, value, this);
            }
            else{
                this.left.insert(key, value);
            }
        }
        else{
            if(this.right == null){
                this.right = new BinarySearchTree(key, value, this)
            }
            else{
                this.right.insert(key, value)
            }
        }
    }

    find(key){
        if(this.key == key){
            return this.value;
        }
        else if(key < this.key && this.left){
            return this.left.find(key);
        }
        else if(key > this.key && this.right){
            return this.right.find(key);
        }
        else{
            throw new Error('Key Error');
        }
    }

    remove(key){
        if(this.key == key){
            if(this.left && this.right){
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if(this.left){
                this._replaceWith(this.left);
            }
            else if(this.right){
                this._replaceWith(this.right);
            }
            else{
                this._replaceWith(null);
            }
        }
        else if(key < this.key && this.left){
            this.left.remove(key);
        }
        else if(key > this.key && this.right){
            this.right.remove(key);
        }
        else{
            throw new Error('Key Error')
        }
    }

    _replaceWith(node){
        if(this.parent){
            if(this == this.parent.left){
                this.parent.left = node;
            }
            else if(this == this.parent.right){
                this.parent.right = node;
            }
            if(node){
                node.parent = this.parent;
            }
        }
        else{
            if(node){
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else{
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin(){
        if(!this.left){
            return this;
        }
        return this.left._findMin();
    }
}

function main(){
    const BST = new BinarySearchTree();
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

    const BST2 = new BinarySearchTree();
    BST2.insert('E');
    BST2.insert('A');
    BST2.insert('S');
    BST2.insert('Y');
    BST2.insert('Q');
    BST2.insert('U');
    BST2.insert('E');
    BST2.insert('S');
    BST2.insert('T');
    BST2.insert('I');
    BST2.insert('O');
    BST2.insert('N');
    return BST2;
}

//console.log(main())


// #4 What does this program do?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
// goes down the tree 't' and checks if a vlaue exists. If it does, it returns the value and then runs the function again for 
// t.left and t.right, thus repeating itself until it reaches the leaf nodes.


// #5 Height of a BST
const BST = new BinarySearchTree();
    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

function height(tree, n) {
    if(tree === null){
        console.log('error')
        return n-1;
    }
    else {
        return Math.max(height(tree.left, n+1), height(tree.right,n+1))
    }
}

//console.log(height(BST, 1))


// #6 Is it a BST?
function checkIfBST(tree){
    let status = true;
    if(tree === null){
        return status;
    }
    else if(tree.left || tree.right){
        if(tree.right){
            if(tree.right.key <= tree.key){
                status = false;
            }
            else {
                console.log(`go right from ${tree.key}`)
                return checkIfBST(tree.right), checkIfBST(tree.left)
            }
        }
        if(tree.left){
            if(tree.left.key >= tree.key){
                status = false;
            }
            else {
                console.log(`go left from ${tree.key}`)
                return checkIfBST(tree.left), checkIfBST(tree.right)
            }
        }
        
    }
    return status;
}

//console.log(checkIfBST(BST))
// O(n)


// #7 3rd largest node
function thirdLargest(tree){
    let current = tree

    let end
    
    while(current!==null){

        if(current.right===null){
            end=current
            if(current.left!==null){
                end = current.left
                if(current.left!==null){
                    end = current.left
                }
            }
        }
        current = current.right
    }
    
    return end.parent.parent.key
}

//console.log(thirdLargest(BST))


// #8 Balanced BST


// #9 Are they the same BSTs?
function sameBST(arr1, arr2){
    
}
