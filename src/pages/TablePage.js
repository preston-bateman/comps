import Table from "../components/Table";

function TablePage() {

    const config = [
        {
            label: "Name of Fruit",
            render: (fruit) => fruit.name,
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />,
        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            sort: (a, b) => {}
        },
    ]

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-300', score: 2 },
        { name: 'Lime', color: 'bg-green-400', score: 4 },
    ]

    const keyFn= (fruit) => {
        return fruit.name
    }

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage