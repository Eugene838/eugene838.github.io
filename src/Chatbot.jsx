import { useState } from 'react';

const greeting = { role: 'assistant', content: "Hi. I can answer questions about Eugene's skills, experience, education, and contact links." };

function localReply(question) {
  const q = question.toLowerCase();
  if (q.includes('2017')) return 'July 2017 – December 2017: Intern at DigiFort\n• Digitalized leave-taking using Java and MySQL\n• Built Windows Forms CRUD functionality for leave records\n• Added leave and pro-rated leave calculations';
  if (q.includes('2022') || q.includes('2023') || q.includes('2024')) return 'February 2022 – July 2025: Software Engineering L2 Production Support at NCS for SMMTS\n• Handled tickets within service-level agreements\n• Troubleshot applications and resolved defects\n• Performed root-cause analysis and communicated progress to stakeholders';
  if (q.includes('2025') || q.includes('secureconnect') || q.includes('current')) return 'August 2025 – Present: Support Engineer at NCS for SecureConnect\n• Analyzes Linux logs and troubleshoots middleware\n• Integrates external applications with middleware services\n• Built an AWS SES SMTP extension for reliable automated email delivery';
  if (q.includes('skill') || q.includes('technology')) return "Eugene's skills include Java, PHP, JavaScript, MySQL, Python, HTML, Angular, and Linux.";
  if (q.includes('experience') || q.includes('work')) return 'Eugene has experience in production support, middleware integration, Linux troubleshooting, and application development. The Experience section has the full timeline.';
  if (q.includes('school') || q.includes('education')) return 'Eugene holds a Cyber Security degree from the University of Wollongong and a Diploma in Information Technology from Temasek Polytechnic.';
  if (q.includes('contact') || q.includes('linkedin') || q.includes('github')) return 'Use the LinkedIn or GitHub links in the navigation bar to connect with Eugene.';
  return "I can help with Eugene's skills, experience, education, GitHub, or LinkedIn. Try asking about one of those.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([greeting]);
  function sendMessage(event) {
    event.preventDefault();
    const question = draft.trim();
    if (!question) return;
    setMessages((current) => [...current, { role: 'user', content: question }, { role: 'assistant', content: localReply(question) }]);
    setDraft('');
  }
  return <aside className="chatbot">
    <button className="chat-launcher" type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="resume-chat"><span className="chat-launcher-icon" aria-hidden="true">{isOpen ? '×' : '✉'}</span><span>{isOpen ? 'Close' : 'Ask about Eugene'}</span></button>
    {isOpen && <section id="resume-chat" className="chat-panel" aria-label="Resume assistant">
      <header className="chat-header"><div><p className="eyebrow">Resume assistant</p><h2>Ask about Eugene</h2></div><span className="status" aria-label="Assistant online" /></header>
      <div className="chat-messages" aria-live="polite">{messages.map((message, index) => <p className={`message ${message.role}-message`} key={`${message.role}-${index}`}>{message.content}</p>)}</div>
      <form className="chat-form" onSubmit={sendMessage}><label className="sr-only" htmlFor="chat-input">Ask a question</label><input id="chat-input" name="question" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about skills or experience" autoComplete="off" /><button type="submit" disabled={!draft.trim()} aria-label="Send question">Send</button></form>
    </section>}
  </aside>;
}
