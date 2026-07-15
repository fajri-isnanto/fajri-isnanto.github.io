interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Indonesian",
        level: "Native",
        description: "Native language",
        show: true
    },
    {
        name: "English",
        level: "Professional Working Proficiency",
        description: "Used for technical documentation, vendor materials, and infrastructure references",
        show: true
    },
    {
        name: "Japanese",
        level: "Basic",
        description: "Basic learning proficiency",
        show: false
    }
];

export default languages;
