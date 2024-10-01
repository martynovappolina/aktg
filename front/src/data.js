const noYesOptions = [
    {
        title: 'Нет',
        value: 0
    },
    {
        title: 'Да',
        value: 1,
    }
]

export const aktgFields = [
    {
        val: 'aktg',
        defaultValue: 0,
        label: <div>
            <b>АКТГ в крови в 08:00</b>
            <div className="description">(в ранние утренние часы)</div>
        </div>,
        unit: 'пг/мл',
    },
    {
        val: 'bloodСortisol',
        defaultValue: 0,
        label: <b>Кортизол в крови в 23:00</b>,
        unit: 'нмоль/л',
    },
    {
        val: 'salivaСortisol',
        defaultValue: 0,
        label: <b>Кортизол в слюне в 23:00</b>,
        unit: 'нмоль/л',
    },
    {
        val: 'urineСortisol',
        defaultValue: 0,
        label: <b>Кортизол в суточной моче в 23:00</b>,
        unit: 'нмоль/л',
    },
    {
        val: 'aktg',
        defaultValue: 0,
        label: <div>
            <b>Калий</b>
            <div className="description">(минимальное значение в активной стадии заболевания, до инициации терапии калий-содержащими препаратами)</div>
        </div>,
        unit: 'пг/мл',
    },
    {
        val: 'aktg',
        defaultValue: 0,
        label: <div>
            <b>Наибольший диаметр аденомы гипофиза по данным МРТ</b>
            <div className="description">(0 – в случае отсутствия визуализации на МРТ)</div>
        </div>,
        unit: 'пг/мл',
    },
]