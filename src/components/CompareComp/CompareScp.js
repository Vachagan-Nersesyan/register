import Table from 'react-bootstrap/Table';


function CompareComp() {

    return (
        <div>
            <div>
                <h1 className="mt-5 mb-5 text-center">
                    Compare plans
                </h1>
            </div>
            <div className='w-75 m-auto'>
                <Table bordered hover size="sm">
                    <thead className='mb-2'>
                        <tr className='border-0'>
                            <th className='border-0'></th>
                            <th className='border-0 text-center'>Free</th>
                            <th className='border-0 text-center'>Prop</th>
                            <th className='border-0 text-center'>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-bottom-1'>
                            <td className='border-0 col-6 ' >Public</td>
                            <td className='border-0 col-2 text-center'>&#10003;</td>
                            <td className='border-0 col-2 text-center'>&#10003;</td>
                            <td className='border-0 col-2 text-center'>&#10003;</td>
                        </tr>
                        <tr className='border-bottom-1'>
                            <td className='border-0 col-4' >Private</td>
                            <td className='border-0 text-center'></td>
                            <td className='border-0 text-center'>&#10003;</td>
                            <td className='border-0 text-center'>&#10003;</td>
                        </tr>
                        <tr className='border-bottom-1'>
                            <td className='border-0  col-4'>Permissions</td>
                            <td className='border-0 text-center'>&#10003;</td>
                            <td className='border-0 text-center'>&#10003;</td>
                            <td className='border-0 text-center'>&#10003;</td>
                        </tr>
                        <tr className='border-bottom-1'>
                            <td className='border-0  col-4'>Sharing</td>
                            <td className='border-0 text-center'></td>
                            <td className='border-0 text-center'>&#10003;</td>
                            <td className='border-0 text-center'>&#10003;</td>
                        </tr>
                        <tr className='border-bottom-1'>
                            <td className='border-0  col-4'>Unlimited members</td>
                            <td className='border-0 text-center'></td>
                            <td className='border-0 text-center'>&#10003;</td>
                            <td className='border-0 text-center'>&#10003;</td>
                        </tr>
                        <tr className='border-bottom-1'>
                            <td className='border-0  col-4'>Extra security</td>
                            <td className='border-0 text-center'></td>
                            <td className='border-0 text-center'></td>
                            <td className='border-0 text-center'>&#10003;</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


export default CompareComp