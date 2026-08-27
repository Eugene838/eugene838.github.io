import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatResponse {
  reply?: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  isOpen = false;
  isLoading = false;
  draft = '';
  messages: ChatMessage[] = [
    {
      role: 'assistant',
      content: 'Hi. I can answer questions about Eugene\'s skills, experience, education, and contact links.'
    }
  ];

  constructor(private http: HttpClient) {}

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(): void {
    const question = this.draft.trim();
    if (!question || this.isLoading) {
      return;
    }

    this.messages.push({ role: 'user', content: question });
    this.draft = '';
    this.isLoading = true;

    this.http.post<ChatResponse>('/api/chat', {
      message: question,
      history: this.messages
    }).subscribe({
      next: response => this.addAssistantReply(response.reply || this.localReply(question)),
      error: () => this.addAssistantReply(this.localReply(question))
    });
  }

  private addAssistantReply(reply: string): void {
    this.messages.push({ role: 'assistant', content: reply });
    this.isLoading = false;
  }

  private localReply(question: string): string {
    const normalizedQuestion = question.toLowerCase();

    if (normalizedQuestion.includes('2017')) {
      return '- <strong><u>July 2017 - December 2017</u></strong>: Intern at DigiFort\n- Digitalized the leave-taking process using Java and MySQL\n- Built Windows Forms functionality for creating, reading, updating, and deleting leave records\n- Added leave and pro-rated leave calculations';
    }

    if (normalizedQuestion.includes('2022') || normalizedQuestion.includes('2023') || normalizedQuestion.includes('2024')) {
      return '- <strong><u>February 2022 - July 2025</u></strong>: Software Engineering L2 Production Support at NCS for SMMTS\n- Handled support tickets within service-level agreements\n- Troubleshot applications and identified and fixed bugs\n- Performed root-cause analysis\n- Communicated issue progress with stakeholders';
    }

    if (normalizedQuestion.includes('august 2025') || normalizedQuestion.includes('onwards')) {
      return '- <strong><u>August 2025 - Present</u></strong>: Support Engineer at NCS for SecureConnect\n- Analyzed logs and troubleshot middleware on Linux environments\n- Integrated external applications with middleware services\n- Developed an AWS SES SMTP extension for scalable and secure automated email delivery\n- Performed root-cause analysis and resolved production issues';
    }

    if (normalizedQuestion.includes('2025')) {
      return '- <strong><u>February 2022 - July 2025</u></strong>: Software Engineering L2 Production Support at NCS for SMMTS\n  - Handled tickets and troubleshot applications\n  - Fixed bugs and communicated with stakeholders\n- <strong><u>August 2025 - Present</u></strong>: Support Engineer at NCS for SecureConnect\n  - Analyzed Linux logs and troubleshot middleware\n  - Integrated external applications with middleware\n  - Developed an AWS SES SMTP extension for automated email delivery';
    }

    if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('technology')) {
      return 'Eugene\'s skills:\n- <strong>Java</strong>\n- <strong>PHP</strong>\n- <strong>JavaScript</strong>\n- <strong>MySQL</strong>\n- <strong>Python</strong>\n- <strong>HTML</strong>\n- <strong>Angular</strong>\n- <strong>Linux</strong>';
    }

    if (normalizedQuestion.includes('experience') || normalizedQuestion.includes('work')) {
      return 'You can find Eugene\'s work history in the Experience section of this resume.';
    }

    if (normalizedQuestion.includes('school') || normalizedQuestion.includes('education')) {
      return 'Eugene\'s education details are shown in the School section near the top of the resume.';
    }

    if (normalizedQuestion.includes('contact') || normalizedQuestion.includes('linkedin') || normalizedQuestion.includes('github')) {
      return 'Use the LinkedIn or GitHub icons in the navigation bar to connect with Eugene.';
    }

    return 'I can help with Eugene\'s skills, experience, education, GitHub, or LinkedIn. Try asking about one of those.';
  }
}
