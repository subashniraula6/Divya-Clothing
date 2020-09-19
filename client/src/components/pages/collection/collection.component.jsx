import React from 'react'

import { connect } from 'react-redux'
import { selectCollection } from '../../../redux/shop/shop.selector'

import CollectionItem from '../../../components/collection-item/collection-item.component'

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionTitle>
                <h1> {title} </h1>
            </CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map((item) =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}
const mapStateToProps = (state, ownProps) => ({
    //collection : ownProps
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps, null)(CollectionPage);

//export default CollectionPage