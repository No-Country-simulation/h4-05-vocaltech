import { Pagination } from "react-bootstrap";

export const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
    const visiblePages = 5;
    const halfVisiblePages = Math.floor(visiblePages / 2);

    const handlePageChange = (pageNumber) => {
        onPageChange(pageNumber);
    };

    if (totalPages === 0) return null;

    let startPage = Math.max(currentPage - halfVisiblePages, 1);
    let endPage = Math.min(currentPage + halfVisiblePages, totalPages);

    if (endPage - startPage < visiblePages - 1) {
        startPage === 1 ? endPage = Math.min(startPage + visiblePages - 1, totalPages)
        : startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    return (
        <div className="d-flex flex-wrap justify-content-center pt-3">
            <Pagination>
                <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                {
                    Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <Pagination.Item
                            key={startPage + index}
                            active={startPage + index === currentPage}
                            onClick={() => handlePageChange(startPage + index)}>
                            {startPage + index}
                        </Pagination.Item>
                    ))
                }
                <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </Pagination>
            <small className="w-100 text-center">Página {currentPage} de {totalPages}</small>
        </div>
    );
};
