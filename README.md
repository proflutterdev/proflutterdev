# 🚀 ProFlutterDev Content Hub

Welcome to the public content repository for **[ProFlutterDev](https://proflutter.dev)**—a curated, documentation-style knowledge hub designed for professional Flutter developers.

This repository houses the open-source community content, including vetted packages, developer-submitted projects, and advanced technical articles. If you would like to share your knowledge, showcase an open-source project, or list a high-quality package, you are in the right place!

---

## 📂 Content Structure

The repository is organized into three main categories of content:

| Section | Location | Description | How to Edit |
| :--- | :--- | :--- | :--- |
| **📦 Packages** | [`packages.md`](./packages.md) | A curated list of highly vetted Flutter/Dart packages categorized by use case. | Add a row to the table. |
| **✨ Open Source** | [`open-source.md`](./open-source.md) | A showcase of outstanding, production-grade open-source Flutter applications. | Add a row to the table. |
| **✍️ Articles** | [`articles/`](./articles/) | Advanced technical guides, structural patterns, and architectural walkthroughs. | Submit a new `.md` file. |

---

## 🤝 How to Contribute

We welcome contributions of all kinds! Whether you are fixing a typo, recommending a must-have package, or writing a deep-dive article.

> [!IMPORTANT]
> Please read our **[Contribution Guidelines](./CONTRIBUTING.md)** for detailed rules and structures on formatting your inputs correctly.

### Quick Actions

* **Add a Package**: Update the table in [`packages.md`](./packages.md) directly.
* **Add an Open-Source Project**: Add your app details in [`open-source.md`](./open-source.md).
* **Write an Article**: Create a new markdown file under [`articles/`](./articles/) using standard frontmatter structure.

---

## 🔄 Dynamic Synchronization

This repository decouples the content from the website's technical source code:
1. **Content Repository (This Repo):** Holds the raw markdown files and lists.
2. **Website Engine (Private Repo):** Houses the Astro, TypeScript, Tailwind, and search implementations.

When a pull request is merged here:
1. A GitHub Actions workflow in the main repository is automatically triggered.
2. It pulls the latest content from the `main` branch of this repository.
3. The build system fetches additional dynamic API metadata (like package metrics from Pub.dev and GitHub stargazers).
4. A static production build is deployed to host the updated website.

---

## 📜 License

By contributing to this repository, you agree that your contributions will be licensed under the MIT License.
