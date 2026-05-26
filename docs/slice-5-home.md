# Slice 5 — Home Page with Settings

## 完成項目
- 首頁 / 路由：TEF Practice 標題、副標說明
- Section 選擇：Mixed / Vocabulaire / Grammaire
- Level 選擇：All levels / A2 / B1 / B2
- Questions 選擇：5 / 10 / 20
- 即時顯示可用題數，題庫不足時顯示警告
- "Start N Questions →" 按鈕，題庫為空時 disabled
- ExamContext 存全域設定，Practice 頁讀取後篩題

## 檔案異動清單
- 🆕 src/context/ExamContext.jsx
- 🆕 src/pages/Home/Home.jsx
- 🔄 src/App.jsx（加 / 路由 + ExamProvider）
- 🔄 src/pages/Practice/Practice.jsx（useMemo 篩題）

## 技術決策紀錄
- useContext + createContext 管理全域設定
- useMemo 避免每次 render 重新 filter
- 篩題邏輯：section === 'mixed' 跳過 section 過濾

## 踩到的坑
- 無

## 下個 Slice 注意事項
- 下一步：推上 GitHub + 部署 Vercel
- 部署前確認 vite.config.js base 設定
