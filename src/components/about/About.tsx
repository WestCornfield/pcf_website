import React, { ReactElement } from 'react';
import './about.css';

/**
 * This is the component for the About page. Placeholder.
 * Will eventually have functionality in later versions.
 *
 * @returns - {ReactElement} - component for About page
 */
export function About(): ReactElement {
    return (<div className="about" id="about-container" data-testid="about-container">
        <div>
            <h1>Meet the Board</h1>
        </div>
        <hr></hr>
        <div className="about-board-member">
            <h2>Wes Corwin</h2>
            <div>Wes Corwin is the founder of the Plano Comedy Festival. He produced the first Plano Comedy Festival in 2018, with the goal of bringing a larger awareness to the citizens of Plano of how great its local comedy is. Wes has been a stand-up for nine years and a producer of comedy events for six. In 2018, Wes was awarded the Funniest Comedian in Texas by the Addison & Arlington Improv and was announced Funniest Comedian in Dallas by the Dallas Observer.</div>
        </div>
        <hr></hr>
        <div className="about-board-member">
            <h2>Britainy Goss</h2>
            <div>Britainy Goss loves Plano! For most of her life, she has lived, worked, and raised her family in Plano. Britainy has been performing stand-up comedy for four years and also produces comedy shows. She brings to the festival over 20 years of experience in event management and business operations from the non-profit and corporate sectors. In 2018, she performed in the first Plano Comedy Festival.</div>
        </div>
        <hr></hr>
        <div className="about-board-member">
            <h2>Reggie French</h2>
            <div>Born and raised in Dallas, TX, Reggie French loves comedy almost as much as he loves the Cowboys. He has been performing standup comedy since 2016 when he was encouraged to come out to an open mic after a local comic heard his quick wit and banter while hosting his own radio show. His quiet demeanor and intimidating size off stage makes it hard for people to believe he is a comedian. It’s fitting his first showcase was on April Fools. However, once on stage, Reggie’s baritone voice, good comedic timing and storytelling style captures audiences and leaves them laughing and wanting more.</div>
        </div>
    </div>);
}
