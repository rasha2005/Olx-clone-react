
export const createValidation = (name, category, price, place, description) => {

    const validName = /^[a-zA-Z ]{2,30}\d*$/.test(name);
    const validCategory = /^[a-zA-Z ]{2,30}$/.test(category);
    const validPrice = /^0$|^[1-9]\d*$/.test(price);
    const validPlace = /^[a-zA-Z ]{2,30}$/.test(place);  // Changed from 'location' to 'place'
    const validDescription = description.trim().length > 0 && description.trim().length <= 500;

    if (!validName || !name.trim()) return "Please Enter a valid name";
    if (!validCategory || !category.trim()) return "Please Enter a valid category";  // Changed from 'name' to 'category'
    if (!validPrice || !price.trim()) return "Please Enter a valid price";  // Changed from 'name' to 'price'
    if (!validPlace || !place.trim()) return "Please Enter a valid location";  // Changed from 'name' to 'place'
    if (!validDescription) return "Please Enter a valid description (1-500 characters)";

    return null;
}