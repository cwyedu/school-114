---
title: 小烏龜的程式旅程
sidebar:
  label: 小烏龜的程式旅程
  # Set a custom order for the link (lower numbers are displayed higher up)
  order: 1
---

每 12 年，在兔年，小烏龜就想一血前恥，心想透過電腦的幫忙，一定可以幹掉小白兔（嗯…小烏龜不是本來就贏，是要一血什麼？就是被說速度慢還可以贏嘛），於是有了這個程式之旅：一步一腳印，凡走過必留下痕跡！

## 環境

請先下載 [Mu](https://codewith.mu/en/)，[校內下載](https://kd.elvs.chc.edu.tw/~pp5/download/MuEditor-win64-1.2.0.msi)。下載後，請先熟悉它的環境。
![](https://i.imgur.com/ZEiPRmr.png)

## 基本

### 一些基本概念

- REPL
- 運算式 (expression)、估算 (evaluate)
- Python 內，所以東西都是**物件**，蝦米是物件
- 學會看錯誤訊息
- 學會看說明：`help`、`dir`
- ![](https://i.imgur.com/CFlZc6f.png)
- [turtle --- 龜圖學](https://docs.python.org/zh-tw/3/library/turtle.html)

### 常用指令

| 名稱             | 說明     |
| ---------------- | -------- |
| `forward`, `fd`  | 向前     |
| `backward`, `bk` | 向後     |
| `left`, `lt`     | 左轉     |
| `right`, `rt`    | 右轉     |
| `goto`           | 到某座標 |
| `penup`          | 提筆     |
| `pendown`        | 放筆     |
| `speed`          | 設定速度 |

### 座標位置

![](https://i.imgur.com/xxBtepO.png)
圖片來源：https://www.101computing.net/graphing-algorithm/

## 第 1 次

![](https://i.imgur.com/o626kfk.png)

思考：

- 會不會畫這些多邊形
  - 4 角形最簡單，就畫直線，轉 90 度
  - 3 角形呢
  - 如果你懂了，5 角形、6 角形就不是問題了
- 如何移動到不同的座標位置

加分題：

- 圖形內可不可以填滿色彩？

## 第 2 次

![](https://i.imgur.com/UoYNbCO.png)

從上一個例子發現有些動作很煩，一直有重複的動作，一直需要複製貼上同一段程式碼，在 python 中有沒有表示重複的陳述 (statement)？你可以用 `for` 迴圈、`while` 迴圈。我們就來看一下迴圈到底怎麼用。

```python
for i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]:
    print(i)

for i in range(10):
    print(i)
```

解題百寶袋：

- 變數 (垂直長度、水平長度)
- 迴圈 (重複)
- 小烏龜如何填色 (`begin_fill`、`end_fill`、`fillcolor`)

加分題：

![](https://i.imgur.com/B1nclal.png)

## 第 3 次

![](https://i.imgur.com/sJvqMzg.gif)

```python
def triangle(t, size):
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.left(120)
    t.forward(size)
    t.left(120)
```

解題百寶袋：

- `goto`、`penup`、`pendown`
- 函數 (功能)
- 迴圈 (重複)
- 小烏龜如何填色 (`begin_fill`、`end_fill`、`fillcolor`)

## 第 4 次

![](https://i.imgur.com/8FD9PTd.gif)

解題百寶袋：

- `circle`
- 迴圈 (重複)
- 你想變彩虹顏色嗎？ `hsv_to_rgb`

## 第 5 次

![](https://i.imgur.com/npp3VYa.gif)

解題百寶袋：

- `circle` 有 3 個參數
  - radius – a number。半徑。正值按逆時針方向繪製，負值為順時針
  - extent – a number (or None)。角度 0-360
  - steps – an integer (or None)。步數
- 小烏龜如何填色 (`begin_fill`、`end_fill`、`fillcolor`)

## 第 6 次

![](https://i.imgur.com/i7rA4rH.gif)

```python
if i > 5:
    print("條件判斷")
```

解題百寶袋：

- `circle` 有 3 個參數
  - radius – a number。半徑。正值按逆時針方向繪製，負值為順時針
  - extent – a number (or None)。角度 0-360
  - steps – an integer (or None)。步數
- 迴圈
- 條件判斷

## 第 7 次 (解題策略)

![](https://i.imgur.com/7D3PbQ2.gif)

解題百寶袋：

- 先想一想，這朵花是如何畫出來的
  - 移動一段距離，畫出右、左 2 邊綠葉
  - 再移動一段距離，畫出 10 個花瓣的花
  - 中心有一個圓點
- 花瓣和綠葉是一樣的
- 1 個花瓣如何畫？
  - 還記得如果要自己畫圓嗎？
  - 60 度的弧，再轉 120 度，再 60 度的狐
- 中間的圈圈可以用 `dot` 這個函數

## 第 8 次 (解題策略)

![](https://i.imgur.com/XtdRcXP.gif)

解題百寶袋：

- 先觀察這是如何動作的
  - 從左上角開始畫四邊形
  - 每列有 6 個，共有 5 列
  - 每個四邊形會稍微傾斜
  - 每個四邊形會填不一樣的顏色
- 你能畫四邊形嗎？
- 你能觀察每個四邊形的座標 (x, y)，的關係嗎？
- 這裡有用到 `random` 這個工具箱

```python
import random

print(random.randint(1, 100))
print(random.random())
```

## 第 9 次

![](https://i.imgur.com/ZcxEvNG.gif)

解題百寶袋：

- 先想一想，這是如何做出來的
  - 從原點(0, 0), 到 (-450, 300) ~ (450, 300)，`range(-450, 460, 10)`
  - 依序改變線的顏色
- `goto`
- `color`
- 彩虹的顏色：`colorsys`、`hsv_to_rgb`
- 可以包裝成函數，上、下兩個，傳入 y 座標

## 第 10 次

![](https://i.imgur.com/VmJiLhs.gif)

解題百寶袋：

- 這個圖形叫 [Koch snowflake](https://zh.wikipedia.org/wiki/%E7%A7%91%E8%B5%AB%E6%9B%B2%E7%B7%9A)
- 解悉一下：它其實就是一個三角形，只是在邊動一些手腳，你看得出來嗎？
  ![](https://i.imgur.com/MilfI54.png)
- 在程式語言中，有個東西叫做[遞迴](https://zh.wikipedia.org/zh-tw/%E9%80%92%E5%BD%92)：自己呼叫自己
