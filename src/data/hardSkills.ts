interface HardSkill {
  name: string;
  description: string;
  icon: string | string[];
}

const hardSkills: HardSkill[] = [
  {
    name: "Red Hat Enterprise Linux",
    description: "RHEL administration, patching, LVM, firewall configuration, user management, system hardening, and troubleshooting.",
    icon: "/skill-icons/linux.png"
  },
  {
    name: "Red Hat OpenShift",
    description: "OpenShift cluster operations, node labeling, taints and tolerations, Local Storage Operator, routes, certificates, and platform updates.",
    icon: "/skill-icons/openshift.png"
  },
  {
    name: "Automation & Scripting",
    description: "Ansible playbooks and Bash scripts for Linux hardening, operational automation, and repeatable infrastructure tasks.",
    icon: ["ansible-product", "/skill-icons/argocd.webp"]
  },
  {
    name: "CI/CD & Containers",
    description: "Jenkins, GitLab CI, GitLab Runner, Docker, Docker Compose, and application deployment workflows.",
    icon: ["gitlab-ci", "/skill-icons/docker.png"]
  },
  {
    name: "Monitoring & Logging",
    description: "Operational experience with Zabbix, ELK Stack, Prometheus, Grafana, and production health checks.",
    icon: ["prometheus", "grafana", "loki", "elk"]
  },
  {
    name: "Red Hat Satellite",
    description: "Subscription management, repository updates, patching, and managed RHEL lifecycle operations.",
    icon: "/skill-icons/redhat-satellite.png"
  }
];

export default hardSkills;
