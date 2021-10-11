
export async function getAllCrew(searchCriteria, jwt) {
    const response = await fetch('/api/crew/?searchCriteria=' + encodeURIComponent(searchCriteria),{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        }
    });
    return await response.json();
}

export async function getCrewData(id, jwt) {
    const response = await fetch('/api/member/?id=' + encodeURIComponent(id),{
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwt
        }
    });
    return await response.json();
}