export async function authenticateUser() {
    const response = await fetch('/api/auth');
    return await response.json();
}
