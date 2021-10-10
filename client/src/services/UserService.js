export async function authenticateUser() {
    const response = await fetch('/api/auth');
    return await response.json();
}

export async function createUser(payload) {
    const response = await fetch('/api/user',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Username': payload.username,
            'Pass': payload.pass
        }
    });
    return await response.json();
}