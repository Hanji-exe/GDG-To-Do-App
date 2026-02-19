import sparkyLogo from '../assets/sparky.png';

function Header({ taskCount, currentDate }) {
  return (
    <div className="header-card">
      <div className="header-content">
        <div className="header-left">
          {/* Sparky Logo */}
          <div className="bot-logo">
            <img src={sparkyLogo} alt="Sparky Bot" />
          </div>
          
          <div className="header-info">
            <h2>{taskCount} {taskCount === 1 ? 'Task' : 'Tasks'}</h2>
            <p className="header-date">{currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
