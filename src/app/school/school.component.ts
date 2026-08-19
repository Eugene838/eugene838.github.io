import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  title = "Journey";
  Work =
  {
    school: "NCS Pte Ltd",
    Job: "L2 Production Support",
    FYP: ["SecureConnect Aug 2025 - Current",
      "SMMTS Feb 2023 - July 2025",
      "Translate technical jargon into plain language and vice versa.",
      "Root cause analysis",
    ],
  }
  University =
    {
      school: "University of Wollongong",
      Qualification: "Degree in Cyber Security",
      FYP: ["Developed a Dental Health Management Record Web application using PHP, HTML, JavaScript, Bootstrap, MySQL",
        "Create, Retrieve, Update and Delete functionalities for respective stakeholders",
        "Hosted on live website on Hostinger"],
    }
    Polytechnic =
    {
      school: "Temasek Polytechnic",
      Qualification: "Diploma in Information technology",
      FYP: "Intern at Digifort",
    }


}
