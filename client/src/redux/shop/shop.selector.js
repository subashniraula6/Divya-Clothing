import { createSelector } from 'reselect'

export const selectShop = state => state.shop;
/*
export const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
*/
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map((key) =>
        collections[key]) : []
)
/*
export const selectCollection = collectionUrlParam => {
    return createSelector( //OOps I again forgot 'return' here
        [selectCollections],
        collections =>
            collections.find((collection) =>
                collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    )
}
*/
/*Data Normalization- is the process of storing large amount of data in Objects rather than Array
bacause to access elements of array we have to iterate all elements but in object we can access single 
element using its Key i.e. obj[key] / obj.key
*/

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
}     

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)