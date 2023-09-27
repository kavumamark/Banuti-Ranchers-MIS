import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';


export default function AnimalChart() {
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Mother Cow ',
                title: 'A'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-purple-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Child A',
                        title: 'male'
                    },
                   
                    children: [
                        {
                            label: 'sibling 1',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'sibling 2',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'sibling 3',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'sibling 4',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                   
                },
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-teal-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Child B',
                        title: 'Female'
                    },
                    children: [
                        {
                            label: 'sibling 1',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'sibling 2',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'sibling 3',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
            
        </div>
    )
}
        