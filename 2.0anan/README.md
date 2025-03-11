# 安安 - 智能安防助手

"安安"是一款专注于家庭和商业安防的智能助手应用，提供安防评估、方案设计、专家咨询等功能，帮助用户打造安全的生活和工作环境。

## 功能特点

- **智能问答**：AI驱动的智能问答系统，解答安防相关问题
- **方案设计**：根据用户需求自动生成定制化安防解决方案
- **安防评估**：评估当前安防状况，提供改进建议
- **专家咨询**：连接专业安防顾问，提供一对一咨询服务
- **设备管理**：集中管理所有安防设备，实时监控设备状态
- **活动记录**：记录所有安防相关活动，提供安全日志

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (原生)
- Font Awesome 图标库

## 项目结构

```
安安/
├── index.html          # 入口页面（包含所有功能的导航入口）
├── home.html           # 主页（应用主界面）
├── welcome.html        # 欢迎页（登录/注册）
├── ai_chat.html        # 智能问答（AI对话）
├── solution_design.html # 方案设计（定制安防方案）
├── security_assessment.html # 安防评估（评估安全状况）
├── expert_consult.html # 专家咨询（咨询专业人士）
├── expert_detail.html  # 专家详情（专家个人资料）
├── devices.html        # 设备管理（管理安防设备）
├── activities.html     # 活动记录（安全事件日志）
├── knowledge.html      # 知识库（安防知识）
├── profile.html        # 个人中心（用户资料）
├── css/
│   └── styles.css      # 自定义样式（包含所有页面样式）
├── js/
│   └── main.js         # 主要JavaScript功能（所有页面共用）
├── images/             # 图片资源
│   ├── app-icon.svg    # 应用图标
│   ├── default-avatar.svg # 默认头像
│   ├── default-male-avatar.svg # 男性默认头像
│   └── default-female-avatar.svg # 女性默认头像
├── vercel.json         # Vercel部署配置
├── .gitignore          # Git忽略文件
└── README.md           # 项目说明文档
```

## 页面导航结构

应用的页面导航结构如下：

1. **入口页面** (index.html)
   - 提供所有功能的入口链接
   - 显示应用图标和基本信息

2. **主要功能页面**
   - 主页 (home.html)
   - 智能问答 (ai_chat.html)
   - 方案设计 (solution_design.html)
   - 安防评估 (security_assessment.html)
   - 专家咨询 (expert_consult.html)

3. **辅助功能页面**
   - 设备管理 (devices.html)
   - 活动记录 (activities.html)
   - 知识库 (knowledge.html)
   - 个人中心 (profile.html)
   - 专家详情 (expert_detail.html)
   - 欢迎页/登录 (welcome.html)

## 部署指南

### 本地运行

1. 克隆仓库到本地
   ```
   git clone https://github.com/yourusername/anan-app.git
   cd anan-app
   ```

2. 使用任意HTTP服务器运行项目，例如：
   - 使用Python的HTTP服务器：
     ```
     python -m http.server
     ```
   - 使用Node.js的http-server：
     ```
     npx http-server
     ```

3. 在浏览器中访问 `http://localhost:8000` 或相应端口

### 部署到Vercel

1. 在Vercel上创建新项目
2. 连接到GitHub仓库
3. 配置项目：
   - 构建命令：留空（静态HTML项目无需构建）
   - 输出目录：`.`（项目根目录）
4. 点击部署

#### Vercel配置说明

项目包含`vercel.json`配置文件，该文件指定了：
- 静态资源的构建配置（HTML、CSS、JS和图片文件）
- 路由规则（支持无扩展名的URL访问，如`/home`而不是`/home.html`）

### 部署到GitHub Pages

1. 在GitHub仓库设置中启用GitHub Pages
2. 选择分支（通常是main或master）
3. 保存设置，等待部署完成

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 移动设备兼容性

- iOS 12+
- Android 8+

## 开发指南

### 添加新页面

1. 创建新的HTML文件，使用现有页面作为模板
2. 在`index.html`中添加新页面的链接
3. 在`vercel.json`中添加新页面的路由规则

### 修改样式

所有自定义样式都在`css/styles.css`文件中，遵循以下结构：
- 通用样式（颜色、字体等）
- 组件样式（按钮、卡片等）
- 页面特定样式

### JavaScript功能

所有JavaScript功能都在`js/main.js`文件中，主要包括：
- 页面初始化
- 状态栏时间更新
- 图片错误处理
- 动画效果
- 页面特定功能（如发送消息、生成解决方案等）

## 许可证

MIT 