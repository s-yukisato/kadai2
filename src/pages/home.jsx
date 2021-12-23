import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from "../components/Footer"

import Shop from "../images/mise1.jpg";


export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={Shop} alt="Shop" />
            <Box>
                <h4>当店について</h4>
                <p>当店は、しちりんを使った本格炭火焼肉店です。</p>
                <p>炭火焼肉でも煙などの排気には最新鋭の換気システムを導入しています。</p>
                <p>オーダーは、タッチパネルから行ってください。</p>
                <p>会計は、キャッシュレス歓迎、キャッシュレスの場合は１０％オフ</p>
            </Box>
            <Footer />
        </Box>
    );
}