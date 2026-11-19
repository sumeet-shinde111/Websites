// import logo from '../../../public/images/logo/White-logo.svg';
import logo from '../../../public/images/logo/White-logo.webp';
import "./Header.css";

const links = [
  {
    name:"Home",
    href:"home",
    className:"homeLink"
  },
  {
    name:"Work",
    href:"Work",
    className:"workLink"
  },
  {
    name:"Services",
    href:"services",
    className:"servicesLink"
  },
  {
    name:"About us",
    href:"about_us",
    className:"aboutUsLink"
  },
  {
    name:"Contact Us",
    href:"contact",
    className:"contactLink"
  },
]

export const Header = ()=>{
    return(
       
            <div className="headerContainer">
                <div className = "logoContainer">
                    <a href={""} className="logo">
                        <img src={logo} alt='Logo' className='logoImage'></img>
                    </a>
                </div>
                
                <nav className='linkContainer'>
                  {
                    links.map((value,index)=>{
                      return(
                        <a href ={`#${value.href}`} className={`link ${value.className}`} key = {index}>{value.name} </a>
                      )
                    })
                  }
                </nav> 
                
            </div>
          
    ) 
}


