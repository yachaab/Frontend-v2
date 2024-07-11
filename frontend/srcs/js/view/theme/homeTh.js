export const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(`
    //  @font-face {
    //     font-family: "P2";
    //     src: local('../src/font/P2.ttf'),
    //     url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap') format("truetype");
    //   }
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    nav {
        font-family: "P2" !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
    }
    nav a {
        font-family: "P2" !important;
        color: #fff !important;
        text-decoration: none;
    }
    .home-buttons {
        width: fit-content;
        text-align: center;
        text-decoration: none;
        border-radius: 6px;
        outline: none;
        border: none;
        color: #fff;
        font-size: 12px;
        background: rgb(190, 60, 237) !important;
        background: linear-gradient(90deg,
                rgba(190, 60, 237, 1) 43%,
                rgb(158, 165, 179) 100%) !important;
    }
    .discover-btn {
        font-family: "P2" !important;
        padding: 15px 80px !important;
        background: none;
        font-size: 14px;
    }

    .login-btn
    {
        font-family: "P2" !important;
        padding: 8px 30px !important;
        background: none;
        font-size: 12px;
    }

    .home {
        font-family: "P2" !important;
        width: 80%;
        height: calc(100vh - 100px);
        color: #fff;
        display: flex;
        flex-direction: column;
        row-gap: 8%;
        justify-content: center;
    }
`);