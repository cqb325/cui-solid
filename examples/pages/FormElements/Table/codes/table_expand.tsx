export default `const columns = [
    {
        type: 'expand',
        width: '50px',
        render: (row: any) => {
            return <div>{row.name}</div>
        }
    },
    {
        title: 'Name',
        name: 'name',
        width: '100px',
        resize: true,
    },
    {
        title: 'Age',
        name: 'age',
        width: '100px',
        resize: true,
    },
    {
        title: 'Address',
        name: 'address',
        width: '300px',
    },
    {
        title: 'Job',
        name: 'job',
        width: '200px',
    },
    {
        title: 'Book',
        name: 'book',
        width: '250px',
    }
]

const data = [
    {
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        job: 'Data engineer',
        interest: 'badminton',
        birthday: '1991-05-14',
        book: 'Steve Jobs',
        movie: 'The Prestige',
        music: 'I Cry',
    },
    {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        job: 'Data Scientist',
        interest: 'volleyball',
        birthday: '1989-03-18',
        book: 'My Struggle',
        movie: 'Roman Holiday',
        music: 'My Heart Will Go On'
    },
    {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        job: 'Data Product Manager',
        interest: 'tennis',
        birthday: '1992-01-31',
        book: 'Win',
        movie: 'Jobs',
        music: 'Don’t Cry'
    },
    {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        job: 'Data Analyst',
        interest: 'snooker',
        birthday: '1988-7-25',
        book: 'A Dream in Red Mansions',
        movie: 'A Chinese Ghost Story',
        music: 'actor'
    }
]

<Space dir="v">
    <Table columns={columns} data={data} border />
</Space>`