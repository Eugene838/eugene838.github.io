import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Intern =
  {
    Company: "Intern, DigiFort",
    startDate: "July 2017",
    endDate: "December 2017",
    Project: ["Digitalized taking of leave into an application using Java and MySQL. ",
      "Using Windows Form as a software application with basic CRUD functionality and calculation of leaves/Pro-rated leaves.",
      "Basic CRUD functionality and calculation of leaves/Pro-rated leaves."],
  }
  Work =
  {
    Company: "NCS, Software Engineering",
    Scope: "L2 Production Support(SMMTS) Feb 2022 - July 2025",
    startDate: "Feb 2023",
    endDate: "Current",
    Project: ["Ticket handling to meet SLA",
      "Identify, analyze, and fix application bugs to maintain system stability",
      "Translate technical jargon into plain language and vice versa for end users.",
      "Ensure 24/7 on-call support coverage as needed.",
      "Perform system and application troubleshooting to identify root causes",
      "Provide application support by investigating, troubleshooting, and resolving reported issues",
      "Manage and track support tickets, ensuring timely updates and resolution in accordance with SLAs",
      "Communicate effectively with stakeholders on ticket status, issue impact, and resolution progress",]
  }
  Work2 =
  {
    Company: "NCS, Software Engineering",
    Scope: "Support Engineer (SecureConnect) August 2025 - Current",
    startDate: "August 2025",
    endDate: "Current",
    Project: ["Performed log analysis and middleware troubleshooting on Linux environments",
      "Integrate external applications with middleware services and resolved connectivity issues",
      "Developed and implemented an extension application integrating AWS Simple Email Service (SES) SMTP, enabling scalable, secure, and reliable automated email delivery.",
      "Ensure 24/7 on-call support coverage as needed.",
      "Performed root cause analysis and resolved production issues, reducing application errors and improving user experience.",
      ]
  }
}
