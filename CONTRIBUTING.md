# Contributing to ProFlutterDev Content

Welcome! We are excited that you want to contribute to the curated directories of ProFlutterDev. All content additions and edits are managed via pull requests on this repository.

---

## Adding a Package

To add a curated package to the directory:

1. Click here to edit [packages.md](https://github.com/ProFlutterDev/proflutterdev/edit/main/packages.md) directly on GitHub.
2. Add a new row to the table at the bottom of the file in the following format:
   ```markdown
   | <Package Name> | <Pub.dev Link> | <Category Link> |
   ```
3. **Example**:
   ```markdown
   | flutter_riverpod | https://pub.dev/packages/flutter_riverpod | https://proflutterdev.com/packages/?category=state-management |
   ```

### Important Package Guidelines
* **Category Link Format**: In the Category column, specify the filter link format (e.g. `https://proflutterdev.com/packages/?category=state-management`). Use lowercase and replace spaces with hyphens for the query parameter.
* **Adding New Categories**: If you want to use a category that doesn't exist yet, add its slug (e.g. `state-management`) to [`categories.md`](./categories.md). The website dynamically normalizes these slugs to display names (e.g. `State Management`).
* **Automated Details**: You only need to supply the name, pub.dev link, and category link. The build system will automatically fetch the description and GitHub repository links directly from the pub.dev API during build.

---

## Adding an Open-Source Project

To showcase an open-source Flutter project:

1. Click here to edit [open-source.md](https://github.com/ProFlutterDev/proflutterdev/edit/main/open-source.md) directly on GitHub.
2. Add a new row to the table at the bottom of the file in the following format:
   ```markdown
   | <Project Name> | <GitHub Link> | <Short Description> | <Comma-separated Categories (Optional)> |
   ```
3. **Example**:
   ```markdown
   | AppFlowy | https://github.com/AppFlowy-IO/AppFlowy | An open-source alternative to Notion, built with Flutter and Rust... | Desktop, Productivity, Rust |
   ```

### Important Guidelines
* **Description**: Write a concise, 1-2 sentence description explaining what the project is and key libraries used.
* **Suggested Categories**:
  * `Mobile`
  * `Desktop`
  * `Web`
  * `Productivity`
  * `Developer Tools`
  * `Social`
  * `Finance`
  * `Games`
  * `Education`
  * `UI Components`
  * `Rust`
