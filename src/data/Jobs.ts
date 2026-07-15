/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Platform Operations Engineer",
        startDate: "2025-09-01",
        endDate: "2026-09-01",
        company: "PT. Mastersystem Infotama",
        location: "Jakarta, Indonesia",
        description: "Support Red Hat OpenShift and Linux platform operations for enterprise banking environments.",
        goals: [
            "Act as 24/7 standby engineer for Bank Syariah Indonesia Core Banking Red Hat OpenShift environment during implementation.",
            "Install, configure, patch, and troubleshoot Red Hat Enterprise Linux on HPE and Dell bare metal servers.",
            "Configure OpenShift 4.18 clusters, internal registry, node labels, taints and tolerations, and Local Storage Operator.",
            "Support application deployment, route certificate updates, and integration with Kafka, Argo CD, GitLab CI/CD, NFS, and MinIO S3.",
        ],
        currentJob: true,
    },
    {
        title: "System Engineer",
        startDate: "2024-08-01",
        endDate: "2025-09-01",
        company: "PT. Mitra Inti Bersama",
        location: "Jakarta, Indonesia",
        description: "Managed Red Hat Enterprise Linux, Red Hat Satellite, automation, and OpenShift platform support.",
        goals: [
            "Manage and maintain RHEL servers and internal virtual machine infrastructure.",
            "Operate Red Hat Satellite for subscription management, patching, and repository updates.",
            "Develop Ansible playbooks and shell scripts for RHEL hardening and operational automation.",
            "Build CI/CD pipelines using Jenkins and support OpenShift maintenance, troubleshooting, and platform updates.",
        ],
        currentJob: false,
    },
    {
        title: "System Administrator",
        startDate: "2023-05-01",
        endDate: "2024-07-01",
        company: "PT. Cxrus Solutions Indonesia",
        location: "Jakarta, Indonesia",
        description: "Handled Linux server administration, production health checks, and internal infrastructure support.",
        goals: [
            "Perform monthly health checks for client production servers including bri.co.id and askrindo.co.id.",
            "Support troubleshooting for server issues affecting web applications.",
            "Manage internal virtual machines, office networking infrastructure, and development environment support.",
        ],
        currentJob: false,
    },
    {
        title: "Freelance System Administrator",
        startDate: "2022-01-01",
        endDate: "2022-12-01",
        company: "CV. Gradien Digital Indonesia",
        location: "Lampung, Indonesia",
        description: "Delivered Linux server setup, application deployment, monitoring, and CI/CD runner configuration.",
        goals: [
            "Install and configure CentOS and Ubuntu servers for application workloads.",
            "Deploy Laravel and Odoo 15 ERP applications.",
            "Build monitoring infrastructure and configure GitLab Runner for CI/CD on CentOS 7.",
        ],
        currentJob: false,
    },
];
export default workExperience;
