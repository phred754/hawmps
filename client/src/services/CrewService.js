
export async function getAllCrew() {
    const response = await fetch('/api/crew');
    return await response.json();
}