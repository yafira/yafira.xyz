import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, Figma } from "lucide-react";
import EmailContact from "@/app/components/EmailContact";
import { FaChessPawn } from "react-icons/fa";
import MobileBack from "@/app/components/MobileBack";
import Reveal from "@/app/components/Reveal";
import PatchMark from "@/app/components/PatchMark";

export const metadata = {
  title: "Yafira | about",
};

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <div className="about-page" id="about">
      <MobileBack />
      <div className="bio-content">
        <Reveal delay={0}>
          <div className="avatar-container">
            <Image
              src="/assets/avatar.png"
              alt="avatar illustration"
              width={600}
              height={600}
              className="avatar"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="typewriter">
            <span className="typing-text">Hello, World!</span>
            <Image
              src="/assets/flower-sm.png"
              alt="flower shape logo"
              width={20}
              height={20}
              className="flower-image"
              priority
            />
          </h1>
        </Reveal>

        {/* Who I Am - Lead with Impact */}
        <Reveal delay={240}>
          <p className="intro-highlight">
            I'm Yafira, a design engineer and creative technologist who builds
            at the intersection of code, design, and human-computer interaction.
            I create digital and physical experiences that are thoughtful,
            functional, and a little bit magical.
          </p>
        </Reveal>

        {/* Current Work */}
        <Reveal>
          <p>
            I hold a BS in Computer Science from CUNY Lehman College and
            recently completed my master's degree at NYU's Interactive
            Telecommunications Program (ITP), where I explored physical
            computing, hardware design & development, creative coding,
            fabrication, and interaction design. While there, I contributed to{" "}
            <a
              href="https://ml5js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              ml5.js
            </a>
            , the open source machine learning library for the web, building
            documentation tooling and researching browser-based speech-to-text.
            My work lives at the expressive overlap of technology and art,
            spanning web/front-end, UX/UI/product design, and playful, tactile
            computing.
          </p>
        </Reveal>

        {/* Philosophy */}
        <Reveal>
          <p>
            With that computer science foundation and a lifelong passion for
            design, I approach every project with intention and care. My focus
            is on building intuitive, meaningful interfaces and experiences that
            empower users, challenge norms, and embrace simplicity. Dieter Rams
            is a huge inspiration to me—his whole body of work, not just one
            idea, though I especially love his belief that <em>less</em> is
            often <em>more</em>. That same spirit shows up in John Maeda's{" "}
            <em>Laws of Simplicity</em> and Susan Kare's belief that an icon can
            hold as much warmth as a paragraph.
          </p>
        </Reveal>

        {/* About Me — patchwork sampler */}
        <div className="patchwork">
          <Reveal>
            <section className="patch patch--wisteria">
              <h2>$ whoami</h2>
              <p>
                I'm a visual learner, creative thinker, and detail-oriented
                developer who thrives in imaginative environments. Whether
                designing interfaces or soldering circuits, I care deeply about
                clarity, craft, and user experience. I'm passionate about
                creating tools, artifacts, and systems that translate digital
                ideas into interactive, often physical, inventions.
              </p>
              <PatchMark />
            </section>
          </Reveal>

          <Reveal>
            <section className="patch patch--blush">
              <h2>whyicompute://</h2>
              <p> Programming is my paintbrush: a way to solve puzzles, express
                ideas, and build things that matter. I see code as craft, a practice 
                of shaping the world around me in practical, poetic ways. I'm interested 
                in the{" "}
                <a href="https://luckysoap.com/statements/handmadeweb.html" target="_blank"
                 rel="noopener noreferrer"
                 > handmade web
                </a>
                {" "}and the idea that the internet still has room for the handmade,
                the amateur, the strange. I'm drawn to Olia Lialina's net art and
                her insistence that code doesn't have to be polished to be alive.
                </p>
              <PatchMark />
            </section>
          </Reveal>

          <Reveal>
            <section className="patch patch--matcha">
              <h2>feelingthroughform://</h2>
              <p>
                Design is where I feel most at home. It's where logic and
                emotion meet, the art of interface at its most meaningful. I've
                always been drawn to the quiet power of arrangement, detail, and
                color, and how good design can turn the ordinary into something
                magical.
              </p>
              <PatchMark />
            </section>
          </Reveal>

          <Reveal>
            <section className="patch patch--butter">
              <h2>myjourney://</h2>

              <p>
                My path to tech wasn't linear. As a kid I filled notebooks with
                poems, stories, and mood boards before I knew what a mood board
                was. A high school writing contest sent me to London, and I
                started dreaming of running an international print
                magazine—writing, design, and storytelling, connecting people
                across borders.
              </p>

              <p>
                That dream led me to study business and journalism, but
                something was missing. I wanted to understand the technology
                underneath the stories—how circuits carried information, how
                ideas became physical objects—so I went back to school for
                electrical engineering. Then I took my first programming class,
                fell in love with the logic and problem-solving of code, and
                switched to computer science.
              </p>

              <p>
                Looking back, the signs were always there: hours spent
                customizing MySpace pages, taking electronics apart just to see
                how they worked. I just never thought it could be a career. I'm
                especially drawn to the hidden history of women in computing—
                the ENIAC programmers who did the invisible labor of programming
                the first electronic general-purpose computer, and the Jacquard
                loom weavers whose punch cards became the literal ancestor of
                computer code. That lineage feels close to home in my own work
                with textiles and circuits. At{" "}
                <a
                  href="https://itp.nyu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ITP
                </a>
                , it all finally clicked—creativity, design, engineering, and
                computation speaking the same language, no longer a choice
                between being creative and being technical.
              </p>

              <PatchMark />
            </section>
          </Reveal>

          <Reveal>
            <section className="patch patch--wisteria">
              <h2>tea&terminal://</h2>
              <p>
                These days, you'll find me coding interfaces, designing playful
                experiences, learning new tools, and always making something. In
                my orbit: tinkering with arts and crafts, taking photos,
                sketching ideas, experimenting in the kitchen, reviewing snacks
                at{" "}
                <a
                  href="https://snax.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  snax
                </a>
                , playing chess, building odd prototypes, or tending to my side
                project:{" "}
                <a
                  href="https://instagram.com/electrocutelab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @electrocutelab
                </a>
                .
              </p>
              <PatchMark />
            </section>
          </Reveal>
        </div>

        {/* What I'm Looking For */}
        <Reveal>
          <div className="opportunities-section">
            <h2>let's build something together!</h2>
            <p>
              I'm seeking opportunities in ux engineering, design engineering,
              product design, interaction design, creative technology,
              especially projects that merge design and code across software
              and/or hardware. I'm also drawn to work involving e-textiles,
              physical computing, and tactile interaction - anywhere technology
              meets texture, gesture, or form.
            </p>
          </div>
        </Reveal>

        {/* CV link */}
        <Reveal>
          <div className="about-cv-cta">
            <Link href="/cv" className="link-btn primary">
              <span>view my cv</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Contact — folded in from the old standalone /contact page */}
        <Reveal>
          <section id="contact" className="contact-hero about-contact">
            <h2 className="contact-title">get in touch</h2>
            <div className="flower-wrapper">
              <Image
                src="/assets/flower-network-logo.png"
                alt="flower"
                width={60}
                height={60}
                className="flower-icon"
              />
            </div>
            <p className="contact-blurb">
              want to collaborate, chat about creative tech, say hi or play
              chess? ツ <br />
              reach me by email or any of the links below. thanks for stopping
              by! ♡ ꣑ৎ
            </p>

            <EmailContact email="yafira@proton.me" />
          </section>
        </Reveal>

        <Reveal>
          <section className="contact-links bg-potpourri">
            <ul className="social-links">
              <li>
                <a
                  id="profile-link1"
                  aria-label="link to github profile"
                  href="https://github.com/Yafira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github aria-hidden="true" />
                  <span>github</span>
                </a>
              </li>

              <li>
                <a
                  id="profile-link2"
                  aria-label="link to figma profile"
                  href="https://www.figma.com/@electrocute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Figma aria-hidden="true" />
                  <span>figma</span>
                </a>
              </li>

              <li>
                <a
                  id="profile-link3"
                  aria-label="link to are.na profile"
                  href="https://www.are.na/yafira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Image
                    src="/assets/arena-logo.png"
                    alt="are.na"
                    width={26}
                    height={14}
                  />
                  <span>are.na</span>
                </a>
              </li>

              <li>
                <a
                  id="profile-link4"
                  aria-label="link to instagram profile"
                  href="https://www.instagram.com/electrocutelab/"
                  className="social-link"
                >
                  <Instagram aria-hidden="true" />
                  <span>@electrocutelab</span>
                </a>
              </li>

              <li>
                <a
                  id="profile-link5"
                  aria-label="link to linkedin profile"
                  href="https://www.linkedin.com/in/yafira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin aria-hidden="true" />
                  <span>linkedin</span>
                </a>
              </li>

              <li>
                <a
                  id="profile-link6"
                  aria-label="link to chess.com profile"
                  href="https://www.chess.com/member/mechapetal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaChessPawn size={18} />
                  <span>chess</span>
                </a>
              </li>
            </ul>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
