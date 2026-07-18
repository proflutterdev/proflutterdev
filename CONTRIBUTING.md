# Contributing to ProFlutterDev Content

Welcome! We are excited that you want to contribute to the curated directories of ProFlutterDev. All content additions and edits are managed via pull requests on this repository.

---

## Adding a Package

To add a curated package to the directory:

1. Click here to edit [packages.md](https://github.com/ProFlutterDev/proflutterdev/edit/main/packages.md) directly on GitHub.
2. Add a new row to the table at the bottom of the file in the following format:
   ```markdown
   | <Package Name> | <Pub.dev Link> | <Comma-separated Categories> |
   ```
3. **Example**:
   ```markdown
   | flutter_riverpod | https://pub.dev/packages/flutter_riverpod | State Management |
   ```

### Important Package Guidelines
* **Automated Details**: You only need to supply the name, pub.dev link, and categories. The build system will automatically fetch the description and GitHub repository links directly from the pub.dev API during build.
* **Allowed Categories**:
  * `State Management`
  * `Code Generation`
  * `Networking & HTTP`
  * `Databases & Storage`
  * `UI Components`
  * `Navigation`
  * `Testing`
  * `Device Features`
  * `Utilities`
  * *Note: The system automatically fuzzy-matches and normalizes variations (e.g. mapping `state` or `state-management` to `State Management`).*

---

## Adding a Project

To showcase an open-source Flutter project:

1. Click here to edit [projects.md](https://github.com/ProFlutterDev/proflutterdev/edit/main/projects.md) directly on GitHub.
2. Add a new row to the table at the bottom of the file in the following format:
   ```markdown
   | <Project Name> | <GitHub Link> | <Short Description> | <Comma-separated Categories (Optional)> |
   ```
3. **Example**:
   ```markdown
   | AppFlowy | https://github.com/AppFlowy-IO/AppFlowy | An open-source alternative to Notion, built with Flutter and Rust... | Desktop, Productivity, Rust |
   ```

### Important Project Guidelines
* **Description**: Write a concise, 1-2 sentence description explaining what the project is and key libraries used.
* **Allowed Categories**:
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
