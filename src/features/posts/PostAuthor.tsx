import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../users/usersSlice'

interface PostAuthorProps {
  userId: string; // Define userId prop here
}

const PostAuthor = ({userId}:PostAuthorProps) => {
  const users = useAppSelector(selectUser);

  const author = users.find(user => user.id === userId)
  return (
    <span>
      {author ? author.name : 'unknown author'} 
    </span>
  )
}

export default PostAuthor