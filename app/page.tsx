import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
import CredlyBadges from "@/components/credly-badges";
import {
  skills,
  featuredProjects,
  otherProjects,
  experience,
  social,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <header id="hero">
        <ThemeToggle />
        <div className="hero-content">
          <p className="hello">Hello! 👋🏽</p>
          <p className="intro">
            I&apos;m <b>Veerabhadra Swamy</b>, an engineer focused on designing,
            automating, integrating, deploying, and operating enterprise
            systems. 👨‍💻
          </p>
          <p className="getintouch">
            Get in touch 👉{" "}
            <span>
              <a className="external-link" href={`mailto:${social.email}`}>
                {social.email}
              </a>
            </span>
          </p>
        </div>
      </header>

      <main>
        <section id="background" className="section">
          <h3 className="section-title">BACKGROUND</h3>
          <div className="section-content">
            <p>
              I enjoy solving complex technical and business challenges. My
              experience spans Product Lifecycle Management (PLM), enterprise
              software implementations, automation, system integration, CI/CD,
              infrastructure, and software development — delivered across the
              full solution lifecycle, from requirements gathering and solution
              design to implementation, deployment, operational support, and
              continuous improvement.
            </p>
            <p>
              I don&apos;t assume a problem is difficult because it is
              unfamiliar. I start by{" "}
              <span className="bold-word">
                understanding the system, identifying the relationships between
                its components, and building solutions from first principles.
              </span>{" "}
              My goal is to continue growing as an engineer who bridges the gap
              between business requirements and technical implementation,
              helping organizations build reliable, scalable, and efficient
              systems.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h3 className="section-title">EXPERIENCE</h3>
          <div className="section-content">
            {experience.map((item) => (
              <article className="experience-card" key={item.role}>
                <div className="experience-header">
                  <h4 className="experience-role">{item.role}</h4>
                  <span className="experience-period">{item.period}</span>
                </div>
                <p className="experience-company">{item.company}</p>
                {item.location && (
                  <p className="experience-location">{item.location}</p>
                )}
                {item.description && (
                  <p className="experience-desc">{item.description}</p>
                )}
                <ul className="experience-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.tags && (
                  <ul className="project-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h3 className="section-title">TECHNOLOGIES &amp; TOOLS</h3>
          <div className="section-content">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skills" key={category}>
                <h3 className="skills-category">{category}</h3>
                <ul className="skills-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="featured-projects" className="section">
          <h3 className="section-title">FEATURED PROJECTS</h3>
          <div className="section-content">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                {project.icon && (
                  <a
                    href={project.url}
                    className="external-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      className="featured-project-image"
                      src={`/gifs/${project.icon}`}
                      alt={project.title}
                      width={600}
                      height={400}
                      priority
                    />
                  </a>
                )}
                <div className="project-details">
                  <div className="project-header">
                    <div>
                      {project.url ? (
                        <a
                          href={project.url}
                          className="external-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h4 className="project-title">
                            {project.title}{" "}
                            <span className="project-arrow">↗</span>
                          </h4>
                        </a>
                      ) : (
                        <h4 className="project-title">{project.title}</h4>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="external-link project-github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-github" /> GitHub
                        </a>
                      )}
                    </div>
                    {project.period && (
                      <span className="experience-period">
                        {project.period}
                      </span>
                    )}
                  </div>
                  <p className="project-desc">{project.description}</p>
                  {project.features && (
                    <ul className="experience-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  {project.tags && (
                    <ul className="project-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="other-projects" className="section">
          <h3 className="section-title">OTHER PROJECTS</h3>
          <div className="section-content">
            {otherProjects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-header">
                  <div>
                    {project.url ? (
                      <a
                        href={project.url}
                        className="external-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4 className="project-title">
                          {project.title}{" "}
                          <span className="project-arrow">↗</span>
                        </h4>
                      </a>
                    ) : (
                      <h4 className="project-title">{project.title}</h4>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="external-link project-github"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-github" /> GitHub
                      </a>
                    )}
                  </div>
                  {project.period && (
                    <span className="experience-period">{project.period}</span>
                  )}
                </div>
                <p className="project-desc">{project.description}</p>
                {project.features && (
                  <ul className="experience-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}
                {project.tags && (
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="badges" className="section">
          <h3 className="section-title">BADGES EARNED</h3>
          <CredlyBadges />
        </section>
      </main>

      <footer id="footer">
        <p>Developed By Veerabhadra Swamy Uppu 😁 2026</p>
        <nav>
          <a className="external-link" href={`mailto:${social.email}`}>
            EMAIL
          </a>
          <a
            className="external-link"
            href={social.github}
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            className="external-link"
            href={social.codepen}
            target="_blank"
            rel="noreferrer"
          >
            CODEPEN
          </a>
          <a
            className="external-link"
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </nav>
        <ul className="social-icons">
          <li>
            <a href={`mailto:${social.email}`} className="external-link">
              <i className="bi bi-envelope" />
            </a>
          </li>
          <li>
            <a
              href={social.github}
              className="external-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github" />
            </a>
          </li>
          <li>
            <a
              href={social.linkedin}
              className="external-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}