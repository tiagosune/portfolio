import { Component } from '@angular/core';
import { Project } from '../../../../shared/models/project.model';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import {RevealDirective} from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects: Project[] = [
    {
      title: "Meu portfólio",
      description: "Portfólio pessoal",
      tech: ["Angular", "TypeScript", "Tailwind CSS"],
      image: "images/portfolio.webp",
      demo: "https://tiagosune.com",
      github: "https://github.com/tiagosune/portfolio"
    },
    {
      title: "QrArt",
      description: "SaaS de geração de QR Codes personalizados e dinâmicos integrado com Stripe para pagamentos.",
      tech: ["Java", "Spring Boot", "React"],
      image: "images/qrart.webp",
      demo: "https://qrart.com.br",
      github: "https://github.com/tiagosune/QRArt"
    },
    {
      title: "Site institucional Incopel",
      description: "Desenvolvi do zero o site institucional da empresa mineradora Incopel, com o objetivo de melhorar o\n" +
        "            posicionamento online da empresa.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "images/incopel.webp",
      demo: "https://tiagosune.github.io/Incopel"
    },
    {
      title: "MedType",
      description: "Sistema web para criar, armazenar e organizar laudos médicos de ultrassonografia.",
      tech: ["Java", "Spring Boot", "React"],
      image: "images/medtype.webp",
      github: "https://github.com/tiagosune/MedType"
    }
  ];

}
