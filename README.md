# Devops-CA1

## 🔧 Fix: Replace All Registry References in Component Preview Code

### Summary

This pull request resolves [Issue #51](https://github.com/headcn/ui/issues/51) in the [`headcn/ui`](https://github.com/headcn/ui) repository by ensuring that **all** registry references are consistently replaced in component preview code examples.

### 🔍 Problem

Previously, only the **first** occurrence of `registry` references was being replaced, leading to broken imports when multiple references existed.

### 🛠️ Solution

* Switched from `replace()` to `replaceAll()` to handle multiple occurrences.
* Updated the match string from `"registry"` to `"@/registry"` for accurate targeting.
* Updated the replacement string to `"@/components"` to maintain the proper import path structure.

### 🔗 Links

* 🔍 Issue: [https://github.com/headcn/ui/issues/51](https://github.com/headcn/ui/issues/51)
* 📂 Repository: [https://github.com/headcn/ui](https://github.com/headcn/ui)
* ✅ Pull Request: [https://github.com/headcn/ui/pull/52](https://github.com/headcn/ui/pull/52)

### Outcome

* Approved and merged by `stabldev` on **June 30**
