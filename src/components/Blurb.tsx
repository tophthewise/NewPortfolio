import styles from "../styles/blurb.module.css";

function Blurb() {
    return (
        <div className={styles.Blurb}>
            <div>👋🏾 Hey, I’m Eric Porter.</div>
            <br />
            <div>
                Salesforce Certified Administrator • Systems Thinker • Data &
                Finance Enthusiast
            </div>
            <br />

            <div>
                I design scalable, thoughtful Salesforce experiences — blending
                clean architecture with meaningful business impact. My toolkit
                includes Flows, APEX, Process Builders, Workflow Rules, Dynamic
                Lightning Pages, and custom front-end components using LWC and
                Aura. I’ve helped roll out tools that brought in $17M+ in client
                retention, and I specialize in turning complex processes into
                intuitive systems that teams can actually use. But my skills
                don’t stop at Salesforce. I’m deeply interested in the
                intersection of technology, finance, and data. I’ve always had
                an eye on the banking world — the suit, the systems, the
                strategy — and today, that dream continues through my growing
                focus on data analysis, full-stack development, and the evolving
                role of AI in financial services. Whether I’m optimizing
                internal tools, designing automation, or building visual
                dashboards, I approach every challenge with a learner’s mindset,
                a strategist’s clarity, and a collaborator’s spirit.
            </div>
            <br />

            <div>
                Outside of work, I’m usually kayaking, traveling, studying
                macroeconomics, or refining my home lab projects. I’m passionate
                about solving real-world problems through better systems —
                especially where tech and people meet.
            </div>
            <br />

            <div>
                {" "}
                Let’s connect. I’m always open to thoughtful opportunities in
                tech, data, or finance.
            </div>
        </div>
    );
}

export default Blurb;
