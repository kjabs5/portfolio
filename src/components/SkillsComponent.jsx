import React from 'react';

const SkillsComponent = () => {
    return (
        <>
            <section id="skills"className="skills">
                <div  className="section-title">Skills</div>
                <div  className="skills-list container">
                    <div  className="html">
                        <i  className="fab fa-html5" style={{color:'red'}}> HTML</i>
                    </div>
                    <div  className="css">
                        <i  className="fab fa-node-js" style={{color:'green'}}> Nodejs</i>
                    </div>

                    <div  className="javascript">
                        <i  className="fab fa-js-square" style={{color:'greenyellow'}}> JavaScript</i>
                    </div>
                    <div  className="problem-solving">
                        <i  className="fab fa-resolving" style={{color:'blue'}}> Problem Solving</i>
                    </div>

                </div>
            </section>

        </>
    )
}

export default SkillsComponent
