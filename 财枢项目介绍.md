# 财枢项目介绍

## 项目描述

"财枢" 是一个简单的图书管理系统，允许用户浏览、添加和管理书籍。该项目包含以下主要功能和页面：

### 功能

1. **首页展示图书**：显示所有图书的缩略图和基本信息。
2. **书籍详情页面**：展示选定书籍的详细信息，包括封面、名称、年份、推荐语、ISBN、下载链接和购买链接。
3. **添加书籍页面**：提供一个表单，允许用户输入新书籍的信息并提交添加到系统中。
4. **管理书籍页面**：列出所有书籍，允许用户删除书籍。

### 页面

- **首页 (index.html)**：显示所有书籍的缩略图。
- **书籍详情页面 (book.php)**：显示单个书籍的详细信息。
- **添加书籍页面 (addbook.html)**：提供输入新书籍信息的表单。
- **管理书籍页面 (manage.html)**：显示所有书籍并提供删除功能。

## 部署和启动方法

### 部署

1. **下载项目代码**：从项目仓库下载所有文件。
2. **安装 Web 服务器**：确保你的系统上安装了 PHP 和一个 Web 服务器 (例如 Apache 或 Nginx)。
3. **配置 Web 服务器**：将项目文件放置在 Web 服务器的根目录中，确保 `books.csv` 文件具有读写权限。

### 启动

1. 启动 Web 服务器。  本地vscode中启动 php -S localhost
2. 在浏览器中打开 `index.html` 文件：
   - 首页：`http://localhost/index.html`
   - 书籍详情页面：点击首页中的某本书籍跳转到详情页面。
   - 添加书籍页面：`http://localhost/addbook.html`
   - 管理书籍页面：`http://localhost/manage.html`

## 项目截图

### 首页

![image-20240627114713956](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114713956.png)





![image-20240627114656815](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114656815.png)

### 书籍详情页面



![image-20240627114739564](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114739564.png)



![image-20240627114641368](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114641368.png)



![image-20240627114827616](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114827616.png)

### 添加书籍页面

![image-20240627114907959](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114907959.png)

### 管理书籍页面

![image-20240627114921410](https://jgww.oss-cn-beijing.aliyuncs.com/img/image-20240627114921410.png)

