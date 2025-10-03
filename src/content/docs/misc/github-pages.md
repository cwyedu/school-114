---
title: GitHub Pages
sidebar:
  # Set a custom label for the link
  label: GitHub Pages
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 3
---

# 💻 零基礎上手！使用 GitHub Desktop + GitHub Pages 發布您的第一個網站

這份教學內容是用下列提示詞產出

```
你是一位資深程式教學作者。請幫我生成一份完整教學文件，目標讀者是高中生，完全沒有 Git 或 GitHub 經驗，使用 Windows 系統。

教學內容：
- 如何把本機的 「web」 資料夾（包含 index.html）上傳到 GitHub
- 並用 GitHub Pages 讓網站公開
- 全程使用 GUI（GitHub Desktop + GitHub 網站設定），不使用命令列
- 每個步驟都要詳細說明按鈕名稱、選項、路徑
- 包含安裝、登入、初始化 repo、Commit、Publish、Pages 設定、更新網站流程
- 加入常見問題與排查技巧
- 提供檢查清單

格式要求：
- 輸出成 Markdown，可以直接存成 tutorial.md
- 使用標題、子標題、編號列表
- 語氣簡單易懂、口語化，像在教學生操作
- 可以加小提醒、注意事項
```

**目標讀者**：完全沒有 Git/GitHub 經驗，使用 **Windows** 系統的高中生。

**工具**：GitHub Desktop 應用程式、GitHub 網站。

**預計成果**：將本機電腦 `web` 資料夾內的 `index.html` 檔案，發布成一個公開的網站。

---

## 一、環境準備：安裝與帳號註冊

### 1. 註冊 GitHub 帳號

首先，您需要一個 **GitHub 帳號**，它是我們存放程式碼的地方。

1.  開啟瀏覽器，前往 **GitHub 網站**：`https://github.com/`
2.  點擊右上角的 **Sign up**（註冊）按鈕。
3.  依照指示輸入您的電子郵件、設定密碼和使用者名稱。
    - **💡 小提醒**：您的**使用者名稱**（Username）很重要，之後會用在您的網站網址裡！例如，您的網址可能會是 `https://[您的使用者名稱].github.io/[您的專案名稱]`。

### 2. 安裝 GitHub Desktop

**GitHub Desktop** 是一款免費的桌面應用程式，它讓我們能用滑鼠點擊的方式來管理程式碼上傳。

1.  前往 **GitHub Desktop 官方網站**：`https://desktop.github.com/`
2.  點擊 **Download for Windows**（下載 Windows 版本）按鈕。
3.  下載完成後，執行安裝檔（`GitHubDesktopSetup.exe`）。安裝過程會自動完成。

### 3. 登入 GitHub Desktop

安裝完成後，啟動 GitHub Desktop。

1.  畫面上會出現登入選項，選擇 **Sign in to GitHub.com**（登入 GitHub.com）。
2.  它會開啟瀏覽器讓您輸入剛才註冊的帳號密碼。登入成功後，會跳回 GitHub Desktop 程式。
3.  在 `Configure Git` 畫面，輸入您的**使用者名稱**（Name）和**電子郵件**（Email）。
    - **💡 注意**：這裡輸入的資訊會被記錄在您上傳的程式碼歷史中。
4.  點擊 **Finish**（完成）按鈕。

---

## 二、準備您的網站專案

我們假設您已經有一個名為 **web** 的資料夾，裡面至少有一個 **index.html** 檔案，這是您的網站首頁。

**請將您的 `web` 資料夾放在一個容易找到的地方**，例如 `C:\Users\您的使用者名稱\Desktop\web`。

---

## 三、初始化並上傳程式碼（Publish）

這個步驟會將您本機電腦上的 `web` 資料夾，變成一個可以被 Git 追蹤和上傳的專案，我們稱之為 **Repository**（簡稱 `Repo`）。

### 1. 在 GitHub Desktop 中建立新的 Repository

1.  啟動 GitHub Desktop。
2.  點擊左上角的 **File**（檔案）選單，然後選擇 **Add local repository**（新增本機 `Repository`）。
3.  在彈出的視窗中：
    - 點擊 **Choose**（選擇）按鈕。
    - 瀏覽到您 `web` 資料夾所在的路徑，並**選擇整個 `web` 資料夾**。
4.  點擊 **Add repository**（新增 `Repository`）。

現在 `web` 資料夾已經變成一個本機 `Repo`，但程式碼還沒上傳到 GitHub 網站上。

### 2. 第一次 Commit（提交）

`Commit` 的意思就是**「儲存進度」**，把您目前的程式碼狀態記錄下來。

1.  在 GitHub Desktop 的左側邊欄，確認您現在選到的是 **web** 這個 `Repo`。
2.  在左下角的 `Summary`（摘要）欄位，輸入一句簡短的 `Commit` 訊息，例如：
    - **Summary**：`Initial commit` (初始提交)
3.  點擊綠色的 **Commit to main** 按鈕。

### 3. Publish（發布）到 GitHub 網站

1.  `Commit` 之後，程式碼還是在您的本機電腦。畫面上會出現一個 **Publish repository**（發布 `Repository`）的按鈕。
2.  點擊綠色的 **Publish repository** 按鈕。
3.  在彈出的視窗中：
    - **Name**（名稱）：預設是 `web`，通常不需要改。
    - **Description**（描述）：選填，可以寫 `My first website`。
    - **Keep this code private**（保持此程式碼私有）：**請不要勾選**！因為 `GitHub Pages` 需要公開的 `Repo` 才能運作。
4.  點擊 **Publish Repository**。

等待上傳完成。成功後，您的程式碼就正式上傳到 GitHub 網站了！

---

## 四、啟用 GitHub Pages 網站

這是讓您的 `index.html` 變成一個真正網站的關鍵步驟！

### 1. 前往 GitHub 網站設定

1.  在 GitHub Desktop 右上角，點擊 **Repository**（`Repository`）選單，選擇 **View on GitHub**（在 GitHub 上檢視）。這會開啟您的 `web` 專案網頁。
2.  在專案頁面的上方，點擊 **Settings**（設定）標籤。
3.  在左側選單中，找到並點擊 **Pages**。

### 2. 設定網站來源

在 `Pages` 頁面中：

1.  在 `Branch`（分支）旁邊的下拉選單，選擇 **main**。
2.  **（重要！）** 選擇 `main` 後，旁邊的**資料夾位置**請**保持預設的 `/root`**（不需要選擇 `/docs`）。
3.  點擊 **Save**（儲存）。

### 3. 等待與查看網站

1.  儲存後，頁面會顯示一段訊息，例如：「`Your GitHub Pages site is currently being built from the main branch.`」（您的 `GitHub Pages` 網站目前正在從 `main` 分支建置中。）
2.  通常等待幾分鐘，網頁會自動更新，出現您的網站網址，格式會是：
    - `https://[您的使用者名稱].github.io/web/`
3.  點擊這個網址，您的第一個網站就發布成功了！🎉
    - **💡 注意**：如果點擊後看到 404 錯誤，請耐心等待 **5-10 分鐘**，因為網站建置需要時間。

---

## 五、更新網站內容與重新上傳

當您修改了 `index.html` 或增加了新的檔案，要如何更新線上的網站呢？流程很簡單：**修改 $\rightarrow$ `Commit` $\rightarrow$ `Push`**。

### 1. 修改檔案

1.  在您的本機電腦上，開啟 `web` 資料夾，修改 `index.html` 檔案。

### 2. 在 GitHub Desktop 中 `Commit`（提交）

1.  啟動 GitHub Desktop，確認 `web` 專案被選中。
2.  左側欄會顯示您**修改過的檔案**清單。
3.  在左下角的 `Summary`（摘要）欄位，輸入新的 `Commit` 訊息，例如：
    - **Summary**：`Updated website title` (更新網站標題)
4.  點擊綠色的 **Commit to main** 按鈕。

### 3. `Push`（推送）到 GitHub 網站

1.  `Commit` 成功後，畫面上會出現一個 **Push origin**（推送到 `origin`）的藍色按鈕。
2.  點擊 **Push origin**。

**完成！** 等待 1-2 分鐘，線上網站就會自動更新成您剛才修改的內容。

---

| 問題                        | 可能的原因與排查方式                                                                                                                                                                                                                                                                                             |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **發布後網站出現 404 錯誤（找不到頁面）** | 1. **時間不足**：剛發布或更新需要 5-10 分鐘建置，請耐心等待。 $\rightarrow$ 重新整理網站或 `Pages` 設定頁面。 2. **檔案名稱錯誤**：網站首頁檔案**必須**命名為 **`index.html`** 且在 `web` 資料夾的**根目錄**。 3. **Pages 設定錯誤**：前往 `Settings` $\rightarrow$ `Pages`，確認 `Branch` 選的是 **`main`** 且資料夾是 **`/root`**。                                                     |
| **GitHub Desktop 登入失敗**   | 1. **密碼錯誤**：檢查您的帳號密碼是否正確。 $\rightarrow$ 嘗試在瀏覽器上登入 GitHub 網站測試。 2. **網路問題**：檢查網路連線。                                                                                                                                                                                                                     |
| **修改後網站沒有更新**             | 1. **忘記 Push**：確認您在 `Commit` 後點擊了 **Push origin** 按鈕。 $\rightarrow$ 檢查 GitHub 網站上的程式碼是否已是最新。 2. **瀏覽器快取**：有時候瀏覽器會記住舊的檔案。 $\rightarrow$ 按下 `Ctrl + F5` (強制重新整理) 或清除瀏覽器快取。                                                                                                                               |
| **無法發佈 GitHub Pages**     | 1. **Repository 設為 Private**：免費帳號無法將 Private repository 發佈為 GitHub Pages。<br>👉 **解法：將 Repository 設為 Public**：<br> - 打開 Repository → **Settings** → **Danger Zone** → **Change repository visibility**。<br> - 點擊 **Change visibility** → 選擇 **Public**。<br> - 輸入 Repository 名稱確認。<br> ✅ 完成後即可發佈 Pages。 |


---

## ✅ 網站發布檢查清單

| 步驟 | 說明                                                                  | 狀態      |
| :--- | :-------------------------------------------------------------------- | :-------- |
| 1.   | 已經註冊 GitHub 帳號並安裝 GitHub Desktop。                           | $\square$ |
| 2.   | 本機 `web` 資料夾內有 `index.html` 檔案。                             | $\square$ |
| 3.   | 在 GitHub Desktop 中 `Add local repository`（選擇 `web` 資料夾）。    | $\square$ |
| 4.   | 已經在 GitHub Desktop 中**完成 `Commit`**。                           | $\square$ |
| 5.   | 已經點擊 **Publish repository** (或 `Push origin`) 上傳程式碼。       | $\square$ |
| 6.   | 前往 GitHub 網站 $\rightarrow$ `Settings` $\rightarrow$ `Pages`。     | $\square$ |
| 7.   | `Branch` 設定為 **`main`**，資料夾設定為 **`/root`**，並點擊 `Save`。 | $\square$ |
| 8.   | 確認網址 `https://[使用者名稱].github.io/web/` 可以打開網站。         | $\square$ |
