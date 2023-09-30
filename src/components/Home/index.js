import React from "react";
import HeroBlock from './hero_block';
import GrowthStory from './growth_story';
import CreamInvestment from './cream_investment';
import StrategyAndAllocation from './strategy_allocation';
import TheFactor from './the_factor';
import PeopleStory from './people_storys';
import Partners from './partners';

const Home = (props) => {
    return (
        <>
            <HeroBlock />
            <GrowthStory />
            <CreamInvestment />
            <StrategyAndAllocation />
            <TheFactor />
            <PeopleStory />
            <Partners />
        </>
    );
}
export default Home;