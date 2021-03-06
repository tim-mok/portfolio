import styles from '../CSS/Projects.module.css'
import kyber01 from '../Assets/kyber-01v2.jpg'
import wrkpoint02 from '../Assets/wrkpoint-02.jpg'
import zeitgeist02 from '../Assets/zeitgeist-02.jpg'
import ProjectItem from '../Components/ProjectItem'


const Projects = () => {

    // The following variables are specific details for each project listing to be rendered through the reusable component, ProjectItem

    const kyberAlt = "kyber parker screenshot"
    const kyberTitle = "Kyber Parker"
    const kyberDescription = "Kyber Parker is a boutique, direct-to-consumer company that sells reclaimed kyber crystals to force wielders looking to craft a high-quality lightsaber. Completed in 7 days on 5/18/21 as the final solo project for "
    const kyberTechnology = "React, Javascript, Python, Flask, SQLAlchemy, PostgreSQL, CSS3, HTML5"
    const kyberHeroku = "https://kyber-parker.herokuapp.com/"
    const kyberGitHub = "https://github.com/tim-mok/frontend-sei-solo-project-4"

    const wrkpointAlt = "wrkpoint screenshot"
    const wrkpointTitle = "Wrkpoint"
    const wrkpointDescription = "Wrkpoint is an enterprise solution for managing work space reservations and supporting unique employee work styles. Completed in 5 days on 5/5/21 as the third solo project for "
    const wrkpointTechnology = "React, Javascript, Express, Node.js, Sequelize, PostgreSQL, CSS3, HTML5"
    const wrkpointHeroku = "https://wrkpoint-u3-app.herokuapp.com/"
    const wrkpointGitHub = "https://github.com/tim-mok/wrkpoint-app-frontend"

    const zeitgeistAlt = "zeitgeist screenshot"
    const zeitgeistTitle = "Zeitgeist"
    const zeitgeistDescription = "Zeitgeist is a personal news aggregator, allowing users to search for news from a country origin of their choice and to bookmark interesting articles. Completed in 5 days on 4/14/21 as the second solo project for "
    const zeitgeistTechnology = "Javascript, Express, Node.js, Sequelize, PostgreSQL, CSS3, HTML5, RESTful API"
    const zeitgeistHeroku = "https://zeitgeist-news-app.herokuapp.com/"
    const zeitgeistGitHub = "https://github.com/tim-mok/frontend-sei-solo-project-2"

    return (
        <div className={styles.container}>
            <span className={styles.headline}>Recent Work</span>
            <div className={styles.projectBox}>
                <ProjectItem 
                    imageSrc={kyber01}
                    imageAlt={kyberAlt}
                    title={kyberTitle}
                    description={kyberDescription}
                    technology={kyberTechnology}
                    heroku={kyberHeroku}
                    github={kyberGitHub}
                />
                <ProjectItem 
                    imageSrc={wrkpoint02}
                    imageAlt={wrkpointAlt}
                    title={wrkpointTitle}
                    description={wrkpointDescription}
                    technology={wrkpointTechnology}
                    heroku={wrkpointHeroku}
                    github={wrkpointGitHub}
                />
                <ProjectItem 
                    imageSrc={zeitgeist02}
                    imageAlt={zeitgeistAlt}
                    title={zeitgeistTitle}
                    description={zeitgeistDescription}
                    technology={zeitgeistTechnology}
                    heroku={zeitgeistHeroku}
                    github={zeitgeistGitHub}
                />                                
            </div>
        </div>
    )
}


export default Projects