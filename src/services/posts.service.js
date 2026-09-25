import fs from 'node:fs/promises';

const fileURL = new URL('../../data/posts.json', import.meta.url);

export async function getPosts(){
    const data = await fs.readFile(fileURL, "utf-8");
    const posts = JSON.parse(data);

    return posts; 
};

export async function getPostByID(id){
    const posts = await getPosts();
    const post = posts.find((post) => post.id === id);

    return post;
}

export async function createPost(postData){
    const posts = await getPosts();
    const id = posts.length == 0? 1 : posts[posts.length-1].id + 1;
    const date = new Date().toISOString();
    const post = {
        ...postData,
        id,
        createdAt: date,
        updatedAt: date
    }

    posts.push(post);
    await fs.writeFile(fileURL, JSON.stringify(posts, null, 2));
    return post;
}

export async function updatePost(id, updateData){
    const posts = await getPosts();
    const indexPost = posts.findIndex((post) => post.id === id);

    if(indexPost < 0) return null;
    
    const updatedPost = {
        ...posts[indexPost],
        ...updateData,
        updatedAt: new Date().toISOString()
    }


    posts[indexPost] = updatedPost;
    await fs.writeFile(fileURL, JSON.stringify(posts, null, 2));
    
    return updatedPost;
    
}