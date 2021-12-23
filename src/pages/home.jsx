import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from "../components/Footer"

import Shop from "../images/mise1.jpg";


export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={Shop} alt="Shop" />
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <Typography variant="h1" sx={{padding:"20px"}}>当店について</Typography>
                <Typography variant="p">当店は、しちりんを使った本格炭火焼肉店です。</Typography>
                <Typography variant="p">炭火焼肉でも煙などの排気には最新鋭の換気システムを導入しています。</Typography>
                <Typography variant="p">オーダーは、タッチパネルから行ってください。</Typography>
                <Typography variant="p">会計は、キャッシュレス歓迎、キャッシュレスの場合は１０％オフ</Typography>
            </Box>
            <Footer />
        </Box>
    );
}