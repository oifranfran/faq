<header class="header">
    <div class="header-text">
        <h1 class="main-title">FAQ</h1>
        <h2 class="subtitle">Aqui você encontra todas as informações sobre as aulas onLIVE!</h2>
        <div class="arrow-down"></div>
    </div>
    <a href="https://instagram.com/oifranfran" target="_blank">
        <h3 class="tagline">@oifranfran</h3>
    </a>
</header>

<style>
.header {
    text-align: center;
    width: 100%;
    margin: -20px auto 80px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header > * {
    width: 50%;
}

.header-text {
    background-color: #223452;
    margin: 0;
    padding: 20px;
    width: 350px;
}

.arrow-down {
    width: 0;
    height: 0;
    margin-top: -1px;
    transform: translate(135px, 60px) scale(8.8,3);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #223452;
}

.main-title, .subtitle {
    margin: 0;
    color: white;
}

.main-title {
    font-family: 'Teko', sans-serif;
    font-size: 5rem;
    font-weight: 600;
    text-transform: uppercase;
}

.subtitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 200;
}

.tagline {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin: 20px 0 0;
    color: #223452;
    text-transform: uppercase;
}

@media only screen and (min-width: 968px) {
  .header {
    max-width: 968px;
  }
}

@media only screen and (max-width: 800px) {
    .header {
        display: block;
    }

    .header-text {
        margin: auto;
    }

    .tagline {
        margin-top: 80px;
    }
}
</style>