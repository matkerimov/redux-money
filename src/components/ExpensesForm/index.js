import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import {DesktopDatePicker} from "@mui/lab";
import {useFormik} from 'formik';
import * as Yup from 'yup';


const ExpensesForm = () => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const formik = useFormik({
        initialValues: {
            date: '',
            title: '',
            amount: '',
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Required'),
            title: Yup.string().required('Required'),
            amount: Yup.string().required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            resetForm()
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>

            <Box sx={{marginTop: "40px", marginBottom: "40px"}}>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={formik.values.date}
                            onChange={(data) => setValue(data)}
                            renderInput={(params) =>
                                <TextField {...params}
                                           name="date"
                                           variant="standard"
                                           value={value}
                                           sx={{width: "100%"}}
                                           onChange={formik.handleChange}
                                           error={formik.touched.date && Boolean(formik.errors.date)}
                                           helperText={formik.touched.date && formik.errors.date}
                                />}
                        />

                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="title"
                            name={"title"}
                            label="Title"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}/>

                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="amount"
                            name="amount"
                            label="Amount"
                            variant="standard"
                            sx={{width: "100%"}}
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            error={formik.touched.amount && Boolean(formik.errors.amount)}
                            helperText={formik.touched.amount && formik.errors.amount}
                        />

                    </Grid>
                </Grid>
                <Button variant="contained" type="submit"
                        sx={{display: "block", marginLeft: "auto", marginTop: "20px"}}>add</Button>

            </Box>
        </form>
    );
};

export default ExpensesForm;