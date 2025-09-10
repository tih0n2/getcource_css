// Современные эффекты для крипто-лендинга

class CryptoLandingEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupRippleEffect();
        this.setupParticleEffects();
        this.setupFormValidation();
        this.setupButtonAnimations();
        this.setupBackgroundParticles();
        this.setupScrollEffects();
    }

    // Эффект ripple для кнопки
    setupRippleEffect() {
        const button = document.querySelector('.submit-btn');
        if (!button) return;

        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Частицы при клике на кнопку
    setupParticleEffects() {
        const button = document.querySelector('.submit-btn');
        if (!button) return;

        button.addEventListener('click', (e) => {
            this.createParticleExplosion(e.target);
        });
    }

    createParticleExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 12; i++) {
            this.createParticle(centerX, centerY);
        }
    }

    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (Math.PI * 2 * Math.random());
        const velocity = 50 + Math.random() * 100;
        const life = 1000 + Math.random() * 1000;

        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';

        document.body.appendChild(particle);

        const animation = particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: life,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });

        animation.onfinish = () => particle.remove();
    }

    // Валидация формы с анимациями
    setupFormValidation() {
        const inputs = document.querySelectorAll('.form-input');
        const button = document.querySelector('.submit-btn');

        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.animateInputFocus(input);
            });

            input.addEventListener('blur', () => {
                this.validateInput(input);
            });

            input.addEventListener('input', () => {
                this.clearInputError(input);
            });
        });

        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    animateInputFocus(input) {
        input.style.transform = 'translateY(-2px)';
        this.createFocusParticles(input);
    }

    createFocusParticles(input) {
        const rect = input.getBoundingClientRect();
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = '#64ffda';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '999';
                particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                particle.style.top = (rect.top + rect.height) + 'px';

                document.body.appendChild(particle);

                particle.animate([
                    { transform: 'translateY(0) scale(1)', opacity: 1 },
                    { transform: 'translateY(-20px) scale(0)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => particle.remove();
            }, i * 100);
        }
    }

    validateInput(input) {
        const value = input.value.trim();
        let isValid = true;

        if (input.type === 'email' || input.placeholder.includes('эл. адрес')) {
            isValid = this.isValidEmail(value);
        } else if (input.placeholder.includes('телефон')) {
            isValid = this.isValidPhone(value);
        } else {
            isValid = value.length >= 2;
        }

        if (!isValid && value) {
            this.showInputError(input);
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[\+]?[0-9\s\-\(\)]{10,}$/.test(phone);
    }

    showInputError(input) {
        input.style.borderColor = '#ff6b6b';
        input.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.3)';
        
        // Анимация тряски
        input.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 400,
            easing: 'ease-in-out'
        });
    }

    clearInputError(input) {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }

    // Анимации кнопки
    setupButtonAnimations() {
        const button = document.querySelector('.submit-btn');
        if (!button) return;

        // Эффект при наведении
        button.addEventListener('mouseenter', () => {
            this.createButtonGlow(button);
        });

        // Пульсация каждые 5 секунд
        setInterval(() => {
            this.pulseButton(button);
        }, 5000);
    }

    createButtonGlow(button) {
        const glow = document.createElement('div');
        glow.style.position = 'absolute';
        glow.style.top = '-2px';
        glow.style.left = '-2px';
        glow.style.right = '-2px';
        glow.style.bottom = '-2px';
        glow.style.background = 'linear-gradient(45deg, #ff6b6b, #64ffda, #ff6b6b)';
        glow.style.borderRadius = '14px';
        glow.style.zIndex = '-1';
        glow.style.opacity = '0';
        glow.style.filter = 'blur(8px)';

        button.style.position = 'relative';
        button.appendChild(glow);

        glow.animate([
            { opacity: 0 },
            { opacity: 0.7 },
            { opacity: 0 }
        ], {
            duration: 2000,
            easing: 'ease-in-out'
        }).onfinish = () => glow.remove();
    }

    pulseButton(button) {
        button.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' }
        ], {
            duration: 1000,
            easing: 'ease-in-out'
        });
    }

    // Обработка отправки формы
    handleFormSubmit() {
        const button = document.querySelector('.submit-btn');
        const inputs = document.querySelectorAll('.form-input');
        
        // Проверяем все поля
        let isFormValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showInputError(input);
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.shakeForm();
            return;
        }

        // Показываем загрузку
        this.showLoadingState(button);

        // Имитация отправки
        setTimeout(() => {
            this.showSuccessState(button);
            this.showSuccessMessage();
            this.resetForm();
        }, 2000);
    }

    shakeForm() {
        const container = document.querySelector('.container');
        container.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
    }

    showLoadingState(button) {
        const originalText = button.textContent;
        button.innerHTML = '<span class="loading"></span>Отправка...';
        button.disabled = true;
        button.style.opacity = '0.8';
        
        button.dataset.originalText = originalText;
    }

    showSuccessState(button) {
        button.innerHTML = '✓ Успешно отправлено!';
        button.style.background = 'linear-gradient(135deg, #00b894 0%, #00a085 100%)';
        button.disabled = false;
        button.style.opacity = '1';
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = '🎉 Заявка успешно отправлена!';
        
        document.body.appendChild(message);
        
        setTimeout(() => message.classList.add('show'), 100);
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => message.remove(), 300);
        }, 3000);
    }

    resetForm() {
        setTimeout(() => {
            const button = document.querySelector('.submit-btn');
            const inputs = document.querySelectorAll('.form-input');
            
            // Сброс кнопки
            button.innerHTML = button.dataset.originalText || 'ПЕРЕЙТИ';
            button.style.background = '';
            button.disabled = false;
            
            // Очистка полей
            inputs.forEach(input => {
                input.value = '';
                this.clearInputError(input);
            });
        }, 2000);
    }

    // Фоновые частицы
    setupBackgroundParticles() {
        this.createFloatingParticles();
        
        // Обновляем частицы каждые 3 секунды
        setInterval(() => {
            this.createFloatingParticles();
        }, 3000);
    }

    createFloatingParticles() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.position = 'fixed';
                particle.style.left = Math.random() * window.innerWidth + 'px';
                particle.style.top = window.innerHeight + 'px';
                particle.style.zIndex = '1';
                
                document.body.appendChild(particle);
                
                particle.animate([
                    { 
                        transform: 'translateY(0) rotate(0deg)',
                        opacity: 0 
                    },
                    { 
                        transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`,
                        opacity: 1 
                    }
                ], {
                    duration: 8000 + Math.random() * 4000,
                    easing: 'linear'
                }).onfinish = () => particle.remove();
            }, i * 1000);
        }
    }

    // Эффекты при скролле (если страница расширится)
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const container = document.querySelector('.container');
            
            if (container) {
                const parallax = scrolled * 0.5;
                container.style.transform = `translateY(${parallax}px)`;
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new CryptoLandingEffects();
});

// Дополнительные утилиты
class AnimationUtils {
    static easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    static createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#ffffff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { 
                transform: 'scale(0) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: 'scale(1) rotate(180deg)',
                opacity: 1 
            },
            { 
                transform: 'scale(0) rotate(360deg)',
                opacity: 0 
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
}

// Экспорт для использования в других модулях
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CryptoLandingEffects, AnimationUtils };
}
