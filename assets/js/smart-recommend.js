var currentMode = 'traditional';

var websitesDatabase = [
    {
        id: 1,
        name: '腾讯视频',
        url: 'http://v.qq.com/',
        description: '腾讯视频，海量视频在线观看。',
        logo: 'assets/images/logos/%e8%85%be%e8%ae%af%e8%a7%86%e9%a2%91.png',
        categories: ['视频', '电影', '电视剧', '娱乐', '追剧', '看剧'],
        tags: ['视频', '影视', '在线观看', '腾讯']
    },
    {
        id: 2,
        name: '优酷',
        url: 'http://www.youku.com/',
        description: '优酷 - 这个世界很酷。',
        logo: 'assets/images/logos/%e4%bc%98%e9%85%b7.png',
        categories: ['视频', '电影', '电视剧', '娱乐', '追剧'],
        tags: ['视频', '影视', '在线观看', '优酷']
    },
    {
        id: 3,
        name: '爱奇艺',
        url: 'https://www.iqiyi.com/',
        description: '爱奇艺在线视频。',
        logo: 'assets/images/logos/%e7%88%b1%e5%a5%87%e8%89%ba.png',
        categories: ['视频', '电影', '电视剧', '娱乐', '综艺'],
        tags: ['视频', '影视', '在线观看', '爱奇艺']
    },
    {
        id: 4,
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com/',
        description: 'Bilibili 视频弹幕网站。',
        logo: 'assets/images/logos/%e5%93%94%e5%93%a9%e5%93%94%e5%93%a9.png',
        categories: ['视频', '动漫', '游戏', '学习', '二次元'],
        tags: ['视频', '弹幕', '二次元', 'B站', '番剧']
    },
    {
        id: 5,
        name: 'QQ 音乐',
        url: 'https://y.qq.com/',
        description: 'QQ 音乐，在线听歌。',
        logo: 'assets/images/logos/QQ%e9%9f%b3%e4%b9%90.jpg',
        categories: ['音乐', '听歌', '音频', '娱乐'],
        tags: ['音乐', '听歌', '在线音乐', 'QQ音乐']
    },
    {
        id: 6,
        name: '网易云音乐',
        url: 'https://music.163.com/',
        description: '163 网易云音乐。',
        logo: 'assets/images/logos/%e7%bd%91%e6%98%93%e4%ba%91%e9%9f%b3%e4%b9%90.jpg',
        categories: ['音乐', '听歌', '音频', '娱乐'],
        tags: ['音乐', '听歌', '在线音乐', '网易云', '评论']
    },
    {
        id: 7,
        name: '智联招聘',
        url: 'https://sou.zhaopin.com/jobs/searchresult.ashx?kw=',
        description: '智联招聘',
        logo: 'assets/images/logos/%e6%99%ba%e8%81%94%e6%8b%9b%e8%81%98.jpg',
        categories: ['求职', '找工作', '招聘', '职场'],
        tags: ['求职', '找工作', '招聘', '智联', '简历']
    },
    {
        id: 8,
        name: '前程无忧',
        url: 'https://search.51job.com/?',
        description: '前程无忧',
        logo: 'assets/images/logos/%e5%89%8d%e7%a8%8b%e6%97%a0%e5%bf%a7.jpg',
        categories: ['求职', '找工作', '招聘', '职场'],
        tags: ['求职', '找工作', '招聘', '51job', '简历']
    },
    {
        id: 9,
        name: '拉钩网',
        url: 'https://www.lagou.com/jobs/list_',
        description: '拉钩网',
        logo: 'assets/images/logos/%e6%8b%89%e9%92%a9.jpg',
        categories: ['求职', '找工作', '招聘', '互联网'],
        tags: ['求职', '找工作', '招聘', '拉钩', '互联网']
    },
    {
        id: 10,
        name: '猎聘网',
        url: 'https://www.liepin.com/zhaopin/?key=',
        description: '猎聘网',
        logo: 'assets/images/logos/%e7%8c%8e%e8%81%98.jpg',
        categories: ['求职', '找工作', '招聘', '高端人才'],
        tags: ['求职', '找工作', '招聘', '猎聘', '猎头']
    },
    {
        id: 11,
        name: 'GitHub',
        url: 'https://github.com/',
        description: 'GitHub 开源社区。',
        logo: 'assets/images/logos/github.jpg',
        categories: ['编程', '开发', '代码', '开源', '学习'],
        tags: ['编程', '开发', '代码', '开源', 'Git', '版本控制']
    },
    {
        id: 12,
        name: '开源中国',
        url: 'https://www.oschina.net/',
        description: '中文开源技术交流社区。',
        logo: 'assets/images/logos/%e5%bc%80%e6%ba%90%e4%b8%ad%e5%9b%bd.jpg',
        categories: ['编程', '开发', '代码', '开源', '学习'],
        tags: ['编程', '开发', '代码', '开源', '中文社区']
    },
    {
        id: 13,
        name: '知乎',
        url: 'https://www.zhihu.com/',
        description: '知乎社区。',
        logo: 'assets/images/logos/%e7%9f%a5%e4%b9%8e.png',
        categories: ['问答', '学习', '知识', '社区'],
        tags: ['问答', '知识', '社区', '知乎', '学习']
    },
    {
        id: 14,
        name: '语雀',
        url: 'https://www.yuque.com/',
        description: '专业的云端知识库。',
        logo: 'assets/images/logos/%e8%af%ad%e9%9b%80.jpg',
        categories: ['文档', '笔记', '知识', '协作', '学习'],
        tags: ['文档', '笔记', '知识库', '语雀', '协作']
    },
    {
        id: 15,
        name: '淘宝',
        url: 'https://s.taobao.com/search?q=',
        description: '淘宝',
        logo: 'assets/images/logos/%e6%b7%98%e5%ae%9d.png',
        categories: ['购物', '网购', '电商', '生活'],
        tags: ['购物', '网购', '电商', '淘宝', '网购']
    },
    {
        id: 16,
        name: '京东',
        url: 'https://search.jd.com/Search?keyword=',
        description: '京东',
        logo: 'assets/images/logos/%e4%ba%ac%e4%b8%9c.png',
        categories: ['购物', '网购', '电商', '生活'],
        tags: ['购物', '网购', '电商', '京东', '3C']
    },
    {
        id: 17,
        name: '百度',
        url: 'https://www.baidu.com/s?wd=',
        description: '百度一下，你就知道',
        logo: 'assets/images/logos/%e7%99%be%e5%ba%a6.png',
        categories: ['搜索', '查找', '信息', '工具'],
        tags: ['搜索', '百度', '查找', '搜索引擎']
    },
    {
        id: 18,
        name: '谷歌翻译',
        url: 'https://translate.google.cn/',
        description: '谷歌翻译。',
        logo: 'assets/images/logos/%e8%b0%b7%e6%ad%8c%e7%bf%bb%e8%af%91.jpg',
        categories: ['翻译', '语言', '学习', '工具'],
        tags: ['翻译', '语言', '谷歌', '翻译工具']
    },
    {
        id: 19,
        name: 'ProcessOn',
        url: 'https://www.processon.com/',
        description: '免费在线作图、实时协作。',
        logo: 'assets/images/logos/ProcessOn.png',
        categories: ['设计', '作图', '工具', '协作'],
        tags: ['作图', '流程图', '设计', '协作', '思维导图']
    },
    {
        id: 20,
        name: '微信公众号平台',
        url: 'https://mp.weixin.qq.com/',
        description: '再小的个体也有自己的品牌。',
        logo: 'assets/images/logos/%e5%be%ae%e4%bf%a1%e5%85%ac%e4%bc%97%e5%8f%b7.png',
        categories: ['微信', '公众号', '运营', '媒体'],
        tags: ['微信', '公众号', '运营', '自媒体']
    },
    {
        id: 21,
        name: '电影天堂',
        url: 'https://www.dytt8.net/index.htm',
        description: '电影天堂（DYTT8），高清电影下载。',
        logo: 'assets/images/logos/%e7%94%b5%e5%bd%b1%e5%a4%a9%e5%a0%82.png',
        categories: ['电影', '下载', '视频', '娱乐'],
        tags: ['电影', '下载', '高清', '影视']
    },
    {
        id: 22,
        name: '百度网盘',
        url: 'http://pan.baidu.com/',
        description: '百度网盘',
        logo: 'assets/images/logos/%e7%99%be%e5%ba%a6%e7%bd%91%e7%9b%98.jpg',
        categories: ['网盘', '存储', '云盘', '工具'],
        tags: ['网盘', '存储', '云盘', '百度', '文件']
    },
    {
        id: 23,
        name: '阿里云盘',
        url: 'https://www.aliyundrive.com/',
        description: '阿里云盘，你的数字世界。',
        logo: 'assets/images/logos/%e9%98%bf%e9%87%8c%e4%ba%91%e7%9b%98.png',
        categories: ['网盘', '存储', '云盘', '工具'],
        tags: ['网盘', '存储', '云盘', '阿里云', '文件']
    },
    {
        id: 24,
        name: '12306',
        url: 'https://www.12306.cn/?',
        description: '12306',
        logo: 'assets/images/logos/12306.png',
        categories: ['火车票', '出行', '订票', '生活'],
        tags: ['火车票', '订票', '出行', '铁路']
    },
    {
        id: 25,
        name: '下厨房',
        url: 'https://www.xiachufang.com/search/?keyword=',
        description: '下厨房',
        logo: 'assets/images/logos/%e4%b8%8b%e5%8e%a8%e6%88%bf.png',
        categories: ['菜谱', '美食', '做饭', '生活'],
        tags: ['菜谱', '美食', '做饭', '烹饪']
    },
    {
        id: 26,
        name: 'V2EX',
        url: 'https://www.v2ex.com/',
        description: 'V2EX 创意工作者的社区。',
        logo: 'assets/images/logos/v2ex.jpg',
        categories: ['社区', '技术', '程序员', '讨论'],
        tags: ['社区', '技术', '程序员', 'V2EX']
    },
    {
        id: 27,
        name: 'NCBI',
        url: 'https://www.ncbi.nlm.nih.gov/',
        description: 'National Center for Biotechnology Information.',
        logo: 'assets/images/logos/ncbi.jpg',
        categories: ['生物信息', '科研', '学术', '文献'],
        tags: ['生物信息', '科研', '学术', '文献', 'NCBI']
    },
    {
        id: 28,
        name: '在线PS',
        url: 'https://zaixianps.net/',
        description: '一键p图抠图工具',
        logo: 'assets/images/logos/inoreader.jpg',
        categories: ['设计', '图片', '工具', 'P图'],
        tags: ['PS', 'P图', '抠图', '图片编辑']
    },
    {
        id: 29,
        name: '房贷计算器',
        url: 'https://fangdai.gitapp.cn',
        description: '房贷利率计算器',
        logo: 'assets/images/logos/awesome_design_systems.png',
        categories: ['计算', '贷款', '工具', '买房'],
        tags: ['房贷', '计算', '贷款', '买房']
    },
    {
        id: 30,
        name: '豆瓣',
        url: 'https://www.douban.com/search?q=',
        description: '豆瓣',
        logo: 'assets/images/logos/%e8%b1%86%e7%93%a3.png',
        categories: ['书评', '影评', '社区', '读书', '电影'],
        tags: ['豆瓣', '书评', '影评', '读书', '电影']
    }
];

var intentPatterns = [
    {
        intent: 'watch_video',
        patterns: ['看电影', '看视频', '看剧', '追剧', '看电视剧', '看综艺', '看动漫', '看番', '视频', '电影', '电视剧', '动漫', '综艺', '娱乐', '刷视频', '想看视频'],
        responses: [
            '好的！为你推荐以下视频网站：',
            '没问题！这里是一些热门的视频平台：',
            '收到！让我为你推荐几个视频网站：'
        ],
        category: '视频'
    },
    {
        intent: 'listen_music',
        patterns: ['听歌', '听音乐', '音乐', '歌曲', '想听音乐', '找音乐', '在线音乐'],
        responses: [
            '为你推荐以下音乐平台：',
            '这几个音乐网站很不错：',
            '来试试这些音乐平台：'
        ],
        category: '音乐'
    },
    {
        intent: 'find_job',
        patterns: ['找工作', '求职', '招聘', '找工作', '换工作', '找实习', '投简历', '找工作网站', '想找工作'],
        responses: [
            '正在为你寻找优质的求职平台：',
            '这些招聘网站可以帮助你找到好工作：',
            '推荐以下求职平台：'
        ],
        category: '求职'
    },
    {
        intent: 'learn_programming',
        patterns: ['学编程', '学习编程', '写代码', '开发', '程序员', '编程学习', '学代码', '想学习编程', '技术学习'],
        responses: [
            '编程学习是个好选择！推荐这些资源：',
            '为你推荐以下编程学习平台：',
            '这些网站对你的编程学习会有帮助：'
        ],
        category: '编程'
    },
    {
        intent: 'shopping',
        patterns: ['买东西', '购物', '网购', '淘宝', '京东', '买东西', '想买东西', '网上购物', '电商'],
        responses: [
            '为你推荐以下购物平台：',
            '这些电商平台值得信赖：',
            '来看看这些购物网站：'
        ],
        category: '购物'
    },
    {
        intent: 'search_info',
        patterns: ['搜索', '查找', '找信息', '百度一下', '搜一下', '搜索一下', '想搜索', '找资料'],
        responses: [
            '为你推荐以下搜索引擎：',
            '这些搜索工具可以帮到你：',
            '试试这些搜索平台：'
        ],
        category: '搜索'
    },
    {
        intent: 'translate',
        patterns: ['翻译', '翻译英文', '翻译中文', '语言翻译', '想翻译', '翻译一下', '翻译工具'],
        responses: [
            '为你推荐以下翻译工具：',
            '这些翻译平台很实用：',
            '试试这些翻译网站：'
        ],
        category: '翻译'
    },
    {
        intent: 'design',
        patterns: ['设计', '作图', '画图', 'P图', '修图', '设计工具', '在线设计', '想设计'],
        responses: [
            '为你推荐以下设计工具：',
            '这些设计平台很专业：',
            '试试这些在线设计工具：'
        ],
        category: '设计'
    },
    {
        intent: 'study',
        patterns: ['学习', '看书', '知识', '问答', '想学习', '找资料', '学习资源', '自学'],
        responses: [
            '学习是个好习惯！推荐这些平台：',
            '这些学习网站对你会有帮助：',
            '为你推荐优质的学习资源：'
        ],
        category: '学习'
    },
    {
        intent: 'storage',
        patterns: ['网盘', '云盘', '存储', '保存文件', '上传文件', '云存储', '找网盘'],
        responses: [
            '为你推荐以下网盘服务：',
            '这些云盘平台值得使用：',
            '试试这些存储服务：'
        ],
        category: '网盘'
    },
    {
        intent: 'travel',
        patterns: ['订票', '火车票', '出行', '旅游', '买车票', '订车票', '12306'],
        responses: [
            '为你推荐以下出行服务：',
            '这些平台可以帮你订票：',
            '试试这些出行工具：'
        ],
        category: '火车票'
    },
    {
        intent: 'cook',
        patterns: ['做饭', '菜谱', '美食', '学做菜', '找菜谱', '想做饭', '烹饪'],
        responses: [
            '为你推荐以下美食网站：',
            '这些菜谱网站很实用：',
            '来学做几道好菜：'
        ],
        category: '菜谱'
    },
    {
        intent: 'research',
        patterns: ['科研', '学术', '文献', '论文', '生物信息', '科研工具', '学术研究'],
        responses: [
            '为你推荐以下学术科研平台：',
            '这些科研工具很专业：',
            '试试这些学术资源：'
        ],
        category: '科研'
    }
];

var currentRecommendations = [];

function initSmartRecommend() {
    setupModeToggle();
    setupAIChat();
    loadModeFromStorage();
}

function setupModeToggle() {
    $('#mode-traditional').on('click', function() {
        switchMode('traditional');
    });

    $('#mode-recommend').on('click', function() {
        switchMode('recommend');
    });
}

function switchMode(mode) {
    currentMode = mode;
    saveModeToStorage(mode);

    if (mode === 'traditional') {
        $('#mode-traditional').addClass('active');
        $('#mode-recommend').removeClass('active');
        $('#traditional-search').show();
        $('#recommend-mode').hide();
        $('#recommend-results').hide();
        $('#traditional-content').show();
    } else {
        $('#mode-recommend').addClass('active');
        $('#mode-traditional').removeClass('active');
        $('#traditional-search').hide();
        $('#recommend-mode').show();
        $('#traditional-content').hide();
        $('#ai-input').focus();
    }
}

function saveModeToStorage(mode) {
    try {
        localStorage.setItem('navMode', mode);
    } catch (e) {
        console.log('Could not save mode to localStorage');
    }
}

function loadModeFromStorage() {
    try {
        var savedMode = localStorage.getItem('navMode');
        if (savedMode) {
            switchMode(savedMode);
        }
    } catch (e) {
        console.log('Could not load mode from localStorage');
    }
}

function setupAIChat() {
    $('#ai-send-btn').on('click', function() {
        sendUserMessage();
    });

    $('#ai-input').on('keypress', function(e) {
        if (e.which === 13) {
            sendUserMessage();
        }
    });

    $(document).on('click', '.ai-suggestion-btn', function() {
        var query = $(this).data('query');
        $('#ai-input').val(query);
        sendUserMessage();
    });

    $('#back-to-chat').on('click', function() {
        $('#recommend-results').hide();
        $('#recommend-mode').show();
        scrollToChat();
    });
}

function sendUserMessage() {
    var message = $('#ai-input').val().trim();
    if (!message) return;

    addUserMessage(message);
    $('#ai-input').val('');

    showTypingIndicator();

    setTimeout(function() {
        hideTypingIndicator();
        processUserMessage(message);
    }, 800 + Math.random() * 500);
}

function addUserMessage(message) {
    var html = `
        <div class="ai-message ai-message-user">
            <div class="ai-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="ai-message-content">
                <p>${escapeHtml(message)}</p>
            </div>
        </div>
    `;
    $('#ai-chat-messages').append(html);
    scrollToBottom();
}

function addBotMessage(text, suggestions) {
    var suggestionsHtml = '';
    if (suggestions && suggestions.length > 0) {
        suggestionsHtml = '<div class="ai-suggestions">';
        suggestions.forEach(function(sug) {
            suggestionsHtml += `<button class="ai-suggestion-btn" data-query="${escapeHtml(sug)}">${escapeHtml(sug)}</button>`;
        });
        suggestionsHtml += '</div>';
    }

    var html = `
        <div class="ai-message ai-message-bot">
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="ai-message-content">
                <p>${text}</p>
                ${suggestionsHtml}
            </div>
        </div>
    `;
    $('#ai-chat-messages').append(html);
    scrollToBottom();
}

function addRecommendationsMessage(text, websites) {
    var websitesHtml = '';
    if (websites && websites.length > 0) {
        websitesHtml = '<div class="ai-recommendations">';
        websites.forEach(function(site) {
            websitesHtml += `
                <a href="${escapeHtml(site.url)}" target="_blank" class="ai-recommendation-card">
                    <div class="ai-rec-icon">
                        <img src="${escapeHtml(site.logo)}" alt="${escapeHtml(site.name)}" onerror="this.src='assets/images/logos/default.webp'">
                    </div>
                    <div class="ai-rec-info">
                        <div class="ai-rec-name">${escapeHtml(site.name)}</div>
                        <div class="ai-rec-desc">${escapeHtml(site.description)}</div>
                    </div>
                    <div class="ai-rec-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>
            `;
        });
        websitesHtml += '</div>';
    }

    var html = `
        <div class="ai-message ai-message-bot">
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="ai-message-content">
                <p>${text}</p>
                ${websitesHtml}
            </div>
        </div>
    `;
    $('#ai-chat-messages').append(html);
    scrollToBottom();
}

function showTypingIndicator() {
    var html = `
        <div class="ai-message ai-message-bot ai-typing" id="typing-indicator">
            <div class="ai-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="ai-message-content">
                <div class="ai-typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    `;
    $('#ai-chat-messages').append(html);
    scrollToBottom();
}

function hideTypingIndicator() {
    $('#typing-indicator').remove();
}

function processUserMessage(message) {
    var intent = recognizeIntent(message);
    
    if (intent) {
        var response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
        var websites = findWebsitesByCategory(intent.category);
        
        if (websites.length > 0) {
            currentRecommendations = websites;
            addRecommendationsMessage(response, websites);
            showRecommendationsInContent(websites, intent.category);
        } else {
            addBotMessage(response + ' 不过暂时没有找到相关网站，你可以试试其他关键词。', getDefaultSuggestions());
        }
    } else {
        var fallbackResponses = [
            '抱歉，我不太理解你的需求。你可以试试这样问：',
            '我还在学习中... 试试这些说法：',
            '这个需求我暂时无法理解。不如试试：'
        ];
        var response = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        addBotMessage(response, getDefaultSuggestions());
    }
}

function recognizeIntent(message) {
    var lowerMessage = message.toLowerCase();
    
    for (var i = 0; i < intentPatterns.length; i++) {
        var intent = intentPatterns[i];
        for (var j = 0; j < intent.patterns.length; j++) {
            if (lowerMessage.indexOf(intent.patterns[j]) !== -1) {
                return intent;
            }
        }
    }
    
    return null;
}

function findWebsitesByCategory(category) {
    var results = [];
    
    for (var i = 0; i < websitesDatabase.length; i++) {
        var site = websitesDatabase[i];
        if (site.categories.indexOf(category) !== -1) {
            results.push(site);
        }
    }
    
    if (results.length === 0) {
        for (var i = 0; i < websitesDatabase.length; i++) {
            var site = websitesDatabase[i];
            for (var j = 0; j < site.tags.length; j++) {
                if (site.tags[j].indexOf(category) !== -1 || category.indexOf(site.tags[j]) !== -1) {
                    if (results.indexOf(site) === -1) {
                        results.push(site);
                    }
                    break;
                }
            }
        }
    }
    
    return results;
}

function showRecommendationsInContent(websites, category) {
    var categoryNames = {
        '视频': '视频娱乐',
        '音乐': '音乐电台',
        '求职': '求职招聘',
        '编程': '编程开发',
        '购物': '网上购物',
        '搜索': '搜索引擎',
        '翻译': '翻译工具',
        '设计': '设计工具',
        '学习': '学习交流',
        '网盘': '云盘存储',
        '火车票': '出行服务',
        '菜谱': '美食烹饪',
        '科研': '学术科研'
    };
    
    var title = categoryNames[category] || '为你推荐';
    $('#recommend-title').text(title);
    
    var html = '';
    websites.forEach(function(site) {
        html += `
            <div class="url-card col-6  col-sm-6 col-md-4 col-xl-5a col-xxl-6a">
                <div class="url-body default">
                    <a href="${escapeHtml(site.url)}" target="_blank" data-id="" data-url="${escapeHtml(site.url)}"
                        class="card no-c mb-4" data-toggle="tooltip" data-placement="bottom" data-original-title="${escapeHtml(site.description)}">
                        <div class="card-body">
                            <div class="url-content d-flex align-items-center">
                                <div class="url-img mr-2 d-flex align-items-center justify-content-center">
                                    <img class="lazy" src="${escapeHtml(site.logo)}" data-src="${escapeHtml(site.logo)}"
                                        onerror="javascript:this.src='assets\/images\/logos\/default.webp'" alt="${escapeHtml(site.name)}">
                                </div>
                                <div class="url-info flex-fill">
                                    <div class="text-sm overflowClip_1">
                                        <strong>${escapeHtml(site.name)}</strong>
                                    </div>
                                    <p class="overflowClip_1 m-0 text-muted text-xs">${escapeHtml(site.description)}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="${escapeHtml(site.url)}" class="togo text-center text-muted is-views" data-id="689"
                        data-toggle="tooltip" data-placement="right" title="直达" rel="nofollow">
                        <i class="iconfont icon-goto"></i>
                    </a>
                </div>
            </div>
        `;
    });
    
    $('#recommend-list').html(html);
    $('#recommend-mode').hide();
    $('#recommend-results').show();
}

function getDefaultSuggestions() {
    return [
        '我想看电影',
        '我需要找工作',
        '我想学习编程',
        '我想买东西'
    ];
}

function scrollToBottom() {
    var $container = $('#ai-chat-messages');
    $container.scrollTop($container[0].scrollHeight);
}

function scrollToChat() {
    $('#ai-input').focus();
}

function escapeHtml(text) {
    if (!text) return '';
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

$(document).ready(function() {
    initSmartRecommend();
});
