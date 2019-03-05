const {dirToTree, treeToData, writeReadmeFile} = require('../main')
const stub = require('./stub')
const should = require('should')

describe('Test dirToTree function', () => {
    const stub = stub.tree

    describe('If it success', () => {
        const result = dirToTree('./test_directory', /\.md/, [/node_modules/, /README.md/])
        result.should.be.instanceOf(Object)
        stub.tree.children.should.be.equal(result.children)
        stub.tree.children.should.have.length(result.children.length)
    })

    describe('If it fails', () => {

    })
})

describe('Test treeToData function', () => {
    const stub = stub.data

    describe('If it success', () => {
        const result = treeToData()
        result.should.be.instanceOf(String)
    })

    describe('If it fails', () => {
        
    })
})

describe('Test writeReadmeFile function', () => {
    describe('If it success', () => {

    })

    describe('If it fails', () => {
        
    })
})