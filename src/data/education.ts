interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bachelor of Informatics Engineering",
        startDate: "2018-08-01",
        endDate: "2023-08-01",
        school: "Universitas Lampung",
        location: "Lampung, Indonesia",
        description: "GPA 3.61 / 4.00. Final project: Data Visualization Dashboard for Hoax Detection using Laravel, MySQL, and Ubuntu Server.",
        currentUni: false,
    },
    // {
    //     title: "Computer and Network Engineering",
    //     startDate: "2015-07-01",
    //     endDate: "2018-06-01",
    //     school: "SMK SWADHIPA 2 Natar",
    //     location: "Lampung, Indonesia",
    //     description: "Vocational education focused on computer systems, networking fundamentals, and infrastructure operations.",
    //     currentUni: false,
    // },
];

export default education;
