import React, {useEffect, useState} from 'react'
import './NavBar.css';
const NavBar = (props) => {
    const {setQuery} = props
    const [scroller, setScroller] = useState(false)


    const handleOnchange=(event)=>{
        setQuery(event.target.value)
    }

    const [scrollY, setScrollY] = useState(0);
    console.log('scrollY =>>>', scrollY)
    function logit() {
        setScrollY(window.pageYOffset);
      }
    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        if(scrollY >80){
            setScroller(true)
        } else {
            setScroller(false)
        }
        return () => {
          window.removeEventListener("scroll", logit);
        };
      },[scrollY]);
    return (
        <div className={`navbarContainer ${scrollY >80?'changeNavbar':'navbarContainer'}`} id="scroller">
            <div className="navbarBrand">   
                {/* <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="logo" /> */}
                <h1 className="brandName">React Movie</h1>
            </div>
            <div className="navbarSearch">
                <div className="searchInput">
                    <input className="inputBar" type="text" placeholder="Nhập tên phim..." onChange={handleOnchange}/>
                </div>
            </div>
            <div className= "navbarLogin">
                <div className={`navLogin ${scrollY >80?'changeLoginColor':'navLogin'}`}>Đăng nhập</div>
            </div>
        </div>
    )
}

export default NavBar;