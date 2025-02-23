import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postAdded } from './postSlice';
import { selectUser } from '../users/usersSlice';

const AddPost: React.FC = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(selectUser)

    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)
    const onUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => setUserId(e.target.value)

    const onSavePost = () => {
        if(title && content){
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('');
            setContent('')
        }
    }

    const userOption = users.map((user) => {
        return(
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        )
    })

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title:</label>
            <input
                id='postTitle'
                type='text'
                name='postTitle'
                value={title}
                onChange={onTitleChange}
            />

            <label htmlFor='postAuthor'>Author:</label>
            <select value={userId} id='postAuthor' onChange={onUserChange}>
                <option value=''></option>
                {userOption}
            </select>

            <label htmlFor='postContent'>Post Content:</label>
            <input
                id='postContent'
                type='text'
                name='postContent'
                value={content}
                onChange={onContentChange}
            />
            <button 
            type='button' 
            onClick={onSavePost}
            disabled={!canSave }
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPost