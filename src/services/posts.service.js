import fs from 'node:fs/promises';

const fileURL = new URL('../../data/posts.json', import.meta.url);

export async function getPosts(){
    const data = await fs.readFile(fileURL, "utf-8");
    const posts = JSON.parse(data);

    return posts; 
};