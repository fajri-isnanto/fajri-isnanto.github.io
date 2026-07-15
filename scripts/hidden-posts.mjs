import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const postsDir = path.join(rootDir, "src", "content", "posts");

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;

    const [, key, rawValue] = field;
    const value = rawValue.trim();

    if (value) {
      frontmatter[key] = value.replace(/^['"]|['"]$/g, "");
      continue;
    }

    const block = [];
    while (lines[index + 1]?.startsWith("  ")) {
      index += 1;
      block.push(lines[index].trim());
    }
    frontmatter[key] = block.join(" ").trim();
  }

  return frontmatter;
}

function formatDate(value) {
  if (!value) return "-";
  const dateOnly = value.split("T")[0];
  return dateOnly || "-";
}

function pad(value, length) {
  const text = String(value ?? "");
  return text.length >= length ? text : text + " ".repeat(length - text.length);
}

const files = (await readdir(postsDir))
  .filter((file) => /\.(md|mdx)$/i.test(file))
  .sort((a, b) => a.localeCompare(b));

const hiddenPosts = [];

for (const file of files) {
  const filePath = path.join(postsDir, file);
  const content = await readFile(filePath, "utf8");
  const data = parseFrontmatter(content);

  if (data.draft !== "true") continue;

  hiddenPosts.push({
    status: "HIDE",
    date: formatDate(data.publishDate),
    title: data.title || "(untitled)",
    file,
  });
}

if (hiddenPosts.length === 0) {
  console.log("No hidden posts found.");
  process.exit(0);
}

const widths = {
  status: Math.max("Status".length, ...hiddenPosts.map((post) => post.status.length)),
  date: Math.max("Date".length, ...hiddenPosts.map((post) => post.date.length)),
  title: Math.max("Title".length, ...hiddenPosts.map((post) => post.title.length)),
  file: Math.max("File".length, ...hiddenPosts.map((post) => post.file.length)),
};

console.log("Hidden Posts");
console.log("");
console.log(
  `${pad("Status", widths.status)}  ${pad("Date", widths.date)}  ${pad("Title", widths.title)}  ${pad("File", widths.file)}`,
);
console.log(
  `${"-".repeat(widths.status)}  ${"-".repeat(widths.date)}  ${"-".repeat(widths.title)}  ${"-".repeat(widths.file)}`,
);

for (const post of hiddenPosts) {
  console.log(
    `${pad(post.status, widths.status)}  ${pad(post.date, widths.date)}  ${pad(post.title, widths.title)}  ${pad(post.file, widths.file)}`,
  );
}
