import { useState } from "react";
import Comment from "../../styles/ui/comment";
import CommentTile from "../comment-tile";
import { CommentInputSection, CommentListSection, Container } from "./styles";

const CommentTool = ({ comments = [], onComment }) => {
    const [comment, setComment] = useState('');

    const onSend = () => {
        onComment(comment);
    }

    return (
        <Container>
            <CommentListSection>
                {comments.map(comment => (
                    <CommentTile key={comment.id} comment={comment} />
                ))}
            </CommentListSection>
            <CommentInputSection>
                <Comment text={comment} setText={setComment} onSend={onSend} />
            </CommentInputSection>
        </Container>
    );
}

export default CommentTool;