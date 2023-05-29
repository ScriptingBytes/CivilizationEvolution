function addStone() {
    const ResourcesList = GameStorage.Resources
    const value = 1

    if (ResourcesList.include("Stone")) {
        ResourcesList.Stone = ResourcesList.Stone + value
    } else {
        ResourcesList.push("Stone");
        ResourcesList.Stone = ResourcesList.Stone + value
    }
}
// No idea if this is going to work