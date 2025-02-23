import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {sub} from 'date-fns'

interface post{
    id: string;
    title: string;
    content: string;
    userId: string;
    date: string;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
}
interface postState{
    posts: post[]
}

const initialState:postState = {
    posts: [
        {
            id: '1',
            title:'Learning Redux Tooklit', 
            content:"i've heard good things", 
            userId:'', 
            date: sub(new Date(), {minutes: 10}).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket:0,
                coffee:0
            }
        },
        {
            id: '2', 
            title:'Slices....', 
            content:"The more i slice, the more i want pizza", 
            userId:'', 
            date: sub(new Date(), {minutes: 5}).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket:0,
                coffee:0
            }
        }   
    ]
}

 const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state, action: PayloadAction<post>){
                state?.posts.push(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content, 
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action: PayloadAction<{ postId: string; reaction: keyof post['reactions'] }>){
               const {postId, reaction} = action.payload
               const existingPost  = state?.posts.find((post) => post.id === postId) 
               if (existingPost){
                existingPost.reactions[reaction]++
               }
        }
    }
    
})


export const selectPost = (state: RootState) => state.postReducer.posts

export const {postAdded, reactionAdded} =postSlice.actions
export default postSlice.reducer


