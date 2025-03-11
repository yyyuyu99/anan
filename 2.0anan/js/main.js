// 更新状态栏时间
function updateStatusBarTime() {
    const timeElements = document.querySelectorAll('.status-bar .time');
    if (timeElements.length === 0) return;
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    timeElements.forEach(el => {
        el.textContent = timeString;
    });
}

// 初始化页面
function initPage() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 初始化标签栏激活状态
    const tabItems = document.querySelectorAll('.tab-item');
    if (tabItems.length > 0) {
        tabItems.forEach(item => {
            item.addEventListener('click', function() {
                tabItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // 初始化聊天输入框
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    
    if (chatInput && sendButton) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        sendButton.addEventListener('click', sendMessage);
    }
    
    // 初始化紧急按钮
    const emergencyButton = document.querySelector('.emergency-button');
    if (emergencyButton) {
        emergencyButton.addEventListener('click', function() {
            alert('紧急求助已发送！工作人员将立即与您联系。');
        });
    }
}

// 发送聊天消息
function sendMessage() {
    const chatInput = document.querySelector('.chat-input');
    const chatContainer = document.querySelector('.chat-container');
    
    if (!chatInput || !chatContainer || !chatInput.value.trim()) return;
    
    // 创建用户消息气泡
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble user';
    userBubble.textContent = chatInput.value;
    chatContainer.appendChild(userBubble);
    
    // 清空输入框
    const userMessage = chatInput.value;
    chatInput.value = '';
    
    // 显示AI正在输入
    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble ai';
    typingBubble.innerHTML = '<div class="loading"></div>';
    chatContainer.appendChild(typingBubble);
    
    // 滚动到底部
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // 模拟AI回复
    setTimeout(() => {
        chatContainer.removeChild(typingBubble);
        
        // 创建AI回复气泡
        const aiBubble = document.createElement('div');
        aiBubble.className = 'chat-bubble ai';
        
        // 根据用户输入生成回复
        let aiResponse = '';
        if (userMessage.includes('安全') || userMessage.includes('防盗')) {
            aiResponse = '根据您的需求，我建议您安装智能门锁和监控摄像头，这可以有效提高家庭安全性。您需要了解更多详细信息吗？';
        } else if (userMessage.includes('监控') || userMessage.includes('摄像头')) {
            aiResponse = '我们提供多种监控摄像头解决方案，包括室内和室外型号，支持夜视和移动侦测。您可以在"方案设计"中获取定制化建议。';
        } else if (userMessage.includes('报警') || userMessage.includes('紧急')) {
            aiResponse = '我们的系统支持多种紧急报警方式，包括声光报警、手机推送和自动拨打紧急联系人。您可以在"紧急求助"页面进行设置。';
        } else {
            aiResponse = '感谢您的咨询。作为安防AI助手，我可以帮您解答安防相关问题，设计安防方案，或处理紧急情况。请问您有什么具体需求？';
        }
        
        aiBubble.textContent = aiResponse;
        chatContainer.appendChild(aiBubble);
        
        // 滚动到底部
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1500);
}

// 生成安防方案
function generateSolution() {
    const solutionForm = document.querySelector('#solution-form');
    const resultContainer = document.querySelector('#solution-result');
    const loadingIndicator = document.querySelector('#solution-loading');
    
    if (!solutionForm || !resultContainer || !loadingIndicator) return;
    
    // 显示加载中
    loadingIndicator.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // 模拟生成方案
    setTimeout(() => {
        loadingIndicator.style.display = 'none';
        resultContainer.style.display = 'block';
        
        // 滚动到结果区域
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage); 