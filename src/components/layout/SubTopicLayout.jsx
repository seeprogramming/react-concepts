import React from 'react';
import CodeSnipette from '../common/CodeSnipette';

const SubTopicLayout = ({ id, example, data }) => {
    return (
        <div className='custom-concepts__subType mt-3 mb-3 '>
            <div className='card p-3'>
                <div className='ms-2'>
                    <div className='fw-bold'>
                        {id} - {data?.title}
                    </div>
                    <div className='custom-concepts__subType-desc mt-3'>
                        {data?.description}
                    </div>
                    {data?.code !== '' && (
                        <>
                            <div className='fw-bold mt-2'>Example - </div>
                            <CodeSnipette
                                codeSnipette={data?.code}
                                example={example}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubTopicLayout;
