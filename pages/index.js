// components
import HtmlHead from 'next/head';
import Page from '../components/Page.js';

export default function Home() {
    return <>
        <HtmlHead>
            <title>Animals</title>
            <link href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap" rel="stylesheet" /> 
        </HtmlHead>
        <Page />
    </>;
}