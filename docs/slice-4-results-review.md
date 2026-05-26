# Slice 4 — Results Review

## 完成項目
- answers[] 陣列在 Practice 每題作答後累積
- Results 頁 Review 區塊：每題顯示對錯、可展開/收合
- 答對：綠色邊框 + 綠底、顯示 Your answer
- 答錯：紅色邊框 + 紅底、顯示 Your answer + Correct answer + 解說
- ReviewItem 獨立 component，useState 控制展開

## 檔案異動清單
- 🔄 src/pages/Practice/Practice.jsx（加 answers state）
- 🔄 src/pages/Results/Results.jsx（加 ReviewItem + Review 列表）

## 技術決策紀錄
- answers 用 setAnswers(a => [...a, newItem]) 不可變更新
- ReviewItem 放在 Results.jsx 同檔，不拆出去（夠小不需要獨立檔案）
- 答對時不顯示 Correct answer（避免冗餘）

## 踩到的坑
- 無

## 下個 Slice 注意事項
- Slice 5 加首頁 + useContext
- ExamContext 存 section / level / count 三個設定
- Practice 要根據 context 篩題，questions.filter() 邏輯要處理 "mixed" section
