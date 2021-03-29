import React, { useState, useCallback, useEffect } from 'react';
import {
   makeStyles,
   Grid,
   Typography,
   withStyles,
   Link,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   colors
} from '@material-ui/core';
import { fade } from "@material-ui/core/styles/colorManipulator";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import clsx from 'clsx';
import initialData from 'src/data/statsSite';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root:{
    marginBottom:100,
  },
  table: {

  },
  icon:{
    color:colors.grey[300],
    textTransform:'none',
    "&:hover": {
      color:colors.lightBlue[400],
      backgroundColor: fade(colors.lightBlue[400], theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }
  },
  link:{
    "& .MuiLink-underlineHover":{
      textDecoration:"none !important"
    }
  },
}));

export default function AboutSite() {
  const classes = useStyles();
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const resCommit = await fetch(
      'https://api.github.com/repos/Firmwave11/web-profile-rama/commits',
    );
    const resDataCommit= await resCommit.json();
    setResponseData(
      initialData.map(field=>{
        if(field.key === "commit"){
          field.value = resDataCommit.length
        }
        return field
      })
    )

    const res = await fetch(
      'https://api.github.com/repos/Firmwave11/web-profile-rama',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );

  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const month = [
    'Januari', 'Februari', 'Maret',
    'April', 'Mei', 'Juni', 'Juli',
    'Agustus', 'September', 'Oktober',
    'November', 'Desember'
  ];

  const convertDate = (valueDate) =>{
    const date = new Date(valueDate)

    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().length === 2? `${date.getMinutes()}`:`0${date.getMinutes()}`}`;
  }

  return (
    <Grid 
    container 
    spacing={3}
    className={classes.root}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <GlitchSquiggly onHover={true}>
          <Typography variant="h6">
            About Site 
          </Typography>
        </GlitchSquiggly>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <TableContainer >
          <Table className={classes.table} aria-label="simple table" >
            <TableBody >
              {data.map((item) => (
                <StyledTableRow key={item.label}>
                  <TableCell align="left">
                    {item.label}
                  </TableCell>
                  <TableCell align="left">
                    {item.link?
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" color="inherit" className={clsx(classes.link,classes.icon)}  >
                        {item.key ==="pushed_at"?convertDate(item.value):item.value}
                    </Link>
                    :
                      item.value
                    }
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}