const fs = require('fs');
const dirTree = require("directory-tree");

const searchTreeAndWriteFile = (element) => {
    if (element.children != null) {
        let result = null;
        
        fs.appendFileSync('./RESULT.md', element.path + '\n', function (err) { // 비동기로 할 시 작성 순서가 달라짐
            if (err) throw err;
        });
        console.log(element.path);
        console.log('작성 완료');

        for (let i = 0; result == null && i < element.children.length; i++) {
            result = searchTreeAndWriteFile(element.children[i]);
        }

        return result;
    }
    return null;
}

const makingREADME = (filteredTree) => {
    fs.readdir('./', (err, dir) => {
        if (err) {
            throw err;
        }
        console.log('폴더 내용: ', dir);

        // 이미 루트폴더에 RESULT.md가 존재한다면 RESULT.md 파일을 삭제.
        fs.unlink('RESULT.md', (err) => {
            if (err) {
                return;
            }
            console.log("삭제 완료!")
        });

        // 새 readme 생성
        fs.writeFile('./RESULT.md', '', 'utf8', (err) => {
            console.log('README 생성!')
        });

        //경로 탐색하면서 RESULT.md에 추가
        searchTreeAndWriteFile(filteredTree);
    });
}

const testDir = dirTree("./test_directory", { extensions: /\.md/, exclude: /node_modules/ }); // .md 파일만 트리에 저장, 디렉토리 타입도 트리에 저장된다.
makingREADME(testDir);