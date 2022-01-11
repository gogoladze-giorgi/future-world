import classes from './About.module.css'
import image from '../../assets/img3.jpg'
import {useTranslation} from "react-i18next";
import {useEffect} from "react";


const About = () => {
    useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });
    const {t} = useTranslation();
    return <div className={classes.container}>
        <img src={image} alt="images"/>
        <h1>{t("About_us")}</h1>
        <br/>
        <div>
            {t("about_us_line_one")}
        </div>
        <br/>
        <div>
            {t("about_us_line_two")}
        </div>
        <br/>
        <div>
            {t("about_us_line_three")}
        </div>
        <br/>
        <div>
            {t("about_us_line_four")}
        </div>
        <h1>{t("teaching_methods")}</h1>
        <br/>
        <div>
            {t("teaching_methods_list_one")}
        </div>
        <br/>
        <div>
            {t("teaching_methods_list_two")}
        </div>
        <br/>
        <div>
            {t("teaching_methods_list_three")}
        </div>
    </div>
}
export default About;
