# 유의사항
## test_directory
- test_directory를 테스트 케이스로 사용
- test_directory는 md 파일이 있을수도 없을수도 있고, depth가 다양함

## diretory-tree
- 옵션을 file 타입 중 .md 파일 확장자만 따로 골라 트리에 담을 수 있다. 
- directory 타입은 모두 담긴다.

## pretty-TIL 현재 상황
- 실행시키고 나면 루트 디렉토리에 RESULT.md로 저장된다.

- RESULT.md가 없다면 새로 생성하고, 이미 존재한다면 기존의 RESULT.md를 삭제 후 생성한다.
- 현재 모든 디렉토리의 url들이 담긴다.
- 코드는 결과위주로 작성된 상태.