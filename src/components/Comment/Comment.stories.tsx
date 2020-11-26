import React from 'react'
import Comment from './Comment'

export default {
  title: 'Comment',
  component: Comment,
}

const Template = (args) => (
  <Comment {...args}/>
)

export const Primary = Template.bind({})
Primary.args = {
  message: 'appleseed',
}
