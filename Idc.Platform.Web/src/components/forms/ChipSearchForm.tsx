import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Box, TextField, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// Define the form validation schema using Zod
const searchSchema = z.object({
  chipNumber: z
    .string()
    .min(1, 'Chip number is required')
    .regex(/^[0-9]{9,15}$/, 'Chip number must be 9-15 digits')
});

// Type for the form values
type SearchFormValues = z.infer<typeof searchSchema>;

// Props for the component
interface ChipSearchFormProps {
  onSearch: (chipNumber: string) => void;
}

// Styled components
const SearchFormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
    : '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const SearchInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  fontSize: '1.25rem',
}));

/**
 * ChipSearchForm component for searching animal chip numbers
 */
const ChipSearchForm: React.FC<ChipSearchFormProps> = ({ onSearch }) => {
  const theme = useTheme();
  
  // Initialize form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      chipNumber: ''
    }
  });

  // Handle form submission
  const onSubmit = (data: SearchFormValues) => {
    onSearch(data.chipNumber);
  };

  return (
    <SearchFormContainer>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInputContainer>
          <TextField
            {...register('chipNumber')}
            label="Enter Chip Number"
            variant="outlined"
            fullWidth
            error={!!errors.chipNumber}
            helperText={errors.chipNumber?.message}
            placeholder="15 digits"
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*'
            }}
            sx={{
              '& .MuiInputLabel-root': {
                color: theme.palette.text.secondary,
              },
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{
              height: '56px',
              minWidth: '56px',
              borderRadius: '8px',
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              }
            }}
          >
            <SearchIcon />
          </Button>
        </SearchInputContainer>
      </form>
    </SearchFormContainer>
  );
};

export default ChipSearchForm;
