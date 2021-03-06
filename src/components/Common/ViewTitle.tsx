import React from 'react';
import {
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    viewTitle: {
        marginBottom: theme.spacing(2),
    },
}));

interface ViewTitleProps {
    title: string;
};

const ViewTitle: React.FunctionComponent<ViewTitleProps> = ({title}) => {
    const classes = useStyles();

    return (
        <Typography variant="h6" noWrap className={classes.viewTitle} data-test-id="view-title" >
            {title}
        </Typography>
    );
}

export default ViewTitle;
