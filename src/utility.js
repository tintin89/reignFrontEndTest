export const isFavorite = (title) =>{
    return JSON.parse(localStorage.getItem("favorites")).includes(title)
}