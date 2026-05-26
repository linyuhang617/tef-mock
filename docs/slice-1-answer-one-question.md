# Slice 1 — Answer One Question

## 完成項目
- 建立 questions.js 題庫（5 道題，vocabulaire + grammaire）
- Practice.jsx 顯示第一道題目
- 點選選項後變色（正確綠、錯誤紅）
- 顯示 ✓ Correct! / ✗ Incorrect + explanation
- 選過後鎖定，不能換選

## 檔案異動清單
- 🆕 src/data/questions.js
- 🆕 src/pages/Practice/Practice.jsx
- 🔄 src/App.jsx（改為 render Practice）
- 🔄 src/App.css（清空）
- 🔄 src/index.css（清空）

## 技術決策紀錄
- selected 用 null 表示「未作答」，number 表示「選了第幾個」
- handleSelect 第一行 if (selected !== null) return 防止重複點選
- 顏色邏輯直接寫在 map() 裡，不拆 component（Slice 1 保持簡單）
- inline style 優先，CSS Module 留到 Slice 2 之後

## 踩到的坑
- cat heredoc 指令貼到 zsh 有時候第二個 > 被當成 PS2 continuation prompt，要分開執行
- truncate -s 0 比 > file 在 zsh 更可靠

## 下個 Slice 注意事項
- Slice 2 需要 currentIndex state 管理多題切換
- answers[] 陣列要從 Slice 2 開始累積，Slice 4 Results 頁會用到
- 安裝 react-router-dom 後記得在 main.jsx 包 BrowserRouter
