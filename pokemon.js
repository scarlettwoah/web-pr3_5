class Pokemon {
    constructor({ name, type, hp, selectors }) {
        this.name = name;
        this.type = type;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.selectors = selectors;
        this.elHP = document.getElementById(`health-${selectors}`);
        this.elProgressbar = document.getElementById(`progressbar-${selectors}`);

        this.renderHP();
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;
        elHP.innerText = `${current} / ${total}`;
    }

    renderProgressbarHP = () => {
        const { elProgressbar, hp: { current, total } } = this;
        elProgressbar.style.width = Math.ceil((current / total) * 100) + '%';
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;
        }

        this.renderHP();

        if (cb) {
            cb(count);
        }
    }
}

export default Pokemon;
