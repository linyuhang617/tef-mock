# Slice 7 — Question Bank Expansion

## 完成項目
- 題庫從 5 題擴充到 30 題
- 涵蓋三個科目：vocabulaire、grammaire、lecture
- 涵蓋三個難度：A2、B1、B2
- Lecture 類型包含真實短文閱讀理解題
- Home.jsx 加入 Lecture 選項

## 檔案異動清單
- 🔄 src/data/questions.js（5 → 30 題）
- 🔄 src/pages/Home/Home.jsx（加 lecture section）

## 技術決策紀錄
- 題目 id 格式：v=vocabulaire, g=grammaire, l=lecture + 三位數字
- Lecture 題型：短文直接嵌入 question 欄位，不拆出 passage 欄位（MVP 夠用）

## 踩到的坑
- VPS 部署後才發現 Home.jsx 沒有 Lecture 選項，需要補 sed 修正

## 專案完成狀態
Slice 1–7 全部完成並部署上線。
GitHub: https://github.com/linyuhang617/tef-mock
Live: http://e7mnfj9nlr7oe2ndot66zkir.46.225.149.31.sslip.io
