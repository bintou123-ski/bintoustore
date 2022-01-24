import React from 'react';
import "../TopMenu/topmenu.scss";

const menu=['Home','Women','Men','About us','Contact'];

function TopMenu() {
  return <div>
        <header className="menuHeader">
            <div className="container-fluid">
                <div className="row">
                    <div clasName="col-xl-12  col-lg-12">
                        <nav className="menu">
                            <ul>
                                {menu.map((item,index)=>
                                <li key={index}>
                                    <a href="#">{item}</a>
                                </li>
                               )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
  </div>;
}

export default TopMenu;
