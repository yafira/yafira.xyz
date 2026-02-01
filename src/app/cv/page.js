"use client";

import React from "react";
import MobileBack from "@/app/components/MobileBack";

export default function CVPage() {
  return (
    <div className="cv-page main-content">
      <MobileBack />

      {/* about */}
      <section className="cv-section about">
        <h1 className="cv-heading">tldr; about me</h1>
        <p className="cv-summary">
          i am a design engineer & creative technologist working at the
          intersection of engineering and art, designing experimental
          interfaces, soft technologies, and speculative interactive objects. my
          practice centers on inclusive technology, open-source development, and
          creative research, aiming to expand access to creative computing and
          foster expressive, intentional forms of interaction.
        </p>
      </section>

      {/* experience */}
      <section className="cv-section experience">
        <h2 className="cv-heading">experience</h2>

        <div className="cv-list">
          {/* nyu (grouped) */}
          <div className="cv-item grouped">
            <div className="cv-company-row">
              <div className="cv-company">new york university (itp/ima)</div>
              <span className="cv-date">nov 2024 – present</span>
            </div>

            <div className="cv-roles">
              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    graduate assistant, intro to wearables
                  </div>
                  <span className="cv-role-date">jan 2026 – present</span>
                </div>
                <p className="cv-summary">
                  supporting instruction for an introductory wearables and
                  e-textiles course taught by Daniel Ryan Johnston, assisting
                  students with soft circuitry, conductive materials, physical
                  computing, and fabrication workflows; providing hands-on
                  technical guidance during labs, workshops, and office hours,
                  with an emphasis on accessibility.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> wearables, basic
                  electronics, e-textiles, physical computing, soft circuits,
                  teaching support, fabrication, digital accessibility
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    web application developer & designer, useless machines
                    archive
                  </div>
                  <span className="cv-role-date">mar 2025 – present</span>
                </div>
                <p className="cv-summary">
                  leading development and design of a digital archive for nyu
                  assistant professor Blair Simmons’s <i>useless machines</i>{" "}
                  course, blending speculative design with front-end
                  development, ui/ux, and live are.na api integration; deployed
                  on vercel.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> javascript, figma,
                  ui/ux design, api integration, vercel
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    lead web developer, equitable syllabus project
                  </div>
                  <span className="cv-role-date">nov 2024 – present</span>
                </div>
                <p className="cv-summary">
                  designing and developing a platform to support faculty in
                  creating accessible, inclusive syllabi, with a focus on
                  usability and visual design.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> react.js, figma,
                  accessibility
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    graduate assistant, creative computing
                  </div>
                  <span className="cv-role-date">sep 2025 – dec 2025</span>
                </div>
                <p className="cv-summary">
                  supported Professor Daniel Shiffman in teaching and mentoring
                  for the creative computing course, a new minor open to all nyu
                  students, offering office hours, assisting in class workshops,
                  and providing feedback on assignments.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> teaching, mentoring,
                  technical guidance, feedback
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    research assistant, computational text
                  </div>
                  <span className="cv-role-date">may – aug 2025</span>
                </div>
                <p className="cv-summary">
                  assisted Professor Daniel Shiffman in his course{" "}
                  <i>computational text</i> (formerly programming a to z),
                  leading technical research and developing resources for
                  equitable pedagogy with a focus on ml models and
                  accessibility.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> machine learning,
                  syllabus design, research
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">camp counselor, itp camp</div>
                  <span className="cv-role-date">jun – jul 2025</span>
                </div>
                <p className="cv-summary">
                  supported 150+ participants at nyu’s itp camp by providing
                  hands-on technical help, running workshops, coordinating
                  events, and producing the final showcase.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> community support,
                  event coordination, technical assistance
                </p>
              </div>
            </div>
          </div>

          {/* ml5.js (grouped) */}
          <div className="cv-item grouped">
            <div className="cv-company-row">
              <div className="cv-company">
                <a
                  href="https://ml5js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ml5.js
                </a>
              </div>
              <span className="cv-date">jun 2025 – present</span>
            </div>

            <div className="cv-roles">
              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    ml5.js researcher, speech-to-text
                  </div>
                  <span className="cv-role-date">sep 2025 – present</span>
                </div>
                <p className="cv-summary">
                  researching and prototyping speech-to-text models with the
                  goal of integrating accessible, browser-based transcription
                  into transformer.js.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> javascript, web-based
                  machine learning, research, speech recognition
                </p>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    open source contributor, web development & community
                  </div>
                  <span className="cv-role-date">jun 2025 – aug 2025</span>
                </div>
                <p className="cv-summary">
                  contributed to ml5.js through technical development,
                  documentation, and community support; published a public pull
                  request improving the ml5.js website and documentation
                  experience, with a focus on accessibility and clearer
                  onboarding for creative learners.
                </p>
                <p className="cv-skills">
                  <span className="label">skills:</span> gatsby, docsify,
                  javascript, ui design, research
                </p>
              </div>
            </div>
          </div>

          {/* other*/}
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                software engineer & creative technologist intern, floreo labs
              </div>
              <span className="cv-date">jan – may 2020</span>
            </div>
            <p className="cv-summary">
              developed responsive front-end applications in react.js, designed
              ui/ux prototypes in adobe xd, and contributed to mobile
              development projects while managing agile workflows and producing
              technical documentation.
            </p>
            <p className="cv-skills">
              <span className="label">skills:</span> react.js, mobile
              development, ui/ux design, agile project management
            </p>
          </div>
        </div>
      </section>

      {/* creative explorations */}
      <section className="cv-section creative-explorations">
        <h2 className="cv-heading">creative explorations + selected work</h2>
        <div className="cv-list">
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">print + code gallery</div>
              <span className="cv-date">dec 2025</span>
            </div>
            <div className="cv-org">
              nyu tandon school of engineering · brooklyn, ny
            </div>
            <p className="cv-summary">
              exhibited generative and computational print work exploring the
              relationship between code, materiality, and experimental
              publishing.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                tendertronics, analog circuit performance
              </div>
              <span className="cv-date">dec 2025</span>
            </div>
            <div className="cv-org">
              new interfaces for musical expression (nime), nyu itp ·
              littlefield, ny
            </div>
            <p className="cv-summary">
              performed an analog electronic instrument exploring minimal
              interfaces, attentive listening, and embodied sound interaction
              through handcrafted circuitry.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                lightning talk speaker, exploring creativity in the age of ai
              </div>
              <span className="cv-date">oct 2025</span>
            </div>
            <div className="cv-org">nyu global show & tell · new york, ny</div>
            <p className="cv-summary">
              presented <i>open tools, soft interfaces</i>, discussing
              contributions to ml5.js and open-source machine learning, and
              framing creativity in ai through openness, design as dialogue, and
              human-centered interfaces.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                un open source week hackathon, ahead of the storm challenge
              </div>
              <span className="cv-date">jun 2025</span>
            </div>
            <div className="cv-org">
              united nations headquarters · new york, ny
            </div>
            <p className="cv-summary">
              participated in a global hackathon focused on open-source
              solutions for child-centered climate emergency response,
              contributing geospatial analysis and collaborative design work.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                the internet book, annual publication on the poetic web
              </div>
              <span className="cv-date">may 2025</span>
            </div>
            <p className="cv-summary">
              featured for <i>electrocute.io</i>, a collection of
              soft-technology and poetic computing experiments, in a curated
              directory of designers, developers, writers, and digital artists.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">static chic</div>
              <span className="cv-date">may 2025</span>
            </div>
            <div className="cv-org">
              volt couture, wearables + e-textiles open mic · nyc resistor,
              brooklyn, ny
            </div>
            <p className="cv-summary">
              presented <i>static chic</i>, a 3d-printed inductive handbag that
              wirelessly lights embedded leds, as part of a wearables and
              e-textiles open mic curated by kari love and liza stark.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">rejects, a benefit auction</div>
              <span className="cv-date">may 2025</span>
            </div>
            <div className="cv-org">culturehub · new york, ny</div>
            <p className="cv-summary">
              contributed three oddities from my personal archive,{" "}
              <i>gothic teacrypt</i>, <i>orbit offtrack</i>, and{" "}
              <i>pixel shell</i>, to a curated auction celebrating discarded
              prototypes and creative misfires.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">soft glitch, e-textile swatch</div>
              <span className="cv-date">jan – mar 2025</span>
            </div>
            <div className="cv-org">
              radiant fibers exhibition, nyu clive davis gallery · brooklyn, ny
            </div>
            <p className="cv-summary">
              exhibited an e-textile swatch combining punch needle, chaotic
              yarns, and electroluminescent thread to explore digital disruption
              through texture and light.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">mit reality hack 2025</div>
              <span className="cv-date">jan 2025</span>
            </div>
            <div className="cv-org">
              massachusetts institute of technology · cambridge, ma
            </div>
            <p className="cv-summary">
              implemented sound and haptic feedback for <i>hangarpro vr</i>, a
              virtual reality training simulation using cognitive3d to enhance
              pre-flight safety through visual interaction analysis.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                ecothreads, sustainable smart textiles workshop
              </div>
              <span className="cv-date">oct 2024</span>
            </div>
            <div className="cv-org">
              hybrid body lab, cornell tech · new york, ny
            </div>
            <p className="cv-summary">
              explored sustainable e-textile fabrication by creating
              biodegradable thermo-chromic conductive threads using a diy
              wet-spinning process.
            </p>
          </div>
        </div>
      </section>

      {/* education */}
      <section className="cv-section education">
        <h2 className="cv-heading">education</h2>
        <div className="cv-list">
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                mps, interactive telecommunications program (itp)
              </div>
              <span className="cv-date">expected may 2026</span>
            </div>
            <div className="cv-org">
              new york university, tisch school of the arts
            </div>
            <div className="cv-affiliations">
              <strong>affiliations:</strong> ml5.js (web/community/research) ·
              equitable syllabus project (web/research) · adjacent (editor/web)
              · nyu ability project, making fashion accessible
              (design/fabrication, hardware/software/tool hacking)
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                experimental programming (creative coding & design)
              </div>
              <span className="cv-date">jun 2022 – mar 2025</span>
            </div>
            <div className="cv-org">
              school for poetic computation, new york (remote)
            </div>
            <p className="cv-skills">
              <span className="label">coursework:</span> gift interfaces;
              httpoetics; the musical web; algorithmic botany; expressive game
              design
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">bs, computer science</div>
              <span className="cv-date">dec 2020</span>
            </div>
            <div className="cv-org">
              city university of new york, lehman college
            </div>
            <div className="cv-activities">
              <strong>activities:</strong> tech talent pipeline (ttp), women in
              computer science (wics), google developer group (gdg)
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                software engineering residency, cuny 2x tech / nyc tech talent
                pipeline
              </div>
              <span className="cv-date">nov 2019 – may 2020</span>
            </div>
            <div className="cv-org">
              city university of new york, lehman college
            </div>
            <p className="cv-summary">
              4-week web development and professional skills bootcamp.
            </p>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                bba, business administration (international business) · minor in
                journalism
              </div>
              <span className="cv-date">sep 2012</span>
            </div>
            <div className="cv-org">
              city university of new york, lehman college
            </div>
          </div>
        </div>
      </section>

      {/* honors + awards */}
      <section className="cv-section honors">
        <h2 className="cv-heading">honors + awards</h2>
        <ul className="cv-bullets">
          <li>
            o’reilly deij scholarship, o’reilly{" "}
            <span className="cv-date-inline">2024</span>
          </li>
          <li>
            nyu tisch school of the arts graduate scholarship, new york
            university <span className="cv-date-inline">2024</span>
          </li>
          <li>
            grace hopper scholarship, google / anitab.org{" "}
            <span className="cv-date-inline">2019–2022</span>
          </li>
          <li>
            bertelsmann technology scholarship, udacity{" "}
            <span className="cv-date-inline">2022</span>
          </li>
          <li>
            presidential scholar, cuny lehman college{" "}
            <span className="cv-date-inline">2020</span>
          </li>
        </ul>
      </section>

      {/* technologies */}
      <section className="cv-section technologies">
        <h2 className="cv-heading">technologies</h2>
        <p className="cv-summary">
          front-end / web (javascript, react, next.js, html/css) · ui/ux ·
          interaction design · git/github · creative coding (p5.js, ml5.js) ·
          data (sql, data analysis) · physical computing (arduino, raspberry pi,
          adafruit/sparkfun) · fabrication (laser cutting, 3d modeling &
          printing)
        </p>
      </section>

      {/* tools & platforms */}
      <section className="cv-section tools">
        <h2 className="cv-heading">tools & platforms</h2>
        <p className="cv-summary">
          vs code · figma · arduino ide · fritzing · warp terminal · obsidian ·
          notion · craft docs · wordpress · adobe creative suite (illustrator,
          photoshop, xd, fresco)
        </p>
      </section>

      {/* certifications */}
      <section className="cv-section certifications">
        <h2 className="cv-heading">certifications</h2>
        <ul className="certifications-list">
          <li>
            artificial intelligence & machine learning, samsung innovation
            campus <span className="cv-date-inline">2022–2023</span>
          </li>
          <li>
            human computer interaction, interaction design foundation{" "}
            <span className="cv-date-inline">2022</span>
          </li>
          <li>
            google ux design, coursera{" "}
            <span className="cv-date-inline">2021</span>
          </li>
        </ul>
      </section>

      {/* interests */}
      <section className="cv-section interests">
        <h2 className="cv-heading">interests</h2>
        <p className="cv-summary">
          soft computing and interfaces; electronics and e-textiles; wearable
          technologies; inclusive and open-source tools; experimental
          interaction design; creative research; electronic text, digital
          archives, and creative writing.
        </p>
      </section>
    </div>
  );
}
