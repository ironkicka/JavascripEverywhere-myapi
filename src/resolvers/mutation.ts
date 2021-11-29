import {MutationResolvers} from "../generated/graphql";

const Mutation:MutationResolvers = {
    newNote:async(parent,args,{models})=>{
        return await models.Note.create({
            content:args.content,
            author:'Adam Scott'
        })
    }
}

export {
    Mutation
};