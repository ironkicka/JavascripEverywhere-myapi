import {QueryResolvers} from "../generated/graphql";

const Query:QueryResolvers ={
    notes:async(parent,args,{models})=>{
        return models.Note.find();
    },
    note:async(parent,args,{models})=>{
        return models.Note.findById(args.id)
    },
    user:async (parent,{username},{models})=>{
        return await models.User.findOne({username});
    },
    users:async (parent,args,{models})=>{
        return await models.User.find({})
    },
    me:async (parent,args,{models,user})=> {
        return models.User.findById(user.id);
    }
}

export {
    Query
};