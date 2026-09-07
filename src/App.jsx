import Chatbot from './Chatbot';
import angularLogo from './assets/Angular.png';
import htmlLogo from './assets/html.png';
import javaLogo from './assets/java.png';
import javascriptLogo from './assets/javascript.png';
import linuxLogo from './assets/linux.png';
import mysqlLogo from './assets/mysql.png';
import phpLogo from './assets/php.png';
import pythonLogo from './assets/python.png';

const skills = [['Java', javaLogo], ['PHP', phpLogo], ['JavaScript', javascriptLogo], ['MySQL', mysqlLogo], ['Python', pythonLogo], ['HTML', htmlLogo], ['Angular', angularLogo], ['Linux', linuxLogo]];
const roles = [
  { period: 'August 2025 – Present', title: 'NCS · Support Engineer, SecureConnect', details: ['Performs log analysis and middleware troubleshooting in Linux environments.', 'Integrates external applications with middleware services and resolves connectivity issues.', 'Developed an AWS SES SMTP extension for scalable, secure automated email delivery.', 'Performs root-cause analysis and resolves production issues.'] },
  { period: 'February 2022 – July 2025', title: 'NCS · Software Engineering L2 Production Support, SMMTS', details: ['Handled support tickets within service-level agreements.', 'Investigated, troubleshot, and resolved application issues.', 'Performed root-cause analysis and communicated issue progress with stakeholders.', 'Provided 24/7 on-call coverage when needed.'] },
  { period: 'July 2017 – December 2017', title: 'DigiFort · Intern', details: ['Digitalized leave-taking with Java and MySQL.', 'Built Windows Forms CRUD functionality for leave records.', 'Added leave and pro-rated leave calculations.'] },
];

function SocialIcon({ children }) { return <svg viewBox="0 0 512 512" aria-hidden="true">{children}</svg>; }

export default function App() {
  return <>
    <header className="toolbar"><nav aria-label="Primary navigation"><a href="#skills">Skills</a><a href="#experience">Experience</a></nav><div className="social-links"><a aria-label="Eugene Sim on LinkedIn" href="https://www.linkedin.com/in/eugene-sim-63a63724b/" target="_blank" rel="noreferrer"><SocialIcon><path d="M416 32H32C14 32 0 46 0 64v384c0 18 14 32 32 32h384c18 0 32-14 32-32V64c0-18-14-32-32-32zM135 416H69V202h66v214zM102 173a39 39 0 1 1 0-77 39 39 0 0 1 0 77zm282 243h-66V312c0-25 0-57-35-57-35 0-40 27-40 55v106h-66V202h64v29h1c9-17 31-34 63-34 67 0 79 44 79 102v117z" /></SocialIcon></a><a aria-label="Eugene Sim on GitHub" href="https://github.com/Eugene838" target="_blank" rel="noreferrer"><SocialIcon><path d="M256 8C119 8 8 119 8 256c0 110 70 203 169 236 12 2 17-5 17-12v-83c-69 15-84-30-84-30-11-29-28-37-28-37-23-16 2-16 2-16 25 2 39 26 39 26 23 38 59 27 73 21 2-16 9-27 16-34-56-6-112-14-112-111 0-28 8-42 24-59-3-7-11-33 3-68 21-6 69 27 69 27 20-6 42-9 63-9s43 3 63 9c0 0 48-34 69-27 14 35 5 61 3 68 16 17 26 31 26 59 0 97-59 105-115 111 9 8 17 23 17 46v107c0 7 5 14 17 12 99-33 170-126 170-236C504 119 393 8 256 8z" /></SocialIcon></a></div></header>
    <main>
      <section className="hero" aria-labelledby="page-title"><div><p className="hero-kicker">Software Engineer · Support Engineer</p><h1 id="page-title">Eugene Sim<span>.</span></h1></div><p className="hero-note">Building reliable software, solving production problems, and making technical work easier to understand.</p></section>
      <section className="section experience" id="experience" aria-labelledby="experience-title"><p className="section-label" id="experience-title">Experience</p><div className="roles">{roles.map((role) => <article className="role" key={role.period}><p className="role-period">{role.period}</p><h2>{role.title}</h2><ul>{role.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>
      <section className="section skills-section" id="skills" aria-labelledby="skills-title"><p className="section-label" id="skills-title">Skills</p><div className="skills-grid">{skills.map(([name, image]) => <div className="skill-card" key={name}><img src={image} alt="" /><strong>{name}</strong></div>)}</div></section>
      <section className="section education" aria-labelledby="education-title"><p className="section-label" id="education-title">Education</p><div className="timeline"><article><p className="timeline-date">2020 – 2022</p><h2>University of Wollongong</h2><p>Degree in Cyber Security</p><p>Final Year Project: Developed a Dental Health Management Record web application using PHP, HTML, JavaScript, Bootstrap, and MySQL.</p></article><article><p className="timeline-date">2015 – 2017</p><h2>Temasek Polytechnic</h2><p>Diploma in Information Technology</p><p>Interned at DigiFort.</p></article></div></section>
    </main>
    <Chatbot />
  </>;
}
