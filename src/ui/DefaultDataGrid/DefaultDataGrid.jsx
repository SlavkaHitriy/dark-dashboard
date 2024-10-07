import React, { useCallback } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

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

  // const columnsFiltered = React.useMemo(
  //   () => columns.filter((column) => columns.includes(column.field)),
  //   [columns],
  // );

  return (
    <DataGrid
      onPaginationModelChange={handlePageSizeChange}
      initialState={{
        pagination: { paginationModel: { pageSize: pageItems || 5 } },
      }}
      onRowClick={onRowClick}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      disable
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          csvOptions: { disableToolbarButton: true },
          printOptions: { disableToolbarButton: true },
          quickFilterProps: { debounceMs: 200 },
        },
      }}
      slots={{
        columnMenuIcon: () => null,
        toolbar: GridToolbar,
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
          '&--last .MuiDataGrid-columnSeparator': {
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
          borderRadius: '0 !important',
          minHeight: '100px',
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
