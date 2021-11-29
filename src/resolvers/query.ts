import {QueryResolvers} from "../generated/graphql";

const Query:QueryResolvers ={
    notes:async(parent,args,context)=>{
        return context.models.Note.find();
    },
    note:async(parent,args,context)=>{
        return context.models.Note.findById(args.id)
    }
}

export {
    Query
};