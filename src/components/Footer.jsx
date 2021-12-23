import * as React from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Logo from '../images/ushi.png'

import Copyright from './Copyright'


const CGrid = ({ children }) => (
    <Grid
        item
        textAlign="center"
        xs={12}
        sm={6}
    >
        {children}
    </Grid>
)

const listItems = [
    {
        icon: <LocationOnIcon />,
        content: "場所   〒000-0000 焼肉市美食町1-2-3"
    }
    , {
        icon: <PhoneIcon />,
        content: "電話番号 000-456-7890"
    },
    {
        icon: <EmailIcon />,
        content: "メール   info@yakiniki.umai.up"
    }
]


const Footer = React.memo(() => {
    return (
        <>
            <Grid
                container
                justifyContent="center"
                sx={{ bgcolor: 'rgba(147, 149, 151, 0.8)' }}
            >
                <CGrid>
                    <img src={Logo} sx={{ padding: '20px' }} width={150} height={150} alt="Logo" />
                </CGrid>

                <CGrid>
                    {listItems.map(listItem => (
                        <List>
                            <ListItem key={listItem.content}>
                                {listItem.icon}
                                <Typography variant="h6">
                                    {listItem.content}
                                </Typography>
                            </ListItem>
                        </List>
                    ))}
                </CGrid>
                <Copyright />
            </Grid>
        </>
    )
});

export default Footer;