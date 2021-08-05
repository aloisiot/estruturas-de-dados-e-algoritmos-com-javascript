// @ts-check

const { defaultEquals } = require('../util')
const Node = require('./models/Node')


function LinkedList(equalsFn=defaultEquals){

    let _count=0;
    let _header=undefined;
    const isEqual=equalsFn;
}