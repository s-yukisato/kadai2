import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import buta_horumon from '../images/buta_horumon.jpg'
import buta_tan from '../images/buta_tan.jpg'
import karubi from '../images/karubi.jpg'
import koudai_karubi from '../images/koudai_karubi.jpg'
import harami from '../images/harami.jpg'
import tori_momo from '../images/tori_momo.jpg'
import tori_yagen from '../images/tori_yagen.jpg'

import Footer from '../components/Footer'



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const items = [
    [
        {
            title: "やみつき豚ホルモン",
            src: buta_horumon,
            description: "この食感クセになる"
        },
        {
            title: "トンタン塩",
            src: buta_tan,
            description: "コリコリ食感を楽しむ。牛タンでなくても満足できます。"
        },
    ],
    [
        {
            title: "カルビ",
            src: karubi,
            description: "牛肉のうまみ、甘味と香りが楽しめます。最も人気のある定番メニューのひとつ"
        },
        {
            title: "工大カルビ",
            src: koudai_karubi,
            description: "骨と骨の間の旨味の詰まった部位を丁寧にカット"
        },
        {
            title: "ハラミ",
            src: harami,
            description: "国民のアイドル！お店一押し"
        },
    ],
    [
        {
            title: "鶏もも",
            src: tori_momo,
            description: "お子様にも人気。やわらかくてジューシー"
        },
        {
            title: "ハラミ付きヤゲン",
            src: tori_yagen,
            description: "ジューシーなハラミがついた、コリコリの軟骨"
        },
    ]
]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Menu() {
    const [content, setContent] = React.useState({})
    const [opend, setOpend] = React.useState(false);

    const handleClickOpend = ([i, j]) => (e) => {
        setOpend(true);
        setContent(items[i][j])
    };

    const handleClosed = () => {
        setOpend(false);
    };

    return (
        <>
            <DrawerHeader />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: "30px" }}>
                <Grid container justifyContent="center">
                    {items.map((goods, i) => (
                        <Grid container key={i} sx={{ paddingBottom: "50px" }}>
                            {goods.map((good, j) => (
                                <Grid item key={i * j} sx={{ paddingLeft: "30px" }} button onClick={handleClickOpend([i, j])}>
                                    <h3>{good.title}</h3>
                                    <img src={good.src} alt="" width="200px" />
                                </Grid>
                            ))}
                            <Divider />
                        </Grid>
                    ))}
                </Grid>

                <div>
                    <Dialog
                        open={opend}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClosed}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{content?.title}</DialogTitle>
                        <DialogContent>
                            <Box>
                                <img src={content?.src} alt={content.title} width="200px" />
                                <h5>{content?.description}</h5>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClosed}>閉じる</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Box>
            <Footer />
        </>

    );
}