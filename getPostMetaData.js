import fs from "fs"
import matter from "gray-matter"

export default function getPostMetaData(basePath){
    const folder = basePath + "/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith(".md"))
    
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)
        const keys = Object.keys(matterResult.data)
        const obj = {}
        keys.forEach((key)=>{
            
            obj[key] = matterResult.data[key] 
        })
        return obj
        
    })
    return posts 
}

export function getSinglePostMetaData(basePath, fileName){
    const folder = basePath + "/"
    const files = fs.readdirSync(folder)
    const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    const keys = Object.keys(matterResult.data)
    const obj = {}
    keys.forEach((key)=>{
        
        obj[key] = matterResult.data[key] 
    })
    return obj
    
}