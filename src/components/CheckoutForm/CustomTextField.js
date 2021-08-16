import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({name, label, required}) => {
    const {control} =useFormContext();


    return (
        <Grid item xs={12} sm={6}>
            <Controller
            defaultValue=""
            control={control}
            name={name}
            render={({ field }) => (
            <TextField
                {...field}
                name={name}
                label={label}
                required={required}
                rules={{ required: true }}

                fullWidth
            />
        )}
            />
        </Grid>
    )
}

export default FormInput;
