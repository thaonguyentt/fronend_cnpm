import logoHozing from '../../../shared/image/logoHozing/logo-white-hozing.png';
import classes from './FooterTop.module.css';

const FooterTop = () => {
    return (
        <div className={classes.top}>
            <img className={classes.logoWhiteHozing} src={logoHozing} alt="Logo-white-hozing" />
            <p className={classes.des}>Luxury where you most expect it</p>
        </div>
    );
}

export default FooterTop;