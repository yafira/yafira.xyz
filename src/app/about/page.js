import Image from "next/image";
import MobileBack from "@/app/components/MobileBack";

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <div className="about-page" id="about">
      <MobileBack />
      <div className="bio-content">
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

        {/* Who I Am - Lead with Impact */}
        <p className="intro-highlight">
          I'm Yafira, a design engineer and creative technologist who builds at
          the intersection of code, design, and human-computer interaction. I
          create digital and physical experiences that are thoughtful,
          functional, and a little bit magical.
        </p>

        {/* Current Work */}
        <p>
          Currently, I'm a graduate student at NYU's Interactive
          Telecommunications Program (ITP), where I experiment with physical
          computing, web development, creative coding, fabrication, and
          interaction design. My work lives at the expressive overlap of
          technology and art, spanning front-end development, UX/UI/product
          design, and playful, tactile computing.
        </p>

        {/* Philosophy */}
        <p>
          With a background in computer science and a lifelong passion for
          design, I approach every project with intention and care. My focus is
          on building intuitive, meaningful interfaces and experiences that
          empower users, challenge norms, and embrace simplicity. I'm deeply
          inspired by Dieter Rams' <em>Ten Principles of Good Design</em> and
          John Maeda's <em>Laws of Simplicity</em>, and I believe that{" "}
          <em>less</em> is often <em>more</em>.
        </p>

        {/* About Me Sections */}
        <div className="bio-window">
          <div className="bio-window__content">
            <h2>$ whoami</h2>
            <p>
              I'm a visual learner, creative thinker, and detail-oriented
              developer who thrives in imaginative environments. Whether
              designing interfaces or soldering circuits, I care deeply about
              clarity, craft, and user experience. I'm passionate about creating
              tools, artifacts, and systems that translate digital ideas into
              interactive, often physical, inventions.
            </p>

            <h2>whyicompute://</h2>
            <p>
              Programming is my paintbrush: a way to solve puzzles, express
              ideas, and build things that matter. I see code as craft, a
              practice of shaping the world around me in practical, poetic ways.
              I code because it challenges me, and because it gives form to
              imagination.
            </p>

            <h2>feelingthroughform://</h2>
            <p>
              Design is where I feel most at home. It's where logic and emotion
              meet, the art of interface at its most meaningful. I've always
              been drawn to the quiet power of arrangement, detail, and color,
              and how good design can turn the ordinary into something magical.
            </p>

            <h2>myjourney://</h2>
            <p>
              My path to tech wasn't linear. I've always lived in the current of
              creativity: as a child, I filled notebooks with drawings and
              assembled mood boards before I knew the term existed. A high
              school writing contest sparked my love for storytelling and led me
              to dream of creating an international print magazine.
            </p>
            <p>
              That dream took me through business school and journalism, but
              something was missing. After graduation, I found myself drawn to
              the hidden mechanics of how things work. I returned to school for
              electrical engineering, and everything changed when I took my
              first programming class. I fell in love with the logic,
              creativity, and problem-solving of code, switched my major to
              computer science, and never looked back.
            </p>
            <p>
              From customizing MySpace pages to tinkering with electronics, I
              began to see technology as my medium: a way to build tools,
              stories, and experiences that feel both useful and joyful. ITP is
              where all these threads finally came together, where creativity
              and computation speak the same language.
            </p>

            <h2>tea&terminal://</h2>
            <p>
              These days, you'll find me coding interfaces, designing playful
              experiences, learning new tools, and always making something. In
              my orbit: tinkering with arts and crafts, taking photos, sketching
              ideas, experimenting in the kitchen, reviewing snacks at{" "}
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
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="opportunities-section">
          <h2>let's build something together</h2>
          <p>
            I'm seeking opportunities in web development and product/UI design,
            especially projects that merge art, code, and engineering. I'm also
            drawn to work involving e-textiles, physical computing, and tactile
            interaction - anywhere technology meets texture, gesture, or form.
          </p>
        </div>
      </div>
    </div>
  );
}
