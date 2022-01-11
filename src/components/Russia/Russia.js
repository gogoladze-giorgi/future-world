import classes from "../About/About.module.css";
import image from "../../assets/img3.jpg";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const Russia = () => {
     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });
    const {t} = useTranslation()

    return <div className={classes.background}>
        <div className={classes.container}>
            <img src={image} alt="images"/>
            <h1>{t("russia")}</h1>
            <br/>
            <div>{t("russia_line_one")}</div>
            <br/>
            <div>{t("russia_line_two")}</div>
            <br/>
            <div>{t("russia_line_three")}</div>
            <br/>
            <div>{t("russia_line_four")}</div>
            <br/>
            <div>{t("russia_line_five")}</div>
            <br/>
            <div>{t("russia_line_six")}</div>
        </div>
    </div>
}
export default Russia;