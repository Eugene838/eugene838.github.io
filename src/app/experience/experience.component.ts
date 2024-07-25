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
    Scope: "(L2 Production Support)",
    startDate: "Feb 2023",
    endDate: "Current",
    Project: ["Ticket handling to meet SLA",
      "Liaise with end user’s query",
      "Translate technical jargon into plain language and vice versa for end users.",
      "Ensure 24/7 on-call support coverage as needed.",
      "Perform system and application troubleshooting to identify root causes."]
  }
}
