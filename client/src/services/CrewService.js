
export async function getAllCrew(searchCriteria) {
    const response = await fetch('/api/crew/?searchCriteria=' + encodeURIComponent(searchCriteria));
    return await response.json();
}