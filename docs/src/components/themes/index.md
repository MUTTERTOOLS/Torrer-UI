<style modules lang="less">
@import url('@torrer-ui/components/themes/index.less');
.present {
  display: flex;
}
.square {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
  margin: 0 20px;
  border: 1px solid @color-border-light;
  &-gray {
    color: white;
    background-color: rgba(0, 0, 0, 0.15);
  }
  &-white {
    color: rgba(0, 0, 0, 0.9);
    background-color: white;
  }
}
</style>

## Less 变量

```vue
<!-- 导入样式文件 -->
<style lang="less">
@import url('@torrer-ui/components/themes/index.less');
</style>
```

```md
@color-primary-default: #3c9cff;
@color-primary-dark: #398ade;
@color-primary-disabled: #9acafc;
@color-primary-light: #ecf6ff;

@color-error-default: #f56c6c;
@color-error-dark: #e45656;
@color-error-disabled: #f7b2b2;
@color-error-light: #fef0f0;

@color-warn-default: #f9ae3d;
@color-warn-dark: #f1a532;
@color-warn-disabled: #f9d39b;
@color-warn-light: #fdf6ec;

@color-success-default: #5ac725;
@color-success-dark: #53c21d;
@color-success-disabled: #a9e08f;
@color-success-light: #f5fff0;

@color-text-main: #303133;
@color-text-content: #606266;
@color-text-tips: #909193;
@color-text-light: #c0c4cc;

@color-border-regular: #9a9998;
@color-border-normal: #b4b3b1;
@color-border-medium: #ceccca;
@color-border-light: #e7e6e4;

@color-bg: #f3f4f6;
@color-shadow: rgba(0, 0, 0, 0.15);
```

## 等级标题

<p class="t-title-heavy">这是一个等级标题！</p>
<p class="t-title-normal">这是一个等级标题！</p>
<p class="t-title-medium">这是一个等级标题！</p>
<p class="t-title-light">这是一个等级标题！</p>

```vue
<p class="t-title-heavy">这是一个等级标题！</p>
<p class="t-title-normal">这是一个等级标题！</p>
<p class="t-title-medium">这是一个等级标题！</p>
<p class="t-title-light">这是一个等级标题！</p>
```

## 矩形阴影

<div class="present">
  <div class="square square-white radius-light shadow-regular">regular</div>
  <div class="square square-white radius-light shadow-normal">normal</div>
  <div class="square square-white radius-light shadow-hover">hover</div>
  <div class="square square-white radius-light shadow-popup">popup</div>
</div>

```vue
<div class="present">
  <div class="square square-white radius-light shadow-regular">regular</div>
  <div class="square square-white radius-light shadow-normal">normal</div>
  <div class="square square-white radius-light shadow-hover">hover</div>
  <div class="square square-white radius-light shadow-popup">popup</div>
</div>
```

## 矩形圆角

<div class="present">
  <div class="square square-gray radius-circle">circle</div>
  <div class="square square-gray radius-regular">regular</div>
  <div class="square square-gray radius-light">light</div>
</div>

```vue
<div class="present">
  <div class="square square-gray radius-circle">circle</div>
  <div class="square square-gray radius-regular">regular</div>
  <div class="square square-gray radius-light">light</div>
</div>
```
