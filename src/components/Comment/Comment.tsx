import React from 'react'

interface CommentProps {
  message?: string
}

function Comment({
  message = ''
}: CommentProps) {
  return (
    <span>
      안녕하세요, { message }
    </span>
  )
}

export default Comment
