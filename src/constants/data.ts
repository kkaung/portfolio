export const languages = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'Javascript' },
    { id: 4, name: 'Typescript' },
    { id: 5, name: 'C#' },
    { id: 6, name: 'Go' },
    { id: 7, name: 'SQL' },
];
export const frameworks = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'NextJs' },
    { id: 3, name: 'React Native' },
    { id: 4, name: 'NodeJs' },
    { id: 5, name: '.NET' },
    { id: 6, name: '.NET Core' },
    { id: 7, name: 'NestJs' },
];

export const databases = [
    { id: 1, name: 'MySQL' },
    { id: 2, name: 'PostgreSQL' },
    { id: 3, name: 'MongoDB' },
];

export const tools = [
    { id: 1, name: 'Git' },
    { id: 2, name: 'Docker' },
];

export const projects = [
    {
        id: 1,
        name: 'Feeds',
        description:
            'A blogging platform that allows users to share their ideas, insights and experiences with a wider audience on a variety of topics. ',
        techStacks: [
            'React',
            'NodeJs',
            '.Net Core',
            'Gin (GO)',
            'MySQL',
            'MongoDB',
            'PostgreSQL',
            'Docker',
        ],
        demoLink: 'https://feeds-nine.vercel.app',
        githubLink: 'https://github.com/kkaung/feeds',
    },
    {
        id: 2,
        name: 'Chatty',
        description:
            'A simple chat app with ChatGPT that allows to connect to the people all over the world',
        techStacks: ['React', '.Net Core', 'SignalR', 'MongoDB', 'Docker'],
        demoLink: 'https://chatty-pi.vercel.app',
        githubLink: 'https://github.com/kkaung/chatty',
    },
    {
        id: 3,
        name: 'MateTripAdvisor',
        description:
            'A travel app that helps users search and compare flights to find the best deals for their trips in Australia',
        techStacks: ['Angular', '.Net Core', 'SQLite', 'Docker'],
        demoLink: 'https://mate-flight-advisor.vercel.app',
        githubLink: 'https://github.com/kkaung/MateFlightAdvisor',
    },
];
