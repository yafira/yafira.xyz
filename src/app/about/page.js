import Image from "next/image";
import { Github, Linkedin, Mail, Instagram, Figma } from "lucide-react";
import { FaChessPawn } from "react-icons/fa";
import MobileBack from "@/app/components/MobileBack";
import Reveal from "@/app/components/Reveal";
import PatchMark from "@/app/components/PatchMark";

export const metadata = {
  title: "Yafira ✿",
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
            <span className="typing-text">Hello, World</span>
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
            I recently completed my master's degree at NYU's Interactive
            Telecommunications Program (ITP), where I explored physical
            computing, hardware design & development, creative coding, fabrication, and
            interaction design. My work lives at the expressive overlap of
            technology and art, spanning web/front-end, UX/UI/product
            design, and playful, tactile computing.
          </p>
        </Reveal>

        {/* Philosophy */}
        <Reveal>
          <p>
            With a background in computer science and a lifelong passion for
            design, I approach every project with intention and care. My focus
            is on building intuitive, meaningful interfaces and experiences that
            empower users, challenge norms, and embrace simplicity. I'm deeply
            inspired by Dieter Rams' <em>Ten Principles of Good Design</em> and
            John Maeda's <em>Laws of Simplicity</em>, and I believe that{" "}
            <em>less</em> is often <em>more</em>.
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
              <p>
                Programming is my paintbrush: a way to solve puzzles, express
                ideas, and build things that matter. I see code as craft, a
                practice of shaping the world around me in practical, poetic
                ways. I code because it challenges me, and because it gives form
                to imagination.
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
                My path to tech wasn't linear. I've always lived in the current
                of creativity: as a child, I filled notebooks with poems,
                stories, sketches, and pages of ideas, and assembled mood boards
                long before I knew the term existed. A high school writing
                contest earned me my first international trip—to London—which
                broadened my perspective on the world and introduced me to the
                excitement of connecting across cultures. Inspired by that
                experience, I began dreaming of creating an international print
                magazine, combining my love for writing, design, and
                storytelling with a desire to connect people and ideas across
                borders.
              </p>

              <p>
                That dream led me to study business and journalism, but along
                the way I realized something was missing. I loved creating
                stories and experiences, but I wanted to understand the
                technology that made them possible. I found myself asking how
                things worked beneath the surface—how devices communicated, how
                circuits carried information, and how ideas became physical
                objects. That curiosity brought me back to school to study
                electrical engineering. Everything changed when I took my first
                programming class. I fell in love with the logic, creativity,
                and problem-solving of code, switched my major to computer
                science, and never looked back.
              </p>

              <p>
                Looking back, the signs had always been there. I spent hours
                customizing MySpace pages, tinkering with electronics, and
                taking things apart just to understand how they worked.
                Technology had always been part of my life—I just never thought
                it was something I could pursue professionally. I saw myself as
                a writer, a designer, and an artist. Programming showed me that
                technology could be a creative medium, one that combined
                everything I loved about making, storytelling, design, and
                solving problems. At{" "}
                <a
                  href="https://itp.nyu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ITP
                </a>
                , those pieces finally came together. It was the first place
                where creativity, design, engineering, and computation all spoke
                the same language, and where I realized I didn't have to choose
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
            <a href="/cv" className="link-btn primary">
              <span>view my cv</span>
              <span aria-hidden="true">→</span>
            </a>
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

            <a
              className="contact-button"
              href="mailto:yafira@proton.me"
              aria-label="send me an email"
            >
              <Mail size={18} aria-hidden="true" />
              <span>email me</span>
            </a>
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
