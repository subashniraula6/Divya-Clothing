import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import WithSpinner from '../with-spinner/with-spinner.component' 
import CollectionOverview from './collection-overview.component'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

export default CollectionsOverviewContainer