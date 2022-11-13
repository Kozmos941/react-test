import React from 'react'

export default class DButton extends React.Component {
  render() {
    return (
      <button
        className="absolute top-0 left-0 w-20 h-20 font-sans font-semibold text-[0.9rem] border-2"
      >
        Save As Image
        <div>{'...'} MB</div>
      </button>
    )
  }
}

