# Slice 6 — Practice History

## 完成項目
- useHistory hook：讀寫 localStorage，最多保留 50 筆
- Results 頁完成後自動儲存紀錄（useRef 防止重複儲存）
- /history 頁面：列出所有紀錄，顯示日期、科目、分數、正確率
- 正確率顏色：≥70% 綠、40-70% 橘、<40% 紅
- Clear 按鈕清除所有紀錄
- History 按鈕從 Results 頁直接跳過去

## 檔案異動清單
- 🆕 src/hooks/useHistory.js
- 🆕 src/pages/History/History.jsx
- 🔄 src/pages/Results/Results.jsx（加 addRecord + History 按鈕）
- 🔄 src/App.jsx（加 /history 路由）

## 技術決策紀錄
- useRef(false) 防止 useEffect 在 StrictMode 下觸發兩次儲存
- localStorage 操作包 try/catch，防止 Safari 隱私模式報錯
- 紀錄上限 50 筆，用 .slice(0, 50) 控制

## 踩到的坑
- 無

## 下個 Slice 注意事項
- Slice 7 題庫擴充，需要補充 lecture 類型題目（閱讀短文）
- section/level 目前 hardcode 為 mixed/B1，之後從 ExamContext 讀取
