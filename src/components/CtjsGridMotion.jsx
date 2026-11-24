import sCode from "../assets/screenshots/ct-js-720p/code-editor.webp";
import sParticle from "../assets/screenshots/ct-js-720p/particle-systems.webp";
import sRoom from "../assets/screenshots/ct-js-720p/room-editor.webp";
import sTexture from "../assets/screenshots/ct-js-720p/texture-editor.webp";
import GridMotion from "./grid-motion/GridMotion.jsx";

export default function QuizfreelyGridMotion() {
    return <GridMotion
        items={[
            sCode, sRoom, sParticle, sTexture,
        ]}
        rows={2}
        aspectRatio={64/33}
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
