class Site {
    constructor () {
        this.boards = [];
    };

    addBoard(board) {
        if (this.boards.find(boards => boards.name === board.name))
            throw new Error('중복된 board가 있습니다.');
        board.added = true;
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find(boards => boards.name === name);
    }

}

class Board {
    constructor(name) {
    if(name === ''|| name === null){
        throw new Error('빈 문자열이나 null은 허용되지 않습니다.')
    }
    this.name = name;
    this.added = false;
    this.articles = [];
    }
    publish(article) {
        if(this.added===false){
            throw new Error('추가된 Board만 Article을 추가할 수 있습니다.')
        }
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        article.added = true;
        this.articles.push(article);
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article){
        const{subject, content, author} = article;
        if(subject === ''||subject === null){
             throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
            }
        if(content === ''||content === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        if(author === ''||author === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.added = false;
        this.comments = [];
    }
    reply(comment){
        if(this.added === false){
            throw new Error('comment를 추가할 수 없습니다.')
        }
        comment.createdDate = new Date().toISOString();
         this.comments.push(comment);
    }
    getAllComments(){
        return this.comments;
    }


}

class Comment {
    constructor(comment){
        const{content, author} = comment;
        if(content === ''||content === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        if(author === ''||author === null){
            throw new Error('null 또는 빈 문자열("")은 허용하지 않는다')
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};