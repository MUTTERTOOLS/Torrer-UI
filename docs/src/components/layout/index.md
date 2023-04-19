# 布局 layout

## 栅格
通过基础的 24 分栏，迅速简便地创建布局。

<tr-row gutter="20">
  <tr-col span="3"></tr-col>
  <tr-col span="3"></tr-col>
  <tr-col span="6"></tr-col>
  <tr-col span="9"></tr-col>
</tr-row>

<tr-row gutter="20">
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
</tr-row>

## 分栏间隔
<tr-row gutter="20">
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
  <tr-col span="6"></tr-col>
</tr-row>


<style>
  .tr-row {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
  }
  .tr-col {
    height: 30px;
    text-align: center;
    line-height: 40px;
    background-color: #9090C0;
    border: 1px solid #eee;
    border-radius: 10px;
  }
</style>