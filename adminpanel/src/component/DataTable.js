import React from 'react';
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function DataTable() {
    return (
        <div>

            <section>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='ps-2 pe-2'>
                                <Card>
                                    <Card.Header>DataTable with minimal features & hover style</Card.Header>
                                    <Card.Body>
                                        <Table responsive="md" border={1}>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                    <th>Table heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                    <td>Table cell</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Showing 1 to 10 of 57 entries</Card.Footer>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DataTable;
