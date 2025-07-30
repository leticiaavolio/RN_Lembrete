import { Lembrete } from "../types/lembrete";

type BD={
    lembretes: Lembrete[]
};

export const data:BD={
    lembretes:[
        {
            LembreteId:1,
            TituloLembrete: 'Estudar',
            CorpoLembrete:'Estudar matemática básica',
            StatusLembrete:false,
        },
        {
            LembreteId:2,
            TituloLembrete: 'Fazer Exercício',
            CorpoLembrete:'Realizar os exercícios da semana',
            StatusLembrete:true,
        },
        {
            LembreteId:3,
            TituloLembrete: 'Discutir no Twitter',
            CorpoLembrete:'Discutir assuntos da delegacia de minúsculas causas',
            StatusLembrete:true,
        },
        {
            LembreteId:4,
            TituloLembrete: 'Tomar banho',
            CorpoLembrete:'Tomar o banho semanal',
            StatusLembrete:false,
        },
        {
            LembreteId:5,
            TituloLembrete: 'Assitir filmes',
            CorpoLembrete:'Checar a Watchlist do Letterboxd',
            StatusLembrete:false,
        },
        {
            LembreteId:6,
            TituloLembrete: 'Abrir a conta do banco',
            CorpoLembrete:'Olhar a conta até o saldo aumentar',
            StatusLembrete:true,
        },
        {
            LembreteId:7,
            TituloLembrete: 'Ouvir Lemonade',
            CorpoLembrete:'escutar o albúm "Lemonade" da Beyoncé',
            StatusLembrete:true,
        },
        {
            LembreteId:8,
            TituloLembrete: 'Iniciar Revolução',
            CorpoLembrete:'Começar a tão sonhada revolução dos trabalhadores',
            StatusLembrete:false,
        },
        {
            LembreteId:9,
            TituloLembrete: 'Ler',
            CorpoLembrete:'Terminar aquele livro que eu to procrastinando',
            StatusLembrete:true,
        },
        {
            LembreteId:10,
            TituloLembrete: 'Virar o oceano',
            CorpoLembrete:'Você desagua em mim, e eu oceano',
            StatusLembrete:false,
        },
    ]
}