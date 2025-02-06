body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
    font-family: Arial, sans-serif;
}

.container {
    height: 300vh; /* 3 seções, cada uma com 100vh */
}

.secao {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    position: sticky;
    top: 0;
    transition: opacity 0.5s ease-in-out;
}

.secao1 {
    background-color: #ff4757;
}

.secao2 {
    background-color: #2ed573;
}

.secao3 {
    background-color: #1e90ff;
}

h1 {
    font-size: 3em;
    margin: 0;
}

p {
    font-size: 1.5em;
    margin: 10px 0 0;
}
