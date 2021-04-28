import React, {useState} from 'react';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

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
                    <Button to="signup" 
                            onMouseEnter={onHover} onMouseLeave={onHover}
                            primary="true"
                            dark="true">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
