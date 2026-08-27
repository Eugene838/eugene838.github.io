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

    if (normalizedQuestion.includes('skill') || normalizedQuestion.includes('technology')) {
      return 'Eugene lists Java, PHP, JavaScript, MySQL, Python, HTML, Angular, and Linux as skills.';
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
