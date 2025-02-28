const months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

export const getDate = () => {
    const date = new Date();
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}