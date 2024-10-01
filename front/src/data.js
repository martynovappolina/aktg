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
            АКТГ в крови в 08:00
            <div className="description">(в ранние утренние часы)</div>
        </div>,
        unit: 'пг/мл',
        checkbox: false,
    },
]