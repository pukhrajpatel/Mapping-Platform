import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  // createRow,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { fakeData } from './makeData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { COLORS } from '../Assets/Style/Colors';

const Example = (props) => {
  const [validationErrors, setValidationErrors] = useState({});
  const AC = props.propt.AC;
  const state = props.propt.state;
  const Year = props.propt.Year;
  const ElType = props.propt.ElType;

  const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'id',
      //   header: 'Id',
      //   enableEditing: false,
      //   size: 80,
      // },
      // {
      //   accessorKey: 'email',
      //   header: 'Email',
      //   muiEditTextFieldProps: {
      //     type: 'email',
      //     required: true,
      //     error: !!validationErrors?.email,
      //     helperText: validationErrors?.email,
      //     //remove any previous validation errors when user focuses on the input
      //     onFocus: () =>
      //       setValidationErrors({
      //         ...validationErrors,
      //         email: undefined,
      //       }),
      //   },
      // },
      {
        accessorKey: 'ac',
        header: 'AC No.',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.ac,
          helperText: validationErrors?.ac,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              ac: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'mandal',
        header: 'Mandal',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.mandal,
          helperText: validationErrors?.mandal,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              mandal: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'vId',
        header: 'Village ID',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.vId,
          helperText: validationErrors?.vId,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              vId: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'vName',
        header: 'Village Name',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.vName,
          helperText: validationErrors?.vName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              vName: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'loc',
        header: 'Locality',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.loc,
          helperText: validationErrors?.loc,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              loc: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'booths',
        header: 'Booths',
        muiEditTextFieldProps: {
          type: 'email',
          required: true,
          error: !!validationErrors?.booths,
          helperText: validationErrors?.booths,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              booths: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
    ],
    [validationErrors],
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveUser = async ({ values, table }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      deleteUser(row.original.id);
    }
  };
  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: 'row', // ('modal', and 'custom' are also available)
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    enablePagination: false,
    enableStickyHeader: true,
    
    // muiColumnActionsButtonProps: {
    //   sx: {
    //     color: COLORS.bgColor,
    //   }
    // },

    muiTableHeadCellProps: {
      sx: {
        backgroundColor:COLORS.bgColor,
      },
    },

    getRowId: (row) => row.id,
    muiToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: '500px',
        width: '100vw',
        overflowX: 'hidden',
      },
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <div>
        <Button variant="contained" onClick={() => {table.setCreatingRow(true)}}
        style = {{backgroundColor:COLORS.bgColor, marginRight:'20px'}}>
          Add New Entry
        </Button>
        <Button variant="contained" onClick={() => {}}
        style = {{backgroundColor:COLORS.bgColor}}>
          Save Work
        </Button>
      </div>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return (<div>
    <p>{state + " " +AC+ " " +Year+ " " +ElType}</p>
    <MaterialReactTable table={table} />
  </div>)
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(['users'], (prevUsers) => [
        ...prevUsers,
        {
          ...newUserInfo,
          id: (Math.random() + 1).toString(36).substring(7),
        },
      ]);
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo) => {
      queryClient.setQueryData(['users'], (prevUsers) =>
        prevUsers?.map((prevUser) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser,
        ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId) => {
      queryClient.setQueryData(['users'], (prevUsers) =>
        prevUsers?.filter((user) => user.id !== userId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

function ExampleWithProviders(props){
  //Put this with your other react-query providers near root of your app
  return (
  <QueryClientProvider client={queryClient}>
    <Example propt = {props} />
  </QueryClientProvider>
  )
}

export default ExampleWithProviders;

const validateRequired = (value) => !!String(value).length;
const validateInteger = (value) => /^[0-9]+$/.test(String(value));
const validateBooths = (value) => /^[0-9,]+$/.test(String(value));
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

function validateUser(user) {
  return {
    ac: !validateInteger(user.ac) || !validateRequired(user.ac)
      ? 'AC number must be integer [Required]'
      : '',
    mandal: !validateRequired(user.mandal)
      ? 'Mandal is Required'
      : '',
    vId: !validateInteger(user.vId) || !validateRequired(user.vId)
      ? 'Village ID must be integer [Required]'
      : '',
    
    vName: !validateRequired(user.vName)
      ? 'Village Name is Required'
      : '',
    loc: !validateRequired(user.loc)
      ? 'Locality is Required'
      : '',
    booths: !validateRequired(user.booths) || !validateBooths(user.booths)
      ? 'Booths can only contain Numbers and Comma [Required]'
      : '',
  };
}
