const tree = { 
    path: '.',
    name: '.',
    children:
    [ { path: 'section1',
        name: 'section1',
        children:
        [ { path: 'section1/se1-chapter1',
            name: 'se1-chapter1',
            children:
            [ { path: 'section1/se1-chapter1/se1-chapter1.md',
                name: 'se1-chapter1.md',
                size: 43,
                extension: '.md',
                type: 'file' } ],
            size: 43,
            type: 'directory' },
            { path: 'section1/se1-chapter2',
            name: 'se1-chapter2',
            children:
            [ { path: 'section1/se1-chapter2/se1-chapter2.md',
                name: 'se1-chapter2.md',
                size: 43,
                extension: '.md',
                type: 'file' },
                { path: 'section1/se1-chapter2/se1-deep-ch2',
                name: 'se1-deep-ch2',
                children:
                    [ { path: 'section1/se1-chapter2/se1-deep-ch2/se1-deep-ch2-file.md',
                        name: 'se1-deep-ch2-file.md',
                        size: 0,
                        extension: '.md',
                        type: 'file' },
                    { path: 'section1/se1-chapter2/se1-deep-ch2/se1-deep-ch2-file2.md',
                        name: 'se1-deep-ch2-file2.md',
                        size: 0,
                        extension: '.md',
                        type: 'file' } ],
                size: 0,
                type: 'directory' } ],
            size: 43,
            type: 'directory' },
            { path: 'section1/se1-chapter3',
            name: 'se1-chapter3',
            children:
            [ { path: 'section1/se1-chapter3/se1-chapter3.md',
                name: 'se1-chapter3.md',
                size: 43,
                extension: '.md',
                type: 'file' } ],
            size: 43,
            type: 'directory' },
            { path: 'section1/se1-file.md',
            name: 'se1-file.md',
            size: 25,
            extension: '.md',
            type: 'file' } ],
        size: 154,
        type: 'directory' },
    { path: 'section2',
        name: 'section2',
        children:
        [ { path: 'section2/se2-chapter1',
            name: 'se2-chapter1',
            children:
            [ { path: 'section2/se2-chapter1/se2-file.md',
                name: 'se2-file.md',
                size: 0,
                extension: '.md',
                type: 'file' } ],
            size: 0,
            type: 'directory' },
            { path: 'section2/se2-chapter2',
            name: 'se2-chapter2',
            children:
            [ { path: 'section2/se2-chapter2/se2-chapter2.md',
                name: 'se2-chapter2.md',
                size: 0,
                extension: '.md',
                type: 'file' },
                { path: 'section2/se2-chapter2/se2-deep-chapter2',
                name: 'se2-deep-chapter2',
                children:
                    [ { path: 'section2/se2-chapter2/se2-deep-chapter2/se2-deep-chapter2-file.md',
                        name: 'se2-deep-chapter2-file.md',
                        size: 0,
                        extension: '.md',
                        type: 'file' } ],
                size: 0,
                type: 'directory' } ],
            size: 0,
            type: 'directory' } ],
        size: 0,
        type: 'directory' } ],
    size: 154,
    type: 'directory'
}

const data = `<start pretty-til>

### Category
- [Python]()
- [Devops]()
- [Git]()

### Python
- [python_basic]()
- [python_basic2]()

### Devops
- [devops_basic]()
- [what_is_devops]()
- #### Kubernetes
	- [k8s_basic]()
	- [what_is_pod]()

### Git
- [git_basic]()`

module.exports = {
    tree, data
}