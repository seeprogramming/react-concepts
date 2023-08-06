import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SubTopicLayout from '../components/layout/SubTopicLayout';
import SimplePagination from '../components/concepts/pagination/SimplePagination';
import InfiniteScrollPagination from '../components/concepts/pagination/InfiniteScrollPagination';
import LoadMorePagination from '../components/concepts/pagination/LoadMorePagination';
import DATAOBJECT from '../data/examples/pagination/simple-pagination.json';
import TESTDATA from '../data/test-data.json';

const Pagination = () => {
    return (
        
        <PageLayout pageTitle='Pagination'>
            {DATAOBJECT &&
                DATAOBJECT.map((data) => {
                    let componentToRender;

                    switch (data?.id?.toString()) {
                        case '1':
                            componentToRender = (
                                <SimplePagination data={TESTDATA} />
                            );
                            break;
                        case '2':
                            componentToRender = (
                                <InfiniteScrollPagination data={TESTDATA} />
                            );
                            break;
                        case '3':
                            componentToRender = (
                                <LoadMorePagination data={TESTDATA} />
                            );
                            break;
                        default:
                            componentToRender = <div>Invalid component ID</div>;
                    }
                    return (
                        <SubTopicLayout
                            key={data?.id}
                            id={data?.id}
                            data={data}
                            example={componentToRender}
                        />
                    );
                })}
        </PageLayout>
    );
};

export default Pagination;
