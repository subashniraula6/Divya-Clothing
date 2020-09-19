import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview  from '../preview-collection/collection-preview'

import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

const CollectionOverview = ({collection}) => {
    return (
        <div className="collection-overview">
            {collection.map(({ id, ...otherCollectionProps }) =>
                <CollectionPreview key={id}
                    {...otherCollectionProps}
                />
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection : selectCollectionForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview)