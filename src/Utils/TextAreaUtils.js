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