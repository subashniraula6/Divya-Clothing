import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import withSpinner from '../../with-spinner/with-spinner.component'
import CollectionPage from './collection.component'
import {selectIsCollectionLoaded} from '../../../redux/shop/shop.selector'

 
const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(withSpinner(CollectionPage))

export default CollectionPageContainer;