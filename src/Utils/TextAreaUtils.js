export const lengthControl = (Maxlen) => {
    return (text) => {
        let result = undefined
        if (!text) result = 'Поле должно быть заполненно';
        if (result === undefined) {
            if (text.length > Maxlen) result = 'Длина должна быть меньше, чем ' + Maxlen;
        }
        return result;
    }
}

export const StageControl = (text) => {
        let result = undefined
        try {
            if (Number(text) > 6 || Number(text) < 0) result = 'Введите ваш курс (1-6)';
        }
        catch {
            result = 'Введите ваш курс (1-6)';
        }
        return result;
}