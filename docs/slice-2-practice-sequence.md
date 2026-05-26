# Slice 2 — Practice Sequence with Score Results

## 完成項目
- 多題序列：從 questions[0] 連續到最後一題
- 頂部進度條 + Question X / N 顯示
- 每題作答後出現 Next → 按鈕，最後一題改為 See Results →
- 分數累計（答對 +1）
- Results 頁：大字分數、正確率%、Practice Again 按鈕
- React Router v6：/practice 和 /results 路由

## 檔案異動清單
- 🔄 src/pages/Practice/Practice.jsx（加多題邏輯、useNavigate）
- 🆕 src/pages/Results/Results.jsx
- 🔄 src/App.jsx（加 Routes/Route）
- 🔄 src/main.jsx（加 BrowserRouter）

## 技術決策紀錄
- score state 在 handleSelect 裡即時累加，不在 handleNext
- navigate('/results', { state: { score, total } }) 傳遞成績
- Results 用 useLocation().state 接收，加 || fallback 防止直接進 /results crash
- isLast = currentIndex === total - 1 判斷最後一題

## 踩到的坑
- mkdir -p 要在 cat heredoc 之前跑，否則 zsh 找不到路徑會 error
- Practice.jsx 第一次沒更新到，因為 App.jsx 先壞掉導致沒注意到

## 下個 Slice 注意事項
- Slice 3 加計時器：useEffect + setInterval，記得 cleanup
- timer 要在 navigate 後停掉，否則會有 memory leak warning
- score 在 isLast 時傳給 navigate 要用最新值，注意 closure 問題
