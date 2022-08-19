import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Portfolio from "../Portfolio/Portfolio";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";

function Main() {
    return(
        <div className="main">
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </div>
    )
}

export default Main;