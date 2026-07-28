# Contributing to ProFlutterDev Content

Welcome! We are excited that you want to contribute to the curated directories of ProFlutterDev. All content additions and edits are managed via Pull Requests on this repository.

---

## Adding a Package

You can add a curated package to the directory using either of the following methods:

### Method 1: Frictionless via Website (Recommended)
1. Navigate to **[proflutterdev.com/packages/submit](https://proflutterdev.com/packages/submit)** (or click **"Add Package"** in the website header/profile).
2. Enter the **Package Name** (e.g. `flutter_riverpod`), **Pub.dev URL**, and choose a **Category**.
3. If the category does not exist yet, select **`✨ + Create new category...`** in the dropdown and enter your custom category name.
4. Click **Submit Package (Create PR)**. A Pull Request will be raised automatically on your behalf on GitHub!

---

### Method 2: Manual Pull Request on GitHub
1. Edit [`packages.md`](./packages.md) directly on GitHub.
2. Add a new row to the table in the following format:
   ```markdown
   | <Package Name> | <Pub.dev Link> | <Category Link> |
   ```
3. **Example**:
   ```markdown
   | flutter_riverpod | https://pub.dev/packages/flutter_riverpod | https://proflutterdev.com/packages/?category=state-management |
   ```

### Important Package Guidelines
* **Category Link Format**: In the Category column of `packages.md`, specify the category filter URL format (e.g. `https://proflutterdev.com/packages/?category=state-management`). Use lowercase and replace spaces with hyphens for the query parameter.
* **Adding New Categories**: If adding a package in a category that doesn't exist yet, add its slug (e.g. `state-management`) to [`categories.md`](./categories.md). The website dynamically normalizes category slugs into formatted titles (e.g. `State Management`).
* **Automated Package Details**: You only need to supply the package name, pub.dev link, and category link. The build system automatically fetches descriptions, star counts, maintenance health, dependencies, and GitHub metadata directly from pub.dev APIs during build.
