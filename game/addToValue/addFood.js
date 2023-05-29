function addFood() {
    const ResourcesList = GameStorage.Resources
    const value = 1

    if (ResourcesList.include("Food")) {
        ResourcesList.Food = ResourcesList.Food + value
    } else {
        ResourcesList.push("Food");
        ResourcesList.Food = ResourcesList.Food + value
    }
}
// No idea if this is going to work