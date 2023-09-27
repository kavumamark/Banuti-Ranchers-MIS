import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import NodeService from '../service/NodeService';

const Milk = () => {
    const [setTreeNodes] = useState([]);
    const [treeTableNodes, setTreeTableNodes] = useState([]);
    const [selectedTreeTableNodeKeys, setSelectedTreeTableNodeKeys] = useState([]);

    useEffect(() => {
        const nodeService = new NodeService();
        nodeService.getTreeNodes().then((data) => setTreeNodes(data));
        nodeService.getTreeTableNodes().then((data) => setTreeTableNodes(data));
    }, []);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Production Details</h5>
                    <TreeTable value={treeTableNodes} header="FileSystem" selectionMode="checkbox" selectionKeys={selectedTreeTableNodeKeys} onSelectionChange={(e) => setSelectedTreeTableNodeKeys(e.value)}>
                        <Column field="name" header="Day" expander />
                        <Column field="size" header="Produced" />
                        <Column field="type" header="Sold" />
                    </TreeTable>
                </div>
            </div>
        </div>
    );
};

export default Milk;
