import React from 'react'

/// TODO: Adapt interface for Material
export interface MaterialInterface {
  props?: any /// refactor to appropriate (destructured) props
  style?: React.CSSProperties | any
  type?: string
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
  testID?: string
}
