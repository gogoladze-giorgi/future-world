import classes from './Level.module.css'
import {useTranslation} from "react-i18next";
import image from '../../assets/img3.jpg'
import {useEffect} from "react";

const Level = () => {
     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });

    const {t} = useTranslation();
    return <div className={classes.container}>
            <img src={image} alt="images"/>
            <h1>{t("levels")}</h1>
            <h4>{t("levels_line_one")}</h4>
            <br/>
            <div>
                {t("levels_line_two")}
            </div>
            <br/>
            <h4>{t("levels_line_three")}</h4>
            <div>
                {t("levels_line_four")}
            </div>
            <ol>
                <li>{t("levels_list_one")}</li>
                <li> {t("levels_list_two")}</li>
                <li>{t("levels_list_three")}</li>
                <li>{t("levels_list_four")}</li>
                <li>{t("levels_list_five")}</li>
                <li>{t("levels_list_six")}</li>
            </ol>
        </div>
}
export default Level