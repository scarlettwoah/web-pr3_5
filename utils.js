export const random = (num) => Math.ceil(Math.random() * num);

export const countBtn = (count = 6, el) => {
    const text = el.innerText;
    el.innerText = `${text} (${count})`;

    return () => {
        count--;
        el.innerText = `${text} (${count})`;
        console.log(`Залишилось кліків для ${text}: ${count}`);

        if (count === 0) {
            el.disabled = true;
            console.log(`Кнопка "${text}" вичерпана!`);
        }
    };
};
