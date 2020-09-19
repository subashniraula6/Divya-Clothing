import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

import { selectDirectorySection } from '../../redux/directory/directory-selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const Directory = ({ Sections }) => {
    return (
        <div className="directory-menu">
            {Sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem key={id} {...otherSectionProps} 
                />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    Sections: selectDirectorySection
})

export default connect(mapStateToProps, null)(Directory);