import fs from 'node:fs/promises';

export async function getPosts(){
    const data = await fs.readFile("././data/posts.json", "utf-8");
    const posts = JSON.parse(data);

    return posts; 
};