import { useAppDispatch } from "../../app/hooks";
import { reactionAdded } from "./postSlice";


const reactionEmoji ={
    thumbsUp:'👍',
    wow: '😲 ',
    heart:'🩷',
    rocket:'🚀',
    coffee:'🍵'
}

interface ReactionButtonProps {
    post: {
        id: string;
        reactions: {
            thumbsUp: number;
            wow: number;
            heart: number;
            rocket: number;
            coffee: number;
        };
    };
}

const ReactionButton = ({post}: ReactionButtonProps) => {
    const dispatch = useAppDispatch()

    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => {dispatch(reactionAdded({postId: post.id, reaction: name as keyof typeof post.reactions}))}}
            >
                {emoji} {post.reactions[name as keyof typeof post.reactions]}
            </button>
          )         
    })

    return(
        <div>{reactionButton}</div>
    )

}

export default ReactionButton
