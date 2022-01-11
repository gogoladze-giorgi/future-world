import classes from './Team.module.css'
import teacher1 from '../../assets/teacher1.jpg'
import teacher2 from '../../assets/teacher2.jpg'
import teacher3 from '../../assets/teacher3.jpg'
import teacher4 from '../../assets/teacher4.jpg'
import {useEffect} from "react";

const Team = () => {
     useEffect(() => {
        document.getElementById('footer_id').style = 'display:flex';
    });

    return <div className={classes.container}>
        <h1>
            ჩვენი გუნდი
        </h1>
        <br/>
        <section className={classes.section}>
            <img src={teacher1} alt="salome sabadze"/>
            <div className={classes.container1}>
                <div>
                    <h3>Salome Sabadze</h3>
                    Teacher of English language 2005 - Graduated Tbilisi I. Chavchavadze State University of
                    language
                    and Culture. Department of Pedagogics - English and Spanish languages. Qualification: 2010 - "
                    Why
                    and How to get students reading in the 21 st Century. " 2011 - " English World Preparation
                    Training.
                    " 2012 - " Preparing Students Successfully for ELT Exams. " 2017 - Macmillan Education Training:
                    "
                    Reading as aLife Skill. " Work Experience: 2000 - Till now Private teacher of English language.
                    2003
                    - 2004 - Practical Training at school 102 2005 - 2006 - Educational Centre " Future World " 2007
                    -
                    2009 - Georgian - English school " Britannica " 2010 - 2012 - Private school " Pegas " 2012 -
                    Till
                    now Educational Centre " Future World " I love my profession. Teaching children is the greatest
                    responsibility, interest, experience and pleasure in my life. I try to do best in my career
                    grouth
                    opportunity.
                </div>
            </div>
        </section>
        <section className={classes.section}>
            <div className={classes.container1}>
                <div>
                    <h3>Eliso Kometiani </h3>
                    Eliso Kometiani Teacher of English Language 1999 –graduated from Tbilisi I.Chavchavadze State
                    Institute of Western Languages and Cultures. Qualification: 2010, July – Teacher training
                    seminar,
                    Teacher TEFL Development workshop, International House,Kyiv Work Experience 2017 February
                    Macmillan
                    Education Training “Reading as a life Skills” 2008 – Present Language Centre “Futureworld 2009-
                    2007
                    senior clerk, “Ertoba ltd Incorporation” 2002 Translator’s Bureau Tbilisi, Georgia "I love
                    working
                    with children. Being a teacher has allowed me to keep young, laugh and do amazing things with
                    children. Continuing to grow in my career is probably the most important thing to me".
                </div>
            </div>
            <img src={teacher2} alt="eliso kometiani"/>
        </section>
        <section className={classes.section}>
            <img src={teacher3} alt="irakli buadze"/>
            <div className={classes.container1}>
                <div>
                    <h3>Irakli Buadze</h3>
                    ინგლისურის მასწავლებელი
                </div>
            </div>
        </section>
        <section className={classes.section}>
            <div className={classes.container1}>
                <div>
                    <h3>HELEN KANTELADZE</h3>
                    Helen Kanteladze English Language Teacher, Director Qualification: 2017 February Macmillan
                    Education Training “Reading as a life skill” 2016 Understanding language: learning and teaching
                    university of South Hampton 2014 Understanding IELTS : techniques for English language tests
                    British Council 2010 July – TEFL Teacher Development Workshop, International House, Kyiv 2006
                    August -Achievement Certificate in Helen O’Grady Drama, Australia, Gosford 2006 January -
                    Diploma TEFL (Teaching English as Foreign Language). UK 2005 July - Certificate for
                    Participation in Marketing of Export Opportunities. Turkey, Istanbul I am passionate about
                    teaching English and find my job very rewarding. Being a teacher enables me to get acquainted
                    with a lot of people of different ages and interests. It is the unique opportunity for every
                    individual who strives to develop and deepen his knowledge of the surrounding world. Each person
                    needs a different approach. Some people learn quickly and others need a bit more time. We try
                    teaching children to communicate effectively. “Teaching is the profession that teaches all the
                    other professions.” My responsibility is to provide support to teachers in order to reach the
                    high standard of teaching in FW. To run a serious business with western partners, the knowledge
                    of English language wasn’t enough and I started traveling to various places mostly for sessions,
                    seminars, meeting and negotiations to become more professional and skilful in to-day’s life If
                    you’re creative, energetic, like using your imagination and are interested in a different kind
                    of teaching experience please come and enjoy at FutureWorld. Eliso Kometiani Teacher of English
                    Language 1999 –graduated from Tbilisi I.Chavchavadze State Institute of Western Languages and
                    Cultures. Qualification: 2010, July – Teacher training seminar, Teacher TEFL Development
                    workshop, International House,Kyiv Work Experience 2017 February Macmillan Education Training
                    “Reading as a life Skills” 2008 – Present Language Centre “Futureworld 2009- 2007 senior clerk,
                    “Ertoba ltd Incorporation” 2002 Translator’s Bureau Tbilisi, Georgia "I love working with
                    children. Being a teacher has allowed me to keep young, laugh and do amazing things with
                    children. Continuing to grow in my career is probably the most important thing to me".
                </div>
            </div>
            <img src={teacher4} alt="HELEN KANTELADZE"/>
        </section>
    </div>
}
export default Team;