import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  
    constructor() { }

    getProjects(): Project[] {
        return [
        {
            title: 'Plataforma Manuario',
            category: 'IA / RAG',
            description: 'Aplicação especialista focada em regras de jogos de tabuleiro, com IA multiagente.',
            image: 'projetos/Manuario.png',
            link: 'https://github.com/eduardofranco572'
        },
        {
            title: 'Social Network',
            category: 'Full Stack',
            description: 'Rede social em tempo real com persistência poliglota (MySQL, MongoDB, Neo4j) e RabbitMQ.',
            image: 'projetos/RedeSocial.png',
            link: 'https://github.com/eduardofranco572/project-social-network'
        },
        {
            title: 'Real Time Chat',
            category: 'Full Stack',
            description: 'Comunicação instantânea utilizando WebSockets, controle de salas e sistema de autenticação.',
            image: 'projetos/ChatRealTime.png',
            link: 'https://github.com/eduardofranco572/Real-Time-Chat'
        },
        {
            title: 'Plataforma de Game Jams',
            category: 'Full Stack',
            description: 'Aplicação de uma plataforma de criação de game jams, com Java Spring Boot.',
            image: 'projetos/PenguinJam.png',
            link: 'https://github.com/eduardofranco572/Projeto-POO'
        },
        {
            title: 'Banco Digital',
            category: 'Full Stack Fintech',
            description: 'Aplicação de um banco digital com simulação de transações e experiência bancária moderna.',
            image: 'projetos/PenguinBank.png',
            link: 'https://github.com/eduardofranco572/aplicacao-front-end'
        },
        {
            title: 'FrontEnd Spotify',
            category: 'FrontEnd',
            description: 'Clone visual do Spotify, playlists responsivas e navegação fluida.',
            image: 'projetos/CloneSpotfy.png',
            link: 'https://github.com/eduardofranco572/Front-End-Spotify'
        },
        {
            title: 'TCC - DS',
            category: 'Full Stack',
            description: 'Aplicação de uma plataforma de inclusão de pequenas e médias empresas.',
            image: 'projetos/TCCDS.png',
            link: 'https://github.com/eduardofranco572/TCC-DS'
        }
        ];
    }
}