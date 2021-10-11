export async function authenticateUser(payload) {
    const response = await fetch('/api/auth',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Username': payload.username,
            'Pass': payload.pass
        }
    });
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

export async function logout(payload) {
    const response = await fetch('/api/user',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Username': payload.username
        }
    });
    return await response.json();
}