import '../../styles/Container.css'
import { Footer, SideBar, Header } from "..";

const Container = ({children, header, footer, headerActive, active, sideBar}) => {
  return ( 
    <div>
      {header && <Header headerActive={headerActive} active={active} />}
      <div style={{display: sideBar ? 'flex' : ''}}>
        {sideBar && <SideBar active={active} />}
        <div style={{marginTop: sideBar ? 120 : 0}} className={sideBar ? "container container-side" : "container"}>{children}</div>
      </div>
      {footer && <Footer />}
    </div>
   );
}
 
export default Container;