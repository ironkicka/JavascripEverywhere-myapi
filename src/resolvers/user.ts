import {UserResolvers} from "../generated/graphql";

const User:UserResolvers={
    notes:async (user,args,{models})=>{
        return models.Note.find({author:user.id}).sort({id:-1});
    },
    favorites:async (user,args,{models})=>{
        return models.Note.find({favoritedBy:user.id}).sort({id:-1});
    }
}

export {
    User
};