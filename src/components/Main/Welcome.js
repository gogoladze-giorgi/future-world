import classes from "./Welcome.module.css";
import image2 from '../../assets/img2.jpg'
import image1 from '../../assets/img1.jpg'
import image3 from '../../assets/slide-3.jpg'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const Welcome = () => {
    useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });
    const {t} = useTranslation();
    return <div className={classes.container}>
        <section className={classes.sectionOne}>
            <div>
                <h1>Welcome to Future World</h1>
                <div className={classes.sectionOne_text}>
                    {t('Welcome_to_Future_World')}
                </div>
                <img src={image1} alt="helen o'Grady" className={classes.sectionOne_image}/>

            </div>

            <div className={classes.images}>
                <img src={image2} alt="children"/>
                <Link to='/english' onClick={() => {
                    document.getElementById('footer_id').style = 'display:none';
                }}>
                    <button className={classes.button1}>EN</button>
                </Link>
                <Link to='/german' onClick={() => {
                    document.getElementById('footer_id').style = 'display:none';
                }}>
                    <button className={classes.button2}>DE</button>
                </Link>
                <Link to='/russia' onClick={() => {
                    document.getElementById('footer_id').style = 'display:none';
                }}>
                    <button className={classes.button3}>RU</button>
                </Link>
            </div>
        </section>
        <section className={classes.sectionTwo}>
            <h2>{t("why_Future_world")}</h2>
            <div className={classes.container2}>
                <img src={image3} alt="teachers" className={classes.sectionTwo_image}/>
                <ol>
                    <li>{t("why_Future_world_list_one")}</li>
                    <li>{t("why_Future_world_list_two")}</li>
                    <li>{t("why_Future_world_list_three")}</li>
                    <li>{t("why_Future_world_list_four")}</li>
                    <li>{t("why_Future_world_list_five")}</li>
                </ol>
            </div>
        </section>
    </div>
}
export default Welcome;