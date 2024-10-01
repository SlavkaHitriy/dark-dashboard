import React, { useCallback } from 'react'
import { DataGrid } from '@mui/x-data-grid'

export const DefaultDataGrid = ({
  columns,
  rows,
  sx,
  disablePagination,
  pageItems,
  handlePageChange,
  onRowClick = () => {},
  defaultSize = 13,
  ...otherProps
}) => {
  const handlePageSizeChange = useCallback(
    ({ pageSize }) => {
      handlePageChange && handlePageChange(pageSize)
    },
    [handlePageChange]
  )

  return (
    <DataGrid
      onPaginationModelChange={handlePageSizeChange}
      initialState={{
        pagination: { paginationModel: { pageSize: pageItems || 5 } },
      }}
      onRowClick={onRowClick}
      checkboxSelection
      disableRowSelectionOnClick
      slots={{
        columnMenuIcon: () => null,
      }}
      sx={{
        minHeight: '100px',
        border: 'none',
        fontSize: defaultSize,
        bgcolor: 'background.primary',
        '.MuiCheckbox-root': {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        '.MuiDataGrid-topContainer': {
          '&::after': {
            bgcolor: 'text.tertiary',
          },
        },
        '.MuiDataGrid-columnHeader': {
          bgcolor: 'common.black',
          '&:last-of-type': {
            overflow: 'hidden',
          },
          '&:last-of-type .MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&:first-of-type': {
            pl: 3,
          },
        },
        '.MuiDataGrid-columnHeaders': {
          border: 'none',
          overflow: 'visible',
        },
        '.MuiDataGrid-columnHeaderTitle': {
          fontWeight: 400,
          color: 'text.secondary',
        },
        '.MuiDataGrid-footerContainer': {
          border: 'none',
          display: (disablePagination || rows.length === 0) && 'none',
        },
        '.MuiDataGrid-cell': {
          border: 'none',
          color: 'text.secondary',
          '&:focus': {
            outline: 'none',
          },
          '&:first-of-type': {
            pl: 3,
          },
        },
        '.MuiDataGrid-row': {
          cursor: 'pointer',
          borderBottom: '1px solid',
          borderColor: 'background.tertiary',
        },
        '.MuiTablePagination-root': {
          width: '100%',
          mr: 'auto',
        },
        '.MuiToolbar-gutters': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.MuiTablePagination-displayedRows': {
          mr: 'auto',
        },
        '.MuiTablePagination-spacer': {
          display: 'none',
        },
        '.MuiDataGrid-selectedRowCount': {
          flexShrink: 0,
        },
        '.MuiDataGrid-virtualScroller': {
          overflow: 'visible',
          overflowX: 'hidden',
          borderRadius: '0 !important',
        },
        '.MuiDataGrid-main': {
          overflowX: 'auto',
        },
        '.MuiDataGrid-columnHeaderTitleContainerContent': {
          flexGrow: 1,
          maxWidth: '200px',
        },
        ...sx,
      }}
      columns={columns}
      rows={rows}
      {...otherProps}
    />
  )
}
