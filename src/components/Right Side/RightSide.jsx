import React from 'react'
import './RightSide.css';
export default function RightSide() {
  return (
    <div className="quiz-options">
        <div className="quiz-option">
          <span className="icon">👨‍💻</span> HTML
        </div>
        <div className="quiz-option">
          <span className="icon">🎨</span> CSS
        </div>
        <div className="quiz-option">
          <span className="icon">📜</span> JavaScript
        </div>
        <div className="quiz-option">
          <span className="icon">♿</span> Accessibility
        </div>
    </div>
  )
}
