import {QueryResolvers} from "../generated/graphql";

const Query:QueryResolvers ={
    notes:async(parent,args,{models})=>{
        return models.Note.find();
    },
    note:async(parent,args,{models})=>{
        return models.Note.findById(args.id)
    }
}

export {
    Query
};