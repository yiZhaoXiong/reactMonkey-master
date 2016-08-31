
import React from 'react';
import  {Link} from  'react-router';
export  default class Top extends React.Component {
    render() {
        return (
            <div id="header">
               <div className="top-login">
                    <span className="left">欢迎光临民生金融融资平台！请<Link to={'/'}> 登录 </Link>或<Link to={'/'}> 注册</Link></span>
                    <span className="right"><Link to={'/'}>帮助中心</Link> | <Link to={'/'}>联系我们</Link></span>
                </div>
                <div className="hd">
                    <div id="logo" className="w1200">
                        <div className="left" style={{height:'69px;'}}>
                            <span><img src="../static/images/logo.jpg"/></span><span id="logo-msjr">民生金融</span>
                        </div>
                        <div className="menu-top-nav">
                    <span>
                        <ul>
                            <li><Link to={'/'}>首页</Link> </li>
                            <li><Link to={'/CreditPermissionCheck'}>安全保障</Link> </li>
                            <li><Link to={'/'}>新手指引</Link> </li>
                            <li><Link to={'/'}>帮助中心</Link> </li>
                            <li><Link to={'/'}>关于我们</Link> </li>
                        </ul>
                    </span>
                        </div>
                        <div className="right"><span><Link to={'/'}>我的账户</Link> </span></div>
                    </div>
                </div>
            </div>
        )
    }
}

