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
        val: 'acth_m',
        label: <div>
            <b>АКТГ в 08:00</b>
            <div className="description">(в ранние утренние часы)</div>
        </div>,
        unit: 'пг/мл',
    },
    {
        val: 'cortisol_bld',
        label: <b>Кортизол в крови в 23:00</b>,
        unit: 'нмоль/л',
    },
    {
        val: 'cortisol_sal',
        label: <b>Кортизол в слюне в 23:00</b>,
        unit: 'нмоль/л',
    },
    {
        val: 'cortisol_uri',
        label: <b>Кортизол в суточной моче</b>,
        unit: 'нмоль/сут',
    },
    {
        val: 'potassium',
        label: <div>
            <b>Калий</b>
            <div className="description">(минимальное значение в активной стадии заболевания, до инициации терапии калий-содержащими препаратами)</div>
        </div>,
        unit: 'ммоль/л',
    },
    {
        val: 'largest',
        label: <div>
            <b>Наибольший диаметр аденомы гипофиза по данным МРТ</b>
            <div className="description">(0 – в случае отсутствия визуализации на МРТ)</div>
        </div>,
        unit: 'мм',
    },
]