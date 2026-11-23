import sCombineLight from "../assets/screenshots/quizfreely-720p/combine.webp";
import sCombineDark from "../assets/screenshots/quizfreely-720p/combine-dark.webp";
import sCombineStatsLight from "../assets/screenshots/quizfreely-720p/combine-stats.webp";
import sCombineStatsDark from "../assets/screenshots/quizfreely-720p/combine-stats-dark.webp";
import sMatchLight from "../assets/screenshots/quizfreely-720p/match.webp";
import sMatchDark from "../assets/screenshots/quizfreely-720p/match-dark.webp";
import sMatchStartLight from "../assets/screenshots/quizfreely-720p/match-start.webp";
import sMatchStartDark from "../assets/screenshots/quizfreely-720p/match-start-dark.webp";
import sPTLight from "../assets/screenshots/quizfreely-720p/practice-test.webp";
import sPTDark from "../assets/screenshots/quizfreely-720p/practice-test-dark.webp";
import sStatsLight from "../assets/screenshots/quizfreely-720p/stats.webp";
import sStatsDark from "../assets/screenshots/quizfreely-720p/stats-dark.webp";
import GridMotion from "./grid-motion/GridMotion.jsx";

export default function QuizfreelyGridMotion() {
    return <GridMotion
        items={[
            <div>
                <img src={sCombineLight.src} className="only-light-theme" />
                <img src={sCombineDark.src} className="only-dark-theme" />
            </div>,
            <div>
                <img src={sCombineStatsLight.src} className="only-light-theme" />
                <img src={sCombineStatsDark.src} className="only-dark-theme" />
            </div>,
            <div>
                <img src={sMatchLight.src} className="only-light-theme" />
                <img src={sMatchDark.src} className="only-dark-theme" />
            </div>,
            <div>
                <img src={sMatchStartLight.src} className="only-light-theme" />
                <img src={sMatchStartDark.src} className="only-dark-theme" />
            </div>,
            <div>
                <img src={sPTLight.src} className="only-light-theme" />
                <img src={sPTDark.src} className="only-dark-theme" />
            </div>,
            <div>
                <img src={sStatsLight.src} className="only-light-theme" />
                <img src={sStatsDark.src} className="only-dark-theme" />
            </div>,
        ]}
        rows={3}
        aspectRatio={16/9}
        gap={16}
        radius={14}
        angle={-12}
        tilt={30}
        speed={24}
        direction="alternate"
        parallax={0}
        spotlight={0}
        dim={0.4}
        fade={0}
        grayscale={false}
    />
}
