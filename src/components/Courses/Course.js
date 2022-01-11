import classes from './Course.module.css'
import image from '../../assets/ihouse.png'
import {useEffect} from "react";

const Course = () => {

     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });

    return <div className={classes.container}>
        <img src={image} alt="course salary"/>
        <div>
            <ul>
                <h3>Course</h3>
                <br/>
                <li>ABC</li>
                <br/>
                <li>Starter</li>
                <br/>
                <li>Elementary-advance</li>
                <br/>
                <li>German</li>
                <br/>
                <li>Russian</li>
                <br/>
            </ul>
            <ul>
                <h3>Price(GEL)</h3>
                <br/>
                <li>90</li>
                <br/>
                <li>100-110</li>
                <br/>
                <li>120-170</li>
                <br/>
                <li>120</li>
                <br/>
                <li>100</li>
                <br/>
            </ul>
        </div>
    </div>
}
export default Course;