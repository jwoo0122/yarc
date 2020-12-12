import React from 'react'
import { client } from '../../api'

interface CommentProps {
  message?: string
}

function Comment({
  message = ''
}: CommentProps) {
  const [comments, setComments] = React.useState<Array<string>>([])
  
  React.useEffect(() => {
    client.issues.get({
      owner: 'jwoo0122',
      repo: 'leo.works',
      issue_number: 46,
    }).then(({ data }) => {
      console.log(data.body)
      setComments([data.body])
    })
  }, [])
  
  const renderComments = React.useMemo(() => (
    comments.map(comment => (
      <span key={comment}>
        { comment }
      </span>
    ))
  ), [comments])
  
  return (
    <>
      { renderComments }
    </>
  )
}

export default Comment
