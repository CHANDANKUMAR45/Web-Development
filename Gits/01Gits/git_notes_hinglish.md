
# 🧠 Git Notes for Beginners – Hinglish Mein

## 📌 1. Git Kya Hota Hai?
Git ek **Version Control System** hai — iska matlab:
- Aap apne code ka **backup** rakh sakte ho
- Har version ko **track** kar sakte ho
- Agar kuch galat ho gaya, to **purane version pe wapas** jaa sakte ho

---

## 🖥️ 2. Git Commands – Roz ke Kaam ke

### ✅ `git init`
Naya Git repo banata hai:
```bash
git init
```

### ✅ `git status`
Batata hai ki kaunse file me changes hue hain:
```bash
git status
```

### ✅ `git add .`
Saare files ko staging area me bhej deta hai:
```bash
git add .
```

### ✅ `git commit -m "message"`
Changes ko Git mein permanently save karta hai:
```bash
git commit -m "First commit"
```

### ✅ `git log`
Pura commit history dikhata hai.

### ✅ `git diff`
File me kya change hua, wo dikhata hai.

---

## 🧾 3. Git Symbols in VS Code

| Symbol | Meaning |
|--------|---------|
| `M`    | File modify hui hai (Modified) |
| `A`    | Nayi file add hui hai (Added) |
| `D`    | File delete hui hai |
| `U`    | Merge conflict hua hai |

---

## 🌐 4. GitHub se Connect Karna

```bash
git remote add origin https://github.com/username/repo.git
git push -u origin master
```

> Isse aapka local project **GitHub pe upload** ho jaata hai

---

## 🔄 5. Full Cycle (Roz ka Flow)

```bash
git init
git add .
git commit -m "Kya change kiya"
git push
```

---

## 💡 6. Extra Tips

- `.gitignore` file use karo jo unwanted files (like `node_modules`) ko Git se door rakhe
- `git reset` ya `git revert` ka use karo galti sudharne ke liye
- VS Code ke "Source Control" panel me Git ka visual help milta hai





---

## 🧪 7. `git diff` Ka Matlab

### 🔍 Command:
```bash
git diff
