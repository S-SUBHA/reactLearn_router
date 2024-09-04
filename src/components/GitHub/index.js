import Github from "./Github.jsx";

export async function githubInfoLoader(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    return response;
}

export default Github;