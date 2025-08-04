import React from 'react'

const MessageBubble = ({ content, time, isMine }) => {
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
      <div className={`rounded-lg px-4 py-2 max-w-xs ${isMine ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-700'}`}>
        <span>{content}</span>
        <span className="block text-xs text-right text-gray-400 mt-1">{time}</span>
      </div>
    </div>
  )
}

export default MessageBubble
