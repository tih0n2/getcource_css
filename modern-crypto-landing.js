// Принудительное изменение цвета кнопки на синий
document.addEventListener('DOMContentLoaded', function() {
    // Функция для изменения стиля кнопки
    function changeButtonColor() {
        const button = document.getElementById('button649715') || 
                      document.querySelector('button[type="submit"]') ||
                      document.querySelector('.btn.f-btn') ||
                      document.querySelector('button');
        
        if (button) {
            // Принудительно устанавливаем синий цвет
            button.style.setProperty('background', 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', 'important');
            button.style.setProperty('background-color', '#007bff', 'important');
            button.style.setProperty('border-radius', '12px', 'important');
            button.style.setProperty('box-shadow', '0 8px 24px rgba(0, 123, 255, 0.3)', 'important');
            button.style.setProperty('transition', 'all 0.3s ease', 'important');
            
            // Добавляем эффект hover
            button.addEventListener('mouseenter', function() {
                this.style.setProperty('background', 'linear-gradient(135deg, #0056b3 0%, #003d82 100%)', 'important');
                this.style.setProperty('background-color', '#0056b3', 'important');
                this.style.setProperty('transform', 'translateY(-2px)', 'important');
                this.style.setProperty('box-shadow', '0 12px 32px rgba(0, 123, 255, 0.4)', 'important');
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.setProperty('background', 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', 'important');
                this.style.setProperty('background-color', '#007bff', 'important');
                this.style.setProperty('transform', 'translateY(0)', 'important');
                this.style.setProperty('box-shadow', '0 8px 24px rgba(0, 123, 255, 0.3)', 'important');
            });
            
            console.log('✅ Кнопка успешно изменена на синий цвет!');
        } else {
            console.log('❌ Кнопка не найдена');
        }
    }
    
    // Запускаем изменение сразу
    changeButtonColor();
    
    // Запускаем повторно через небольшую задержку (на случай динамической загрузки)
    setTimeout(changeButtonColor, 500);
    setTimeout(changeButtonColor, 1000);
    setTimeout(changeButtonColor, 2000);
});

// Дополнительная проверка для случаев динамической загрузки
if (window.jQuery) {
    $(document).ready(function() {
        setTimeout(function() {
            const button = $('#button649715, button[type="submit"], .btn.f-btn, button').first();
            if (button.length) {
                button.css({
                    'background': 'linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important',
                    'background-color': '#007bff !important',
                    'border-radius': '12px !important',
                    'box-shadow': '0 8px 24px rgba(0, 123, 255, 0.3) !important',
                    'transition': 'all 0.3s ease !important'
                });
                
                button.hover(
                    function() {
                        $(this).css({
                            'background': 'linear-gradient(135deg, #0056b3 0%, #003d82 100%) !important',
                            'background-color': '#0056b3 !important',
                            'transform': 'translateY(-2px) !important',
                            'box-shadow': '0 12px 32px rgba(0, 123, 255, 0.4) !important'
                        });
                    },
                    function() {
                        $(this).css({
                            'background': 'linear-gradient(135deg, #007bff 0%, #0056b3 100%) !important',
                            'background-color': '#007bff !important',
                            'transform': 'translateY(0) !important',
                            'box-shadow': '0 8px 24px rgba(0, 123, 255, 0.3) !important'
                        });
                    }
                );
                
                console.log('✅ Кнопка изменена через jQuery!');
            }
        }, 100);
    });
}
