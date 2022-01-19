# 多个邮箱地址提交的文件变更是否能被追溯 ？

一般情况, 每个用户在自己的 Git 客户端中设置的邮箱地址是一致的。当使用一致的邮箱提交文件时, 提交信息会被识别成相应的用户。

但是, 在某些情况下, 当同一个用户在不同的 Git 客户端设置的提交邮箱不一致时, 则可能出现在同一个项目中同一个人的提交会以多个身份的形式呈现出来的情况。

当有一个用户拥有多个提交邮箱时并且希望这些提交邮箱对应的提交都以自己的身份标记时。则需要进行 `多邮箱` 设置。

### 多邮箱设置

当需要将多个提交身份映射成自己的身份时, 需要进行 `多邮箱` 设置。

具体设置步骤如下:

1. 在 `导航栏` 右侧找到自己的 `头像` 并点击
1. 在展开的菜单中点击 `多邮箱` 选项打开 `邮箱管理页面`
1. 在 `邮箱管理页面` 找到并点击 `新建邮箱地址` 按钮在新出现的输入框中输入新的邮箱并点击右侧的 `确定` 按钮即可

> - 只有 `主邮箱` 地址才能作为 `登录邮箱`