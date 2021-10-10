
export async function getAllCrew(searchCriteria) {
    const response = await fetch('/api/crew/?searchCriteria=' + encodeURIComponent(searchCriteria));
    return await response.json();
}

export async function getCrewData(id) {
    const response = await fetch('/api/member/?id=' + encodeURIComponent(id));
    return await response.json();
}