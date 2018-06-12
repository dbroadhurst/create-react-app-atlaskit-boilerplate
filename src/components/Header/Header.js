import React from 'react'
import PropTypes from 'prop-types'

import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs'

import PageHeader from '@atlaskit/page-header'

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="Some project" key="Some project" />
    <BreadcrumbsItem text="Parent page" key="Parent page" />
  </BreadcrumbsStateless>
)

export default class HeaderComponent extends React.Component {
  static propTypes = {
    testSaga: PropTypes.object
  }

  render() {
    const { message } = this.props.testSaga
    console.log(message)

    return (
      <div>
        <PageHeader breadcrumbs={breadcrumbs}>{`${process.env.REACT_APP_NAME}-v${
          process.env.REACT_APP_VERSION
        }`}</PageHeader>
      </div>
    )
  }
}
