/**
 * 网址导航评分系统
 * 使用 localStorage 存储评分数据
 */

(function() {
    'use strict';

    // 评分数据存储键
    const STORAGE_KEY = 'website_ratings';
    const USER_RATINGS_KEY = 'user_ratings';

    /**
     * 获取所有评分数据
     */
    function getAllRatings() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    }

    /**
     * 保存评分数据
     */
    function saveRatings(ratings) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    }

    /**
     * 获取用户已评分的网站列表
     */
    function getUserRatings() {
        const data = localStorage.getItem(USER_RATINGS_KEY);
        return data ? JSON.parse(data) : [];
    }

    /**
     * 保存用户评分记录
     */
    function saveUserRatings(siteId) {
        const userRatings = getUserRatings();
        if (!userRatings.includes(siteId)) {
            userRatings.push(siteId);
            localStorage.setItem(USER_RATINGS_KEY, JSON.stringify(userRatings));
        }
    }

    /**
     * 检查用户是否已评分
     */
    function hasUserRated(siteId) {
        const userRatings = getUserRatings();
        return userRatings.includes(siteId);
    }

    /**
     * 获取网站的评分数据
     */
    function getSiteRating(siteId) {
        const ratings = getAllRatings();
        return ratings[siteId] || { totalScore: 0, count: 0, average: 0 };
    }

    /**
     * 提交评分
     */
    function submitRating(siteId, score) {
        if (hasUserRated(siteId)) {
            return false;
        }

        const ratings = getAllRatings();
        if (!ratings[siteId]) {
            ratings[siteId] = { totalScore: 0, count: 0, average: 0 };
        }

        ratings[siteId].totalScore += score;
        ratings[siteId].count += 1;
        ratings[siteId].average = (ratings[siteId].totalScore / ratings[siteId].count).toFixed(1);

        saveRatings(ratings);
        saveUserRatings(siteId);

        return true;
    }

    /**
     * 生成星级评分 HTML
     */
    function generateStarsHTML(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        let html = '';

        // 满星
        for (let i = 0; i < fullStars; i++) {
            html += '<i class="fas fa-star star"></i>';
        }

        // 半星
        if (hasHalfStar) {
            html += '<i class="fas fa-star-half-alt star"></i>';
        }

        // 空星
        for (let i = 0; i < emptyStars; i++) {
            html += '<i class="far fa-star star empty"></i>';
        }

        return html;
    }

    /**
     * 生成评分选择器 HTML - 支持半星选择
     */
    function generateRatingSelectorHTML(siteId) {
        let html = '<div class="rating-selector" data-site-id="' + siteId + '">';
        html += '<div class="star-select-wrapper">';
        // 使用10个半星区域来实现半星选择
        for (let i = 1; i <= 5; i++) {
            html += '<div class="star-select-item" data-score="' + i + '">';
            html += '<div class="star-half left" data-score="' + (i - 0.5) + '"></div>';
            html += '<div class="star-half right" data-score="' + i + '"></div>';
            html += '<i class="far fa-star star-select-bg"></i>';
            html += '</div>';
        }
        html += '</div>';
        html += '<span class="rating-selector-text">点击星星评分</span>';
        html += '</div>';
        return html;
    }

    /**
     * 创建评分组件
     */
    function createRatingComponent(siteId) {
        const rating = getSiteRating(siteId);
        const userRated = hasUserRated(siteId);

        const container = document.createElement('div');
        container.className = 'rating-wrapper';
        container.innerHTML =
            '<div class="rating-container">' +
                '<div class="rating-display">' +
                    '<div class="rating-stars" data-rating="' + rating.average + '">' +
                        generateStarsHTML(parseFloat(rating.average)) +
                    '</div>' +
                    '<span class="rating-count">(' + rating.count + '人评分)</span>' +
                '</div>' +
                '<button class="rating-btn' + (userRated ? ' hidden' : '') + '">我要评分</button>' +
            '</div>' +
            generateRatingSelectorHTML(siteId);

        return container;
    }

    /**
     * 更新评分显示
     */
    function updateRatingDisplay(siteId, container) {
        const rating = getSiteRating(siteId);
        const starsContainer = container.querySelector('.rating-stars');
        const countContainer = container.querySelector('.rating-count');

        starsContainer.innerHTML = generateStarsHTML(parseFloat(rating.average));
        starsContainer.setAttribute('data-rating', rating.average);
        countContainer.textContent = '(' + rating.count + '人评分)';
    }

    /**
     * 显示评分成功提示
     */
    function showToast(message) {
        let toast = document.querySelector('.rating-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'rating-toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(function() {
            toast.classList.remove('show');
        }, 2000);
    }

    /**
     * 更新评分选择器的显示状态
     */
    function updateSelectorDisplay(container, score) {
        const starItems = container.querySelectorAll('.star-select-item');
        starItems.forEach(function(item, index) {
            const starScore = index + 1;
            const bgStar = item.querySelector('.star-select-bg');
            if (starScore <= Math.floor(score)) {
                bgStar.className = 'fas fa-star star-select-bg full';
            } else if (starScore === Math.ceil(score) && score % 1 !== 0) {
                bgStar.className = 'fas fa-star-half-alt star-select-bg half';
            } else {
                bgStar.className = 'far fa-star star-select-bg';
            }
        });
    }

    /**
     * 初始化评分组件事件 - 支持半星选择
     */
    function initRatingEvents(container, siteId) {
        const ratingBtn = container.querySelector('.rating-btn');
        const ratingSelector = container.querySelector('.rating-selector');
        const starItems = container.querySelectorAll('.star-select-item');
        let currentHoverScore = 0;

        // 点击"我要评分"按钮
        if (ratingBtn) {
            ratingBtn.addEventListener('click', function() {
                ratingSelector.classList.add('active');
                ratingBtn.classList.add('hidden');
            });
        }

        // 为每个半星区域添加事件
        starItems.forEach(function(item) {
            const leftHalf = item.querySelector('.star-half.left');
            const rightHalf = item.querySelector('.star-half.right');

            // 左半星悬停
            leftHalf.addEventListener('mouseenter', function() {
                const score = parseFloat(this.getAttribute('data-score'));
                currentHoverScore = score;
                updateSelectorDisplay(container, score);
            });

            // 右半星悬停
            rightHalf.addEventListener('mouseenter', function() {
                const score = parseFloat(this.getAttribute('data-score'));
                currentHoverScore = score;
                updateSelectorDisplay(container, score);
            });

            // 左半星点击
            leftHalf.addEventListener('click', function(e) {
                e.stopPropagation();
                const score = parseFloat(this.getAttribute('data-score'));
                submitScore(siteId, score, container, ratingSelector, ratingBtn);
            });

            // 右半星点击
            rightHalf.addEventListener('click', function(e) {
                e.stopPropagation();
                const score = parseFloat(this.getAttribute('data-score'));
                submitScore(siteId, score, container, ratingSelector, ratingBtn);
            });
        });

        // 鼠标离开选择器区域时重置显示
        ratingSelector.addEventListener('mouseleave', function() {
            currentHoverScore = 0;
            const starBgs = container.querySelectorAll('.star-select-bg');
            starBgs.forEach(function(bg) {
                bg.className = 'far fa-star star-select-bg';
            });
        });
    }

    /**
     * 提交评分
     */
    function submitScore(siteId, score, container, ratingSelector, ratingBtn) {
        if (submitRating(siteId, score)) {
            updateRatingDisplay(siteId, container);
            ratingSelector.classList.remove('active');
            showToast('感谢您的评价！' + score + '星');
        } else {
            showToast('您已经评分过了！');
            ratingSelector.classList.remove('active');
        }
    }

    /**
     * 为所有网站卡片添加评分功能
     */
    function initAllRatings() {
        const urlCards = document.querySelectorAll('.url-card');

        urlCards.forEach(function(card) {
            const link = card.querySelector('a[data-url]');
            if (!link) return;

            const siteUrl = link.getAttribute('data-url');
            const siteId = 'site_' + btoa(siteUrl).replace(/[^a-zA-Z0-9]/g, '').substring(0, 20);

            // 检查是否已存在评分组件
            if (card.querySelector('.rating-wrapper')) return;

            // 在卡片底部添加评分组件
            const cardBody = card.querySelector('.url-body');
            if (cardBody) {
                const ratingComponent = createRatingComponent(siteId);
                cardBody.appendChild(ratingComponent);
                initRatingEvents(ratingComponent, siteId);
            }
        });
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllRatings);
    } else {
        initAllRatings();
    }

    // 暴露全局接口
    window.RatingSystem = {
        getSiteRating: getSiteRating,
        hasUserRated: hasUserRated,
        submitRating: submitRating,
        getAllRatings: getAllRatings
    };
})();
