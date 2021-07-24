import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), "posts")

export function getSortedPosts() {
    const fileNames = fs.readdirSync(postDirectory)
    const posts = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postDirectory, fileName)
        const postContent = fs.readFileSync(fullPath, "utf-8")
        const matterDetails = matter(postContent)
        return {
            slug,
            ...matterDetails.data
        }
    })
    return posts.sort((a, b) => {
        return a.date < b.date ? 1 : -1
    })
}

export function getPostSlugs() {
    const fileNames = fs.readdirSync(postDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(slug) {
    const fullPath = path.join(postDirectory, `${slug}.md`)
    const content = fs.readFileSync(fullPath, 'utf-8')
    const matterDetails = matter(content)
    const processedData = await remark()
        .use(html)
        .process(matterDetails.content)
    const htmlData = processedData.toString()
    return {
        slug,
        htmlData,
        ...matterDetails.data
    }
}