import { useEffect, useRef, useState } from "react";
import Comment from "../../styles/ui/comment";
import CommentTile from "../comment-tile";
import { CommentInputSection, CommentListSection, Container, Dummy } from "./styles";

const CommentTool = ({ comments = [], onComment }) => {
    const commentList = useRef();
    const dummyRef = useRef();
    const [comment, setComment] = useState('');

    const onSend = async () => {
        if (comment.trim().length === 0)
            return;
        
        try {
            await onComment(comment);
            setComment('');
        } catch (err) {
            throw err;
        }
    }

    const scrollToBottom = () => {
        const scrollHeight = commentList.current.scrollHeight;
        const height = commentList.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        commentList.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    useEffect(() => {
        scrollToBottom();
    }, [comments]);

    return (
        <Container>
            <CommentListSection ref={commentList}>
                {comments.map(comment => (
                    <CommentTile key={comment.id} comment={comment} />
                ))}
                <Dummy key={'dummy'} ref={dummyRef} />
            </CommentListSection>
            <CommentInputSection>
                <Comment
                    text={comment}
                    setText={setComment}
                    disabled={comment.trim().length === 0}
                    onSend={onSend}
                />
            </CommentInputSection>
        </Container>
    );
}

export default CommentTool;