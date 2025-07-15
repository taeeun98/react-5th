import React from "react"

function Child({ message }: { message: string }) {
  return (
    <p>{message}</p>
  )
}

export default React.memo(Child)
