export const isFavorite = (id) =>{
    if(localStorage.getItem("favorites"))
    return JSON.parse(localStorage.getItem("favorites")).includes(id)
}