import {MutationResolvers} from "../generated/graphql";

const Mutation:MutationResolvers = {
    newNote:async(parent,args,context)=>{
        return await context.models.Note.create({
            content:args.content,
            author:'Adam Scott'
        })
    }
}

export {
    Mutation
};