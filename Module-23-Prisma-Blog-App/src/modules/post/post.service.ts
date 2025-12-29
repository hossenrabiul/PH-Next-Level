import { prisma } from "../../lib/prisma"

const createPost = async (body)=>{
   
    const data = {
        title : body.title,
        content : body.content,
        tags : body.tags,
        authorId : body.authorId
    }
    const  result = await  prisma.post.create({data})
    return result
}
export const postServices = {
    createPost
}