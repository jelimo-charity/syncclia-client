import Sidenav from "./Sidenav"
import Mainnav from "./Mainnav"
import './action.css'
function Action() {
  return (
    <div className="action-box">
        {/* sidenav  */}
        <div className="sidenav">
            <Sidenav/>
        </div>
        
        {/* mainnav  */}
        <div className="mainnav">
            <Mainnav/>
        </div>
      
      
    </div>
  )
}

export default Action
