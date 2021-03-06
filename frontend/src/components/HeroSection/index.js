import React, {useState} from 'react';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight, ButtonLink } from './HeroElements';
import Video from '../../videos/video.mp4';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground type='video/mp4' src={Video} autoPlay muted loop/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Data Mining Club</HeroH1>
                <HeroP>Learn data science techniques and generate insights from your acquired data.</HeroP>
                <HeroBtnWrapper>
                    <ButtonLink to="signup" 
                            onMouseEnter={onHover} onMouseLeave={onHover}
                            primary="true"
                            dark="true">
                        Let's begin {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
