import './Toggle.css'
import sun from '../../ima/sun.png'
import moon from '../../ima/moon.png'
import { useContext } from "react";
import { ThemeContext } from "../../Context";
export const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
      theme.dispatch({ type: "TOGGLE" });
    };
  return (
    <div className='t'>
    <img src={sun} alt=""  className='t-icon'/>
    <img src={moon} alt=""  className='t-icon'/>
    <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}
