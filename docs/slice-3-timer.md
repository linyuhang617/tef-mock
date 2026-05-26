# Slice 3 — Countdown Timer

## 完成項目
- 全場 10 分鐘倒數計時器，右上角顯示 MM:SS
- 剩餘 ≤ 60 秒時計時器文字變紅
- 時間到自動跳 /results，並帶 expired: true
- Results 頁顯示 "⏱ Time's up!" 標記

## 檔案異動清單
- 🆕 src/hooks/useTimer.js
- 🔄 src/pages/Practice/Practice.jsx（整合 useTimer）
- 🔄 src/pages/Results/Results.jsx（加 expired 標記）

## 技術決策紀錄
- useTimer 用 useRef 存 onExpire callback，避免 useEffect dependency 問題
- setInterval 依賴 timeLeft，每秒重建 interval（簡單可靠，不用 useRef 存 id）
- expired state 防止時間到後還能繼續作答

## 踩到的坑
- 無

## 下個 Slice 注意事項
- Slice 4 需要把 answers[] 陣列傳給 Results，目前只傳 score/total
- answers 格式：{ question, selected, correct }，每題作答後 push
