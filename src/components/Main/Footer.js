import classes from './Footer.module.css';
import logo from '../../assets/logo.png'


const Footer = () => {

    return <footer className={classes.footer_container} id='footer_id' style={{display: 'none'}}>
        <div className={classes.footer}>
            <img src={logo} alt="fe"/>
            <ul>
                <li style={{color: "#668cff"}}>მისამართი</li>
                <li> მიცკევიჩის ქ. #17</li>
                <li> 0103, თბილისი,</li>
            </ul>
            <ul>
                <li style={{color: "#668cff"}}>კონტაქტები</li>
                <li><a href="tel:0322223636" style={{color:'white'}}> +0322223636</a></li>
                <li><a href="tel:995555113344" style={{color:'white'}}>+995555113344</a></li>
                <li><a href="mailto:info@futureworlds.ge" style={{color:'white'}}> info@futureworlds.ge</a></li>
            </ul>
        </div>
    </footer>
}
export default Footer;