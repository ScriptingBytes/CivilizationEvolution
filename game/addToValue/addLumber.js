function addLumber() {
    const ResourcesList = GameStorage.Resources
    const value = 1

    if (ResourcesList.include("Lumber")) {
        ResourcesList.Lumber = ResourcesList.Lumber + value
    } else {
        ResourcesList.push("Lumber");
        ResourcesList.Lumber = ResourcesList.Lumber + value
    }
}
// No idea if this is going to work