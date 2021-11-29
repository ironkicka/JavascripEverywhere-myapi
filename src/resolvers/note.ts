import {NoteResolvers} from "../generated/graphql";

const Note:NoteResolvers ={
    author:async (note,args,{models})=>{
        return models.User.findById(note.author)
    },
    favoritedBy:async (note,args,{models})=>{
        return models.User.find({_id:{$in:note.favoritedBy}})
    }
}

export {
    Note
};