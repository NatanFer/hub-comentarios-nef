class Comment {
    constructor(id, author, comment_text,
        created_at, update_at) {
        if (id !== undefined, author !== undefined, comment_text !== undefined,
            created_at !== undefined, update_at !== undefined) {


            this.id = id;
            this.author = author;
            this.comment_text = comment_text;
            this.created_at = created_at;
            this.update_at = update_at;
        } else if (author !== undefined, comment_text !== undefined) {
            this.id == null;
            this.author = author;
            this.comment_text = comment_text;
            this.created_at = created_at;
            this.update_at = update_at;
        } else {
            this.id = null;
            this.author = null;
            this.comment_text = null;
            this.created_at = null;
            this.update_at = null;
        }
    }

    getId() {
        return this.id;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(value) {
        this.author = value;
    }

    getCommentText() {
        return this.comment_text;
    }

    setCommentText(value) {
        this.comment_text = value;
    }
    getCreatedAt() {
        return this.created_at;
    }

    getUpdateAt() {
        return this.update_at;
    }



}

export { Comment }