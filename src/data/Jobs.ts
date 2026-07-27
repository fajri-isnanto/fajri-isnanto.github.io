/**
 * Interface representing work experience details.
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

const workExperience:WorkExperience[] = [
    {
        title: "Platform Operations Engineer",
        startDate: "2025-09-01",
        company: "PT. Mastersystem Infotama",
        location: "Jakarta, Indonesia",
        description: "Support Red Hat OpenShift, Red Hat Satellite, and Linux platform operations for enterprise banking and government environments.",
        goals: [
            "Act as 24/7 standby engineer for Bank Syariah Indonesia for Red Hat Satellite (Repository Management).",
            "Install, configure, patch, and troubleshoot Red Hat Enterprise Linux on Hewlett Packard Enterprise and Dell Technologies bare metal servers.",
            "Perform Linux administration including LVM partitioning, firewall configuration, user management, and system hardening.",
            "Handle RHEL patching and package upgrades to remediate CVE and security vulnerabilities.",
            "Implement OS backup and recovery using Relax-and-Recover including cross-generation restore from HPE Gen9 to Gen11.",
            "Install and configure Red Hat OpenShift 4.18 clusters, internal registry, node labeling, taints/tolerations, and Local Storage Operator.",
            "Support application deployment, route certificate updates, and OpenShift ecosystem integration.",
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
            "Manage and maintain RHEL servers and internal VM infrastructure.",
            "Operate Red Hat Satellite for subscription management, patching, and repository updates.",
            "Develop Ansible Playbooks and shell scripts for RHEL hardening and automation.",
            "Build CI/CD pipelines using Jenkins.",
            "Provide support for OpenShift maintenance, troubleshooting cluster issues, and performing platform updates.",
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
            "Perform monthly health checks on client production servers including bri.co.id and askrindo.co.id.",
            "Support troubleshooting of server issues affecting web applications.",
            "Manage internal VMs and office networking infrastructure.",
            "Provide IT support for office network and development environment.",
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
            "Deploy Laravel and ERP (Odoo 15) applications.",
            "Build monitoring infrastructure using PERFORMA.",
            "Install and configure GitLab Runner for CI/CD on CentOS 7.",
        ],
        currentJob: false,
    },
];
export default workExperience;
