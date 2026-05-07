# thesis_info

Статична сторінка для GitHub Pages з матеріалами аспірантської роботи.

## Файли

- `index.html` - структура сторінки
- `styles.css` - оформлення
- `script.js` - усі категорії та записи

## Як редагувати вміст

Усі записи знаходяться в масиві `sections` у файлі `script.js`.

Для кожного елемента можна змінити:

- `title` - назва
- `description` - короткий опис
- `status` - статус або примітка
- `href` - посилання

## Як задеплоїти в GitHub Pages

1. Запушити файли в репозиторій GitHub.
2. Відкрити `Settings -> Pages`.
3. У блоці `Build and deployment` вибрати:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
4. Зберегти налаштування.

Після цього GitHub Pages опублікує сторінку з файлу `index.html`.
