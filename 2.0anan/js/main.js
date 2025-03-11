// 更新状态栏时间
function updateStatusBarTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    const timeElements = document.querySelectorAll('.status-bar .time');
    timeElements.forEach(el => {
        el.textContent = timeString;
    });
}

// 处理图片加载错误
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            // 检查图片是否包含特定关键词来决定使用哪种默认头像
            const imgSrc = img.src.toLowerCase();
            
            if (imgSrc.includes('female') || imgSrc.includes('women')) {
                this.src = 'images/default-female-avatar.svg';
            } else if (imgSrc.includes('male') || imgSrc.includes('men')) {
                this.src = 'images/default-male-avatar.svg';
            } else {
                this.src = 'images/default-avatar.svg';
            }
            
            // 添加类以便于样式调整
            this.classList.add('default-avatar');
        };
    });
}

// 添加动画类
function addAnimationClasses() {
    // 为带有animate-fade-in类的元素添加淡入动画
    const fadeElements = document.querySelectorAll('.animate-fade-in');
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = '1';
        }, index * 100);
    });
    
    // 为带有animate-slide-up类的元素添加向上滑动动画
    const slideElements = document.querySelectorAll('.animate-slide-up');
    slideElements.forEach((el, index) => {
        el.style.transform = 'translateY(20px)';
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            el.style.transform = 'translateY(0)';
            el.style.opacity = '1';
        }, index * 100 + 200);
    });
}

// 初始化页面
function initPage() {
    // 更新状态栏时间
    updateStatusBarTime();
    
    // 设置定时器每分钟更新一次时间
    setInterval(updateStatusBarTime, 60000);
    
    // 处理图片加载错误
    handleImageErrors();
    
    // 添加动画类
    addAnimationClasses();
    
    // 设置活动标签
    setActiveTab();
}

// 发送消息（用于AI聊天页面）
function sendMessage() {
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message-input');
    
    if (!messageInput || !chatContainer) return;
    
    const message = messageInput.value.trim();
    if (message === '') return;
    
    // 添加用户消息
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message animate-fade-in';
    userMessageDiv.innerHTML = `
        <div class="message-bubble">
            ${message}
        </div>
    `;
    chatContainer.appendChild(userMessageDiv);
    
    // 清空输入框
    messageInput.value = '';
    
    // 显示加载指示器
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ai-message animate-fade-in';
    loadingDiv.innerHTML = `
        <div class="message-bubble loading">
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatContainer.appendChild(loadingDiv);
    
    // 滚动到底部
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // 模拟AI回复（在实际应用中，这里会调用API）
    setTimeout(() => {
        // 移除加载指示器
        chatContainer.removeChild(loadingDiv);
        
        // 添加AI回复
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'ai-message animate-fade-in';
        
        // 根据用户消息生成相应回复
        let aiResponse = '';
        if (message.includes('安防') || message.includes('安全')) {
            aiResponse = '安防系统是保障家庭安全的重要组成部分。我们提供全方位的安防解决方案，包括智能门锁、监控摄像头、报警器等设备。您可以根据需求定制适合您的安防系统。';
        } else if (message.includes('价格') || message.includes('费用')) {
            aiResponse = '我们的产品价格范围从几百元到几千元不等，具体取决于您选择的设备类型和数量。我们提供多种套餐选择，可以满足不同预算的需求。您可以在"方案设计"中获取详细的价格信息。';
        } else if (message.includes('安装') || message.includes('设置')) {
            aiResponse = '我们提供专业的安装服务，由经验丰富的技术人员上门安装。安装过程通常需要2-3小时，我们会确保所有设备正常工作并教您如何使用。您也可以选择自行安装，我们提供详细的安装指南。';
        } else {
            aiResponse = '感谢您的咨询。我们提供全方位的智能安防解决方案，包括设备选型、安装调试、售后维护等服务。您可以通过"方案设计"功能定制适合您的安防系统，或者联系我们的专家获取更多建议。';
        }
        
        aiMessageDiv.innerHTML = `
            <div class="message-bubble">
                ${aiResponse}
            </div>
        `;
        chatContainer.appendChild(aiMessageDiv);
        
        // 滚动到底部
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
}

// 生成解决方案（用于方案设计页面）
function generateSolution() {
    const loadingSection = document.getElementById('loading-section');
    const resultSection = document.getElementById('result-section');
    const progressBar = document.getElementById('progress-bar');
    
    if (!loadingSection || !resultSection || !progressBar) return;
    
    // 显示加载部分
    loadingSection.style.display = 'block';
    resultSection.style.display = 'none';
    
    // 模拟进度条
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // 显示结果部分
            setTimeout(() => {
                loadingSection.style.display = 'none';
                resultSection.style.display = 'block';
            }, 500);
        }
    }, 200);
}

// 设置活动标签
function setActiveTab() {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop();
    
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
        
        const link = item.getAttribute('onclick');
        if (link && link.includes(filename)) {
            item.classList.add('active');
        } else if (filename === 'index.html' && link && link.includes('home.html')) {
            item.classList.add('active');
        } else if (!filename && link && link.includes('home.html')) {
            item.classList.add('active');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage); 