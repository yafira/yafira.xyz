import React from "react";
import MobileBack from "@/app/components/MobileBack";
import CVFullToggle from "@/app/components/CVFullToggle";

export const metadata = {
  title: "Yafira | cv",
};

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

      {/* jump links, so the long page is easy to move around */}
      <nav className="cv-jump" aria-label="cv sections">
        <a href="#experience">experience</a>
        <a href="#selected-work">selected work</a>
        <a href="#education">education</a>
        <a href="#honors">honors</a>
        <a href="#skills">skills</a>
        <CVFullToggle />
      </nav>

      {/* experience */}
      <section className="cv-section experience" id="experience">
        <h2 className="cv-heading">experience</h2>

        <div className="cv-list">
          {/* electrocute lab */}
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                founder, design engineer & creative technologist, electrocute
                lab
              </div>
              <span className="cv-date">jan 2023 – present</span>
            </div>
            <div className="cv-more">
              <p className="cv-summary">
                tinkerer-in-chief at electrocute lab, my independent creative
                technology practice spanning soft electronics, physical computing,
                and web-based tools. i design and build interactive prototypes,
                write code, and develop educational resources that make circuitry
                and hardware more approachable — sharing the process through
                documentation, writing, and open-source projects. ongoing work
                also shared{" "}
                <a
                  href="https://www.instagram.com/electrocutelab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @electrocutelab{" "}
                </a>
                on instagram. in nov 2026 i launched{" "}
                <a
                  href="https://craftcomputery.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  craftcomputery
                </a>
                , the lab&apos;s craft-tech r&amp;d division and artisanal shop
                for handmade computing.
              </p>
              <p className="cv-skills">
                <span className="label">skills:</span> physical computing, soft
                electronics, web development, technical writing, open-source
              </p>
            </div>
          </div>

          {/* kurppa hosk */}
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                creative technologist, brand systems, kurppa hosk
              </div>
              <span className="cv-date">oct 2026 – nov 2026</span>
            </div>
            <div className="cv-more">
              <p className="cv-summary">
                contract role with the brand and communications team at a global
                brand and design agency, explored how ai can extend creative
                work. led focused sprints prototyping ai-assisted creative
                production, evaluated and built new features for brand os,
                the agency’s brand systems platform, alongside the engineering
                team at above, and shared findings and recommendations with the
                wider team.
              </p>
              <p className="cv-skills">
                <span className="label">skills:</span> front-end development, ui
                engineering, brand systems, creative prototyping, ai tooling
                research
              </p>
            </div>
          </div>

          {/* nyu (grouped) */}
          <div className="cv-item grouped">
            <div className="cv-company-row">
              <div className="cv-company">new york university (itp/ima)</div>
              <span className="cv-date">nov 2024 - jul 2026</span>
            </div>

            <div className="cv-roles">
              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    lead camp counselor, itp camp
                  </div>
                  <span className="cv-role-date">may 2026 - jul 2026</span>
                </div>
                <div className="cv-more">
                  <p className="cv-summary">
                    supporting 150+ participants at nyu’s itp camp by providing
                    hands-on technical help, mentoring first-year counselors
                    across day-to-day camp operations, coordinating events, and
                    producing the final showcase.
                  </p>
                  <p className="cv-skills">
                    <span className="label">skills:</span> community support,
                    event coordination, technical assistance
                  </p>
                </div>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    teaching assistant, intro to wearables
                  </div>
                  <span className="cv-role-date">jan 2026 – may 2026</span>
                </div>
                <div className="cv-more">
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
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    web application developer & designer, useless machines
                    archive
                  </div>
                  <span className="cv-role-date">mar 2025 – may 2026</span>
                </div>
                <div className="cv-more">
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
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    lead web developer, equitable syllabus project
                  </div>
                  <span className="cv-role-date">nov 2024 – may 2026</span>
                </div>
                <div className="cv-more">
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
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    teaching assistant, creative computing
                  </div>
                  <span className="cv-role-date">sep 2025 – dec 2025</span>
                </div>
                <div className="cv-more">
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
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    research assistant, computational text
                  </div>
                  <span className="cv-role-date">may 2025 – aug 2025</span>
                </div>
                <div className="cv-more">
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
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">camp counselor, itp camp</div>
                  <span className="cv-role-date">jun 2025 – jul 2025</span>
                </div>
                <div className="cv-more">
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
              <span className="cv-date">jun 2025 – may 2026</span>
            </div>

            <div className="cv-roles">
              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    ml5.js researcher, speech-to-text
                  </div>
                  <span className="cv-role-date">sep 2025 – dec 2025</span>
                </div>
                <div className="cv-more">
                  <p className="cv-summary">
                    researching and prototyping speech-to-text models with the
                    goal of integrating accessible, browser-based transcription
                    into transformers.js.
                  </p>
                  <p className="cv-skills">
                    <span className="label">skills:</span> javascript, web-based
                    machine learning, research, speech recognition
                  </p>
                </div>
              </div>

              <div className="cv-role">
                <div className="cv-role-meta">
                  <div className="cv-role-title">
                    open source contributor, web development & community
                  </div>
                  <span className="cv-role-date">jun 2025 – aug 2025</span>
                </div>
                <div className="cv-more">
                  <p className="cv-summary">
                    contributed to ml5.js through development, documentation, and
                    community support. built two custom docsify plugins for the
                    documentation site (inline code explanations, and
                    copy-to-clipboard with a toast), merged through a public pull
                    request and{" "}
                    <a
                      href="https://ml5js.org/blog/docsify-plugins-soft-ui/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      written up on the ml5.js blog
                    </a>
                    , with a focus on accessibility and clearer onboarding for
                    creative learners.
                  </p>
                  <p className="cv-skills">
                    <span className="label">skills:</span> gatsby, docsify,
                    javascript, ui design, research
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* other*/}
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                software engineer & creative technologist intern, floreo labs
              </div>
              <span className="cv-date">jan 2020 – may 2020</span>
            </div>
            <div className="cv-more">
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
        </div>
      </section>

      {/* creative explorations */}
      <section className="cv-section creative-explorations" id="selected-work">
        <h2 className="cv-heading">selected work + creative explorations</h2>
        <div className="cv-year">
          <div className="cv-year-label">2026</div>
          <div className="cv-list">
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">open hardware summit fellow</div>
                <span className="cv-date">feb – present</span>
              </div>
              <div className="cv-org">
                open source hardware association · berlin, germany
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  selected as a 2026 fellow to exhibit <i>the soft computer mini</i>
                  , a travel-ready extension of my nyu itp master&apos;s thesis,
                  along with additional experimental open-source hardware and soft
                  interface projects exploring tactile computing and alternative
                  interaction design.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  girl irl, zine release + group exhibition
                </div>
                <span className="cv-date">nov</span>
              </div>
              <div className="cv-org">powrplnt × no such thing · brooklyn, ny</div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited the soft computer at the release party and gallery show
                  for the zine <i>girl irl</i>, organized with the tech-education
                  nonprofit powrplnt to celebrate the opening of its new computer
                  lab at no such thing.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  they make you write your poems, group exhibition + panel
                </div>
                <span className="cv-date">oct</span>
              </div>
              <div className="cv-org">onassis onx · new york, ny</div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited the soft computer, pocket oracle of time, and ribbon
                  logic in <i>artistic practices amid automated cognition</i>,
                  curated by giulia colletti, and spoke on the show&apos;s panel,
                  co-hosted by the american academy in rome.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">computer.garden()</div>
                <span className="cv-date">oct</span>
              </div>
              <div className="cv-org">
                processing community day @ nyc 2026 · new york, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited a computer generative sketch that grows soft-circuit
                  gardens, using breadth-first search (bfs) maze-routing to wire
                  each one and rendering it in a bayer-dithered e-ink aesthetic.{" "}
                  <a
                    href="https://openprocessing.org/@electrocute/3004986"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view it live
                  </a>{" "}
                  and click to regrow.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">tiny soft computers workshop</div>
                <span className="cv-date">aug – oct</span>
              </div>
              <div className="cv-org">
                softer digital futures (remote residency + conference) · denmark
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  co-designed + co-taught an intro to physical computing and
                  alternative interfaces with alanna okun for 16 participants,
                  developed remotely over a two-month residency and taught in person
                  in denmark. led the hardware and software: designed the
                  microcontroller + e-ink display kit, wrote the circuitpython code,
                  and preloaded and tested every kit. built the{" "}
                  <a
                    href="https://tiny-soft-computer.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    workshop website
                  </a>
                  , which doubles as open-source documentation for educators who
                  want to teach it themselves.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">intro to machine learning workshop</div>
                <span className="cv-date">jul</span>
              </div>
              <div className="cv-org">
                nyu college & career lab (ccl) · new york city, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  designed + co-led a hands-on machine learning workshop for ~60
                  middle school students, building an image-classification game with
                  ml5.js and p5.js using teachable machine; developed a 16-slide
                  deck and a dual-mode game to introduce students to training and
                  using their own ml models.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">petalbyte</div>
                <span className="cv-date">jun</span>
              </div>
              <div className="cv-org">
                bring your own data (byod): a creative tech potluck · ny tech week
                · brooklyn, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  showcased a portable generative text device built with a raspberry
                  pi and python/pygame that reads and generates poetic text from a
                  flower-shaped laser-cut acrylic usb drive — treating local,
                  personal writing and text corpora as both archive and interface
                  for electronic text.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  soft circuit boards (scbs) workshop
                </div>
                <span className="cv-date">jun</span>
              </div>
              <div className="cv-org">itp camp · nyu</div>
              <div className="cv-more">
                <p className="cv-summary">
                  designed + taught a hands-on workshop on handmade circuits: copper
                  tape traces, craft foam boards, LEDs — no soldering, no experience
                  needed. developed through soft interfaces, an extension of my
                  creative practice electrocute lab, and grown from the soft circuit
                  library (exhibited at the electronics faire, temple university)
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">the soft computer mini</div>
                <span className="cv-date">may</span>
              </div>
              <div className="cv-org">
                open source hardware association, open hardware summit · berlin,
                germany
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  selected as a 2026 open hardware summit fellow and presented the
                  soft computer mini — a travel-ready extension of my master&apos;s
                  thesis exploring embodied input, generative text, and textile as
                  substrate, compressed into a tarot-sized device.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">the soft computer</div>
                <span className="cv-date">may</span>
              </div>
  
              <div className="cv-org">
                nyu interactive telecommunications program (itp) master&apos;s
                thesis · periphery, nyc resistor
              </div>
  
              <div className="cv-more">
                <p className="cv-summary">
                  a textile-based computing interface combining machine-knit wool,
                  capacitive fabric inputs, haptics, and a flexible e-ink display.
                  powered by a raspberry pi 5, the system generates text using
                  markov chains across four corpus-mapped channels.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">soft circuit library</div>
                <span className="cv-date">apr</span>
              </div>
              <div className="cv-org">
                electronics faire (theme: repair) · temple university libraries
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  a collection of handmade textile circuit boards organized as a
                  living archive, each designed to be handled, studied, and repaired
                  by touch. visible repair notes and patched connections treat
                  maintenance as part of the circuit&apos;s ongoing life.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  guardians of the groceries (g.o.t.g.) — team awarded ☆ best of
                  software ☆
                </div>
                <span className="cv-date">apr</span>
              </div>
              <div className="cv-org">
                playfulnyc 2026 hackathon · parsons school of design · new york,
                ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  contributed to a handheld esp32-based device for documenting nyc
                  bodega cats — point the camera, press a soft conductive fabric
                  button, and the device captures a photo, uploads it to supabase
                  via wifi, and opens a new file in the g.o.t.g. registry. each
                  entry is browsable on the live site, where every cat has an alter
                  ego, a dossier of hidden powers, and a classified cuteness rating.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">pocket oracle of time</div>
                <span className="cv-date">feb – apr</span>
              </div>
              <div className="cv-org">
                complications, horological society of new york (hsny) · new york,
                ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited a handheld timekeeping device combining a real-time
                  clock and e-ink display with poetic prompts that appear throughout
                  the day, reframing time as an emotional and reflective experience
                  rather than a purely mechanical measure.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">enoki, focus companion</div>
                <span className="cv-date">mar</span>
              </div>
              <div className="cv-org">
                hard mode: hardware x ai hackathon · mit media lab · cambridge, ma
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  built the software layer for <i>enoki</i>, a living focus
                  companion that thrives when you&apos;re on task and wilts when you
                  drift. designed the react native app, integrated mentra smart
                  glasses via the mentra sdk, and connected claude vision ai for
                  real-time attention detection, with a bun + hono backend handling
                  coaching nudges and session reflections.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">moon pocket</div>
                <span className="cv-date">jan</span>
              </div>
              <div className="cv-org">
                pedestal playtime: art toy & tech toy open mic, nyc resistor ·
                brooklyn, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  showcased a connected device built with an Arduino Nano 33 IoT
                  that fetches real-time moon and tide data from public web APIs and
                  renders it on a round TFT display through touch-based interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-year">
          <div className="cv-year-label">2025</div>
          <div className="cv-list">
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">print + code gallery</div>
                <span className="cv-date">dec</span>
              </div>
              <div className="cv-org">
                nyu tandon school of engineering · brooklyn, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited generative and computational print work exploring the
                  relationship between code, materiality, and experimental
                  publishing.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  tendertronic, analog circuit performance
                </div>
                <span className="cv-date">dec</span>
              </div>
              <div className="cv-org">
                new interfaces for musical expression (nime), nyu itp ·
                littlefield, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  performed an analog electronic instrument exploring minimal
                  interfaces, attentive listening, and embodied sound interaction
                  through handcrafted circuitry.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  lightning talk speaker, exploring creativity in the age of ai
                </div>
                <span className="cv-date">oct</span>
              </div>
              <div className="cv-org">nyu global show & tell · new york, ny</div>
              <div className="cv-more">
                <p className="cv-summary">
                  presented <i>open tools, soft interfaces</i>, discussing
                  contributions to ml5.js and open-source machine learning, and
                  framing creativity in ai through openness, design as dialogue, and
                  human-centered interfaces.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  un open source week hackathon, ahead of the storm challenge
                </div>
                <span className="cv-date">jun</span>
              </div>
              <div className="cv-org">
                united nations headquarters · new york, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  participated in a global hackathon focused on open-source
                  solutions for child-centered climate emergency response,
                  contributing geospatial analysis and collaborative design work.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">static chic</div>
                <span className="cv-date">may</span>
              </div>
              <div className="cv-org">
                volt couture, wearables + e-textiles open mic · nyc resistor,
                brooklyn, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  presented <i>static chic</i>, a 3d-printed inductive handbag that
                  wirelessly lights embedded leds, as part of a wearables and
                  e-textiles open mic curated by kari love and liza stark.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">rejects, a benefit auction</div>
                <span className="cv-date">may</span>
              </div>
              <div className="cv-org">culturehub · new york, ny</div>
              <div className="cv-more">
                <p className="cv-summary">
                  contributed three oddities from my personal archive,{" "}
                  <i>gothic teacrypt</i>, <i>orbit offtrack</i>, and{" "}
                  <i>pixel shell</i>, to a curated auction celebrating discarded
                  prototypes and creative misfires.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  <a
                    href="https://internetphonebook.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the internet book
                  </a>
                  , annual publication on the poetic web
                </div>
                <span className="cv-date">may</span>
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  featured for{" "}
                  <a
                    href="https://electrocute.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i>electrocute.io</i>
                  </a>
                  , a collection of soft-technology and poetic computing
                  experiments, in a curated directory of designers, developers,
                  writers, and digital artists.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">soft glitch, e-textile swatch</div>
                <span className="cv-date">jan – mar</span>
              </div>
              <div className="cv-org">
                radiant fibers exhibition, nyu clive davis gallery · brooklyn, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  exhibited an e-textile swatch combining punch needle, chaotic
                  yarns, and electroluminescent thread to explore digital disruption
                  through texture and light.
                </p>
              </div>
            </div>
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">mit reality hack 2025</div>
                <span className="cv-date">jan</span>
              </div>
              <div className="cv-org">
                massachusetts institute of technology · cambridge, ma
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  implemented sound and haptic feedback for <i>hangarpro vr</i>, a
                  virtual reality training simulation using cognitive3d to enhance
                  pre-flight safety through visual interaction analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-year">
          <div className="cv-year-label">2024</div>
          <div className="cv-list">
            <div className="cv-item">
              <div className="cv-meta">
                <div className="cv-title">
                  ecothreads, sustainable smart textiles workshop
                </div>
                <span className="cv-date">oct</span>
              </div>
              <div className="cv-org">
                hybrid body lab, cornell tech · new york, ny
              </div>
              <div className="cv-more">
                <p className="cv-summary">
                  selected participant contributing to research on sustainable
                  e-textile fabrication, developing biodegradable thermo-chromic
                  conductive threads through a DIY wet-spinning process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* education */}
      <section className="cv-section education" id="education">
        <h2 className="cv-heading">education</h2>
        <div className="cv-list">
          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">
                mps, interactive telecommunications program (itp)
              </div>
              <span className="cv-date">may 2026</span>
            </div>
            <div className="cv-org">
              new york university, tisch school of the arts
            </div>
            <div className="cv-more">
              <div className="cv-affiliations">
                <strong>affiliations:</strong> ml5.js (web/community/research) ·
                itp camp · equitable syllabus project (web/research) · adjacent
                (editor/web) · nyu ability lab (vertically integrated project;
                accessibility-focused design, fabrication, and hardware/software
                tool prototyping for fashion and assistive technology)
              </div>
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
            <div className="cv-more">
              <p className="cv-skills">
                <span className="label">coursework:</span> gift interfaces;
                httpoetics; the musical web; algorithmic botany; expressive game
                design
              </p>
            </div>
          </div>

          <div className="cv-item">
            <div className="cv-meta">
              <div className="cv-title">bs, computer science</div>
              <span className="cv-date">dec 2020</span>
            </div>
            <div className="cv-org">
              city university of new york, lehman college
            </div>
            <div className="cv-more">
              <div className="cv-activities">
                <strong>activities:</strong> tech talent pipeline (ttp), women in
                computer science (wics), google developer group (gdg)
              </div>
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
            <div className="cv-more">
              <p className="cv-summary">
                4-week web development and professional skills bootcamp.
              </p>
            </div>
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
      <section className="cv-section honors" id="honors">
        <h2 className="cv-heading">honors + awards</h2>
        <ul className="cv-bullets">
          <li>
            open hardware summit fellow, open source hardware association{" "}
            <span className="cv-date-inline">2026</span>
          </li>
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

      {/* skills, tools, certifications and interests, all in one grid */}
      <section className="cv-section skills" id="skills">
        <h2 className="cv-heading">skills + more</h2>
        <dl className="cv-skill-grid">
          <dt>technologies</dt>
          <dd>
            front-end / web (javascript, react, next.js, html/css) · ui/ux ·
          interaction design · git/github · creative coding (p5.js, ml5.js) ·
          data (sql, data analysis) · physical computing (arduino, raspberry pi,
          esp32, adafruit/sparkfun) · fabrication (laser cutting, 3d modeling &
          printing)
          </dd>
          <dt>tools + platforms</dt>
          <dd>
            vs code · figma · arduino ide · fritzing · warp terminal · obsidian ·
          notion · craft docs · wordpress · adobe creative suite (illustrator,
          photoshop, xd, fresco)
          </dd>
          <dt>certifications</dt>
          <dd>
            <ul className="cv-skill-list">
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
          </dd>
          <dt>interests</dt>
          <dd>
            soft computing and interfaces; electronics and e-textiles; wearable
          technologies; inclusive and open-source tools; experimental
          interaction design; creative research; electronic text, digital
          archives, and creative writing.
          </dd>
        </dl>
      </section>
    </div>
  );
}
